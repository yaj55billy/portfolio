<script setup>
const experiences = [
	{
		company: "六角學院",
		years: "2023 — 2024",
		position: "前端工程助教",
		content:
			"在 Vue 作品實戰直播班、Node.js 前後端入門班擔任助教。回覆同學在課程遇到的相關問題，像是 Vue 跟 Node 的觀念，或者引導同學看到（解決）實作上發生的 Bug，以及相關的前端疑問（例如：業界的狀況）。",
	},
	{
		company: "芯禾數位行銷",
		years: "2018 — 2021",
		position: "前端工程師",
		content:
			"公司專案類型主要為銀行業的活動型網站建置，我主要負責的部分是以 HTML、SASS 做響應式切版，使用 jQuery 、JavaScript 做網頁互動、串接第三方 API (Google Maps)，並與企劃、設計師、後端工程師合作完成專案。在任職期間跟前端夥伴導入 GIT 版本控制，開始制定相關文件，解決協作、檔案管理的問題。",
	},
	{
		company: "森德網站設計",
		years: "2017 — 2018",
		position: "前端工程師",
		content:
			"公司專案類型主要為企業形象網站建置，我主要負責的部分是以 HTML、CSS 做響應式切版，使用 jQuery 做網頁互動效果，並與企劃、設計師、後端工程師合作完成專案。在專案中適時導入 Bootstrap 提升開發效率，任職期間也有經手過中大型網站的經驗。",
	},
];
let experienceSectionAnimation;

const sections = ref(null);

onMounted(() => {
	sections.value.forEach((section) => {
		experienceSectionAnimation = useGsap.from(section, {
			scrollTrigger: {
				trigger: section,
				start: "top 85%",
				toggleClass: "active",
				scrub: false,
				// toggleActions: "play reverse play complete",
			},
			ease: "power2.out",
		});
	});
});

onUnmounted(() => {
	if (experienceSectionAnimation) {
		experienceSectionAnimation.kill();
	}
});
</script>

<template>
	<!--=================== Experience ====================-->
	<div class="experience">
		<div
			class="experience__section"
			ref="sections"
			v-for="(experience, index) in experiences"
			:key="index + experience.company"
		>
			<div class="experience__company">
				{{ experience.company }} ({{ experience.years }})
			</div>
			<h5 class="experience__position">{{ experience.position }}</h5>
			<p class="experience__content">{{ experience.content }}</p>
		</div>
	</div>
</template>

<style></style>
