import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 62, slack: 40, drag: 15, confidence: 65 };
assert.equal(domainReviewScore(item), 184);
assert.equal(domainReviewLane(item), "ship");
