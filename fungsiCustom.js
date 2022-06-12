// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
//const bacaData = null;
const bacaData = (fnCallback) => {
  let listFile=[file1, file2, file3];
  let arrayOfString= [];
  let dataTrial=[]
  
  for(element of listFile) {
    fs.readFile(element,'utf8', fnCallback = (err, data) => {
      if (err) {
        return console.log('Error: ' + err);
      }
      dataString = JSON.parse(data);
      dataTrial.push(dataString);
      if(dataString['0'] != undefined) {
        if(dataString['0']['data'] == undefined) {
          let dataModif = dataString['0']['message'];
          dataModif = dataModif.split(" ")[1];
          arrayOfString.push(dataModif);
          console.log(arrayOfString);
        }
        else {
          let dataModif = dataString['0']['data']['message'];
          dataModif = dataModif.split(" ")[1];
          arrayOfString.push(dataModif);
          console.log(arrayOfString);
        }
      }
      else {
        let dataModif = dataString['message'];
        dataModif = dataModif.split(" ")[1];
        arrayOfString.push(dataModif);
        console.log(arrayOfString);
      }
    }
    )
  }
  return arrayOfString;
  }
  console.log(bacaData());
  
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
