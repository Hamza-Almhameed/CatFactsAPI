let fact = document.querySelector('p');
let generate = document.querySelector('button');
let req = new XMLHttpRequest();

req.open('GET', 'https://catfact.ninja/fact');
req.send();

req.onreadystatechange = function () {
    let data = JSON.parse(req.responseText);
    fact.innerHTML = data.fact;
}

generate.onclick = function () {
    req.open('GET', 'https://catfact.ninja/fact');
    req.send();

    req.onreadystatechange = function () {
    let data = JSON.parse(req.responseText);
    fact.innerHTML = data.fact;
}
}