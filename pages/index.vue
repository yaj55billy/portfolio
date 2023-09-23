<script setup>
import { ref, onMounted } from "vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skill from "@/components/Skill.vue";
import Experience from "@/components/Experience.vue";
import Project from "@/components/Project.vue";

const hero = ref(null);
const about = ref(null);
const skill = ref(null);
const experience = ref(null);
const project = ref(null);
const header = ref(null);

const scrollToTarget = (targetRef, targetStr) => {
	const targetChildStr = targetStr + "Component";
	const targetElement = targetRef[targetChildStr];
	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
};

onMounted(() => {
	const observerCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const targetId = entry.target.id; // 取得區塊 id
				switch (targetId) {
					case "heroComponent":
						header.value.headerHero.classList.add("active");
					case "aboutComponent":

					case "skillComponent":

					case "experienceComponent":

					case "projectComponent":
				}
			} else {
			}
		});
	};
	const observerOption = { threshold: 0.75 };

	const observer = new IntersectionObserver(observerCallback, observerOption);
	observer.observe(hero.value.heroComponent);
	observer.observe(about.value.aboutComponent);
	observer.observe(skill.value.skillComponent);
	observer.observe(experience.value.experienceComponent);
	observer.observe(project.value.projectComponent);
});
onUnmounted(() => {
	observer.unobserve(hero.value.heroComponent);
	observer.unobserve(about.value.aboutComponent);
	observer.unobserve(skill.value.skillComponent);
	observer.unobserve(experience.value.experienceComponent);
	observer.unobserve(project.value.projectComponent);
});
</script>

<template>
	<div class="index">
		<Header
			ref="header"
			:hero="hero"
			:about="about"
			:skill="skill"
			:experience="experience"
			:project="project"
			:scrollToTarget="scrollToTarget"
		/>
		<Hero ref="hero" />
		<About ref="about" />
		<Skill ref="skill" />
		<Experience ref="experience" />
		<Project ref="project" />
		<Footer />
	</div>
</template>
