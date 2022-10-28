// declare class
class Shape{
  constructor(){
      this.color='red';
  }
  calculateArea(){
    console.log("I am in shape class");
  }
  drawShape(){
    console.log("shape drawn");
  }
}
module.exports=Shape;
// export class using module.exports
