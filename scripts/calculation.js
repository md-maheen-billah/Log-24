// Triangle
function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");
  const area = 0.5 * base * height;
  setInnerTextById("triangle-area", area);
}
// Rectangle
function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");
  const area = width * length;
  setInnerTextById("rectangle-area", area);
}
// Parallelogram
function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");
  const area = base * height;
  setInnerTextById("parallelogram-area", area);
}
/*
 *
 *
 */
// get input value
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const input = parseFloat(inputText);
  return input;
}
//   place the output in a place on the display for user to see
function setInnerTextById(elementId, output) {
  const AreaSpan = document.getElementById(elementId);
  AreaSpan.innerText = output;
}
