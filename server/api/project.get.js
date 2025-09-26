export default defineEventHandler((event) => {
	const data = [
		{
			id: 'gush-energy',
			title: '湧業能源 GUSH ENERGY',
			type: 'project',
			link: 'https://www.gush-energy.com/',
			content: '使用 Nuxt3 建置湧業能源官方網站。',
			pics: [
				{ id: 'gush-energy-pic1', path: 'https://i.imgur.com/GlKogQY.jpg' },
				{ id: 'gush-energy-pic2', path: 'https://i.imgur.com/navyGPv.jpg' },
			],
			tags: [
				{ id: 'gush-energy-tag1', value: 'Nuxt' },
				{ id: 'gush-energy-tag2', value: 'SCSS' },
				{ id: 'gush-energy-tag3', value: 'Pinia' },
			],
		},
		{
			id: 'billyji',
			title: '筆力 - 探索與記錄的產地（Blog）',
			type: 'side-project',
			link: 'https://www.billyji.com/',
			content: '使用 Nuxt3 跟 Nuxt Content 建置自己的 Blog。',
			pics: [
				{ id: 'billyji-pic1', path: 'https://i.imgur.com/tdcyh7Q.jpeg' },
				{ id: 'billyji-pic2', path: 'https://i.imgur.com/D3HGxRY.jpeg' },
				{ id: 'billyji-pic3', path: 'https://i.imgur.com/L12O91K.jpeg' },
			],
			tags: [
				{ id: 'billyji-tag1', value: 'Nuxt' },
				{ id: 'billyji-tag2', value: 'Nuxt Content' },
				{ id: 'billyji-tag3', value: 'TailwindCss' },
				{ id: 'billyji-tag4', value: 'Canvas' },
			],
		},
		{
			id: 'metawall',
			title: 'Metawall 社群動態牆',
			type: 'side-project',
			link: 'https://yaj55billy.github.io/vue3-message-board/#/signin',
			content:
				'前端使用 Vue3 建置 + 後端 Node.js、MongoDB 所建置的虛構社群動態牆。測試帳密：test2222@gmail.com、test2222',
			pics: [
				{ id: 'metawall-pic1', path: 'https://i.imgur.com/OcivO3p.jpeg' },
				{ id: 'metawall-pic2', path: 'https://i.imgur.com/wIDJKrb.jpeg' },
				{ id: 'metawall-pic3', path: 'https://i.imgur.com/sorng3b.jpeg' },
			],
			tags: [
				{ id: 'metawall-tag1', value: 'Vue' },
				{ id: 'metawall-tag2', value: 'TailwindCss' },
				{ id: 'metawall-tag3', value: 'Pinia' },
				{ id: 'metawall-tag4', value: 'Node.js' },
				{ id: 'metawall-tag5', value: 'Express' },
				{ id: 'metawall-tag6', value: 'MongoDB' },
				{ id: 'metawall-tag7', value: 'jwt' },
			],
		},
		{
			id: 'doddertarot',
			title: '菟絲子塔羅占卜',
			type: 'project',
			link: 'https://doddertarot.github.io/doddertarot/',
			content: '使用 Nuxt3 建置塔羅牌占卜網站。',
			pics: [
				{ id: 'doddertarot-pic1', path: 'https://i.imgur.com/AWH4j4e.jpeg' },
				{ id: 'doddertarot-pic2', path: 'https://i.imgur.com/7kNMQgX.jpeg' },
			],
			tags: [
				{ id: 'doddertarot-tag1', value: 'Nuxt' },
				{ id: 'doddertarot-tag2', value: 'SCSS' },
				{ id: 'doddertarot-tag3', value: 'Vue Transition' },
			],
		},
		{
			id: 'fitspace-vue',
			title: 'FitSpace 健身空間 (Vue)',
			type: 'side-project',
			link: 'https://yaj55billy.github.io/vue_fitness/#/',
			content: '使用 Vue CLI 3 建置的虛構電商網站(包含前後台)。',
			pics: [
				{ id: 'fitspace-vue-pic1', path: 'https://i.imgur.com/ktFryuV.jpg' },
				{ id: 'fitspace-vue-pic2', path: 'https://i.imgur.com/S0KIIzY.jpg' },
			],
			tags: [
				{ id: 'fitspace-vue-tag1', value: 'Vue' },
				{ id: 'fitspace-vue-tag2', value: 'Vue Router' },
				{ id: 'fitspace-vue-tag3', value: 'Bootstrap' },
				{ id: 'fitspace-vue-tag4', value: 'SCSS' },
				{ id: 'fitspace-vue-tag5', value: 'RESTful API' },
				{ id: 'fitspace-vue-tag6', value: 'VeeValidate' },
				{ id: 'fitspace-vue-tag7', value: 'Axios' },
			],
		},
		{
			id: 'fitspace-nuxt',
			title: 'FitSpace 健身空間 (Nuxt)',
			type: 'side-project',
			link: 'https://nuxt3-fitness.vercel.app/',
			content: '使用 Nuxt3 復刻建置 FitSpace 健身空間。',
			pics: [
				{ id: 'fitspace-nuxt-pic1', path: 'https://i.imgur.com/ktFryuV.jpg' },
				{ id: 'fitspace-nuxt-pic2', path: 'https://i.imgur.com/S0KIIzY.jpg' },
			],
			tags: [
				{ id: 'fitspace-nuxt-tag1', value: 'Nuxt' },
				{ id: 'fitspace-nuxt-tag2', value: 'Pinia' },
				{ id: 'fitspace-nuxt-tag3', value: 'Bootstrap' },
				{ id: 'fitspace-nuxt-tag4', value: 'SCSS' },
				{ id: 'fitspace-nuxt-tag5', value: 'RESTful API' },
				{ id: 'fitspace-nuxt-tag6', value: 'VeeValidate' },
			],
		},
		{
			id: 'pilot',
			title: '百樂官方網站',
			type: 'project',
			link: 'https://www.pilot-pen.com.tw/',
			content: '網站維護、需求新增與改版處理。',
			pics: [
				{ id: 'pilot-pic1', path: 'https://i.imgur.com/6rmC09b.jpg' },
				{ id: 'pilot-pic2', path: 'https://i.imgur.com/zwsRyfq.jpg' },
			],
			tags: [
				{ id: 'pilot-tag1', value: 'HTML' },
				{ id: 'pilot-tag2', value: 'CSS' },
				{ id: 'pilot-tag3', value: 'JavaScript' },
				{ id: 'pilot-tag4', value: 'Google Map API' },
			],
		},
		{
			id: 'pilot-frixion',
			title: '百樂魔擦筆',
			type: 'project',
			link: 'https://www.pilot-pen.com.tw/event/2020-frixion/index.html',
			content: '百樂魔擦筆產品頁面製作，以及動態相關處理。',
			pics: [
				{
					id: 'pilot-frixion-pic1',
					path: 'https://i.imgur.com/InZOXrF.jpg',
				},
				{
					id: 'pilot-frixion-pic2',
					path: 'https://i.imgur.com/j4IfCeS.jpg',
				},
			],
			tags: [
				{ id: 'pilot-frixion-tag1', value: 'HTML' },
				{ id: 'pilot-frixion-tag2', value: 'SCSS' },
				{ id: 'pilot-frixion-tag3', value: 'jQuery' },
				{ id: 'pilot-frixion-tag4', value: 'Swiper' },
				{ id: 'pilot-frixion-tag5', value: 'skrollr' },
				{ id: 'pilot-frixion-tag6', value: 'Youtube API' },
			],
		},
		{
			id: 'pilot-custom',
			title: '百樂客製化服務',
			type: 'project',
			link: 'https://www.pilot-pen.com.tw/event/customization/index.html',
			content: '百樂客製化服務、客製化雷雕頁面製作，以及動態相關處理。',
			pics: [
				{
					id: 'pilot-custom-pic1',
					path: 'https://i.imgur.com/5OjlGHY.jpg',
				},
				{
					id: 'pilot-custom-pic2',
					path: 'https://i.imgur.com/omww8bY.jpg',
				},
			],
			tags: [
				{ id: 'pilot-custom-tag1', value: 'HTML' },
				{ id: 'pilot-custom-tag2', value: 'SCSS' },
				{ id: 'pilot-custom-tag3', value: 'jQuery' },
				{ id: 'pilot-custom-tag4', value: 'Swiper' },
				{ id: 'pilot-custom-tag5', value: 'WOW' },
				{ id: 'pilot-custom-tag6', value: 'Animate' },
			],
		},
		{
			id: 'fglife-accessibility',
			title: '遠雄人壽金融友善服務',
			type: 'project',
			link: 'https://accessibility.fglife.com.tw/index.html',
			content: '無障礙網站 AAA 級建置，在過程中了解無障礙網站的規範。',
			pics: [
				{
					id: 'fglife-accessibility-pic1',
					path: 'https://i.imgur.com/9GohDLJ.jpg',
				},
			],
			tags: [
				{ id: 'fglife-accessibility-tag1', value: 'HTML' },
				{ id: 'fglife-accessibility-tag2', value: 'CSS' },
				{ id: 'fglife-accessibility-tag3', value: '無障礙網站' },
			],
		},
		{
			id: 'fglife-ehospital',
			title: '遠雄人壽數位照護',
			type: 'project',
			link: 'https://member.fglife.com.tw/ehospital.do?actionType=main&utm_source=ecare&utm_medium=banner&utm_cam',
			content: '頁面製作、動態相關處理。',
			pics: [
				{
					id: 'fglife-ehospital-pic1',
					path: 'https://i.imgur.com/XiOUUPz.jpg',
				},
			],
			tags: [
				{ id: 'fglife-ehospital-tag1', value: 'HTML' },
				{ id: 'fglife-ehospital-tag2', value: 'SCSS' },
				{ id: 'fglife-ehospital-tag3', value: 'jQuery' },
				{ id: 'fglife-ehospital-tag4', value: 'WOW' },
				{ id: 'fglife-ehospital-tag5', value: 'Animate' },
			],
		},
		{
			id: 'fglife-sport',
			title: '遠雄人壽活動案（已下線）',
			type: 'project',
			link: 'END',
			content: '活動頁面製作、動態處理，以及五個互動遊戲。',
			pics: [
				{
					id: 'fglife-sport-pic1',
					path: 'https://i.imgur.com/dfzxYcL.jpg',
				},
			],
			tags: [
				{ id: 'fglife-sport-tag1', value: 'HTML' },
				{ id: 'fglife-sport-tag2', value: 'SCSS' },
				{ id: 'fglife-sport-tag3', value: 'JavaScript' },
				{ id: 'fglife-sport-tag4', value: 'WOW' },
				{ id: 'fglife-sport-tag5', value: 'Animate' },
				{ id: 'fglife-sport-tag6', value: 'TweenMax' },
			],
		},
		{
			id: 'mli',
			title: '三商美邦人壽保戶專區',
			type: 'project',
			link: 'https://www.mli.com.tw/ncsr/login',
			content: '保戶登入後資訊頁面，屬中大型多頁專案。',
			pics: [
				{
					id: 'mli-pic1',
					path: 'https://i.imgur.com/PjP6HPq.jpg',
				},
			],
			tags: [
				{ id: 'mli-tag1', value: 'HTML' },
				{ id: 'mli-tag2', value: 'SCSS' },
				{ id: 'mli-tag3', value: 'jQuery' },
				{ id: 'mli-tag4', value: 'Swiper' },
				{ id: 'mli-tag5', value: 'Datepicker' },
			],
		},
		{
			id: 'vinegarhouse',
			title: '醋醰媒體整合行銷（已下線）',
			type: 'project',
			link: 'END',
			content: '主要以 Bootstrap 進行頁面製作。',
			pics: [
				{
					id: 'vinegarhouse-pic1',
					path: 'https://i.imgur.com/E990sPc.jpg',
				},
				{
					id: 'vinegarhouse-pic2',
					path: 'https://i.imgur.com/0qz2U0x.jpg',
				},
			],
			tags: [
				{ id: 'vinegarhouse-tag1', value: 'HTML' },
				{ id: 'vinegarhouse-tag2', value: 'SCSS' },
				{ id: 'vinegarhouse-tag3', value: 'jQuery' },
				{ id: 'vinegarhouse-tag4', value: 'Bootstrap' },
			],
		},
		{
			id: 'react-todo',
			title: 'React TodoList',
			type: 'side-project',
			link: 'https://yaj55billy.github.io/react-workshop-week4-todolist/#/signup',
			content: '使用 React 串接 API，做出 TodoList CRUD',
			pics: [
				{
					id: 'react-todo-pic1',
					path: 'https://i.imgur.com/7BWwRuI.jpg',
				},
				{
					id: 'react-todo-pic2',
					path: 'https://i.imgur.com/7OCug5i.jpg',
				},
			],
			tags: [
				{ id: 'react-todo-tag1', value: 'React' },
				{ id: 'react-todo-tag2', value: 'React Router' },
				{ id: 'react-todo-tag3', value: 'SCSS' },
				{ id: 'react-todo-tag4', value: 'RESTful API' },
				{ id: 'react-todo-tag4', value: 'Sweetalert2' },
			],
		},
	];

	return { data };
});
