import api from "./api.config";

function uploadFileToServerFunc(file){
    return new Promise((resolve,reject)=>{
        api.post("/upload_file",file).then((response)=>{
            console.log(response.data);
            if(response.status === 200 && response.data.message === "file uploaded"){
                resolve("Success");
            }else{
                resolve("Failed");
            }
        })
        .catch((error)=>{
            console.log(error);
            reject(error);
        })
    })



}


export default uploadFileToServerFunc;