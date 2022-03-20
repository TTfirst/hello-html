var change_one = document.querySelector("#change_one");
console.log(change_one);
var change_two = document.querySelector("#change_two");
var big_one = document.querySelector("#big_one");
var big_two = document.querySelector("#big_two");
console.log("1234567")
change_one.onclick = function () {
    console.log("1234")
    big_two.style.display = "none";
    big_one.style.display = "block";
    change_one.style.display = "none";
    change_two.style.display = "block";
}
change_two.onclick = function () {
    big_two.style.display = "block";
    big_one.style.display = "none";
    change_one.style.display = "block";
    change_two.style.display = "none";
}
//阻止默认行为
var input = document.querySelector("#last");
console.log(input);
input.addEventListener("click", function (e) {
    e.preventDefault();
})