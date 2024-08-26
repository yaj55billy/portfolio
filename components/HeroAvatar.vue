<script setup>
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
</script>

<template>
	<div
		class="hero__avatar"
		@mousemove="heroImgMouseMove"
		@mouseleave="heroImgMouseLeave"
	>
		<!-- ref="heroAvatarRef" -->
		<img
			src="~/assets/img/avatar.jpg"
			alt="Billy Ji"
			class="hero__img"
			ref="heroImgRef"
			:style="{ transform: heroImgTransform }"
		/>
	</div>
</template>
