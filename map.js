const numbers =[2,3,4,6,7,8];
/* const resultmap = numbers.map(n=>n/7);
console.log("map: ",resultmap); */
const r = numbers.filter(nm=>nm>5);
console.log("filter: ",r);
const find = numbers.find(nnn=>nnn<7);
console.log("find: ", find);

numbers.forEach(n=>{

    const res = n+4;
    console.log(res);
})