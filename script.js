// const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Rayan" },
//     { id: 3, name: "Elguerdaoui" }
//   ];
  
  
// const user = users.find((alt)=> alt.name.length > 7 )  
//   console.log(user); 
  

// // const products = [
// //     { name: "Laptop", price: 1000, brand: "HP" },
// //     { name: "Phone", price: 500, brand: "Samsung" },
// //     { name: "Tablet", price: 700, brand: "Apple" }
// //   ];
  

// //   const foundProduct = products.find((product) =>  product.price > 600);
  
// //   console.log(foundProduct);

  
//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   const findRow = matrix.findIndex((row) => row.includes(2))
//   console.log(findRow)

  

//   const ages = [12, 17,  21, 25];
// let result = null

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//         result = ages[i];
//         break;
//       }
  
// }
// console.log(result);


// function isAdult(age) {
//   return age == 18;
// }

// const firstAdult = ages.find(isAdult);

// console.log(firstAdult); // Résultat : 18

// const orders = [
//     { id: 1, name: "Ali", total: 200 },
//     { id: 2,  name: "Rayan", total: 300  },
//     { id: 3, name: "Youssef", total: 150 }
//   ];
  
// const index = orders.findIndex((num)=> num.total >=245)  
//   console.log(index); 

  
// const array = [3,5,7]
// let total = null;
// const arrayMe = array.forEach((getMe)=> {
  
//  if( getMe % 2 !== 0 && total === null){
//   total = getMe
//  }
//  })

// console.log(arrayMe)

// const numbers = [1, 2, 3, 4, 5];
// const found = customFind(numbers, (element) => element > 3);
// console.log(found);














//exercice




function customFind(ar,callback){
  if (!Array.isArray(ar)){
    return undefined
  }
  if (typeof callback !== "function"){
    return undefined
  }
  for(let i = 0; i< ar.length; i++){
    if (callback(ar[i])) {
      return ar[i]
    }
  }
  return undefined
}


const numbers = [10, 20, 30, 40, 50];
console.log(customFind(numbers, (el) => el > 30)); 


const orders = [
    { id: 1, name: "ali", total: 200 },
    { id: 2,  name: "rayan", total: 300  },
    { id: 3, name: "mustapha", total: 150 }
  ];

  console.log(customFind(orders,(search)=> search.total >= 100 &&search.total <= 201 ))