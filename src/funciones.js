import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { JSDOM }  from 'jsdom';
import fetch from 'node-fetch';
import colors from 'colors';


// validar si la ruta existe
const pathValido = (ruta) =>{
    const isValido = fs.existsSync(ruta) ? true:false
    return isValido
    
} 
// convertir la ruta a absoluta en caso de ser relativa
const absolutePath = (ruta) => {
    if(!path.isAbsolute(ruta)){
        const newPath = path.resolve(ruta)
        return newPath
    } else {
        return ruta
    }
}


// comprobar si la ruta es archivo o directorio
const comprovePath = (route) => {
    const isFilePath = fs.lstatSync(route).isFile()
    return isFilePath
    
}
// array de los path de archivos de un directorio
const readDirectory = (route) => {
    let arrFiles = [];
    if(fs.lstatSync(route).isFile()){
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
    return newArrMD
}

/*arrFilesMd(['prueba\\carpeta-prueba2\\link2.md',
'prueba\\carpeta-prueba2\\texto.text',
'prueba\\links.md',
'prueba\\solo-texto.md',
'prueba\\texto.text']) */

// leer archivos md
const readArrFile = (arrFile) => {
    const arrFileContent = []
    arrFile.forEach((pathAbs) =>{    
        arrFileContent.push({
            path:pathAbs,
            content:fs.readFileSync(pathAbs,'utf8')})
    })
    return arrFileContent
}

// console.log(readArrFile('prueba/links.md'));

// convertir archivos md a html 

const getLinks = (arrFileContent) => {
    const links = []; 

    arrFileContent.forEach((fileRead)=>{
        let fileHtml =  marked.parse(fileRead.content)
        let dom = new JSDOM(fileHtml)
        let arrTagA = (dom).window.document.querySelectorAll('a')
        arrTagA.forEach((a) => {
            links.push({
                href: a.href,
                text: a.textContent.slice(0,50).blue,
                file: fileRead.path
            })
        })
    })
    return links
}

// const getLinks = (arrfileHtml) =>{
//     const links = []; 
//     arrfileHtml.forEach((fileHtml)=>{
//     let arrTagA = (fileHtml.dom).window.document.querySelectorAll('a')
//     arrTagA.forEach((a) => {
//         links.push({
//             href: a.href,
//             text: a.textContent.slice(0,50),
//             file: fileHtml.path
//         })
//     })
//     })
//     return links
// }

// conseguir status de los links
const linksStatus = (arrayLinks) => {
    const arrNew = arrayLinks.map((contentLinks) => {
        const newArrFetch = fetch(contentLinks.href).then((response) => {
            if(response.status>=200 && response.status<400){
                // console.log(Object.assign(contentLinks, {status:response.status , ok: 'ok'}))
                return Object.assign(contentLinks, {status:response.status , message: 'OK'.green}) 
            } 
            else if (response.status>=400 && response.status<500){
                // console.log(Object.assign(contentLinks, {status:response.status , ok: 'fail'}))
                return Object.assign(contentLinks, {status:response.status , message:'Fail'.red})
            }
        }).catch(() => {
            return Object.assign(contentLinks, {status:`Did't answer`.red , message:'Fail'.red})
        })
        return newArrFetch
        })
    return Promise.all(arrNew)
}

// linksStatus( [
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise',
//     text: 'Promesas',
//     file: 'C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\prueba\\links.md'
//   },
//   {
//     href: 'https://nodejs.org/api/pafdhth.html',
//     text: 'Path',
//     file: 'C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\prueba\\links.md'
//   }
// ])
// .then((response)=>{
//     console.log(response)
// })


export{
    absolutePath,
    comprovePath,
    readDirectory,
    arrFilesMd,
    readArrFile,
    getLinks,
    pathValido,
    linksStatus
}