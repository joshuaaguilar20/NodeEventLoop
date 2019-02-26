// The key
// take-away is that there’s not really any particular “magic” to module
// managers. They fulfill both characteristics of the module pattern I lis‐
// ted above: invoking a function definition wrapper, and keeping its
// return value as the API for that module.
// In other words, modules are just modules, even if you put a friendly
// wrapper tool on top of them.

var module = (function manager(){
  var modules = {};

  function define(name, deps, impl){
    for(let i = 0; i < deps.length; i++){
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl,deps);

  }
  function get(name){
    return modules[name]
  }
  return {
    define:define,
    get:get
  }



})()


module.define('bar', [], function(){
  function hello(who){
    return `let me introduce : ${who}`
  }

  return {
    hello
  }
})

module.define( "foo", ["bar"], function(bar){
    var hungry = "hippo";
      function awesome() {
        console.log( bar.hello( hungry ).toUpperCase() );
        }

    return {
     awesome: awesome
    };

});

var bar = module.get( "bar" );
var foo = module.get( "foo" );
console.log(bar.hello( "hippo" )); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO
