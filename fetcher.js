let arg = process.argv;
// arg = arg.slice(2);

const request = require("request");
const { fileURLToPath } = require("url");
const fs = require("fs");

const URL = arg[2];
const filePath = arg[3];

request(URL, (error, response, body) => {
  fs.writeFile(
    filePath,
    `ERROR: ${error} \n\n-------------\n statusCode: ${
      response && response.statusCode
    }\n\n-------------\n body:${body}`,
    function (err) {
      if (err) throw err;

      console.log(`Downloaded and saved ${body.length} bytes to ./result.txt`);
    }
  );
});
