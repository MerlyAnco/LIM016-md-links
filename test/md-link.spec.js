import {
  arrayLinks,
  mdLinks
} from '../src/md-links.js'

const prueba = [
  {"file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md", "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Overview", "text": "Generalidades del protocolo HTTP - MDN".blue}, 
  {"file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", "href": "https://developer.mozilla.org/", "text": "Promesas".blue}, 
  {"file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", "href": "https://nodejs.org/api/pfdghath.html", "text": "Path".blue}, 
  {"file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", "href": "https://mediumd.com/netscape", "text": "Linea de comando CLI".blue}, 
  {"file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", "href": "https://carlosazvbnmaustre.es/", "text": "Asíncronía en js".blue}]

const validateTrue =  [
  {
    "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md",
    "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Overview",
    "message": "OK".green,
    "status": 200,
    "text": "Generalidades del protocolo HTTP - MDN".blue,
  },
  {
    "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
    "href": "https://developer.mozilla.org/",
    "message": "OK".green,
    "status": 200,
    "text": "Promesas".blue,
  },
  {
    "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
    "href": "https://nodejs.org/api/pfdghath.html",
    "message": "Fail".red,
    "status": 404,
    "text": "Path".blue,
  },
  {
    "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
    "href": "https://mediumd.com/netscape",
    "message": "OK".green,
    "status": 200,
    "text": "Linea de comando CLI".blue,
  },
  {
    "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
    "href": "https://carlosazvbnmaustre.es/",
    "message": "Fail".red,
    "status": "Did't answer".red,
    "text": "Asíncronía en js".blue,
  },
]
describe('arrayLinks', () => {
  it('arrayLinks is a function', () => {
    expect(typeof arrayLinks).toBe('function');
  });
  it('arrayLinks should return an array of links ', () => {
    expect(arrayLinks('test/prueba-test')).resolves.toStrictEqual(prueba);
  });
});

describe('mdLinks', () => {
  it('mdLinks is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('mdLinks should return a basic information ', () => {
    expect(mdLinks('test/prueba-test', {validate: false})).resolves.toStrictEqual(prueba);
    expect(mdLinks('test/prueba-test')).resolves.toStrictEqual(prueba);
  });
  it('mdLinks should return validated links ', () => {
    expect(mdLinks('test/prueba-test', {validate: true})).resolves.toStrictEqual(validateTrue);
  });
  it('should return error with an incorrect path', () => {
    expect(mdLinks('notPath', { validate: true })).resolves.toStrictEqual("La ruta ingresada no existe o no es valida");
  });
});