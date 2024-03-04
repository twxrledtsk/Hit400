const pool = require("../Database/db_config");
const bcrypt = require("bcryptjs");
const { uploadFile } = require("../Functions/fileUpload");
const router = require("express").Router();
const multer = require('multer');
const fs = require('fs');
const folderPath = './uploads';

const storage = multer.diskStorage({
    
    destination: function (req, file, callback) {
            // Create the folder
fs.mkdir(folderPath+`/${req.body.company_name}`, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating folder:', err);
    } else {
        console.log('Folder created successfully.');
    }
});

        callback(null, `./uploads/${req.body.company_name}`);
    },
    filename: function (req, file, callback) {
       // You can write your own logic to define the filename here (before passing it into the callback), e.g:
       console.log(file.originalname); // User-defined filename is available
       const filename = `${file.originalname}`; // Create custom filename (crypto.randomUUID available in Node 19.0.0+ only)
       callback(null, filename);
    }
  })


const upload = multer({ 
    storage: storage,
    limits: {
       fileSize: 1048576 // Defined in bytes (1 Mb)
    }, 
 });

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




// // Specify the path for the new folder


// // Create the folder
// fs.mkdir(folderPath, { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error creating folder:', err);
//     } else {
//         console.log('Folder created successfully.');
//     }
// });


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
router.post("/register/company",upload.any(),(req,res)=>{
    const companyData = req.body;
    // uploadFile(req,res);
    console.log(companyData);

    console.log(req.files);
    const sql = "INSERT INTO company (company_name,address,contact,email,password) VALUES (?,?,?,?,?)";
    let password = bcrypt.hashSync(companyData.password,10);
    const data =[companyData.company_name, companyData.address, companyData.contact, companyData.email,password];

    try {
        pool.query(sql,data,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error:err});
            }else{
                if(results.affectedRows === 1){
                    return res.status(200).json({message:"success"});
                }else{
                    return res.status(300).json({message:"failed to register company"})
                }
            }
        })
    } catch (error) {
        return res.status(500).json({error});
    }

})


module.exports = router;


// const fs = require('fs');

// // Specify the path of the folder you want to check
// const folderPath = './existingFolder';

// // Check if the folder exists
// fs.access(folderPath, fs.constants.F_OK, (err) => {
//     if (err) {
//         console.error('Folder does not exist.');
//     } else {
//         console.log('Folder exists.');
//     }
// });
