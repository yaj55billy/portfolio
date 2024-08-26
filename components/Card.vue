<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// const { $ScrollReveal } = useNuxtApp();
defineProps({
	cardItem: {
		type: Object,
	},
});
onMounted(() => {
	// $ScrollReveal().reveal(".cardIn", {
	// 	duration: 600,
	// 	easing: "ease-in",
	// 	// viewOffset: {
	// 	// 	top: 60,
	// 	// },
	// });
});

onUnmounted(() => {
	// $ScrollReveal().clean(".cardIn");
});
</script>
<template>
	<div class="card cardIn">
		<div class="card__header">
			<carousel :items-to-show="1">
				<slide v-for="slide in cardItem.pics" :key="slide.id">
					<div
						class="card__img"
						:style="{ backgroundImage: 'url(' + slide.path + ')' }"
					></div>
				</slide>
				<template #addons="{ slidesCount }">
					<Navigation v-if="slidesCount > 1" />
				</template>
			</carousel>
		</div>
		<div class="card__main">
			<h5 class="card__title">{{ cardItem.title }}</h5>
			<ul class="card__tags">
				<li class="card__tag" v-for="tag in cardItem.tags" :key="tag.id">
					#{{ tag.value }}
				</li>
			</ul>
			<p class="card__content">{{ cardItem.content }}</p>
			<div class="card__linkwrap">
				<a
					class="card__link"
					:class="{ none: cardItem.link === 'END' }"
					:href="cardItem.link"
					target="_blank"
					>網站連結</a
				>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-enter-active {
	transition: all 0.5s ease;
}
.card-leave-active {
	transition: all 0.25s ease;
}

.card-enter-from,
.card-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
</style>
