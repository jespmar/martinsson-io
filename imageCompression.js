
const compress_images = require("compress-images");

function CompressBlogPosts() {
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

function CompressPages() {
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

 CompressBlogPosts()
 CompressPages()
