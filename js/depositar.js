let saldo = parseFloat(localStorage.getItem("saldo"));
const btn = document.getElementById("btn_depo");

btn.addEventListener("click", () => {
  const monto = parseFloat(document.getElementById("depositar").value);
  if (monto > 0) {
    saldo = parseFloat(saldo + monto);
    localStorage.setItem("saldo", saldo);
  } else {
    alert("el Monto a depositar debe ser mayor a 0");
  }
});
