import Flipbook from "./flipbook";
import initChaptersNav, { ChaptersNav } from "./chapters-nav";
import { Language } from "./i18n";
import { MobileView } from "./mobile-view";

declare global {
	interface Window {
		flipbook: Flipbook;
	}
}

function getActiveAreas(lang: Language, pageWidth: number, pageHeight: number) {
	const isEn = lang === "en";
	return [
		{ faceIndex: 3, link: "https://github.com/EdwinOcampo28", top: 675 / pageHeight, left: 55 / pageWidth, width: 375 / pageWidth, height: 48 / pageHeight, title: "GitHub - Edwin Ocampo" },
		{ faceIndex: 3, link: "mailto:edwinarevalo940@gmail.com", top: 750 / pageHeight, left: 55 / pageWidth, width: 375 / pageWidth, height: 48 / pageHeight, title: "Correo - Edwin Ocampo" },
		{ faceIndex: 18, link: "https://github.com/EdwinOcampo28", top: 980 / pageHeight, left: 325 / pageWidth, width: 220 / pageWidth, height: 30 / pageHeight, title: "GitHub - EdwinOcampo28" },
		{ faceIndex: 21, link: "https://github.com/EdwinOcampo28/LMS_Plataforma_Educativa", top: 880 / pageHeight, left: 60 / pageWidth, width: 220 / pageWidth, height: 40 / pageHeight, title: "GitHub - EDUNOVA" },
		{ faceIndex: 20, link: "https://github.com/EdwinOcampo28/Juegos_Arcade_Pagina_Web", top: 880 / pageHeight, left: 60 / pageWidth, width: 220 / pageWidth, height: 40 / pageHeight, title: isEn ? "GitHub - Arcade Games" : "GitHub - Juegos Arcade" },
		{ faceIndex: 23, link: "https://github.com/EdwinOcampo28/Sistema_Turismo_Internacional_Web", top: 880 / pageHeight, left: 60 / pageWidth, width: 220 / pageWidth, height: 40 / pageHeight, title: isEn ? "GitHub - International Tourism" : "GitHub - Turismo Internacional" },
		{ faceIndex: 24, link: "https://github.com/EdwinOcampo28/TodosLosTrabajospython", top: 880 / pageHeight, left: 60 / pageWidth, width: 220 / pageWidth, height: 40 / pageHeight, title: isEn ? "GitHub - Python Projects" : "GitHub - Proyectos Python" },
		{ faceIndex: 30, link: "https://github.com/EdwinOcampo28", top: 980 / pageHeight, left: 325 / pageWidth, width: 220 / pageWidth, height: 30 / pageHeight, title: "GitHub - EdwinOcampo28" },
	];
}

function getPageTextureUrls(lang: Language, _url: (path: string) => string): string[] {
	const dir = lang === "en" ? "/img/pages-en/" : "/img/pages/";
	return [
		_url(`${dir}cover-front.webp`),
		_url(`${dir}welcome.webp`),
		_url(`${dir}about.webp`),
		_url(`${dir}who-am-i.webp`),
		_url(`${dir}my-story.webp`),
		_url(`${dir}skills.webp`),
		_url(`${dir}interests.webp`),
		_url(`${dir}blank.webp`),
		_url(`${dir}journey.webp`),
		_url(`${dir}map-1.webp`),
		_url(`${dir}map-2.webp`),
		_url(`${dir}blank.webp`),
		_url(`${dir}career.webp`),
		_url(`${dir}thor-systems.webp`),
		_url(`${dir}thor-systems-2.webp`),
		_url(`${dir}freelance.webp`),
		_url(`${dir}freelance-2.webp`),
		_url(`${dir}blank.webp`),
		_url(`${dir}projects.webp`),
		_url(`${dir}qyou.webp`),
		_url(`${dir}qyou-2.webp`),
		_url(`${dir}iq-tester.webp`),
		_url(`${dir}betting-tarot.webp`),
		_url(`${dir}autoposter.webp`),
		_url(`${dir}autoposter-2.webp`),
		_url(`${dir}export-robot.webp`),
		_url(`${dir}six-dot-bot.webp`),
		_url(`${dir}autoreply.webp`),
		_url(`${dir}time-recorder.webp`),
		_url(`${dir}fifteen-js.webp`),
		_url(`${dir}the-book.webp`),
		_url(`${dir}cover-back.webp`),
	];
}

function init() {
	const containerEl = document.getElementById("flipbook-container");

	const pageWidth = 764;
	const pageHeight = 1080;
	if (!containerEl) {
		console.error("No container element found");
		return;
	}

	const baseUrl = import.meta.env.BASE_URL || "";
	const _url = (path: string) => {
		if (baseUrl.endsWith("/") && path.startsWith("/")) {
			return baseUrl + path.slice(1);
		}
		return baseUrl + path;
	};

	const urlParams = new URLSearchParams(window.location.search);
	const paramLang = urlParams.get("lang") as Language | null;
	let initialLang: Language = "es";
	if (paramLang === "en" || paramLang === "es") {
		initialLang = paramLang;
		localStorage.setItem("portfolio_lang", paramLang);
	} else {
		initialLang = ((localStorage.getItem("portfolio_lang") as Language) || "es") === "en" ? "en" : "es";
	}

	window.flipbook = new Flipbook({
		containerEl,
		textureUrls: {
			pages: getPageTextureUrls(initialLang, _url),
			spineInner: _url("/img/pages/spine.webp"),
			spineOuter: _url("/img/pages/spine.webp"),
			coverEdgeTB: _url("/img/pages/cover-edge-tb.webp"),
			coverEdgeLR: _url("/img/pages/cover-edge-lr.webp"),
			spineEdgeTB: _url("/img/pages/spine-edge-tb.webp"),
			spineEdgeLR: _url("/img/pages/cover-edge-tb.webp"),
			desk: _url("/img/desk.webp"),
			blank: _url(initialLang === "en" ? "/img/pages-en/blank.webp" : "/img/pages/blank.webp"),
		},
		pageEdgeColor: 0x18b9a7,
		pageWidth,
		pageHeight,
		coverThickness: 5,
		pageRootThickness: 5,
		pageThickness: 1.5,
		coverMarginX: 12,
		coverMarginY: 10,
		pageActiveAreas: getActiveAreas(initialLang, pageWidth, pageHeight),
	});

	const isMobileDevice = (): boolean => {
		const ua = navigator.userAgent || "";
		const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
		const hasTouch = (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || ("ontouchstart" in window);
		const isSmallScreen = window.innerWidth <= 820;
		return isSmallScreen || (isMobileUA && window.innerWidth <= 1024) || (hasTouch && isSmallScreen);
	};

	let nav: ChaptersNav | null = null;
	let userToggled3D = false;
	const shouldStartMobile = isMobileDevice();

	const onSwitchTo3D = () => {
		userToggled3D = true;
		sessionStorage.setItem("portfolio_view_mode", "3d");
		mobileView.hide();
		if (window.flipbook.getIntroPhase() !== "COMPLETED") {
			window.flipbook.finishIntroImmediately();
		} else {
			window.flipbook.restoreCamera(0);
		}
	};

	const onSwitchToMobile = () => {
		userToggled3D = false;
		sessionStorage.setItem("portfolio_view_mode", "mobile");
		mobileView.show();
	};

	const onLanguageChanged = (newLang: Language) => {
		initialLang = newLang;
		localStorage.setItem("portfolio_lang", newLang);
		const url = new URL(window.location.href);
		url.searchParams.set("lang", newLang);
		window.history.replaceState({}, "", url.toString());

		mobileView.setLanguage(newLang);
		window.flipbook.setActiveAreas(getActiveAreas(newLang, pageWidth, pageHeight));
		window.flipbook.updatePageTextures(getPageTextureUrls(newLang, _url));
		if (nav) {
			nav.applyLanguage(newLang);
		}
	};

	const mobileView = new MobileView(
		initialLang,
		onSwitchTo3D,
		onSwitchToMobile,
		onLanguageChanged,
	);

	if (shouldStartMobile) {
		mobileView.show();
	}

	window.flipbook.onIntroCompleted(() => {
		setTimeout(() => {
			nav = initChaptersNav(window.flipbook);
			nav.onLanguageChange(newLang => {
				onLanguageChanged(newLang);
			});
		}, 100);
	});

	window.addEventListener("resize", () => {
		const isNowMobile = isMobileDevice();
		if (isNowMobile && !mobileView.getIsVisible() && !userToggled3D) {
			mobileView.show();
		} else if (!isNowMobile && mobileView.getIsVisible() && !sessionStorage.getItem("portfolio_view_mode")) {
			onSwitchTo3D();
		}
		mobileView.updateSwitchBtnVisibility();
	});
}

function start() {
	// Yield to the browser so the logo, overlay, and initial frame are painted first
	requestAnimationFrame(() => {
		setTimeout(init, 0);
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", start);
} else {
	start();
}
