// local variable - "foo string" 라는 로그를 남김
(function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })();

// local variable - "foo string" 라는 로그를 남김
(function(undefined){ console.log(undefined, typeof undefined); })('foo');

// global variable - 전역객체의 속성인 경우에는 원시값을 가지므로 값 할당이 되지 않는다.
global.undefined = "foo";
console.log(global.undefined);

// strict equality with undefined
var x;
if (x === undefined) { // typeof x === 'undefined' 와 같이 사용 가능
   console.log('undefined - x');
}
else {
   console.log('defined');
}

// y 는 이전에 선언되지 않음
if (typeof y === 'undefined') { // 에러 없이 true 로 평가
   console.log('undefined - y');
}

if(y === undefined){ // ReferenceError 를 던짐

}