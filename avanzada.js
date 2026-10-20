


/* *Asincronismo:* Peticiones/fetch de datos o simulación de eventos asíncronos.


* *API - Local Storage & Módulos:* Guardado de datos extraídos en el navegador y modularización del código. */

//*Arreglos:* Mapeo y manipulación de listas de elementos o tarjetas extraídas.

// 1. Datos iniciales (agregamos un id por si lo necesitas en el mapeo)
const publicaciones = [
    { id: 1, usuario: "crazy_sam88", likes: 120, comentarios: 15, mencion: "@clipstudioofficial_es" },
    { id: 2, usuario: "luis", likes: 450, comentarios: 30, mencion: "" },
    { id: 3, usuario: "cuevas", likes: 80, comentarios: 5, mencion: "" }
];

// --- FASE 1: ARREGLOS (Mapeo y Filtrado) ---
const tarjetasExtraidas = publicaciones.map(post => {
    return {
        id: post.id,
        resumenStats: `❤️ ${post.likes} | 💬 ${post.comentarios}`
    };
});

const publicacionesPopulares = publicaciones.filter(post => post.likes > 100);

console.log("Tarjetas Mapeadas:", tarjetasExtraidas);
console.log("Publicaciones Populares:", publicacionesPopulares);



console.log("\n--- SIMULACIÓN DE NODOS DOM ---");
publicaciones.forEach(post => {
    // Agregamos 'const' y usamos propiedades que sí existen
    const tarjetaSimulada = {
        contenidoHTML: `
            <h2>${post.usuario}</h2>
            <p>Likes: ${post.likes}</p>
            <p>Comentarios: ${post.comentarios}</p>
            <p>Mención: ${post.mencion || "Ninguna"}</p>
        `
    };
    console.log("Elemento DOM simulado:", tarjetaSimulada);
});


console.log("\n--- SIMULACIÓN DE EVENTOS ASÍNCRONOS ---");
const obtenerPublicacionesDesdeServidor = () => {
    return new Promise((resolve, reject) => {
        console.log("\nConectando con la base de datos de publicaciones...");
        
        setTimeout(() => {
            const exito = true; 
            if (exito) {
                resolve(publicaciones); 
            } else {
                reject("Error: No se pudieron obtener las publicaciones.");
            }
        }, 2000);
    });
};

const cargarApp = async () => {
    try {
        console.log(" Esperando respuesta del servidor...");
        const datosObtenidos = await obtenerPublicacionesDesdeServidor();
        
        console.log("¡Datos recibidos con éxito!");

        const resumenPosts = datosObtenidos.map(post => {
            return {
                perfil: `@${post.usuario}`,
                interaccionTotal: post.likes + post.comentarios,
                tieneMencion: post.mencion !== "" ? `Menciona a: ${post.mencion}` : "Sin menciones"
            };
        });

        console.log("\n--- RESULTADO DEL MAPEO POST-ASINCRONISMO ---");
        console.log(resumenPosts);

    } catch (error) {
        console.error(" Ocurrió un error:", error);
    }
};

cargarApp();


console.log("\n--- GUARDADO EN LOCAL STORAGE ---");
try {
    localStorage.setItem("postsInstagram", JSON.stringify(publicaciones));
    console.log("\n ¡Datos guardados en el Local Storage!");

    const datosRecuperados = JSON.parse(localStorage.getItem("postsInstagram"));
    console.log(" Datos recuperados del navegador:", datosRecuperados);


} catch (e) {
    console.log(" LocalStorage no disponible en este entorno de terminal.");
}