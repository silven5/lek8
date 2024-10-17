function ras() {
    a = 5;
    var a;
    a = a + 5;
    let s;
    s = s + 10;
    a = a + 'abc';
    a = a - 10;
    a = a + 10;
    a = 5.2;
    a = a + 7;
    let paragraph = document.querySelector("#demo_script2");
    paragraph.style.color = "red";
}

function ras1() {


    let paragraph = document.querySelectorAll("p");
    for (let p of paragraph)
        p.style.color = "blue";

}

function ras2() {
    let paragraph = document.querySelectorAll("#section2 p");
    paragraph.forEach(p => { p.style.color = "green"; })
}