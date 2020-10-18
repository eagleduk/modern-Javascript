# modern-Javascript
벨로퍼트 자바스크립트 : https://learnjs.vlpt.us

변수
@ null => 값이 없다.
@ undefined => 값이 설정되지 않았다.

연산자
@ 논리연산자 우선순위 NOT-AND-OR

조건문
@ if
@ switch ~ case

함수
@ function 함수 => this 객체를 사용할 수 있다.
@ arrow 함수 => this 객체를 사용할 수 없다.

객체
@ 비구조 할당(객체구조분해) = 객체에서 {}로 변수만 빼오는것.
@ 화살표 함수에서는 this 변수가 동작하지 않는다. this가 포함된 함수를 객체화 하면 error가 발생한다.
@ getter, setter 함수

배열
@ forEach
@ map
@ indexOf
@ findIndex => 특수한 조건에 대해서 index를 찾을때
@ find => 특수한 조건에 대해서 가장 빠른 index의 값을 찾을때
@ filter => 조건에 맞는 값들로 새로운 배열을 만들때
@ splice => 기존 배열을 건드리면서 자른 배열을 리턴한다.
@ slice => 기존 배열은 남겨두고 자른 배열을 리턴한다.
@ shift => 기존 배열의 첫번째 값을 꺼낸다.
@ pop => 기존 배열의 마지막 값을 꺼낸다.
@ unshift => 배열의 첫번째에 값을 넣는다.
@ concat => 여러개의 배열을 하나의 배열로 합친다.
@ join => 배열을 하나의 문자열로 리턴한다.
@ reduce => 
@ includes => 배열에 값이 존재하는지 확인

반복문
@ for
@ while
@ for ~ of : 배열의 반복문
@ for ~ in : 객체의 반복문
@ break : 현재 상태에서 반복문을 멈추고 싶을때
@ continue : 현재 상태의 반복문을 넘기고 다음 반복문을 실행하고 싶을때

프로토타입
@ 객체 생성자로 만든 객체에 동일하게 함수나 변수를 선언할 수 있다.
@ 객체.call => 객체 생성자를 상속받을 수 있다. (Javascript-Class)

클래스
@ 클래스 내에서 매소드(함수)를 선언하면 자동으로 prototype에 등록된다.
@ 객체 생성자와 프로토타입을 더 쉽게 사용할 수 있다.

삼항연산자

Truthy / Falsy
@ Falsy => undefined, null, 0, '', NaN, false
@ Falsy를 제외한 값들
@ Truthy / Falsy 한 값을은 boolean 으로 바꿀때 : !!Truthy(Falsy) = true(false)

단축평가 논리 계산법
@ 논리연산중에 전자 논리 상태에 따라서 후자 값 리턴 => true && 'hello'

함수의 기본 파라미터(파라미터의 기본값)

비구조화 할당(구조분해)
@ 비구조화 할당시 기본값을 정할 수 있다.
@ { 키 : 새로운 변수 }
@ 배열도 객체와 비슷한 방법으로 할 수 있다. {} 를 [] 로 

spread
@ 기존의 객체를 복사하여 새로운 객체를 만드는 방법
@ ...[기존객체]
@ 배열에서도 가능

rest
@ 객체, 배열, 함수에서 사용 가능
@ spread는 객체(배열)을 복사하는 반면, rest는 객체(배열)에서 추출하는 역할
@ 배열에서의 rest는 가장 뒤에 있어야 한다.
@ 동적인 함수의 파라미터에서 사용할 수 있다.

scope(범위)
@ global(전역)
@ function(특정 함수)
@ block(블록)

Hoisting
@ 아직 선언되지 않은 변수, 함수를 끌어올려서 사용할 수 있는 자바스크립트의 작동 방식
@ 순서에 혼동이 생길수가 있으므로 되도록 피해야할 것

비동기 처리
@ setTimeout, Promise, async/await
@ Ajax Web API 요청, 파일 읽기, 암호화/복호화, 작업예약
@ Promise.all 은 하나라도 에러가 발생하면 전체가 에러처리, race 는 제일 먼저 끝나는 하나에서 에러가 발생해야 에러처리가 된다.