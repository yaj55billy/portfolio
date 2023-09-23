<script setup>
import { ref } from "vue";

const skillComponent = ref(null);

defineExpose({
	skillComponent,
});
</script>

<template>
	<!--=================== skill ====================-->
	<section ref="skillComponent" id="skillComponent" class="section skill">
		<div class="container">
			<div class="section__header">
				<h2 class="section__title">skill</h2>
			</div>
		</div>
	</section>
</template>
