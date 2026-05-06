function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 53,
    "capacity": 104,
    "latency": 23,
    "risk": 10,
    "weight": 11,
    "score": 134,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 66,
    "capacity": 76,
    "latency": 27,
    "risk": 22,
    "weight": 4,
    "score": 14,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 66,
    "capacity": 89,
    "latency": 26,
    "risk": 22,
    "weight": 6,
    "score": 43,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
