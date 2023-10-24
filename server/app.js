const express = require('express');
const multer = require('multer');
const cors = require('cors')
const app = express();

app.use(cors({origin: '*'}))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const { semester, course, paper, topic, session } = req.body;
  const file = req.file;

  console.log(semester, course, paper, topic, session, "\n", file);

  res.status(201).json({success: true, message: 'File uploaded successfully.'});
});

app.get('/fetch', (req, res) => {
  res.status(200).json({success: true, data: [10, 20, 30, 40, 50]})
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
