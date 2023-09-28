<script setup>
import { ref } from "vue";

const heroComponent = ref(null);
const multiple = ref(25);
const heroImgTransform = ref("translate3d(0px, 0px, 0px) rotate(0.0001deg)");
const heroImgRef = ref(null);

const heroImgMouseMove = (event) => {
	const imgElement = heroImgRef.value.getBoundingClientRect();
	const calcX =
		-(event.clientX - imgElement.x - imgElement.width / 2) / multiple.value;
	const calcY =
		-(event.clientY - imgElement.y - imgElement.height / 2) / multiple.value;
	heroImgTransform.value = `translate3d(${calcX}px, ${calcY}px, 0px) rotate(0.0001deg)`;
};

const heroImgMouseLeave = () => {
	heroImgTransform.value = "translate3d(0px, 0px, 0px) rotate(0.0001deg)";
};

defineExpose({
	heroComponent,
});
</script>

<template>
	<!--=================== Hero ====================-->
	<section ref="heroComponent" id="heroComponent" class="section hero">
		<div class="container">
			<div class="hero__wrapper">
				<div
					class="hero__avatar"
					@mousemove="heroImgMouseMove"
					@mouseleave="heroImgMouseLeave"
				>
					<img
						src="~/assets/img/avatar.jpg"
						alt="Billy Ji"
						class="hero__img"
						ref="heroImgRef"
						:style="{ transform: heroImgTransform }"
					/>
				</div>
				<div class="hero__content">
					<h2 class="hero__title">Hi, I am Billy,<br />Front-End Developer.</h2>
					<p class="hero__description">
						在前端領域已有數年的開發經驗，熟悉如何與團隊配合、溝通，並協同製作出網站，目前也持續精進中。
					</p>
					<div class="hero__iconbox">
						<a
							href="https://github.com/yaj55billy"
							target="_blank"
							class="hero__icon"
							><Icon name="bxl:github"
						/></a>
						<a href="mailto:yaj55ushydna@gmail.com" class="hero__icon"
							><Icon name="bxl:gmail"
						/></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
