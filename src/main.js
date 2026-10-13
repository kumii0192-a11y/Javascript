//JavaScript --> Programming Language
/*
Programming Language
1. input & output
2. variable and data type
3. condition (if, else)
4. looping (perulangan)
5. function 
*/

//output
//1. using console.log()

console.log("Hello World");
console.log("My Name is 'Aisyah Mufidatul Yusra");
console.log(4+9);

//2. alert
//alert("welcome to my website");

//3. document.write() hanya bisa di index.html di tag script

//4. innerHTML
//document.getElementByID("id_name").innerHTML="text";
document.getElementById("judul").innerHTML="HAIII";

//5. variable --> to store data (let, var[sangat tidak di rekomendasikan], const)
//let
let name="aisyah";
console.log(name);
let a = 9;
let b = 29;
console.log(a*b);
let c = b/a;
console.log(c);
let d = a-b;
console.log(d);
let address = "Solo";
console.log("My name is " + name + " I am from " + address);

const school = "SMA ABBS Surakarta";
console.log(school);

/* Operasi aritmatika
Penjumlahan [+]
Pengurangan [-]
Perkalian [*]
Pembagian [/]
Modulo [%] sisa hasil bagi
*/
let number_1 = 100;
let number_2 = 250;
console.log(number_1+number_2);
console.log(number_1-number_2);
console.log(number_1*number_2);
console.log(number_1/number_2);
console.log(number_1%number_2);

//calculator BMI
let bb = 51;
let tb = 163;
let bmi = (bb/(tb*tb))*10000
console.log(bmi);

//if else (condition)
let time = 6;
if (time <= 6){
    console.log("Good Morning!");
}

let today = "rain";
if (today = "rain"){
    console.log("Take an umbrella!");
}
else{
    console.log("Don't take an umbrella!");
}

/*
1. jika hari ini hujan maka membawa payung 
2. jika hari ini tidak hujan, maka tidak bawa payung
*/

let cuaca = "hujan";
if (cuaca == "hujan"){
    console.log("Bawa Payungmu!");
}
else{
    console.log("Tidak perlu membawa payung!");
}



let rain = true;
if (rain){
    console.log("Bring Your Umbrella!");
}
else{
    console.log("Summer day!");
}


//jika nilai lebih dari 75, maka lulus
//jika nilai kurang dari 75, maka tidak lulus

let nilai = 10;
console.log("Nilai = " + nilai)
if(nilai >= 75){
    console.log("Selamat, Kamu LULUS!");
}
else{
    console.log("Mohon maaf, Kamu TIDAK LULUS!");
}

//jika bilangan genap, maka genap
//jika bilangan ganjil, maka ganjil
let numerus = 38;
if (numerus % 2 == 0 ){
    console.log("Angka " + numerus + " adalah Genap");
}
else{
    console.log("Angka " + numerus + " adalah Ganjil");
}

/*More than 2 conditions 
    if (condition 1){
        action 1;
    }
    else if (condition 2){
        action 2;
    }
    else{
        action 3;    
    }
*/

//BMI Multicondition

let BB = 51;
let TB = 163;
let BMI = (BB/(TB*TB))*10000;
console.log("Tinggi Badan = ", TB, "cm");
console.log("Berat Badan = ", BB, "Kg");
console.log("BMI = ", BMI);

//Bmi < 18.5 = underweight
//bmi 18.5-24.9 = normal weight
//bmi 25.0-29.9 = overweight
//bmi > 30 = obese
if(BMI < 18.5){
    console.log("Underweight");
}
else if(BMI >=18.5 && BMI <=24.9){
    console.log("Normal Weight");
}
else if(BMI >24.9 && BMI <=29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}