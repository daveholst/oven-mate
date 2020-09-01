function cToF() {
  let inputC = document.querySelector('#cInput').value;
  let newF = Math.round(inputC * 1.8 + 32);

  document.querySelector('#fInput').value = newF;
  if (inputC <= 90) {
    tempCond = 90;
  } else if (inputC <= 120) {
    tempCond = 120;
  } else if (inputC <= 155) {
    tempCond = 155;
  } else if (inputC <= 165) {
    tempCond = 165;
  } else if (inputC <= 185) {
    tempCond = 185;
  } else if (inputC <= 195) {
    tempCond = 195;
  } else if (inputC <= 215) {
    tempCond = 215;
  } else if (inputC <= 245) {
    tempCond = 145;
  } else if (inputC > 245) {
    tempCond = 250;
  }

  document.querySelector('#tempCond').value = tempCond
}

function fToC() {
  let inputF = document.querySelector('#fInput').value;
  let newC = Math.round((inputF - 32) / 1.8);
  let tempCond
  // console.log("before" + document.querySelector('#tempCond').value)

  document.querySelector('#cInput').value = newC;
  if (newC <= 90) {
    tempCond = 90;
  } else if (newC <= 120) {
    tempCond = 120;
  } else if (newC <= 155) {
    tempCond = 155;
  } else if (newC <= 165) {
    tempCond = 165;
  } else if (newC <= 185) {
    tempCond = 185;
  } else if (newC <= 195) {
    tempCond = 195;
  } else if (newC <= 215) {
    tempCond = 215;
  } else if (newC <= 245) {
    tempCond = 145;
  } else if (newC > 245) {
    tempCond = 250;
  }
  document.querySelector('#tempCond').value = tempCond

  console.log(document.querySelector('#tempCond').value)

}

function condToTemp() {
  let selectorValue = document.querySelector('#tempCond').value;
  document.querySelector('#cInput').value = selectorValue;
  document.querySelector('#fInput').value = selectorValue * 1.8 + 32;

}



// console.log(inputF)