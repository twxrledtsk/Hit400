const pool = require("../Database/db_config");
const bcrypt = require("bcryptjs");
const router = require("express").Router();

//Default Route
router.get("/",(req,res)=>{
    return res.status(200).send("HelloServer");
});

//Upload Files
router.post("/upload_file",async(req,res)=>{

    try {
        let status = await uploadFile(req,res);
    
        let {name} = req.body;

        if(status === 'success'){
            update_cr_check(name);
            return res.status(200).json({message:"file uploaded"});
        }else{
            return res.status(200).json({message:"Error"});
        }
    } catch (error) {
        return res.status(500).send(error);
    }


    function update_cr_check(full_name){
        const sql = "UPDATE users SET requested = 1 WHERE full_name = ?";
        pool.query(sql,[full_name],(err)=>{
            if(err){
                console.log(err);
                return err;
            }else{
                return "Success";
            }
        })

    }

})

//Register Users
router.post("/register",(req,res)=>{
    const reg_data = req.body;
    console.log("Data",reg_data);
    console.log("Paass",reg_data.password);
    
    const sql = "INSERT INTO users (full_name,address,email,contact_number,password) VALUES (?,?,?,?,?)";
    const check_sql = "SELECT * FROM users WHERE full_name = ? OR email = ?";
    let password = bcrypt.hashSync(reg_data.password,10);
    const data = [reg_data.full_name, reg_data.address,reg_data.email, reg_data.contact_number, password];

    try {

        pool.query(check_sql,[reg_data.full_name, reg_data.email],(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).send(err);
            }else{
                if(results.length>0){
                    console.log("duplicate")
                    return res.status(200).send("already registered");
                }else{
                    pool.query(sql,data,(err)=>{
                        if(err){
                            return res.status(500).send(err);
                           
                        }else{
                            return res.status(200).json({message:"User registered"});
                        }
                    })

                }
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
        
    }
});

//Login Users
router.post("/login",(req,res)=>{
    const login_data = req.body;
    console.log(login_data);
    const sql = "SELECT * FROM users WHERE email = ?";
    

    try {
        pool.query(sql,[login_data.email],(err,results)=>{
            if(err){
                return res.status(500).send(err);
            }else{
                if(results.length>1){
                    return res.status(500).send("Cannot login, please contact the administrator!");
                }else if(results.length == 1){
                    let verify = bcrypt.compareSync(login_data.password, results[0].password);

                    if(verify){
                        return res.status(200).json({message:"Login Successful",user:results[0]});
                    }else{
                        return res.status(200).send("Login Failed");
                    }
                }

                else{
                    return res.status(200).send("Login Failed");
                }
            }
        })
    } catch (error) {
        
    }
});

//Company Registration
router.post("/register/company",(req,res)=>{
    const formData = req.body;
    console.log(formData);


    // console.log("COMPANY DATA",req.body);
    // const sql = "INSERT INTO company (company_name,address,contact,email,password) VALUES (?,?,?,?,?)";
    // let password = bcrypt.hashSync(companyData.password,10);
    // const data =[companyData.company_name, companyData.address, companyData.contact, companyData.email,password];

    // try {
    //     pool.query(sql,data,(err,results)=>{
    //         if(err){
    //             console.log(err);
    //             return res.status(500).json({error:err});
    //         }else{
    //             if(results.affectedRows === 1){
    //                 return res.status(200).json({message:"success"});
    //             }else{
    //                 return res.status(300).json({message:"failed to register company"})
    //             }
    //         }
    //     })
    // } catch (error) {
    //     return res.status(500).json({error});
    // }

    return res.status(200).send("Ok")

})


module.exports = router;