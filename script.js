document.addEventListener("click", function () {
    let colors = ["red", "green", "yellow", "pink", "black", "blue", "orange", "purple"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
})
alert("java chal rhi h")