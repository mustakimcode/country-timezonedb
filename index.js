const express = require("express");
const app = express();
const port = 3000;
const { countries, timezonedb, url } = require("./list");

const country = countries.map((x) => {
  timezonedb.map((y) => {
    if (!x[6]) {
      if (x[0] === y[1]) {
        var words = y[2].split("/");
        // x.push(words[0]);
        url.map((z)=>{
            // x.push(z);
            if(words[0] === z.region){
                x.push(z.apiUrl);
                x.push(z.gothumb);
                x.push(z.loginUrl);
                x.push(y[2]);
            }
        })
      }
    }
  });
  return x;
});

app.get("/", (req, res) => res.send(country));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
