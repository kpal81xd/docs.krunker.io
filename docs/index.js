var checkHighlights = setInterval(() => {

    let main = document.querySelector("article#main"),
        h2s = main && main.querySelectorAll("h2") || [];

    if (main && main.lastChild && h2s.length > 0) {

        let h = h2s[h2s.length - 1],
            fixedHeight = main.clientHeight + (window.innerHeight - (main.scrollHeight - h.offsetTop + h.clientHeight + main.offsetTop - 75)) + "px";

        if (main.style.height != fixedHeight) {
            main.style.height = fixedHeight;
        }
    }

    if (document.querySelectorAll("code.lang-krunkscript:not(.hljs)").length > 0)
        hljs.highlightAll()

}, 100)

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

hljs.registerLanguage("krunkscript", function () {
    return {
        'case_insensitive': !0x0,
        'contains': [hljs['HASH_COMMENT_MODE'], {
            'className': 'keyword',
            'variants': [{
                'begin': '\x5cb(public|action|return|if|else|for|while|addTo|remove|lengthOf|notEmpty|toStr|toNum)\x5cb'
            }]
        }, {
            'className': 'built_in',
            'variants': [{
                'begin': '\x5cb[_a-zA-Z][_a-zA-Z0-9]*(?=\x5c()'
            }]
        }, {
            'className': 'literal',
            'variants': [{
                'begin': '\x5cb(GAME|true|false)\x5cb'
            }]
        }, {
            'className': 'title',
            'variants': [{
                'begin': '\x5cb(num|bool|char|str|obj)\x5cb'
            }]
        }, {
            'className': 'variable',
            'variants': [{
                'begin': '\x5cb[_a-zA-Z][_a-zA-Z0-9]*\x5cb'
            }]
        }, {
            'className': 'number',
            'variants': [{
                'begin': '\x5cd+\x5c.?\x5cd*'
            }]
        }, {
            'className': 'string',
            'variants': [{
                'begin': '(\x22[^\x22\x5cn\x5cr]*\x22)|(\x27[^\x27\x5cn\x5cr]*\x27)'
            }]
        }]
    };
});