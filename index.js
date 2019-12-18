const spiral = document.querySelector("#background");

function zoom() {
	const scroll = Math.round(window.scrollY / 100) * 2;
    const rotate = Math.round(window.scrollY / 10);

	spiral.style.transform =
        scroll < 10 ? `scale(1.0${scroll})` : `scale(1.${scroll})`;
}

function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

window.addEventListener("scroll", debounce(zoom));
