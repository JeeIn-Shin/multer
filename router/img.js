const express = require('express');
const router = express.Router();
const IMG = require('../model/img');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

try {
    fs.readdirSync('img/');
}
catch(err) {
    console.error("there is no IMG folder, create IMG folder.");
    fs.mkdirSync('img')
}

const UPLOAD = multer({
    storage: multer.diskStorage({
        destination(req, file, done)    {
            done(null, "img/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + ext);
        },
    }),
    limits: { fileSize: 5 * 1025 * 1024},
});

//module test
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "multipart.html"));
})

router.post('/', UPLOAD.fields([{ name: 'image'}]), (req, res) => {
    try {
        console.log(req.file, req.body);
        res.send('ok');
    }
    catch(error) {
        console.error("error" + error);
    }
})

//profile.. 

//DB에서 선택 가능한 사진들의 저장경로를 가져와서
//FE에 보내고
//선택한 사진에 대한 정보를 각 유저의 DB에 올려주면 될거같은데?

//흠


module.exports = router;


