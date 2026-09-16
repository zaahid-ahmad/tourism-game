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
| 2026-09-16 | Sectors 1–9 | 0 | 0 |
| 2026-09-16 | All gates, after Sectors 1–9 | 101 | 37 |
| 2026-09-16 | Sectors 1–18 (whole topic) | 0 | 0 |
| 2026-09-16 | All gates, after Sectors 10–18 | 64 | 26 |
| 2026-09-16 | Attractions 28–37 (whole topic) | 0 | 0 |
| 2026-09-16 | All gates, after Attractions | 35 | 18 |
| 2026-09-16 | Culture and heritage 45–48 (whole topic) | 0 | 0 |
| 2026-09-16 | All gates, after Culture and heritage | 20 | 10 |
| 2026-09-16 | Map work 19–25 (whole topic) | 0 | 0 |
| 2026-09-16 | All gates, after Map work | 6 | 4 |
| 2026-09-16 | Marketing 43–44 (whole topic) | 0 | 0 |
| 2026-09-16 | All gates, after Marketing (all 265 questions rewritten) | 0 | 3 |

---

## Term 1 · Tourism sectors

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 1.1 | What is tourism? | Study of activities, services, industries providing a travel experience | 5 | Within own country >1 day · Crossing a border with passport control · Summary of wants and expectations | 3.2 | Domestic/tourist · international · tourist profile | 5–6 | ☑ |
| 1.2 | Germans arriving; South Africans leaving? | Inbound; outbound | 5 | Outbound; inbound · Inbound; domestic · Domestic; outbound | 3.5 | Swapped/other destination types | 5 | ☑ |
| 1.3 | Durban → Kimberley? | Domestic | 5 | Regional · International · Inbound | 3.1 | Other destination types | 5 | ☑ |
| 1.4 | Travel within a specific geographical area? | Regional tourism | 5 | Domestic · International · Inbound | 3.3 | Definitions (answer-key example: Aimee → Zimbabwe) | 5 | ☑ |
| 1.5 | Same-day visitor + tourist's max stay? | an excursionist; a year | 5 | excursionist; six months · inbound tourist; a year · inbound tourist; six months | 3.5 | Six months made up; inbound is not same-day | 5 | ☑ |
| 2.1 | Higher-level needs? | Achievement, status, personal growth | 5 | Order, law, security · Family, relationships, work · Food, shelter, sleep | 3.2 | Basic needs | 5 | ☑ |
| 2.2 | List of ONLY tourist types? | VFR, incentive, health, religion | 5–6 | …camels · …donkey carts · …hot air balloons | 3.5 | Extraordinary transport | 7 | ☑ |
| 2.3 | Backpackers and gap year = ? | Youth travel | 5 | Adventure · Leisure and holiday · Eco | 3.1 | Other tourist types (guide puts backpackers under youth) | 5 | ☑ |
| 2.4 | Define a tourist profile | Summary of what tourists want and expect | 6 | Classification (VFR) · Higher needs · Study of travel services | 3.2 | Types · why people travel · tourism definition | 5 | ☑ |
| 2.5 | NOT part of a tourist profile? | Passport number | 6 | Nationality · Occupation · Arrival and departure dates | — | All three are listed fields | 6 | ☑ |
| 3.1 | Bus for backpackers? | The Baz Bus | 6 | Greyhound · Intercape · Shuttle bus | 3.1 | Coach companies · airports/harbours | 6 | ☑ |
| 3.2 | Metered vs minibus taxis? | Metered by distance; minibus no timetable | 6 | Swapped · minibus set timetable · metered set timetable | 3.5 | Set timetables = coaches | 6 | ☑ |
| 3.3 | Describes microlights? | One or two people; adventure | 7 | Small airfields, viewing · Chartered by executives · Fast, between major centres | 3.2 | Helicopters · small aircraft · aeroplanes | 6–7 | ☑ |
| 3.4 | Aeroplane disadvantage? | Airports outside cities | 8 | Getting to the port · Toll fees · Overcrowded commuter services | 3.2 | Cruise liner · car · train | 8 | ☑ |
| 3.5 | Shuttle buses? | Airports, harbours, terminals | 6 | Hired whole bus · Set timetables · Backpackers | 3.2 | Chartered · coaches · Baz Bus | 6 | ☑ |
| 4.1 | OR Tambo – Jhb – Pretoria? | Gautrain | 7 | Shosholoza Meyl · Metrorail · Rovos Rail | 3.1 | City-to-city · commuter · private luxury | 7 | ☑ |
| 4.2 | Blue Train? | Luxury, weekly, CT–Pretoria | 7 | Crosses borders · City-to-city · Bullet train | 3.2 | Rovos · Shosholoza · Gautrain | 7 | ☑ |
| 4.3 | Rail advantage? | Stations in town and city centres | 8 | Exact destination · Cabin crew · Luggage + meals | 3.2 | Car · aeroplane · cruise liner | 8 | ☑ |
| 4.4 | Boats popular for? | Harbour cruises, fishing, whale watching | 7 | Private cruising · Embark at SA ports · Tracks in streets | 3.2 | Yachts · cruise liners · trams | 7 | ☑ |
| 4.5 | ONLY extraordinary modes? | Camels, donkey carts, bicycles | 7 | …microlights · …trams · …helicopters | 3.5 | Air · rail · air | 7 | ☑ |
| 5.1 | ALL transport factors? | Cost, safety, reliability, distance and time | 7–8 | Budget, location, quality, type · Nationality, age, occupation · Nationality + factors | 3.2 | Accommodation choice (9) · tourist profile (6) | 6–9 | ☑ |
| 5.2 | Flexibility advantage? | Car | 8 | Bus · Aeroplane · Train | 3.2 | Fixed schedules | 8 | ☑ |
| 5.3 | Bus/coach disadvantage? | Fixed schedules, getting to depot | 8 | Low capacity, fatigue · Luggage, jet lag · Sea-sickness, port | 3.2 | Car · aeroplane · cruise liner | 8 | ☑ |
| 5.4 | Minibus parked 40 min? | Waits until full | 8 | Road works · Fixed schedule · Driver fatigue | 3.2 | Bus/car · bus · car | 8 | ☑ |
| 5.5 | Fare includes accommodation, meals, entertainment? | Cruise liner | 8 | Aeroplane · Train · Coach | 3.2 | Other modes ("safest" removed: arguable for aeroplanes) | 8 | ☑ |
| 6.1 | Factor in choosing an establishment? | Budget available | 9 | Flexibility · Distance and time · Reliability | 3.2 | Transport factors | 7–8 | ☑ |
| 6.2 | Valet, room service, gym, conference room? | Formal service | 9 | Guest · Self-catering · Backpackers | 3.1 | Other accommodation types | 9–10 | ☑ |
| 6.3 | Self-catering must provide? | Kitchen area, cooking equipment | 9 | Room service, valet, gym · Meals by arrangement · Dormitories | 3.2 | Formal · guest · backpackers | 9–10 | ☑ |
| 6.4 | Caravan and camping require? | Caretaker, wash lines, running water | 9 | Host, meals, linen · Dorms, reception · Manager, valet, gift shop | 3.2 | Guest · backpackers · formal | 9–10 | ☑ |
| 6.5 | Guest accommodation? | Owner run, family atmosphere, meals by arrangement | 9 | Near game reserve · Limited budget, shared areas · Own cooking | 3.2 | Game lodge · backpackers · self-catering | 9–10 | ☑ |
| 8.1 | Bedroom with private bathroom? | En suite | 11 | Suite · Twin room · Penthouse | 3.1 | Other room terms | 11 | ☑ |
| 8.2 | Top-floor luxury apartment? | Penthouse | 11 | Suite · Family room · Double room | 3.1 | Other room terms | 11 | ☑ |
| 8.3 | Extra charge, single in a double? | Single supplement | 11 | Fully inclusive · Per person sharing · Room service charge | 3.1 | Pricing terms · meal service | 11–12 | ☑ |
| 8.4 | pppn? | Per person per night | 11 | pps · pppd · fully inclusive | 3.1 | Pricing abbreviations | 11 | ☑ |
| 8.5 | Bread rolls, coffee, juice brought to table? | Continental breakfast | 12 | English · Buffet · A la carte | 3.1 | Other meal types | 12 | ☑ |
| 9.1 | Why hotels invest in in-room tech? | Leisure: entertainment; business: work | 12 | Swapped · safety/comfort · comfort/information | 3.5 | Tech categories | 12–13 | ☑ |
| 9.2 | Menus, weather, wake-up call? | Information | 12 | Comfort · Entertainment · Work | 3.1 | Other categories | 12–13 | ☑ |
| 9.3 | Environmental responsibility tech? | Key card, energy-saving lights | 13 | Door key, safe · Curtains, towel rails · Internet, phone | 3.2 | Safety · comfort · work | 12–13 | ☑ |
| 9.4 | SAFETY tech? | Entry sensor system | 13 | Occupancy sensor lights · Soundproofing, curtains · Digital showers | 3.2 | Environmental · comfort · environmental | 12–13 | ☑ |
| 9.5 | WORK tech? | Hot-spot Internet, Wi-Fi, multi-plug | 13 | Channels, games · Towel rails, mini-bar · Safe, door lock | 3.2 | Entertainment · comfort · safety | 12–13 | ☑ |
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

| 10.1 | Spur, Ocean Basket? | Family restaurants | 13 | Fine dining · Fast food · Coffee shops | 3.1 | Other food establishments | 13–14 | ☑ |
| 10.2 | Nando's, Wimpy, KFC? | Fast food outlets | 14 | Family · Coffee shops · Taverns | 3.1 | Other food establishments | 13–14 | ☑ |
| 10.3 | Township, home-brew: type + who? | Tavern/shebeen; adventurous tourists | 14 | Tavern + business · Pub + adventurous · Pub + leisure/family | 3.5 | Pubs (13–14); leisure/family = ice cream stores | 14 | ☑ |
| 10.4 | Pubs and bars? | Limited menu, drinks, TV for sport | 13–14 | Coffee, cakes · Soft serve · Formal menu | 3.2 | Coffee shops · ice cream · fine dining | 13–14 | ☑ |
| 10.5 | Street stalls, kiosks, markets? | Not permanent, festivals and events | 14 | Townships, home-brew · Malls, meeting places · Budget take-away | 3.2 | Taverns · coffee shops · fast food | 13–14 | ☑ |
| 11.1 | What an attraction is? | Place of interest for amusement or education | 14 | On the way to main reason · Wants and expectations · Profit through tourism | 3.2 | Secondary (16) · tourist profile (6) · product owners (20) | 6–20 | ☑ |
| 11.2 | Two that are BOTH sub-sectors? | Gaming and lotteries; events and conferences | 15 | + natural · primary + events · primary + natural | 3.5 | Types of attraction, not sub-sectors | 15 | ☑ |
| 11.3 | MICE? | Meetings, incentives, conferences, exhibitions | 15 | Near-miss expansions | 3.1 | Made up (no other expansions in guide) | — | ☑ |
| 11.4 | Table Mountain; stadium? | natural; constructed | 15 | Swapped / same-same | 3.5 | Guide examples | 15 | ☑ |
| 11.5 | Kruger; God's Window on the way? | primary; secondary | 15–16 | Swapped / same-same | 3.5 | Definitions | 15–16 | ☑ |
| 12.1 | Kruger tourist types? | Adventure, ecotourist, cultural, SIT | 16 | Cape Town · Wild Coast · Garden Route sets | 3.2 | Appeal table rows | 16 | ☑ |
| 12.2 | Soweto tourist types? | Cultural, SIT, backpacking | 16 | Johannesburg · Cape Town · Winelands sets | 3.2 | Appeal table rows | 16 | ☑ |
| 12.3 | Robben Island tourist types? | Ecotourist, cultural, education, SIT | 16 | Johannesburg · Durban · Blyde sets | 3.2 | Appeal table rows | 16 | ☑ |
| 12.4 | Clay pots, woodcarving, dance? | Cultural village | 16 | Theme park · Tourist route · Scenic beauty | 3.2 | Activities table rows | 16 | ☑ |
| 12.5 | Scenic beauty, flora, bungee, rafting? | Garden Route | 16 | Blyde River Canyon · Wild Coast · Winelands | 3.2 | Appeal table rows | 16 | ☑ |
| 13.1 | NDT MISSION? | Responsible, sustainable tourism for all South Africans | 17 | World leader in excellence · Reduce poverty · Stop degradation | 3.2 | NDT vision · UNWTO (22) · WWF (22) | 17, 22 | ☑ |
| 13.2 | Who issues permits? | Provincial tourism authorities | 17 | Regional marketing · LTOs · DMOs | 3.1 | Other public sector levels | 18 | ☑ |
| 13.3 | Largest → smallest? | NDT → provincial → regional → DMO → LTO | 17 | Order swaps | 3.5 | Public sector list | 17 | ☑ |
| 13.4 | Describes LTOs? | Smallest, promote local attractions | 18 | Central town + district offices · Climate and landscape · Linking villages | 3.2 | DMO · region · CBO | 18, 20 | ☑ |
| 13.5 | Public + private marketing a region? | Convention Bureau (Western Cape) | 18 | TEP · NDT plans · FTTSA packages | 3.2 | Partly state-owned · public only · private association | 17–21 | ☑ |
| 14.1 | Passports, immigration? | Home Affairs (DHA) | 18 | DIRC · DTI · Transport | 3.1 | Other departments | 18–19 | ☑ |
| 14.2 | Foreign policy, SADC Univisa? | DIRC | 18 | DHA · DTI · StatsSA | 3.1 | Other departments (q avoids "issues visas": DHA also does in practice) | 18–19 | ☑ |
| 14.3 | DTI function? | Supporting SMMEs | 19 | Sporting events · Foreign policy · Surveys | 3.2 | Sports and Recreation · DIRC · StatsSA | 18–19 | ☑ |
| 14.4 | Runs PRASA? | Transport | 19 | DTI · Sports and Recreation · DHA | 3.1 | Other departments | 18–19 | ☑ |
| 14.5 | Surveys on arrivals and reasons? | StatsSA | 19 | SANParks · SAHRA · NGB | 3.1 | Public entities | 19 | ☑ |
| 15.1 | SANParks, SAHRA, ACSA: type + definition? | Public entities; one function | 19 | Public + profit · Parastatals + one function · Parastatals + profit | 3.5 | Parastatal definition | 19 | ☑ |
| 15.2 | SAA, Transnet, Eskom? | Parastatals | 19 | Public entities · Partly state-owned · Product owners | 3.1 | Ownership types | 19–20 | ☑ |
| 15.3 | TEP type + role? | Partly state-owned; develops small businesses | 19 | Partly + grades · Public entity + develops · Public entity + grades | 3.5 | Grading = TGCSA (10) | 10, 19 | ☑ |
| 15.4 | ACSA? | Airports Company of South Africa | 19 | Near-miss expansions | 3.1 | Made up | — | ☑ |
| 15.5 | NGB? | National Gambling Board | 19 | Grading · Game · Guesthouse Board | 3.1 | Made up | — | ☑ |
| 16.1 | Product owner? | Business making a profit through tourism | 20 | Training and funding · One-function department · Helps entrepreneurs start | 3.2 | NGO/CBO · public entity · professional associations | 19–20 | ☑ |
| 16.2 | Community campsite profits spent on? | Roads, schools, clinics | 20 | Grading plaques · Parastatal shares · Fair Trade packages | 3.2 | TGCSA · parastatals · FTTSA | 10, 19, 21 | ☑ |
| 16.3 | NGOs and CBOs? | Link communities with operators; training | 20 | Regulate travel agencies · Represent private sector · Issue permits | 3.2 | ASATA · TBCSA · provincial authorities | 17–21 | ☑ |
| 16.4 | Official voice, Southern African HOSPITALITY? | FEDHASA | 21 | TBCSA · SATSA · SAACI | 3.1 | TBCSA = travel and tourism overall | 20–21 | ☑ |
| 16.5 | Money stays in local economy? | FTTSA | 21 | ASATA · SATSA · TBCSA | 3.1 | Other associations | 20–21 | ☑ |
| 17.1 | UNWTO name + base? | UN World Tourism Organisation; Madrid | 22 | + Geneva · WTTC + Madrid · WTTC + Geneva | 3.5 | Geneva made up; WTTC (22) | 22 | ☑ |
| 17.2 | UNWTO aim? | Reduce poverty through sustainable tourism | 22 | Stop degradation · Raise awareness · Peace and security | 3.2 | WWF · WTTC · SADC | 21–22 | ☑ |
| 17.3 | WTTC members? | Tourism business leaders worldwide | 22 | Public sector bodies · Southern African countries · 1 300+ projects | 3.2 | UNWTO · SADC · WWF | 21–22 | ☑ |
| 17.4 | WWF year + projects? | 1961; 1 300+ | 22 | 1961/3 100 · 1991/1 300 · 1991/3 100 | 3.4, 3.5 | Made-up swaps | 22 | ☑ |
| 17.5 | SADC? | Co-operation, peace and security | 21 | Rankings · Biodiversity · Awareness | 3.2 | UNWTO · WWF · WTTC | 22 | ☑ |
| 18.1 | Internet payment disadvantage? | Two-day transfers between banks | 22 | Small businesses lack facilities · May bounce · Fee for guarantee | 3.2 | Credit card · personal cheque · bank-guaranteed cheque | 23–24 | ☑ |
| 18.2 | Too many wrong PINs? | Three in a row: keeps the card | 23 | Three: blocks account · Five: keeps card · Five: blocks | 3.4, 3.5 | Five and blocking made up | 23 | ☑ |
| 18.3 | Portable speed points? | Card stays in sight, not copied | 23 | Immediate EFT · Hold a reservation · Bank guarantee | 3.2 | Debit card · credit card · bank cheque | 23–24 | ☑ |
| 18.4 | Credit card disadvantage? | Commission charged to providers | 23 | Two-day transfers · Cheques bounce · Refused if low funds | 3.2 | Internet · cheque · debit card | 22–24 | ☑ |
| 18.5 | Refuse personal cheque + bank-guaranteed? | May bounce; guaranteed costs a fee | 24 | Bounce + free · No signature + fee · No signature + free | 3.5 | Must be signed; bank charges a fee | 24 | ☑ |

## Term 2 · Map work and tour planning

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 19.1 | Where are map symbols explained? | In the legend | 30 | In the scale bar · On the compass rose · In the grid reference | 3.1 | Other map tools | 30–32 | ☑ |
| 19.2 | On a 1:50 000 map, 1 cm represents? | 0,5 km | 31 | 5 km · 50 km · 50 m | 3.4 | Common scale-conversion errors | 31 | ☑ |
| 19.3 | How many compass points, and the cardinal points? | Sixteen; N, S, E, W | 31 | Eight; N, S, E, W · Sixteen; NE, NW, SE, SW · Four; N, NE, E, SE | 3.5 | Wrong count/ordinal pairings | 31 | ☑ |
| 19.4 | What is a grid reference used for? | Finding a place or feature on the map | 32 | Measuring the time difference between places · Showing how big the map's scale is · Explaining what each map symbol means | 3.1 | Time zones · scale · legend | 30–32 | ☑ |
| 19.5 | What are these (red) numbers beside roads? | Distance indicators | 33 | Road names · Altitude in metres · Speed limits | 3.1 | Other map/road features | 33 | ☑ |
| 20.1 | Longitude interval, and how many time zones? | 15° intervals; 24 time zones | 32 | 10° intervals; 36 time zones · 15° intervals; 12 time zones · 30° intervals; 24 time zones | 3.5 | Wrong interval/count pairings | 32 | ☑ |
| 20.2 | What is the 0° line of longitude called? | The Greenwich Meridian | 32 | The Equator · The International Date Line · The Tropic of Capricorn | 3.1 | 0° latitude · 180° longitude · unrelated line | 32 | ☑ |
| 20.3 | Time in Cape Town (30° E) when London is 12:00? | 14:00 | 32 | 10:00 · 12:00 · 17:00 | 3.4 | Wrong direction/offset | 32 | ☑ |
| 20.4 | Time in New York (75° W) when London is 12:00? | 07:00 | 32 | 17:00 · 09:00 · 05:00 | 3.4 | Wrong direction/offset | 32 | ☑ |
| 20.5 | At what longitude is the IDL? | 180° | 32 | 0° · 90° · 30° E | 3.1 | Position only tested, not direction (§5.9) | 32 | ☑ |
| 21.1 | Which map shows borders of countries/provinces? | Political map | 33 | Physical map · Street map · Road map | 3.1 | Other map types | 33 | ☑ |
| 21.2 | On a physical map, orange and brown show? | High elevations | 33 | Water · Low elevations · Provincial borders | 3.2 | Other colour codes | 33 | ☑ |
| 21.3 | Which map shows the location of airports? | A specialist map | 33 | A street map · A political map · A tourist attraction map | 3.1 | Other map types | 33 | ☑ |
| 21.4 | Which map is most suitable for heritage sites/restaurants nearby? | A tourist information map | 33 | A political map · A physical map · A rainfall map | 3.1 | Other map types | 33 | ☑ |
| 21.5 | Which map focuses on one place's layout and facilities? | A tourist attraction map | 33 | A general reference map · A political map · A road map | 3.1 | Other map types | 33 | ☑ |
| 22.1 | How does a GPS work? | It receives satellite data to show your position | 33 | It reads printed grid lines to show your position · It calculates the time zone you are currently in · It connects to a fixed telephone line for directions | 3.2 | Grid references · time zones · landline devices | 30,32,33 | ☑ |
| 22.2 | What does GPS stand for? | Global Positioning System | 33 | General Positioning System · Global Position System · General Position Systems | 3.1 | Word-order/wording mix-ups | 33 | ☑ |
| 22.3 | Which tool lets her take a virtual walk? | Google Street View | 34 | A distance table · A political map · A map legend | 3.1 | Other map/ICT tools | 30,34,36 | ☑ |
| 22.4 | Why is the Internet important to tourists? | It gives current information for trip planning | 34 | It replaces the need for a valid passport · It grades hotels using a star system · It removes the need for any printed maps | 3.2 | DHA passports · TGCSA grading · paper maps | 34 | ☑ |
| 22.5 | How do you find information on an interactive map? | Click province, then town, then attraction | 34 | Type in a grid reference for the square · Measure the distance with the map's scale · Look up the symbol in the map's legend | 3.1 | Grid reference · scale · legend | 30,32,34 | ☑ |
| 23.1 | Which province–capital pair is correct? | Mpumalanga – Nelspruit | 34–35 | Limpopo – Mafikeng · Free State – Kimberley · North West – Polokwane | 3.1 | Swapped real capitals (§5.9 old names kept) | 34–35 | ☑ |
| 23.2 | What is the capital of KwaZulu-Natal? | Pietermaritzburg | 35 | Durban · Bisho · Bloemfontein | 3.1 | Biggest city, not capital · other capitals | 35 | ☑ |
| 23.3 | Which countries neighbour South Africa? | Namibia, Botswana, Zimbabwe, Lesotho, Mozambique, Swaziland | 35 | Zambia, Tanzania, Kenya, Malawi, Uganda, Rwanda · Angola, Tanzania, Congo, Sudan, Ghana, Nigeria · Kenya, Egypt, Ghana, Nigeria, Uganda, Sudan | 3.4 | Real African countries, none neighbouring SA | 35 | ☑ |
| 23.4 | What are the tourism 'gateways' to the provinces? | Airports and harbours | 35 | National highways · Border posts · Tourist information offices | 3.1 | Other map/infrastructure features | 35 | ☑ |
| 23.5 | How many oceans and continents? | Two oceans; seven continents | 35 | Four oceans; seven continents · Two oceans; five continents · Three oceans; six continents | 3.5 | Wrong count pairings | 35 | ☑ |
| 24.1 | By 2010, how many WHS did SA have? | Eight | 35 | Nine · Six · Twelve | 3.4 | Made up, no clash with other guide numbers | 35 | ☑ |
| 24.2 | Which is NOT a South African WHS? | Modjadji Cycad Reserve | 35 | Vredefort Dome · Cape Floral Region · Mapungubwe Cultural Landscape | 3.1 | Real WHS, wrongly excluded | 35 | ☑ |
| 24.3 | Which list contains only South African harbours? | Durban, Mossel Bay, Saldanha | 35 | Lanseria, George, Upington · Gariep, Vaal, Hartebeespoort · Magaliesberg, Waterberg, Pilanesberg | 3.2 | Airports · dams · mountains | 35 | ☑ |
| 24.4 | Which is a Transfrontier PARK? | Kgalagadi TFP | 35 | Maloti-Drakensberg · Addo · Table Mountain | 3.1 | TFCA, not TFP · national parks | 35 | ☑ |
| 24.5 | Which are all major South African mountains? | Drakensberg, Magaliesberg | 35 | Gariep, Breede, Tugela · Vaal, Hartebeespoort, Gariep · Addo, Karoo, Mokala | 3.2 | Rivers · dams · parks | 35 | ☑ |
| 25.1 | What are distance tables used for? | Planning self-drive routes | 36 | Converting currency amounts · Calculating time zone differences · Grading hotels and lodges | 3.2 | Unrelated tourism tasks | 36 | ☑ |
| 25.2 | Average driving speed used by the route planner? | 100 km/h | 36 | 80 km/h · 120 km/h · 60 km/h | 3.4 | Plausible other speeds | 36 | ☑ |
| 25.3 | Driving time for a 581 km route? | 5,81 hours | 36 | 58,1 hours · 4,5 hours · 6,81 hours | 3.4 | Decimal-place and calculation slips | 36 | ☑ |
| 25.4 | Driving time for a 1 400 km route? | 14 hours of driving | 36 | 1,4 hours of driving · 140 hours of driving · 10 hours of driving | 3.4 | Decimal-place slips | 36 | ☑ |
| 25.5 | What else affects driving time (besides weather)? | Stops, speed limits and road conditions | 36 | The make and colour of the car · The time zone at the destination · The tourist's passport number | 3.2 | Unrelated factors | 36 | ☑ |

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
| 28.1 | Bloukrans Bridge facts? | 216 m; highest bungee | 47 | 215 m + bungee · 216 m + hand-dug hole · 56 m + bungee | 3.4, 3.5 | Big Hole depth · Big Hole · Augrabies falls | 55, 58 | ☑ |
| 28.2 | National Arts Festival where + when? | Grahamstown; June/July | 47 | Grahamstown Sept/Oct · Potchefstroom June/July · Potchefstroom Sept/Oct | 3.5 | Aardklop / Fish River months | 47, 55 | ☑ |
| 28.3 | Vredefort Dome? | Oldest and largest meteorite impact site | 47 | Hand-dug hole · Water-eroded formations · Third largest canyon | 3.2 | Big Hole · Bourke's Luck · Blyde | 54–55 | ☑ |
| 28.4 | Mrs Ples + Little Foot ages? | 2,8 million; 4 million | 47 | Swapped · + 2 billion · 2 billion + 4 million | 3.4, 3.5 | Vredefort age | 47 | ☑ |
| 28.5 | Apartheid Museum facts? | Opened 2001; 1948–1994 | 48 | Opened 1994 · 1961–1994 · gold mining history | 3.4, 3.2 | Swapped years · WWF year · Gold Reef City | 22, 48 | ☑ |
| 29.1 | First WHS? | iSimangaliso Wetland Park | 48 | Drakensberg Park · Robben Island · Cradle of Humankind | 3.1 | Other WHS | 48–56 | ☑ |
| 29.2 | Highest range + largest rock painting group? | uKhahlamba-Drakensberg | 48 | Golden Gate · Mapungubwe · Cradle | 3.1 | Other heritage attractions | 47–49 | ☑ |
| 29.3 | uShaka's three sections? | Sea World, Wet 'n Wild, Village Walk | 49 | Valley of Waves · Two Oceans Aquarium + Superbowl · Golden Loop | 3.2 | Sun City · V&A · Gold Reef City | 48–56 | ☑ |
| 29.4 | Comrades facts? | 90 km; PMB–Durban | 49 | 109 km PMB–Durban · 90 km Cape Town · 109 km Cape Town | 3.4, 3.5 | Cape Argus | 56 | ☑ |
| 29.5 | Sardine Run when + who? | May–July; SIT and education | 49 | May–July sport · Sept–Oct SIT · Sept–Oct sport | 3.5 | Sept–Oct = Fish River/Aardklop | 47, 55 | ☑ |
| 30.1 | Why province of myths and legends? | Rain Queen Modjadji, Lobedu | 49 | Makapansgat relics · Comrades · Roaring sands | 3.2 | Limpopo archaeology · KZN · Witsand | 49–55 | ☑ |
| 30.2 | Mapungubwe? | Gold and ivory trading centre to AD 1300 | 49 | Diamond rush town · Goldfield monument · Fossil skull site | 3.2 | Kimberley · Pilgrim's Rest · Cradle | 47–55 | ☑ |
| 30.3 | Oldest, largest cycads? | Modjadji, Limpopo | 49 | Kirstenbosch · Walter Sisulu · Maloti-Drakensberg TFCA | 3.1 | Botanical gardens · Drakensberg cycad | 57–59 | ☑ |
| 30.4 | Kruger facts? | 2 million ha; 500+ bird species | 58 | 350 birds · 3,6 million ha | 3.4, 3.5 | Pilanesberg · Ivory Route | 49, 55 | ☑ |
| 30.5 | African Ivory Route? | 2 000 km route, five cultural camps | 49 | Panorama Route · 109 km cycle · Wine regions | 3.2 | Mpumalanga · Argus · Cape wine routes | 55–56 | ☑ |
| 31.1 | Late-1800s goldfield, now monument? | Pilgrim's Rest | 55 | Kimberley · Mapungubwe · Gold Reef City | 3.1 | Diamond town · kingdom · mine theme park | 47–55 | ☑ |
| 31.2 | Bourke's Luck Potholes formed by? | Water erosion | 55 | Meteorite · Hand-digging · Wind-blown sand | 3.2 | Vredefort · Big Hole · made up | 47, 55 | ☑ |
| 31.3 | Blyde River Canyon facts? | Third largest canyon; 25 000 ha | 55 | 55 000 ha · Third largest park · Largest canyon | 3.4, 3.5 | Augrabies · Addo | 58 | ☑ |
| 31.4 | Why God's Window? | Panoramic view of Lowveld and rainforest | 55 | 360° cable cars · Telescope · Place of Great Noise | 3.2 | Table Mountain · SALT · Augrabies | 55–58 | ☑ |
| 31.5 | Correct province matches? | Great Fish River – EC; SALT – NC | 47, 55 | Swapped · SALT – WC · Cango – MP | 3.5 | Matching exercise answers | 60 | ☑ |
| 32.1 | Big Hole size? | 1,6 km wide, 215 m deep | 55 | 216 m · 380 km wide · 16 km deep | 3.4, 3.5 | Bloukrans · Vredefort crater | 47 | ☑ |
| 32.2 | Why 'roaring' sands? | Sand particles rubbing in hot, dry weather | 55 | Wind in caves · Water erosion · Porcupines and aardwolves | 3.2 | Made up · Bourke's · Witsand night drives | 55 | ☑ |
| 32.3 | Namaqualand when + species? | Aug–Sept; 3 500 | 55 | 1 000 · Dec–Jan | 3.4, 3.5 | Namaqua NP endemics; made-up months | 58 | ☑ |
| 32.4 | SALT? | Largest telescope in Southern Hemisphere | 55 | Largest in the world · Hand-dug hole · Impact site | 3.2 | Overstated · Big Hole · Vredefort | 47, 55 | ☑ |
| 32.5 | NC Transfrontier Parks? | /Ai-/Ais-Richtersveld and Kgalagadi | 59–60 | + Great Limpopo · + Maloti · Great Limpopo + Limpopo-Shashe | 3.1 | Limpopo TFP · TFCAs | 59 | ☑ |
| 33.1 | Sun City known as? | 'Las Vegas' of SA | 55 | Place of Great Noise · Roaring sands · Myths and legends | 3.1 | Augrabies · Witsand · Limpopo | 49–58 | ☑ |
| 33.2 | Lesedi meaning + villages? | 'Light' in Sesotho; five | 55 | seven · 'Rain' | 3.5 | Made up (province not asked: guide ambiguity) | 55 | ☑ |
| 33.3 | Pilanesberg? | Big Five, 350 birds, white rhino | 55 | 400 birds, seven habitats · 500 birds, largest · Own airstrip | 3.2 | Phinda · Kruger · Madikwe | 57–58 | ☑ |
| 33.4 | Aardklop where + length? | Potchefstroom; five days Sept/Oct | 55 | Oudtshoorn · June/July · Grahamstown | 3.5 | Klein Karoo · National Arts Festival | 47, 56 | ☑ |
| 33.5 | NW reserve with airstrip? | Madikwe | 57 | Shamwari · Phinda · Sabi Sabi | 3.1 | Other private reserves | 57 | ☑ |
| 34.1 | Only on Table Mountain? | Ghost frog | 56 | Knysna seahorse · Cape mountain zebra · Pygmy falcon | 3.1 | Garden Route NP · Mountain Zebra NP · Kgalagadi | 58–59 | ☑ |
| 34.2 | Robben Island sites? | Kramat Shrine, lepers' graveyard, Sobukwe House | 56 | Aquarium, galleries · 48 buildings, Eureka · 22 exhibition areas | 3.2 | V&A · Big Hole · Apartheid Museum | 48–56 | ☑ |
| 34.3 | Garden Route from–to? | Mossel Bay to Storms River | 56 | → Port Elizabeth · Cape Town → · Knysna → PE | 3.5 | Made-up endpoints | 56 | ☑ |
| 34.4 | Cape Argus facts? | 109 km, March, largest timed cycling | 56 | 90 km · oldest ultra-marathon · June | 3.4, 3.5 | Comrades | 49 | ☑ |
| 34.5 | Cango Caves town + festival? | Oudtshoorn; Klein Karoo NAF | 56 | + National Arts Festival · Potchefstroom · Grahamstown + Aardklop | 3.5 | Grahamstown · Aardklop town | 47, 55 | ☑ |
| 35.1 | Roads, houses, dams? | Man-made environment | 56 | Natural · Physical · Cultural | 3.1 | Other environments | 56 | ☑ |
| 35.2 | Born Free Big Cat Sanctuary? | Shamwari | 57 | Madikwe · Phinda · Sabi Sabi | 3.1 | Other private reserves | 57 | ☑ |
| 35.3 | Northern KZN, seven habitats, 400 birds? | Phinda | 57 | Sabi Sabi · Shamwari · Madikwe | 3.1 | Other private reserves | 57 | ☑ |
| 35.4 | Elefun offers? | Arts, crafts, junior rangers | 57 | Field guide training · Canoe trips · Education courses and bowls | 3.2 | Shamwari · Phinda · Golden Gate | 47, 57 | ☑ |
| 35.5 | Who runs gardens + Table Mountain garden? | SANBI; Kirstenbosch | 57 | SANBI Walter Sisulu · SANParks Kirstenbosch · SANParks Walter Sisulu | 3.5 | Roodepoort · national parks | 57–58 | ☑ |
| 36.1 | Khoi name for Augrabies? | 'Place of Great Noise' | 58 | Roaring sands · God's Window · Place of Light | 3.1 | Witsand · MP · Lesedi | 55 | ☑ |
| 36.2 | Addo largest / second largest? | Cape gannet; African penguin | 58 | Swapped · bearded vulture · bontebok | 3.5 | Golden Gate · Bontebok NP | 58 | ☑ |
| 36.3 | Mountain Zebra NP why + number? | Cape mountain zebra; about 300 | 58 | Hartmann's · over 3 000 · bontebok | 3.5, 3.4 | /Ai-/Ais · Bontebok NP | 58–59 | ☑ |
| 36.4 | Vulture restaurant? | Golden Gate Highlands NP | 58 | West Coast NP · Bontebok NP · Maloti-Drakensberg TFCA | 3.1 | Other parks; Maloti has bearded vultures but no restaurant | 58–59 | ☑ |
| 36.5 | Namaqua NP known for? | Spring daisies; 3 500+ species, 1 000 endemic | 58 | Bontebok · Knysna seahorse · 56 m waterfall | 3.2 | Bontebok NP · Garden Route NP · Augrabies | 58 | ☑ |
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

## Term 3 · Marketing

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 43.1 | What is marketing? | Placing products and services in the hands of the target market | 73 | Finding information to make good marketing decisions · The portion of a market controlled by one company or product · Offering customers something unique or special compared to competitors | 3.1 | Market research · market share · competitive edge | 73–75 | ☑ |
| 43.2 | Holiday packages/cruises are ___; bookings/reservations are ___? | products; services | 73 | services; products · niche markets; core markets · promotion; place | 3.5 | Swapped/other pairings | 73–75 | ☑ |
| 43.3 | 48% of tourists visited Gauteng: this is Gauteng's? | Market share | 73 | Competitive edge · Niche market · Marketing mix | 3.1 | Other marketing concepts | 73 | ☑ |
| 43.4 | Green Cab's eco-friendly transport is its? | Competitive edge | 73 | Market share · Core market · Research plan | 3.1 | Other marketing concepts | 73 | ☑ |
| 43.5 | What are niche markets? | Special interest groups (SIT) | 73 | Market segments that provide the most business · Offering customers something unique · Services | 3.2 | Core markets · competitive edge · services | 73 | ☑ |
| 44.1 | Which is an aim of marketing? | To set an affordable and competitive price | 73–74 | To grade establishments using a star system · To issue permits for tour operators · To reduce the business's market share | 3.2 | TGCSA grading · DHA/DIRC permits · opposite of the real aim | 73–74 | ☑ |
| 44.2 | Which are the five Ps of the marketing mix? | Product, price, place, promotion, people | 74 | Planet, people, profit, price, place · Promptness, politeness, preparation, professionalism, product · Product, planet, promotion, profit, place | 3.5 | Made-up "green" mix · telephone 4 Ps · mixed pairing | 74 | ☑ |
| 44.3 | Air hostess smiles and offers drinks: which P? | People — staff providing the service | 75 | Place — how it reaches the market · Promotion — advertising and sponsorships · Product — the tour or service itself | 3.1 | Other Ps' real descriptions | 75 | ☑ |
| 44.4 | Organisations share the cost of research: this is? | Co-operative research | 75 | Outsourcing · In-house research · A research plan | 3.1 | Other research resource types | 75 | ☑ |
| 44.5 | When must a research plan be completed? | Before the information becomes outdated | 75 | At any time, even after launch · After the product has already launched · Once every ten years, like a census | 3.2 | Contradicts the guide's answer key directly | 75 | ☑ |

## Term 4 · Culture and heritage

| gate.stage | question | correct option | page | wrong option | tech | belongs to / why wrong | page | OK |
|---|---|---|---|---|---|---|---|---|
| 45.1 | What is culture? | Values, attitudes, beliefs and practices of a group of people | 78 | Inherited from the past, basis of national identity · Protected because of its heritage importance · Property needing permission to remove | 3.1 | Heritage · heritage site · national estate | 78–79 | ☑ |
| 45.2 | Home language and traditions passed on through people are? | Living culture — intangible | 78 | Living culture — tangible · Non-living culture — intangible · Non-living culture — tangible | 3.5 | Wrong pairings of living/non-living × tangible/intangible | 78 | ☑ |
| 45.3 | Lobola once paid in cattle, now often money: which belief? | Dynamic — beliefs can change | 78 | Symbolic — shown through language or rings · Learned — passed down generations · Shared — practised by a community | 3.3 | The other three beliefs about culture | 78 | ☑ |
| 45.4 | Umngqusho, babotie, braaivleis: which element of culture? | Cuisine | 79 | Architecture · Arts and crafts · Music and dance | 3.1 | Other elements of culture | 79 | ☑ |
| 45.5 | Which fact about SA cultural diversity is correct? | Four population groups; eleven spoken official languages; African, European, Asian influences | 79 | Two groups (not four) · Nine languages (not eleven) · Mainly African and European only (Asian omitted) | 3.4 | Wrong counts/omission, real numbers swapped | 79 | ☑ |
| 46.1 | What is the NHRA? | The law that protects our heritage | 79–80 | The UN body that encourages heritage sites worldwide · The agency that sets site-significance criteria · The property needing permission to remove | 3.1 | UNESCO · SAHRA · national estate | 79–80 | ☑ |
| 46.2 | What does 'national estate' mean? | Belongs to SA; may not be removed without special permission | 79 | Belongs to the province · Belongs to the municipality · Belongs to the landowner | 3.2 | Provincial sites · local sites · private ownership | 79,81 | ☑ |
| 46.3 | Site employs 40 people, earns ticket income: which value? | Economic value | 79 | Social value · Environmental value · Cultural diversity | 3.1 | Other conservation values | 79 | ☑ |
| 46.4 | Which organisation sets site-significance criteria? | SAHRA | 80 | TGCSA · UNWTO · SANBI | 3.1 | Other acronym bodies | 80 | ☑ |
| 46.5 | Sarah Baartman's grave meets which criterion? | History of slavery | 80 | Great technical achievement · Rare plants · A natural feature | 3.2 | Union Buildings · King Protea · natural site type | 80 | ☑ |
| 47.1 | Drakensberg Mountains: which type of heritage site? | Mixed | 81 | Natural · Cultural · Provincial | 3.1 | Other type · category, not a type | 81 | ☑ |
| 47.2 | Hole in the Wall is an example of a ___ heritage site? | Natural | 81 | Cultural · Mixed · World | 3.1 | Other type · other type · category | 81 | ☑ |
| 47.3 | National Heritage Sites are? | Grade 1 sites | 81 | Grade 2 sites · Grade 3 sites · Grade 4 sites (made up — no Grade 4 exists) | 3.4 | Provincial · Local · invented, no clash | 81 | ☑ |
| 47.4 | Battlefields in KwaZulu-Natal are? | Provincial Heritage Sites | 81 | World Heritage Sites · Local Heritage Sites · Not heritage sites | 3.1 | Confirmed by the guide's answer key | 81 | ☑ |
| 47.5 | Which qualifies as a local heritage site? | Rock art older than 100 years | 81 | Robben Island (World Heritage Site) · Cradle of Humankind (WHS) · iSimangaliso (WHS) | 3.1 | All three are World, not Local, sites | 81 | ☑ |
| 48.1 | What is a heritage plaque? | A commemorative plate | 81–82 | A star grading sign · A brown road sign · An entrance ticket | 3.1 | TGCSA grading · road signage · admission | 81–82 | ☑ |
| 48.2 | How old is the Sunland Big Baobab? | About 6 000 years | 82 | About 600 years · About 60 000 years · About 2 billion years (Vredefort crater age) | 3.4 | Made up · made up · real figure from elsewhere | 82 | ☑ |
| 48.3 | What is inside the Sunland Big Baobab? | A pub and wine cellar | 82 | A museum of gifts · A church · A cave with rock art | 3.2 | Bhunga Building · made up · San rock art sites | 82 | ☑ |
| 48.4 | Where was Nelson Mandela born? | Mvezo | 82 | Qunu · Mthatha · Soweto | 3.1 | Where he grew up · Bhunga Building's town · unrelated | 82 | ☑ |
| 48.5 | Which part of the Mandela Museum exhibits the gifts he received? | The Bhunga Building | 82 | Qunu Village · Mvezo Village · Robben Island | 3.1 | Where he grew up · where he was born · unrelated Mandela site | 82 | ☑ |

**Judgement calls to check:** 47.3's "Grade 4 sites" and 48.3's "A church" are made-up distractors (no clashing real fact elsewhere); 46.3 keeps the pre-existing "Cultural diversity" distractor (not itself a conservation value, but not touched this batch since it already passed lint).

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
