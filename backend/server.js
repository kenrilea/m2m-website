const express = require("express");
const cors = require("cors");
const multer = require("multer");

const cookieParser = require("cookie-parser");
const app = express();

const fs = require("fs");
const csv = require("csv-parser");
const csvObjectParse = require(__dirname + "/utilities/csvObjectParse.js");

// app.listen(4000, () => {
//    // LOCAL SERVER
//    console.log("Running on port 4000");
// });

//_____________________MIDLEWARE_______________________
app.use(cors());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // CONFIG FOR LOCAL SERVER
app.use("/images", express.static(__dirname + "/uploads")); // Files in local folder uploads have endpoints as /images/x
app.use("/assets", express.static(__dirname + "/assets"));

//app.use(cors({ credentials: true, origin: "http://134.209.119.133:3000" })); // CONFIG FOR REMOTE SERVER

//_________________Begining of END POINTS____________________

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/wikidata", (req, res) => {
  console.log(req.query);

  if (req.query.data === "buildings") {
    let results = [];
    fs.createReadStream(__dirname + "/assets/wikidata/building-data.csv")
      .pipe(csv())
      .on("data", data => results.push(data))
      .on("end", () => {
        res.send(JSON.stringify(results));
      });
    return;
  }
  if (req.query.data === "building") {
    console.log(req.query);
    let singleBuildingData = {};
    if (req.query.id !== undefined) {
      fs.createReadStream(__dirname + "/assets/wikidata/building-data.csv")
        .pipe(csv())
        .on("data", data => {
          if (data.Id === req.query.id) singleBuildingData[data.Id] = data;
        })
        .on("end", () => {
          res.send(JSON.stringify(singleBuildingData));
        });
    }
    return;
  }
  res.send(JSON.stringify({ success: false }));
  let results = [];
});

//__________________TEST CODE_________________________

//_________________End of END POINTS____________________
app.listen(4000, "0.0.0.0", () => {
  // REMOTE SERVER/DROPLET
  console.log("Running on port 4000 , 0.0.0.0");
});
