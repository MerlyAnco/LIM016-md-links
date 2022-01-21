
import {
    absolutePath,
    readDirectory,
    arrFilesMd,
    readArrFile,
    getLinks,
    pathValido,
    linksStatus,
} from './funciones.js'


export const arrayLinks = (ruta) => new Promise((resolve) =>{
    const newPath = absolutePath(ruta);
    const arrFiles = readDirectory(newPath);
    const arrTypeMd = arrFilesMd(arrFiles);
    const readFilesMd = readArrFile(arrTypeMd);
    const links = getLinks(readFilesMd);
    // const links = getLinks(htmlFiles);
  resolve(links)
})

export const mdLinks = (path, option) => new Promise((resolve) => {
    if(pathValido(path)){
        if (option === undefined || option.validate === false) {
            const arrLinks = arrayLinks(path)
            resolve(arrLinks)
            // return arrayLinks(path).then(results => resolve(results))
        } 
        else if(option.validate === true){
            arrayLinks(path).then(links => {
                resolve(linksStatus(links))
                })
        } 
    } else {
        resolve('La ruta ingresada no existe o no es valida')
    }
})

export default mdLinks


