// ==UserScript==
// @name         SOTT Quick Krunker Docs Intergration
// @version      0.1
// @updateURL    https://github.com/SwatDoge/SOTT-Quick-Krunkscript-Docs/raw/master/tampermonkey/userscript.user.js
// @downloadURL  https://github.com/SwatDoge/SOTT-Quick-Krunkscript-Docs/raw/master/tampermonkey/userscript.user.js
// @supportURL   https://discord.gg/bz8abvq
// @description  Integrates the SOTT Quick KrunkScript documentation into the scripting screen.
// @author       Swat
// @match        https://krdocs.swatdo.ge/*
// @match        https://krunker.io/scripting.html
// @match        https://krunker.io/editor.html
// @grant        unsafeWindow
// @grant        GM_setClipboard
// @run-at       document-start
// ==/UserScript==

let link = "https://krdocs.swatdo.ge/";
let default_link = "https://docs.krunker.io/#/"

unsafeWindow.onload = function(){
    if (unsafeWindow.location.href.includes("editor.html")){
        load_editor();
    }
    if (unsafeWindow.location.href.includes("scripting.html")){
        load_scripting();
    }
    if (unsafeWindow.location.href.includes("krdocs.swatdo.ge")){
        load_document();
    }
}

function load_document(){
    if (unsafeWindow.self !== unsafeWindow.top){
        let execCommand = navigator.clipboard.writeText;
        navigator.clipboard.writeText = function(){
            GM_setClipboard(arguments[0], {type: "text", mimetype: "text/plain"});
            return execCommand.apply(this, arguments);
        }
    }
}

function load_editor(){
    let toolbar_item = document.querySelector(".toolbarDropDownItem[onclick*=\"Documentation\"]")
    toolbar_item.classList.remove("toolbarDropDownItem");
    toolbar_item.classList.add("toolbarItem");
    toolbar_item.setAttribute("onmouseout", "GUI.update.toolbar(this)");
    toolbar_item.setAttribute("onmouseover", "GUI.update.toolbar(this, true)");
    toolbar_item.setAttribute("onclick", "window.open(\"" + default_link + "\", '_blank')");

    let toolbar_dropdown = document.createElement("div");
    toolbar_dropdown.classList.add("toolbarDropDown");
    toolbar_item.appendChild(toolbar_dropdown);

    function generate_link(link, name){
        let toolbar_dropdown_item = document.createElement("div");
        toolbar_dropdown_item.classList.add("toolbarDropDownItem");
        toolbar_dropdown_item.setAttribute("onclick", "window.open(\"" + link + "\", '_blank')");
        toolbar_dropdown_item.innerText = name;
        return toolbar_dropdown_item;
    }

    toolbar_dropdown.appendChild(generate_link(default_link, "Official documentation"));
    toolbar_dropdown.appendChild(generate_link(link, "SOTT Quick KS Docs"));
}

function load_scripting(){
    let changeTab = unsafeWindow.changeTab;
    let tab = document.createElement("div");
    let tabIcon = document.createElement("span");
    let tabName = document.createElement("div");
    let iFrame = document.createElement("iframe");
    let sott_label = document.createElement("a");

    unsafeWindow.cm.documentation = {};
    unsafeWindow.cm.documentation.display = {};
    unsafeWindow.cm.documentation.display.wrapper = {};
    unsafeWindow.cm.documentation.display.wrapper.style = {};
    unsafeWindow.cm.documentation.display.wrapper.style.display = "";

    //tab
    tab.id = "documentation";
    tab.classList.add("tab");
    tab.setAttribute("onclick", "window.changeTab(this)");

    //tab icon
    tabIcon.id = "tabIcon_documentation";
    tabIcon.classList.add("tabIcon");
    tab.appendChild(tabIcon);

    //tab name
    tabName.setAttribute("style", "float:left;margin-top:2px");
    tabName.innerText = "Documentation";
    tab.appendChild(tabName);

    //iframe
    iFrame.style.position = "absolute";
    iFrame.style.border = "none";
    iFrame.style.display = "none";
    iFrame.style.top = "36px";
    iFrame.src = link;
    iFrame.style.width = "100%";
    iFrame.style.height = "calc(100% - 36px)";

    //sott_label
    sott_label.innerText = sott_label.href = link;
    sott_label.style.float = "right";
    sott_label.style.fontSize = "14px";
    sott_label.style.fontFamily = "gamefont";
    sott_label.style.marginRight = "10px";
    sott_label.style.marginTop = "5px";
    sott_label.style.display = sott_label.textDecoration = "none";
    sott_label.id = "sott_label";
    sott_label.target = "_blank";
    sott_label.style.color = "#2196f3";

    let color_observer = new MutationObserver(function(){
        sott_label.style.color = "#2196f3";
    });
    color_observer.observe(sott_label, {attributeFilter: ["color"]});

    document.getElementById("tabHolder").appendChild(tab);
    document.body.insertBefore(iFrame, document.getElementById("tabHolder"));
    document.getElementById("tabHolder").insertBefore(sott_label, document.getElementById("label"));

    unsafeWindow.changeTab = function(){
        console.log("k"+ arguments[0].id + "k", typeof arguments[0].id);
        console.log(arguments[0].id != "documentation");
        document.getElementById("compile").style.display = document.getElementById("label").style.display = arguments[0].id != "documentation" ? "block" : "none";
        iFrame.style.display = sott_label.style.display = arguments[0].id == "documentation" ? "block" : "none";
        return changeTab.apply(this, arguments);
    }
}