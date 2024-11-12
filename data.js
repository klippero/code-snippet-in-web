const root_path = "https://raw.githubusercontent.com/klippero/code-snippet-in-web/refs/heads/main/";

const recorridos = {
    "POO":
    {
        label: "Programación Orientada a Objetos",
        temas: 
        [
            { 
                label: 'Entorno Ruby',
                secciones: [
                    { label: 'Intérprete' },
                    { label: 'IDE Visual Studio Code' },
                    { label: 'Debugger' }
                ]
            },
            { label: 'Clases y objetos' },
            { label: 'Métodos' },
            { label: 'Constructor' },
            { label: 'Atributos' },
            { label: 'Expresión #{}' },
            { label: 'Métodos que modifican el estado' },
            { label: 'Parámetros de un método' },
            { label: 'Parámetros de un constructor' },
            { label: 'Valores por defecto para parámetros' },
            { label: 'Lectura por teclado' },
            { label: 'return' },
            { label: 'to_s' },
            { label: 'Consultar un atributo' },
            { label: 'IRB: interactive Ruby' },
            { label: 'Operadores aritméticos' },
            { label: 'Operadores relacionales' },
            { label: 'if elsif else' },
            { label: 'Operadores lógicos' },
            { label: 'Métodos ? y return de expresiones lógicas' },
            { label: 'while' },
            { label: 'times / each' },
            { label: 'Listas' },
            { label: 'Implementando operadores' },
            { label: 'Asignación abreviada' },
            { label: 'Comentarios' },
            { label: 'Constantes' },
            { label: 'Diccionarios' },
            { label: 'Parámetros requeridos, por defecto y opcionales' },
            { label: 'Keyword arguments' },
            {
                label: 'Excepciones',
                secciones: [
                    { label: 'Qué son' },
                    { label: 'Cómo se pueden controlar' },
                    { label: 'Excepciones comunes' },
                    { label: 'Cómo se lanzan' },
                ]
            },
            {
                label: 'Visibilidad de atributos (accessors)',
                secciones: [
                    { label: 'Lectura (getter)' },
                    { label: 'Escritura (setter)' },
                ]
            },
            {
                label: 'Visibilidad de métodos',
                secciones: [
                    { label: 'Públicos' },
                    { label: 'Privados' },
                    { label: 'Protegidos' },
                    { label: 'Visibilidad al final de la clase' },
                ]
            },
            { 
                label: 'Herencia',
                secciones: [
                    { label: 'Qué es la herencia' },
                    { label: 'Sobreescritura ó overriding (cambiar el comportamiento)' },
                    { label: 'Sobreescritura ó overriding (extender el comportamiento con super)' },
                    { label: 'Especialización en la construcción (comportamiento)' },
                    { label: 'Especialización en la construcción (atributos)' },
                ]
            },
            { label: 'return implícito' }
        ]
    }
};

const lenguajes = {
    'rb': {
        label: 'Ruby',
        extension: 'rb'
    },
    'py': {
        label: 'Python',
        extension: 'py'
    }
};

const retos = {
    '1an': { label: "1an", recorrido: "POO", tema: 1, coleccion: "animales", out_por_lenguaje: true},
    '10b': { label: "10b", recorrido: "POO", tema: 10, coleccion: "bonobús"},
    '11b': { label: "11b", recorrido: "POO", tema: 11, coleccion: "bonobús"},
    '12b': { label: "12b", recorrido: "POO", tema: 12, coleccion: "bonobús"},
    '4b': { label: "4b", recorrido: "POO", tema: 4, coleccion: "bonobús"},
    '8b': { label: "8b", recorrido: "POO", tema: 8, coleccion: "bonobús"},
    '9b': { label: "9b", recorrido: "POO", tema: 9, coleccion: "bonobús"},
    '4c': { label: "4c", recorrido: "POO", tema: 4, coleccion: "cuenta"},
    '5c': { label: "5c", recorrido: "POO", tema: 5, coleccion: "cuenta"},
    '6c1': { label: "6c1", recorrido: "POO", tema: 6, coleccion: "cuenta"},
    '6c2': { label: "6c2", recorrido: "POO", tema: 6, coleccion: "cuenta"},
    '7c': { label: "7c", recorrido: "POO", tema: 7, coleccion: "cuenta"},
    '8c-cuenta': { label: "8c-cuenta", recorrido: "POO", tema: 8, coleccion: "cuenta"},
    '8c': { label: "8c", recorrido: "POO", tema: 8, coleccion: "cuenta"},
    '9c': { label: "9c", recorrido: "POO", tema: 9, coleccion: "cuenta"},
    '12d': { label: "12d", recorrido: "POO", tema: 12, coleccion: "dado"},
    '13d': { label: "13d", recorrido: "POO", tema: 13, coleccion: "dado"},
    '6d': { label: "6d", recorrido: "POO", tema: 6, coleccion: "dado"},
    '13f': { label: "13f", recorrido: "POO", tema: 13, coleccion: "combi"},
    '6f': { label: "6f", recorrido: "POO", tema: 6, coleccion: "combi"},
    '7f': { label: "7f", recorrido: "POO", tema: 7, coleccion: "combi"},
    '8f': { label: "8f", recorrido: "POO", tema: 8, coleccion: "combi"},
    '9f': { label: "9f", recorrido: "POO", tema: 9, coleccion: "combi"},
    '11g': { label: "11g", recorrido: "POO", tema: 11, coleccion: "grados"},
    '11i': { label: "11i", recorrido: "POO", tema: 11, coleccion: "círculo"},
    '10io-t': { label: "10io-t", recorrido: "POO", tema: 10, coleccion: "entradasalida"},
    '13j': { label: "13j", recorrido: "POO", tema: 13, coleccion: "juego"},
    '12m': { label: "12m", recorrido: "POO", tema: 12, coleccion: "primitiva"},
    '13m': { label: "13m", recorrido: "POO", tema: 13, coleccion: "primitiva"},
    '12p': { label: "12p", recorrido: "POO", tema: 12, coleccion: "punto"},
    '8p1': { label: "8p1", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8p2': { label: "8p2", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8p3': { label: "8p3", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8p4': { label: "8p4", recorrido: "POO", tema: 8, coleccion: "punto"},
    '9p1': { label: "9p1", recorrido: "POO", tema: 9, coleccion: "punto"},
    '9p2': { label: "9p2", recorrido: "POO", tema: 9, coleccion: "punto"},
    '11u': { label: "11u", recorrido: "POO", tema: 11, coleccion: "cuadrado"},
    '12u': { label: "12u", recorrido: "POO", tema: 12, coleccion: "cuadrado"},
    '13u': { label: "13u", recorrido: "POO", tema: 13, coleccion: "cuadrado"},
    '20a1': { label: "20a1", recorrido: "POO", tema: 20, coleccion: "linea"},
    '20a2': { label: "20a2", recorrido: "POO", tema: 20, coleccion: "linea"},
    '21a': { label: "21a", recorrido: "POO", tema: 21, coleccion: "linea"},
    '23a-relacionales': { label: "23a-relacionales", recorrido: "POO", tema: 23, coleccion: "linea"},
    '23a': { label: "23a", recorrido: "POO", tema: 23, coleccion: "linea"},
    '24a': { label: "24a", recorrido: "POO", tema: 24, coleccion: "linea"},
    '15b': { label: "15b", recorrido: "POO", tema: 15, coleccion: "bonobús"},
    '17b': { label: "17b", recorrido: "POO", tema: 17, coleccion: "bonobús"},
    '18b': { label: "18b", recorrido: "POO", tema: 18, coleccion: "bonobús"},
    '19b': { label: "19b", recorrido: "POO", tema: 19, coleccion: "bonobús"},
    '15c-a': { label: "15c-a", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-b': { label: "15c-b", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-c': { label: "15c-c", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-d': { label: "15c-d", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-e': { label: "15c-e", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c': { label: "15c", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '17c': { label: "17c", recorrido: "POO", tema: 17, coleccion: "cuenta"},
    '18c': { label: "18c", recorrido: "POO", tema: 18, coleccion: "cuenta"},
    '26cr1': { label: "26cr1", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '26cr2': { label: "26cr2", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '26cr3': { label: "26cr3", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '26cr4': { label: "26cr4", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '27cr': { label: "27cr", recorrido: "POO", tema: 27, coleccion: "registradora"},
    '28cr1': { label: "28cr1", recorrido: "POO", tema: 28, coleccion: "registradora"},
    '28cr2': { label: "28cr2", recorrido: "POO", tema: 28, coleccion: "registradora"},
    '28cr3': { label: "28cr3", recorrido: "POO", tema: 28, coleccion: "registradora"},
    '17d1': { label: "17d1", recorrido: "POO", tema: 17, coleccion: "dado"},
    '17d2': { label: "17d2", recorrido: "POO", tema: 17, coleccion: "dado"},
    '6d_test': { label: "6d_test", recorrido: "POO", tema: 6, coleccion: "dado"},
    '18e1': { label: "18e1", recorrido: "POO", tema: 18, coleccion: "fechas"},
    '18e2': { label: "18e2", recorrido: "POO", tema: 18, coleccion: "fechas"},
    '18e3': { label: "18e3", recorrido: "POO", tema: 18, coleccion: "fechas"},
    '17edades': { label: "17edades", recorrido: "POO", tema: 17, coleccion: "edades"},
    '27ed1': { label: "27ed1", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed2': { label: "27ed2", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed3': { label: "27ed3", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed4': { label: "27ed4", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed5': { label: "27ed5", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed6': { label: "27ed6", recorrido: "POO", tema: 27, coleccion: "edades"},
    '22est-media': { label: "22est-media", recorrido: "POO", tema: 22, coleccion: "estadística"},
    '22est-mediana': { label: "22est-mediana", recorrido: "POO", tema: 22, coleccion: "estadística"},
    '27est-moda1': { label: "27est-moda1", recorrido: "POO", tema: 27, coleccion: "estadística"},
    '27est-moda2': { label: "27est-moda2", recorrido: "POO", tema: 27, coleccion: "estadística"},
    '17f': { label: "17f", recorrido: "POO", tema: 17, coleccion: "combi"},
    '19f': { label: "19f", recorrido: "POO", tema: 19, coleccion: "combi"},
    '23fr': { label: "23fr", recorrido: "POO", tema: 23, coleccion: "fracción"},
    '15g': { label: "15g", recorrido: "POO", tema: 15, coleccion: "grados"},
    '0hw': { label: "0hw", recorrido: "POO", tema: 0, coleccion: "hw"},
    '15l1': { label: "15l1", recorrido: "POO", tema: 15, coleccion: "elipse"},
    '15l2': { label: "15l2", recorrido: "POO", tema: 15, coleccion: "elipse"},
    '22le-contar': { label: "22le-contar", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-contarPares': { label: "22le-contarPares", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-esta': { label: "22le-esta", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-hayPar': { label: "22le-hayPar", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-mayor': { label: "22le-mayor", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-par': { label: "22le-par", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-pos-item': { label: "22le-pos-item", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-pos-mayor': { label: "22le-pos-mayor", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-remove': { label: "22le-remove", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-removeDuplicates': { label: "22le-removeDuplicates", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-restaListas': { label: "22le-restaListas", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-restaListasDestr': { label: "22le-restaListasDestr", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-shufle': { label: "22le-shufle", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-shufleDest': { label: "22le-shufleDest", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-smallest': { label: "22le-smallest", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-suma': { label: "22le-suma", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-sumaListas': { label: "22le-sumaListas", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-sumaListasDestruct': { label: "22le-sumaListasDestruct", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '23le-restaListas': { label: "23le-restaListas", recorrido: "POO", tema: 23, coleccion: "listaenteros"},
    '23le-sumaListas': { label: "23le-sumaListas", recorrido: "POO", tema: 23, coleccion: "listaenteros"},
    '23le-sumaListas2': { label: "23le-sumaListas2", recorrido: "POO", tema: 23, coleccion: "listaenteros"},
    '28le-suma': { label: "28le-suma", recorrido: "POO", tema: 28, coleccion: "listaenteros"},
    '22lp-firstandlast': { label: "22lp-firstandlast", recorrido: "POO", tema: 22, coleccion: "listapalabras"},
    '22mbp1': { label: "22mbp1", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp2': { label: "22mbp2", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp3': { label: "22mbp3", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp4': { label: "22mbp4", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mp1': { label: "22mp1", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mp2': { label: "22mp2", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '26mp': { label: "26mp", recorrido: "POO", tema: 26, coleccion: "primitiva"},
    '27md-claves': { label: "27md-claves", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '27md-inverso': { label: "27md-inverso", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '27md-randomkey': { label: "27md-randomkey", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '27md-valores': { label: "27md-valores", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '17n-2': { label: "17n-2", recorrido: "POO", tema: 17, coleccion: "números"},
    '17n': { label: "17n", recorrido: "POO", tema: 17, coleccion: "números"},
    '19n': { label: "19n", recorrido: "POO", tema: 19, coleccion: "números"},
    '20n-factorial': { label: "20n-factorial", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n': { label: "20n", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n1': { label: "20n1", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n2': { label: "20n2", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n3': { label: "20n3", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n4': { label: "20n4", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np1': { label: "20np1", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np2': { label: "20np2", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np3': { label: "20np3", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np4': { label: "20np4", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np5': { label: "20np5", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np6': { label: "20np6", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np7-2': { label: "20np7-2", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np7': { label: "20np7", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np8': { label: "20np8", recorrido: "POO", tema: 20, coleccion: "números"},
    '20nw': { label: "20nw", recorrido: "POO", tema: 20, coleccion: "números"},
    '21n-a1': { label: "21n-a1", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-a2': { label: "21n-a2", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-a3': { label: "21n-a3", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-factorial': { label: "21n-factorial", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np1': { label: "21np1", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np2': { label: "21np2", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np3': { label: "21np3", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np4': { label: "21np4", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np5': { label: "21np5", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np6': { label: "21np6", recorrido: "POO", tema: 21, coleccion: "números"},
    '22n-divisores': { label: "22n-divisores", recorrido: "POO", tema: 22, coleccion: "números"},
    '15o1': { label: "15o1", recorrido: "POO", tema: 15, coleccion: "triángulo"},
    '15o2': { label: "15o2", recorrido: "POO", tema: 15, coleccion: "triángulo"},
    '21o': { label: "21o", recorrido: "POO", tema: 21, coleccion: "triángulo"},
    '15p1': { label: "15p1", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p1_dx': { label: "15p1_dx", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p2': { label: "15p2", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p2_dx': { label: "15p2_dx", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p3': { label: "15p3", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p3_dx': { label: "15p3_dx", recorrido: "POO", tema: 15, coleccion: "punto"},
    '18p': { label: "18p", recorrido: "POO", tema: 18, coleccion: "punto"},
    '19p1': { label: "19p1", recorrido: "POO", tema: 19, coleccion: "punto"},
    '19p2': { label: "19p2", recorrido: "POO", tema: 19, coleccion: "punto"},
    '19p3': { label: "19p3", recorrido: "POO", tema: 19, coleccion: "punto"},
    '23p': { label: "23p", recorrido: "POO", tema: 23, coleccion: "punto"},
    '9.3': { label: "9.3", recorrido: "POO", tema: 9, coleccion: "punto"},
    '9p3': { label: "9p3", recorrido: "POO", tema: 9, coleccion: "punto"},
    '20.4.1.factores': { label: "20.4.1.factores", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20.4.2.factores': { label: "20.4.2.factores", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo1': { label: "20n-primo1", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo2': { label: "20n-primo2", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo3': { label: "20n-primo3", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo4': { label: "20n-primo4", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n.siguientePrimo': { label: "20n.siguientePrimo", recorrido: "POO", tema: 20, coleccion: "primos"},
    '27.4.3.factores': { label: "27.4.3.factores", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.5.desfactoriza': { label: "27.5.desfactoriza", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.6.factores-negativos': { label: "27.6.factores-negativos", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.7.mcm': { label: "27.7.mcm", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.1.MCD': { label: "27.s.1.MCD", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.a.fraccion': { label: "27.s.2.a.fraccion", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.b.canonica': { label: "27.s.2.b.canonica", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.c.propia': { label: "27.s.2.c.propia", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.d.getPropia': { label: "27.s.2.d.getPropia", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.e.unidades': { label: "27.s.2.e.unidades", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.f.sumar': { label: "27.s.2.f.sumar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.f2.sumar': { label: "27.s.2.f2.sumar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.g.restar': { label: "27.s.2.g.restar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.h.multiplicar': { label: "27.s.2.h.multiplicar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.2.i.dividir': { label: "27.s.2.i.dividir", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.a.mixtos': { label: "27.s.3.a.mixtos", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.b.simplificar': { label: "27.s.3.b.simplificar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.c.canonica': { label: "27.s.3.c.canonica", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.d.to_fraccion': { label: "27.s.3.d.to_fraccion", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.e.to_mixto': { label: "27.s.3.e.to_mixto", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.f.sumar': { label: "27.s.3.f.sumar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '27.s.3.g.restar': { label: "27.s.3.g.restar", recorrido: "POO", tema: 27, coleccion: "primos"},
    '15r': { label: "15r", recorrido: "POO", tema: 15, coleccion: "rectángulo"},
    '21r': { label: "21r", recorrido: "POO", tema: 21, coleccion: "rectángulo"},
    '23r': { label: "23r", recorrido: "POO", tema: 23, coleccion: "rectángulo"},
    '24r': { label: "24r", recorrido: "POO", tema: 24, coleccion: "rectángulo"},
    '15t-dedos': { label: "15t-dedos", recorrido: "POO", tema: 15, coleccion: "aleatorio"},
    '20t1': { label: "20t1", recorrido: "POO", tema: 20, coleccion: "aleatorio"},
    '20t2': { label: "20t2", recorrido: "POO", tema: 20, coleccion: "aleatorio"},
    '20t3': { label: "20t3", recorrido: "POO", tema: 20, coleccion: "aleatorio"},
    '22t': { label: "22t", recorrido: "POO", tema: 22, coleccion: "aleatorio"},
    '23t': { label: "23t", recorrido: "POO", tema: 23, coleccion: "aleatorio"},
    '24tm1': { label: "24tm1", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm2': { label: "24tm2", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm3': { label: "24tm3", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm4': { label: "24tm4", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm5': { label: "24tm5", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm6': { label: "24tm6", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '15u': { label: "15u", recorrido: "POO", tema: 15, coleccion: "cuadrado"},
    '20u': { label: "20u", recorrido: "POO", tema: 20, coleccion: "cuadrado"},
    '21u': { label: "21u", recorrido: "POO", tema: 21, coleccion: "cuadrado"},
    '23u0': { label: "23u0", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23u1': { label: "23u1", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23u2': { label: "23u2", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23u3': { label: "23u3", recorrido: "POO", tema: 23, coleccion: "cuadrado"}
    };

    const colecciones = {
    'animales': { label: 'animales' },
    'bonobús': { label: 'bonobús' },
    'cuenta': { label: 'cuenta' },
    'dado': { label: 'dado' },
    'combi': { label: 'combi' },
    'grados': { label: 'grados' },
    'círculo': { label: 'círculo' },
    'entradasalida': { label: 'entradasalida' },
    'juego': { label: 'juego' },
    'primitiva': { label: 'primitiva' },
    'punto': { label: 'punto' },
    'cuadrado': { label: 'cuadrado' }
    };
  
function insert(id,content)
{
    element = document.getElementById(id);
    element.textContent = content;
}

function insertA(id,content,link)
{
    element = document.getElementById(id);

    a = document.createElement("a");
    a.href = link;
    a.textContent = content;

    element.appendChild(a);
}
