function getMealByTime1(h) {
    if (h >= 6 && h <= 10) return "아침";
    if (h >= 11 && h <= 14) return "점심";
    if (h >= 17 && h <= 20) return "저녁";
    if (h >= 21 && h <= 23) return "야식";
    return "금식";
}

const getMealByTime2 = function (h) {
    if (h >= 6 && h <= 10) return "아침";
    if (h >= 11 && h <= 14) return "점심";
    if (h >= 17 && h <= 20) return "저녁";
    if (h >= 21 && h <= 23) return "야식";
    return "금식";
};

const getMealByTime3 = (h) => {
    if (h >= 6 && h <= 10) return "아침";
    if (h >= 11 && h <= 14) return "점심";
    if (h >= 17 && h <= 20) return "저녁";
    if (h >= 21 && h <= 23) return "야식";
    return "금식";
};

function consoleLogTest(func) {
    console.log(func(5)); //출력값 : 금식
    console.log(func(8)); //출력값 : 아침
    console.log(func(13)); //출력값 : 점심
    console.log(func(16)); //출력값 : 금식
    console.log(func(19)); //출력값 : 저녁
    console.log(func(22)); //출력값 : 야식
    console.log(func(2)); //출력값 : 금식
}

consoleLogTest(getMealByTime1);
consoleLogTest(getMealByTime2);
consoleLogTest(getMealByTime3);

arr = [5, 8, 13, 16, 19, 22, 2];
const funcTest = (arr, func) => {
    for (let a of arr) {
        func(a);
    }
};
funcTest(arr, getMealByTime3);
