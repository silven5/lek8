function numberGenerator() {
    let num = 1;

    function checkNumber() {
        document.getElementById("rezult1").innerHTML = num;
    }
    num++;
    return checkNumber;

}

function go1() {
    var number = numberGenerator();
    number();
}

var multThenAdd = num => mul => add => num * mul + add;

function go2() {
    var timesTwoPlusFour = (num) => multThenAdd(num)(2)(4)
    let html = "";
    html = timesTwoPlusFour(1) //> 6
    html = html + "<br> " + timesTwoPlusFour(10) //> 24
    document.getElementById("rezult1").innerHTML = html;
}