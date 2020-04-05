const RULES = [
  { rule: ["p", "i", "iN2", "pm1", "im3"], colors: "rbbrr", flag: true },
  { rule: ["p", "i", "in2", "pn1", "iM3"], colors: "rbbrr", flag: false },
  { rule: ["i", "pM1", "pN2", "in1", "pm3"], colors: "rbbrr", flag: true },
  { rule: ["p", "i", "i", "pm1", "iM1d1(1)"], colors: "rbbrr", flag: false },
  { rule: ["p", "i", "iN2", "pm1", "im4d4(-1)"], colors: "rbbrr", flag: true },
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

export function objectsToPatternString(list) {
  return list.reduce((acc, cur) => acc + cur.lastDigit + cur.color[0], "");
}

// console.log(testSequence("4r3b3b2r1r"));
