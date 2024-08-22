<script setup>
import { ref } from "vue";
import Skills from "./Skills.vue";
import Experience from "./Experience.vue";

const aboutComponent = ref(null);

defineExpose({
	aboutComponent,
});
</script>

<template>
	<!--=================== About ====================-->
	<section ref="aboutComponent" id="aboutComponent" class="section about">
		<div class="container">
			<div class="section__header">
				<h2 class="section__title">ABOUT</h2>
			</div>
			<div class="about__content">
				<div class="about__info">
					<h4 class="about__info__title h4">EXPERIENCE</h4>
					<Experience />
				</div>
				<div class="about__info">
					<h4 class="about__info__title2 h4">SKILLS</h4>
					<Skills />
				</div>
			</div>
		</div>
	</section>
</template>
