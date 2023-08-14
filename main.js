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
function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    };
}

var newCourses = courses.map(courseHandler);

var newCoursesName = courses.map(function (course) {
    return `<h2> ${course.name} </h2>`;
});
// Phan tu cua mang moi tra ve se la gia tri return tra ve sau moi vong lap
// map co 3 tham so tra ve 
// 1. Gia tri cua mang moi
// 2. Index cua mang
// 3. Gia tri mang goc




// reduce method

// Tinh tong so coin cua array newCourses
function coinHandler(accumulator, currentValue, currentIndex) {
    return accumulator += currentValue.coin;
};
var totalCoin = newCourses.reduce(coinHandler,0); // initial value : gia tri khoi tao -> tao kieu du lieu cho bien luu tru accumulator




// Flat an Array

var depthArray = [1, 2, [3,4],5,6, [7,8,9]];

var flatArray = depthArray.reduce((flatOutput, depthItem) => {
    return flatOutput.concat(depthItem);
},[]); // initial value la mang rong de tra ve gia tri la 1 mang

// Tao mang moi 

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                name: "HTML & CSS"
            },
            {
                id: 2,
                name: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 3,
                name: "PHP"
            },
            {
                id: 4,
                name: "NodeJS"
            }
        ]
    }
];

var newCoursesArray = topics.reduce((couse, topic) => {
    return couse.concat(topic.courses);
},[]);



// includes method in Array/String
// Tim kiem trong chuoi hoac mang

var string = "Hello World!";
var result = string.includes("Hello",0); 
// 1. Tu khoa can tim kiem 
//2. Vi tri bat dau tim kiem
console.log(result);

var userName = ["Giang","Hoang","Name"];

console.log(userName.includes("Giang"));


