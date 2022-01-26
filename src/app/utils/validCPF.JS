function validCPF(cpf) {
    const Cpf = cpf.replace(/[.-]/g, '');
    if (
      Cpf.length !== 11 ||
      Cpf === '00000000000' ||
      Cpf === '11111111111' ||
      Cpf === '22222222222' ||
      Cpf === '33333333333' ||
      Cpf === '44444444444' ||
      Cpf === '55555555555' ||
      Cpf === '66666666666' ||
      Cpf === '77777777777' ||
      Cpf === '88888888888' ||
      Cpf === '99999999999'
    ) return 'Invalid CPF'
  
    let add = 0;
    let i;
    let rev;
    for (i = 0; i < 9; i++) add += parseInt(Cpf.charAt(i), 10) * (10 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(Cpf.charAt(9), 10))
    return 'Invalid CPF'
  
    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(Cpf.charAt(i), 10) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(Cpf.charAt(10), 10))
    return 'Invalid CPF'

    return null;
  }
  
  module.exports = validCPF;


