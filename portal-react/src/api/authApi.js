export const loginAPI = async (correo, clave) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (correo === "alumno@isil.pe" && clave === "123456") {
                resolve({
                    token: "jwt-simulado-valido-xyz",
                    usuario: { nombre: "Estudiante", correo }
                });
            } else {
                reject(new Error("Credenciales inválidas"));
            }
        }, 800);
    });
};