function modularExponentiation(x, n, m) {
  let temp = 1;
  while (n > 0) {
    if (n % 2 == 1) {
      temp = ((temp % m) * (x % m)) % m;
    }
    x = (((x % m) * (x % m)) % m);
    n = n >> 1;
  }
  return temp;
}
function calculate() {
  let x = parseInt(document.getElementById("a").value);
  let n = parseInt(document.getElementById("b").value);
  let m = parseInt(document.getElementById("c").value);
  let result = modularExponentiation(x, n, m);
  document.getElementById("output").innerHTML = result;
}
