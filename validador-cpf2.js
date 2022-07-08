function validarCpf(cpf) {
  let i = 1;
  let dv1 = 0;

  for (let digito of cpf.slice(0, -2)) {
    let result = digito * i;
    dv1 += result;
    i++;
  }

  let dv11 = dv1 % 11;

  let dv1f = dv11 >= 10 ? dv11.toString().slice(1) : dv11;

  if (parseInt(cpf[9]) === parseInt(dv1f)) {
    console.log("1a validação OK!");

    let i2 = 0;
    let dv2 = 0;

    for (let digito2 of cpf.slice(0, -1)) {
      let result2 = digito2 * i2;
      dv2 += result2;
      i2++;
    }

    let dv22 = dv2 % 11;

    let dv2f = dv22 >= 10 ? dv22.toString().slice(1) : dv22;

    let validation2 =
      parseInt(cpf[10]) === parseInt(dv2f)
        ? "2a validação, CPF válido"
        : "CPF inválido, falha na segunda validação";

    console.log(validation2);
  } else {
    console.log("CPF inválido, falha na primeira validação!");
  }
}

validarCpf("22482379016");
