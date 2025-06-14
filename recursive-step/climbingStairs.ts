export function climbStairsRecursive(n: number): number {
  if (n <= 1) return 1;
  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

export function climbStairsDynamicProgramming(n: number): number {
  if (n <= 1) return 1;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
