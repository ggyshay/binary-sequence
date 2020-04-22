const RULES = [
  // 3 Digitos RISE
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "bbb", flag:true },//R1
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "brb", flag:true },//R2
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "bbr", flag:true },//R3
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "brr", flag:true },//R4
{rule: ["i", "pM1", "iM2d2(1)"], colors: "bbb", flag:true },//R5
{rule: ["i", "pM1", "iM2d2(1)"], colors: "brb", flag:true },//R6
{rule: ["i", "pM1", "iM2d2(1)"], colors: "bbr", flag:true },//R7
{rule: ["i", "pM1", "iM2d2(1)"], colors: "brr", flag:true },//R8
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "bbb", flag:true },//R9
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "bbr", flag:true },//R10
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "rbr", flag:true },//R11
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "rbb", flag:true },//R12
{rule: ["i", "pM1d1(1)", "pM2"], colors: "bbb", flag:true },//R13
{rule: ["i", "pM1d1(1)", "pM2"], colors: "bbr", flag:true },//R14
{rule: ["i", "pM1d1(1)", "pM2"], colors: "rbr", flag:true },//R15
{rule: ["i", "pM1d1(1)", "pM2"], colors: "rbb", flag:true },//R16
{rule: ["p", "im1d1(-1)", "pM1"], colors: "bbb", flag:true },//R17
{rule: ["p", "im1d1(-1)", "pM1"], colors: "brb", flag:true },//R18
{rule: ["p", "im1d1(-1)", "pM1"], colors: "bbr", flag:true },//R19
{rule: ["p", "im1d1(-1)", "pM1"], colors: "brr", flag:true },//R120
{rule: ["p", "iM1d1(1)", "pM2"], colors: "bbb", flag:true },//R21
{rule: ["p", "iM1d1(1)", "pM2"], colors: "brb", flag:true },//R22
{rule: ["p", "iM1d1(1)", "pM2"], colors: "bbr", flag:true },//R23
{rule: ["p", "iM1d1(1)", "pM2"], colors: "brr", flag:true },//R24
{rule: ["p", "im1d1(-1)", "iM2"], colors: "bbb", flag:true },//R25
{rule: ["p", "im1d1(-1)", "iM2"], colors: "bbr", flag:true },//R26
{rule: ["p", "im1d1(-1)", "iM2"], colors: "rbr", flag:true },//R27
{rule: ["p", "im1d1(-1)", "iM2"], colors: "rbb", flag:true },//R28
{rule: ["p", "iM1d1(1)", "iM2"], colors: "bbb", flag:true },//R29
{rule: ["p", "iM1d1(1)", "iM2"], colors: "bbr", flag:true },//R30
{rule: ["p", "iM1d1(1)", "iM2"], colors: "rbr", flag:true },//R31
{rule: ["p", "iM1d1(1)", "iM2"], colors: "rbb", flag:true },//R32
{rule: ["i", "pm1d1(-1)", "im2"], colors: "rrr", flag:true },//R33
{rule: ["i", "pm1d1(-1)", "im2"], colors: "rbr", flag:true },//R34
{rule: ["i", "pm1d1(-1)", "im2"], colors: "rrb", flag:true },//R35
{rule: ["i", "pm1d1(-1)", "im2"], colors: "rrr", flag:true },//R36
{rule: ["i", "pm1", "iM2d2(1)"], colors: "rrr", flag:true },//R37
{rule: ["i", "pm1", "iM2d2(1)"], colors: "rbr", flag:true },//R38
{rule: ["i", "pm1", "iM2d2(1)"], colors: "rrb", flag:true },//R39
{rule: ["i", "pm1", "iM2d2(1)"], colors: "rbb", flag:true },//R40
{rule: ["i", "pm1d1(-1)", "pm2"], colors: "rrr", flag:true },//R41
{rule: ["i", "pm1d1(-1)", "pm2"], colors: "rbr", flag:true },//R42
{rule: ["i", "pm1d1(-1)", "pm2"], colors: "brr", flag:true },//R43
{rule: ["i", "pm1d1(-1)", "pm2"], colors: "rrb", flag:true },//R44


//3 Digitos FALL
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rrr", flag:false },//R1
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rbr", flag:false },//R2
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rrb", flag:false },//R3
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rbb", flag:false },//R4
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rrr", flag:false },//R5
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rbr", flag:false },//R6
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rrb", flag:false },//R7
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rbb", flag:false },//R8
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "rrr", flag:false },//R9
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "brb", flag:false },//R10
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "rrb", flag:false },//R11
{rule: ["i", "pm1d1(-1)", "pM2"], colors: "brr", flag:false },//R12
{rule: ["i", "pM1d1(1)", "pM2"], colors: "rrr", flag:false },//R13
{rule: ["i", "pM1d1(1)", "pM2"], colors: "brb", flag:false },//R14
{rule: ["i", "pM1d1(1)", "pM2"], colors: "rrb", flag:false },//R15
{rule: ["i", "pM1d1(1)", "pM2"], colors: "brr", flag:false },//R16
{rule: ["p", "im1d1(-1)", "pM1"], colors: "rrr", flag:false },//R17
{rule: ["p", "im1d1(-1)", "pM1"], colors: "rbr", flag:false },//R18
{rule: ["p", "im1d1(-1)", "pM1"], colors: "rrb", flag:false },//R19
{rule: ["p", "im1d1(-1)", "pM1"], colors: "rbb", flag:false },//R120
{rule: ["p", "iM1d1(1)", "pM2"], colors: "rrr", flag:false },//R21
{rule: ["p", "iM1d1(1)", "pM2"], colors: "rbr", flag:false },//R22
{rule: ["p", "iM1d1(1)", "pM2"], colors: "rbb", flag:false },//R23
{rule: ["p", "iM1d1(1)", "pM2"], colors: "rbb", flag:false },//R24
{rule: ["p", "im1d1(-1)", "iM2"], colors: "rrr", flag:false },//R25
{rule: ["p", "im1d1(-1)", "iM2"], colors: "brb", flag:false },//R26
{rule: ["p", "im1d1(-1)", "iM2"], colors: "rrb", flag:false },//R27
{rule: ["p", "im1d1(-1)", "iM2"], colors: "brr", flag:false },//R28
{rule: ["p", "iM1d1(1)", "iM2"], colors: "rrr", flag:false },//R29
{rule: ["p", "iM1d1(1)", "iM2"], colors: "brb", flag:false },//R30
{rule: ["p", "iM1d1(1)", "iM2"], colors: "rrb", flag:false },//R31
{rule: ["p", "iM1d1(1)", "iM2"], colors: "brr", flag:false },//R32
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rrr", flag:false },//R33
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rbr", flag:false },//R34
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rrb", flag:false },//R35
{rule: ["i", "pM1", "iM2d2(1)"], colors: "rbb", flag:false },//R36
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rrr", flag:false },//R37
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rbr", flag:false },//R38
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rrb", flag:false },//R39
{rule: ["i", "pm1d1(-1)", "iM1"], colors: "rbb", flag:false },//R40
{rule: ["p", "iM1d1(1)", "pM1"], colors: "bbb", flag:false },//R41
{rule: ["p", "iM1d1(1)", "pM1"], colors: "brb", flag:false },//R42
{rule: ["p", "iM1d1(1)", "pM1"], colors: "bbr", flag:false },//R43
{rule: ["p", "iM1d1(1)", "pM1"], colors: "bbb", flag:false },//R44


];

//4r3b3b2r1r

// guia das regras:
// p par
// i impar
// m menor que
// M maior que
// n menor ou igual a
// N maior ou igual a
// dx(e) diferença entre este e o x ser igual a e
// e numero igual ao valor

function split_rules(rule) {
  let res = [];
  let i = 0;
  while (i < rule.length) {
    if (rule[i] === "p" || rule[i] === "i") {
      res.push([rule[i], 0, 0]);
      i += 1;
    } else if (rule[i] === "d") {
      const delta_s = rule.substr(i).split(/[(|)]/)[1];
      res.push([rule[i], rule[i + 1] - 1, parseInt(delta_s)]);
      i += delta_s.length + 4;
    } else {
      res.push([rule[i], rule[i + 1] - 1, 0]);
      i += 2;
    }
  }
  // console.log(res);
  return res;
}

function match_lista(numbers, rules) {
  // deram match em todas as regras, retorna o esperado da regra
  for (let i = 0; i < rules.length; i++) {
    if (!validate_number(numbers[i], split_rules(rules[i]), numbers)) {
      return false;
    }
  }
  // console.log("matched");
  return true;
}

export function testSequence(seq) {
  // console.log(seq);
  let input_numbers = [];
  let input_colors = [];
  for (let i = 0; i < seq.length - 1; i += 2) {
    input_numbers.push(+seq[i]);
    input_colors.push(seq[i + 1]);
  }
  for (let { rule, colors, flag } of RULES) {
    // console.log(rule, colors, flag);
    if (input_colors.length <= colors.length) {
      if (
        input_colors.toString().replace(/,/g, "") === colors &&
        match_lista(input_numbers, rule)
      ) {
        return { result: flag, rule, colors };
      }
    } else {
      let offset = 0;
      while (offset <= input_colors.length - colors.length) {
        let numbers_w = [];
        let input_colors_w = [];
        for (let i = offset; i < colors.length + offset; i++) {
          numbers_w.push(input_numbers[i]);
          input_colors_w.push(input_colors[i]);
        }
        const inputColorsString = input_colors_w.toString().replace(/,/g, "");
        const mResult = match_lista(numbers_w, rule);
        if (inputColorsString === colors && mResult)
          return { result: flag, rule, colors };
        offset++;
      }
    }
  }
  return {};
}

function validate_number(n, rules, numbers) {
  // console.log("validate", n, rules, numbers);
  for (let r of rules) {
    let rule = r[0];
    let operand = numbers[r[1]];
    let delta = r[2];
    if (rule === "p" && eh_impar(n)) {
      return false;
    } else if (rule === "i" && eh_par(n)) {
      return false;
    } else if (rule === "m" && maior_ou_igual(n, operand)) {
      return false;
    } else if (rule === "M" && menor_ou_igual(n, operand)) {
      return false;
    } else if (rule === "n" && maior(n, operand)) {
      return false;
    } else if (rule === "N" && menor(n, operand)) {
      return false;
    } else if (rule === "d" && !diferenca(n, operand, delta)) {
      return false;
    } else if (rule === "e" && !vale(n, r[1] + 1)) {
      return false;
    }
  }
  return true;
}

function eh_par(d) {
  return d % 2 === 0;
}

function eh_impar(d) {
  return d % 2 === 1;
}

function maior_ou_igual(d1, d2) {
  return d1 >= d2;
}

function menor(d1, d2) {
  return d1 < d2;
}

function maior(d1, d2) {
  return d1 > d2;
}

function menor_ou_igual(d1, d2) {
  return d1 <= d2;
}

function diferenca(d1, d2, delta) {
  return d1 - d2 === delta;
}

function vale(d1, v) {
  return d1 === v;
}

export function objectsToPatternString(list) {
  return list.reduce((acc, cur) => acc + cur.lastDigit + cur.color[0], "");
}

// console.log(testSequence("4r3b3b2r1r"));
