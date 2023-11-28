const express = require('express')
const multer = require('multer')
const path = require('path')

const resize = require("../utils/resize")

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 } // 5 MB
})

router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    const { filename } = req.file

    resize(filename, 256)
    resize(filename, 512)
    resize(filename, 1024)

    res.json({ message: 'File uploaded successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
