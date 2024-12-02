import * as fs from "node:Promise"

console.log(fs.readfile("file-1.txt" , {encoding: "utf-8"} ))
    .then((file2Data)=>{console.log(file2Data, "fileDta")})
    .then(()=>{fs.readfile("file-2.txt" , {encoding: "utf-8"})})
    .then((file3Data)=>{console.log(file3Data, "fileDta")})
    .then(()=>{fs.readfile("file-3.txt" , {encoding: "utf-8"})})
    .catch((error)=>{console.error(error)})

    


  