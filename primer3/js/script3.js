function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

function write(arr, id, h3) {
    var html = "<h3>" + h3 + "</h3><table> <tr> <th>Name</th> <th>Age</th></tr>";
    for (let i = 0; i < arr.length; i++) {
        html = html + "<tr> <td>" + arr[i].name + "</td><td>" + arr[i].age + "</td>" + "</tr>"
    }
    html = html + "</table>";
    document.getElementById(id).innerHTML = html;

}

function getAverageAge(arr) {
    return arr.reduce((prev, arr) => prev + parseInt(arr.age), 0) / arr.length;
}

function goJSON() {
    var people = JSON.parse(data);
    write(people, "rezult3", "Початкові значення");
    sortByAge(people);
    write(people, "rezult4", "Відсортовано");
    document.querySelector("#rezult5").innerHTML = "Середнє: " + getAverageAge(people).toFixed(2);
}