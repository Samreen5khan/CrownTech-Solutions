// stichihng header links

// displaying the navbar
const navbar = document.querySelector('.navbar') //selecting the div to display the navbar
fetch("/src/navBar.html")//selecting the navbar to be displayed
.then(res=>res.text())//readung the response from the server and converting to text
.then(nav=>{
    navbar.innerHTML = nav//res //displaying the response
})

//displaying footer
const footer = document.querySelector('.footer');
fetch('/src/footer.html')
.then(res=>res.text())
.then(footTemp=>{
    footer.innerHTML = footTemp;
});