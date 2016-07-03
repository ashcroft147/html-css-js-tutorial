// for loop
var array = ['grape', 'apple', 'bannana', 'mango'];
 
for(var i=0; i<array.length; i++) {
    console.log(array[i]);
}

// do while
var i=0;
do {
  i += 1;
  console.log(i);
} while (i < 0);

// while
value = 0;
while(value < 5) {
    console.log(value);
    value++;
}

// for in
var obj = {
	id: "myid",
	name: "myname"
};

for (var attr in obj) {
    if (typeof attr == "string") {
        console.log(typeof attr);
        console.log(attr);
    }
}