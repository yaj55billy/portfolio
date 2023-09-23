<script setup>
import { ref } from "vue";
const props = defineProps({
	hero: {
		type: Object,
	},
	about: {
		type: Object,
	},
	skill: {
		type: Object,
	},
	experience: {
		type: Object,
	},
	project: {
		type: Object,
	},
	scrollToTarget: {
		type: Function,
	},
});
const headerHero = ref(null);
const headerAbout = ref(null);
const headerSkill = ref(null);
const headerExperience = ref(null);
const headerProject = ref(null);
defineExpose({
	headerHero,
	headerAbout,
	headerSkill,
	headerExperience,
	headerProject,
});
</script>

<template>
	<!--=================== Header ====================-->
	<header id="header" class="header">
		<div class="container">
			<nav class="nav">
				<NuxtLink to="/" class="nav__brand h1">BILLY JI.</NuxtLink>
				<div class="nav__menu" id="nav__menu">
					<ul class="nav__list">
						<li class="nav__item">
							<a
								ref="headerHero"
								class="nav__link"
								@click.prevent="props.scrollToTarget(props.hero, 'hero')"
								>Home</a
							>
						</li>
						<li class="nav__item">
							<a
								ref="headerAbout"
								class="nav__link"
								@click.prevent="props.scrollToTarget(props.about, 'about')"
								>About</a
							>
						</li>
						<li class="nav__item">
							<a
								ref="headerSkill"
								class="nav__link"
								@click.prevent="props.scrollToTarget(props.skill, 'skill')"
								>Skill</a
							>
						</li>
						<li class="nav__item">
							<a
								ref="headerExperience"
								class="nav__link"
								@click.prevent="
									props.scrollToTarget(props.experience, 'experience')
								"
								>Experience</a
							>
						</li>
						<li class="nav__item">
							<a
								ref="headerProject"
								class="nav__link"
								@click.prevent="props.scrollToTarget(props.project, 'project')"
								>Project</a
							>
						</li>
					</ul>
				</div>
				<div class="nav__toggle">
					<i id="nav-toggle" class="ri-menu-3-line"></i>
				</div>
			</nav>
		</div>
	</header>
</template>
