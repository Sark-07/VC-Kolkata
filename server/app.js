const express = require('express');
const multer = require('multer');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

app.use(cors({origin: '*'}))
app.use(bodyParser.json())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  const { semester, course, paper, topic, email } = req.body;
  const file = req.file;
  console.log(req.body);

  console.log(semester, course, paper, topic, email, "\n", file);

  res.status(201).json({success: true, message: 'File uploaded successfully.'});
});

app.get('/fetch', (req, res) => {
  res.status(200).json({success: true, data: [10, 20, 30, 40, 50]})
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
