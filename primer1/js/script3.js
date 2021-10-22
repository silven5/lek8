function input() {
    var xn = 0,
        xk = 0,
        h = 1,
        y = 0,
        html = "";
    xn = parseFloat(document.querySelector("#xn").value);
    xk = parseFloat(document.querySelector("#xk").value);
    if ((xn == null) || (xk == null))
        html = "Помилка введення даних!!!";
    else
    if ((xn == "") || (xk == ""))
        html = "Помилка введення даних!!!";
    if ((isNaN(xn)) || (isNaN(xk)))
        html = "Помилка введення даних!!!";
    else {
        if (xn > xk) {
            let a = xn;
            xn = xk;
            xk = a;

        }
        html = "<h2>Функція cos(x)*cos(x)+x*x</h2><table><tr><td>x</td><td>y</td></tr>";
        let map = new Map();
        for (let x = xn; x <= xk; x = x + h) {
            y = Math.cos(x) * Math.cos(x) + x * x;
            map.set(x, y);
        }
        map.forEach((value, key, map) => {
            html = html + "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        });
        html = html + "</table>";
    }
    document.getElementById("rezult").innerHTML = html;

}