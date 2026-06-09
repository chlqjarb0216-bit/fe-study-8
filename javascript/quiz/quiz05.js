const personInfo = {
    name: "홍길동",
    age: 25,
    phone: "010-1234-5678",
    engName: "John Smith",
    nickname: " 복습마왕 ",
};

console.log("변경 전");
console.log(personInfo);

personInfo.engName = personInfo.engName.toUpperCase();
/* 코딩부분 */
personInfo.nickname = personInfo.nickname.trim();
/* 코딩부분 */
personInfo.phone = personInfo.phone.split("-");
/* 코딩부분 */

console.log("변경 후");
console.log(personInfo);
