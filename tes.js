var bgColor = document.getElementById("bg-color")
var txtColor = document.getElementsById("text-color")

bgColor.addEventListener("change", event => {
    document.body.style.backgroundColor = bgcolor.value;
});

txtColor.addEventListener("change", event => {
    document.body.style.color = txtColor.value;
})