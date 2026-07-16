export type Category = "large-animals" | "poultry";
export type DosageForm = "injection" | "oral" | "powder";

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  category: Category;
  form: DosageForm;
  activeIngredient: string;
  regNo?: string;
  composition: string;
  properties?: string;
  indications: string;
  dosage: string;
  warnings?: string;
  contraindications?: string;
  sideEffects?: string;
  withdrawal?: string;
  storage: string;
  packaging: string;
  manufacturer: string;
}

export const categoryMeta: Record<
  Category,
  { label: string; description: string; color: "teal" | "amber" }
> = {
  "large-animals": {
    label: "Large Animals",
    description: "Cattle, buffalo, sheep, goats and horses.",
    color: "teal",
  },
  poultry: {
    label: "Poultry",
    description: "Broilers, layers and turkeys.",
    color: "amber",
  },
};

export const products: Product[] = [
  // ---------------- Large Animals ----------------
  {
    slug: "drumectin-injection",
    name: "Drumectin Plus",
    subtitle: "Injectable solution, 50 ml",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Ivermectin / Clorsulon",
    composition: "Each 1 ml contains:\nIvermectin 10 mg\nClorsulon 100 mg",
    properties:
      "A combination of Ivermectin (an anthelmintic–ectoparasiticide) and Clorsulon (antifascioliasis), with high efficacy in the treatment and control of internal and external parasites of cattle, sheep and goats.",
    indications:
      "Used in cattle and sheep for treatment and control of gastrointestinal round worms (Haemonchus placei, H. contortus, Ostertagia ostertagi, O. lyrata, Trichostrongylus axei, T. colubriformis), lung worms (Dictyocaulus viviparus), adult liver fluke (Fasciola hepatica), grubs (Hypoderma bovis, H. lineatum), lice (Linognathus vituli, Haematopinus eurysternus) and mites (Psoroptes bovis, Sarcoptes scabiei var. bovis).",
    dosage:
      "Administered by subcutaneous injection only, in the loose skin behind the shoulder.\nCattle: 1 ml / 50 kg body weight, once, S/C only.\nSheep & goats: 0.5 ml / 25 kg body weight, once, S/C only.",
    warnings:
      "Not for human consumption. Not for use in cattle producing milk for human consumption. Not for use in pregnant animals. For subcutaneous use only — not intravenous or intramuscular. Should not be combined with monoamine oxidase inhibitors. Not for use against immature liver flukes (F. hepatica, F. gigantica).",
    withdrawal: "Meat: 35 days",
    storage: "Store below 30°C, away from direct light.",
    packaging: "Glass vials of 50–100 ml.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "rafotest-7-5-injection",
    name: "Rafotest 7.5%",
    subtitle: "Injectable solution, 50 ml / 100 ml",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Rafoxanide",
    regNo: "M.O.H. Reg. No. 2810/2006 vet.",
    composition: "Each 100 ml contains:\nRafoxanide 7.5 g",
    indications:
      "Cattle, sheep and goats: highly effective against adult and immature liver flukes (Fasciola hepatica, F. gigantica), all stages of adult and immature Haemonchus contortus, and larval stages of the sheep nasal worm (Oestrus ovis).",
    dosage: "By S/C injection only. 2 ml / 50 kg body weight.",
    warnings:
      "S/C injection only. Milk produced during treatment should be discarded — dairy cattle should be treated only during the dry period. Not for animals hypersensitive to the active ingredient. Do not treat more frequently than every 3 weeks. Not for cattle producing milk for human consumption. Not for use in poultry.",
    withdrawal: "Meat: 60 days",
    storage: "Store below 30°C, away from direct sunlight.",
    packaging: "Glass vial, 100 ml.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "bekatest-10-injection",
    name: "Bekatest 10%",
    subtitle: "Injectable solution",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Clanobutin Sodium",
    composition:
      "Each 1 ml contains:\nClanobutin sodium 106.4 mg\n(equivalent to Clanobutin base 100 mg)",
    properties:
      "A Clanobutin derivative that stimulates secretory activity of the digestive exocrine glands across species — used for digestive disorders in cattle, sheep, goats, horses, dogs and cats, and to stimulate hepatic bile secretion.",
    indications:
      "Cattle, sheep & goats: primary indigestion (ruminal acidosis, contaminated feed, rapid diet change, rumen distension) and secondary indigestion (post-operative recovery, acetonaemia, pregnancy toxaemia). Horses: indigestion from overfeeding, constipation, intestinal atony, gas colic. Dogs: indigestion, constipation, intestinal atony, exocrine pancreatic insufficiency.",
    dosage:
      "Given once or twice on 2 successive days, I.M.\nCattle & horses: 10 ml / 100 kg body weight.\nSheep & goats: 5 ml / 25 kg body weight.\nDogs & cats: 1 ml / 5 kg body weight.",
    warnings:
      "Not for lactating animals. Not for cases of bile or pancreatic duct obstruction. Oral magnesium sulphate advised in cattle to protect against gall bladder rupture. Tremor, sweating and diarrhoea may occur as side effects. I.M. route only. Do not use after expiry date.",
    withdrawal: "Meat: 3 days",
    storage: "Store in a cool place, away from heat, light and children.",
    packaging: "Glass vials of 10, 30, 50, 100 & 250 ml.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "dexa-phen-injection",
    name: "Dexa-Phen",
    subtitle: "Injectable solution",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Phenylbutazone / Dexamethasone",
    composition:
      "Each 100 ml contains:\nPhenylbutazone 18 g\nDexamethasone 0.035 g",
    properties:
      "Phenylbutazone is a powerful non-steroidal anti-inflammatory, analgesic and antipyretic acting mainly in early inflammation. Dexamethasone is a synthetic corticosteroid with anti-inflammatory and anti-allergic activity acting in later stages. Together, an anti-inflammatory for cattle, calves, horses and foals.",
    indications:
      "Alleviation of pain and inflammation from musculoskeletal disorders and colic; combined with antibiotics for pneumonia, mastitis and metritis.",
    dosage:
      "Cattle, horses & dogs: deep I/M or slow I/V.\nAdults: 20 ml on day 1, then 10 ml daily for up to 4 days.\nCalves & foals: 6–10 ml on day 1, repeated every other day as needed.",
    warnings:
      "Not for lactating animals. Avoid in cardiac, hepatic or renal insufficiency, or advanced gestation. Gastritis and haemoglobinuria may occur with long-term treatment.",
    withdrawal: "Meat: 21 days",
    storage: "Store between 10–25°C, away from direct sunlight.",
    packaging: "Glass vials, 100 ml. Made in Egypt.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "tonotest-injection",
    name: "Tonotest",
    subtitle: "Injectable solution",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Toldimfos Sodium",
    composition:
      "Each 1 ml contains:\nToldimfos sodium 200 mg\n(sodium-4-dimethylamino-2-methyl phosphonate)",
    properties:
      "An aromatic phosphorus compound; its precise mode of action is unknown but is understood to arise from multiple stimulation of body metabolism.",
    indications:
      "Cattle, sheep, goats, horses, dogs & cats: prevention and treatment of phosphorus deficiency, tonic/restorative for general metabolic disorders, skeletal defects (rickets, osteomalacia, fracture healing with vitamin D therapy), tetany and paresis linked to calcium/magnesium/phosphorus metabolism, and general debility including post-parturient and neonatal cases.",
    dosage:
      "I.V., I.M. or S.C.\nEquine & cattle: adults 1 ml / 50 kg (up to 1 ml / 10 kg for cattle on first intervention); young 1–2 ml / 10 kg.\nSheep & goats: adults 0.5–1 ml / 10 kg; young 0.5 ml / kg.\nDogs & cats: 0.5–1 ml / kg.\nRepeat daily or every 2–3 days for 5–10 days per veterinary judgement; chronic cases may need 5–10 injections.",
    warnings:
      "Use within 14 days of first withdrawal from the vial. Do not use in cases of hypersensitivity to the active substance or excipients. Overdose risks electrolyte imbalance.",
    withdrawal: "Meat, milk: zero days",
    storage: "Do not store above 25°C.",
    packaging: "50, 100 & 250 ml multidose glass bottles.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "oxytest-30-la-injection",
    name: "Oxytest 30 L.A.",
    subtitle: "Injectable solution",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Oxytetracycline HCl",
    composition:
      "Each 100 ml contains:\nOxytetracycline HCl 32.37 g\n(equivalent to oxytetracycline 30 g)",
    properties:
      "A broad-spectrum tetracycline antibiotic that irreversibly binds 30S ribosomes to inhibit protein synthesis; active against many Gram-positive and Gram-negative bacteria, mycoplasmas, rickettsiae and chlamydiae.",
    indications:
      "Cattle: pasteurellosis and pneumonia caused by oxytetracycline-sensitive organisms; foul-in-the-foot. Pigs: pneumonia caused by Pasteurella spp. and control of atrophic rhinitis.",
    dosage:
      "Deep I.M.\nStandard dose: 20 mg/kg body weight for 3–4 days (1 ml product / 15 kg).\nHigh dose: 30 mg/kg body weight for 5–6 days (1 ml product / 10 kg).",
    warnings:
      "Use during tooth and bone development, including late pregnancy, may cause discoloration. Use a separate injection site for concurrent treatments. Not for newly born animals. Do not dilute. Contraindicated in hypersensitivity to tetracyclines. Should not be co-administered with antacids or mineral supplements, which reduce antibiotic absorption.",
    withdrawal:
      "20 mg/kg dose — Cattle meat: 28 days, Pigs meat: 14 days. 30 mg/kg dose — Cattle meat: 35 days, Pigs meat: 28 days. Cattle milk: 10 days.",
    storage: "Store in a cool, dry place below 30°C, protected from light.",
    packaging:
      "Glass vials of 30, 50, 100 & 250 ml, chlorobutyl stopper with aluminium cap.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "albendest-5",
    name: "Albendest 5%",
    subtitle: "Oral suspension",
    category: "large-animals",
    form: "oral",
    activeIngredient: "Albendazole",
    composition: "Each 1 ml contains:\nAlbendazole 50 mg",
    properties:
      "A benzimidazole that disrupts parasite energy metabolism by binding tubulin, preventing nutrient uptake. Active against gastrointestinal roundworms, lungworms and tapeworms in cattle and sheep, including Type II ostertagiosis.",
    indications:
      "Gastrointestinal roundworms (Haemonchus, Type II ostertagiosis), lungworms (Dictyocaulus), tapeworms (Moniezia), and adult liver flukes (Fasciola).",
    dosage:
      "By mouth.\nCattle: roundworms & tapeworms 7.5 mg/kg (1.5 ml/10 kg); adult flukes + roundworms + tapeworms 10 mg/kg (2 ml/10 kg).\nSheep: roundworms & tapeworms 5 mg/kg (1 ml/10 kg); adult flukes + roundworms + tapeworms 7.5 mg/kg (1.5 ml/10 kg).",
    warnings:
      "Do not exceed the fluke-and-worm dose in cows during the first month of pregnancy. Coughing may occur for some weeks post-treatment in cattle with severe lung damage. Avoid concurrent ruminal boluses. In ewes at 7.5 mg/kg, avoid during mating and up to 1 month after rams are removed. Not for sheep producing milk for human consumption.",
    withdrawal: "Cattle: meat 20 days, milk 3 days. Sheep: meat 8 days.",
    storage: "Store in a cool, dry place below 30°C, out of reach of children.",
    packaging: "100 & 200 ml plastic container.",
    manufacturer: "Arab Company for Medical Products (Arabcomed) for Drugest Pharmaceuticals",
  },
  {
    slug: "nemafluke",
    name: "Nemafluke",
    subtitle: "Oral suspension",
    category: "large-animals",
    form: "oral",
    activeIngredient: "Triclabendazole / Levamisole HCl",
    composition:
      "Each 1 ml contains:\nTriclabendazole 120 mg\nLevamisole HCl 75 mg",
    properties:
      "Levamisole HCl paralyses nematodes via cholinergic action and inhibits fumarate reductase. Triclabendazole blocks glucose utilisation, depleting the parasite's glycogen and ATP reserves.",
    indications:
      "Acute, subacute and chronic fascioliasis (F. hepatica and F. gigantica) in sheep, goats and cattle; adult and immature roundworms (Haemonchus, Ostertagia, Cooperia, Trichostrongylus, Bunostomum, Oesophagostomum); adult and immature lungworms.",
    dosage: "Oral drench: 5 ml / 50 kg body weight (12 mg triclabendazole + 7.5 mg levamisole HCl / kg).",
    warnings: "Not for cattle producing milk for human consumption. Shake well before use.",
    withdrawal: "Cattle: 28 days",
    storage: "Store below 25°C, away from direct sunlight.",
    packaging: "500 ml and 1, 2, 3, 4, 5 litre containers.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "nova-500",
    name: "Nova 500",
    subtitle: "Injectable solution",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Dipyrone",
    composition: "Each 1 ml contains:\nDipyrone 500 mg",
    properties:
      "A pyrazolone derivative with marked analgesic, antipyretic and mild anti-inflammatory activity, and antispasmodic effect on bradykinin-induced intestinal spasm.",
    indications:
      "Pain relief (colic, neuritis, neuralgia, tendovaginitis, calming during examination); inflammatory conditions (arthritis, lumbago, rheumatic disorders); spastic conditions (colic, intestinal and smooth-muscle spasm).",
    dosage:
      "I.M. or slow I.V.\nCattle: 5 ml / 50 kg body weight. Horses: 10–20 ml (5–10 g) per adult horse. Pigs: 1 ml / 10 kg body weight. Dogs & cats: 0.6 ml / 10 kg body weight.",
    warnings:
      "Not for cattle producing milk for human consumption. Do not co-administer with phenylbutazone or barbiturates — combination with chlorpromazine may cause serious hypothermia. In horses, avoid within 5 days of racing. Check blood picture with prolonged use. Not for poultry. Total daily dose in dogs/cats should not exceed 300 mg/animal. I.M. or slow I.V. only — not S/C.",
    sideEffects: "Agranulocytosis and leucopenia may develop at high doses.",
    withdrawal: "Meat: 28 days",
    storage: "Store in a cool place, away from direct sunlight.",
    packaging: "Glass vials of 30, 50, 100, 200, 250 & 500 ml. Made in Egypt.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "sulphaject-33-3",
    name: "Sulphaject 33.3",
    subtitle: "Injectable solution",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Sulphadimidine Sodium",
    composition:
      "Each 100 ml contains:\nSulphadimidine sodium 33.3 g\n(equivalent to Sulphadimidine base 30 g)",
    properties:
      "A sulphonamide that blocks conversion of PABA to dihydrofolic acid in sensitive micro-organisms, interfering with nucleic-acid synthesis without affecting host cells.",
    indications:
      "Broad range of infections caused by sensitive Gram-positive and Gram-negative bacteria (Pasteurella, Salmonella, E. coli, Fusobacterium necrophorum, Streptococcus spp.) affecting the respiratory, urogenital or gastrointestinal systems or soft tissue — bacterial pneumonia, bovine respiratory disease complex, colibacillosis, necrotic dermatitis, calf diphtheria, acute mastitis and metritis.",
    dosage:
      "200 mg/kg body weight, then reduced to 100 mg/kg.\nCattle, buffaloes & horses: 1st dose 200 ml / 300 kg, 2nd dose 100 ml / 300 kg, for 5 days.\nCalves: 1st dose 40 ml / 60 kg, 2nd dose 20 ml / 60 kg, for 5 days.\nSheep & goats: 1st dose 20 ml / 30 kg, 2nd dose 10 ml / 30 kg, for 5 days.",
    warnings:
      "By I.M. or slow I.V. Not for sulphonamide hypersensitivity. I.V. use in horses may risk anaphylactic shock. Avoid in renal or hepatic impairment. Overdose may cause muscular twitching, coma or liver damage. Maintain adequate fluid intake during treatment. Transient injection-site irritation possible. Not for lactating animals.",
    withdrawal: "Meat: 10 days",
    storage: "Store in a cool place, away from direct sunlight.",
    packaging: "Amber glass vial, 100 ml.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "streptotest-injection",
    name: "Streptotest",
    subtitle: "Injection",
    category: "large-animals",
    form: "injection",
    activeIngredient: "Streptomycin Sulphate",
    composition:
      "Streptomycin sulphate 200 g\n(equivalent to streptomycin base 160 g)",
    properties:
      "An aminoglycoside with bactericidal activity mainly against Gram-negative bacteria, inhibiting protein synthesis at the 30S ribosomal subunit and disrupting RNA coding.",
    indications:
      "Respiratory and urogenital infections caused by Gram-negative bacteria sensitive to streptomycin, including E. coli, Salmonella and Pasteurella.",
    dosage:
      "Active ingredient, I.M., cattle/horse/sheep/goat: 10 mg streptomycin base / kg, once daily for 3–5 days.\nWhole product: reconstitute 200 g in 500 ml water for injection (32% solution, 320 mg base / ml).\nCattle & horse: 3 ml / 100 kg, I.M. Sheep & goat: 0.75 ml / 20 kg.",
    warnings:
      "Not to be combined with other aminoglycosides. Ototoxic effect is potentiated by co-administration of ethacrynic acid, mannitol, furosemide or other diuretics. Not for cattle producing milk for human consumption. Hypersensitivity may occur in some species. Not for use in poultry or pregnant animals.",
    sideEffects:
      "None at recommended doses; allergy, fever or skin rash from hypersensitivity possible. May affect the 8th cranial nerve, causing auditory impairment or deafness. Nephrotoxicity is the main adverse event.",
    withdrawal: "Meat: 30 days",
    storage: "Store in a cool place, away from direct sunlight.",
    packaging: "Glass bottle, 200 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "nifulin-forte-wdp",
    name: "Nifulin-Forte",
    subtitle: "Water dispersible powder",
    category: "large-animals",
    form: "powder",
    activeIngredient: "Oxytetracycline HCl / Metronidazole",
    composition:
      "Each 100 g contains:\nMetronidazole 20 g\nOxytetracycline HCl 23.5 g\n(equivalent to oxytetracycline base 20 g)",
    properties:
      "Combines oxytetracycline, active against a wide range of Gram-positive and Gram-negative bacteria, mycoplasma, rickettsiae, chlamydia and some protozoa, with metronidazole, active against obligate anaerobes and protozoa (Trichomonas, Giardia, Entamoeba histolytica).",
    indications:
      "Enteric and systemic anaerobic infections in horses; giardiasis and trichomoniasis in dogs and cats; respiratory, digestive and urogenital infections sensitive to oxytetracycline.",
    dosage:
      "Given orally via drinking water.\nDogs: 2.5 g / 10 kg, twice daily for 5 days.\nCats: 0.5 g / 5 kg, twice daily for 10 days.\nFoals: 5–6.25 g / 50 kg, twice daily.",
    warnings:
      "Not for meat, milk or egg-producing animals. Not for debilitated, pregnant or nursing animals. Use with care in renal or hepatic impairment. Weakness, nausea, vomiting and diarrhoea may occur with high or prolonged doses.",
    storage: "Store in a dry place, away from direct sunlight.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },

  // ---------------- Poultry ----------------
  {
    slug: "tylotest",
    name: "Tylotest",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Tylosin Tartrate",
    composition:
      "Each 100 g contains:\nTylosin tartrate 100 g\n(equivalent to tylosin 92.4 g)",
    properties:
      "A macrolide antibiotic inhibiting bacterial protein synthesis via binding to 50S ribosomal subunits; active against Gram-positive organisms (Actinomyces, Erysipelothrix rhusiopathiae), some Gram-negatives (Pasteurella, Fusobacterium necrophorum) and spirochetes.",
    indications:
      "Pre-ruminant calves: pneumonia caused by Mycoplasma spp. once established in the herd. Broiler chickens: chronic respiratory disease (CRD) from M. gallisepticum and M. synoviae; treatment and prevention of necrotic enteritis (Clostridium perfringens). Turkeys: infectious sinusitis from M. gallisepticum.",
    dosage:
      "By addition to drinking water.\nCalves: 10–20 mg/kg twice daily for 7–14 days (0.54–1.08 g product / 50 kg twice daily).\nTurkeys: 75–100 mg/kg daily for 3–5 days (0.81–1.082 g / 10 kg, ~1 litre, per day).\nBroilers: 75–100 mg/kg daily for 3–5 days (0.81–1.082 g / 10 kg per day).",
    warnings:
      "Operators should wear protective clothing and avoid skin contact — exposure may cause a rash. Not for layers producing eggs for human consumption. Interacts with clindamycin (increased antagonism).",
    sideEffects: "Diarrhoea, epigastric pain.",
    withdrawal:
      "Calves (meat & offal): 12 days. Turkeys (meat & offal): 2 days, eggs: zero days. Broilers (meat & offal): 1 day, eggs: zero days.",
    storage: "Store below 30°C in a dry place; use directly after opening.",
    packaging: "HDPE bag, 100, 200, 250, 500 g & 1 kg plastic jar.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Co.",
  },
  {
    slug: "doxytest-40-wsp",
    name: "Doxytest 40",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Doxycycline HCl",
    composition:
      "Each 100 g contains:\nDoxycycline HCl 52 g\n(equivalent to doxycycline base 40 g)",
    indications:
      "Poultry & turkey: CRD from mycoplasma/E. coli infection, infectious coryza, air sacculitis, fowl cholera, colibacillosis, salmonellosis, chlamydia and rickettsia infections. Calves & lambs: respiratory, urogenital and digestive infections sensitive to doxycycline.",
    dosage:
      "Poultry: 1 g / 4 litres of drinking water daily for 3–5 days.\nCalves & lambs: 0.25 g / 20 kg body weight in drinking water daily for 3–5 days.",
    warnings: "Not for layers. Not for lactating animals.",
    withdrawal: "Poultry: 10 days. Calves & lambs: 21 days.",
    storage: "Store in a cool, dry place at room temperature.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "maduratest",
    name: "Maduratest",
    subtitle: "Premix, Maduramicin 1%",
    category: "poultry",
    form: "powder",
    activeIngredient: "Maduramicin Ammonium",
    composition:
      "Each 1 kg contains:\nMaduramicin ammonium 12.20 g\n(equivalent to maduramicin base 10 g)",
    properties:
      "A broad-spectrum ionophore anticoccidial effective against Eimeria tenella, E. acervulina, E. necatrix, E. maxima, E. mivati, E. brunetti and other coccidia in poultry, disrupting ion transport across the coccidial cell membrane and targeting sporozoites and merozoites.",
    indications: "Prevention of coccidiosis in broilers.",
    dosage:
      "Active ingredient: 5 ppm in finished feed.\nWhole product: 0.5 kg / tonne of feed, continuously as the sole ration.",
    warnings:
      "Prohibited for use in layers, as the compound accumulates in eggs. Do not administer simultaneously with tiamulin, or within 7 days before or after tiamulin. Store in a cool, dry place away from sunlight. Mix thoroughly with feed.",
    sideEffects:
      "None at recommended doses. Toxic effects possible at high doses in laying hens and to the embryo. Toxic to horses and equines.",
    withdrawal: "Broilers: 5 days",
    storage: "Store in a cool, dry place away from sunlight.",
    packaging: "Laminated bag, 500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "spiratest-39-miu-wsp",
    name: "Spiratest 39 MIU",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Spiramycin Adipate",
    composition: "Each 100 g contains:\nSpiramycin base 39 MIU",
    properties:
      "A macrolide antibiotic with bacteriostatic effect via ribosomal binding and blocked protein synthesis; strong activity against Mycoplasma gallisepticum, M. synoviae and M. meleagridis, as well as staphylococci and streptococci. Well absorbed and diffuses quickly to lung, air sac and ovarian tissue.",
    indications:
      "Poultry & turkey: avian mycoplasmosis (CRD, M. gallisepticum), infectious synovitis (M. synoviae), infectious sinusitis (M. meleagridis), streptococcal and staphylococcal arthritis.",
    dosage:
      "75,000 IU/kg body weight.\nWhole product: 20 g / 100 kg body weight (2 g/litre) dissolved in drinking water daily for 3–5 days. See attached pamphlet.",
    withdrawal: "5 days",
    storage: "Store in a dry, cool place away from direct sunlight.",
    packaging: "100 g – 500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Co.",
  },
  {
    slug: "chlortetracycline-500",
    name: "Chlortetracycline 500",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Chlortetracycline HCl",
    composition:
      "Each 1 g contains:\nChlortetracycline HCl 575 mg\n(equivalent to chlortetracycline base 500 mg)",
    properties:
      "A bacteriostatic tetracycline for a wide variety of infections caused by Gram-positive (Corynebacterium, Staphylococcus, Streptococcus spp.) and Gram-negative bacteria (E. coli, Salmonella, Haemophilus, Pasteurella spp.), Mycoplasma, spirochaetes, rickettsiae and some protozoa; large doses may be bactericidal. Inhibits protein synthesis at the 30S ribosomal subunit.",
    indications:
      "Poultry: CRD due to Mycoplasma and/or E. coli, enteritis due to E. coli and Salmonella spp., fowl cholera (Pasteurella multocida). Calves, lambs & kids: scour and pneumonia.",
    dosage:
      "General dose: 20 mg/kg body weight.\nPoultry: 2 g / 5 litres of drinking water daily for 3–5 days.\nCalves, lambs & kids: 0.5 g / 12.5 kg body weight once daily for 3–5 days.",
    warnings: "Not for ruminating animals. Not for layers. Not for renal impairment.",
    sideEffects:
      "None at recommended doses; long treatment in young animals may affect teeth and bones through calcium chelation.",
    withdrawal: "Poultry: 7 days. Calves, lambs & kids: 21 days.",
    storage: "Store in a dry place away from direct sunlight.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "eimeria-nil",
    name: "Eimeria-Nil",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Amprolium HCl / Ethopabate",
    composition:
      "Each 100 g contains:\nAmprolium hydrochloride 26.3 g\n(equivalent to amprolium base 25 g)\nEthopabate 1.6 g",
    properties:
      "Amprolium exerts its anticoccidial effect by blocking thiamine (vitamin B1) uptake by the coccidial cell, acting on early first-generation merozoites and schizonts. Ethopabate interferes with folic-acid synthesis, giving a strong synergistic effect against coccidial cells.",
    indications:
      "Treatment of coccidiosis in chickens and turkeys caused by Eimeria tenella, E. acervulina, E. maxima, E. necatrix and E. brunetti, whether caecal or intestinal.",
    dosage:
      "Active ingredient: 12–25 mg amprolium base / kg body weight in drinking water, once daily for 5–7 days.\nWhole product: 0.75–1.5 g / litre of drinking water, once daily for 5–7 days.",
    warnings: "Not for use with layers. Not for use with folic acid or thiamine supplements.",
    sideEffects: "May produce a thiamine-deficiency-like effect.",
    withdrawal: "5 days before slaughter",
    storage: "Store in a dry place, away from sunlight.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "colistin-400",
    name: "Colistin 400",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Colistin Sulphate",
    composition:
      "Each 1 g contains:\nColistin sulphate 166.66 mg\n(equivalent to colistin 133.3 mg, ~4 MIU)",
    properties:
      "A bactericidal polypeptide of the polymyxin group, disrupting bacterial cell-membrane phospholipids and permeability. Active against Gram-negative bacteria including E. coli and Salmonella spp.",
    indications:
      "Gastrointestinal infections: colibacillosis (E. coli) and salmonellosis susceptible to colistin, in non-ruminant calves, swine and poultry.",
    dosage:
      "Orally via drinking water.\nActive ingredient — non-ruminant calves & swine: 102,500 IU/kg; poultry: 61,500 IU/kg.\nWhole product — calves & swine: 0.025 g/kg every 12 hours for 3 days; poultry: 0.0153 g/kg daily for 3 days (≈0.15 g/litre drinking water).",
    warnings:
      "Prepare medicated water fresh daily. Avoid combination with muscle relaxants. Not to be used with calcium, magnesium or manganese cations, or unsaturated fatty acids, which antagonise colistin.",
    sideEffects: "Nausea, reduced appetite.",
    withdrawal: "Non-ruminant calves: 14 days. Swine: 7 days. Poultry & eggs: zero days.",
    storage: "Store in a dry place below 30°C; use immediately after reconstitution.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Co.",
  },
  {
    slug: "oxytest-40",
    name: "Oxytest 40%",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Oxytetracycline HCl",
    composition:
      "Each 1 g contains:\nOxytetracycline hydrochloride 431.7 mg\n(equivalent to oxytetracycline base 400 mg)",
    properties:
      "A broad-spectrum antibiotic active against Gram-positive and Gram-negative, aerobic and anaerobic bacteria, mycoplasma, chlamydia and rickettsiae, blocking the 30S ribosomal subunit and inhibiting protein synthesis.",
    indications:
      "Broilers: arthritis (Staphylococcus aureus), CRD (Mycoplasma gallisepticum), infectious enteritis (E. coli), fowl cholera (Pasteurella multocida), fowl coryza (Haemophilus paragallinarum), gangrenous dermatitis (Clostridium spp.), typhoid/paratyphoid (Salmonella spp.). Pre-ruminating calves: bovine pneumonia and scours/neonatal diarrhoea from sensitive organisms.",
    dosage:
      "By addition to drinking water.\nBroilers: 20 mg/kg body weight for 3–5 days (0.5 g product / litre).\nCalves: 10–30 mg/kg, 1–2 times daily (2.5–7.5 g product / 100 kg, 1–2 times daily).",
    warnings:
      "Dissolve in water before use. Avoid prolonged or repeated use. Do not use in laying birds producing eggs for human consumption.",
    sideEffects: "Gastrointestinal disorder; less frequently, allergic and photosensitivity reactions.",
    withdrawal: "Meat & offal: 7 days. Not for use in laying birds producing eggs for human consumption.",
    storage: "Store in a cool, dry place below 30°C.",
    packaging: "HDPE bag, 25 g – 1000 g and 1–25 kg plastic jar.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "coccidest",
    name: "Coccidest",
    subtitle: "Oral solution",
    category: "poultry",
    form: "oral",
    activeIngredient: "Toltrazuril",
    composition: "Each 1 ml contains:\nToltrazuril 25 mg",
    properties:
      "Toltrazuril disrupts the fine structure of coccidial development stages, causing swelling of the endoplasmic reticulum and Golgi apparatus, nuclear abnormalities, and reduced respiratory-chain enzyme activity, with no anticoagulant, analgesic or cardiac effects observed in laboratory studies.",
    indications:
      "Treatment and control of coccidiosis, active against all intestinal stages of susceptible coccidia; supports development of natural immunity in breeder and layer replacement stock under continuous challenge.",
    dosage:
      "Orally in drinking water.\nActive ingredient: 7 mg/kg body weight.\nWhole product: 280 ml / 100 kg body weight in drinking water for 25 successive days (2.5–3 ml/litre).",
    warnings:
      "Compatible with antibiotics such as enrofloxacin, ampicillin, tetracycline, tiamulin and tylosin. Not for use in chickens producing eggs for human consumption.",
    sideEffects: "None at the recommended dose.",
    withdrawal: "21 days",
    storage: "Store below 30°C.",
    packaging: "HDPE bottle, 25 ml – 1000 ml and 1–25 litre.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Co.",
  },
  {
    slug: "quinoxaline-500",
    name: "Quinoxaline 500",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Sulphaquinoxaline Sodium",
    composition:
      "Each 100 g contains:\nSulphaquinoxaline sodium 63 g\n(equivalent to sulphaquinoxaline base 50 g)",
    properties:
      "A sulphonamide antibacterial that blocks conversion of PABA to dihydrofolic acid in sensitive bacteria and coccidia, without affecting host cells (which use dietary folic acid).",
    indications:
      "Poultry, turkeys & rabbits: wide variety of infections from sensitive Gram-positive (Staphylococcus, Streptococcus, Corynebacterium) and Gram-negative bacteria (Pasteurella, Salmonella, E. coli). Also effective against coccidiosis (Eimeria maxima, E. mivati, E. necatrix, E. brunetti; weaker on E. tenella in broilers) and hepatic coccidiosis in rabbits.",
    dosage:
      "Given orally via drinking water.\nActive ingredient — poultry & turkeys: 50 mg/kg for 3–5 days.\nWhole product — poultry: 1 g / litre of drinking water daily for 3–5 days.",
    warnings: "Not for ruminating animals. Not for layers. Do not combine with penicillins or chloramphenicol.",
    sideEffects: "Long use may cause crystalluria, nephrotoxicity or bleeding.",
    withdrawal: "Poultry & turkey: 10 days. Treatment should not exceed 7 days.",
    storage: "Store in a cool, dry place, away from direct sunlight.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
  {
    slug: "supermox-40",
    name: "Supermox 40",
    subtitle: "Water soluble powder",
    category: "poultry",
    form: "powder",
    activeIngredient: "Amoxicillin Trihydrate",
    composition:
      "Each 100 g contains:\nAmoxicillin trihydrate 48.6 g\n(equivalent to amoxicillin base 40 g)",
    properties:
      "A broad-spectrum antibiotic that collapses the bacterial cytoplasmic membrane. Active against Gram-positive (Clostridium, Staphylococcus, Streptococcus, Corynebacterium) and Gram-negative bacteria (E. coli, Salmonella, Pasteurella, Haemophilus).",
    indications:
      "Poultry: clostridial infections (necrotic enteritis), colisepticaemia, fowl cholera, salmonellosis, coryza. Calves, lambs & kids: scour due to E. coli/Salmonella, staphylococcal and streptococcal infections, pneumonia and urogenital infections.",
    dosage:
      "Given orally via drinking water.\nPoultry: 20 mg amoxicillin base / kg (100 g product / 2000 kg body weight, ~1 g / 2 litres) daily for 3–5 days (5 days for salmonella infections).\nCalves, lambs & kids: 10 mg amoxicillin base / kg (0.5 g / 20 kg) twice daily for 3–5 days (5 days for salmonella infections).",
    warnings:
      "Not for prophylactic use where infection may spread. Not for layers. For calves, lambs and kids only among ruminants. Contraindicated with a prior history of beta-lactam allergy.",
    withdrawal: "Calves, lambs & kids: 14 days. Poultry: 7 days.",
    storage: "Store in a dry place away from direct sunlight.",
    packaging: "500 g.",
    manufacturer: "Arabcomed for Drugest Pharmaceuticals Company",
  },
];

export function getProductsByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(category: Category, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}

export interface PipelineProduct {
  name: string;
  form: string;
  composition: string;
}

export const pipelineProducts: PipelineProduct[] = [
  {
    name: "Mycinotetra",
    form: "Powder for oral solution",
    composition:
      "Each 1 g contains: Oxytetracycline (as HCl) 0.20 g; Neomycin (as sulphate) 0.20 g.",
  },
  {
    name: "Eprindest",
    form: "Injectable solution",
    composition: "Each 1 ml contains: Eprinomectin 50 mg.",
  },
  {
    name: "Tylospectogest",
    form: "Injectable solution",
    composition:
      "Each 1 ml contains: Spectinomycin dihydrochloride pentahydrate (eq. to 100 mg base); Tylosin tartrate (eq. to 50 mg base).",
  },
  {
    name: "Sulbac",
    form: "Water soluble powder",
    composition:
      "Each 1 kg contains: Dimetridazole 100 g; Sulfadimethoxine sodium 100 g (eq. to 93.37 g base); Vitamin K3 (MSB) 50 g.",
  },
  {
    name: "Phenollen",
    form: "Water soluble powder",
    composition:
      "Phenoxymethylpenicillin potassium 887 mg (eq. to 800 mg phenoxymethylpenicillin).",
  },
  {
    name: "Amprotridine",
    form: "Water soluble powder",
    composition:
      "Each 100 g contains: Amprolium HCl 21.5 g (eq. to 20 g base); Sulphadimidine sodium 43.0 g (eq. to 40 g base); Ethopabate 1.0 g; Trimethoprim 8.0 g; Vitamin K3 3.0 g.",
  },
  {
    name: "Erythrocyano",
    form: "Oral solution",
    composition: "Each 100 ml contains: Erythromycin thiocyanate 26.7 g (eq. to 25 g base).",
  },
  {
    name: "Lincodest",
    form: "Water soluble powder",
    composition: "Each 100 g contains: Lincomycin HCl 40 g (eq. to 35.3 g base).",
  },
  {
    name: "Erythroresp",
    form: "Powder for oral solution",
    composition:
      "Each 1 g contains: Erythromycin (thiocyanate) 50 mg; Trimethoprim 20 mg; Sulfadiazine (sodium salt) 100 mg; Bromhexine (hydrochloride) 2 mg.",
  },
  {
    name: "Abadest",
    form: "Injectable solution",
    composition: "Each 1 ml contains: Abamectin 10 mg; Clorsulon 100 mg.",
  },
  {
    name: "Drugoben",
    form: "Injectable, 20 ml vial",
    composition:
      "Benzylpenicillin sodium 3,600,000 IU; Benzylpenicillin procaine 2,400,000 IU; Dihydrostreptomycin sulphate 6.6 g.",
  },
  {
    name: "Dimetridazole",
    form: "Water soluble powder",
    composition:
      "Each 1 g contains: Dimetridazole 100 mg; Pyrimethamine 5 mg; Sulphaquinoxaline sodium 60 mg (eq. to 55.9 mg base).",
  },
];
