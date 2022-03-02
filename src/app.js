let isim="Yağmur"
let student={id:1,name:"Alican"}
//console.log(student);
function save(puan=10,ogrenci) {
    //console.log(ogrenci.name +" : "+ puan)    
}
save(undefined,student);
let students=["Engin Demiroğ","Yağmur","Caner","Kübra"]
//console.log(students)
let students2=[students[3],{id:5,name:"sema"},"Ankara",{city:"Karabük"},15]
//console.log(students2)
//rest konusu
let showProducts=function (id,...products) {
    // console.log(id)
    // console.log(products)
}
//console.log(typeof showProducts)
//showProducts(10 ,"Elma","Armut","Karpuz")
//spread konusu
let points=[4,8,1,26,68,80]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC","D","EFG","H")
//Destructuring
let populations=[10,20,30,[1000,8000]]
let[small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
//Array i Destructuring etmek
function someFunction([small1],number) {
    console.log(small1,number)
}
someFunction(populations,2)

//Objeyi Destructuring etmek
let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])//farklı bir kullanım
let {id,name}=category
console.log(id)
console.log(name)