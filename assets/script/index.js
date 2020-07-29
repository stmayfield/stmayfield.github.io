




/*

$("body").append(nav)

/*var nav = $("<nav>").attr({
    class: "navbar navbar-expand-lg navbar-dark",
    style: "background-color: #07577d; opacity: 90%;",
})*//*

const nav = $("nav")

nav.append(
    $("<a>").attr({
        class: "navbar-brand",
        href: "index.html",
    }).text("Stephen Mayfield")
)

var dataToggle = "data-toggle"
var dataTarget = "data-target"
var ariaControls = "aria-controls"
var ariaExpanded = "aria-expanded"
var ariaLabel = "aria-label"

nav.append(
    $("<button>").attr({
        class: "navbar-toggler",
        type: "button",
        dataToggle: "collapse",
        dataTarget: "#navbarNav",
        ariaControls: "navbarNav",
        ariaExpanded: "false",
        ariaLabel: "Toggle navigation"
    })
        .append($("<span>").addClass("navbar-toggler-icon"))
)

const $div = $("<div>")

var collapseDiv = $div.attr({
    class: "collapse navbar-collapse justify-content-end",
    id: "navbarNav"
}).append()

const ul = $("<ul>")
const li = $("<li>")
const a = $("<a>")


function navItem(active, url, color, ) {
    li.addClass("nav-item")
        .append(
            a.attr({
                class: active,
                href: url + ".html",
                style: "color: " + color + ";"
            }).text("About")
        )
};

collapseDiv.append(ul.addClass("navbar-nav").append(navItem("nav-link active", "index", "#b4e0f0")))
collapseDiv.append(ul.addClass("navbar-nav").append(navItem("nav-link", "portfolio", "#f2faff")))
collapseDiv.append(ul.addClass("navbar-nav").append(navItem("nav-link", "contact", "#f2faff")))
*/
