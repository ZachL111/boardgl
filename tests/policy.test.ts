import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
