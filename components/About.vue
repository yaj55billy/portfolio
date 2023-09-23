<script setup>
import { ref } from "vue";

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
				<h2 class="section__title">About</h2>
			</div>
			<div class="about__wrapper">
				<div class="about__content">
					<h3 class="about__title">
						I'm a Professional and Experienced Web Developer.
					</h3>
					<p class="about__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						voluptates ad numquam,officiis accusamus similique voluptate! Sint
						corrupti soluta, expedita dolores. Similique odit officia quisquam
						itaque, distinctio quas odio dolor porro corporis facilis.
					</p>
					<!-- <a href="#" class="btn btn--primary">Know More</a> -->
				</div>
			</div>
		</div>
	</section>
</template>
