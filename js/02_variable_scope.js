// 1. ��������, �������� ��
var name = "global";    // ���� ������ ����
function checkscope(){  
    var name = "local"; // ���� ������ ����
    console.log(name);  // ���� ������ �ƴ� ���� ������ ���
}
checkscope();           // ��� ���: "local" 

// 2. var Ű���� ���� ������ �����ϸ� �ڵ����� ���� ������ �ȴ�.
var name2 = "global";    // ���� ������ ����
function checkscope2(){  
    name2 = "local";     // ���� ������ ����
}
checkscope2();
console.log(name2);      // output: "local"

// 3. ��ø �Լ����� ���� �Լ��� �װ��� ��� �Լ��� ������ ������ �� �ִ�.
function changeName(name){          // "name"�� ���� ������
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