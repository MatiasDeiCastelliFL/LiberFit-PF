const cloudinary = require('cloudinary')
const {cloud_name_ENV,api_key_ENV,api_secret_ENV}= process.env

//coneccion a cloudinary
cloudinary.config({ 
    cloud_name:cloud_name_ENV, 
    api_key: api_key_ENV, 
    api_secret: api_secret_ENV
  });
  
//.env
//cloud_name_ENV='dyliwhc3e', 
// api_key_ENV='345744761585491', 
//  api_secret_ENV='qIiUg4yIWYCVKlqJs_viYnQkmS4' 

module.exports = {cloudinary}