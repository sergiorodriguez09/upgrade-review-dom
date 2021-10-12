//! 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ul=document.createElement('ul');
countries.forEach(country=>{
    let li=document.createElement('li');
    li.textContent=country
    ul.appendChild(li)
})
document.body.appendChild(ul)

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector(".fn-remove-me").remove()

//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let ul2=document.createElement('ul');

cars.forEach(car=>{
    let li2=document.createElement("li");
    li2.textContent=car;
    ul2.appendChild(li2)
})

document.querySelector("div[data-function='printHere']").appendChild(ul2)

//! 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let ul3=document.createElement("ul");
countries2.forEach(country=>{
    let li3=document.createElement("li");
    li3.innerHTML=`<div>
    <h4>${country.title}</h4>
    <img src="${country.imgUrl}" alt="" >
    </div>`
    ul3.appendChild(li3);
})
document.body.appendChild(ul3)

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

let btn=document.createElement("button");
btn.textContent="borrar ultimo elemento"
btn.addEventListener("click",()=>{
    ul3.lastElementChild.remove() 
})
document.body.appendChild(btn)