window.onpopstate = function (evt) {

    let sidebar = document.getElementsByClassName("sidebar")[0],
        categories = [...document.querySelectorAll("li > p")],
        elements = [...document.getElementsByTagName("li")],
        element = elements.find(e => e.innerText
            .replace(/\//g, "-")
            .replace(/\?/g, "")
            .replace(/,/g, "")
            .replace(/ /g, "_")
            .toLowerCase() == location.hash.split("/")[2]);

    if (element) {
        let index = categories.findIndex(e => e == element.children[0]),
            offset = categories[index + 1].parentNode.previousSibling.offsetTop;

        sidebar.scrollTo({ top: offset <= 900 ? 0 : Math.abs(offset - 899), behavior: "smooth" });
    }
}

window.addEventListener("scroll", () => {

    let main = document.querySelector("article#main"),
        h2s = main && main.querySelectorAll("h2") || [];

    if (main && main.lastChild && h2s.length > 0) {

        let h = h2s[h2s.length - 1],
            fixedHeight = main.clientHeight + (screen.availHeight - (main.scrollHeight - h.offsetTop + h.clientHeight + main.offsetTop + 10)) + "px";

        if (main.style.height != fixedHeight) {
            main.style.height = fixedHeight;
        }

    }
})