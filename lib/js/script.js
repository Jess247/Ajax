var resOb = new XMLHttpRequest();
window.onload = function() {
    document.getElementById("generateNum").onclick =
    function() {
        resOb.open('get', 'lotterynum.php', true);
        resOb.onreadystatechange = function() {
            if(resOb.readyState == 4) {
                document.getElementById("lotteryNum").innerHTML = 
                resOb.responseText;
            }
        };
        resOb.send(null);
    };
};