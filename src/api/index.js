import axios from "axios"
const URL = "http://172.29.151.58:9090/v1/reconocimiento-productos/";

function nuevoProducto(formData){
    return new Promise((resolve,reject)=>{
        axios.post(URL+'productos',formData)
        .then(response=>{
            if(response.status===200){
                resolve(response.data);
            }
        })
        .catch(error=>{
            if(error.response){
                reject(error.response.data);
            } else{
                reject(error);
            }
        });
    });

}

function obtenerProductos(){
    return new Promise((resolve,reject)=>{
        axios.get(URL+'productos')
        .then(response=>{
            resolve(response.data);
        })
        .catch(error=>{
            if(error.response){
                reject(error.response.data);
            } else{
                reject(error);
            }
        });
    });
}

function eliminarProducto(codigo){
    return new Promise((resolve,reject)=>{
        axios.delete(URL+'productos/'+codigo)
        .then(response=>{
            console.log(response);
            resolve(response.data);
        })
        .catch(error=>{
            console.log(error);
            if(error.response){
                reject(error.response.data);
            } else{
                reject(error);
            }
        });
    });
}

function editarProducto(formData){
    return new Promise((resolve,reject)=>{
        axios.put(URL+'productos',formData)
        .then(response=>{
            if(response.status===200){
                resolve(response.data);
            }
        })
        .catch(error=>{
            if(error.response){
                reject(error.response.data);
            } else{
                reject(error);
            }
        });
    });
}

function escanearProductos(formData){
    return new Promise((resolve,reject)=>{
        axios.post(URL+'detectar',formData)
        .then(response=>{
            resolve(response.data);
        })
        .catch(error=>{
            if(error.response){
                reject(error.response.data);
            } else{
                reject(error);
            }
        });
    });
}

function nuevaVenta(formData){
    return new Promise((resolve,reject)=>{
        axios.post(URL+'ventas',formData)
        .then(response=>{
            if(response.status===200){
                resolve(response.data);
            }
        })
        .catch(error=>{
            if(error.response){
                reject(error.response.data);
            } else{
                reject(error);
            }
        });
    });
}

export{nuevoProducto,obtenerProductos, eliminarProducto, editarProducto, escanearProductos, nuevaVenta}