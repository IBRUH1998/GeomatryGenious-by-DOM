function calculateRectangle(){
    //get the rectangle width value
    const rectangleInputWidth = document.getElementById('rectangle-width') ;
    const rectangleWidthValue = rectangleInputWidth.value ;
    const width = parseFloat(rectangleWidthValue) ;

    // get the rectangle- length value
    const rectangleInputLength = document.getElementById('rectangle-length')
    const rectangleLengthValue = rectangleInputLength.value ;
    const length = parseFloat(rectangleLengthValue) ;

    // calculate the rectangle width and height
    const area = width * length ;
    console.log("rectangle-area is :",area)

    // diaplay the rectangles value for width and height
    const displayRectangle = document.getElementById('rectangle-area') ;
    displayRectangle.innerText = area ;




}