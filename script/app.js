const dark = document.querySelector("#dark")
dark.addEventListener("click", () => {
    document.querySelector('html').classList.toggle("on")

    if (document.querySelector('html').classList.contains("on")) {
        dark.src = "images/simbolo-de-sol-preto-solido.png";

    } else {
        dark.src = "images/lua-crescente.png";


    }
})