<script setup>
import { ref } from "vue";

const experienceComponent = ref(null);

defineExpose({
	experienceComponent,
});
</script>

<template>
	<!--=================== Experience ====================-->
	<section
		ref="experienceComponent"
		id="experienceComponent"
		class="section experience"
	>
		<div class="container">
			<div class="section__header">
				<h2 class="section__title">Experience</h2>
			</div>
			<div class="experience__content">...</div>
		</div>
	</section>
</template>
