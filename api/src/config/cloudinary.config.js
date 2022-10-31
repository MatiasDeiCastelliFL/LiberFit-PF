const cloudinary = require('cloudinary')
const {cloud_name_ENV,api_key_ENV,api_secret_ENV}= process.env

//coneccion a cloudinary
cloudinary.config({ 
    cloud_name:cloud_name_ENV, 
    api_key: api_key_ENV, 
    api_secret: api_secret_ENV
  });
  
//.env
//cloud_name_ENV='dim2wnoej', 
// api_key_ENV='518826178331346', 
//  api_secret_ENV='u5H5guSh7w7mf-JuivbWYeUvqso' 

module.exports = {cloudinary}