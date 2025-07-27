export interface TestCase {
  name: string;
  data: number[];
  expectedSum?: number;
  expectedSubarray?: number[];
}

export class MaxSubarrayTestGen {
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

  static alternating(size: number): number[] {
    return Array.from({ length: size }, (_, i) => (i % 2 === 0 ? 10 : -5));
  }

  static allNegative(size: number): number[] {
    return Array.from({ length: size }, (_, i) => -(i + 1));
  }

  static singlePeak(size: number): number[] {
    const result = new Array(size).fill(-10);
    const peak = Math.floor(size / 2);
    result[peak] = 50;
    return result;
  }

  static edgeCases(): TestCase[] {
    return [
      { name: "empty", data: [], expectedSum: 0, expectedSubarray: [] },
      {
        name: "single positive",
        data: [42],
        expectedSum: 42,
        expectedSubarray: [42],
      },
      {
        name: "single negative",
        data: [-42],
        expectedSum: -42,
        expectedSubarray: [-42],
      },
      {
        name: "two positive",
        data: [5, 3],
        expectedSum: 8,
        expectedSubarray: [5, 3],
      },
      {
        name: "classic",
        data: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        expectedSum: 6,
        expectedSubarray: [4, -1, 2, 1],
      },
    ];
  }

  static performanceTests(): Array<{ name: string; data: number[] }> {
    return [
      { name: "small", data: this.random(100) },
      { name: "medium", data: this.random(1000) },
      { name: "large", data: this.random(10000) },
      { name: "worst case", data: this.alternating(1000) },
    ];
  }
}
