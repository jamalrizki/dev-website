// Shared particles.js config, ported from the original assets/js/particle.js.
// `count` and `interactive` are the only knobs the smaller footer/header
// instances need to tune down relative to the full home-page field.
export function particlesOptions({ count = 140, interactive = true } = {}) {
	return {
		particles: {
			number: { value: count, density: { enable: true, value_area: 800 } },
			color: { value: ['#0D0D0D', '#404040', '#737373', '#29C7D9'] },
			shape: {
				type: 'circle',
				stroke: { width: 0, color: '#fff' },
				polygon: { nb_sides: 5 }
			},
			opacity: { value: 1, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
			size: { value: 8, random: true, anim: { enable: false, speed: 10, size_min: 10, sync: false } },
			line_linked: { enable: true, distance: 150, color: '#808080', opacity: 0.4, width: 1 },
			move: {
				enable: true,
				speed: 5,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: { enable: false, rotateX: 600, rotateY: 1200 }
			}
		},
		interactivity: {
			detect_on: 'window',
			events: {
				onhover: { enable: interactive, mode: 'repulse' },
				onclick: { enable: interactive, mode: 'push' }
			},
			modes: {
				repulse: { distance: 70, duration: 0.4 },
				push: { particles_nb: 4 }
			}
		},
		retina_detect: true
	};
}
