// 1. 전역변수, 지역변수 예
var name = "global";    // 전역 변수를 선언
function checkscope(){  
    var name = "local"; // 지역 변수를 선언
    console.log(name);  // 전역 변수가 아닌 지역 변수를 사용
}
checkscope();           // 출력 결과: "local" 

// 2. var 키워드 없이 변수를 선언하면 자동으로 전역 변수가 된다.
var name2 = "global";    // 전역 변수를 선언
function checkscope2(){  
    name2 = "local";     // 전역 변수를 변경
}
checkscope2();
console.log(name2);      // output: "local"

// 3. 중첩 함수에서 내부 함수는 그것이 담긴 함수의 변수에 접근할 수 있다.
function changeName(name){          // "name"은 지역 변수다
    function inner1(){
        name = name + "-inner1";     
        function inner2(){
            name = name + "-inner2";
        }
        inner2();
    }
    inner1();
    return name;
}
console.log(changeName("Hello"));   // Hello-inner1-inner2