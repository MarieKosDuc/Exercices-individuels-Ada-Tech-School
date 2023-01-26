const { compareCombination } = require("./script");

describe("Tests Mastermind", () => {
  it("Tableau à comparer avec 4 fois la même couleur", () => {
    // Given
    const table1 = ["red", "red", "blue", "blue"];
    const table2 = ["blue", "blue", "red", "red"];
    // When
    const result = compareCombination(table1, table2);
    // Then
    expect(result).toEqual([0, 4]);
  });
  it("Tableau du joueur avec couleur répétée 4 fois", () => {
    // Given
    const table1 = ["red", "yellow", "blue", "red"];
    const table2 = ["red", "red", "red", "red"];
    // When
    const result = compareCombination(table1, table2);
    // Then
    expect(result).toEqual([2, 0]);
  });
  it("Tableau avec 4 couleurs ok mais mal placées", () => {
    // Given
    const table1 = ["red", "yellow", "blue", "green"];
    const table2 = ["yellow", "red", "green", "blue"];
    // When
    const result = compareCombination(table1, table2);
    // Then
    expect(result).toEqual([0, 4]);
  });
  it("Tableau avec deux dernières couleurs bien placées", () => {
    // Given
    const table1 = ["red", "yellow", "blue", "green"];
    const table2 = ["yellow", "red", "blue", "green"];
    // When
    const result = compareCombination(table1, table2);
    // Then
    expect(result).toEqual([2, 2]);
  });
  it("Tableau sans aucune couleur correcte", () => {
    // Given
    const table1 = ["red", "yellow", "yellow", "red"];
    const table2 = ["green", "blue", "green", "blue"];
    // When
    const result = compareCombination(table1, table2);
    // Then
    expect(result).toEqual([0, 0]);
  });
  it("Tableau avec 100 % de pions OK", () => {
    // Given
    const table1 = ["red", "yellow", "blue", "green"];
    const table2 = ["red", "yellow", "blue", "green"];
    // When
    const result = compareCombination(table1, table2);
    // Then
    expect(result).toEqual([4, 0]);
  });
});


