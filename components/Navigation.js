// Navigation

function linkBuilder(links) {
// Receive an Array of 'string; that are the names of
// Return all of the necessary <li> items.
    return links.map((link) =>
        /*
       An HTML data attribute provides additional information that can be used by JS.
       In this case, 'navigo' is something that navigo uses to bind the link 'text' to the
       Navigo router.
      */
        `<li><a href="/${link
.toLowerCase()}" data-navigo>${link}</a></li>`
    ).join(" ");
}

export default state => `<nav>
<ul>
    ${linkBuilder(state.links.primary)}


</ul>
</nav>`;
