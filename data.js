const root_path = "https://raw.githubusercontent.com/klippero/code-snippet-in-web/refs/heads/main/";

const recorridos = {
    "POO":
    {
        label: "Programación Orientada a Objetos",
        temas: 
        [
            { 
                label: 'Entorno',
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
            { label: 'String Formatting' },
            { label: 'Métodos que modifican el estado' },
            { label: 'Parámetros de un método' },
            { label: 'Parámetros de un constructor' },
            { label: 'Valores por defecto para parámetros' },
            { label: 'Lectura por teclado' },
            { label: 'return' },
            { label: 'Convertir a string' },
            { label: 'Consultar un atributo' },
            { label: 'IRB: interactive Ruby' },
            { label: 'Operadores aritméticos' },
            { label: 'Operadores relacionales' },
            { label: 'if else' },
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
    '1an': { label: "Mi gato Pipo", recorrido: "POO", tema: 1, coleccion: "animales", out_por_lenguaje: true},
    '10io-t': { label: "Pregunta nombre y años", recorrido: "POO", tema: 10, coleccion: "entradasalida"},
    '10b': { label: "Pregunta el número de viajes", recorrido: "POO", tema: 10, coleccion: "bonobús"},
    '12b': { label: "Convertir a texto", recorrido: "POO", tema: 12, coleccion: "bonobús"},
    '12p': { label: "Convertir a texto", recorrido: "POO", tema: 12, coleccion: "punto"},
    '12u': { label: "Convertir a texto", recorrido: "POO", tema: 12, coleccion: "cuadrado"},
    '12m': { label: "Lotería Primitiva", recorrido: "POO", tema: 12, coleccion: "primitiva"},
    '12d': { label: "Convertir a texto", recorrido: "POO", tema: 12, coleccion: "dado"},
    '4c': { label: "Atributo saldo", recorrido: "POO", tema: 4, coleccion: "cuenta"},
    '4b': { label: "Atributo viajes", recorrido: "POO", tema: 4, coleccion: "bonobús"},
    '8c': { label: "Apertura de cuenta con aportación", recorrido: "POO", tema: 8, coleccion: "cuenta"},
    '8c-cuenta': { label: "Cantidad inicial al crear la cuenta", recorrido: "POO", tema: 8, coleccion: "cuenta"},
    '8b': { label: "Número de viajes en el constructor", recorrido: "POO", tema: 8, coleccion: "bonobús"},
    '9f': { label: "Temperaturas para creación y fijar temperatura por defecto", recorrido: "POO", tema: 9, coleccion: "combi"},
    '9c': { label: "Por defecto 0€", recorrido: "POO", tema: 9, coleccion: "cuenta"},
    '9p1': { label: "Por defecto se crea 0,0", recorrido: "POO", tema: 9, coleccion: "punto"},
    '9p2': { label: "Por defecto se mueve a 0,0", recorrido: "POO", tema: 9, coleccion: "punto"},
    '9p3': { label: "Por defecto lo deja donde está", recorrido: "POO", tema: 9, coleccion: "punto"},
    '9b': { label: "Por defecto 10 viajes", recorrido: "POO", tema: 9, coleccion: "bonobús"},
    '5c': { label: "Mostrar saldo bonito", recorrido: "POO", tema: 5, coleccion: "cuenta"},
    '6c1': { label: "Intereses", recorrido: "POO", tema: 6, coleccion: "cuenta"},
    '6c2': { label: "Retirar fondos", recorrido: "POO", tema: 6, coleccion: "cuenta"},
    '6f': { label: "Abrir y cerrar puertas", recorrido: "POO", tema: 6, coleccion: "combi"},
    '7c': { label: "Ingreso y reintegro", recorrido: "POO", tema: 7, coleccion: "cuenta"},
    '6d': { label: "Tirar", recorrido: "POO", tema: 6, coleccion: "dado"},
    '7f': { label: "Cambiar temperatura", recorrido: "POO", tema: 7, coleccion: "combi"},
    '8p1': { label: "Construir punto con x,y", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8p2': { label: "Mover a nueva posición", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8p3': { label: "Mover a origen", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8p4': { label: "Volver al punto anterior", recorrido: "POO", tema: 8, coleccion: "punto"},
    '8f': { label: "Temperatura inicial", recorrido: "POO", tema: 8, coleccion: "combi"},
    '11u': { label: "Área", recorrido: "POO", tema: 11, coleccion: "cuadrado"},
    '11i': { label: "Calcula área y perímetro", recorrido: "POO", tema: 11, coleccion: "círculo"},
    '11g': { label: "Pasar Celsius a Fahrenheit", recorrido: "POO", tema: 11, coleccion: "grados"},
    '11b': { label: "Uso de return en info", recorrido: "POO", tema: 11, coleccion: "bonobús"},
    '13u': { label: "getter lado", recorrido: "POO", tema: 13, coleccion: "cuadrado"},
    '13m': { label: "getter reintegro", recorrido: "POO", tema: 13, coleccion: "primitiva"},
    '13d': { label: "Tirada de 2 dados", recorrido: "POO", tema: 13, coleccion: "dado"},
    '13j': { label: "Juevo con posición y vidas", recorrido: "POO", tema: 13, coleccion: "juego"},
    '13f': { label: "Dos máquinas de frío", recorrido: "POO", tema: 13, coleccion: "combi"},
    '20n': { label: "Pedir números hasta par", recorrido: "POO", tema: 20, coleccion: "números"},
    '20a1': { label: "10 asteriscos", recorrido: "POO", tema: 20, coleccion: "linea"},
    '20a2': { label: "Clase Línea", recorrido: "POO", tema: 20, coleccion: "linea"},
    '20t1': { label: "Acertar un número", recorrido: "POO", tema: 20, coleccion: "aleatorio"},
    '20t2': { label: "Te has pasado o te has quedado corto", recorrido: "POO", tema: 20, coleccion: "aleatorio"},
    '20t3': { label: "Número de intentos", recorrido: "POO", tema: 20, coleccion: "aleatorio"},
    '20u': { label: "Dibujar con asteriscos", recorrido: "POO", tema: 20, coleccion: "cuadrado"},
    '20np1': { label: "Mostrar previos", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np2': { label: "Suma de previos", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np3': { label: "Suma de previos que sean divisores", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np4': { label: "¿Es perfecto?", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np5': { label: "Mostrar los perfectos menores", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np6': { label: "Potencia", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np7': { label: "¿Cuadrado perfecto?", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np7-2': { label: "¿Cuadrado perfecto? con while", recorrido: "POO", tema: 20, coleccion: "números"},
    '20np8': { label: "Cuadrados perfectos menores", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n-factorial': { label: "Factorial (iterando por condición)", recorrido: "POO", tema: 20, coleccion: "números"},
    '20n-primo1': { label: "Primo. Mostrar los menores", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo2': { label: "Primo. Mostrar hasta un divisor", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo3': { label: "Primo. Devuelve true o false", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n-primo4': { label: "Primos menores", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20n.siguientePrimo': { label: "Siguiente primo", recorrido: "POO", tema: 20, coleccion: "primos"},
    '21a': { label: "Bucle", recorrido: "POO", tema: 21, coleccion: "linea"},
    '21u': { label: "Asteríscos con bucles iterativos", recorrido: "POO", tema: 21, coleccion: "cuadrado"},
    '21r': { label: "Rectángulo con asteriscos", recorrido: "POO", tema: 21, coleccion: "rectángulo"},
    '21o': { label: "Triángulo equilátero con asteriscos", recorrido: "POO", tema: 21, coleccion: "triángulo"},
    '21n-factorial1': { label: "Factorial (iterando desde 0)", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-factorial2': { label: "Otro bucle (iterando desde 1)", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-factorial3': { label: "Otro bucle (no multiplicando por 1)", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np1': { label: "Mostrar previos", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np2': { label: "Suma de previos", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np3': { label: "Suma de previos que sean divisores", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np4': { label: "¿Es perfecto?", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np5': { label: "Mostrar los perfectos menores", recorrido: "POO", tema: 21, coleccion: "números"},
    '21np6': { label: "Potencia", recorrido: "POO", tema: 21, coleccion: "números"},
    '23u0': { label: "Operador ==", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23u1': { label: "Operadores relacionales", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23u2': { label: "Operador +", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23u3': { label: "Operador << (suma destructiva)", recorrido: "POO", tema: 23, coleccion: "cuadrado"},
    '23a': { label: "Operador +", recorrido: "POO", tema: 23, coleccion: "linea"},
    '23r': { label: "Operadores del rectángulo", recorrido: "POO", tema: 23, coleccion: "rectángulo"},
    '23t': { label: "Operador ==", recorrido: "POO", tema: 23, coleccion: "aleatorio"},
    '23le-sumaListas': { label: "Operador +", recorrido: "POO", tema: 23, coleccion: "listaenteros"},
    '23le-sumaListas2': { label: "Permitiendo un array o una Lista como parámetro", recorrido: "POO", tema: 23, coleccion: "listaenteros"},
    '23fr': { label: "Producto de fracciones", recorrido: "POO", tema: 23, coleccion: "fracción"},
    '23p': { label: "Operador suma", recorrido: "POO", tema: 23, coleccion: "punto"},
    '23le-restaListas': { label: "Operador -", recorrido: "POO", tema: 23, coleccion: "listaenteros"},
    '23a-relacionales': { label: "Operadores relacionales", recorrido: "POO", tema: 23, coleccion: "linea"},
    '29a1': { label: "Gráfico con key arguments", recorrido: "POO", tema: 29, coleccion: "linea"},
    '29a2': { label: "Gráfico con key arguments con valores por defecto", recorrido: "POO", tema: 29, coleccion: "linea"},
    '17b': { label: "Número de viajes mayor que 0", recorrido: "POO", tema: 17, coleccion: "bonobús"},
    '17c': { label: "Saldo positivo", recorrido: "POO", tema: 17, coleccion: "cuenta"},
    '17d1': { label: "Dobles", recorrido: "POO", tema: 17, coleccion: "dado"},
    '17d2': { label: "Mejor tirada", recorrido: "POO", tema: 17, coleccion: "dado"},
    '17f': { label: "Alerta temperatura alta", recorrido: "POO", tema: 17, coleccion: "combi"},
    '17n1': { label: "¿Es un núnmero divisor de otro?", recorrido: "POO", tema: 17, coleccion: "números"},
    '17n2': { label: "es_multiplo_de", recorrido: "POO", tema: 17, coleccion: "números"},
    '17edades': { label: "Cuando nació cada uno", recorrido: "POO", tema: 17, coleccion: "edades"},
    '18b': { label: "No usar más de los disponibles", recorrido: "POO", tema: 18, coleccion: "bonobús"},
    '15c-a': { label: "Pedir nombre y aportación", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-b': { label: "Crear objeto y convertir a texto", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-c': { label: "Ingresar", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-d': { label: "Cálculo de intereses", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-e': { label: "Liquidar intereses", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15c-f': { label: "Retirar", recorrido: "POO", tema: 15, coleccion: "cuenta"},
    '15p1': { label: "Distancia al origen", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p2': { label: "Distancia a otro punto", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15p3': { label: "Distancia con parámetro por defecto al origen", recorrido: "POO", tema: 15, coleccion: "punto"},
    '15g': { label: "Celsius, Fahrenheit y Kelvin", recorrido: "POO", tema: 15, coleccion: "grados"},
    '15t-dedos': { label: "Saca dedos", recorrido: "POO", tema: 15, coleccion: "aleatorio"},
    '15o1': { label: "Pide datos y calcula área", recorrido: "POO", tema: 15, coleccion: "triángulo"},
    '15o2': { label: "Clase Triángulo", recorrido: "POO", tema: 15, coleccion: "triángulo"},
    '15l1': { label: "Pide datos y calcula área", recorrido: "POO", tema: 15, coleccion: "elipse"},
    '15l2': { label: "Clase Elipse", recorrido: "POO", tema: 15, coleccion: "elipse"},
    '15u': { label: "Agrandar", recorrido: "POO", tema: 15, coleccion: "cuadrado"},
    '15b': { label: "Métodos para recarga y usar", recorrido: "POO", tema: 15, coleccion: "bonobús"},
    '15r': { label: "Área, perímetro y agrandar", recorrido: "POO", tema: 15, coleccion: "rectángulo"},
    '18c': { label: "No reintegrar más del saldo", recorrido: "POO", tema: 18, coleccion: "cuenta"},
    '18p': { label: "¿En qué cuadrante?", recorrido: "POO", tema: 18, coleccion: "punto"},
    '26cr1': { label: "CajaRegistradora add", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '26cr2': { label: "Convertir a float", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '26cr3': { label: "take", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '26cr4': { label: "Operador <<", recorrido: "POO", tema: 26, coleccion: "registradora"},
    '27cr': { label: "Caja registradora", recorrido: "POO", tema: 27, coleccion: "registradora"},
    '18e1': { label: "Una condición para bisiestos", recorrido: "POO", tema: 18, coleccion: "fechas"},
    '18e2': { label: "Dos condiciones para bisiestos", recorrido: "POO", tema: 18, coleccion: "fechas"},
    '18e3': { label: "Tres condiciones para bisiestos", recorrido: "POO", tema: 18, coleccion: "fechas"},
    '27ed1': { label: "Mostrar claves", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed2': { label: "Mostrar claves ordenadas", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed3': { label: "Mostrar valores", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed4': { label: "Contar", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed5': { label: "Mayor", recorrido: "POO", tema: 27, coleccion: "edades"},
    '27ed6': { label: "Reverse", recorrido: "POO", tema: 27, coleccion: "edades"},
    '22le-suma': { label: "Sumar los elementos de una lista", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-mayor': { label: "Buscar el mayor elemento", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-contar': { label: "Contar apariciones", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-remove': { label: "Nueva lista sin un elemento", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-pos-mayor': { label: "Posición del mayor elemento", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-esta': { label: "¿Está en la lista?", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-removeDuplicates': { label: "Elimina duplicados", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-hayPar': { label: "¿Hay algún par?", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-pos-item': { label: "Posición de un elemento", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22mp1': { label: "Primitiva usando lista", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mp2': { label: "Evitando repetidos", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp1': { label: "Bombo de primitiva", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp2': { label: "Extraer bola", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp3': { label: "Mover el bombo", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22mbp4': { label: "Primitiva con bombo", recorrido: "POO", tema: 22, coleccion: "primitiva"},
    '22lp-firstandlast': { label: "Contar palabras con primera y última letras iguales", recorrido: "POO", tema: 22, coleccion: "listapalabras"},
    '22le-contarPares': { label: "Contar pares", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-smallest': { label: "El más pequeño", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22n-divisores': { label: "Obtener los divisores", recorrido: "POO", tema: 22, coleccion: "números"},
    '22le-sumaListas': { label: "Sumar listas", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-sumaListasDestruct': { label: "Sumar listas destructiva", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-restaListas': { label: "Resta listas", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-restaListasDestr': { label: "Resta listas destructivo", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22t': { label: "Adivinar número sin repetir", recorrido: "POO", tema: 22, coleccion: "aleatorio"},
    '22est-media': { label: "Media", recorrido: "POO", tema: 22, coleccion: "estadistica"},
    '22est-mediana': { label: "Mediana", recorrido: "POO", tema: 22, coleccion: "estadistica"},
    '22le-shufleDest': { label: "Barajar (destructivo)", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '22le-shufle': { label: "Barajar (no destructivo)", recorrido: "POO", tema: 22, coleccion: "listaenteros"},
    '27est-moda1': { label: "Moda", recorrido: "POO", tema: 27, coleccion: "estadistica"},
    '27est-moda2': { label: "Moda múltiple", recorrido: "POO", tema: 27, coleccion: "estadistica"},
    '0hw': { label: "Hello world", recorrido: "POO", tema: 0, coleccion: "hw"},
    '26mp': { label: "Constantes", recorrido: "POO", tema: 26, coleccion: "primitiva"},
    '27md-claves': { label: "Claves", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '27md-valores': { label: "Valores", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '27md-inverso': { label: "Inverso", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '27md-randomkey': { label: "Random key", recorrido: "POO", tema: 27, coleccion: "midiccionario"},
    '21n-a1': { label: "Números amigos. Método amigo", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-a2': { label: "Números amigos. Método amigo?", recorrido: "POO", tema: 21, coleccion: "números"},
    '21n-a3': { label: "Números amigos. Método muestra_amigos_previos", recorrido: "POO", tema: 21, coleccion: "números"},
    '19p1': { label: "¿En la diagonal?", recorrido: "POO", tema: 19, coleccion: "punto"},
    '19p2': { label: "¿En el origen?", recorrido: "POO", tema: 19, coleccion: "punto"},
    '19p3': { label: "¿En este cuadrante?", recorrido: "POO", tema: 19, coleccion: "punto"},
    '19n': { label: "¿Es par?", recorrido: "POO", tema: 19, coleccion: "números"},
    '19f': { label: "¿Temperaturas recomendadas?", recorrido: "POO", tema: 19, coleccion: "combi"},
    '19b': { label: "¿Último viaje?", recorrido: "POO", tema: 19, coleccion: "bonobús"},
    '20.4.1.factores': { label: "Descomponer en factores primos (primero para un único factor)", recorrido: "POO", tema: 20, coleccion: "primos"},
    '20.4.2.factores': { label: "Descomponer en factores primos (múltiples factores)", recorrido: "POO", tema: 20, coleccion: "primos"},
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
    '24tm1': { label: "Clase Tiempo", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm2': { label: "Segundos", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm3': { label: "Suma +", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm4': { label: "Suma destructiva <<", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm5': { label: "Operador mayor >", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24tm6': { label: "Operador *", recorrido: "POO", tema: 24, coleccion: "tiempo"},
    '24r': { label: "Resize", recorrido: "POO", tema: 24, coleccion: "rectángulo"},
    '24a': { label: "Resize", recorrido: "POO", tema: 24, coleccion: "linea"},
    '28cr1': { label: "Parámetros por defecto", recorrido: "POO", tema: 28, coleccion: "registradora"},
    '28cr2': { label: "Parámetro esponja add", recorrido: "POO", tema: 28, coleccion: "registradora"},
    '28cr3': { label: "Parámetro esponja take", recorrido: "POO", tema: 28, coleccion: "registradora"},
    '28le-suma': { label: "Suma lista", recorrido: "POO", tema: 28, coleccion: "listaenteros"},
    '28c': { label: "Ingreso y reintegro con esponja", recorrido: "POO", tema: 28, coleccion: "cuenta"},
    '28a1': { label: "Gráfico con esponja", recorrido: "POO", tema: 28, coleccion: "linea"},
    '28a2': { label: "Gráfico con números", recorrido: "POO", tema: 28, coleccion: "linea"},
    '28a3': { label: "Gráfico con chars diferentes", recorrido: "POO", tema: 28, coleccion: "linea"},
    '28est': { label: "Media, mediana y moda con esponja", recorrido: "POO", tema: 28, coleccion: "estadistica"},
};

    const colecciones = {
    'animales': { label: 'animales' },
    'bonobús': { label: 'bonobús' },
    'cuenta': { label: 'cuenta' },
    'dado': { label: 'dado' },
    'combi': { label: 'frigorífico combi' },
    'estadistica': { label: 'estadística' },
    'grados': { label: 'grados' },
    'círculo': { label: 'círculo' },
    'entradasalida': { label: 'entradasalida' },
    'juego': { label: 'juego' },
    'primitiva': { label: 'primitiva' },
    'punto': { label: 'punto' },
    'cuadrado': { label: 'cuadrado' },
    'registradora':{label:'caja registradora'},
    'listaenteros':{label:'lista enteros'},
    'edades':{label:'edades'},
    'midiccionario':{label:'midiccionario'},
    'elipse':{label:'elipse'},
    'triángulo':{label:'triángulo'},
    'rectángulo':{label:'rectángulo'},
    'aleatorio':{label:'aleatorio'},
    'números':{label:'números'},
    'fechas':{label:'fechas'},
    'primos':{label:'primos'},
    'fracción':{label:'fracciones'},
    'tiempo':{label:'tiempo'},
    'linea':{label:'línea'}
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
