const person = {
    name:undefined,
    age:20,
    location:{
        city:"khaitan",
        temp:40
    }
}



const {name:hassanMir = "Anonymous" , age = 18} = person



console.log(`${hassanMir} with ${age}`)



const newArray = ["Hassan",20,"Khaitan"]

const [myName,,city] = newArray


console.log(`${myName} ${city}`)