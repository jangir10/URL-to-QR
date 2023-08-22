import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message:"Enter the URL",
    name:"URL"}
  ])
  .then((answers) => {
    var url = answers.URL;
    var qr_img = qr.image(url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('qr-image.png'));
    console.log("QR code generated successfully");
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
