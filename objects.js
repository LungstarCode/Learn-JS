// Objects are used to store key value pairs, accessed via a dot notation, or [], like an array

// i'll create an object called developer, storing some information about me

const developer = {
    name : "Lungile",
    surname : "Mawila", 
    role : "Junior Software Engineer",
    age : 24, 
    degree: "Bachelors degree in Information and Communication Technology",
    country: "South Africa",
    state: "Limpopo"
}


// accesssing the values using the dot notation 

console.log("Hello, my name is " + developer.name)

// accessing the value using the []

console.log("My qualification is: "+ developer["degree"])