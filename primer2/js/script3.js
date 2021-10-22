const div3 = document.querySelector("#async_pizza");

let s = '';

function mPizza() {
    let Pizza = ['Маргарита', 'Маргаріта', 'Американа', 'Гавайська'];
    let i1 = 0;
    let ff = setInterval(() => {

        // Якщо виготовили всі піцци то починаємо знову
        if (i1 >= Pizza.length) {
            i1 = 0;
            clearInterval(ff);
        }
        write('Замовлення на виготовлення піцци ' + Pizza[i1] + ' отримано. Починаємо готувати', div3);
        s = Pizza[i1];
        i1++;
        setTimeout(a_Pizza, 2000);
    }, 5000);
}




const a_Pizza = function(Pizza) {
    write('Ура піца ' + s + ' вже готова', div3);
    write('Отримайте Ваш заказ', div3)
}

function asyncPizza() {
    div3.style.display = "block";
    let element = div3;
    clear_div(element);
    mPizza();


}