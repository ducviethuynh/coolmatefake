// scroll sticky header
window.addEventListener("scroll", () => {
	// console.log(document.querySelector("#header"));
	if (scrollY > 50) {
		document.querySelector("#header").classList.add("active-header");
	} else {
		document.querySelector("#header").classList.remove("active-header");
	}
});

const sliderItem = document.querySelectorAll(".slider-item");

for (let index = 0; index < sliderItem.length; index++) {
	sliderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");
// console.log(sliderItem.length);
const arrowRight = document.querySelector(".ri-arrow-right-double-line");
const arrowLeft = document.querySelector(".ri-arrow-left-double-line");
let i = 0;
if (arrowRight != null && arrowLeft != null) {
	arrowRight.addEventListener("click", () => {
		if (i < sliderItem.length - 1) {
			i++;
			sliderMove(i);
		} else {
			return false;
		}
	});

	arrowLeft.addEventListener("click", () => {
		if (i <= 0) {
			return false;
		} else {
			i--;
			console.log(i);
			sliderMove(i);
		}
	});

	function autoSlider() {
		if (i <= sliderItem.length - 1) {
			sliderMove(i);
			i++;
			console.log(i);
		} else {
			i = 0;
		}
	}
}
function sliderMove(i) {
	sliderItems.style.left = -(i * 100) + "%";
}

// setInterval(autoSlider, 2000);

// Toggle menu mobile
const menubar = document.querySelector(".header-bar-icon");
const headerNav = document.querySelector(".header-nav");
menubar.addEventListener("click", () => {
	headerNav.classList.toggle("active");
});

// click image detail product
const imageSmall = document.querySelectorAll(".product-images-items img");
const imageMain = document.querySelector(".main-image");
for (let index = 0; index < imageSmall.length; index++) {
	imageSmall[index].addEventListener("click", () => {
		for (let j = 0; j < imageSmall.length; j++) {
			imageSmall[j].classList.remove("active");
		}
		imageMain.src = imageSmall[index].src;
		imageSmall[index].classList.add("active");
	});
}

// Quantity product increase decrease
const qtyDecrease = document.querySelector(".ri-subtract-fill");
const qtyIncrease = document.querySelector(".ri-add-line");
let qtyNumber = document.querySelector("#qtyNumber");
let qty = 1;

if (qtyDecrease !== null && qtyIncrease !== null) {
	qtyIncrease.addEventListener("click", () => {
		qty += 1;
		qtyNumber.value = qty;
	});

	qtyDecrease.addEventListener("click", function () {
		if (qtyNumber.value <= 1) {
			qtyDecrease.disabled = true;
			return false;
		} else {
			qty--;
			qtyNumber.value = qty;
		}
	});
}
