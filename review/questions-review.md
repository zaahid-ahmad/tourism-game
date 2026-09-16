# Question review sheet — fairness record

One row per wrong option. Rules and techniques: [`difficulty-plan.md`](../difficulty-plan.md) §3–§5.

- **Source:** *Tourism Gr10 Study Guide* (Via Afrika). Page numbers are **PDF page numbers**; the printed page number is about 3 lower.
- **Technique:** 3.1 similar names · 3.2 mixed-up facts · 3.3 describe the situation, ask for the term · 3.4 real wrong numbers · 3.5 two-part answers.
- **Check:** `node scripts/check.js --strict` (structure + difficulty lint).

## Lint history

| Date | Scope | FAIL | WARN |
|---|---|---|---|
| 2026-09-16 | Baseline, all gates (before rewrite) | 179 | 55 |
| 2026-09-16 | Pilot: gates 7, 37, 53 (after rewrite) | 0 | 0 |
| 2026-09-16 | All gates, after pilot | 170 | 54 |

---

## Term 1 · Tourism sectors

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 7.1 | Which organisation awards stars to accommodation and conference venues? | Tourism Grading Council of SA | 10, 20 | Tourism Business Council of SA | 3.1 | TBCSA: represents private sector in talks with government | 20 | ☐ |
| 7.1 | … | … | | South African Tourism Services Association | 3.1 | SATSA: checks standard of members' products and services | 21 | ☐ |
| 7.1 | … | … | | Federated Hospitality Association of SA | 3.1 | FEDHASA: promotes the hospitality industry | 21 | ☐ |
| 7.2 | Which is a role of the TGCSA? | Trains assessors and supplies grading plaques | 10 | Regulates the operation of member travel agencies | 3.2 | ASATA main function | 21 | ☐ |
| 7.2 | … | … | | Represents the private sector in talks with government | 3.2 | TBCSA service offered | 20 | ☐ |
| 7.2 | … | … | | Markets South Africa as a youth tourism destination | 3.2 | SAYTC main function | 21 | ☐ |
| 7.3 | Which benefit of the star system goes to the ESTABLISHMENT? | Using the grading stars in advertising | 10 | Knowing what to expect before arriving | 3.2 | Benefit for tourists (5.3.1) | 10 | ☐ |
| 7.3 | … | … | | Making an informed choice of where to stay | 3.2 | Benefit for tourists (5.3.1) | 10 | ☐ |
| 7.3 | … | … | | Using the customer feedback system | 3.2 | Benefit for tourists (5.3.1) | 10 | ☐ |
| 7.4 | Which step is the ASSESSOR's job? | Discuss the assessment with the owner | 10 | Make an appointment for the visit | 3.2 | Owner step | 10 | ☐ |
| 7.4 | … | … | | Choose an assessor from the list | 3.2 | Owner step | 10 | ☐ |
| 7.4 | … | … | | Approve or reject the assessment | 3.2 | TGCSA | 11 | ☐ |
| 7.5 | How long is a star grading valid? | One year | 11 | Two years | 3.4 | Made up: no other durations in guide's grading section | — | ☐ |
| 7.5 | … | … | | Three years | 3.4 | Made up (as above) | — | ☐ |
| 7.5 | … | … | | Five years | 3.4 | Made up (as above) | — | ☐ |

## Term 3 · Tourist attractions in South Africa

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 37.1 | Which statement about Transfrontier Parks is correct? | Extend across international borders; formed with Namibia | 59, 96 (8.13) | Extend across international borders; formed with Lesotho | 3.5 | Lesotho: Maloti-Drakensberg TFCA, not a TFP partner | 59, 96 | ☐ |
| 37.1 | … | … | | Managed by SANParks alone; formed with Namibia | 3.5 | Kgalagadi managed by both countries; /Ai-/Ais with Nama | 59 | ☐ |
| 37.1 | … | … | | Managed by SANParks alone; formed with Lesotho | 3.5 | Both halves wrong (as above) | 59 | ☐ |
| 37.2 | Which statement describes Kgalagadi TFP? | SA and Botswana; joined 2000; Africa's first TFP | 59 | Joined in 2003; jointly managed with the Nama | 3.2 | /Ai-/Ais-Richtersveld TFP | 59 | ☐ |
| 37.2 | … | … | | Proposed park to link SA, Mozambique and Zimbabwe | 3.2 | Great Limpopo TFP | 59 | ☐ |
| 37.2 | … | … | | SA, Botswana and Zimbabwe; includes Mapungubwe | 3.2 | Limpopo-Shashe TFCA | 59 | ☐ |
| 37.3 | Hartmann's mountain zebra and halfmens tree: which park? | /Ai-/Ais-Richtersveld TFP | 59 | Mountain Zebra National Park | 3.1 | Protects the CAPE mountain zebra | 58 | ☐ |
| 37.3 | … | … | | Augrabies Falls National Park | 3.1 | 56 m falls, quiver trees, flat lizard | 58 | ☐ |
| 37.3 | … | … | | Namaqua National Park | 3.1 | Spring daisies, 3 500 plant species | 58 | ☐ |
| 37.4 | 49 fish species incl. killifish and lungfish: which park? | Great Limpopo TFP | 59 | Kgalagadi TFP | 3.1 | Black-maned lion, sociable weaver, pygmy falcon | 59 | ☐ |
| 37.4 | … | … | | /Ai-/Ais-Richtersveld TFP | 3.1 | Hartmann's mountain zebra, halfmens | 59 | ☐ |
| 37.4 | … | … | | Limpopo-Shashe TFCA | 3.1 | Baobabs, mlala palms | 59 | ☐ |
| 37.5 | Which pair describes Maloti-Drakensberg TFCA? | Lesotho and SA; bearded and Cape vultures | 59 | Lesotho and SA; baobab trees and mlala palms | 3.5 | Plants belong to Limpopo-Shashe | 59 | ☐ |
| 37.5 | … | … | | Botswana and SA; bearded and Cape vultures | 3.5 | Botswana is Limpopo-Shashe / Kgalagadi | 59 | ☐ |
| 37.5 | … | … | | Botswana and SA; baobab trees and mlala palms | 3.5 | Both halves Limpopo-Shashe | 59 | ☐ |

## Term 4 · Communication and customer care

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 53.1 | Part of the DEFINITION of service excellence? | Helping customers with the process of purchase | 88 | Encouraging future purchases with vouchers | 3.2 | Recommendations (3.5) | 89 | ☐ |
| 53.1 | … | … | | Improving the image and competitiveness of the company | 3.2 | Importance (3.2) | 88 | ☐ |
| 53.1 | … | … | | Giving fast results and personal attention | 3.2 | Advantages (3.3) | 89 | ☐ |
| 53.2 | Guests judge the hotel by the person who checks them in: which characteristic? | The service provider is part of the service | 88 | Service is intangible, like product knowledge | 3.3 | Intangible (politeness, product knowledge, interest) | 88 | ☐ |
| 53.2 | … | … | | Service varies and can be good or bad | 3.3 | Variation in service | 88 | ☐ |
| 53.2 | … | … | | Service cannot be stored for later | 3.3 | Cannot be stored | 88 | ☐ |
| 53.3 | Advertising spend rising, staff resigning: which does the guide link this to? | Poor service delivery | 89 | Leakage | 3.3 | Economic negative impact: profits leave the area | 66 | ☐ |
| 53.3 | … | … | | Overdependence on tourism | 3.3 | Economic negative impact: relying too much on tourism | 66 | ☐ |
| 53.3 | … | … | | External costs | 3.3 | Economic negative impact: electricity, waste removal | 66 | ☐ |
| 53.4 | Which pair are RECOMMENDATIONS for improving service? | Customer service training and customer feedback | 89 | Customer service training and personal attention | 3.5 | Personal attention: advantage (3.3) | 89 | ☐ |
| 53.4 | … | … | | Competitive advantage and customer feedback | 3.5 | Competitive advantage: advantage (3.3) | 89 | ☐ |
| 53.4 | … | … | | Competitive advantage and personal attention | 3.5 | Both advantages | 89 | ☐ |
| 53.5 | Tourists return and tell others: which chain follows? | More tourists, more money spent, higher GDP, more jobs | 89 | … higher GDP and high staff turnover | 3.2 | High staff turnover: poor service (3.4) | 89 | ☐ |
| 53.5 | … | … | | More tourists, higher marketing costs, … | 3.2 | Increased marketing costs: poor service (3.4) | 89 | ☐ |
| 53.5 | … | … | | More tourists, lower marketing costs, less profit … | 3.2 | Less profit: poor service (3.4) | 89 | ☐ |
