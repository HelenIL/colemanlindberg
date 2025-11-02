// small helpers to prefetch lazily-loaded route bundles
export const prefetchHome = () => import('./pages/home/home');
export const prefetchOwnTheView = async () => {
	// load the route bundle
	const mod = await import('./pages/owntheview');
	// also load the album tracklist to get cover + first track
	try {
		const tracks = (await import('./albums/owntheview/tracklist')).default;
			if (tracks && tracks.length) {
				preloadAsset(tracks[0].image, 'image');
			}
	} catch (e) {
		// ignore
	}
	return mod;
};

export const prefetchBoys = async () => {
	const mod = await import('./pages/boys');
	try {
		const tracks = (await import('./albums/boys/tracklist')).default;
			if (tracks && tracks.length) {
				preloadAsset(tracks[0].image, 'image');
			}
	} catch (e) {}
	return mod;
};

export const prefetchCircus = async () => {
	const mod = await import('./pages/circus');
	try {
		const tracks = (await import('./albums/circus/tracklist')).default;
			if (tracks && tracks.length) {
				preloadAsset(tracks[0].image, 'image');
			}
	} catch (e) {}
	return mod;
};

function preloadAsset(href: string | undefined, as: 'image' | 'audio' | string) {
	if (!href || typeof document === 'undefined') return;
	// avoid duplicating link elements
	const existing = Array.from(document.head.querySelectorAll('link[rel="preload"]')).find(l => l.getAttribute('href') === href);
	if (existing) return;
	const link = document.createElement('link');
	link.rel = 'preload';
	link.as = as as string;
	link.href = href;
	// audio should use crossOrigin for some browsers if coming from CDN; omitted here
	document.head.appendChild(link);
}

// small debounce helper for hover prefetch to avoid unnecessary downloads
function debounce<T extends (...args: any[]) => any>(fn: T, wait = 200) {
	let t: number | null = null;
	return (...args: Parameters<T>) => {
		if (t) window.clearTimeout(t);
		t = window.setTimeout(() => {
			fn(...args);
			t = null;
		}, wait) as unknown as number;
	};
}

export const prefetchHomeDebounced = debounce(prefetchHome, 200);
export const prefetchOwnTheViewDebounced = debounce(prefetchOwnTheView, 200);
export const prefetchBoysDebounced = debounce(prefetchBoys, 200);
export const prefetchCircusDebounced = debounce(prefetchCircus, 200);
