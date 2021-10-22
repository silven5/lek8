//Синхроно
const div1 = document.querySelector("#sync");

function write(s, div) {
    var p = document.createElement("p");
    p.innerHTML = s;
    p.className = 'section-grid__p';
    div.append(p);

}

function clear_div(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function makePizza(Pizza) {
    write('Замовлення на виготовлення піцци ' + Pizza + ' отримано. Починаємо готувати', div1);
    write('Ура ' + Pizza + ' вже готова', div1);
}

function readBook(Book) {
    write('Читаю цікаву книгу ' + Book, div1);
}

function eatPizza(Pizza) {
    write('Нарешті їм піццу ' + Pizza, div1);
}

function syncGo() {
    div1.style.display = "block";
    let element = div1;
    clear_div(element);
    let Pizza = 'Маргарита';
    let Book = 'Гаррі Поттер';
    makePizza(Pizza);
    readBook(Book);
    eatPizza(Pizza);
}
//Асинхроно
const div2 = document.querySelector("#async");
const a_makePizza = function(Pizza, cb) {
    write('Замовлення на виготовлення піцци ' + Pizza + ' отримано. Починаємо готувати', div2);
    //Функція оберненого виклику
    //setTimeout Дозволяє викликати функцію один раз через певний час
    setTimeout(cb, 3000);
}

const a_readBook = function(Book) {
    write('Читаю цікаву книгу ' + Book, div2);
}

const a_eatPizza = function() {
    write('Ура піца вже готова', div2);
    write('Нарешті, вкусна смачна піца!!!Я її їм!!!!', div2)
}

function asyncGo() {
    div2.style.display = "block";
    let element = div2;
    clear_div(element);
    let Pizza = 'Маргарита';
    let Book = 'Гаррі Поттер';
    a_makePizza(Pizza, a_eatPizza);
    a_readBook(Book);
}