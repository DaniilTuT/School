const schools = [
    {
        id:1,
        name:"Yorktown",
    },
    {
        id:2,
        name:"Washington & lee",
    },
    {
        id:3,
        name:"Wakefield",
    },
]
const genders = ['female', 'male']
const manNames = ['Рой','Гай','Филип','Алекс','Вася','Саня','Ваня','Петя']
const femNames = ["Ася","Алина","Вера","Лера","Ангелина","Настя","Вероника"]
const ages = [7,8,9,10,11,12,13,14,15,16,17,18]

const pupils = [
    {name: 'Гарри', age:11,gender:genders[1], schoolId: 2,},
    {name: 'Ренат', age:13, gender:genders[1], schoolId: 2, },
    {name: 'Гермиона', age: 18, gender: genders[0], schoolId: 3,}
]
// Задание 1) Добавить поле school для всех учеников
const getSchool = (id) => {
    for (let school of schools) {
        if (id === school.id) {return school.name}
    }
};
const addSchool = (list) => {
for (let pupil of list) {
    pupil.school = getSchool(pupil.schoolId)
};
};
//////////////////////////////////////////////////////

// Задание 2) Создать функцию GetPupilByGender
const getPupilByGender = (gender) => {
    for (let pupil of pupils) {
        if (gender === pupil.gender) {console.log(pupil)}
    }
};
//////////////////////////////////////////////

//Задание 3) Создать функцию getPupilBySchoolId
const getPupilsBySchoolId = (id) => {
    for (let pupil of pupils) {
        if (id === pupil.schoolId) {console.log(pupil)}
    }
};
///////////////////////////////////////////////

// Задание 4,5,6 Найти самого взрослого, самого молодого и разницу в их возрасте
const getElderPupil = (list) => {
    let pup = {};
    let max = 0;
    for (let listik of list) {
        if (listik.age>max) {pup=listik; max = listik.age}
    }
    return pup
}
const getYoungerPupil = (list) => {
    let pup = {};
    let min = 100;
    for (let listik of list) {
        if (listik.age<min) {pup=listik; min=listik.age}
    }
    return pup
}
///////////////////////////////////////////////////////////////////////////////

// Задание 7) Перевести всех учеников из школы A  в школу B
const transferPupil = (fromId,toId) => {
    for (let pupil of pupils) {
        if (pupil.schoolId===fromId) {
            pupil.schoolId=toId;
            pupil.school = getSchool(pupil.schoolId)
        }
    }
}
///////////////////////////////////////////////////////////
// Задание 8) Найти средний возраст по школе
const getMiddleAge = (Id) => {
    let middleAge = 0;
    let count = 0;
    for (let pupil of pupils) {
        if (pupil.schoolId===Id) {middleAge= middleAge+pupil.age; count++}
            };
    return Math.floor(middleAge/count)

}
////////////////////////////////////////////

// Задание 9) заменить все буквы "а" в именах на "@"
const changeName = (list) => {
    for (let pupil of list) {
        console.log(pupil.name.toLowerCase().replace(/а/g,'@'))
    }
};
////////////////////////////////////////////////////

// Задание 10) Найти шк с наиб кол-вом учащихся
const getPupilsInSchool = (schoolId) => {
  let count = 0;
    for (let pupil of pupils) {
        if (pupil.schoolId===schoolId){count++}
    }
    console.log(count)

  return count
}
const getMax = () => {
    let mas =[];
    for (let i = 0; i < schools.length; i++) {
        mas.push(getPupilsInSchool(i+1))
    }
    let maxIndex = mas.indexOf(Math.max.apply(null,mas))+1;
    //console.log(Math.max.apply(null,mas))
    for (let school of schools) {
       if (school.id===maxIndex) {console.log(school.name)}
    }
}
/////////////////////////////////////////////////

// Задание 11) Добавить в школу с индексом .. такое .. колво учащихся рандомом
const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const addPupils = (num, schoolId) => {
    for (let i = 0; i < num; i++) {
        let pup = {};
        pup.schoolId = schoolId;
        pup.gender = genders[randomInteger(0, 1)];
        pup.age = ages[randomInteger(0, ages.length - 1)];
        if (pup.gender===genders[1]) {pup.name = manNames[randomInteger(0, manNames.length - 1)];}
        else {pup.name = femNames[randomInteger(0, femNames.length - 1)];}
        pupils.push(pup)
    }
}
//////////////////////////////////////////////////////////////////////////

// Вывод всего этого добра

//1)
addSchool(pupils);
//2)
console.log(getPupilByGender(genders[0]))
//3)
console.log(getPupilsBySchoolId(2))
//4)
console.log(getElderPupil(pupils))
//5)
console.log(getYoungerPupil(pupils))
//6)
console.log(getElderPupil(pupils).age-getYoungerPupil(pupils).age)
//7)
transferPupil(3,1)
console.log(pupils)
//8)
console.log(getMiddleAge(1))
//9)
changeName(pupils)
//10)
console.log(getMax())
//11)
addPupils(10,1);
console.log(pupils);

