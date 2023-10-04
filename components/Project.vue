<script setup>
const data = [
	{
		id: "fitspace-vue",
		title: "FitSpace 健身空間 (Vue)",
		type: "side-project",
		link: "https://www.billyji.com/vue_fitness/#/",
		content: "使用 Vue CLI 3 建置的虛構電商網站(包含前後台)。",
		pics: [
			{ id: "fitspace-vue-pic1", path: "https://i.imgur.com/ktFryuV.jpg" },
			{ id: "fitspace-vue-pic2", path: "https://i.imgur.com/S0KIIzY.jpg" },
		],
		tags: [
			{ id: "fitspace-vue-tag1", value: "Vue" },
			{ id: "fitspace-vue-tag2", value: "Vue Router" },
			{ id: "fitspace-vue-tag3", value: "Bootstrap" },
			{ id: "fitspace-vue-tag4", value: "SCSS" },
			{ id: "fitspace-vue-tag5", value: "RESTful API" },
			{ id: "fitspace-vue-tag6", value: "VeeValidate" },
			{ id: "fitspace-vue-tag7", value: "Axios" },
		],
	},
	{
		id: "fitspace-nuxt",
		title: "FitSpace 健身空間 (Nuxt)",
		type: "side-project",
		link: "https://nuxt3-fitness.vercel.app/",
		content: "使用 Nuxt3 復刻建置 FitSpace 健身空間。",
		pics: [
			{ id: "fitspace-nuxt-pic1", path: "https://i.imgur.com/ktFryuV.jpg" },
			{ id: "fitspace-nuxt-pic2", path: "https://i.imgur.com/S0KIIzY.jpg" },
		],
		tags: [
			{ id: "fitspace-nuxt-tag1", value: "Nuxt" },
			{ id: "fitspace-nuxt-tag2", value: "Pinia" },
			{ id: "fitspace-nuxt-tag3", value: "Bootstrap" },
			{ id: "fitspace-nuxt-tag4", value: "SCSS" },
			{ id: "fitspace-nuxt-tag5", value: "RESTful API" },
			{ id: "fitspace-nuxt-tag6", value: "VeeValidate" },
		],
	},
	{
		id: "pilot",
		title: "百樂官方網站",
		type: "project",
		link: "https://www.pilot-pen.com.tw/",
		content: "網站維護、需求新增與改版處理。",
		pics: [
			{ id: "pilot-pic1", path: "https://i.imgur.com/6rmC09b.jpg" },
			{ id: "pilot-pic2", path: "https://i.imgur.com/zwsRyfq.jpg" },
		],
		tags: [
			{ id: "pilot-tag1", value: "HTML" },
			{ id: "pilot-tag2", value: "CSS" },
			{ id: "pilot-tag3", value: "JavaScript" },
			{ id: "pilot-tag4", value: "Google Map API" },
		],
	},
	{
		id: "pilot-frixion",
		title: "百樂魔擦筆",
		type: "project",
		link: "https://www.pilot-pen.com.tw/event/2020-frixion/index.html",
		content: "百樂魔擦筆產品頁面製作，以及動態相關處理。",
		pics: [
			{
				id: "pilot-frixion-pic1",
				path: "https://i.imgur.com/InZOXrF.jpg",
			},
			{
				id: "pilot-frixion-pic2",
				path: "https://i.imgur.com/j4IfCeS.jpg",
			},
		],
		tags: [
			{ id: "pilot-frixion-tag1", value: "HTML" },
			{ id: "pilot-frixion-tag2", value: "SCSS" },
			{ id: "pilot-frixion-tag3", value: "jQuery" },
			{ id: "pilot-frixion-tag4", value: "Swiper" },
			{ id: "pilot-frixion-tag5", value: "skrollr" },
			{ id: "pilot-frixion-tag6", value: "Youtube API" },
		],
	},
	{
		id: "pilot-custom",
		title: "百樂客製化服務",
		type: "project",
		link: "https://www.pilot-pen.com.tw/event/customization/index.html",
		content: "百樂客製化服務、客製化雷雕頁面製作，以及動態相關處理。",
		pics: [
			{
				id: "pilot-custom-pic1",
				path: "https://i.imgur.com/5OjlGHY.jpg",
			},
			{
				id: "pilot-custom-pic2",
				path: "https://i.imgur.com/omww8bY.jpg",
			},
		],
		tags: [
			{ id: "pilot-custom-tag1", value: "HTML" },
			{ id: "pilot-custom-tag2", value: "SCSS" },
			{ id: "pilot-custom-tag3", value: "jQuery" },
			{ id: "pilot-custom-tag4", value: "Swiper" },
			{ id: "pilot-custom-tag5", value: "WOW" },
			{ id: "pilot-custom-tag6", value: "Animate" },
		],
	},
	{
		id: "fglife-accessibility",
		title: "遠雄人壽金融友善服務",
		type: "project",
		link: "https://accessibility.fglife.com.tw/index.html",
		content: "無障礙網站 AAA 級建置，在過程中了解無障礙網站的規範。",
		pics: [
			{
				id: "fglife-accessibility-pic1",
				path: "https://i.imgur.com/9GohDLJ.jpg",
			},
		],
		tags: [
			{ id: "fglife-accessibility-tag1", value: "HTML" },
			{ id: "fglife-accessibility-tag2", value: "CSS" },
			{ id: "fglife-accessibility-tag3", value: "無障礙網站" },
		],
	},
	{
		id: "fglife-ehospital",
		title: "遠雄人壽數位照護",
		type: "project",
		link: "https://member.fglife.com.tw/ehospital.do?actionType=main&utm_source=ecare&utm_medium=banner&utm_cam",
		content: "頁面製作、動態相關處理。",
		pics: [
			{
				id: "fglife-ehospital-pic1",
				path: "https://i.imgur.com/XiOUUPz.jpg",
			},
		],
		tags: [
			{ id: "fglife-ehospital-tag1", value: "HTML" },
			{ id: "fglife-ehospital-tag2", value: "SCSS" },
			{ id: "fglife-ehospital-tag3", value: "jQuery" },
			{ id: "fglife-ehospital-tag4", value: "WOW" },
			{ id: "fglife-ehospital-tag5", value: "Animate" },
		],
	},
	{
		id: "fglife-sport",
		title: "遠雄人壽活動案（已下線）",
		type: "project",
		link: "END",
		content: "活動頁面製作、動態處理，以及五個互動遊戲。",
		pics: [
			{
				id: "fglife-sport-pic1",
				path: "https://i.imgur.com/dfzxYcL.jpg",
			},
		],
		tags: [
			{ id: "fglife-sport-tag1", value: "HTML" },
			{ id: "fglife-sport-tag2", value: "SCSS" },
			{ id: "fglife-sport-tag3", value: "JavaScript" },
			{ id: "fglife-sport-tag4", value: "WOW" },
			{ id: "fglife-sport-tag5", value: "Animate" },
			{ id: "fglife-sport-tag6", value: "TweenMax" },
		],
	},
	{
		id: "mli",
		title: "三商美邦人壽保戶專區",
		type: "project",
		link: "https://www.mli.com.tw/ncsr/login",
		content: "保戶登入後資訊頁面，屬中大型多頁專案。",
		pics: [
			{
				id: "mli-pic1",
				path: "https://i.imgur.com/PjP6HPq.jpg",
			},
		],
		tags: [
			{ id: "mli-tag1", value: "HTML" },
			{ id: "mli-tag2", value: "SCSS" },
			{ id: "mli-tag3", value: "jQuery" },
			{ id: "mli-tag4", value: "Swiper" },
			{ id: "mli-tag5", value: "Datepicker" },
		],
	},
	{
		id: "vinegarhouse",
		title: "醋醰媒體整合行銷",
		type: "project",
		link: "http://www.vinegarhouse.com.tw/index.php",
		content: "主要以 Bootstrap 進行頁面製作。",
		pics: [
			{
				id: "vinegarhouse-pic1",
				path: "https://i.imgur.com/E990sPc.jpg",
			},
			{
				id: "vinegarhouse-pic2",
				path: "https://i.imgur.com/0qz2U0x.jpg",
			},
		],
		tags: [
			{ id: "vinegarhouse-tag1", value: "HTML" },
			{ id: "vinegarhouse-tag2", value: "SCSS" },
			{ id: "vinegarhouse-tag3", value: "jQuery" },
			{ id: "vinegarhouse-tag4", value: "Bootstrap" },
		],
	},
	{
		id: "next-blog",
		title: "Next Blog",
		type: "side-project",
		link: "https://billymind-blog.vercel.app",
		content: "使用 Next 搭配套件，將靜態 .md 檔案轉換為 HTML。",
		pics: [
			{
				id: "next-blog-pic1",
				path: "https://i.imgur.com/G3uDcuK.jpg",
			},
			{
				id: "next-blog-pic2",
				path: "https://i.imgur.com/KIwizfS.jpg",
			},
		],
		tags: [
			{ id: "next-blog-tag1", value: "Next" },
			{ id: "next-blog-tag2", value: "SCSS" },
			{ id: "next-blog-tag3", value: "gray-matter" },
			{ id: "next-blog-tag4", value: "react-markdown" },
		],
	},
	{
		id: "react-todo",
		title: "React TodoList",
		type: "side-project",
		link: "https://www.billyji.com/react-workshop-week4-todolist/#/signup",
		content: "使用 React 串接 API，做出 TodoList CRUD",
		pics: [
			{
				id: "react-todo-pic1",
				path: "https://i.imgur.com/7BWwRuI.jpg",
			},
			{
				id: "react-todo-pic2",
				path: "https://i.imgur.com/7OCug5i.jpg",
			},
		],
		tags: [
			{ id: "react-todo-tag1", value: "React" },
			{ id: "react-todo-tag2", value: "React Router" },
			{ id: "react-todo-tag3", value: "SCSS" },
			{ id: "react-todo-tag4", value: "RESTful API" },
			{ id: "react-todo-tag4", value: "Sweetalert2" },
		],
	},
];
import { ref, onMounted } from "vue";
import Card from "./Card.vue";

const projectComponent = ref(null);

const projectData = ref([]);
const filterProjectData = ref([]);
// const { data } = await useFetch("/api/project");
// console.log(data);
// projectData.value = res.data;
// filterProjectData.value = res.data;

// const fetchProjectData = () => {
// 	// statusStore.isLoading = true;
// 	$fetch("/api/project", {
// 		method: "GET",
// 	})
// 		.then((res) => {
// 			console.log("Project資料載好");
// 			projectData.value = res.data;
// 			filterProjectData.value = res.data;
// 		})
// 		.finally(() => {
// 			// statusStore.isLoading = false;
// 		});
// };

onMounted(async () => {
	console.log("Project");
	projectData.value = data;
	filterProjectData.value = data;
	// fetchProjectData();
	// console.log(filterProjectData.value);
});

const projectDataStatus = ref("all");

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
					</div>
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
