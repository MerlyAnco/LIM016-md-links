import fs from 'fs';
import path from 'path';

// leer un archivo

fs.readFile('src/index.js','utf8', (err, data) => {
  if (err) throw err;
  // console.log(data);
});

//extension de un archivo
const extnameFile = path.extname('src/index.js')
// console.log(extnameFile)

//obteniendo contenido de un directorio
const items = fs.readdirSync('prueba','utf-8', (err, files) => {
  if (err) throw err;
  // console.log(files);
  throw files
})
console.log(items)

//uniendo dos rutas
const rutaAnidada = path.join('/home/Laboratoria/', '/test')
// console.log(rutaAnidada)

//recursividad de rutas

function findFiles (folderName) {
  fs.readdir(folderName,'utf-8', (err, files) => {
    files.forEach((item) => {
      const pathRelative = path.join(folderName, item)
      if(fs.lstatSync(pathRelative).isDirectory()){
        findFiles(pathRelative)
      } else {
        console.log (`found file:${item} in folder: ${folderName}`)
      }
    })
  })
}
//   console.log(items)
//   items.forEach((item) => {
//     if(item.isDirectory()){
//       findFiles(`${folderName}/${item.name}`)
//     } else {
//       console.log (`found file:${item.name} in folder: ${folderName}`)
//     }
//   })
// }

findFiles('prueba');

