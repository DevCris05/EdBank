function consultar() {
  let saldo = localStorage.getItem("saldo");
  const monto = document.getElementById("saldo");
  if (saldo <= 0) {
    monto.textContent = `S/ 0`;
  } else {
    monto.textContent = `S/ ${saldo}`;
  }
}

consultar();
