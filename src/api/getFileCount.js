import api from "./api.config";

function getFileCount(){
    return new Promise((resolve,reject)=>{
        api.get("/all_files").then((response)=>{
        
            if(response.status === 200){
                resolve(response.data.file_count);
            }else{
                resolve([])
            }
        })
        .catch((error)=>{
            console.log(error);
            reject(error);
        })
    })

}

export default getFileCount;