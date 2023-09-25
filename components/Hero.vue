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
					<h1 class="hero__title">Hi, I am Billy,<br />Front-End Developer.</h1>
					<p class="hero__description">
						哈囉，我是 Billy，一名持續精進的前端工程師。在前端領域已有 4
						年的開發經驗，並且熟悉如何與團隊配合、溝通，以製作出網站。
					</p>
				</div>
				<div class="hero__avatar">
					<img
						src="https://i.imgur.com/6uC6FLI.png"
						alt="Billy Ji"
						class="hero__img"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
