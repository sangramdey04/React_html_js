const student = {

    // data property
    firstName: 'Monica',
    
    set changeName(newName) {
        this.firstName = newName;
    },
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },
};

// accessing data property
console.log(student.firstName); // Monica
student.changeName="Sangram";
// // accessing getter methods
console.log(student.getName);  

// trying to access as a method
//console.log(student.getName()); // error
 
 

// static method


class Square {

   static display(){
    return "Static is here"
 }

}
 
console.log(Square.display());

