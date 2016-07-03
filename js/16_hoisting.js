// Quiz 1
function foo(){
    function bar() {
        console.log('hello');
    }

   function bar() {
        console.log('world');
    }
    return bar();
}

foo();

//Quiz 2:
function foo2(){
    var bar= function() {
        console.log('hello');
    };
    return bar();
    var bar = function() {
         console.log('world');
    };
}
foo2();
 
foo2();
function foo2(){
    var bar= undefined;
    var bar= undefined;
    bar= function() {
        console.log('hello');
    };
   return bar();
}