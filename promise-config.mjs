import * as fs from "node:fs/promises"

async function outputfilesTogthwer(){
    try{
        const data = Promise.all([
            fs.readFile("file-1.txt" , {encoding: "utf-8"}),
            fs.readFile("file-2.txt" , {encoding: "utf-8"}),
            fs.readFile("file-3.txt" , {encoding: "utf-8"})
        ])
    }
    catch{
        console.error(error)
    }
}

outputfilesTogthwer();