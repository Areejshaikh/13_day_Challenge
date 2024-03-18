// Day 13 Challenge:-
// Question 37:
function make_shirt(name, message) {
    if (name === void 0) { name = "large"; }
    if (message === void 0) { message = "i love typeScript"; }
    console.log("Making a ".concat(name, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt();
// make_shirt("medium")
// Question 38:
function cities(type, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(type, " is a ").concat(country));
}
;
cities("karachi");
cities("Lahore");
cities("Amrica");
// Question 39:
function country(city, country) {
    return "".concat(city, " ,").concat(country);
}
console.log(country("Lahore", " pakistan"));
