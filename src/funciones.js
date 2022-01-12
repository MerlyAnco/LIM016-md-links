import fs from 'fs';
import path from 'path';

// const findPath = (folderName) => {
    
//     fs.readdir(folderName,'utf-8', (err, files) => {
//     const arrayArchives = []
//     files.forEach((item) => {
//       const pathRelative = path.join(folderName, item)
//       if(fs.lstatSync(pathRelative).isDirectory()){
//         findPath(pathRelative)
//       } else {
//         arrayArchives.push(`found file:${item} in folder: ${folderName}`)
//       }
//     })
//     return arrayArchives
//   })
  
// }
const comprovePath = (route) => {
    const isFilePath = fs.lstatSync(route).isFile()
    return isFilePath
    
}
// array de los path de archivos de un directorio
const readDirectory = (route) => {
    let arrFiles = [];
    if(comprovePath(route)){
        arrFiles.push(route)
    } else {
        const arrFilesDirectory = fs.readdirSync(route,'utf-8', (err, files) => {
            if (err) throw err;
            throw files
        })
        arrFilesDirectory.forEach(file => {
            const pathRelative = path.join(route, file);
            arrFiles = arrFiles.concat(readDirectory(pathRelative))
        } )
        
    }
    return arrFiles
}
// console.log(readDirectory('prueba'))

// buscar archivos md
const arrFilesMd = (arr) => {
    const newArrMD = arr.filter( file => path.extname(file)==='.md')
    console.log(newArrMD)
    return newArrMD
}

arrFilesMd(['prueba\\carpeta-prueba2\\link2.md',
'prueba\\carpeta-prueba2\\texto.text',
'prueba\\links.md',
'prueba\\solo-texto.md',
'prueba\\texto.text'])

// leer archivos md
const readArrFile = (file) => {
    fs.readFile(file,'utf8', (err, data) => {
        if (err) throw err;
        throw data;
    });      
}
readArrFile('prueba/links.md');

export{
    comprovePath,
    readDirectory,
    arrFilesMd,
    readArrFile,
}