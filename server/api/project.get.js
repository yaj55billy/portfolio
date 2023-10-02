export default defineEventHandler((event) => {
	const data = [
		{
			id: "fitspace-vue",
			title: "FitSpace 健身空間 (Vue)",
			type: "side-project",
			link: "https://www.billyji.com/vue_fitness/#/",
			content: "使用 Vue CLI 3 建置的虛構電商網站(包含前後台)。",
			tags: [
				{ id: "fitspace-vue-tag1", value: "Vue" },
				{ id: "fitspace-vue-tag2", value: "Vue Router" },
				{ id: "fitspace-vue-tag3", value: "Bootstrap" },
				{ id: "fitspace-vue-tag4", value: "SCSS" },
				{ id: "fitspace-vue-tag5", value: "RESTful API" },
				{ id: "fitspace-vue-tag6", value: "VeeValidate" },
				{ id: "fitspace-vue-tag7", value: "Axios" },
			],
		},
		{
			id: "fitspace-nuxt",
			title: "FitSpace 健身空間 (Nuxt)",
			type: "side-project",
			link: "https://nuxt3-fitness.vercel.app/",
			content: "使用 Nuxt3 復刻建置 FitSpace 健身空間。",
			tags: [
				{ id: "fitspace-nuxt-tag1", value: "Nuxt" },
				{ id: "fitspace-nuxt-tag2", value: "Pinia" },
				{ id: "fitspace-nuxt-tag3", value: "Bootstrap" },
				{ id: "fitspace-nuxt-tag4", value: "SCSS" },
				{ id: "fitspace-nuxt-tag5", value: "RESTful API" },
				{ id: "fitspace-nuxt-tag6", value: "VeeValidate" },
			],
		},
		{
			id: "pilot",
			title: "百樂官方網站",
			type: "project",
			link: "https://www.pilot-pen.com.tw/",
			content: "網站維護、需求新增與改版處理。",
			tags: [
				{ id: "pilot-tag1", value: "HTML" },
				{ id: "pilot-tag2", value: "CSS" },
				{ id: "pilot-tag3", value: "JavaScript" },
				{ id: "pilot-tag4", value: "Google Map API" },
			],
			// （pilot-1.jpg, pilot-2.jpg）
		},
		{
			id: "pilot-frixion",
			title: "百樂魔擦筆",
			type: "project",
			link: "https://www.pilot-pen.com.tw/event/2020-frixion/index.html",
			content: "百樂魔擦筆產品頁面製作，以及動態相關處理。",
			tags: [
				{ id: "pilot-frixion-tag1", value: "HTML" },
				{ id: "pilot-frixion-tag2", value: "SCSS" },
				{ id: "pilot-frixion-tag3", value: "jQuery" },
				{ id: "pilot-frixion-tag4", value: "Swiper" },
				{ id: "pilot-frixion-tag5", value: "skrollr" },
				{ id: "pilot-frixion-tag6", value: "Youtube API" },
			],
			// （pilot-frixion-1.jpg, pilot-frixion-2.jpg）
		},
		{
			id: "pilot-custom",
			title: "百樂客製化服務",
			type: "project",
			link: "https://www.pilot-pen.com.tw/event/customization/index.html",
			content: "百樂客製化服務、客製化雷雕頁面製作，以及動態相關處理。",
			tags: [
				{ id: "pilot-custom-tag1", value: "HTML" },
				{ id: "pilot-custom-tag2", value: "SCSS" },
				{ id: "pilot-custom-tag3", value: "jQuery" },
				{ id: "pilot-custom-tag4", value: "Swiper" },
				{ id: "pilot-custom-tag5", value: "WOW" },
				{ id: "pilot-custom-tag6", value: "Animate" },
			],
			// （pilot-custom-1.jpg, pilot-custom-2.jpg）
		},
		{
			id: "fglife-accessibility",
			title: "遠雄人壽 金融友善服務",
			type: "project",
			link: "https://accessibility.fglife.com.tw/index.html",
			content: "無障礙網站 AAA 級建置，在過程中了解無障礙網站的規範。",
			tags: [
				{ id: "fglife-accessibility-tag1", value: "HTML" },
				{ id: "fglife-accessibility-tag2", value: "CSS" },
				{ id: "fglife-accessibility-tag3", value: "無障礙網站" },
			],
			// （fglife-accessibility-1.jpg）
		},
		{
			id: "fglife-ehospital",
			title: "遠雄人壽 數位照護",
			type: "project",
			link: "https://member.fglife.com.tw/ehospital.do?actionType=main&utm_source=ecare&utm_medium=banner&utm_cam",
			content: "頁面製作、動態相關處理。",
			tags: [
				{ id: "fglife-ehospital-tag1", value: "HTML" },
				{ id: "fglife-ehospital-tag2", value: "SCSS" },
				{ id: "fglife-ehospital-tag3", value: "jQuery" },
				{ id: "fglife-ehospital-tag4", value: "WOW" },
				{ id: "fglife-ehospital-tag5", value: "Animate" },
			],
			// （ehospital-1.jpg）
		},
		{
			id: "fglife-sport",
			title: "遠雄人壽 活動案（已下線）",
			type: "project",
			link: "END",
			content: "活動頁面製作、動態處理，以及五個互動遊戲。",
			tags: [
				{ id: "fglife-sport-tag1", value: "HTML" },
				{ id: "fglife-sport-tag2", value: "SCSS" },
				{ id: "fglife-sport-tag3", value: "JavaScript" },
				{ id: "fglife-sport-tag4", value: "WOW" },
				{ id: "fglife-sport-tag5", value: "Animate" },
				{ id: "fglife-sport-tag6", value: "TweenMax" },
			],
			// （fglife-sport-1.jpg）
		},
		{
			id: "mli",
			title: "三商美邦人壽 保戶專區",
			type: "project",
			link: "https://www.mli.com.tw/ncsr/login",
			content: "保戶登入後資訊頁面，屬中大型多頁專案。",
			tags: [
				{ id: "mli-tag1", value: "HTML" },
				{ id: "mli-tag2", value: "SCSS" },
				{ id: "mli-tag3", value: "jQuery" },
				{ id: "mli-tag4", value: "Swiper" },
				{ id: "mli-tag5", value: "Datepicker" },
			],
			// （mli-1.jpg）
		},
		{
			id: "vinegarhouse",
			title: "醋醰媒體整合行銷",
			type: "project",
			link: "http://www.vinegarhouse.com.tw/index.php",
			content: "主要以 Bootstrap 進行頁面製作。",
			tags: [
				{ id: "vinegarhouse-tag1", value: "HTML" },
				{ id: "vinegarhouse-tag2", value: "SCSS" },
				{ id: "vinegarhouse-tag3", value: "jQuery" },
				{ id: "vinegarhouse-tag4", value: "Bootstrap" },
			],
			// （vinegarhouse-1.jpg. vinegarhouse-2.jpg）
		},
		{
			id: "next-blog",
			title: "Next Blog",
			type: "side-project",
			link: "https://billymind-blog.vercel.app",
			content: "使用 Next 搭配套件，將靜態 .md 檔案轉換為 HTML。",
			tags: [
				{ id: "next-blog-tag1", value: "Next" },
				{ id: "next-blog-tag2", value: "SCSS" },
				{ id: "next-blog-tag3", value: "gray-matter" },
				{ id: "next-blog-tag4", value: "react-markdown" },
			],
		},
		{
			id: "react-todo",
			title: "React TodoList",
			type: "side-project",
			link: "https://www.billyji.com/react-workshop-week4-todolist/#/signup",
			content: "使用 React 串接 API，做出 TodoList CRUD",
			tags: [
				{ id: "react-todo-tag1", value: "React" },
				{ id: "react-todo-tag2", value: "React Router" },
				{ id: "react-todo-tag3", value: "SCSS" },
				{ id: "react-todo-tag4", value: "RESTful API" },
				{ id: "react-todo-tag4", value: "Sweetalert2" },
			],
		},
	];

	return { data };
});
