<script setup>
import { ref, onMounted } from "vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Project from "@/components/Project.vue";
const { $ScrollReveal } = useNuxtApp();

const hero = ref(null);
const about = ref(null);
const project = ref(null);
const header = ref(null);

const navBtnActive = ref(false);
const navMenuActive = ref(false);
const navToggleHandle = () => {
	navBtnActive.value = !navBtnActive.value;
	navMenuActive.value = !navMenuActive.value;
};

const scrollToTarget = (targetRef, targetStr) => {
	const targetChildStr = targetStr + "Component";
	const targetElement = targetRef[targetChildStr];
	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		navToggleHandle();
	}
};

const scrollHandle = () => {
	const wsY = window.scrollY;
	// const heroOffsetTop = hero.value.heroComponent.offsetTop;
	const offsetY = 100;
	const aboutOffsetTop = about.value.aboutComponent.offsetTop - offsetY;
	const projectOffsetTop = project.value.projectComponent.offsetTop - offsetY;
	const targetHeaderMap = {
		hero: header.value.headerHero,
		about: header.value.headerAbout,
		project: header.value.headerProject,
	};
	let targetSection = "";
	let targetHeader = "";
	if (wsY > 0 && wsY < aboutOffsetTop) {
		targetSection = "hero";
		targetHeader = targetHeaderMap[targetSection];
	} else if (wsY >= aboutOffsetTop && wsY < projectOffsetTop) {
		targetSection = "about";
		targetHeader = targetHeaderMap[targetSection];
	} else if (wsY >= projectOffsetTop) {
		targetSection = "project";
		targetHeader = targetHeaderMap[targetSection];
	}

	if (targetHeader) {
		targetHeader.classList.add("active");

		const otherHeaders = Object.values(targetHeaderMap).filter(
			(headerItem) => headerItem !== targetHeader
		);
		otherHeaders.forEach((headerItem) => {
			headerItem.classList.remove("active");
		});
	}
};

onMounted(() => {
	window.addEventListener("scroll", scrollHandle, true);
});

onUnmounted(() => {
	$ScrollReveal().destroy();
	window.removeEventListener("scroll", scrollHandle, true);
});
</script>

<template>
	<div class="index">
		<Header
			ref="header"
			:hero="hero"
			:about="about"
			:project="project"
			:scrollToTarget="scrollToTarget"
			:navBtnActive="navBtnActive"
			:navMenuActive="navMenuActive"
			:navToggleHandle="navToggleHandle"
		/>
		<Hero ref="hero" />
		<About ref="about" />
		<Project ref="project" />
		<Footer />
	</div>
</template>
