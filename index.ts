// Day 13 Challenge:-

// Question 37:
function make_shirt(name:string = "large" ,message : string = "i love typeScript") {
    console.log(`Making a ${name} t-shirt with the message "${message}" printed on it.`);
    
}
make_shirt()
// make_shirt("medium")

// Question 38:
function cities(type:string ,country :string = "pakistan")  {
    console.log(`${type} is a ${country}`);
};

cities("karachi");
cities("Lahore");
cities("Amrica")

// Question 39:
function  country(city:string,country :string): string {
    return `${city} ,${country}`;
}
console.log(country("Lahore" , " pakistan"));
