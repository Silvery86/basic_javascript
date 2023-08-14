// map method in Array

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 0,
    },
    {
        id: 2,
        name: "CSS",
        coin: 100,
    },
    {
        id: 3,
        name: "CSS",
        coin: 200,
    },
    {
        id: 4,
        name: "PHP",
        coin: 600,
    },
    {
        id: 5,
        name: "NodeJS",
        coin: 900,
    }
];

// duyet qua cac phan tu cua mang, moi khi duyet se chay function phia trong.
var newCourses = courses.map(function (course,index,originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    };
});

var newCoursesName = courses.map(function (course) {
    return `<h2> ${course.name} </h2>`;
});
// Phan tu cua mang moi tra ve se la gia tri return tra ve sau moi vong lap
// map co 3 tham so tra ve 
// 1. Gia tri cua mang moi
// 2. Index cua mang
// 3. Gia tri mang goc
console.log(newCoursesName.join(''));