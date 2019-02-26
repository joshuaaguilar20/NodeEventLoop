function count(num){

  console.log(`Count:${num}`);
  this.count++
}

count.count = 0

for(let i = 0; i < 10; i++){
  if(i < 5){
    count.call(count, i)
  }
}

console.log( count.count );


// this is actually a binding that is made when a function is invoked, and
// what it references is determined entirely by the call-site where the
// function is called.
