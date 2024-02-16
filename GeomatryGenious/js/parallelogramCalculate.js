function calculateParallelogram(){
    //get the base value of parallelogram
    const parallelogramInputBase = document.getElementById('parallelogram-base')
    const parallelogramBaseValue = parallelogramInputBase.value ;
    const base  = parseFloat(parallelogramBaseValue)

     // get the height value of parallelogram
     const parallelogramInputHeight = document.getElementById('parallelogram-height') ;
     const parallelogramHeightValue = parallelogramInputHeight.value ;
     const height = parseFloat(parallelogramHeightValue) 

     // calculate the para 
    const area = base * height ;
    console.log("parallelogram-area is :",area)
    console.log(area)

        // display the area 
        const displayParallelogram  = document.getElementById('parallelogram-area') ;
        displayParallelogram.innerText = area ;
     
}