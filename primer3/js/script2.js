function sumInput() {

    let numbers = [];

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

function go3() {
    let { html, sum } = sumInput();
    document.querySelector("#rezult2").innerHTML = "Масив: " + html + "<br> Сума=" + sum;
}