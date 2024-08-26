<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const { $gsap } = useNuxtApp();

const heroComponent = ref(null);
const heroAvatarRef = ref(null);
const heroContentRef = ref(null);

let ctx;

onMounted(() => {
	ctx = $gsap.context(() => {
		$gsap.from(heroAvatarRef.value, {
			opacity: 0,
			scale: 0.85,
			duration: 0.8,
			ease: "power2.out",
		});

		$gsap.from(heroContentRef.value, {
			opacity: 0,
			delay: 0.2,
			duration: 0.6,
			x: 100,
			ease: "power2.out",
		});
	});
});

onUnmounted(() => {
	ctx.revert();
});

defineExpose({
	heroComponent,
});
</script>

<template>
	<!--=================== Hero ====================-->
	<section ref="heroComponent" id="heroComponent" class="section hero">
		<div class="container">
			<div class="hero__wrapper">
				<section class="hero__avatar" ref="heroAvatarRef">
					<HeroAvatar />
				</section>

				<div class="hero__content" ref="heroContentRef">
					<h2 class="hero__title tagline">
						Hi, I am Billy,<br />Front-End Developer.
					</h2>
					<p class="hero__description">
						HI，我是
						Billy，有數年的前端工作經歷，因為先前工作類別接觸到較多案量，所以熟悉與
						PM、設計、前後端等團隊人員合作，協同討論需求並建置出網站（如：企業形象、活動頁面），而對於工作節奏與狀況變動，也具有一定的掌握跟彈性。<br /><br />
						除了工作上運用的技能外，我也會主動去了解、學習前端相關知識，而在學習的過程中，也會思考著新的工具或技術能否運用在團隊項目。在先前的工作經驗中，我曾經跟另一名同事將
						Git
						版控引入到團隊中，大量減少找檔案、傳遞檔案、協作上所多消耗的時間，在整個團隊中，專案也變得更容易管理。
					</p>
					<div class="hero__iconbox">
						<a
							href="https://github.com/yaj55billy"
							target="_blank"
							class="hero__icon"
							><Icon name="bxl:github"
						/></a>
						<a href="mailto:yaj55ushydna@gmail.com" class="hero__icon"
							><Icon name="bxl:gmail"
						/></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
