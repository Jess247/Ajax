var resOb = new XMLHttpRequest();
window.onload = function() {
	document.getElementById("request").onclick = function() {
		resOb.open('get', 'lotterynum2.php', true);
		resOb.onreadystatechange = function() {
			if (resOb.readyState == 4) {
				var a = document.getElementById("response");
				a.innerHTML = "";
				var obj = JSON.parse(resOb.responseText);
				for (i in obj) {
					a.innerHTML += 
					  "<div style=" + 
					  "'width:70px;display:inline-block'>" + 
					  i + "</div>:<div style=" +
					  "'text-align:right;width:50px;" + 
					  "display:inline-block'>"
					   + obj[i] + "</div><br/>";
				}
			}
		};
		resOb.send(null);
	};
};