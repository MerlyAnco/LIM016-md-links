import chalk from 'chalk';

const totalLinks = (array) => {
    const total = array.length;
    const msn = chalk.blue(`TOTAL:${total}`)
    return msn
}

const unique = (array) => {
    const arrLinks = array.map((res)=> {return res.href})
    const newArrLinks = new Set(arrLinks);
    const uniqueLinks = [... newArrLinks];
    const msn = chalk.magenta(`UNIQUE:${uniqueLinks.length}`)
    return  msn
}


const broken = (array) => {
    const arrLinksBroken = array.filter(res => res.message === "fail")
    const msn = chalk.red(`BROKEN: ${arrLinksBroken.length}`)
    return msn
}


  export {
      totalLinks,
      unique,
      broken,
  }