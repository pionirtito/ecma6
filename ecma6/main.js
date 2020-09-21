// Funkcije

function info() {
    console.log('Statement');
}

let display = function(){
    console.log('Expression');
}

const person = {
    myInfo : function () {
        console.log('Method');
    }
}

// const myFunc = (name)=>{
// const myFunc = name =>{// jedan argument! => i bez () zagrada
const myFunc = name =>// jedan statement => moze i bez {}
    // console.log('Arrow function '+name);
    console.log(`Arrow function ${name}`);
// }

myFunc('Nikola');


// Nizovi
let names = ['Ana', 'Milos', 'Dejan', 'Sofija'];

for (let i=0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(name=> console.log(name)); // AF je argument u forEach

for (const name of names) {
    console.log(name);
}

// MAP --> pravimo novi izmenjen niz
const upperNames = names.map(name => // Map kad hocemo da uradimo nesto sa elementima niza
    // return name.toUpperCase(); // return jer je novi niz, a metoda da ne bismo dobili isti niz unutar novog niza
    name.toUpperCase() // moze i bez return i bez ; jer se podrazumeva !!!
);

console.log(upperNames);

// FILTER --> filtrira kroz objekat
const pets = [
    {
        name : "Marla",
        type : "cat"
    },
    {
        name : "Max",
        type : "dog"
    },
    {
        name : "Gandalf",
        type : "cat"
    },
    {
        name : "Nemo",
        type : "fish"
    }
];

const dogs = pets.filter(pet => pet.type == "cat"); // bez () {} i return
console.log(dogs);