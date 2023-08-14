//example:-
// class Car{
//     drive(){
//      console.log("Driving the car")
//     }
//     brake(){
//      console.log("applying the brake")
//     }
// }
// //we are creating a car object using car class
// let car1 = new Car() // let car = new classname()
// car1.drive();
// car1.brake();
// //we can resue the class n number of times
// let car2 = new Car() // let car = new classname()
// car2.drive();
// car2.brake();

//example:2
    // class power{
    //         switch(){
    //          console.log("switch on the fan");
    //         }
            // butten(){
            //  console.log("swtich off the fan");
            // }
       // }
        
        //we are creating a car object using car class
      //  let borad1 =  new power() // let car = new classname()
       // borad1.switch();
        //borad1.butten();
       // let borad2 =  new power() // lconsole.log(`you tv the ${this.Brand}`let car = new classname()
       // borad2.switch();
        //borad2.butten();
    //================================================
        //templetates:
//     var a = 10;
//     var b = 20;
//     var c = a+b
//     console.log(`the value of "a","b" and "c" is: ${a} 
//     ${b} 
//     ${c}`)
//    console.log("the value of a , b and c is "+ a 
//    +" "
//    +b+" "
//    +c)
    
    //ex:2
//var a = "hi";
//var b = "prabha how are you";
//console.log (`${a} ${b}`);
//===================
// map function

// const arr = [1,2,3,4,5];
// const output = arr.map((x)=>x/2)
// console.log(arr);
// console.log(output);


// var arr = [2,4];
// var output = arr.map(x=>
//         x*2)
// console.log(arr);
// console.log(output);
   
//******************** */
// filtter methed:
//find the even number

// const arr = [1,5,4,3,9,10,12,11,31,14];
// function even(ele){
//         return ele%2 == 0;
// }
// const output = arr.filter(even);
// console.log(output);

//filter use find the odd number
// const arr = [1,5,4,3,9,10,12,11,31,14];
// function odd(ele){
//         return ele%2 == 0;
// }
// const output = arr.filter(odd);
// console.log(output);
// ***********************************
// find the add two number"
// var a = 2;
// var b = 4;
// var sum = a + b;
// function sum(x){
//        return x%2 == 0; 
// }
// const output = "even";
// console.log(output);


// var a = 5;
// var b = 4;
// var sum = a + b;
// function sum(x){
//        return x%2 !== 0; 
// }
// const output = "odd";
// console.log(output);


// var a = 2;
// var b = 7;
// var sum = a,b;
// var output =sum.map(x=>a+b);
// console.log(sum);
//==========================

//2.this keyword
// this = refers to a particular object
// the object depends on immediate context

// example

// const car1 ={
//    Brand: "Hyundai",
//     model: "i20",
//     color: "blue",
//     year: "2023",
//     drive: function(){
//        console.log(`you drive the ${this.year}`) 
//     }
// }
// const car2 ={
//     Brand : "Volvo",
//     model: "x90",
//     color: "black",
//     year: "2023",
//     drive: function(){
//         console.log(`you drive the ${this.Brand}`) 
//      }
// }
// car1.drive();
// car2.drive();


// example 2:tv
// const tv1 ={
//    Brand: "samsang",
//     model: "i20",
//     color: "blue",
//     year: "2023",
//     output1: function(){
//        console.log(`The samsang Tv is: ${this.year} 
//                                       ${this.color} 
//                                       ${this.model} 
//                                      ${this.Brand}`) 
//     }
// }
// const tv2 ={
//     Brand : "mi 6",
//     model: "x90",
//     color: "black",
//     year: "2023",
//     output2: function(){
//         console.log(`you tv the ${this.Brand}`)
//         console.log(`you tv the ${this.year}`) 
//         console.log(`you tv the ${this.color}`)
//         console.log(`you tv the ${this.model}`)
//          }
// }
// tv1.output1();
// tv2.output2();

//ex:my family members to us this method:
// const fam1 = {
//         mother : "prabhavathi",
//         father : "Ashok kumar",
//         son : "charvik ",
//         dougther1 : "deeksha shri",
//         dougther2 : "Prathiksha",
//         output : function(){
//                 console.log(`My family member are:${this.mother}
//                 ${this.father}
//                 ${this.son}
//                 ${this.dougther1}
//                 ${this.dougther2}`)

//         }
// }

// fam1.output();
//===================================================
// 4.constructor
// =>A special method for assiging properties.
// =>Automatically called when class created
//example:1
// class Car{
//    constructor(brand,model,color,year){
//   this.brand=brand;
//   this.model=model;
//   this.color=color;
//   this.year=year;
//     }
   //drive()
      //{
//     console.log("Driving the car")
//        }
//        brake(){
//         console.log("applying the brake")
//        }
// } 
// let car1 = new Car("Hyundai","i20","red",2023)
// let car2 = new Car("Volvo","X90","black",2022)
// let car3 = new Car("Nexa","Baleno","blue",2023)
// let car4 = new Car("Mahindra","Thar","white",2022)

// console.log(`All the car colors :
// "car1" :${car1.color} 
// "car2": ${car2.color} 
// "car3": ${car3.color} 
// "car4": ${car4.color}`)

// console.log(car1);
// console.log(car1.brand);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// console.log(car2);
// console.log(car2.brand);
// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// console.log(car3);
// console.log(car3.brand);
// console.log(car3.model);
// console.log(car3.color);
// console.log(car3.year);

// console.log(car4);
// console.log(car4.brand);
// console.log(car4.model);
// console.log(car4.color);
// console.log(car4.year);

// 5.getter and setters
// get= get user data
// =>binds an object property to a function when the property is accepted.
// set= set user data
// =>binds an object property to a function when the property is assigned with a value.
// //example

//var users={
        //  get name(){
        //     console.log("getting a name")
        //   return this._name
        //  },
        //  set name(n){
        //   console.log("setting a name"+" "+n)
        //   this._name =n
        //  }
        // }
        // users.name ="Alice" 
        // console.log(users.name);
//real time example
// class Car{
//     constructor(power){
       








// 3.classes
// class: A blueprint of creating object.It defines properties and methods
// syntax:
// class classname{
    
// }
// example:-
// class Car{
//     drive(){
//      console.log("Driving the car")
//     }
//     brake(){
//      console.log("applying the brake")
//     }
// }
// //we are creating a car object using car class
// let car1 = new Car() // let car = new classname()
// car1.drive();
// car1.brake();
// //we can resue the class n number of times
// let car2 = new Car() // let car = new classname()
// car2.drive();
// car2.brake();






