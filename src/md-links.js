
import {
    absolutePath,
    readDirectory,
    arrFilesMd,
    readArrFile,
    getLinks,
    arrFileHtml,
    pathValido,
    linksStatus,
} from './funciones.js'


export const arrayLinks = (ruta) => new Promise((resolve, reject) =>{
    const newPath = absolutePath(ruta);
    const arrFiles = readDirectory(newPath);
    const arrTypeMd = arrFilesMd(arrFiles);
    const readFilesMd = readArrFile(arrTypeMd);
    const htmlFiles = arrFileHtml(readFilesMd);
    const links = getLinks(htmlFiles,newPath);
  resolve(links)
})

const mdLinks = (path, option) => {
    console.log(option)
    if(pathValido(path)){
        if (option === undefined || option.validate === false) {
            console.log(arrayLinks(path))
            return arrayLinks(path)
        } else if(option.validate === true){
            arrayLinks(path).then(links => {
                linksStatus(links)
            })
        } 
    } else {
        return 'La ruta ingresada no existe o no es valida'
    }
    
}
mdLinks('prueba/links.md',{validate:true})


