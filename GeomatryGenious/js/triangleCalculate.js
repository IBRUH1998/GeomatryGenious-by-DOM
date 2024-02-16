function calculateTriangle(){
    //get the base value of triangle
    const triangleInputBase = document.getElementById('triangle-base')
    const triangleBaseValue = triangleInputBase.value ;
    const base  = parseFloat(triangleBaseValue)
   

    // get the height value of triangle
    const triangleInputHeight = document.getElementById('triangle-height') ;
    const triangleHeightValue = triangleInputHeight.value ;
    const height = parseFloat(triangleHeightValue) 
    

    // calculate the triangle 
    const area = 0.5 * base * height ;
    console.log("triangle-area is :",area)

    // display the area 
    const displayTriangle  = document.getElementById('triangle-area') ;
    displayTriangle.innerText = area ;

}