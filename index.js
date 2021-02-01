const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const transporter = require('./config');
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const multer = require('multer');
const FileSaver = require('file-saver');
const download = require('downloadjs');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const cors = require('cors');
const { json } = require('body-parser');
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));


// mongodb connection

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });
  var upload = multer({ storage : storage}).single('file');

  app.get("/upload", function(request, response) {
    response.sendFile('/public/yash-virani.pdf', { root: __dirname });
  });




app.post('/send',(req,res) => {
    console.log(req.body);
    try {
        const mailOptions = {
          from: req.body.email, // sender address
          to: process.env.email, // list of receivers
          subject: req.body.subject, // Subject line
          html: `
          <p>You have a new contact request.</p>
          <h3>Contact Details</h3>
          <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.message}</li>
          </ul>
          `
        };
    
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            res.status(500).send({
              success: false,
              message: 'Something went wrong. Try again later'
            });
          } else {
            res.send({
              success: true,
              message: 'Thanks for contacting me. I will get back to you very shortly'
            });
          }
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      }
    
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("front/build"));
    app.get("*" , (req,res) => {
        res.sendFile(path.resolve(__dirname,"./front","build","index.html"));
    });
}
app.get('/',(req,res) => {
    res.send('hello');
});

const port = process.env.port || 8000;
app.listen(port,() => console.log('Server On'));