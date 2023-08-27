const multer = require('multer');
const fs = require("fs");
const path = require('path');
const uploadDir = path.join(__dirname, 'upload');

if (!fs.existsSync(uploadDir)) {
  fs.mkdir(uploadDir, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  })
}
// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;
