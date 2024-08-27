<script setup>
import { ref } from "vue";
import Card from "./Card.vue";

const projectComponent = ref(null);

const projectData = ref([]);
const filterProjectData = ref([]);
const projectDataStatus = ref("project");
const { data: project } = await useFetch("/api/project");

projectData.value = project.value.data;
filterProjectData.value = projectData.value.filter(
	(item) => item.type === projectDataStatus.value
);

const projectListHandle = (type) => {
	projectDataStatus.value = type;
	filterProjectData.value = projectData.value.filter(
		(item) => item.type === type
	);
};

defineExpose({
	projectComponent,
});
</script>

<template>
	<!--=================== Project ====================-->
	<section ref="projectComponent" id="projectComponent" class="section project">
		<div class="container">
			<div class="section__header">
				<h2 class="section__title">PROJECT</h2>
			</div>
			<div class="project__info">
				<a
					class="project__btn h4"
					:class="{ active: projectDataStatus === 'project' }"
					@click="projectListHandle('project')"
					>專案</a
				>
				<a
					class="project__btn h4"
					:class="{ active: projectDataStatus === 'side-project' }"
					@click="projectListHandle('side-project')"
					>Side Project</a
				>
				<TransitionGroup name="tab-change">
					<template v-for="cardItem in filterProjectData" :key="cardItem.id">
						<section class="project__section" ref="projectSectionRefs">
							<Card :cardItem="cardItem" />
						</section>
					</template>
				</TransitionGroup>
			</div>
		</div>
	</section>
</template>

<style>
.tab-change-enter-active {
	transition: all 0.3s ease-in;
}

.tab-change-leave-active {
	transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.tab-change-enter-from,
.tab-change-leave-to {
	transform: translateY(20px);
	opacity: 0;
}
</style>
