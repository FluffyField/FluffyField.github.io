window.onload = () => {
    // copy below to add more pages
    fetch('https://fluffyfield.github.io/sidebar.html') // the page we want to use for our sidebar
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("sidebar").innerHTML = data; // inserts to element id="navbar"
    })
    // copy end
}
