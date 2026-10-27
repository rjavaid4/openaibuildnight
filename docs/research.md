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
