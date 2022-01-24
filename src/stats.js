import colors from 'colors';

const totalLinks = (array) => {
    const total = array.length;
    const msn = colors.blue(`TOTAL:${total}`)
    return msn
}

const unique = (array) => {
    const arrLinks = array.map((res)=> {return res.href})
    const newArrLinks = new Set(arrLinks);
    const uniqueLinks = [... newArrLinks];
    const msn = colors.magenta(`UNIQUE:${uniqueLinks.length}`)
    return  msn
}


const broken = (array) => {
    const arrLinksBroken = array.filter(res => res.message === "fail")
    const msn = colors.red(`BROKEN: ${arrLinksBroken.length}`)
    return msn
}


  export {
      totalLinks,
      unique,
      broken,
  }