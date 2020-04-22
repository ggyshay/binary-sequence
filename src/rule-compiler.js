const RULES = [
  	//RISE
	{ rule: ["e6","e5","e2"], colors: "rbb", flag: true },
	{ rule: ["e5","e6","e2"], colors: "rrb", flag: true },
	{ rule: ["e7","e4","e8"], colors: "rbb", flag: true },
	{ rule: ["e6","e5","e2"], colors: "rbb", flag: true },
	{ rule: ["e1","e8","e6"], colors: "bbb", flag: true },
	{ rule: ["e8","e7","e0"], colors: "bbr", flag: true },
	{ rule: ["e4","e3","e4"], colors: "rbb", flag: true },
	{ rule: ["e3","e0","e8"], colors: "rbr", flag: true },
	{ rule: ["e4","e9","e5"], colors: "rrb", flag: true },
	{ rule: ["e9","e8","e7"], colors: "rrr", flag: true },
	{ rule: ["e8","e9","e2"], colors: "rbr", flag: true },
	{ rule: ["e1","e6","e4"], colors: "rbr", flag: true },
	{ rule: ["e0","e9","e1"], colors: "rrr", flag: true },
	{ rule: ["e0","e7","e9"], colors: "bbb", flag: true },
	{ rule: ["e8","e6","e9"], colors: "rbb", flag: true },
	{ rule: ["e1","e0","e2"], colors: "rbb", flag: true },
	{ rule: ["e7","e2","e3"], colors: "bbr", flag: true },
	{ rule: ["e9","e4","e1"], colors: "rbb", flag: true },
	{ rule: ["e0","e9","e5"], colors: "brr", flag: true },
	{ rule: ["e0","e9","e1"], colors: "rrb", flag: true },
	{ rule: ["e5","e0","e2"], colors: "bbb", flag: true },
	{ rule: ["e2","e1","e5"], colors: "rbb", flag: true },
	{ rule: ["e4","e3","e2"], colors: "brb", flag: true },
	{ rule: ["e5","e0","e8"], colors: "bbb", flag: true },
	{ rule: ["e4","e5","e3"], colors: "rbb", flag: true },
	{ rule: ["e4","e1","e7"], colors: "bbr", flag: true },
	{ rule: ["e7","e4","e1"], colors: "rrb", flag: true },
	{ rule: ["e4","e5","e3"], colors: "rbb", flag: true },
	{ rule: ["e7","e8","e5"], colors: "bbb", flag: true },
	{ rule: ["e3","e4","e0"], colors: "bbr", flag: true },
	{ rule: ["e8","e7","e4"], colors: "rrb", flag: true },
	{ rule: ["e8","e9","e5"], colors: "bbb", flag: true },
	{ rule: ["e6","e1","e8"], colors: "rbb", flag: true },
	{ rule: ["e1","e8","e4"], colors: "bbr", flag: true },
	{ rule: ["e3","e4","e0"], colors: "bbb", flag: true },
	{ rule: ["e0","e3","e8"], colors: "bbb", flag: true },
	{ rule: ["e6","e5","e7"], colors: "rrr", flag: true },
	{ rule: ["e6","e1","e5"], colors: "bbb", flag: true },
	{ rule: ["e5","e2","e4"], colors: "brr", flag: true },
	{ rule: ["e0","e5","e5"], colors: "bbr", flag: true },
	{ rule: ["e0","e1","e9"], colors: "bbb", flag: true },
	{ rule: ["e8","e3","e7"], colors: "bbb", flag: true },
	{ rule: ["e1","e0","e8"], colors: "brb", flag: true },
	{ rule: ["e5","e4","e6"], colors: "rrb", flag: true },
	{ rule: ["e6","e5","e7"], colors: "brr", flag: true },
	{ rule: ["e2","e5","e1"], colors: "bbr", flag: true },
	{ rule: ["e6","e9","e5"], colors: "rbr", flag: true },
	{ rule: ["e7","e8","e0"], colors: "bbr", flag: true },
	{ rule: ["e6","e5","e0"], colors: "brr", flag: true },
	{ rule: ["e0","e1","e0"], colors: "bbr", flag: true },
	{ rule: ["e4","e1","e5"], colors: "bbb", flag: true },
	{ rule: ["e0","e3","e5"], colors: "rbb", flag: true },
	{ rule: ["e3","e0","e2"], colors: "bbb", flag: true },
	{ rule: ["e2","e1","e2"], colors: "brr", flag: true },
	{ rule: ["e6","e1","e0"], colors: "brb", flag: true },
	{ rule: ["e1","e6","e1"], colors: "bbr", flag: true },
	{ rule: ["e3","e2","e7"], colors: "brb", flag: true },
	{ rule: ["e5","e6","e4"], colors: "rbr", flag: true },
	{ rule: ["e0","e9","e5"], colors: "brr", flag: true },
	{ rule: ["e7","e0","e9"], colors: "bbr", flag: true },
	{ rule: ["e0","e9","e4"], colors: "brr", flag: true },
	{ rule: ["e4","e5","e3"], colors: "rrb", flag: true },
	{ rule: ["e6","e7","e1"], colors: "rbr", flag: true },
	{ rule: ["e0","e7","e8"], colors: "bbb", flag: true },
	{ rule: ["e9","e0","e8"], colors: "rbr", flag: true },
	{ rule: ["e9","e4","e5"], colors: "brb", flag: true },
	{ rule: ["e8","e3","e9"], colors: "rbb", flag: true },
	{ rule: ["e3","e4","e1"], colors: "brb", flag: true },
	{ rule: ["e4","e1","e1"], colors: "rbb", flag: true },
	{ rule: ["e8","e5","e4"], colors: "rrr", flag: true },
	{ rule: ["e3","e2","e9"], colors: "bbb", flag: true },
	{ rule: ["e5","e4","e5"], colors: "rrb", flag: true },
	{ rule: ["e5","e2","e3"], colors: "bbb", flag: true },
	
	//FALL
	{ rule: ["e5","e8","e1"], colors: "brb", flag: false },
	{ rule: ["e8","e5","e3"], colors: "rrr", flag: false },
	{ rule: ["e2","e5","e1"], colors: "brb", flag: false },
	{ rule: ["e3","e8","e1"], colors: "bbb", flag: false },
	{ rule: ["e1","e8","e6"], colors: "rrb", flag: false },
	{ rule: ["e3","e0","e4"], colors: "rrr", flag: false },
	{ rule: ["e4","e9","e7"], colors: "brb", flag: false },
	{ rule: ["e1","e0","e7"], colors: "bbb", flag: false },
	{ rule: ["e0","e1","e9"], colors: "brr", flag: false },
	{ rule: ["e9","e6","e1"], colors: "rbb", flag: false },
	{ rule: ["e9","e8","e2"], colors: "brb", flag: false },
	{ rule: ["e4","e1","e8"], colors: "rrb", flag: false },
	{ rule: ["e5","e4","e3"], colors: "brr", flag: false },
	{ rule: ["e4","e7","e1"], colors: "rrr", flag: false },
	{ rule: ["e7","e2","e1"], colors: "bbb", flag: false },
	{ rule: ["e2","e1","e0"], colors: "bbb", flag: false },
        { rule: ["e7","e4","e2"], colors: "brb", flag: false },
	{ rule: ["e1","e4","e0"], colors: "rrr", flag: false },
	{ rule: ["e5","e4","e8"], colors: "brb", flag: false },
	{ rule: ["e3","e4","e8"], colors: "bbb", flag: false },
	{ rule: ["e7","e4","e0"], colors: "brr", flag: false },
	{ rule: ["e3","e0","e8"], colors: "brr", flag: false },
	{ rule: ["e6","e7","e5"], colors: "bbb", flag: false },
	{ rule: ["e9","e2","e2"], colors: "rbr", flag: false },
	{ rule: ["e6","e5","e9"], colors: "rrr", flag: false },
	{ rule: ["e9","e0","e8"], colors: "brb", flag: false },
	{ rule: ["e7","e4","e4"], colors: "bbb", flag: false },
	{ rule: ["e3","e4","e4"], colors: "bbb", flag: false },
	{ rule: ["e3","e2","e1"], colors: "rrb", flag: false },
	{ rule: ["e9","e4","e4"], colors: "rbb", flag: false },
	{ rule: ["e9","e6","e4"], colors: "rbb", flag: false },
	{ rule: ["e8","e7","e5"], colors: "bbb", flag: false },
	{ rule: ["e7","e6","e1"], colors: "brr", flag: false },
	{ rule: ["e5","e0","e4"], colors: "brr", flag: false },
	{ rule: ["e7","e2","e9"], colors: "brr", flag: false },
	{ rule: ["e3","e2","e5"], colors: "rbr", flag: false },
	{ rule: ["e8","e5","e0"], colors: "rbb", flag: false },
	{ rule: ["e1","e6","e4"], colors: "rbb", flag: false },
	{ rule: ["e6","e7","e3"], colors: "bbr", flag: false },
	{ rule: ["e3","e6","e7"], colors: "rbb", flag: false },
	{ rule: ["e7","e4","e9"], colors: "rbr", flag: false },
	{ rule: ["e1","e8","e9"], colors: "brb", flag: false },
	{ rule: ["e3","e8","e5"], colors: "rrr", flag: false },
	{ rule: ["e9","e2","e6"], colors: "brr", flag: false },
	{ rule: ["e7","e0","e9"], colors: "rrb", flag: false },
	{ rule: ["e2","e7","e1"], colors: "brr", flag: false },
	{ rule: ["e6","e9","e0"], colors: "bbb", flag: false },
	{ rule: ["e2","e9","e3"], colors: "brb", flag: false },
	{ rule: ["e1","e4","e3"], colors: "rrb", flag: false },
	{ rule: ["e2","e5","e1"], colors: "rbr", flag: false },
	{ rule: ["e8","e1","e7"], colors: "brr", flag: false },
	{ rule: ["e9","e8","e4"], colors: "bbr", flag: false },
	{ rule: ["e3","e4","e6"], colors: "brb", flag: false },
	{ rule: ["e9","e6","e2"], colors: "rrb", flag: false },
	{ rule: ["e0","e3","e4"], colors: "rrb", flag: false },
	{ rule: ["e4","e3","e8"], colors: "rbb", flag: false },
	{ rule: ["e6","e1","e4"], colors: "rrr", flag: false },
	{ rule: ["e9","e8","e1"], colors: "rrb", flag: false },
	{ rule: ["e9","e8","e4"], colors: "brr", flag: false },
	{ rule: ["e2","e3","e4"], colors: "rbb", flag: false },
	
	
	
	
	


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
