// 기명 함수표현식(named function expression) 
var company = function poscoict() {
    /* 실행코드 */
    poscoict(); // 실행가능
}; 
 
poscoict(); // Syntax Error

// 익명 함수표현식(anonymous function expression)
var company = function() {
    /* 실행코드 */
};
 
// 기명 즉시실행함수(named immediately-invoked function expression)
(function company() {
    /* 실행코드 */
}());
 
// 익명 즉시실행함수(immediately-invoked function expression)
// Javascript 대가이신 더글라스 클락포트의 권장 표기법
(function() {
    /* 실행코드 */
}());
 
// 익명 즉시실행함수(immediately-invoked function expression)
(function() {
    /* 실행코드 */
})();

var app = (function() {
    var privateVar = 'private';
    return {
        prop : privateVar
    };
}());
console.log(app.prop); // "private" 출력

var buyCar = function(carName) {
    // "내가 구매한 차는 sonata입니다." 출력
    console.log('내가 구매한 차는 ' + carName + '입니다.');
};
buyCar('sonata');
 
(function(carName) {
    // "내가 구매한 차는 sonata입니다." 출력
    console.log('내가 구매한 차는 ' + carName + '입니다.');
}('sonata'));