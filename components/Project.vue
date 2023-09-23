<script setup>
import { ref } from "vue";

const projectComponent = ref(null);

defineExpose({
	projectComponent,
});
</script>

<template>
	<!--=================== Project ====================-->
	<section ref="projectComponent" id="projectComponent" class="section project">
		<div class="container">
			<div class="section__header">
				<h2 class="section__title">project</h2>
			</div>
			<div class="project__content">...</div>
		</div>
	</section>
</template>

<style></style>
