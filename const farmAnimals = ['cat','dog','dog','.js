const farmAnimals = ['cat','dog','dog','chicken','horse','cow', 'dog', 'chicken'];

const farmInventory = farmAnimals.reduce((acc,animals)=>{
  acc[animals] = acc[animals] ? acc[animals] +1 : 1;
  return acc;
}, {} );

console.log(farmInventory);