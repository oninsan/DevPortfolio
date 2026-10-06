/** Progressive enhancement: content remains visible when JavaScript is unavailable. */
export function reveal(node: HTMLElement) {
	if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.classList.add('will-reveal');
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}

export function tilt(node: HTMLElement) {
	if (typeof window === 'undefined') return;
	const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
	if (!hover.matches || reduced.matches) return;

	const move = (event: PointerEvent) => {
		const bounds = node.getBoundingClientRect();
		const x = (event.clientX - bounds.left) / bounds.width - 0.5;
		const y = (event.clientY - bounds.top) / bounds.height - 0.5;
		node.style.setProperty('--tilt-x', `${(-y * 3).toFixed(2)}deg`);
		node.style.setProperty('--tilt-y', `${(x * 3).toFixed(2)}deg`);
		node.style.setProperty('--shine-x', `${((x + 0.5) * 100).toFixed(1)}%`);
		node.style.setProperty('--shine-y', `${((y + 0.5) * 100).toFixed(1)}%`);
	};
	const reset = () => {
		node.style.setProperty('--tilt-x', '0deg');
		node.style.setProperty('--tilt-y', '0deg');
	};
	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', reset);
	return {
		destroy: () => {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', reset);
		}
	};
}
