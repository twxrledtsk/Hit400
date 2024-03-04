const multer = require("multer");
const path = require("path");
let req_data = "";

let storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
  
        // Uploads is the Upload_folder_name 
        cb(null, "uploads") 
    }, 
    filename: function (req, file, cb) { 
        let ext = path.extname(file.originalname);
        let {company_name} = req.body; 
        req_data = company_name + "-" + Date.now()+ext;
      cb(null, company_name + "-" + Date.now()+ext) 
    } 
  }) 

  // Define the maximum size for uploading 
// picture i.e. 1 MB. it is optional 
const maxSize = 5 * 1000 * 1000;

let upload = multer({  
    storage: storage, 
    limits: { fileSize: maxSize }, 
    fileFilter: function (req, file, cb){ 

      
        // Set the filetypes, it is optional 
        let filetypes = /xlsx|jpg|png|csv/; 
        let mimetype = filetypes.test(file.mimetype); 
  
        let extname =(path.extname(file.originalname).toLowerCase()); 
        
        if (true) { 
            return cb(null, true); 
        } 
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes); 
      }  
  
// mypic is the name of file attribute 
}).single("file");

function uploadFile(req,res){

return new Promise((resolve,reject)=>{

    try {
        upload(req.files,res,function(err){
            if(err){
                console.log(err);
                resolve("failed");
            }else{
                let {name} = req.body;
                resolve("success");
            }
        })
        
    } catch (error) {
        reject(error);
        
    }

})

}


module.exports = {
    uploadFile
}