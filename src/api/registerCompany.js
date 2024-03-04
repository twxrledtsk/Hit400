import api from "./api.config";

function registerCompany(companyData){

    return new Promise((resolve,reject)=>{
        api.post("/register/company",companyData,{headers:{'Content-Type': 'multipart/form-data'}}).then((response)=>{

            if(response.status === 200 && response.data.message === "success"){
                resolve("success");
            }else{
                resolve("failed");
            }
        })
        .catch((error)=>{
            console.log(error);
            resolve("failed");
        })
    })
}

export default registerCompany;