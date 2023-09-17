(function () {
    let screen = document.getElementById("veiwPort");
    let buttons = document.querySelectorAll(".button");
    let clear = document.querySelector(".buttonGrayClear");
    let equal = document.querySelector(".buttonGrayEnter");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === "") {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = "";
    })
})();