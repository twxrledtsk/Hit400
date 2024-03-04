import api from "./api.config";

function getCompanies(){

    return new Promise((resolve,reject)=>{
        api.get("/companies").then((response)=>{
            if(response.status === 200 && response.data.message === "success"){
                resolve(response.data.companies);
            }else{
                resolve("Failed");
            }
        })
        .catch((error)=>{
            console.log(error);
            resolve("Failed");
        })
    })
}


export default getCompanies;