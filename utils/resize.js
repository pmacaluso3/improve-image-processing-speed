const im = require("imagemagick")
const fs = require("fs")

const UPLOADS_DIR = "uploads"

const resize = (fileName, width) => {
  srcPath = `${UPLOADS_DIR}/${fileName}`
  const dstPath = `${UPLOADS_DIR}/${width}-${fileName}`

  im.resize({
    srcData: fs.readFileSync(srcPath),
    dstPath,
    width
  }, (err, stdout, stderr) => {
    if (err) throw err;
  });
}

module.exports = resize