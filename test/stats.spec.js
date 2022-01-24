import {
  totalLinks,
  unique,
  broken
} from '../src/stats.js'

import colors from 'colors';

const validateTrue =  [
    {
      "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md",
      "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Overview",
      "message": "ok",
      "status": 200,
      "text": "Generalidades del protocolo HTTP - MDN",
    },
    {
      "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
      "href": "https://developer.mozilla.org/",
      "message": "ok",
      "status": 200,
      "text": "Promesas",
    },
    {
      "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
      "href": "https://nodejs.org/api/pfdghath.html",
      "message": "fail",
      "status": 404,
      "text": "Path",
    },
    {
      "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
      "href": "https://mediumd.com/netscape",
      "message": "ok",
      "status": 200,
      "text": "Linea de comando CLI",
    },
    {
      "file": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
      "href": "https://carlosazvbnmaustre.es/",
      "message": "fail",
      "status": "Don't answer",
      "text": "Asíncronía en js",
    },
  ]
describe('arrayLinks', () => {
  it('totalLinks is a function', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it(`Should be ${colors.blue("TOTAL:5")}`, () => {
    expect(totalLinks(validateTrue)).toBe(colors.blue("TOTAL:5"));
  });
});

describe('unique', () => {
    it('unique is a function', () => {
      expect(typeof unique).toBe('function');
    });
    it(`Should be ${colors.magenta("UNIQUE:5")}`, () => {
      expect(unique(validateTrue)).toBe(colors.magenta("UNIQUE:5"));
    });
});
 
describe('broken', () => {
    it('broken is a function', () => {
      expect(typeof broken).toBe('function');
    });
    it(`Should be ${colors.red("BROKEN: 2")}` , () => {
      expect(broken(validateTrue)).toBe(colors.red("BROKEN: 2"));
    });
});