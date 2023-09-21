<script setup></script>

<template>
	<!--=================== Header ====================-->
	<header id="header" class="header">
		<div class="container">
			<nav class="nav">
				<NuxtLink to="/" class="nav__brand h1">BILLY JI.</NuxtLink>
				<div class="nav__menu" id="nav__menu">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="#hero" class="nav__link">Home</a>
						</li>
						<li class="nav__item">
							<a href="#about" class="nav__link">About</a>
						</li>
						<li class="nav__item">
							<a href="#skill" class="nav__link">Skill</a>
						</li>
						<li class="nav__item">
							<a href="#experience" class="nav__link">Experience</a>
						</li>
						<li class="nav__item">
							<a href="#project" class="nav__link">Project</a>
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
