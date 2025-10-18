
const multer = require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
         const isCsv = file.mimetype === 'text/csv' || /\.csv$/i.test(file.originalname);
   if (isCsv) cb(null, true);
     else cb(new Error('Only CSV files are allowed (extension .csv)'), false);
  }
});
module.exports = upload;
