<script setup>
import { ref, onMounted } from "vue";

const projectComponent = ref(null);

const projectData = ref([]);

const fetchProjectData = () => {
	// statusStore.isLoading = true;
	$fetch("/api/project", {
		method: "GET",
	})
		.then((res) => {
			console.log(res);
			projectData.value = res.data;
		})
		.finally(() => {
			// statusStore.isLoading = false;
		});
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
					<div class="project__info__header">
						<a class="project__info__btn h4">全部</a>
						<a class="project__info__btn h4">專案</a>
						<a class="project__info__btn h4">作品</a>
						<!-- :class="{ active: aboutInfo === 'skills' }" @click="aboutInfoHandle('skills')"-->
						<!-- :class="{ active: aboutInfo === 'experience' }"
							@click="aboutInfoHandle('experience')" -->
					</div>
					<div class="project__info__main">
						<div v-for="project in projectData" :key="project.id">
							<h5>{{ project.title }}</h5>
							<p>{{ project.content }}</p>
							<a :href="project.link" target="_blank">連結</a>
							<ul>
								<li v-for="tag in project.tags" :key="tag.id">
									{{ tag.value }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
