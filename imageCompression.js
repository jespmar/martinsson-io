
const compress_images = require("compress-images");
const fs = require("fs")
const path = require("path")
const { promisify } = require('util');
const convert = require('heic-convert');


const heicConvert = (filePath) => {

(async () => {
  const inputBuffer = await promisify(fs.readFile)(filePath);
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: 'PNG'        // output format
  });

  const ext = path.extname(filePath)
  const newPath = filePath.replace(ext, ".png")

  await promisify(fs.writeFile)(newPath, outputBuffer);
})();

}

function CompressBlogPosts() {
  compress_images(
    "_posts/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
    "public/assets/blog/",
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (err, completed) {
      if (completed === true) {
        // Doing something.
      }
    }
  );
}

function CompressPages() {
    compress_images(
      "_pages/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
      "public/assets/pages/",
      { compress_force: false, statistic: true, autoupdate: true },
      false,
      { jpg: { engine: "mozjpeg", command: ["-quality", "40"] } },
      { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
      { svg: { engine: "svgo", command: "--multipass" } },
      {
        gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
      },
      function (err, completed) {
        if (completed === true) {
          // Doing something.
        }
      }
    );
  }

  const loopFolders = () => {

    var moveFrom = "_posts/";

    // Loop through all the files in the temp directory
fs.readdir(moveFrom, function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(function (file, index) {
    // Make one pass and make the file complete
    var fromPath = path.join(moveFrom, file);

    fs.stat(fromPath, function (error, stat) {
      if (error) {
        console.error("Error stating file.", error);
        return;
      }

      if (stat.isFile())
        console.log("'%s' is a file.", fromPath);
      else if (stat.isDirectory())

        console.log("'%s' is a directory.", fromPath);
        fs.readdir(fromPath, (err, files2) => {

          if (files2) {
           files2.forEach((file, index) => {
            
            var filePath = path.join(fromPath, file);
            fs.stat(filePath, (error, stat) => {
              if (stat.isFile) {
                //console.log(filePath)

                const extension = path.extname(filePath)
                if (extension === ".heic" || extension === ".HEIC") {
                  // Transform file here
                  console.log(filePath)
                  heicConvert(filePath)
                }

              }
            })
            
        }) 
          }
          
        
    });
  });
});

  })
}


 loopFolders()

 CompressBlogPosts()
 CompressPages()
