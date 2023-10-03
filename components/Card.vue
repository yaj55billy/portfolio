<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const props = defineProps({
	filterProjectData: {
		type: Object,
	},
});
</script>
<template>
	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque
		nihil ducimus quidem error in ut nulla voluptatibus numquam, impedit amet
		explicabo excepturi voluptatem ipsa assumenda illo voluptates nisi sed!
		Laboriosam necessitatibus a voluptatum deserunt ratione. Blanditiis
		similique corporis neque labore deleniti sequi atque optio id debitis natus,
		dolores tempora non veritatis accusamus porro ducimus accusantium dolor
		fugiat in harum dolore voluptatibus eveniet. Cupiditate repellendus,
		asperiores amet architecto ullam eius voluptates? Nihil esse sunt, cum
		magnam quibusdam reiciendis dolorum accusamus fugiat earum, tempora vero
		rerum rem reprehenderit eaque. Rerum voluptatum ullam eveniet molestiae
		neque iste odio officia debitis, praesentium a reiciendis perspiciatis,
		veritatis unde, laudantium voluptatem culpa iure minima? Quasi itaque
		mollitia, fugiat libero voluptatem blanditiis dolorum accusantium officia
		optio. Atque, harum, itaque, eos magnam mollitia perspiciatis id at quod
		deserunt illo veritatis? Pariatur quis numquam fuga reprehenderit ea
		molestiae, quo nobis ab, porro ullam itaque, optio quaerat ducimus? Nam ab
		voluptatibus tempora facere perspiciatis dicta soluta voluptate consequuntur
		sequi rerum, libero voluptatem. Iste explicabo quidem laudantium facilis
		ratione commodi nobis incidunt fugiat aliquam dolor et impedit quasi optio
		modi ipsum, quas sed ea est, blanditiis tempore quam molestiae. Eius,
		perspiciatis in. Assumenda placeat ut exercitationem quaerat eos. Sapiente
		inventore sed quo optio hic adipisci odio dolorum laborum similique, autem,
		nobis rem accusamus est dolorem fugiat. Nisi autem obcaecati ab voluptates
		et sequi quibusdam voluptatibus nulla quidem illum quod rerum sunt, error ea
		eius ipsa velit atque harum accusamus id optio dignissimos. Fugit, sunt, ex
		eos ipsa repudiandae cum neque optio nobis, minus magnam suscipit nostrum
		vitae pariatur possimus sit impedit consequuntur beatae nihil tempora qui!
		Architecto enim aspernatur corporis totam blanditiis rerum atque quisquam
		temporibus voluptas optio officiis reiciendis, perspiciatis cupiditate
		sapiente omnis explicabo recusandae tenetur voluptatibus quaerat autem, nam
		ea, vel neque facilis. Consectetur corrupti eos nisi ab.
	</div>
	<!-- <TransitionGroup name="card">
		<div class="card" v-for="item in props.filterProjectData" :key="item.id">
			<div class="card__header">
				<carousel :items-to-show="1">
					<slide v-for="slide in item.pics" :key="slide.id">
						<div
							class="card__img"
							:style="{ backgroundImage: 'url(' + slide.path + ')' }"
						></div>
					</slide>
					<template #addons="{ slidesCount }">
						<Navigation v-if="slidesCount > 1" />
					</template>
				</carousel>
			</div>
			<div class="card__main">
				<h5 class="card__title">{{ item.title }}</h5>
				<ul class="card__tags">
					<li class="card__tag" v-for="tag in item.tags" :key="tag.id">
						#{{ tag.value }}
					</li>
				</ul>
				<p class="card__content">{{ item.content }}</p>
				<div class="card__linkwrap">
					<a
						class="card__link"
						:class="{ none: item.link === 'END' }"
						:href="item.link"
						target="_blank"
						>網站連結</a
					>
				</div>
			</div>
		</div>
	</TransitionGroup> -->
</template>

<style>
.card-enter-active {
	transition: all 0.5s ease;
}
.card-leave-active {
	transition: all 0.25s ease;
}

.card-enter-from,
.card-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
</style>
