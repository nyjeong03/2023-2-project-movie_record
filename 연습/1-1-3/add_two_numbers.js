function doSomething(){
            let a = document.getElementById('inputA').value;
            let b = document.getElementById('inputB').value;
            // id가 inputA, inputB인 input 요소의 값을 가져와 변수 a,b에 저장
            document.getElementById("valueA").innerHTML = a;
            document.getElementById("valudB").innerHTML = b;
            // id가 valueA, valueB인 요소의 텍스트를 a,b 값으로 수정됨
            document.getElementById("valueC").innerHTML = Number(a) + Number(b);
            // id가 valueC인 요소의 텍스트는 a와 b의 값을 숫자로 바꾼 다음 더한 결괏값으로 수정됨
        }