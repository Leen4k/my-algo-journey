export interface TestCase {
  name: string;
  data: number[];
}

export class TestDataGenerator {
  static random(size: number, seed: number = 42): number[] {
    let rand = seed;
    return Array.from({ length: size }, () => {
      rand = (rand * 9301 + 49297) % 233280;
      return Math.floor((rand / 233280) * 200) - 100;
    });
  }

  static increasing(size: number): number[] {
    return Array.from({ length: size }, (_, i) => i + 1);
  }

  static decreasing(size: number): number[] {
    return Array.from({ length: size }, (_, i) => size - i);
  }

  static alternating(size: number): number[] {
    return Array.from({ length: size }, (_, i) => (i % 2 === 0 ? 10 : -5));
  }

  static allNegative(size: number): number[] {
    return Array.from(
      { length: size },
      () => -Math.floor(Math.random() * 50) - 1
    );
  }

  static mountain(size: number): number[] {
    const peak = Math.floor(size / 2);
    return Array.from({ length: size }, (_, i) => {
      if (i <= peak) return i + 1;
      return size - i;
    });
  }

  static edgeCases(): TestCase[] {
    return [
      { name: "empty", data: [] },
      { name: "single positive", data: [42] },
      { name: "single negative", data: [-42] },
      { name: "two elements", data: [5, 3] },
      { name: "all negative", data: [-5, -3, -8] },
      { name: "mixed", data: [1, -2, 3, -1, 2] },
    ];
  }

  static performanceTests(): Array<{ name: string; data: number[] }> {
    return [
      { name: "small random", data: this.random(100) },
      { name: "medium random", data: this.random(1000) },
      { name: "large random", data: this.random(10000) },
      { name: "worst case", data: this.alternating(1000) },
    ];
  }
}
