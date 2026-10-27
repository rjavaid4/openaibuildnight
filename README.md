# Porch

A quick, responsive apartment research website for Champaign–Urbana. Original cream, charcoal, and orange design with a short house-and-door welcome animation.

## Run

Run `npm run dev`, then open http://localhost:4173. Requires Python 3 for the static preview server and Node.js for checks. No dependency installation, database, credentials, or paid API is required.

Run `npm test` for the pricing/filter checks and `npm run check` for JavaScript syntax verification.

## Features

- Twenty curated apartment communities across Champaign, Urbana, and nearby Savoy with official source links.
- Name/location search, layout-aware whole-unit budget filtering, bedroom and amenity filters, and sorting.
- Browser-local saved apartments and comparison for up to three communities.
- Apartment detail dialogs, official website and Google Maps links, and a housing research checklist.
- Animated house entrance with an opening door, skip control, and reduced-motion support.
- Smooth detail dialog entrance and exit, Escape/backdrop dismissal, and keyboard focus restoration.

## Data and limitations

This is a curated directory, not a live inventory feed or a complete list of local apartments. Sources were checked October 26, 2026. University rates refer to published 2026–27 student whole-apartment rates; eligibility and final charges must be confirmed. Unknown private-community rent is displayed as unknown and excluded from budget filtering. Selecting furnished housing uses furnished layout rates where known. No booking or in-app tour request is implied.

All 20 community cards use downloaded photographs from their official property websites, with original image URLs and credits recorded in `dist/property-photos.js`. The hero remains clearly labeled Unsplash interior inspiration. Property photographs may show model units or shared amenities; they are not a promise of the exact available unit. Cards and apartment details use the same selected-layout quote. Equal-split estimates are rent-only illustrations with explicit occupancy assumptions.

Cards show lease-year status, last-checked date, and unconfirmed availability. Bathroom counts remain unverified and are labeled for confirmation. Images fall back to the bundled neighborhood illustration if unavailable. Saved listings stay in the current browser.

## Design and research

Editable Figma concepts: https://www.figma.com/design/GPaaaCusLfCFkykFugkFNx

See [research](docs/research.md) and the [GitHub issue draft](docs/issue.md). All work belongs on `codex/porch-apartment-finder`; do not push directly to main.
