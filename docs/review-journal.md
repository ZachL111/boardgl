# Review Journal

The review surface for `boardgl` is deliberately narrow: one fixture, one scoring rule, and one local check.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its graphics focus without claiming live deployment or external usage.

## Cases

- `baseline`: `geometry span`, score 184, lane `ship`
- `stress`: `atlas pressure`, score 170, lane `ship`
- `edge`: `shader drift`, score 217, lane `ship`
- `recovery`: `render budget`, score 172, lane `ship`
- `stale`: `geometry span`, score 217, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
