var resOb = new XMLHttpRequest();
window.onload = function() {
	document.getElementById("request").onclick = function() {
		resOb.open('get', 'formularauswertung.php?n=' + encodeURIComponent(document.getElementById("n").value), true);
		resOb.onreadystatechange = function() {
			if (resOb.readyState == 4) {
				document.getElementById("response").innerHTML = resOb.responseText;
			}
		};
		resOb.send(null);
	};
};
