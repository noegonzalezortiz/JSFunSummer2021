/*const furniture = ['Bed','Sofa','Table','Chairs','Desk']


const furnitureOrder = furniture.filter((item)=> {
  if(item !== 'Desk'){
    return furniture;
  }
})

console.log(furnitureOrder)*/



const farmAnimals = ['cat','dog','dog','chicken','horse','cow', 'dog', 'chicken'];

const tally = farmAnimals.reduce((acc,animals)=>{
  acc[animals] = acc[animals] ? acc[animals] +1 : 1;
  return acc;
}, {} );

console.log(tally);