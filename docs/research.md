# Apartment search research

Reviewed a focused sample of public projects and their published documentation; this is not an exhaustive review of GitHub and the reference apps were not independently security-audited or run.

| Reference | Useful pattern | Decision for this prototype |
| --- | --- | --- |
| https://github.com/LuisGxz/NestHunt | Map/cards coordination, structured filters, favorites, detailed listings | Keep quick filters, favorites, and details. Use map deep links to avoid map setup/API work. |
| https://github.com/HanifCarroll/apartment-finder | Evidence-backed amenity claims and distinguishing in-unit from shared laundry | Record verified amenity descriptions and source links. Do not infer pricing or availability. |
| https://github.com/tirthajyoti-ghosh/Appointio | Focused apartment browsing and clear next steps for tours | Send users to official providers rather than implement nonfunctional booking. |
| https://occl.illinois.edu/housing/housing-search | Budget, commute, exact-unit visits, amenities, and lease review | Add an actionable apartment research checklist. |

The implementation is original. No source code or visual assets were copied from the reference repositories.

## Listing sources

- https://www.herechampaign.com/
- https://liveseven07.com/
- https://www.thedean.com/campustown/
- https://www.housing.illinois.edu/Living-Communities/Apartments
- https://www.housing.illinois.edu/node/49
- https://housing.illinois.edu/node/48
- https://www.housing.illinois.edu/cost

University budget filters use the corresponding layout's published rate, not a generic building minimum. Orchard South's cheapest two-bedroom option is distinguished from standard Orchard Downs layouts. Goodwin–Green sleeping rooms are excluded from apartment pricing. No private apartment is assigned a speculative rent.

## Design direction

Warm paper background, charcoal text, orange calls to action, generous spacing, editorial typography, calm photography, and a sage research section. The Figma file contains editable desktop/mobile concepts, shared color variables, and apartment-card instances; the website includes the final data, interactions, and motion refinements.

## Expanded community directory

Fourteen additional provider-sourced communities were added October 26, 2026. Their source links are stored with each record in `dist/extra-listings.js`. New entries use the bundled neighborhood illustration, not implied property photography. Unknown prices remain excluded from budget filters. Bedroom configurations are only included when confirmed; otherwise the official floor plans remain the source of truth.

## Property photography and consistent summaries

All 20 listings now have local photographs obtained from their official community websites. `dist/property-photos.js` records original image URLs, captions, and provider pages. Photos may represent model apartments or shared amenities. The hero remains illustrative.

Cards, details, and comparison use the same selected-layout pricing summary. Cards show unknown bathroom counts, lease-year status, unconfirmed availability, and the source-check date. Detail equal-split estimates specify occupancy and exclude additional costs. Ashton Woods location was corrected to southwest campus in Champaign using its official community page. No tour slots, live availability, or route times are fabricated.
