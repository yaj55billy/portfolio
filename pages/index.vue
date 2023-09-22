<!-- <script>
import { ref, onMounted } from "vue";
import Skill from "@/components/Skill.vue";
export default {
	components: {
		Skill,
	},
	setup() {
		const hero = ref(null);
		const about = ref(null);
		const skill = ref(null);

		const scrollToTarget = () => {
			if (skill.value) {
				skill.value.$refs.skillComponent.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		};
		onMounted(() => {
			// console.log(skill.value.$refs);
			console.log(skill.value);
		});
		return {
			hero,
			about,
			skill,
			scrollToTarget,
		};
	},
};
</script> -->
<script setup>
import { ref, onMounted } from "vue";
import Skill from "@/components/Skill.vue";

const hero = ref(null);
const about = ref(null);
const skill = ref(null);

const scrollToTarget = (targetRef, targetStr) => {
	console.log(targetStr);
	const xxx = targetStr + "Component";
	// console.log(targetRef["xxx"]);

	const targetComponent = skill.value.skillComponent;
	if (skill.value) {
		targetComponent.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
};
onMounted(() => {
	// console.log(skill.value.skillComponent);
});
</script>

<template>
	<div class="index">
		<button class="btn h2" @click="scrollToTarget(hero, 'hero')">
			到 hero 按鈕
		</button>
		<button class="btn h2" @click="scrollToTarget(about, 'about')">
			到 about 按鈕
		</button>
		<button class="btn h2" @click="scrollToTarget(skill, 'skill')">
			到 skill 按鈕
		</button>
		<Header />
		<Hero ref="hero" />
		<About ref="about" />
		<Skill ref="skill" />
		<Experience />
		<Project />
		<Footer />
	</div>
</template>
