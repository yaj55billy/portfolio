<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const { $gsap } = useNuxtApp();

const skills = ref([
	{
		title: 'Web Layout',
		icons: [
			'logos:html-5',
			'logos:css-3',
			'logos:sass',
			'logos:bootstrap',
			'logos:tailwindcss-icon',
		],
		items: [
			'熟悉 HTML、CSS 手刻響應式網頁，RWD 變版具有一定的掌握度',
			'使用 SASS/SCSS 進行樣式模組化與管理',
			'依照需求或團隊，適時運用 Bootstrap、Tailwind CSS 等框架',
		],
	},
	{
		title: 'JavaScript',
		icons: ['logos:javascript', 'logos:jquery', 'logos:eslint'],
		items: [
			'了解 JavaScript ES6 語法跟特性',
			'了解 JavaScript 核心概念',
			'網頁互動處理（原生、jQuery）',
			'熟悉 AJAX / JSON 做 API 串接(RESTful API)',
			'ESLint 使用經驗',
		],
	},
	{
		title: 'Vue/Nuxt',
		icons: ['logos:vue', 'logos:nuxt-icon', 'logos:vitejs', 'logos:pinia'],
		items: [
			'Vue2/3 框架建置與打包專案',
			'熟悉 Option API 與 Composition API',
			'使用 Vue Router 建構路由',
			'使用 Vuex、Pinia 做狀態共享與管理',
			'Nuxt3 操作與應用',
		],
	},
	{
		title: 'React',
		icons: ['logos:react', 'logos:redux', 'logos:vitejs'],
		items: [
			'了解 React 基礎概念與 React Hooks',
			'React 框架建置與打包專案',
			'使用 React Router 建構路由',
			'使用 Redux 做狀態管理',
		],
	},
	{
		title: 'Git 版控/Other',
		icons: [
			'logos:git-icon',
			'logos:github-octocat',
			'logos:adobe-photoshop',
			'logos:adobe-illustrator',
			'logos:figma',
		],
		items: [
			'Git 版控操作',
			'Git 協作經驗(ex: Git Flow)',
			'Adobe Ai / Ps、Figma 切圖操作',
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
					start: 'top 80%',
					end: 'bottom 10%',
					toggleClass: 'active',
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
