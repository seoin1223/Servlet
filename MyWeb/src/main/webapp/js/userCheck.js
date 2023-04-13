/**
 * 
 */

 function member_check(){
	 if(!isKor(mf.name)){
		 alert('이름은 한글로 2자 이상 가능해요');
		 mf.name.select();
		 return;
	 }
	 
	 mf.submit(); // 서버로 전송
 }
 
 /**
  * ^ : 시작을 의미
  * $ : 끝을 의미
  * 가-힣 : 한글을 의미
  * + : 패턴이 1개 이상 반복된다는 의미
  * {2,} : 패턴 문자가 2개 이상 와야한다는 의미
  */
 
 function isKor(input){
	 /*alert(input.value);*/
	 let val = input.value;
	 // 정규식 객체 : RegExp
	 //let pattern = new RegExp(/multi/g);
	 let pattern=/^[가-힣]{2,}$/;
	 let b = pattern.test(val);
	 // test()함수 : 정규식 패턴에 매개변수 문자열이 맞으면 true를 반환하고, 틀리면 false를 반환함
	 /*alert(b);*/
	 return b;
 }