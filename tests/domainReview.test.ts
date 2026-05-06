function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 62, slack: 40, drag: 15, confidence: 65 };
equal(domainReviewScore(item), 184);
equal(domainReviewLane(item), "ship");
