const div = document.querySelector("#example1");

var i = 1000000;

function step() {

    if (i > 0) {
        i--;
        //створюємо рядок з коліром і якщо його довжина менше за 6 додаємо нулі
        let hex = "#" + String(i).padStart(6, "0");

        div.innerHTML = hex;
        div.style.backgroundColor = hex;
    } else {
        i = 1000000;
    }
    //говоримо браузеру, що на наступному кадрі буде анімація

    requestAnimationFrame(step);

}


requestAnimationFrame(step);