<script setup>
const { $ScrollReveal } = useNuxtApp();
onMounted(() => {
	$ScrollReveal().reveal(".experienceSectionIn", {
		duration: 600,
		easing: "ease-in",
		interval: 300,
	});
});

onUnmounted(() => {
	$ScrollReveal().clean(".experienceSectionIn");
});
</script>

<template>
	<!--=================== Experience ====================-->
	<div class="experience">
		<div class="experience__section experienceSectionIn">
			<div class="experience__company">芯禾數位行銷 (2018 — 2021)</div>
			<h5 class="experience__position">前端工程師</h5>
			<p class="experience__content">
				公司專案類型主要為銀行業的活動型網站建置，我主要負責的部分是以
				HTML、SASS 做響應式切版，使用 jQuery 、JavaScript 做網頁互動、串接第三方
				API (Google Maps)，並與企劃、設計師、後端工程師合作完成專案。<br />
				在任職期間跟前端夥伴導入 GIT
				版本控制，開始制定相關文件，解決協作、檔案管理的問題。
			</p>
		</div>
		<div class="experience__section experienceSectionIn">
			<div class="experience__company">森德網站設計 (2017 — 2018)</div>
			<h5 class="experience__position">前端工程師</h5>
			<p class="experience__content">
				公司專案類型主要為企業形象網站建置，我主要負責的部分是以 HTML、CSS
				做響應式切版，使用 jQuery
				做網頁互動效果，並與企劃、設計師、後端工程師合作完成專案。<br />
				在專案中適時導入 Bootstrap
				提升開發效率，任職期間也有經手過中大型網站的經驗。
			</p>
		</div>
	</div>
</template>
