let numbers = [];

function sumInput() {



    while (true) {

        let value = prompt("Введіть число", 0);

        // Введення закінчено?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }
    let html = ""
    let sum = 0;
    for (let number of numbers) {
        sum += number;
        html = html + "   " + number;
    }
    return { html, sum };
}

function write_arr(a) {
    let html = "";
    a.forEach(element => {
        html = html + " " + element.toFixed(1);

    });
    return html;
}

function go3() {
    let { html, sum } = sumInput();
    //if (a>0)Math.sqrt(a) else a * a
    let numbers1 = numbers.map(a => a > 0 ? Math.sqrt(a) : a * a);
    let numbers2 = numbers.filter(a => a % 2 == 0);
    let dob = numbers.reduce((a, b) => a * b);
    document.querySelector("#rezult2").innerHTML = "Масив: " + html + "<br>" +
        "Перетворений масив: " + write_arr(numbers1) +
        "<br>" +
        "Масив з парних чисел:  " + write_arr(numbers2) +
        " <br> Сума=" + sum + "<br> Добуток=" + dob;
}