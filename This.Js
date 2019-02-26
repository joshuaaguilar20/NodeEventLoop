
  function identify() {
    return this.name.toUpperCase();
  }
  function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
  }

var me = {
name: "Kyle"
};
var you = {
name: "Reader"
};
// The call() method calls a function with a given this value and arguments provided individually.
  identify.call(me)


  
