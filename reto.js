const url = new URL(window.location.href);
const parametros = url.searchParams;
let id = parametros.get("reto");
let reto = retos[id];
let lenguaje = parametros.get("lenguaje");
let path = recorridos[reto.recorrido].github + reto.coleccion + '/';

insert("title",reto.label);

let resource = path + id + '.html';
fetch(resource)
    .then(response => response.text())
    .then(data => {
        let cleanData = data.trimEnd();
        element = document.getElementById("enunciado");
        element.innerHTML = cleanData;
    })
    .catch(error => {
        console.error('Error al cargar el archivo:', error);
    });

document.getElementById("test").setAttribute("data-code",path + test(id,lenguaje));
insert("test-fileName",test(id,lenguaje));
document.getElementById("out").setAttribute("data-code",path + out(id,lenguaje));

insert("sol-fileName",sol(id,lenguaje));
document.getElementById("sol").setAttribute("data-code",path + sol(id,lenguaje));

insert("recorrido",recorridos[reto.recorrido].label);
insert("lenguaje",lenguaje);
insert("tema",reto.tema);
