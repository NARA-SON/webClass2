// 관습적으로 맨 앞은 대문자를 써준다. 힙!

// 함수정의
function Dog(dogName,dogAge){
  this.name = dogName
  this.age = dogAge
  this.feel = Math.floor(Math.random()*3)
  this.say = function(){
    if(this.feel==0){
      document.write(`멍멍! 나는 ${this.name}이다! 기분이가 좋다 멍멍!!<br>`)}
    else if(this.feel==1){
      document.write(`${this.name}는 오늘 심심하군!! 머 먹을거 없나~ 멍멍~<br>`)}
    else{
      document.write(`${this.name}는 지금 굉장히 화가난다!! 아아!!<br>`)}
  }
}
// 함수의 결과를 생각하며 만들어주면 수월하다.
// 함수를 아래와 같이 실행한다. new를 붙여야 함
// new를 써야 아래의 객체데이터를 적용시켜줄 수 있다.
// let dog1 = new Dog("뽀삐", 2)
// let dog2 = new Dog("흰둥이", 4)


// 객체표현하여 강아지를 만들었다.
// let dog1 = {
//   name:"뽀삐",
//   age:2,
//   say:function(){
//     document.write("멍멍!")
//   }
// }
// let dog2 = {
//   name:"흰둥이",
//   age:4,
//   say:function(){
//     document.write("멍멍!")
//   }
// }