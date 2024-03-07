let saldo = parseFloat(localStorage.getItem("saldo"));
const btn = document.getElementById("btn_reti");

btn.addEventListener("click", () => {
  const monto = parseFloat(document.getElementById("retirar").value);
  if (monto <= saldo) {
    saldo = parseFloat(saldo - monto);
    localStorage.setItem("saldo", saldo);
  } else {
    alert("El Monto a retirar es mayor a la cantidad del saldo");
  }
});
