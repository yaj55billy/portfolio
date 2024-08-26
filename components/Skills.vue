<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const { $gsap } = useNuxtApp();

const skills = ref([
	{
		title: "Web Layout",
		icons: [
			"logos:html-5",
			"logos:css-3",
			"logos:sass",
			"logos:bootstrap",
			"logos:tailwindcss-icon",
		],
		items: [
			"熟悉 HTML、CSS 手刻響應式網頁 (變版的掌握)",
			"使用 SASS 達成分類與管理",
			"依照需求或團隊，適時導入 Bootstrap、Tailwind",
		],
	},
	{
		title: "Git 版控/Other",
		icons: [
			"logos:git-icon",
			"logos:github-octocat",
			"logos:adobe-photoshop",
			"logos:adobe-illustrator",
		],
		items: [
			"Git 版控操作",
			"Git 協作經驗(ex: Git Flow)",
			"Adobe Ai / Ps 基礎操作(切圖)",
		],
	},
	{
		title: "JavaScript",
		icons: ["logos:javascript", "logos:jquery", "logos:eslint"],
		items: [
			"熟悉 jQuery 製作網頁互動",
			"了解 JavaScript ES6",
			"熟悉 AJAX / JSON 做 API 串接(RESTful API)",
			"ESLint 使用經驗",
		],
	},
	{
		title: "Vue/Nuxt",
		icons: ["logos:vue", "logos:nuxt-icon", "logos:vitejs", "logos:pinia"],
		items: [
			"Vue2/3 框架建置與打包專案",
			"了解 Option API 與 Composition API",
			"使用 Vue Router 建構路由",
			"使用 Vuex、Pinia 做狀態共享與管理",
			"Nuxt3 操作與應用",
		],
	},
]);

const skillRefs = ref([]);
let ctx;

onMounted(() => {
	ctx = $gsap.context(() => {
		skillRefs.value.forEach((section) => {
			$gsap.from(section, {
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
					end: "bottom 10%",
					toggleClass: "active",
					scrub: true,
				},
			});
		});
	});
});

onUnmounted(() => {
	ctx.revert();
});
</script>

<template>
	<!--=================== skill ====================-->
	<div class="skills">
		<section
			class="skills__section"
			ref="skillRefs"
			v-for="(skill, index) in skills"
			:key="index"
		>
			<h5 class="skills__title">{{ skill.title }}</h5>
			<div class="skills__icons">
				<Icon
					v-for="(icon, iconIndex) in skill.icons"
					:key="iconIndex + icon"
					:name="icon"
					class="skills__icon"
				/>
			</div>
			<ul class="skills__list">
				<li
					v-for="(item, itemIndex) in skill.items"
					:key="itemIndex + item"
					class="skills__item"
				>
					{{ item }}
				</li>
			</ul>
		</section>
	</div>
</template>
