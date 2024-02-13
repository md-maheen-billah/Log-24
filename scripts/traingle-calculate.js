/*
 * Objective: get h and b. Calculate area using provided formula and display in the area.
 * step-1 : get base value of the triangle
 * step-2 : added an id in the base input field
 * step-3 : use getElementById to access the input field
 * step-4 : get value from the input field. (value is string now)
 * step-5 : convert the value to a number, use parseFloat
 *
 */
function calculateTriangleArea() {
  // get triangle base value
  const triangleBase = document.getElementById("triangle-base");
  const triangleBaseText = triangleBase.value;
  const base = parseFloat(triangleBaseText);
  // get triangle height value
  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeight.value;
  const height = parseFloat(triangleHeightText);
  //   calculate the area using the obtained value
  const areaOfTriangle = 0.5 * base * height;
  //   place the output in a place on the display for user to see
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = areaOfTriangle;
}
