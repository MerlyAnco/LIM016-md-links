
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


export const arrayLinks = (ruta) => new Promise((resolve) =>{
    const newPath = absolutePath(ruta);
    const arrFiles = readDirectory(newPath);
    const arrTypeMd = arrFilesMd(arrFiles);
    const readFilesMd = readArrFile(arrTypeMd);
    const htmlFiles = arrFileHtml(readFilesMd);
    const links = getLinks(htmlFiles);
  resolve(links)
})

export const mdLinks = (path, option) => new Promise((resolve) => {
    if(pathValido(path)){
        if (option === undefined || option.validate === false) {
            const arrLinks = arrayLinks(path)
            resolve(arrLinks)
            // return arrayLinks(path).then(results => resolve(results))
        } else if(option.validate === true){
            arrayLinks(path).then(links => {
                resolve(linksStatus(links))
                })
        } 
    } else {
        return 'La ruta ingresada no existe o no es valida'
    }
})

export default mdLinks


