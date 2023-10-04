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

const scrollHandle = () => {
	const ws = window.scrollY;
	const heroOffsetTop = hero.value.heroComponent.offsetTop;
	const aboutOffsetTop = about.value.aboutComponent.offsetTop;
	const projectOffsetTop = project.value.projectComponent.offsetTop;
	const targetHeaderMap = {
		hero: header.value.headerHero,
		about: header.value.headerAbout,
		project: header.value.headerProject,
	};
	let targetSection = "";
	let targetHeader = "";
	console.log(ws);
	if (ws >= 0 && ws < aboutOffsetTop) {
		targetSection = "hero";
		targetHeader = targetHeaderMap[targetSection];
		console.log(targetSection);
		console.log(targetHeader);
	} else if (ws >= aboutOffsetTop && ws < projectOffsetTop) {
		targetSection = "about";
		targetHeader = targetHeaderMap[targetSection];
		console.log(targetSection);
		console.log(targetHeader);
	} else if (ws >= projectOffsetTop) {
		// 再優化
		targetSection = "project";
		targetHeader = targetHeaderMap[targetSection];
		console.log(targetSection);
		console.log(targetHeader);
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

	// if (ws >= 0 && ws < this.plan.offsetTop) {
	// 	this.banner.classList.add("is-active");
	// } else if (ws >= 0 && ws < this.experience.offsetTop) {
	// 	this.plan.classList.add("is-active");
	// } else if (ws > this.feature.offsetTop - 250 && ws < this.price.offsetTop) {
	// 	this.featureAd1.classList.add("is-active");
	// 	this.featureAd2.classList.add("is-active");
	// 	this.featureAd3.classList.add("is-active");
	// }

	// if (ws > 1800) {
	// 	this.price.classList.add("is-active");
	// }
};

onMounted(() => {
	window.addEventListener("scroll", scrollHandle, true);
});

onUnmounted(() => {
	window.removeEventListener("scroll", scrollHandle, true);
});

// let observer = ref(null);

// onMounted(() => {
// 	const targetToHeaderMap = {
// 		heroComponent: header.value.headerHero,
// 		aboutComponent: header.value.headerAbout,
// 		projectComponent: header.value.headerProject,
// 	};
// 	const observerCallback = (entries) => {
// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				const targetId = entry.target.id;
// 				console.log(entry.target);
// 				const targetHeader = targetToHeaderMap[targetId];
// 				if (targetHeader) {
// 					targetHeader.classList.add("active");

// 					const otherHeaders = Object.values(targetToHeaderMap).filter(
// 						(headerItem) => headerItem !== targetHeader
// 					);

// 					otherHeaders.forEach((headerItem) => {
// 						headerItem.classList.remove("active");
// 					});
// 				}
// 			}
// 		});
// 	};
// 	const observerOption = { threshold: 0.5 };

// 	observer.value = new IntersectionObserver(observerCallback, observerOption);

// 	observer.value.observe(hero.value.heroComponent);
// 	observer.value.observe(about.value.aboutComponent);
// 	observer.value.observe(project.value.projectComponent);
// });
// onUnmounted(() => {
// 	observer.value.disconnect();
// 	observer.value.unobserve(hero.value.heroComponent);
// 	observer.value.unobserve(about.value.aboutComponent);
// 	observer.value.unobserve(project.value.projectComponent);
// });
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
