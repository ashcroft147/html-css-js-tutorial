// 1. change type from number to string
var tv = 2;
tv += "";
console.log(typeof tv); // Result: string

// 2. change type from string to number
tv = "2"
tv *= 1;
console.log(typeof tv);    // Result : number

// 3. ????? ??????? ????
tv = 2
tv = String(tv);
console.log(typeof tv);    // Result : string

// 4. ??????? ????? ????
tv = "2"
tv = Number(tv);
console.log(typeof tv);    // Result : number

// 5. ??????? ????? ????(parseInt)
tv = "2.1";
tv = parseInt(tv);
console.log(tv); // Result: 2
console.log(typeof tv); // Result: number

tv = "2.4";
tv = parseFloat(tv);
console.log(tv); // Result: 2.4
console.log(typeof tv); // Result: number