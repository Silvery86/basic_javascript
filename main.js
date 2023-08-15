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


var userName = ["Giang","Hoang","Name"];



/* Math object

- Math.PI : tra ve so pi
- Math.round() : lam tron so
- Math.abs() : tra ve gia tri tuyet doi
- Math.ceil : Lam tron tren
- Math.floor() : Lam tron duoi
- Math.random() : Tra ve so thap phan ngau nhien < 1
- Math.min() : Tra ve so nho nhat
- Math.max() : Tra ve so lon nhat

*/

random = Math.floor(Math.random() * 100);

// console.log(random);

if (random < 50) {
    // console.log("Thanh cong!");
}



// Call back function
// La 1 function duoc truyen qua doi so

function myFunction(param) {
    if (typeof param === 'function'){
        param("Hello World");
    }
};

function myCallback(value){
    console.log("Value: ", value);
};

myFunction(myCallback)


// Tu dinh nghia map function

Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    var output = [];
    for(var i=0; i < arrayLength; i++){
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courseArray = ["Javascript","HTML&CSS","NodeJS"];

var htmls = courseArray.map2(function(course){
    return `<h1>${course}</h1>`;
});

console.log(htmls.join(""));