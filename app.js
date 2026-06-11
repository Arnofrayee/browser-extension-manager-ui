const $allBtn = document.querySelector(".sorting1");
const $activeBtn = document.querySelector(".sorting2");
const $inactiveBtn = document.querySelector(".sorting3");
const $extContainer = document.querySelector(".extContainer");
const url = "http://10.69.4.8:3000/v1/extensions";
document.addEventListener("DOMContentLoaded", async (e) => {
	e.preventDefault();
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: "Bearer 123",
		},
	});
	const result = await response.json();
	for (let i = 0; i < result.length; i++) {
		extension(result[i]);
		console.log(result[i]);
	}
});

$activeBtn.addEventListener("click", async () => {
	$extContainer.innerHTML = "";
	const response = await fetch(url + "?isActive=true", {
		method: "GET",
		headers: {
			Authorization: "Bearer 123",
		},
	});
	const result = await response.json();
	for (let i = 0; i < result.length; i++) {
		extension(result[i]);
		console.log(result[i]);
	}
});
$inactiveBtn.addEventListener("click", async () => {
	$extContainer.innerHTML = "";
	const response = await fetch(url + "?isActive=false", {
		method: "GET",
		headers: {
			Authorization: "Bearer 123",
		},
	});
	const result = await response.json();
	for (let i = 0; i < result.length; i++) {
		extension(result[i]);
		console.log(result[i]);
	}
});
$allBtn.addEventListener("click", async () => {
	$extContainer.innerHTML = "";
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: "Bearer 123",
		},
	});
	const result = await response.json();
	for (let i = 0; i < result.length; i++) {
		extension(result[i]);
		console.log(result[i]);
	}
});
let active = false;
function extension(elem) {
	const $extensionDiv = document.createElement("div");
	$extensionDiv.classList.add("extDiv");
	const $imgTitle = document.createElement("div");
	$imgTitle.classList.add("imgTitle");
	const $btnStatus = document.createElement("div");
	$btnStatus.classList.add("btnStatus");
	const $titleDesc = document.createElement("div");
	$titleDesc.classList.add("titleDesc");
	const $extImg = document.createElement("img");
	$extImg.classList.add("extImg");
	const $extName = document.createElement("h2");
	$extName.classList.add("extName");
	const $extDesc = document.createElement("p");
	$extDesc.classList.add("extDesc");
	const $extRemove = document.createElement("button");
	$extRemove.classList.add("extRemove");
	const $extStatus = document.createElement("input");
	$extStatus.classList.add("extStatus");
	$extImg.setAttribute("src", elem.logo);
	$extName.textContent = elem.name;
	$extDesc.textContent = elem.description;
	$extRemove.textContent = "Remove";
	$extStatus.setAttribute("type", "checkbox");
	if (elem.isActive == true) {
		$extStatus.setAttribute("checked", true);
		active = true;
	}
	$extRemove.addEventListener("click", () => {
		$extensionDiv.remove();
	});
	$extContainer.appendChild($extensionDiv);
	$extensionDiv.appendChild($imgTitle);
	$extensionDiv.appendChild($btnStatus);
	$imgTitle.appendChild($titleDesc);
	$imgTitle.appendChild($extImg);
	$titleDesc.appendChild($extName);
	$titleDesc.appendChild($extDesc);
	$btnStatus.appendChild($extRemove);
	$btnStatus.appendChild($extStatus);
}
function filter() {
	$allBtn.addEventListener("click", () => {
		extension;
	});
}
