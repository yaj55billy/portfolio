<script setup>
import { ref } from "vue";

const heroComponent = ref(null);

defineExpose({
	heroComponent,
});
</script>

<template>
	<!--=================== Hero ====================-->
	<section ref="heroComponent" id="heroComponent" class="section hero">
		<div class="container">
			<div class="hero__wrapper">
				<div class="hero__content">
					<h1 class="hero__title">Hi, I am Billy,<br />Web Developer.</h1>
					<p class="hero__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						voluptates ad numquam, officiis accusamus similique voluptate! Sint
						corrupti soluta, expedita dolores.
					</p>
				</div>
				<div class="hero__avatar">
					<!-- <img src="assets/img/hero.jpg" alt="Billy Ji" class="hero__img" /> -->
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
