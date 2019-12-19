const image = document.querySelector("#me");

const removePic = () => {
	if (window.scrollY !== 0) {
        image.style.opacity = 0;
        image.style.transform = "scale(0.5)";
	} else {
        image.style.opacity = 1;
        image.style.transform = "scale(1)";
	}
};

window.addEventListener("scroll", removePic);
