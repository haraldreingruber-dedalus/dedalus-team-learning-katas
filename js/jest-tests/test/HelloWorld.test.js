import DNAExample from "../src/HelloWorld";

test("a should return t", () => {
  var a = "a";
  expect(DNAExample.switchAT(a)).toBe("t");
});

test("t should return a", () => {
  var t = "t";
  expect(DNAExample.switchAT(t)).toBe("a");
});

test("c should return g", () => {
  var str = "c";
  expect(DNAExample.switchCG(str)).toBe("g");
});

test('a DNA sequence should be reversed', () => {
  let testString = 'TTAGGGCATG';
  let expectedString = testString.split("").reverse().join("");
  expect(DNAExample.reverse(testString)).toBe(expectedString);
})

test("big example string should be correctly translated", () => {
  var bigString = "AGGACGGGCTAACTCCGCTCGTCACAAAGCGCAATGCAGCTATGGCAGATGTTCATGCCG";
  // expect(DNAExample.reverse(bigString)).toBe("UCC UGC CCG AUU GAG GCG AGC AGU GUU UCG CGU UAC GUC GAU ACC GUC UAC AAG UAC GGC");
});

test("small example string should be correctly translated", () => {
  let testString = 'TTAGGGCATG';
  let expectedString = 'CATGCCCTAA';
  //expect(DNAExample.translate(testString)).toBe(expectedString);
});

