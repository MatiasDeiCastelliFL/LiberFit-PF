const multer = require('multer')
const path = require('path')
//subir imagen
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img'),
    filename: (req, file, cb) => { cb(null, file.originalname) }
})
const upload = multer({ storage, dest: path.join(__dirname, 'public/img') }).single('img');

module.exports = {
    upload
}