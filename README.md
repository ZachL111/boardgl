# boardgl

`boardgl` is a TypeScript project for Graphics. It turns map FEN positions to board coordinates and legal-square overlays into a small local model with readable fixtures and a direct verification command.

## Reading Boardgl

Start with the README, then open `metadata/project.json` to check the constants behind the examples. After that, `fixtures/cases.csv` shows the compact path and `examples/extended_cases.csv` gives a wider look at the same rule.

## Purpose

The goal is to capture the core behavior in code and make the surrounding assumptions obvious. A reader should be able to run the verifier, open the fixtures, and understand why each decision was made.

## Design Sketch

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps geometry data, layout fixtures, and render inputs in one explicit decision path. The threshold is 173, with risk penalty 5, latency penalty 4, and weight bonus 6. The TypeScript project keeps types close to the model and compiles before running its checks.

## Fixture Notes

`examples/extended_cases.csv` adds six named cases. I kept the names plain so failures are easy to read in a terminal: baseline, pressure, surge, degraded, recovery, and boundary.

## What It Does

- Uses fixture data to keep layout fixtures changes visible in code review.
- Includes extended examples for render inputs, including `surge` and `degraded`.
- Documents stable output tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.
- Stores project constants and verification metadata in `metadata/project.json`.

## Setup

Install TypeScript and run the commands from the repository root. The project does not need credentials or a hosted service.

## Verification

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Files Worth Reading

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Limits

The repository favors determinism over breadth. It does not pull live data, keep secrets, or depend on network access for verification.

## Next Directions

- Add a short report command that prints the score breakdown for a single scenario.
- Add malformed input fixtures so the failure path is as visible as the happy path.
- Split the scoring constants into a typed configuration object and validate it before use.
- Add one more graphics fixture that focuses on a malformed or borderline input.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.
