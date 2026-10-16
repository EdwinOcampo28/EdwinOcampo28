import { Language, I18N_TEXTS } from "./i18n";
import "./mobile-view.css";

export interface MobileFeature {
	heading: { es: string; en: string };
	text: { es: string; en: string };
}

export interface MobileBadgeGroup {
	label: { es: string; en: string };
	v1: string;
	v2: string;
}

export interface MobileProject {
	id: string;
	title: string;
	subtitle: { es: string; en: string };
	description: { es: string; en: string };
	features: MobileFeature[];
	badges: MobileBadgeGroup[];
	tags: string[];
	github?: string;
	demo?: string;
}

export const DETAILED_PROJECTS: MobileProject[] = [
	{
		id: "global-gold", title: "Global Gold",
		subtitle: { es: "Sistema de gestión para joyería", en: "Jewelry management system" },
		description: { es: "Proyecto de gestión para organizar piezas, inventario, gramajes y tareas administrativas. Repositorio privado; no se muestra código público.", en: "A management project for jewelry pieces, inventory, weights, and administrative tasks. Private repository; no public code link is shown." },
		features: [{ heading: { es: "Inventario", en: "Inventory" }, text: { es: "Organización de productos y datos por pieza.", en: "Product and item-level data organization." } }, { heading: { es: "Administración", en: "Administration" }, text: { es: "Módulos de gestión y reportes.", en: "Management modules and reports." } }],
		badges: [{ label: { es: "TIPO", en: "TYPE" }, v1: "Proyecto personal", v2: "Gestión" }], tags: ["Gestión", "Inventario", "Interfaz"],
	},
	{
		id: "neon-arcade", title: "Neon Arcade Pro",
		subtitle: { es: "Centro de juegos con progresión", en: "Game hub with progression" },
		description: { es: "Proyecto de juegos con perfiles, XP, monedas, tienda, retos y clasificaciones. Enlace al repositorio público de juegos web.", en: "Game project with profiles, XP, coins, store, challenges, and leaderboards. Link to the public web games repository." },
		features: [{ heading: { es: "Progresión", en: "Progression" }, text: { es: "Perfiles y avance del jugador.", en: "Player profiles and progression." } }, { heading: { es: "Minijuegos", en: "Mini-games" }, text: { es: "Experiencias interactivas y puntuaciones.", en: "Interactive experiences and scores." } }],
		badges: [{ label: { es: "TIPO", en: "TYPE" }, v1: "Proyecto personal", v2: "Juegos web" }], tags: ["JavaScript", "HTML", "CSS", "Juegos"],
		github: "https://github.com/EdwinOcampo28/Juegos_Arcade_Pagina_Web",
	},
	{
		id: "edunova", title: "EDUNOVA",
		subtitle: { es: "Plataforma de aprendizaje", en: "Learning platform" },
		description: { es: "Sistema de gestión educativa con cursos, seguimiento del progreso, certificados, administración y reportes. El repositorio no se presenta como público.", en: "Education management system with courses, progress tracking, certificates, administration, and reports. The repository is not presented as public." },
		features: [{ heading: { es: "Cursos y progreso", en: "Courses and progress" }, text: { es: "Organización del contenido formativo.", en: "Structured learning content." } }, { heading: { es: "Certificados", en: "Certificates" }, text: { es: "Seguimiento y gestión de certificados.", en: "Certificate tracking and management." } }],
		badges: [{ label: { es: "REPOSITORIO", en: "REPOSITORY" }, v1: "GitHub público", v2: "Educación" }], tags: ["LMS", "Gestión", "Reportes"],
		github: "https://github.com/EdwinOcampo28/LMS_Plataforma_Educativa",
	},
	{
		id: "prestamo", title: "PRESTAMO+",
		subtitle: { es: "Gestión de préstamos y abonos", en: "Loan and installment management" },
		description: { es: "Sistema para solicitudes, aprobación o rechazo, pagos, abonos y reportes. Hay versiones web y terminal; no se enlaza un repositorio privado como si fuera público.", en: "System for loan requests, approvals or rejections, payments, installments, and reports. Web and terminal versions exist; private repositories are not linked as public." },
		features: [{ heading: { es: "Flujo de préstamos", en: "Loan workflow" }, text: { es: "Solicitudes y respuesta administrativa.", en: "Requests and administrative decisions." } }, { heading: { es: "Pagos y reportes", en: "Payments and reports" }, text: { es: "Registro de abonos y seguimiento de saldos.", en: "Installment recording and balance tracking." } }],
		badges: [{ label: { es: "TIPO", en: "TYPE" }, v1: "Proyecto personal", v2: "Finanzas" }], tags: ["Gestión", "Reportes", "Python", "Web"],
	},
	{
		id: "turismo", title: "Turismo Internacional",
		subtitle: { es: "Cotizaciones e itinerarios", en: "Quotes and itineraries" },
		description: { es: "Panel para cotizaciones, historial de facturas, resumen financiero y trazabilidad de itinerarios. Repositorio web público.", en: "Dashboard for quotes, invoice history, financial summary, and itinerary traceability. Public web repository." },
		features: [{ heading: { es: "Cotizaciones", en: "Quotes" }, text: { es: "Registro y consulta de viajes.", en: "Travel records and lookup." } }, { heading: { es: "Trazabilidad", en: "Traceability" }, text: { es: "Conexión entre destinos e itinerarios.", en: "Connections between destinations and itineraries." } }],
		badges: [{ label: { es: "REPOSITORIO", en: "REPOSITORY" }, v1: "GitHub público", v2: "Versión web" }], tags: ["HTML", "CSS", "JavaScript", "Gestión"],
		github: "https://github.com/EdwinOcampo28/Sistema_Turismo_Internacional_Web",
	},
	{
		id: "gestor-gastos", title: "Gestor de Gastos",
		subtitle: { es: "Organización de ingresos y gastos", en: "Income and expense tracking" },
		description: { es: "Proyecto personal para organizar ingresos y gastos. También forma parte de mi aprendizaje con herramientas en Python.", en: "Personal project for organizing income and expenses. It is also part of my learning with Python tools." },
		features: [{ heading: { es: "Organización", en: "Organization" }, text: { es: "Clasificación de movimientos y consulta de datos.", en: "Transaction classification and data review." } }, { heading: { es: "Versiones", en: "Versions" }, text: { es: "Trabajo con versiones web y de terminal.", en: "Work across web and terminal versions." } }],
		badges: [{ label: { es: "REPOSITORIO", en: "REPOSITORY" }, v1: "GitHub", v2: "Python" }], tags: ["Python", "Gestión", "Finanzas personales"],
		github: "https://github.com/EdwinOcampo28/TodosLosTrabajospython",
	},
];

export class MobileView {
	private viewEl!: HTMLElement;
	private switchBtnToMobile!: HTMLButtonElement;
	private currentLang: Language;
	private isVisible = false;
	private onSwitchTo3DCallback: () => void;
	private onSwitchToMobileCallback: () => void;
	private onLangChangeCallback: (lang: Language) => void;

	constructor(
		initialLang: Language,
		onSwitchTo3D: () => void,
		onSwitchToMobile: () => void,
		onLangChange: (lang: Language) => void,
	) {
		this.currentLang = initialLang;
		this.onSwitchTo3DCallback = onSwitchTo3D;
		this.onSwitchToMobileCallback = onSwitchToMobile;
		this.onLangChangeCallback = onLangChange;

		this.createViewElement();
		this.create3DSwitchButton();
		this.render();
	}

	public getIsVisible(): boolean {
		return this.isVisible;
	}

	public show() {
		this.isVisible = true;
		this.viewEl.classList.add("active");
		this.updateSwitchBtnVisibility();
		document.body.style.overflow = "auto";
	}

	public hide() {
		this.isVisible = false;
		this.viewEl.classList.remove("active");
		this.updateSwitchBtnVisibility();
		document.body.style.overflow = "hidden";
	}

	public updateSwitchBtnVisibility() {
		const isMobile = window.innerWidth <= 820;
		if (this.isVisible) {
			this.switchBtnToMobile.classList.add("is-hidden");
		} else if (isMobile) {
			this.switchBtnToMobile.classList.remove("is-hidden");
		} else {
			this.switchBtnToMobile.classList.add("is-hidden");
		}
	}

	public setLanguage(lang: Language) {
		this.currentLang = lang;
		this.render();
	}

	private create3DSwitchButton() {
		this.switchBtnToMobile = document.createElement("button");
		this.switchBtnToMobile.type = "button";
		this.switchBtnToMobile.className = "floating-3d-switch is-hidden";
		this.switchBtnToMobile.setAttribute("aria-label", "Abrir vista resumen");
		this.switchBtnToMobile.innerHTML = `
			<span class="switch-glyph">✦</span>
			<span class="switch-text">${this.currentLang === "en" ? "Mobile View" : "Vista Resumen"}</span>
		`;
		this.switchBtnToMobile.addEventListener("click", () => {
			this.onSwitchToMobileCallback();
		});
		document.body.appendChild(this.switchBtnToMobile);

		window.addEventListener("resize", () => {
			this.updateSwitchBtnVisibility();
		});
		this.updateSwitchBtnVisibility();
	}

	private createViewElement() {
		this.viewEl = document.createElement("section");
		this.viewEl.id = "mobile-portfolio-view";
		this.viewEl.setAttribute("aria-label", "Portafolio Adaptado");
		document.body.appendChild(this.viewEl);
	}

	private render() {
		const isEn = this.currentLang === "en";
		const texts = I18N_TEXTS[this.currentLang];

		const emailAddress = "edwinarevalo940@gmail.com";

		this.viewEl.innerHTML = `
			<div class="mobile-container">
				<!-- Top Bar -->
				<header class="mobile-topbar">
					<span class="mobile-badge">${texts.mobileBadge}</span>
					<button type="button" class="mobile-lang-btn" aria-label="Cambiar idioma">
						${isEn ? "ESPAÑOL" : "ENGLISH"}
					</button>
				</header>

				<!-- Hero Profile -->
				<div class="mobile-hero">
					<div class="mobile-avatar-wrapper">
						<div class="mobile-avatar-frame"></div>
						<img src="https://github.com/EdwinOcampo28.png" alt="Avatar de GitHub de Edwin Ocampo" class="mobile-avatar" width="112" height="112" />
					</div>
					<h1 class="mobile-name">Edwin Ocampo</h1>
					<div class="mobile-role">${texts.heroRole}</div>
					<div class="mobile-location">${texts.heroLocation}</div>
					<p class="mobile-bio">${texts.heroBio}</p>

					<!-- Quick Contact Actions -->
					<div class="mobile-actions">
						<a href="https://github.com/EdwinOcampo28" target="_blank" rel="noopener noreferrer" class="mobile-action-btn primary"><span class="btn-glyph">✦</span> GitHub</a>
						<a href="mailto:${emailAddress}" class="mobile-action-btn"><span class="btn-glyph">✦</span> ${texts.contactEmail}</a>
					</div>
				</div>

				<!-- ================= CAPÍTULO I ================= -->
				<div class="mobile-section">
					<div class="mobile-corner top-left"></div>
					<div class="mobile-corner top-right"></div>
					<div class="mobile-corner bottom-left"></div>
					<div class="mobile-corner bottom-right"></div>

					<div class="mobile-section-header">
						<span class="mobile-fleuron">❧</span>
						<span class="mobile-chapter-tag">${isEn ? "CHAPTER I" : "CAPÍTULO I"}</span>
						<h2 class="mobile-section-title">${texts.sectionAbout}</h2>
						<div class="mobile-section-subtitle">
							${isEn ? "The Evolutionary Path of a Software Craftsman" : "El Camino Evolutivo de un Artesano del Software"}
						</div>
					</div>

					<!-- Story Paragraphs -->
					<div class="mobile-narrative-box">
						<p class="narrative-p">${isEn ? "I am Edwin Ocampo. I build personal software projects and digital tools to organize information and simplify workflows." : "Soy Edwin Ocampo. Construyo proyectos personales de software y herramientas digitales para organizar información y simplificar procesos."}</p>
						<p class="narrative-p">${isEn ? "My projects include management systems, an educational platform, a loan workflow, a tourism dashboard, a games project, and an income and expense manager." : "Mis proyectos incluyen sistemas de gestión, una plataforma educativa, un flujo de préstamos, un panel de turismo, un proyecto de juegos y un gestor de ingresos y gastos."}</p>
						<p class="narrative-p">${isEn ? "I learn by building, testing, fixing issues, and preserving features that already work." : "Aprendo construyendo, probando, corrigiendo errores y conservando las funciones que ya trabajan correctamente."}</p>
					</div>
					<div class="skills-category">
						<div class="skills-category-title">${isEn ? "Tools and practices" : "Herramientas y prácticas"}</div>
						<div class="skills-tags-wrap">
							<span class="skill-tag highlight">HTML</span><span class="skill-tag highlight">CSS</span>
							<span class="skill-tag highlight">JavaScript</span><span class="skill-tag highlight">Python</span>
							<span class="skill-tag">Git</span><span class="skill-tag">GitHub</span>
							<span class="skill-tag">Interfaces web</span><span class="skill-tag">Sistemas de gestión</span>
							<span class="skill-tag">Pruebas y correcciones</span><span class="skill-tag">Documentación</span>
						</div>
					</div>
				</div>

				<!-- ================= CAPÍTULO II ================= -->
				<div class="mobile-section">
					<div class="mobile-corner top-left"></div><div class="mobile-corner top-right"></div>
					<div class="mobile-corner bottom-left"></div><div class="mobile-corner bottom-right"></div>
					<div class="mobile-section-header">
						<span class="mobile-fleuron">❧</span><span class="mobile-chapter-tag">${isEn ? "CHAPTER II" : "CAPÍTULO II"}</span>
						<h2 class="mobile-section-title">${texts.sectionJourney}</h2>
						<div class="mobile-section-subtitle">${isEn ? "Learning through practical projects" : "Aprendizaje mediante proyectos prácticos"}</div>
					</div>
					<div class="mobile-timeline">
						<div class="timeline-item"><div class="timeline-marker">✦</div><div class="timeline-content"><div class="timeline-date">${isEn ? "STEP 01" : "ETAPA 01"}</div><h3 class="timeline-title">${isEn ? "Learning the fundamentals" : "Aprender los fundamentos"}</h3><p class="timeline-desc">${isEn ? "Practice with programming exercises and small applications." : "Práctica con ejercicios de programación y aplicaciones pequeñas."}</p></div></div>
						<div class="timeline-item"><div class="timeline-marker">✦</div><div class="timeline-content"><div class="timeline-date">${isEn ? "STEP 02" : "ETAPA 02"}</div><h3 class="timeline-title">${isEn ? "Building complete systems" : "Construir sistemas completos"}</h3><p class="timeline-desc">${isEn ? "Developing projects with modules, records, navigation, and reports." : "Desarrollo de proyectos con módulos, registros, navegación y reportes."}</p></div></div>
						<div class="timeline-item"><div class="timeline-marker">✦</div><div class="timeline-content"><div class="timeline-date">${isEn ? "STEP 03" : "ETAPA 03"}</div><h3 class="timeline-title">${isEn ? "Improving and documenting" : "Mejorar y documentar"}</h3><p class="timeline-desc">${isEn ? "Testing features, improving usability, and preserving working versions." : "Pruebas de funciones, mejora de usabilidad y conservación de versiones funcionales."}</p></div></div>
					</div>
				</div>

				<!-- ================= CAPÍTULO III ================= -->
				<div class="mobile-section">
					<div class="mobile-corner top-left"></div><div class="mobile-corner top-right"></div>
					<div class="mobile-corner bottom-left"></div><div class="mobile-corner bottom-right"></div>
					<div class="mobile-section-header">
						<span class="mobile-fleuron">❧</span><span class="mobile-chapter-tag">${isEn ? "CHAPTER III" : "CAPÍTULO III"}</span>
						<h2 class="mobile-section-title">${texts.sectionExperience}</h2>
						<div class="mobile-section-subtitle">${isEn ? "How I approach a project" : "Cómo abordo un proyecto"}</div>
					</div>
					<div class="mobile-narrative-box">
						<p class="narrative-p"><strong>${isEn ? "1. Understand" : "1. Comprender"}</strong> — ${isEn ? "Identify the need and the main workflow." : "Identificar la necesidad y el flujo principal."}</p>
						<p class="narrative-p"><strong>${isEn ? "2. Organize" : "2. Organizar"}</strong> — ${isEn ? "Structure modules, navigation, and data." : "Estructurar módulos, navegación y datos."}</p>
						<p class="narrative-p"><strong>${isEn ? "3. Build and test" : "3. Construir y probar"}</strong> — ${isEn ? "Implement the features and verify the behavior." : "Implementar las funciones y verificar su comportamiento."}</p>
						<p class="narrative-p"><strong>${isEn ? "4. Improve" : "4. Mejorar"}</strong> — ${isEn ? "Refine clarity and fix issues without unnecessary changes." : "Mejorar la claridad y corregir errores sin hacer cambios innecesarios."}</p>
					</div>
				</div>

				<!-- ================= CAPÍTULO IV ================= -->
				<div class="mobile-section">
					<div class="mobile-corner top-left"></div>
					<div class="mobile-corner top-right"></div>
					<div class="mobile-corner bottom-left"></div>
					<div class="mobile-corner bottom-right"></div>

					<div class="mobile-section-header">
						<span class="mobile-fleuron">❧</span>
						<span class="mobile-chapter-tag">${isEn ? "CHAPTER IV" : "CAPÍTULO IV"}</span>
						<h2 class="mobile-section-title">${texts.sectionProjects}</h2>
						<div class="mobile-section-subtitle">
							${isEn ? "Selected Works, Systems Architectures & Live Demonstrations" : "Selección de Sistemas, Arquitecturas y Demostraciones en Vivo"}
						</div>
					</div>

					<div class="mobile-projects-list">
						${DETAILED_PROJECTS.map(proj => `
							<article class="mobile-project-card" id="card-${proj.id}">
								<div class="project-card-header">
									<h3 class="project-card-title">${proj.title}</h3>
								</div>
								<div class="project-card-subtitle">${isEn ? proj.subtitle.en : proj.subtitle.es}</div>
								<p class="project-card-desc">${isEn ? proj.description.en : proj.description.es}</p>

								<!-- Capabilities Accordion / List -->
								<div class="project-capabilities-box">
									<div class="capabilities-header">
										${isEn ? "KEY CAPABILITIES & ARCHITECTURE" : "CAPACIDADES & ARQUITECTURA CLAVE"}
									</div>
									<div class="capabilities-list">
										${proj.features.map(f => `
											<div class="capability-item">
												<div class="capability-title">${isEn ? f.heading.en : f.heading.es}</div>
												<div class="capability-desc">${isEn ? f.text.en : f.text.es}</div>
											</div>
										`).join("")}
									</div>
								</div>

								<!-- 4 Column Badges Matrix -->
								<div class="project-badges-matrix">
									${proj.badges.map(b => `
										<div class="badge-col">
											<div class="badge-col-header">${isEn ? b.label.en : b.label.es}</div>
											<div class="badge-col-v1">${b.v1}</div>
											<div class="badge-col-v2">${b.v2}</div>
										</div>
									`).join("")}
								</div>

								<!-- Tag pills -->
								<div class="project-card-tags">
									${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
								</div>

								<!-- Direct Action Links (NO EMOJIS) -->
								<div class="project-card-buttons">
									${proj.github ? `
										<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-btn" aria-label="${texts.viewCodeBtn}">
											<span class="btn-glyph">✦</span> ${texts.viewCodeBtn}
										</a>
									` : ""}
									${proj.demo ? `
										<a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="project-btn demo" aria-label="${texts.liveDemoBtn}">
											<span class="btn-glyph">✦</span> ${texts.liveDemoBtn}
										</a>
									` : ""}
								</div>
							</article>
						`).join("")}
					</div>

					<!-- ================= CIERRE: HOJA DE VIDA & CONTACTO DIRECTO ================= -->
					<div class="mobile-cv-section" id="section-contact-cv">
						<div class="mobile-corner top-left"></div>
						<div class="mobile-corner top-right"></div>
						<div class="mobile-corner bottom-left"></div>
						<div class="mobile-corner bottom-right"></div>

						<div class="mobile-section-header">
							<span class="mobile-fleuron">❧ ✦ ❧</span>
							<span class="mobile-chapter-tag">${texts.cvSectionTag}</span>
							<h3 class="mobile-section-title">${texts.cvSectionTitle}</h3>
							<div class="mobile-section-subtitle">${texts.cvSectionSubtitle}</div>
						</div>

						<!-- Perfil profesional: CV se agregará cuando exista un documento propio -->
						<div class="mobile-cv-card">
							<div class="cv-card-top">
								<div class="cv-badge-row"><span class="cv-official-pill">✦ ${isEn ? "PROFILE" : "PERFIL PROFESIONAL"}</span></div>
								<h4 class="cv-person-name">Edwin Ocampo</h4>
								<div class="cv-person-role">${texts.heroRole}</div>
								<div class="cv-person-sub">${isEn ? "Personal software projects and digital tools" : "Proyectos personales de software y herramientas digitales"}</div>
							</div>
							<div class="cv-highlights-box">
								<div class="cv-highlight-row"><span class="cv-hl-dot">✦</span><span class="cv-hl-text">${isEn ? "Explore the projects and public repositories available on GitHub." : "Explora los proyectos y repositorios públicos disponibles en GitHub."}</span></div>
							</div>
							<div class="cv-card-actions">
								<a href="https://github.com/EdwinOcampo28" target="_blank" rel="noopener noreferrer" class="cv-action-btn primary"><span class="cv-btn-glyph">↗</span><span class="cv-btn-title">GitHub · EdwinOcampo28</span></a>
							</div>
						</div>

						<!-- Contact Channels (Repeated at the end of projects) -->
						<div class="mobile-cv-contact-box">
							<div class="contact-box-header">
								<span class="contact-box-title">✦ ${texts.cvContactHeader} ✦</span>
							</div>

							<div class="mobile-actions cv-contact-actions">
								<a href="https://github.com/EdwinOcampo28" target="_blank" rel="noopener noreferrer" class="mobile-action-btn primary"><span class="btn-glyph">✦</span> GitHub</a>
								<a href="mailto:${emailAddress}" class="mobile-action-btn"><span class="btn-glyph">✦</span> ${texts.contactEmail}</a>
							</div>

							<div class="cv-details-grid">
								<div class="cv-detail-cell"><span class="cell-label">GitHub</span><a href="https://github.com/EdwinOcampo28" class="cell-value link">github.com/EdwinOcampo28</a></div>
								<div class="cv-detail-cell"><span class="cell-label">${texts.cvEmailLabel}</span><a href="mailto:${emailAddress}" class="cell-value link">${emailAddress}</a></div>
							</div>
						</div>
					</div>

					<!-- Tip Banner -->
					<div class="mobile-tip-banner">
						<span class="tip-banner-glyph">✦</span>
						<p class="tip-banner-text">${texts.rotateHint}</p>
					</div>
				</div>

				<!-- Footer -->
				<footer class="mobile-footer">
					<div class="footer-fleuron">❧ ✦ ❧</div>
					<div class="footer-copy">Edwin Ocampo · Colombia</div>
					<div class="footer-tech">Portafolio personal · HTML · CSS · JavaScript · Python</div>
				</footer>
			</div>

			<!-- Floating Switcher: Switch to 3D Book -->
			<button type="button" class="floating-view-switch" id="btn-switch-3d" aria-label="${texts.mobileSwitchTo3D}">
				<span class="switch-glyph">✦</span>
				<span class="switch-label">${texts.mobileSwitchTo3D}</span>
			</button>
		`;

		// Attach events
		const langBtn = this.viewEl.querySelector<HTMLButtonElement>(".mobile-lang-btn");
		langBtn?.addEventListener("click", () => {
			const nextLang: Language = this.currentLang === "es" ? "en" : "es";
			this.onLangChangeCallback(nextLang);
		});

		const switch3DBtn = this.viewEl.querySelector<HTMLButtonElement>("#btn-switch-3d");
		switch3DBtn?.addEventListener("click", () => {
			this.onSwitchTo3DCallback();
		});

		// Update 3D switch button text (when viewing 3D)
		if (this.switchBtnToMobile) {
			const switchText = this.switchBtnToMobile.querySelector(".switch-text");
			if (switchText) {
				switchText.textContent = texts.mobileSwitchToWeb;
			}
		}
	}
}
