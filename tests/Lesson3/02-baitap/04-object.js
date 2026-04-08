//1. Create object car
const car ={
make:"Toyota",
model:"Corolla",
year: 2001
}
console.log(car.year);
//2. Create object person
const person = {
    name:"Thao",
    address:{
        street:"To Huu",
        city: "HaNoi",
        country:"Viet Nam"
    }
};
console.log(person.address.street);
//3. Create object student
const student = {
    name:"Thao",
    grades:{
        math:8,
        english:9
    }
};
console.log(student["grades"]["math"]);

//4.Create object setting, change value volume
const settings = {
    volume: 30,
    brightness:70
};
settings.volume = 50;
console.log(settings);

//5. Create object bike. Add attribute color
const bike = {
    brand: "Yamaha"
}
bike.color = "yellow";
console.log(bike);

//6. Create object employee. Delete attribute age
const employee = {
    name: "Thao",
    age: 29
}
delete employee.age;
console.log(employee);

//7. Creare object school
const school = {
    classA:["An","Bình","Châu"],
    classB:["Đào","Hưng","Giang"]
};
console.log(school);
