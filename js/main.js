// Triangle 
function TriangleBase(){
    // Triangle-Base
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseData = triangleBase.value;
    const triangleBaseDataConverter = parseFloat(triangleBaseData);
  
    // Triangle-Heigth 
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeigthData = triangleHeight.value;
    const triangleHeigthDataConverter = parseFloat(triangleHeigthData);

    // Triangle Finel Result 
    const area = triangleBaseDataConverter * triangleHeigthDataConverter / 2;
    const triangleResult = document.getElementById('triangle-result');
    triangleResult.innerText = area;
}

// Ractangle
 document.getElementById('rectangle-calculate').addEventListener('click', function(){
    // Rectangle Width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthData = rectangleWidth.value;
    const rectangleWidthDataConverter = parseFloat(rectangleWidthData);
    
    // Rectangle Length
    const rectangleLength = document.getElementById('rectangle-Length');
    const rectangleLengthData = rectangleLength.value;
    const rectangleLengthDataConverter = parseFloat(rectangleLengthData);
    
    // Rectangle Result
    const area = rectangleWidthDataConverter * rectangleLengthDataConverter;
    const rectangleResult = document.getElementById('rectangle-result');
    rectangleResult.innerText = area;
 })

 // Parallelogram
 const parallelogram = document.getElementById('parallelogram-calculate');
 parallelogram.addEventListener('click', function(){
    // Parallelogram Base 
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseData = parallelogramBase.value;
    const parallelogramBaseDataConverter = parseFloat(parallelogramBaseData);
    
    // parallelogram Height 
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightData = parallelogramHeight.value;
    const parallelogramHeightDataConverter = parseFloat(parallelogramHeightData)

    // Parallelogram Result 
    const area = parallelogramBaseDataConverter * parallelogramHeightDataConverter;
    const parallelogramResult = document.getElementById('parallelogram-result');
    parallelogramResult.innerText = area;
 })