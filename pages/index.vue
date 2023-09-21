<script setup>
const hero = ref(null);
const about = ref(null);
const skill = ref(null);

// const scrollToTarget = (target) => {
// 	const targetRef = target.value;
// 	console.log($refs);

// 	if (targetRef) {
// 		targetRef.scrollIntoView({
// 			behavior: "smooth", // 平滑滚动
// 			block: "start", // 滚动到目标元素的顶部
// 		});
// 	}
// };
onMounted(() => {});
</script>

<template>
	<div class="index">
		<!-- <button class="btn h1" @click="scrollToTarget('hero')">到 hero 按鈕</button>
		<button class="btn h1" @click="scrollToTarget('about')">
			到 about 按鈕
		</button>
		<button class="btn h1" @click="scrollToTarget('skill')">
			到 skill 按鈕
		</button> -->
		<Header />
		<Hero ref="hero" />
		<About ref="about" />
		<Skill ref="skill" />
		<Experience />
		<Project />
		<Footer />
	</div>
</template>

<style scoped></style>
