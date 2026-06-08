let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */
function changeLink(str) {
    let idx = str.indexOf("://");
    if (idx == -1) return "경로가 잘못되었습니다.";
    let add;
    if (str.includes("https")) {
        add = "secure.";
    } else {
        str = str.substring(0, idx) + "s" + str.substring(idx);
        idx++;
        add = "open.";
    }
    idx += 3;
    return str.substring(0, idx) + add + str.substring(idx);
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));
