<script setup>
import { ref, onMounted } from "vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Project from "@/components/Project.vue";

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

let observer;

onMounted(() => {
	const targetToHeaderMap = {
		heroComponent: header.value.headerHero,
		aboutComponent: header.value.headerAbout,
		projectComponent: header.value.headerProject,
	};
	const observerCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const targetId = entry.target.id;
				console.log(entry.target);
				const targetHeader = targetToHeaderMap[targetId];
				if (targetHeader) {
					targetHeader.classList.add("active");

					const otherHeaders = Object.values(targetToHeaderMap).filter(
						(headerItem) => headerItem !== targetHeader
					);

					otherHeaders.forEach((headerItem) => {
						headerItem.classList.remove("active");
					});
				}
			}
		});
	};
	const observerOption = { threshold: 0.5 };

	observer = new IntersectionObserver(observerCallback, observerOption);
	observer.observe(hero.value.heroComponent);
	observer.observe(about.value.aboutComponent);
	console.log(about.value.aboutComponent);
	console.log(project.value.projectComponent);
	observer.observe(project.value.projectComponent);
});
onUnmounted(() => {
	observer.disconnect();
	observer.unobserve(hero.value.heroComponent);
	observer.unobserve(about.value.aboutComponent);
	observer.unobserve(project.value.projectComponent);
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
		<Footer ref="footer" />
	</div>
</template>
