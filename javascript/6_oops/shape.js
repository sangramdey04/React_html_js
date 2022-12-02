class shape{
  color = "red";
    getColor(){
       console.log(`The colour is ${this.color}`)
       return this;
    }
    // Setter 
    set changecolor(newCl){
        this.color = newCl;
        // return this;
    }
    //getter
    get gtcolor(){
       return "changed colour is: "+ this.color;
    //    return this;
    }
    intro(){
        console.log("This is parent class");
        return this;
    }
}
class rectangle extends shape{
   static area (l,b){
        console.log("The area is:"+2*(l+b));
        return this;
    }
}
let rect = new rectangle()
rect.intro();
rect.getColor();
rectangle.area(3,4);

rect.changecolor="green";  // using setter

 console.log(rect.gtcolor);// using getter

 console.log("Now using method chaining:")

//  rect.intro().getColor().area(5,6); //method chaining when area is not static
 rect.intro().getColor(); //method chaining (get and set does not work in method chaining)

 