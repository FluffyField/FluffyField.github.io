window.onload = () => {
    // copy below to add more pages
    fetch('https://raw.githubusercontent.com/FluffyField/FluffyField.github.io/refs/heads/main/htmls/sidebar.html') // the page we want to use for our sidebar
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("sidebar").innerHTML = data; // inserts to element id="navbar"
    })
    // copy end
}
