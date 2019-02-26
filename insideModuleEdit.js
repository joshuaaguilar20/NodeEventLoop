// By retaining an inner reference to the public API object inside your
// module instance, you can modify that module instance from the in‐
// side, including adding and removing methods and properties, and
// changing their values.

var foo = (function CoolModule(id) {
    function change() {
// modifying the public API
    publicAPI.identify = identify2;
    }
  function identify1() {
    console.log( id );
    }
  function identify2() {
    console.log( id.toUpperCase() );
  }

    var publicAPI = {
    change: change,
    identify: identify1
    };

  return publicAPI; 


  })( "foo module" );




foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
