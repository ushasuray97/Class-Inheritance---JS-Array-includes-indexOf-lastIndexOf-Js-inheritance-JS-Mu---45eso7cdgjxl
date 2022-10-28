// import using require
var shape=require('./shape.js');
// declare class
class Circle extends Shape{
   constructor(color){
     super();
   }
  calculateArea(){
    console.log("calculating area of circle");
}
module.exports=Circle;
// export class using module.exports
