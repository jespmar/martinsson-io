
const compress_images = require("compress-images");
const fs = require("fs")
const path = require("path")
const { promisify } = require('util');
const convert = require('heic-convert');


const heicConvert = async (filePath) => {

await (async () => {
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

async function CompressBlogPosts() {
  console.log("Compressing Post images")
  compress_images(
    "_posts/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif,heic,HEIC}",
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

async function CompressPages() {
  console.log("Compressing Pages images")
    compress_images(
      "_pages/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif,heic,HEIC}",
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

  const loopFolders = async () => {

    console.log("Converting HEIC to png")

    var moveFrom = "_posts/";

    // Loop through all the files in the temp directory
fs.readdir(moveFrom, async function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(async function (file, index) {
    // Make one pass and make the file complete
    var fromPath = path.join(moveFrom, file);

    fs.stat(fromPath, async function (error, stat) {
      if (error) {
        console.error("Error stating file.", error);
        return;
      }

      if (stat.isFile())
        console.log("'%s' is a file.", fromPath);
      else if (stat.isDirectory())

        console.log("'%s' is a directory.", fromPath);
        fs.readdir(fromPath, async (err, files2) => {

          if (files2) {
           files2.forEach(async (file, index) => {
            
            var filePath = path.join(fromPath, file);
            fs.stat(filePath, async (error, stat) => {
              if (stat.isFile) {
                //console.log(filePath)

                const extension = path.extname(filePath)
                if (extension === ".heic" || extension === ".HEIC") {
                  // Transform file here
                  console.log(filePath)
                  await heicConvert(filePath)
                  console.log("done")
                }
              }
            })
            
        }) 
          }   
    });
  });
});

  })
  console.log("DONE")
}


const getAllFolders = async (folderPath) => {

  const folders = await fs.promises.readdir(folderPath)
  return folders

}


const convertFilesInFolder = async (folderPath) => {
  const contents = await fs.promises.readdir(folderPath);

  // Loop over content

  for (let content of contents) {
    const currentPath = path.join(folderPath, content)
    const stat = await fs.promises.stat(currentPath)
    if (stat.isFile()) {
      const ext = path.extname(currentPath)
      if (ext === ".HEIC" || ext === ".heic") {
        await heicConvert(currentPath)
        console.log(currentPath + " Converted")
      }
      
    } 
  }


}

const convertHEIC = async () => {

  const startingFolder = "_posts/"

 const folders = await getAllFolders(startingFolder)

 // loop over folders and files
 for (let folder of folders) {
  const currentPath = path.join(startingFolder, folder)
  const stat = await fs.promises.stat(currentPath)
  if (stat.isDirectory()) {
    await convertFilesInFolder(currentPath)
  }
 }

}



const runAll = async () => {

 await convertHEIC()

 await CompressBlogPosts()
 await CompressPages()

}

runAll()


 
