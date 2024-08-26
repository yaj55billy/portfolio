import gsap from "gsap";
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// gsap.registerPlugin(DrawSVGPlugin);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("gsap", gsap);
});
