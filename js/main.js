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

 // Rhombus
 const rhombusCalculate = document.getElementById('rhombus-calculate');
 rhombusCalculate.addEventListener('click', myRhombus)
 function myRhombus(){
    // Rhombus P
    const rhombusP = document.getElementById('rhombus-p');
    const rhombusPData = rhombusP.value;
    const rhombusPConverter = parseFloat(rhombusPData)

    // Rhombus Q
    const rhombusQ = document.getElementById('rhombus-q');
    const rhombusQData = rhombusQ.value;
    const rhombusQConverter = rhombusQData;

    // Rhombus Result
    const area = 1/2 * rhombusPConverter * rhombusQConverter;
    const rhombusResult = document.getElementById('rhombus-result');
    rhombusResult.innerText = area;
 }

 // Pentagon
 const pentagonCalculate = document.getElementById('pentagon-calculate');
 pentagonCalculate.addEventListener('click', function(){
    // Pentagon P
    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPData = pentagonP.value;
    const pentagonPConverter = parseFloat(pentagonPData);

    // Pentagon Q
    const pentagonQ = document.getElementById('pentagon-q');
    const pentagonQData = pentagonQ.value;
    const pentagonQConverter = parseFloat(pentagonQData);

    // Pentagon Result
    const area = 1/2 * pentagonPConverter * pentagonQConverter;
    const pentagonResult = document.getElementById('pentagon-result');
    pentagonResult.innerText = area;
 })

 //Ellipse
 function myEllipse(){
    const ellipse1 = myConverter('ellipse-m') ;
    const ellipse2 = myConverter('ellipse-M') ;
    const area = 3.14 * ellipse1 * ellipse2;
    setInnerText('ellipse-result', area)
 }
 function myConverter(input){
    const inputfill = document.getElementById(input);
    const inputFill = inputfill.value;
    const value = parseFloat(inputFill);
    return value;
 }
function setInnerText(elementid, area){
    const element = document.getElementById(elementid);
    element.innerText = area;
}