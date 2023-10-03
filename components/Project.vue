<script setup>
import { ref, onMounted } from "vue";
import Card from "./Card.vue";

const projectComponent = ref(null);

const projectData = ref([]);
const filterProjectData = ref([]);
const projectDataStatus = ref("all");

const fetchProjectData = () => {
	// statusStore.isLoading = true;
	$fetch("/api/project", {
		method: "GET",
	})
		.then((res) => {
			projectData.value = res.data;
			filterProjectData.value = res.data;
		})
		.finally(() => {
			// statusStore.isLoading = false;
		});
};

const projectListHandle = (type) => {
	if (type === "all") {
		projectDataStatus.value = "all";
		filterProjectData.value = projectData.value;
	} else {
		projectDataStatus.value = type;
		filterProjectData.value = projectData.value.filter(
			(item) => item.type === type
		);
	}
};

onMounted(() => {
	fetchProjectData();
});

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
			<div class="project__content">
				<div class="project__info">
					<!-- <div class="project__info__header">
						<a
							class="project__info__btn h4"
							:class="{ active: projectDataStatus === 'all' }"
							@click="projectListHandle('all')"
							>全部</a
						>
						<a
							class="project__info__btn h4"
							:class="{ active: projectDataStatus === 'project' }"
							@click="projectListHandle('project')"
							>專案</a
						>
						<a
							class="project__info__btn h4"
							:class="{ active: projectDataStatus === 'side-project' }"
							@click="projectListHandle('side-project')"
							>作品</a
						>
					</div> -->
					<div class="project__info__main">
						<div class="project__info__list">
							<Card :filterProjectData="filterProjectData" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
