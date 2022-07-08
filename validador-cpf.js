/* 
1. Calcular o primeiro digito verificador utilizando os 9 primeiros digitos do cpf
2. Calcular o segundo digito verificador utilizando so 9 primeiros dígitos e o primeiro digito verificador
3. Verificar se os 2 digitos encontrados são iguais aos 2 utilmos do cpf
4. se os digitos calculados forem iguais aos digitos fornecidos, então o cpf é valido
*/

function validarCpf(cpf) {
  let arrayCPF = cpf.slice(0, -2);

  let array = [];
  let array2 = [];

  for (let i = 0; i < arrayCPF.length; i++) {
    let result = (i + 1) * arrayCPF[i];
    array.push(result);
  }

  let dv1 = 0;

  for (i = 0; i < array.length; i++) {
    dv1 += array[i];
  }

  let dv11 = dv1 % 11;

  let dv1f = "";
  if (dv11 >= 10) {
    dv1f = dv11.toString().slice(1);
  } else {
    dv1f = dv11;
  }

  if (parseInt(cpf[9]) === parseInt(dv1f)) {
    console.log("1a validação OK!");

    arrayCPF = cpf.slice(0, -1);

    for (let i = 0; i < arrayCPF.length; i++) {
      let result2 = i * arrayCPF[i];
      array2.push(result2);
    }

    let dv2 = 0;

    for (let i = 0; i < array2.length; i++) {
      dv2 += array2[i];
    }

    let dv22 = dv2 % 11;

    let dv2f = "";

    if (dv22 >= 10) {
      dv2f = dv22.toString().slice(1);
    } else {
      dv2f = dv22;
    }

    if (parseInt(cpf[10]) === parseInt(dv2f)) {
      console.log("2a validação, CPF válido");
    } else {
      console.log("CPF inválido, falha na segunda validação");
    }
  } else {
    console.log("CPF inválido, falha na primeira validação!");
  }
}

validarCpf("22482379016");
