<script setup>
import { ref } from "vue";
import Skills from "./Skills.vue";
import Experience from "./Experience.vue";

// const { $ScrollReveal } = useNuxtApp();

const aboutComponent = ref(null);

const aboutInfo = ref("skills");
const aboutInfoHandle = (value) => {
	if (aboutInfo.value === value) return false;
	aboutInfo.value = value;
};

onMounted(() => {
	// $ScrollReveal().reveal(".aboutDescriptionIn", {
	// 	duration: 600,
	// 	delay: 200,
	// 	easing: "ease-in",
	// });
});

onUnmounted(() => {
	// $ScrollReveal().clean(".aboutDescriptionIn");
});

defineExpose({
	aboutComponent,
});
</script>

<template>
	<!--=================== About ====================-->
	<section ref="aboutComponent" id="aboutComponent" class="section about">
		<div class="container">
			<div class="section__header">
				<h2 class="section__title">ABOUT</h2>
			</div>
			<div class="about__wrapper">
				<div class="about__content">
					<p class="about__description aboutDescriptionIn">
						HI，我是
						Billy，有數年的前端工作經歷，因為先前工作類別接觸到較多案量，所以熟悉與
						PM、設計、前後端等團隊人員合作，協同討論需求並建置出網站（如：企業形象、活動頁面），而對於工作節奏與狀況變動，也具有一定的掌握跟彈性。
						<br /><br />
						除了工作上運用的技能外，我也會主動去了解、學習前端相關知識，而在學習的過程中，也會思考著新的工具或技術能否運用在團隊項目。在先前的工作經驗中，我曾經跟另一名同事將
						Git
						版控引入到團隊中，大量減少找檔案、傳遞檔案、協作上所多消耗的時間，在整個團隊中，專案也變得更容易管理。
					</p>
					<div class="about__info">
						<div class="about__info__header">
							<a
								class="about__info__btn h4"
								:class="{ active: aboutInfo === 'skills' }"
								@click="aboutInfoHandle('skills')"
								>SKILLS</a
							>
							<a
								class="about__info__btn h4"
								:class="{ active: aboutInfo === 'experience' }"
								@click="aboutInfoHandle('experience')"
								>EXPERIENCE</a
							>
						</div>
						<div class="about__info__main">
							<Skills v-if="aboutInfo === 'skills'" />
							<Experience v-if="aboutInfo === 'experience'" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
