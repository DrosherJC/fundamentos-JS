
// 1. FUNDAMENTOS Y VARIABLES

// Datos de ejemplo de Lionel Messi.
const nombre = "Lionel Messi";
const usuario = "@leomessi";
const deporte = "Fútbol";
const plataforma = "Instagram";

// Mostrar los datos en la consola.
console.log("=== 1. FUNDAMENTOS Y VARIABLES ===");

console.log("Nombre:", nombre);
console.log("Usuario:", usuario);
console.log("Deporte:", deporte);
console.log("Plataforma:", plataforma);



// 2. STRINGS Y MANIPULACIÓN DE TEXTO


console.log("\n=== 2. STRINGS Y MANIPULACIÓN ===");

// Crear una cadena utilizando interpolación.
const presentacion =
    `El deportista ${nombre} practica ${deporte}.`;

console.log(presentacion);

// Convertir el nombre a mayúsculas.
console.log("Nombre en mayúsculas:", nombre.toUpperCase());

// Eliminar espacios innecesarios y convertir a minúsculas.
const usuarioLimpio = usuario.trim().toLowerCase();

console.log("Usuario limpio:", usuarioLimpio);

// Obtener los metadatos de la página si existe un navegador.
let tituloWeb = "";
let descripcionWeb = "";

if (typeof document !== "undefined") {
    tituloWeb =
        document.querySelector('meta[property="og:title"]')?.content || "";

    descripcionWeb =
        document.querySelector(
            'meta[property="og:description"]'
        )?.content || "";
}

console.log("Título de la página:", tituloWeb);
console.log("Descripción de la página:", descripcionWeb);


// 3. FUNCIONES

console.log("\n=== 3. FUNCIONES ===");

// Función para limpiar un texto.
function limpiarTexto(texto) {
    return texto.trim().replace(/\s+/g, " ");
}

// Función para crear una presentación.
function crearPresentacion(nombre, deporte) {
    return `${limpiarTexto(nombre)} es un deportista de ${deporte}.`;
}

// Función para obtener los metadatos de la página.
function extraerDatosWeb() {
    // Comprobar si el código se ejecuta en un navegador.
    if (typeof document === "undefined") {
        return {
            titulo: "Bienvenido",
            descripcion: "Me gusta el fútbol.",
            mensaje: "Hola, bienvenido."
        };
    }

    // Buscar el título y la descripción.
    const titulo =
        document.querySelector('meta[property="og:title"]')?.content || "";

    const descripcion =
        document.querySelector(
            'meta[property="og:description"]'
        )?.content || "";

    return {
        titulo: limpiarTexto(titulo),
        descripcion: limpiarTexto(descripcion),
        mensaje: "Consulta realizada."
    };
}

// Ejecutar las funciones con varios deportistas.
console.log(
    crearPresentacion("Cristiano Ronaldo", "fútbol")
);

console.log(
    crearPresentacion("Neymar Jr.", "fútbol")
);

console.log(
    crearPresentacion("Stephen Curry", "baloncesto")
);

// Mostrar los datos encontrados en la página.
console.log("Datos de la página:", extraerDatosWeb());



// 4. OBJETOS

console.log("\n=== 4. OBJETOS ===");

// Lista de objetos con información de deportistas.
const deportistas = [
    {
        nombre: "Lionel Messi",
        usuario: "@leomessi",
        deporte: "Fútbol"
    },
    {
        nombre: "Cristiano Ronaldo",
        usuario: "@cristiano",
        deporte: "Fútbol"
    },
    {
        nombre: "Neymar Jr.",
        usuario: "@neymarjr",
        deporte: "Fútbol"
    },
    {
        nombre: "Stephen Curry",
        usuario: "@stephencurry30",
        deporte: "Baloncesto"
    }
];

// Mostrar los datos de cada deportista.
deportistas.forEach(function (deportista) {
    console.log(
        "Nombre:", deportista.nombre,
        "| Usuario:", deportista.usuario,
        "| Deporte:", deportista.deporte
    );
});

// Crear un objeto con los datos de la página.
const perfilExtraido = {
    url: typeof window !== "undefined"
        ? window.location.href
        : "https://www.ejemplo.com",
    titulo: tituloWeb,
    descripcion: descripcionWeb
};

// Mostrar el objeto.
console.log("Perfil extraído:", perfilExtraido);


// 5. ARREGLOS
console.log("\n=== 5. ARREGLOS ===");

const publicaciones = [
    { usuario: "crazy_sam88", likes: 120, comentarios: 15, hashtag: "@clipstudioofficial_es" },
    { usuario: "luis", likes: 450, comentarios: 30, hashtag: "" },
    { usuario: "cuevas", likes: 80, comentarios: 5, hashtag: "" }
];

publicaciones.forEach(function (post) {
    console.log(post.usuario, "| Likes:", post.likes, "| Comentarios:", post.comentarios);
});


// 6. MANIPULACIÓN DEL DOM (SIMULADA)
console.log("\n=== 6. SIMULACIÓN DE NODOS DOM ===");

publicaciones.forEach(post => {
    const tarjetaSimulada = {
        contenidoHTML: `
            <h2>${post.usuario}</h2>
            <p>${post.likes}</p>
            <p>${post.comentarios}</p>
            <p>${post.hashtag}</p>`
    };
    console.log("Elemento DOM simulado que se inyectaría:", tarjetaSimulada);
});


// 7. ASINCRONISMO
console.log("\n=== 7. ASINCRONISMO ===");

const obtenerPublicacionesDesdeServidor = () => {
    return new Promise((resolve, reject) => {
        console.log("Conectando con la base de datos de publicaciones...");

        // Simulamos un retraso de red de 2 segundos
        setTimeout(() => {
            const exito = true; // Cambia a false para probar el manejo de errores
            if (exito) {
                resolve(publicaciones);
            } else {
                reject("Error: No se pudieron obtener las publicaciones.");
            }
        }, 2000);
    });
};

obtenerPublicacionesDesdeServidor()
    .then(datos => console.log("Datos recibidos:", datos))
    .catch(error => console.log(error));


// 8. API - LOCAL STORAGE
console.log("\n--- GUARDADO EN LOCAL STORAGE ---");

try {
    localStorage.setItem("postsInstagram", JSON.stringify(publicaciones));
    console.log("¡Datos guardados en el Local Storage!");

    const datosRecuperados = JSON.parse(localStorage.getItem("postsInstagram"));
    console.log("Datos recuperados del navegador:", datosRecuperados);
} catch (e) {
    console.log("LocalStorage no disponible en este entorno de terminal.");
}