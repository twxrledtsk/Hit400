import api from "./api.config";

function loginUser(login_data){

    return new Promise((resolve,reject)=>{
        api.post("/login",login_data).then((response)=>{

            try {
                console.log(response.data.full_name);

                if(response.status === 200 && response.data.message === "Login Successful"){
                    localStorage.setItem("FULL_NAME",response.data.user.full_name);
                    localStorage.setItem("USER_TYPE",response.data.user.user_role);
                    resolve("Authenticated");
                }else{
                    resolve("Failed to login");
                }
            } catch (error) {
                reject(error);
            }
        })
    })
}


export default loginUser;