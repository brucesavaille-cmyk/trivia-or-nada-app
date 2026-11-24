/* ============================================================
   TRIVIA OR NADA — game script, part 3 of 6 (speed pass).
   The game's single script now ships as six sequential files
   (assets/game-1.js ... assets/game-6.js) so the cover paints
   from the small index.html first and these files stream in
   behind it. The bootstrap in index.html loads them with
   async=false: they download in parallel and EXECUTE strictly
   in order, exactly as the one original script ran — statement
   order, pool contents, and every pool's internal order are
   unchanged (challenge links and Daily seeds depend on it).
   Part 1 holds every function declaration plus the hoisted
   variable bindings; parts 2-6 hold the executable statements
   (the question banks and the code woven through them) in
   their original order. Do not reorder parts or statements.
   ============================================================ */
"use strict";

/* ================= LEGEND-TIER BANKS — MOVED TO A CHUNK (speed pass, 2026-11-14) =================
   The five Legend-tier pools (SUPERHARD, EXTREMEHARD,
   LUDICROUSHARD, IMPOSSIBLEHARD, GENIUSHARD — 500 typed
   questions) now live in assets/bank-legend.js, loaded on
   demand: the ready gate no longer waits for them. The Legend
   game and the creator Legend/Bonus games hold their tap
   while the chunk lands (see withLegendBank in game-1.js);
   a background prefetch after the cover is ready, and at
   every game start, means it is almost always already here.
   Until it lands the pools stand empty, which every dealer
   already tolerates — the bonus dealer simply fills from its
   Very Hard fallbacks. The chunk applies the same
   withTypedForm pass the core used to run over these pools,
   so the dealt questions are identical. */
SUPERHARD=[]; EXTREMEHARD=[]; LUDICROUSHARD=[]; IMPOSSIBLEHARD=[]; GENIUSHARD=[];

var NEWCAT = {
law:[
  cmc("Law", "In US law, a 'tort' is best described as what?", ["A criminal charge", "A civil wrong that causes harm", "A type of contract", "A court order"], 1),
  cmc("Law", "What does the Latin legal phrase 'pro bono publico' mean in practice for a lawyer's client?", ["The client pays double", "The work is done for free for the public good", "The case is heard in public", "The verdict is automatic"], 1),
  cmc("Law", "In a US trial, the 'burden of proof' rests mainly on whom in a criminal case?", ["The defendant", "The prosecution", "The judge", "The jury"], 1),
  cmc("Law", "Which US amendment guarantees the right to a lawyer in criminal cases, as read by the Supreme Court?", ["The Fifth Amendment", "The Sixth Amendment", "The Eighth Amendment", "The Tenth Amendment"], 1),
  cmc("Law", "A 'subpoena' is a court order that does what?", ["Frees a prisoner", "Compels a person to appear or produce evidence", "Dismisses a case", "Seizes property permanently"], 1),
  cmc("Law", "In contract law, 'consideration' means what?", ["A polite review period", "Something of value exchanged by both sides", "A judge's opinion", "A written signature only"], 1),
  cmc("Law", "Which court is the highest in the US federal system?", ["The Court of Appeals", "The Supreme Court", "The District Court", "The Claims Court"], 1),
  cmc("Law", "What is 'perjury'?", ["Stealing from an employer", "Lying under oath", "Breaking a contract", "Trespassing on land"], 1),
  cmc("Law", "In the US, a 'felony' is best described as what?", ["A minor traffic offense", "A serious crime, usually punishable by over a year in prison", "A civil lawsuit", "A parking violation"], 1),
  cmc("Law", "Which US amendment protects freedom of religion, speech, press, assembly, and petition?", ["The First Amendment", "The Second Amendment", "The Third Amendment", "The Fourth Amendment"], 0),
  cmc("Law", "What is the term for a law that punishes an act that was legal when it was done?", ["Ex post facto law", "Habeas corpus", "Bill of attainder", "Amicus brief"], 0),
  cmc("Law", "In a lawsuit, 'damages' usually refers to what?", ["Damage to the courthouse", "Money paid to compensate for a loss", "A type of evidence", "Court fees"], 1),
  cmc("Law", "Which branch of the US government has the power to veto bills?", ["The judicial branch", "The executive branch", "The legislative branch", "The state governors"], 1),
  cmc("Law", "How many US senators does each state elect?", ["One", "Two", "Three", "It depends on population"], 1),
  cmc("Law", "What is the minimum age set by the US Constitution for the President?", ["25 years", "30 years", "35 years", "40 years"], 2),
  cmc("Law", "In US law, 'eminent domain' lets the government do what?", ["Arrest without charge", "Take private property for public use, with compensation", "Tax imports", "Pardon crimes"], 1),
  cmc("Law", "A 'notary public' is mainly authorized to do what?", ["Try court cases", "Witness and certify signatures on documents", "Arrest suspects", "Write legislation"], 1),
  cmc("Law", "Which famous 1973 US Supreme Court case recognized a constitutional right to abortion, later overturned in 2022?", ["Roe v. Wade", "Brown v. Board of Education", "Miranda v. Arizona", "Marbury v. Madison"], 0),
  cmc("Law", "What does 'innocent until proven...' complete in the famous legal presumption?", ["Guilty", "Charged", "Arrested", "Questioned"], 0),
  cmc("Law", "In the US Senate, how many votes are needed to override a presidential veto in Congress overall?", ["A simple majority in one house", "Two-thirds of both houses", "Three-fourths of the states", "A unanimous vote"], 1),
  cmc("Law", "The legal term 'liability' means what?", ["A type of insurance only", "Legal responsibility for something", "A courtroom seat", "A witness statement"], 1),
  cmc("Law", "Which document begins with the words 'We the People'?", ["The Declaration of Independence", "The US Constitution", "The Bill of Rights", "The Articles of Confederation"], 1),
  cmc("Law", "In criminal law, an 'accomplice' is a person who…", ["Solves the crime", "Helps another person commit a crime", "Testifies for the defense", "Serves on the jury"], 1),
  cmc("Law", "What is a 'class action' lawsuit?", ["A case heard in a classroom", "A suit brought by a group of people with the same claim", "A military trial", "An appeal to the Supreme Court"], 1),
  cmc("Law", "What is the term for the person a will leaves property to... in plain legal English, the person who inherits is called what?", ["The executor", "The beneficiary", "The testator", "The notary"], 1),
  cmc("Law", "In the US, which amendment in the Bill of Rights protects the right to bear arms?", ["The First Amendment", "The Second Amendment", "The Fourth Amendment", "The Seventh Amendment"], 1),
  cmc("Law", "A 'will' in law is a document that states what?", ["A person's medical history", "How a person's property should be handled after death", "A business partnership", "A rental agreement"], 1),
  cmc("Law", "What is 'arbitration' in dispute resolution?", ["A criminal trial by jury", "Settling a dispute outside court before a neutral decision-maker", "A type of appeal", "A prison sentence"], 1),
  cmc("Law", "In US law, 'defamation' covers libel and what other wrong?", ["Slander", "Perjury", "Larceny", "Arson"], 0),
  cmc("Law", "Which part of the US government confirms Supreme Court justices?", ["The House of Representatives", "The Senate", "The President alone", "State governors"], 1),
  cmc("Law", "The term 'jurisdiction' refers to a court's…", ["Building", "Authority to hear a case", "Jury size", "Filing fee"], 1),
  cmc("Law", "In a criminal case, a 'plea bargain' is an agreement in which the defendant…", ["Demands a jury trial", "Pleads guilty, often to a lesser charge, in exchange for terms", "Pays the judge", "Appeals the verdict"], 1),
  cmc("Law", "Which US amendment abolished poll taxes in federal elections?", ["The 23rd Amendment", "The 24th Amendment", "The 25th Amendment", "The 26th Amendment"], 1),
  cmc("Law", "What is the minimum legal drinking age in every US state, in years?", ["18", "21", "19", "20"], 1),
  cmc("Law","How many amendments does the United States Constitution have?", ["10","21","27","33"], 2, "The 27th Amendment, about congressional pay, was ratified in 1992."),
  cmc("Law","Which US constitutional amendment abolished slavery?", ["The 13th Amendment","The 14th Amendment","The 15th Amendment","The 19th Amendment"], 0, "Ratified in 1865, just after the Civil War."),
  cmc("Law","Which US constitutional amendment gave women the right to vote nationwide?", ["The 15th Amendment","The 19th Amendment","The 24th Amendment","The 26th Amendment"], 1, "Ratified in 1920."),
  cmc("Law","In US law, the writ of habeas corpus protects a person against what?", ["Double jeopardy","Self-incrimination","Unlawful imprisonment","Cruel punishment"], 2, "It lets a detained person challenge unlawful imprisonment before a court."),
  cmc("Law","Which 1954 US Supreme Court case ruled that racial segregation in public schools is unconstitutional?", ["Plessy v. Ferguson","Brown v. Board of Education","Miranda v. Arizona","Gideon v. Wainwright"], 1, "It overturned the 'separate but equal' doctrine of Plessy v. Ferguson (1896)."),
  cmc("Law","Which 1966 US Supreme Court case is the source of the famous 'Miranda rights' warning?", ["Marbury v. Madison","Miranda v. Arizona","Brown v. Board of Education","Roe v. Wade"], 1, "Police must tell detained suspects of their rights to silence and to an attorney."),
  cmc("Law","Which 1803 US Supreme Court case established the power of judicial review?", ["McCulloch v. Maryland","Gibbons v. Ogden","Marbury v. Madison","Dred Scott v. Sandford"], 2, "Chief Justice John Marshall's ruling let courts strike down laws that violate the Constitution."),
  cmc("Law","In a US criminal trial, the prosecution must prove its case to what standard?", ["By a preponderance of the evidence","By clear and convincing evidence","Beyond a reasonable doubt","By probable cause"], 2, "Civil cases use the lower 'preponderance of the evidence' standard."),
  cmc("Law","In criminal law, the Latin term 'mens rea' refers to what?", ["The guilty act","The guilty mind","The written law","The court record"], 1, "Its partner term, 'actus reus', is the guilty act itself."),
  cmc("Law","How many justices sit on the US Supreme Court?", ["Seven","Nine","Eleven","Twelve"], 1, "The Court's size has been set at nine since 1869."),
  cmc("Law","A law passed by a legislature is called what?", ["A verdict","An injunction","A statute","A subpoena"], 2),
  cmc("Law","In the US, the first ten amendments to the Constitution are known together as what?", ["The Federalist Papers","The Articles of Confederation","The Bill of Rights","The Preamble"], 2, "Ratified in 1791."),
  cmc("Law","In a civil lawsuit, the 'plaintiff' is the party who…", ["Is accused of a crime","Brings the case to court","Presides over the trial","Testifies as a witness"], 1),
  cmc("Law","Which US constitutional amendment lowered the voting age to 18?", ["The 23rd Amendment","The 24th Amendment","The 26th Amendment","The 27th Amendment"], 2, "Ratified in 1971, during the Vietnam War era."),
  cmc("Law","The legal principle of 'double jeopardy' protects a person from what?", ["Being tried twice for the same crime after an acquittal","Being arrested without a warrant","Being forced to testify against a spouse","Being sued in two states at once"], 0, "It comes from the Fifth Amendment."),
  cmc("Law","In common law, 'stare decisis' means courts should…", ["Decide every case as quickly as possible","Ignore written statutes","Follow earlier decisions — precedent","Let the jury set the sentence"], 2, "Latin for 'to stand by things decided'."),
  cmc("Law","Which US constitutional amendment guarantees freedom of speech and of the press?", ["The First Amendment","The Second Amendment","The Fourth Amendment","The Fifth Amendment"], 0),
  cmc("Law","Which US constitutional amendment protects against unreasonable search and seizure?", ["The First Amendment","The Third Amendment","The Fourth Amendment","The Sixth Amendment"], 2, "It is why police generally need a warrant or probable cause."),
  cmc("Law","Which US constitutional amendment guarantees a speedy and public trial?", ["The Fifth Amendment","The Sixth Amendment","The Seventh Amendment","The Eighth Amendment"], 1),
  cmc("Law","Which US constitutional amendment bans cruel and unusual punishment?", ["The Sixth Amendment","The Seventh Amendment","The Eighth Amendment","The Tenth Amendment"], 2),
  cmc("Law","The right to remain silent rests on which amendment's protection against self-incrimination?", ["The Fourth Amendment","The Fifth Amendment","The Sixth Amendment","The Fourteenth Amendment"], 1),
  cmc("Law","Which US constitutional amendment ended Prohibition by repealing the 18th?", ["The 19th Amendment","The 20th Amendment","The 21st Amendment","The 22nd Amendment"], 2, "Ratified in 1933 — the only amendment that repeals another."),
  cmc("Law","In US law, legal work done 'pro bono' is work done…", ["For the government only","Free of charge, for the public good","By a first-year lawyer","Under a pseudonym"], 1, "Short for the Latin 'pro bono publico' — for the public good."),
  cmc("Law","A person who dies without leaving a valid will is said to die…", ["Intestate","In contempt","In arrears","Unrepresented"], 0),
  cmc("Law","Under the US Constitution, which body has the sole power to impeach the president?", ["The Supreme Court","The House of Representatives","The Senate","The Cabinet"], 1, "The Senate then holds the trial; the House brings the charges."),
  cmc("Law","Which legal document authorizes police to search a specific place for specific items?", ["A subpoena","A warrant","An affidavit","An injunction"], 1, "A subpoena instead orders a person to appear or produce documents.")
],
chemistry:[
  cmc("Chemistry", "What is the chemical formula for ammonia?", ["NH3", "NO2", "N2O", "CH4"], 0),
  cmc("Chemistry", "Which of these is an alkali metal?", ["Calcium", "Sodium", "Aluminum", "Iron"], 1),
  cmc("Chemistry", "What happens to most substances when they are heated?", ["They contract", "They expand", "They freeze", "They disappear"], 1),
  cmc("Chemistry", "Which gas is needed for a fuel to burn (combustion)?", ["Nitrogen", "Oxygen", "Argon", "Helium"], 1),
  cmc("Chemistry", "What is the pH of a strong alkali (base) closest to?", ["1", "7", "14", "0"], 2),
  cmc("Chemistry", "Which of these is a mixture rather than a pure substance?", ["Distilled water", "Sea water", "Oxygen gas", "Table salt"], 1),
  cmc("Chemistry", "What is the common name for sodium chloride?", ["Baking soda", "Table salt", "Epsom salt", "Caustic soda"], 1),
  cmc("Chemistry", "Which process turns a liquid into a gas throughout the liquid, not just at the surface?", ["Evaporation", "Boiling", "Condensing", "Melting"], 1),
  cmc("Chemistry", "Atoms of the same element with different numbers of neutrons are called what?", ["Ions", "Isotopes", "Isomers", "Allotropes"], 1),
  cmc("Chemistry", "What is the chemical symbol for calcium?", ["Ca", "Cl", "C", "Cm"], 0),
  cmc("Chemistry", "Which acid is found in citrus fruits like lemons?", ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulfuric acid"], 0),
  cmc("Chemistry", "In the formula H2SO4, how many hydrogen atoms are there?", ["One", "Two", "Four", "Seven"], 1),
  cmc("Chemistry", "Which of these metals does NOT react much with water and is used for jewelry?", ["Sodium", "Potassium", "Gold", "Calcium"], 2),
  cmc("Chemistry", "What is the name for a substance made of only one kind of atom?", ["Compound", "Mixture", "Element", "Solution"], 2),
  cmc("Chemistry", "Which gas makes fizzy drinks fizzy when dissolved under pressure?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 1),
  cmc("Chemistry", "What is the main component of natural gas?", ["Ethane", "Methane", "Propane", "Butane"], 1),
  cmc("Chemistry", "When iron rusts, it reacts with oxygen and what else?", ["Nitrogen", "Water", "Carbon", "Hydrogen"], 1),
  cmc("Chemistry", "Which indicator turns pink in alkaline solutions and is colorless in acids?", ["Litmus", "Phenolphthalein", "Methyl orange", "Universal indicator"], 1),
  cmc("Chemistry", "How many electrons can the first shell around an atom hold at most?", ["Two", "Eight", "Eighteen", "One"], 0),
  cmc("Chemistry", "What is the chemical formula for hydrogen peroxide?", ["H2O", "H2O2", "HO2", "H3O"], 1),
  cmc("Chemistry", "Which type of reaction gives out heat to its surroundings?", ["Endothermic", "Exothermic", "Photosynthesis", "Electrolysis"], 1),
  cmc("Chemistry", "What is the common name for the chemical NaHCO3?", ["Washing soda", "Baking soda", "Caustic soda", "Soda ash"], 1),
  cmc("Chemistry", "Which element is a yellow non-metal that smells of rotten eggs in some compounds?", ["Sulfur", "Phosphorus", "Iodine", "Chlorine"], 0),
  cmc("Chemistry", "A solution with a pH of 2 is best described as…", ["Weakly alkaline", "Strongly acidic", "Neutral", "Weakly acidic"], 1),
  cmc("Chemistry", "Which of these is the correct formula for calcium carbonate (limestone)?", ["CaCO3", "CaO", "CaCl2", "CaSO4"], 0),
  cmc("Chemistry", "What name is given to the energy needed to start a chemical reaction?", ["Activation energy", "Kinetic energy", "Potential energy", "Thermal energy"], 0),
  cmc("Chemistry", "Which gas in the air is used by plants to make proteins indirectly via soil bacteria fixing it?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], 1),
  cmc("Chemistry", "What is the state change from gas directly to solid called?", ["Sublimation", "Deposition", "Condensation", "Evaporation"], 1),
  cmc("Chemistry", "Which acid is produced in the human stomach to help digestion?", ["Acetic acid", "Citric acid", "Hydrochloric acid", "Nitric acid"], 2),
  cmc("Chemistry", "What is the chemical formula for methane?", ["CH4", "C2H6", "CO2", "CH3OH"], 0),
  cmc("Chemistry", "Which of these substances is an element?", ["Water", "Air", "Copper", "Steel"], 2),
  cmc("Chemistry", "Bonds formed by transferring electrons from a metal to a non-metal are called what?", ["Covalent bonds", "Ionic bonds", "Metallic bonds", "Hydrogen bonds"], 1),
  cmc("Chemistry", "Which process uses electricity to split a compound into its elements?", ["Distillation", "Electrolysis", "Filtration", "Combustion"], 1),
  cmc("Chemistry", "What is the approximate percentage of oxygen in clean dry air by volume?", ["About 1%", "About 21%", "About 50%", "About 78%"], 1),
  cmc("Chemistry", "Which chemical is commonly used to test for the presence of starch, turning blue-black?", ["Iodine solution", "Limewater", "Benedict's solution", "Litmus"], 0),
  cmc("Chemistry", "Limewater turns cloudy (milky) when which gas is bubbled through it?", ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], 2),
  cmc("Chemistry","What is the pH of a neutral solution?", ["0","1","7","14"], 2, "Below 7 is acidic; above 7 is basic (alkaline)."),
  cmc("Chemistry","When an acid reacts with a base, the main products are…", ["A salt and water","Only hydrogen gas","Only a salt","A metal and water"], 0, "This is called a neutralization reaction."),
  cmc("Chemistry","What is the chemical formula for ordinary table salt?", ["KCl","NaCl","NaOH","CaCO3"], 1, "Sodium chloride — one sodium atom and one chlorine atom."),
  cmc("Chemistry","Which state of matter has a definite volume but takes the shape of its container?", ["Solid","Liquid","Gas","Plasma"], 1),
  cmc("Chemistry","A solid turning directly into a gas, skipping the liquid stage, is called…", ["Condensation","Evaporation","Deposition","Sublimation"], 3, "Dry ice does this at room temperature."),
  cmc("Chemistry","How many hydrogen atoms are in one methane molecule, CH4?", ["One","Two","Four","Six"], 2, "Methane is the main ingredient of natural gas."),
  cmc("Chemistry","What is the most abundant element in the universe?", ["Helium","Oxygen","Carbon","Hydrogen"], 3, "About three-quarters of the universe's normal matter is hydrogen."),
  cmc("Chemistry","Which of these is a chemical compound?", ["Gold","Oxygen gas","Water","Air"], 2, "Air is a mixture, not a compound — its ingredients aren't chemically bonded."),
  cmc("Chemistry","Ordinary rust is mainly which substance?", ["Copper oxide","Iron oxide","Zinc oxide","Aluminum oxide"], 1, "Iron reacting with oxygen and water."),
  cmc("Chemistry","What kind of bond is formed when atoms share electrons?", ["Ionic bond","Metallic bond","Covalent bond","Hydrogen bond"], 2, "Ionic bonds, by contrast, transfer electrons."),
  cmc("Chemistry","'Dry ice' is the solid form of which gas?", ["Nitrogen","Oxygen","Carbon dioxide","Helium"], 2),
  cmc("Chemistry","Which acid gives vinegar its sharp taste?", ["Citric acid","Acetic acid","Hydrochloric acid","Sulfuric acid"], 1, "Vinegar is roughly 5% acetic acid in water."),
  cmc("Chemistry","In chemistry, a catalyst is a substance that…", ["Speeds up a reaction without being used up","Stops a reaction completely","Turns any acid into a base","Burns to add energy"], 0, "Enzymes are the catalysts of living things."),
  cmc("Chemistry","What is the chemical formula for glucose (blood sugar)?", ["C12H22O11","C6H12O6","C2H5OH","H2SO4"], 1, "C12H22O11 is sucrose — ordinary table sugar."),
  cmc("Chemistry","How many oxygen atoms are in one molecule of carbon dioxide, CO2?", ["One","Two","Three","Four"], 1),
  cmc("Chemistry","Diamonds are made almost entirely of which element?", ["Carbon","Silicon","Boron","Lead"], 0, "Graphite — the 'lead' in pencils — is the same element in a different arrangement."),
  cmc("Chemistry","A liquid in which one substance is dissolved in another is called…", ["A solution","A suspension","An emulsion","A precipitate"], 0, "Salt water is a solution; a precipitate is a solid that falls out of one."),
  cmc("Chemistry","Which acid fills a typical car battery?", ["Citric acid","Acetic acid","Sulfuric acid","Nitric acid"], 2),
  cmc("Chemistry","A very strong acid has a pH closest to…", ["0","7","10","14"], 0, "Battery acid sits near the bottom of the scale; strong bases sit near 14."),
  cmc("Chemistry","Which process separates liquids with different boiling points, like alcohol from water?", ["Filtration","Distillation","Electrolysis","Fermentation"], 1, "It is also how most spirits and much purified water are made."),
  cmc("Chemistry","Sulfuric acid has which chemical formula?", ["HCl","HNO3","H2SO4","H2CO3"], 2),
  cmc("Chemistry","When an acid reacts with a carbonate, the gas given off is…", ["Hydrogen","Oxygen","Carbon dioxide","Chlorine"], 2, "It is the fizz you see — and the test for it turns limewater cloudy."),
  cmc("Chemistry","Sodium belongs to which family of metals?", ["Alkali metals","Alkaline earth metals","Transition metals","Noble metals"], 0, "Lithium and potassium are in the same family — all react vigorously with water."),
  cmc("Chemistry","Litmus paper turns which color in an acid?", ["Blue","Red","Green","Purple"], 1, "The memory aid: acids turn blue litmus red.")
],
periodic:[
  cmc("Periodic Table", "What is the chemical symbol for iron?", ["Ir", "Fe", "In", "Fm"], 1),
  cmc("Periodic Table", "What is the atomic number of hydrogen?", ["1", "2", "6", "8"], 0),
  cmc("Periodic Table", "Which element has the symbol Na?", ["Nitrogen", "Sodium", "Nickel", "Neon"], 1),
  cmc("Periodic Table", "Which element has the symbol O?", ["Gold", "Oxygen", "Osmium", "Oganesson"], 1),
  cmc("Periodic Table", "What is the chemical symbol for zinc?", ["Zc", "Zn", "Zr", "Zi"], 1),
  cmc("Periodic Table", "Which group of elements includes helium, neon, and argon?", ["Halogens", "Noble gases", "Alkali metals", "Transition metals"], 1),
  cmc("Periodic Table", "What is the atomic number of helium?", ["1", "2", "4", "10"], 1),
  cmc("Periodic Table", "Which element has the symbol Au?", ["Silver", "Argon", "Gold", "Aluminum"], 2),
  cmc("Periodic Table", "What is the chemical symbol for cobalt?", ["Co", "Cb", "Ct", "Cu"], 0),
  cmc("Periodic Table", "What is the atomic number of nitrogen?", ["6", "7", "8", "14"], 1),
  cmc("Periodic Table", "What is the chemical symbol for phosphorus?", ["P", "Po", "Ph", "Pt"], 0),
  cmc("Periodic Table", "Which element has the chemical symbol Cl?", ["Calcium", "Chlorine", "Cobalt", "Carbon"], 1),
  cmc("Periodic Table", "What is the atomic number of aluminum?", ["12", "13", "14", "26"], 1),
  cmc("Periodic Table", "Which of these elements is a metalloid?", ["Copper", "Silicon", "Sulfur", "Tin"], 1),
  cmc("Periodic Table", "Which element is named after the planet Neptune?", ["Plutonium", "Neptunium", "Uranium", "Americium"], 1),
  cmc("Periodic Table", "What is the chemical symbol for manganese?", ["Mg", "Mn", "Mo", "Md"], 1),
  cmc("Periodic Table", "What is the atomic number of neon?", ["8", "9", "10", "18"], 2),
  cmc("Periodic Table", "Which element has the chemical symbol Si?", ["Silver", "Sulfur", "Silicon", "Sodium"], 2),
  cmc("Periodic Table", "What is the atomic number of iron?", ["24", "25", "26", "30"], 2),
  cmc("Periodic Table", "Elements in Group 1 of the periodic table (except hydrogen) are known as what?", ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"], 0),
  cmc("Periodic Table", "What is the chemical symbol for chromium?", ["Ch", "Cr", "Cm", "Cl"], 1),
  cmc("Periodic Table", "What is the atomic number of sulfur?", ["14", "15", "16", "17"], 2),
  cmc("Periodic Table", "Which element is named after Marie Curie's homeland, Poland?", ["Radium", "Polonium", "Francium", "Curium"], 1),
  cmc("Periodic Table", "What is the chemical symbol for barium?", ["B", "Br", "Ba", "Be"], 2),
  cmc("Periodic Table", "Which is the heaviest noble gas that occurs naturally?", ["Xenon", "Krypton", "Radon", "Argon"], 2),
  cmc("Periodic Table", "What is the atomic number of calcium?", ["18", "19", "20", "21"], 2),
  cmc("Periodic Table", "What is the chemical symbol for nickel?", ["N", "Ni", "Nb", "No"], 1),
  cmc("Periodic Table", "Which element has the chemical symbol Pt?", ["Palladium", "Platinum", "Plutonium", "Lead"], 1),
  cmc("Periodic Table", "Which of these is an alkaline earth metal?", ["Sodium", "Magnesium", "Aluminum", "Chlorine"], 1),
  cmc("Periodic Table", "What is the atomic number of copper?", ["27", "28", "29", "30"], 2),
  cmc("Periodic Table", "What is the chemical symbol for iodine?", ["Io", "I", "In", "Id"], 1),
  cmc("Periodic Table", "Which element is named after Vanadis, a Norse goddess?", ["Scandium", "Vanadium", "Niobium", "Tantalum"], 1),
  cmc("Periodic Table", "What is the atomic number of zinc?", ["28", "29", "30", "31"], 2),
  cmc("Periodic Table", "Which element has the chemical symbol Se?", ["Selenium", "Silicon", "Scandium", "Strontium"], 0),
  cmc("Periodic Table","What is the chemical symbol for silver?", ["Si","Au","Ag","Sl"], 2, "From the Latin 'argentum'."),
  cmc("Periodic Table","What is the chemical symbol for potassium?", ["P","Po","K","Pt"], 2, "From 'kalium' — P is phosphorus, Pt is platinum."),
  cmc("Periodic Table","What is the atomic number of carbon?", ["6","8","12","14"], 0, "Six protons. The 12 is its approximate atomic mass — a classic mix-up."),
  cmc("Periodic Table","What is the atomic number of oxygen?", ["1","6","8","16"], 2, "Eight protons in every oxygen atom."),
  cmc("Periodic Table","Which element has the chemical symbol Pb?", ["Platinum","Lead","Palladium","Phosphorus"], 1, "From the Latin 'plumbum' — the origin of the word 'plumbing'."),
  cmc("Periodic Table","Which element sits at atomic number 1, first on the periodic table?", ["Helium","Hydrogen","Lithium","Oxygen"], 1, "The lightest element of all."),
  cmc("Periodic Table","The horizontal rows of the periodic table are called…", ["Groups","Families","Periods","Blocks"], 2, "Elements in a period fill their electron shells left to right."),
  cmc("Periodic Table","The vertical columns of the periodic table are called…", ["Periods","Groups","Rows","Series"], 1, "Elements in a group share similar chemistry."),
  cmc("Periodic Table","How many elements are officially recognized in the periodic table?", ["92","108","118","126"], 2, "Element 118, oganesson, completed the seventh row."),
  cmc("Periodic Table","Which of these elements is a noble gas?", ["Chlorine","Oxygen","Sodium","Neon"], 3, "The noble gases form the far-right column and barely react with anything."),
  cmc("Periodic Table","The symbol Hg stands for which element?", ["Holmium","Hydrogen","Silver","Mercury"], 3, "From the Greek 'hydrargyrum', meaning liquid silver."),
  cmc("Periodic Table","Who published the first widely used periodic table, in 1869?", ["Antoine Lavoisier","John Dalton","Dmitri Mendeleev","Henry Moseley"], 2, "Mendeleev left gaps for elements not yet discovered — and they were found."),
  cmc("Periodic Table","An element's atomic number counts the number of…", ["Neutrons in the nucleus","Protons in the nucleus","Electrons in the outer shell only","Protons plus neutrons"], 1, "Protons plus neutrons gives the mass number instead."),
  cmc("Periodic Table","Which of these elements is a halogen?", ["Neon","Calcium","Chlorine","Iron"], 2, "The halogens — fluorine, chlorine, bromine, iodine — sit one column left of the noble gases."),
  cmc("Periodic Table","What is the chemical symbol for copper?", ["Co","Cu","Cr","Cp"], 1, "From the Latin 'cuprum'. Co is cobalt and Cr is chromium."),
  cmc("Periodic Table","Atomic number 3 — the lightest of all metals — is which element?", ["Lithium","Beryllium","Sodium","Helium"], 0, "Lithium is so light it floats on water — while reacting with it."),
  cmc("Periodic Table","What is the chemical symbol for tin?", ["Ti","Sn","Tn","Zn"], 1, "From the Latin 'stannum'. Ti is titanium and Zn is zinc."),
  cmc("Periodic Table","What is the chemical symbol for antimony?", ["An","Sb","Am","At"], 1, "From the Latin 'stibium'. At is astatine."),
  cmc("Periodic Table","How many protons are in the nucleus of a gold atom?", ["47","79","118","197"], 1, "197 is gold's approximate atomic mass — protons plus neutrons."),
  cmc("Periodic Table","Bromine is unusual among the elements because at room temperature it is a…", ["Gas","Liquid","Plasma","Crystal"], 1, "Mercury is the only other element that is liquid at room temperature."),
  cmc("Periodic Table","Which is the lightest of all the metals?", ["Lithium","Sodium","Aluminum","Magnesium"], 0, "Lithium is light enough to float on water."),
  cmc("Periodic Table","Which element makes up about 65% of the human body by mass?", ["Carbon","Hydrogen","Oxygen","Nitrogen"], 2, "Most of it is the oxygen in the body's water."),
  cmc("Periodic Table","The element einsteinium, named after Albert Einstein, has which symbol?", ["Es","En","Ei","Al"], 0, "It was discovered in the debris of the first hydrogen bomb, in 1952."),
  cmc("Periodic Table","Uranium has which chemical symbol?", ["Ur","U","Un","Ra"], 1, "Ra is radium; Ur was never used."),
  cmc("Periodic Table","Plutonium is named after…", ["The dwarf planet Pluto","The Greek god of war","The Latin word for lead","A village in Norway"], 0, "It follows uranium (Uranus) and neptunium (Neptune) in the table — the planets in order."),
  cmc("Periodic Table","What is the most abundant element in the Earth's crust?", ["Silicon","Oxygen","Iron","Aluminum"], 1, "Oxygen is about 46% of the crust by weight; silicon is second.")
],
science:[
  cmc("Science", "Which organ in the human body makes insulin?", ["Liver", "Pancreas", "Kidney", "Spleen"], 1),
  cmc("Science", "What is the study of living things called?", ["Geology", "Biology", "Astronomy", "Chemistry"], 1),
  cmc("Science", "Which force keeps us on the ground and pulls objects toward Earth?", ["Magnetism", "Friction", "Gravity", "Inertia"], 2),
  cmc("Science", "How many legs does a crab have, counting its claws as modified legs in the usual 'decapod' count of 10?", ["Eight", "Ten", "Six", "Twelve"], 1),
  cmc("Science", "Which planet is known as the 'Morning Star' and 'Evening Star'?", ["Mars", "Venus", "Mercury", "Jupiter"], 1),
  cmc("Science", "What is the boiling point of water at sea level in Celsius?", ["90 degrees", "100 degrees", "110 degrees", "80 degrees"], 1),
  cmc("Science", "Which part of a plant absorbs water from the soil?", ["Leaves", "Stem", "Roots", "Flower"], 2),
  cmc("Science", "What do we call a scientist who studies rocks and the Earth?", ["Botanist", "Geologist", "Zoologist", "Meteorologist"], 1),
  cmc("Science", "Which of these is a renewable resource?", ["Coal", "Natural gas", "Solar energy", "Oil"], 2),
  cmc("Science", "How long does the Moon take to orbit the Earth, roughly?", ["About a day", "About a week", "About a month", "About a year"], 2),
  cmc("Science", "Which animal is the largest mammal in the sea?", ["Great white shark", "Blue whale", "Orca", "Elephant seal"], 1),
  cmc("Science", "What is the name of the process where a liquid turns into a gas at its surface?", ["Condensation", "Evaporation", "Precipitation", "Freezing"], 1),
  cmc("Science", "Which sense organ detects sound vibrations?", ["Eye", "Ear", "Nose", "Skin"], 1),
  cmc("Science", "What is the center of our solar system?", ["Earth", "The Moon", "The Sun", "Jupiter"], 2),
  cmc("Science", "Which gas does the human body produce and breathe out in exhaled air?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 1),
  cmc("Science", "A caterpillar changing into a butterfly is an example of what?", ["Hibernation", "Metamorphosis", "Migration", "Camouflage"], 1),
  cmc("Science", "Which instrument is used to measure wind speed?", ["Barometer", "Anemometer", "Thermometer", "Rain gauge"], 1),
  cmc("Science", "What is the hardest part of the human body?", ["Bone", "Tooth enamel", "Nail", "Skull"], 1),
  cmc("Science", "Which layer of the atmosphere contains the ozone layer?", ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], 1),
  cmc("Science", "How many wings does a housefly have?", ["Two", "Four", "Six", "None"], 0),
  cmc("Science", "Which of these animals is a marsupial?", ["Koala", "Panda", "Sloth", "Armadillo"], 0),
  cmc("Science", "What is the scientific term for the path a planet follows around the Sun?", ["Axis", "Orbit", "Rotation", "Eclipse"], 1),
  cmc("Science", "Which blood vessels carry blood back to the heart?", ["Arteries", "Veins", "Capillaries", "Aorta"], 1),
  cmc("Science", "What is the main reason we have seasons on Earth?", ["Earth's distance from the Sun", "The tilt of Earth's axis", "The Moon's orbit", "Ocean currents"], 1),
  cmc("Science", "Which part of the cell controls its activities and holds DNA?", ["Ribosome", "Nucleus", "Vacuole", "Cell wall"], 1),
  cmc("Science", "Sound travels fastest through which of these?", ["Air", "Water", "Steel", "Vacuum"], 2),
  cmc("Science", "Which planet has the Great Dark Spot storms and the strongest winds in the solar system?", ["Jupiter", "Saturn", "Neptune", "Uranus"], 2),
  cmc("Science", "What is the term for water falling from clouds as rain, snow, sleet, or hail?", ["Evaporation", "Condensation", "Precipitation", "Collection"], 2),
  cmc("Science", "Which organ system is responsible for breaking down food?", ["Respiratory system", "Digestive system", "Nervous system", "Skeletal system"], 1),
  cmc("Science", "How many bones are in the human hand and wrist combined, per hand?", ["27", "21", "31", "17"], 0),
  cmc("Science", "Which scientist proposed the theory of evolution by natural selection along with Alfred Russel Wallace?", ["Louis Pasteur", "Charles Darwin", "Gregor Mendel", "James Watson"], 1),
  cmc("Science", "What is the freezing point of water in Fahrenheit?", ["0 degrees", "32 degrees", "50 degrees", "100 degrees"], 1),
  cmc("Science", "Which type of rock is formed from cooled lava or magma?", ["Sedimentary", "Metamorphic", "Igneous", "Fossil"], 2),
  cmc("Science", "The chemical symbol for water, H2O, tells us each molecule has how many hydrogen atoms?", ["One", "Two", "Three", "None"], 1),
  cmc("Science","Which molecule carries the genetic instructions in nearly all living things?", ["ATP","RNA","DNA","Glucose"], 2, "DNA is short for deoxyribonucleic acid."),
  cmc("Science","Plants make their own food from sunlight by which process?", ["Respiration","Photosynthesis","Fermentation","Digestion"], 1, "It takes in carbon dioxide and releases oxygen."),
  cmc("Science","Which blood cells help the body fight infection?", ["Red blood cells","Platelets","White blood cells","Nerve cells"], 2),
  cmc("Science","How many chambers are there in the human heart?", ["Two","Three","Four","Five"], 2, "Two atria on top, two ventricles below."),
  cmc("Science","What is the SI (metric) unit of force?", ["Joule","Watt","Pascal","Newton"], 3, "Named for Sir Isaac Newton."),
  cmc("Science","'For every action there is an equal and opposite reaction' is which of Newton's laws?", ["The first law","The second law","The third law","The law of gravitation"], 2),
  cmc("Science","Roughly how fast does sound travel through air?", ["About 30 metres per second","About 150 metres per second","About 343 metres per second","About 1,500 metres per second"], 2, "Sound travels much faster in water — around 1,500 metres per second."),
  cmc("Science","What kind of energy is stored in food and fuel?", ["Chemical energy","Kinetic energy","Sound energy","Light energy"], 0, "It is released by burning or by digestion."),
  cmc("Science","Which planet is famous for its Great Red Spot, a giant storm?", ["Saturn","Mars","Jupiter","Neptune"], 2, "The storm has been raging for at least 190 years."),
  cmc("Science","Which layer of the Earth is the thin surface layer all living things inhabit?", ["The mantle","The crust","The outer core","The inner core"], 1),
  cmc("Science","Water vapor cooling and turning back into liquid water is called…", ["Evaporation","Condensation","Precipitation","Sublimation"], 1, "It is how dew and clouds form."),
  cmc("Science","Which large moon of Saturn is famous for its lakes of liquid methane?", ["Europa","Ganymede","Titan","Enceladus"], 2, "Titan is the second-largest moon in the solar system."),
  cmc("Science","At sea level, pure water boils at what temperature?", ["90°C","100°C","110°C","212°C"], 1, "212 is the Fahrenheit figure — not Celsius."),
  cmc("Science","Which instrument measures and records earthquakes?", ["Barometer","Anemometer","Seismograph","Hygrometer"], 2, "A barometer measures air pressure; an anemometer measures wind."),
  cmc("Science","Roughly how long does sunlight take to reach the Earth?", ["About 8 seconds","About 8 minutes","About 1 hour","About 1 day"], 1, "About 8 minutes 20 seconds — so we always see the Sun as it was."),
  cmc("Science","Which body system includes the brain and the spinal cord?", ["The circulatory system","The nervous system","The digestive system","The skeletal system"], 1),
  cmc("Science","What is the main source of energy driving the water cycle?", ["The wind","The Sun","The Moon","Volcanoes"], 1, "Sunlight evaporates water from oceans, lakes, and land."),
  cmc("Science","Which force slows a rolling ball down on flat ground?", ["Gravity","Magnetism","Friction","Inertia"], 2),
  cmc("Science","How many moons does Mars have?", ["None","One","Two","Four"], 2, "Phobos and Deimos — named for the Greek words for fear and panic."),
  cmc("Science","Which planet has the most extensive ring system?", ["Jupiter","Uranus","Saturn","Neptune"], 2, "All four giant planets have rings, but Saturn's are by far the brightest and widest."),
  cmc("Science","Which type of blood vessel carries blood away from the heart?", ["Veins","Arteries","Capillaries","Nerves"], 1, "Veins carry it back; capillaries are the tiny vessels in between."),
  cmc("Science","What is the dense center of an atom called?", ["The electron","The nucleus","The proton","The orbit"], 1, "Nearly all of an atom's mass sits in its nucleus."),
  cmc("Science","Which scientist set out the heliocentric model in a book published in 1543?", ["Nicolaus Copernicus","Galileo Galilei","Johannes Kepler","Isaac Newton"], 0, "'On the Revolutions of the Heavenly Spheres' appeared the year Copernicus died."),
  cmc("Science","Which layer of the Earth lies directly beneath the crust?", ["The outer core","The mantle","The inner core","The atmosphere"], 1, "The mantle is mostly solid rock that flows very slowly over millions of years."),
  cmc("Science","An animal that eats only plants is called a…", ["Carnivore","Herbivore","Omnivore","Insectivore"], 1),
  cmc("Science","Which medium can sound NOT travel through?", ["Water","Air","A vacuum","Steel"], 2, "Sound needs a material to vibrate — in space, no one can hear you scream.")
],
medical:[
  cmc("Medical", "Which organ pumps blood around the body?", ["Liver", "Heart", "Lung", "Brain"], 1),
  cmc("Medical", "How many lungs does a typical human have?", ["One", "Two", "Three", "Four"], 1),
  cmc("Medical", "Which part of the body produces red blood cells in adults?", ["The heart", "Bone marrow", "The liver", "The spleen"], 1),
  cmc("Medical", "The medical term for low blood pressure is what?", ["Hypotension", "Hypertension", "Hypoglycemia", "Hyperthermia"], 0),
  cmc("Medical", "Vitamin C is also known by which chemical name?", ["Ascorbic acid", "Citric acid", "Folic acid", "Retinol"], 0),
  cmc("Medical", "Which small organ stores bile produced by the liver?", ["Appendix", "Gallbladder", "Pancreas", "Spleen"], 1),
  cmc("Medical", "How many pairs of ribs does a typical human have?", ["10", "11", "12", "14"], 2),
  cmc("Medical", "What is the name of the smallest type of blood vessel?", ["Arteries", "Veins", "Capillaries", "Venules"], 2),
  cmc("Medical", "A Snellen chart is used to test which sense?", ["Hearing", "Vision", "Smell", "Taste"], 1),
  cmc("Medical", "The branch of medicine that cares for children is called what?", ["Geriatrics", "Pediatrics", "Podiatry", "Psychiatry"], 1),
  cmc("Medical", "Which disease is commonly known as 'whooping cough'?", ["Diphtheria", "Pertussis", "Tetanus", "Measles"], 1),
  cmc("Medical", "Which is the largest internal organ of the human body?", ["Heart", "Liver", "Brain", "Lung"], 1),
  cmc("Medical", "A lack of which mineral is the most common cause of anemia?", ["Calcium", "Iron", "Iodine", "Zinc"], 1),
  cmc("Medical", "The tingling 'funny bone' sensation actually comes from which nerve?", ["Radial nerve", "Ulnar nerve", "Median nerve", "Sciatic nerve"], 1),
  cmc("Medical", "What is the medical term for a heart attack?", ["Cardiac arrest", "Myocardial infarction", "Angina", "Arrhythmia"], 1),
  cmc("Medical", "Which part of the brain controls balance and coordination?", ["Cerebrum", "Cerebellum", "Brain stem", "Hypothalamus"], 1),
  cmc("Medical", "What is the usual resting heart rate range for most adults, in beats per minute?", ["40 to 50", "60 to 100", "110 to 130", "20 to 40"], 1),
  cmc("Medical", "Which imaging method uses X-rays to build cross-section pictures of the body?", ["Ultrasound", "CT scan", "MRI scan", "ECG trace"], 1),
  cmc("Medical", "A doctor who specializes in the heart is called a what?", ["Neurologist", "Cardiologist", "Dermatologist", "Oncologist"], 1),
  cmc("Medical", "What is the medical term for nearsightedness?", ["Hyperopia", "Myopia", "Astigmatism", "Cataracts"], 1),
  cmc("Medical", "In first aid, 'CPR' stands for what?", ["Cardiac pressure response", "Cardiopulmonary resuscitation", "Chest pressure routine", "Circulation pulse recovery"], 1),
  cmc("Medical", "The alveoli, where oxygen passes into the blood, are found in which organ?", ["Heart", "Lungs", "Liver", "Kidneys"], 1),
  cmc("Medical", "The medical term 'hepatic' refers to which organ?", ["Liver", "Kidney", "Lung", "Heart"], 0),
  cmc("Medical", "A deficiency of which vitamin causes scurvy?", ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], 1),
  cmc("Medical", "How many milk (baby) teeth do children typically have?", ["16", "20", "24", "28"], 1),
  cmc("Medical", "Which bone (or set of bones) protects the brain?", ["Femur", "Skull", "Rib cage", "Pelvis"], 1),
  cmc("Medical", "What is the medical term for inflammation of the appendix?", ["Appendicitis", "Gastritis", "Bronchitis", "Tonsillitis"], 0),
  cmc("Medical", "What is the liquid part of blood, in which the cells float, called?", ["Serum", "Plasma", "Hemoglobin", "Marrow"], 1),
  cmc("Medical", "Which large joint connects the thigh bone to the shin bone?", ["Elbow", "Knee", "Ankle", "Shoulder"], 1),
  cmc("Medical", "The medical specialty dealing with pregnancy and childbirth is called what?", ["Obstetrics", "Orthopedics", "Ophthalmology", "Oncology"], 0),
  cmc("Medical", "Which common childhood illness causes an itchy, blistery rash?", ["Measles", "Chickenpox", "Mumps", "Rubella"], 1),
  cmc("Medical", "What is the medical name for the voice box?", ["Trachea", "Larynx", "Pharynx", "Esophagus"], 1),
  cmc("Medical", "A 'renal transplant' is a transplant of which organ?", ["Liver", "Kidney", "Heart", "Lung"], 1),
  cmc("Medical", "A full-term human pregnancy lasts about how many weeks?", ["36 weeks", "40 weeks", "44 weeks", "32 weeks"], 1),
  cmc("Medical", "Which instrument is used to measure blood pressure?", ["Stethoscope", "Sphygmomanometer", "Thermometer", "Spirometer"], 1),
  cmc("Medical","About how many bones is a human baby born with?", ["About 206","About 250","About 300","About 400"], 2, "Many fuse together as we grow, leaving 206 in adults."),
  cmc("Medical","Which vitamin does human skin produce when exposed to sunlight?", ["Vitamin A","Vitamin C","Vitamin B12","Vitamin D"], 3, "It helps the body absorb calcium for bones."),
  cmc("Medical","'Hypertension' is the medical term for…", ["Low blood pressure","High blood pressure","A fast heartbeat","Low blood sugar"], 1, "Low blood pressure is hypotension."),
  cmc("Medical","Which organs filter waste from the blood to produce urine?", ["The liver","The spleen","The kidneys","The lungs"], 2, "Each kidney contains about a million tiny filters called nephrons."),
  cmc("Medical","Jonas Salk is famous for developing the first successful vaccine against which disease?", ["Smallpox","Polio","Rabies","Measles"], 1, "Introduced in 1955; Albert Sabin's oral vaccine followed."),
  cmc("Medical","Alexander Fleming discovered which landmark antibiotic, in 1928?", ["Aspirin","Insulin","Penicillin","Morphine"], 2, "He noticed a mold — Penicillium — killing the bacteria around it."),
  cmc("Medical","What is the largest artery in the human body?", ["The carotid artery","The femoral artery","The pulmonary artery","The aorta"], 3, "It carries oxygen-rich blood out of the heart to the body."),
  cmc("Medical","Which part of the blood is mainly responsible for clotting?", ["Red cells","White cells","Platelets","Plasma"], 2, "Platelets rush to a cut and form the plug that starts a clot."),
  cmc("Medical","Average normal human body temperature is closest to…", ["35°C (95°F)","37°C (98.6°F)","39°C (102.2°F)","41°C (105.8°F)"], 1),
  cmc("Medical","MRI scanning stands for…", ["Medical Radiation Imaging","Magnetic Resonance Imaging","Molecular Reaction Imaging","Magnetic Radiation Inspection"], 1, "MRI uses magnets and radio waves — no ionizing radiation."),
  cmc("Medical","An 'autoimmune' disease is one in which the immune system…", ["Is completely absent","Attacks the body's own tissues","Fights only viruses","Produces too many red blood cells"], 1, "Type 1 diabetes and rheumatoid arthritis are autoimmune conditions."),
  cmc("Medical","Which blood type is known as the universal red-cell donor?", ["AB positive","O positive","A negative","O negative"], 3, "AB positive is the universal recipient, at the other end of the chart."),
  cmc("Medical","Which organ produces bile, which helps digest fats?", ["The gallbladder","The liver","The pancreas","The spleen"], 1, "The gallbladder only stores bile — the liver makes it."),
  cmc("Medical","The trachea is better known by what common name?", ["The food pipe","The voice box","The windpipe","The gullet"], 2, "The voice box is the larynx, which sits at its top."),
  cmc("Medical","Edward Jenner's pioneering vaccine of 1796 protected against which disease?", ["Rabies","Polio","Smallpox","Cholera"], 2, "Jenner used cowpox to protect against smallpox — 'vacca' is Latin for cow."),
  cmc("Medical","Which muscle is the main one used for breathing?", ["The diaphragm","The biceps","The triceps","The heart"], 0, "The dome-shaped diaphragm flattens as you breathe in."),
  cmc("Medical","How many permanent teeth does a typical adult have, including wisdom teeth?", ["28","30","32","36"], 2, "Adults who never grow wisdom teeth, or have them removed, manage with 28."),
  cmc("Medical","Dermatology is the branch of medicine concerned with which organ?", ["The heart","The skin","The liver","The eye"], 1, "The skin is also the body's largest organ."),
  cmc("Medical","Which organ is inflamed in hepatitis?", ["The kidney","The liver","The lung","The heart"], 1, "The prefix 'hep-' refers to the liver, as in 'hepatic'."),
  cmc("Medical","What is the name of the tube that carries food from the mouth to the stomach?", ["The trachea","The esophagus","The aorta","The urethra"], 1, "The trachea is the windpipe — food down the wrong one is what makes you cough."),
  cmc("Medical","Which mineral is most important for building strong bones and teeth?", ["Iron","Calcium","Potassium","Zinc"], 1, "About 99% of the body's calcium is in bones and teeth."),
  cmc("Medical","A stethoscope is used mainly to listen to which organs?", ["The heart and lungs","The stomach and liver","The joints","The sinuses"], 0, "It was invented in 1816 by René Laennec, to avoid pressing his ear to a patient's chest."),
  cmc("Medical","Which part of the eye controls how much light gets in?", ["The lens","The retina","The pupil","The cornea"], 2, "Muscles change the pupil's size — wide in the dark, small in bright light."),
  cmc("Medical","Which gland is often called the body's 'master gland'?", ["The thyroid gland","The pituitary gland","The adrenal gland","The pineal gland"], 1, "The pea-sized pituitary directs many of the body's other glands."),
  cmc("Medical","'Hypoglycemia' is the medical term for…", ["High blood pressure","Low blood pressure","Low blood sugar","High blood sugar"], 2, "'Hypo-' means too little — the opposite of 'hyper-'.")
],
popculture:[
  cmc("Pop Culture", "Who played the archaeologist Indiana Jones in the film series?", ["Harrison Ford", "Tom Cruise", "Sean Connery", "Michael Douglas"], 0),
  cmc("Pop Culture", "Which animated film features a snowman named Olaf?", ["Frozen", "Moana", "Tangled", "Brave"], 0),
  cmc("Pop Culture", "The TV show 'Friends' is set mainly in which city?", ["Los Angeles", "New York City", "Chicago", "Boston"], 1),
  cmc("Pop Culture", "In 'Star Wars', what is the name of Han Solo's ship?", ["Enterprise", "Millennium Falcon", "Serenity", "Galactica"], 1),
  cmc("Pop Culture", "Which board game has properties like Boardwalk and Park Place in its classic US edition?", ["Monopoly", "Clue", "Risk", "Life"], 0),
  cmc("Pop Culture", "Which superhero's real name is Bruce Wayne?", ["Superman", "Batman", "Spider-Man", "Iron Man"], 1),
  cmc("Pop Culture", "Who played Dorothy in the 1939 film 'The Wizard of Oz'?", ["Shirley Temple", "Judy Garland", "Audrey Hepburn", "Elizabeth Taylor"], 1),
  cmc("Pop Culture", "Luigi is the taller brother of which video game hero?", ["Mario", "Sonic", "Link", "Kirby"], 0),
  cmc("Pop Culture", "The detective Sherlock Holmes was created by which author?", ["Arthur Conan Doyle", "Agatha Christie", "Charles Dickens", "Ian Fleming"], 0),
  cmc("Pop Culture", "Who won the Best Actor Oscar for the 2019 film 'Joker'?", ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"], 1),
  cmc("Pop Culture", "Which series follows chess prodigy Beth Harmon?", ["The Crown", "The Queen's Gambit", "Bridgerton", "Wednesday"], 1),
  cmc("Pop Culture", "In the 'Toy Story' films, who voices the cowboy Woody?", ["Tim Allen", "Tom Hanks", "Robin Williams", "Billy Crystal"], 1),
  cmc("Pop Culture", "Which 2009 James Cameron film became the highest-grossing movie of all time worldwide?", ["Avengers: Endgame", "Avatar", "Titanic", "Avatar: The Way of Water"], 1),
  cmc("Pop Culture", "Which classic arcade game has a yellow hero eating pellets while ghosts chase him?", ["Space Invaders", "Pac-Man", "Donkey Kong", "Frogger"], 1),
  cmc("Pop Culture", "Who played Rose in the 1997 film 'Titanic'?", ["Kate Winslet", "Cameron Diaz", "Claire Danes", "Gwyneth Paltrow"], 0),
  cmc("Pop Culture", "Which Marvel hero carries a shield made of vibranium?", ["Iron Man", "Captain America", "Thor", "Hulk"], 1),
  cmc("Pop Culture", "Which 2020 Nintendo Switch game lets players build a life on a deserted island with animal villagers?", ["Stardew Valley", "Animal Crossing: New Horizons", "Minecraft", "Splatoon 2"], 1),
  cmc("Pop Culture", "Who wrote 'The Lord of the Rings'?", ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling"], 1),
  cmc("Pop Culture", "The line 'May the Force be with you' comes from which film series?", ["Star Trek", "Star Wars", "Battlestar Galactica", "Dune"], 1),
  cmc("Pop Culture", "Who played the Terminator in the 1984 film of that name?", ["Sylvester Stallone", "Arnold Schwarzenegger", "Bruce Willis", "Mel Gibson"], 1),
  cmc("Pop Culture", "Which TV drama follows chemistry teacher Walter White's turn to crime?", ["The Sopranos", "Breaking Bad", "The Wire", "Mad Men"], 1),
  cmc("Pop Culture", "Which movie musical features the songs 'Summer Nights' and 'You're the One That I Want'?", ["Grease", "The Sound of Music", "Mamma Mia!", "Hairspray"], 0),
  cmc("Pop Culture", "In 'The Lion King', what is the name of Simba's father?", ["Scar", "Mufasa", "Rafiki", "Zazu"], 1),
  cmc("Pop Culture", "Who directed the 1982 film 'E.T. the Extra-Terrestrial'?", ["Steven Spielberg", "George Lucas", "Ridley Scott", "James Cameron"], 0),
  cmc("Pop Culture", "Which board game asks players to solve a murder involving Colonel Mustard and Professor Plum?", ["Clue", "Risk", "Monopoly", "Sorry!"], 0),
  cmc("Pop Culture","Who played Jack Dawson in the 1997 film Titanic?", ["Brad Pitt","Matt Damon","Leonardo DiCaprio","Tom Cruise"], 2, "Kate Winslet played Rose."),
  cmc("Pop Culture","The Iron Throne and House Stark feature in which TV series?", ["Vikings","The Witcher","Game of Thrones","The Last Kingdom"], 2, "Based on George R.R. Martin's 'A Song of Ice and Fire' novels."),
  cmc("Pop Culture","Iron Man, Thor, and Captain America team up as which superhero group?", ["The Justice League","The X-Men","The Avengers","The Fantastic Four"], 2, "The Justice League is the DC team — Superman, Batman, Wonder Woman."),
  cmc("Pop Culture","Who plays Wednesday Addams in Netflix's 'Wednesday' (2022)?", ["Christina Ricci","Jenna Ortega","Millie Bobby Brown","Anya Taylor-Joy"], 1, "Christina Ricci played Wednesday in the 1990s films — and appears in the series as teacher Marilyn Thornhill."),
  cmc("Pop Culture","Mario is the mascot of which video game company?", ["Sega","Sony","Nintendo","Microsoft"], 2, "Sega's mascot is Sonic the Hedgehog."),
  cmc("Pop Culture","Who won the first season of American Idol, in 2002?", ["Carrie Underwood","Clay Aiken","Jennifer Hudson","Kelly Clarkson"], 3, "Carrie Underwood won season 4; Clay Aiken was season 2's runner-up."),
  cmc("Pop Culture","Which film won the Academy Award for Best Picture at the 2023 Oscars?", ["Top Gun: Maverick","Avatar: The Way of Water","Everything Everywhere All at Once","The Fabelmans"], 2, "It won seven Oscars in total, including Best Director and three acting awards."),
  cmc("Pop Culture","Which country has won the men's FIFA World Cup the most times?", ["Germany","Italy","Argentina","Brazil"], 3, "Brazil has five titles — Germany and Italy have four each."),
  cmc("Pop Culture","Eleven and the Upside Down feature in which series?", ["Dark","Stranger Things","Wednesday","Locke & Key"], 1, "Set in the fictional town of Hawkins, Indiana."),
  cmc("Pop Culture","In 'The Mandalorian', the child nicknamed 'Baby Yoda' has what real name?", ["Minch","Yaddle","Grogu","Yoda Junior"], 2, "His name was revealed in the second season, in 2020."),
  cmc("Pop Culture","The fictional Indiana town of Pawnee is the setting of which sitcom?", ["The Office","Parks and Recreation","Community","Brooklyn Nine-Nine"], 1, "The Office is set in Scranton, Pennsylvania."),
  cmc("Pop Culture","Who played the Joker in the 2008 film 'The Dark Knight'?", ["Jack Nicholson","Heath Ledger","Jared Leto","Joaquin Phoenix"], 1, "Ledger won a posthumous Oscar for the role."),
  cmc("Pop Culture","Who wrote the 'Harry Potter' books?", ["J.R.R. Tolkien","J.K. Rowling","C.S. Lewis","Roald Dahl"], 1),
  cmc("Pop Culture","The fictional paper company Dunder Mifflin is the setting of which sitcom?", ["The Office","Parks and Recreation","Brooklyn Nine-Nine","Scrubs"], 0, "The US version ran from 2005 to 2013."),
  cmc("Pop Culture","Who directed the 1975 blockbuster 'Jaws'?", ["George Lucas","Steven Spielberg","Martin Scorsese","Francis Ford Coppola"], 1, "Its success created the modern summer blockbuster."),
  cmc("Pop Culture","The hero Link is the star of which video game series?", ["The Legend of Zelda","Final Fantasy","Metroid","Castlevania"], 0, "Link's quest is usually to rescue Princess Zelda."),
  cmc("Pop Culture","Who plays Captain Jack Sparrow in the 'Pirates of the Caribbean' films?", ["Orlando Bloom","Johnny Depp","Geoffrey Rush","Javier Bardem"], 1, "Depp based the character partly on Keith Richards — who later played Sparrow's father."),
  cmc("Pop Culture","Tony Stark is the alter ego of which superhero?", ["Iron Man","War Machine","Captain America","Hawkeye"], 0, "War Machine is Tony's friend James 'Rhodey' Rhodes."),
  cmc("Pop Culture","Which 1994 film tells a man's life story from a bench at a bus stop?", ["Forrest Gump","The Shawshank Redemption","Pulp Fiction","Braveheart"], 0, "It won six Academy Awards, including Best Picture and Best Actor for Tom Hanks."),
],
music:[
  cmc("Music", "Which singer is known as the 'Material Girl'?", ["Cyndi Lauper", "Madonna", "Whitney Houston", "Cher"], 1),
  cmc("Music", "Which band released the song 'Hey Jude' in 1968?", ["The Rolling Stones", "The Beatles", "The Beach Boys", "The Who"], 1),
  cmc("Music", "Which singer released the album 'Thriller' in 1982?", ["Prince", "Michael Jackson", "Lionel Richie", "Stevie Wonder"], 1),
  cmc("Music", "Which singer released the hit 'Shape of You' in 2017?", ["Shawn Mendes", "Ed Sheeran", "Charlie Puth", "Sam Smith"], 1),
  cmc("Music", "Which pop star's fans are known as 'Swifties'?", ["Ariana Grande", "Taylor Swift", "Billie Eilish", "Dua Lipa"], 1),
  cmc("Music", "Which band performed the 'Friends' theme song, 'I'll Be There for You'?", ["The Rembrandts", "Counting Crows", "Hootie and the Blowfish", "Spin Doctors"], 0),
  cmc("Music", "Elvis Presley's famous Memphis home is known by what name?", ["Neverland", "Graceland", "Paisley Park", "Sun Studio"], 1),
  cmc("Music", "Which country star sang 'Jolene' and '9 to 5'?", ["Loretta Lynn", "Dolly Parton", "Tammy Wynette", "Patsy Cline"], 1),
  cmc("Music", "Which singer released the album '21' in 2011?", ["Adele", "Amy Winehouse", "Duffy", "Lana Del Rey"], 0),
  cmc("Music","Which singer released the album 'Renaissance' in 2022?", ["Adele","Beyoncé","Rihanna","Lady Gaga"], 1, "It debuted at number one and won Best Dance/Electronic Album at the Grammys."),
  cmc("Music","'Bohemian Rhapsody' (1975) was recorded by which band?", ["Led Zeppelin","ABBA","The Who","Queen"], 3, "Written by Freddie Mercury for the album 'A Night at the Opera'."),
  cmc("Music","Who is known worldwide as the 'King of Pop'?", ["Elvis Presley","Prince","Michael Jackson","Freddie Mercury"], 2, "Elvis is the King of Rock and Roll."),
  cmc("Music","Ringo Starr was the drummer of which band?", ["The Rolling Stones","The Who","Led Zeppelin","The Beatles"], 3, "He joined in 1962, replacing Pete Best."),
  cmc("Music","Which band released the album 'Rumours' in 1977?", ["Fleetwood Mac","The Eagles","ABBA","Pink Floyd"], 0, "One of the best-selling albums of all time — 'Dreams' and 'Go Your Own Way' are on it."),
  cmc("Music","Which singer is known as the 'Queen of Soul'?", ["Aretha Franklin","Whitney Houston","Diana Ross","Tina Turner"], 0, "'Respect' and 'Natural Woman' made the title stick."),
  cmc("Music","Which group had a worldwide hit with 'Dancing Queen' in 1976?", ["ABBA","The Bee Gees","Boney M.","Village People"], 0, "It is the Swedish group's signature song.")
]
};
/* ================= MORE CATEGORY BANKS =================
   Advertising, Marketing, Riddles, Sports, and History — added so the
   mixed deals (Gauntlet and Mixed Bag) are a well-rounded trivia mix
   rather than a geography test. Verified, well-established facts
   only: famous slogans and campaigns, classic marketing concepts,
   classic riddles with one unambiguous answer, well-known sports
   facts and records, and well-established historical events, figures,
   and dates. No invented statistics, scores, or dates. Distractors
   stay in the same domain (and era, for history) as the answer, and
   every correct answer is short enough to type exactly in Round 4. */
var NEWBANKS = {
advertising:[
  cmc("Advertising", "Which insurer promises that 'fifteen minutes could save you fifteen percent or more on car insurance'?", ["Progressive", "GEICO", "State Farm", "Allstate"], 1),
  cmc("Advertising", "Which battery brand's pink bunny mascot 'keeps going and going'?", ["Duracell", "Energizer", "Rayovac", "Eveready"], 1),
  cmc("Advertising", "Which drink's slogan is 'Gives You Wings'?", ["Monster Energy", "Red Bull", "Rockstar", "5-hour Energy"], 1),
  cmc("Advertising", "Which fast-food chain's slogan is 'Live Mas'?", ["Chipotle", "Taco Bell", "Del Taco", "Qdoba"], 1),
  cmc("Advertising", "Which pizza chain created the villain mascot 'The Noid' in the 1980s?", ["Pizza Hut", "Domino's", "Little Caesars", "Papa John's"], 1),
  cmc("Advertising", "Which pizza chain's slogan is 'Pizza! Pizza!'?", ["Domino's", "Little Caesars", "Pizza Hut", "Hungry Howie's"], 1),
  cmc("Advertising", "Which soup brand's slogan is 'M'm! M'm! Good!'?", ["Progresso", "Campbell's", "Heinz", "Swanson"], 1),
  cmc("Advertising", "Which cereal's mascot is Buzz the Bee?", ["Cheerios", "Honey Nut Cheerios", "Golden Grahams", "Chex"], 1),
  cmc("Advertising", "'Silly rabbit, they're for kids!' - which cereal do the kids refuse to share in the ads?", ["Lucky Charms", "Trix", "Froot Loops", "Cocoa Puffs"], 1),
  cmc("Advertising", "Which cereal's mascot is Toucan Sam?", ["Trix", "Froot Loops", "Apple Jacks", "Cap'n Crunch"], 1),
  cmc("Advertising", "Which snack's slogan is 'Once You Pop, You Can't Stop'?", ["Lay's", "Pringles", "Doritos", "Ruffles"], 1),
  cmc("Advertising", "Which chip brand dares you: 'Betcha Can't Eat Just One'?", ["Pringles", "Lay's", "Doritos", "Cheetos"], 1),
  cmc("Advertising", "Which cookie calls itself 'Milk's Favorite Cookie'?", ["Chips Ahoy", "Oreo", "Nilla Wafers", "Fig Newtons"], 1),
  cmc("Advertising", "Which candy bar's classic slogan is 'Have a Break, Have a...'?", ["Twix", "Kit Kat", "Snickers", "Milky Way"], 1),
  cmc("Advertising", "Which candy bar's modern slogan is 'You're Not You When You're Hungry'?", ["Mars", "Snickers", "Twix", "3 Musketeers"], 1),
  cmc("Advertising", "Which cola's 1980s slogan was 'The Choice of a New Generation'?", ["Coca-Cola", "Pepsi", "Dr Pepper", "RC Cola"], 1),
  cmc("Advertising", "Which lemon-lime soda was marketed for years as 'The Uncola'?", ["Sprite", "7UP", "Sierra Mist", "Canada Dry"], 1),
  cmc("Advertising", "Which drink's slogan is 'Do the Dew'?", ["Mello Yello", "Mountain Dew", "Surge", "Sprite"], 1),
  cmc("Advertising", "Which sports drink asked athletes, 'Is It in You?'", ["Powerade", "Gatorade", "Vitamin Water", "BodyArmor"], 1),
  cmc("Advertising", "Which sportswear brand's slogan is 'Impossible Is Nothing'?", ["Nike", "Adidas", "Under Armour", "Reebok"], 1),
  cmc("Advertising", "Which software company's 1990s slogan asked, 'Where Do You Want to Go Today?'", ["Apple", "Microsoft", "IBM", "Dell"], 1),
  cmc("Advertising", "Which chipmaker's famous campaign put its name 'Inside' computers?", ["AMD", "Intel", "Texas Instruments", "Qualcomm"], 1),
  cmc("Advertising", "Which phone company's classic slogan was 'Reach Out and Touch Someone'?", ["Sprint", "AT&T", "MCI", "Verizon"], 1),
  cmc("Advertising", "Flo, the cheerful saleswoman in the white apron, advertises which insurer?", ["GEICO", "Progressive", "State Farm", "Liberty Mutual"], 1),
  cmc("Advertising", "Which beer is nicknamed 'The Silver Bullet'?", ["Bud Light", "Coors Light", "Miller Lite", "Michelob Ultra"], 1),
  cmc("Advertising", "The 'Most Interesting Man in the World' ads promoted which beer?", ["Corona", "Dos Equis", "Tecate", "Modelo"], 1),
  cmc("Advertising", "Which card network's long-running campaign calls priceless experiences 'Priceless'?", ["Visa", "Mastercard", "American Express", "Discover"], 1),
  cmc("Advertising", "Which card company's classic slogan was 'It's Everywhere You Want to Be'?", ["Mastercard", "Visa", "Discover", "Capital One"], 1),
  cmc("Advertising", "Which bank and card brand asks, 'What's in Your Wallet?'", ["Visa", "Capital One", "Chase", "Citi"], 1),
  cmc("Advertising", "Which city's tourism slogan promises, 'What Happens Here, Stays Here'?", ["Atlantic City", "Las Vegas", "Reno", "Monaco"], 1),
  cmc("Advertising", "Which fast-food chain's ads have cows urging people to 'Eat Mor Chikin'?", ["Wendy's", "Chick-fil-A", "Arby's", "Sonic"], 1),
  cmc("Advertising", "Which branch of the US military used the slogan 'Be All You Can Be'?", ["US Navy", "US Army", "US Marine Corps", "US Air Force"], 1),
  cmc("Advertising", "Which branch of the US military uses the slogan 'The Few. The Proud.'?", ["US Army", "US Marine Corps", "US Navy", "US Coast Guard"], 1),
  cmc("Advertising", "The giggling doughboy mascot Poppin' Fresh advertises which baking brand?", ["Betty Crocker", "Pillsbury", "Duncan Hines", "Bisquick"], 1),
  cmc("Advertising","Which brand's slogan is 'Just Do It'?", ["Adidas","Nike","Reebok","Puma"], 1, "Nike launched the slogan in 1988."),
  cmc("Advertising","Which fast-food chain's slogan is 'I'm Lovin' It'?", ["Burger King","Wendy's","McDonald's","KFC"], 2, "The jingle arrived in 2003 and became McDonald's longest-running slogan."),
  cmc("Advertising","Which fast-food chain's slogan is 'Finger Lickin' Good'?", ["McDonald's","Popeyes","Chick-fil-A","KFC"], 3, "The slogan dates to the 1950s and is tied to Colonel Sanders."),
  cmc("Advertising","Which company's slogan is 'Think Different'?", ["Microsoft","Apple","IBM","Samsung"], 1, "The 1997 campaign marked Steve Jobs's return to Apple."),
  cmc("Advertising","Which cosmetics brand's slogan is 'Because You're Worth It'?", ["Maybelline","Revlon","L'Oréal","Nivea"], 2, "Written in 1971, it is one of advertising's most famous lines."),
  cmc("Advertising","Which company's slogan is 'A Diamond Is Forever'?", ["Tiffany & Co.","Cartier","De Beers","Zales"], 2, "The 1948 line helped make the diamond the standard engagement-ring stone."),
  cmc("Advertising","Which candy's slogan is 'Melts in Your Mouth, Not in Your Hands'?", ["Skittles","M&M's","Reese's Pieces","Hershey's Kisses"], 1, "The slogan dates to the 1950s and plays on the candy shell."),
  cmc("Advertising","Which car brand's slogan is 'The Ultimate Driving Machine'?", ["Mercedes-Benz","Audi","Lexus","BMW"], 3, "BMW has used the line since the 1970s."),
  cmc("Advertising","Tony the Tiger's catchphrase 'They're Gr-r-reat!' advertises which cereal?", ["Lucky Charms","Frosted Flakes","Cocoa Puffs","Cap'n Crunch"], 1, "Tony has been the Frosted Flakes mascot since 1952."),
  cmc("Advertising","Snap, Crackle, and Pop are the mascots of which cereal?", ["Corn Flakes","Cheerios","Rice Krispies","Froot Loops"], 2, "The three elves are named for the sounds the cereal makes in milk."),
  cmc("Advertising","Which beer's slogan is 'The King of Beers'?", ["Coors","Miller Lite","Budweiser","Heineken"], 2, "Budweiser has billed itself as the King of Beers for over a century."),
  cmc("Advertising","Which phone carrier asked 'Can You Hear Me Now?'", ["AT&T","T-Mobile","Sprint","Verizon"], 3, "The line ran from 2002, delivered by actor Paul Marcarelli."),
  cmc("Advertising","Which coffee brand's slogan is 'Good to the Last Drop'?", ["Folgers","Maxwell House","Nescafé","Starbucks"], 1, "The slogan is often credited to a remark by President Theodore Roosevelt."),
  cmc("Advertising","Which insurer's slogan is 'Like a Good Neighbor'?", ["Allstate","GEICO","State Farm","Progressive"], 2, "The jingle was written by Barry Manilow in 1971."),
  cmc("Advertising","Which insurer's slogan is 'You're in Good Hands'?", ["State Farm","Allstate","Nationwide","Farmers"], 1, "Allstate has used the line since 1956."),
  cmc("Advertising","Which cereal's slogan is 'Breakfast of Champions'?", ["Cheerios","Special K","Wheaties","Corn Flakes"], 2, "Wheaties boxes famously feature champion athletes."),
  cmc("Advertising","The 1984 'Where's the Beef?' ads were for which fast-food chain?", ["McDonald's","Burger King","Arby's","Wendy's"], 3, "Clara Peller's line became a national catchphrase."),
  cmc("Advertising","Which theme park bills itself as 'The Happiest Place on Earth'?", ["Walt Disney World","Universal Studios","Disneyland","Six Flags"], 2, "Disneyland in California has carried the nickname since it opened in 1955."),
  cmc("Advertising","Which airline's long-running slogan was 'Fly the Friendly Skies'?", ["United Airlines","Delta Air Lines","American Airlines","Pan Am"], 0, "United first used the line in 1965 — and brought it back in 2013."),
  cmc("Advertising","Which candy's slogan is 'Taste the Rainbow'?", ["M&M's","Skittles","Starburst","Jelly Belly"], 1, "Skittles has used the line since the 1980s."),
  cmc("Advertising","Which fast-food chain's slogan is 'Have It Your Way'?", ["McDonald's","Burger King","Wendy's","Five Guys"], 1, "Burger King introduced the line in 1974."),
  cmc("Advertising","Which soft drink's classic slogan is 'It's the Real Thing'?", ["Pepsi","Coca-Cola","Dr Pepper","RC Cola"], 1, "Coca-Cola launched the slogan in 1969."),
  cmc("Advertising","Which motel chain's slogan is 'We'll Leave the Light On for You'?", ["Motel 6","Holiday Inn","Best Western","Days Inn"], 0, "Radio ads voiced by Tom Bodett made the line famous from 1986."),
  cmc("Advertising","Which gum's slogan is 'Double Your Pleasure, Double Your Fun'?", ["Wrigley's Doublemint","Trident","Orbit","Extra"], 0, "The Doublemint Twins starred in the ads for decades."),
  cmc("Advertising","Which card company's slogan was 'Don't Leave Home Without It'?", ["Visa","Mastercard","American Express","Discover"], 2, "American Express launched the line in 1975."),
  cmc("Advertising","Which cereal's slogan is 'They're Magically Delicious'?", ["Froot Loops","Lucky Charms","Trix","Fruity Pebbles"], 1, "Lucky the Leprechaun has guarded his Lucky Charms since 1964."),
  cmc("Advertising","Which sandwich chain's slogan is 'Eat Fresh'?", ["Subway","Quiznos","Jimmy John's","Jersey Mike's"], 0),
  cmc("Advertising","Which phone maker's slogan was 'Connecting People'?", ["Samsung","Nokia","Motorola","Sony"], 1, "Nokia's line dates to 1992, from its years dominating mobile phones."),
  cmc("Advertising","The slogan 'When It Absolutely, Positively Has to Be There Overnight' belonged to which delivery company?", ["UPS","FedEx","DHL","USPS"], 1, "FedEx ran the line from 1978 — a promise of guaranteed overnight delivery.")
],
marketing:[
  cmc("Marketing", "In marketing, 'CRM' stands for what?", ["Customer Relationship Management", "Consumer Retail Marketing", "Central Revenue Model", "Creative Rights Management"], 0),
  cmc("Marketing", "In a SWOT analysis, what does the 'S' stand for?", ["Sales", "Strengths", "Strategy", "Segmentation"], 1),
  cmc("Marketing", "A 'target market' is best described as what?", ["The whole population", "A specific group of consumers a company aims to reach", "A type of store", "A sales quota"], 1),
  cmc("Marketing", "'Market share' means what?", ["The price of a company's stock", "A company's sales as a percentage of the total market's sales", "The number of stores a company owns", "A discount rate"], 1),
  cmc("Marketing", "In the product life cycle, which stage comes right after growth?", ["Introduction", "Maturity", "Decline", "Development"], 1),
  cmc("Marketing", "'Brand loyalty' describes customers who do what?", ["Switch brands often", "Buy the same brand repeatedly", "Only buy on sale", "Avoid advertising"], 1),
  cmc("Marketing", "Handing out free samples in a store is an example of which promotion type?", ["Public relations", "Sales promotion", "Personal selling", "Direct mail"], 1),
  cmc("Marketing", "'Word-of-mouth' marketing spreads mainly through what?", ["TV ads", "Customers telling other people", "Billboards", "Coupons"], 1),
  cmc("Marketing", "What is a 'niche market'?", ["A mass market", "A small, specialized segment of a market", "An online-only store", "A luxury brand"], 1),
  cmc("Marketing", "'Upselling' means persuading a customer to do what?", ["Return a product", "Buy a more expensive or upgraded version", "Shop elsewhere", "Pay in cash"], 1),
  cmc("Marketing", "'Cross-selling' means offering a customer what?", ["A competitor's product", "Additional related products", "A refund", "A new store location"], 1),
  cmc("Marketing", "The modern 'marketing concept' says a company should focus first on what?", ["Production efficiency", "Customer needs and satisfaction", "Lowest costs", "Sales volume alone"], 1),
  cmc("Marketing", "Which of these is an example of direct marketing?", ["A TV commercial", "An email sent to a specific customer list", "A billboard", "A newspaper press release"], 1),
  cmc("Marketing", "Public relations (PR) differs from advertising mainly because PR does what?", ["Always costs more", "Earns media coverage rather than buying it", "Uses only radio", "Sells products directly"], 1),
  cmc("Marketing", "A 'slogan' is best described as what?", ["A company's legal name", "A short, memorable phrase promoting a brand", "A product's price tag", "A type of logo"], 1),
  cmc("Marketing", "In marketing, 'demographics' are data about what?", ["Weather patterns", "Age, income, and other traits of a population", "Stock prices", "Store layouts"], 1),
  cmc("Marketing", "In business marketing, 'B2C' stands for what?", ["Business to Consumer", "Brand to Customer", "Business to Corporation", "Buyer to Consumer"], 0),
  cmc("Marketing", "A customer 'loyalty program' rewards customers for what?", ["Complaining", "Repeat purchases", "Returning items", "Watching ads"], 1),
  cmc("Marketing", "What is 'merchandising'?", ["Setting tax rates", "How products are displayed and promoted in stores", "Shipping goods overseas", "Hiring sales staff"], 1),
  cmc("Marketing", "'Test marketing' means doing what?", ["Giving a school exam", "Launching a product in a small area before a full rollout", "Only testing product safety", "Surveying employees"], 1),
  cmc("Marketing", "The 2014 'Ice Bucket Challenge' is a famous example of which kind of marketing?", ["Viral marketing", "Direct mail", "Telemarketing", "Trade shows"], 0),
  cmc("Marketing", "Paying social-media personalities to promote a product is called what?", ["Influencer marketing", "Cold calling", "Door-to-door selling", "Catalog marketing"], 0),
  cmc("Marketing", "A 'call to action' in an ad is what?", ["A phone number only", "A prompt telling the audience what to do next, like 'Buy now'", "A customer complaint", "The ad's headline"], 1),
  cmc("Marketing", "'Rebranding' means doing what?", ["Lowering prices", "Changing a brand's name, logo, or image", "Opening new stores", "Hiring a new CEO"], 1),
  cmc("Marketing", "'Cause marketing' links a brand with what?", ["A sports team", "A charitable or social cause", "A celebrity", "A holiday sale"], 1),
  cmc("Marketing", "The branding 'halo effect' happens when what occurs?", ["A logo is redesigned", "One well-liked product improves opinions of the whole brand", "Prices rise across a brand", "An ad campaign wins an award"], 1),
  cmc("Marketing", "When 'Band-Aid' is used in the US as the everyday word for any adhesive bandage, it shows the brand has become what?", ["Worthless", "A household generic name for its product category", "Discontinued", "A luxury brand"], 1),
  cmc("Marketing", "In business, 'ROI' stands for what?", ["Return on Investment", "Rate of Interest", "Revenue on Inventory", "Return of Income"], 0),
  cmc("Marketing", "'Telemarketing' is selling mainly by what means?", ["Television", "Telephone", "Telegram", "Email"], 1),
  cmc("Marketing", "A 'jingle' in advertising is what?", ["A bell on a store door", "A short, catchy song used in an ad", "A sales report", "A coupon book"], 1),
  cmc("Marketing", "Which retail giant built its fame on an 'everyday low prices' strategy?", ["Target", "Walmart", "Costco", "Kmart"], 1),
  cmc("Marketing", "'Showrooming' is when shoppers do what?", ["Decorate showrooms", "Examine products in a store, then buy them online", "Work as store greeters", "Test-drive cars"], 1),
  cmc("Marketing", "In the US, 'Black Friday' sales traditionally fall on the day after which holiday?", ["Christmas", "Thanksgiving", "Halloween", "Easter"], 1),
  cmc("Marketing", "A 'pop-up shop' is best described as what?", ["A shop inside a mall", "A temporary retail space open for a short time", "An online ad window", "A warehouse sale"], 1),
  cmc("Marketing","The classic '4 Ps' of the marketing mix are Product, Price, Place, and…", ["Profit","Promotion","Packaging","Publicity"], 1, "The framework was popularized by E. Jerome McCarthy in 1960."),
  cmc("Marketing","In a SWOT analysis, what does the 'O' stand for?", ["Options","Objectives","Opportunities","Obstacles"], 2, "SWOT weighs Strengths, Weaknesses, Opportunities, and Threats."),
  cmc("Marketing","Dividing a market into distinct groups of buyers with different needs is called…", ["Market segmentation","Brand positioning","Market penetration","Product differentiation"], 0, "Segments are then matched with targeted products and messages."),
  cmc("Marketing","Coca-Cola's unpopular 1985 reformulation, withdrawn after a public backlash, was called…", ["Crystal Pepsi","Cherry Coke","New Coke","Coca-Cola BlāK"], 2, "The original returned within months as Coca-Cola Classic."),
  cmc("Marketing","Avis's famous 'We Try Harder' campaign was built on admitting the company held what spot in its market?", ["First","Second","Third","Last"], 1, "The 1962 campaign turned being No. 2 behind Hertz into a selling point."),
  cmc("Marketing","Paying for a brand's product to appear in a film or TV show is called…", ["Guerrilla marketing","Direct marketing","Viral marketing","Product placement"], 3, "Reese's Pieces sales jumped after appearing in E.T."),
  cmc("Marketing","Coca-Cola's 'Share a Coke' campaign replaced the logo on bottles with what?", ["Song lyrics","First names","Famous quotes","City names"], 1, "The campaign began in Australia in 2011."),
  cmc("Marketing","Which company's 1930s holiday ads helped popularize the modern red-suited Santa Claus?", ["Pepsi","Hallmark","Coca-Cola","Macy's"], 2, "Artist Haddon Sundblom painted Coke's Santas from 1931."),
  cmc("Marketing","Which company created the slogan 'A Diamond Is Forever'?", ["Zales","De Beers","Cartier","Tiffany & Co."], 1, "De Beers coined the slogan in 1947 — copywriter Frances Gerety of the N.W. Ayer agency wrote the line."),
  cmc("Marketing","'Viral marketing' relies mainly on…", ["Prime-time TV spots","Newspaper coupons","Customers sharing content with each other","Highway billboards"], 2, "The content spreads person to person, like a virus."),
  cmc("Marketing","A 'focus group' in marketing research is…", ["A company's executive team","A small group of consumers who discuss a product","A panel of retail buyers","A team of advertising copywriters"], 1, "Their discussion guides product and campaign decisions."),
  cmc("Marketing","The cigarette-smoking 'Marlboro Man' advertised which product category?", ["Whiskey","Cigarettes","Denim jeans","Pickup trucks"], 1, "The cowboy campaign began in 1955."),
  cmc("Marketing","The celebrated 1959 'Think Small' ad campaign promoted which car?", ["Ford Mustang","Chevrolet Corvair","Volkswagen Beetle","Fiat 500"], 2, "It sold an unglamorous small car with honesty and white space."),
  cmc("Marketing","'Brand equity' refers to…", ["The stock a brand's owners hold","The extra value a recognized brand name adds to a product","A brand's annual advertising budget","The resale value of a company's factories"], 1, "Strong brand equity lets familiar names command loyalty and higher prices."),
  cmc("Marketing","The Happy Meal, introduced in 1979, belongs to which chain?", ["Burger King","Wendy's","McDonald's","Dairy Queen"], 2, "It was inspired by a Guatemalan McDonald's operator's kids' menu."),
  cmc("Marketing","The 1975 'Pepsi Challenge' campaign was built around a blind…", ["Endurance contest","Price comparison","Logo quiz","Taste test"], 3, "Shoppers who preferred Pepsi in the test were filmed on the spot.", ["Tasting","taste testing"]),
  cmc("Marketing","A 'loss leader' is a product sold…", ["Only after a competitor's launch","At a very low price, even at a loss, to draw in customers","Exclusively to other businesses","With a celebrity endorsement"], 1, "The store profits from what else those customers buy."),
  cmc("Marketing","In business marketing, 'B2B' stands for…", ["Business-to-business","Brand-to-buyer","Back-to-basics","Buy-two-get-one"], 0, "Its counterpart, B2C, is business-to-consumer."),
  cmc("Marketing","In digital marketing, 'SEO' stands for…", ["Search Engine Optimization","Social Engagement Outreach","Sales Enhancement Online","Search Engine Ordering"], 0, "The goal is ranking higher in search results without paying for ads."),
  cmc("Marketing","A product's 'USP' is its Unique Selling…", ["Price","Proposition","Program","Package"], 1, "The one thing it offers that competitors don't."),
  cmc("Marketing","Selling several products together for a single combined price is called…", ["Price skimming","Product bundling","Market segmentation","Brand extension"], 1, "Meal deals and software suites are classic bundles."),
  cmc("Marketing","Charging a high price at launch, then gradually lowering it, is called…", ["Penetration pricing","Price skimming","Loss leading","Dynamic pricing"], 1, "New technology is often introduced this way, aimed first at early adopters."),
  cmc("Marketing","Charging a low price at launch to win market share quickly is called…", ["Price skimming","Penetration pricing","Premium pricing","Bundle pricing"], 1, "The opposite of price skimming."),
  cmc("Marketing","Paying a famous person to praise a product in ads is an example of…", ["Guerrilla marketing","Celebrity endorsement","Direct marketing","Trade shows"], 1, "The star's fame is meant to rub off on the brand."),
  cmc("Marketing","The word 'freemium' combines 'free' with which word?", ["Minimum","Premium","Medium","Optimum"], 1, "A basic version is free; the upgrades cost money."),
  cmc("Marketing","In retail, 'POS' stands for…", ["Point of sale","Price on shelf","Product ordering system","Promotion of the season"], 0, "The point of sale is where the customer pays — the checkout."),
  cmc("Marketing","'Brand awareness' measures…", ["How many stores stock a brand","How familiar consumers are with a brand","A brand's legal registration","A brand's profit margin"], 1, "It is why advertisers repeat names and logos so often."),
  cmc("Marketing","The AIDA advertising model stands for Attention, Interest, Desire, and…", ["Action","Awareness","Attraction","Audience"], 0, "It traces the steps from first noticing an ad to buying.")
],
riddles:[
  cmc("Riddles", "Riddle: What has a face and two hands but no arms or legs?", ["A clock", "A scarecrow", "A coin", "A mirror"], 0),
  cmc("Riddles", "Riddle: What has a thumb and four fingers but is not alive?", ["A glove", "A statue", "A puppet", "A robot"], 0),
  cmc("Riddles", "Riddle: The more of me you have, the less you see. What am I?", ["Fog", "Darkness", "Distance", "Time"], 1),
  cmc("Riddles", "Riddle: What comes once in a minute, twice in a moment, but never in a thousand years?", ["The letter M", "Time", "A breath", "A second hand"], 0),
  cmc("Riddles", "Riddle: What has a bottom at the very top?", ["A bottle", "Your legs", "A ladder", "A mountain"], 1),
  cmc("Riddles", "Riddle: What gets sharper the more you use it?", ["A knife", "Your brain", "A pencil", "Your eyesight"], 1),
  cmc("Riddles", "Riddle: What kind of tree can you carry in your hand?", ["A palm", "A bonsai", "A twig", "A pine"], 0),
  cmc("Riddles", "Riddle: What goes up and down but never moves?", ["An elevator", "A staircase", "A flag", "The sun"], 1),
  cmc("Riddles", "Riddle: What has a tongue but cannot speak?", ["A shoe", "A sock", "A footprint", "A doormat"], 0),
  cmc("Riddles", "Riddle: I have branches, but no fruit, trunk, or leaves. What am I?", ["A library", "A bank", "A river", "A subway"], 1),
  cmc("Riddles", "Riddle: What can you hold in your left hand but not in your right hand?", ["Your right elbow", "A pen", "A coin", "Your left thumb"], 0),
  cmc("Riddles", "Riddle: What is easy to get into but hard to get out of?", ["A car", "Trouble", "A jacket", "A crowd"], 1),
  cmc("Riddles", "Riddle: What has many needles but never sews?", ["A sewing basket", "A Christmas tree", "A porcupine", "A haystack"], 1),
  cmc("Riddles", "Riddle: People buy me to eat, but they never eat me. What am I?", ["A plate", "A recipe", "A napkin", "A menu"], 0),
  cmc("Riddles", "Riddle: In the Sphinx's famous riddle, what walks on four legs in the morning, two at noon, and three in the evening?", ["A dog", "A human", "A horse", "A spider"], 1),
  cmc("Riddles", "Riddle: What has bark but no bite?", ["A dog", "A tree", "A seal", "A drum"], 1),
  cmc("Riddles", "Riddle: What can be cracked, made, told, and played?", ["A code", "A joke", "A game", "A promise"], 1),
  cmc("Riddles", "Riddle: What has a heart that never beats?", ["A statue", "An artichoke", "A robot", "A drum"], 1),
  cmc("Riddles", "Riddle: What goes through cities and fields but never moves?", ["A river", "A road", "A train", "The wind"], 1),
  cmc("Riddles", "Riddle: What has a spine but no bones?", ["A book", "A snake", "A leaf", "A chair"], 0),
  cmc("Riddles", "Riddle: What can you break without ever picking it up or touching it?", ["A promise", "A window", "A stick", "An egg"], 0),
  cmc("Riddles", "Riddle: What runs all around a backyard yet never moves?", ["A fence", "A sprinkler", "A dog", "A path"], 0),
  cmc("Riddles", "Riddle: What is always coming but never arrives?", ["Tomorrow", "The mail", "Winter", "A train"], 0),
  cmc("Riddles", "Riddle: What kind of ship has two mates but no captain?", ["A relationship", "A cargo ship", "A battleship", "A cruise ship"], 0),
  cmc("Riddles", "Riddle: What begins with T, ends with T, and has T in it?", ["A teapot", "A tent", "A trumpet", "A ticket"], 0),
  cmc("Riddles", "Riddle: What can travel all around the world without leaving its corner?", ["A stamp", "A letter", "An email", "A satellite"], 0),
  cmc("Riddles", "Riddle: What has the head of a cat, the feet of a cat, but is not a cat?", ["A kitten", "A tiger", "A statue", "A shadow"], 0),
  cmc("Riddles", "Riddle: Which word becomes shorter when you add two letters to it?", ["Short", "Brief", "Small", "Long"], 0),
  cmc("Riddles", "Riddle: What do you throw out when you want to use it, and take in when you are done with it?", ["An anchor", "A fishing line", "A life jacket", "A sail"], 0),
  cmc("Riddles", "Riddle: What kind of coat is always wet when you put it on?", ["A raincoat", "A coat of paint", "A fur coat", "A lab coat"], 1),
  cmc("Riddles", "Riddle: What goes up a chimney down, but cannot go down a chimney up?", ["An umbrella", "Smoke", "A cat", "A sweep"], 0),
  cmc("Riddles", "Riddle: What is black when it is clean and white when it is dirty?", ["A chalkboard", "A penguin", "A newspaper", "A zebra"], 0),
  cmc("Riddles", "Riddle: What is at the end of a rainbow?", ["A pot of gold", "The letter W", "A cloud", "The sky"], 1),
  cmc("Riddles", "Riddle: What has a head, cannot think, and is hit with a hammer?", ["A nail", "A drum", "A bell", "A bottle"], 0),
  cmc("Riddles","Riddle: What has keys but can't open a single lock?", ["A map","A piano","A backpack","A ladder"], 1, "A piano's keys make music instead of opening doors."),
  cmc("Riddles","Riddle: What has a head and a tail but no body?", ["A river","A kite","A coin","A story"], 2, "Heads and tails — the two sides of a coin."),
  cmc("Riddles","Riddle: What gets wetter the more it dries?", ["A bar of soap","A puddle","A cloud","A towel"], 3, "A towel soaks up water as it dries you off."),
  cmc("Riddles","Riddle: What has many teeth but cannot bite?", ["A comb","A pillow","A mirror","A candle"], 0, "A comb's teeth run through hair."),
  cmc("Riddles","Riddle: What runs but never walks, has a mouth but never talks, and has a bed but never sleeps?", ["A clock","A car","A river","A waterfall"], 2, "A river runs, has a mouth, and rests in a riverbed."),
  cmc("Riddles","Riddle: What has one eye but can't see?", ["A button","A needle","A marble","A spoon"], 1, "Thread passes through a needle's eye."),
  cmc("Riddles","Riddle: The more of me you take, the more you leave behind. What am I?", ["Photographs","Memories","Footsteps","Books"], 2, "Every step you take leaves a footprint behind."),
  cmc("Riddles","Riddle: What has a neck but no head?", ["A jacket","A lamp","A bottle","A chair"], 2, "The narrow top of a bottle is its neck."),
  cmc("Riddles","Riddle: What can you catch, but never throw?", ["A fish","A bus","A breeze","A cold"], 3, "You catch a cold — no throwing involved."),
  cmc("Riddles","Riddle: What belongs to you, but everyone else uses it more than you do?", ["Your car","Your name","Your phone","Your shadow"], 1, "Other people say your name far more often than you do."),
  cmc("Riddles","Riddle: What has hands but can't clap?", ["A clock","A map","A sandwich","A ladder"], 0, "A clock's hands point at the hours."),
  cmc("Riddles","Riddle: What goes up but never comes back down?", ["A balloon","Your age","The sun","Smoke"], 1, "Your age only ever increases."),
  cmc("Riddles","Riddle: What has words but never speaks?", ["A book","A piano","A photograph","A clock"], 0, "A book is full of words but stays silent."),
  cmc("Riddles","Riddle: I'm tall when I'm young and short when I'm old. What am I?", ["A snowman","A candle","A shadow","A puppy"], 1, "A candle melts down as it ages."),
  cmc("Riddles","Riddle: What has a ring but no finger?", ["A teapot","A bicycle","A telephone","A wedding cake"], 2, "A telephone rings without wearing a ring."),
  cmc("Riddles","Riddle: What kind of room has no doors or windows?", ["A basement","A mushroom","A tent","An igloo"], 1, "A mushroom is a 'room' with no way in."),
  cmc("Riddles","Riddle: What can fill a room but takes up no space?", ["Dust","Paint","Light","A carpet"], 2, "Light floods a room without taking up room."),
  cmc("Riddles","Riddle: What has 13 hearts but no other organs?", ["A chess set","A domino set","A deck of cards","A dartboard"], 2, "The hearts suit alone holds 13 cards — and not one real organ."),
  cmc("Riddles","Riddle: What has cities but no houses, forests but no trees, and rivers without water?", ["A globe","A map","A painting","A dream"], 1, "A map draws them all without a drop of water."),
  cmc("Riddles","Riddle: What is full of holes but still holds water?", ["A net","A sponge","A bucket","A sieve"], 1, "Squeeze a sponge and the water pours out."),
  cmc("Riddles","Riddle: The person who makes me has no need of me; the person who buys me has no use for me; the person who uses me can neither see nor feel me. What am I?", ["A coffin","A mirror","A candle","A book"], 0, "A classic riddle, centuries old."),
  cmc("Riddles","Riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", ["An echo","A shadow","A wave","A flame"], 0, "An echo answers back without ever speaking first."),
  cmc("Riddles","Riddle: What is always in front of you but can never be seen?", ["The past","The future","Your shadow","Your reflection"], 1, "You face the future every moment — and never see it."),
  cmc("Riddles","Riddle: What has one head, one foot, and four legs?", ["A table","A bed","A chair","A dog"], 1, "A bed has a head, a foot, and four legs of its own."),
  cmc("Riddles","Riddle: What gets bigger the more you take away from it?", ["A hole","A pile of sand","A shadow","A debt"], 0, "Digging makes a hole bigger by taking earth away."),
  cmc("Riddles","Riddle: What kind of band never plays music?", ["A rubber band","A jazz band","A marching band","A wedding band"], 0),
  cmc("Riddles","Riddle: What has four wheels and flies?", ["An airplane","A garbage truck","A helicopter","A dragonfly"], 1, "The 'flies' are the insects buzzing around it."),
  cmc("Riddles","Riddle: Which word is spelled incorrectly in every dictionary?", ["Incorrectly","Misspelled","Wrong","Error"], 0, "The word 'incorrectly' is spelled i-n-c-o-r-r-e-c-t-l-y — as it should be.")
],
sports:[
  cmc("Sports", "In golf, a score of two under par on a single hole is called what?", ["Birdie", "Bogey", "Eagle", "Albatross"], 2),
  cmc("Sports", "How many players does a rugby union team field at once?", ["11", "13", "15", "7"], 2),
  cmc("Sports", "In tennis, a serve the receiver cannot touch at all is called what?", ["Volley", "Ace", "Fault", "Deuce"], 1),
  cmc("Sports", "In soccer, scoring three goals in one match by one player is called what?", ["Brace", "Hat-trick", "Treble", "Clean sheet"], 1),
  cmc("Sports", "How many innings are in a standard professional baseball game, before extra innings?", ["7", "9", "6", "10"], 1),
  cmc("Sports", "In baseball, 'RBI' stands for what?", ["Runs Before Innings", "Run Batted In", "Runs By Inning", "Runner Bases In"], 1),
  cmc("Sports", "Which swimmer won a record eight gold medals at the 2008 Beijing Olympics?", ["Ian Thorpe", "Michael Phelps", "Mark Spitz", "Ryan Lochte"], 1),
  cmc("Sports", "In American football, how many yards must the offense gain for a first down?", ["5", "10", "15", "20"], 1),
  cmc("Sports", "The Super Bowl decides the champion of which league?", ["NBA", "NFL", "MLB", "NHL"], 1),
  cmc("Sports", "How many players from each team are on a basketball court at one time?", ["4", "5", "6", "7"], 1),
  cmc("Sports", "Which boxer famously promised to 'float like a butterfly, sting like a bee'?", ["Joe Frazier", "Muhammad Ali", "Mike Tyson", "George Foreman"], 1),
  cmc("Sports", "The Giro d'Italia is a major cycling stage race held mainly in which country?", ["France", "Spain", "Italy", "Belgium"], 2),
  cmc("Sports", "Which golf tournament is played each April at Augusta National?", ["The Open Championship", "The Masters", "The PGA Championship", "The Ryder Cup"], 1),
  cmc("Sports", "How many periods are in a standard ice hockey game?", ["2", "3", "4", "1"], 1),
  cmc("Sports", "In ice hockey, playing with more skaters than the other team because of a penalty is called what?", ["Power play", "Breakaway", "Face-off", "Icing"], 0),
  cmc("Sports", "In Formula 1, a checkered flag signals what?", ["A pit stop", "The end of the race", "A safety warning", "A restart"], 1),
  cmc("Sports", "In modern table tennis, a game is won by the first player to reach how many points?", ["11", "15", "21", "10"], 0),
  cmc("Sports", "In volleyball, how many hits can one team use before the ball must cross the net?", ["2", "3", "4", "Unlimited"], 1),
  cmc("Sports", "Which Korean martial art is famous for its high, fast kicks?", ["Karate", "Taekwondo", "Judo", "Kung Fu"], 1),
  cmc("Sports", "How many rounds are in a modern professional boxing championship fight?", ["10", "12", "15", "9"], 1),
  cmc("Sports", "Which city hosted the first modern Olympic Games in 1896?", ["Paris", "Athens", "London", "Rome"], 1),
  cmc("Sports", "In cricket, how many balls are bowled in one over?", ["4", "6", "8", "10"], 1),
  cmc("Sports", "In rugby union, how many points is a try worth?", ["3", "4", "5", "7"], 2),
  cmc("Sports", "The Wimbledon tennis championships are famously played on which playing surface?", ["Hard court", "Grass", "Clay", "Carpet"], 1),
  cmc("Sports", "In American football, a safety is worth how many points?", ["1", "2", "3", "6"], 1),
  cmc("Sports", "How long is an Olympic-size swimming pool, in meters?", ["25", "50", "100", "33"], 1),
  cmc("Sports", "The pommel horse and the still rings are apparatus in which sport?", ["Diving", "Gymnastics", "Wrestling", "Weightlifting"], 1),
  cmc("Sports", "A triathlon combines swimming, cycling, and which third sport?", ["Rowing", "Running", "Skiing", "Rock climbing"], 1),
  cmc("Sports", "The 'World Series' decides the champion of which sport?", ["Basketball", "Baseball", "American football", "Ice hockey"], 1),
  cmc("Sports", "How many players does each NFL team have on the field at once?", ["9", "10", "11", "12"], 2),
  cmc("Sports", "The 1992 US 'Dream Team' competed at the Olympics in which sport?", ["Baseball", "Basketball", "Soccer", "Volleyball"], 1),
  cmc("Sports", "In darts, what is the highest score possible with one dart?", ["50", "60", "100", "180"], 1),
  cmc("Sports", "How many frames are in a standard game of tenpin bowling?", ["9", "10", "11", "12"], 1),
  cmc("Sports", "In snooker, how many points is the black ball worth?", ["1", "5", "7", "10"], 2),
  cmc("Sports","How many players does a baseball team have on the field at once?", ["Eight","Nine","Ten","Eleven"], 1, "Nine fielders — the same nine who bat in the lineup."),
  cmc("Sports","In which sport would you hit a shuttlecock?", ["Squash","Tennis","Badminton","Table tennis"], 2, "The feathered shuttlecock is also called a birdie."),
  cmc("Sports","How many rings appear on the Olympic flag?", ["Four","Five","Six","Seven"], 1, "The five rings represent the inhabited continents."),
  cmc("Sports","A marathon is approximately how long?", ["13.1 miles","20 miles","26.2 miles","31 miles"], 2, "26 miles 385 yards — a half marathon is the 13.1."),
  cmc("Sports","In American football, a touchdown is worth how many points?", ["Three","Six","Seven","Two"], 1, "The extra-point kick can add one more."),
  cmc("Sports","Which sport is famously nicknamed 'the beautiful game'?", ["Tennis","Golf","Rugby","Soccer"], 3, "The nickname is associated with Pelé, who popularized it."),
  cmc("Sports","Michael Phelps, the most decorated Olympian ever, competed in which sport?", ["Gymnastics","Track and field","Swimming","Cycling"], 2, "Phelps won 23 Olympic gold medals."),
  cmc("Sports","The Stanley Cup is the championship trophy of which sport?", ["Basketball","Ice hockey","Baseball","Lacrosse"], 1, "It was first awarded in 1893."),
  cmc("Sports","In golf, one stroke under par on a hole is called a…", ["Bogey","Eagle","Birdie","Albatross"], 2, "Two under is an eagle; one over is a bogey."),
  cmc("Sports","How many Grand Slam tournaments are played in tennis each year?", ["Two","Three","Four","Five"], 2, "Australian Open, French Open, Wimbledon, and US Open."),
  cmc("Sports","Usain Bolt set his world records in which sport?", ["Swimming","Cycling","Track and field","Rowing"], 2, "Bolt's 100 m record of 9.58 seconds has stood since 2009."),
  cmc("Sports","In basketball, how many points is a free throw worth?", ["One","Two","Three","Four"], 0, "Shots from beyond the arc are worth three."),
  cmc("Sports","A standard round of golf is played over how many holes?", ["Nine","Twelve","Eighteen","Twenty-one"], 2, "Two loops of a nine-hole course."),
  cmc("Sports","Which boxer was nicknamed 'The Greatest'?", ["Mike Tyson","Muhammad Ali","Joe Frazier","Rocky Marciano"], 1, "Ali won the heavyweight title three times."),
  cmc("Sports","The Tour de France is a race in which sport?", ["Motor racing","Sailing","Cycling","Running"], 2, "Riders race roughly 3,500 km over three weeks each July."),
  cmc("Sports","In soccer, a player who is sent off is shown which card?", ["A yellow card","A red card","A white card","A black card"], 1, "A yellow card is a warning; a red means ejection."),
  cmc("Sports","How many bases are there on a baseball diamond?", ["Three","Four","Five","Six"], 1, "First, second, third, and home plate."),
  cmc("Sports","Simone Biles is a superstar of which sport?", ["Figure skating","Diving","Swimming","Gymnastics"], 3, "She is the most decorated gymnast in World Championships history."),
  cmc("Sports","How long is a standard soccer match, not counting stoppage time?", ["80 minutes","90 minutes","100 minutes","120 minutes"], 1, "Two halves of 45 minutes."),
  cmc("Sports","Basketball was invented in 1891 in which country?", ["Canada","United States","England","Germany"], 1, "Canadian-born James Naismith invented it in Springfield, Massachusetts — with a soccer ball and two peach baskets."),
  cmc("Sports","In tennis, a score of zero is called…", ["Nil","Love","Duck","Ace"], 1, "An ace is an untouchable serve — a very different thing."),
  cmc("Sports","The Vince Lombardi Trophy is awarded to the champions of which sport?", ["Basketball","American football","Baseball","Ice hockey"], 1, "It goes to the winners of the Super Bowl."),
  cmc("Sports","The modern Olympic Games are held every how many years?", ["Two years","Three years","Four years","Five years"], 2, "Summer and Winter Games alternate, so some Olympics happen every two years."),
  cmc("Sports","In baseball, how many strikes does it take to strike a batter out?", ["Two","Three","Four","Five"], 1, "Four balls, by contrast, earn the batter a walk."),
  cmc("Sports","The terms 'spare' and 'strike' belong to which sport?", ["Bowling","Cricket","Darts","Curling"], 0, "Ten frames, ten pins — a strike knocks down all ten at once."),
  cmc("Sports","Champion sprinter Usain Bolt comes from which country?", ["Kenya","United States","Jamaica","Ethiopia"], 2, "He remains the fastest man ever timed over 100 metres."),
  cmc("Sports","In American football, a field goal is worth how many points?", ["One","Two","Three","Six"], 2, "A safety is worth two; a touchdown, six."),
  cmc("Sports","The men's FIFA World Cup is held every how many years?", ["Two years","Three years","Four years","Five years"], 2, "It has been played every four years since 1930, apart from the war years.")
],
history:[
  cmc("History", "In which year did World War II begin?", ["1935", "1939", "1941", "1945"], 1),
  cmc("History", "The Great Pyramid of Giza was built as a tomb for which pharaoh?", ["Khafre", "Khufu", "Tutankhamun", "Ramesses II"], 1),
  cmc("History", "In which year did the American Civil War end?", ["1861", "1863", "1865", "1870"], 2),
  cmc("History", "The Victorian era is named after which British queen?", ["Queen Victoria", "Queen Elizabeth I", "Queen Anne", "Queen Mary I"], 0),
  cmc("History", "The Cold War was a long standoff mainly between the United States and which other superpower?", ["China", "The Soviet Union", "Germany", "Japan"], 1),
  cmc("History", "Who was the first European to reach India by sea, in 1498?", ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"], 1),
  cmc("History", "Gutenberg developed his printing press in Europe in which century?", ["13th century", "14th century", "15th century", "16th century"], 2),
  cmc("History", "Which US president was assassinated in Dallas in 1963?", ["Lyndon B. Johnson", "John F. Kennedy", "Richard Nixon", "Dwight D. Eisenhower"], 1),
  cmc("History", "Which Greek city-state was Athens' great military rival?", ["Corinth", "Sparta", "Thebes", "Delphi"], 1),
  cmc("History", "Who became the first emperor of Rome, in 27 BC?", ["Julius Caesar", "Augustus", "Nero", "Constantine"], 1),
  cmc("History", "The Hundred Years' War was fought mainly between England and which country?", ["Spain", "France", "Scotland", "The Netherlands"], 1),
  cmc("History", "In which year did India gain independence from Britain?", ["1945", "1947", "1950", "1930"], 1),
  cmc("History", "The US Declaration of Independence was adopted in which year?", ["1775", "1776", "1781", "1789"], 1),
  cmc("History", "Who led the Soviet Union through most of World War II?", ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"], 1),
  cmc("History", "Which river was the lifeline of ancient Egyptian civilization?", ["Euphrates River", "Nile River", "Tigris River", "Jordan River"], 1),
  cmc("History", "Which famous battle of 1066 changed the course of English history?", ["Battle of Agincourt", "Battle of Hastings", "Battle of Bosworth Field", "Battle of Naseby"], 1),
  cmc("History", "The Renaissance began in which European country?", ["France", "Italy", "Spain", "England"], 1),
  cmc("History", "Who was the first woman to fly solo across the Atlantic Ocean, in 1932?", ["Amelia Earhart", "Bessie Coleman", "Valentina Tereshkova", "Sally Ride"], 0),
  cmc("History", "Which spacecraft carried the first humans to land on the Moon?", ["Apollo 8", "Apollo 11", "Apollo 13", "Gemini 4"], 1),
  cmc("History", "The Great Depression began with a stock market crash in which year?", ["1929", "1933", "1925", "1939"], 0),
  cmc("History", "Which ancient wonder guided ships into the harbor of Alexandria, Egypt?", ["The Colossus of Rhodes", "The Lighthouse of Alexandria", "The Hanging Gardens", "The Statue of Zeus"], 1),
  cmc("History", "Who became India's first prime minister at independence in 1947?", ["Mohandas Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"], 1),
  cmc("History", "Viking explorer Leif Erikson reached North America at around which year?", ["800 AD", "1000 AD", "1200 AD", "1400 AD"], 1),
  cmc("History", "Julius Caesar was assassinated on the Ides of which month?", ["March", "May", "July", "October"], 0),
  cmc("History", "The ancient Olympic Games began in 776 BC, in which century BC?", ["8th century BC", "5th century BC", "2nd century BC", "1st century BC"], 0),
  cmc("History", "In which year did US women gain the nationwide right to vote, when the 19th Amendment was ratified?", ["1918", "1920", "1924", "1932"], 1),
  cmc("History", "Who is credited with inventing the telephone, patented in 1876?", ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"], 1),
  cmc("History", "World War I ended in which year?", ["1916", "1917", "1918", "1919"], 2),
  cmc("History", "Alaska was purchased by the United States from which country, in 1867?", ["Britain", "Russia", "France", "Spain"], 1),
  cmc("History", "Who became the first president of the French Fifth Republic, in 1959?", ["Charles de Gaulle", "Georges Pompidou", "Francois Mitterrand", "Jacques Chirac"], 0),
  cmc("History", "The samurai were the hereditary warrior class of which country?", ["China", "Japan", "Korea", "Mongolia"], 1),
  cmc("History", "The Aztec capital Tenochtitlan stood on the site of which modern city?", ["Bogota", "Mexico City", "Lima", "Quito"], 1),
  cmc("History", "In which year did the Soviet Union dissolve?", ["1989", "1990", "1991", "1993"], 2),
  cmc("History","World War I began in which year?", ["1905","1914","1918","1939"], 1, "It began in the summer of 1914, after the assassination of Archduke Franz Ferdinand."),
  cmc("History","Who was the first President of the United States?", ["John Adams","Thomas Jefferson","George Washington","Abraham Lincoln"], 2, "Washington served from 1789 to 1797 and set the two-term precedent."),
  cmc("History","The Berlin Wall, which divided Berlin for 28 years, was built in which year?", ["1945","1953","1961","1971"], 2, "It went up in August 1961 and fell in November 1989."),
  cmc("History","Who was the principal author of the US Declaration of Independence?", ["George Washington","Benjamin Franklin","John Hancock","Thomas Jefferson"], 3, "Jefferson drafted it in June 1776, at age 33."),
  cmc("History","The ancient Egyptian writing system of picture symbols is called…", ["Cuneiform","Hieroglyphs","Calligraphy","Sanskrit"], 1, "The Rosetta Stone unlocked its meaning in 1822."),
  cmc("History","The Wright brothers made the first powered airplane flight in which year?", ["1899","1903","1911","1927"], 1, "Their first flight at Kitty Hawk lasted 12 seconds."),
  cmc("History","Which leader was defeated at the Battle of Waterloo in 1815?", ["King Louis XVIII","Horatio Nelson","Napoleon Bonaparte","The Duke of Wellington"], 2, "Wellington commanded the army that defeated him."),
  cmc("History","The Mayflower carried the Pilgrims to America in which year?", ["1492","1588","1620","1776"], 2, "They founded Plymouth Colony in present-day Massachusetts."),
  cmc("History","What was the official language of the Roman Empire?", ["Greek","Latin","Aramaic","Sanskrit"], 1, "Latin spread across Europe and evolved into the Romance languages."),
  cmc("History","The Great Fire of London raged in which year?", ["1566","1666","1766","1866"], 1, "It destroyed much of the city in September 1666 but few lives were lost."),
  cmc("History","Which US president issued the Emancipation Proclamation?", ["Andrew Johnson","Ulysses S. Grant","Abraham Lincoln","James Buchanan"], 2, "It took effect on January 1, 1863, freeing enslaved people in the rebelling states."),
  cmc("History","Johannes Gutenberg is credited with developing which invention in Europe?", ["The steam engine","The telescope","The printing press","The compass"], 2, "His movable-type press, around 1440, transformed the spread of books."),
  cmc("History","The ancient Olympic Games were held in honor of which Greek god?", ["Apollo","Ares","Zeus","Poseidon"], 2, "A giant statue of Zeus stood at Olympia."),
  cmc("History","Who was Britain's prime minister for most of World War II?", ["Neville Chamberlain","Winston Churchill","Clement Attlee","Anthony Eden"], 1, "Churchill took office in May 1940, days before the Dunkirk evacuation."),
  cmc("History","The Magna Carta was sealed by King John in which year?", ["1066","1215","1348","1492"], 1, "It limited the king's power and later inspired constitutional law."),
  cmc("History","Which civilization built the pyramids of Giza?", ["The Aztecs","The Romans","The ancient Egyptians","The Maya"], 2, "The Great Pyramid was built around 2560 BC for Pharaoh Khufu.", ["Egyptians"]),
  cmc("History","The Wright brothers' first flight took place near which town?", ["Dayton","Kitty Hawk","Richmond","Baltimore"], 1, "They chose the North Carolina dunes for the wind and privacy."),
  cmc("History","Which explorer reached the Americas in 1492, sailing for Spain?", ["Ferdinand Magellan","Vasco da Gama","Christopher Columbus","Amerigo Vespucci"], 2, "He was seeking a westward sea route to Asia."),
  cmc("History","The Colosseum in Rome was built by which empire?", ["The Greek Empire","The Roman Empire","The Ottoman Empire","The Byzantine Empire"], 1, "Emperor Vespasian began it around 70 AD."),
  cmc("History","Who led the first expedition to reach the South Pole, in 1911?", ["Robert Falcon Scott","Roald Amundsen","Ernest Shackleton","Edmund Hillary"], 1, "Amundsen's Norwegian team arrived about a month before Scott's."),
  cmc("History","The French Revolution began in which year?", ["1689","1789","1889","1799"], 1, "The Bastille was stormed on July 14, 1789."),
  cmc("History","The Great Wall was built to guard which country's northern frontier?", ["Japan","Mongolia","China","Korea"], 2, "It was built and rebuilt over centuries, mostly by the Ming dynasty."),
  cmc("History","The Titanic sank in 1912 in which ocean?", ["The Pacific Ocean","The Indian Ocean","The Atlantic Ocean","The Arctic Ocean"], 2, "She was on her maiden voyage from Southampton to New York."),
  cmc("History","Who was the first woman ever to win a Nobel Prize?", ["Marie Curie","Rosalind Franklin","Ada Lovelace","Florence Nightingale"], 0, "Curie won in Physics in 1903 — and in Chemistry in 1911."),
  cmc("History","The Union and the Confederacy fought which war?", ["The Revolutionary War","The War of 1812","The American Civil War","The Spanish-American War"], 2, "It was fought from 1861 to 1865."),
  cmc("History","By tradition, the city of Rome was founded in which century BC?", ["The 8th century BC","The 5th century BC","The 3rd century BC","The 1st century BC"], 0, "Tradition puts the founding in 753 BC."),
  cmc("History","Which explorer led the first voyage around the world, completed in 1522?", ["Christopher Columbus","Ferdinand Magellan","Vasco da Gama","James Cook"], 1, "Magellan died on the way — Juan Sebastián Elcano brought the last ship home."),
  cmc("History","Which US state was the last to join the Union, in 1959?", ["Alaska","Hawaii","Arizona","New Mexico"], 1, "Hawaii joined in August 1959, a few months after Alaska.")
]};

/* ================= 2026-10-25 EXPANSION: +3,000 QUESTIONS =================
   Verified-facts expansion taking the bank from 2,000 to 5,000.
   New entries are pushed into the existing pools below, before the
   NEW_ALL registry snapshot, so every existing rule applies to them
   unchanged: answer-kind and gender distractor enforcement, the
   geography cap, seen-first dealing, typed judging (no parenthetical
   answer-form hints anywhere), and 'Why this is right:' facts
   authored with each question. Generated sets (elements, capitals,
   statehood years, amendments, arithmetic) are built from the same
   verified tables their facts are stated from. */
/* OWNER FIX 2026-11-13 — symbol initial leak: the generated
   "Which element has the chemical symbol 'X'?" sets below once
   drew their distractors from the neighbouring elements, so the
   answer was routinely the ONLY choice starting with the symbol's
   initial ('Bh' → Bohrium among Dubnium/Seaborgium/Rutherfordium)
   and the initial alone gave it away. Every such set now carries
   at least two distractors that share the symbol's initial
   (nearest in atomic number first, the bank's own spellings),
   audited across every chemical-symbol question in both
   directions. The only exceptions are the sets where the table
   itself cannot supply two: Zinc/Zirconium and Yttrium/Ytterbium
   share their initial with just one other element (that one is
   in the set), and Vanadium, Krypton, Xenon, and Uranium are the
   only elements with their initial at all. Latin-derived symbols
   (Fe → Iron, Au → Gold…) never pointed at the answer's initial
   and are unchanged. */
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'H'?", ["Helium","Holmium","Hafnium","Hydrogen"], 3, "H is the chemical symbol for Hydrogen, element 1 on the periodic table."));
TYPED.hard.push(typed("What is the chemical symbol for Hydrogen?", "H", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"H is the chemical symbol for Hydrogen."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'He'?", ["Helium","Hydrogen","Holmium","Hafnium"], 0, "He is the chemical symbol for Helium, element 2 on the periodic table."));
TYPED.medium.push(typed("What is the chemical symbol for Helium?", "He", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"He is the chemical symbol for Helium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Li'?", ["Lithium","Lanthanum","Lutetium","Lead"], 0, "Li is the chemical symbol for Lithium, element 3 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Lithium?", ["4", "2", "5", "3"], 3, "Lithium has atomic number 3, so its atoms have 3 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Lithium?", "Li", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Li is the chemical symbol for Lithium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Be'?", ["Boron","Bromine","Beryllium","Barium"], 2, "Be is the chemical symbol for Beryllium, element 4 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Beryllium?", ["4", "5", "3", "6"], 0, "Beryllium has atomic number 4, so its atoms have 4 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Beryllium?", "Be", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Be is the chemical symbol for Beryllium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'B'?", ["Beryllium","Boron","Bromine","Barium"], 1, "B is the chemical symbol for Boron, element 5 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Boron?", ["6", "4", "7", "5"], 3, "Boron has atomic number 5, so its atoms have 5 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Boron?", "B", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"B is the chemical symbol for Boron."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'C'?", ["Chlorine","Calcium","Carbon","Chromium"], 2, "C is the chemical symbol for Carbon, element 6 on the periodic table."));
TYPED.medium.push(typed("What is the chemical symbol for Carbon?", "C", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"C is the chemical symbol for Carbon."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'N'?", ["Neon","Nitrogen","Nickel","Niobium"], 1, "N is the chemical symbol for Nitrogen, element 7 on the periodic table."));
TYPED.hard.push(typed("What is the chemical symbol for Nitrogen?", "N", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"N is the chemical symbol for Nitrogen."}));
TYPED.medium.push(typed("What is the chemical symbol for Oxygen?", "O", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"O is the chemical symbol for Oxygen."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'F'?", ["Francium","Fluorine","Fermium","Flerovium"], 1, "F is the chemical symbol for Fluorine, element 9 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Fluorine?", ["10", "8", "11", "9"], 3, "Fluorine has atomic number 9, so its atoms have 9 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Fluorine?", "F", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"F is the chemical symbol for Fluorine."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ne'?", ["Nitrogen","Nickel","Neon","Niobium"], 2, "Ne is the chemical symbol for Neon, element 10 on the periodic table."));
TYPED.medium.push(typed("What is the chemical symbol for Neon?", "Ne", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ne is the chemical symbol for Neon."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Sodium?", ["11", "12", "10", "13"], 0, "Sodium has atomic number 11, so its atoms have 11 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Mg'?", ["Manganese","Molybdenum","Mercury","Magnesium"], 3, "Mg is the chemical symbol for Magnesium, element 12 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Magnesium?", ["13", "12", "11", "14"], 1, "Magnesium has atomic number 12, so its atoms have 12 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Magnesium?", "Mg", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Mg is the chemical symbol for Magnesium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Al'?", ["Aluminium","Argon","Arsenic","Antimony"], 0, "Al is the chemical symbol for Aluminium, element 13 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Aluminium?", ["13", "14", "12", "15"], 0, "Aluminium has atomic number 13, so its atoms have 13 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Aluminium?", "Al", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Al is the chemical symbol for Aluminium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Silicon?", ["14", "15", "13", "16"], 0, "Silicon has atomic number 14, so its atoms have 14 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Silicon?", "Si", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Si is the chemical symbol for Silicon."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'P'?", ["Potassium","Palladium","Praseodymium","Phosphorus"], 3, "P is the chemical symbol for Phosphorus, element 15 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Phosphorus?", ["16", "14", "15", "17"], 2, "Phosphorus has atomic number 15, so its atoms have 15 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'S'?", ["Silicon","Sodium","Sulfur","Scandium"], 2, "S is the chemical symbol for Sulfur, element 16 on the periodic table."));
TYPED.medium.push(typed("What is the chemical symbol for Sulfur?", "S", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"S is the chemical symbol for Sulfur."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Chlorine?", ["18", "16", "19", "17"], 3, "Chlorine has atomic number 17, so its atoms have 17 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Chlorine?", "Cl", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Cl is the chemical symbol for Chlorine."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ar'?", ["Aluminium","Arsenic","Argon","Antimony"], 2, "Ar is the chemical symbol for Argon, element 18 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Argon?", ["19", "17", "18", "20"], 2, "Argon has atomic number 18, so its atoms have 18 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Argon?", "Ar", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ar is the chemical symbol for Argon."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'K'?", ["Sulfur", "Chlorine", "Potassium", "Argon"], 2, "K is the chemical symbol for Potassium, element 19 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Potassium?", ["19", "20", "18", "21"], 0, "Potassium has atomic number 19, so its atoms have 19 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ca'?", ["Chlorine","Chromium","Cobalt","Calcium"], 3, "Ca is the chemical symbol for Calcium, element 20 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Sc'?", ["Sulfur","Scandium","Silicon","Sodium"], 1, "Sc is the chemical symbol for Scandium, element 21 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Scandium?", ["22", "20", "23", "21"], 3, "Scandium has atomic number 21, so its atoms have 21 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Scandium?", "Sc", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Sc is the chemical symbol for Scandium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ti'?", ["Titanium","Technetium","Tin","Tellurium"], 0, "Ti is the chemical symbol for Titanium, element 22 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Titanium?", ["23", "21", "22", "24"], 2, "Titanium has atomic number 22, so its atoms have 22 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Titanium?", "Ti", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ti is the chemical symbol for Titanium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'V'?", ["Calcium","Vanadium","Scandium","Titanium"], 1, "V is the chemical symbol for Vanadium, element 23 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Vanadium?", ["23", "24", "22", "25"], 0, "Vanadium has atomic number 23, so its atoms have 23 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Vanadium?", "V", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"V is the chemical symbol for Vanadium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cr'?", ["Chromium","Cobalt","Calcium","Copper"], 0, "Cr is the chemical symbol for Chromium, element 24 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Chromium?", ["25", "23", "26", "24"], 3, "Chromium has atomic number 24, so its atoms have 24 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Mn'?", ["Magnesium","Molybdenum","Manganese","Mercury"], 2, "Mn is the chemical symbol for Manganese, element 25 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Manganese?", ["26", "24", "25", "27"], 2, "Manganese has atomic number 25, so its atoms have 25 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Co'?", ["Copper","Cobalt","Chromium","Calcium"], 1, "Co is the chemical symbol for Cobalt, element 27 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Cobalt?", ["27", "28", "26", "29"], 0, "Cobalt has atomic number 27, so its atoms have 27 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ni'?", ["Niobium","Neon","Nickel","Nitrogen"], 2, "Ni is the chemical symbol for Nickel, element 28 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Nickel?", ["29", "28", "27", "30"], 1, "Nickel has atomic number 28, so its atoms have 28 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cu'?", ["Cobalt","Chromium","Calcium","Copper"], 3, "Cu is the chemical symbol for Copper, element 29 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Zn'?", ["Zirconium","Cobalt","Nickel","Zinc"], 3, "Zn is the chemical symbol for Zinc, element 30 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ga'?", ["Germanium","Gadolinium","Gold","Gallium"], 3, "Ga is the chemical symbol for Gallium, element 31 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Gallium?", ["32", "30", "31", "33"], 2, "Gallium has atomic number 31, so its atoms have 31 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Gallium?", "Ga", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ga is the chemical symbol for Gallium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ge'?", ["Gallium","Gadolinium","Gold","Germanium"], 3, "Ge is the chemical symbol for Germanium, element 32 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Germanium?", ["32", "33", "31", "34"], 0, "Germanium has atomic number 32, so its atoms have 32 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Germanium?", "Ge", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ge is the chemical symbol for Germanium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'As'?", ["Argon","Antimony","Aluminium","Arsenic"], 3, "As is the chemical symbol for Arsenic, element 33 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Arsenic?", ["33", "34", "32", "35"], 0, "Arsenic has atomic number 33, so its atoms have 33 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Arsenic?", "As", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"As is the chemical symbol for Arsenic."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Selenium?", ["35", "34", "33", "36"], 1, "Selenium has atomic number 34, so its atoms have 34 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Selenium?", "Se", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Se is the chemical symbol for Selenium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Br'?", ["Barium","Boron","Beryllium","Bromine"], 3, "Br is the chemical symbol for Bromine, element 35 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Bromine?", ["36", "34", "37", "35"], 3, "Bromine has atomic number 35, so its atoms have 35 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Bromine?", "Br", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Br is the chemical symbol for Bromine."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Kr'?", ["Krypton","Arsenic","Selenium","Bromine"], 0, "Kr is the chemical symbol for Krypton, element 36 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Krypton?", ["37", "35", "36", "38"], 2, "Krypton has atomic number 36, so its atoms have 36 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Krypton?", "Kr", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Kr is the chemical symbol for Krypton."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Rb'?", ["Ruthenium","Rhodium","Rhenium","Rubidium"], 3, "Rb is the chemical symbol for Rubidium, element 37 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Rubidium?", ["37", "38", "36", "39"], 0, "Rubidium has atomic number 37, so its atoms have 37 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Rubidium?", "Rb", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Rb is the chemical symbol for Rubidium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Sr'?", ["Strontium","Selenium","Silver","Scandium"], 0, "Sr is the chemical symbol for Strontium, element 38 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Strontium?", ["38", "39", "37", "40"], 0, "Strontium has atomic number 38, so its atoms have 38 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Strontium?", "Sr", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Sr is the chemical symbol for Strontium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Y'?", ["Yttrium","Ytterbium","Krypton","Rubidium"], 0, "Y is the chemical symbol for Yttrium, element 39 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Yttrium?", ["40", "39", "38", "41"], 1, "Yttrium has atomic number 39, so its atoms have 39 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Yttrium?", "Y", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Y is the chemical symbol for Yttrium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Zr'?", ["Zinc","Rubidium","Strontium","Zirconium"], 3, "Zr is the chemical symbol for Zirconium, element 40 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Zirconium?", ["41", "39", "42", "40"], 3, "Zirconium has atomic number 40, so its atoms have 40 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Zirconium?", "Zr", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Zr is the chemical symbol for Zirconium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Nb'?", ["Nickel","Neodymium","Neon","Niobium"], 3, "Nb is the chemical symbol for Niobium, element 41 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Niobium?", ["42", "40", "41", "43"], 2, "Niobium has atomic number 41, so its atoms have 41 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Niobium?", "Nb", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Nb is the chemical symbol for Niobium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Mo'?", ["Manganese","Magnesium","Mercury","Molybdenum"], 3, "Mo is the chemical symbol for Molybdenum, element 42 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Molybdenum?", ["43", "41", "44", "42"], 3, "Molybdenum has atomic number 42, so its atoms have 42 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Molybdenum?", "Mo", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Mo is the chemical symbol for Molybdenum."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Tc'?", ["Tin","Tellurium","Technetium","Titanium"], 2, "Tc is the chemical symbol for Technetium, element 43 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Technetium?", ["44", "43", "42", "45"], 1, "Technetium has atomic number 43, so its atoms have 43 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Technetium?", "Tc", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Tc is the chemical symbol for Technetium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ru'?", ["Rhodium","Rubidium","Ruthenium","Rhenium"], 2, "Ru is the chemical symbol for Ruthenium, element 44 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Ruthenium?", ["44", "45", "43", "46"], 0, "Ruthenium has atomic number 44, so its atoms have 44 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Ruthenium?", "Ru", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ru is the chemical symbol for Ruthenium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Rh'?", ["Ruthenium","Rhodium","Rubidium","Rhenium"], 1, "Rh is the chemical symbol for Rhodium, element 45 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Rhodium?", ["46", "44", "47", "45"], 3, "Rhodium has atomic number 45, so its atoms have 45 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Rhodium?", "Rh", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Rh is the chemical symbol for Rhodium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Pd'?", ["Praseodymium","Promethium","Potassium","Palladium"], 3, "Pd is the chemical symbol for Palladium, element 46 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Palladium?", ["46", "47", "45", "48"], 0, "Palladium has atomic number 46, so its atoms have 46 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Palladium?", "Pd", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Pd is the chemical symbol for Palladium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ag'?", ["Ruthenium", "Rhodium", "Palladium", "Silver"], 3, "Ag is the chemical symbol for Silver, element 47 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Silver?", ["47", "48", "46", "49"], 0, "Silver has atomic number 47, so its atoms have 47 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cd'?", ["Caesium","Cerium","Cadmium","Copper"], 2, "Cd is the chemical symbol for Cadmium, element 48 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Cadmium?", ["49", "47", "50", "48"], 3, "Cadmium has atomic number 48, so its atoms have 48 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Cadmium?", "Cd", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Cd is the chemical symbol for Cadmium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'In'?", ["Iodine","Iron","Indium","Iridium"], 2, "In is the chemical symbol for Indium, element 49 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Indium?", ["50", "49", "48", "51"], 1, "Indium has atomic number 49, so its atoms have 49 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Indium?", "In", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"In is the chemical symbol for Indium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Tin?", ["51", "49", "50", "52"], 2, "Tin has atomic number 50, so its atoms have 50 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Sb'?", ["Antimony", "Cadmium", "Indium", "Tin"], 0, "Sb is the chemical symbol for Antimony, element 51 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Antimony?", ["52", "50", "51", "53"], 2, "Antimony has atomic number 51, so its atoms have 51 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Te'?", ["Tellurium","Tin","Technetium","Terbium"], 0, "Te is the chemical symbol for Tellurium, element 52 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Tellurium?", ["53", "51", "52", "54"], 2, "Tellurium has atomic number 52, so its atoms have 52 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Tellurium?", "Te", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Te is the chemical symbol for Tellurium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'I'?", ["Iodine","Indium","Iridium","Iron"], 0, "I is the chemical symbol for Iodine, element 53 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Iodine?", ["54", "52", "55", "53"], 3, "Iodine has atomic number 53, so its atoms have 53 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Xe'?", ["Xenon","Antimony","Tellurium","Iodine"], 0, "Xe is the chemical symbol for Xenon, element 54 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Xenon?", ["55", "53", "56", "54"], 3, "Xenon has atomic number 54, so its atoms have 54 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Xenon?", "Xe", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Xe is the chemical symbol for Xenon."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cs'?", ["Cerium","Caesium","Cadmium","Copper"], 1, "Cs is the chemical symbol for Caesium, element 55 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Caesium?", ["56", "54", "55", "57"], 2, "Caesium has atomic number 55, so its atoms have 55 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Caesium?", "Cs", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Cs is the chemical symbol for Caesium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ba'?", ["Bromine","Bismuth","Barium","Berkelium"], 2, "Ba is the chemical symbol for Barium, element 56 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Barium?", ["57", "55", "58", "56"], 3, "Barium has atomic number 56, so its atoms have 56 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'La'?", ["Lanthanum","Lutetium","Lead","Lawrencium"], 0, "La is the chemical symbol for Lanthanum, element 57 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Lanthanum?", ["58", "56", "59", "57"], 3, "Lanthanum has atomic number 57, so its atoms have 57 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Lanthanum?", "La", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"La is the chemical symbol for Lanthanum."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ce'?", ["Caesium","Cadmium","Copper","Cerium"], 3, "Ce is the chemical symbol for Cerium, element 58 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Cerium?", ["58", "59", "57", "60"], 0, "Cerium has atomic number 58, so its atoms have 58 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Cerium?", "Ce", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ce is the chemical symbol for Cerium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Pr'?", ["Promethium","Praseodymium","Palladium","Platinum"], 1, "Pr is the chemical symbol for Praseodymium, element 59 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Praseodymium?", ["60", "58", "59", "61"], 2, "Praseodymium has atomic number 59, so its atoms have 59 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Praseodymium?", "Pr", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Pr is the chemical symbol for Praseodymium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Nd'?", ["Niobium","Neodymium","Nickel","Neptunium"], 1, "Nd is the chemical symbol for Neodymium, element 60 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Neodymium?", ["61", "59", "60", "62"], 2, "Neodymium has atomic number 60, so its atoms have 60 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Neodymium?", "Nd", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Nd is the chemical symbol for Neodymium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Pm'?", ["Promethium","Praseodymium","Palladium","Platinum"], 0, "Pm is the chemical symbol for Promethium, element 61 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Promethium?", ["62", "61", "60", "63"], 1, "Promethium has atomic number 61, so its atoms have 61 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Promethium?", "Pm", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Pm is the chemical symbol for Promethium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Sm'?", ["Silver","Strontium","Selenium","Samarium"], 3, "Sm is the chemical symbol for Samarium, element 62 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Samarium?", ["63", "61", "62", "64"], 2, "Samarium has atomic number 62, so its atoms have 62 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Samarium?", "Sm", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Sm is the chemical symbol for Samarium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Eu'?", ["Erbium","Europium","Einsteinium","Neodymium"], 1, "Eu is the chemical symbol for Europium, element 63 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Europium?", ["64", "63", "62", "65"], 1, "Europium has atomic number 63, so its atoms have 63 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Europium?", "Eu", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Eu is the chemical symbol for Europium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Gd'?", ["Gold","Germanium","Gadolinium","Gallium"], 2, "Gd is the chemical symbol for Gadolinium, element 64 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Gadolinium?", ["64", "65", "63", "66"], 0, "Gadolinium has atomic number 64, so its atoms have 64 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Gadolinium?", "Gd", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Gd is the chemical symbol for Gadolinium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Tb'?", ["Thulium","Terbium","Tantalum","Tungsten"], 1, "Tb is the chemical symbol for Terbium, element 65 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Terbium?", ["66", "64", "67", "65"], 3, "Terbium has atomic number 65, so its atoms have 65 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Terbium?", "Tb", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Tb is the chemical symbol for Terbium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Dy'?", ["Dysprosium","Dubnium","Darmstadtium","Europium"], 0, "Dy is the chemical symbol for Dysprosium, element 66 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Dysprosium?", ["67", "65", "66", "68"], 2, "Dysprosium has atomic number 66, so its atoms have 66 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Dysprosium?", "Dy", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Dy is the chemical symbol for Dysprosium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ho'?", ["Hafnium","Hassium","Holmium","Helium"], 2, "Ho is the chemical symbol for Holmium, element 67 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Holmium?", ["68", "66", "67", "69"], 2, "Holmium has atomic number 67, so its atoms have 67 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Holmium?", "Ho", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ho is the chemical symbol for Holmium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Er'?", ["Europium","Einsteinium","Erbium","Terbium"], 2, "Er is the chemical symbol for Erbium, element 68 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Erbium?", ["69", "67", "70", "68"], 3, "Erbium has atomic number 68, so its atoms have 68 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Erbium?", "Er", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Er is the chemical symbol for Erbium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Tm'?", ["Thulium","Terbium","Tantalum","Tungsten"], 0, "Tm is the chemical symbol for Thulium, element 69 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Thulium?", ["70", "68", "71", "69"], 3, "Thulium has atomic number 69, so its atoms have 69 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Thulium?", "Tm", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Tm is the chemical symbol for Thulium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Yb'?", ["Yttrium","Holmium","Ytterbium","Erbium"], 2, "Yb is the chemical symbol for Ytterbium, element 70 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Ytterbium?", ["70", "71", "69", "72"], 0, "Ytterbium has atomic number 70, so its atoms have 70 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Ytterbium?", "Yb", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Yb is the chemical symbol for Ytterbium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Lu'?", ["Lutetium","Lead","Lanthanum","Lawrencium"], 0, "Lu is the chemical symbol for Lutetium, element 71 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Lutetium?", ["71", "72", "70", "73"], 0, "Lutetium has atomic number 71, so its atoms have 71 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Lutetium?", "Lu", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Lu is the chemical symbol for Lutetium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Hf'?", ["Holmium","Hafnium","Hassium","Helium"], 1, "Hf is the chemical symbol for Hafnium, element 72 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Hafnium?", ["73", "71", "74", "72"], 3, "Hafnium has atomic number 72, so its atoms have 72 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Hafnium?", "Hf", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Hf is the chemical symbol for Hafnium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ta'?", ["Tantalum","Tungsten","Thulium","Terbium"], 0, "Ta is the chemical symbol for Tantalum, element 73 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Tantalum?", ["74", "73", "72", "75"], 1, "Tantalum has atomic number 73, so its atoms have 73 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Tantalum?", "Ta", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ta is the chemical symbol for Tantalum."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'W'?", ["Lutetium", "Hafnium", "Tungsten", "Tantalum"], 2, "W is the chemical symbol for Tungsten, element 74 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Tungsten?", ["75", "73", "76", "74"], 3, "Tungsten has atomic number 74, so its atoms have 74 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Re'?", ["Radon","Radium","Rhenium","Rutherfordium"], 2, "Re is the chemical symbol for Rhenium, element 75 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Rhenium?", ["76", "74", "77", "75"], 3, "Rhenium has atomic number 75, so its atoms have 75 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Rhenium?", "Re", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Re is the chemical symbol for Rhenium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Os'?", ["Oganesson","Osmium","Oxygen","Tantalum"], 1, "Os is the chemical symbol for Osmium, element 76 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Osmium?", ["77", "76", "75", "78"], 1, "Osmium has atomic number 76, so its atoms have 76 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Osmium?", "Os", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Os is the chemical symbol for Osmium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ir'?", ["Iodine","Indium","Iridium","Iron"], 2, "Ir is the chemical symbol for Iridium, element 77 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Iridium?", ["78", "76", "77", "79"], 2, "Iridium has atomic number 77, so its atoms have 77 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Iridium?", "Ir", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ir is the chemical symbol for Iridium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Platinum?", ["79", "78", "77", "80"], 1, "Platinum has atomic number 78, so its atoms have 78 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Platinum?", "Pt", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Pt is the chemical symbol for Platinum."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Gold?", ["80", "79", "78", "81"], 1, "Gold has atomic number 79, so its atoms have 79 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Hg'?", ["Iridium", "Platinum", "Mercury", "Gold"], 2, "Hg is the chemical symbol for Mercury, element 80 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Mercury?", ["81", "79", "80", "82"], 2, "Mercury has atomic number 80, so its atoms have 80 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Mercury?", "Hg", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Hg is the chemical symbol for Mercury."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Tl'?", ["Tungsten","Tantalum","Thorium","Thallium"], 3, "Tl is the chemical symbol for Thallium, element 81 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Thallium?", ["82", "80", "83", "81"], 3, "Thallium has atomic number 81, so its atoms have 81 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Thallium?", "Tl", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Tl is the chemical symbol for Thallium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Lead?", ["83", "82", "81", "84"], 1, "Lead has atomic number 82, so its atoms have 82 protons."));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Bi'?", ["Berkelium","Bohrium","Bismuth","Barium"], 2, "Bi is the chemical symbol for Bismuth, element 83 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Bismuth?", ["84", "82", "85", "83"], 3, "Bismuth has atomic number 83, so its atoms have 83 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Bismuth?", "Bi", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Bi is the chemical symbol for Bismuth."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Po'?", ["Platinum","Protactinium","Polonium","Plutonium"], 2, "Po is the chemical symbol for Polonium, element 84 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Polonium?", ["85", "83", "84", "86"], 2, "Polonium has atomic number 84, so its atoms have 84 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Polonium?", "Po", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Po is the chemical symbol for Polonium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'At'?", ["Astatine","Actinium","Americium","Antimony"], 0, "At is the chemical symbol for Astatine, element 85 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Astatine?", ["85", "86", "84", "87"], 0, "Astatine has atomic number 85, so its atoms have 85 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Astatine?", "At", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"At is the chemical symbol for Astatine."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Rn'?", ["Radium","Rhenium","Rutherfordium","Radon"], 3, "Rn is the chemical symbol for Radon, element 86 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Radon?", ["87", "85", "88", "86"], 3, "Radon has atomic number 86, so its atoms have 86 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Radon?", "Rn", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Rn is the chemical symbol for Radon."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Fr'?", ["Fermium","Flerovium","Fluorine","Francium"], 3, "Fr is the chemical symbol for Francium, element 87 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Francium?", ["87", "88", "86", "89"], 0, "Francium has atomic number 87, so its atoms have 87 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Francium?", "Fr", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Fr is the chemical symbol for Francium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ra'?", ["Radon","Rhenium","Radium","Rutherfordium"], 2, "Ra is the chemical symbol for Radium, element 88 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Radium?", ["89", "88", "87", "90"], 1, "Radium has atomic number 88, so its atoms have 88 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Radium?", "Ra", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ra is the chemical symbol for Radium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ac'?", ["Astatine","Americium","Antimony","Actinium"], 3, "Ac is the chemical symbol for Actinium, element 89 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Actinium?", ["90", "89", "88", "91"], 1, "Actinium has atomic number 89, so its atoms have 89 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Actinium?", "Ac", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ac is the chemical symbol for Actinium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Th'?", ["Thallium","Tungsten","Tantalum","Thorium"], 3, "Th is the chemical symbol for Thorium, element 90 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Thorium?", ["91", "89", "92", "90"], 3, "Thorium has atomic number 90, so its atoms have 90 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Thorium?", "Th", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Th is the chemical symbol for Thorium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Pa'?", ["Protactinium","Plutonium","Polonium","Platinum"], 0, "Pa is the chemical symbol for Protactinium, element 91 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Protactinium?", ["92", "90", "91", "93"], 2, "Protactinium has atomic number 91, so its atoms have 91 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Protactinium?", "Pa", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Pa is the chemical symbol for Protactinium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'U'?", ["Uranium","Actinium","Thorium","Protactinium"], 0, "U is the chemical symbol for Uranium, element 92 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Uranium?", ["92", "93", "91", "94"], 0, "Uranium has atomic number 92, so its atoms have 92 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Uranium?", "U", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"U is the chemical symbol for Uranium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Np'?", ["Nobelium","Neptunium","Nihonium","Neodymium"], 1, "Np is the chemical symbol for Neptunium, element 93 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Neptunium?", ["93", "94", "92", "95"], 0, "Neptunium has atomic number 93, so its atoms have 93 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Neptunium?", "Np", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Np is the chemical symbol for Neptunium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Pu'?", ["Plutonium","Protactinium","Polonium","Platinum"], 0, "Pu is the chemical symbol for Plutonium, element 94 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Plutonium?", ["94", "95", "93", "96"], 0, "Plutonium has atomic number 94, so its atoms have 94 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Plutonium?", "Pu", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Pu is the chemical symbol for Plutonium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Am'?", ["Actinium","Americium","Astatine","Antimony"], 1, "Am is the chemical symbol for Americium, element 95 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Americium?", ["96", "94", "97", "95"], 3, "Americium has atomic number 95, so its atoms have 95 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Americium?", "Am", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Am is the chemical symbol for Americium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cm'?", ["Californium","Copernicium","Cerium","Curium"], 3, "Cm is the chemical symbol for Curium, element 96 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Curium?", ["96", "97", "95", "98"], 0, "Curium has atomic number 96, so its atoms have 96 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Curium?", "Cm", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Cm is the chemical symbol for Curium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Bk'?", ["Berkelium","Bohrium","Bismuth","Barium"], 0, "Bk is the chemical symbol for Berkelium, element 97 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Berkelium?", ["98", "96", "99", "97"], 3, "Berkelium has atomic number 97, so its atoms have 97 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Berkelium?", "Bk", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Bk is the chemical symbol for Berkelium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cf'?", ["Californium","Curium","Copernicium","Cerium"], 0, "Cf is the chemical symbol for Californium, element 98 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Californium?", ["98", "99", "97", "100"], 0, "Californium has atomic number 98, so its atoms have 98 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Californium?", "Cf", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Cf is the chemical symbol for Californium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Es'?", ["Erbium","Europium","Curium","Einsteinium"], 3, "Es is the chemical symbol for Einsteinium, element 99 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Einsteinium?", ["100", "99", "98", "101"], 1, "Einsteinium has atomic number 99, so its atoms have 99 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Einsteinium?", "Es", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Es is the chemical symbol for Einsteinium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Fm'?", ["Francium","Flerovium","Fermium","Fluorine"], 2, "Fm is the chemical symbol for Fermium, element 100 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Fermium?", ["100", "101", "99", "102"], 0, "Fermium has atomic number 100, so its atoms have 100 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Fermium?", "Fm", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Fm is the chemical symbol for Fermium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Md'?", ["Mendelevium","Meitnerium","Moscovium","Mercury"], 0, "Md is the chemical symbol for Mendelevium, element 101 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Mendelevium?", ["102", "100", "101", "103"], 2, "Mendelevium has atomic number 101, so its atoms have 101 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Mendelevium?", "Md", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Md is the chemical symbol for Mendelevium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'No'?", ["Nobelium","Neptunium","Nihonium","Neodymium"], 0, "No is the chemical symbol for Nobelium, element 102 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Nobelium?", ["103", "101", "102", "104"], 2, "Nobelium has atomic number 102, so its atoms have 102 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Nobelium?", "No", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"No is the chemical symbol for Nobelium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Lr'?", ["Livermorium","Lawrencium","Lead","Lutetium"], 1, "Lr is the chemical symbol for Lawrencium, element 103 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Lawrencium?", ["104", "102", "103", "105"], 2, "Lawrencium has atomic number 103, so its atoms have 103 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Lawrencium?", "Lr", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Lr is the chemical symbol for Lawrencium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Rf'?", ["Roentgenium","Radium","Radon","Rutherfordium"], 3, "Rf is the chemical symbol for Rutherfordium, element 104 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Rutherfordium?", ["105", "103", "106", "104"], 3, "Rutherfordium has atomic number 104, so its atoms have 104 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Rutherfordium?", "Rf", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Rf is the chemical symbol for Rutherfordium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Db'?", ["Darmstadtium","Dubnium","Dysprosium","Nobelium"], 1, "Db is the chemical symbol for Dubnium, element 105 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Dubnium?", ["106", "104", "107", "105"], 3, "Dubnium has atomic number 105, so its atoms have 105 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Dubnium?", "Db", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Db is the chemical symbol for Dubnium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Sg'?", ["Samarium","Seaborgium","Silver","Strontium"], 1, "Sg is the chemical symbol for Seaborgium, element 106 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Seaborgium?", ["107", "106", "105", "108"], 1, "Seaborgium has atomic number 106, so its atoms have 106 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Seaborgium?", "Sg", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Sg is the chemical symbol for Seaborgium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Bh'?", ["Berkelium","Bohrium","Bismuth","Barium"], 1, "Bh is the chemical symbol for Bohrium, element 107 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Bohrium?", ["108", "107", "106", "109"], 1, "Bohrium has atomic number 107, so its atoms have 107 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Bohrium?", "Bh", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Bh is the chemical symbol for Bohrium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Hs'?", ["Hafnium","Holmium","Hassium","Helium"], 2, "Hs is the chemical symbol for Hassium, element 108 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Hassium?", ["109", "108", "107", "110"], 1, "Hassium has atomic number 108, so its atoms have 108 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Hassium?", "Hs", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Hs is the chemical symbol for Hassium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Mt'?", ["Meitnerium","Moscovium","Mendelevium","Mercury"], 0, "Mt is the chemical symbol for Meitnerium, element 109 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Meitnerium?", ["110", "108", "109", "111"], 2, "Meitnerium has atomic number 109, so its atoms have 109 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Meitnerium?", "Mt", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Mt is the chemical symbol for Meitnerium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ds'?", ["Dubnium","Dysprosium","Darmstadtium","Bohrium"], 2, "Ds is the chemical symbol for Darmstadtium, element 110 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Darmstadtium?", ["111", "109", "110", "112"], 2, "Darmstadtium has atomic number 110, so its atoms have 110 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Darmstadtium?", "Ds", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ds is the chemical symbol for Darmstadtium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Rg'?", ["Roentgenium","Rutherfordium","Radium","Radon"], 0, "Rg is the chemical symbol for Roentgenium, element 111 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Roentgenium?", ["111", "112", "110", "113"], 0, "Roentgenium has atomic number 111, so its atoms have 111 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Roentgenium?", "Rg", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Rg is the chemical symbol for Roentgenium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Cn'?", ["Copernicium","Californium","Curium","Cerium"], 0, "Cn is the chemical symbol for Copernicium, element 112 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Copernicium?", ["113", "112", "111", "114"], 1, "Copernicium has atomic number 112, so its atoms have 112 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Copernicium?", "Cn", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Cn is the chemical symbol for Copernicium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Nh'?", ["Nobelium","Nihonium","Neptunium","Neodymium"], 1, "Nh is the chemical symbol for Nihonium, element 113 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Nihonium?", ["114", "112", "113", "115"], 2, "Nihonium has atomic number 113, so its atoms have 113 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Nihonium?", "Nh", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Nh is the chemical symbol for Nihonium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Fl'?", ["Fermium","Flerovium","Francium","Fluorine"], 1, "Fl is the chemical symbol for Flerovium, element 114 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Flerovium?", ["114", "115", "113", "116"], 0, "Flerovium has atomic number 114, so its atoms have 114 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Flerovium?", "Fl", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Fl is the chemical symbol for Flerovium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Mc'?", ["Meitnerium","Mendelevium","Mercury","Moscovium"], 3, "Mc is the chemical symbol for Moscovium, element 115 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Moscovium?", ["116", "115", "114", "117"], 1, "Moscovium has atomic number 115, so its atoms have 115 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Moscovium?", "Mc", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Mc is the chemical symbol for Moscovium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Lv'?", ["Lawrencium","Livermorium","Lead","Lutetium"], 1, "Lv is the chemical symbol for Livermorium, element 116 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Livermorium?", ["117", "115", "116", "118"], 2, "Livermorium has atomic number 116, so its atoms have 116 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Livermorium?", "Lv", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Lv is the chemical symbol for Livermorium."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Ts'?", ["Thorium","Thallium","Tennessine","Tungsten"], 2, "Ts is the chemical symbol for Tennessine, element 117 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Tennessine?", ["118", "116", "119", "117"], 3, "Tennessine has atomic number 117, so its atoms have 117 protons."));
TYPED.hard.push(typed("What is the chemical symbol for Tennessine?", "Ts", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Ts is the chemical symbol for Tennessine."}));
NEWCAT.periodic.push(cmc("Periodic Table", "Which element has the chemical symbol 'Og'?", ["Osmium","Oganesson","Oxygen","Moscovium"], 1, "Og is the chemical symbol for Oganesson, element 118 on the periodic table."));
NEWCAT.periodic.push(cmc("Periodic Table", "What is the atomic number of Oganesson?", ["118", "119", "117", "120"], 0, "Oganesson has atomic number 118, so its atoms have 118 protons."));
TYPED.medium.push(typed("What is the chemical symbol for Oganesson?", "Og", {exact:true, rule:"Chemical symbol — spelling must be exact.", fact:"Og is the chemical symbol for Oganesson."}));
TEXT.easy.push(mc("What is 54 + 11?", ["66", "65", "64", "75"], 1, "54 + 11 = 65."));
TEXT.easy.push(mc("What is 54 + 20?", ["75", "74", "73", "84"], 1, "54 + 20 = 74."));
TEXT.easy.push(mc("What is 54 + 29?", ["84", "82", "83", "93"], 2, "54 + 29 = 83."));
TEXT.easy.push(mc("What is 54 + 38?", ["93", "91", "92", "102"], 2, "54 + 38 = 92."));
TEXT.easy.push(mc("What is 54 + 47?", ["102", "100", "101", "111"], 2, "54 + 47 = 101."));
TEXT.easy.push(mc("What is 30 − 12?", ["19", "17", "28", "18"], 3, "30 − 12 = 18."));
TEXT.easy.push(mc("What is 30 − 25?", ["6", "4", "15", "5"], 3, "30 − 25 = 5."));
TEXT.easy.push(mc("What is 41 − 12?", ["30", "29", "28", "39"], 1, "41 − 12 = 29."));
TEXT.easy.push(mc("What is 41 − 25?", ["17", "16", "15", "26"], 1, "41 − 25 = 16."));
TEXT.easy.push(mc("What is 41 − 38?", ["4", "3", "2", "13"], 1, "41 − 38 = 3."));
TEXT.easy.push(mc("What is 52 − 12?", ["41", "39", "50", "40"], 3, "52 − 12 = 40."));
TEXT.easy.push(mc("What is 52 − 25?", ["28", "26", "37", "27"], 3, "52 − 25 = 27."));
TEXT.easy.push(mc("What is 52 − 38?", ["15", "13", "24", "14"], 3, "52 − 38 = 14."));
TEXT.easy.push(mc("What is 52 − 51?", ["2", "0", "1", "11"], 2, "52 − 51 = 1."));
TEXT.easy.push(mc("What is 63 − 12?", ["52", "51", "50", "61"], 1, "63 − 12 = 51."));
TEXT.easy.push(mc("What is 63 − 25?", ["39", "38", "37", "48"], 1, "63 − 25 = 38."));
TEXT.easy.push(mc("What is 63 − 38?", ["26", "25", "24", "35"], 1, "63 − 38 = 25."));
TEXT.easy.push(mc("What is 63 − 51?", ["12", "13", "11", "22"], 0, "63 − 51 = 12."));
TEXT.easy.push(mc("What is 74 − 12?", ["63", "61", "72", "62"], 3, "74 − 12 = 62."));
TEXT.easy.push(mc("What is 74 − 25?", ["50", "48", "59", "49"], 3, "74 − 25 = 49."));
TEXT.easy.push(mc("What is 74 − 38?", ["37", "35", "46", "36"], 3, "74 − 38 = 36."));
TEXT.easy.push(mc("What is 74 − 51?", ["24", "22", "23", "33"], 2, "74 − 51 = 23."));
TEXT.easy.push(mc("What is 85 − 12?", ["74", "73", "72", "83"], 1, "85 − 12 = 73."));
TEXT.easy.push(mc("What is 85 − 25?", ["61", "60", "59", "70"], 1, "85 − 25 = 60."));
TEXT.easy.push(mc("What is 85 − 38?", ["48", "47", "46", "57"], 1, "85 − 38 = 47."));
TEXT.easy.push(mc("What is 85 − 51?", ["34", "35", "33", "44"], 0, "85 − 51 = 34."));
TEXT.easy.push(mc("What is 96 − 12?", ["85", "83", "94", "84"], 3, "96 − 12 = 84."));
TEXT.easy.push(mc("What is 96 − 25?", ["72", "70", "81", "71"], 3, "96 − 25 = 71."));
TEXT.easy.push(mc("What is 96 − 38?", ["59", "57", "68", "58"], 3, "96 − 38 = 58."));
TEXT.easy.push(mc("What is 96 − 51?", ["46", "44", "45", "55"], 2, "96 − 51 = 45."));
TEXT.easy.push(mc("What is 3 × 3?", ["9", "10", "8", "19"], 0, "3 × 3 = 9."));
TEXT.easy.push(mc("What is 3 × 6?", ["19", "17", "28", "18"], 3, "3 × 6 = 18."));
TEXT.easy.push(mc("What is 3 × 9?", ["28", "26", "27", "37"], 2, "3 × 9 = 27."));
TEXT.easy.push(mc("What is 3 × 12?", ["36", "37", "35", "46"], 0, "3 × 12 = 36."));
TEXT.easy.push(mc("What is 4 × 5?", ["21", "19", "30", "20"], 3, "4 × 5 = 20."));
TEXT.easy.push(mc("What is 4 × 8?", ["33", "31", "32", "42"], 2, "4 × 8 = 32."));
TEXT.easy.push(mc("What is 4 × 11?", ["44", "45", "43", "54"], 0, "4 × 11 = 44."));
TEXT.easy.push(mc("What is 5 × 4?", ["21", "19", "30", "20"], 3, "5 × 4 = 20."));
TEXT.easy.push(mc("What is 5 × 7?", ["36", "34", "35", "45"], 2, "5 × 7 = 35."));
TEXT.easy.push(mc("What is 5 × 10?", ["50", "51", "49", "60"], 0, "5 × 10 = 50."));
TEXT.easy.push(mc("What is 6 × 3?", ["19", "17", "28", "18"], 3, "6 × 3 = 18."));
TEXT.easy.push(mc("What is 6 × 6?", ["37", "35", "36", "46"], 2, "6 × 6 = 36."));
TEXT.easy.push(mc("What is 6 × 9?", ["55", "54", "53", "64"], 1, "6 × 9 = 54."));
TEXT.easy.push(mc("What is 6 × 12?", ["73", "71", "82", "72"], 3, "6 × 12 = 72."));
TEXT.easy.push(mc("What is 7 × 5?", ["36", "34", "35", "45"], 2, "7 × 5 = 35."));
TEXT.easy.push(mc("What is 7 × 8?", ["57", "56", "55", "66"], 1, "7 × 8 = 56."));
TEXT.easy.push(mc("What is 7 × 11?", ["78", "76", "87", "77"], 3, "7 × 11 = 77."));
TEXT.easy.push(mc("What is 8 × 4?", ["33", "31", "32", "42"], 2, "8 × 4 = 32."));
TEXT.easy.push(mc("What is 8 × 7?", ["57", "56", "55", "66"], 1, "8 × 7 = 56."));
TEXT.easy.push(mc("What is 8 × 10?", ["81", "79", "90", "80"], 3, "8 × 10 = 80."));
TEXT.easy.push(mc("What is 9 × 3?", ["28", "26", "27", "37"], 2, "9 × 3 = 27."));
TEXT.easy.push(mc("What is 9 × 6?", ["55", "54", "53", "64"], 1, "9 × 6 = 54."));
TEXT.easy.push(mc("What is 9 × 9?", ["81", "82", "80", "91"], 0, "9 × 9 = 81."));
TEXT.easy.push(mc("What is 9 × 12?", ["109", "107", "108", "118"], 2, "9 × 12 = 108."));
TEXT.easy.push(mc("What is 10 × 5?", ["50", "51", "49", "60"], 0, "10 × 5 = 50."));
TEXT.easy.push(mc("What is 10 × 8?", ["81", "79", "90", "80"], 3, "10 × 8 = 80."));
TEXT.easy.push(mc("What is 10 × 11?", ["111", "110", "109", "120"], 1, "10 × 11 = 110."));
TEXT.easy.push(mc("What is 11 × 4?", ["44", "45", "43", "54"], 0, "11 × 4 = 44."));
TEXT.easy.push(mc("What is 11 × 7?", ["78", "76", "87", "77"], 3, "11 × 7 = 77."));
TEXT.easy.push(mc("What is 11 × 10?", ["111", "110", "109", "120"], 1, "11 × 10 = 110."));
TEXT.easy.push(mc("What is 12 × 3?", ["36", "37", "35", "46"], 0, "12 × 3 = 36."));
TEXT.easy.push(mc("What is 12 × 6?", ["73", "71", "82", "72"], 3, "12 × 6 = 72."));
TEXT.easy.push(mc("What is 12 × 9?", ["109", "107", "108", "118"], 2, "12 × 9 = 108."));
TEXT.easy.push(mc("What is 12 × 12?", ["144", "145", "143", "154"], 0, "12 × 12 = 144."));
TEXT.medium.push(mc("What is 180 ÷ 10?", ["18", "19", "17", "28"], 0, "180 ÷ 10 = 18."));
TEXT.medium.push(mc("What is 190 ÷ 10?", ["20", "19", "18", "29"], 1, "190 ÷ 10 = 19."));
TEXT.medium.push(mc("What is 200 ÷ 10?", ["21", "20", "19", "30"], 1, "200 ÷ 10 = 20."));
TEXT.medium.push(mc("What is 210 ÷ 10?", ["22", "20", "21", "31"], 2, "210 ÷ 10 = 21."));
TEXT.medium.push(mc("What is 220 ÷ 10?", ["23", "21", "32", "22"], 3, "220 ÷ 10 = 22."));
TEXT.medium.push(mc("What is 230 ÷ 10?", ["23", "24", "22", "33"], 0, "230 ÷ 10 = 23."));
TEXT.medium.push(mc("What is 240 ÷ 10?", ["25", "24", "23", "34"], 1, "240 ÷ 10 = 24."));
TEXT.medium.push(mc("What is 44 ÷ 11?", ["4", "5", "3", "14"], 0, "44 ÷ 11 = 4."));
TEXT.medium.push(mc("What is 55 ÷ 11?", ["6", "4", "5", "15"], 2, "55 ÷ 11 = 5."));
TEXT.medium.push(mc("What is 66 ÷ 11?", ["6", "7", "5", "16"], 0, "66 ÷ 11 = 6."));
TEXT.medium.push(mc("What is 77 ÷ 11?", ["8", "6", "7", "17"], 2, "77 ÷ 11 = 7."));
TEXT.medium.push(mc("What is 88 ÷ 11?", ["8", "9", "7", "18"], 0, "88 ÷ 11 = 8."));
TEXT.medium.push(mc("What is 99 ÷ 11?", ["10", "8", "9", "19"], 2, "99 ÷ 11 = 9."));
TEXT.medium.push(mc("What is 110 ÷ 11?", ["11", "9", "10", "20"], 2, "110 ÷ 11 = 10."));
TEXT.medium.push(mc("What is 121 ÷ 11?", ["11", "12", "10", "21"], 0, "121 ÷ 11 = 11."));
TEXT.medium.push(mc("What is 132 ÷ 11?", ["13", "11", "12", "22"], 2, "132 ÷ 11 = 12."));
TEXT.medium.push(mc("What is 143 ÷ 11?", ["13", "14", "12", "23"], 0, "143 ÷ 11 = 13."));
TEXT.medium.push(mc("What is 154 ÷ 11?", ["15", "13", "14", "24"], 2, "154 ÷ 11 = 14."));
TEXT.medium.push(mc("What is 165 ÷ 11?", ["15", "16", "14", "25"], 0, "165 ÷ 11 = 15."));
TEXT.medium.push(mc("What is 176 ÷ 11?", ["17", "15", "16", "26"], 2, "176 ÷ 11 = 16."));
TEXT.medium.push(mc("What is 187 ÷ 11?", ["17", "18", "16", "27"], 0, "187 ÷ 11 = 17."));
TEXT.medium.push(mc("What is 198 ÷ 11?", ["19", "17", "18", "28"], 2, "198 ÷ 11 = 18."));
TEXT.medium.push(mc("What is 209 ÷ 11?", ["20", "18", "29", "19"], 3, "209 ÷ 11 = 19."));
TEXT.medium.push(mc("What is 220 ÷ 11?", ["20", "21", "19", "30"], 0, "220 ÷ 11 = 20."));
TEXT.medium.push(mc("What is 231 ÷ 11?", ["22", "20", "21", "31"], 2, "231 ÷ 11 = 21."));
TEXT.medium.push(mc("What is 242 ÷ 11?", ["22", "23", "21", "32"], 0, "242 ÷ 11 = 22."));
TEXT.medium.push(mc("What is 253 ÷ 11?", ["24", "22", "23", "33"], 2, "253 ÷ 11 = 23."));
TEXT.medium.push(mc("What is 264 ÷ 11?", ["24", "25", "23", "34"], 0, "264 ÷ 11 = 24."));
TEXT.medium.push(mc("What is 48 ÷ 12?", ["5", "4", "3", "14"], 1, "48 ÷ 12 = 4."));
TEXT.medium.push(mc("What is 60 ÷ 12?", ["6", "4", "15", "5"], 3, "60 ÷ 12 = 5."));
TEXT.medium.push(mc("What is 72 ÷ 12?", ["7", "5", "6", "16"], 2, "72 ÷ 12 = 6."));
TEXT.medium.push(mc("What is 84 ÷ 12?", ["8", "7", "6", "17"], 1, "84 ÷ 12 = 7."));
TEXT.medium.push(mc("What is 108 ÷ 12?", ["10", "8", "9", "19"], 2, "108 ÷ 12 = 9."));
TEXT.medium.push(mc("What is 120 ÷ 12?", ["10", "11", "9", "20"], 0, "120 ÷ 12 = 10."));
TEXT.medium.push(mc("What is 132 ÷ 12?", ["12", "10", "21", "11"], 3, "132 ÷ 12 = 11."));
TEXT.medium.push(mc("What is 144 ÷ 12?", ["13", "11", "12", "22"], 2, "144 ÷ 12 = 12."));
TEXT.medium.push(mc("What is 156 ÷ 12?", ["14", "13", "12", "23"], 1, "156 ÷ 12 = 13."));
TEXT.medium.push(mc("What is 168 ÷ 12?", ["14", "15", "13", "24"], 0, "168 ÷ 12 = 14."));
TEXT.medium.push(mc("What is 180 ÷ 12?", ["16", "14", "15", "25"], 2, "180 ÷ 12 = 15."));
TEXT.medium.push(mc("What is 192 ÷ 12?", ["17", "16", "15", "26"], 1, "192 ÷ 12 = 16."));
TEXT.medium.push(mc("What is 204 ÷ 12?", ["18", "16", "27", "17"], 3, "204 ÷ 12 = 17."));
TEXT.medium.push(mc("What is 216 ÷ 12?", ["19", "17", "18", "28"], 2, "216 ÷ 12 = 18."));
TEXT.medium.push(mc("What is 228 ÷ 12?", ["20", "19", "18", "29"], 1, "228 ÷ 12 = 19."));
TEXT.medium.push(mc("What is 240 ÷ 12?", ["21", "19", "30", "20"], 3, "240 ÷ 12 = 20."));
TEXT.medium.push(mc("What is 252 ÷ 12?", ["22", "20", "21", "31"], 2, "252 ÷ 12 = 21."));
TEXT.medium.push(mc("What is 264 ÷ 12?", ["23", "22", "21", "32"], 1, "264 ÷ 12 = 22."));
TEXT.medium.push(mc("What is 276 ÷ 12?", ["23", "24", "22", "33"], 0, "276 ÷ 12 = 23."));
TEXT.medium.push(mc("What is 288 ÷ 12?", ["25", "23", "34", "24"], 3, "288 ÷ 12 = 24."));
TEXT.hard.push(mc("What is 39 × 39?", ["1522", "1520", "1,521", "1531"], 2, "39 × 39 = 1,521."));
TEXT.hard.push(mc("What is 41 × 41?", ["1,681", "1682", "1680", "1691"], 0, "41 × 41 = 1,681."));
TEXT.hard.push(mc("What is 43 × 43?", ["1,849", "1850", "1848", "1859"], 0, "43 × 43 = 1,849."));
TEXT.hard.push(mc("What is 45 × 45?", ["2,025", "2026", "2024", "2035"], 0, "45 × 45 = 2,025."));
TEXT.hard.push(mc("What is 49 × 49?", ["2,401", "2402", "2400", "2411"], 0, "49 × 49 = 2,401."));
TEXT.hard.push(mc("What is 51 × 51?", ["2602", "2600", "2,601", "2611"], 2, "51 × 51 = 2,601."));
TEXT.hard.push(mc("What is 53 × 53?", ["2810", "2808", "2,809", "2819"], 2, "53 × 53 = 2,809."));
TEXT.hard.push(mc("What is 55 × 55?", ["3026", "3024", "3,025", "3035"], 2, "55 × 55 = 3,025."));
TEXT.hard.push(mc("What is 57 × 57?", ["3250", "3248", "3,249", "3259"], 2, "57 × 57 = 3,249."));
TEXT.hard.push(mc("What is 59 × 59?", ["3482", "3480", "3,481", "3491"], 2, "59 × 59 = 3,481."));
TEXT.medium.push(mc("What is 4 squared?", ["16", "20", "12", "24"], 0, "4 squared is 4 × 4 = 16."));
TEXT.medium.push(mc("What is 5 squared?", ["30", "25", "20", "35"], 1, "5 squared is 5 × 5 = 25."));
TEXT.medium.push(mc("What is 6 squared?", ["42", "30", "36", "48"], 2, "6 squared is 6 × 6 = 36."));
TEXT.medium.push(mc("What is 7 squared?", ["56", "42", "63", "49"], 3, "7 squared is 7 × 7 = 49."));
TEXT.medium.push(mc("What is 8 squared?", ["64", "72", "56", "80"], 0, "8 squared is 8 × 8 = 64."));
TEXT.medium.push(mc("What is 9 squared?", ["90", "81", "72", "99"], 1, "9 squared is 9 × 9 = 81."));
TEXT.medium.push(mc("What is 10 squared?", ["110", "100", "90", "120"], 1, "10 squared is 10 × 10 = 100."));
TEXT.medium.push(mc("What is 11 squared?", ["132", "110", "121", "143"], 2, "11 squared is 11 × 11 = 121."));
TEXT.medium.push(mc("What is 12 squared?", ["156", "132", "168", "144"], 3, "12 squared is 12 × 12 = 144."));
TEXT.medium.push(mc("What is 13 squared?", ["169", "182", "156", "195"], 0, "13 squared is 13 × 13 = 169."));
TEXT.medium.push(mc("What is 14 squared?", ["210", "196", "182", "224"], 1, "14 squared is 14 × 14 = 196."));
TEXT.medium.push(mc("What is 15 squared?", ["240", "210", "225", "255"], 2, "15 squared is 15 × 15 = 225."));
TEXT.hard.push(mc("What is 16 squared?", ["272", "240", "288", "256"], 3, "16 squared is 16 × 16 = 256."));
TEXT.hard.push(mc("What is 17 squared?", ["289", "306", "272", "323"], 0, "17 squared is 17 × 17 = 289."));
TEXT.hard.push(mc("What is 18 squared?", ["342", "324", "306", "360"], 1, "18 squared is 18 × 18 = 324."));
TEXT.hard.push(mc("What is 19 squared?", ["380", "342", "361", "399"], 2, "19 squared is 19 × 19 = 361."));
TEXT.hard.push(mc("What is 20 squared?", ["420", "380", "400", "440"], 2, "20 squared is 20 × 20 = 400."));
TEXT.hard.push(mc("What is 21 squared?", ["462", "420", "483", "441"], 3, "21 squared is 21 × 21 = 441."));
TEXT.hard.push(mc("What is 22 squared?", ["484", "506", "462", "528"], 0, "22 squared is 22 × 22 = 484."));
TEXT.hard.push(mc("What is 23 squared?", ["552", "529", "506", "575"], 1, "23 squared is 23 × 23 = 529."));
TEXT.hard.push(mc("What is 24 squared?", ["600", "552", "576", "624"], 2, "24 squared is 24 × 24 = 576."));
TEXT.hard.push(mc("What is 25 squared?", ["650", "600", "675", "625"], 3, "25 squared is 25 × 25 = 625."));
TEXT.hard.push(mc("What is 26 squared?", ["676", "702", "650", "728"], 0, "26 squared is 26 × 26 = 676."));
TEXT.hard.push(mc("What is 27 squared?", ["756", "729", "702", "783"], 1, "27 squared is 27 × 27 = 729."));
TEXT.hard.push(mc("What is 28 squared?", ["812", "756", "784", "840"], 2, "28 squared is 28 × 28 = 784."));
TEXT.hard.push(mc("What is 29 squared?", ["870", "812", "899", "841"], 3, "29 squared is 29 × 29 = 841."));
TEXT.hard.push(mc("What is 30 squared?", ["930", "870", "960", "900"], 3, "30 squared is 30 × 30 = 900."));
TEXT.hard.push(mc("What is 3 cubed?", ["36", "27", "18", "57"], 1, "3 cubed is 3 × 3 × 3 = 27."));
TEXT.hard.push(mc("What is 4 cubed?", ["80", "48", "64", "94"], 2, "4 cubed is 4 × 4 × 4 = 64."));
TEXT.hard.push(mc("What is 5 cubed?", ["150", "100", "155", "125"], 3, "5 cubed is 5 × 5 × 5 = 125."));
TEXT.hard.push(mc("What is 6 cubed?", ["216", "252", "180", "246"], 0, "6 cubed is 6 × 6 × 6 = 216."));
TEXT.hard.push(mc("What is 7 cubed?", ["392", "343", "294", "373"], 1, "7 cubed is 7 × 7 × 7 = 343."));
TEXT.hard.push(mc("What is 8 cubed?", ["576", "448", "512", "542"], 2, "8 cubed is 8 × 8 × 8 = 512."));
TEXT.hard.push(mc("What is 9 cubed?", ["810", "648", "759", "729"], 3, "9 cubed is 9 × 9 × 9 = 729."));
TEXT.hard.push(mc("What is 10 cubed?", ["1100", "900", "1030", "1000"], 3, "10 cubed is 10 × 10 × 10 = 1000."));
TEXT.hard.push(mc("What is 11 cubed?", ["1331", "1452", "1210", "1361"], 0, "11 cubed is 11 × 11 × 11 = 1331."));
TEXT.hard.push(mc("What is 12 cubed?", ["1872", "1728", "1584", "1758"], 1, "12 cubed is 12 × 12 × 12 = 1728."));
TYPED.medium.push(typed("What is the square root of 16?", "4", {fact:"The square root of 16 is 4, because 4 × 4 = 16."}));
TYPED.medium.push(typed("What is the square root of 25?", "5", {fact:"The square root of 25 is 5, because 5 × 5 = 25."}));
TYPED.medium.push(typed("What is the square root of 36?", "6", {fact:"The square root of 36 is 6, because 6 × 6 = 36."}));
TYPED.medium.push(typed("What is the square root of 49?", "7", {fact:"The square root of 49 is 7, because 7 × 7 = 49."}));
TYPED.medium.push(typed("What is the square root of 64?", "8", {fact:"The square root of 64 is 8, because 8 × 8 = 64."}));
TYPED.medium.push(typed("What is the square root of 81?", "9", {fact:"The square root of 81 is 9, because 9 × 9 = 81."}));
TYPED.medium.push(typed("What is the square root of 100?", "10", {fact:"The square root of 100 is 10, because 10 × 10 = 100."}));
TYPED.medium.push(typed("What is the square root of 121?", "11", {fact:"The square root of 121 is 11, because 11 × 11 = 121."}));
TYPED.medium.push(typed("What is the square root of 144?", "12", {fact:"The square root of 144 is 12, because 12 × 12 = 144."}));
TYPED.medium.push(typed("What is the square root of 169?", "13", {fact:"The square root of 169 is 13, because 13 × 13 = 169."}));
TYPED.medium.push(typed("What is the square root of 196?", "14", {fact:"The square root of 196 is 14, because 14 × 14 = 196."}));
TYPED.medium.push(typed("What is the square root of 256?", "16", {fact:"The square root of 256 is 16, because 16 × 16 = 256."}));
TYPED.hard.push(typed("What is the square root of 289?", "17", {fact:"The square root of 289 is 17, because 17 × 17 = 289."}));
TYPED.hard.push(typed("What is the square root of 324?", "18", {fact:"The square root of 324 is 18, because 18 × 18 = 324."}));
TYPED.hard.push(typed("What is the square root of 361?", "19", {fact:"The square root of 361 is 19, because 19 × 19 = 361."}));
TYPED.hard.push(typed("What is the square root of 400?", "20", {fact:"The square root of 400 is 20, because 20 × 20 = 400."}));
TYPED.hard.push(typed("What is the square root of 441?", "21", {fact:"The square root of 441 is 21, because 21 × 21 = 441."}));
TYPED.hard.push(typed("What is the square root of 484?", "22", {fact:"The square root of 484 is 22, because 22 × 22 = 484."}));
TYPED.hard.push(typed("What is the square root of 529?", "23", {fact:"The square root of 529 is 23, because 23 × 23 = 529."}));
TYPED.hard.push(typed("What is the square root of 576?", "24", {fact:"The square root of 576 is 24, because 24 × 24 = 576."}));
TYPED.hard.push(typed("What is the square root of 625?", "25", {fact:"The square root of 625 is 25, because 25 × 25 = 625."}));
TYPED.hard.push(typed("What is the square root of 676?", "26", {fact:"The square root of 676 is 26, because 26 × 26 = 676."}));
TYPED.hard.push(typed("What is the square root of 729?", "27", {fact:"The square root of 729 is 27, because 27 × 27 = 729."}));
TYPED.hard.push(typed("What is the square root of 784?", "28", {fact:"The square root of 784 is 28, because 28 × 28 = 784."}));
TYPED.hard.push(typed("What is the square root of 841?", "29", {fact:"The square root of 841 is 29, because 29 × 29 = 841."}));
TYPED.hard.push(typed("What is the square root of 900?", "30", {fact:"The square root of 900 is 30, because 30 × 30 = 900."}));
TEXT.medium.push(mc("What is 10 percent of 200?", ["20", "25", "15", "30"], 0, "10 percent of 200 is 20."));
TEXT.medium.push(mc("What is 25 percent of 200?", ["55", "45", "50", "60"], 2, "25 percent of 200 is 50."));
TEXT.medium.push(mc("What is 50 percent of 200?", ["100", "105", "95", "110"], 0, "50 percent of 200 is 100."));
TEXT.medium.push(mc("What is 25 percent of 400?", ["100", "105", "95", "110"], 0, "25 percent of 400 is 100."));
TEXT.medium.push(mc("What is 50 percent of 80?", ["45", "35", "40", "50"], 2, "50 percent of 80 is 40."));
TEXT.medium.push(mc("What is 25 percent of 120?", ["35", "25", "40", "30"], 3, "25 percent of 120 is 30."));
TEXT.medium.push(mc("What is 50 percent of 60?", ["30", "35", "25", "40"], 0, "50 percent of 60 is 30."));
TEXT.medium.push(mc("What is 10 percent of 300?", ["35", "30", "25", "40"], 1, "10 percent of 300 is 30."));
TEXT.medium.push(mc("What is 20 percent of 500?", ["100", "105", "95", "110"], 0, "20 percent of 500 is 100."));
TEXT.medium.push(mc("What is 10 percent of 150?", ["15", "20", "10", "25"], 0, "10 percent of 150 is 15."));
TEXT.medium.push(mc("What is 50 percent of 240?", ["120", "125", "115", "130"], 0, "50 percent of 240 is 120."));
TEXT.medium.push(mc("What is 10 percent of 90?", ["14", "4", "19", "9"], 3, "10 percent of 90 is 9."));
TEXT.medium.push(mc("What is 15 percent of 1,000?", ["150", "155", "145", "160"], 0, "15 percent of 1,000 is 150."));
TEXT.medium.push(mc("What is 50 percent of 640?", ["320", "325", "315", "330"], 0, "50 percent of 640 is 320."));
TEXT.medium.push(mc("What is 50 percent of 36?", ["23", "13", "28", "18"], 3, "50 percent of 36 is 18."));
TEXT.medium.push(mc("What is 25 percent of 48?", ["12", "17", "7", "22"], 0, "25 percent of 48 is 12."));
TEXT.medium.push(mc("What is 50 percent of 72?", ["41", "31", "46", "36"], 3, "50 percent of 72 is 36."));
TEXT.medium.push(mc("What is 25 percent of 84?", ["21", "26", "16", "31"], 0, "25 percent of 84 is 21."));
TEXT.medium.push(mc("What is 50 percent of 96?", ["53", "48", "43", "58"], 1, "50 percent of 96 is 48."));
TEXT.medium.push(mc("What is 30 percent of 1,000?", ["305", "300", "295", "310"], 1, "30 percent of 1,000 is 300."));
TYPED.easy.push(typed("How many days are there in 1 weeks?", "7", {fact:"1 weeks is 1 × 7 = 7 days."}));
TYPED.easy.push(typed("How many days are there in 2 weeks?", "14", {fact:"2 weeks is 2 × 7 = 14 days."}));
TYPED.easy.push(typed("How many days are there in 3 weeks?", "21", {fact:"3 weeks is 3 × 7 = 21 days."}));
TYPED.easy.push(typed("How many days are there in 4 weeks?", "28", {fact:"4 weeks is 4 × 7 = 28 days."}));
TYPED.easy.push(typed("How many days are there in 5 weeks?", "35", {fact:"5 weeks is 5 × 7 = 35 days."}));
TYPED.easy.push(typed("How many days are there in 6 weeks?", "42", {fact:"6 weeks is 6 × 7 = 42 days."}));
TYPED.easy.push(typed("How many days are there in 7 weeks?", "49", {fact:"7 weeks is 7 × 7 = 49 days."}));
TYPED.easy.push(typed("How many days are there in 8 weeks?", "56", {fact:"8 weeks is 8 × 7 = 56 days."}));
TYPED.easy.push(typed("How many days are there in 9 weeks?", "63", {fact:"9 weeks is 9 × 7 = 63 days."}));
TYPED.easy.push(typed("How many days are there in 10 weeks?", "70", {fact:"10 weeks is 10 × 7 = 70 days."}));
TYPED.easy.push(typed("How many days are there in 11 weeks?", "77", {fact:"11 weeks is 11 × 7 = 77 days."}));
TYPED.easy.push(typed("How many days are there in 12 weeks?", "84", {fact:"12 weeks is 12 × 7 = 84 days."}));
TYPED.easy.push(typed("How many minutes are there in 2 hours?", "120", {fact:"2 hours is 2 × 60 = 120 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 3 hours?", "180", {fact:"3 hours is 3 × 60 = 180 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 4 hours?", "240", {fact:"4 hours is 4 × 60 = 240 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 5 hours?", "300", {fact:"5 hours is 5 × 60 = 300 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 6 hours?", "360", {fact:"6 hours is 6 × 60 = 360 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 7 hours?", "420", {fact:"7 hours is 7 × 60 = 420 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 8 hours?", "480", {fact:"8 hours is 8 × 60 = 480 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 9 hours?", "540", {fact:"9 hours is 9 × 60 = 540 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 10 hours?", "600", {fact:"10 hours is 10 × 60 = 600 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 11 hours?", "660", {fact:"11 hours is 11 × 60 = 660 minutes."}));
TYPED.easy.push(typed("How many minutes are there in 12 hours?", "720", {fact:"12 hours is 12 × 60 = 720 minutes."}));
TEXT.easy.push(mc("How many inches are there in 2 feet?", ["26", "24", "22", "34"], 1, "One foot is 12 inches, so 2 feet is 24 inches."));
TEXT.easy.push(mc("How many inches are there in 3 feet?", ["38", "34", "36", "46"], 2, "One foot is 12 inches, so 3 feet is 36 inches."));
TEXT.easy.push(mc("How many inches are there in 4 feet?", ["50", "46", "58", "48"], 3, "One foot is 12 inches, so 4 feet is 48 inches."));
TEXT.easy.push(mc("How many inches are there in 5 feet?", ["60", "62", "58", "70"], 0, "One foot is 12 inches, so 5 feet is 60 inches."));
TEXT.easy.push(mc("How many inches are there in 6 feet?", ["74", "72", "70", "82"], 1, "One foot is 12 inches, so 6 feet is 72 inches."));
TEXT.easy.push(mc("How many inches are there in 7 feet?", ["86", "82", "84", "94"], 2, "One foot is 12 inches, so 7 feet is 84 inches."));
TEXT.easy.push(mc("How many inches are there in 8 feet?", ["98", "94", "106", "96"], 3, "One foot is 12 inches, so 8 feet is 96 inches."));
TEXT.easy.push(mc("How many inches are there in 9 feet?", ["108", "110", "106", "118"], 0, "One foot is 12 inches, so 9 feet is 108 inches."));
TEXT.easy.push(mc("How many inches are there in 10 feet?", ["120", "122", "118", "130"], 0, "One foot is 12 inches, so 10 feet is 120 inches."));
TEXT.easy.push(mc("How many eggs are there in 2 dozen?", ["30", "24", "18", "34"], 1, "A dozen is 12, so 2 dozen eggs is 24 eggs."));
TEXT.easy.push(mc("How many eggs are there in 3 dozen?", ["42", "30", "36", "46"], 2, "A dozen is 12, so 3 dozen eggs is 36 eggs."));
TEXT.easy.push(mc("How many eggs are there in 4 dozen?", ["54", "42", "58", "48"], 3, "A dozen is 12, so 4 dozen eggs is 48 eggs."));
TEXT.easy.push(mc("How many eggs are there in 5 dozen?", ["60", "66", "54", "70"], 0, "A dozen is 12, so 5 dozen eggs is 60 eggs."));
TEXT.easy.push(mc("How many eggs are there in 6 dozen?", ["78", "72", "66", "82"], 1, "A dozen is 12, so 6 dozen eggs is 72 eggs."));
TEXT.easy.push(mc("How many eggs are there in 7 dozen?", ["90", "78", "84", "94"], 2, "A dozen is 12, so 7 dozen eggs is 84 eggs."));
TEXT.easy.push(mc("How many eggs are there in 8 dozen?", ["102", "90", "106", "96"], 3, "A dozen is 12, so 8 dozen eggs is 96 eggs."));
TEXT.easy.push(mc("How many eggs are there in 9 dozen?", ["108", "114", "102", "118"], 0, "A dozen is 12, so 9 dozen eggs is 108 eggs."));
TEXT.easy.push(mc("How many eggs are there in 10 dozen?", ["120", "126", "114", "130"], 0, "A dozen is 12, so 10 dozen eggs is 120 eggs."));
TEXT.easy.push(mc("How many eggs are there in 11 dozen?", ["138", "132", "126", "142"], 1, "A dozen is 12, so 11 dozen eggs is 132 eggs."));
TEXT.easy.push(mc("How many eggs are there in 12 dozen?", ["150", "138", "144", "154"], 2, "A dozen is 12, so 12 dozen eggs is 144 eggs."));
TEXT.medium.push(mc("How many centimetres are there in 2 metres?", ["210", "190", "200", "250"], 2, "One metre is 100 centimetres, so 2 metres is 200 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 3 metres?", ["310", "290", "350", "300"], 3, "One metre is 100 centimetres, so 3 metres is 300 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 4 metres?", ["400", "410", "390", "450"], 0, "One metre is 100 centimetres, so 4 metres is 400 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 5 metres?", ["510", "500", "490", "550"], 1, "One metre is 100 centimetres, so 5 metres is 500 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 6 metres?", ["610", "590", "600", "650"], 2, "One metre is 100 centimetres, so 6 metres is 600 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 7 metres?", ["710", "690", "750", "700"], 3, "One metre is 100 centimetres, so 7 metres is 700 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 8 metres?", ["800", "810", "790", "850"], 0, "One metre is 100 centimetres, so 8 metres is 800 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 9 metres?", ["910", "900", "890", "950"], 1, "One metre is 100 centimetres, so 9 metres is 900 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 10 metres?", ["1010", "1000", "990", "1050"], 1, "One metre is 100 centimetres, so 10 metres is 1,000 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 11 metres?", ["1110", "1090", "1100", "1150"], 2, "One metre is 100 centimetres, so 11 metres is 1,100 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 12 metres?", ["1210", "1190", "1250", "1200"], 3, "One metre is 100 centimetres, so 12 metres is 1,200 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 13 metres?", ["1300", "1310", "1290", "1350"], 0, "One metre is 100 centimetres, so 13 metres is 1,300 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 14 metres?", ["1410", "1400", "1390", "1450"], 1, "One metre is 100 centimetres, so 14 metres is 1,400 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 15 metres?", ["1510", "1490", "1500", "1550"], 2, "One metre is 100 centimetres, so 15 metres is 1,500 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 16 metres?", ["1610", "1590", "1650", "1600"], 3, "One metre is 100 centimetres, so 16 metres is 1,600 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 17 metres?", ["1700", "1710", "1690", "1750"], 0, "One metre is 100 centimetres, so 17 metres is 1,700 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 18 metres?", ["1810", "1800", "1790", "1850"], 1, "One metre is 100 centimetres, so 18 metres is 1,800 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 19 metres?", ["1910", "1890", "1900", "1950"], 2, "One metre is 100 centimetres, so 19 metres is 1,900 centimetres."));
TEXT.medium.push(mc("How many centimetres are there in 20 metres?", ["2010", "1990", "2000", "2050"], 2, "One metre is 100 centimetres, so 20 metres is 2,000 centimetres."));
TEXT.medium.push(mc("How many metres are there in 2 kilometres?", ["2100", "1900", "2,000", "2500"], 2, "One kilometre is 1,000 metres, so 2 kilometres is 2,000 metres."));
TEXT.medium.push(mc("How many metres are there in 3 kilometres?", ["3100", "2900", "3500", "3,000"], 3, "One kilometre is 1,000 metres, so 3 kilometres is 3,000 metres."));
TEXT.medium.push(mc("How many metres are there in 4 kilometres?", ["4,000", "4100", "3900", "4500"], 0, "One kilometre is 1,000 metres, so 4 kilometres is 4,000 metres."));
TEXT.medium.push(mc("How many metres are there in 5 kilometres?", ["5100", "5,000", "4900", "5500"], 1, "One kilometre is 1,000 metres, so 5 kilometres is 5,000 metres."));
TEXT.medium.push(mc("How many metres are there in 6 kilometres?", ["6100", "5900", "6,000", "6500"], 2, "One kilometre is 1,000 metres, so 6 kilometres is 6,000 metres."));
TEXT.medium.push(mc("How many metres are there in 7 kilometres?", ["7100", "6900", "7500", "7,000"], 3, "One kilometre is 1,000 metres, so 7 kilometres is 7,000 metres."));
TEXT.medium.push(mc("How many metres are there in 8 kilometres?", ["8,000", "8100", "7900", "8500"], 0, "One kilometre is 1,000 metres, so 8 kilometres is 8,000 metres."));
TEXT.medium.push(mc("How many metres are there in 9 kilometres?", ["9100", "9,000", "8900", "9500"], 1, "One kilometre is 1,000 metres, so 9 kilometres is 9,000 metres."));
TEXT.medium.push(mc("How many metres are there in 10 kilometres?", ["10100", "10,000", "9900", "10500"], 1, "One kilometre is 1,000 metres, so 10 kilometres is 10,000 metres."));
TEXT.medium.push(mc("What number comes next in the sequence 2, 4, 6, 8, ?", ["11", "9", "12", "10"], 3, "Each number grows by 2, so the next is 10."));
TEXT.medium.push(mc("What number comes next in the sequence 2, 5, 8, 11, ?", ["14", "15", "13", "17"], 0, "Each number grows by 3, so the next is 14."));
TEXT.medium.push(mc("What number comes next in the sequence 2, 7, 12, 17, ?", ["23", "21", "27", "22"], 3, "Each number grows by 5, so the next is 22."));
TEXT.medium.push(mc("What number comes next in the sequence 2, 12, 22, 32, ?", ["43", "42", "41", "52"], 1, "Each number grows by 10, so the next is 42."));
TEXT.medium.push(mc("What number comes next in the sequence 5, 7, 9, 11, ?", ["14", "12", "13", "15"], 2, "Each number grows by 2, so the next is 13."));
TEXT.medium.push(mc("What number comes next in the sequence 5, 8, 11, 14, ?", ["18", "16", "20", "17"], 3, "Each number grows by 3, so the next is 17."));
TEXT.medium.push(mc("What number comes next in the sequence 5, 10, 15, 20, ?", ["26", "25", "24", "30"], 1, "Each number grows by 5, so the next is 25."));
TEXT.medium.push(mc("What number comes next in the sequence 5, 15, 25, 35, ?", ["46", "45", "44", "55"], 1, "Each number grows by 10, so the next is 45."));
TEXT.medium.push(mc("What number comes next in the sequence 8, 10, 12, 14, ?", ["16", "17", "15", "18"], 0, "Each number grows by 2, so the next is 16."));
TEXT.medium.push(mc("What number comes next in the sequence 8, 11, 14, 17, ?", ["21", "19", "20", "23"], 2, "Each number grows by 3, so the next is 20."));
TEXT.medium.push(mc("What number comes next in the sequence 8, 13, 18, 23, ?", ["29", "28", "27", "33"], 1, "Each number grows by 5, so the next is 28."));
TEXT.medium.push(mc("What number comes next in the sequence 8, 18, 28, 38, ?", ["49", "48", "47", "58"], 1, "Each number grows by 10, so the next is 48."));
TEXT.medium.push(mc("What number comes next in the sequence 11, 13, 15, 17, ?", ["20", "18", "21", "19"], 3, "Each number grows by 2, so the next is 19."));
TEXT.medium.push(mc("What number comes next in the sequence 11, 14, 17, 20, ?", ["23", "24", "22", "26"], 0, "Each number grows by 3, so the next is 23."));
TEXT.medium.push(mc("What number comes next in the sequence 11, 16, 21, 26, ?", ["32", "30", "36", "31"], 3, "Each number grows by 5, so the next is 31."));
TEXT.medium.push(mc("What number comes next in the sequence 11, 21, 31, 41, ?", ["52", "51", "50", "61"], 1, "Each number grows by 10, so the next is 51."));
TEXT.medium.push(mc("What number comes next in the sequence 14, 16, 18, 20, ?", ["23", "21", "22", "24"], 2, "Each number grows by 2, so the next is 22."));
TEXT.medium.push(mc("What number comes next in the sequence 14, 17, 20, 23, ?", ["27", "25", "29", "26"], 3, "Each number grows by 3, so the next is 26."));
TEXT.medium.push(mc("What number comes next in the sequence 14, 19, 24, 29, ?", ["35", "33", "39", "34"], 3, "Each number grows by 5, so the next is 34."));
TEXT.medium.push(mc("What number comes next in the sequence 14, 24, 34, 44, ?", ["55", "54", "53", "64"], 1, "Each number grows by 10, so the next is 54."));
TEXT.medium.push(mc("What number comes next in the sequence 17, 19, 21, 23, ?", ["26", "25", "24", "27"], 1, "Each number grows by 2, so the next is 25."));
TEXT.medium.push(mc("What number comes next in the sequence 17, 20, 23, 26, ?", ["30", "28", "29", "32"], 2, "Each number grows by 3, so the next is 29."));
TEXT.medium.push(mc("What number comes next in the sequence 17, 22, 27, 32, ?", ["38", "37", "36", "42"], 1, "Each number grows by 5, so the next is 37."));
TEXT.medium.push(mc("What number comes next in the sequence 17, 27, 37, 47, ?", ["58", "57", "56", "67"], 1, "Each number grows by 10, so the next is 57."));
TYPED.medium.push(typed("What is 14 × 7?", "98", {fact:"14 × 7 = 98."}));
TYPED.medium.push(typed("What is 14 × 9?", "126", {fact:"14 × 9 = 126."}));
TYPED.medium.push(typed("What is 14 × 11?", "154", {fact:"14 × 11 = 154."}));
TYPED.medium.push(typed("What is 14 × 13?", "182", {fact:"14 × 13 = 182."}));
TYPED.medium.push(typed("What is 14 × 14?", "196", {fact:"14 × 14 = 196."}));
TYPED.medium.push(typed("What is 19 × 6?", "114", {fact:"19 × 6 = 114."}));
TYPED.medium.push(typed("What is 19 × 8?", "152", {fact:"19 × 8 = 152."}));
TYPED.medium.push(typed("What is 19 × 10?", "190", {fact:"19 × 10 = 190."}));
TYPED.medium.push(typed("What is 19 × 12?", "228", {fact:"19 × 12 = 228."}));
TYPED.medium.push(typed("What is 19 × 14?", "266", {fact:"19 × 14 = 266."}));
TYPED.medium.push(typed("What is 24 × 7?", "168", {fact:"24 × 7 = 168."}));
TYPED.medium.push(typed("What is 24 × 9?", "216", {fact:"24 × 9 = 216."}));
TYPED.medium.push(typed("What is 24 × 11?", "264", {fact:"24 × 11 = 264."}));
TYPED.medium.push(typed("What is 24 × 13?", "312", {fact:"24 × 13 = 312."}));
TYPED.medium.push(typed("What is 24 × 14?", "336", {fact:"24 × 14 = 336."}));
TYPED.medium.push(typed("What is 29 × 6?", "174", {fact:"29 × 6 = 174."}));
TYPED.medium.push(typed("What is 29 × 8?", "232", {fact:"29 × 8 = 232."}));
TYPED.medium.push(typed("What is 29 × 10?", "290", {fact:"29 × 10 = 290."}));
TYPED.medium.push(typed("What is 29 × 12?", "348", {fact:"29 × 12 = 348."}));
TYPED.medium.push(typed("What is 29 × 13?", "377", {fact:"29 × 13 = 377."}));
TYPED.medium.push(typed("What is 29 × 14?", "406", {fact:"29 × 14 = 406."}));
TYPED.medium.push(typed("What is 34 × 6?", "204", {fact:"34 × 6 = 204."}));
TYPED.medium.push(typed("What is 34 × 7?", "238", {fact:"34 × 7 = 238."}));
TYPED.medium.push(typed("What is 34 × 8?", "272", {fact:"34 × 8 = 272."}));
TYPED.medium.push(typed("What is 34 × 9?", "306", {fact:"34 × 9 = 306."}));
TYPED.hard.push(typed("What is 150 + 30?", "180", {fact:"150 + 30 = 180."}));
TYPED.hard.push(typed("What is 150 + 47?", "197", {fact:"150 + 47 = 197."}));
TYPED.hard.push(typed("What is 150 + 64?", "214", {fact:"150 + 64 = 214."}));
TYPED.hard.push(typed("What is 150 + 81?", "231", {fact:"150 + 81 = 231."}));
TYPED.hard.push(typed("What is 150 + 98?", "248", {fact:"150 + 98 = 248."}));
TYPED.hard.push(typed("What is 150 + 115?", "265", {fact:"150 + 115 = 265."}));
TYPED.hard.push(typed("What is 193 + 30?", "223", {fact:"193 + 30 = 223."}));
TYPED.hard.push(typed("What is 193 + 47?", "240", {fact:"193 + 47 = 240."}));
TYPED.hard.push(typed("What is 193 + 64?", "257", {fact:"193 + 64 = 257."}));
TYPED.hard.push(typed("What is 193 + 81?", "274", {fact:"193 + 81 = 274."}));
TYPED.hard.push(typed("What is 193 + 98?", "291", {fact:"193 + 98 = 291."}));
TYPED.hard.push(typed("What is 193 + 115?", "308", {fact:"193 + 115 = 308."}));
TYPED.hard.push(typed("What is 236 + 30?", "266", {fact:"236 + 30 = 266."}));
TYPED.hard.push(typed("What is 236 + 47?", "283", {fact:"236 + 47 = 283."}));
TYPED.hard.push(typed("What is 236 + 64?", "300", {fact:"236 + 64 = 300."}));
TYPED.hard.push(typed("What is 236 + 81?", "317", {fact:"236 + 81 = 317."}));
TYPED.hard.push(typed("What is 236 + 98?", "334", {fact:"236 + 98 = 334."}));
TYPED.hard.push(typed("What is 236 + 115?", "351", {fact:"236 + 115 = 351."}));
TYPED.hard.push(typed("What is 279 + 30?", "309", {fact:"279 + 30 = 309."}));
TYPED.hard.push(typed("What is 279 + 47?", "326", {fact:"279 + 47 = 326."}));
TYPED.hard.push(typed("What is 279 + 64?", "343", {fact:"279 + 64 = 343."}));
TYPED.hard.push(typed("What is 279 + 81?", "360", {fact:"279 + 81 = 360."}));
TYPED.hard.push(typed("What is 279 + 98?", "377", {fact:"279 + 98 = 377."}));
TYPED.hard.push(typed("What is 279 + 115?", "394", {fact:"279 + 115 = 394."}));
TEXT.easy.push(mc("Which US state is known as the 'Yellowhammer State'?", ["Alaska", "Florida", "Alabama", "Iowa"], 2, "Alabama is known as the Yellowhammer State."));
TEXT.medium.push(mc("What is the nickname of the US state of Alabama?", ["Golden State", "Yellowhammer State", "Prairie State", "Bay State"], 1, "The Yellowhammer State is the nickname of Alabama."));
NEWBANKS.history.push(cmc("History", "In which year did Alabama become a US state?", ["1820", "1818", "1829", "1819"], 3, "Alabama was admitted to the Union in 1819."));
TYPED.medium.push(typed("What is the US postal abbreviation for Alabama?", "AL", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"AL is the US postal abbreviation for Alabama."}));
TEXT.medium.push(mc("Which US state is known as the 'Last Frontier'?", ["Alaska", "Arizona", "Georgia", "Kansas"], 0, "Alaska is known as the Last Frontier."));
TEXT.hard.push(mc("What is the nickname of the US state of Alaska?", ["Centennial State", "Hoosier State", "Great Lakes State", "Last Frontier"], 3, "The Last Frontier is the nickname of Alaska."));
NEWBANKS.history.push(cmc("History", "In which year did Alaska become a US state?", ["1960", "1959", "1958", "1969"], 1, "Alaska was admitted to the Union in 1959."));
TYPED.easy.push(typed("What is the US postal abbreviation for Alaska?", "AK", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"AK is the US postal abbreviation for Alaska."}));
TEXT.hard.push(mc("Which US state is known as the 'Grand Canyon State'?", ["Arizona", "Arkansas", "Hawaii", "Kentucky"], 0, "Arizona is known as the Grand Canyon State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Arizona?", ["Constitution State", "Hawkeye State", "Grand Canyon State", "North Star State"], 2, "The Grand Canyon State is the nickname of Arizona."));
NEWBANKS.history.push(cmc("History", "In which year did Arizona become a US state?", ["1912", "1913", "1911", "1922"], 0, "Arizona was admitted to the Union in 1912."));
TYPED.easy.push(typed("What is the US postal abbreviation for Arizona?", "AZ", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"AZ is the US postal abbreviation for Arizona."}));
TEXT.vhard.push(mc("Which US state is known as the 'Natural State'?", ["California", "Idaho", "Louisiana", "Arkansas"], 3, "Arkansas is known as the Natural State."));
TEXT.easy.push(mc("What is the nickname of the US state of Arkansas?", ["First State", "Sunflower State", "Natural State", "Magnolia State"], 2, "The Natural State is the nickname of Arkansas."));
NEWBANKS.history.push(cmc("History", "In which year did Arkansas become a US state?", ["1836", "1837", "1835", "1846"], 0, "Arkansas was admitted to the Union in 1836."));
TYPED.medium.push(typed("What is the US postal abbreviation for Arkansas?", "AR", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"AR is the US postal abbreviation for Arkansas."}));
TEXT.easy.push(mc("Which US state is known as the 'Golden State'?", ["Colorado", "California", "Illinois", "Maine"], 1, "California is known as the Golden State."));
TEXT.medium.push(mc("What is the nickname of the US state of California?", ["Sunshine State", "Bluegrass State", "Golden State", "Show Me State"], 2, "The Golden State is the nickname of California."));
NEWBANKS.history.push(cmc("History", "In which year did California become a US state?", ["1850", "1851", "1849", "1860"], 0, "California was admitted to the Union in 1850."));
TYPED.easy.push(typed("What is the US postal abbreviation for California?", "CA", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"CA is the US postal abbreviation for California."}));
TEXT.medium.push(mc("Which US state is known as the 'Centennial State'?", ["Connecticut", "Colorado", "Indiana", "Maryland"], 1, "Colorado is known as the Centennial State."));
TEXT.hard.push(mc("What is the nickname of the US state of Colorado?", ["Peach State", "Centennial State", "Pelican State", "Treasure State"], 1, "The Centennial State is the nickname of Colorado."));
NEWBANKS.history.push(cmc("History", "In which year did Colorado become a US state?", ["1877", "1875", "1886", "1876"], 3, "Colorado was admitted to the Union in 1876."));
TYPED.easy.push(typed("What is the US postal abbreviation for Colorado?", "CO", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"CO is the US postal abbreviation for Colorado."}));
TEXT.hard.push(mc("Which US state is known as the 'Constitution State'?", ["Delaware", "Iowa", "Massachusetts", "Connecticut"], 3, "Connecticut is known as the Constitution State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Connecticut?", ["Aloha State", "Constitution State", "Pine Tree State", "Cornhusker State"], 1, "The Constitution State is the nickname of Connecticut."));
NEWBANKS.history.push(cmc("History", "In which year did Connecticut become a US state?", ["1789", "1787", "1798", "1788"], 3, "Connecticut was admitted to the Union in 1788."));
TYPED.medium.push(typed("What is the US postal abbreviation for Connecticut?", "CT", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"CT is the US postal abbreviation for Connecticut."}));
TEXT.vhard.push(mc("Which US state is known as the 'First State'?", ["Delaware", "Florida", "Kansas", "Michigan"], 0, "Delaware is known as the First State."));
TEXT.easy.push(mc("What is the nickname of the US state of Delaware?", ["Gem State", "Old Line State", "Silver State", "First State"], 3, "The First State is the nickname of Delaware."));
NEWBANKS.history.push(cmc("History", "In which year did Delaware become a US state?", ["1788", "1787", "1786", "1797"], 1, "Delaware was admitted to the Union in 1787."));
TYPED.easy.push(typed("What is the US postal abbreviation for Delaware?", "DE", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"DE is the US postal abbreviation for Delaware."}));
TEXT.easy.push(mc("Which US state is known as the 'Sunshine State'?", ["Georgia", "Florida", "Kentucky", "Minnesota"], 1, "Florida is known as the Sunshine State."));
TEXT.medium.push(mc("What is the nickname of the US state of Florida?", ["Prairie State", "Bay State", "Granite State", "Sunshine State"], 3, "The Sunshine State is the nickname of Florida."));
NEWBANKS.history.push(cmc("History", "In which year did Florida become a US state?", ["1846", "1845", "1844", "1855"], 1, "Florida was admitted to the Union in 1845."));
TYPED.easy.push(typed("What is the US postal abbreviation for Florida?", "FL", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"FL is the US postal abbreviation for Florida."}));
TEXT.medium.push(mc("Which US state is known as the 'Peach State'?", ["Hawaii", "Georgia", "Louisiana", "Mississippi"], 1, "Georgia is known as the Peach State."));
TEXT.hard.push(mc("What is the nickname of the US state of Georgia?", ["Peach State", "Hoosier State", "Great Lakes State", "Garden State"], 0, "The Peach State is the nickname of Georgia."));
NEWBANKS.history.push(cmc("History", "In which year did Georgia become a US state?", ["1789", "1787", "1788", "1798"], 2, "Georgia was admitted to the Union in 1788."));
TYPED.medium.push(typed("What is the US postal abbreviation for Georgia?", "GA", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"GA is the US postal abbreviation for Georgia."}));
TEXT.hard.push(mc("Which US state is known as the 'Aloha State'?", ["Idaho", "Hawaii", "Maine", "Missouri"], 1, "Hawaii is known as the Aloha State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Hawaii?", ["Hawkeye State", "Aloha State", "North Star State", "Land of Enchantment"], 1, "The Aloha State is the nickname of Hawaii."));
NEWBANKS.history.push(cmc("History", "In which year did Hawaii become a US state?", ["1960", "1958", "1969", "1959"], 3, "Hawaii was admitted to the Union in 1959."));
TYPED.easy.push(typed("What is the US postal abbreviation for Hawaii?", "HI", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"HI is the US postal abbreviation for Hawaii."}));
TEXT.vhard.push(mc("Which US state is known as the 'Gem State'?", ["Illinois", "Idaho", "Maryland", "Montana"], 1, "Idaho is known as the Gem State."));
TEXT.easy.push(mc("What is the nickname of the US state of Idaho?", ["Sunflower State", "Magnolia State", "Empire State", "Gem State"], 3, "The Gem State is the nickname of Idaho."));
NEWBANKS.history.push(cmc("History", "In which year did Idaho become a US state?", ["1891", "1890", "1889", "1900"], 1, "Idaho was admitted to the Union in 1890."));
TYPED.easy.push(typed("What is the US postal abbreviation for Idaho?", "ID", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"ID is the US postal abbreviation for Idaho."}));
TEXT.easy.push(mc("Which US state is known as the 'Prairie State'?", ["Illinois", "Indiana", "Massachusetts", "Nebraska"], 0, "Illinois is known as the Prairie State."));
TEXT.medium.push(mc("What is the nickname of the US state of Illinois?", ["Bluegrass State", "Prairie State", "Show Me State", "Tar Heel State"], 1, "The Prairie State is the nickname of Illinois."));
NEWBANKS.history.push(cmc("History", "In which year did Illinois become a US state?", ["1819", "1817", "1828", "1818"], 3, "Illinois was admitted to the Union in 1818."));
TYPED.medium.push(typed("What is the US postal abbreviation for Illinois?", "IL", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"IL is the US postal abbreviation for Illinois."}));
TEXT.medium.push(mc("Which US state is known as the 'Hoosier State'?", ["Iowa", "Indiana", "Michigan", "Nevada"], 1, "Indiana is known as the Hoosier State."));
TEXT.hard.push(mc("What is the nickname of the US state of Indiana?", ["Pelican State", "Treasure State", "Hoosier State", "Peace Garden State"], 2, "The Hoosier State is the nickname of Indiana."));
NEWBANKS.history.push(cmc("History", "In which year did Indiana become a US state?", ["1816", "1817", "1815", "1826"], 0, "Indiana was admitted to the Union in 1816."));
TYPED.easy.push(typed("What is the US postal abbreviation for Indiana?", "IN", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"IN is the US postal abbreviation for Indiana."}));
TEXT.hard.push(mc("Which US state is known as the 'Hawkeye State'?", ["Kansas", "Minnesota", "Iowa", "New Hampshire"], 2, "Iowa is known as the Hawkeye State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Iowa?", ["Pine Tree State", "Cornhusker State", "Hawkeye State", "Buckeye State"], 2, "The Hawkeye State is the nickname of Iowa."));
NEWBANKS.history.push(cmc("History", "In which year did Iowa become a US state?", ["1846", "1847", "1845", "1856"], 0, "Iowa was admitted to the Union in 1846."));
TYPED.easy.push(typed("What is the US postal abbreviation for Iowa?", "IA", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"IA is the US postal abbreviation for Iowa."}));
TEXT.vhard.push(mc("Which US state is known as the 'Sunflower State'?", ["Kentucky", "Kansas", "Mississippi", "New Jersey"], 1, "Kansas is known as the Sunflower State."));
TEXT.easy.push(mc("What is the nickname of the US state of Kansas?", ["Old Line State", "Silver State", "Sooner State", "Sunflower State"], 3, "The Sunflower State is the nickname of Kansas."));
NEWBANKS.history.push(cmc("History", "In which year did Kansas become a US state?", ["1862", "1861", "1860", "1871"], 1, "Kansas was admitted to the Union in 1861."));
TYPED.medium.push(typed("What is the US postal abbreviation for Kansas?", "KS", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"KS is the US postal abbreviation for Kansas."}));
TEXT.easy.push(mc("Which US state is known as the 'Bluegrass State'?", ["Kentucky", "Louisiana", "Missouri", "New Mexico"], 0, "Kentucky is known as the Bluegrass State."));
TEXT.medium.push(mc("What is the nickname of the US state of Kentucky?", ["Bluegrass State", "Bay State", "Granite State", "Beaver State"], 0, "The Bluegrass State is the nickname of Kentucky."));
NEWBANKS.history.push(cmc("History", "In which year did Kentucky become a US state?", ["1793", "1791", "1792", "1802"], 2, "Kentucky was admitted to the Union in 1792."));
TYPED.easy.push(typed("What is the US postal abbreviation for Kentucky?", "KY", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"KY is the US postal abbreviation for Kentucky."}));
TEXT.medium.push(mc("Which US state is known as the 'Pelican State'?", ["Louisiana", "Maine", "Montana", "New York"], 0, "Louisiana is known as the Pelican State."));
TEXT.hard.push(mc("What is the nickname of the US state of Louisiana?", ["Great Lakes State", "Garden State", "Keystone State", "Pelican State"], 3, "The Pelican State is the nickname of Louisiana."));
NEWBANKS.history.push(cmc("History", "In which year did Louisiana become a US state?", ["1813", "1812", "1811", "1822"], 1, "Louisiana was admitted to the Union in 1812."));
TYPED.easy.push(typed("What is the US postal abbreviation for Louisiana?", "LA", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"LA is the US postal abbreviation for Louisiana."}));
TEXT.hard.push(mc("Which US state is known as the 'Pine Tree State'?", ["Maine", "Maryland", "Nebraska", "North Carolina"], 0, "Maine is known as the Pine Tree State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Maine?", ["Pine Tree State", "North Star State", "Land of Enchantment", "Ocean State"], 0, "The Pine Tree State is the nickname of Maine."));
NEWBANKS.history.push(cmc("History", "In which year did Maine become a US state?", ["1821", "1819", "1820", "1830"], 2, "Maine was admitted to the Union in 1820."));
TYPED.medium.push(typed("What is the US postal abbreviation for Maine?", "ME", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"ME is the US postal abbreviation for Maine."}));
TEXT.vhard.push(mc("Which US state is known as the 'Old Line State'?", ["Massachusetts", "Nevada", "North Dakota", "Maryland"], 3, "Maryland is known as the Old Line State."));
TEXT.easy.push(mc("What is the nickname of the US state of Maryland?", ["Magnolia State", "Empire State", "Old Line State", "Palmetto State"], 2, "The Old Line State is the nickname of Maryland."));
NEWBANKS.history.push(cmc("History", "In which year did Maryland become a US state?", ["1788", "1789", "1787", "1798"], 0, "Maryland was admitted to the Union in 1788."));
TYPED.easy.push(typed("What is the US postal abbreviation for Maryland?", "MD", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MD is the US postal abbreviation for Maryland."}));
TEXT.easy.push(mc("Which US state is known as the 'Bay State'?", ["Massachusetts", "Michigan", "New Hampshire", "Ohio"], 0, "Massachusetts is known as the Bay State."));
TEXT.medium.push(mc("What is the nickname of the US state of Massachusetts?", ["Show Me State", "Tar Heel State", "Bay State", "Mount Rushmore State"], 2, "The Bay State is the nickname of Massachusetts."));
NEWBANKS.history.push(cmc("History", "In which year did Massachusetts become a US state?", ["1788", "1789", "1787", "1798"], 0, "Massachusetts was admitted to the Union in 1788."));
TYPED.easy.push(typed("What is the US postal abbreviation for Massachusetts?", "MA", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MA is the US postal abbreviation for Massachusetts."}));
TEXT.medium.push(mc("Which US state is known as the 'Great Lakes State'?", ["Minnesota", "New Jersey", "Oklahoma", "Michigan"], 3, "Michigan is known as the Great Lakes State."));
TEXT.hard.push(mc("What is the nickname of the US state of Michigan?", ["Treasure State", "Peace Garden State", "Great Lakes State", "Volunteer State"], 2, "The Great Lakes State is the nickname of Michigan."));
NEWBANKS.history.push(cmc("History", "In which year did Michigan become a US state?", ["1837", "1838", "1836", "1847"], 0, "Michigan was admitted to the Union in 1837."));
TYPED.medium.push(typed("What is the US postal abbreviation for Michigan?", "MI", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MI is the US postal abbreviation for Michigan."}));
TEXT.hard.push(mc("Which US state is known as the 'North Star State'?", ["Mississippi", "Minnesota", "New Mexico", "Oregon"], 1, "Minnesota is known as the North Star State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Minnesota?", ["North Star State", "Cornhusker State", "Buckeye State", "Lone Star State"], 0, "The North Star State is the nickname of Minnesota."));
NEWBANKS.history.push(cmc("History", "In which year did Minnesota become a US state?", ["1859", "1857", "1858", "1868"], 2, "Minnesota was admitted to the Union in 1858."));
TYPED.easy.push(typed("What is the US postal abbreviation for Minnesota?", "MN", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MN is the US postal abbreviation for Minnesota."}));
TEXT.vhard.push(mc("Which US state is known as the 'Magnolia State'?", ["Mississippi", "Missouri", "New York", "Pennsylvania"], 0, "Mississippi is known as the Magnolia State."));
TEXT.easy.push(mc("What is the nickname of the US state of Mississippi?", ["Silver State", "Sooner State", "Beehive State", "Magnolia State"], 3, "The Magnolia State is the nickname of Mississippi."));
NEWBANKS.history.push(cmc("History", "In which year did Mississippi become a US state?", ["1818", "1817", "1816", "1827"], 1, "Mississippi was admitted to the Union in 1817."));
TYPED.easy.push(typed("What is the US postal abbreviation for Mississippi?", "MS", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MS is the US postal abbreviation for Mississippi."}));
TEXT.easy.push(mc("Which US state is known as the 'Show Me State'?", ["Montana", "North Carolina", "Rhode Island", "Missouri"], 3, "Missouri is known as the Show Me State."));
TEXT.medium.push(mc("What is the nickname of the US state of Missouri?", ["Granite State", "Show Me State", "Beaver State", "Green Mountain State"], 1, "The Show Me State is the nickname of Missouri."));
NEWBANKS.history.push(cmc("History", "In which year did Missouri become a US state?", ["1822", "1820", "1831", "1821"], 3, "Missouri was admitted to the Union in 1821."));
TYPED.medium.push(typed("What is the US postal abbreviation for Missouri?", "MO", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MO is the US postal abbreviation for Missouri."}));
TEXT.medium.push(mc("Which US state is known as the 'Treasure State'?", ["Nebraska", "North Dakota", "South Carolina", "Montana"], 3, "Montana is known as the Treasure State."));
TEXT.hard.push(mc("What is the nickname of the US state of Montana?", ["Treasure State", "Garden State", "Keystone State", "Old Dominion"], 0, "The Treasure State is the nickname of Montana."));
NEWBANKS.history.push(cmc("History", "In which year did Montana become a US state?", ["1890", "1888", "1889", "1899"], 2, "Montana was admitted to the Union in 1889."));
TYPED.easy.push(typed("What is the US postal abbreviation for Montana?", "MT", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"MT is the US postal abbreviation for Montana."}));
TEXT.hard.push(mc("Which US state is known as the 'Cornhusker State'?", ["Nebraska", "Nevada", "Ohio", "South Dakota"], 0, "Nebraska is known as the Cornhusker State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Nebraska?", ["Land of Enchantment", "Cornhusker State", "Ocean State", "Evergreen State"], 1, "The Cornhusker State is the nickname of Nebraska."));
NEWBANKS.history.push(cmc("History", "In which year did Nebraska become a US state?", ["1868", "1866", "1877", "1867"], 3, "Nebraska was admitted to the Union in 1867."));
TYPED.easy.push(typed("What is the US postal abbreviation for Nebraska?", "NE", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NE is the US postal abbreviation for Nebraska."}));
TEXT.vhard.push(mc("Which US state is known as the 'Silver State'?", ["New Hampshire", "Nevada", "Oklahoma", "Tennessee"], 1, "Nevada is known as the Silver State."));
TEXT.easy.push(mc("What is the nickname of the US state of Nevada?", ["Empire State", "Silver State", "Palmetto State", "Mountain State"], 1, "The Silver State is the nickname of Nevada."));
NEWBANKS.history.push(cmc("History", "In which year did Nevada become a US state?", ["1865", "1863", "1874", "1864"], 3, "Nevada was admitted to the Union in 1864."));
TYPED.medium.push(typed("What is the US postal abbreviation for Nevada?", "NV", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NV is the US postal abbreviation for Nevada."}));
TEXT.easy.push(mc("Which US state is known as the 'Granite State'?", ["New Jersey", "Oregon", "New Hampshire", "Texas"], 2, "New Hampshire is known as the Granite State."));
TEXT.medium.push(mc("What is the nickname of the US state of New Hampshire?", ["Tar Heel State", "Granite State", "Mount Rushmore State", "Badger State"], 1, "The Granite State is the nickname of New Hampshire."));
NEWBANKS.history.push(cmc("History", "In which year did New Hampshire become a US state?", ["1789", "1787", "1798", "1788"], 3, "New Hampshire was admitted to the Union in 1788."));
TYPED.easy.push(typed("What is the US postal abbreviation for New Hampshire?", "NH", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NH is the US postal abbreviation for New Hampshire."}));
TEXT.medium.push(mc("Which US state is known as the 'Garden State'?", ["New Mexico", "New Jersey", "Pennsylvania", "Utah"], 1, "New Jersey is known as the Garden State."));
TEXT.hard.push(mc("What is the nickname of the US state of New Jersey?", ["Peace Garden State", "Volunteer State", "Garden State", "Equality State"], 2, "The Garden State is the nickname of New Jersey."));
NEWBANKS.history.push(cmc("History", "In which year did New Jersey become a US state?", ["1787", "1788", "1786", "1797"], 0, "New Jersey was admitted to the Union in 1787."));
TYPED.easy.push(typed("What is the US postal abbreviation for New Jersey?", "NJ", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NJ is the US postal abbreviation for New Jersey."}));
TEXT.hard.push(mc("Which US state is known as the 'Land of Enchantment'?", ["New Mexico", "New York", "Rhode Island", "Vermont"], 0, "New Mexico is known as the Land of Enchantment."));
TEXT.vhard.push(mc("What is the nickname of the US state of New Mexico?", ["Buckeye State", "Land of Enchantment", "Lone Star State", "Yellowhammer State"], 1, "The Land of Enchantment is the nickname of New Mexico."));
NEWBANKS.history.push(cmc("History", "In which year did New Mexico become a US state?", ["1913", "1911", "1922", "1912"], 3, "New Mexico was admitted to the Union in 1912."));
TYPED.medium.push(typed("What is the US postal abbreviation for New Mexico?", "NM", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NM is the US postal abbreviation for New Mexico."}));
TEXT.vhard.push(mc("Which US state is known as the 'Empire State'?", ["North Carolina", "South Carolina", "New York", "Virginia"], 2, "New York is known as the Empire State."));
TEXT.easy.push(mc("What is the nickname of the US state of New York?", ["Sooner State", "Empire State", "Beehive State", "Last Frontier"], 1, "The Empire State is the nickname of New York."));
NEWBANKS.history.push(cmc("History", "In which year did New York become a US state?", ["1789", "1787", "1798", "1788"], 3, "New York was admitted to the Union in 1788."));
TYPED.easy.push(typed("What is the US postal abbreviation for New York?", "NY", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NY is the US postal abbreviation for New York."}));
TEXT.easy.push(mc("Which US state is known as the 'Tar Heel State'?", ["North Dakota", "North Carolina", "South Dakota", "Washington"], 1, "North Carolina is known as the Tar Heel State."));
TEXT.medium.push(mc("What is the nickname of the US state of North Carolina?", ["Beaver State", "Green Mountain State", "Tar Heel State", "Grand Canyon State"], 2, "The Tar Heel State is the nickname of North Carolina."));
NEWBANKS.history.push(cmc("History", "In which year did North Carolina become a US state?", ["1789", "1790", "1788", "1799"], 0, "North Carolina was admitted to the Union in 1789."));
TYPED.easy.push(typed("What is the US postal abbreviation for North Carolina?", "NC", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"NC is the US postal abbreviation for North Carolina."}));
TEXT.medium.push(mc("Which US state is known as the 'Peace Garden State'?", ["Ohio", "Tennessee", "West Virginia", "North Dakota"], 3, "North Dakota is known as the Peace Garden State."));
TEXT.hard.push(mc("What is the nickname of the US state of North Dakota?", ["Keystone State", "Peace Garden State", "Old Dominion", "Natural State"], 1, "The Peace Garden State is the nickname of North Dakota."));
NEWBANKS.history.push(cmc("History", "In which year did North Dakota become a US state?", ["1890", "1888", "1899", "1889"], 3, "North Dakota was admitted to the Union in 1889."));
TYPED.medium.push(typed("What is the US postal abbreviation for North Dakota?", "ND", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"ND is the US postal abbreviation for North Dakota."}));
TEXT.hard.push(mc("Which US state is known as the 'Buckeye State'?", ["Ohio", "Oklahoma", "Texas", "Wisconsin"], 0, "Ohio is known as the Buckeye State."));
TEXT.vhard.push(mc("What is the nickname of the US state of Ohio?", ["Ocean State", "Buckeye State", "Evergreen State", "Golden State"], 1, "The Buckeye State is the nickname of Ohio."));
NEWBANKS.history.push(cmc("History", "In which year did Ohio become a US state?", ["1804", "1802", "1813", "1803"], 3, "Ohio was admitted to the Union in 1803."));
TYPED.easy.push(typed("What is the US postal abbreviation for Ohio?", "OH", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"OH is the US postal abbreviation for Ohio."}));
TEXT.vhard.push(mc("Which US state is known as the 'Sooner State'?", ["Oregon", "Utah", "Oklahoma", "Wyoming"], 2, "Oklahoma is known as the Sooner State."));
TEXT.easy.push(mc("What is the nickname of the US state of Oklahoma?", ["Palmetto State", "Mountain State", "Sooner State", "Centennial State"], 2, "The Sooner State is the nickname of Oklahoma."));
NEWBANKS.history.push(cmc("History", "In which year did Oklahoma become a US state?", ["1907", "1908", "1906", "1917"], 0, "Oklahoma was admitted to the Union in 1907."));
TYPED.easy.push(typed("What is the US postal abbreviation for Oklahoma?", "OK", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"OK is the US postal abbreviation for Oklahoma."}));
TEXT.easy.push(mc("Which US state is known as the 'Beaver State'?", ["Pennsylvania", "Oregon", "Vermont", "Alabama"], 1, "Oregon is known as the Beaver State."));
TEXT.medium.push(mc("What is the nickname of the US state of Oregon?", ["Beaver State", "Mount Rushmore State", "Badger State", "Constitution State"], 0, "The Beaver State is the nickname of Oregon."));
NEWBANKS.history.push(cmc("History", "In which year did Oregon become a US state?", ["1860", "1858", "1859", "1869"], 2, "Oregon was admitted to the Union in 1859."));
TYPED.medium.push(typed("What is the US postal abbreviation for Oregon?", "OR", {exact:true, rule:"Postal abbreviation — spelling must be exact.", fact:"OR is the US postal abbreviation for Oregon."}));
TEXT.medium.push(mc("Which US state is known as the 'Keystone State'?", ["Rhode Island", "Virginia", "Pennsylvania", "Alaska"], 2, "Pennsylvania is known as the Keystone State."));
TEXT.hard.push(mc("What is the nickname of the US state of Pennsylvania?", ["Volunteer State", "Equality State", "Keystone State", "First State"], 2, "The Keystone State is the nickname of Pennsylvania."));