const allDiv = document.querySelectorAll("div");

for (let i = 0; i < allDiv.length; ++i) {
	allDiv[i].addEventListener(
		"click",
		function (i) {
			alert(allDiv[i].id);
			event.stopPropagation();
		}.bind(this, i)
	);
}
