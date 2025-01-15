const url = new URL(window.location.href);
const parametros = url.searchParams;
let id = parametros.get("recorrido") || "POO";
let recorrido = recorridos[id];
let lenguaje = parametros.get("lenguaje") || "rb";
const path = root_path + id + '/';

insert("title",recorrido.label);

fetch(path + 'index.html')
    .then(response => response.text())
    .then(data => {
        let cleanData = data.trimEnd();
        element = document.getElementById("presentacion");
        element.innerHTML = cleanData;
    })
    .catch(error => {
        console.error('Error al cargar el archivo:', error);
    });

ol = document.getElementById("temas");
for(let i=0; i<recorrido.temas.length; i++ )
{
    a = document.createElement("a");
    a.href = "tema.html?recorrido=" + id + "&lenguaje=" + lenguaje + "&tema=" + i;
    a.textContent = recorrido.temas[i].label
    li = document.createElement("li");
    li.appendChild(a);
    ol.appendChild(li);
}

insert("lang",lenguajes[lenguaje].label);
