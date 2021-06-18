import DNAExample from "../src/HelloWorld";

test("a should return t", () => {
  var a = "a";
  expect(DNAExample.switchAT(a)).toBe("t");
});

test("t should return a", () => {
  var t = "t";
  expect(DNAExample.switchTA(t)).toBe("a");
});

test("g should return c", () => {
  var str = "g";
  expect(DNAExample.switchGC(str)).toBe("c");
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

test("the example string should be turned into anti-sense correctly",() => {
  let testString = 'TTAGGGCATG';
  let expectedString = 'CATGCCCTAA';
  expect(DNAExample.computeAntisense(testString)).toBe(expectedString);
})

test("the anti-sense string should be turned into a RNA sequence",() => {
  let testString = 'TTATGCATC';
  let expectedString = 'GAUGCAUAA';
  expect(DNAExample.computeRna(testString)).toBe(expectedString);
})

test("the dna string should be turned into a RNA sequence",() => {
  let testString = 'TTAGGGCATG';
  let expectedString = 'CAUGCCCUAA';
  expect(DNAExample.computeRna(testString)).toBe(expectedString);
})

test("just finish this already", () => {
  let testString = 'ggaugcccaaauaa ';
  let expectedString = 'MPK';
  expect(implementNewFunction(testString)).toBe(expectedString);
});