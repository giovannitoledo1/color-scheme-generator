const colorElm = document.getElementById('color-elm')
const btnElm = document.getElementById('btn-elm')
const schemeElm = document.getElementById('color-scheme')
const columnElements = document.querySelectorAll('.grid-column')
const rowElements = document.querySelectorAll('.grid-row')

//set default color value after the page has loaded
window.addEventListener('load', function(){
    const colorInput = document.getElementById('color-elm')
    colorInput.value = '#000000'
})

btnElm.addEventListener('click', function (){
    let color = colorElm.value
    let scheme = schemeElm.value
    color = color.replace('#', '');
    console.log(color)
    console.log(scheme)
       
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`, {method: "GET"})
        .then(res => res.json())
        .then(data => {        
            columnElements.forEach((column, index) => {
                column.style.backgroundColor = data.colors[index].hex.value
            })
            rowElements.forEach((row, index) => {
                row.textContent = data.colors[index].hex.value;
            });
            
        })
    
  
})



  