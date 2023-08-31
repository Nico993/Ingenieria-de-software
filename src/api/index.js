import axios from "axios"
const URL = "http://vps.simix.tech:9191/v1/reconocimiento-productos/";

function nuevoProducto(formData){

    return new Promise((resolve,reject)=>{
        axios.post(URL+'productos',formData)
        .then(response=>{
            if(response.status===201){
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

export{nuevoProducto,obtenerProductos}