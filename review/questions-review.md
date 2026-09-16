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
| 2026-09-16 | Communication 49–53 | 0 | 3 (guide wording "not always") |
| 2026-09-16 | All gates, after Communication | 150 | 51 |
| 2026-09-16 | Sustainable 38–42 | 0 | 0 |
| 2026-09-16 | All gates, after Sustainable | 131 | 45 |
| 2026-09-16 | Domestic 26–27 | 0 | 0 |
| 2026-09-16 | All gates, after Domestic | 123 | 44 |

---

## Term 1 · Tourism sectors

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 7.1 | Which organisation awards stars to accommodation and conference venues? | Tourism Grading Council of SA | 10, 20 | Tourism Business Council of SA | 3.1 | TBCSA: represents private sector in talks with government | 20 | ☑ |
| 7.1 | … | … | | South African Tourism Services Association | 3.1 | SATSA: checks standard of members' products and services | 21 | ☑ |
| 7.1 | … | … | | Federated Hospitality Association of SA | 3.1 | FEDHASA: promotes the hospitality industry | 21 | ☑ |
| 7.2 | Which is a role of the TGCSA? | Trains assessors and supplies grading plaques | 10 | Regulates the operation of member travel agencies | 3.2 | ASATA main function | 21 | ☑ |
| 7.2 | … | … | | Represents the private sector in talks with government | 3.2 | TBCSA service offered | 20 | ☑ |
| 7.2 | … | … | | Markets South Africa as a youth tourism destination | 3.2 | SAYTC main function | 21 | ☑ |
| 7.3 | Which benefit of the star system goes to the ESTABLISHMENT? | Using the grading stars in advertising | 10 | Knowing what to expect before arriving | 3.2 | Benefit for tourists (5.3.1) | 10 | ☑ |
| 7.3 | … | … | | Making an informed choice of where to stay | 3.2 | Benefit for tourists (5.3.1) | 10 | ☑ |
| 7.3 | … | … | | Using the customer feedback system | 3.2 | Benefit for tourists (5.3.1) | 10 | ☑ |
| 7.4 | Which step is the ASSESSOR's job? | Discuss the assessment with the owner | 10 | Make an appointment for the visit | 3.2 | Owner step | 10 | ☑ |
| 7.4 | … | … | | Choose an assessor from the list | 3.2 | Owner step | 10 | ☑ |
| 7.4 | … | … | | Approve or reject the assessment | 3.2 | TGCSA | 11 | ☑ |
| 7.5 | How long is a star grading valid? | One year | 11 | Two years | 3.4 | Made up: no other durations in guide's grading section | — | ☑ |
| 7.5 | … | … | | Three years | 3.4 | Made up (as above) | — | ☑ |
| 7.5 | … | … | | Five years | 3.4 | Made up (as above) | — | ☑ |

## Term 2 · Domestic, regional and international tourism

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 26.1 | Negative influence on domestic tourism? | Less spending money, high cost of living | 40 | Leakage · Congestion · Income not reaching community | 3.2 | Negative impacts of tourism on an area (not influences) | 65–66 | ☑ |
| 26.2 | Benefit for PEOPLE? | Labour intensive, creates jobs | 40 | Income pays for conservation · Pollution monitoring · Maintains infrastructure | 3.2 | Environment · environment · economy | 40–41 | ☑ |
| 26.3 | Way to grow domestic tourism? | Longer stays, holiday travel culture | 41 | Local entrepreneurs and crafts · Employ locals, local suppliers · Environmental awareness | 3.2 | Reduce negative economic impacts (66) · domestic benefit (41) | 41, 66 | ☑ |
| 26.4 | What does Sho't Left adapt to mean? | Short trip or quick getaway | 41 | All parts of SA · Longer stay · Group trip with discounts | 3.2 | Other growth methods | 41 | ☑ |
| 26.5 | Sho't Left target + association? | Youth; ASATA | 41 | Youth + SATSA · Business travellers + ASATA · Business travellers + SATSA | 3.5 | SATSA = tourism services association (21) | 41 | ☑ |
| 27.1 | What are statistics + who collects? | Numerical data; Statistics SA and SAT | 41 | Numerical data + TGCSA/SATSA · Travel patterns + StatsSA/SAT · Travel patterns + TGCSA/SATSA | 3.5 | Reports identify patterns (42); TGCSA grades, SATSA services | 41–42 | ☑ |
| 27.2 | Within a province: term + share? | intra-provincial; 60% | 41 | inter; 60% · intra; 40% · inter; 40% | 3.5 | Inter-provincial ≈ 40% | 41 | ☑ |
| 27.3 | Major sources + destinations? | Sources GP, KZN; destinations KZN, EC | 42 | Swapped · Sources GP, NW · Destinations WC, LP | 3.5 | GP and NW = most inter-provincial; WC/LP made-up destinations | 42 | ☑ |
| 27.4 | Average business trip? | 7 nights | 42 | 4,5 · 5 · 5,2 | 3.4 | Domestic trip · holiday · Limpopo stay | 42 | ☑ |
| 27.5 | Most popular activities? | Social activities, shopping, night life | 42 | Family, holidays, business · Religious events, medical · School holidays | 3.2 | Purposes of trips · purposes · seasonality | 42 | ☑ |

## Term 3 · Tourist attractions in South Africa

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 37.1 | Which statement about Transfrontier Parks is correct? | Extend across international borders; formed with Namibia | 59, 96 (8.13) | Extend across international borders; formed with Lesotho | 3.5 | Lesotho: Maloti-Drakensberg TFCA, not a TFP partner | 59, 96 | ☑ |
| 37.1 | … | … | | Managed by SANParks alone; formed with Namibia | 3.5 | Kgalagadi managed by both countries; /Ai-/Ais with Nama | 59 | ☑ |
| 37.1 | … | … | | Managed by SANParks alone; formed with Lesotho | 3.5 | Both halves wrong (as above) | 59 | ☑ |
| 37.2 | Which statement describes Kgalagadi TFP? | SA and Botswana; joined 2000; Africa's first TFP | 59 | Joined in 2003; jointly managed with the Nama | 3.2 | /Ai-/Ais-Richtersveld TFP | 59 | ☑ |
| 37.2 | … | … | | Proposed park to link SA, Mozambique and Zimbabwe | 3.2 | Great Limpopo TFP | 59 | ☑ |
| 37.2 | … | … | | SA, Botswana and Zimbabwe; includes Mapungubwe | 3.2 | Limpopo-Shashe TFCA | 59 | ☑ |
| 37.3 | Hartmann's mountain zebra and halfmens tree: which park? | /Ai-/Ais-Richtersveld TFP | 59 | Mountain Zebra National Park | 3.1 | Protects the CAPE mountain zebra | 58 | ☑ |
| 37.3 | … | … | | Augrabies Falls National Park | 3.1 | 56 m falls, quiver trees, flat lizard | 58 | ☑ |
| 37.3 | … | … | | Namaqua National Park | 3.1 | Spring daisies, 3 500 plant species | 58 | ☑ |
| 37.4 | 49 fish species incl. killifish and lungfish: which park? | Great Limpopo TFP | 59 | Kgalagadi TFP | 3.1 | Black-maned lion, sociable weaver, pygmy falcon | 59 | ☑ |
| 37.4 | … | … | | /Ai-/Ais-Richtersveld TFP | 3.1 | Hartmann's mountain zebra, halfmens | 59 | ☑ |
| 37.4 | … | … | | Limpopo-Shashe TFCA | 3.1 | Baobabs, mlala palms | 59 | ☑ |
| 37.5 | Which pair describes Maloti-Drakensberg TFCA? | Lesotho and SA; bearded and Cape vultures | 59 | Lesotho and SA; baobab trees and mlala palms | 3.5 | Plants belong to Limpopo-Shashe | 59 | ☑ |
| 37.5 | … | … | | Botswana and SA; bearded and Cape vultures | 3.5 | Botswana is Limpopo-Shashe / Kgalagadi | 59 | ☑ |
| 37.5 | … | … | | Botswana and SA; baobab trees and mlala palms | 3.5 | Both halves Limpopo-Shashe | 59 | ☑ |

## Term 3 · Sustainable and responsible tourism

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 38.1 | Term: protecting and preserving resources for future generations? | Sustainable tourism | 64 | Green tourism practices · Responsible tourism · Biodiversity | 3.3 | Business actions (68) · tourist behaviour (66) · positive env impact (65) | 65–68 | ☑ |
| 38.2 | 'People' and 'profit' stand for? | social; economic | 64 | economic/social · social/environmental · cultural/economic | 3.5 | Pillar swaps (planet = environmental) | 64 | ☑ |
| 38.3 | Hotel block spoils the view: which impact? | Visual pollution | 65 | Loss of natural habitat · Congestion · Vandalism | 3.3 | Other negative env impacts | 65 | ☑ |
| 38.4 | POSITIVE environmental impact? | Tourist income aids conservation | 65 | New ideas and values · Investment · Awareness of traditions | 3.2 | Social positive · economic positive · social positive | 65–66 | ☑ |
| 38.5 | NEGATIVE social impact? | Locals denied access to culturally significant places | 65 | Construction destroys habitat · Prices rise with demand · Traffic, crowded beaches | 3.2 | Env negative · economic (inflation) · env (congestion) | 65–66 | ☑ |
| 39.1 | Overseas owner, imported goods: which impact? | Leakage | 66 | Inflation · External costs · Overdependence | 3.3 | Other negative economic impacts | 66 | ☑ |
| 39.2 | Peak-season prices rise: which impact? | Inflation | 66 | Leakage · External costs · Balance of payments | 3.3 | Negative economic · positive economic | 66 | ☑ |
| 39.3 | Municipality pays more for waste and electricity? | External costs | 66 | Overdependence · Leakage · Inflation | 3.3 | Other negative economic impacts | 66 | ☑ |
| 39.4 | POSITIVE economic impact? | Tourists bring money into the country (balance of payments) | 66 | Cultural pride · Biodiversity · New ideas and values | 3.2 | Social · environmental · social | 65 | ☑ |
| 39.5 | Reduce negative economic impacts? | Buy from local suppliers, local content | 66 | Recycling bins · Support conservation businesses · Switch off appliances | 3.2 | Litter control · scarce resources · energy | 66–67 | ☑ |
| 40.1 | Rule for behaviour in the natural environment? | Do not remove anything | 66 | Refillable containers · Switch off engines · Avoid endangered-species restaurants | 3.2 | Water · energy · scarce resources | 67 | ☑ |
| 40.2 | Pair both conserving WATER? | Re-use towels; refillable containers | 67 | Towels + engines · Walk/cycle + containers · Walk/cycle + engines | 3.5 | Energy practices | 67 | ☑ |
| 40.3 | Labelled recycling bins collected weekly: which practice? | Controlling litter | 66 | Conserving energy · Conserving scarce resources · Conserving water | 3.3 | Other practice groups | 67 | ☑ |
| 40.4 | Conserve other scarce resources? | Don't buy endangered species products | 67 | Tap water · Fewer, closer holidays · Direct flights | 3.2 | Water · carbon footprint planning · transport | 67, 69 | ☑ |
| 40.5 | Benefit of good environmental practices? | Attractions conserved, human impact limited | 67 | Employment · New ideas · Education and community development | 3.2 | Economic positive · social positives | 65–66 | ☑ |
| 41.1 | What causes global warming? | Greenhouse gases like CO2 trap heat | 67 | Melting ice raises sea level · Heavier rain, storms · Planting trees releases CO2 | 3.2 | Results of warming · results · answer key: cutting trees, not planting | 67, 71 | ☑ |
| 41.2 | What is a carbon footprint? | Tons of CO2 emitted | 68 | Heat-trapping blanket · Vehicle purchase tax · Extra departure tax | 3.2 | Greenhouse gases · emissions tax · environmental tax | 68 | ☑ |
| 41.3 | What are green tourism practices? | Actions reducing businesses' environmental impact | 68 | Tourist rules · Preserving for future generations · Tourists choosing sustainable products | 3.2 | Rules (66) · sustainable tourism (64) · responsible tourism (66) | 64–66 | ☑ |
| 41.4 | Deforestation facts? | Trees 50% carbon; 25% of human CO2 | 68 | 25/50 · 50/50 · 25/25 | 3.4, 3.5 | Swapped real figures | 68 | ☑ |
| 41.5 | Consequence of climate change for tourism? | Fewer Namaqualand flowers, fewer tourists | 68 | Coal burned for electricity · Deforestation · Greenhouse blanket | 3.2 | Causes, not consequences | 67–68 | ☑ |
| 42.1 | Why saving electricity cuts emissions in SA? | SA burns coal to make electricity | 68 | Burning trees · Wood fires and gas heaters make electricity · Plants absorb more CO2 | 3.2 | Deforestation · other gas sources · plants absorb CO2 (reworded to be wrong) | 67–68 | ☑ |
| 42.2 | Establishment saves ELECTRICITY how? | Efficient bulbs and solar geysers | 68 | Turn off taps · Refillable containers · Recycling bins | 3.2 | Water · water · litter | 66–67 | ☑ |
| 42.3 | How do the 3Rs cut CO2? | Factories produce fewer products | 69 | Plants absorb CO2 · Gas blanket gone · Lower departure tax | 3.2 | Deforestation · greenhouse gases · climate change consequence | 68 | ☑ |
| 42.4 | PLANNING: reduce carbon footprint? | Fewer, longer holidays closer to home | 69 | Direct flights · Warm water and laundry · Public transport at destination | 3.2 | Transport · accommodation · transport | 69 | ☑ |
| 42.5 | Pair for SELECTING TRANSPORT? | Train + direct flights | 69 | Train + laundry · Warm water + direct flights · Connecting flights + public transport | 3.5 | Accommodation · transfers contradict direct flights | 69 | ☑ |

## Term 4 · Communication and customer care

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 49.1 | Connects office phones via a receptionist to extensions? | A switchboard | 85 | A computer network · A fax machine · A teleconference | 3.1 | Computer network (86) · fax (85–86) · teleconferencing (87) | 85–87 | ☑ |
| 49.2 | DISADVANTAGE of cellphones? | Poor telephone skills = poor service image | 85 | Needs extra phone line · Ink needs time to dry · Copies not always good quality | 3.2 | Fax · printer · fax | 86 | ☑ |
| 49.3 | First page of a fax? | A cover sheet | 86 | A memo · An attachment · A questionnaire | 3.1 | Written forms (87) · email attachments (86) | 86–87 | ☑ |
| 49.4 | Disadvantage of PHOTOCOPIERS? | Expensive chemicals; take up office space | 86 | Repairs + extra phone line · Upgrades + viruses · Networks fail + receiver unavailable | 3.2 | Fax · computer · cellphone | 85–86 | ☑ |
| 49.5 | Pair true of PRINTERS? | Connected to a computer; ink needs time to dry | 86 | Computer + extra phone line · Phone line + ink drying · Phone line + poor copies | 3.5 | Phone line and poor copies are fax | 86 | ☑ |
| 50.1 | Main functions of computers? | Store information, make bookings, generate correspondence | 86 | Exact copies of itineraries · Paper over a phone line · Reminders, confirmations, offers | 3.2 | Photocopier · fax · SMS | 85–86 | ☑ |
| 50.2 | Disadvantage of COMPUTERS? | Software upgrades are expensive | 86 | Take up office space · Receiver may not be available · Copies not always good quality | 3.2 | Photocopier (Internet saves space) · cellphone · fax | 85–86 | ☑ |
| 50.3 | Pair describing email? | Attach documents; viruses can be transmitted | 86–87 | Attach + both need a machine · Real-time see/hear + viruses · Real-time + webcam | 3.5 | Fax · video conferencing | 86–87 | ☑ |
| 50.4 | Video conferencing requires? | Computer, webcam, microphone, Internet connection | 87 | Phone line, fax, cover sheet · Switchboard, receptionist, extensions · Cellphone network, SMS | 3.2 | Fax · switchboard · cellphone | 85–86 | ☑ |
| 50.5 | Webcam breaks, still hear each other: what is it now? | Teleconferencing | 87 | Video conferencing · Interpersonal communication · Mass communication | 3.3 | Needs sight · two people · large audience | 87–88 | ☑ |
| 51.1 | Agent chooses words or gestures: which step? | Coding | 87 | Code analysing · Message · Feedback | 3.3 | Understanding · meaning · response | 87 | ☑ |
| 51.2 | Tourism road signs look like? | White words on brown | 88 | Brown on white · White on green · Black on yellow | 3.4 | Made up: guide gives only one sign colour scheme | — | ☑ |
| 51.3 | List of ONLY written forms? | Email, memos, surveys, questionnaires | 87 | …teleconferences · …face-to-face talks · …announcements | 3.5 | Spoken / verbal types | 87–88 | ☑ |
| 51.4 | Verbal communication most effective when? | Giving information, correcting misunderstandings | 87 | Sending documents privately · Reaching a large audience · Sharing visuals at a distance | 3.2 | Email · mass · video conferencing | 86–88 | ☑ |
| 51.5 | Face-to-face involves? | Spoken words, voice tone, body language | 88 | …netiquette · …eye contact + delayed feedback · Body language, promptness, professionalism | 3.2 | Email · mass (delayed) · telephone Ps | 87–88 | ☑ |
| 52.1 | Travel agent on the phone? | Indirect interpersonal | 87 | Direct interpersonal · Indirect small group · Direct small group | 3.5 | Direct = eye contact; small group = colleagues | 87 | ☑ |
| 52.2 | Manager's staff meeting? | Direct small group | 87 | Indirect small group · Direct public · Indirect public | 3.5 | Public = public places | 87–88 | ☑ |
| 52.3 | Airport delay announcement? | Indirect public | 88 | Direct public · Indirect mass · Direct mass | 3.5 | Direct = air hostess; mass = TV | 88 | ☑ |
| 52.4 | TV travel programme + feedback? | Mass, feedback delayed | 88 | Mass, immediate · Public, delayed · Public, immediate | 3.5 | Public = airport | 88 | ☑ |
| 52.5 | Answer within 5–10 s (3 rings)? | Promptness | 88 | Politeness · Preparation · Professionalism | 3.3 | The other telephone Ps | 88 | ☑ |
| 53.1 | Part of the DEFINITION of service excellence? | Helping customers with the process of purchase | 88 | Encouraging future purchases with vouchers | 3.2 | Recommendations (3.5) | 89 | ☑ |
| 53.1 | … | … | | Improving the image and competitiveness of the company | 3.2 | Importance (3.2) | 88 | ☑ |
| 53.1 | … | … | | Giving fast results and personal attention | 3.2 | Advantages (3.3) | 89 | ☑ |
| 53.2 | Guests judge the hotel by the person who checks them in: which characteristic? | The service provider is part of the service | 88 | Service is intangible, like product knowledge | 3.3 | Intangible (politeness, product knowledge, interest) | 88 | ☑ |
| 53.2 | … | … | | Service varies and can be good or bad | 3.3 | Variation in service | 88 | ☑ |
| 53.2 | … | … | | Service cannot be stored for later | 3.3 | Cannot be stored | 88 | ☑ |
| 53.3 | Advertising spend rising, staff resigning: which does the guide link this to? | Poor service delivery | 89 | Leakage | 3.3 | Economic negative impact: profits leave the area | 66 | ☑ |
| 53.3 | … | … | | Overdependence on tourism | 3.3 | Economic negative impact: relying too much on tourism | 66 | ☑ |
| 53.3 | … | … | | External costs | 3.3 | Economic negative impact: electricity, waste removal | 66 | ☑ |
| 53.4 | Which pair are RECOMMENDATIONS for improving service? | Customer service training and customer feedback | 89 | Customer service training and personal attention | 3.5 | Personal attention: advantage (3.3) | 89 | ☑ |
| 53.4 | … | … | | Competitive advantage and customer feedback | 3.5 | Competitive advantage: advantage (3.3) | 89 | ☑ |
| 53.4 | … | … | | Competitive advantage and personal attention | 3.5 | Both advantages | 89 | ☑ |
| 53.5 | Tourists return and tell others: which chain follows? | More tourists, more money spent, higher GDP, more jobs | 89 | … higher GDP and high staff turnover | 3.2 | High staff turnover: poor service (3.4) | 89 | ☑ |
| 53.5 | … | … | | More tourists, higher marketing costs, … | 3.2 | Increased marketing costs: poor service (3.4) | 89 | ☑ |
| 53.5 | … | … | | More tourists, lower marketing costs, less profit … | 3.2 | Less profit: poor service (3.4) | 89 | ☑ |
