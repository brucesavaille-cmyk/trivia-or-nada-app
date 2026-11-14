/* ============================================================
   TRIVIA OR NADA — game script, part 5 of 6 (speed pass).
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

NEWCAT.popculture.push(cmc("Pop Culture", "Who played Catwoman in 'Batman Returns' (1992)?", ["Michelle Pfeiffer", "Kim Basinger", "Halle Berry", "Anne Hathaway"], 0, "Michelle Pfeiffer's stitched catsuit became an instant icon."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Batman in 'Batman Forever' (1995)?", ["Michael Keaton", "Val Kilmer", "George Clooney", "Christian Bale"], 1, "Val Kilmer took over the cowl for one film."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Batman in 'Batman & Robin' (1997)?", ["Val Kilmer", "Ben Affleck", "Michael Keaton", "George Clooney"], 3, "George Clooney has joked for years about apologising for the film."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Batman in 'Batman Begins' (2005)?", ["Ben Affleck", "Robert Pattinson", "Michael Keaton", "Christian Bale"], 3, "Christian Bale gained about 100 pounds after 'The Machinist' to play Bruce Wayne."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Batman in 'The Batman' (2022)?", ["Christian Bale", "Robert Pattinson", "Ben Affleck", "Michael Keaton"], 1, "Matt Reeves's film follows Batman in his second year of crime-fighting."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who plays Iron Man in the Marvel films?", ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], 1, "Robert Downey Jr.'s casting launched the Marvel Cinematic Universe in 2008."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who plays Captain America in the Marvel films?", ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Chris Pratt"], 1, "Chris Evans had earlier played the Human Torch in 'Fantastic Four'."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who plays Thor in the Marvel films?", ["Chris Evans", "Chris Pratt", "Chris Hemsworth", "Tom Hiddleston"], 2, "Australian Chris Hemsworth was a soap actor before landing Thor."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who plays Loki in the Marvel films?", ["Tom Hiddleston", "Chris Hemsworth", "Mark Ruffalo", "Jeremy Renner"], 0, "Tom Hiddleston originally auditioned to play Thor."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Bruce Banner in 'The Avengers' (2012)?", ["Edward Norton", "Eric Bana", "Mark Ruffalo", "Lou Ferrigno"], 2, "Mark Ruffalo replaced Edward Norton, who had played Banner in 2008's 'The Incredible Hulk'."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who plays Black Widow in the Marvel films?", ["Scarlett Johansson", "Elizabeth Olsen", "Brie Larson", "Emily Blunt"], 0, "Scarlett Johansson was the second choice — Emily Blunt had to drop out."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Captain Marvel in 'Captain Marvel' (2019)?", ["Scarlett Johansson", "Brie Larson", "Elizabeth Olsen", "Tessa Thompson"], 1, "Brie Larson trained for nine months, including flight-school visits with the Air Force."));
NEWCAT.popculture.push(cmc("Pop Culture", "Which film won the Academy Award for Best Picture at the 2025 Oscars, honouring 2024 films?", ["The Brutalist", "Wicked", "Conclave", "Anora"], 3, "'Anora' won five Oscars, including Best Director for Sean Baker."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who directed the original 'Star Wars' film in 1977?", ["Steven Spielberg", "George Lucas", "Francis Ford Coppola", "Ridley Scott"], 1, "George Lucas wrote and directed the 1977 original, later retitled 'Episode IV – A New Hope'."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who directed 'The Lord of the Rings' film trilogy?", ["James Cameron", "Guillermo del Toro", "Peter Jackson", "Steven Spielberg"], 2, "Peter Jackson filmed the trilogy back-to-back in his native New Zealand."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Vito Corleone in 'The Godfather' (1972)?", ["Al Pacino", "Marlon Brando", "Robert De Niro", "James Caan"], 1, "Marlon Brando won the Best Actor Oscar as Vito Corleone, head of the Corleone family."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Atticus Finch in 'To Kill a Mockingbird' (1962)?", ["James Stewart", "Henry Fonda", "Gregory Peck", "Spencer Tracy"], 2, "Gregory Peck won the Best Actor Oscar for playing Atticus Finch."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Superman in the 1978 film 'Superman'?", ["Robert Redford", "Warren Beatty", "Gene Hackman", "Christopher Reeve"], 3, "Christopher Reeve, then little known, won the role and played Superman in four films."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Clarice Starling in 'The Silence of the Lambs' (1991)?", ["Michelle Pfeiffer", "Jodie Foster", "Geena Davis", "Susan Sarandon"], 1, "Jodie Foster won the Best Actress Oscar as FBI trainee Clarice Starling."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who directed 'Fight Club' (1999)?", ["Christopher Nolan", "Darren Aronofsky", "David Fincher", "Paul Thomas Anderson"], 2, "David Fincher adapted Chuck Palahniuk's novel; it became a cult classic after its cinema run."));
NEWCAT.popculture.push(cmc("Pop Culture", "Which 1991 film was the first animated film ever nominated for the Best Picture Oscar?", ["The Little Mermaid", "Aladdin", "The Lion King", "Beauty and the Beast"], 3, "Disney's 'Beauty and the Beast' (1991) was the first animated film nominated for Best Picture."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who voiced Donkey in 'Shrek' (2001)?", ["Mike Myers", "Eddie Murphy", "Chris Rock", "Robin Williams"], 1, "Eddie Murphy voiced the talkative Donkey opposite Mike Myers' Shrek."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Kevin McCallister in 'Home Alone' (1990)?", ["Elijah Wood", "Haley Joel Osment", "Macaulay Culkin", "Jonathan Taylor Thomas"], 2, "Macaulay Culkin was ten when 'Home Alone' made him the biggest child star in Hollywood."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Peter Parker in 'Spider-Man' (2002)?", ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Jake Gyllenhaal"], 0, "Tobey Maguire played Peter Parker in Sam Raimi's trilogy, starting in 2002."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played T'Challa in 'Black Panther' (2018)?", ["Michael B. Jordan", "Chadwick Boseman", "Daniel Kaluuya", "Anthony Mackie"], 1, "Chadwick Boseman's T'Challa first appeared in 'Captain America: Civil War' (2016)."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who directed 'Barbie' (2023)?", ["Sofia Coppola", "Emerald Fennell", "Celine Song", "Greta Gerwig"], 3, "Greta Gerwig co-wrote 'Barbie' with Noah Baumbach and directed it."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who directed 'Spirited Away' (2001)?", ["Isao Takahata", "Hayao Miyazaki", "Satoshi Kon", "Mamoru Oshii"], 1, "Hayao Miyazaki's 'Spirited Away' won the Oscar for Best Animated Feature."));
NEWCAT.popculture.push(cmc("Pop Culture", "Who played Elphaba in 'Wicked' (2024)?", ["Ariana Grande", "Idina Menzel", "Kristin Chenoweth", "Cynthia Erivo"], 3, "Cynthia Erivo plays Elphaba opposite Ariana Grande's Glinda in the film of the stage musical."));
NEWCAT.popculture.push(cmc("Pop Culture", "In which comic book did Spider-Man first appear?", ["Amazing Spider-Man #1", "Marvel Comics #1", "Fantastic Four #12", "Amazing Fantasy #15"], 3, "Spider-Man debuted in Amazing Fantasy #15 (cover-dated August 1962), created by Stan Lee and Steve Ditko."));

/* ---- Spider-Man set (owner request, 2026-11-11): 20 questions
   added to this existing Pop Culture bank — no new category.
   Movies 4, Comics 4, Characters 3, Actors 3, first comic-book
   appearances 3 (other debuts, not the Amazing Fantasy #15
   question already in this bank), first television appearances
   3 (medium pinned: animated vs live-action). Distractors are
   matched by type and domain, and gender-matched for people. ---- */
NEWCAT.popculture.push(cmc("Pop Culture", "Who directed the 2002 film 'Spider-Man', the first film of the original Spider-Man movie trilogy?", ["Sam Raimi", "Jon Watts", "Marc Webb", "Bryan Singer"], 0, "Sam Raimi directed the 2002–2007 Spider-Man trilogy starring Tobey Maguire.")); /* Movies */
NEWCAT.popculture.push(cmc("Pop Culture", "Which actor plays the Green Goblin, Norman Osborn, in 'Spider-Man' (2002)?", ["Willem Dafoe", "Alfred Molina", "James Franco", "Topher Grace"], 0, "Willem Dafoe played Norman Osborn; Alfred Molina played Doctor Octopus in the 2004 sequel.")); /* Movies */
NEWCAT.popculture.push(cmc("Pop Culture", "Which actress played Mary Jane Watson in Sam Raimi's 'Spider-Man' trilogy?", ["Kirsten Dunst", "Emma Stone", "Zendaya", "Bryce Dallas Howard"], 0, "Kirsten Dunst played Mary Jane Watson in all three of Raimi's films, from 2002 to 2007.")); /* Movies */
NEWCAT.popculture.push(cmc("Pop Culture", "The 2018 animated film 'Spider-Man: Into the Spider-Verse' centres on which young hero?", ["Miles Morales", "Peter Parker", "Miguel O'Hara", "Ben Reilly"], 0, "Into the Spider-Verse follows Miles Morales as he becomes the Spider-Man of his own universe.")); /* Movies */
NEWCAT.popculture.push(cmc("Pop Culture", "Spider-Man was co-created by writer Stan Lee and which artist?", ["Steve Ditko", "Jack Kirby", "John Romita Sr.", "Gil Kane"], 0, "Steve Ditko designed Spider-Man's costume and web-shooters and co-plotted the earliest stories.")); /* Comics */
NEWCAT.popculture.push(cmc("Pop Culture", "In the comics, Peter Parker sells his Spider-Man photos to which newspaper?", ["The Daily Bugle", "The Daily Planet", "The Daily Globe", "The New York Bulletin"], 0, "The Daily Bugle is run by J. Jonah Jameson, who campaigns against Spider-Man while buying Peter's photos of him.")); /* Comics */
NEWCAT.popculture.push(cmc("Pop Culture", "Norman Osborn is the secret identity of which Spider-Man villain?", ["Green Goblin", "Doctor Octopus", "Venom", "The Lizard"], 0, "Norman Osborn first became the Green Goblin in The Amazing Spider-Man #14, in 1964.")); /* Comics */
NEWCAT.popculture.push(cmc("Pop Culture", "What is the name of Peter Parker's uncle, whose lesson was that with great power comes great responsibility?", ["Ben Parker", "Richard Parker", "George Stacy", "Norman Osborn"], 0, "Ben Parker raised Peter with Aunt May; his death is what drives Peter to use his powers responsibly.")); /* Comics */
NEWCAT.popculture.push(cmc("Pop Culture", "Peter Parker's first great love died in a famous 1973 story, falling from a bridge during his battle with the Green Goblin. Who was she?", ["Gwen Stacy", "Mary Jane Watson", "Felicia Hardy", "Betty Brant"], 0, "Gwen Stacy died in The Amazing Spider-Man #121 (1973), 'The Night Gwen Stacy Died' — one of the most famous stories in comics.")); /* Characters */
NEWCAT.popculture.push(cmc("Pop Culture", "Eddie Brock, bonded with an alien symbiote, is better known as which Spider-Man villain?", ["Venom", "Carnage", "Riot", "Toxin"], 0, "Eddie Brock first appeared in full as Venom in The Amazing Spider-Man #300, in 1988.")); /* Characters */
NEWCAT.popculture.push(cmc("Pop Culture", "What is the name of Peter Parker's aunt, who raised him in Queens with his uncle?", ["May Parker", "Mary Parker", "Anna Watson", "Gwen Stacy"], 0, "May Parker — Aunt May — raised Peter after the deaths of his parents.")); /* Characters */
NEWCAT.popculture.push(cmc("Pop Culture", "Who plays Spider-Man in the Marvel Cinematic Universe films, starting with 'Captain America: Civil War' (2016)?", ["Tom Holland", "Tobey Maguire", "Andrew Garfield", "Nicholas Hammond"], 0, "Tom Holland made his debut as the MCU's Peter Parker in Captain America: Civil War, in 2016.")); /* Actors */
NEWCAT.popculture.push(cmc("Pop Culture", "Who voices Miles Morales in the animated film 'Spider-Man: Into the Spider-Verse' (2018)?", ["Shameik Moore", "Jake Johnson", "Oscar Isaac", "Nicolas Cage"], 0, "Shameik Moore voices Miles Morales; Jake Johnson voices Peter B. Parker in the same film.")); /* Actors */
NEWCAT.popculture.push(cmc("Pop Culture", "Which actress plays Michelle 'MJ' Jones in the Marvel Cinematic Universe Spider-Man films?", ["Zendaya", "Emma Stone", "Kirsten Dunst", "Hailee Steinfeld"], 0, "Zendaya plays Michelle Jones, revealed as 'MJ' in Spider-Man: Homecoming, in 2017.")); /* Actors */
NEWCAT.popculture.push(cmc("Pop Culture", "Doctor Octopus first appeared in which issue of 'The Amazing Spider-Man'?", ["The Amazing Spider-Man #3", "The Amazing Spider-Man #1", "The Amazing Spider-Man #6", "The Amazing Spider-Man #14"], 0, "Doctor Octopus — Otto Octavius — debuted in The Amazing Spider-Man #3, in 1963.")); /* First comics */
NEWCAT.popculture.push(cmc("Pop Culture", "Gwen Stacy first appeared in which issue of 'The Amazing Spider-Man'?", ["The Amazing Spider-Man #31", "The Amazing Spider-Man #14", "The Amazing Spider-Man #42", "The Amazing Spider-Man #121"], 0, "Gwen Stacy debuted in The Amazing Spider-Man #31, in 1965; issue #121 is the story of her death.")); /* First comics */
NEWCAT.popculture.push(cmc("Pop Culture", "Miles Morales first appeared in which comic book, published in 2011?", ["Ultimate Fallout #4", "Spider-Men #1", "Ultimate Comics: Spider-Man #1", "The Amazing Spider-Man #648"], 0, "Miles Morales debuted in Ultimate Fallout #4, in 2011, after the death of his own universe's Peter Parker.")); /* First comics */
NEWCAT.popculture.push(cmc("Pop Culture", "Which animated series — Spider-Man's first ever on television — gave him his famous theme song, the one that says he 'does whatever a spider can'?", ["Spider-Man (1967)", "The Amazing Spider-Man (1977)", "Spider-Man and His Amazing Friends (1981)", "Spider-Man: The Animated Series (1994)"], 0, "The 1967 animated series 'Spider-Man', the character's first on television, is famous for its theme song: 'Spider-Man, Spider-Man, does whatever a spider can.'")); /* First TV */
NEWCAT.popculture.push(cmc("Pop Culture", "Spider-Man's first live-action television series of his own, starring Nicholas Hammond, premiered in 1977. What was it called?", ["The Amazing Spider-Man", "Spider-Man", "The Incredible Hulk", "Spider-Man and His Amazing Friends"], 0, "Nicholas Hammond starred in 'The Amazing Spider-Man' from 1977 to 1979, the character's first live-action series of his own.")); /* First TV */
NEWCAT.popculture.push(cmc("Pop Culture", "Which character first appeared on television — created for the 1981 animated series 'Spider-Man and His Amazing Friends' — before ever appearing in comics?", ["Firestar", "Spider-Woman", "Ms. Marvel", "Storm"], 0, "Firestar — Angelica Jones — was created for the 1981 series and only later joined Marvel's comics.")); /* First TV */



/* ==== 2026-11-09 expansion: small banks topped up, plus new Hawaii and Canada banks ==== */
NEWBANKS.marketing.push(
  cmc("Marketing", "In marketing, 'CPM' — the cost of reaching a thousand people with an ad — stands for what?", ["Cost per million", "Cost per mille", "Clicks per minute", "Cost per message"], 1, "CPM stands for cost per mille, Latin for 'per thousand' ad impressions."),
  cmc("Marketing", "What does the 'W' stand for in a SWOT analysis?", ["Weaknesses", "Warranties", "Wholesale", "Web traffic"], 0, "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats."),
  cmc("Marketing", "What does the 'T' stand for in a SWOT analysis?", ["Trends", "Technology", "Targeting", "Threats"], 3, "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats."),
  cmc("Marketing", "In marketing, 'UGC' — content like reviews and unboxing videos made by customers — stands for what?", ["Universal growth campaign", "Unified global commerce", "User-generated content", "User growth cohort"], 2, "UGC is user-generated content: material created by customers rather than the brand."),
  cmc("Marketing", "A 'brand ambassador' is a person who does what?", ["Audits a company's accounts", "Represents and promotes a brand over time", "Designs a company's logo", "Negotiates shelf space with retailers"], 1, "A brand ambassador is someone engaged to represent and promote a brand on an ongoing basis."),
  cmc("Marketing", "In email marketing, the 'open rate' measures what?", ["The share of recipients who open the email", "The share of emails that bounce", "How fast an email loads", "The share of recipients who reply"], 0, "Open rate is the percentage of delivered emails that recipients open."),
  cmc("Marketing", "'Churn' in subscription marketing means what?", ["A sudden spike in new sign-ups", "Discounting older stock", "Rebranding a product", "Customers cancelling or leaving over time"], 3, "Churn is the rate at which customers stop subscribing or buying over a period."),
  cmc("Marketing", "What is a 'buyer persona'?", ["A celebrity hired for an ad", "The person who signs purchase orders", "A fictional profile of an ideal customer", "A mystery shopper"], 2, "A buyer persona is a research-based, fictional representation of a target customer."),
  cmc("Marketing", "In the marketing funnel, which stage comes first?", ["Purchase", "Awareness", "Loyalty", "Advocacy"], 1, "The funnel starts with awareness, before interest, consideration, and purchase."),
  cmc("Marketing", "'Guerrilla marketing' is best described as what?", ["Unconventional, low-budget tactics that surprise the public", "Advertising during wartime", "Marketing only in rural areas", "Door-to-door selling"], 0, "Guerrilla marketing uses unconventional, often low-cost public stunts and surprises to win attention."),
  cmc("Marketing", "A 'landing page' in digital marketing is what?", ["A website's homepage", "The final checkout page", "A printed flyer's first page", "The web page visitors reach after clicking an ad or link"], 3, "A landing page is the page designed to receive visitors from a specific ad, email, or link."),
  cmc("Marketing", "In social media marketing, 'engagement' usually refers to what?", ["The number of employees online", "How long a post is", "Likes, comments, shares, and other interactions", "Paid reach only"], 2, "Engagement counts audience interactions such as likes, comments, shares, and clicks."),
  cmc("Marketing", "A 'hashtag' was first popularized for grouping topics on which platform?", ["Facebook", "Twitter", "Instagram", "TikTok"], 1, "Hashtags were popularized on Twitter starting in 2007 to group conversations by topic."),
  cmc("Marketing", "In market research, a 'survey' gathers information mainly by what means?", ["Asking people questions", "Watching security footage", "Reading competitors' ads", "Counting store visitors silently"], 0, "Surveys collect data by asking respondents questions directly."),
  cmc("Marketing", "What does 'shelf life' mean for a retail product?", ["The height of the store shelf", "How long a product trends online", "A product's warranty period", "How long it stays usable or saleable in storage"], 3, "Shelf life is the length of time a product remains usable or fit for sale."),
  cmc("Marketing", "A 'private label' product is one that is what?", ["Sold only to members of a club", "Imported without a label", "Made for a retailer and sold under the retailer's own brand", "Kept off store shelves"], 2, "Private label goods are manufactured for a retailer and sold under that retailer's own brand, like store brands."),
  cmc("Marketing", "What is 'packaging' meant to do besides protect a product?", ["Lower the product's weight", "Attract buyers and communicate the brand", "Hide the ingredients list", "Replace advertising entirely"], 1, "Packaging also markets the product: it attracts attention and communicates brand and information."),
  cmc("Marketing", "In pricing, a 'markup' is what?", ["The amount added to cost to set the selling price", "A discount given to loyal customers", "A tax on imported goods", "The price printed on a tag"], 0, "Markup is the difference between a product's cost and its selling price, added by the seller."),
  cmc("Marketing", "What is a 'trade show'?", ["A shop that swaps goods without money", "A televised auction", "A meeting of advertising regulators", "An exhibition where companies in an industry display products"], 3, "Trade shows are industry exhibitions where businesses showcase products to buyers and media."),
  cmc("Marketing", "'Cold calling' means doing what?", ["Calling customers only in winter", "Surveying existing customers", "Contacting potential customers who have not asked to be contacted", "Selling through vending machines"], 2, "Cold calling is phoning or visiting prospective customers without prior contact or invitation."),
  cmc("Marketing", "In marketing, 'reach' refers to what?", ["How far a delivery truck travels", "The number of different people exposed to a message", "The length of a TV commercial", "A brand's total yearly sales"], 1, "Reach is the number of unique people who see a message at least once."),
  cmc("Marketing", "A 'coupon' is an example of which promotion tool?", ["Sales promotion", "Public relations", "Personal selling", "Product placement"], 0, "Coupons are sales-promotion incentives that encourage purchase with a saving."),
  cmc("Marketing", "What is 'brand positioning'?", ["Where a logo sits on packaging", "The shelf a product occupies", "A company's office location strategy", "How a brand is meant to be perceived relative to competitors"], 3, "Positioning is shaping how target customers perceive a brand compared with rivals."),
  cmc("Marketing", "In retail marketing, 'foot traffic' means what?", ["Sales made by travelling salespeople", "Deliveries to a warehouse", "The number of people entering a store", "Online page views"], 2, "Foot traffic is the flow of people physically entering a store."),
  cmc("Marketing", "What is a 'flash sale'?", ["A sale of camera equipment", "A very short, time-limited discount event", "Selling damaged goods at auction", "A permanent clearance section"], 1, "A flash sale offers a steep discount for a very limited time to spur quick purchases."),
  cmc("Marketing", "The marketing term 'evergreen content' describes content that does what?", ["Stays relevant and useful for a long time", "Is only posted in December", "Uses the colour green heavily", "Is printed on recycled paper"], 0, "Evergreen content remains relevant long after publication, like classic how-to guides."),
  cmc("Marketing", "In pricing, what is a 'loss leader'?", ["A brand that has stopped advertising", "A product recalled for defects", "A manager who misses sales targets", "A product sold below cost to draw shoppers into a store"], 3, "A loss leader is priced at or below cost so customers come in and buy other goods too."),
  cmc("Marketing", "In marketing, what is 'cannibalisation'?", ["A rival buying your company", "Selling below cost to destroy competitors", "A new product eating into the sales of a company's existing product", "A product that only sells at Halloween"], 2, "Product cannibalisation is when a company's new product takes sales from its own existing products."),
  cmc("Marketing", "What does the retail abbreviation 'SKU' stand for?", ["Standard known unit", "Stock keeping unit", "Store kiosk unit", "Sales knowledge update"], 1, "A SKU is a unique stock keeping unit code identifying each distinct product a retailer carries.")
);
NEWBANKS.riddles.push(
  cmc("Riddles", "Riddle: What has keys and a space bar but no lock to open and no room to enter?", ["A piano", "A computer keyboard", "A hotel lobby", "A typewriter ribbon"], 1, "A keyboard has letter keys and a space bar, but it opens no locks and holds no rooms."),
  cmc("Riddles", "Riddle: What word reads the same forwards, backwards, and upside down?", ["Noon", "Radar", "Level", "Civic"], 0, "'Noon' is a palindrome, and in lowercase letters it also reads 'noon' when flipped upside down."),
  cmc("Riddles", "Riddle: What can you find in the middle of 'nowhere'?", ["A small town", "Nothing at all", "A compass", "The letter H"], 3, "The letter H sits in the middle of the word 'nowhere'."),
  cmc("Riddles", "Riddle: What can you keep after giving it to someone else?", ["A cold", "A secret", "Your word", "A handshake"], 2, "You give your word to someone and still keep it by honouring the promise."),
  cmc("Riddles", "Riddle: What has a mouth but never eats?", ["A tunnel", "A cave", "A volcano", "A bottle"], 1, "The opening of a cave is called its mouth, but a cave never eats."),
  cmc("Riddles", "Riddle: What has a head but no brain, and is eaten in salads?", ["A lettuce", "A cabbage rose", "A mushroom", "A radish"], 0, "A head of lettuce is named for its rounded 'head' of leaves."),
  cmc("Riddles", "Riddle: What sleeps with its shoes on?", ["A soldier", "A toddler", "A statue", "A horse"], 3, "Horses wear horseshoes day and night, so they 'sleep in their shoes'."),
  cmc("Riddles", "Riddle: Which English word has three consecutive double letters?", ["Committee", "Balloon", "Bookkeeper", "Mississippi"], 2, "'Bookkeeper' contains oo, kk, and ee — three double letters in a row."),
  cmc("Riddles", "Riddle: What has a foot but no legs?", ["A table", "A snail", "A mountain", "A sock"], 1, "A snail moves on a single muscular 'foot' and has no legs."),
  cmc("Riddles", "Riddle: What begins with P, ends with E, and is full of thousands of letters?", ["A post office", "A phone book", "A poem", "A package"], 0, "A post office handles thousands of letters — the mailed kind."),
  cmc("Riddles", "Riddle: Which kind of lion never roars?", ["A mountain lion", "A sea lion", "An African lion", "A dandelion"], 3, "A dandelion is a yellow flower whose name comes from French for 'lion's tooth'."),
  cmc("Riddles", "Riddle: If you have me, you want to share me. If you share me, you no longer have me. What am I?", ["A sandwich", "A photograph", "A secret", "A umbrella"], 2, "A secret stops being a secret the moment it is shared."),
  cmc("Riddles", "Riddle: What has waves but no water?", ["A sound", "A flag", "A radio dial", "A wheat field"], 1, "A flag ripples in waves in the wind, though it holds no water."),
  cmc("Riddles", "Riddle: What has a neck but no head, and two arms but no hands?", ["A shirt", "A bottle", "A guitar", "A scarecrow"], 0, "A shirt has a neck opening and sleeves for arms, but no head or hands of its own."),
  cmc("Riddles", "Riddle: What has six faces but never wears makeup, and twenty-one eyes but cannot see?", ["A spider", "A camera", "A domino", "A die"], 3, "A standard die has six faces, and its pips (dots) total twenty-one."),
  cmc("Riddles", "Riddle: What comes down but never goes up?", ["An elevator", "A balloon", "Rain", "A staircase"], 2, "Rain falls down from clouds and never travels back up as rain."),
  cmc("Riddles", "Riddle: What kind of dog never bites?", ["A bulldog", "A hot dog", "A sheepdog", "A watchdog"], 1, "A hot dog is a sausage in a bun — food, not an animal."),
  cmc("Riddles", "Riddle: What has legs but cannot walk, and is worn below the waist?", ["A pair of trousers", "A table", "A spider", "A ladder"], 0, "Trousers have two 'legs' of cloth, but they walk only when someone wears them."),
  cmc("Riddles", "Riddle: What falls but never breaks, and what breaks but never falls?", ["Rain and ice", "Winter and spring", "Tide and shore", "Night and day"], 3, "Night falls each evening, and day breaks each morning — neither is damaged by it."),
  cmc("Riddles", "Riddle: What has no beginning, no end, and no middle?", ["A sandwich", "A muffin", "A doughnut", "A pancake"], 2, "A ring doughnut is a closed loop with a hole where the middle would be."),
  cmc("Riddles", "Riddle: What can you make that no one, not even you, can see?", ["A shadow", "A noise", "A drawing", "A promise"], 1, "Noise is heard, not seen — you can make it but never look at it."),
  cmc("Riddles", "Riddle: What do you bury while it is alive and dig up when it is dead?", ["A plant", "A treasure chest", "A time capsule", "A fence post"], 0, "A seed or plant is buried alive in soil and dug up (harvested or removed) when dead."),
  cmc("Riddles", "Riddle: What has four eyes but cannot see?", ["A spider", "Two owls", "A pair of glasses", "Mississippi"], 3, "The word Mississippi is spelled with four letter I's — its 'eyes' — but it cannot see."),
  cmc("Riddles", "Riddle: What has a nose but no sense of smell?", ["A bloodhound", "A pig", "An airplane", "An elephant"], 2, "The front of an airplane is called its nose, but it cannot smell."),
  cmc("Riddles", "Riddle: What can you never eat for breakfast?", ["Pancakes", "Lunch and dinner", "Cereal", "Toast"], 1, "By definition, lunch and dinner are meals for later in the day, never breakfast."),
  cmc("Riddles", "Riddle: What is easy to lift but hard to throw far?", ["A feather", "A paperclip", "A balloon", "A leaf"], 0, "A feather is almost weightless but drifts and flutters instead of flying far when thrown."),
  cmc("Riddles", "Riddle: What has a head but no hair, and a point at the other end?", ["A nail", "A needle", "A match", "A pin"], 3, "A pin has a head at one end and a sharp point at the other."),
  cmc("Riddles", "Riddle: Which word has a whole mile between its first and last letters?", ["Distance", "Highway", "Smiles", "Journey"], 2, "'Smiles' has the word 'mile' between its first and last letters, S...s.")
);
NEWBANKS.advertising.push(
  cmc("Advertising", "Which clown has been McDonald's chief mascot since the 1960s?", ["The Hamburglar", "Ronald McDonald", "Grimace", "Mayor McCheese"], 1, "Ronald McDonald, the chain's red-haired clown mascot, debuted in 1963."),
  cmc("Advertising", "According to GEICO's slogan, how long could it take to save 15% or more on car insurance?", ["15 minutes", "5 minutes", "30 minutes", "1 hour"], 0, "GEICO's long-running slogan promises a short call could save 15% or more on car insurance."),
  cmc("Advertising", "What does the pink Energizer Bunny famously 'keep doing' in the commercials?", ["It never needs charging", "It outruns every rival", "It plays the guitar", "It keeps going and going"], 3, "The Energizer Bunny beats a drum and 'keeps going and going' in the ads."),
  cmc("Advertising", "Which mascot represents Cheetos snacks?", ["Tony the Tiger", "The Trix Rabbit", "Chester Cheetah", "Snap, Crackle and Pop"], 2, "Chester Cheetah, the sunglasses-wearing cheetah, has represented Cheetos since 1986."),
  cmc("Advertising", "Which insurer used the slogan 'Get Met. It Pays.'?", ["Allstate", "MetLife", "State Farm", "Progressive"], 1, "MetLife used the 'Get Met. It Pays.' campaign, with the Snoopy characters as branding."),
  cmc("Advertising", "I'd walk a mile for which cigarette brand, according to the classic slogan?", ["Camel", "Marlboro", "Winston", "Lucky Strike"], 0, "'I'd walk a mile for a Camel' was one of the longest-running slogans in advertising, launched in 1921."),
  cmc("Advertising", "Which shaving brand was famous for series of rhyming roadside signs in the 1920s–60s?", ["Gillette", "Barbasol", "Old Spice", "Burma-Shave"], 3, "Burma-Shave's rhyming verse signs lined American highways from the 1920s to the 1960s."),
  cmc("Advertising", "In which cat food's ads do cats meow the brand's name as a song?", ["Friskies", "9 Lives", "Meow Mix", "Fancy Feast"], 2, "Cats 'sing' the brand's name to its jingle in the Meow Mix commercials."),
  cmc("Advertising", "What are the two joined yellow curves of the McDonald's logo called?", ["Big Yellow M", "Golden Arches", "Happy Arches", "Golden Gates"], 1, "The 'Golden Arches' name for McDonald's M comes from the arch design of its early restaurants."),
  cmc("Advertising", "Which pain reliever is advertised as 'Advanced Medicine for Pain'?", ["Advil", "Tylenol", "Bayer", "Aleve"], 0, "Advil (ibuprofen) has used the 'Advanced Medicine for Pain' tagline."),
  cmc("Advertising", "Which real-estate company's agents were famous for wearing gold jackets?", ["RE/MAX", "Coldwell Banker", "Keller Williams", "Century 21"], 3, "Century 21 agents' gold jackets became one of real estate's most recognisable looks."),
  cmc("Advertising", "Which soft drink was advertised for years as 'The Uncola'?", ["Sprite", "Mountain Dew", "7 Up", "Fanta"], 2, "7 Up positioned itself against colas as 'The Uncola' from 1967 into the 1990s."),
  cmc("Advertising", "Which athletic brand used the slogan 'I Am What I Am'?", ["Nike", "Reebok", "Adidas", "Puma"], 1, "Reebok launched 'I Am What I Am' in 2005 with athletes and musicians in the campaign."),
  cmc("Advertising", "'When banks compete, you win' is the slogan of which lending marketplace?", ["LendingTree", "Quicken Loans", "eLoan", "LoanDepot"], 0, "LendingTree's founding pitch was that multiple lenders compete for a borrower's business."),
  cmc("Advertising", "Which gum promised to 'Double your pleasure, double your fun'?", ["Juicy Fruit", "Bubble Yum", "Big Red", "Doublemint gum"], 3, "Wrigley's Doublemint used the Doublemint Twins and the 'double your pleasure' jingle from the 1950s."),
  cmc("Advertising", "Which burger chain's name is sung and then followed by a long 'YUMMM' in its ads?", ["Chili's", "Applebee's", "Red Robin", "TGI Fridays"], 2, "Red Robin's commercials trail off the brand's name into a drawn-out 'Yummm'."),
  cmc("Advertising", "Which deodorant's ads showed confident people answering its question by raising an arm?", ["Ban", "Sure", "Arrid", "Mitchum"], 1, "Sure's classic campaign asked viewers to 'raise your hand if you're Sure'."),
  cmc("Advertising", "Which airline promised 'Something Special in the Air'?", ["American Airlines", "Delta Air Lines", "Southwest Airlines", "Pan Am"], 0, "American used 'Something Special in the Air' as its tagline for many years."),
  cmc("Advertising", "Which mascot follows his nose to a fruit-flavoured cereal?", ["Tony the Tiger", "Dig 'Em Frog", "Sugar Bear", "Toucan Sam"], 3, "Toucan Sam has followed his nose to Froot Loops since 1963."),
  cmc("Advertising", "Which cigarette brand introduced a cowboy mascot in 1954 to make filter cigarettes seem rugged and masculine?", ["Camel", "Winston", "Marlboro", "Kool"], 2, "The Marlboro Man, introduced in 1954, turned Marlboro into the world's best-selling cigarette brand."),
  cmc("Advertising", "Which watch brand promised 'It takes a licking and keeps on ticking'?", ["Rolex", "Timex", "Seiko", "Casio"], 1, "Timex torture-test ads from the 1950s ended with 'It takes a licking and keeps on ticking'."),
  cmc("Advertising", "Which motel chain promises 'We'll leave the light on for you'?", ["Motel 6", "Holiday Inn", "Best Western", "Days Inn"], 0, "Motel 6 spokesman Tom Bodett has ended ads with 'We'll leave the light on for you' since 1986.")
);
NEWCAT.medical.push(
  cmc("Medical", "Roughly how many pints of blood does an average adult have?", ["About 3 pints", "About 10 pints", "About 20 pints", "About 40 pints"], 1, "An average adult has roughly 4.5–5.5 litres of blood — about 8 to 12 US pints."),
  cmc("Medical", "What is the medical term for high blood pressure?", ["Hypertension", "Hypotension", "Tachycardia", "Bradycardia"], 0, "Hypertension is chronically raised blood pressure; hypotension is abnormally low blood pressure."),
  cmc("Medical", "If spread flat, about how much area does an adult's skin cover?", ["About 20 square metres", "About 0.5 square metres", "About 7 square metres", "About 2 square metres"], 3, "Spread flat, an adult's skin covers roughly 2 square metres, making it the largest organ."),
  cmc("Medical", "What is the name of the flap of tissue that stops food from entering the windpipe when you swallow?", ["The uvula", "The tonsils", "The epiglottis", "The diaphragm"], 2, "The epiglottis folds over the trachea during swallowing so food goes down the oesophagus instead."),
  cmc("Medical", "About how many times does an average adult heart beat in one day?", ["About 10,000", "About 100,000", "About 1,000,000", "About 50,000"], 1, "At roughly 70 beats a minute, the heart beats around 100,000 times a day."),
  cmc("Medical", "A healthy white blood cell count is roughly how many cells per microlitre of blood (lower end of normal)?", ["About 4,500", "About 450", "About 45,000", "About 450,000"], 0, "Normal resting white-cell counts run about 4,500–11,000 per microlitre of blood."),
  cmc("Medical", "Which is the smallest bone in the human body?", ["Incus", "Malleus", "Cochlea", "Stapes"], 3, "The stapes (stirrup) in the middle ear is about 3 mm long, the smallest bone in the body."),
  cmc("Medical", "Which part of the brain acts as the body's thermostat, regulating temperature?", ["Cerebellum", "Medulla", "Hypothalamus", "Pituitary gland"], 2, "The hypothalamus regulates body temperature, hunger, and thirst, keeping conditions stable."),
  cmc("Medical", "Beriberi is caused by a deficiency of which nutrient?", ["Vitamin B1 (thiamine)", "Vitamin C", "Vitamin D", "Iron"], 0, "Beriberi results from a deficiency of thiamine (vitamin B1)."),
  cmc("Medical", "What are the three tiny bones of the middle ear collectively called?", ["The ossicles", "The cochlea", "The pinna", "The eardrum"], 0, "The ossicles — malleus, incus, and stapes — transmit sound vibrations to the inner ear."),
  cmc("Medical", "Which is the longest bone in the human body?", ["Tibia", "Humerus", "Radius", "Femur"], 3, "The femur (thighbone) is the longest and strongest bone in the body."),
  cmc("Medical", "Which childhood bone disease is caused by vitamin D deficiency?", ["Scurvy", "Pellagra", "Rickets", "Goitre"], 2, "Rickets is a softening of bones in children caused by vitamin D deficiency."),
  cmc("Medical", "Roughly what percentage of the adult human body is water?", ["About 30%", "About 60%", "About 90%", "About 45%"], 1, "Adults are roughly 60% water by weight, varying with age and body composition."),
  cmc("Medical", "How many pairs of ribs do most adults have?", ["25", "12", "32", "20"], 0, "Adults have 12 pairs of ribs — 24 individual ribs in most people."),
  cmc("Medical", "Which is the largest artery in the human body?", ["Pulmonary artery", "Vena cava", "Jugular vein", "Aorta"], 3, "The aorta is the body's largest artery, carrying oxygenated blood from the left ventricle."),
  cmc("Medical", "What is the main job of the small intestine?", ["Pumping blood", "Filtering urine", "Absorbing nutrients from food", "Producing insulin"], 2, "The small intestine's villi absorb nutrients from digested food into the bloodstream."),
  cmc("Medical", "Which muscle, relative to its size, is often cited as the strongest in the body?", ["The biceps", "The jaw muscle (masseter)", "The calf muscle", "The tongue"], 1, "The masseter can close the teeth with a force of up to about 70 kg on the molars."),
  cmc("Medical", "Laid end to end, about how long are an adult's blood vessels?", ["About 60,000 miles", "About 600 miles", "About 6,000 miles", "About 600,000 miles"], 0, "Laid end to end, an adult's arteries, veins, and capillaries would span roughly 60,000 miles."),
  cmc("Medical", "Which fluid lubricates the joints?", ["Plasma", "Lymph", "Cerebrospinal fluid", "Synovial fluid"], 3, "Synovial fluid lubricates joints such as the knee, reducing friction between cartilage surfaces."),
  cmc("Medical", "About how many breaths does an adult take in a day?", ["About 2,000", "About 200", "About 20,000", "About 200,000"], 2, "Adults breathe roughly 12–20 times a minute at rest, adding up to around 20,000 breaths a day."),
  cmc("Medical", "Anaemia is most commonly caused by a deficiency of which mineral?", ["Calcium", "Iron", "Zinc", "Copper"], 1, "Iron deficiency is the commonest cause of anaemia worldwide, reducing haemoglobin production.")
);
NEWCAT.popculture.push(
  cmc("Pop Culture", "Which singer headlined the Super Bowl 2014 halftime show with the Red Hot Chili Peppers as guests?", ["Ed Sheeran", "Bruno Mars", "Justin Timberlake", "Shawn Mendes"], 1, "Bruno Mars headlined the Super Bowl XLVIII halftime show in 2014 and returned as a guest in 2016."),
  cmc("Pop Culture", "Who released the album '25', featuring the single 'Hello'?", ["Adele", "Beyoncé", "Rihanna", "Taylor Swift"], 0, "Adele's '25' won Album of the Year at the 2017 Grammys; its single 'Hello' came out in 2015."),
  cmc("Pop Culture", "Who won the 2020 Grammy for Record of the Year with 'Bad Guy'?", ["Katy Perry", "Ariana Grande", "Billie Eilish", "Lady Gaga"], 2, "Billie Eilish won the Grammy for Record of the Year in 2020 with 'Bad Guy', aged 18."),
  cmc("Pop Culture", "Which music streaming service launched in Sweden in 2008 and became the world's largest?", ["Apple Music", "Tidal", "Spotify", "YouTube Music"], 2, "Spotify, launched in Sweden in 2008, became the world's largest music streaming service."),
  cmc("Pop Culture", "Which 2019 film became the highest-grossing movie of all time worldwide?", ["'Avatar'", "'Avengers: Endgame'", "'Titanic'", "'Star Wars: The Force Awakens'"], 1, "'Avengers: Endgame' (2019) overtook 'Avatar' as the highest-grossing film of all time at the worldwide box office."),
  cmc("Pop Culture", "In what year was Instagram launched?", ["2010", "2007", "2013", "2016"], 0, "Instagram launched in October 2010 and was bought by Facebook in 2012 for about $1 billion."),
  cmc("Pop Culture", "Which TV series won a record 59 Emmy Awards during its run?", ["Breaking Bad", "The Sopranos", "Friends", "Game of Thrones"], 3, "'Game of Thrones' (2011–2019), based on George R.R. Martin's novels, won a record 59 Emmy Awards."),
  cmc("Pop Culture", "Whose song 'Shape of You' was the first to pass 3 billion Spotify streams?", ["Drake", "Post Malone", "Ed Sheeran", "The Weeknd"], 2, "Ed Sheeran's 'Shape of You' (2017) was the first song to reach 3 billion streams on Spotify."),
  cmc("Pop Culture", "Which 2003 Dan Brown novel follows symbologist Robert Langdon to Paris and London?", ["The Da Vinci Code", "Harry Potter and the Philosopher's Stone", "The Hunger Games", "Twilight"], 0, "'The Da Vinci Code' by Dan Brown, published in 2003, is one of the best-selling novels ever."),
  cmc("Pop Culture", "Who is the best-selling female recording artist of all time?", ["Michael Jackson", "Madonna", "Elvis Presley", "The Beatles"], 0, "Madonna is the best-selling female recording artist of all time, certified by Guinness World Records."),
  cmc("Pop Culture", "South Korean pop music exported worldwide is known by what name?", ["J-pop", "C-pop", "Latin pop", "K-pop"], 3, "K-pop groups such as BTS and BLACKPINK lead South Korea's global pop-culture wave."),
  cmc("Pop Culture", "Which app popularised short vertical music and lip-sync videos in the late 2010s?", ["TikTok", "Snapchat", "Instagram", "Twitter"], 0, "TikTok, released internationally in 2017, popularised short vertical videos set to music and sounds."),
  cmc("Pop Culture", "Which sitcom about four New York friends was billed as 'a show about nothing'?", ["Friends", "Seinfeld", "Frasier", "Cheers"], 1, "'Seinfeld' (1989–1998), created by Larry David and Jerry Seinfeld, famously styled itself 'a show about nothing'."),
  cmc("Pop Culture", "Who had a first pop No. 1 with 'Heartbreak Hotel' in 1956?", ["Elvis Presley", "Johnny Cash", "Carl Perkins", "Jerry Lee Lewis"], 0, "Elvis Presley's 'Heartbreak Hotel' (1956) was his first number-one hit on the Billboard pop chart."),
  cmc("Pop Culture", "Which rock star created the alter ego Ziggy Stardust?", ["David Bowie", "George Michael", "Michael Jackson", "Prince"], 0, "David Bowie created the flamboyant alter ego Ziggy Stardust for his 1972 album."),
  cmc("Pop Culture", "Which sitcom follows the dysfunctional Bluth family and starred Jason Bateman?", ["The Office", "Parks and Recreation", "Arrested Development", "30 Rock"], 2, "'Arrested Development' (2003–2019) follows the Bluth family, with Jason Bateman as Michael Bluth."),
  cmc("Pop Culture", "What is the best-selling album of all time?", ["'Back in Black' — AC/DC", "'Thriller' — Michael Jackson", "'The Dark Side of the Moon' — Pink Floyd", "'Rumours' — Fleetwood Mac"], 1, "'Thriller' (1982) is the best-selling album of all time, with estimated sales above 70 million copies."),
  cmc("Pop Culture", "Which group won Eurovision in 1974 with 'Waterloo'?", ["Queen", "ABBA", "The Bee Gees", "Fleetwood Mac"], 1, "ABBA won the 1974 Eurovision Song Contest with 'Waterloo', launching their international career."),
  cmc("Pop Culture", "Which Spanish-language hit by Luis Fonsi and Daddy Yankee conquered global charts in 2017?", ["'Shape of You'", "'Despacito'", "'Uptown Funk'", "'Old Town Road'"], 1, "'Despacito' by Luis Fonsi and Daddy Yankee (2017), boosted by a Justin Bieber remix, topped charts worldwide."),
  cmc("Pop Culture", "Which singer is famous for a five-octave vocal range and the hit 'Hero'?", ["Mariah Carey", "Celine Dion", "Whitney Houston", "Barbra Streisand"], 0, "Mariah Carey's five-octave range and hits like 'Hero' made her one of pop's defining voices.")
);
NEWCAT.law.push(
  cmc("Law", "In property law, 'abutters' are what?", ["Schools named in a will", "Property owners within a set distance of a new road", "Churches in the county", "Volunteers at the courthouse"], 1, "Abutters are the owners of land adjoining a property or public work being decided on."),
  cmc("Law", "What is a 'subpoena'?", ["A court order requiring a person to appear or produce evidence", "A verdict of not guilty", "A plea bargain offer", "A judge's written opinion"], 0, "A subpoena compels testimony or the production of documents, under penalty for disobedience."),
  cmc("Law", "What does 'negligence' mean in tort law?", ["Breaking a contract on purpose", "Testifying falsely", "Trespassing on land", "Failure to exercise reasonable care, causing harm"], 3, "Negligence is the failure to use reasonable care that a prudent person would use, resulting in harm to another."),
  cmc("Law", "An 'oral contract' is what?", ["A contract signed by a judge", "A contract between two governments", "A contract made with spoken words instead of writing", "A contract that cannot be enforced"], 2, "An oral contract is formed by spoken agreement rather than a written document; some types must still be written to be enforceable."),
  cmc("Law", "What is an affidavit?", ["A type of search warrant", "A voluntary written statement given under oath", "A jury summons", "A pardon issued by a governor"], 1, "An affidavit is a written statement confirmed by oath, used as evidence in court."),
  cmc("Law", "Embezzlement is best described as what?", ["Theft of property by someone lawfully in possession of it", "Breaking into a building at night", "Robbing a person by force", "Counterfeiting currency"], 0, "Embezzlement is fraudulently converting property entrusted to you to your own use."),
  cmc("Law", "The Bill of Rights was proposed in response to demands from state ratifying conventions. Which state completed ratification on December 15, 1791?", ["New Jersey", "Maryland", "Vermont", "Virginia"], 3, "The Bill of Rights was ratified on December 15, 1791, when Virginia became the eleventh state to approve it."),
  cmc("Law", "Which of these is an enumerated power of Congress under Article I?", ["The power to license drivers", "The power to grant pardons", "The power to collect taxes", "The power to appoint ambassadors"], 2, "Article I, Section 8 gives Congress enumerated powers, including laying taxes, coining money, and declaring war."),
  cmc("Law", "A serious crime punishable by more than a year in prison is called a what?", ["Misdemeanour", "Felony", "Infraction", "Ordinance violation"], 1, "A felony is a serious crime typically punishable by more than one year of imprisonment."),
  cmc("Law", "The writ of 'habeas corpus' protects what?", ["The right of an accused person to be brought before a court", "A law punishing an act after it happened", "A tax on imported goods", "The power to seize private land"], 0, "Habeas corpus requires that a detained person be brought before a judge to test the legality of the detention."),
  cmc("Law", "An 'ex post facto' law is one that does what?", ["A law passed without a vote", "A law applying only to one person", "A law that expires in a year", "A law that makes an act illegal after it was committed"], 3, "The Constitution forbids Congress and the states from passing ex post facto laws."),
  cmc("Law", "'Securities fraud' refers to what?", ["Refusing to pay a speeding ticket", "Parking in a disabled space", "Selling securities using false or misleading statements", "Failing to file a tax return"], 2, "Securities fraud involves deceptive practices in connection with stocks or other securities."),
  cmc("Law", "A 'bill of attainder' is a law that does what?", ["Sets the federal budget", "Punishes a named person or group without a trial", "Creates a new court", "Declares war"], 1, "Bills of attainder — legislative trials — are forbidden by the US Constitution."),
  cmc("Law", "What is a 'bench trial'?", ["A trial by judges without a jury", "A trial held in a bank building", "A practice session for lawyers", "A trial that ends in a hung jury"], 0, "In a bench trial, the judge decides questions of fact and law instead of a jury."),
  cmc("Law", "In legal terms, 'standing' to sue requires the plaintiff to be what?", ["A citizen over the age of 21", "A member of a grand jury", "A court-appointed lawyer", "A person harmed in a way the law can remedy"], 3, "Standing requires a plaintiff to show a concrete injury that a court decision can address."),
  cmc("Law", "'Eminent domain' is what power?", ["Seizing goods at the border", "A landlord reclaiming a flat", "Government taking private property for public use with fair compensation", "Police confiscating evidence"], 2, "Eminent domain is the power to take private property for public use, with just compensation under the Fifth Amendment."),
  cmc("Law", "What distinguishes 'robbery' from other theft crimes?", ["Copying a document without permission", "Theft by taking property through threats against a person", "Entering land without permission", "Selling a defective product"], 1, "Robbery is taking property from a person by force or threat of force; taking from an empty building is burglary or theft instead.")
);
NEWCAT.chemistry.push(
  cmc("Chemistry", "What is the chemical symbol for lead?", ["Fe", "Pb", "Ag", "Au"], 1, "Pb comes from 'plumbum', the Latin name for lead."),
  cmc("Chemistry", "What is the chemical symbol for tungsten?", ["W", "Tg", "Tu", "Tn"], 0, "Tungsten's symbol W comes from its German name, Wolfram."),
  cmc("Chemistry", "What is the chemical symbol for radon?", ["Ra", "Rd", "Rf", "Rn"], 3, "Radon (Rn) is a radioactive noble gas that can accumulate in basements from natural rock."),
  cmc("Chemistry", "What is the chemical symbol for mercury?", ["Mg", "Mn", "Hg", "Mo"], 2, "Mercury's symbol Hg comes from 'hydrargyrum', Greek for liquid silver; it is the only metal liquid at room temperature."),
  cmc("Chemistry", "When an acid reacts with a base in neutralisation, what is formed besides water?", ["A metal", "A salt", "An acid rain cloud", "Oxygen"], 1, "Acid + base → salt + water; the salt formed depends on the acid and base used."),
  cmc("Chemistry", "Which acid is found in the human stomach?", ["Hydrochloric acid", "Sulfuric acid", "Citric acid", "Nitric acid"], 0, "Gastric juice contains hydrochloric acid, which kills microbes and helps digestion."),
  cmc("Chemistry", "What is dry ice?", ["Frozen nitrogen", "Compressed oxygen", "Ice with salt in it", "Solid carbon dioxide"], 3, "Dry ice is frozen carbon dioxide, which turns straight to gas (sublimes) at −78.5 °C."),
  cmc("Chemistry", "On the pH scale, what number is neutral?", ["pH 0", "pH 14", "pH 7", "pH 1"], 2, "On the pH scale, 7 is neutral; below 7 is acidic and above 7 is alkaline."),
  cmc("Chemistry", "In chemistry, what is a catalyst?", ["A substance that stops all reactions", "A substance that speeds up a reaction without being used up", "A liquid used to dissolve metals", "A gas released by burning"], 1, "A catalyst increases the rate of a chemical reaction while remaining chemically unchanged at the end."),
  cmc("Chemistry", "What does an element's atomic number count?", ["The number of protons in its nucleus", "The number of neutrons in its nucleus", "Its total mass", "The number of electrons it has lost"], 0, "The atomic number, equal to the proton count, defines which element an atom is."),
  cmc("Chemistry", "Atoms of the same element always have the same number of what?", ["Neutrons", "Electrons in total", "Atomic mass units", "Protons"], 3, "The proton count (atomic number) defines the element; neutron counts can vary."),
  cmc("Chemistry", "Sodium hydroxide is commonly known by what name?", ["Baking soda", "Washing soda", "Caustic soda", "Epsom salt"], 2, "Sodium hydroxide (NaOH) is called caustic soda or lye, used in soap and drain cleaners."),
  cmc("Chemistry", "A covalent bond is what?", ["A bond between a metal and a gas", "A chemical bond formed by sharing electrons", "A force that holds crystals in a line", "A temporary magnetic attraction"], 1, "In a covalent bond, atoms share pairs of electrons, as in a water molecule."),
  cmc("Chemistry", "Which gas do plants absorb from the air for photosynthesis?", ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"], 0, "Plants use photosynthesis to convert carbon dioxide and water into glucose and oxygen."),
  cmc("Chemistry", "Which metal is the best conductor of electricity?", ["Copper", "Gold", "Aluminium", "Silver"], 3, "Silver conducts electricity better than any other metal; copper is used more widely because it is cheaper."),
  cmc("Chemistry", "The 'boiling point' of a liquid is what?", ["The temperature at which a solid melts", "The point where a gas catches fire", "The temperature at which a liquid becomes a gas", "The coldest possible temperature"], 2, "The boiling point is where a liquid's vapour pressure equals the surrounding pressure and it turns to gas."),
  cmc("Chemistry", "What is the chemical formula of hydrogen peroxide?", ["H2O", "H2O2", "HO2", "H3O"], 1, "Hydrogen peroxide is H2O2 — water with an extra oxygen atom.")
);
NEWCAT.science.push(
  cmc("Science", "Which planet is the hottest in our solar system?", ["Mercury", "Venus", "Mars", "Jupiter"], 1, "Venus is wrapped in thick carbon-dioxide clouds with a runaway greenhouse effect, making it hotter than Mercury."),
  cmc("Science", "Which planet has the tallest volcano in the solar system, Olympus Mons?", ["Mars", "Venus", "Mercury", "Neptune"], 0, "Mars hosts Olympus Mons, about two and a half times the height of Mount Everest."),
  cmc("Science", "About how far is Earth from the Sun?", ["About 15 million km", "About 1.5 billion km", "About 384,000 km", "About 150 million km"], 3, "One astronomical unit — the mean Earth–Sun distance — is about 150 million kilometres."),
  cmc("Science", "What is a constellation?", ["A cluster of galaxies", "A type of nebula", "A group of stars forming a recognisable pattern", "A belt of asteroids"], 2, "There are 88 officially recognised constellations covering the whole sky."),
  cmc("Science", "What do we call a small icy body that grows a glowing tail as it nears the Sun?", ["An asteroid", "A comet", "A meteoroid", "A dwarf planet"], 1, "A comet develops a glowing coma and tail of gas and dust as sunlight heats it near the Sun."),
  cmc("Science", "What is photosynthesis?", ["The process by which plants make food using sunlight", "How animals breathe underwater", "The breakdown of rocks by wind", "How the Moon causes tides"], 0, "Photosynthesis converts carbon dioxide and water into glucose and oxygen using sunlight energy."),
  cmc("Science", "What is the main job of a cell membrane?", ["To produce the cell's energy", "To store the cell's DNA", "To build proteins", "To act as a barrier and control what enters and leaves the cell"], 3, "The cell membrane is selectively permeable, controlling the movement of substances in and out."),
  cmc("Science", "What does the water cycle describe?", ["Rocks melt and rise as magma", "Plants absorb water and release seeds", "Water evaporates, condenses into clouds, and falls as precipitation", "Ice at the poles melts every summer"], 2, "The water cycle circulates water between Earth's surface and atmosphere by evaporation, condensation, and precipitation."),
  cmc("Science", "Which statement about sound is true?", ["Sound travels faster than light", "Sound travels slowest through a vacuum — it cannot travel at all", "Sound needs no medium", "Sound travels at the same speed everywhere"], 1, "Sound is a vibration that needs a material medium; in a vacuum there is nothing to vibrate."),
  cmc("Science", "What causes most earthquakes?", ["The release of energy as seismic waves from moving rock", "The Moon pulling on the oceans", "Wind eroding mountains", "Volcanoes cooling the crust"], 0, "Most earthquakes happen when stress along a fault overcomes friction and rock suddenly slips."),
  cmc("Science", "A year with an extra day, February 29, is called what?", ["A solstice", "An eclipse", "A meteor shower", "A leap year"], 3, "A leap year adds February 29 to keep the calendar in step with Earth's 365.25-day orbit."),
  cmc("Science", "What is the role of DNA in a cell?", ["It produces energy from food", "It digests waste", "It carries the genetic instructions for the cell", "It holds the cell's shape only"], 2, "DNA stores the instructions used to build and run an organism, passed from parent to offspring."),
  cmc("Science", "What do bees collect from flowers to make honey?", ["Pollen dust", "Nectar", "Sap", "Dew"], 1, "Bees gather nectar and process it with enzymes, fanning it into honey in the hive."),
  cmc("Science", "Which gas makes up most of Earth's atmosphere?", ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], 0, "Air is about 78% nitrogen, 21% oxygen, and roughly 1% argon and other gases."),
  cmc("Science", "In physics, what is inertia?", ["The force that pulls objects to Earth", "The energy of a moving object", "Friction between two surfaces", "The tendency of an object to resist changes to its motion"], 3, "Inertia, described by Newton's first law, keeps objects at rest or moving steadily unless a force acts.")
);
NEWBANKS.sports.push(
  cmc("Sports", "Which country won the 1995 Rugby World Cup, the first one it was allowed to enter?", ["England", "South Africa", "Australia", "New Zealand"], 1, "South Africa won the first Rugby World Cup they entered after apartheid, at home in 1995; the tournament itself began in 1987 in New Zealand and Australia."),
  cmc("Sports", "Usain Bolt set the 100 metres world record of 9.58 seconds in which city?", ["Berlin", "London", "Beijing", "Rio de Janeiro"], 0, "Bolt ran 9.58 seconds at the 2009 World Championships in Berlin."),
  cmc("Sports", "The five Olympic rings are blue, yellow, black, green and which other colour?", ["White", "Orange", "Purple", "Red"], 3, "The Olympic rings are blue, yellow, black, green, and red on a white field."),
  cmc("Sports", "Which tennis Grand Slam is held at Flushing Meadows in New York?", ["The Australian Open", "Wimbledon", "The US Open", "The French Open"], 2, "The US Open has been played at Flushing Meadows, New York, since 1978."),
  cmc("Sports", "The FIFA World Cup was first held in which year?", ["1926", "1930", "1934", "1950"], 1, "Uruguay hosted and won the first World Cup in 1930."),
  cmc("Sports", "Which country won the first FIFA World Cup in 1930?", ["Uruguay", "Brazil", "Argentina", "Italy"], 0, "Uruguay beat Argentina 4–2 in the first World Cup final in Montevideo in 1930."),
  cmc("Sports", "How is a regulation ice hockey game divided?", ["Two halves of 30 minutes", "Four quarters of 15 minutes", "Two halves of 45 minutes", "Three periods of 20 minutes"], 3, "An NHL game is three 20-minute periods, with overtime if tied."),
  cmc("Sports", "What is a perfect score in ten-pin bowling?", ["200", "150", "A perfect score of 300", "250"], 2, "Twelve strikes in a row score the maximum 300 in ten-pin bowling."),
  cmc("Sports", "In basketball, a shot made from beyond the three-point arc is worth how many points?", ["Two", "Three", "Four", "One"], 1, "Field goals beyond the arc count three points; inside it, two."),
  cmc("Sports", "In which sport does scoring an 'ippon' win the contest at once?", ["Judo", "Boxing", "Fencing", "Wrestling"], 0, "In judo, an ippon is a full-point throw or hold that ends the match immediately."),
  cmc("Sports", "Under current rules, a game of table tennis is won at how many points?", ["15 points", "21 points", "25 points", "11 points"], 3, "Modern table tennis games are played to 11 points, win by 2; the old 21-point format ended in 2001."),
  cmc("Sports", "In rugby union, which position feeds the ball into the scrum?", ["The fly-half", "The full-back", "The scrum-half", "The hooker"], 2, "The scrum-half feeds the ball into the scrum and usually passes it out to the backs."),
  cmc("Sports", "Which gymnastics apparatus is a beam only 10 centimetres wide, raised about 1.2 metres?", ["The vaulting table", "The balance beam", "The still rings", "The parallel bars"], 1, "The balance beam is 5 m long, 10 cm wide, and used in women's artistic gymnastics."),
  cmc("Sports", "In which sport do players hit a shuttlecock?", ["Volleyball", "Badminton", "Handball", "Squash"], 1, "A shuttlecock (or shuttle) is the feathered projectile hit in badminton."),
  cmc("Sports", "In ten-pin bowling, what is the line a bowler must not cross when delivering the ball?", ["The service line", "The base line", "The scratch line", "The foul line"], 3, "Crossing the foul line in bowling makes the delivery a foul, scoring zero for that ball.")
);
NEWBANKS.hawaii=[
  cmc("Hawaii", "Honolulu is on which Hawaiian island?", ["Maui", "Oʻahu", "Kauaʻi", "Molokaʻi"], 1, "Honolulu, the state capital, is on the island of Oʻahu, the most populous island."),
  cmc("Hawaii", "Which is the largest island in the Hawaiian chain?", ["Hawaiʻi Island (the Big Island)", "Oʻahu", "Maui", "Kauaʻi"], 0, "Hawaiʻi Island, nicknamed the Big Island, is larger than all the other Hawaiian islands combined."),
  cmc("Hawaii", "Which island is nicknamed the 'Garden Isle'?", ["Oʻahu", "Maui", "Hawaiʻi Island", "Kauaʻi"], 3, "Kauaʻi, the oldest of the main islands, is called the Garden Isle for its lush greenery."),
  cmc("Hawaii", "Which island is nicknamed the 'Valley Isle'?", ["Lānaʻi", "Molokaʻi", "Maui", "Niʻihau"], 2, "Maui, formed by two shield volcanoes joined by an isthmus, is nicknamed the Valley Isle."),
  cmc("Hawaii", "Which island is nicknamed the 'Friendly Isle'?", ["Lānaʻi", "Molokaʻi", "Kahoʻolawe", "Niʻihau"], 1, "Molokaʻi is nicknamed the Friendly Isle."),
  cmc("Hawaii", "Which island is nicknamed the 'Pineapple Isle'?", ["Lānaʻi", "Molokaʻi", "Kahoʻolawe", "Oʻahu"], 0, "Lānaʻi was once the world's largest pineapple plantation and is called the Pineapple Isle."),
  cmc("Hawaii", "Which privately owned island is nicknamed the 'Forbidden Isle'?", ["Kauaʻi", "Molokaʻi", "Lānaʻi", "Niʻihau"], 3, "Niʻihau is privately owned and largely closed to visitors, earning it the name 'Forbidden Isle'."),
  cmc("Hawaii", "Which is the smallest of the eight main Hawaiian islands, with no permanent residents?", ["Niʻihau", "Lānaʻi", "Kahoʻolawe", "Molokaʻi"], 2, "Kahoʻolawe, the smallest main island, is uninhabited and was used as a military training ground."),
  cmc("Hawaii", "How many main islands make up the Hawaiian Islands?", ["Six", "Eight", "Twelve", "Four"], 1, "Eight main islands are usually counted: Hawaiʻi, Maui, Oʻahu, Kauaʻi, Molokaʻi, Lānaʻi, Niʻihau, and Kahoʻolawe."),
  cmc("Hawaii", "What is the famous volcanic crater that overlooks Waikīkī?", ["Diamond Head", "Punchbowl", "Koko Head", "Mount Tantalus"], 0, "Diamond Head (Lēʻahi) is a volcanic tuff cone crater on Oʻahu, named by sailors who mistook its calcite crystals for diamonds."),
  cmc("Hawaii", "Which is the longest river in Hawaii?", ["The Wailuku River", "The Hanapēpē River", "The Wailua River", "The Waimea River"], 0, "The Wailuku River on Hawaiʻi Island is Hawaii's longest river, at about 28 miles."),
  cmc("Hawaii", "Which Hawaiian mountain is one of the wettest places on Earth?", ["Haleakalā", "Mauna Kea", "Waiʻaleʻale", "Puu Kukui"], 2, "Mount Waiʻaleʻale on Kauaʻi averages over 400 inches of rain a year, among the wettest spots on Earth."),
  cmc("Hawaii", "Which Hawaiian volcano is the tallest mountain on Earth measured from its base on the ocean floor?", ["Mauna Loa", "Mauna Kea", "Haleakalā", "Kīlauea"], 1, "Measured from its base on the seafloor, Mauna Kea is over 33,000 feet tall — taller than Everest from base to peak."),
  cmc("Hawaii", "Which is the largest active volcano on Earth by volume?", ["Mauna Loa", "Kīlauea", "Hualālai", "Haleakalā"], 0, "Mauna Loa is the largest shield volcano on Earth by volume."),
  cmc("Hawaii", "Which volcano erupted almost continuously from 1983 to 2018?", ["Mauna Loa", "Haleakalā", "Mauna Kea", "Kīlauea"], 3, "Kīlauea on Hawaiʻi Island erupted almost continuously from 1983 to 2018."),
  cmc("Hawaii", "Haleakalā, Maui's great volcano, is also known by what English name?", ["West Maui Mountain", "The Valley Volcano", "East Maui Volcano", "The Sunrise Shield"], 2, "Haleakalā means 'House of the Sun' and forms the eastern bulk of Maui."),
  cmc("Hawaii", "Which Oʻahu interstate highway passes through the Tetsuo Harano Tunnels in the Koʻolau mountains?", ["Interstate H-2", "Interstate H-1", "Interstate H-3", "Interstate H-201"], 2, "Interstate H-3 runs from Hālawa through the Koʻolau range to Marine Corps Base Hawaii at Kāneʻohe."),
  cmc("Hawaii", "What is the name of Molokaʻi's isolated peninsula settlement for Hansen's disease patients?", ["Kalaupapa", "Kaunakakai", "Hāna", "Lahaina"], 0, "Kalaupapa peninsula on Molokaʻi was a settlement for people exiled with Hansen's disease (leprosy) from 1866."),
  cmc("Hawaii", "What is the largest town on Hawaiʻi Island?", ["Hilo", "Kailua-Kona", "Waimea", "Kapaʻa"], 0, "Hilo is the county seat of Hawaiʻi County and the largest town on Hawaiʻi Island."),
  cmc("Hawaii", "Who united the Hawaiian Islands into one kingdom by 1810?", ["Kalākaua", "Liliʻuokalani", "Kamehameha I", "Kamehameha III"], 2, "Kamehameha I united the Hawaiian islands by 1810, founding the Kingdom of Hawaii."),
  cmc("Hawaii", "By what English epithet is Kamehameha I best known?", ["Kalākaua", "Kamehameha the Great", "Kaʻahumanu", "Lunalilo"], 1, "Kamehameha I is remembered as Kamehameha the Great."),
  cmc("Hawaii", "At which 1795 battle did Kamehameha conquer Oʻahu?", ["The Battle of Nuʻuanu", "The Battle of Kepaniwai", "The Battle of Mokuʻōhai", "The Battle of ʻŌlaʻa"], 0, "In 1795 Kamehameha's forces drove Oʻahu's defenders over the Nuʻuanu Pali cliff, completing his conquest of Oʻahu."),
  cmc("Hawaii", "Who was Kamehameha I's favourite wife and later regent (kuhina nui) of the kingdom?", ["Keōpūolani", "Kalākaua", "Kīnaʻu", "Kaʻahumanu"], 3, "Kaʻahumanu, Kamehameha's favourite wife, served as kuhina nui (regent) and co-ruler after his death."),
  cmc("Hawaii", "Which king's motto 'Ua mau ke ea o ka ʻāina i ka pono' became Hawaii's state motto?", ["Kamehameha I", "Kalākaua", "Kamehameha III", "Liliʻuokalani"], 2, "Kamehameha III's 1843 restoration after a British seizure inspired the state motto and Sovereignty Restoration Day."),
  cmc("Hawaii", "In what year was Hawaiian sovereignty restored after the brief British seizure known as the Paulet affair?", ["1887", "1843", "1893", "1778"], 1, "On July 31, 1843, Britain formally restored the kingdom's sovereignty after the Paulet affair."),
  cmc("Hawaii", "Which king was known as the 'Merrie Monarch'?", ["Kalākaua", "Liliʻuokalani", "Kamehameha IV", "Lunalilo"], 0, "King Kalākaua, elected in 1874, built ʻIolani Palace and revived Hawaiian culture, earning the title 'Merrie Monarch'."),
  cmc("Hawaii", "Which famous hula festival honours King Kalākaua?", ["Aloha Festivals", "King Kamehameha Day", "Prince Lot Hula Festival", "Merrie Monarch Festival"], 3, "The Merrie Monarch Festival in Hilo honours King Kalākaua, patron of hula and Hawaiian arts."),
  cmc("Hawaii", "Who was the last monarch of the Kingdom of Hawaii?", ["Kalākaua", "Kamehameha V", "Liliʻuokalani", "William Charles Lunalilo"], 2, "Queen Liliʻuokalani was overthrown in 1893 and was the kingdom's last reigning monarch."),
  cmc("Hawaii", "In what year was the Hawaiian monarchy overthrown?", ["1887", "1893", "1898", "1843"], 1, "The monarchy was overthrown on January 17, 1893, by a committee backed by American businessmen."),
  cmc("Hawaii", "Which famous song did Queen Liliʻuokalani compose?", ["ʻAloha ʻOeʻ", "Hawaiʻi Ponoʻī", "Kaulana Nā Pua", "Mele Kalikimaka"], 0, "Liliʻuokalani composed 'Aloha ʻOe' (Farewell to Thee) in 1878; it became Hawaii's best-known song."),
  cmc("Hawaii", "Which European explorer reached Hawaii in 1778 and was killed there in 1779?", ["George Vancouver", "Abel Tasman", "Ferdinand Magellan", "James Cook"], 3, "Captain James Cook arrived in 1778 and was killed at Kealakekua Bay in 1779."),
  cmc("Hawaii", "At which bay was Captain Cook killed in 1779?", ["Hilo Bay", "Kāneʻohe Bay", "Kealakekua Bay", "Pearl Harbor"], 2, "Cook was killed at Kealakekua Bay on Hawaiʻi Island in February 1779."),
  cmc("Hawaii", "By what 1898 measure did the United States annex Hawaii?", ["Bayonet Constitution", "Newlands Resolution", "Organic Act", "Statehood Act"], 1, "The US annexed Hawaii in 1898 by the Newlands Resolution, a joint resolution of Congress."),
  cmc("Hawaii", "In what year did Hawaii become a US territory?", ["1898", "1893", "1900", "1959"], 0, "Hawaii became a US territory in 1900 after annexation in 1898."),
  cmc("Hawaii", "In what year did Hawaii become a US state?", ["1950", "1960", "1941", "1959"], 3, "Hawaii and Alaska were admitted in 1959, Hawaii on August 21 as the 50th state."),
  cmc("Hawaii", "On what date did Hawaii officially join the Union?", ["March 18, 1959", "July 4, 1959", "August 21, 1959", "January 3, 1959"], 2, "President Eisenhower proclaimed Hawaii's statehood on August 21, 1959."),
  cmc("Hawaii", "Hawaii was which numbered state to join the Union?", ["Forty-ninth", "Fiftieth", "Forty-eighth", "Fifty-first"], 1, "Alaska became the 49th state in January 1959 and Hawaii the 50th that August."),
  cmc("Hawaii", "On what date was Pearl Harbor attacked?", ["December 7, 1941", "December 8, 1941", "November 11, 1941", "September 2, 1945"], 0, "The attack on Pearl Harbor on December 7, 1941, brought the United States into World War II."),
  cmc("Hawaii", "Which battleship's sunken hull is commemorated by the memorial at Pearl Harbor?", ["USS Missouri", "USS Oklahoma", "USS Utah", "USS Arizona"], 3, "The USS Arizona Memorial straddles the sunken battleship where 1,177 crewmen died."),
  cmc("Hawaii", "Aboard which battleship, now a museum at Pearl Harbor, did Japan surrender in 1945?", ["USS Arizona", "USS Enterprise", "USS Missouri", "USS Iowa"], 2, "Japan formally surrendered aboard the USS Missouri in Tokyo Bay on September 2, 1945."),
  cmc("Hawaii", "What is the name of the royal palace in downtown Honolulu, the only one of its kind in the United States?", ["Washington Place", "ʻIolani Palace", "Huliheʻe Palace", "Queen Emma Summer Palace"], 1, "ʻIolani Palace in Honolulu, built by Kalākaua in 1882, is the only royal palace on US soil."),
  cmc("Hawaii", "Which royal couple founded The Queen's Hospital in Honolulu in 1859?", ["Kamehameha IV and Queen Emma", "Kalākaua", "Kamehameha I", "Liliʻuokalani"], 0, "Kamehameha IV and Queen Emma founded the hospital in 1859, now The Queen's Medical Center."),
  cmc("Hawaii", "Who was the first elected king of Hawaii, chosen in 1873?", ["Kamehameha V", "Kalākaua", "Kamehameha IV", "William Charles Lunalilo"], 3, "Lunalilo, elected king in 1873, was the first Hawaiian monarch chosen by popular vote of the legislature after an election campaign."),
  cmc("Hawaii", "Who was the last king of the Kamehameha dynasty, dying in 1872?", ["Kamehameha IV", "Lunalilo", "Kamehameha V", "Kamehameha II"], 2, "Kamehameha V, last of the Kamehameha line, died in 1872 without naming an heir, leading to Lunalilo's election."),
  cmc("Hawaii", "Under which king was the kapu system abolished in 1819?", ["Kamehameha I", "Kamehameha II", "Kamehameha III", "Kaʻahumanu alone"], 1, "In 1819, months after Kamehameha I's death, Kamehameha II and Kaʻahumanu ended the kapu system by eating with women."),
  cmc("Hawaii", "In what year did the first American missionaries arrive in Hawaii?", ["1820", "1778", "1840", "1893"], 0, "The first American Protestant missionaries arrived from New England in 1820."),
  cmc("Hawaii", "Who led the first company of American missionaries to Hawaii in 1820?", ["Asa Thurston", "William Ellis", "Lorrin Thurston", "Hiram Bingham"], 3, "Hiram Bingham led the first missionary company to Hawaii in 1820 and helped create the written Hawaiian alphabet."),
  cmc("Hawaii", "What was the 1848 land division that introduced private property in Hawaii called?", ["The Reciprocity Treaty", "The Bayonet Constitution", "The Great Māhele", "The Kuleana Act"], 2, "The 1848 Great Māhele divided land among king, chiefs, and government, introducing private land ownership."),
  cmc("Hawaii", "What was the 1887 constitution forced on King Kalākaua nicknamed?", ["The Constitution of 1840", "The Bayonet Constitution", "The Organic Act", "The Māhele"], 1, "Kalākaua was forced to sign the 1887 'Bayonet Constitution', which stripped much of the monarchy's power."),
  cmc("Hawaii", "Which princess founded the Kamehameha Schools through her will?", ["Bernice Pauahi Bishop", "Queen Emma", "Kaʻahumanu", "Pele"], 0, "Princess Bernice Pauahi Bishop, great-granddaughter of Kamehameha I, founded the Kamehameha Schools with her estate."),
  cmc("Hawaii", "The estate of Bernice Pauahi Bishop funds which schools?", ["Punahou School", "Mid-Pacific Institute", "Iolani School", "Kamehameha Schools"], 3, "Bernice Pauahi Bishop's estate funds the Kamehameha Schools for Native Hawaiian children."),
  cmc("Hawaii", "Which Hawaiian Olympic swimmer popularised modern surfing around the world?", ["Eddie Aikau", "Israel Kamakawiwoʻole", "Duke Kahanamoku", "Andy Irons"], 2, "Duke Paoa Kahanamoku, a Native Hawaiian Olympic swimmer, popularised surfing worldwide in the early 1900s."),
  cmc("Hawaii", "Duke Kahanamoku is called the 'father of modern' what?", ["Swimming", "Surfing", "Outrigger canoe paddling", "Beach volleyball"], 1, "Duke Kahanamoku won Olympic swimming golds and spread surfing through exhibitions abroad."),
  cmc("Hawaii", "What is the traditional Hawaiian dance that tells stories with movement?", ["Hula", "Mele", "Oli", "Lei-making"], 0, "Hula is the traditional Hawaiian dance that tells stories through movement and chant."),
  cmc("Hawaii", "What is a garland of flowers worn around the neck called in Hawaiian?", ["A haku", "A kupeʻe", "A pāʻū", "A lei"], 3, "A lei is a garland of flowers, leaves, or shells given as a symbol of aloha."),
  cmc("Hawaii", "Which small four-stringed instrument, introduced by Portuguese immigrants, became an icon of Hawaii?", ["Slack-key guitar", "Steel guitar", "Ukulele", "Pahu drum"], 2, "The ukulele, adapted from Portuguese instruments brought in 1879, became Hawaii's iconic instrument."),
  cmc("Hawaii", "Who brought the instrument that became the ukulele to Hawaii in 1879?", ["Spanish missionaries", "Portuguese immigrants", "American sailors", "Japanese plantation workers"], 1, "Portuguese immigrants from Madeira brought the braguinha in 1879, from which the ukulele developed."),
  cmc("Hawaii", "What Hawaiian word means both hello and goodbye, and also love?", ["Aloha", "Mahalo", "ʻOhana", "Kai"], 0, "'Aloha' means love, hello, and goodbye."),
  cmc("Hawaii", "What does the Hawaiian word 'mahalo' mean?", ["Aloha", "Kōkua", "Pono", "Mahalo"], 3, "'Mahalo' is the Hawaiian word for thank you."),
  cmc("Hawaii", "What does the Hawaiian word 'ʻohana' mean?", ["Ocean", "Mountain", "Family", "Friend"], 2, "ʻOhana means family, including extended and chosen family."),
  cmc("Hawaii", "What does the Hawaiian word 'kai' mean?", ["Mountain", "Ocean or sea", "Rain", "Wind"], 1, "'Kai' means the sea or ocean in Hawaiian."),
  cmc("Hawaii", "What does the Hawaiian word 'mauna' mean?", ["Mountain", "Valley", "River", "Beach"], 0, "'Mauna' means mountain, as in Mauna Kea and Mauna Loa."),
  cmc("Hawaii", "What does the Hawaiian word 'pono' mean?", ["Thank you", "Tomorrow", "Wind", "Right, good, or proper"], 3, "'Pono' means rightness or righteousness — it appears in the state motto."),
  cmc("Hawaii", "What does the Hawaiian word 'kōkua' mean?", ["Rain", "Food", "Help or assistance", "Song"], 2, "'Kōkua' means help or cooperation."),
  cmc("Hawaii", "What does the Hawaiian word 'pau' mean?", ["Food", "Finished or done", "House", "Fast"], 1, "'Pau' means finished or done, as in 'pau hana' — after work."),
  cmc("Hawaii", "What is the Hawaiian word for a child?", ["Keiki", "Kupuna", "Makaʻāinana", "Aliʻi"], 0, "'Keiki' means child or children in Hawaiian."),
  cmc("Hawaii", "What is the Hawaiian word for elders or grandparents?", ["Keiki", "Aliʻi", "Kāne", "Kupuna"], 3, "'Kupuna' means elders or grandparents, honoured ancestors."),
  cmc("Hawaii", "What does the Hawaiian word 'ʻāina' mean?", ["Sea", "Sky", "Land", "Chief"], 2, "ʻĀina means land — literally 'that which feeds'."),
  cmc("Hawaii", "What does the Hawaiian word 'akamai' mean?", ["Wikiwiki", "Akamai", "Maikaʻi", "Ono"], 1, "'Akamai' means smart or clever."),
  cmc("Hawaii", "What does the Hawaiian word 'wikiwiki' mean?", ["Wikiwiki", "Pau", "Kai", "Mauna"], 0, "'Wikiwiki' means fast or quick; a Honolulu bus line carried the name."),
  cmc("Hawaii", "What does 'maikaʻi' mean?", ["Delicious", "Fast", "Broken", "Very good or excellent"], 3, "'Maikaʻi' means good or excellent."),
  cmc("Hawaii", "What does the Hawaiian word 'ʻono' mean?", ["Good", "Fast", "Delicious", "Beautiful"], 2, "'ʻOno' means delicious, as in 'ono grinds' — tasty food."),
  cmc("Hawaii", "What is the Hawaiian hand gesture with thumb and little finger extended called?", ["Hula", "Shaka", "Kani", "Mele"], 1, "The shaka — thumb and pinky extended — is Hawaii's friendly hand gesture, meaning 'right on' or 'hang loose'."),
  cmc("Hawaii", "Which Hawaiian dish is made of diced raw fish, usually ahi tuna?", ["Poke", "Poi", "Laulau", "Lomi salmon"], 0, "Poke is a dish of diced raw fish, traditionally seasoned with sea salt, seaweed, and kukui nut."),
  cmc("Hawaii", "What is the staple Hawaiian food made from pounded taro root?", ["Poke", "Haupia", "Manapua", "Poi"], 3, "Poi is a paste made by pounding cooked kalo (taro) corms and mixing with water."),
  cmc("Hawaii", "What is the Hawaiian name for the taro plant?", ["Ulu", "Niu", "Kalo", "Maiʻa"], 2, "Kalo (taro) is central to Hawaiian culture; the Hāloa legend makes it the elder sibling of humankind."),
  cmc("Hawaii", "Which Hawaiian dish wraps pork in taro leaves and steams it?", ["Kalua pig", "Laulau", "Poke", "Saimin"], 1, "Laulau is made by wrapping pork (and sometimes fish) in kalo (taro) leaves and steaming it."),
  cmc("Hawaii", "Which Hawaiian dish is pork slow-cooked in an underground oven called an imu?", ["Kalua pig", "Spam musubi", "Loco moco", "Chicken long rice"], 0, "Kālua pig is pork cooked in an imu, an underground oven, until it falls apart."),
  cmc("Hawaii", "Which dish stacks rice, a hamburger patty, a fried egg, and gravy?", ["Saimin", "Plate lunch", "Poke bowl", "Loco moco"], 3, "Loco moco is rice topped with a hamburger patty, a fried egg, and brown gravy, created in Hilo in 1949."),
  cmc("Hawaii", "Which traditional Hawaiian dessert is made from coconut milk?", ["Poi", "Mochi", "Haupia", "Kulolo"], 2, "Haupia is a traditional Hawaiian coconut-milk dessert, firm like a pudding."),
  cmc("Hawaii", "What is the Hawaiian frozen treat of finely shaved ice with flavoured syrup called?", ["Ice cake", "Shave ice", "Granita", "Snow cone syrup"], 1, "Hawaii's shave ice is shaved from a block of ice and topped with flavoured syrups — famous shops include Matsumoto's in Haleʻiwa."),
  cmc("Hawaii", "Which Hawaii snack pairs a slice of grilled Spam with rice, wrapped in seaweed?", ["Spam musubi", "Onigiri", "Maki sushi", "Temaki"], 0, "Spam musubi — grilled Spam on rice wrapped in nori — is a beloved local snack that dates to wartime Hawaii."),
  cmc("Hawaii", "What is Hawaii's own noodle soup, born of its plantation-era immigrant mix?", ["Ramen", "Pho", "Udon", "Saimin"], 3, "Saimin is Hawaii's own noodle soup, created by plantation-era immigrants blending Chinese, Japanese, and other influences."),
  cmc("Hawaii", "Which immigrant group introduced the malasada doughnut to Hawaii?", ["Japanese immigrants", "Chinese immigrants", "Portuguese immigrants", "Filipino immigrants"], 2, "Portuguese immigrants brought sweet bread and the malasada, now a Hawaii bakery staple."),
  cmc("Hawaii", "Which whale migrates to Hawaii each winter to breed and give birth?", ["Hawaiian monk seal", "Humpback whale", "Green sea turtle", "Spinner dolphin"], 1, "Humpback whales (koholā) migrate to Hawaiian waters each winter to breed and calve."),
  cmc("Hawaii", "Which endangered seal is found only in Hawaiian waters?", ["Hawaiian monk seal", "Hawaiian hoary bat", "Nene", "Iʻiwi"], 0, "The Hawaiian monk seal (ʻīlio holo i ka uaua) is one of the rarest seals in the world and found only in Hawaii."),
  cmc("Hawaii", "What is the state bird of Hawaii?", ["Iʻiwi", "ʻApapane", "Palila", "Nene"], 3, "The nene, or Hawaiian goose, is the state bird of Hawaii."),
  cmc("Hawaii", "What is the state flower of Hawaii?", ["Plumeria", "Bird of paradise", "Pua aloalo (yellow hibiscus)", "Orchid"], 2, "The yellow hibiscus (pua aloalo) is Hawaii's state flower."),
  cmc("Hawaii", "What is the state tree of Hawaii?", ["Koa", "Kukui (candlenut)", "ʻŌhiʻa", "Coconut palm"], 1, "The kukui, or candlenut tree, is Hawaii's state tree; its nuts were burned as candles."),
  cmc("Hawaii", "What is Hawaii's famously long-named state fish?", ["Humuhumunukunukuāpuaʻa", "Mahi mahi", "Ahi", "Ono"], 0, "The humuhumunukunukuāpuaʻa, the reef triggerfish, became the state fish in 1985."),
  cmc("Hawaii", "Which sea turtle, called 'honu' in Hawaiian, grazes in Hawaiian reefs?", ["Hawksbill turtle", "Leatherback turtle", "Loggerhead turtle", "Green sea turtle"], 3, "The green sea turtle, called honu in Hawaiian, is a revered symbol of longevity and peace."),
  cmc("Hawaii", "Which fragrant flower, often used in lei, is also called frangipani?", ["Hibiscus", "Plumeria", "Bird of paradise flower", "Heliconia"], 1, "Plumeria (frangipani) blossoms are commonly strung into lei in Hawaii."),
  cmc("Hawaii", "What is Hawaii's only native land mammal?", ["Monk seal", "Hawaiian hoary bat", "Nene", "Mongoose"], 1, "The Hawaiian hoary bat (ʻōpeʻapeʻa) is Hawaii's only native land mammal."),
  cmc("Hawaii", "Which small mammal was introduced to Hawaii in 1883 to control rats in sugar fields?", ["Mongoose", "Rat", "Wild pig", "Axis deer"], 0, "Mongooses were introduced in 1883 to control rats in sugar cane — a famous ecological mistake, since rats are nocturnal and mongooses are not."),
  cmc("Hawaii", "Which scarlet Hawaiian honeycreeper has a long curved bill for sipping nectar?", ["Nene", "ʻApapane", "Elepaio", "Iʻiwi"], 3, "The scarlet iʻiwi, a honeycreeper with a curved bill, feeds on ʻōhiʻa blossoms."),
  cmc("Hawaii", "Which native tree with red blossoms is sacred to Pele and dominates young lava fields?", ["ʻŌhiʻa lehua", "Kukui", "Koa", "Hala"], 0, "The ʻōhiʻa lehua, with its red pom-pom blossoms, is sacred to the volcano goddess Pele."),
  cmc("Hawaii", "Who is the Hawaiian goddess of volcanoes and fire?", ["Laka", "Pele", "Hiʻiaka", "Namaka"], 1, "Pele, goddess of volcanoes and fire, is said to live in Halemaʻumaʻu crater at Kīlauea's summit."),
  cmc("Hawaii", "Which beach in Honolulu is Hawaii's most famous stretch of sand?", ["Waikīkī Beach", "Hanauma Bay", "Poʻipū Beach", "Kāʻanapali Beach"], 0, "Waikīkī Beach in Honolulu is Hawaii's most famous beach, once reserved for Hawaiian royalty."),
  cmc("Hawaii", "Which Oʻahu nature preserve, set in a volcanic crater, is famous for snorkelling?", ["Waikīkī Beach", "Sharks Cove", "Ala Moana Beach", "Hanauma Bay"], 3, "Hanauma Bay, a flooded volcanic crater on Oʻahu, is a nature preserve famed for snorkelling."),
  cmc("Hawaii", "Which North Shore surf break is famous for its huge barreling waves over a shallow reef?", ["Jaws (Peʻahi)", "Waimea Bay", "Pipeline (Banzai Pipeline)", "Sunset Beach"], 2, "The Banzai Pipeline at ʻEhukai Beach on Oʻahu's North Shore is one of the world's most famous surf breaks."),
  cmc("Hawaii", "Which bay hosts 'The Eddie' big-wave surf contest?", ["Makaha", "Waimea Bay", "Sandy Beach", "Ala Moana Bowls"], 1, "Waimea Bay hosts The Eddie, the big-wave contest honouring lifeguard and surfer Eddie Aikau."),
  cmc("Hawaii", "Which Oʻahu temple is a replica of a Japanese temple in Uji?", ["Byodo-In Temple", "Valley of the Temples", "Mission Houses", "Queen Emma Summer Palace"], 0, "The Byodo-In Temple in the Valley of the Temples is a replica of a 950-year-old temple in Uji, Japan."),
  cmc("Hawaii", "Which Honolulu museum is the premier natural and cultural history museum of Hawaiʻi and the Pacific?", ["Honolulu Museum of Art", "ʻIolani Palace", "Pacific Fleet Submarine Museum", "Bishop Museum"], 3, "The Bishop Museum, founded in 1889, holds the world's largest collection of Hawaiian and Pacific artefacts."),
  cmc("Hawaii", "Which Lāʻie attraction presents the cultures of Polynesia's islands?", ["Sea Life Park", "Dole Plantation", "Polynesian Cultural Center", "Kualoa Ranch"], 2, "The Polynesian Cultural Center in Lāʻie showcases the cultures of Polynesia's island nations."),
  cmc("Hawaii", "Which Wahiawā attraction celebrates Hawaii's pineapple history with a garden maze?", ["Hawaii Tropical Botanical Garden", "Dole Plantation", "Waimea Valley", "Senator Fong's Plantation"], 1, "The Dole Plantation in Wahiawā began as James Dole's pineapple operation; its garden maze was once the world's largest."),
  cmc("Hawaii", "Which rugged Kauaʻi coastline is famous for emerald cliffs rising 4,000 feet from the sea?", ["Na Pali Coast", "Road to Hāna", "Hāmākua Coast", "Kona Coast"], 0, "The cliffs of the Nā Pali Coast on Kauaʻi rise as much as 4,000 feet from the Pacific."),
  cmc("Hawaii", "Which canyon is nicknamed the 'Grand Canyon of the Pacific'?", ["Haleakalā Crater", "Kīlauea Caldera", "Diamond Head Crater", "Waimea Canyon"], 3, "Waimea Canyon on Kauaʻi, about 14 miles long and 3,600 feet deep, is called the 'Grand Canyon of the Pacific'."),
  cmc("Hawaii", "Which famous winding drive runs along Maui's northeast coast?", ["The Kahekili Highway", "The Hāna Highway is on Kauaʻi", "The Road to Hāna", "Piʻilani Highway"], 2, "The Road to Hāna is a winding 64-mile drive along Maui's lush northeast coast."),
  cmc("Hawaii", "Which Hawaiʻi Island beach is famous for its black sand and resting sea turtles?", ["Waipiʻo Beach", "Punaluʻu Beach", "Green Sands Beach", "New Kaimu Beach"], 1, "Punaluʻu Beach on Hawaiʻi Island is a famous black sand beach where honu often rest."),
  cmc("Hawaii", "Which beach near South Point has green sand coloured by olivine?", ["Papakōlea (Green Sands Beach)", "Punaluʻu Beach", "Hāpuna Beach", "Spencer Beach"], 0, "Papakōlea Beach has green sand coloured by the mineral olivine from a nearby cinder cone."),
  cmc("Hawaii", "Which 442-foot waterfall is a highlight of a state park near Hilo?", ["Rainbow Falls", "Wailua Falls", "Opaekaa Falls", "Akaka Falls"], 3, "ʻAkaka Falls drops 442 feet in a state park near Hilo."),
  cmc("Hawaii", "Which national park protects Kīlauea and Mauna Loa?", ["Haleakalā National Park", "Yellowstone National Park", "Hawaiʻi Volcanoes National Park", "Yosemite National Park"], 2, "Hawaii Volcanoes National Park, founded in 1916, protects Kīlauea and Mauna Loa."),
  cmc("Hawaii", "Barack Obama, the 44th US President, was born in Honolulu in what year?", ["1959", "1961", "1963", "1957"], 1, "Honolulu-born Barack Obama, the 44th US President, was born on August 4, 1961, in Honolulu."),
  cmc("Hawaii", "In which Hawaiian city was Barack Obama born?", ["Honolulu", "Kailua", "Hilo", "Pearl City"], 0, "Barack Obama was born at Kapiʻolani Medical Center in Honolulu in 1961."),
  cmc("Hawaii", "Which world-famous triathlon championship is held in Kailua-Kona?", ["The Honolulu Marathon", "The PGA Tournament of Champions", "The Maui Jim Maui Invitational", "The Ironman World Championship"], 3, "The Ironman World Championship triathlon has been held in Kailua-Kona since 1981."),
  cmc("Hawaii", "Which December road race is one of the largest marathons in the world?", ["Ironman", "Maui Marathon", "Honolulu Marathon", "Kauai Marathon"], 2, "The Honolulu Marathon, held each December, is one of the world's largest marathons."),
  cmc("Hawaii", "What is the flagship university of the University of Hawaiʻi system?", ["Hawaiʻi Pacific University", "The University of Hawaiʻi at Mānoa", "Brigham Young University–Hawaii", "Chaminade University"], 1, "The University of Hawaiʻi at Mānoa, founded in 1907, is the flagship campus of the UH system."),
  cmc("Hawaii", "Which airline, founded in 1929 as Inter-Island Airways, is Hawaii's flagship carrier?", ["Hawaiian Airlines", "Island Air", "Mokulele Airlines", "Aloha Airlines"], 0, "Hawaiian Airlines, founded in 1929, is the oldest US carrier still operating under its original name family and Hawaii's largest airline."),
  cmc("Hawaii", "When did the first ABC Store open in Hawaii?", ["1949", "1959", "1971", "1964"], 3, "Sidney and Minnie Kosasa opened the first ABC Store on Kalākaua Avenue in Waikīkī in 1964; their earlier 1949 Kaimukī business was a pharmacy, Thrifty Drugs."),
  cmc("Hawaii", "Which is the most populous Hawaiian island?", ["Hawaiʻi Island", "Maui", "Oʻahu", "Kauaʻi"], 2, "About two-thirds of Hawaii's 1.4 million residents live on Oʻahu.")
];
NEWBANKS.canada=[
  cmc("Canada", "In what year did Canada become a country (Confederation)?", ["1840", "1867", "1901", "1931"], 1, "The British North America Act created the Dominion of Canada on July 1, 1867."),
  cmc("Canada", "Who was Canada's first prime minister?", ["John A. Macdonald", "Wilfrid Laurier", "William Lyon Mackenzie King", "Robert Borden"], 0, "Sir John A. Macdonald became Canada's first prime minister in 1867."),
  cmc("Canada", "Which province was NOT one of Canada's four original provinces in 1867?", ["Ontario", "Quebec", "Nova Scotia", "Prince Edward Island"], 3, "Canada's four original provinces in 1867 were Ontario, Quebec, Nova Scotia, and New Brunswick; Prince Edward Island did not join Confederation until 1873."),
  cmc("Canada", "Who was Canada's longest-serving prime minister?", ["John Diefenbaker", "Lester B. Pearson", "William Lyon Mackenzie King", "Pierre Trudeau"], 2, "Mackenzie King served over 21 years as prime minister across 1921–1948, the longest total in Canadian history."),
  cmc("Canada", "Who was prime minister for most of the 1970s and father of Justin Trudeau?", ["Jean Chrétien", "Pierre Trudeau", "Brian Mulroney", "Justin Trudeau"], 1, "Pierre Elliott Trudeau served as prime minister 1968–1979 and 1980–1984."),
  cmc("Canada", "Which prime minister won the Nobel Peace Prize?", ["Lester B. Pearson", "John Diefenbaker", "Pierre Trudeau", "Wilfrid Laurier"], 0, "Lester B. Pearson won the 1957 Nobel Peace Prize for proposing the UN peacekeeping force during the Suez Crisis."),
  cmc("Canada", "In what year did Canada patriate its constitution with the Charter of Rights and Freedoms?", ["1867", "1931", "1949", "1982"], 3, "The Constitution Act, 1982 patriated Canada's constitution and added the Charter of Rights and Freedoms."),
  cmc("Canada", "What is Canada's main constitutional bill of rights called?", ["Bill of Rights 1960", "Magna Carta", "Charter of Rights and Freedoms", "Quebec Charter"], 2, "The Canadian Charter of Rights and Freedoms is Part I of the Constitution Act, 1982."),
  cmc("Canada", "Who was Canada's first francophone prime minister?", ["Robert Borden", "Wilfrid Laurier", "Alexander Mackenzie", "John Thompson"], 1, "Sir Wilfrid Laurier, prime minister 1896–1911, was the first francophone to hold the office."),
  cmc("Canada", "Which prime minister led Canada through the First World War?", ["Robert Borden", "Wilfrid Laurier", "William Lyon Mackenzie King", "Arthur Meighen"], 0, "Sir Robert Borden led Canada through the First World War (1911–1920)."),
  cmc("Canada", "Which prime minister introduced the Canadian Bill of Rights in 1960?", ["Lester B. Pearson", "Louis St. Laurent", "Alexander Mackenzie", "John Diefenbaker"], 3, "John Diefenbaker, PM 1957–1963, introduced the Canadian Bill of Rights in 1960."),
  cmc("Canada", "Newfoundland joined Canada in 1949 under which prime minister?", ["William Lyon Mackenzie King", "John Diefenbaker", "Louis St. Laurent", "Lester B. Pearson"], 2, "Louis St. Laurent oversaw Newfoundland's entry into Confederation in 1949."),
  cmc("Canada", "In what year did Newfoundland join Confederation?", ["1933", "1949", "1905", "1960"], 1, "Newfoundland (now Newfoundland and Labrador) was the last province to join, on March 31, 1949."),
  cmc("Canada", "Who was Canada's first woman prime minister?", ["Kim Campbell", "Joe Clark", "John Turner", "Paul Martin"], 0, "Kim Campbell became Canada's first (and so far only) woman prime minister in 1993."),
  cmc("Canada", "Who was prime minister from 1993 to 2003?", ["Paul Martin", "Brian Mulroney", "Stephen Harper", "Jean Chrétien"], 3, "Jean Chrétien served as prime minister from 1993 to 2003."),
  cmc("Canada", "Which prime minister signed the Canada–US Free Trade Agreement in 1988?", ["Joe Clark", "John Turner", "Brian Mulroney", "Kim Campbell"], 2, "Brian Mulroney's Progressive Conservatives won a record majority in 1984; he negotiated the Canada–US Free Trade Agreement."),
  cmc("Canada", "Who was prime minister from 2006 to 2015?", ["Jean Chrétien", "Stephen Harper", "Paul Martin", "Justin Trudeau"], 1, "Stephen Harper served as prime minister from 2006 to 2015."),
  cmc("Canada", "Who became prime minister in 2015?", ["Justin Trudeau", "Stephen Harper", "Andrew Scheer", "Erin O'Toole"], 0, "Justin Trudeau became prime minister in November 2015."),
  cmc("Canada", "Which French explorer sailed up the St. Lawrence River in 1534?", ["Samuel de Champlain", "John Cabot", "Henry Hudson", "Jacques Cartier"], 3, "Jacques Cartier reached the St. Lawrence in 1534–35, claiming the land for France."),
  cmc("Canada", "Who founded Quebec City in 1608?", ["Jacques Cartier", "Louis Jolliet", "Samuel de Champlain", "René-Robert de La Salle"], 2, "Samuel de Champlain founded Quebec City in 1608."),
  cmc("Canada", "Which explorer reached Canada's Atlantic coast in 1497, sailing for England?", ["Christopher Columbus", "John Cabot (Giovanni Caboto)", "Jacques Cartier", "Henry Hudson"], 1, "John Cabot landed on Canada's east coast in 1497, sailing for England."),
  cmc("Canada", "Which explorer is Hudson Bay named after?", ["Henry Hudson", "William Baffin", "Martin Frobisher", "John Davis"], 0, "Hudson Bay is named for Henry Hudson, who explored it in 1610."),
  cmc("Canada", "Who built the settlement at L'Anse aux Meadows in Newfoundland around 1000 AD?", ["French", "Spanish", "Portuguese", "Vikings (Norse)"], 3, "Norse settlers built a settlement at L'Anse aux Meadows in Newfoundland around the year 1000."),
  cmc("Canada", "Which 1759 battle near Quebec City decided the fate of New France?", ["The Battle of Queenston Heights", "The Battle of Vimy Ridge", "The Battle of the Plains of Abraham", "The Battle of York"], 2, "The 1759 battle outside Quebec City decided New France's fate in the Seven Years' War."),
  cmc("Canada", "Which WWI ridge did Canadian troops capture in April 1917?", ["Passchendaele", "Vimy Ridge", "Ypres", "The Somme"], 1, "Canadian troops captured Vimy Ridge in April 1917, a defining moment for Canada in WWI."),
  cmc("Canada", "What was the secret network that helped enslaved people escape to Canada called?", ["The Underground Railroad", "The Freedom Trail", "The Northern Route", "The Liberty Line"], 0, "The Underground Railroad helped thousands of enslaved people reach freedom in Canada in the 1800s."),
  cmc("Canada", "What is the largest lake entirely within Canada?", ["Great Slave Lake", "Lake Winnipeg", "Lake Athabasca", "Great Bear Lake"], 3, "Great Bear Lake in the Northwest Territories is the largest lake entirely within Canada."),
  cmc("Canada", "Which Great Lake is the largest freshwater lake in the world by surface area?", ["Lake Huron", "Lake Ontario", "Lake Superior", "Lake Erie"], 2, "Lake Superior, shared with the US, is the largest freshwater lake in the world by surface area."),
  cmc("Canada", "Which Canadian lake is the deepest in North America?", ["Great Bear Lake", "Great Slave Lake", "Lake Winnipeg", "Reindeer Lake"], 1, "Great Slave Lake in the Northwest Territories is the deepest lake in North America."),
  cmc("Canada", "What is Canada's longest river?", ["Mackenzie River", "St. Lawrence River", "Yukon River", "Fraser River"], 0, "The Mackenzie River system, flowing to the Arctic Ocean, is Canada's longest river system."),
  cmc("Canada", "Which river connects the Great Lakes to the Atlantic Ocean?", ["Mackenzie River", "Nelson River", "Columbia River", "St. Lawrence River"], 3, "The St. Lawrence River connects the Great Lakes to the Atlantic Ocean."),
  cmc("Canada", "What is Canada's highest mountain?", ["Mount Robson", "Mount Columbia", "Mount Logan", "Mount Saint Elias"], 2, "Mount Logan in Yukon, at 5,959 m, is Canada's highest peak."),
  cmc("Canada", "Which famous waterfall straddles the Canada–US border between Ontario and New York?", ["Montmorency Falls", "Niagara Falls", "Athabasca Falls", "Helmcken Falls"], 1, "Niagara Falls straddles the Ontario–New York border on the Niagara River."),
  cmc("Canada", "What is Canada's oldest national park, founded in 1885?", ["Banff National Park", "Jasper National Park", "Yoho National Park", "Wood Buffalo National Park"], 0, "Banff, established in 1885, is Canada's oldest national park, in the Alberta Rockies."),
  cmc("Canada", "What is Canada's largest national park?", ["Banff National Park", "Gros Morne National Park", "Point Pelee National Park", "Wood Buffalo National Park"], 3, "Wood Buffalo, spanning Alberta and the Northwest Territories, is Canada's largest national park."),
  cmc("Canada", "Which bay has the highest tides in the world?", ["Hudson Bay", "Gulf of St. Lawrence", "Bay of Fundy", "Bay of Chaleur"], 2, "The Bay of Fundy, between New Brunswick and Nova Scotia, has the highest tides in the world, up to 16 metres."),
  cmc("Canada", "What is the huge inland sea in northeastern Canada?", ["James Bay", "Hudson Bay", "Ungava Bay", "Frobisher Bay"], 1, "Hudson Bay is a vast inland sea in northeastern Canada, draining much of the country."),
  cmc("Canada", "What is Canada's largest island?", ["Vancouver Island", "Baffin Island", "Ellesmere Island", "Victoria Island"], 1, "Baffin Island in Nunavut is Canada's largest island and the fifth-largest in the world."),
  cmc("Canada", "Which large island lies off Canada's southwest coast, home to Victoria?", ["Vancouver Island", "Newfoundland", "Prince Edward Island", "Baffin Island"], 0, "Vancouver Island lies off British Columbia's southwest coast; the city of Victoria is at its south end."),
  cmc("Canada", "Which island province is Canada's smallest?", ["Prince Edward Island", "Anticosti Island", "Cape Breton Island", "Manitoulin Island"], 0, "Prince Edward Island is Canada's smallest province, joined to the mainland by the Confederation Bridge."),
  cmc("Canada", "What bridge connects Prince Edward Island to New Brunswick?", ["Macdonald-Cartier Bridge", "Confederation Bridge", "Peace Bridge", "Ambassador Bridge"], 1, "The Confederation Bridge, opened in 1997, stretches 12.9 km to Prince Edward Island."),
  cmc("Canada", "Which Ontario island is the largest freshwater island in the world?", ["Manitoulin Island", "Baffin Island", "Vancouver Island", "Ellesmere Island"], 0, "Manitoulin Island in Lake Huron is the world's largest freshwater island."),
  cmc("Canada", "Which beloved novel by Lucy Maud Montgomery is set on Prince Edward Island?", ["Anne of Avonlea", "Emily of New Moon", "The Story Girl", "Green Gables (Anne of Green Gables)"], 3, "Lucy Maud Montgomery's 'Anne of Green Gables' (1908) is set in Prince Edward Island."),
  cmc("Canada", "Which Canadian author wrote 'The Handmaid's Tale'?", ["Alice Munro", "Lucy Maud Montgomery", "Margaret Atwood", "Margaret Laurence"], 2, "Margaret Atwood wrote 'The Handmaid's Tale' (1985), set in a dystopian Gilead."),
  cmc("Canada", "Which Canadian short-story writer won the Nobel Prize in Literature in 2013?", ["Margaret Atwood", "Alice Munro", "Carol Shields", "Mavis Gallant"], 1, "Alice Munro, master of the short story, won the Nobel Prize in Literature in 2013."),
  cmc("Canada", "Which Quebec-born singer sang 'My Heart Will Go On'?", ["Celine Dion", "Shania Twain", "Alanis Morissette", "Avril Lavigne"], 0, "Celine Dion, from Charlemagne, Quebec, is one of the best-selling music artists of all time."),
  cmc("Canada", "Which Canadian singer-songwriter wrote 'Hallelujah'?", ["Neil Young", "Joni Mitchell", "Gordon Lightfoot", "Leonard Cohen"], 3, "Leonard Cohen wrote the song 'Hallelujah', released on his 1984 album 'Various Positions'."),
  cmc("Canada", "Which Toronto-born rocker recorded 'Heart of Gold'?", ["Leonard Cohen", "Robbie Robertson", "Neil Young", "Randy Bachman"], 2, "Neil Young, born in Toronto in 1945, is famed for 'Heart of Gold' and work with Crosby, Stills & Nash."),
  cmc("Canada", "Which Canadian singer wrote 'Big Yellow Taxi'?", ["Celine Dion", "Joni Mitchell", "Sarah McLachlan", "k.d. lang"], 1, "Joni Mitchell, from Alberta and Saskatchewan, wrote 'Both Sides, Now' and 'Big Yellow Taxi'."),
  cmc("Canada", "Which Toronto rock trio featured drummer Neil Peart?", ["The Guess Who", "Rush", "The Tragically Hip", "April Wine"], 1, "Rush — Geddy Lee, Alex Lifeson, and Neil Peart — formed in Toronto in 1968."),
  cmc("Canada", "Which pop star from Stratford, Ontario, was discovered on YouTube?", ["Drake", "Justin Bieber", "The Weeknd", "Michael Bublé"], 1, "Justin Bieber, from Stratford, Ontario, was discovered via YouTube videos in 2008."),
  cmc("Canada", "Which Toronto rapper co-founded OVO Sound and popularised 'the 6ix'?", ["The Weeknd", "Justin Bieber", "Drake", "Shawn Mendes"], 2, "Drake, born Aubrey Graham in Toronto, co-founded the OVO Sound label."),
  cmc("Canada", "Which Toronto-raised actor starred in 'The Matrix' and 'John Wick'?", ["Jim Carrey", "Ryan Reynolds", "Michael J. Fox", "Keanu Reeves"], 3, "Keanu Reeves was born in Beirut and raised in Toronto; he starred in 'The Matrix'."),
  cmc("Canada", "Which Newmarket, Ontario-born comic starred in 'Ace Ventura: Pet Detective'?", ["Jim Carrey", "Mike Myers", "John Candy", "Dan Aykroyd"], 0, "Jim Carrey, from Newmarket, Ontario, starred in 'Ace Ventura' and 'The Mask'."),
  cmc("Canada", "Which London, Ontario-born actor starred in 'La La Land' and 'Barbie'?", ["Michael J. Fox", "Keanu Reeves", "Ryan Reynolds", "Ryan Gosling"], 3, "Ryan Gosling, born in London, Ontario in 1980, played Ken in 'Barbie' (2023)."),
  cmc("Canada", "Who co-discovered insulin in Toronto in 1921?", ["Alexander Graham Bell", "Norman Bethune", "Frederick Banting", "Wilder Penfield"], 2, "Frederick Banting co-discovered insulin at the University of Toronto in 1921."),
  cmc("Canada", "Which inventor, long resident in Canada, is credited with inventing the telephone?", ["Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi", "Reginald Fessenden"], 1, "Alexander Graham Bell, who lived in Brantford and Nova Scotia, developed the telephone in the 1870s."),
  cmc("Canada", "Which young Canadian ran across the country in 1980 to raise money for cancer research?", ["Terry Fox", "Rick Hansen", "Steve Fonyo", "Terry Kelly"], 0, "Terry Fox ran across Canada in 1980 on one leg to raise money for cancer research — the Marathon of Hope."),
  cmc("Canada", "What was Terry Fox's 1980 cross-Canada run called?", ["Run for the Cure", "The Great Canadian Run", "Cross-Canada Trek", "Marathon of Hope"], 3, "Terry Fox's 1980 run was called the Marathon of Hope; he covered 5,373 km before cancer forced him to stop."),
  cmc("Canada", "Which player captained the Edmonton Oilers and won the Hart Trophy in 2017, 2021, and 2023?", ["Sidney Crosby", "Leon Matthews", "Connor McDavid", "Auston Matthews"], 2, "Connor McDavid, the Oilers' captain since 2016, is a three-time Hart Trophy winner."),
  cmc("Canada", "Which Montreal Canadiens star was nicknamed 'Rocket'?", ["Jean Béliveau", "Maurice Richard", "Guy Lafleur", "Howie Morenz"], 1, "Maurice 'Rocket' Richard was the first player to score 50 goals in 50 games, in 1944–45."),
  cmc("Canada", "Which defenceman scored 'The Goal' flying through the air to win the 1970 Stanley Cup?", ["Bobby Orr", "Wayne Gretzky", "Mario Lemieux", "Sidney Crosby"], 0, "Bobby Orr's flying goal won the 1970 Stanley Cup for the Boston Bruins."),
  cmc("Canada", "Which player was known as 'Mr. Hockey'?", ["Mark Messier", "Steve Yzerman", "Bobby Hull", "Gordie Howe"], 3, "Gordie Howe, 'Mr. Hockey', played 26 NHL seasons, mostly with Detroit."),
  cmc("Canada", "Who scored the 'Golden Goal' for Canada at the 2010 Vancouver Olympics?", ["Connor McDavid", "Steven Stamkos", "Sidney Crosby", "John Tavares"], 2, "Sidney Crosby scored the golden goal in overtime at the Vancouver 2010 Winter Olympics."),
  cmc("Canada", "Which team has won the most Stanley Cups?", ["Montreal Canadiens", "Toronto Maple Leafs", "Vancouver Canucks", "Calgary Flames"], 0, "The Montreal Canadiens have won the Stanley Cup 24 times, more than any other team."),
  cmc("Canada", "Which Canadian team last won the Stanley Cup in 1967?", ["Montreal Canadiens", "Toronto Maple Leafs", "Ottawa Senators", "Edmonton Oilers"], 1, "The Toronto Maple Leafs last won the Stanley Cup in 1967."),
  cmc("Canada", "When did a Canadian team last win the Stanley Cup?", ["1993", "1972", "1989", "1967"], 3, "The last Canadian team to win the Cup was the Montreal Canadiens in 1993."),
  cmc("Canada", "Which Canadian city hosted the 2010 Winter Olympics?", ["Calgary 1988", "Montreal 1976", "Vancouver 2010", "Lake Placid 1980"], 2, "Canada hosted the Winter Olympics in Calgary (1988) and Vancouver (2010)."),
  cmc("Canada", "Which city hosted the 1988 Winter Olympics?", ["Montreal", "Calgary", "Toronto", "Edmonton"], 1, "Calgary hosted the 1988 Winter Olympics, famous for the Jamaican bobsled team and Eddie the Eagle."),
  cmc("Canada", "In which series did Paul Henderson score his famous 1972 winner against the Soviets?", ["Summit Series 1972", "Miracle on Ice 1980", "Canada Cup 1987", "World Cup 2016"], 0, "Paul Henderson's goal in the 1972 Summit Series against the Soviet Union is a defining Canadian sports moment."),
  cmc("Canada", "Which Canadian team won the World Series in 1992 and 1993?", ["Montreal Expos", "Vancouver Canadians", "Calgary Cannons", "Toronto Blue Jays"], 3, "The Toronto Blue Jays won back-to-back World Series in 1992 and 1993."),
  cmc("Canada", "Which Canadian team won the NBA championship in 2019?", ["Vancouver Grizzlies", "Toronto Blue Jays", "Toronto Raptors", "Montreal Expos"], 2, "The Toronto Raptors won the 2019 NBA championship, the first NBA title won by a team based outside the US."),
  cmc("Canada", "In what year was the first Grey Cup game played?", ["1920", "1909", "1901", "1935"], 1, "The Grey Cup was first contested in 1909, donated by Governor General Earl Grey."),
  cmc("Canada", "Canada produces most of the world's supply of which sweet product?", ["Maple syrup", "Poutine", "Nanaimo bars", "Butter tarts"], 0, "Canada produces about 70% of the world's maple syrup, most of it from Quebec."),
  cmc("Canada", "Which Quebec dish combines fries, cheese curds, and gravy?", ["Tourtière", "BeaverTails", "Cretons", "Poutine"], 3, "Poutine — fries, cheese curds, and gravy — originated in Quebec in the late 1950s."),
  cmc("Canada", "Which no-bake layered dessert bar is named for a British Columbia city?", ["Butter tart", "Flakie", "Nanaimo bar", "Saskatoon berry pie"], 2, "The Nanaimo bar, a no-bake chocolate-topped layered bar, is named for the BC city of Nanaimo."),
  cmc("Canada", "What are the fried-dough pastries shaped like a beaver's tail called?", ["Tim Hortons", "BeaverTails", "Poutine", "Tourtière"], 1, "BeaverTails are fried dough pastries stretched to resemble a beaver's tail, sold since 1978 in Ontario."),
  cmc("Canada", "Which small Canadian pastry tart has a buttery brown-sugar filling?", ["Butter tart", "Sugar pie", "Blueberry grunt", "Figgy duff"], 0, "The butter tart — a flaky pastry shell with a buttery, sugary filling — is a quintessentially Canadian dessert."),
  cmc("Canada", "Which animal is Canada's official national animal symbol?", ["The moose", "The Canada goose", "The loon", "The beaver"], 3, "The beaver became an official emblem of Canada in 1975; it also appears on the nickel."),
  cmc("Canada", "Which bird appears on Canada's one-dollar coin?", ["The Canada goose", "The snowy owl", "The loon", "The puffin"], 2, "The common loon appears on Canada's one-dollar coin, nicknamed the 'loonie'."),
  cmc("Canada", "What is Canada's two-dollar coin nicknamed?", ["Loonie", "Toonie", "Doubloon", "Buck"], 1, "The two-dollar coin, introduced in 1996, is called the toonie — a play on 'two' and 'loonie'."),
  cmc("Canada", "Which animal appears on Canada's two-dollar coin?", ["Polar bear", "Grizzly bear", "Caribou", "Beaver"], 0, "The toonie features a polar bear in the centre of its design."),
  cmc("Canada", "When is Canada Day celebrated?", ["July 4", "March 1", "November 11", "July 1"], 3, "Canada Day falls on July 1, the anniversary of Confederation in 1867."),
  cmc("Canada", "What is Canada's national anthem?", ["'God Save the King'", "'The Maple Leaf Forever'", "'O Canada'", "'Canada in Khaki'"], 2, "'O Canada' became the official national anthem in 1980, a century after it was first performed."),
  cmc("Canada", "What is the main Inuit language spoken in Canada's North?", ["French", "Inuktitut", "Cree", "Ojibwe"], 1, "Inuktitut is the main language of Inuit in Canada's Arctic."),
  cmc("Canada", "Which large deer migrates in huge herds across Canada's Arctic?", ["Moose", "Caribou", "Muskox", "Wolverine"], 1, "Caribou (reindeer) herds migrate across Canada's Arctic tundra."),
  cmc("Canada", "Which bear gathers near Churchill, Manitoba, each autumn?", ["Grizzly bear", "Black bear", "Kermode bear", "Polar bear"], 3, "Polar bears gather near Churchill, Manitoba, each autumn, making it the 'Polar Bear Capital of the World'."),
  cmc("Canada", "Which 'unicorn of the sea' whale lives in Canada's Arctic?", ["Beluga", "Orca", "Narwhal", "Walrus"], 2, "The narwhal, a tusked whale, lives in Canada's Arctic waters."),
  cmc("Canada", "Which colourful-beaked seabird nests in Newfoundland colonies?", ["Snowy owl", "Puffin", "Canada goose", "Whooping crane"], 1, "Atlantic puffins nest in colonies in Newfoundland and Labrador, where the puffin is the provincial bird."),
  cmc("Canada", "Which endangered crane nests in Wood Buffalo National Park?", ["Whooping crane", "Sandhill crane", "Trumpeter swan", "Snow goose"], 0, "The whooping crane, one of North America's rarest birds, nests in Wood Buffalo National Park."),
  cmc("Canada", "Which wild cat with oversized paws roams Canada's boreal forest?", ["Cougar", "Bobcat", "Fisher", "Canada lynx"], 3, "The Canada lynx, with its huge paws, hunts snowshoe hares in boreal forests."),
  cmc("Canada", "Which rodent, Canada's largest, builds dams and lodges?", ["Muskrat", "Otter", "Beaver", "Mink"], 2, "The beaver is North America's largest rodent and a famed dam builder."),
  cmc("Canada", "Which Canadian city hosted the 1976 Summer Olympics?", ["Toronto", "Montreal", "Vancouver", "Calgary"], 1, "Montreal hosted the 1976 Summer Olympics, where Nadia Comăneci scored the first perfect 10 in Olympic gymnastics."),
  cmc("Canada", "Which sport is Canada's official national winter sport?", ["Ice hockey", "Lacrosse", "Curling", "Skiing"], 0, "Since 1994, ice hockey is Canada's official winter sport and lacrosse its official summer sport.")
];
PICS.easy.push(
  pic("assets/port-art-the-birth-of-venus.jpg", "Which famous painting is this?", ["The Birth of Venus", "Primavera", "The School of Athens", "The Kiss"], 0, "Paintings", "Sandro Botticelli — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg", "Botticelli painted The Birth of Venus around 1485."),
  pic("assets/port-art-the-creation-of-adam.jpg", "Which famous painting is this?", ["The Last Supper", "The Creation of Adam", "The Last Judgment", "The Sistine Madonna"], 1, "Paintings", "Michelangelo — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Michelangelo_-_Creation_of_Adam_(cropped).jpg", "Michelangelo painted The Creation of Adam on the Sistine Chapel ceiling, 1508–1512."),
  pic("assets/port-art-irises.jpg", "Which famous painting is this?", ["Sunflowers", "Irises", "The Starry Night", "Water Lilies"], 1, "Paintings", "Vincent van Gogh — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Irises-Vincent_van_Gogh.jpg", "Van Gogh painted Irises in 1889 at the asylum in Saint-Rémy.")
);
PICS.medium.push(
  pic("assets/port-art-primavera.jpg", "Which famous painting is this?", ["The Birth of Venus", "Primavera", "The Garden of Earthly Delights", "Flaming June"], 1, "Paintings", "Sandro Botticelli — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg", "Botticelli's Primavera (c. 1480) celebrates spring with figures from classical myth."),
  pic("assets/port-art-the-garden-of-earthly-delights.jpg", "Which famous painting is this?", ["The Tower of Babel", "The Garden of Earthly Delights", "The Hunters in the Snow", "The Ambassadors"], 1, "Paintings", "Hieronymus Bosch — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg", "Bosch's triptych (c. 1500) moves from Eden through a fantastical earthly paradise to Hell."),
  pic("assets/port-art-the-railway.jpg", "Which famous painting is this?", ["The Railway", "Luncheon on the Grass", "The Bar at the Folies-Bergère", "Dance at Le Moulin de la Galette"], 0, "Paintings", "Édouard Manet — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Edouard_Manet_-_The_Railway_-_Google_Art_Project.jpg", "Manet painted The Railway in 1873, by the tracks of the Gare Saint-Lazare in Paris."),
  pic("assets/port-art-dance-at-le-moulin-de-la-galette.jpg", "Which famous painting is this?", ["Dance at Le Moulin de la Galette", "The Dance Class", "A Sunday Afternoon on the Island of La Grande Jatte", "The Boating Party"], 0, "Paintings", "Pierre-Auguste Renoir — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Pierre-Auguste_Renoir,_Le_Moulin_de_la_Galette.jpg", "Renoir painted this joyful Paris dance-hall scene in 1876."),
  pic("assets/port-art-the-night-cafe.jpg", "Which famous painting is this?", ["Café Terrace at Night", "The Night Café", "The Night Watch", "Nighthawks"], 1, "Paintings", "Vincent van Gogh — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_The_Night_Caf%C3%A9_(1888).jpg", "Van Gogh painted The Night Café in Arles in 1888, in deliberately jarring reds and greens."),
  pic("assets/port-art-the-sleeping-gypsy.jpg", "Which famous painting is this?", ["The Sleeping Gypsy", "The Dream", "The Snake Charmer", "The Hungry Lion Throws Itself on the Antelope"], 0, "Paintings", "Henri Rousseau — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:La_Boh%C3%A9mienne_endormie.jpg", "Henri Rousseau painted The Sleeping Gypsy in 1897; a lion sniffs at the sleeping musician."),
  pic("assets/port-art-lady-with-an-ermine.jpg", "Which famous painting is this?", ["Mona Lisa", "Ginevra de' Benci", "Lady with an Ermine", "La Belle Ferronnière"], 2, "Paintings", "Leonardo da Vinci — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg", "Leonardo painted Cecilia Gallerani, the Lady with an Ermine, around 1489–1491.")
);
PICS.hard.push(
  pic("assets/port-art-the-ambassadors.jpg", "Which famous painting is this?", ["The Ambassadors", "The Arnolfini Portrait", "The Death of Sardanapalus", "The Anatomy Lesson"], 0, "Paintings", "Hans Holbein the Younger — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg", "Holbein's 1533 double portrait hides a stretched skull across the bottom, visible only at an angle."),
  pic("assets/port-art-flaming-june.jpg", "Which famous painting is this?", ["Flaming June", "The Lady of Shalott", "Ophelia", "The Rokeby Venus"], 0, "Paintings", "Frederic Leighton — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Flaming_June,_by_Frederic_Lord_Leighton_(1830-1896).jpg", "Frederic Leighton's Flaming June (1895) shows a sleeping woman in translucent orange drapery."),
  pic("assets/port-art-the-rokeby-venus.jpg", "Which famous painting is this?", ["The Rokeby Venus", "The Birth of Venus", "Flaming June", "Olympia"], 0, "Paintings", "Diego Velázquez — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_-_Rokeby_Venus.jpg", "Velázquez painted The Rokeby Venus around 1648–1651, his only surviving female nude."),
  pic("assets/port-art-the-third-of-may-1808.jpg", "Which famous painting is this?", ["Liberty Leading the People", "The Third of May 1808", "The Raft of the Medusa", "The Fighting Temeraire"], 1, "Paintings", "El_Tres_de_Mayo — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg", "Goya painted The Third of May 1808 in 1814, showing French soldiers executing Spanish civilians."),
  pic("assets/port-art-the-lacemaker.jpg", "Which famous painting is this?", ["The Milkmaid", "Girl with a Pearl Earring", "The Lacemaker", "The Geographer"], 2, "Paintings", "Johannes Vermeer — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_The_lacemaker_(c.1669-1671).jpg", "Vermeer painted The Lacemaker around 1669–1671; it now hangs in the Louvre."),
  pic("assets/port-art-the-sistine-madonna.jpg", "Which famous painting is this?", ["The Sistine Madonna", "The Creation of Adam", "The School of Athens", "Madonna of the Rosary"], 0, "Paintings", "Raphael — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Raphael_-_The_Sistine_Madonna_-_Google_Arts_%26_Culture.jpg", "Raphael painted the Sistine Madonna in 1512; the two bored cherubs at its base are famous worldwide."),
  pic("assets/port-art-the-magpie.jpg", "Which famous painting is this?", ["The Magpie", "Impression, Sunrise", "The Poppy Field", "Water Lilies"], 0, "Paintings", "Claude Monet — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg", "Monet painted The Magpie in the winter of 1868–69, a landmark Impressionist snow scene.")
);
PICS.vhard.push(
  pic("assets/port-art-the-lady-of-shalott.jpg", "Which famous painting is this?", ["The Lady of Shalott", "Ophelia", "Flaming June", "The Accolade"], 0, "Paintings", "John William Waterhouse — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg", "Waterhouse painted The Lady of Shalott in 1888, from Tennyson's poem."),
  pic("assets/port-art-the-death-of-sardanapalus.jpg", "Which famous painting is this?", ["The Death of Sardanapalus", "Liberty Leading the People", "The Raft of the Medusa", "Women of Algiers"], 0, "Paintings", "Eugène Delacroix — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Delacroix_-_La_Mort_de_Sardanapale_(1827).jpg", "Delacroix painted The Death of Sardanapalus in 1827, a swirling scene of the Assyrian king's last hours."),
  pic("assets/port-art-the-return-of-the-prodigal-son.jpg", "Which famous painting is this?", ["The Return of the Prodigal Son", "The Night Watch", "The Anatomy Lesson of Dr. Nicolaes Tulp", "The Jewish Bride"], 0, "Paintings", "Rembrandt — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Rembrandt_-_The_Return_of_the_Prodigal_Son.jpg", "Rembrandt painted The Return of the Prodigal Son near the end of his life, around 1668."),
  pic("assets/port-art-the-blue-boy.jpg", "Which famous painting is this?", ["The Blue Boy", "The Fighting Temeraire", "The Hay Wain", "Boy with a Basket of Fruit"], 0, "Paintings", "Thomas Gainsborough — public domain artwork, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Thomas_Gainsborough_-_The_Blue_Boy_(c._1770).jpg", "Gainsborough painted The Blue Boy around 1770.")
);

/* ==== 2026-11-09 expansion: licence-verified public-domain / CC0 movie stills ==== */
PICS.easy.push(
  pic("assets/still-the-gold-rush-1.jpg", "This still is from which classic film?", ["Man with a Movie Camera", "Faust", "The Gold Rush", "Greed"], 2, "Movie Stills", "Still from The Gold Rush (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:End_Scene_-_The_Gold_Rush_1925_wmplayer_2013-07-04.jpg", "Chaplin's 1925 comedy, famous for the dinner-roll dance and the boot-eating scene."),
  pic("assets/still-the-gold-rush-2.jpg", "This still is from which classic film?", ["Häxan", "The Gold Rush", "Broken Blossoms", "Way Down East"], 1, "Movie Stills", "Still from The Gold Rush (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Georgia_Hale_in_The_Gold_Rush_(1925).jpg", "Chaplin's 1925 comedy, famous for the dinner-roll dance and the boot-eating scene."),
  pic("assets/still-the-gold-rush-3.jpg", "This still is from which classic film?", ["The Gold Rush", "Intolerance", "Orphans of the Storm", "Robin Hood"], 0, "Movie Stills", "Still from The Gold Rush (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Georgia_Hale_-_The_Gold_Rush_1925_(01)_wmplayer_2013-07-04.jpg", "Chaplin's 1925 comedy, famous for the dinner-roll dance and the boot-eating scene."),
  pic("assets/still-the-gold-rush-4.jpg", "This still is from which classic film?", ["The Mark of Zorro", "The Thief of Bagdad", "It", "The Gold Rush"], 3, "Movie Stills", "Still from The Gold Rush (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Georgia_Hale_-_The_Gold_Rush_1925_(02)_wmplayer_2013-07-04.jpg", "Chaplin's 1925 comedy, famous for the dinner-roll dance and the boot-eating scene."),
  pic("assets/still-the-general-1.jpg", "This still is from which classic film?", ["The Jazz Singer", "Man with a Movie Camera", "The General", "Faust"], 2, "Movie Stills", "Still from The General (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Buster_Keaton_with_a_cannon_in_The_General.jpg", "Buster Keaton's 1926 comedy about a stolen locomotive is often ranked among the greatest films ever made."),
  pic("assets/still-the-general-2.jpg", "This still is from which classic film?", ["Un Chien Andalou", "The General", "Häxan", "Broken Blossoms"], 1, "Movie Stills", "Still from The General (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Buster_Keaton_attempts_to_enlist_in_The_General.jpg", "Buster Keaton's 1926 comedy about a stolen locomotive is often ranked among the greatest films ever made."),
  pic("assets/still-the-general-3.jpg", "This still is from which classic film?", ["The General", "Greed", "Intolerance", "Orphans of the Storm"], 0, "Movie Stills", "Still from The General (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Buster_Keaton_drives_a_two-man,_railroad_handcar_in_The_General.jpg", "Buster Keaton's 1926 comedy about a stolen locomotive is often ranked among the greatest films ever made."),
  pic("assets/still-the-general-4.jpg", "This still is from which classic film?", ["Way Down East", "The Mark of Zorro", "The Thief of Bagdad", "The General"], 3, "Movie Stills", "Still from The General (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Buster_Keaton_in_%22The_General%22_LCCN2014710087.jpg", "Buster Keaton's 1926 comedy about a stolen locomotive is often ranked among the greatest films ever made."),
  pic("assets/still-safety-last-1.jpg", "This still is from which classic film?", ["The Broadway Melody", "Un Chien Andalou", "Safety Last!", "Häxan"], 2, "Movie Stills", "Still from Safety Last! (1923), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Broadway_Department_Store_in_the_background_of_Safety_Last!.png", "Harold Lloyd's 1923 comedy ends with the famous clock-tower climb."),
  pic("assets/still-safety-last-2.jpg", "This still is from which classic film?", ["Faust", "Safety Last!", "Greed", "Intolerance"], 1, "Movie Stills", "Still from Safety Last! (1923), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Safety_Last_(1923)_sceenshot.jpg", "Harold Lloyd's 1923 comedy ends with the famous clock-tower climb."),
  pic("assets/still-safety-last-3.jpg", "This still is from which classic film?", ["Safety Last!", "Broken Blossoms", "Way Down East", "The Mark of Zorro"], 0, "Movie Stills", "Still from Safety Last! (1923), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Westcott_Clarke_1923.png", "Harold Lloyd's 1923 comedy ends with the famous clock-tower climb."),
  pic("assets/still-the-phantom-of-the-opera-1.jpg", "This still is from which classic horror film?", ["The Thief of Bagdad", "It", "The Phantom of the Opera", "The Wind"], 2, "Movie Stills", "Still from The Phantom of the Opera (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Phantom_1925_-_Joseph_Buquet.jpg", "Lon Chaney's self-designed make-up shocked audiences in this 1925 horror classic."),
  pic("assets/still-the-phantom-of-the-opera-2.jpg", "This still is from which classic horror film?", ["The Crowd", "The Phantom of the Opera", "Sunrise: A Song of Two Humans", "The General"], 1, "Movie Stills", "Still from The Phantom of the Opera (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Phantom_1925_-_Ledoux.jpg", "Lon Chaney's self-designed make-up shocked audiences in this 1925 horror classic."),
  pic("assets/still-the-phantom-of-the-opera-3.jpg", "This still is from which classic horror film?", ["The Phantom of the Opera", "The Gold Rush", "Safety Last!", "The Circus"], 0, "Movie Stills", "Still from The Phantom of the Opera (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Phantomtechnicolor.jpg", "Lon Chaney's self-designed make-up shocked audiences in this 1925 horror classic."),
  pic("assets/still-the-phantom-of-the-opera-4.jpg", "This still is from which classic horror film?", ["Sherlock Jr.", "The Freshman", "The Hunchback of Notre Dame", "The Phantom of the Opera"], 3, "Movie Stills", "Still from The Phantom of the Opera (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Phantomunmasking.jpg", "Lon Chaney's self-designed make-up shocked audiences in this 1925 horror classic."),
  pic("assets/still-the-jazz-singer-2.jpg", "This still is from which classic film?", ["Broken Blossoms", "The Jazz Singer", "Way Down East", "The Mark of Zorro"], 1, "Movie Stills", "Still from The Jazz Singer (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Al_Jolson_in_The_Jazz_Singer_-_NYPL_ps_the_cd26_386.jpg", "The Jazz Singer (1927), with Al Jolson, launched the talking-picture era."),
  pic("assets/still-the-jazz-singer-3.jpg", "This still is from which classic film?", ["The Jazz Singer", "Orphans of the Storm", "Robin Hood", "The Black Pirate"], 0, "Movie Stills", "Still from The Jazz Singer (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Al_Jolson_Jazz_Singer.JPG", "The Jazz Singer (1927), with Al Jolson, launched the talking-picture era."),
  pic("assets/still-the-jazz-singer-4.jpg", "This still is from which classic film?", ["The Thief of Bagdad", "It", "The Wind", "The Jazz Singer"], 3, "Movie Stills", "Still from The Jazz Singer (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:McAvoyJolsonJazzSinger.jpg", "The Jazz Singer (1927), with Al Jolson, launched the talking-picture era."),
  pic("assets/still-robin-hood-1.jpg", "This still is from which classic film?", ["The Big Parade", "The Jazz Singer", "Man with a Movie Camera", "Robin Hood"], 3, "Movie Stills", "Still from Robin Hood (1922), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Douglas_Fairbanks_-_A_Pictorial_History_of_the_Silent_Screen.jpg", "Fairbanks's 1922 Robin Hood featured a giant castle set, one of the largest of the silent era."),
  pic("assets/still-robin-hood-2.jpg", "This still is from which classic film?", ["The Broadway Melody", "Un Chien Andalou", "Robin Hood", "Häxan"], 2, "Movie Stills", "Still from Robin Hood (1922), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Douglas_Fairbanks_in_Robin_Hood_(1922_print).jpg", "Fairbanks's 1922 Robin Hood featured a giant castle set, one of the largest of the silent era."),
  pic("assets/still-robin-hood-3.jpg", "This still is from which classic film?", ["Faust", "Robin Hood", "Greed", "Intolerance"], 1, "Movie Stills", "Still from Robin Hood (1922), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Douglas_Fairbanks,_Photoplay_January_1923.jpg", "Fairbanks's 1922 Robin Hood featured a giant castle set, one of the largest of the silent era."),
  pic("assets/still-charade-1.jpg", "This still is from which classic film?", ["Charade", "Teenagers from Outer Space", "Eegah", "Santa Claus Conquers the Martians"], 0, "Movie Stills", "Still from Charade (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Audrey_Hepburn_in_Charade_5.jpg", "Cary Grant and Audrey Hepburn starred in this 1963 Paris thriller, often called the best Hitchcock film Hitchcock never made."),
  pic("assets/still-charade-2.jpg", "This still is from which classic film?", ["Manos: The Hands of Fate", "Carnival of Souls", "Dementia 13", "Charade"], 3, "Movie Stills", "Still from Charade (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Cary_Grant_and_Audrey_Hepburn_in_Charade_3.jpg", "Cary Grant and Audrey Hepburn starred in this 1963 Paris thriller, often called the best Hitchcock film Hitchcock never made."),
  pic("assets/still-charade-4.jpg", "This still is from which classic film?", ["House on Haunted Hill", "Charade", "The Brain That Wouldn't Die", "The Giant Gila Monster"], 1, "Movie Stills", "Still from Charade (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Charade_1963_Audrey_Hepburn_and_Cary_Grant.jpg", "Cary Grant and Audrey Hepburn starred in this 1963 Paris thriller, often called the best Hitchcock film Hitchcock never made."),
  pic("assets/still-its-a-wonderful-life-1.jpg", "This still is from which classic film?", ["It's a Wonderful Life", "The Terror of Tiny Town", "The Gold Rush", "Sherlock Jr."], 0, "Movie Stills", "Still from It's a Wonderful Life (1946), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:It%27s_a_Wonderful_Life_-_George_with_Mary_and_Violet.jpg", "Frank Capra's 1946 Christmas classic, starring James Stewart as George Bailey."),
  pic("assets/still-its-a-wonderful-life-2.jpg", "This still is from which classic film?", ["Reefer Madness", "The General", "The Circus", "It's a Wonderful Life"], 3, "Movie Stills", "Still from It's a Wonderful Life (1946), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Donna_Reed_and_James_Stewart.jpg", "Frank Capra's 1946 Christmas classic, starring James Stewart as George Bailey."),
  pic("assets/still-its-a-wonderful-life-3.jpg", "This still is from which classic film?", ["The Terror of Tiny Town", "Safety Last!", "It's a Wonderful Life", "The Freshman"], 2, "Movie Stills", "Still from It's a Wonderful Life (1946), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Guardian_angel_clarence.jpg", "Frank Capra's 1946 Christmas classic, starring James Stewart as George Bailey.")
);
PICS.medium.push(
  pic("assets/still-sherlock-jr-2.jpg", "This still is from which classic film?", ["Faust", "Sherlock Jr.", "Greed", "Intolerance"], 1, "Movie Stills", "Still from Sherlock Jr. (1924), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sherlock_Jr_(1924)_-_1.jpg", "Buster Keaton plays a projectionist who dreams himself into a film in this 1924 comedy."),
  pic("assets/still-sherlock-jr-3.jpg", "This still is from which classic film?", ["Sherlock Jr.", "Broken Blossoms", "Way Down East", "The Mark of Zorro"], 0, "Movie Stills", "Still from Sherlock Jr. (1924), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sherlock_Jr_(1924)_-_2.jpg", "Buster Keaton plays a projectionist who dreams himself into a film in this 1924 comedy."),
  pic("assets/still-sherlock-jr-4.jpg", "This still is from which classic film?", ["Orphans of the Storm", "Robin Hood", "The Black Pirate", "Sherlock Jr."], 3, "Movie Stills", "Still from Sherlock Jr. (1924), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sherlock_Jr_(1924)_-_3.jpg", "Buster Keaton plays a projectionist who dreams himself into a film in this 1924 comedy."),
  pic("assets/still-the-circus-2.jpg", "This still is from which classic film?", ["Man with a Movie Camera", "The Circus", "Faust", "Greed"], 1, "Movie Stills", "Still from The Circus (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:60circusmonkey1.jpg", "Chaplin won an honorary Oscar for this 1928 circus comedy."),
  pic("assets/still-the-circus-3.jpg", "This still is from which classic film?", ["The Circus", "Häxan", "Broken Blossoms", "Way Down East"], 0, "Movie Stills", "Still from The Circus (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Charlie_Chaplin_in_The_Circus.jpg", "Chaplin won an honorary Oscar for this 1928 circus comedy."),
  pic("assets/still-the-freshman-1.jpg", "This still is from which classic film?", ["The Broadway Melody", "Un Chien Andalou", "The Freshman", "Häxan"], 2, "Movie Stills", "Still from The Freshman (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Freshie.jpg", "Harold Lloyd plays a college hopeful in this 1925 hit, famous for its football finale."),
  pic("assets/still-the-freshman-2.jpg", "This still is from which classic film?", ["Faust", "The Freshman", "Greed", "Intolerance"], 1, "Movie Stills", "Still from The Freshman (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Freshman_(1925)_1.png", "Harold Lloyd plays a college hopeful in this 1925 hit, famous for its football finale."),
  pic("assets/still-the-freshman-3.jpg", "This still is from which classic film?", ["The Freshman", "Broken Blossoms", "Way Down East", "The Mark of Zorro"], 0, "Movie Stills", "Still from The Freshman (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Freshman_(1925)_2.png", "Harold Lloyd plays a college hopeful in this 1925 hit, famous for its football finale."),
  pic("assets/still-the-freshman-4.jpg", "This still is from which classic film?", ["Orphans of the Storm", "Robin Hood", "The Black Pirate", "The Freshman"], 3, "Movie Stills", "Still from The Freshman (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Freshman_(1925)_3.png", "Harold Lloyd plays a college hopeful in this 1925 hit, famous for its football finale."),
  pic("assets/still-wings-1.jpg", "This still is from which classic film?", ["The Freshman", "The Phantom of the Opera", "Wings", "Ben-Hur"], 2, "Movie Stills", "Still from Wings (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:1927_Wings_Dogfight_1-35-49.png", "Wings (1927) won the first Academy Award for Best Picture."),
  pic("assets/still-wings-2.jpg", "This still is from which classic film?", ["The Hunchback of Notre Dame", "Wings", "The Big Parade", "The Broadway Melody"], 1, "Movie Stills", "Still from Wings (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Clara_Bow_in_%22Wings%22_(1927).png", "Wings (1927) won the first Academy Award for Best Picture."),
  pic("assets/still-wings-3.jpg", "This still is from which classic film?", ["Wings", "The Jazz Singer", "Man with a Movie Camera", "Faust"], 0, "Movie Stills", "Still from Wings (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Wings_(1927)_-_gay_kiss.jpg", "Wings (1927) won the first Academy Award for Best Picture."),
  pic("assets/still-wings-4.jpg", "This still is from which classic film?", ["Un Chien Andalou", "Häxan", "Broken Blossoms", "Wings"], 3, "Movie Stills", "Still from Wings (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Richard_Arlen_in_Wings_trailer.jpg", "Wings (1927) won the first Academy Award for Best Picture."),
  pic("assets/still-the-broadway-melody-2.jpg", "This still is from which classic film?", ["The Mark of Zorro", "The Broadway Melody", "The Thief of Bagdad", "It"], 1, "Movie Stills", "Still from The Broadway Melody (1929), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Broadway_Melody_(SAYRE_21522).jpg", "The Broadway Melody (1929) won the second Academy Award for Best Picture."),
  pic("assets/still-the-broadway-melody-4.jpg", "This still is from which classic film?", ["The Wind", "The Gold Rush", "Safety Last!", "The Broadway Melody"], 3, "Movie Stills", "Still from The Broadway Melody (1929), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Bessie_Love_in_The_Broadway_Melody.jpg", "The Broadway Melody (1929) won the second Academy Award for Best Picture."),
  pic("assets/still-man-with-a-movie-camera-1.jpg", "This still is from which classic film?", ["Robin Hood", "The Black Pirate", "Man with a Movie Camera", "The Crowd"], 2, "Movie Stills", "Still from Man with a Movie Camera (1929), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Man_with_a_movie_camera_1929_1.png", "Dziga Vertov's 1929 documentary experiments with every camera trick of its time."),
  pic("assets/still-man-with-a-movie-camera-2.jpg", "This still is from which classic film?", ["It", "Man with a Movie Camera", "The Wind", "The Gold Rush"], 1, "Movie Stills", "Still from Man with a Movie Camera (1929), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Man_with_a_movie_camera_1929_2.png", "Dziga Vertov's 1929 documentary experiments with every camera trick of its time."),
  pic("assets/still-man-with-a-movie-camera-4.jpg", "This still is from which classic film?", ["Safety Last!", "The Circus", "Metropolis", "Man with a Movie Camera"], 3, "Movie Stills", "Still from Man with a Movie Camera (1929), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Man_with_a_Movie_Camera_by_Dziga_Vertov.jpg", "Dziga Vertov's 1929 documentary experiments with every camera trick of its time."),
  pic("assets/still-broken-blossoms-1.jpg", "This still is from which classic film?", ["Un Chien Andalou", "Häxan", "Intolerance", "Broken Blossoms"], 3, "Movie Stills", "Still from Broken Blossoms (1919), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:1919_-_Hippodrome_Theater_-_10_Nov_MC_-_Allentown_PA.jpg", "D. W. Griffith directed Lillian Gish in this 1919 London-set melodrama."),
  pic("assets/still-broken-blossoms-2.jpg", "This still is from which classic film?", ["Greed", "Way Down East", "Broken Blossoms", "The Mark of Zorro"], 2, "Movie Stills", "Still from Broken Blossoms (1919), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Gish_and_Barthelmess_Broken_Blossoms.jpg", "D. W. Griffith directed Lillian Gish in this 1919 London-set melodrama."),
  pic("assets/still-broken-blossoms-3.jpg", "This still is from which classic film?", ["Orphans of the Storm", "Broken Blossoms", "Robin Hood", "The Black Pirate"], 1, "Movie Stills", "Still from Broken Blossoms (1919), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Broken_Blossoms_(1919)_-_1.jpg", "D. W. Griffith directed Lillian Gish in this 1919 London-set melodrama."),
  pic("assets/still-intolerance-3.jpg", "This still is from which classic film?", ["Häxan", "Intolerance", "Broken Blossoms", "Orphans of the Storm"], 1, "Movie Stills", "Still from Intolerance (1916), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Intolerance_(1916)_-_Admits_to_Killing.jpg", "Griffith's 1916 epic weaves four stories of intolerance across history, with enormous Babylon sets."),
  pic("assets/still-intolerance-4.jpg", "This still is from which classic film?", ["Intolerance", "Way Down East", "The Mark of Zorro", "The Thief of Bagdad"], 0, "Movie Stills", "Still from Intolerance (1916), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Intolerance_(1916)_-_Babylon_Women_6.jpg", "Griffith's 1916 epic weaves four stories of intolerance across history, with enormous Babylon sets."),
  pic("assets/still-the-mark-of-zorro-2.jpg", "This still is from which classic film?", ["Intolerance", "Orphans of the Storm", "The Mark of Zorro", "The Thief of Bagdad"], 2, "Movie Stills", "Still from The Mark of Zorro (1920), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:FairbanksMarkofZorro.jpg", "Douglas Fairbanks defined the swashbuckler in this 1920 adventure, the first Zorro film."),
  pic("assets/still-the-mark-of-zorro-3.jpg", "This still is from which classic film?", ["Robin Hood", "The Mark of Zorro", "The Black Pirate", "The Crowd"], 1, "Movie Stills", "Still from The Mark of Zorro (1920), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Mark_of_Zorro_(1920)_-_1.jpg", "Douglas Fairbanks defined the swashbuckler in this 1920 adventure, the first Zorro film."),
  pic("assets/still-the-mark-of-zorro-4.jpg", "This still is from which classic film?", ["The Mark of Zorro", "It", "The Wind", "The Gold Rush"], 0, "Movie Stills", "Still from The Mark of Zorro (1920), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Mark_of_Zorro_(1920)_-_2.jpg", "Douglas Fairbanks defined the swashbuckler in this 1920 adventure, the first Zorro film."),
  pic("assets/still-the-thief-of-bagdad-2.jpg", "This still is from which classic film?", ["Orphans of the Storm", "Robin Hood", "The Thief of Bagdad", "It"], 2, "Movie Stills", "Still from The Thief of Bagdad (1924), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:California_-_Hollywood_-_NARA_-_23934377.jpg", "Fairbanks's 1924 fantasy adventure is famous for its flying carpet and giant sets."),
  pic("assets/still-the-crowd-2.jpg", "This still is from which classic film?", ["The Jazz Singer", "Man with a Movie Camera", "Faust", "The Crowd"], 3, "Movie Stills", "Still from The Crowd (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Crowd_(SAYRE_14822).jpg", "King Vidor's 1928 drama follows an ordinary clerk's life in New York City."),
  pic("assets/still-the-crowd-3.jpg", "This still is from which classic film?", ["Un Chien Andalou", "Häxan", "The Crowd", "Broken Blossoms"], 2, "Movie Stills", "Still from The Crowd (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Eleanor_Boardman_and_James_Murray_in_The_Crowd.jpg", "King Vidor's 1928 drama follows an ordinary clerk's life in New York City."),
  pic("assets/still-the-crowd-4.jpg", "This still is from which classic film?", ["Greed", "The Crowd", "Intolerance", "Orphans of the Storm"], 1, "Movie Stills", "Still from The Crowd (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Film_still_from_The_Crowd_(1928)_-_fairground.jpg", "King Vidor's 1928 drama follows an ordinary clerk's life in New York City."),
  pic("assets/still-sunrise-a-song-of-two-humans-1.jpg", "This still is from which classic film?", ["Sunrise: A Song of Two Humans", "The Wind", "The General", "Sherlock Jr."], 0, "Movie Stills", "Still from Sunrise: A Song of Two Humans (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Aurora_1927.png", "Murnau's 1927 film won at the first Academy Awards for its artistic quality."),
  pic("assets/still-sunrise-a-song-of-two-humans-2.jpg", "This still is from which classic film?", ["Safety Last!", "The Circus", "Metropolis", "Sunrise: A Song of Two Humans"], 3, "Movie Stills", "Still from Sunrise: A Song of Two Humans (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:George_O%27Brien_and_Margaret_Livingston_in_Sunrise.jpeg", "Murnau's 1927 film won at the first Academy Awards for its artistic quality."),
  pic("assets/still-sunrise-a-song-of-two-humans-3.jpg", "This still is from which classic film?", ["The Freshman", "The Phantom of the Opera", "Sunrise: A Song of Two Humans", "Ben-Hur"], 2, "Movie Stills", "Still from Sunrise: A Song of Two Humans (1927), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Janet_Gaynor_-_Sunrise_(1927).jpg", "Murnau's 1927 film won at the first Academy Awards for its artistic quality."),
  pic("assets/still-carnival-of-souls-1.jpg", "This still is from which classic horror film?", ["Carnival of Souls", "House on Haunted Hill", "The Brain That Wouldn't Die", "The Little Shop of Horrors"], 0, "Movie Stills", "Still from Carnival of Souls (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Art_Ellison.jpg", "Herk Harvey's low-budget 1962 horror film became a major cult classic."),
  pic("assets/still-carnival-of-souls-2.jpg", "This still is from which classic horror film?", ["Eegah", "Dementia 13", "House on Haunted Hill", "Carnival of Souls"], 3, "Movie Stills", "Still from Carnival of Souls (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Candace_Hilligoss_-_Carnival_of_Souls.jpg", "Herk Harvey's low-budget 1962 horror film became a major cult classic."),
  pic("assets/still-carnival-of-souls-3.jpg", "This still is from which classic horror film?", ["The Terror", "The Last Man on Earth", "Carnival of Souls", "Eegah"], 2, "Movie Stills", "Still from Carnival of Souls (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Carnival_of_Souls_-_Candace_Hilligoss_profile.jpg", "Herk Harvey's low-budget 1962 horror film became a major cult classic."),
  pic("assets/still-carnival-of-souls-4.jpg", "This still is from which classic horror film?", ["The Brain That Wouldn't Die", "Carnival of Souls", "The Little Shop of Horrors", "The Terror"], 1, "Movie Stills", "Still from Carnival of Souls (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:COS_00.JPG", "Herk Harvey's low-budget 1962 horror film became a major cult classic."),
  pic("assets/still-the-little-shop-of-horrors-1.jpg", "This still is from which classic horror film?", ["The Little Shop of Horrors", "The Brain That Wouldn't Die", "Carnival of Souls", "The Terror"], 0, "Movie Stills", "Still from The Little Shop of Horrors (1960), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Jackie_Joseph_as_Audrey_Fulquard_crop.png", "Roger Corman shot this 1960 horror-comedy in just two days; it later became a hit musical."),
  pic("assets/still-the-little-shop-of-horrors-2.jpg", "This still is from which classic horror film?", ["Dementia 13", "House on Haunted Hill", "The Brain That Wouldn't Die", "The Little Shop of Horrors"], 3, "Movie Stills", "Still from The Little Shop of Horrors (1960), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Jackie_Joseph_as_Audrey_Fulquard.png", "Roger Corman shot this 1960 horror-comedy in just two days; it later became a hit musical."),
  pic("assets/still-the-little-shop-of-horrors-3.jpg", "This still is from which classic horror film?", ["The Last Man on Earth", "Eegah", "The Little Shop of Horrors", "Dementia 13"], 2, "Movie Stills", "Still from The Little Shop of Horrors (1960), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Jonathan_Haze_as_Seymour_Krelboyne.png", "Roger Corman shot this 1960 horror-comedy in just two days; it later became a hit musical."),
  pic("assets/still-the-little-shop-of-horrors-4.jpg", "This still is from which classic horror film?", ["Carnival of Souls", "The Little Shop of Horrors", "The Terror", "The Last Man on Earth"], 1, "Movie Stills", "Still from The Little Shop of Horrors (1960), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Little_Shop_of_Horrors_cast.JPG", "Roger Corman shot this 1960 horror-comedy in just two days; it later became a hit musical."),
  pic("assets/still-house-on-haunted-hill-2.jpg", "This still is from which classic horror film?", ["The Terror", "The Brain That Wouldn't Die", "Carnival of Souls", "House on Haunted Hill"], 3, "Movie Stills", "Still from House on Haunted Hill (1959), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Elisha_Cook_(House_on_Haunted_Hill)_1.JPG", "Vincent Price starred in William Castle's 1959 haunted-house shocker, famous for its 'Emergo' skeleton gag.")
);
PICS.hard.push(
  pic("assets/still-the-hunchback-of-notre-dame-4.jpg", "This still is from which classic horror film?", ["Metropolis", "Ben-Hur", "Wings", "The Hunchback of Notre Dame"], 3, "Movie Stills", "Still from The Hunchback of Notre Dame (1923), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Hunchback_-Notre_Dame_1923.jpg", "Lon Chaney starred as Quasimodo in this 1923 adaptation of Victor Hugo's novel."),
  pic("assets/still-ben-hur-2.jpg", "This still is from which classic film?", ["The Ten Commandments", "Ben-Hur", "Spartacus", "Quo Vadis"], 1, "Movie Stills", "Still from the trailer of Ben-Hur (1959), public domain trailer footage, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Cuadrigas_de_Ben_Hur_(1959).jpg", "The 1959 Ben-Hur won 11 Academy Awards; its chariot race is one of the most famous sequences in film history."),
  pic("assets/still-ben-hur-4.jpg", "This still is from which classic film?", ["The Ten Commandments", "Spartacus", "Quo Vadis", "Ben-Hur"], 3, "Movie Stills", "Still from the trailer of Ben-Hur (1959), public domain trailer footage, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haya_Harareet_in_Ben_Hur_trailer.jpg", "The 1959 Ben-Hur won 11 Academy Awards; its chariot race is one of the most famous sequences in film history."),
  pic("assets/still-the-big-parade-2.jpg", "This still is from which classic film?", ["Greed", "The Big Parade", "Intolerance", "Orphans of the Storm"], 1, "Movie Stills", "Still from The Big Parade (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:John_Gilbert_in_The_Big_Parade.jpg", "King Vidor's 1925 war film was the highest-grossing silent movie of its era."),
  pic("assets/still-the-big-parade-3.jpg", "This still is from which classic film?", ["The Big Parade", "Way Down East", "The Mark of Zorro", "The Thief of Bagdad"], 0, "Movie Stills", "Still from The Big Parade (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:John_Gilbert,_star_of_The_Big_Parade.jpg", "King Vidor's 1925 war film was the highest-grossing silent movie of its era."),
  pic("assets/still-the-big-parade-4.jpg", "This still is from which classic film?", ["Robin Hood", "The Black Pirate", "The Crowd", "The Big Parade"], 3, "Movie Stills", "Still from The Big Parade (1925), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Big_Parade_(1925_film)._Directed_by_King_Vidor,_M-G-M_studios.jpg", "King Vidor's 1925 war film was the highest-grossing silent movie of its era."),
  pic("assets/still-faust-1.jpg", "This still is from which classic film?", ["The Freshman", "The Phantom of the Opera", "Ben-Hur", "Faust"], 3, "Movie Stills", "Still from Faust (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Faust_(1926)_-_1.jpg", "Murnau's 1926 Faust adapts the German legend of the scholar who bargains with Mephisto."),
  pic("assets/still-faust-2.jpg", "This still is from which classic film?", ["The Hunchback of Notre Dame", "The Big Parade", "Faust", "The Jazz Singer"], 2, "Movie Stills", "Still from Faust (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Film,_SFA022827628.jpg", "Murnau's 1926 Faust adapts the German legend of the scholar who bargains with Mephisto."),
  pic("assets/still-faust-3.jpg", "This still is from which classic film?", ["Wings", "Faust", "The Broadway Melody", "Un Chien Andalou"], 1, "Movie Stills", "Still from Faust (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Film,_SFA022827629.jpg", "Murnau's 1926 Faust adapts the German legend of the scholar who bargains with Mephisto."),
  pic("assets/still-faust-4.jpg", "This still is from which classic film?", ["Faust", "Man with a Movie Camera", "Häxan", "Broken Blossoms"], 0, "Movie Stills", "Still from Faust (1926), CC0, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:G%C3%B6sta_Ekman_Senior_in_Faust_(1926).jpg", "Murnau's 1926 Faust adapts the German legend of the scholar who bargains with Mephisto."),
  pic("assets/still-h-xan-1.jpg", "This still is from which classic horror film?", ["The Freshman", "The Phantom of the Opera", "Ben-Hur", "Häxan"], 3, "Movie Stills", "Still from Häxan (1922), CC0, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:H%C3%A4xan_(1922_film)_-_Benjamin_Christensen_as_Satan_(cropped).jpg", "This 1922 Swedish film mixes documentary and dramatised scenes about witchcraft through history."),
  pic("assets/still-h-xan-2.jpg", "This still is from which classic horror film?", ["The Hunchback of Notre Dame", "The Big Parade", "Häxan", "The Jazz Singer"], 2, "Movie Stills", "Still from Häxan (1922), CC0, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:H%C3%A4xan_(1922_film)_-_A_nun_possessed.jpg", "This 1922 Swedish film mixes documentary and dramatised scenes about witchcraft through history."),
  pic("assets/still-h-xan-3.jpg", "This still is from which classic horror film?", ["Wings", "Häxan", "The Broadway Melody", "Un Chien Andalou"], 1, "Movie Stills", "Still from Häxan (1922), CC0, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:H%C3%A4xan_(1922_film)_-_A_woman_pleading_for_help.jpg", "This 1922 Swedish film mixes documentary and dramatised scenes about witchcraft through history."),
  pic("assets/still-h-xan-4.jpg", "This still is from which classic horror film?", ["Häxan", "Man with a Movie Camera", "Faust", "Broken Blossoms"], 0, "Movie Stills", "Still from Häxan (1922), CC0, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:H%C3%A4xan_(1922_film)_-_Accused_of_witchcraft.jpg", "This 1922 Swedish film mixes documentary and dramatised scenes about witchcraft through history."),
  pic("assets/still-way-down-east-1.jpg", "This still is from which classic film?", ["The Broadway Melody", "Un Chien Andalou", "Häxan", "Way Down East"], 3, "Movie Stills", "Still from Way Down East (1920), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Emily_Fitzroy_in_Way_Down_East_(1920).jpg", "Griffith's 1920 melodrama climaxes with a rescue on an ice floe, shot in a real blizzard."),
  pic("assets/still-way-down-east-2.jpg", "This still is from which classic film?", ["Faust", "Greed", "Way Down East", "Intolerance"], 2, "Movie Stills", "Still from Way Down East (1920), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Florence_Short_in_Way_Down_East_(1920).png", "Griffith's 1920 melodrama climaxes with a rescue on an ice floe, shot in a real blizzard."),
  pic("assets/still-way-down-east-3.jpg", "This still is from which classic film?", ["Broken Blossoms", "Way Down East", "Orphans of the Storm", "Robin Hood"], 1, "Movie Stills", "Still from Way Down East (1920), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:D._W._Griffith_presents_way_down_east_LCCN2015645291.jpg", "Griffith's 1920 melodrama climaxes with a rescue on an ice floe, shot in a real blizzard."),
  pic("assets/still-orphans-of-the-storm-1.jpg", "This still is from which classic film?", ["Intolerance", "The Mark of Zorro", "The Thief of Bagdad", "Orphans of the Storm"], 3, "Movie Stills", "Still from Orphans of the Storm (1921), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Frances_Robinson_in_Orphans_of_the_Storm.jpg", "Griffith's 1921 epic, starring the Gish sisters, is set during the French Revolution."),
  pic("assets/still-orphans-of-the-storm-3.jpg", "This still is from which classic film?", ["It", "Orphans of the Storm", "The Wind", "The Gold Rush"], 1, "Movie Stills", "Still from Orphans of the Storm (1921), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Gish-dorothy-lillian-LOC.jpg", "Griffith's 1921 epic, starring the Gish sisters, is set during the French Revolution."),
  pic("assets/still-orphans-of-the-storm-4.jpg", "This still is from which classic film?", ["Orphans of the Storm", "Sunrise: A Song of Two Humans", "The General", "Sherlock Jr."], 0, "Movie Stills", "Still from Orphans of the Storm (1921), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Lillian_Gish_and_Dorothy_Gish_in_Orphans_of_the_Storm.jpg", "Griffith's 1921 epic, starring the Gish sisters, is set during the French Revolution."),
  pic("assets/still-the-black-pirate-4.jpg", "This still is from which classic film?", ["The Black Pirate", "The Thief of Bagdad", "The Crowd", "Sunrise: A Song of Two Humans"], 0, "Movie Stills", "Still from The Black Pirate (1926), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Black_Pirate_(1926)_Michel_and_his_Father.jpg", "Fairbanks's 1926 pirate adventure was filmed in early two-colour Technicolor."),
  pic("assets/still-the-wind-1.jpg", "This still is from which classic film?", ["The Wind", "The Hunchback of Notre Dame", "The Big Parade", "The Jazz Singer"], 0, "Movie Stills", "Still from The Wind (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Lillian_Gish_in_The_Wind_(1928).jpg", "Lillian Gish starred in this 1928 drama of isolation on the Texas prairie."),
  pic("assets/still-the-wind-4.jpg", "This still is from which classic film?", ["Häxan", "The Wind", "Broken Blossoms", "Way Down East"], 1, "Movie Stills", "Still from The Wind (1928), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Lillian_Gish_and_others_in_The_Wind.jpg", "Lillian Gish starred in this 1928 drama of isolation on the Texas prairie."),
  pic("assets/still-dementia-13-1.jpg", "This still is from which classic horror film?", ["Dementia 13", "The Last Man on Earth", "Eegah", "The Little Shop of Horrors"], 0, "Movie Stills", "Still from Dementia 13 (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Luana_Anders_in_Dementia_13.jpg", "Francis Ford Coppola's first mainstream film, a 1963 horror picture produced by Roger Corman."),
  pic("assets/still-dementia-13-2.jpg", "This still is from which classic horror film?", ["Carnival of Souls", "The Terror", "The Last Man on Earth", "Dementia 13"], 3, "Movie Stills", "Still from Dementia 13 (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Dementia13.jpg", "Francis Ford Coppola's first mainstream film, a 1963 horror picture produced by Roger Corman."),
  pic("assets/still-dementia-13-3.jpg", "This still is from which classic horror film?", ["House on Haunted Hill", "The Brain That Wouldn't Die", "Dementia 13", "Carnival of Souls"], 2, "Movie Stills", "Still from Dementia 13 (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Patrick_Magee,_Dementia_13,_1963.jpg", "Francis Ford Coppola's first mainstream film, a 1963 horror picture produced by Roger Corman."),
  pic("assets/still-dementia-13-4.jpg", "This still is from which classic horror film?", ["Eegah", "Dementia 13", "The Little Shop of Horrors", "House on Haunted Hill"], 1, "Movie Stills", "Still from Dementia 13 (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Luana-anders-trailer.jpg", "Francis Ford Coppola's first mainstream film, a 1963 horror picture produced by Roger Corman."),
  pic("assets/still-the-terror-2.jpg", "This still is from which classic horror film?", ["Eegah", "The Little Shop of Horrors", "House on Haunted Hill", "The Terror"], 3, "Movie Stills", "Still from The Terror (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sandra_Knight_in_The_Terror_(1963).jpg", "This 1963 Corman horror film features Boris Karloff and a young Jack Nicholson."),
  pic("assets/still-the-terror-4.jpg", "This still is from which classic horror film?", ["The Brain That Wouldn't Die", "The Terror", "Carnival of Souls", "Dementia 13"], 1, "Movie Stills", "Still from The Terror (1963), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sandra_Knight_in_The_Terror_(1963).jpg", "This 1963 Corman horror film features Boris Karloff and a young Jack Nicholson."),
  pic("assets/still-the-brain-that-wouldnt-die-2.jpg", "This still is from which classic horror film?", ["Dementia 13", "House on Haunted Hill", "Eegah", "The Brain That Wouldn't Die"], 3, "Movie Stills", "Still from The Brain That Wouldn't Die (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Brainthatwouldntdie.jpg", "This 1962 horror film, about a kept-alive head, became a Mystery Science Theater 3000 favourite."),
  pic("assets/still-the-brain-that-wouldnt-die-3.jpg", "This still is from which classic horror film?", ["The Last Man on Earth", "Carnival of Souls", "The Brain That Wouldn't Die", "Dementia 13"], 2, "Movie Stills", "Still from The Brain That Wouldn't Die (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Marilyn_Hanold_as_Peggy_Howard.png", "This 1962 horror film, about a kept-alive head, became a Mystery Science Theater 3000 favourite."),
  pic("assets/still-eegah-3.jpg", "This still is from which classic horror film?", ["House on Haunted Hill", "The Brain That Wouldn't Die", "The Little Shop of Horrors", "Eegah"], 3, "Movie Stills", "Still from Eegah (1962), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Eegah-ArchHallSr.jpg", "This 1962 film features Richard Kiel as a prehistoric caveman found in the California desert."),
  pic("assets/still-reefer-madness-1.jpg", "This still is from which classic film?", ["It's a Wonderful Life", "Reefer Madness", "The Gold Rush", "Sherlock Jr."], 1, "Movie Stills", "Still from Reefer Madness (1936), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Dorothy_Short_as_Mary_Lane.png", "This 1936 cautionary melodrama about marijuana became a camp classic decades later."),
  pic("assets/still-reefer-madness-2.jpg", "This still is from which classic film?", ["Reefer Madness", "The Terror of Tiny Town", "The General", "The Circus"], 0, "Movie Stills", "Still from Reefer Madness (1936), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Lillian_Miles_as_Blanche.png", "This 1936 cautionary melodrama about marijuana became a camp classic decades later."),
  pic("assets/still-reefer-madness-3.jpg", "This still is from which classic film?", ["It's a Wonderful Life", "Safety Last!", "The Freshman", "Reefer Madness"], 3, "Movie Stills", "Still from Reefer Madness (1936), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Reefer_Madness_(1936).jpg", "This 1936 cautionary melodrama about marijuana became a camp classic decades later."),
  pic("assets/still-reefer-madness-4.jpg", "This still is from which classic film?", ["The Terror of Tiny Town", "Sherlock Jr.", "Reefer Madness", "Metropolis"], 2, "Movie Stills", "Still from Reefer Madness (1936), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Reefer_Madness_03.jpg", "This 1936 cautionary melodrama about marijuana became a camp classic decades later."),
  pic("assets/still-the-terror-of-tiny-town-1.jpg", "This still is from which classic film?", ["Reefer Madness", "The Terror of Tiny Town", "The Gold Rush", "Sherlock Jr."], 1, "Movie Stills", "Still from The Terror of Tiny Town (1938), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Billy_Curtis_-_The_Terror_of_Tiny_Town_(1938)_still_1_(cropped).jpg", "A 1938 musical Western performed by an all-little-people cast."),
  pic("assets/still-the-terror-of-tiny-town-2.jpg", "This still is from which classic film?", ["The Terror of Tiny Town", "It's a Wonderful Life", "The General", "The Circus"], 0, "Movie Stills", "Still from The Terror of Tiny Town (1938), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:The_Terror_of_Tiny_Town_(1938)_still_1.jpg", "A 1938 musical Western performed by an all-little-people cast.")
);
PICS.vhard.push(
  pic("assets/still-teenagers-from-outer-space-2.jpg", "This still is from which classic film?", ["Teenagers from Outer Space", "House on Haunted Hill", "The Brain That Wouldn't Die", "Eegah"], 0, "Movie Stills", "Still from Teenagers from Outer Space (1959), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Dawn_Bender_-_Teenagers_from_Outer_Space.png", "A 1959 low-budget sci-fi film, famous for its lobster-like Gargon monster."),
  pic("assets/still-the-giant-gila-monster-1.jpg", "This still is from which classic film?", ["Manos: The Hands of Fate", "The Giant Gila Monster", "Charade", "The Little Shop of Horrors"], 1, "Movie Stills", "Still from The Giant Gila Monster (1959), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Fred_Graham_in_The_Giant_Gila_Monster_(2).jpg", "A 1959 drive-in creature feature about a giant lizard terrorising a Texas town."),
  pic("assets/still-the-giant-gila-monster-2.jpg", "This still is from which classic film?", ["The Giant Gila Monster", "Carnival of Souls", "Dementia 13", "House on Haunted Hill"], 0, "Movie Stills", "Still from The Giant Gila Monster (1959), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Fred_Graham_in_The_Giant_Gila_Monster_(cropped).jpg", "A 1959 drive-in creature feature about a giant lizard terrorising a Texas town."),
  pic("assets/still-the-giant-gila-monster-3.jpg", "This still is from which classic film?", ["The Terror", "The Last Man on Earth", "Teenagers from Outer Space", "The Giant Gila Monster"], 3, "Movie Stills", "Still from The Giant Gila Monster (1959), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Fred_Graham_in_The_Giant_Gila_Monster.jpg", "A 1959 drive-in creature feature about a giant lizard terrorising a Texas town."),
  pic("assets/still-manos-the-hands-of-fate-1.jpg", "This still is from which classic film?", ["Charade", "Manos: The Hands of Fate", "The Little Shop of Horrors", "The Terror"], 1, "Movie Stills", "Still from Manos: The Hands of Fate (1966), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Diane_Mahree_and_Jackey_Neyman.jpg", "A 1966 amateur horror film, made in El Paso, Texas, often called one of the worst films ever made."),
  pic("assets/still-manos-the-hands-of-fate-2.jpg", "This still is from which classic film?", ["Manos: The Hands of Fate", "Dementia 13", "House on Haunted Hill", "The Brain That Wouldn't Die"], 0, "Movie Stills", "Still from Manos: The Hands of Fate (1966), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Harold_P._Warren_and_Diane_Mahree.jpg", "A 1966 amateur horror film, made in El Paso, Texas, often called one of the worst films ever made."),
  pic("assets/still-manos-the-hands-of-fate-3.jpg", "This still is from which classic film?", ["The Last Man on Earth", "Teenagers from Outer Space", "Eegah", "Manos: The Hands of Fate"], 3, "Movie Stills", "Still from Manos: The Hands of Fate (1966), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Harold_P._Warren_in_1966.png", "A 1966 amateur horror film, made in El Paso, Texas, often called one of the worst films ever made."),
  pic("assets/still-manos-the-hands-of-fate-4.jpg", "This still is from which classic film?", ["The Giant Gila Monster", "Santa Claus Conquers the Martians", "Manos: The Hands of Fate", "Carnival of Souls"], 2, "Movie Stills", "Still from Manos: The Hands of Fate (1966), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:John_Reynolds_(9x11_cropped).png", "A 1966 amateur horror film, made in El Paso, Texas, often called one of the worst films ever made."),
  pic("assets/still-santa-claus-conquers-the-martians-1.jpg", "This still is from which classic film?", ["The Giant Gila Monster", "Manos: The Hands of Fate", "Carnival of Souls", "Santa Claus Conquers the Martians"], 3, "Movie Stills", "Still from Santa Claus Conquers the Martians (1964), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Santa_Claus_Conquers_the_Martians_1.jpg", "A 1964 children's film in which Martians kidnap Santa; a perennial 'worst films' list entry."),
  pic("assets/still-santa-claus-conquers-the-martians-2.jpg", "This still is from which classic film?", ["Charade", "The Little Shop of Horrors", "Santa Claus Conquers the Martians", "The Terror"], 2, "Movie Stills", "Still from Santa Claus Conquers the Martians (1964), public domain film, via Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Santa_Claus_Conquers_the_Martians_2.jpg", "A 1964 children's film in which Martians kidnap Santa; a perennial 'worst films' list entry.")
);
/* ==== end 2026-11-09 expansion ==== */
var NEW_ALL = NEWCAT.law.concat(NEWCAT.chemistry, NEWCAT.periodic, NEWCAT.science, NEWCAT.medical, NEWCAT.popculture, NEWCAT.music, NEWBANKS.advertising, NEWBANKS.marketing, NEWBANKS.riddles, NEWBANKS.sports, NEWBANKS.history, NEWBANKS.hawaii, NEWBANKS.canada);

/* ================= ANSWER-KIND RULE — TYPE, GENDER, SUBJECT =================
   Every multiple-choice distractor in every pool must pass three
   tests against the correct answer at once:
   (1) TYPE — a date answer gets only dates, a number only numbers, a
       country only countries, a title only titles, a plain word only
       plain words. A decade among words (or a word among decades) is
       a giveaway by elimination — the "Alcatraz opened in" set that
       offered Clay / fathom / green against a decade answer is the
       failure this block exists to prevent.
   (2) GENDER — a person-name answer gets only person names of the
       same gender; a group / band / team gets only other groups.
       (This extends the picture-only gender rule to every text
       person question, via the NAME_GENDER / NAME_GROUP tables.)
   (3) SUBJECT — distractors must be plausible answers to the exact
       question: same domain and era. The builders below rank
       same-domain, same-category, and value-close candidates first,
       and the enforcement pass after the pools are assembled repairs
       any set that still fails, harvesting replacements from the
       same category before widening, and generating close in-domain
       alternatives (neighbouring decades, years, dates, numbers)
       when a pool runs short. Cross-kind filler is never used.
   (4) NARROW INDUSTRY — subject means the narrow subdomain, not the
       broad type: a delivery-company question gets only delivery
       companies (UPS / DHL / USPS next to FedEx — never a car maker,
       a cosmetics brand, or a rental firm, which would let a player
       win by elimination alone without knowing the slogan), a car
       brand only car brands, a cosmetics brand only cosmetics, an
       airline only airlines, a soft drink only soft drinks, and so
       on for every pool. The BRAND_INDUSTRY table and the industry
       enforcement pass below the DJ domain helper apply this test:
       known cross-industry choices are always replaced, a stem that
       names an industry ("which delivery company…") forces every
       choice into that industry, and a DJ question whose answer is
       a known brand is dealt only same-industry brands — with the
       verified INDUSTRY_POOLS lists supplying in-industry
       alternatives where a bank itself runs short. */
var MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"];
var SEASON_NAMES=["Spring","Summer","Autumn","Winter"];
var COLOR_NAMES=["Red","Blue","Green","Yellow","Orange","Purple","Pink","Brown","Black","White","Gray","Grey","Violet","Indigo","Turquoise","Magenta","Cyan","Beige","Maroon","Navy","Teal","Olive","Coral","Lavender","Crimson","Scarlet","Azure","Ivory","Tan","Peach","Mint","Burgundy","Charcoal","Amber"];
var NUMWORD_VAL={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100,thousand:1000,million:1000000,billion:1000000000,first:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12,dozen:12};
var QUANT_WORDS={none:1,last:1,unlimited:1,"it depends on population":1};
var NAME_GENDER={
"Isaac Newton":"m","Albert Einstein":"m","Thomas Edison":"m","Nikola Tesla":"m",
"George Washington":"m","Abraham Lincoln":"m","Theodore Roosevelt":"m","Andrew Jackson":"m",
"George W. Bush":"m","Barack Obama":"m","Bill Clinton":"m","Joe Biden":"m",
"Rosalind Franklin":"f","Marie Curie":"f","Ada Lovelace":"f","Florence Nightingale":"f",
"Amelia Earhart":"f","Bessie Coleman":"f","Harriet Quimby":"f","Valentina Tereshkova":"f",
"Desmond Tutu":"m","Nelson Mandela":"m","Kofi Annan":"m",
"Georgia O'Keeffe":"f","Frida Kahlo":"f","Yayoi Kusama":"f","Tamara de Lempicka":"f",
"Neville Chamberlain":"m","Clement Attlee":"m","Winston Churchill":"m","Anthony Eden":"m",
"Alexander Graham Bell":"m","Guglielmo Marconi":"m",
"Johann Sebastian Bach":"m","Wolfgang Amadeus Mozart":"m","Ludwig van Beethoven":"m","Franz Schubert":"m",
"Charles Dickens":"m","William Shakespeare":"m","Geoffrey Chaucer":"m","Christopher Marlowe":"m",
"LeAnn Rimes":"f","Faith Hill":"f","Trisha Yearwood":"f","Shania Twain":"f",
"Claude Monet":"m","Vincent van Gogh":"m","Paul Cézanne":"m","Pierre-Auguste Renoir":"m",
"Raphael":"m","Leonardo da Vinci":"m","Rembrandt":"m","Vermeer":"m",
"John F. Kennedy":"m","Lyndon B. Johnson":"m","Richard Nixon":"m","Dwight D. Eisenhower":"m",
"Mark Twain":"m","Edgar Allan Poe":"m","Walt Whitman":"m",
"Neil Armstrong":"m","Buzz Aldrin":"m","Yuri Gagarin":"m","Michael Collins":"m",
"Charles Darwin":"m","Gregor Mendel":"m","Alfred Russel Wallace":"m","Jean-Baptiste Lamarck":"m",
"Charlie Chaplin":"m","Buster Keaton":"m","Harold Lloyd":"m","Stan Laurel":"m",
"Helen Keller":"f","Clara Barton":"f","Susan B. Anthony":"f",
"Rosa Parks":"f","Claudette Colvin":"f","Harriet Tubman":"f","Sojourner Truth":"f",
"Jane Austen":"f","Charlotte Brontë":"f","Emily Brontë":"f","Anne Brontë":"f","Mary Shelley":"f",
"Tom Cruise":"m","Justin Timberlake":"m","Christopher Nolan":"m","Walt Frasier":"m",
"Cloris Leachman":"f","Vanna White":"f","Christina Hendricks":"f","Jason Clarke":"m",
"Jack Lew":"m","Meghan Trainor":"f","Don McLean":"m","Gary Sinise":"m",
"Wil Wheaton":"m","Tom Ridge":"m","Errol Flynn":"m","Kesha":"f","Tony Hawk":"m",
"Lou Ferrigno":"m","William Howard Taft":"m","Wilford Brimley":"m","Christian Bale":"m",
"Dana Perino":"f","Peter Frampton":"m","Al Capone":"m","Chuck Hagel":"m","Jon Hamm":"m",
"George Orwell":"m","John Glenn":"m","Morgan Fairchild":"f","Carl Sandburg":"m",
"Bruce Campbell":"m","Mariska Hargitay":"f","Helen Keller":"f","Jessica Chastain":"f",
"Robert Downey Jr":"m","Bobby Flay":"m","Dusty Hill":"m","Billy Gibbons":"m",
"Kerry Washington":"f","Sarah McLachlan":"f","Christopher Plummer":"m",
"Nicolaus Copernicus":"m","Francis Ford Coppola":"m","Rian Johnson":"m","JK Simmons":"m",
"Anson Williams":"m","James Gunn":"m","Brad Pitt":"m","Steven Tyler":"m",
"Thomas Paine":"m","Ryan Seacrest":"m","Peter Tork":"m","Robin Lord Taylor":"m",
"Julianne Hough":"f","Rutherford B. Hayes":"m","Monet":"m","Ben Kingsley":"m",
"Richard Blais":"m","Christina Ricci":"f","Jimmy Fallon":"m",
"Keith Richards":"m","Barry Sanders":"m","Daniel Craig":"m","Geoffrey Butler":"m",
"Eisenhower":"m","Owen Wilson":"m","Kurt Vonnegut, Jr.":"m","Kurt Vonnegut":"m",
"Peter Pettigrew":"m","George Lucas":"m","Sandy Koufax":"m","Frank Sinatra":"m",
"Hank Azaria":"m","Ben Franklin":"m","John Wayne Gacy":"m","Stephen King":"m",
"Herbert Holand":"m","Douglas Fairbanks":"m","Pete Davidson":"m","Hulk Hogan":"m",
"Roger Miller":"m","Michael Flatley":"m","Cal Ripken Jr":"m","William Golding":"m",
"Joe Montana":"m","Mel Brooks":"m","Hitler":"m","Bob Hoskins":"m","Will Ferrell":"m",
"Travolta":"m","Micky Ward":"m","Howard Shore":"m","Ted Williams":"m",
"Joe McGinniss":"m","Jim Davis":"m","Steve Carlton":"m","Harry Stamper":"m",
"Zephram Cochrane":"m","WP Kinsella":"m","Omar Epps":"m","Ricky Nelson":"m",
"Joe Hazelwood":"m","Peter Flanagan":"m","Ding Liren":"m","Ron Howard":"m",
"William Petersen":"m","Josh Turner":"m","Freddy Fender":"m","Leonard Nimoy":"m",
"Raymond Reddington":"m","Tupac Shakur":"m","Bill Russell":"m","Jon Favreau":"m",
"Stephen Harper":"m","Chester Arthur":"m","Gerald Ford":"m","Friz Freleng":"m",
"Joel McHale":"m","Kris Allen":"m","Sylvester McCoy":"m","John Hughes":"m",
"Harrison Ford":"m","Bill Engvall":"m","Ryan Fitzpatrick":"m","Rod Laver":"m",
"Richard Petty":"m","Jim Backus":"m","Bud Grant":"m","Don Shula":"m","Chuck Noll":"m","Tom Landry":"m","Steve Martin":"m",
"Jeff Gordon":"m","Hiram Revels":"m","Bailey Zappe":"m","Oscar Robertson":"m",
"Nap Lajoie":"m","Roald Dahl":"m","Carl Zeiss":"m","Rickey Henderson":"m",
"Leonard Hofstadter":"m","Trevor Berbick":"m","Johnny Cash":"m","Alec Baldwin":"m",
"Casey Casum":"m","Bobby Moore":"m","Garth Brooks":"m","Brad Paisley":"m","Grisham":"m",
"Jesse":"m","JT":"m","Mendel":"m","Wimpy":"m","Dion":"m","Pratchett":"m","Lennon":"m",
"Phelps":"m","Einstein":"m","Churchill":"m","Kruschev":"m","Roosevelt":"m",
"Rockerfeller":"m","John Archer":"m","Joe Lewis":"m","Larry Holmes":"m","Bill Bellamy":"m",
"Tom Hanks":"m","Michael Phelps":"m","Søren Kierkegaard":"m","Henry Moseley":"m",
"Mohandas Gandhi":"m","King Louis XVIII":"m","Horatio Nelson":"m","The Duke of Wellington":"m",
"Clay Aiken":"m","J.R.R. Tolkien":"m","Drake":"m","Chubby Checker":"m","Ahmad Rashad":"m",
"Pitbull":"m","Billy Crystal":"m",
"Gustave Flaubert":"m","Victor Hugo":"m","Alexandre Dumas":"m","Jules Verne":"m","Émile Zola":"m","Honoré de Balzac":"m",
"Pamela Anderson":"f","Britney":"f","Danica Patrick":"f","Shirley MacLaine":"f",
"Tammy Wynette":"f","Natalie Cole":"f","Kate Bradley":"f","Judy Blume":"f",
"Emily Bronte":"f","Taylor Swift":"f","Megan Theee Stallion":"f","Clara Oswald":"f",
"Jean Simmons":"f","Margaret Chase Smith":"f","Nancy Cartwright":"f","Dionne Warwick":"f",
"Mariah Carey":"f","Kelly Clarkson":"f","Iggy Azalea":"f","Ally McBeal":"f",
"Babe Didrikson":"f","Susan Powter":"f","Vivian Ward":"f",
"Whitney Houston":"f","Duffy":"f","Carmen Electra":"f","Britney Spears":"f","Jennifer Lopez":"f",
"Wilbur Rimes":"m","Bill Mack":"m","Trevor Horn":"m","Margaret LeAnn Rimes":"f","Diane Warren":"f",
"Adele":"f","Agatha Christie":"f","Amy Winehouse":"f","Anya Taylor-Joy":"f",
"Aretha Franklin":"f","Ariana Grande":"f","Audrey Hepburn":"f","Beverly Cleary":"f",
"Beyoncé":"f","Billie Eilish":"f","Cameron Diaz":"f","Carrie Underwood":"f",
"Claire Danes":"f","Cyndi Lauper":"f","Diana Ross":"f","Dolly Parton":"f","Dua Lipa":"f",
"Elizabeth Taylor":"f","Gwyneth Paltrow":"f","Indira Gandhi":"f","J.K. Rowling":"f",
"Jenna Ortega":"f","Jennifer Hudson":"f","Judy Garland":"f","Junko Tabei":"f",
"Kate Winslet":"f","Lady Gaga":"f","Lana Del Rey":"f","Loretta Lynn":"f","Madonna":"f",
"Millie Bobby Brown":"f","Patsy Cline":"f","Kitty Wells":"f","Dottie West":"f","June Carter":"f","Wanda Jackson":"f","Brenda Lee":"f","Skeeter Davis":"f","Sammi Smith":"f","Jeannie C. Riley":"f","Lynn Anderson":"f","Crystal Gayle":"f","Anne Murray":"f","Helen Reddy":"f","Queen Anne":"f","Queen Elizabeth I":"f",
"Queen Mary I":"f","Queen Victoria":"f","Queen Elizabeth II":"f","Rihanna":"f","Sally Ride":"f",
"Shirley Temple":"f","Tina Turner":"f","Cher":"f",
"Akhenaten":"m","Aristotle":"m","Augustus":"m","Bach":"m","Beethoven":"m","Chopin":"m",
"Constantine":"m","Galen":"m","Khafre":"m","Khufu":"m","Leon Trotsky":"m","Mark Spitz":"m",
"Puccini":"m","Ramesses II":"m","Rossini":"m","Donizetti":"m","Caravaggio":"m",
"Plato":"m","Socrates":"m","Hippocrates":"m","Nero":"m","Titian":"m","Verdi":"m",
"Mozart":"m","Prince":"m","Amerigo Vespucci":"m","Andrew Johnson":"m",
"Antoine Lavoisier":"m","Arnold Schwarzenegger":"m","Arthur Conan Doyle":"m",
"Arthur Schopenhauer":"m","Benjamin Franklin":"m","Bruce Willis":"m","C.S. Lewis":"m",
"Charles de Gaulle":"m","Charlie Puth":"m","Christopher Columbus":"m",
"Dmitri Mendeleev":"m","Donatello":"m","Dr. Seuss":"m","E. B. White":"m","Ed Sheeran":"m",
"Edmund Hillary":"m","Edmund Spenser":"m","Elvis Presley":"m","Ernest Shackleton":"m",
"Ferdinand Magellan":"m","Francois Mitterrand":"m","Freddie Mercury":"m",
"Friedrich Nietzsche":"m","Galileo Galilei":"m","Geoffrey Rush":"m","George Foreman":"m",
"George Mallory":"m","George R.R. Martin":"m","Georges Pompidou":"m","Ian Fleming":"m",
"Ian Thorpe":"m","Immanuel Kant":"m","Jack Nicholson":"m","Jacques Chirac":"m",
"James Buchanan":"m","James Cameron":"m","James Cook":"m","James Watson":"m",
"Jared Leto":"m","Javier Bardem":"m","Jawaharlal Nehru":"m","Johannes Kepler":"m",
"John Adams":"m","John Bunyan":"m","John Dalton":"m","John Hancock":"m","John Milton":"m",
"Johnny Depp":"m","Joseph Stalin":"m","Julius Caesar":"m","Leonardo DiCaprio":"m",
"Lewis Carroll":"m","Lionel Richie":"m","Louis Pasteur":"m","Martin Scorsese":"m","Robert Altman":"m","John G. Avildsen":"m",
"Matt Damon":"m","Mel Gibson":"m","Michael Douglas":"m","Michael Jackson":"m",
"Michelangelo":"m","Mike Tyson":"m","Muhammad Ali":"m","Napoleon Bonaparte":"m",
"Nicolaus Copernicus":"m","Niels Bohr":"m","Nikita Khrushchev":"m","Orlando Bloom":"m",
"Oscar Wilde":"m","Pythagoras":"m","Rajendra Prasad":"m","Reinhold Messner":"m",
"Ridley Scott":"m","Roald Amundsen":"m","Robert Falcon Scott":"m","Robin Williams":"m",
"Rocky Marciano":"m","Ryan Lochte":"m","Sean Connery":"m","Steven Spielberg":"m",
"Stevie Wonder":"m","Sylvester Stallone":"m","Thomas Jefferson":"m","Tim Allen":"m",
"Tutankhamun":"m","Tycho Brahe":"m","Ulysses S. Grant":"m","Vasco da Gama":"m",
"Vladimir Lenin":"m","Heath Ledger":"m","Sam Smith":"m","Shawn Mendes":"m","Joaquin Phoenix":"m",
"Rodney Dangerfield":"m","George Burns":"m","Woody Allen":"m","Bob Costas":"m","Al Michaels":"m","Joe Buck":"m"
};
var NAME_GROUP={
"Keith Urban/Nicole Kidman":1,"Allen Ludden and Betty White":1,"Allen Ludden & Betty White":1,"The Duggars":1,"Beach Boys":1,"Pink Floyd":1,
"Brad Paisley & Alison Krauss":1,"Simon & Garfunkel":1,"Harry and Marv":1,
"Cate Blanchett and Jude Law":1,"Arthur and Coolidge":1,"Virgil and Morgan":1,
"Zeus and Apollo":1,"JT and Janet":1,"Gaga and Ariana":1,"Michael and Geoffrey":1,
"Platypus and Echidna":1,"Tigers and Dodgers":1,"White Sox/Reds":1,"Padres/Chargers":1,
"Def Leppard":1,"B-52's":1,"BTO":1,"Milli Vanilli":1,
"Beavis and Butthead":1,"BTS":1,"Eagles":1,"Astros":1,"Broncos":1,"Guardians":1,
"Dave Matthews Band":1,"Rush":1,"Coldplay":1,"Pearl Jam":1,"Led Zeppelin":1,"Bon Jovi":1,
"Rolling Stones":1,"Flock of Seagulls":1,"The Avengers":1,"The Band Perry":1,"The Mermaids":1,
"ABBA":1,"Motley Crue":1,"Modern English":1,"Psychedelic Furs":1,"Foghat":1,"Evanescence":1,
"Steel Dragon":1,"Cameo":1,"Daughtry":1,"Dodgers":1,"Falcons":1,"Giants":1,"Blue Jays":1,
"NJ Devils":1,"Seattle Pilots":1,"NY Rangers":1,"Pistons":1,
"Boney M.":1,"Counting Crows":1,"Fleetwood Mac":1,"Hootie and the Blowfish":1,
"Led Zeppelin":1,"Spin Doctors":1,"The Beach Boys":1,"The Beatles":1,"The Bee Gees":1,
"The Eagles":1,"The Rembrandts":1,"The Rolling Stones":1,"The Who":1,"Village People":1,
"Queen":1,"The Justice League":1,"The X-Men":1,"The Fantastic Four":1,
"Judy Rodman and Keith Hinton":1,"Mushroom (Aloe Blacc) and Crocodile (Nick Carter)":1
};
var COUNTRY_REGION={
"Switzerland":"eu","Greece":"eu","France":"eu","Netherlands":"eu","The Netherlands":"eu","Belgium":"eu","Moldova":"eu","Romania":"eu","Norway":"eu","Austria":"eu","Italy":"eu","Spain":"eu","Portugal":"eu","Germany":"eu","Poland":"eu","Ukraine":"eu","Ireland":"eu","United Kingdom":"eu","Britain":"eu","England":"eu","Scotland":"eu","Wales":"eu","Sweden":"eu","Finland":"eu","Denmark":"eu","Hungary":"eu","Croatia":"eu","Serbia":"eu","Bulgaria":"eu","Lithuania":"eu","Latvia":"eu","Estonia":"eu","Slovenia":"eu","Slovakia":"eu","Montenegro":"eu","Albania":"eu","Belarus":"eu","Iceland":"eu","Malta":"eu","Cyprus":"eu","Liechtenstein":"eu","Andorra":"eu","Monaco":"eu","Luxembourg":"eu","North Macedonia":"eu","Russia":"eu","Vatican City":"eu","The Soviet Union":"eu",
"Turkey":"as","Afghanistan":"as","Singapore":"as","Japan":"as","China":"as","India":"as","Thailand":"as","Vietnam":"as","Indonesia":"as","Malaysia":"as","Philippines":"as","The Philippines":"as","Pakistan":"as","Bangladesh":"as","Nepal":"as","Mongolia":"as","Cambodia":"as","Laos":"as","Myanmar":"as","Israel":"as","Jordan":"as","Lebanon":"as","Iraq":"as","Iran":"as","Qatar":"as","Oman":"as","Yemen":"as","Armenia":"as","Azerbaijan":"as","Kazakhstan":"as","Uzbekistan":"as","Kyrgyzstan":"as","Tajikistan":"as","Turkmenistan":"as","Sri Lanka":"as","Bhutan":"as","Brunei":"as","South Korea":"as","North Korea":"as","Korea":"as","Timor-Leste":"as","Maldives":"as","Saudi Arabia":"as",
"Chile":"am","Canada":"am","Mexico":"am","Barbados":"am","Peru":"am","Brazil":"am","Argentina":"am","Colombia":"am","Venezuela":"am","Ecuador":"am","Bolivia":"am","Paraguay":"am","Uruguay":"am","Cuba":"am","Jamaica":"am","Panama":"am","Costa Rica":"am","Honduras":"am","Nicaragua":"am","Guatemala":"am","Belize":"am","Bahamas":"am","The Bahamas":"am","Guyana":"am","Suriname":"am","United States":"am","Turks and Caicos":"am","Haiti":"am","Dominican Republic":"am",
"South Africa":"af","Egypt":"af","Nigeria":"af","Kenya":"af","Ethiopia":"af","Ghana":"af","Morocco":"af","Algeria":"af","Tanzania":"af","Uganda":"af","Zambia":"af","Zimbabwe":"af","Mozambique":"af","Madagascar":"af","Senegal":"af","Libya":"af","Tunisia":"af","Angola":"af","Sudan":"af",
"Australia":"oc","New Zealand":"oc","Fiji":"oc","Samoa":"oc","Tonga":"oc","Vanuatu":"oc","Kiribati":"oc","Micronesia":"oc","Papua New Guinea":"oc","Solomon Islands":"oc","Tuvalu":"oc"
};
var CITY_STATES={"monaco":1,"vatican city":1,"singapore":1};
/* Sky names — constellations, zodiac signs, and bright stars. Without
   a kind of their own they fell into "other" and could sit next to
   any word at all (a constellation question offering a town and a
   first name as choices). As a kind they only sit next to each
   other. */
var SKY_NAMES=["Orion","Ursa Major","Ursa Minor","Cassiopeia","Cygnus","Lyra","Aquila","Perseus","Taurus","Gemini","Leo","Virgo","Aries","Pisces","Scorpius","Sagittarius","Capricorn","Aquarius","Libra","Cancer","Canis Major","Canis Minor","Draco","Pegasus","Andromeda","Hercules","Auriga","Crux","Rigel","Sirius","Vega","Betelgeuse","Polaris"];
var SKY_NORM={};
SKY_NAMES.forEach(function(c){ SKY_NORM[norm(c)]=1; });
var GENDER_NORM={}, GROUP_NORM={}, COUNTRY_NORM={}, COLOR_NORM={}, MONTH_NORM={}, SEASON_NORM={}, CONTINENT_NORM={};
Object.keys(NAME_GENDER).forEach(function(k){ GENDER_NORM[norm(k)]=NAME_GENDER[k]; });
Object.keys(NAME_GROUP).forEach(function(k){ GROUP_NORM[norm(k)]=1; });
Object.keys(COUNTRY_REGION).forEach(function(k){ COUNTRY_NORM[norm(k)]=COUNTRY_REGION[k]; });
COUNTRY_NORM[norm("S Africa")]="af"; COUNTRY_NORM[norm("Peru")]="am";
COLOR_NAMES.forEach(function(c){ COLOR_NORM[norm(c)]=1; });
MONTH_NAMES.forEach(function(c,i){ MONTH_NORM[norm(c)]=i; });
SEASON_NAMES.forEach(function(c){ SEASON_NORM[norm(c)]=1; }); SEASON_NORM["fall"]=1;
["Africa","Asia","Europe","Antarctica","North America","South America","Oceania"].forEach(function(c){ CONTINENT_NORM[norm(c)]=1; });

/* ============ STAGE-NAME / BIRTH-NAME POOLS (2026-11-13) ============
   The repair vocabulary for the stage-name / birth-name fence in
   part 1 (see STAGE-NAME / BIRTH-NAME FENCE there): verified
   stage names and birth names, split by profession family and
   gender, so a fenced set can always be repaired inside its own
   kind — a stage-name question's company is other stage names of
   the same profession, a birth-name question's other birth
   names. Music stage names share one family: singers and rappers
   both perform under stage names, and the sheet's own authored
   real-name sets (Drake / Chubby Checker / Pitbull / Tupac
   Shakur) already treat them as one company. Every name below
   is the well-attested stage name (or birth name) of its owner.
   The pools live here, beside the name tables, and every member
   is registered below as a gendered person: most of these
   strings appear in no older table, and an unregistered name
   reads as kind "other" / unknown gender to the repair passes,
   which then trade it out of the very sets it belongs in (the
   first build of this fence lost Elton John and Little Richard
   that way). Part 6 registers the pools as sub-kind repair
   pools. */
var STAGE_POOLS={
 "music:m":["Chubby Checker","Little Richard","Freddie Mercury","Elton John","David Bowie","Bob Dylan","Prince","Sting","Bono","Fats Domino","Eminem","Snoop Dogg","Drake","Pitbull","Tupac Shakur","Ice Cube","LL Cool J","Jay-Z","Ludacris","50 Cent","Lil Wayne","Flo Rida","will.i.am","The Notorious B.I.G.","Nelly","T-Pain","Akon","Bruno Mars","The Weeknd"],
 "music:f":["Lady Gaga","Madonna","Rihanna","Pink","Lizzo","Doja Cat","Kesha","Lana Del Rey","Halsey","Miley Cyrus","Katy Perry","Nicki Minaj","Cardi B","Billie Eilish"],
 "comedian:m":["Mel Brooks","Rodney Dangerfield","George Burns","Woody Allen","Bob Hope","Jack Benny","Groucho Marx","Redd Foxx","Buddy Hackett","Milton Berle"],
 "comedian:f":["Phyllis Diller","Joan Rivers","Moms Mabley","Totie Fields","Minnie Pearl"]
};
var BIRTH_POOLS={
 "rapper:m":["Davis Burd","Marshall Mathers","Calvin Broadus","Curtis Jackson","Shawn Carter","O'Shea Jackson","James Smith","Aubrey Graham","Armando Perez","Lesane Parish Crooks","Dwayne Carter","Christopher Wallace","Tramar Dillard","Faheem Najm","Cornell Haynes"],
 "rapper:f":["Onika Maraj","Belcalis Almanzar","Melissa Elliott","Dana Owens","Kimberly Jones","Inga Marchand","Eve Jeffers"],
 "singer:m":["Ernest Evans","Richard Penniman","Farrokh Bulsara","Reginald Dwight","Peter Hernandez","Abel Tesfaye","Gordon Sumner","Paul Hewson","David Jones","Robert Zimmerman"],
 "singer:f":["Stefani Germanotta","Robyn Fenty","Katheryn Hudson","Destiny Hope Cyrus","Alecia Moore","Amala Dlamini","Kesha Sebert","Elizabeth Grant"],
 "comedian:m":["Melvin Kaminsky","Allen Konigsberg","Leslie Hope","Benjamin Kubelsky","Mendel Berlinger","Leonard Hacker","Joseph Levitch"]
};
var STAGE_POOL_NORM={}, BIRTH_POOL_NORM={};
Object.keys(STAGE_POOLS).forEach(function(k){
  var m={}; STAGE_POOLS[k].forEach(function(n){ m[norm(n)]=1; });
  STAGE_POOL_NORM[k]=m;
});
Object.keys(BIRTH_POOLS).forEach(function(k){
  var m={}; BIRTH_POOLS[k].forEach(function(n){ m[norm(n)]=1; });
  BIRTH_POOL_NORM[k]=m;
});
(function registerStageBirthNames(){
  function reg(n, g){
    if(!GENDER_NORM[norm(n)]) GENDER_NORM[norm(n)]=g;
    if(!NAME_GENDER[n]) NAME_GENDER[n]=g;
  }
  Object.keys(STAGE_POOLS).forEach(function(k){ var g=k.split(":")[1]; STAGE_POOLS[k].forEach(function(n){ reg(n, g); }); });
  Object.keys(BIRTH_POOLS).forEach(function(k){ var g=k.split(":")[1]; BIRTH_POOLS[k].forEach(function(n){ reg(n, g); }); });
  /* The Daily Show set's names (2026-11-13): Colbert, Stewart,
     and O'Brien appear in no older name table either, and the
     prescribed set for the correspondent question needs all
     four of its members read as the men they are. */
  reg("Stephen Colbert","m"); reg("Jon Stewart","m"); reg("Conan O'Brien","m"); reg("John Oliver","m");
})();

/* US states — a kind of their own, for the same reason countries
   are: a state answer dealt next to a film, a card game, and a
   person's job ("Where I-40 ends?" offering Pale Rider / Phase 10 /
   Israel president / N. Carolina) is solvable by elimination alone,
   because only one choice is a place at all. A state answer now
   draws only other states, in every pool. The norm table also
   carries the sheet's own abbreviated spellings ("N. Carolina",
   "S. Dakota"…), mapped to the full state name. */
var US_STATES=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
var STATE_NORM={};
US_STATES.forEach(function(s){ STATE_NORM[norm(s)]=s; });
STATE_NORM[norm("N. Carolina")]="North Carolina"; STATE_NORM[norm("S. Carolina")]="South Carolina";
STATE_NORM[norm("N. Dakota")]="North Dakota"; STATE_NORM[norm("S. Dakota")]="South Dakota";
STATE_NORM[norm("W. Virginia")]="West Virginia";
/* Bordering states, so state distractors are plausible first:
   neighbours of the answer state rank ahead of the rest of the
   country (the same-region rule countries already follow). */
var STATE_NEIGHBORS={
"Alabama":["Mississippi","Tennessee","Georgia","Florida"],
"Alaska":[],
"Arizona":["California","Nevada","Utah","Colorado","New Mexico"],
"Arkansas":["Missouri","Tennessee","Mississippi","Louisiana","Texas","Oklahoma"],
"California":["Oregon","Nevada","Arizona"],
"Colorado":["Wyoming","Nebraska","Kansas","Oklahoma","New Mexico","Arizona","Utah"],
"Connecticut":["Massachusetts","Rhode Island","New York"],
"Delaware":["Maryland","Pennsylvania","New Jersey"],
"Florida":["Georgia","Alabama"],
"Georgia":["Florida","Alabama","Tennessee","North Carolina","South Carolina"],
"Hawaii":[],
"Idaho":["Washington","Oregon","Nevada","Utah","Wyoming","Montana"],
"Illinois":["Wisconsin","Michigan","Indiana","Kentucky","Missouri","Iowa"],
"Indiana":["Michigan","Ohio","Kentucky","Illinois"],
"Iowa":["Minnesota","Wisconsin","Illinois","Missouri","Nebraska","South Dakota"],
"Kansas":["Nebraska","Missouri","Oklahoma","Colorado"],
"Kentucky":["Illinois","Indiana","Ohio","West Virginia","Virginia","Tennessee","Missouri"],
"Louisiana":["Texas","Arkansas","Mississippi"],
"Maine":["New Hampshire"],
"Maryland":["Pennsylvania","Delaware","West Virginia","Virginia"],
"Massachusetts":["New York","Vermont","New Hampshire","Connecticut","Rhode Island"],
"Michigan":["Wisconsin","Indiana","Ohio"],
"Minnesota":["Wisconsin","Iowa","South Dakota","North Dakota"],
"Mississippi":["Tennessee","Alabama","Louisiana","Arkansas"],
"Missouri":["Iowa","Illinois","Kentucky","Tennessee","Arkansas","Oklahoma","Kansas","Nebraska"],
"Montana":["Idaho","Wyoming","South Dakota","North Dakota"],
"Nebraska":["South Dakota","Iowa","Missouri","Kansas","Colorado","Wyoming"],
"Nevada":["California","Oregon","Idaho","Utah","Arizona"],
"New Hampshire":["Maine","Vermont","Massachusetts"],
"New Jersey":["New York","Pennsylvania","Delaware"],
"New Mexico":["Arizona","Colorado","Oklahoma","Texas"],
"New York":["Pennsylvania","New Jersey","Connecticut","Massachusetts","Vermont"],
"North Carolina":["Virginia","Tennessee","South Carolina","Georgia"],
"North Dakota":["Minnesota","South Dakota","Montana"],
"Ohio":["Pennsylvania","West Virginia","Kentucky","Indiana","Michigan"],
"Oklahoma":["Kansas","Missouri","Arkansas","Texas","New Mexico","Colorado"],
"Oregon":["Washington","Idaho","Nevada","California"],
"Pennsylvania":["New York","New Jersey","Delaware","Maryland","West Virginia","Ohio"],
"Rhode Island":["Connecticut","Massachusetts"],
"South Carolina":["North Carolina","Georgia"],
"South Dakota":["North Dakota","Minnesota","Iowa","Nebraska","Wyoming","Montana"],
"Tennessee":["Kentucky","Virginia","North Carolina","Georgia","Alabama","Mississippi","Arkansas","Missouri"],
"Texas":["New Mexico","Oklahoma","Arkansas","Louisiana"],
"Utah":["Idaho","Wyoming","Colorado","Arizona","Nevada"],
"Vermont":["New Hampshire","Massachusetts","New York"],
"Virginia":["North Carolina","Tennessee","Kentucky","West Virginia","Maryland"],
"Washington":["Oregon","Idaho"],
"West Virginia":["Ohio","Pennsylvania","Maryland","Virginia","Kentucky"],
"Wisconsin":["Minnesota","Iowa","Illinois","Michigan"],
"Wyoming":["Montana","South Dakota","Nebraska","Colorado","Utah","Idaho"]
};
/* Well-known cities, defined here (not only down in the DJ sub-kind
   section, which also uses it) because the answer-kind pass runs
   before that section: the kind pass needs the table to recognise
   that a city-state answer's city distractors are its own kind.
   The extras registered under the table are the Trivia Sheet's own
   city answers (the capital of Nova Scotia, of Northern Ireland,
   of West Germany…) and the Italian cities of the St Peter's
   Square set. */
var CITY_NAMES=["Chicago","Los Angeles","Houston","Phoenix","Denver","Seattle","Boston","Miami","Dallas","Atlanta","Portland","Austin","Memphis","Nashville","Las Vegas","San Francisco","Philadelphia","Detroit","Minneapolis","New Orleans","St. Louis","Kansas City","London","Paris","Rome","Berlin","Madrid","Toronto","Sydney","Tokyo","Vienna","Dublin","Tucson","Santa Fe","Reno","Boise","Tulsa","Omaha","Albuquerque","Fresno","Colorado Springs"];
var CITY_NORM={};
CITY_NAMES.forEach(function(c){ CITY_NORM[norm(c)]=1; });
["Halifax","Belfast","Bonn","Flagstaff","Annapolis","Cork","Tupelo","Florence","Venice","Naples"].forEach(function(c){ CITY_NORM[norm(c)]=1; });
CITY_NORM["nyc"]=1; CITY_NORM["new york city"]=1;

/* ================= STATE NICKNAMES & FOODS — TWO MISSING KINDS =================
   Two answer kinds the classifier had no table for, each reported
   from a screenshot:
   - US state nicknames ("Hawkeye State", "Bluegrass State") were
     unclassified strings, so they dealt as generic filler next to
     anything — including a "written by" question whose answer was
     John Steinbeck. A nickname is now its own subkind
     ("place:nickname"): nicknames sit with nicknames, and never as
     filler in another kind's set. The list is the fifty states'
     primary nicknames, in the bank's own spellings.
   - Foods and ingredients ("almonds") were likewise unclassified,
     so the Campbell's green-beans question — "Not ingredient in
     Campbell's green beans" — dealt a city (Baghdad), a body
     reflex (hiccup), and an element (helium) as its choices. A
     food is now its own subkind ("food"): an ingredient answer
     deals ingredient company, and a food string is never filler in
     another kind's set. The list is common foods and cooking
     ingredients, in the sheet's lowercase register; animal names
     that are also foods (chicken, salmon, lamb…) keep their animal
     reading, which the classifier reaches first. */
var STATE_NICKNAMES=["Heart of Dixie","Yellowhammer State","Last Frontier","Grand Canyon State","Natural State","Golden State","Centennial State","Constitution State","First State","Sunshine State","Peach State","Gem State","Prairie State","Hoosier State","Hawkeye State","Sunflower State","Bluegrass State","Pelican State","Pine Tree State","Old Line State","Bay State","Great Lakes State","North Star State","Magnolia State","Show Me State","Treasure State","Cornhusker State","Silver State","Granite State","Garden State","Land of Enchantment","Empire State","Tar Heel State","Peace Garden State","Buckeye State","Sooner State","Beaver State","Keystone State","Ocean State","Palmetto State","Mount Rushmore State","Volunteer State","Lone Star State","Beehive State","Green Mountain State","Old Dominion","Evergreen State","Mountain State","Badger State","Equality State","Aloha State"];
var STATE_NICKNAME_NORM={};
STATE_NICKNAMES.forEach(function(x){ STATE_NICKNAME_NORM[norm(x)]=1; });
var FOOD_NAMES=["almonds","walnuts","pecans","cashews","peanuts","hazelnuts","chestnuts","pistachios","macadamia nuts","green beans","mushrooms","onions","garlic","shallots","leeks","carrots","celery","potatoes","sweet potatoes","tomatoes","corn","peas","spinach","kale","broccoli","cauliflower","bell peppers","cucumbers","zucchini","eggplant","butternut squash","pumpkin","beets","radishes","cabbage","lettuce","butter","cream","sour cream","milk","cheese","cream cheese","cheddar cheese","parmesan cheese","eggs","flour","sugar","brown sugar","powdered sugar","honey","maple syrup","vanilla extract","cinnamon","nutmeg","ginger","cloves","thyme","rosemary","sage","parsley","basil","oregano","bay leaves","salt","black pepper","paprika","cumin","chili powder","olive oil","vegetable oil","vinegar","lemon juice","lime juice","chicken broth","beef broth","vegetable broth","rice","pasta","bread crumbs","oats","quinoa","barley","bacon","ham","sausage","beef","pork","veal","apples","bananas","oranges","lemons","limes","strawberries","blueberries","raspberries","blackberries","grapes","peaches","pears","plums","cherries","raisins","cranberries","pineapple","mango","coconut","chocolate","cocoa powder","coffee","peanut butter","jam","jelly","mustard","ketchup","mayonnaise","soy sauce","worcestershire sauce"];
var FOOD_NORM={};
FOOD_NAMES.concat(["bread"]).forEach(function(x){
  /* The bank writes foods in both numbers — the sheet's
     "almonds", an authored bank's "Carrot" — so every name is
     filed with its singular and plural spellings too. */
  var n=norm(x);
  FOOD_NORM[n]=1;
  if(/ies$/.test(n)) FOOD_NORM[n.slice(0,-3)+"y"]=1;
  else if(/oes$/.test(n) || /ches$/.test(n) || /shes$/.test(n)) FOOD_NORM[n.slice(0,-2)]=1;
  else if(/s$/.test(n)) FOOD_NORM[n.slice(0,-1)]=1;
  else FOOD_NORM[n+"s"]=1;
});
/* The classifier runs over every choice of every question at load
   (bank building, candidate sorts, the enforcement pass), so its
   results are memoised per string — the bank holds a bounded set of
   unique answer strings. */
var KIND_INFO_CACHE={}, KIND_INFO_ALL_CACHE={};
var LEANN_TITLE_NORM=null;
/* Place-named bands dealt by the Music bank's band questions:
   strings that are a city or a state everywhere else, but a band
   — a group — inside a Music question. Both contextual tests
   (kindCompatibleQ here and subKindChoice below) consult this
   table, and only ever inside a Music question, so the place
   reading these names carry in geography questions is untouched. */
var MUSIC_BAND_NORM={"boston":1,"chicago":1,"kansas":1,"foreigner":1};
/* Format a generated numeric distractor like the answer it sits next
   to: same prefix ("No. ", "$"), same decimals/commas, or the same
   spelled-out word form for values up to a hundred. */
var NUMWORD_BY_VAL={};
Object.keys(NUMWORD_VAL).forEach(function(w){ var v=NUMWORD_VAL[w]; if(NUMWORD_BY_VAL[v]===undefined && v<1000) NUMWORD_BY_VAL[v]=w; });
/* Fallback candidate lists for a kind, used when a collection's own
   answers run short: the name/country/color tables themselves. For a
   LeAnn person question the first list is country-music names of the
   same gender — the subject test (a LeAnn song question should offer
   other country singers of her era, not random names). */
var COUNTRY_SINGERS={f:["Faith Hill","Trisha Yearwood","Shania Twain","Dolly Parton","Tammy Wynette","Loretta Lynn","Patsy Cline","Carrie Underwood","Kitty Wells","Dottie West","June Carter","Wanda Jackson","Brenda Lee","Skeeter Davis","Sammi Smith","Jeannie C. Riley","Lynn Anderson","Crystal Gayle","Anne Murray","Helen Reddy"],
                     m:["Garth Brooks","Johnny Cash","Brad Paisley"]};

/* ================= NARROW-INDUSTRY RULE — BRANDS & COMPANIES =================
   Test (4) of the answer-kind rule, for brand/company answers: the
   narrow industry, not the broad type. INDUSTRY_POOLS lists verified
   real brands per narrow industry — it is both the lookup source for
   industryOf() and the replacement source when a set needs an
   in-industry distractor a bank cannot supply itself. Ambiguous
   strings that are real brands in one reading and something else
   in another — "Mars" (planet / candy bar), "Orbit" and "Eclipse"
   (astronomy / gum), "Extra" (word / gum) — sit in INDUSTRY_EXTRA
   below: they classify the authored sets they already belong to,
   but are never offered as generated replacements. "Milky Way" is
   present only as the candy bar — the galaxy is only ever dealt
   as "The Milky Way", a different string. */
var INDUSTRY_POOLS={
delivery:["FedEx","UPS","DHL","USPS","TNT Express","Purolator","Canada Post","Royal Mail"],
auto:["BMW","Mercedes-Benz","Audi","Lexus","Toyota","Honda","Ford","Chevrolet","Volkswagen","Nissan","Hyundai","Kia","Volvo","Porsche","Subaru","Mazda","Tesla","Ferrari","Jeep"],
cosmetics:["L'Oréal","Maybelline","Revlon","Nivea","CoverGirl","Estée Lauder","Clinique","Olay","Garnier","Lancôme","Avon","Mary Kay"],
rental:["Avis","Hertz","Enterprise Rent-A-Car"],
airline:["United Airlines","Delta Air Lines","American Airlines","Pan Am","Southwest Airlines","JetBlue","British Airways","Lufthansa","Air France","Alaska Airlines"],
insurer:["GEICO","Progressive","State Farm","Allstate","Nationwide","Farmers","Liberty Mutual","USAA","Travelers","American Family"],
cards:["Visa","Mastercard","American Express","Discover","Capital One","Chase","Citi"],
softdrink:["Coca-Cola","Pepsi","Dr Pepper","RC Cola","Sprite","7UP","Sierra Mist","Canada Dry","Mello Yello","Mountain Dew","Surge","Fanta","A&W Root Beer"],
energydrink:["Monster Energy","Red Bull","Rockstar","5-hour Energy","Bang Energy"],
sportsdrink:["Powerade","Gatorade","Vitamin Water","BodyArmor","Propel"],
sportswear:["Nike","Adidas","Under Armour","Reebok","Puma","New Balance","Fila"],
tech:["Apple","Microsoft","IBM","Samsung","Dell","Nokia","Motorola","Sony","AMD","Intel","Texas Instruments","Qualcomm","Google","HP","Lenovo","LG"],
telecom:["Sprint","AT&T","MCI","Verizon","T-Mobile","Cricket Wireless","MetroPCS","US Cellular"],
beer:["Bud Light","Coors Light","Miller Lite","Michelob Ultra","Corona","Dos Equis","Tecate","Modelo","Budweiser","Heineken","Coors","Miller High Life","Pabst Blue Ribbon","Sam Adams"],
cereal:["Cheerios","Honey Nut Cheerios","Golden Grahams","Chex","Lucky Charms","Trix","Froot Loops","Cocoa Puffs","Apple Jacks","Cap'n Crunch","Frosted Flakes","Corn Flakes","Rice Krispies","Special K","Wheaties","Fruity Pebbles"],
snacks:["Lay's","Pringles","Doritos","Ruffles","Cheetos","Tostitos","Fritos","Sun Chips"],
cookie:["Chips Ahoy","Oreo","Nilla Wafers","Fig Newtons","Keebler","Famous Amos","Pepperidge Farm"],
candy:["Twix","Kit Kat","Snickers","Milky Way","3 Musketeers","Skittles","M&M's","Reese's Pieces","Hershey's Kisses","Starburst","Jelly Belly","Butterfinger","Baby Ruth"],
pizza:["Pizza Hut","Domino's","Little Caesars","Papa John's","Hungry Howie's","Marco's Pizza","Jet's Pizza"],
fastfood:["McDonald's","Burger King","Wendy's","KFC","Popeyes","Chick-fil-A","Arby's","Sonic","Five Guys","Taco Bell","Chipotle","Del Taco","Qdoba","Subway","Quiznos","Jimmy John's","Jersey Mike's","Dairy Queen","Jack in the Box","Whataburger","In-N-Out Burger","Culver's"],
soup:["Progresso","Campbell's","Heinz","Swanson","Amy's"],
battery:["Duracell","Energizer","Rayovac","Eveready","Panasonic"],
coffee:["Folgers","Maxwell House","Nescafé","Starbucks","Dunkin'","Peet's","Lavazza","Illy"],
baking:["Betty Crocker","Pillsbury","Duncan Hines","Bisquick"],
jewellery:["Tiffany & Co.","Cartier","De Beers","Zales","Harry Winston"],
themepark:["Walt Disney World","Universal Studios","Disneyland","Six Flags","SeaWorld","Cedar Point","Busch Gardens"],
lodging:["Motel 6","Holiday Inn","Best Western","Days Inn","Super 8","La Quinta","Comfort Inn","Hampton Inn"],
gum:["Wrigley's Doublemint","Trident","Dentyne","Juicy Fruit","Big Red"],
military:["US Army","US Navy","US Marine Corps","US Air Force","US Coast Guard","US Space Force"],
retail:["Walmart","Target","Costco","Kmart","Best Buy","Kohl's","Dollar General"]
};
/* Industry-tagged strings that classify a set but are never offered
   as generic replacements: car models (a car-brand question wants
   brands, not models), and the Trivia Sheet's own spellings of brands
   ("L'Oréal", "Papa Johns", "Frito Lay"). */
var INDUSTRY_EXTRA={
auto:["Volkswagen Beetle","Ford Mustang","Chevrolet Corvair","Fiat 500"],
cosmetics:["L'Oréal"],
pizza:["Papa Johns"],
snacks:["Frito Lay"],
candy:["Mars"],
gum:["Orbit","Extra","Eclipse"]
};
var BRAND_INDUSTRY_NORM={};
Object.keys(INDUSTRY_POOLS).forEach(function(k){ INDUSTRY_POOLS[k].forEach(function(n){ BRAND_INDUSTRY_NORM[norm(n)]=k; }); });
Object.keys(INDUSTRY_EXTRA).forEach(function(k){ INDUSTRY_EXTRA[k].forEach(function(n){ BRAND_INDUSTRY_NORM[norm(n)]=k; }); });
/* The narrow industry a question's stem explicitly asks for, if any.
   DJ fragment clues ("Trivia Clue: …") never count: a fragment that
   happens to contain the word "cereal" or "lager" is a story clue,
   not an industry ask. Patterns are word-bounded where a substring
   would false-fire ("lager" inside "villagers"). */
var STEM_INDUSTRY=[
 [/delivery compan|shipping compan|courier compan/,"delivery"],
 [/pizza chain|pizza brand/,"pizza"],
 [/car brand|car maker|automaker|car company/,"auto"],
 [/cosmetics brand|makeup brand|beauty brand/,"cosmetics"],
 [/\bairline/,"airline"],
 [/insurer|insurance company/,"insurer"],
 [/card network|card company|card brand|credit card/,"cards"],
 [/energy drink/,"energydrink"],
 [/sports drink/,"sportsdrink"],
 [/soft drink|\bcola\b|\bsoda\b/,"softdrink"],
 [/fast-food|fast food/,"fastfood"],
 [/sandwich chain/,"fastfood"],
 [/phone carrier|phone company/,"telecom"],
 [/phone maker|phone brand/,"tech"],
 [/software company|computer company|tech company|chipmaker|chip company/,"tech"],
 [/sportswear brand|sneaker brand/,"sportswear"],
 [/\bbeer\b|\blager\b/,"beer"],
 [/\bcereal/,"cereal"],
 [/coffee brand|coffee chain/,"coffee"],
 [/candy bar|candy brand|\bcandy\b/,"candy"],
 [/cookie brand|\bcookie\b/,"cookie"],
 [/chip brand|potato chip|\bsnack\b/,"snacks"],
 [/battery brand/,"battery"],
 [/soup brand/,"soup"],
 [/baking brand/,"baking"],
 [/theme park/,"themepark"],
 [/motel chain|hotel chain/,"lodging"],
 [/chewing gum|\bgum\b/,"gum"],
 [/branch of the (us|u\.s\.) military|military branch/,"military"],
 [/retail giant|retailer|department store|discount store/,"retail"]
];

/* ================= TRIVIA SHEET COLLECTION =================
   Imported from the Trivia Sheet: every usable item is in the game.
   - DJ_RAW: question/answer pairs from the sheet, played as multiple
     choice with distractors drawn from the sheet's own answers.
   - DJ_FACES: the sheet's famous-faces / picture-round name list.
   - Real-name pairs and "Where's this" places are built below as
     authored multiple-choice questions. */
var DJ_RAW=[
["William Golding wrote", "Lord of the Flies"],
["How many hits did DiMaggio have during 56 game hit streak", "91"],
["Not a #1 SITCOM", "All in the Family"],
["Red Cross founded in what country", "Switzerland"],
["Whiskey Lullaby sung by", "Brad Paisley & Alison Krauss"],
["Not original NATO country", "Greece"],
["Pirates of Caribbean", "Keith Richards"],
["Comet's parts", "Nucleus, tail, coma"],
["John Stamos' character in Full House", "Jesse"],
["Hickory dickory dock, the clock struck", "one"],
["Not from Australia", "Def Leppard"],
["14 100-yard games", "Barry Sanders"],
["Because you're worth it", "L'Oréal"],
["Bang your head", "Cocktail weekend?"],
["I understand", "fathom"],
["Howdy Doodie last words of show", "Bye Bye"],
["Guggenheim in what city", "NYC"],
["Han Solo smuggling what in movie", "Rathtar"],
["Religious society of friends", "Quakers"],
["How many presidents born british subjects?", "8"],
["Cowboys v. Aliens", "Daniel Craig"],
["First Survivor location", "Borneo"],
["Frito Lay question", "Frito Lay"],
["TomCruise eyes/eyebrows", "Tom Cruise"],
["Legion of Doom", "Philadelphia Flyers"],
["Feeling Groovy", "Simon & Garfunkel"],
["What is Wonder Woman's signature weapon?", "Lasso of Truth"],
["AFI Youngest lifetime achievement", "Tom Hanks"],
["Cryometer", "low temperatures"],
["2nd video played by MTV", "you better run - Pat Benatar"],
["1919 World Series", "White Sox/Reds"],
["Butler from Fresh Prince", "Geoffrey Butler"],
["Silver Dollar", "Eisenhower"],
["Horse says you're a Spirit walker", "The Lone Ranger"],
["Cars voice", "Owen Wilson"],
["How many ships in battleship", "5"],
["Come as you are, as an old", "enemy"],
["Gladiolas are", "Iris"],
["JT picture", "JT"],
["Mille lacs", "Minnesota"],
["Ponrod pooch alter ego", "Hong Kong Phooey"],
["Mona Lisa in", "Louvre"],
["Not a Christie Brinkley ex", "Herbert Holand"],
["Napoleon Dynamite", "Vote for Pedro"],
["I can't believe I ate the whole thing", "Alka Seltzer"],
["Dick Vitale coached", "Pistons"],
["State borders Tennessee also most states", "Missouri"],
["Best selling female artist of 2000's", "Britney"],
["Tragus is located on", "Ear"],
["Team played at Jack Murphy", "Padres/Chargers"],
["Song from Back to the Future dance", "Earth Angel"],
["Pay Tuesday for a hamburger today", "Wimpy"],
["Author of Cat's Cradle", "Kurt Vonnegut, Jr."],
["Scabbers was\u2026", "Peter Pettigrew"],
["Ruth was Naomi's", "Daughter in law"],
["#1 for 16 weeks", "One sweet day"],
["Milky Way shaped like", "flat spiral"],
["Furthest north", "Greenland"],
["Top 12 finalist from Alabama", "Taylor Hicks"],
["Dip relations with US during rev war", "France"],
["Playboy cover 14 times", "Pamela Anderson"],
["ILM founded by", "George Lucas"],
["Lois is sister of", "Beetle Bailey"],
["Didn\u2019t play for the Yankees", "Sandy Koufax"],
["Jackie K reservoir in", "Central Park"],
["Gold records in 50's and 90's", "Frank Sinatra"],
["Northern Exposure town", "Cicely Alaska"],
["Mass times speed", "momentum"],
["Last Great Race", "Iditarod"],
["Dodgeball coach young", "Hank Azaria"],
["Silence DoGood", "Ben Franklin"],
["Flag of Turkey", "Turkey"],
["Tie Breaker: Year of 2001: A space odeyssey", "1968"],
["Pogo the clown", "John Wayne Gacy"],
["Right forward, left out", "Bunny Hop"],
["Father of genetics", "Mendel"],
["What country", "Afghanistan"],
["Longest river in N. America", "Missouri"],
["DC Follies", "Fred Willard"],
["First state to secede", "S. Carolina"],
["Tom Cruise in Days of Thunder", "Cole Trickle"],
["Aubrey Graham real name", "Drake"],
["Home run term", "walk off"],
["Amstel river in", "Netherlands"],
["Ernest Evans real name", "Chubby Checker"],
["Tom Selleck in Friends", "Dr. Richard Burke"],
["Haley's comet has passed how many times in xxx years?", "4"],
["US Open stadium name", "Arthur Ashe stadium"],
["Major Strasser line", "Bring in Usual Suspects"],
["First year anniversary gift", "paper"],
["In which city does the Brandenburg Gate stand", "Berlin"],
["Flintstone's boss", "Mr. Slate"],
["Chrysalis", "butterfly cocoon"],
["Aint seen nothing yet", "BTO"],
["Bad air", "Malaria"],
["Shawshank Redemption author", "Stephen King"],
["Statue of Liberty gift from", "France"],
["Home alone thiefs", "Harry and Marv"],
["West coast of S. America", "Chile"],
["Game with routes between cities", "Ticket to Ride"],
["Fred/Kate/Cindy/Keith", "B-52's"],
["First woman to lead at Indy 500", "Danica Patrick"],
["Daily Show", "Stephen Colbert"],
["President arrested and brought to custody", "US Grant"],
["Least favorite household chore", "doing dishes"],
["Big Ben Tower", "Elizabeth Tower"],
["You really got ahold on me", "Smokey Robinson"],
["Dr. John Pemberton created", "Coca Cola"],
["Badges, we don't need stinking badges", "The treasure of sierra madre"],
["Old Oaken Bucket trophy", "Indiana v. Purdue"],
["Face of Af. Am. 1970's \"baller\"", "Walt Frasier"],
["Old man in UP name", "Carl"],
["Author of The Brethren", "Grisham"],
["Blame it on the rain", "Milli Vanilli"],
["Largest living invertebrate", "Giant squid"],
["Picture of old lady", "Cloris Leachman"],
["Does not border Laos", "Singapore"],
["Mel's diner in what city", "Phoenix"],
["Bob Marley and Donkey Kong", "1981"],
["Cards Against Humanity reader", "Card Czar"],
["Gringotts Bank", "Where goblins work"],
["Not OG flintstones vitamin", "Betty"],
["Sandy Koufax", "Dodgers"],
["Cumberland Pass", "Appalachian Mountains"],
["#1 James Bond song", "View to a Kill"],
["Danger Mouse sidekick", "Hamster"],
["Artery down arm", "carotid"],
["USHL team Gordie Howe", "NY Rangers"],
["Steel Magnolias -Ouiser Boudreaux", "Shirley MacLaine"],
["HVAC", "heating ventilation air conditioning"],
["Blurred picture of Phase 10", "Phase 10"],
["Not a lord in brave", "McIntosh"],
["First president of academy of arts", "Douglas Fairbanks"],
["Youngest SNL member", "pete davidson"],
["ROCKY 3", "Hulk Hogan"],
["Airborne does what", "prevents colds"],
["Letter not in state", "Q"],
["Who sings King of the Road", "Roger Miller"],
["Won best actor and actress Oscar", "As Good as it gets"],
["The people's car", "VW"],
["Rita Glossner what show?", "The Middle"],
["U2", "Calm im a tempest harbor"],
["Lord of the Dance", "Michael Flatley"],
["Rookie of the Year / MVP the next year", "Cal Ripken Jr"],
["First US to issue mail order catalog", "montgomery ward"],
["Mother of all", "FERRIS"],
["Bond agency", "mi6"],
["Nori is what", "seaweed"],
["John mayer song", "candy lips and bubble gum tongue"],
["Polaris is what constellation", "ursa minor"],
["Darla was from", "beavis and butthead"],
["Year nelson mandela released", "1990"],
["Capital of n ireland", "belfast"],
["Knighted and gave back 4 years later", "lennon"],
["One stomach flu away from goal weight", "devil wears prada"],
["Mariah carey and boys to men", "one sweet day"],
["Impossible is nothing", "adidas"],
["Year chuck yeager broke sound barrier", "1947"],
["William shatner's character in boston legal", "denny crane"],
["Life elevated", "utah"],
["Lord of the flies", "william golding"],
["First lady of country music", "tammy wynette"],
["19873 mph =", "476,952 miles/day"],
["Wedding crashers last name", "cleary"],
["49ers #16", "joe montana"],
["Eyes famous", "Christina Hendricks"],
["What film not nicholas sparks", "trig tales etc"],
["Melvin kaminsky", "mel brooks"],
["Duet with dead father", "natalie cole"],
["Group of jellyfish", "smack"],
["Jones diary signed by", "hitler"],
["How many years in US to be president", "14"],
["Cap of nova scotia", "halifax"],
["Roy finkle character", "ace ventura"],
["Waldo the wizard tried to replace", "lucky"],
["Smooth like butter", "BTS"],
["Horse that hasn\u2019t run a race", "maiden"],
["Janet's last name in 3s company", "wood"],
["Harding met his mistress in", "closet"],
["Longest wooden rollercoaster", "kings island"],
["3M stands for", "Minnesota Mining and Manufacturing"],
["Time well wasted", "brad paisley"],
["Owls cant move", "eyes"],
["Shirts and pants quote", "wedding crashers"],
["Most olympic medals", "phelps"],
["Actor", "jason clarke"],
["Tie breaker year tom hanks in dragnet", "1987"],
["Simplon pass", "switzerland and italy"],
["Cases in a keg", "6.88"],
["Resistance", "ohms"],
["Iranian hostages", "112 and 444 days"],
["Fungus", "egon"],
["Po teletubby", "purple"],
["Lincoln", "secret service"],
["Mendeleev", "annapolis"],
["One went to chicago the other to st paul im in colorade", "leader of the band"],
["Book with no e", "gadsby"],
["Taxes", "16th amendment"],
["Aluminum", "bauxite"],
["Diane sawyer", "gma"],
["Randy johnson", "astros"],
["Roger rabbit", "bob hoskins"],
["Sky blue h2o", "hamms"],
["Office", "will ferrell"],
["Dr strange", "shamballa"],
["Glossitis", "tongue"],
["Petticoat junction", "kate bradley"],
["Elvis grammy", "gospel"],
["In which decade was the Pledge of Allegiance officially adopted by the US Congress?", "1940s"],
["Giverny", "monet"],
["Goal posts", "18'6\""],
["York patties", "hersheys"],
["Bolt", "travolta"],
["Singultus", "hiccup"],
["The fighter", "underwood"],
["Fingernails", "keratin"],
["Commander cody", "hotrod lincoln"],
["Disc world", "pratchett"],
["Mike ditka Bears beat who in SB 24", "broncos"],
["Triple divide", "montana"],
["White and nerdy", "straight outta lynwood"],
["Ronan", "guardians"],
["Manning", "papa johns"],
["Baron of renfrew", "charles, now william"],
["Home sweet home", "motley crue"],
["Theory of relativity", "1910"],
["Pooh", "heffalump"],
["Race", "modern english"],
["Little house on prairie", "baker"],
["Reach for stars", "Casey Kasem"],
["Ahmad rashad", "bobby moore"],
["Dr seusee", "fox in socks"],
["Male horse female donkey", "hinny"],
["Tom and jerry dog", "spike"],
["Best selling live album", "garth brooks"],
["Google bought", "youtube"],
["Muppet scientist", "dr honeydew"],
["Hitlers failed attempt", "1923"],
["Bokononism - cats cradle", "kurt vonnegut"],
["Zirconium", "zr"],
["First pres born after decl. of indep.", "Van Buren"],
["Middle child in the Middle", "sue"],
["Danube flows into", "black sea"],
["Brendan walsh works in", "the peach pit"],
["First team to win BCS in 1999", "tennessee"],
["Interest rate theory", "fisher effect"],
["Camp david known as", "shangri-la"],
["Hawaii 5-0 catchphrase", "book'em dano"],
["Wahlberg in The Fighter", "Micky Ward"],
["What states border Saskatchewan", "Montana and North Dakota"],
["Trix", "general mills"],
["Newsroom ACN", "Atlantis Cable Network"],
["Sun from earth", "93M miles"],
["LOTR composer", "Howard Shore"],
["Blarney stone located in", "cork"],
["84 games reaching base", "ted williams"],
["What a fool believes, he sees", "the wise man has the power"],
["CVX stock symbol", "chevron"],
["States that border NM", "colorado, oklahoma, texas, arizona, utah"],
["10th best athlete of 20th C.", "Babe Didrikson"],
["In the heat of the night", "sparta, MS"],
["Millionaire host", "cedric"],
["Blazing saddles last name", "johnson"],
["Number of states border texas", "4"],
["5'4\" president", "madison"],
["Beetlejuice", "alec baldwin"],
["Palin stalker", "joe mcginnis"],
["Birthplace of baseball", "hoboken, NJ"],
["2009 CMA entertainer of the year", "Taylor Swift"],
["1818 american clothing co", "brooks bros"],
["Costliest hurricane of the 90's", "andrew"],
["Garfield", "jim davis"],
["Fast times song", "moving in stereo - the cars"],
["2 presidents born in vermont", "Arthur and Coolidge"],
["Dolly parton song in 1958", "puppy love"],
["27 wins in 1973", "steve carlton"],
["Zorro horse", "tornado"],
["Wall-e", "buy N large"],
["Finding nemo shark", "bruce"],
["Bass pro shop opened", "1972"],
["In which state does Interstate 40 end at its eastern end?", "North Carolina"],
["For your eyes only", "1981"],
["First female 4 star general", "Dunwoody 2008"],
["AS", "arsenic"],
["The aviator", "cate blanchett and jude law"],
["Armageddon", "harry stamper"],
["First best animated feature", "shrek"],
["Mt sunflower", "kansas"],
["Alien sedition act", "Adams"],
["Tales of a 4th grade nothing", "judy blume"],
["Dragnet badge", "714"],
["Mt. wannahockaloogie", "Finding Nemo"],
["College in pitch perfect", "barton"],
["Grand canyon np status", "1919"],
["Yogurt origin", "turkey"],
["UPS founding city in 1907", "seattle"],
["Snake river starts in", "wyoming"],
["Vp in 1975", "Rockefeller"],
["Cenocilliacaphobia", "fear of empty beer glass"],
["First night baseball game", "1935"],
["Fine pix camera", "fuji"],
["First contact star trek", "Zefram Cochrane"],
["Shoeless joe", "W. P. Kinsella"],
["Dr foreman", "omar epps"],
["Travellin man", "ricky nelson"],
["Brown eyed girl", "1967"],
["La state year", "1812"],
["Pretty woman", "vivian ward"],
["Fool for the city", "foghat"],
["Landlocked", "moldova"],
["Nebuchadnezzar", "20 bottles"],
["Exxon valdez captain", "joe hazelwood"],
["Stp", "scientifically treated petroleum"],
["Be cool", "get shorty"],
["Cuban missile crisis", "Khrushchev"],
["Hanna-Barbera hound who sang 'Oh My Darling, Clementine'", "Huckleberry Hound"],
["The AT&T hostess", "lily"],
["Home album", "daughtry"],
["Tom cruise", "peter flanagan"],
["Nirvana lyric \"as an old\"", "enemy"],
["Glow worm", "churchill"],
["Marshas nose", "peter"],
["Pretty in pink", "Psychedelic Furs"],
["Bucharest", "romania"],
["Herbie", "53"],
["Income tax quote", "einstein"],
["Basset hound in Dukes of Hazzard", "flash"],
["Old rough and ready", "Taylor"],
["Reggie white's first team", "Eagles"],
["Dice", "pips"],
["S antilles", "barbados"],
["Cousin eddies dog", "snot"],
["34th st", "macy's"],
["Castle lager", "s africa"],
["Dressed to kill", "kiss"],
["Most mlb wins", "cy young"],
["Grinch mountain", "mt. crumpit"],
["Grinch heart", "3X"],
["75 knots", "86 mph"],
["Carl denham in king kong", "jack black"],
["Houdini", "roosevelt"],
["Dow jones", "30"],
["Poet from chicago", "carl sandburg"],
["2010 olympics womens hockey winner", "canada"],
["Vp charles curtis (native american VP)", "herbert hoover"],
["Wuthering heights", "emily bronte"],
["Sonny crockett partner", "rico tubbs"],
["Superman satellite", "wayne enterprises"],
["F(x) etc", "2"],
["Most world cup losses", "mexico"],
["Waterloo in", "belgium"],
["Like a mini buddah", "anchorman"],
["West german capital", "bonn"],
["Crazy horse died in", "nebraska"],
["20 in monopoly", "green"],
["Iron man 3 sidekick", "harley"],
["Ironman watch", "dora the explorer"],
["5 superbowls all losses", "gale gilbert"],
["Superbowl 38 halftime", "JT and Janet"],
["Pres candidate shot in wisconsin saloon", "Theodore Roosevelt"],
["Cars drive in", "The Cozy Cone"],
["Kirk gibson", "tigers and dodgers"],
["Phineas ferb", "disney"],
["Once more you open the door", "heart will go on"],
["Willy Wonka first to fail", "Augustus Gloop"],
["Hypophosphatasia", "bones"],
["Killed osiris", "set"],
["Ratio of circumference to diameter", "pi"],
["Bidi bidi bidi", "twiki"],
["Muriels wedding favorite band", "abba"],
["Stop the insanity", "susan powter"],
["Canadian province", "manitoba"],
["2023 world chess champ", "Ding Liren"],
["Good News first album", "Megan Thee Stallion"],
["John Steed and Emma Peel", "The Avengers"],
["Space Age Love Song", "Flock of Seagulls"],
["ARDS", "Acute Respiratory Distress Syndrome"],
["Spell Zach's name correctly", "Zach G-a-l-i-f-i-a-n-a-k-i-s"],
["Blue Angels introduced", "1946"],
["Youngest Daytona 500 winner", "Trevor Bayne"],
["2023 Cool Cat by Queen commercial", "Amazon"],
["Who voiced the character of Groot in the Guardians of the Galaxy movies?", "Vin Diesel"],
["How many hits does it take to sink a Cruiser in Battleship", "3"],
["First name of guy in Fargo", "Jerry"],
["First US trade treaty was with", "Japan"],
["Additive in Starbucks frappuccino", "xanthan gum"],
["2 mammals that lay eggs", "platypus and echidna"],
["Gil Grissom in CSI", "William Petersen"],
["Malcolm in the middle drug store", "Lucky Aide"],
["27 heavyweight title fight", "Joe Lewis"],
["National Monument between Canal, Decatur, Rampart and Esplanade", "French Quarter"],
["Islets of Langerhans produce hormones in", "pancreas"],
["Seafood chain started in FL in 1968", "Red Lobster"],
["Dog in Crackerjack box", "Bingo"],
["Not an official language in PNG", "spanish"],
["Doberman in Magnum PI", "Zeus and Apollo"],
["Grand Theft Auto director 1977", "Ron Howard"],
["Movie \"ghost who walks with man cannot die\"", "The Phantom"],
["Cereal strapped to bottom of Talladega car by dad", "Lucky Charms"],
["Alvin wants what for xmas", "Hula Hoop"],
["Art Ross trophy", "Hockey"],
["Full House Dog", "Comet"],
["Doll Aronld tries to get in Jingle All The Way", "Turbo Man"],
["What song does Schroeder play", "Fur Elise"],
["Sean Thornton in Ireland movie", "The Quiet Man"],
["State with most registered boats", "FL"],
["Lil Dickey's real name", "Davis Burd"],
["Homer's favoirte song", "It's raining Men"],
["Ebay's millionth item sold", "Big Bird Jack in the Box"],
["Scott Bakula's character in Star Trek", "John Archer"],
["Rock Star movie band name", "Steel Dragon"],
["1313 S. Harbor Blvd", "Disneyland"],
["Tic tac toe with bean bags", "Toss Across"],
["Easton Assassin", "Larry Holmes"],
["Herbie Hancock car commercial", "Toyota"],
["1941 book and 2006 movie", "Flicka"],
["Bear ate his head, thought it was candy", "Dave Matthews Band"],
["Don't pee and tell me its raining book", "Judge Judy"],
["Landlocked by landlocked countries", "Liechtenstein"],
["Not included in Who's on First", "Right Field"],
["Who created Napster", "Shawn Fanning"],
["Heart chakra represented by what color", "green"],
["St-Paul act", "Cirque du Soleil"],
["I love Vermont but it\u2019s the _______", "Season of the sticks"],
["NASCAR race that award Grandfather clock", "Martinsville speedway"],
["To Kill a Mockingbird set in what fictional AL city", "Maycomb"],
["Since 1967 Sweden switched to driving on what side", "right"],
["Wide receiver Sanderson in Any Given Sunday", "Bill Bellamy"],
["First line of Back in the USSR", "Flew in from Miami"],
["Before what season were goalposts moved", "1974"],
["250 year lifespan", "greenland shark"],
["Bear in Toy Story 3", "Lotso"],
["Game Halma from 1800's", "Chinese checkers"],
["Leon Czolgosz famous for", "assassinating McKinley"],
["Impossible Girl in Dr Who", "Clara Oswald"],
["Michael Keaton movie re cars in Japan", "Gung Ho"],
["Long Black Train first album", "Josh Turner"],
["Love Actually final song", "God Only Knows"],
["Movie about Mercy Me Bart Millard", "I Can Only Imagine"],
["OP for invading Russia", "Operation Barbarossa"],
["Mayberry citizen is corpulent", "Otis Campbell"],
["How many states border great lakes", "8"],
["Consecutive games with a hit for DiMaggio", "56"],
["Only inductee to HOG between 1940-43", "Rogers Hornsby"],
["Bird with longest wingspan", "Wandering albatross"],
["The Wanderer", "Dion"],
["DNS", "Domain Name System"],
["Munster's pet bat", "Igor"],
["Jeff Bridges picture show", "The Last Picture Show"],
["Wyatt's 2 brothers", "Virgil and Morgan"],
["John Rutsey original drummer of", "Rush"],
["Do your dance, word up singer", "Cameo"],
["Nothing like a good piece of hickory line from what movie", "Pale Rider"],
["Churchill won Nobel for", "Literature"],
["Charli XCX Speed Drive samples from", "Mickey"],
["What gives diamonds blue color", "Boron"],
["First in R&R and Country HOF", "Johnny Cash"],
["Vulcanization is adding what to rubber", "sulfur"],
["Julia Roberts movie", "Mystic Pizza"],
["Back in the USSR plane touched down at", "3 o'clock"],
["Cody Hoyt in Big Sky is", "Jenny's husband"],
["1901 batting champion", "Nap Lajoie"],
["Not Post Malone song", "Stay Awake"],
["Tyson's first belt", "Trevor Berbick"],
["Fantastic Mr. Fox author", "Roald Dahl"],
["1938 legislation that set 40 hr workweek and minimum wage", "Fair Labor Standards Act"],
["Length of Sunshine Skyway Bridge", "21,000 feet"],
["Grace Bay Beach and Cockburn Harbor in", "Turks and Caicos"],
["Sirius is in", "Canis Major"],
["Big Bang IQ 173", "Leonard Hofstadter"],
["I-90 runs through", "VA"],
["Niblick golf", "Iron"],
["John Michael Higgins Game Show Network", "Chain Reaction"],
["Microscope manufacturer", "Carl Zeiss"],
["Risk/Life/Monopoly", "Parker Bros"],
["Waffle House commode", "Talladega Nights"],
["Prohibition amendment", "18th"],
["Number of ppl in NightHawks diner", "3"],
["Michael Phelps record", "golf"],
["Oktoberfest started because of", "wedding"],
["Black Elk Peak", "S. Dakota"],
["Bobby Cox managed what team on 1982", "Blue Jays"],
["Gerald Ford middle name", "Rudolph"],
["Longest engagement in history", "67 years"],
["Racehorses get what buried", "head, heart, hooves"],
["Butch Cassidy home state", "UT"],
["First player to steal 100 bases back to back", "Rickey Henderson"],
["What President's kids brought pony upstairs in WH", "Theodore Roosevelt"],
["Bob Seger album", "Against the wind"],
["Capital means Black Pool", "Dublin"],
["First triple double for whole NBA season", "Oscar Robertson"],
["Word spelled same forwards, backwards and upside down", "noon"],
["If I die Young singer", "The Band Perry"],
["What Dreams are made of is from", "The Lizzie McGuire Movie"],
["TV show in Charming, CA", "SOA"],
["Dewey's first name", "Melvil"],
["First Secretary of State", "Jefferson"],
["Soprano maiden name", "DeAngelis or Moltesanti"],
["Don't call me Shirley", "Striker"],
["Hispanic artist in 50's, 70's, and 90's", "Freddy Fender"],
["Superbowl ad \"When I grow up\"", "Monster.com"],
["Country largest producer of hazelnuts", "Turkey"],
["Not a CAT 5 hurricane", "Nina"],
["Transformers voice of Sentinel Prime", "Leonard Nimoy"],
["James Spader name on The Blacklist", "Raymond Reddington"],
["Alcatraz opened in", "1930's"],
["Spell correctly", "Wile E. Coyote"],
["Country that drinks the most tea per capita", "Turkey"],
["Superbowl commercial for hiring service", "workday"],
["Lesane Crooks is", "Tupac Shakur"],
["Didn't win Finals, AllStar or League MVP", "Bill Russell"],
["First Pokémon given", "Pikachu"],
["Moshe Katsav", "Israel president"],
["Only country with letters in same keyboard row", "Peru"],
["Office Space tv show they watched in his apt", "Kung Fu"],
["Tim Dwight return kickoff in SB for what team", "Falcons"],
["Rain on Me singers", "Gaga and Ariana"],
["First team to be ranked #1 in the College Football Playoff rankings in 2014", "Miss. State"],
["Ironman II director", "Jon Favreau"],
["Canada's prime minister in 2006", "Stephen Harper"],
["\"dude president\"", "Chester Arthur"],
["O.D, O.S., O.V. abbreviations", "eyes"],
["Not ingredient in Campbell's green beans", "almonds"],
["Nolan Bushnell (Chuck & Cheese) launched", "Atari"],
["Isicles and popsicles song", "The Mermaids"],
["US state with most eruptions", "Alaska"],
["Horseshoe nebula constellation", "Orion"],
["2021 set CBF record for most yards thrown", "Bailey Zappe"],
["Dof named liberty", "Gerald Ford"],
["Yosemite Sam based on", "Friz Freleng"],
["Brenner pass between", "Austria and Italy"],
["Simplon pass between", "Switzerland and Italy"],
["Walk Away singer", "Kelly Clarkson"],
["Star Wars \"Tomorrow at dawn, X lessons\"", "three"],
["Data cat's name in Star Trek", "Spot"],
["#1 spot on Billboard in 4 decades", "Mariah Carey"],
["Rita Moreno in what detective series", "Rockford Files"],
["Chitty chitty bang bang", "four-fendered friend"],
["Lord Stanley of", "Preston"],
["First Monkees to leave band", "Peter Tork"],
["Not presidential secret service nickname", "preacher"],
["Hair so big, full of secrets quote from", "Mean Girls"],
["First two songs were #1 and #2 hits in top 100", "Iggy Azalea"],
["Resort in Dirty Dancing", "Kellerman's"],
["Host of Card Shark", "Joel McHale"],
["Roman calendar began in", "March"],
["Colors of the rainbow slogan", "Nerds"],
["Walking the line, mistakes can't hide TV theme song to", "Ally McBeal"],
["Bartender video game", "Tapper"],
["George Wallace governor of", "Alabama"],
["Anatidoephobic", "fear of being watched by ducks"],
["Cenocillicaphobia", "fear of empty beer glass"],
["Rice Krispy treats 1964 jingle by", "Rolling Stones"],
["What was time machine in OG Back to Future script", "fridge"],
["12th sign of zodiac", "pisces"],
["President who was bartender", "Lincoln"],
["Maddux won cy young in what years", "92-95"],
["WIFI password in Dr Strange", "Shamballa"],
["Superbowl in four decades", "Giants"],
["Actor in most seasons of NCIS", "McGee"],
["JD Salinger full name", "Jerome David"],
["Everclear song \"dreaming of the west coast\"", "Santa Monica"],
["Halcyon days meaning", "calm"],
["Thurmont facility known as", "Camp David"],
["Craig Heyward nickname", "Iron head"],
["Walk of fame in manhattan", "fashion"],
["Lady Byng trophy", "hockey"],
["Forfeit score in MLB", "nine to 0"],
["Pure brewed in God's Country", "Old Style"],
["ET didn't use to phone home", "headphones"],
["Second-most abundant element in universe after hydrogen", "helium"],
["Last battle of whites and indians", "wounded knee"],
["Youngest winner of LPGA tourney", "Lydia Kuo"],
["Look so good, sop you up with a biscuit", "coming to america"],
["Live like we're dying", "Kris Allen"],
["Jack LaLanne dead or alive", "Dead"],
["Doc Brown's dog in BTTF III", "Copernicus"],
["Atlas mountains in what continet", "Africa"],
["The Great Compromiser speaker of house", "Clay"],
["2025 record of the year", "Kendrick"],
["Dr Who that was sorcerer in LOTR", "Sylvester McCoy"],
["Lake Vostok", "Antarctica"],
["First Japanese car produced in US", "Honda Accord"],
["Shoat is baby", "pig"],
["Who wrote Ferris Bueller", "John Hughes"],
["Barenaked ladies song Like ____ _____ I'm frantic", "Harrison Ford"],
["AL team on 1969 went bankrupt", "Seattle Pilots"],
["Octopus is what type of animal", "mollusk"],
["Here's your sign comedy album", "Bill Engvall"],
["Big Hero 6 robot", "Baymax"],
["Thomas Rhett missing lyric", "Coldplay"],
["Victory verticals", "pianos"],
["Seattle Band in Singles", "Pearl Jam"],
["Ice and Snow lyrics band", "Led Zeppelin"],
["Not in southern sky", "Rigel"],
["NHL team was once Colorado Rockies", "NJ Devils"],
["Green Hornet's car", "black beauty"],
["Cats cradle author", "kurt vonnegut"],
["Henry Hudson sailed for what country", "Dutch - Netherlands"],
["3rd most expensive monopoly property", "Marvin Gardens"],
["First presidential home", "Samuel Osgood House"],
["Lewiston and Clarkston border what two states", "Idaho and Washington"],
["The Amish Rifle", "Ryan Fitzpatrick"],
["Longest daily comic strip", "Gasoline Alley"],
["Flaming Gorge and Glen Canyon in", "Utah"],
["Princess Bride MLT", "Mutton"],
["Third on most consecutive games played in MLB", "Everett scott"],
["Mama Cass died of", "heart attack"],
["Voice of Ralph Wiggins", "Nancy Cartwright"],
["Peary the first to reach", "N. Pole"],
["Strigiform order of what animals", "owls"],
["Twins on Everybody loves raymond", "michael and geoffrey"],
["Thousand Islands archipelago", "Lake Ontario"],
["What year was Gray's Anatomy published", "1858"],
["Tennis Grand Slam twice", "Rod Laver"],
["Sandlot dog", "Hercules"],
["Garfield's rubber chicken", "Stretch"],
["Garfield creator", "Jim Davis"],
["Most wins at Daytona", "Richard Petty"],
["Not a singer in All For Love", "Bon Jovi"],
["Smallest lizard", "nano chameleon"],
["First woman to serve in both houses of congress", "Margaret Chase Smith"],
["NY lawyer memorial in 1920", "Mt. Rushmore"],
["Fading and eventually vanishing", "Evanescence"],
["Hanami is yearly celebration of", "cherry blossom"],
["How much water can camel drink in 13 mins", "30 gallons"],
["Who voiced Mr. Magoo", "Jim Backus"],
["4 time coach in Super Bowl who played in NBA", "Bud Grant"],
["Dog in National Lampoon's Vacation", "Dinky"],
["Maxwell Smart's number", "86"],
["MLK's original first name", "michael"],
["What president established NASA", "Eisenhower"],
["Who originally sang \"Always there to remind me\"", "Dionne Warwick"],
["How many floors in Pentagon", "7"],
["Head of MI6 letter", "C"],
["First black senator", "Hiram Revels"],
["Odin dies in", "Norway"],
["Old time rock and roll", "10 minutes"],
["Last year france executed via guillotine", "1977"],
["SNL host on 30 Rock", "Steve Martin"],
["How many gallons in a barrel", "15.5"],
["Idlewild airport now named", "JFK"],
["What card game is this", "Dominion"],
["Bavarian village with passion play", "Oberammergau"],
["Literary theme of recurring symbolic significance", "motif"],
["Musical interval b/w notes 12 semi-tones apart", "octave"],
["Dwayne Johnson played at", "University of Miami"],
["When the lights go dim", "Carrie"],
["Marjory Douglas river of grass national park", "Everglades"],
["Crew chiefs for", "Jeff Gordon"],
["First all star game in 1933", "Comiskey Park"],
["Spartacus love interest", "Jean Simmons"],
["Altophobia is fear of", "heights"]
];
/* 2026-10-25 expansion: additional Trivia Sheet-style clue pairs
   (books and their authors, capitals, symbols, presidents, state
   nicknames, baby animals, and dated events), verified facts only. */
DJ_RAW.push(["'Emma' was written by", "Jane Austen"]);
DJ_RAW.push(["'Persuasion' was written by", "Jane Austen"]);
DJ_RAW.push(["'Sense and Sensibility' was written by", "Jane Austen"]);
DJ_RAW.push(["'Jane Eyre' was written by", "Charlotte Brontë"]);
DJ_RAW.push(["'Wuthering Heights' was written by", "Emily Brontë"]);
DJ_RAW.push(["'Moby-Dick' was written by", "Herman Melville"]);
DJ_RAW.push(["'The Scarlet Letter' was written by", "Nathaniel Hawthorne"]);
DJ_RAW.push(["'Little Women' was written by", "Louisa May Alcott"]);
DJ_RAW.push(["'Great Expectations' was written by", "Charles Dickens"]);
DJ_RAW.push(["'A Tale of Two Cities' was written by", "Charles Dickens"]);
DJ_RAW.push(["'Oliver Twist' was written by", "Charles Dickens"]);
DJ_RAW.push(["'A Christmas Carol' was written by", "Charles Dickens"]);
DJ_RAW.push(["'Bleak House' was written by", "Charles Dickens"]);
DJ_RAW.push(["'Hard Times' was written by", "Charles Dickens"]);
DJ_RAW.push(["'Frankenstein' was written by", "Mary Shelley"]);
DJ_RAW.push(["'Dracula' was written by", "Bram Stoker"]);
DJ_RAW.push(["'The Picture of Dorian Gray' was written by", "Oscar Wilde"]);
DJ_RAW.push(["'The Time Machine' was written by", "H. G. Wells"]);
DJ_RAW.push(["'The War of the Worlds' was written by", "H. G. Wells"]);
DJ_RAW.push(["'The Invisible Man' was written by", "H. G. Wells"]);
DJ_RAW.push(["'Treasure Island' was written by", "Robert Louis Stevenson"]);
DJ_RAW.push(["'The Strange Case of Dr Jekyll and Mr Hyde' was written by", "Robert Louis Stevenson"]);
DJ_RAW.push(["'The Jungle Book' was written by", "Rudyard Kipling"]);
DJ_RAW.push(["'Heart of Darkness' was written by", "Joseph Conrad"]);
DJ_RAW.push(["'The Great Gatsby' was written by", "F. Scott Fitzgerald"]);
DJ_RAW.push(["'To Kill a Mockingbird' was written by", "Harper Lee"]);
DJ_RAW.push(["'Of Mice and Men' was written by", "John Steinbeck"]);
DJ_RAW.push(["'The Grapes of Wrath' was written by", "John Steinbeck"]);
DJ_RAW.push(["'East of Eden' was written by", "John Steinbeck"]);
DJ_RAW.push(["'Brave New World' was written by", "Aldous Huxley"]);
DJ_RAW.push(["'Animal Farm' was written by", "George Orwell"]);
DJ_RAW.push(["'Fahrenheit 451' was written by", "Ray Bradbury"]);
DJ_RAW.push(["'The Catcher in the Rye' was written by", "J. D. Salinger"]);
DJ_RAW.push(["'The Old Man and the Sea' was written by", "Ernest Hemingway"]);
DJ_RAW.push(["'A Farewell to Arms' was written by", "Ernest Hemingway"]);
DJ_RAW.push(["'As I Lay Dying' was written by", "William Faulkner"]);
DJ_RAW.push(["'The Sound and the Fury' was written by", "William Faulkner"]);
DJ_RAW.push(["'Their Eyes Were Watching God' was written by", "Zora Neale Hurston"]);
DJ_RAW.push(["'Invisible Man' was written by", "Ralph Ellison"]);
DJ_RAW.push(["'Native Son' was written by", "Richard Wright"]);
DJ_RAW.push(["'The Color Purple' was written by", "Alice Walker"]);
DJ_RAW.push(["'Beloved' was written by", "Toni Morrison"]);
DJ_RAW.push(["'One Hundred Years of Solitude' was written by", "Gabriel García Márquez"]);
DJ_RAW.push(["'Don Quixote' was written by", "Miguel de Cervantes"]);
DJ_RAW.push(["'The Divine Comedy' was written by", "Dante Alighieri"]);
DJ_RAW.push(["'The Iliad' was written by", "Homer"]);
DJ_RAW.push(["'The Odyssey' was written by", "Homer"]);
DJ_RAW.push(["'The Canterbury Tales' was written by", "Geoffrey Chaucer"]);
DJ_RAW.push(["'Crime and Punishment' was written by", "Fyodor Dostoevsky"]);
DJ_RAW.push(["'The Brothers Karamazov' was written by", "Fyodor Dostoevsky"]);
DJ_RAW.push(["'War and Peace' was written by", "Leo Tolstoy"]);
DJ_RAW.push(["'Anna Karenina' was written by", "Leo Tolstoy"]);
DJ_RAW.push(["'Les Misérables' was written by", "Victor Hugo"]);
DJ_RAW.push(["'The Hunchback of Notre-Dame' was written by", "Victor Hugo"]);
DJ_RAW.push(["'Madame Bovary' was written by", "Gustave Flaubert"]);
DJ_RAW.push(["'The Count of Monte Cristo' was written by", "Alexandre Dumas"]);
DJ_RAW.push(["'The Three Musketeers' was written by", "Alexandre Dumas"]);
DJ_RAW.push(["'Around the World in Eighty Days' was written by", "Jules Verne"]);
DJ_RAW.push(["'Twenty Thousand Leagues Under the Seas' was written by", "Jules Verne"]);
DJ_RAW.push(["'Journey to the Centre of the Earth' was written by", "Jules Verne"]);
DJ_RAW.push(["'The Hound of the Baskervilles' was written by", "Arthur Conan Doyle"]);
DJ_RAW.push(["'Murder on the Orient Express' was written by", "Agatha Christie"]);
DJ_RAW.push(["'And Then There Were None' was written by", "Agatha Christie"]);
DJ_RAW.push(["'Gone with the Wind' was written by", "Margaret Mitchell"]);
DJ_RAW.push(["'The Wonderful Wizard of Oz' was written by", "L. Frank Baum"]);
DJ_RAW.push(["'Mary Poppins' was written by", "P. L. Travers"]);
DJ_RAW.push(["'Pippi Longstocking' was written by", "Astrid Lindgren"]);
DJ_RAW.push(["'The Cat in the Hat' was written by", "Dr. Seuss"]);
DJ_RAW.push(["'Green Eggs and Ham' was written by", "Dr. Seuss"]);
DJ_RAW.push(["'Where the Wild Things Are' was written by", "Maurice Sendak"]);
DJ_RAW.push(["'Goodnight Moon' was written by", "Margaret Wise Brown"]);
DJ_RAW.push(["'The Very Hungry Caterpillar' was written by", "Eric Carle"]);
DJ_RAW.push(["'A Wrinkle in Time' was written by", "Madeleine L'Engle"]);
DJ_RAW.push(["'The Giver' was written by", "Lois Lowry"]);
DJ_RAW.push(["'Holes' was written by", "Louis Sachar"]);
DJ_RAW.push(["'Wonder' was written by", "R. J. Palacio"]);
DJ_RAW.push(["'Diary of a Wimpy Kid' was written by", "Jeff Kinney"]);
DJ_RAW.push(["'The Hunger Games' was written by", "Suzanne Collins"]);
DJ_RAW.push(["'Divergent' was written by", "Veronica Roth"]);
DJ_RAW.push(["'The Fault in Our Stars' was written by", "John Green"]);
DJ_RAW.push(["'Twilight' was written by", "Stephenie Meyer"]);
DJ_RAW.push(["'Dune' was written by", "Frank Herbert"]);
DJ_RAW.push(["'Foundation' was written by", "Isaac Asimov"]);
DJ_RAW.push(["'I, Robot' was written by", "Isaac Asimov"]);
DJ_RAW.push(["'Ender's Game' was written by", "Orson Scott Card"]);
DJ_RAW.push(["'A Game of Thrones' was written by", "George R. R. Martin"]);
DJ_RAW.push(["'The Name of the Wind' was written by", "Patrick Rothfuss"]);
DJ_RAW.push(["'Mistborn' was written by", "Brandon Sanderson"]);
DJ_RAW.push(["'American Gods' was written by", "Neil Gaiman"]);
DJ_RAW.push(["'Coraline' was written by", "Neil Gaiman"]);
DJ_RAW.push(["'The Hitchhiker's Guide to the Galaxy' was written by", "Douglas Adams"]);
DJ_RAW.push(["'Neuromancer' was written by", "William Gibson"]);
DJ_RAW.push(["'The Martian' was written by", "Andy Weir"]);
DJ_RAW.push(["'Ready Player One' was written by", "Ernest Cline"]);
DJ_RAW.push(["'The Da Vinci Code' was written by", "Dan Brown"]);
DJ_RAW.push(["'The Girl with the Dragon Tattoo' was written by", "Stieg Larsson"]);
DJ_RAW.push(["'Gone Girl' was written by", "Gillian Flynn"]);
DJ_RAW.push(["'Winnie-the-Pooh' was written by", "A. A. Milne"]);
DJ_RAW.push(["'Peter Pan' was written by", "J. M. Barrie"]);
DJ_RAW.push(["'The Wind in the Willows' was written by", "Kenneth Grahame"]);
DJ_RAW.push(["'Matilda' was written by", "Roald Dahl"]);
DJ_RAW.push(["'Charlie and the Chocolate Factory' was written by", "Roald Dahl"]);
DJ_RAW.push(["'The BFG' was written by", "Roald Dahl"]);
DJ_RAW.push(["'James and the Giant Peach' was written by", "Roald Dahl"]);
DJ_RAW.push(["'Anne of Green Gables' was written by", "L. M. Montgomery"]);
DJ_RAW.push(["'Little House on the Prairie' was written by", "Laura Ingalls Wilder"]);
DJ_RAW.push(["'The Secret Garden' was written by", "Frances Hodgson Burnett"]);
DJ_RAW.push(["'Black Beauty' was written by", "Anna Sewell"]);
DJ_RAW.push(["'The Call of the Wild' was written by", "Jack London"]);
DJ_RAW.push(["'White Fang' was written by", "Jack London"]);
DJ_RAW.push(["'Kim' was written by", "Rudyard Kipling"]);
DJ_RAW.push(["'The Hobbit' was written by", "J. R. R. Tolkien"]);
DJ_RAW.push(["'The Fellowship of the Ring' was written by", "J. R. R. Tolkien"]);
DJ_RAW.push(["'The Lion, the Witch and the Wardrobe' was written by", "C. S. Lewis"]);
DJ_RAW.push(["'The Handmaid's Tale' was written by", "Margaret Atwood"]);
DJ_RAW.push(["'The Kite Runner' was written by", "Khaled Hosseini"]);
DJ_RAW.push(["'Life of Pi' was written by", "Yann Martel"]);
DJ_RAW.push(["'The Alchemist' was written by", "Paulo Coelho"]);
DJ_RAW.push(["'Memoirs of a Geisha' was written by", "Arthur Golden"]);
DJ_RAW.push(["'The Book Thief' was written by", "Markus Zusak"]);
DJ_RAW.push(["'Water for Elephants' was written by", "Sara Gruen"]);
DJ_RAW.push(["'The Help' was written by", "Kathryn Stockett"]);
DJ_RAW.push(["'Room' was written by", "Emma Donoghue"]);
DJ_RAW.push(["'The Night Circus' was written by", "Erin Morgenstern"]);
DJ_RAW.push(["Capital of cambodia", "Phnom Penh"]);
DJ_RAW.push(["Capital of myanmar", "Naypyidaw"]);
DJ_RAW.push(["Capital of the UK", "London"]);
DJ_RAW.push(["Capital of germany", "Berlin"]);
DJ_RAW.push(["Capital of spain", "Madrid"]);
DJ_RAW.push(["Capital of switzerland", "Bern"]);
DJ_RAW.push(["Capital of czechia", "Prague"]);
DJ_RAW.push(["Capital of sweden", "Stockholm"]);
DJ_RAW.push(["Capital of denmark", "Copenhagen"]);
DJ_RAW.push(["Capital of iceland", "Reykjavik"]);
DJ_RAW.push(["Capital of netherlands", "Amsterdam"]);
DJ_RAW.push(["Capital of austria", "Vienna"]);
DJ_RAW.push(["Capital of russia", "Moscow"]);
DJ_RAW.push(["Capital of romania", "Bucharest"]);
DJ_RAW.push(["Capital of serbia", "Belgrade"]);
DJ_RAW.push(["Capital of turkey", "Ankara"]);
DJ_RAW.push(["Capital of israel", "Jerusalem"]);
DJ_RAW.push(["Capital of iraq", "Baghdad"]);
DJ_RAW.push(["Capital of nigeria", "Abuja"]);
DJ_RAW.push(["Capital of south africa", "Pretoria"]);
DJ_RAW.push(["Capital of ghana", "Accra"]);
DJ_RAW.push(["Capital of algeria", "Algiers"]);
DJ_RAW.push(["Capital of canada", "Ottawa"]);
DJ_RAW.push(["Capital of brazil", "Brasilia"]);
DJ_RAW.push(["Capital of chile", "Santiago"]);
DJ_RAW.push(["Capital of peru", "Lima"]);
DJ_RAW.push(["Capital of australia", "Canberra"]);
DJ_RAW.push(["Capital of fiji", "Suva"]);
DJ_RAW.push(["Capital of kuwait", "Kuwait City"]);
DJ_RAW.push(["Capital of united arab emirates", "Abu Dhabi"]);
DJ_RAW.push(["Capital of lebanon", "Beirut"]);
DJ_RAW.push(["Capital of oman", "Muscat"]);
DJ_RAW.push(["Capital of uzbekistan", "Tashkent"]);
DJ_RAW.push(["Capital of bhutan", "Thimphu"]);
DJ_RAW.push(["Capital of brunei", "Bandar Seri Begawan"]);
DJ_RAW.push(["Capital of north korea", "Pyongyang"]);
DJ_RAW.push(["Capital of tunisia", "Tunis"]);
DJ_RAW.push(["Capital of sudan", "Khartoum"]);
DJ_RAW.push(["Capital of uganda", "Kampala"]);
DJ_RAW.push(["Capital of zimbabwe", "Harare"]);
DJ_RAW.push(["Capital of madagascar", "Antananarivo"]);
DJ_RAW.push(["Capital of senegal", "Dakar"]);
DJ_RAW.push(["Capital of rwanda", "Kigali"]);
DJ_RAW.push(["Capital of namibia", "Windhoek"]);
DJ_RAW.push(["Capital of cuba", "Havana"]);
DJ_RAW.push(["Capital of panama", "Panama City"]);
DJ_RAW.push(["Capital of paraguay", "Asuncion"]);
DJ_RAW.push(["Capital of ecuador", "Quito"]);
DJ_RAW.push(["Capital of samoa", "Apia"]);
DJ_RAW.push(["Capital of vanuatu", "Port Vila"]);
DJ_RAW.push(["Capital of estonia", "Tallinn"]);
DJ_RAW.push(["Capital of lithuania", "Vilnius"]);
DJ_RAW.push(["Capital of slovenia", "Ljubljana"]);
DJ_RAW.push(["Capital of cyprus", "Nicosia"]);
DJ_RAW.push(["Capital of monaco", "Monaco"]);
DJ_RAW.push(["Capital of liechtenstein", "Vaduz"]);
DJ_RAW.push(["Capital of north macedonia", "Skopje"]);
DJ_RAW.push(["Capital of bosnia and herzegovina", "Sarajevo"]);
DJ_RAW.push(["Capital of belarus", "Minsk"]);
DJ_RAW.push(["Capital of armenia", "Yerevan"]);
DJ_RAW.push(["Capital of kyrgyzstan", "Bishkek"]);
DJ_RAW.push(["Capital of turkmenistan", "Ashgabat"]);
DJ_RAW.push(["Capital of mauritius", "Port Louis"]);
DJ_RAW.push(["Capital of eritrea", "Asmara"]);
DJ_RAW.push(["Capital of somalia", "Mogadishu"]);
DJ_RAW.push(["Capital of niger", "Niamey"]);
DJ_RAW.push(["Capital of benin", "Porto-Novo"]);
DJ_RAW.push(["Capital of togo", "Lome"]);
DJ_RAW.push(["Capital of liberia", "Monrovia"]);
DJ_RAW.push(["Capital of gabon", "Libreville"]);
DJ_RAW.push(["Capital of lesotho", "Maseru"]);
DJ_RAW.push(["Capital of mauritania", "Nouakchott"]);
DJ_RAW.push(["Capital of cabo verde", "Praia"]);
DJ_RAW.push(["Capital of guinea-bissau", "Bissau"]);
DJ_RAW.push(["Capital of dominican republic", "Santo Domingo"]);
DJ_RAW.push(["Capital of trinidad and tobago", "Port of Spain"]);
DJ_RAW.push(["Capital of belize", "Belmopan"]);
DJ_RAW.push(["Capital of el salvador", "San Salvador"]);
DJ_RAW.push(["Capital of suriname", "Paramaribo"]);
DJ_RAW.push(["Capital of micronesia", "Palikir"]);
DJ_RAW.push(["Capital of palau", "Ngerulmud"]);
DJ_RAW.push(["Capital of tuvalu", "Funafuti"]);
DJ_RAW.push(["The first US president", "George Washington"]);
DJ_RAW.push(["The third US president", "Thomas Jefferson"]);
DJ_RAW.push(["The fifth US president", "James Monroe"]);
DJ_RAW.push(["The seventh US president", "Andrew Jackson"]);
DJ_RAW.push(["The ninth US president", "William Henry Harrison"]);
DJ_RAW.push(["The eleventh US president", "James K. Polk"]);
DJ_RAW.push(["The thirteenth US president", "Millard Fillmore"]);
DJ_RAW.push(["The fifteenth US president", "James Buchanan"]);
DJ_RAW.push(["The seventeenth US president", "Andrew Johnson"]);
DJ_RAW.push(["The nineteenth US president", "Rutherford B. Hayes"]);
DJ_RAW.push(["The twenty-first US president", "Chester A. Arthur"]);
DJ_RAW.push(["The twenty-third US president", "Benjamin Harrison"]);
DJ_RAW.push(["The twenty-fifth US president", "William McKinley"]);
DJ_RAW.push(["The twenty-seventh US president", "William Howard Taft"]);
DJ_RAW.push(["The twenty-ninth US president", "Warren G. Harding"]);
DJ_RAW.push(["The thirty-first US president", "Herbert Hoover"]);
DJ_RAW.push(["The thirty-third US president", "Harry S. Truman"]);
DJ_RAW.push(["The thirty-fifth US president", "John F. Kennedy"]);
DJ_RAW.push(["The thirty-seventh US president", "Richard Nixon"]);
DJ_RAW.push(["The thirty-ninth US president", "Jimmy Carter"]);
DJ_RAW.push(["The forty-first US president", "George H. W. Bush"]);
DJ_RAW.push(["The forty-third US president", "George W. Bush"]);
DJ_RAW.push(["The forty-fifth US president", "Donald Trump"]);
DJ_RAW.push(["The forty-seventh US president", "Donald Trump"]);
DJ_RAW.push(["Alabama state nickname", "Yellowhammer State"]);
DJ_RAW.push(["Arizona state nickname", "Grand Canyon State"]);
DJ_RAW.push(["California state nickname", "Golden State"]);
DJ_RAW.push(["Connecticut state nickname", "Constitution State"]);
DJ_RAW.push(["Florida state nickname", "Sunshine State"]);
DJ_RAW.push(["Hawaii state nickname", "Aloha State"]);
DJ_RAW.push(["Illinois state nickname", "Prairie State"]);
DJ_RAW.push(["Iowa state nickname", "Hawkeye State"]);
DJ_RAW.push(["Kentucky state nickname", "Bluegrass State"]);
DJ_RAW.push(["Maine state nickname", "Pine Tree State"]);
DJ_RAW.push(["Massachusetts state nickname", "Bay State"]);
DJ_RAW.push(["Minnesota state nickname", "North Star State"]);
DJ_RAW.push(["Missouri state nickname", "Show Me State"]);
DJ_RAW.push(["Nebraska state nickname", "Cornhusker State"]);
DJ_RAW.push(["New Hampshire state nickname", "Granite State"]);
DJ_RAW.push(["New Mexico state nickname", "Land of Enchantment"]);
DJ_RAW.push(["North Carolina state nickname", "Tar Heel State"]);
DJ_RAW.push(["Ohio state nickname", "Buckeye State"]);
DJ_RAW.push(["Oregon state nickname", "Beaver State"]);
DJ_RAW.push(["Rhode Island state nickname", "Ocean State"]);
DJ_RAW.push(["South Dakota state nickname", "Mount Rushmore State"]);
DJ_RAW.push(["Texas state nickname", "Lone Star State"]);
DJ_RAW.push(["Vermont state nickname", "Green Mountain State"]);
DJ_RAW.push(["Washington state nickname", "Evergreen State"]);
DJ_RAW.push(["Wisconsin state nickname", "Badger State"]);
var DJ_FACES=["Tom Cruise", "Justin Timberlake", "Christopher Nolan", "Walt Frasier", "Cloris Leachman", "Vanna White", "Christina Hendricks", "Jason Clarke", "Buzz Aldrin", "Jack Lew", "Meghan Trainor", "Don McLean", "Gary Sinise", "Keith Urban/Nicole Kidman", "Wil Wheaton", "Tom Ridge", "Errol Flynn", "Kesha", "Tony Hawk", "Lou Ferrigno", "Winston Churchill", "William Howard Taft", "Wilford Brimley", "Christian Bale", "Dana Perino", "Peter Frampton", "Al Capone", "Chuck Hagel", "Jon Hamm", "George Orwell", "John Glenn", "Morgan Fairchild", "Carl Sandburg", "Bruce Campbell", "Allen Ludden and Betty White", "Mariska Hargitay", "Helen Keller", "Jessica Chastain", "Robert Downey Jr", "Bobby Flay", "Dusty Hill", "Billy Gibbons", "Kerry Washington", "Sarah McLachlan", "Christopher Plummer", "Nicolaus Copernicus", "Francis Ford Coppola", "Rian Johnson", "JK Simmons", "Anson Williams", "James Gunn", "The Duggars", "Beach Boys", "Brad Pitt", "Steven Tyler", "Thomas Paine", "Ryan Seacrest", "Peter Tork", "Robin Lord Taylor", "Julianne Hough", "Rutherford B. Hayes", "Monet", "Ben Kingsley", "Richard Blais", "Pink Floyd", "Christina Ricci", "Jimmy Fallon"];
var DJ_ANSWERS=[];
DJ_RAW.forEach(function(p){
  /* Dedupe by normalized text: the sheet lists a few answers twice
     with different casing ("Jim Davis" / "jim davis"), and the two
     spellings must never appear as separate choices in one question. */
  var n=norm(p[1]);
  if(!DJ_ANSWERS.some(function(x){ return norm(x)===n; })) DJ_ANSWERS.push(p[1]);
});
/* Domain of every sheet answer, from the clue that produced it — the
   subject ranking for DJ distractor picks (see djDomainOf). */
var DJ_ANS_DOMAIN={};
DJ_RAW.forEach(function(p){
  var n=norm(p[1]);
  if(!(n in DJ_ANS_DOMAIN)) DJ_ANS_DOMAIN[n]=djDomainOf(p[0]);
});
/* The sheet's French novelists. Untagged, "Gustave Flaubert" fell
   into the kind tables' catch-all "other" and the Madame Bovary
   question dealt whatever "other" strings came first — Casey
   Kasem, the 16th amendment, herbert hoover. All six are tagged
   male in NAME_GENDER above, and djBuildMC deals each of them the
   others as company: Flaubert, Hugo, Dumas, and Verne are sheet
   answers; Balzac and Zola are verified French novelists of the
   same era added as company, the way Anne Brontë is for Emily. */
var FRENCH_AUTHORS=["Gustave Flaubert","Victor Hugo","Alexandre Dumas","Jules Verne","Honoré de Balzac","Émile Zola"];
var FRENCH_AUTHOR_NORM={};
FRENCH_AUTHORS.forEach(function(x){ FRENCH_AUTHOR_NORM[norm(x)]=1; });
/* ================= TRIVIA SHEET PARAPHRASE PASS (2026-11-11) =================
   Owner directive: every sheet-derived question must be worded
   differently from the sheet — a complete question in the game's own
   words, never the sheet's clue fragment quoted inside a frame. The
   earlier pass only framed the fragments ('Trivia Clue: "…" — what
   answer goes with this clue?'), which left the sheet's own wording
   on screen verbatim; this pass replaces the DEALT text.
   DJ_REWRITE maps a DJ_RAW row index to its paraphrase. The
   paraphrase is carried on the built question as q.dq (display
   question) and is the only text the player ever sees: the question
   renderer and the end-of-game review both read dq first.
   The internal q.q is deliberately left exactly as built from the
   raw clue: every classifier, distractor pass, baked diff, keyed
   pin (EXPLAIN_EXTRA, CHAR_QA, the garbled / Not-clue stamps, the
   Maycomb set), and every mcOnly / noDeal detector reads that
   internal text, so choice sets, explanations, typed-vs-MC
   eligibility, and exclusions are byte-for-byte what they were
   before this pass — only the displayed wording changes. (Typed
   conversions carry dq over for the same reason; see mcToTyped.)
   Excluded from this pass by the tasking: the 17 Not-clue rows
   (the inventoried 16 plus 'Not a singer in All For Love'), which
   await the owner's ruling as a class and keep their current form.
   Rows that cannot be paraphrased without inventing or changing
   their meaning are NOT in this map: the non-ambiguous handful that
   already never deal stay as they are, and the ambiguous ones are
   stamped never-deal by the REWRITE-HELD pass below and listed in
   the build report for the owner's ruling. */
var DJ_REWRITE={
0:"Which novel did William Golding write about schoolboys stranded on an island?",
1:"Joe DiMaggio's famous hitting streak ran for 56 games — how many hits did he collect during it?",
3:"In which country was the Red Cross founded?",
4:"Who performed the duet 'Whiskey Lullaby'?",
6:"Who played Captain Teague, Jack Sparrow's father, in the Pirates of the Caribbean films?",
7:"What are the three main parts of a comet?",
8:"Which character did John Stamos play on Full House?",
9:"In the nursery rhyme 'Hickory Dickory Dock,' what number does the clock strike?",
11:"Which running back once ran for 100 yards in 14 straight games?",
12:"Which cosmetics brand tells its customers 'Because you're worth it'?",
14:"Which word means to understand or grasp something fully?",
15:"What were the last words spoken on the final Howdy Doody show?",
16:"In which city would you find the Guggenheim Museum?",
17:"What dangerous creatures was Han Solo smuggling aboard his ship in Star Wars: The Force Awakens?",
18:"What are the members of the Society of Friends commonly called?",
19:"How many US presidents were born as British subjects?",
20:"Which actor led the cast of the sci-fi western Cowboys & Aliens?",
21:"Where was the very first season of the reality show Survivor filmed?",
24:"The 'Legion of Doom' forward line skated for which NHL team?",
25:"Who recorded the song 'Feelin' Groovy' (The 59th Street Bridge Song)?",
27:"Who is the youngest person ever to receive the AFI Life Achievement Award?",
28:"A cryometer is an instrument used for measuring what?",
29:"What was the second music video ever played on MTV?",
30:"Which two teams met in the 1919 World Series?",
31:"What was the name of the butler on The Fresh Prince of Bel-Air?",
32:"Which US president is pictured on the silver dollar coin?",
33:"In which film does a horse declare its rider to be a 'spirit walker'?",
34:"Who provided the voice of Lightning McQueen in the movie Cars?",
35:"In the board game Battleship, how many ships does each player command?",
36:"In Nirvana's 'Come As You Are,' the singer asks you to come 'as an old' what?",
37:"The gladiola belongs to which plant family?",
39:"Lake Mille Lacs is found in which US state?",
40:"Which cartoon superhero is the secret identity of the janitor dog Penrod Pooch?",
41:"In which museum can you see the Mona Lisa?",
43:"In the film Napoleon Dynamite, what three-word slogan was on the shirt urging support for Pedro?",
44:"Which antacid brand ran the famous 'I can't believe I ate the whole thing' commercials?",
45:"Before he became a broadcaster, Dick Vitale was head coach of which NBA team?",
46:"Which state borders Tennessee and ties for bordering the most other states?",
47:"Who was the best-selling female recording artist of the 2000s?",
48:"The tragus is a small flap located on which part of the body?",
49:"Which San Diego teams played their home games at Jack Murphy Stadium?",
50:"Which doo-wop song plays during the school dance scene in Back to the Future?",
51:"Which Popeye character promises to gladly 'pay you Tuesday for a hamburger today'?",
52:"Who wrote the novel Cat's Cradle?",
53:"In the Harry Potter books, the rat Scabbers was secretly which wizard in disguise?",
54:"How was Ruth related to Naomi in the Bible?",
55:"Which song held the number-one spot on the Billboard Hot 100 for a record 16 weeks?",
56:"What shape is the Milky Way galaxy?",
57:"Which of Earth's lands extends the farthest north?",
58:"Which American Idol finalist hailed from Alabama?",
59:"Which European power established diplomatic relations with the young United States during the Revolutionary War?",
60:"Who appeared on the cover of Playboy magazine a record 14 times?",
61:"Who founded the special-effects company Industrial Light & Magic?",
62:"In the comics, Lois Flagston is the sister of which soldier character?",
64:"The Jacqueline Kennedy Onassis Reservoir sits in which New York City park?",
65:"Which singer earned gold records in both the 1950s and the 1990s?",
66:"What was the name of the fictional Alaska town in the TV series Northern Exposure?",
67:"What do you get when you multiply an object's mass by its speed?",
68:"Which Alaskan sled-dog race is billed as 'The Last Great Race on Earth'?",
69:"Who played the young Patches O'Houlihan in the film Dodgeball?",
70:"Silence Dogood was the pen name of which Founding Father?",
72:"In what year was the film 2001: A Space Odyssey released?",
73:"'Pogo the Clown' was the performing persona of which infamous killer?",
74:"The dance steps 'right forward, left out' belong to which novelty dance?",
75:"Who is known as the father of genetics?",
77:"What is the longest river in North America?",
78:"Who was the human star of the satirical puppet series D.C. Follies?",
79:"Which was the first US state to secede from the Union?",
80:"Which character did Tom Cruise play in Days of Thunder?",
81:"Rapper Aubrey Graham is better known by what stage name?",
82:"What do you call a game-ending home run in baseball?",
83:"The Amstel River flows through which country?",
84:"Singer Ernest Evans took what stage name?",
85:"Which character did Tom Selleck play on Friends?",
87:"What is the name of the main stadium at the US Open tennis championships?",
88:"After Major Strasser is shot in Casablanca, what does Captain Renault tell his men to do?",
89:"What is the traditional gift for a first wedding anniversary?",
91:"Who was Fred Flintstone's boss at the rock quarry?",
92:"A chrysalis is the cocoon stage of which insect?",
93:"Which Canadian rock band recorded 'You Ain't Seen Nothing Yet'?",
94:"Which disease takes its name from the Italian words for 'bad air'?",
95:"Who wrote the novella that the film The Shawshank Redemption was based on?",
96:"The Statue of Liberty was a gift to the United States from which country?",
97:"What were the names of the two burglars in Home Alone?",
98:"Which long, narrow country stretches along the west coast of South America?",
99:"Which board game has players claiming railway routes between cities?",
100:"Fred Schneider, Kate Pierson, Cindy Wilson, and Keith Strickland make up which band?",
101:"Who was the first woman ever to lead a lap at the Indianapolis 500?",
102:"Which comedian got his big break as a correspondent on The Daily Show?",
103:"Which US president was arrested and taken into custody while in office?",
104:"In surveys, which household chore do people most often name as their least favorite?",
105:"The clock tower at the Palace of Westminster in London, home to Big Ben, is officially named what?",
106:"Who wrote and first recorded the song 'You've Really Got a Hold on Me'?",
107:"What soft drink did pharmacist Dr. John Pemberton create?",
108:"The famous line 'Badges? We don't need no stinking badges!' comes from which classic film?",
109:"The Old Oaken Bucket college football trophy goes to the winner of which rivalry game?",
110:"Which 1970s NBA star, nicknamed 'Clyde,' was famous as much for his style as for his play?",
111:"What is the first name of the old man in the Pixar film Up?",
112:"Who wrote the legal thriller The Brethren?",
113:"Which pop duo recorded 'Blame It on the Rain'?",
114:"What is the largest living invertebrate?",
117:"In the TV series Alice, Mel's Diner was located in what city?",
118:"Bob Marley died and the arcade game Donkey Kong was released in what year?",
119:"In the game Cards Against Humanity, what is the player who reads the cards called?",
120:"In the Harry Potter world, what is Gringotts Bank?",
122:"Pitcher Sandy Koufax played his whole career for which team?",
123:"Cumberland Gap is a pass through which mountain range?",
124:"Which James Bond theme song reached number one on the US singles chart?",
125:"Danger Mouse's sidekick Penfold is what kind of animal?",
126:"Which artery carries blood down into the arm?",
128:"Who played Ouiser Boudreaux in the film Steel Magnolias?",
129:"What does the abbreviation HVAC stand for?",
132:"Who was the first president of the Academy of Motion Picture Arts and Sciences?",
133:"Which comedian became Saturday Night Live's youngest cast member when he joined the show in 2014?",
134:"Which wrestler played Thunderlips in Rocky III?",
135:"The supplement Airborne is marketed as doing what?",
137:"Who sang the song 'King of the Road'?",
138:"Which film won both the Best Actor and Best Actress Oscars for its two leads?",
139:"Which car brand was marketed as 'the people's car'?",
140:"Rita Glossner is a recurring character on which TV sitcom?",
142:"Which Irish dancer starred in Lord of the Dance?",
143:"Who won Rookie of the Year and then the MVP award the very next season?",
144:"Which company was the first in the US to issue a mail-order catalog?",
146:"James Bond works for which British intelligence agency?",
147:"Nori, the wrap used for sushi rolls, is what exactly?",
148:"John Mayer's 'Your Body Is a Wonderland' praises the singer's lover with which sweet-tasting phrase?",
149:"The star Polaris is found in which constellation?",
150:"The character Darla, from the animated series, came from which show?",
151:"In what year was Nelson Mandela released from prison?",
152:"What is the capital city of Northern Ireland?",
153:"Which Beatle returned his MBE medal four years after receiving it?",
154:"The line 'I'm just one stomach flu away from my goal weight' comes from which film?",
155:"Mariah Carey and Boyz II Men recorded which duet together?",
156:"Which sportswear brand uses the slogan 'Impossible Is Nothing'?",
157:"In what year did Chuck Yeager break the sound barrier?",
158:"Which character did William Shatner play on Boston Legal?",
159:"Which US state uses the tourism slogan 'Life Elevated'?",
160:"Who wrote the novel Lord of the Flies?",
161:"Who is known as the First Lady of Country Music?",
162:"A speed of 19,873 miles per hour works out to how many miles per day?",
163:"In the film Wedding Crashers, what is the last name of the family whose daughters the crashers pursue?",
164:"Who wore number 16 for the San Francisco 49ers?",
167:"Melvin Kaminsky is the birth name of which comedian and filmmaker?",
168:"Which singer recorded a famous duet with her late father, Nat King Cole?",
169:"What is a group of jellyfish called?",
170:"The forged 'Jones diary' that fooled experts in the 1980s was supposedly signed by which wartime leader?",
171:"How many years must a person have lived in the United States to be eligible for the presidency?",
172:"What is the capital city of Nova Scotia?",
173:"Ray Finkle is the villain of which comedy film?",
174:"In the history of a certain marshmallow cereal, the wizard Waldo was brought in to replace which mascot?",
175:"Which K-pop group recorded the hit 'Butter,' with its 'smooth like butter' lyric?",
176:"In horse racing, what is a horse that has never won a race called?",
177:"What was Janet's last name on the sitcom Three's Company?",
178:"President Warren G. Harding reportedly met his mistress in what small room at the White House?",
179:"The Beast, once the world's longest wooden roller coaster, is at which amusement park?",
180:"What does the company name 3M stand for?",
181:"'Time Well Wasted' is a song by which country singer?",
182:"What can an owl not move, because they are fixed in their sockets?",
183:"The line about having 'one shirt and one pair of pants' comes from which comedy film?",
184:"Which athlete has won the most Olympic medals of all time?",
186:"In what year was the film Dragnet, starring Tom Hanks, released?",
187:"The Simplon Pass connects which two countries?",
188:"One full keg holds the same amount of beer as how many cases?",
189:"Electrical resistance is measured in what units?",
192:"What color is Po, the Teletubby?",
193:"Which US agency did President Abraham Lincoln create on the last day of his life?",
196:"Which famous novel was written entirely without the letter 'e'?",
197:"Which constitutional amendment gave the federal government the power to tax incomes?",
198:"Aluminum is refined from which ore?",
199:"Diane Sawyer co-anchored which morning show, known by its initials?",
200:"In 1998, the Seattle Mariners traded pitcher Randy Johnson to which team for the pennant stretch run?",
201:"Who played Eddie Valiant in the film Who Framed Roger Rabbit?",
202:"Which beer brand used the slogan 'From the land of sky blue waters'?",
203:"Which actor had a guest arc as regional manager Deangelo Vickers on The Office?",
204:"In Doctor Strange, what is the Wi-Fi password at Kamar-Taj?",
205:"Glossitis is the inflammation of what body part?",
206:"Who ran the Shady Rest hotel on the sitcom Petticoat Junction?",
207:"Elvis Presley won his only Grammy Awards for recordings in which genre?",
209:"The village of Giverny in France was the home of which Impressionist painter?",
210:"How far apart are the goalposts in American football?",
211:"York Peppermint Patties are made by which candy company?",
212:"Who provided the voice of the title dog in the Disney film Bolt?",
213:"Singultus is the medical term for what common reflex?",
215:"Fingernails and hair are made of which protein?",
216:"Commander Cody and His Lost Planet Airmen are best known for which hit song about a car?",
217:"Who created the Discworld series of fantasy novels?",
219:"Triple Divide Peak, where three continental divides meet, is in which US state?",
220:"'White & Nerdy' was the hit single from which Weird Al Yankovic album?",
221:"Ronan the Accuser is a villain in which Marvel film?",
222:"Which pizza chain did Peyton Manning famously own franchises of and star in ads for?",
223:"The title Baron Renfrew, a Scottish title of the heir to the throne, is now held by whom?",
224:"'Home Sweet Home' was a power-ballad hit for which glam metal band?",
226:"In Winnie the Pooh, what imaginary elephant-like creature did Pooh and Piglet set a trap for?",
228:"On Little House on the Prairie, the town doctor, Dr. Hiram, had what last name?",
229:"Which radio host signed off by telling listeners to 'keep your feet on the ground and keep reaching for the stars'?",
230:"Sportscaster Ahmad Rashad was born with what name?",
231:"Which Dr. Seuss book is a famous collection of rhyming tongue-twisters?",
232:"The offspring of a male horse and a female donkey is called what?",
233:"What is the name of the bulldog in the Tom and Jerry cartoons?",
234:"Who recorded the best-selling live album of all time, 'Double Live'?",
235:"Which video-sharing website did Google buy in 2006?",
236:"Which Muppet scientist runs Muppet Labs with his nervous assistant Beaker?",
237:"In what year was Hitler's failed Beer Hall Putsch?",
238:"The fictional religion Bokononism was invented in the novel Cat's Cradle by which author?",
239:"What is the chemical symbol for the element zirconium?",
240:"Who was the first US president born after the Declaration of Independence was signed?",
241:"What is the first name of Brick's sister, the middle child on the sitcom The Middle?",
242:"The Danube River flows into which sea?",
243:"On Beverly Hills, 90210, Brandon Walsh worked at which diner?",
244:"Which team won the first BCS national championship game, played in January 1999?",
245:"In economics, the theory linking interest rates and exchange rates is called the Fisher what?",
246:"The presidential retreat Camp David was originally known by what name?",
247:"What is the famous catchphrase from the TV series Hawaii Five-O, said when arresting a suspect?",
248:"Who did Mark Wahlberg play in the film The Fighter?",
249:"Which US states share a border with the Canadian province of Saskatchewan?",
250:"Which cereal company makes Trix?",
251:"In the TV series The Newsroom, what does the network's call sign ACN stand for?",
252:"How far is the Sun from the Earth, roughly?",
253:"Who composed the music for The Lord of the Rings film trilogy?",
254:"The Blarney Stone is located in which Irish county?",
255:"Which baseball player reached base safely in a record 84 consecutive games?",
256:"In 'What a Fool Believes' by the Doobie Brothers, the wise man has what, according to the song?",
257:"Which company's stock trades under the ticker symbol CVX?",
258:"Which five US states border New Mexico?",
259:"Which athlete was ranked the tenth-greatest of the twentieth century by ESPN, famous for Olympic and golf and softball feats?",
260:"The film In the Heat of the Night is set in which Mississippi town?",
261:"Who hosted the syndicated Who Wants to Be a Millionaire during the 2013-14 season?",
262:"In the film Blazing Saddles, what is the last name shared by almost everyone in Rock Ridge?",
263:"How many US states border Texas?",
264:"Which US president stood only five feet four inches tall?",
265:"Who played the young homeowner Adam Maitland in the film Beetlejuice?",
266:"Which author moved in next door to Sarah Palin in Alaska while researching a book about her?",
267:"Where is the officially recognized birthplace of baseball?",
268:"Who was named the CMA Entertainer of the Year in 2009?",
269:"Which American clothing company was founded in 1818?",
270:"What was the name of the costliest hurricane of the 1990s?",
271:"Who created the comic strip Garfield?",
272:"Which song by The Cars is heard in the pool scene in Fast Times at Ridgemont High?",
273:"Which two US presidents were both born in Vermont?",
274:"What was the title of Dolly Parton's first hit song, released when she was a teenager in 1959?",
275:"Which pitcher won 27 games in the 1973 season?",
276:"What was the name of Zorro's horse?",
277:"In the film WALL-E, the giant corporation that took over Earth is called what?",
278:"What is the name of the shark in Finding Nemo who leads the fish-friendly support group?",
279:"In what year did Bass Pro Shops open its first store?",
281:"The James Bond film For Your Eyes Only was released in what year?",
282:"Who became the first female four-star general in the US Army in 2008?",
283:"What element has the chemical symbol As?",
284:"Which two actors play Katharine Hepburn and Errol Flynn in the film The Aviator?",
285:"In the film Armageddon, Bruce Willis plays oil driller Harry — what is Harry's last name?",
286:"Which film won the very first Academy Award for Best Animated Feature?",
287:"Mount Sunflower, the highest point in its state, is in which US state?",
288:"The Alien and Sedition Acts were signed into law by which president?",
289:"Who wrote the children's book Tales of a Fourth Grade Nothing?",
290:"What was the badge number on Sergeant Joe Friday's badge in Dragnet?",
291:"The fish tank gang's volcano, Mount Wannahockaloogie, appears in which animated film?",
292:"In the film Pitch Perfect, Beca attends which fictional university?",
293:"In what year did Grand Canyon National Park officially become a national park?",
294:"Yogurt is believed to have originated in which modern-day country?",
295:"UPS was founded in 1907 in which city?",
296:"The Snake River begins in which US state?",
297:"Who was the vice president of the United States in 1975?",
298:"Cenocilliacaphobia is the fear of what?",
299:"In what year was the first Major League Baseball game played at night?",
300:"The FinePix line of cameras is made by which company?",
301:"In Star Trek, who made first contact with the Vulcans?",
302:"Who wrote the novel Shoeless Joe, which became the film Field of Dreams?",
303:"Who played Dr. Eric Foreman on the TV series House?",
304:"'Travelin' Man' was a hit song for which teen idol?",
305:"Van Morrison's 'Brown Eyed Girl' was released in what year?",
306:"Louisiana became a US state in what year?",
307:"In the film Pretty Woman, what is the first and last name of Julia Roberts's character?",
308:"'Fool for the City' was a hit for which British rock band?",
309:"Which European country is completely landlocked by Romania and Ukraine?",
310:"A Nebuchadnezzar is a giant wine bottle holding the equivalent of how many standard bottles?",
311:"Who was the captain of the Exxon Valdez when it ran aground?",
312:"What do the letters in the motor-oil brand name STP stand for?",
313:"The film Be Cool was the sequel to which movie?",
314:"Which Soviet leader faced off with President Kennedy during the Cuban Missile Crisis?",
315:"Which Hanna-Barbera cartoon hound sang 'Oh My Darling, Clementine'?",
316:"In the AT&T commercials, the perky store employee played by Milana Vayntrub has what first name?",
317:"'Home' was a chart-topping hit song for which rock band?",
319:"What word completes the Nirvana lyric 'as an old ___' in the song 'Come As You Are'?",
321:"On The Brady Bunch, Marcia's nose was broken by a football — which of her brothers threw it?",
322:"The title song of the film Pretty in Pink was recorded by which band?",
323:"Bucharest is the capital of which country?",
324:"In the Herbie the Love Bug films, what number is painted on the car?",
325:"Who is credited with the quote calling income tax the hardest thing in the world to understand?",
326:"What was the name of the basset hound in The Dukes of Hazzard?",
327:"Which president had the nickname 'Old Rough and Ready'?",
328:"What was Reggie White's first NFL team?",
329:"What are the dots on a pair of dice called?",
330:"Which island is the southernmost of the Lesser Antilles, just north of Venezuela?",
331:"What was the name of Cousin Eddie's dog in National Lampoon's Vacation?",
332:"Which department store sits on 34th Street in New York, famous from a Christmas film?",
333:"Castle Lager beer comes from which African country?",
334:"Which rock band released the 1975 album Dressed to Kill?",
335:"Which pitcher has the most wins in Major League Baseball history?",
336:"In How the Grinch Stole Christmas, the Grinch lives on which mountain?",
337:"By how much did the Grinch's heart grow that day?",
338:"A speed of 75 knots is equal to about how many miles per hour?",
339:"In the 2005 King Kong remake, who played filmmaker Carl Denham?",
341:"The Dow Jones Industrial Average tracks how many companies?",
342:"Which poet was known as the 'poet of Chicago,' author of 'Chicago'?",
343:"Which country won the women's hockey gold medal at the 2010 Winter Olympics?",
344:"Charles Curtis, the only Native American vice president, served under which president?",
345:"Who wrote the novel Wuthering Heights?",
346:"On Miami Vice, Sonny Crockett's partner was named what?",
347:"In Superman's world, a communications satellite watched over by Superman belongs to which company owned by Bruce Wayne?",
349:"Which country has lost the most matches in World Cup history?",
350:"The Battle of Waterloo was fought in present-day which country?",
351:"Which comedy film contains a line comparing a man's stomach to a 'mini Buddha'?",
352:"What was the capital city of West Germany?",
353:"In which present-day US state did the Lakota leader Crazy Horse die?",
354:"In Monopoly money, the twenty-dollar bills are printed in what color?",
355:"In Iron Man 3, Tony Stark befriends a young boy named what?",
357:"Which quarterback lost five Super Bowls as a backup, a record of bad luck?",
358:"The infamous halftime show of Super Bowl XXXVIII featured which pair of performers?",
359:"Which presidential candidate was shot while campaigning in Milwaukee, Wisconsin, in 1912?",
360:"In the Pixar film Cars, Lightning McQueen stays at which motel, shaped like traffic cones?",
361:"Kirk Gibson played his career for which two teams?",
362:"The animated series Phineas and Ferb aired on which network?",
363:"The lyric 'once more, you open the door' comes from which Celine Dion song?",
364:"In Charlie and the Chocolate Factory, which child is the first to be eliminated from the tour?",
365:"Hypophosphatasia is a rare disease affecting what part of the body?",
366:"In Egyptian mythology, Osiris was killed by which god?",
367:"What is the ratio of a circle's circumference to its diameter called?",
368:"In Buck Rogers in the 25th Century, which little robot carries Dr. Theopolis around and says 'bidi-bidi-bidi'?",
369:"In the film Muriel's Wedding, Muriel's favorite band, whose songs she plays constantly, is which group?",
370:"Which fitness guru shouted 'Stop the Insanity!' in her famous infomercials?",
371:"One of the choices is a Canadian province. Which is it?",
372:"Who won the World Chess Championship in 2023?",
373:"The album Good News was the debut studio album of which rapper?",
374:"John Steed and Emma Peel are the heroes of which British TV series?",
375:"'A Space Age Love Song' was a hit for which new wave band?",
376:"What does the medical abbreviation ARDS stand for?",
377:"How is Zach Galifianakis's last name spelled, letter by letter?",
378:"The Blue Angels flight demonstration team was introduced in what year?",
379:"Who is the youngest driver ever to win the Daytona 500?",
382:"In the game Battleship, how many hits does it take to sink a cruiser?",
383:"In the film Fargo, the car salesman's first name is what?",
384:"The United States' first trade treaty was signed with which country?",
385:"Which thickening additive is used in Starbucks Frappuccinos?",
386:"Which two mammals lay eggs?",
387:"Who played Gil Grissom on the TV series CSI?",
388:"On Malcolm in the Middle, the family shops at a drugstore with what name?",
389:"Which boxer, nicknamed the Brown Bomber, won the world heavyweight title in Chicago in 1937?",
390:"Jackson Square in New Orleans, bordered by Canal, Decatur, Rampart, and Esplanade, sits in which historic district?",
391:"The Islets of Langerhans, which produce hormones like insulin, are found in which organ?",
392:"Which seafood restaurant chain was founded in Florida in 1968?",
393:"What is the name of the dog pictured on the Cracker Jack box?",
395:"In Magnum, P.I., Higgins's two Dobermans were named what?",
396:"Who directed the 1977 film Grand Theft Auto, his directorial debut?",
397:"Which comic-book hero is known as 'the Ghost Who Walks,' the man who cannot die?",
398:"In Talladega Nights, which cereal did Ricky Bobby's dad strap to the bottom of a car?",
399:"In the Chipmunks' Christmas song, what does Alvin want for Christmas?",
400:"The Art Ross Trophy is awarded in which sport?",
401:"What was the name of the Tanner family's dog on Full House?",
402:"In the film Jingle All the Way, Arnold Schwarzenegger's character is desperate to buy which toy?",
403:"Which piece of classical music is Schroeder always playing in the Peanuts comics?",
404:"In which John Wayne film does he play Sean Thornton, an Irish-American boxer who returns to Ireland?",
405:"Which US state has the most registered boats?",
406:"What is the real name of the rapper Lil Dicky?",
407:"What song does Homer Simpson name as his all-time favorite?",
408:"What unusual toy was the millionth item ever sold on eBay?",
409:"Which character did Scott Bakula play in Star Trek: Enterprise?",
410:"In the film Rock Star, Mark Wahlberg joins a tribute band that becomes which fictional metal band?",
411:"Which theme park is located at 1313 South Harbor Boulevard in Anaheim?",
412:"Which classic game is tic-tac-toe played with bean bags tossed at a board?",
413:"Which heavyweight boxer was known as 'the Easton Assassin'?",
414:"Herbie Hancock once appeared in a car commercial for which automaker?",
415:"Which horse novel, published in 1941, became a film again in 2006?",
417:"Which TV judge wrote the book 'Don't Pee on My Leg and Tell Me It's Raining'?",
418:"Which country is doubly landlocked — surrounded only by other landlocked countries?",
420:"Who created the file-sharing service Napster?",
421:"In the chakra system, the heart chakra is represented by which color?",
422:"Which famous circus troupe began as a group of street performers in Baie-Saint-Paul, Quebec?",
423:"In Noah Kahan's song 'Stick Season,' he sings 'I love Vermont, but it's the season of the' what?",
424:"Which NASCAR track awards the race winner a grandfather clock?",
425:"In which fictional Alabama town is To Kill a Mockingbird set?",
426:"Since 1967, traffic in Sweden has driven on which side of the road?",
427:"Who played wide receiver Jimmy Sanderson in the film Any Given Sunday?",
428:"What is the first line of the Beatles song 'Back in the U.S.S.R.'?",
429:"Goalposts in the NFL were moved to the back of the end zone before which season?",
430:"Which animal can live for 250 years or more, the longest-lived vertebrate?",
431:"What is the name of the strawberry-scented bear who runs Sunnyside Daycare in Toy Story 3?",
432:"The board game Halma, from the 1880s, evolved into which game played on a star-shaped board?",
433:"Leon Czolgosz became infamous for doing what in Buffalo in 1901?",
434:"In Doctor Who, which companion is known as 'the Impossible Girl'?",
435:"Which Michael Keaton film is about an American auto plant taken over by a Japanese company?",
436:"'Long Black Train' was the breakout hit and first album of which country singer?",
437:"The final scene of the film Love Actually ends with which Beach Boys song?",
438:"The film about MercyMe singer Bart Millard is titled what?",
439:"What was the German code name for the invasion of Russia in 1941?",
440:"Which Mayberry citizen was the town drunk, always locking himself in a jail cell to sleep it off?",
441:"How many US states touch the shoreline of the Great Lakes?",
442:"Joe DiMaggio's famous hitting streak lasted how many consecutive games?",
443:"Who was the only player inducted into the Hall of Fame between 1940 and 1943?",
444:"Which bird has the longest wingspan of any living bird?",
445:"'The Wanderer' was a 1961 hit for which singer?",
446:"What does the abbreviation DNS stand for in computing?",
447:"What was the name of the Munsters' pet bat?",
448:"Jeff Bridges's breakthrough film role came in which 1971 film about a small Texas town?",
449:"Western lawman Wyatt Earp had two famous brothers — what were their names?",
450:"John Rutsey was the original drummer of which Canadian rock band?",
451:"'Word Up!' was a hit for which funk band, whose singer says 'do your dance'?",
452:"The line 'Nothing like a good piece of hickory' comes from which Clint Eastwood western?",
453:"Winston Churchill won the Nobel Prize in which category?",
454:"Charli XCX's song 'Speed Drive' samples which Toni Basil hit?",
455:"Which element gives some diamonds their blue tint?",
456:"Who was the first artist inducted into both the Rock and Roll and Country Music Halls of Fame?",
457:"Vulcanization hardens rubber by adding which element?",
458:"Which early Julia Roberts film is set in a Connecticut pizza parlor?",
459:"In the Beatles' 'Back in the U.S.S.R.,' the plane touched down at what time, according to the lyric 'the plane touched down at ___'?",
460:"In the TV series Big Sky, private detective Cody Hoyt is the husband of which character?",
461:"Who was the American League batting champion in 1901?",
463:"Mike Tyson won his first heavyweight belt by defeating which boxer?",
464:"Who wrote the children's book Fantastic Mr. Fox?",
465:"Which 1938 law set the first federal minimum wage and the 40-hour workweek?",
466:"How long is the Sunshine Skyway Bridge in Florida?",
467:"Grace Bay Beach and Cockburn Harbour are found in which Caribbean territory?",
468:"The star Sirius is located in which constellation?",
469:"On The Big Bang Theory, which character has an IQ of 173?",
471:"In old golf slang, a 'niblick' was what type of club?",
472:"John Michael Higgins hosts which word game on the Game Show Network?",
473:"Which German company is famous for its microscopes and camera lenses?",
474:"Risk, Life, and Monopoly were all published by which game company?",
475:"A gag about a Waffle House bathroom fixture comes from which racing comedy film?",
476:"Which constitutional amendment established Prohibition?",
477:"How many people are seated in the diner in Edward Hopper's painting Nighthawks?",
478:"Away from the pool, Michael Phelps once set a world record in which sport?",
479:"The first Oktoberfest was held to celebrate what royal event?",
480:"Black Elk Peak, the highest point east of the Rockies, is in which US state?",
481:"Bobby Cox was managing which team in 1982, before his long run in Atlanta?",
482:"What was Gerald Ford's middle name?",
483:"The longest engagement on record, before a couple finally married, lasted how many years?",
484:"When a champion racehorse dies, which three parts of it are traditionally buried?",
485:"Outlaw Butch Cassidy was born and raised in which US state?",
486:"Who was the first player to steal 100 bases in back-to-back seasons?",
487:"Which president's children once brought a pony upstairs to a White House bedroom?",
488:"Bob Seger's best-selling 1980 album, named for its title song, is called what?",
489:"Which capital city's name comes from words meaning 'black pool'?",
490:"Who was the first player to average a triple-double for an entire NBA season?",
491:"What word reads the same forwards, backwards, and upside down?",
492:"'If I Die Young' was a hit for which country group?",
493:"The song 'What Dreams Are Made Of' comes from which film?",
494:"The TV series set in the fictional town of Charming, California, is known by which initials?",
495:"What was the first name of Dewey, creator of the decimal system for libraries?",
496:"Who was the first US Secretary of State?",
497:"On The Sopranos, what was Carmela Soprano's maiden name?",
498:"In the film Airplane!, Dr. Rumack says 'Don't call me Shirley' to which character?",
499:"Which singer had hits in the 1950s, 1970s, and 1990s, known for 'Wasted Days and Wasted Nights'?",
500:"The famous Super Bowl ad 'When I Grow Up' was made for which jobs website?",
501:"Which country is the world's largest producer of hazelnuts?",
503:"Who voiced Sentinel Prime in the Transformers films?",
504:"On the TV series The Blacklist, James Spader plays a criminal mastermind with what name?",
505:"Alcatraz federal prison opened in which decade?",
507:"Which country drinks the most tea per person in the world?",
508:"The Super Bowl commercial showing rock stars working office jobs was advertising which hiring company?",
509:"Lesane Parish Crooks is the birth name of which rapper?",
511:"In the Pokémon animated series, what was the first Pokémon Ash ever received?",
512:"Moshe Katsav served as president of which country?",
513:"Which country's name can be typed using only one row of a QWERTY keyboard?",
514:"In the film Office Space, Peter's neighbor Lawrence is a fan of which TV show that they watch in his apartment?",
515:"Tim Dwight returned a kickoff for a touchdown in Super Bowl XXXIII playing for which team?",
516:"The hit song 'Rain on Me' is a duet by which two singers?",
517:"Which team was ranked number one in the very first College Football Playoff rankings in 2014?",
518:"Who directed the film Iron Man 2?",
519:"Who became prime minister of Canada in 2006?",
520:"Which US president was nicknamed 'the Dude President'?",
521:"The eye abbreviations O.D. and O.S. refer to which body parts?",
523:"Nolan Bushnell, who later founded Chuck E. Cheese, first launched which video game company?",
524:"The 1963 hit 'Popsicles and Icicles' was sung by which girl group?",
525:"Which US state has the most volcanic eruptions?",
526:"The Horseshoe Nebula is found in which constellation?",
527:"Which quarterback set the FBS record for most passing yards in a season in 2021?",
528:"Which president kept a golden retriever named Liberty at the White House?",
529:"Yosemite Sam's design and voice were based on which Warner Bros. animator?",
530:"The Brenner Pass runs between which two countries?",
531:"The Simplon Pass runs between Switzerland and which other country?",
532:"'Walk Away' was a hit single for which American Idol winner?",
533:"In Star Wars, the line 'Tomorrow at dawn, ___ lessons begin' — how many lessons are promised?",
534:"What is the name of Data's cat on Star Trek: The Next Generation?",
535:"Which singer has reached number one on the Billboard charts in four different decades?",
536:"Rita Moreno had a recurring role on which 1970s detective series about a Los Angeles private eye?",
537:"In the film Chitty Chitty Bang Bang, the car is described in song as our 'four-fendered' what?",
538:"The Stanley Cup is named for a British lord whose full title named which Lancashire town?",
539:"Who was the first member of the Monkees to leave the band?",
541:"The quote 'Her hair is so big because it's full of secrets' comes from which teen comedy film?",
542:"Which rapper's first two singles hit number one and number two on the charts at the same time?",
543:"What is the name of the resort in the film Dirty Dancing?",
544:"Who hosted the 2019 revival of the game show Card Sharks?",
545:"In the ancient Roman calendar, the year originally began in which month?",
546:"Which candy brand built its advertising slogan around the colors of the rainbow?",
547:"The TV theme song that begins 'Walking the line, mistakes can't hide' belongs to which legal drama?",
548:"Which classic arcade game puts you to work as a bartender serving beers?",
549:"Segregationist George Wallace served as governor of which state?",
550:"Someone with anatidaephobia lives with the fear of what?",
551:"Cenocillicaphobia is the fear of what?",
552:"Which legendary rock band recorded a Rice Krispies jingle in 1964?",
553:"In the first draft of the Back to the Future script, the time machine was built from what kitchen appliance?",
554:"What is the twelfth and final sign of the zodiac?",
555:"Which US president once worked as a bartender and saloon keeper in Illinois?",
556:"Greg Maddux won four straight Cy Young Awards during which four-year span in the 1990s?",
557:"In the film Doctor Strange, the Wi-Fi password at Kamar-Taj is what word?",
558:"Which NFL team appeared in a Super Bowl in four different decades?",
559:"Which character has appeared in the most seasons of the TV series NCIS?",
560:"The initials J.D. in author J.D. Salinger's name stand for what two names?",
561:"The Everclear song about 'dreaming of the west coast' is named after which California beach city?",
562:"If a period is described as 'halcyon days,' those days were notably what?",
563:"The presidential retreat near Thurmont, Maryland, is better known by what name?",
564:"Running back Craig Heyward was nicknamed 'Iron' what?",
565:"In Manhattan's Garment District there is a Walk of Fame — it honors legends of which industry?",
566:"The Lady Byng Trophy is awarded in which sport?",
567:"What is the official forfeit score in Major League Baseball?",
568:"Which beer brand used the slogan 'Pure brewed in God's Country'?",
570:"After hydrogen, what is the second-most abundant element in the universe?",
571:"What was the last major battle between US troops and Native Americans, fought in 1890 in South Dakota?",
572:"Who is the youngest golfer ever to win an LPGA tournament?",
573:"The line 'You look so good, I'd sop you up with a biscuit' comes from which Eddie Murphy comedy film?",
574:"'Live Like We're Dying' was the first single of which American Idol winner?",
576:"In Back to the Future Part III, Doc Brown's dog has the same name as a famous astronomer — what is it?",
577:"The Atlas Mountains are located on which continent?",
578:"Which statesman, Speaker of the House, was known as 'the Great Compromiser'?",
579:"The Grammy for Record of the Year in 2025 went to which artist?",
580:"Which Doctor Who actor also played a wizard — a sorcerer — in the Lord of the Rings world?",
581:"Lake Vostok, buried deep under ice, is located on which continent?",
582:"What was the first Japanese car model produced in the United States?",
583:"A shoat is a young what animal?",
584:"Who wrote and directed the film Ferris Bueller's Day Off?",
585:"In the Barenaked Ladies song 'One Week,' the singer says 'Like ___ ___ I'm frantic' — which actor is he like?",
586:"Which American League expansion team went bankrupt after its only season in 1969?",
587:"An octopus is classified as what type of animal?",
588:"Which comedian is known for the 'Here's Your Sign' routine and comedy album?",
589:"What is the name of the inflatable healthcare robot in the film Big Hero 6?",
591:"Steinway's wartime 'Victory Vertical' products were what kind of instrument?",
592:"Which Seattle grunge band appears performing in the 1992 film Singles?",
593:"Which band sang 'We come from the land of the ice and snow' in 'Immigrant Song'?",
595:"Which current NHL team began life as the Colorado Rockies before moving east?",
596:"The Green Hornet drives a famous black car with what name?",
597:"Cat's Cradle is a satirical novel by which author?",
598:"Henry Hudson explored the Hudson River on behalf of which country?",
599:"What is the third most expensive property on a standard US Monopoly board?",
600:"Which New York house served as the very first presidential mansion?",
601:"The twin cities of Lewiston and Clarkston face each other across the river on the border of which two US states?",
602:"Which NFL quarterback, famous for his big beard, was nicknamed 'the Amish Rifle'?",
603:"What is the longest-running daily comic strip in American newspaper history?",
604:"Flaming Gorge and Glen Canyon are both recreation areas found in which western state?",
605:"In The Princess Bride, Miracle Max's 'MLT' sandwich is made with what meat?",
606:"Which player ranks third all-time for most consecutive games played in Major League Baseball?",
607:"What was the official cause of singer Mama Cass Elliot's death?",
608:"Who provides the voice of Ralph Wiggum on The Simpsons?",
609:"Admiral Robert Peary claimed in 1909 to be the first person to reach what place?",
610:"Strigiformes is the scientific order that includes which birds of prey?",
611:"On Everybody Loves Raymond, what are the names of Ray and Debra's twin sons?",
612:"The Thousand Islands archipelago sits at the eastern end of which Great Lake?",
613:"In what year was the medical textbook Gray's Anatomy first published?",
614:"Which tennis player completed the calendar-year Grand Slam twice?",
615:"What is the real name of 'the Beast,' the huge dog the boys fear in The Sandlot?",
616:"Garfield owns a rubber chicken with what name?",
617:"Who is the cartoonist who created Garfield?",
618:"Which driver has won the most races at Daytona International Speedway?",
620:"What is the smallest known species of lizard in the world?",
621:"Who was the first woman to serve in both the US House of Representatives and the US Senate?",
622:"Which famous mountainside memorial takes its name from Charles Rushmore, a New York lawyer?",
623:"Which rock band took its name from a word for the process of fading away and disappearing?",
624:"The Japanese tradition of hanami is the annual celebration of which blossoms?",
625:"How much water can a thirsty camel drink in roughly thirteen minutes?",
626:"Who provided the cartoon voice of Mr. Magoo?",
627:"Which head coach took his team to four Super Bowls and had earlier played in the NBA?",
628:"In National Lampoon's Vacation, what was the name of the Griswold family's dog?",
629:"What was Maxwell Smart's agent number on the TV series Get Smart?",
630:"Martin Luther King Jr. was born with what first name, before it was changed?",
631:"Which US president created the space agency NASA?",
632:"Who was the first singer to record 'Always Something There to Remind Me'?",
633:"How many floors does the Pentagon have?",
634:"The head of Britain's MI6 is traditionally known by which single letter?",
635:"Who was the first Black person to serve in the US Senate?",
636:"In the film Thor: Ragnarok, which country is Odin in when he dies?",
638:"In what year did France carry out its last execution by guillotine?",
639:"Which comedian, a legendary Saturday Night Live host, also made a memorable guest appearance on 30 Rock?",
640:"How many gallons are there in one standard barrel?",
641:"New York's Idlewild Airport was renamed in honor of which president?",
643:"Which Bavarian village is world-famous for the Passion Play it stages roughly every ten years?",
644:"In literature, what is a recurring theme or symbolic image called?",
645:"What is the musical interval between two notes that are twelve semitones apart?",
646:"Dwayne 'The Rock' Johnson played college football at which university?",
647:"The lyric line 'when the lights go dim' is tied to which horror title?",
648:"Marjory Stoneman Douglas famously described which Florida wetland as a 'river of grass'?",
649:"NASCAR crew chiefs Ray Evernham and Robbie Loomis both worked atop the pit box for which driver?",
650:"The first Major League Baseball All-Star Game, played in 1933, was held at which Chicago ballpark?",
651:"Which actress played Varinia, the love interest in the 1960 film Spartacus?",
652:"Altophobia is the fear of what?",
653:"Who is the author of 'Emma'?",
654:"Who is the author of 'Persuasion'?",
655:"Who is the author of 'Sense and Sensibility'?",
656:"Who is the author of 'Jane Eyre'?",
657:"Who is the author of 'Wuthering Heights'?",
658:"Who is the author of 'Moby-Dick'?",
659:"Who is the author of 'The Scarlet Letter'?",
660:"Who is the author of 'Little Women'?",
661:"Who is the author of 'Great Expectations'?",
662:"Who is the author of 'A Tale of Two Cities'?",
663:"Who is the author of 'Oliver Twist'?",
664:"Who is the author of 'A Christmas Carol'?",
665:"Who is the author of 'Bleak House'?",
666:"Who is the author of 'Hard Times'?",
667:"Who is the author of 'Frankenstein'?",
668:"Who is the author of 'Dracula'?",
669:"Who is the author of 'The Picture of Dorian Gray'?",
670:"Who is the author of 'The Time Machine'?",
671:"Who is the author of 'The War of the Worlds'?",
672:"Who is the author of 'The Invisible Man'?",
673:"Who is the author of 'Treasure Island'?",
674:"Who is the author of 'The Strange Case of Dr Jekyll and Mr Hyde'?",
675:"Who is the author of 'The Jungle Book'?",
676:"Who is the author of 'Heart of Darkness'?",
677:"Who is the author of 'The Great Gatsby'?",
678:"Who is the author of 'To Kill a Mockingbird'?",
679:"Who is the author of 'Of Mice and Men'?",
680:"Who is the author of 'The Grapes of Wrath'?",
681:"Who is the author of 'East of Eden'?",
682:"Who is the author of 'Brave New World'?",
683:"Who is the author of 'Animal Farm'?",
684:"Who is the author of 'Fahrenheit 451'?",
685:"Who is the author of 'The Catcher in the Rye'?",
686:"Who is the author of 'The Old Man and the Sea'?",
687:"Who is the author of 'A Farewell to Arms'?",
688:"Who is the author of 'As I Lay Dying'?",
689:"Who is the author of 'The Sound and the Fury'?",
690:"Who is the author of 'Their Eyes Were Watching God'?",
691:"Who is the author of 'Invisible Man'?",
692:"Who is the author of 'Native Son'?",
693:"Who is the author of 'The Color Purple'?",
694:"Who is the author of 'Beloved'?",
695:"Who is the author of 'One Hundred Years of Solitude'?",
696:"Who is the author of 'Don Quixote'?",
697:"Who is the author of 'The Divine Comedy'?",
698:"Who is the author of 'The Iliad'?",
699:"Who is the author of 'The Odyssey'?",
700:"Who is the author of 'The Canterbury Tales'?",
701:"Who is the author of 'Crime and Punishment'?",
702:"Who is the author of 'The Brothers Karamazov'?",
703:"Who is the author of 'War and Peace'?",
704:"Who is the author of 'Anna Karenina'?",
705:"Who is the author of 'Les Misérables'?",
706:"Who is the author of 'The Hunchback of Notre-Dame'?",
707:"Who is the author of 'Madame Bovary'?",
708:"Who is the author of 'The Count of Monte Cristo'?",
709:"Who is the author of 'The Three Musketeers'?",
710:"Who is the author of 'Around the World in Eighty Days'?",
711:"Who is the author of 'Twenty Thousand Leagues Under the Seas'?",
712:"Who is the author of 'Journey to the Centre of the Earth'?",
713:"Who is the author of 'The Hound of the Baskervilles'?",
714:"Who is the author of 'Murder on the Orient Express'?",
715:"Who is the author of 'And Then There Were None'?",
716:"Who is the author of 'Gone with the Wind'?",
717:"Who is the author of 'The Wonderful Wizard of Oz'?",
718:"Who is the author of 'Mary Poppins'?",
719:"Who is the author of 'Pippi Longstocking'?",
720:"Who is the author of 'The Cat in the Hat'?",
721:"Who is the author of 'Green Eggs and Ham'?",
722:"Who is the author of 'Where the Wild Things Are'?",
723:"Who is the author of 'Goodnight Moon'?",
724:"Who is the author of 'The Very Hungry Caterpillar'?",
725:"Who is the author of 'A Wrinkle in Time'?",
726:"Who is the author of 'The Giver'?",
727:"Who is the author of 'Holes'?",
728:"Who is the author of 'Wonder'?",
729:"Who is the author of 'Diary of a Wimpy Kid'?",
730:"Who is the author of 'The Hunger Games'?",
731:"Who is the author of 'Divergent'?",
732:"Who is the author of 'The Fault in Our Stars'?",
733:"Who is the author of 'Twilight'?",
734:"Who is the author of 'Dune'?",
735:"Who is the author of 'Foundation'?",
736:"Who is the author of 'I, Robot'?",
737:"Who is the author of 'Ender's Game'?",
738:"Who is the author of 'A Game of Thrones'?",
739:"Who is the author of 'The Name of the Wind'?",
740:"Who is the author of 'Mistborn'?",
741:"Who is the author of 'American Gods'?",
742:"Who is the author of 'Coraline'?",
743:"Who is the author of 'The Hitchhiker's Guide to the Galaxy'?",
744:"Who is the author of 'Neuromancer'?",
745:"Who is the author of 'The Martian'?",
746:"Who is the author of 'Ready Player One'?",
747:"Who is the author of 'The Da Vinci Code'?",
748:"Who is the author of 'The Girl with the Dragon Tattoo'?",
749:"Who is the author of 'Gone Girl'?",
750:"Who is the author of 'Winnie-the-Pooh'?",
751:"Who is the author of 'Peter Pan'?",
752:"Who is the author of 'The Wind in the Willows'?",
753:"Who is the author of 'Matilda'?",
754:"Who is the author of 'Charlie and the Chocolate Factory'?",
755:"Who is the author of 'The BFG'?",
756:"Who is the author of 'James and the Giant Peach'?",
757:"Who is the author of 'Anne of Green Gables'?",
758:"Who is the author of 'Little House on the Prairie'?",
759:"Who is the author of 'The Secret Garden'?",
760:"Who is the author of 'Black Beauty'?",
761:"Who is the author of 'The Call of the Wild'?",
762:"Who is the author of 'White Fang'?",
763:"Who is the author of 'Kim'?",
764:"Who is the author of 'The Hobbit'?",
765:"Who is the author of 'The Fellowship of the Ring'?",
766:"Who is the author of 'The Lion, the Witch and the Wardrobe'?",
767:"Who is the author of 'The Handmaid's Tale'?",
768:"Who is the author of 'The Kite Runner'?",
769:"Who is the author of 'Life of Pi'?",
770:"Who is the author of 'The Alchemist'?",
771:"Who is the author of 'Memoirs of a Geisha'?",
772:"Who is the author of 'The Book Thief'?",
773:"Who is the author of 'Water for Elephants'?",
774:"Who is the author of 'The Help'?",
775:"Who is the author of 'Room'?",
776:"Who is the author of 'The Night Circus'?",
777:"What is the capital city of Cambodia?",
778:"What is the capital city of Myanmar?",
779:"What is the capital city of the United Kingdom?",
780:"What is the capital city of Germany?",
781:"What is the capital city of Spain?",
782:"What is the capital city of Switzerland?",
783:"What is the capital city of Czechia?",
784:"What is the capital city of Sweden?",
785:"What is the capital city of Denmark?",
786:"What is the capital city of Iceland?",
787:"What is the capital city of Netherlands?",
788:"What is the capital city of Austria?",
789:"What is the capital city of Russia?",
790:"What is the capital city of Romania?",
791:"What is the capital city of Serbia?",
792:"What is the capital city of Turkey?",
793:"What is the capital city of Israel?",
794:"What is the capital city of Iraq?",
795:"What is the capital city of Nigeria?",
796:"What is the capital city of South Africa?",
797:"What is the capital city of Ghana?",
798:"What is the capital city of Algeria?",
799:"What is the capital city of Canada?",
800:"What is the capital city of Brazil?",
801:"What is the capital city of Chile?",
802:"What is the capital city of Peru?",
803:"What is the capital city of Australia?",
804:"What is the capital city of Fiji?",
805:"What is the capital city of Kuwait?",
806:"What is the capital city of United Arab Emirates?",
807:"What is the capital city of Lebanon?",
808:"What is the capital city of Oman?",
809:"What is the capital city of Uzbekistan?",
810:"What is the capital city of Bhutan?",
811:"What is the capital city of Brunei?",
812:"What is the capital city of North Korea?",
813:"What is the capital city of Tunisia?",
814:"What is the capital city of Sudan?",
815:"What is the capital city of Uganda?",
816:"What is the capital city of Zimbabwe?",
817:"What is the capital city of Madagascar?",
818:"What is the capital city of Senegal?",
819:"What is the capital city of Rwanda?",
820:"What is the capital city of Namibia?",
821:"What is the capital city of Cuba?",
822:"What is the capital city of Panama?",
823:"What is the capital city of Paraguay?",
824:"What is the capital city of Ecuador?",
825:"What is the capital city of Samoa?",
826:"What is the capital city of Vanuatu?",
827:"What is the capital city of Estonia?",
828:"What is the capital city of Lithuania?",
829:"What is the capital city of Slovenia?",
830:"What is the capital city of Cyprus?",
831:"What is the capital city of Monaco?",
832:"What is the capital city of Liechtenstein?",
833:"What is the capital city of North Macedonia?",
834:"What is the capital city of Bosnia And Herzegovina?",
835:"What is the capital city of Belarus?",
836:"What is the capital city of Armenia?",
837:"What is the capital city of Kyrgyzstan?",
838:"What is the capital city of Turkmenistan?",
839:"What is the capital city of Mauritius?",
840:"What is the capital city of Eritrea?",
841:"What is the capital city of Somalia?",
842:"What is the capital city of Niger?",
843:"What is the capital city of Benin?",
844:"What is the capital city of Togo?",
845:"What is the capital city of Liberia?",
846:"What is the capital city of Gabon?",
847:"What is the capital city of Lesotho?",
848:"What is the capital city of Mauritania?",
849:"What is the capital city of Cabo Verde?",
850:"What is the capital city of Guinea-bissau?",
851:"What is the capital city of Dominican Republic?",
852:"What is the capital city of Trinidad And Tobago?",
853:"What is the capital city of Belize?",
854:"What is the capital city of El Salvador?",
855:"What is the capital city of Suriname?",
856:"What is the capital city of Micronesia?",
857:"What is the capital city of Palau?",
858:"What is the capital city of Tuvalu?",
859:"Who was the first president of the United States?",
860:"Who was the third president of the United States?",
861:"Who was the fifth president of the United States?",
862:"Who was the seventh president of the United States?",
863:"Who was the ninth president of the United States?",
864:"Who was the eleventh president of the United States?",
865:"Who was the thirteenth president of the United States?",
866:"Who was the fifteenth president of the United States?",
867:"Who was the seventeenth president of the United States?",
868:"Who was the nineteenth president of the United States?",
869:"Who was the twenty-first president of the United States?",
870:"Who was the twenty-third president of the United States?",
871:"Who was the twenty-fifth president of the United States?",
872:"Who was the twenty-seventh president of the United States?",
873:"Who was the twenty-ninth president of the United States?",
874:"Who was the thirty-first president of the United States?",
875:"Who was the thirty-third president of the United States?",
876:"Who was the thirty-fifth president of the United States?",
877:"Who was the thirty-seventh president of the United States?",
878:"Who was the thirty-ninth president of the United States?",
879:"Who was the forty-first president of the United States?",
880:"Who was the forty-third president of the United States?",
881:"Who was the forty-fifth president of the United States?",
882:"Who was the forty-seventh president of the United States?",
883:"What is the state nickname of Alabama?",
884:"What is the state nickname of Arizona?",
885:"What is the state nickname of California?",
886:"What is the state nickname of Connecticut?",
887:"What is the state nickname of Florida?",
888:"What is the state nickname of Hawaii?",
889:"What is the state nickname of Illinois?",
890:"What is the state nickname of Iowa?",
891:"What is the state nickname of Kentucky?",
892:"What is the state nickname of Maine?",
893:"What is the state nickname of Massachusetts?",
894:"What is the state nickname of Minnesota?",
895:"What is the state nickname of Missouri?",
896:"What is the state nickname of Nebraska?",
897:"What is the state nickname of New Hampshire?",
898:"What is the state nickname of New Mexico?",
899:"What is the state nickname of North Carolina?",
900:"What is the state nickname of Ohio?",
901:"What is the state nickname of Oregon?",
902:"What is the state nickname of Rhode Island?",
903:"What is the state nickname of South Dakota?",
904:"What is the state nickname of Texas?",
905:"What is the state nickname of Vermont?",
906:"What is the state nickname of Washington?",
907:"What is the state nickname of Wisconsin?"
};
var DJ_MC=DJ_RAW.map(function(p, djI){ return djBuildMC(p[0], p[1], djI); });
/* Owner ruling, 2026-11-11 — the Mockingbird town set, authored in
   place: the generic build above dealt US presidents (Millard
   Fillmore, James Monroe) and a lowercase city next to the answer,
   because an unclassified town name reads as generic "other" and
   so do the presidents' full names. The set is replaced here —
   after the build, so the seeded build stream, and therefore
   every other question's generated set, stays exactly as the
   baked bank state recorded it — with fictional/literary towns:
   Mayberry (The Andy Griffith Show), Bedford Falls (It's a
   Wonderful Life), and Cicely (Northern Exposure). All four
   strings are unclassified place names (no person, group, or
   subkind reading), so the kind, subkind, and deal-time passes
   keep the set exactly as authored. The answer itself is the
   novel's own spelling — Maycomb — corrected in DJ_RAW above
   from the sheet's "Macomb". */
(function fixMaycombSet(){
  DJ_MC.forEach(function(q){
    if(!q || q.type!=="mc") return;
    if(norm(djRawClue(q))===norm("To Kill a Mockingbird set in what fictional AL city") && norm(q.choices[q.a])==="maycomb"){
      q.choices=["Maycomb","Mayberry","Bedford Falls","Cicely"];
      q.a=0;
    }
  });
})();
/* The same correction's ripple, pinned: "Maycomb" is seven letters
   where "Macomb" was six, and the DJ picker sorts its shared
   candidate pool by closeness — word count, then string length —
   so the one corrected string re-sorts the pool and re-draws the
   generated sets of fourteen other sheet questions (two of the
   re-drawn sets even failed the deal-time guard and would have
   silently stopped dealing). Each set below is pinned to the
   exact choices it dealt before the correction — same strings,
   same order, same correct index — so the spelling fix changes
   no other question's dealt form. The two pins whose old set
   carried "Macomb" as a distractor carry the corrected spelling
   in that slot instead; every other string is verbatim. Keyed by
   norm(raw clue) + "|" + norm(answer), like the other stamps. */
(function pinMaycombRipple(){
  var pins={};
  [["I understand","fathom",["fathom","Belgrade","johnson","wedding"]],
   ["Male horse female donkey","hinny",["hinny","Flicka","Havana","Maseru"]],
   ["Millionaire host","cedric",["cedric","hamms","Igor","Pretoria"]],
   ["Cuban missile crisis","Khrushchev",["Khrushchev","Disneyland","hersheys","Taylor"]],
   ["Old rough and ready","Taylor",["Taylor","seattle","Carrie","maiden"]],
   ["What gives diamonds blue color","Boron",["Boron","tornado","closet","Prague"]],
   ["Word spelled same forwards, backwards and upside down","noon",["noon","barton","VA","egon"]],
   ["Not presidential secret service nickname","preacher",["preacher","Lincoln","wounded knee","Maycomb"]],
   ["President who was bartender","Lincoln",["Lincoln","Donald Trump","Maycomb","preacher"]],
   ["WIFI password in Dr Strange","Shamballa",["Shamballa","Palikir","Yerevan","Amsterdam"]],
   ["Halcyon days meaning","calm",["calm","Harare","macy's","spanish"]],
   ["Walk of fame in manhattan","fashion",["fashion","Yerevan","Brasilia","Rathtar"]],
   ["Victory verticals","pianos",["pianos","bones","harley","Bern"]],
   ["When the lights go dim","Carrie",["Carrie","flash","Taylor","Belgrade"]],
   /* The 2026-11-11 Trivia Sheet spelling sweep's ripple, pinned
      the same way: each corrected spelling re-sorted the shared
      candidate pool (and the shared seeded build stream), re-
      drawing generated sets across the bank. The entries below
      pin every re-drawn set to the exact choices it dealt before
      the sweep — corrected spellings in the slots the sweep
      itself fixed, every other string verbatim. */
   ["14 100-yard games","Barry Sanders",["Barry Sanders", "Walter Payton", "Emmitt Smith", "Jim Brown"]],
   ["Bang your head","Cocktail weekend?",["Cocktail weekend?", "Richard Wright", "Margaret Mitchell", "xanthan gum"]],
   ["Han Solo smuggling what in movie","Rathtar",["Rathtar", "Gung Ho", "Everett scott", "Vin Diesel"]],
   ["How many presidents born british subjects","8",["8", "14", "5", "3"]],
   ["Cowboys v. Aliens","Daniel Craig",["Daniel Craig", "George Lucas", "Ben Franklin", "Johnny Cash"]],
   ["TomCruise eyes/eyebrows","Tom Cruise",["Tom Cruise", "Micky Ward", "Rod Laver", "Roger Miller"]],
   ["Cars voice","Owen Wilson",["Owen Wilson", "Walt Frasier", "Ben Franklin", "Jon Favreau"]],
   ["Napoleon Dynamite","Vote for Pedro",["Vote for Pedro", "Taylor Hicks", "gale gilbert", "Chain Reaction"]],
   ["Milky Way shaped like","flat spiral",["flat spiral", "fisher effect", "Golden State", "Hawkeye State"]],
   ["ILM founded by","George Lucas",["George Lucas", "Douglas Fairbanks", "Thomas Jefferson", "Richard Nixon"]],
   ["Didn’t play for the Yankees","Sandy Koufax",["Sandy Koufax", "Stephen King", "Kurt Vonnegut, Jr.", "John Hughes"]],
   ["Gold records in 50's and 90's","Frank Sinatra",["Frank Sinatra", "Ben Franklin", "will ferrell", "Chubby Checker"]],
   ["Tie Breaker: Year of 2001: A space odeyssey","1968",["1968", "1919", "1946", "1967"]],
   ["Pogo the clown","John Wayne Gacy",["John Wayne Gacy", "Richard Petty", "Alexandre Dumas", "william golding"]],
   ["DC Follies","Fred Willard",["Fred Willard", "Marvin Gardens", "greenland shark", "Cocktail weekend?"]],
   ["Haley's comet has passed how many times in xxx years","4",["4", "3", "14", "8"]],
   ["Bad air","Malaria",["Malaria", "Madrid", "annapolis", "lily"]],
   ["Shawshank Redemption author","Stephen King",["Stephen King", "John Hughes", "Sandy Koufax", "Roald Dahl"]],
   ["President arrested and brought to custody","US Grant",["US Grant", "preacher", "Benjamin Harrison", "Jimmy Carter"]],
   ["Badges, we don't need stinking badges","The treasure of sierra madre",["The treasure of sierra madre", "Chester A. Arthur", "William Henry Harrison", "Harry S. Truman"]],
   ["Blame it on the rain","Milli Vanilli",["Milli Vanilli", "The Avengers", "NJ Devils", "Harry and Marv"]],
   ["Bob Marley and Donkey Kong","1981",["1981", "1987", "1910", "1990"]],
   ["Cumberland Pass","Appalachian Mountains",["Appalachian Mountains", "Stephen Colbert", "gale gilbert", "Alka Seltzer"]],
   ["Steel Magnolias -Ouiser Boudreaux","Shirley MacLaine",["Shirley MacLaine", "Nancy Cartwright", "emily bronte", "Agatha Christie"]],
   ["First president of academy of arts","Douglas Fairbanks",["Douglas Fairbanks", "George Washington", "Thomas Jefferson", "Andrew Johnson"]],
   ["ROCKY 3","Hulk Hogan",["Hulk Hogan", "brad paisley", "Ron Howard", "bob hoskins"]],
   ["Won best actor and actress Oscar","As Good as it gets",["As Good as it gets", "I Can Only Imagine", "Pale Rider", "The Phantom"]],
   ["Rookie of the Year / MVP the next year","Cal Ripken Jr",["Cal Ripken Jr", "Sandy Koufax", "Freddy Fender", "joe hazelwood"]],
   ["Year nelson mandela released","1990",["1990", "1981", "1935", "1923"]],
   ["Year chuck yeager broke sound barrier","1947",["1947", "1859", "1981", "1972"]],
   ["Smooth like butter","BTS",["BTS", "abba", "guardians", "Falcons"]],
   ["Cases in a keg","6.88",["6.88", "15.5", "53", "5"]],
   ["Resistance","ohms",["ohms", "Dinky", "Iris", "gma"]],
   ["Po teletubby","purple",["purple", "green", "Azure", "Black"]],
   ["Fingernails","keratin",["keratin", "Lotso", "Naypyidaw", "bruce"]],
   ["Pooh","heffalump",["heffalump", "Bissau", "Disneyland", "Belmopan"]],
   ["Reach for stars","Casey Kasem",["Casey Kasem", "Veronica Roth", "Beetle Bailey", "Israel president"]],
   ["Zorro horse","tornado",["tornado", "Pyongyang", "kiss", "Lotso"]],
   ["Mt. wannahockaloogie","Finding Nemo",["Finding Nemo", "Bay State", "Cicely Alaska", "Stephen Colbert"]],
   ["Nebuchadnezzar","20 bottles",["20 bottles", "10 minutes", "92-95", "3 o'clock"]],
   ["75 knots","86 mph",["86 mph", "92-95", "30 gallons", "3 o'clock"]],
   ["Dow jones","30",["30", "6.88", "86", "18th"]],
   ["Sonny crockett partner","rico tubbs",["rico tubbs", "get shorty", "Abu Dhabi", "fisher effect"]],
   ["F(x) etc","2",["2", "8", "14", "7"]],
   ["20 in monopoly","green",["green", "purple", "Coral", "Mint"]],
   ["Pres candidate shot in wisconsin saloon","Theodore Roosevelt",["Theodore Roosevelt", "Freddy Fender", "peter flanagan", "Alexandre Dumas"]],
   ["John Steed and Emma Peel","The Avengers",["The Avengers", "Rolling Stones", "Milli Vanilli", "Blue Jays"]],
   ["Blue Angels introduced","1946",["1946", "1923", "1910", "1972"]],
   ["2023 Cool Cat by Queen commercial","Amazon",["Amazon", "jack black", "Lincoln", "James Monroe"]],
   ["How many hits does it take to sink a Cruiser in Battleship","3",["3", "8", "14", "5"]],
   ["Gil Grissom in CSI","William Petersen",["William Petersen", "Ryan Fitzpatrick", "kurt vonnegut", "Rickey Henderson"]],
   ["Malcolm in the middle drug store","Lucky Aide",["Lucky Aide", "Dan Brown", "get shorty", "Rogers Hornsby"]],
   ["Grand Theft Auto director 1977","Ron Howard",["Ron Howard", "Gerald Ford", "Josh Turner", "mel brooks"]],
   ["Movie \"ghost who walks with man cannot die\"","The Phantom",["The Phantom", "Mystic Pizza", "Rathtar", "Rockford Files"]],
   ["Sean Thornton in Ireland movie","The Quiet Man",["The Quiet Man", "ace ventura", "As Good as it gets", "Mystic Pizza"]],
   ["Lil Dickey's real name","Davis Burd",["Davis Burd", "Marshall Mathers", "Calvin Broadus", "Curtis Jackson"]],
   ["1941 book and 2006 movie","Flicka",["Flicka", "SOA", "Everett scott", "McGee"]],
   ["Not included in Who's on First","Right Field",["Right Field", "Taylor Hicks", "Old Style", "Harper Lee"]],
   ["Heart chakra represented by what color","green",["green", "purple", "Olive", "Cyan"]],
   ["Long Black Train first album","Josh Turner",["Josh Turner", "Roger Miller", "Bill Engvall", "Peter Tork"]],
   ["Consecutive games with a hit for DiMaggio","56",["56", "7", "86", "14"]],
   ["1901 batting champion","Nap Lajoie",["Nap Lajoie", "Micky Ward", "Tom Hanks", "omar epps"]],
   ["Not Post Malone song","Stay Awake",["Stay Awake", "Earth Angel", "It's raining Men", "God Only Knows"]],
   ["Fantastic Mr. Fox author","Roald Dahl",["Roald Dahl", "Stephen King", "Grisham", "Kurt Vonnegut, Jr."]],
   ["1938 legislation that set 40 hr workweek and minimum wage","Fair Labor Standards Act",["Fair Labor Standards Act", "Marvin Gardens", "The treasure of sierra madre", "cherry blossom"]],
   ["Prohibition amendment","18th",["18th", "3", "86", "6.88"]],
   ["Number of ppl in NightHawks diner","3",["3", "5", "8", "14"]],
   ["First Secretary of State","Jefferson",["Jefferson", "Libreville", "Santiago", "Naypyidaw"]],
   ["Soprano maiden name","DeAngelis or Moltesanti",["DeAngelis or Moltesanti", "Mount Rushmore State", "Louisa May Alcott", "Cornhusker State"]],
   ["\"dude president\"","Chester Arthur",["Chester Arthur", "Douglas Fairbanks", "Andrew Johnson", "Richard Nixon"]],
   ["Isicles and popsicles song","The Mermaids",["The Mermaids", "The Band Perry", "Bon Jovi", "Brad Paisley & Alison Krauss"]],
   ["US state with most eruptions","Alaska",["Alaska", "S. Carolina", "North Carolina", "Missouri"]],
   ["Simplon pass between","Switzerland and Italy",["Switzerland and Italy", "Fyodor Dostoevsky", "Richard Wright", "Mount Rushmore State"]],
   ["Walk Away singer","Kelly Clarkson",["Kelly Clarkson", "Iggy Azalea", "Ally McBeal", "Dionne Warwick"]],
   ["Star Wars \"Tomorrow at dawn, X lessons\"","three",["three", "53", "7", "4"]],
   ["First two songs were #1 and #2 hits in top 100","Iggy Azalea",["Iggy Azalea", "Ally McBeal", "Dionne Warwick", "Kelly Clarkson"]],
   ["Host of Card Shark","Joel McHale",["Joel McHale", "George Orwell", "brad paisley", "Micky Ward"]],
   ["Roman calendar began in","March",["March", "February", "October", "September"]],
   ["Walking the line, mistakes can't hide TV theme song to","Ally McBeal",["Ally McBeal", "Kelly Clarkson", "Dionne Warwick", "Iggy Azalea"]],
   ["JD Salinger full name","Jerome David",["Jerome David", "black beauty", "Card Czar", "wounded knee"]],
   ["Dr Who that was sorcerer in LOTR","Sylvester McCoy",["Sylvester McCoy", "Andrew Jackson", "Charles Dickens", "Chubby Checker"]],
   ["Barenaked ladies song Like ____ _____ I'm frantic","Harrison Ford",["Harrison Ford", "Peter Tork", "Roger Miller", "Bill Engvall"]],
   ["Seattle Band in Singles","Pearl Jam",["Pearl Jam", "Led Zeppelin", "The Mermaids", "Gaga and Ariana"]],
   ["The Amish Rifle","Ryan Fitzpatrick",["Ryan Fitzpatrick", "Thomas Jefferson", "Freddy Fender", "George Orwell"]],
   ["Princess Bride MLT","Mutton",["Mutton", "Ashgabat", "Suva", "hiccup"]],
   ["Mama Cass died of","heart attack",["heart attack", "Red Lobster", "Dante Alighieri", "Elizabeth Tower"]],
   ["Not a singer in All For Love","Bon Jovi",["Bon Jovi", "Coldplay", "The Mermaids", "Gaga and Ariana"]],
   ["Smallest lizard","nano chameleon",["nano chameleon", "rico tubbs", "black beauty", "Kenneth Grahame"]],
   ["First woman to serve in both houses of congress","Margaret Chase Smith",["Margaret Chase Smith", "Kelly Clarkson", "Charlotte Brontë", "Cloris Leachman"]],
   ["Hanami is yearly celebration of","cherry blossom",["cherry blossom", "dr honeydew", "Isaac Asimov", "San Salvador"]],
   ["How much water can camel drink in 13 mins","30 gallons",["30 gallons", "476,952 miles/day", "18'6\"", "86 mph"]],
   ["What president established NASA","Eisenhower",["Eisenhower", "Rutherford B. Hayes", "William Howard Taft", "Thomas Jefferson"]],
   ["How many floors in Pentagon","7",["7", "three", "3", "15.5"]],
   ["Head of MI6 letter","C",["C", "Dutch - Netherlands", "Mystic Pizza", "Toss Across"]],
   ["SNL host on 30 Rock","Steve Martin",["Steve Martin", "harry stamper", "Daniel Craig", "Stephen Harper"]],
   ["How many gallons in a barrel","15.5",["15.5", "53", "56", "2"]],
   ["Bavarian village with passion play","Oberammergau",["Oberammergau", "Markus Zusak", "Lord of the Flies", "Judge Judy"]],
   ["Altophobia is fear of","heights",["heights", "Harare", "Dinky", "carotid"]],
   ["'Les Misérables' was written by","Victor Hugo",["Victor Hugo", "Jules Verne", "Émile Zola", "Gustave Flaubert"]],
   ["'The Hunchback of Notre-Dame' was written by","Victor Hugo",["Victor Hugo", "Gustave Flaubert", "Jules Verne", "Alexandre Dumas"]],
   ["'Madame Bovary' was written by","Gustave Flaubert",["Gustave Flaubert", "Émile Zola", "Victor Hugo", "Honoré de Balzac"]],
   ["'The Count of Monte Cristo' was written by","Alexandre Dumas",["Alexandre Dumas", "Jules Verne", "Gustave Flaubert", "Émile Zola"]],
   ["'The Three Musketeers' was written by","Alexandre Dumas",["Alexandre Dumas", "Jules Verne", "Gustave Flaubert", "Honoré de Balzac"]],
   ["'Around the World in Eighty Days' was written by","Jules Verne",["Jules Verne", "Émile Zola", "Victor Hugo", "Gustave Flaubert"]],
   ["'Twenty Thousand Leagues Under the Seas' was written by","Jules Verne",["Jules Verne", "Honoré de Balzac", "Émile Zola", "Alexandre Dumas"]],
   ["'Journey to the Centre of the Earth' was written by","Jules Verne",["Jules Verne", "Gustave Flaubert", "Victor Hugo", "Honoré de Balzac"]],
   ["Capital of myanmar","Naypyidaw",["Naypyidaw", "Ngerulmud", "Baghdad", "Vilnius"]],
   ["Capital of algeria","Algiers",["Algiers", "Ottawa", "Palikir", "Prague"]],
   ["Capital of brazil","Brasilia",["Brasilia", "Baghdad", "London", "Vilnius"]],
   ["Capital of zimbabwe","Harare",["Harare", "Thimphu", "Niamey", "Madrid"]],
   ["Capital of madagascar","Antananarivo",["Antananarivo", "Pyongyang", "Vilnius", "Naypyidaw"]],
   ["Capital of rwanda","Kigali",["Kigali", "Algiers", "Yerevan", "Madrid"]],
   ["Capital of namibia","Windhoek",["Windhoek", "Funafuti", "Yerevan", "Santiago"]],
   ["Capital of lithuania","Vilnius",["Vilnius", "Algiers", "Moscow", "Kigali"]],
   ["Capital of slovenia","Ljubljana",["Ljubljana", "Santiago", "Tallinn", "Sarajevo"]],
   ["Capital of kyrgyzstan","Bishkek",["Bishkek", "Baghdad", "Santiago", "Pretoria"]],
   ["Capital of eritrea","Asmara",["Asmara", "Skopje", "Niamey", "Bissau"]],
   ["Capital of somalia","Mogadishu",["Mogadishu", "Baghdad", "Santiago", "Nouakchott"]],
   ["Capital of benin","Porto-Novo",["Porto-Novo", "Stockholm", "Copenhagen", "Pyongyang"]],
   ["Capital of liberia","Monrovia",["Monrovia", "Reykjavik", "Ljubljana", "Vilnius"]],
   ["Capital of gabon","Libreville",["Libreville", "Windhoek", "Brasilia", "Amsterdam"]],
   ["Capital of mauritania","Nouakchott",["Nouakchott", "Belmopan", "Baghdad", "Canberra"]],
   ["Capital of guinea-bissau","Bissau",["Bissau", "Palikir", "Ankara", "Ottawa"]],
   ["Capital of palau","Ngerulmud",["Ngerulmud", "Thimphu", "Nicosia", "Vilnius"]],
   ["Arizona state nickname","Grand Canyon State",["Grand Canyon State", "Golden State", "Granite State", "Kuwait City"]],
   ["Vermont state nickname","Green Mountain State",["Green Mountain State", "Pine Tree State", "Bandar Seri Begawan", "Santo Domingo"]],
   /* Owner live-play flags, 2026-11-13: the Ernest Evans set dealt
      an actor (Leonard Nimoy), an athlete (Oscar Robertson), and an
      author (George Orwell) beside the one singer, because the
      profession fence keyed the ANSWER's classified role and a
      stage-name item slipped it — its company is the prescribed
      all-singer stage-name set: Little Richard, Freddie Mercury,
      and Elton John, each a singer known by a stage name, like
      Chubby Checker himself. The Daily Show set dealt John Oliver
      beside Stephen Colbert, but Oliver was ALSO a Daily Show
      correspondent (2006–2013, after Colbert's 1997–2005 run), so
      the set held two defensible answers — its company is now Jon
      Stewart (the host, never a correspondent), Conan O'Brien,
      and Jimmy Fallon, neither of whom was ever a correspondent
      on the show. Both sets are also fenced by the stage-name /
      subject-profession gates in subKindAnswer (part 1) and their
      pools (part 6), so the repair passes keep them as pinned. */
   ["Ernest Evans real name","Chubby Checker",["Chubby Checker", "Little Richard", "Freddie Mercury", "Elton John"]],
   ["Daily Show","Stephen Colbert",["Stephen Colbert", "Jon Stewart", "Conan O'Brien", "Jimmy Fallon"]]
  ].forEach(function(p){ pins[norm(p[0])+"|"+norm(p[1])]=p[2]; });
  DJ_MC.forEach(function(q){
    if(!q || q.type!=="mc") return;
    var pin=pins[norm(djRawClue(q))+"|"+norm(q.choices[q.a])];
    if(pin){ q.choices=pin.slice(); q.a=0; }
  });
})();

/* Real names from the sheet: birth name -> stage name */
/* Distractors stay inside the answer's narrow profession, per the
   narrow-subject rule: a singer/rapper draws only singers/rappers, the
   comedian only fellow stage-name comedians of his era, and the
   sportscaster only sportscasters. The sheet holds no second comedian
   or sportscaster, so those two sets use verified in-profession
   alternatives (Rodney Dangerfield, George Burns, and Woody Allen are
   all stage names, like Mel Brooks; Bob Costas, Al Michaels, and Joe
   Buck are Ahmad Rashad's fellow sportscasters) rather than borrowing
   a rapper or a singer by elimination. */
var DJ_REAL=[
  ["Aubrey Graham is better known as which performer?","Drake",["Chubby Checker","Pitbull","Tupac Shakur"]],
  ["Ernest Evans is better known as which performer?","Chubby Checker",["Drake","Pitbull","Tupac Shakur"]],
  ["Melvin Kaminsky is better known as which performer?","Mel Brooks",["Rodney Dangerfield","George Burns","Woody Allen"]],
  ["Bobby Moore is better known as which sportscaster?","Ahmad Rashad",["Bob Costas","Al Michaels","Joe Buck"]],
  ["Armando Perez is better known as which performer?","Pitbull",["Drake","Chubby Checker","Tupac Shakur"]],
  ["Lesane Crooks is better known as which performer?","Tupac Shakur",["Drake","Chubby Checker","Pitbull"]],
  ["Tara Leigh Patrick is better known as which performer?","Carmen Electra",["Pamela Anderson","Britney Spears","Jennifer Lopez"]]
].map(function(t){ var o=mc(t[0],[t[1]].concat(t[2]),0); o.cat="Trivia Names"; return o; });

/* "Where's this" places from the sheet */
var DJ_PLACES=[
  ["Where is the Brandenburg Gate?","Berlin",["Paris","Rome","Vienna"]],
  ["Where is St Peter's Square?","Vatican City",["Florence","Venice","Naples"]],
  ["Graceland, Elvis Presley's home, is in which city?","Memphis",["Nashville","Tupelo","Las Vegas"]]
].map(function(t){ var o=mc(t[0],[t[1]].concat(t[2]),0); o.cat="Trivia"; return o; });
/* Era buckets for the DJ faces list, so a name is only ever offered
   next to figures from its own era — Thomas Paine (1737–1809) appears
   alongside other pre-1900 figures, never modern TV faces, and modern
   celebrities never sit next to 18th-century revolutionaries. Any
   name not listed in the first two buckets counts as modern. */
var DJ_FACE_HISTORICAL=["Thomas Paine","Nicolaus Copernicus","Rutherford B. Hayes","Monet","William Howard Taft","Carl Sandburg","Helen Keller","Winston Churchill"];
var DJ_FACE_CLASSIC=["Errol Flynn","George Orwell","Al Capone","John Glenn","Cloris Leachman","Christopher Plummer","Buzz Aldrin","Wilford Brimley","Allen Ludden and Betty White","Francis Ford Coppola"];
/* Gender / group tags for the DJ faces list — the gender rule for
   person questions, applied on top of the era rule: a man's name is
   only ever offered next to other men, a woman's only next to other
   women, never mixed. Groups, bands, families, and duos are their own
   kind: their distractors are other groups, never single individuals
   of either gender. Any solo name not listed as female or as a group
   counts as male. */
var DJ_FACE_FEMALE=["Cloris Leachman","Vanna White","Christina Hendricks","Meghan Trainor","Dana Perino","Morgan Fairchild","Helen Keller","Jessica Chastain","Mariska Hargitay","Kerry Washington","Sarah McLachlan","Kesha","Julianne Hough","Christina Ricci"];
var DJ_FACE_GROUPS=["Keith Urban/Nicole Kidman","Allen Ludden and Betty White","The Duggars","Beach Boys","Pink Floyd"];
var DJ_FACE_MC=DJ_FACES.map(function(name){
  var pat=namePattern(name);
  var era=djFaceEra(name);
  var kind=djFaceKind(name);
  /* Hard filter first: same kind only — same gender for individuals,
     groups only for groups. The era rule then ranks within that set. */
  var others=DJ_FACES.filter(function(n){ return n!==name && namePattern(n)!==pat && djFaceKind(n)===kind; });
  var picks=shuffle(others.filter(function(n){ return djFaceEra(n)===era; })).slice(0,3);
  if(picks.length<3){
    /* Widen to the nearest era first — the mid-century "classic"
       bucket bridges the historical and modern lists — but never
       across gender, and never from groups to individuals. */
    var order= era==="classic" ? ["modern","historical"] : ["classic", era==="historical" ? "modern" : "historical"];
    order.forEach(function(e){
      shuffle(others.filter(function(n){ return djFaceEra(n)===e; })).forEach(function(n){
        if(picks.length<3 && picks.indexOf(n)===-1) picks.push(n);
      });
    });
  }
  if(picks.length<3){
    /* Last resort, still inside the same gender/group kind (that
       rule never widens): relax only the pattern-uniqueness filter
       rather than deal a question with missing choices. */
    shuffle(DJ_FACES.filter(function(n){ return n!==name && djFaceKind(n)===kind; })).forEach(function(n){
      if(picks.length<3 && picks.indexOf(n)===-1) picks.push(n);
    });
  }
  var o=mc("Trivia names round \u2014 name the celebrity: "+pat, [name].concat(picks), 0);
  o.cat="Trivia Faces"; return o;
});

/* The spelling sweep's ripple in the faces round, pinned the
   same way: the faces build shares the seeded build stream with
   the sheet build, so the corrected sheet spellings re-drew most
   generated face sets. Each set below is pinned to the exact
   choices it dealt before the sweep (corrected spellings in the
   slots the sweep itself fixed), keyed by the face's name. */
(function pinSweepFaceRipple(){
  var pins={};
  [
   ["Tom Cruise",["Tom Cruise", "Steven Tyler", "Robert Downey Jr", "Tom Ridge"]],
   ["Justin Timberlake",["Justin Timberlake", "Don McLean", "Robert Downey Jr", "Jimmy Fallon"]],
   ["Christopher Nolan",["Christopher Nolan", "JK Simmons", "Walt Frasier", "Richard Blais"]],
   ["Walt Frasier",["Walt Frasier", "Lou Ferrigno", "Ben Kingsley", "Tom Ridge"]],
   ["Cloris Leachman",["Cloris Leachman", "Vanna White", "Meghan Trainor", "Morgan Fairchild"]],
   ["Vanna White",["Vanna White", "Dana Perino", "Sarah McLachlan", "Morgan Fairchild"]],
   ["Christina Hendricks",["Christina Hendricks", "Kesha", "Julianne Hough", "Dana Perino"]],
   ["Jason Clarke",["Jason Clarke", "JK Simmons", "Tony Hawk", "Lou Ferrigno"]],
   ["Buzz Aldrin",["Buzz Aldrin", "Christopher Plummer", "Al Capone", "Errol Flynn"]],
   ["Jack Lew",["Jack Lew", "Christian Bale", "Ben Kingsley", "Tony Hawk"]],
   ["Meghan Trainor",["Meghan Trainor", "Christina Hendricks", "Mariska Hargitay", "Kesha"]],
   ["Don McLean",["Don McLean", "Rian Johnson", "Tony Hawk", "Billy Gibbons"]],
   ["Gary Sinise",["Gary Sinise", "Tony Hawk", "Peter Frampton", "Justin Timberlake"]],
   ["Wil Wheaton",["Wil Wheaton", "Brad Pitt", "Tom Cruise", "JK Simmons"]],
   ["Tom Ridge",["Tom Ridge", "Anson Williams", "Peter Frampton", "Tony Hawk"]],
   ["Errol Flynn",["Errol Flynn", "Wilford Brimley", "Christopher Plummer", "John Glenn"]],
   ["Tony Hawk",["Tony Hawk", "Rian Johnson", "Jack Lew", "Dusty Hill"]],
   ["Lou Ferrigno",["Lou Ferrigno", "Bruce Campbell", "Christopher Nolan", "Don McLean"]],
   ["Winston Churchill",["Winston Churchill", "Thomas Paine", "Rutherford B. Hayes", "Nicolaus Copernicus"]],
   ["William Howard Taft",["William Howard Taft", "Carl Sandburg", "Thomas Paine", "Rutherford B. Hayes"]],
   ["Wilford Brimley",["Wilford Brimley", "Errol Flynn", "Buzz Aldrin", "George Orwell"]],
   ["Christian Bale",["Christian Bale", "Walt Frasier", "Billy Gibbons", "JK Simmons"]],
   ["Dana Perino",["Dana Perino", "Kerry Washington", "Jessica Chastain", "Vanna White"]],
   ["Peter Frampton",["Peter Frampton", "Chuck Hagel", "Billy Gibbons", "Jon Hamm"]],
   ["Al Capone",["Al Capone", "Wilford Brimley", "Errol Flynn", "Buzz Aldrin"]],
   ["Chuck Hagel",["Chuck Hagel", "Jason Clarke", "Jack Lew", "Tom Cruise"]],
   ["Jon Hamm",["Jon Hamm", "Billy Gibbons", "Steven Tyler", "Richard Blais"]],
   ["George Orwell",["George Orwell", "Al Capone", "Buzz Aldrin", "Wilford Brimley"]],
   ["John Glenn",["John Glenn", "Al Capone", "Francis Ford Coppola", "Christopher Plummer"]],
   ["Morgan Fairchild",["Morgan Fairchild", "Kesha", "Julianne Hough", "Vanna White"]],
   ["Carl Sandburg",["Carl Sandburg", "Winston Churchill", "Thomas Paine", "Rutherford B. Hayes"]],
   ["Bruce Campbell",["Bruce Campbell", "Jason Clarke", "Lou Ferrigno", "Billy Gibbons"]],
   ["Allen Ludden and Betty White",["Allen Ludden and Betty White", "The Duggars", "Beach Boys", "Keith Urban/Nicole Kidman"]],
   ["Mariska Hargitay",["Mariska Hargitay", "Meghan Trainor", "Sarah McLachlan", "Christina Hendricks"]],
   ["Helen Keller",["Helen Keller", "Cloris Leachman", "Vanna White", "Christina Ricci"]],
   ["Jessica Chastain",["Jessica Chastain", "Morgan Fairchild", "Sarah McLachlan", "Kesha"]],
   ["Robert Downey Jr",["Robert Downey Jr", "Bruce Campbell", "Tony Hawk", "Don McLean"]],
   ["Bobby Flay",["Bobby Flay", "Billy Gibbons", "Bruce Campbell", "Justin Timberlake"]],
   ["Dusty Hill",["Dusty Hill", "Jason Clarke", "Robin Lord Taylor", "Don McLean"]],
   ["Billy Gibbons",["Billy Gibbons", "Brad Pitt", "Jon Hamm", "Chuck Hagel"]],
   ["Kerry Washington",["Kerry Washington", "Mariska Hargitay", "Meghan Trainor", "Christina Ricci"]],
   ["Sarah McLachlan",["Sarah McLachlan", "Kesha", "Christina Hendricks", "Jessica Chastain"]],
   ["Christopher Plummer",["Christopher Plummer", "Buzz Aldrin", "Wilford Brimley", "George Orwell"]],
   ["Nicolaus Copernicus",["Nicolaus Copernicus", "William Howard Taft", "Monet", "Thomas Paine"]],
   ["Francis Ford Coppola",["Francis Ford Coppola", "Buzz Aldrin", "Christopher Plummer", "John Glenn"]],
   ["Rian Johnson",["Rian Johnson", "Lou Ferrigno", "Justin Timberlake", "Tom Ridge"]],
   ["JK Simmons",["JK Simmons", "Robin Lord Taylor", "Brad Pitt", "Ben Kingsley"]],
   ["Anson Williams",["Anson Williams", "Christian Bale", "Tom Cruise", "Walt Frasier"]],
   ["James Gunn",["James Gunn", "Christopher Nolan", "Jack Lew", "Walt Frasier"]],
   ["The Duggars",["The Duggars", "Keith Urban/Nicole Kidman", "Pink Floyd", "Beach Boys"]],
   ["Beach Boys",["Beach Boys", "The Duggars", "Keith Urban/Nicole Kidman", "Pink Floyd"]],
   ["Brad Pitt",["Brad Pitt", "Walt Frasier", "Bobby Flay", "Ben Kingsley"]],
   ["Steven Tyler",["Steven Tyler", "Christopher Nolan", "Ben Kingsley", "JK Simmons"]],
   ["Thomas Paine",["Thomas Paine", "Monet", "Winston Churchill", "William Howard Taft"]],
   ["Ryan Seacrest",["Ryan Seacrest", "Ben Kingsley", "Dusty Hill", "Billy Gibbons"]],
   ["Peter Tork",["Peter Tork", "Tony Hawk", "Robert Downey Jr", "Bruce Campbell"]],
   ["Robin Lord Taylor",["Robin Lord Taylor", "Robert Downey Jr", "Peter Frampton", "Wil Wheaton"]],
   ["Julianne Hough",["Julianne Hough", "Mariska Hargitay", "Kesha", "Vanna White"]],
   ["Ben Kingsley",["Ben Kingsley", "Peter Tork", "Gary Sinise", "JK Simmons"]],
   ["Richard Blais",["Richard Blais", "Jon Hamm", "Robin Lord Taylor", "Tom Cruise"]],
   ["Pink Floyd",["Pink Floyd", "Beach Boys", "The Duggars", "Keith Urban/Nicole Kidman"]],
   ["Christina Ricci",["Christina Ricci", "Morgan Fairchild", "Vanna White", "Kesha"]],
   ["Jimmy Fallon",["Jimmy Fallon", "Walt Frasier", "Lou Ferrigno", "Tom Ridge"]]
  ].forEach(function(p){ pins[norm(p[0])]=p[1]; });
  DJ_FACE_MC.forEach(function(q){
    if(!q || q.type!=="mc") return;
    var pin=pins[norm(q.choices[q.a])];
    if(pin){ q.choices=pin.slice(); q.a=0; }
  });
})();

/* ================= LEANN RIMES COLLECTION =================
   Verified bank: 78 Q&A on LeAnn Rimes — birth and early career, 'Blue',
   the 1997 Grammys, 'One Way Ticket' (her only Billboard Hot Country
   Songs No. 1), 'How Do I Live' (No. 2 on the Hot 100, 69 weeks),
   'Can't Fight the Moonlight' (No. 1 in 11 countries), the Dance Club
   No. 1s from 'Remnants', albums, duets, acting (incl. The Masked
   Singer's Sun) and awards. Played as multiple choice with distractors
   drawn from the Rimes answer pool, plus typed finales and a portrait
   question using a CC BY 2.0 photo. */
var LEANN_RAW=[
["What is LeAnn Rimes' full first name at birth?", "Margaret LeAnn Rimes"],
["When was LeAnn Rimes born?", "August 28, 1982"],
["In which city was LeAnn Rimes born?", "Jackson, Mississippi"],
["In which Texas city was LeAnn Rimes raised?", "Garland, Texas"],
["Who was LeAnn Rimes' father, producer and early manager?", "Wilbur Rimes"],
["On which TV talent show did LeAnn Rimes compete as a junior vocalist at age 8?", "Star Search"],
["What were LeAnn Rimes' two independent albums as a preteen?", "Everybody's Sweetheart (1991) and All That (1994)"],
["Which record label did LeAnn Rimes sign with in 1996?", "Curb Records"],
["How old was LeAnn Rimes when she broke through with 'Blue' in 1996?", "13"],
["Who wrote LeAnn Rimes' breakout song 'Blue'?", "Bill Mack"],
["What was the title of LeAnn Rimes' 1996 breakthrough album?", "Blue"],
["When was LeAnn Rimes' album 'Blue' released?", "July 9, 1996"],
["How was LeAnn Rimes' album 'Blue' certified in the US?", "Six-times Platinum"],
["What peak did 'Blue' reach on Billboard Hot Country Songs?", "Number 10 (top 10)"],
["Which two Grammy Awards did LeAnn Rimes win in 1997?", "Best New Artist and Best Female Country Vocal Performance (for 'Blue')"],
["How old was LeAnn Rimes when she won Best New Artist at the Grammys?", "14"],
["What distinction did LeAnn Rimes hold as a Grammy Best New Artist winner at 14?", "Youngest solo artist to win Best New Artist"],
["Which LeAnn Rimes song was her only Billboard Hot Country Songs No. 1?", "One Way Ticket (Because I Can)"],
["Who wrote 'One Way Ticket (Because I Can)'?", "Judy Rodman and Keith Hinton"],
["From which album was 'One Way Ticket (Because I Can)' released as the third single?", "Blue"],
["Which LeAnn Rimes single from 'Blue' peaked at No. 3 on Billboard Hot Country Songs?", "Unchained Melody"],
["Which other singles were on LeAnn Rimes' album 'Blue'?", "Hurt Me and The Light in Your Eyes"],
["What is the title of LeAnn Rimes' 1997 inspirational album?", "You Light Up My Life: Inspirational Songs"],
["How was 'You Light Up My Life: Inspirational Songs' certified?", "Four-times Platinum"],
["Who wrote 'How Do I Live'?", "Diane Warren"],
["For which 1997 film was 'How Do I Live' originally recorded?", "Con Air"],
["Whose version of 'How Do I Live' was used in the film 'Con Air'?", "Trisha Yearwood's version"],
["What did LeAnn Rimes' version of 'How Do I Live' peak at on the Billboard Hot 100?", "No. 2"],
["How many weeks did LeAnn Rimes' 'How Do I Live' spend on the Billboard Hot 100?", "69 weeks"],
["What record did 'How Do I Live' set on the Billboard Hot 100 at the time?", "Longest chart run in Hot 100 history at the time"],
["What did LeAnn Rimes' 'How Do I Live' reach No. 1 on?", "Billboard Adult Contemporary chart"],
["Which LeAnn Rimes album followed 'You Light Up My Life' in 1998?", "Sittin' on Top of the World"],
["Which singles were on 'Sittin' on Top of the World'?", "Commitment and Looking Through Your Eyes"],
["What was LeAnn Rimes' self-titled 1999 album called?", "LeAnn Rimes"],
["Which single from the 1999 'LeAnn Rimes' album peaked at No. 6 on Billboard Hot Country Songs?", "Big Deal"],
["Which 2001 LeAnn Rimes compilation included 'I Need You' and 'Can't Fight the Moonlight'?", "I Need You"],
["Who wrote 'Can't Fight the Moonlight'?", "Diane Warren"],
["Who produced 'Can't Fight the Moonlight'?", "Trevor Horn"],
["For which 2000 film is 'Can't Fight the Moonlight' the theme song?", "Coyote Ugly"],
["In 'Coyote Ugly', whose singing voice did LeAnn Rimes dub?", "Piper Perabo's character Violet Sanford"],
["In how many countries did 'Can't Fight the Moonlight' reach No. 1?", "11 countries"],
["What was LeAnn Rimes' 2002 pop album?", "Twisted Angel"],
["Which single was on 'Twisted Angel'?", "Life Goes On"],
["What was LeAnn Rimes' 2005 return-to-country album?", "This Woman"],
["Which singles were on 'This Woman'?", "Nothin' 'bout Love Makes Sense and Probably Wouldn't Be This Way"],
["What did 'Probably Wouldn't Be This Way' peak at on Billboard Hot Country Songs?", "No. 3"],
["What did 'Something's Gotta Give' peak at on Billboard Hot Country Songs?", "No. 2"],
["What was LeAnn Rimes' 2006 album?", "Whatever We Wanna"],
["What was LeAnn Rimes' 2007 album?", "Family"],
["Which single was on 'Family'?", "Nothin' Better to Do"],
["What was LeAnn Rimes' 2011 album of country classics by men?", "Lady & Gentlemen"],
["Which single was on 'Lady & Gentlemen'?", "Swingin'"],
["What was LeAnn Rimes' 2013 album?", "Spitfire"],
["Which singles were on 'Spitfire'?", "What Have I Done and Borrowed"],
["What was LeAnn Rimes' 2016 album?", "Remnants"],
["Which two songs from 'Remnants' reached No. 1 on Billboard Dance Club Songs?", "Long Live Love and LovE is LovE is LovE"],
["What was LeAnn Rimes' 2022 album?", "God's Work"],
["Which single was from 'God's Work'?", "Throw My Arms Around the World"],
["What was LeAnn Rimes' 2020 chant album?", "Chant: The Human & the Holy"],
["What was LeAnn Rimes' 2015 Christmas album?", "Today Is Christmas"],
["What was LeAnn Rimes' 2004 Christmas album?", "What a Wonderful World"],
["Which duet with Elton John did LeAnn Rimes record?", "Written in the Stars"],
["Which duet with Bon Jovi did LeAnn Rimes record?", "Till We Ain't Strangers Anymore"],
["Which duet with Ronan Keating did LeAnn Rimes record?", "Last Thing on My Mind"],
["In which 1997 TV film did LeAnn Rimes play herself?", "Holiday in Your Heart"],
["In which 2009 Lifetime TV film did LeAnn Rimes play Meg Galligan?", "Northern Lights"],
["In which 2018 Hallmark TV film did LeAnn Rimes play Eve Morgan?", "It's Christmas Eve"],
["On 'The Masked Singer' US Season 4, which character did LeAnn Rimes play?", "The Sun"],
["Who did LeAnn Rimes beat in 'The Masked Singer' Season 4 final?", "Mushroom (Aloe Blacc) and Crocodile (Nick Carter)"],
["On which 'Voice' shows has LeAnn Rimes been a coach?", "The Voice Australia (Season 13) and The Voice UK (Series 13)"],
["In '9-1-1: Nashville' (2025), which character does LeAnn Rimes play?", "Dixie Bennings"],
["How many Grammy Awards has LeAnn Rimes won?", "2"],
["How many Billboard Music Awards has LeAnn Rimes won?", "12"],
["At 15, what Billboard first did LeAnn Rimes achieve?", "First country artist to win Artist of the Year at the Billboard Music Awards"],
["How many records has LeAnn Rimes sold worldwide?", "More than 48 million"],
["Where did Billboard rank LeAnn Rimes for sales success in the 1990-1999 decade?", "No. 17"],
["How many singles has LeAnn Rimes placed on international charts since 1996?", "More than 40"],
["What award was LeAnn Rimes given by ASCAP in 2022?", "The ASCAP Golden Note Award"]
];
/* 2026-10-25 expansion: additional LeAnn Rimes question/answer
   pairs (albums, singles, duets, screen roles, and career facts). */
LEANN_RAW.push(["Which LeAnn Rimes album was released in 1998?", "Sittin' on Top of the World"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'Twisted Angel'?", "2002"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'This Woman'?", "2005"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'Family'?", "2007"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'Lady & Gentlemen'?", "2011"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'Spitfire'?", "2013"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'Remnants'?", "2016"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'God's Work'?", "2022"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release her self-titled covers album 'LeAnn Rimes'?", "1999"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the album 'Whatever We Wanna'?", "2006"]);
LEANN_RAW.push(["In which year did LeAnn Rimes release the inspirational album 'You Light Up My Life: Inspirational Songs'?", "1997"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Probably Wouldn't Be This Way' appears on which album?", "This Woman"]);
LEANN_RAW.push(["The LeAnn Rimes singles 'What Have I Done' and 'Borrowed' appear on which album?", "Spitfire"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Life Goes On' is a single from which album?", "Twisted Angel"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Nothin' 'bout Love Makes Sense' is on which album?", "This Woman"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Something's Gotta Give' is on which album?", "This Woman"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Swingin'' is on which album?", "Lady & Gentlemen"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Long Live Love' is on which album?", "Remnants"]);
LEANN_RAW.push(["LeAnn Rimes recorded the duet 'Written in the Stars' with which singer?", "Elton John"]);
LEANN_RAW.push(["LeAnn Rimes recorded the duet 'Last Thing on My Mind' with which Irish singer?", "Ronan Keating"]);
LEANN_RAW.push(["LeAnn Rimes recorded the duet 'Till We Ain't Strangers Anymore' with which rock band?", "Bon Jovi"]);
LEANN_RAW.push(["LeAnn Rimes sang 'How Do I Live' over the closing credits of which 1997 film?", "Con Air"]);
LEANN_RAW.push(["LeAnn Rimes appears at the end of which 2000 film, singing on the bar?", "Coyote Ugly"]);
LEANN_RAW.push(["LeAnn Rimes starred in which 1997 television film, playing a young country singer?", "Holiday in Your Heart"]);
LEANN_RAW.push(["LeAnn Rimes starred in which 2009 television film, based on a Nora Roberts novel?", "Northern Lights"]);
LEANN_RAW.push(["LeAnn Rimes starred in which 2018 Hallmark Christmas film?", "It's Christmas Eve"]);
LEANN_RAW.push(["At the 1997 Grammy Awards, LeAnn Rimes won Best New Artist and which other award for 'Blue'?", "Best Female Country Vocal Performance"]);
LEANN_RAW.push(["Who wrote the song 'Blue', LeAnn Rimes' breakthrough hit?", "Bill Mack"]);
LEANN_RAW.push(["In which US state was LeAnn Rimes born?", "Mississippi"]);
LEANN_RAW.push(["LeAnn Rimes was born in which Mississippi city?", "Jackson"]);
LEANN_RAW.push(["LeAnn Rimes first appeared on which television talent show as a young child?", "Star Search"]);
LEANN_RAW.push(["LeAnn Rimes was a coach on the thirteenth series of which UK singing competition in 2024?", "The Voice UK (Series 13)"]);
LEANN_RAW.push(["'Can't Fight the Moonlight', sung by LeAnn Rimes, was written by which songwriter?", "Diane Warren"]);
LEANN_RAW.push(["Which LeAnn Rimes song was the theme to the film 'Coyote Ugly'?", "Can't Fight the Moonlight"]);
LEANN_RAW.push(["Which LeAnn Rimes song shares its name with her 2001 album?", "I Need You"]);
LEANN_RAW.push(["The LeAnn Rimes song 'Looking Through Your Eyes' was recorded for which 1998 animated film?", "Quest for Camelot"]);
LEANN_RAW.push(["LeAnn Rimes' first record label, which signed her as a teenager, was what?", "Curb Records"]);
LEANN_RAW.push(["How old was LeAnn Rimes when 'Blue' was released in 1996?", "13"]);
LEANN_RAW.push(["LeAnn Rimes won the Grammy Award for Best New Artist in which year?", "1997"]);
LEANN_RAW.push(["Which LeAnn Rimes Christmas album was released in 2015?", "Today Is Christmas"]);
LEANN_RAW.push(["LeAnn Rimes contributed the song 'We Can' to which 2003 film's soundtrack?", "Legally Blonde 2"]);

var LEANN_ANSWERS=[];
LEANN_RAW.forEach(function(p){ if(LEANN_ANSWERS.indexOf(p[1])===-1) LEANN_ANSWERS.push(p[1]); });
/* Her album and song titles, for the title questions: an album-title
   answer gets only other album titles and a song-title answer only
   other song titles — including the eponymous-album question, whose
   answer ("LeAnn Rimes") is a person's name but is asked as a title,
   so it must not be dealt people's names. */
var LEANN_ALBUM_TITLES=["Blue","You Light Up My Life: Inspirational Songs","Sittin' on Top of the World","LeAnn Rimes","I Need You","Twisted Angel","This Woman","Whatever We Wanna","Family","Lady & Gentlemen","Spitfire","Remnants","God's Work","Chant: The Human & the Holy","Today Is Christmas","What a Wonderful World"];
var LEANN_SONG_TITLES=["Blue","How Do I Live","Can't Fight the Moonlight","One Way Ticket (Because I Can)","Unchained Melody","Hurt Me","The Light in Your Eyes","Commitment","Looking Through Your Eyes","Big Deal","I Need You","Life Goes On","Nothin' 'bout Love Makes Sense","Probably Wouldn't Be This Way","Something's Gotta Give","Nothin' Better to Do","Swingin'","What Have I Done","Borrowed","Long Live Love","LovE is LovE is LovE","Throw My Arms Around the World","Written in the Stars","Till We Ain't Strangers Anymore","Last Thing on My Mind"];
/* Her screen work and label, split by narrow subject for the builder
   below: films (the two cinema features and her three TV films), TV
   shows, and record labels. The TV and label lists carry verified
   same-industry alternatives alongside her own, as the builder
   comment there explains. */
var LEANN_FILM_TITLES=["Con Air","Coyote Ugly","Holiday in Your Heart","Northern Lights","It's Christmas Eve"];
var LEANN_TV_TITLES=["Star Search","The Voice Australia (Season 13) and The Voice UK (Series 13)","American Idol","America's Got Talent","The Voice"];
var LEANN_LABELS=["Curb Records","RCA Records","Capitol Records","Columbia Records","Warner Music Nashville"];
/* RIAA certification levels, for the two "How was … certified?"
   questions — the bank's only answers of that kind are "Four-times
   Platinum" and "Six-times Platinum", so the level list is completed
   with the other real RIAA tiers, the same way the label list above
   is completed with her fellow country-era labels. */
var LEANN_CERTS=["Gold","Platinum","Two-times Platinum","Three-times Platinum","Four-times Platinum","Five-times Platinum","Six-times Platinum","Diamond (ten-times Platinum)"];
var LEANN_MC=LEANN_RAW.map(function(p){ return leannBuildMC(p[0], p[1]); });

/* Portrait question: freely licensed photo (Yahoo! Blog, CC BY 2.0,
   via Wikimedia Commons). Also joins the Famous Faces picture pool. */
var LEANN_PIC=pic("assets/face-leann.jpg","Who is this singer, photographed in 2009?", ["LeAnn Rimes","Faith Hill","Trisha Yearwood","Shania Twain"], 0, "Famous Faces","Photo by Yahoo! Blog, CC BY 2.0, via Wikimedia Commons","","She broke through at 13 with 'Blue' in 1996 and won Best New Artist at the 1997 Grammys.");
PICS.medium.push(LEANN_PIC);

/* ============ GENDER RULE FOR PERSON PICTURES ============
   On top of the era / kind rules the picture choices were authored
   with: a picture question whose answer is a person never mixes
   genders in its choices — a man's photo offers only men's names, a
   woman's only women's. Every person name used anywhere in the
   picture pools is tagged here, and the pass below repairs any
   choice set that breaks the rule, drawing a same-gender replacement
   from the same picture category so era and kind stay plausible.
   Non-person pictures (landmarks, flags, shapes, artworks, films)
   have no tagged answer and are left exactly as authored. */
var FACE_GENDER={
"Isaac Newton":"m","Albert Einstein":"m","Thomas Edison":"m","Nikola Tesla":"m",
"George Washington":"m","Abraham Lincoln":"m","Theodore Roosevelt":"m","Andrew Jackson":"m",
"George W. Bush":"m","Barack Obama":"m","Bill Clinton":"m","Joe Biden":"m",
"Rosalind Franklin":"f","Marie Curie":"f","Ada Lovelace":"f","Florence Nightingale":"f",
"Amelia Earhart":"f","Bessie Coleman":"f","Harriet Quimby":"f","Valentina Tereshkova":"f",
"Desmond Tutu":"m","Nelson Mandela":"m","Kofi Annan":"m",
"Georgia O'Keeffe":"f","Frida Kahlo":"f","Yayoi Kusama":"f","Tamara de Lempicka":"f",
"Neville Chamberlain":"m","Clement Attlee":"m","Winston Churchill":"m","Anthony Eden":"m",
"Alexander Graham Bell":"m","Guglielmo Marconi":"m",
"Johann Sebastian Bach":"m","Wolfgang Amadeus Mozart":"m","Ludwig van Beethoven":"m","Franz Schubert":"m",
"Charles Dickens":"m","William Shakespeare":"m","Geoffrey Chaucer":"m","Christopher Marlowe":"m",
"LeAnn Rimes":"f","Faith Hill":"f","Trisha Yearwood":"f","Shania Twain":"f",
"Claude Monet":"m","Vincent van Gogh":"m","Paul Cézanne":"m","Pierre-Auguste Renoir":"m",
"Raphael":"m","Leonardo da Vinci":"m","Rembrandt":"m","Vermeer":"m",
"John F. Kennedy":"m","Lyndon B. Johnson":"m","Richard Nixon":"m","Dwight D. Eisenhower":"m",
"Mark Twain":"m","Edgar Allan Poe":"m","Walt Whitman":"m",
"Neil Armstrong":"m","Buzz Aldrin":"m","Yuri Gagarin":"m","Michael Collins":"m",
"Charles Darwin":"m","Gregor Mendel":"m","Alfred Russel Wallace":"m","Jean-Baptiste Lamarck":"m",
"Charlie Chaplin":"m","Buster Keaton":"m","Harold Lloyd":"m","Stan Laurel":"m",
"Helen Keller":"f","Clara Barton":"f","Susan B. Anthony":"f",
"Rosa Parks":"f","Claudette Colvin":"f","Harriet Tubman":"f","Sojourner Truth":"f",
"Jane Austen":"f","Charlotte Brontë":"f","Emily Brontë":"f","Mary Shelley":"f",
"Catherine the Great":"f","Mary, Queen of Scots":"f","Thabo Mbeki":"m","F. W. de Klerk":"m",
"Dorothy L. Sayers":"f","Margaret Thatcher":"f","Benazir Bhutto":"f","Golda Meir":"f",
"Condoleezza Rice":"f","Hillary Clinton":"f","Sarah Palin":"f",
"John Dillinger":"m","Lucky Luciano":"m","Bugs Moran":"m","Lucretia Mott":"f"
};
/* enforceGenderChoices() no longer runs here: its result is part of the
   baked bank state applied at BAKED BANK STATE below (stage 1), and it
   runs there only as the fallback if the baked data fails validation. */

/* Typed Rimes questions join the Gauntlet finale pools */
TYPED.easy.push(typed("What was the title of LeAnn Rimes' 1996 breakthrough album?", "Blue"));
TYPED.medium.push(typed("Who wrote LeAnn Rimes' hit 'How Do I Live'? First and last name.", "Diane Warren", {exact:true, rule:"First and last name \u2014 spelling must be exact."}));
TYPED.hard.push(typed("'Can't Fight the Moonlight' is the theme song of which 2000 film?", "Coyote Ugly", {fact:"'Can't Fight the Moonlight' was written for Coyote Ugly (2000); LeAnn Rimes also appears in the film's finale, singing on the bar."}));
TYPED.vhard.push(typed("On The Masked Singer (US Season 4), LeAnn Rimes performed as which character?", "The Sun", {accept:["Sun"], fact:"LeAnn Rimes performed as the Sun on The Masked Singer and won US Season 4."}));
/* Her four typed finales carry the LeAnn Rimes label, like her
   multiple-choice questions do. */
TYPED.easy[TYPED.easy.length-1].cat="LeAnn Rimes";
TYPED.medium[TYPED.medium.length-1].cat="LeAnn Rimes";
TYPED.hard[TYPED.hard.length-1].cat="LeAnn Rimes";
TYPED.vhard[TYPED.vhard.length-1].cat="LeAnn Rimes";
/* ================= US STATE FLAGS (2026-11-10) =================
   All 50 state flags as a picture bank, in the new pack-state-flags
   pack. Every flag is the state's official flag, public domain,
   rendered from its Wikimedia Commons SVG (the Commons file page
   is recorded on each question, like every other picture bank);
   Utah (2024), Minnesota (2024), and Mississippi (2021) are their
   current designs. Distractors are other US states only, drawn
   from the same region of the country. The bank joins the PICS
   tiers (round-robin, so it deals at every Gauntlet round), the
   Gauntlet / Mixed Pictures pools, and its own practice round;
   as a geography picture it counts toward the Gauntlet's combined
   geography cap (see GEO_PIC_CATS below). */
var STATE_FLAG_DATA=[
  ["Alabama","assets/sflag-alabama.png",["Mississippi","Arkansas","Louisiana"],"The red cross of St Andrew sits on a white field.","https://commons.wikimedia.org/wiki/File:Flag_of_Alabama.svg"],
  ["Alaska","assets/sflag-alaska.png",["Hawaii","Washington","Oregon"],"Designed by 13-year-old Benny Benson in 1927 — the Big Dipper and the North Star.","https://commons.wikimedia.org/wiki/File:Flag_of_Alaska.svg"],
  ["Arizona","assets/sflag-arizona.png",["New Mexico","Montana","Wyoming"],"Thirteen sun rays for the original colonies rise over a copper star — Arizona is the Copper State.","https://commons.wikimedia.org/wiki/File:Flag_of_Arizona.svg"],
  ["Arkansas","assets/sflag-arkansas.png",["Louisiana","Texas","Oklahoma"],"The diamond recalls the diamond mine in Arkansas, the only one in North America.","https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg"],
  ["California","assets/sflag-california.png",["Alaska","Hawaii","Washington"],"The bear flag of the California Republic, first raised in 1846.","https://commons.wikimedia.org/wiki/File:Flag_of_California.svg"],
  ["Colorado","assets/sflag-colorado.png",["Utah","Nevada","Idaho"],"The C is for Colorado; the colours echo sky, snow-capped peaks, and red earth.","https://commons.wikimedia.org/wiki/File:Flag_of_Colorado.svg"],
  ["Connecticut","assets/sflag-connecticut.png",["Maine","New Hampshire","Vermont"],"Three grapevines stand for the colony's first three settlements.","https://commons.wikimedia.org/wiki/File:Flag_of_Connecticut.svg"],
  ["Delaware","assets/sflag-delaware.png",["Maryland","Virginia","West Virginia"],"The banner carries December 7, 1787 — Delaware was the first state to ratify the Constitution.","https://commons.wikimedia.org/wiki/File:Flag_of_Delaware.svg"],
  ["Florida","assets/sflag-florida.png",["Georgia","North Carolina","South Carolina"],"A red saltire (diagonal cross) behind the state seal.","https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg"],
  ["Georgia","assets/sflag-georgia.png",["North Carolina","South Carolina","Tennessee"],"Three pillars for the three branches of government stand under the arch of the Constitution.","https://commons.wikimedia.org/wiki/File:Flag_of_Georgia_(U.S._state).svg"],
  ["Hawaii","assets/sflag-hawaii.png",["Washington","Oregon","California"],"Eight stripes for the eight main islands, with the Union Jack in the corner.","https://commons.wikimedia.org/wiki/File:Flag_of_Hawaii.svg"],
  ["Idaho","assets/sflag-idaho.png",["Arizona","New Mexico","Montana"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Idaho.svg"],
  ["Illinois","assets/sflag-illinois.png",["Michigan","Wisconsin","Minnesota"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Illinois.svg"],
  ["Indiana","assets/sflag-indiana.png",["Illinois","Michigan","Wisconsin"],"A gold torch for liberty and enlightenment, ringed by stars.","https://commons.wikimedia.org/wiki/File:Flag_of_Indiana.svg"],
  ["Iowa","assets/sflag-iowa.png",["Missouri","Ohio","Indiana"],"An eagle carries the banner: 'Our liberties we prize and our rights we will maintain.'","https://commons.wikimedia.org/wiki/File:Flag_of_Iowa.svg"],
  ["Kansas","assets/sflag-kansas.png",["North Dakota","South Dakota","Nebraska"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Kansas.svg"],
  ["Kentucky","assets/sflag-kentucky.png",["Alabama","Mississippi","Arkansas"],"A frontiersman and a statesman shake hands under 'United we stand, divided we fall.'","https://commons.wikimedia.org/wiki/File:Flag_of_Kentucky.svg"],
  ["Louisiana","assets/sflag-louisiana.png",["Texas","Oklahoma","Florida"],"A mother pelican feeds her young — the state bird, a symbol of self-sacrifice.","https://commons.wikimedia.org/wiki/File:Flag_of_Louisiana.svg"],
  ["Maine","assets/sflag-maine.png",["New Hampshire","Vermont","Massachusetts"],"A moose rests under a pine tree between a farmer and a sailor.","https://commons.wikimedia.org/wiki/File:Flag_of_Maine.svg"],
  ["Maryland","assets/sflag-maryland.png",["Virginia","West Virginia","New York"],"The black-and-gold of the Calverts quartered with the red-and-white of the Crosslands.","https://commons.wikimedia.org/wiki/File:Flag_of_Maryland.svg"],
  ["Massachusetts","assets/sflag-massachusetts.png",["Rhode Island","Connecticut","Maine"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Massachusetts.svg"],
  ["Michigan","assets/sflag-michigan.png",["Wisconsin","Minnesota","Iowa"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Michigan.svg"],
  ["Minnesota","assets/sflag-minnesota.png",["Iowa","Missouri","Ohio"],"Adopted in 2024: the dark-blue shape of Minnesota itself beside a white eight-pointed star.","https://commons.wikimedia.org/wiki/File:Flag_of_Minnesota.svg"],
  ["Mississippi","assets/sflag-mississippi.png",["Arkansas","Louisiana","Texas"],"Adopted in 2021, it centres a white magnolia, the state flower.","https://commons.wikimedia.org/wiki/File:Flag_of_Mississippi.svg"],
  ["Missouri","assets/sflag-missouri.png",["Ohio","Indiana","Illinois"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Missouri.svg"],
  ["Montana","assets/sflag-montana.png",["Wyoming","Colorado","Utah"],"The state seal sits under the word MONTANA.","https://commons.wikimedia.org/wiki/File:Flag_of_Montana.svg"],
  ["Nebraska","assets/sflag-nebraska.png",["Kansas","North Dakota","South Dakota"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Nebraska.svg"],
  ["Nevada","assets/sflag-nevada.png",["Idaho","Arizona","New Mexico"],"A silver star and sagebrush sit under 'Battle Born' — Nevada joined the Union during the Civil War.","https://commons.wikimedia.org/wiki/File:Flag_of_Nevada.svg"],
  ["New Hampshire","assets/sflag-new-hampshire.png",["Vermont","Massachusetts","Rhode Island"],"The frigate Raleigh, built at Portsmouth in 1776, ringed by laurel branches.","https://commons.wikimedia.org/wiki/File:Flag_of_New_Hampshire.svg"],
  ["New Jersey","assets/sflag-new-jersey.png",["Pennsylvania","Delaware","Maryland"],"","https://commons.wikimedia.org/wiki/File:Flag_of_New_Jersey.svg"],
  ["New Mexico","assets/sflag-new-mexico.png",["Montana","Wyoming","Colorado"],"The red Zia sun symbol on gold comes from a Zia Pueblo design.","https://commons.wikimedia.org/wiki/File:Flag_of_New_Mexico.svg"],
  ["New York","assets/sflag-new-york.png",["New Jersey","Pennsylvania","Delaware"],"","https://commons.wikimedia.org/wiki/File:Flag_of_New_York.svg"],
  ["North Carolina","assets/sflag-north-carolina.png",["South Carolina","Tennessee","Kentucky"],"Its dates recall the Mecklenburg Declaration (1775) and the Halifax Resolves (1776).","https://commons.wikimedia.org/wiki/File:Flag_of_North_Carolina.svg"],
  ["North Dakota","assets/sflag-north-dakota.png",["South Dakota","Nebraska","Kansas"],"","https://commons.wikimedia.org/wiki/File:Flag_of_North_Dakota.svg"],
  ["Ohio","assets/sflag-ohio.png",["Indiana","Illinois","Michigan"],"The only swallowtail state flag — a burgee shape, not a rectangle.","https://commons.wikimedia.org/wiki/File:Flag_of_Ohio.svg"],
  ["Oklahoma","assets/sflag-oklahoma.png",["Florida","Georgia","North Carolina"],"An Osage warrior's shield crossed by a peace pipe and an olive branch.","https://commons.wikimedia.org/wiki/File:Flag_of_Oklahoma.svg"],
  ["Oregon","assets/sflag-oregon.png",["California","Alaska","Hawaii"],"Two-sided: the state seal on the front, a golden beaver on the back.","https://commons.wikimedia.org/wiki/File:Flag_of_Oregon.svg"],
  ["Pennsylvania","assets/sflag-pennsylvania.png",["Delaware","Maryland","Virginia"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Pennsylvania.svg"],
  ["Rhode Island","assets/sflag-rhode-island.png",["Connecticut","Maine","New Hampshire"],"A gold anchor under the motto 'Hope', ringed by thirteen stars.","https://commons.wikimedia.org/wiki/File:Flag_of_Rhode_Island.svg"],
  ["South Carolina","assets/sflag-south-carolina.png",["Tennessee","Kentucky","Alabama"],"A palmetto tree and a white crescent on indigo blue.","https://commons.wikimedia.org/wiki/File:Flag_of_South_Carolina.svg"],
  ["South Dakota","assets/sflag-south-dakota.png",["Nebraska","Kansas","North Dakota"],"Mount Rushmore sits at the centre of a golden sun.","https://commons.wikimedia.org/wiki/File:Flag_of_South_Dakota.svg"],
  ["Tennessee","assets/sflag-tennessee.png",["Kentucky","Alabama","Mississippi"],"Three stars for the state's three grand divisions: East, Middle, and West Tennessee.","https://commons.wikimedia.org/wiki/File:Flag_of_Tennessee.svg"],
  ["Texas","assets/sflag-texas.png",["Oklahoma","Florida","Georgia"],"The Lone Star flag — a single star for Texas standing on its own.","https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg"],
  ["Utah","assets/sflag-utah.png",["Nevada","Idaho","Arizona"],"Adopted in 2024, it centres a gold beehive — Utah's emblem of industry — over mountains and red rock.","https://commons.wikimedia.org/wiki/File:Flag_of_Utah.svg"],
  ["Vermont","assets/sflag-vermont.png",["Massachusetts","Rhode Island","Connecticut"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Vermont.svg"],
  ["Virginia","assets/sflag-virginia.png",["West Virginia","New York","New Jersey"],"Virtus stands over a fallen tyrant under 'Sic semper tyrannis' — thus always to tyrants.","https://commons.wikimedia.org/wiki/File:Flag_of_Virginia.svg"],
  ["Washington","assets/sflag-washington.png",["Oregon","California","Alaska"],"The only state flag with a US president's portrait: George Washington, on green.","https://commons.wikimedia.org/wiki/File:Flag_of_Washington.svg"],
  ["West Virginia","assets/sflag-west-virginia.png",["New York","New Jersey","Pennsylvania"],"Two men flank a rock inscribed with the statehood date, June 20, 1863.","https://commons.wikimedia.org/wiki/File:Flag_of_West_Virginia.svg"],
  ["Wisconsin","assets/sflag-wisconsin.png",["Minnesota","Iowa","Missouri"],"","https://commons.wikimedia.org/wiki/File:Flag_of_Wisconsin.svg"],
  ["Wyoming","assets/sflag-wyoming.png",["Colorado","Utah","Nevada"],"A white bison carries the state seal on a blue field with a red border.","https://commons.wikimedia.org/wiki/File:Flag_of_Wyoming.svg"]
];
STATE_FLAG_DATA.forEach(function(d, i){
  var tiers=["easy","medium","hard","vhard"];
  PICS[tiers[i%4]].push(pic(d[1], "Which US state\u2019s flag is this?", [d[0]].concat(d[2]), 0, "US State Flags",
    "State flag of "+d[0]+" \u2014 public domain, via Wikimedia Commons", d[4], d[3]));
});

var ALL_MC_QUESTIONS=[];
(function(){
  var pools=[];
  ["easy","medium","hard","vhard"].forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t]); });
  pools.push(DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC, NEW_ALL);
  pools.forEach(function(pool){
    (pool||[]).forEach(function(q){
      if(q && q.type==="mc" && ALL_MC_QUESTIONS.indexOf(q)===-1) ALL_MC_QUESTIONS.push(q);
    });
  });
  /* The integrity repair loop that used to run here is part of the baked
     bank state (stage 1) — see BAKED BANK STATE below. */
})();
var KIND_ENFORCE_STATS={"changed":474,"unrepaired":0};
var INDUSTRY_ENFORCE_STATS={"changed":36,"unrepaired":0,"checked":172}; /* baked literal, as above */

/* ================= DJ SUB-KIND RULE — DOGS, CATS, CITIES, STATES, PLACES =================
   The kind pass sorts answers into broad kinds, but its catch-all
   "other" kind still mixes finer kinds that read as a cross-type
   giveaway the moment they share a set: for the clue "Tom and jerry
   dog" the game dealt hamms (a beer brand), Carrie (a person's
   name), spike (correct), and NYC (a city) — solvable without
   knowing Tom and Jerry at all, because only one choice was even a
   dog. This pass classifies DJ fragment answers by their finer kind
   wherever the clue or the answer itself gives the signal, and
   enforces it the way the industry pass enforces brands:
   - A clue that asks for a dog ("Tom and jerry dog", "Full House
     Dog", "Sandlot dog", "Cousin eddies dog"…) makes its answer a
     dog character, and a dog-character question deals ONLY other
     dog characters — Pluto, Snoopy, Scooby-Doo, Droopy, Odie… —
     never a brand, a person, or a place as filler.
   - A cat's-name clue ("Data cat's name in Star Trek") deals only
     cat characters; an "in what city" clue deals only cities.
   - A US-state answer (the sheet spells them every way: "montana",
     "S. Carolina", "FL", "UT"…) deals ONLY other US states — the
     I-40 question dealt Pale Rider (a film), Phase 10 (a card
     game), and Israel president (a job) next to N. Carolina, so
     the only place won by elimination. State picks prefer the
     plausible company: for a route question (Interstate 40) the
     states the route actually crosses, the far end first —
     California is the tempting wrong answer to an eastern-end
     question — then the answer state's neighbours, then the rest.
   - Another sheet place that is not a state, city, or country (a
     lake, a sea, the Everglades…) deals only other places.
   - Across the rest of the DJ pool, a distractor of a definite
     finer kind (a known brand, a known dog/cat character, a known
     city, state, or place) never sits next to an answer of a
     different kind — it is swapped for an unclassified sheet answer
     of the answer's own broad kind, the same agreement the
     industry pass enforces.
   No questions or answers change — only distractor generation, with
   verified same-kind alternatives supplied where the sheet itself
   has none (the sheet holds only a handful of dog answers). */
var DOG_CHAR_NAMES=["Spike","Pluto","Snoopy","Scooby-Doo","Goofy","Droopy","Odie","Astro","Clifford","Blue","Lady","Tramp","Bolt","Dug","Pongo","Perdita","Marmaduke","Wishbone","Lassie","Benji","Underdog","Huckleberry Hound","Slinky Dog","Brian","Copper"];
var CAT_CHAR_NAMES=["Garfield","Felix the Cat","Sylvester","Heathcliff","Figaro","Cheshire Cat","Puss in Boots","Top Cat","Simba","Bagheera","Hello Kitty","Tom Cat"];
/* CITY_NAMES / CITY_NORM are defined with the answer-kind tables
   above — the kind pass runs before this section and needs them —
   and shared with this pass, not redefined here. */
var DOG_NORM={}, CAT_NORM={};
DOG_CHAR_NAMES.forEach(function(x){ DOG_NORM[norm(x)]=1; });
/* The sheet's own dog answers are dogs even where a clue's phrasing
   varies — and "Spot" is Data's cat, from the sheet itself. */
["snot","bingo","comet","capernicus","hercules","dinky"].forEach(function(x){ DOG_NORM[x]=1; });
CAT_CHAR_NAMES.forEach(function(x){ CAT_NORM[norm(x)]=1; });
CAT_NORM["spot"]=1;
var SUBKIND_POOLS={dog:DOG_CHAR_NAMES, cat:CAT_CHAR_NAMES, city:CITY_NAMES};
/* The sheet also answers state questions with postal abbreviations
   ("FL" for most registered boats, "UT" for Butch Cassidy's home
   state) — states all the same, mapped to the full name. */
var DJ_STATE_ABBR={"fl":"Florida","ut":"Utah"};
/* Sheet answers that are plainly places but not a state, city, or
   country — a lake, a sea, a park, a museum: their questions deal
   only other places, never a word, a name, or a brand. Wounded
   Knee (the 1890 massacre site) and The Peach Pit (the 90210
   diner) are here for the phrase rule's sake as much as their
   own: in the sheet's lowercase spelling both read as
   description phrases, so the battle question dealt verb
   phrases as its "company" and the diner sat as phrase filler
   in other sets — as places, both deal place company and are
   never phrase filler. */
var DJ_PLACE_NAMES=["Lake Ontario","Everglades","Black Sea","Central Park","Louvre","Kings Island","Wounded Knee","The Peach Pit"];
var PLACE_NORM={};
DJ_PLACE_NAMES.forEach(function(x){ PLACE_NORM[norm(x)]=1; });
/* Interstate routes whose states are the plausible company for an
   endpoint question, west end first. I-40 runs Barstow, California
   to Wilmington, North Carolina; an "eastern end" question is only
   a real question if California — the other end — is on offer. */
var ROUTE_STATES=[
  {re:/\bi-40\b|interstate 40/i, states:["California","Arizona","New Mexico","Texas","Oklahoma","Arkansas","Tennessee","North Carolina"]}
];
var DJ_SUBKIND_STATS={"strong":39,"swept":123,"unrepaired":0}; /* baked literal, as above */

/* ================= BAKED BANK STATE (BUILD-TIME PASSES) =================
   The load-time enforcement passes that used to run over all 6,246
   multiple-choice questions on every page load — gender enforcement,
   the integrity repair, the answer-kind pass, the narrow-industry pass,
   the DJ sub-kind pass (stage 1, applied here), then the LeAnn rebuild,
   the sub-kind guarantee, the LeAnn family guard, the casing pass, the
   accent-twin audit and the final set sweep (stage 2, applied at the
   end of that section) — were run ONCE at build time under the same
   fixed LOAD_BANK_SEED, and their results ship below as diffs: for each
   question a pass changed, its final choices, correct index, and (where
   the sub-kind/final passes stamped it) its mcExcluded flag and reason.
   Questions no pass touched are not listed and keep their authored sets.
   Applying the diffs reproduces the post-pass banks exactly — the same
   dealt questions and choice sets in every mode, the same exclusions
   (9 of 6,246) — while page load just reads them. Stage 1 is applied
   here, before the classifier harvests below read the choices, exactly
   where the stage-1 passes used to finish; stage 2 is applied where
   the final sweep used to run. Every diff entry is validated before
   any is applied; if the baked data is missing or malformed, the
   original passes run instead (the fallback in each stage), so the
   banks are correct either way — just slower on that path. */
var BAKED_TRAV=null, BAKED_FAILED=false;
var BAKED1=[[12,["Nivea","Garnier","L'Oréal","Lancôme"],2],[16,["NYC","Madrid","Tucson","Paris"],0],[18,["preacher","sulfur","Lotso","Quakers"],3],[21,["Borneo","peter","bruce","Dakar"],0],[22,["Lay's","Doritos","Frito Lay","Pringles"],2],[28,["Fyodor Dostoevsky","low temperatures","Mr. Slate","heart attack"],1],[37,["noon","Iris","heights","Praia"],1],[41,["Jordan","Louvre","The Netherlands","Delaware"],1],[46,["Iowa","North Carolina","Alaska","Missouri"],3],[48,["Ear","Abu Dhabi","Lima","Q"],0],[64,["Madagascar","Central Park","New Jersey","Missouri"],1],[67,["Palikir","pianos","Prague","momentum"],3],[89,["owls","egon","paper","disney"],2],[90,["Madrid","Paris","Kansas City","Berlin"],3],[99,["general mills","The Cozy Cone","Ticket to Ride","North Star State"],2],[107,["Coca Cola","RC Cola","7UP","Mello Yello"],0],[117,["Vienna","Reno","Paris","Flagstaff"],3],[121,["Betty","Baymax","Ottawa","seaweed"],0],[124,["The Last Picture Show","moving in stereo - the cars","Megan Thee Stallion","View to a Kill"],3],[126,["paper","carotid","shamballa","seaweed"],1],[131,["McIntosh","Libreville","Accra","Ankara"],0],[139,["VW","hamms","keratin","bones"],0],[140,["Bye Bye","The Middle","Maurice Sendak","French Quarter"],1],[147,["Dakar","seaweed","cedric","Mutton"],1],[149,["ursa minor","Orion","Canis Major","fisher effect"],0],[156,["Nike","adidas","Under Armour","New Balance"],1],[159,["montana","Alaska","Idaho","utah"],3],[172,["Philadelphia","Dublin","Boise","halifax"],3],[176,["maiden","bruce","Pretoria","hinny"],0],[178,["peter","Palikir","Nicosia","closet"],3],[179,["Brazil","West Virginia","Memphis","kings island"],3],[182,["gadsby","Maseru","paper","eyes"],3],[183,["John Steinbeck","Stephenie Meyer","wedding crashers","Kuwait City"],2],[193,["secret service","Port Louis","Granite State","Khaled Hosseini"],0],[194,["Santa Fe","Rome","Denver","annapolis"],3],[202,["youtube","Nicosia","Kendrick","hamms"],3],[204,["shamballa","gadsby","Nicosia","FERRIS"],0],[205,["Pretoria","tongue","pianos","Asuncion"],1],[207,["peter","gospel","Kigali","Quito"],1],[211,["hersheys","Palikir","Tunis","Yerevan"],0],[222,["Pizza Hut","Hungry Howie's","Little Caesars","papa johns"],3],[228,["set","Lincoln","ohms","baker"],3],[233,["Wishbone","Scooby-Doo","Brian","spike"],3],[242,["Bangladesh","Florida","Tokyo","black sea"],3],[243,["Britain","the peach pit","Korea","Florida"],1],[245,["Gasoline Alley","fisher effect","Lucky Aide","Sunshine State"],1],[250,["Turbo Man","Bram Stoker","general mills","Right Field"],2],[254,["Albuquerque","Dublin","cork","NYC"],2],[257,["Nerds","Niamey","chevron","Iris"],2],[270,["wood","andrew","disney","Carrie"],1],[278,["bruce","owls","mt. crumpit","heights"],0],[280,["Tennessee","California","North Carolina","Arizona"],2],[287,["Nebraska","kansas","wyoming","S. Dakota"],1],[292,["Mutton","Lincoln","Tunis","barton"],3],[295,["Fresno","Philadelphia","Colorado Springs","seattle"],3],[296,["Montana","S. Carolina","kansas","wyoming"],3],[297,["Rockefeller","Pikachu","Literature","Ottawa"],0],[300,["fuji","sulfur","Nerds","Dominion"],0],[316,["cedric","lily","disney","Boron"],1],[321,["Tapper","Thimphu","Clay","peter"],3],[329,["Bishkek","Jerry","pips","golf"],2],[331,["Odie","snot","Lassie","Bolt"],1],[336,["Suzanne Collins","Wandering albatross","bruce","mt. crumpit"],3],[337,["fathom","3X","Dominion","hersheys"],1],[351,["Stretch","gospel","anchorman","shrek"],2],[352,["Dallas","seattle","Omaha","bonn"],3],[362,["Betty","Atari","disney","shamballa"],2],[366,["set","cedric","sulfur","hiccup"],0],[368,["barton","twiki","almonds","Lincoln"],1],[371,["manitoba","Flicka","twiki","Kendrick"],0],[373,["Santa Monica","one fine day","Megan Thee Stallion","Stay Awake"],2],[386,["platypus and echidna","Harry and Marv","Dave Matthews Band","JT and Janet"],0],[391,["Quakers","Carrie","Abuja","pancreas"],3],[393,["Underdog","Huckleberry Hound","Bolt","Bingo"],3],[398,["Trix","Lucky Charms","Apple Jacks","Wheaties"],1],[399,["Hula Hoop","Giant squid","Camp David","Parker Bros"],0],[401,["Pongo","Brian","Snoopy","Comet"],3],[405,["Alabama","FL","Georgia","Oklahoma"],1],[411,["Six Flags","Universal Studios","Busch Gardens","Disneyland"],3],[414,["Toyota","Nissan","Lexus","Kia"],0],[431,["twiki","Ear","JFK","Lotso"],3],[453,["hiccup","Rockefeller","Literature","carotid"],2],[454,["twiki","Bishkek","Mickey","hinny"],2],[457,["Ottawa","Vaduz","McGee","sulfur"],3],[468,["Margaret Atwood","Canis Major","Orion","Rigel"],1],[470,["Abuja","maiden","VA","noon"],2],[475,["Talladega Nights","Toss Across","Ray Bradbury","San Salvador"],0],[479,["Vaduz","Lotso","Kendrick","wedding"],3],[480,["North Dakota","S. Dakota","utah","tennessee"],1],[485,["Colorado","Wyoming","UT","Idaho"],2],[488,["candy lips and bubble gum tongue","Millard Fillmore","Against the wind","Fur Elise"],2],[489,["Dublin","Vienna","Boise","bonn"],0],[495,["Melvil","Windhoek","Rathtar","Monrovia"],0],[502,["Nina","Iditarod","Prague","Dominion"],0],[511,["Prague","Pikachu","chevron","Naypyidaw"],1],[521,["bruce","hamms","Praia","eyes"],3],[523,["madison","Muscat","Atari","Tunis"],2],[534,["Cheshire Cat","Spot","Hello Kitty","Simba"],1],[541,["Mean Girls","Frank Herbert","Evergreen State","Astrid Lindgren"],0],[546,["arsenic","Nerds","Vaduz","Asmara"],1],[549,["Alabama","S. Dakota","Mississippi","montana"],0],[554,["Canis Major","pisces","Maseru","Orion"],1],[563,["Kuwait City","Camp David","rico tubbs","Rockford Files"],1],[569,["headphones","hinny","enemy","smack"],0],[571,["Germany","Alaska","Fresno","wounded knee"],3],[575,["Dead","fridge","pancreas","hiccup"],0],[576,["Scooby-Doo","Bolt","Copernicus","Slinky Dog"],2],[578,["Shawn Fanning","fuji","Clay","shrek"],2],[587,["Wandering albatross","mt. crumpit","mollusk","wood"],2],[594,["Orion","Khartoum","pisces","Rigel"],3],[604,["North Carolina","S. Carolina","Idaho","Utah"],3],[610,["mollusk","mt. crumpit","owls","Quito"],2],[612,["Lake Ontario","Colorado Springs","New Jersey","Atlanta"],0],[615,["Dug","Lassie","Snoopy","Hercules"],3],[628,["Lassie","Dinky","Droopy","Benji"],1],[630,["Harare","michael","bones","Brasilia"],1],[641,["Kendrick","keratin","JFK","pancreas"],2],[642,["Dominion","Monster.com","shrek","Paramaribo"],0],[644,["motif","lucky","3X","set"],0],[645,["Niamey","hamms","octave","carotid"],2],[648,["Angola","Everglades","Wounded Knee","Germany"],1],[668,["Paulo Coelho","xanthan gum","Camp David","Bram Stoker"],3],[672,["Casey Kasem","H. G. Wells","L. Frank Baum","Orson Scott Card"],1],[673,["L. Frank Baum","bruce","heart will go on","Robert Louis Stevenson"],3],[674,["Wandering albatross","Robert Louis Stevenson","F. Scott Fitzgerald","bruce"],1],[694,["Sara Gruen","greenland shark","Elizabeth Tower","Toni Morrison"],3],[704,["jack black","US Grant","puppy love","Leo Tolstoy"],3],[722,["James Monroe","rico tubbs","Markus Zusak","Maurice Sendak"],3],[729,["Jimmy Carter","butterfly cocoon","Jeff Kinney","xanthan gum"],2],[760,["Khaled Hosseini","flat spiral","Anna Sewell","Bram Stoker"],2],[777,["Phnom Penh","Mogadishu","Kuwait City","Kampala"],0],[779,["Madrid","Toronto","London","Las Vegas"],2],[780,["Berlin","Minneapolis","San Francisco","Phoenix"],0],[781,["Rome","St. Louis","Madrid","Denver"],2],[783,["youtube","Prague","Vilnius","madison"],1],[785,["Antananarivo","Copenhagen","Ashgabat","Ankara"],1],[788,["Boston","Austin","Vienna","belfast"],2],[791,["Pikachu","Belgrade","Pyongyang","Thimphu"],1],[793,["Santiago","Libreville","Vilnius","Jerusalem"],3],[797,["Antananarivo","Tunis","Thimphu","Accra"],3],[799,["Ottawa","Muscat","Prague","Ankara"],0],[802,["Lima","Asmara","Nicosia","Abuja"],0],[803,["Khartoum","Canberra","tornado","Kampala"],1],[804,["Carl","Ear","Tunis","Suva"],3],[807,["Ottawa","Beirut","Moscow","fridge"],1],[808,["Tallinn","Brasilia","Muscat","Palikir"],2],[809,["Reykjavik","Pyongyang","Nouakchott","Tashkent"],3],[810,["Bissau","Thimphu","Muscat","Old Style"],1],[818,["Dakar","bones","Baghdad","Muscat"],0],[821,["Bishkek","Tallinn","Havana","Port of Spain"],2],[824,["Kigali","Quito","Tunis","Ankara"],1],[825,["Apia","Lima","gadsby","Havana"],0],[832,["Vaduz","Bissau","maiden","Thimphu"],0],[833,["lily","Dakar","Thimphu","Skopje"],3],[834,["Santiago","Ljubljana","Sarajevo","Land of Enchantment"],2],[838,["Stockholm","Ljubljana","Aloha State","Ashgabat"],3],[842,["Quito","closet","Niamey","Maseru"],2],[844,["Minsk","JFK","Lome","Kigali"],2],[847,["bones","Bissau","Yerevan","Maseru"],3],[849,["Praia","Harare","Santo Domingo","North Star State"],0],[851,["Santo Domingo","Libreville","Naypyidaw","Cornhusker State"],0],[856,["Algiers","Harare","Reykjavik","Palikir"],3],[858,["Cornhusker State","Jefferson","Kampala","Funafuti"],3],[861,["Jimmy Carter","James Monroe","93M miles","Millard Fillmore"],1],[870,["The Phantom","Benjamin Harrison","Harper Lee","William McKinley"],1],[871,["Finding Nemo","jack black","William McKinley","Donald Trump"],2],[873,["Jimmy Carter","William Henry Harrison","French Quarter","Warren G. Harding"],3],[874,["James K. Polk","jack black","Samuel Osgood House","Herbert Hoover"],3],[875,["H. G. Wells","Jimmy Carter","Chester A. Arthur","Harry S. Truman"],3],[878,["US Grant","Jimmy Carter","Khaled Hosseini","James K. Polk"],1],[907,["brooks bros","Stockholm","Badger State","Phnom Penh"],2],[1399,["Switzerland","Finland","Austria","Denmark"],0],[1484,["Zimbabwe","South Africa","Argentina","Mongolia"],1],[1491,["Germany","Switzerland","Austria","Cyprus"],2],[1492,["Greece","Poland","Ukraine","Germany"],1],[1499,["Bolivia","Ghana","Senegal","Nigeria"],3],[1501,["Tanzania","Ethiopia","Kenya","Sudan"],1],[1504,["Indonesia","United States","Mexico","Canada"],1],[1510,["Mozambique","South Africa","Indonesia","Switzerland"],1],[1517,["Austria","Angola","Hungary","Switzerland"],0],[1524,["Ireland","Latvia","Denmark","Nigeria"],3],[1531,["Indonesia","Philippines","Vietnam","Norway"],1],[1537,["Czech Republic","Cameroon","Palestine","Djibouti"],0],[1545,["Sweden","Slovakia","Ukraine","Austria"],1],[1548,["Albania","Montenegro","Nigeria","Serbia"],3],[1549,["Cabo Verde","Trinidad and Tobago","Bosnia and Herzegovina","San Marino"],2],[1616,["Edmund Spenser","Dr. Seuss","Roald Dahl","E. B. White"],3],[1621,["Immanuel Kant","William Shakespeare","Charles Dickens","Oscar Wilde"],1],[1733,["1390","1010","1000","1050"],2],[1744,["2500","2100","2,000","76"],2],[1917,["Denmark","Madagascar","Singapore","Uruguay"],2],[2058,["Turkey","Iraq","Iran","Russia"],1],[2076,["British Columbia","Czech Republic","New Brunswick","Nova Scotia"],1],[2078,["Georgia","Arkansas","Delaware","Illinois"],0],[2079,["Armenia","Vietnam","Azerbaijan","Turkey"],0],[2080,["Armenia","Azerbaijan","Jamaica","Iran"],1],[2091,["Georgia","Alaska","Illinois","Hawaii"],0],[2093,["Russia","Azerbaijan","Iran","Malaysia"],1],[2095,["Qatar","Russia","Cyprus","Israel"],2],[2099,["Russia","China","Mongolia","Indonesia"],2],[2107,["Central African Republic","Guinea-Bissau","United Arab Emirates","San Marino"],2],[2108,["Finland","Iran","Qatar","Saudi Arabia"],2],[2109,["Kuwait","Palau","Djibouti","Lesotho"],0],[2111,["Zambia","Lebanon","Israel","Qatar"],1],[2112,["Nepal","France","Israel","Egypt"],2],[2116,["Ethiopia","Albania","Kenya","Vanuatu"],0],[2117,["Croatia","Ghana","Tanzania","Chile"],1],[2118,["Kenya","Panama","Senegal","Tanzania"],3],[2119,["Armenia","Mexico","Kenya","Uganda"],3],[2120,["Norway","Zambia","Mexico","Ethiopia"],1],[2121,["Ethiopia","Zimbabwe","France","South Africa"],1],[2122,["Honduras","Senegal","South Africa","Mozambique"],3],[2123,["Zimbabwe","Vanuatu","Ghana","Madagascar"],3],[2124,["Cabo Verde","Lesotho","Namibia","Djibouti"],2],[2125,["Vietnam","Zambia","Senegal","Hungary"],2],[2126,["Eritrea","Cameroon","Djibouti","Burundi"],1],[2132,["Malaysia","Nicaragua","Panama","Costa Rica"],3],[2237,["Reinhold Messner","Edmund Hillary","George Mallory","William Shakespeare"],1],[2248,["54","812","82","1,521"],3],[2249,["77","3,481","1,681","115"],2],[2250,["90","95","1,849","58"],2],[2251,["342","2,025","575","2819"],1],[2280,["1000","1030","1100","1090"],0],[2555,["Lebanon","Israel","Saudi Arabia","Jordan"],3],[2557,["Tunisia","Lebanon","Cyprus","Israel"],1],[2559,["Poland","Saudi Arabia","Yemen","Oman"],3],[2560,["Namibia","United Arab Emirates","New Brunswick","Botswana"],1],[2564,["Zambia","Angola","Morocco","Ecuador"],1],[2565,["Turkey","Zimbabwe","Zambia","Mozambique"],2],[2566,["Mozambique","Uganda","Zambia","Zimbabwe"],3],[2569,["Nunavut","Namibia","Botswana","Mali"],1],[2570,["Alberta","Quebec","Botswana","Namibia"],2],[2578,["Costa Rica","Panama","France","Colombia"],1],[2579,["Haiti","Dominican Republic","Barbados","Singapore"],1],[2584,["Antigua and Barbuda","Puerto Rico","San Marino","Palestine"],0],[2585,["Scotland","Nicaragua","Ecuador","Barbados"],3],[2587,["Benin","Sierra Leone","Mauritania","Malawi"],0],[2589,["Côte d'Ivoire","Liberia","Botswana","Guinea"],2],[2590,["South Sudan","El Salvador","Burkina Faso","Eswatini"],2],[2591,["Eswatini","Djibouti","Burundi","Rwanda"],2],[2592,["Malawi","Sierra Leone","Cabo Verde","Seychelles"],2],[2593,["Central African Republic","Namibia","Burkina Faso","Palestine"],0],[2594,["Gabon","Burkina Faso","Chad","Malawi"],2],[2595,["Liberia","Sierra Leone","Botswana","Comoros"],3],[2596,["Palestine","Republic of the Congo","Djibouti","Cabo Verde"],2],[2599,["Saint Lucia","Trinidad and Tobago","El Salvador","Botswana"],2],[2600,["Sierra Leone","Botswana","Equatorial Guinea","Comoros"],2],[2601,["Djibouti","Nauru","Eritrea","Namibia"],2],[2602,["Republic of the Congo","Djibouti","Eswatini","Guinea"],2],[2603,["Gabon","Botswana","Malawi","Djibouti"],0],[2604,["Djibouti","Grenada","Dominica","Puerto Rico"],1],[2605,["Guatemala","Micronesia","Mexico","Belize"],0],[2607,["Burundi","Eritrea","Comoros","Guinea-Bissau"],3],[2610,["Honduras","Senegal","Guatemala","Belize"],0],[2611,["Ireland","Samoa","Kiribati","Micronesia"],2],[2613,["Lesotho","Botswana","Liberia","Gambia"],0],[2614,["Liberia","Niger","Guinea","Equatorial Guinea"],0],[2619,["Guinea","Republic of the Congo","Mali","Malawi"],2],[2620,["Cabo Verde","South Sudan","Botswana","Marshall Islands"],3],[2621,["Palestine","Mauritania","Benin","Guinea"],1],[2622,["DR Congo","Eswatini","Rwanda","Mauritius"],3],[2864,["England","Russia","Monaco","Brazil"],2],[2990,["Namibia","Quebec","Mali","Syria"],3],[2991,["Senegal","Russia","Nigeria","Ghana"],3],[2993,["Greece","Senegal","Nigeria","Ghana"],1],[2994,["Mali","Yukon","Alberta","Somalia"],0],[2999,["Namibia","Syria","Botswana","Cameroon"],3],[3000,["Czech Republic","Botswana","Ontario","Somalia"],3],[3004,["Palau","Eritrea","Gabon","Nauru"],3],[3005,["Costa Rica","Nicaragua","Argentina","Pakistan"],1],[3006,["Botswana","Cameroon","Niger","Côte d'Ivoire"],2],[3007,["Lesotho","Palau","Namibia","Syria"],1],[3008,["Kuwait","Gambia","Djibouti","Palestine"],3],[3010,["Dominica","Saint Kitts and Nevis","San Marino","Côte d'Ivoire"],1],[3011,["Saint Lucia","Equatorial Guinea","Djibouti","Botswana"],0],[3012,["Saint Vincent and the Grenadines","Antigua and Barbuda","San Marino","Marshall Islands"],0],[3014,["Côte d'Ivoire","Burkina Faso","San Marino","Saint Lucia"],2],[3015,["São Tomé and Príncipe","Mauritius","Djibouti","Guinea"],0],[3016,["Gabon","Botswana","Seychelles","Equatorial Guinea"],2],[3017,["San Marino","Eswatini","Gambia","Sierra Leone"],3],[3018,["Fiji","Solomon Islands","Switzerland","Micronesia"],1],[3019,["South Sudan","Sierra Leone","Puerto Rico","Burundi"],0],[3022,["Rwanda","Comoros","Djibouti","Syria"],3],[3024,["Benin","Liberia","Togo","Mauritania"],2],[3025,["Solomon Islands","Samoa","France","Tonga"],3],[3026,["Republic of the Congo","El Salvador","Dominica","Trinidad and Tobago"],3],[3031,["Solomon Islands","Vanuatu","Ethiopia","Micronesia"],1],[3033,["Yemen","Iran","Brazil","Saudi Arabia"],0],[3034,["Uganda","Panama","Qatar","Angola"],3],[3035,["Syria","United Arab Emirates","Bahrain","Eswatini"],2],[3037,["Chad","Burundi","Rwanda","Taiwan"],3],[3038,["Eswatini","South Sudan","Côte d'Ivoire","Puerto Rico"],3],[3039,["Greenland","Botswana","Burundi","Rwanda"],0],[3046,["Liberia","Guinea","El Salvador","Côte d'Ivoire"],3],[3047,["Eritrea","Chad","Gambia","Republic of the Congo"],2],[3048,["Micronesia","Kiribati","Papua New Guinea","Samoa"],0],[3428,["Graphite","Diamond dust","Carbon black only","Methane"],0],[3462,["Red","Pink","Yellow","Blue"],1],[3826,["The Large Magellanic Cloud","About 1.5 billion km","Triangulum","The Milky Way"],3],[3827,["The Sun","Alpha Centauri","Eclipse","Proxima Centauri"],0],[3828,["Barnard's Star","Proxima Centauri","A hygrometer","Tau Ceti"],1],[3842,["The Whirlpool Galaxy","The camel","Eight commonly named phases","A rain gauge"],2],[3893,["Isaac Newton","James Watson","Niels Bohr","Albert Einstein"],3],[4079,["Jonas Salk","Edward Jenner","About 2,000","Albert Sabin"],0],[4080,["Jonas Salk","Edward Jenner","Robert Koch","The lungs"],1],[4081,["Edward Jenner","Joseph Lister","Alexander Fleming","The liver"],2],[4082,["Robert Koch","Joseph Lister","The liver","The throat"],1],[4083,["Danica Patrick","Clara Barton","Morgan Fairchild","Florence Nightingale"],3],[4084,["Danica Patrick","Florence Nightingale","Clara Barton","Morgan Fairchild"],2],[4116,["Five (including umami)","Pumping blood","The humerus","Joseph Lister"],0],[4194,["Canada","Germany","England","India"],0],[4196,["England","Canada","India","South Africa"],3],[4244,["Ian Fleming","Arthur Conan Doyle","Charles Dickens","Geoffrey Rush"],1],[4253,["C.S. Lewis","J.R.R. Tolkien","George R.R. Martin","Christian Bale"],1],[4266,["Whitney Houston","Jennifer Hudson","Kelly Clarkson","Carrie Underwood"],2],[4273,["Charlotte Brontë","Emily Brontë","Jane Austen","J.K. Rowling"],3],[4280,["Claire Danes","Emily Brontë","Charlotte Brontë","Jane Austen"],3],[4281,["Anne Brontë","Jane Austen","J.K. Rowling","Charlotte Brontë"],1],[4282,["Claire Danes","Charlotte Brontë","Jane Austen","J.K. Rowling"],2],[4283,["Charlotte Brontë","Agatha Christie","Emily Brontë","J.K. Rowling"],0],[4285,["Eric Carle","Alice Walker","Herman Melville","John Steinbeck"],2],[4287,["Frank Herbert","Louisa May Alcott","Neil Gaiman","Margaret Wise Brown"],1],[4288,["Charles Dickens","Gustave Flaubert","Arthur Conan Doyle","Christian Bale"],0],[4289,["Arthur Conan Doyle","Charles Dickens","Steven Spielberg","Dr. Seuss"],1],[4290,["Dr. Seuss","Christian Bale","Harrison Ford","Charles Dickens"],3],[4291,["Alexandre Dumas","Jack Nicholson","Charles Dickens","Martin Scorsese"],2],[4292,["Billy Crystal","George R. R. Martin","Harrison Ford","Charles Dickens"],3],[4293,["Geoffrey Chaucer","Steven Spielberg","Charles Dickens","Christian Bale"],2],[4294,["Anne Brontë","Mary Shelley","Agatha Christie","Jane Austen"],1],[4296,["Oscar Wilde","C. S. Lewis","Ian Fleming","J. R. R. Tolkien"],0],[4298,["H. G. Wells","R. J. Palacio","Emma Donoghue","Ernest Hemingway"],0],[4301,["Joseph Conrad","F. Scott Fitzgerald","Richard Wright","Robert Louis Stevenson"],3],[4303,["Joseph Conrad","William Gibson","Maurice Sendak","Ralph Ellison"],0],[4304,["Miguel de Cervantes","Louis Sachar","F. Scott Fitzgerald","Dolph Lundgren"],2],[4305,["Leo Tolstoy","Harper Lee","Suzanne Collins","John Green"],1],[4306,["Lois Lowry","John Steinbeck","Otto Preminger","Khaled Hosseini"],1],[4310,["George Orwell","James Cameron","J. R. R. Tolkien","Ridley Scott"],0],[4311,["Paulo Coelho","Ray Bradbury","Neil Gaiman","Kim Basinger"],1],[4315,["Khaled Hosseini","William Faulkner","Joseph Conrad","Robert Pattinson"],1],[4316,["Sara Gruen","Bram Stoker","William Faulkner","Matthew Lewis"],2],[4317,["Rudyard Kipling","The Grapes of Wrath","Zora Neale Hurston","Ralph Ellison"],2],[4318,["Aldous Huxley","Miguel de Cervantes","Ralph Ellison","Ray Bradbury"],2],[4320,["John Steinbeck","Gabriel García Márquez","Alice Walker","James Stewart"],2],[4322,["Madeleine L'Engle","Gabriel García Márquez","Alice Walker","Brandon Sanderson"],1],[4323,["Suzanne Collins","Neil Gaiman","P. L. Travers","Miguel de Cervantes"],3],[4324,["Eric Carle","Dante Alighieri","Anne Bancroft","Isaac Asimov"],1],[4327,["Geoffrey Chaucer","Roald Dahl","Gustave Flaubert","Christian Bale"],0],[4331,["A. A. Milne","Yoda Junior","Leo Tolstoy","Margaret Atwood"],2],[4332,["Victor Hugo","George R. R. Martin","Charles Dickens","Johnny Depp"],0],[4333,["Sean Connery","Victor Hugo","C. S. Lewis","Johnny Depp"],1],[4334,["Gustave Flaubert","Charles Dickens","Dr. Seuss","Alexandre Dumas"],0],[4335,["Alexandre Dumas","Robin Williams","C. S. Lewis","Gustave Flaubert"],0],[4336,["Steven Spielberg","Christian Bale","George R. R. Martin","Alexandre Dumas"],3],[4337,["Oscar Wilde","Roald Dahl","Arthur Conan Doyle","Jules Verne"],3],[4338,["Roald Dahl","Jared Leto","Gustave Flaubert","Jules Verne"],3],[4339,["Dr. Seuss","Roald Dahl","Tom Cruise","Jules Verne"],3],[4340,["Oscar Wilde","Victor Hugo","Arthur Conan Doyle","Roald Dahl"],2],[4341,["Charlotte Brontë","Agatha Christie","Emily Brontë","Mary Shelley"],1],[4342,["Mary Shelley","Christina Ricci","Agatha Christie","Charlotte Brontë"],2],[4343,["Louis Sachar","J. M. Barrie","Patrick Rothfuss","Margaret Mitchell"],3],[4344,["John Green","Andy Weir","L. Frank Baum","Ralph Fiennes"],2],[4345,["Anne Bancroft","P. L. Travers","Lois Lowry","A. A. Milne"],1],[4347,["Jules Verne","C. S. Lewis","Dr. Seuss","Roald Dahl"],2],[4348,["Dr. Seuss","Charles Dickens","Harrison Ford","Steven Spielberg"],0],[4349,["Erin Morgenstern","Gillian Flynn","Stieg Larsson","Maurice Sendak"],3],[4350,["Herman Melville","Paulo Coelho","Margaret Wise Brown","Nathaniel Hawthorne"],2],[4351,["Eric Carle","Dante Alighieri","Jack London","Emma Donoghue"],0],[4354,["Joseph Conrad","Louis Sachar","John Huston","Ralph Ellison"],1],[4355,["Miguel de Cervantes","Harvey Keitel","R. J. Palacio","Isaac Asimov"],2],[4357,["Aldous Huxley","Gabriel García Márquez","Suzanne Collins","J. D. Salinger"],2],[4359,["Toni Morrison","Joe Dante","John Green","Madeleine L'Engle"],2],[4360,["P. L. Travers","Stephenie Meyer","Astrid Lindgren","Suzanne Collins"],1],[4361,["Joseph Conrad","Orson Scott Card","Frank Herbert","Eric Carle"],2],[4364,["R. J. Palacio","Orson Scott Card","Khaled Hosseini","Neil Gaiman"],1],[4365,["James Cameron","George R. R. Martin","Roald Dahl","Arthur Conan Doyle"],1],[4368,["John Waters","Neil Gaiman","J. M. Barrie","Khaled Hosseini"],1],[4369,["Frances Hodgson Burnett","Sara Gruen","Anne Bancroft","Neil Gaiman"],3],[4370,["Margaret Atwood","Rudyard Kipling","Douglas Adams","William Faulkner"],2],[4371,["Markus Zusak","William Gibson","Aldous Huxley","Forrest Gump"],1],[4372,["Andy Weir","William Faulkner","Tim Burton","Robert Louis Stevenson"],0],[4374,["Ernest Hemingway","Dan Brown","Arthur Penn","H. G. Wells"],1],[4375,["Stieg Larsson","Harper Lee","Dan Brown","Alice Walker"],0],[4377,["Richard Wright","A. A. Milne","Forrest Gump","Margaret Wise Brown"],1],[4379,["Kenneth Grahame","Margaret Mitchell","Maurice Sendak","Stephenie Meyer"],0],[4380,["Alexandre Dumas","Roald Dahl","Jules Verne","Christian Bale"],1],[4381,["Victor Hugo","Roald Dahl","Dr. Seuss","George Orwell"],1],[4382,["George R. R. Martin","Tom Cruise","Roald Dahl","Oscar Wilde"],2],[4383,["Roald Dahl","Dr. Seuss","Victor Hugo","Steven Spielberg"],0],[4386,["Douglas Adams","Stieg Larsson","Homer","Frances Hodgson Burnett"],3],[4387,["Louisa May Alcott","Arthur Golden","Ernest Hemingway","Anna Sewell"],3],[4388,["Jack London","Erin Morgenstern","H. G. Wells","Chris Pratt"],0],[4390,["Ernest Hemingway","Emma Donoghue","Rudyard Kipling","Veronica Roth"],2],[4391,["J. R. R. Tolkien","Oscar Wilde","Martin Scorsese","George R.R. Martin"],0],[4392,["C. S. Lewis","J. R. R. Tolkien","Gustave Flaubert","Christian Bale"],1],[4393,["Alexandre Dumas","Victor Hugo","C. S. Lewis","Jared Leto"],2],[4394,["Margaret Atwood","Miguel de Cervantes","Andrew McCarthy","Arthur Penn"],0],[4395,["Zora Neale Hurston","Stardew Valley","Leo Tolstoy","Khaled Hosseini"],3],[4396,["The Weeknd","Yann Martel","Lois Lowry","Gabriel García Márquez"],1],[4398,["Arthur Golden","Orson Scott Card","Madeleine L'Engle","Nora Ephron"],0],[4401,["Jeff Kinney","Kathryn Stockett","Neil Gaiman","American Gods"],1],[4451,["Quentin Tarantino","Joel Coen","David Lean","David Fincher"],0],[4452,["Francis Ford Coppola","Christian Bale","Martin Scorsese","Charles Dickens"],0],[4453,["James Cameron","Steven Spielberg","Francis Ford Coppola","George Lucas"],1],[4454,["Martin Scorsese","Steven Spielberg","Ridley Scott","James Cameron"],3],[4455,["James Cameron","Christopher Nolan","Ridley Scott","George Orwell"],0],[4457,["Robert Zemeckis","Martin Balsam","Bill Murray","Patrick Rothfuss"],0],[4458,["Christopher Nolan","Justin Timberlake","George Lucas","Steven Spielberg"],0],[4459,["Steven Spielberg","James Cameron","Ridley Scott","Christopher Nolan"],3],[4465,["Daniel Craig","Gary Sinise","Tom Cruise","Tom Hanks"],3],[4474,["Ian McKellen","Patrick Stewart","Stieg Larsson","Christopher Lee"],0],[4475,["Robert Zemeckis","Sean Bean","Viggo Mortensen","Karl Urban"],2],[4476,["Richard Burton","Alec Guinness","Mark Hamill","Hayden Christensen"],2],[4477,["Harrison Ford","Geoffrey Rush","Billy Crystal","Ridley Scott"],0],[4482,["George Lucas","Matt Damon","Harrison Ford","Sean Connery"],2],[4483,["Sean Connery","Arnold Schwarzenegger","Tom Hanks","Harrison Ford"],0],[4484,["Timothy Dalton","Pierce Brosnan","Roger Moore","Kristin Chenoweth"],2],[4485,["Emma Donoghue","Anne Bancroft","Timothy Dalton","Pierce Brosnan"],3],[4486,["Jack Nicholson","Victor Hugo","Daniel Craig","Heath Ledger"],2],[4487,["Tom Cruise","Sylvester Stallone","Arnold Schwarzenegger","Martin Scorsese"],2],[4488,["Arnold Schwarzenegger","Sylvester Stallone","Jared Leto","Martin Scorsese"],1],[4489,["Arnold Schwarzenegger","Matt Damon","Sylvester Stallone","Jack Nicholson"],2],[4492,["Laurence Fishburne","Brie Larson","Keanu Reeves","Hugo Weaving"],2],[4495,["Space Invaders","Richard Harris","Oliver Reed","Russell Crowe"],3],[4496,["Matt Damon","Martin Scorsese","Joaquin Phoenix","Robin Williams"],2],[4497,["Parasite","Karen Allen","Once Upon a Time in Hollywood","Joker"],0],[4507,["Doris Day","Katharine Ross","Marilyn Monroe","Kenneth Grahame"],2],[4508,["Whitney Houston","Kate Winslet","Judy Garland","Audrey Hepburn"],3],[4512,["Isaac Asimov","Brandon Sanderson","Stanley Kubrick","John Landis"],2],[4519,["Christopher Plummer","Sean Connery","Matt Damon","Sylvester Stallone"],0],[4521,["Anthony Mackie","Robert Redford","Dustin Hoffman","Warren Beatty"],2],[4523,["Doris Day","Sam Peckinpah","Arthur Penn","Mike Nichols"],2],[4525,["Clark Gable","Hal Ashby","White Fang","Miloš Forman"],3],[4526,["Jared Leto","Robin Williams","Martin Scorsese","Jack Nicholson"],3],[4530,["Martin Scorsese","Charles Dickens","Jack Nicholson","Christian Bale"],0],[4531,["Kenneth Grahame","Al Pacino","Harvey Keitel","Robert De Niro"],3],[4535,["Ridley Scott","Martin Scorsese","James Cameron","Matt Damon"],0],[4536,["Sylvester Stallone","Mel Gibson","Harrison Ford","Jared Leto"],2],[4538,["George Lucas","James Cameron","Steven Spielberg","Christopher Nolan"],2],[4539,["Warren Beatty","Joe Dante","Robert Zemeckis","Richard Donner"],2],[4542,["Tom Cruise","John Hughes","Ridley Scott","Harrison Ford"],1],[4544,["Wallace Shawn","Rob Reiner","Liam Neeson","Richard Donner"],1],[4548,["Harrison Ford","Ridley Scott","Mel Gibson","Bruce Willis"],3],[4549,["Charles Dickens","Ben Kingsley","Arnold Schwarzenegger","Geoffrey Rush"],2],[4553,["Nora Ephron","Meg Ryan","Rob Reiner","Stephenie Meyer"],0],[4559,["Richard Gere","Patrick Swayze","Emily Blunt","Kevin Costner"],0],[4561,["Patrick Swayze","Richard Gere","Keanu Reeves","Russell Crowe"],0],[4564,["Robert Redford","Kevin Costner","Clint Eastwood","Stanley Kubrick"],1],[4567,["Steven Spielberg","George Lucas","Martin Scorsese","Billy Crystal"],0],[4568,["Liam Neeson","Keanu Reeves","Ray Bradbury","Ralph Fiennes"],0],[4569,["Daniel Day-Lewis","Henry Thomas","Liam Neeson","Ralph Fiennes"],3],[4570,["Bruce Willis","Matt Damon","Mel Gibson","Steven Spielberg"],2],[4572,["Francis Ford Coppola","Steven Spielberg","Ron Howard","George Orwell"],2],[4573,["Victor Hugo","Gary Sinise","Roald Dahl","Tom Hanks"],3],[4576,["Harrison Ford","Christian Bale","Robin Williams","Billy Crystal"],2],[4582,["Johnny Depp","Harrison Ford","Tom Cruise","Brad Pitt"],0],[4584,["Michael Keaton","Willem Dafoe","Arthur Golden","Chris Sarandon"],0],[4585,["Jason Isaacs","Val Kilmer","Michael Keaton","George Clooney"],2],[4586,["Jack Nicholson","Gary Sinise","Heath Ledger","Billy Crystal"],0],[4588,["Val Kilmer","Rob Reiner","George Clooney","Michael Keaton"],0],[4590,["Tom Cruise","Brad Pitt","Heath Ledger","Christian Bale"],3],[4591,["Michael Keaton","Julia Roberts","Robert Pattinson","Ben Affleck"],2],[4592,["Harrison Ford","Leonardo DiCaprio","Robin Williams","Robert Downey Jr."],3],[4593,["Chris Pratt","Russell Crowe","Chris Evans","Chris Hemsworth"],2],[4596,["Edward Norton","Mark Ruffalo","Eric Bana","Ian McKellen"],1],[4601,["Peter Jackson","Ewan McGregor","Clint Eastwood","Guillermo del Toro"],0],[4606,["David Fincher","Paul Thomas Anderson","Clint Eastwood","Darren Aronofsky"],0],[4608,["Eddie Murphy","Mike Myers","Chris Rock","Spencer Tracy"],0],[4614,["Idina Menzel","Kristin Chenoweth","Cynthia Erivo","Harold Ramis"],2],[4616,["Janet Leigh","Bruno Mars","Val Kilmer","Dune"],1],[4618,["Mary Shelley","Lady Gaga","Billie Eilish","Ariana Grande"],1],[4623,["Heath Ledger","Ed Sheeran","George Orwell","Drake"],1],[4625,["Elvis Presley","Christian Bale","Alexandre Dumas","Michael Jackson"],3],[4629,["Robin Williams","Elvis Presley","Drake","Johnny Cash"],1],[4630,["Jules Verne","Sean Connery","Prince","Michael Jackson"],2],[4635,["Mariah Carey","Emily Brontë","Christina Ricci","Whitney Houston"],3],[4652,["Adele","Amy Winehouse","Lana Del Rey","Duffy"],0],[4654,["The Beatles","Pink Floyd","Led Zeppelin","The Who"],1],[4655,["Lionel Richie","Michael Jackson","Stevie Wonder","Prince"],3],[4656,["Cyndi Lauper","Madonna","Lady Gaga","Whitney Houston"],1],[4657,["Nirvana","Soundgarden","Jay-Z","Alice in Chains"],0],[4658,["Oasis","Toto","Blur","Radiohead"],3],[4659,["Tina Turner","Mariah Carey","Dua Lipa","Whitney Houston"],3],[4660,["Barbra Streisand","Celine Dion","Leonard Cohen","Franz Ferdinand"],1],[4662,["Danny Elfman","John Williams","En Vogue","Hans Zimmer"],3],[4663,["Johnny Cash","Charlie Puth","Howard Shore","Tupac Shakur"],2],[4664,["Howard Shore","Shawn Mendes","Elvis Presley","Lionel Richie"],2],[4666,["The Beach Boys","Village People","The Beatles","The Bee Gees"],3],[4668,["Adele","Duffy","Amy Winehouse","Lady Gaga"],2],[4669,["Modest Mussorgsky","Katy Perry","Celine Dion","Alanis Morissette"],3],[4670,["Faith Hill","Lady Gaga","Shania Twain","LeAnn Rimes"],2],[4672,["Dolly Parton","Tammy Wynette","Loretta Lynn","Ariana Grande"],1],[4673,["Shania Twain","Loretta Lynn","Tammy Wynette","Patsy Cline"],1],[4674,["Prince", "Michael Jackson", "Lionel Richie", "Stevie Wonder"],0],[4675,["Charlie Puth","Johnny Cash","Elvis Presley","Tupac Shakur"],1],[4676,["Kris Kristofferson","Waylon Jennings","Willie Nelson","Thelonious Monk"],2],[4677,["Tupac Shakur","Stevie Wonder","Johnny Cash","Elvis Presley"],1],[4678,["Whitney Houston", "Mariah Carey", "Celine Dion", "Adele"],0],[4679,["Celine Dion", "Barbra Streisand", "Whitney Houston", "Mariah Carey"],0],[4680,["Diana Ross","Tina Turner","Rihanna","Aretha Franklin"],3],[4682,["Howard Shore", "John Williams", "Hans Zimmer", "James Horner"],0],[4683,["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"],0],[4687,["Queen","ABBA","Pearl Jam","Pink Floyd"],0],[4688,["Alanis Morissette", "Celine Dion", "Sheryl Crow", "Sarah McLachlan"],0],[4689,["Shania Twain", "Faith Hill", "Trisha Yearwood", "LeAnn Rimes"],0],[4690,["Good Charlotte","Black Sabbath","Deep Purple","Uriah Heep"],2],[4694,["Johnny Cash", "Hank Williams", "George Jones", "Merle Haggard"],0],[4695,["OutKast","Skid Row","Poison","Guns N' Roses"],3],[4696,["Stevie Wonder", "Marvin Gaye", "Ray Charles", "Curtis Mayfield"],0],[4697,["Ray Charles", "Jose Feliciano", "Stevie Wonder", "Ronnie Milsap"],0],[4698,["Van Halen","Journey","Hans Zimmer","Foreigner"],0],[4702,["Boston","Kansas","Chicago","Foreigner"],1],[4703,["Stone Temple Pilots","Journey","Foreigner","Styx"],3],[4704,["Foreigner","REO Speedwagon","Journey","Styx"],3],[4705,["Queen","Pink Floyd","Simon & Garfunkel","The Eagles"],2],[4706,["The Who","Fleetwood Mac","The Eagles","Simon & Garfunkel"],3],[4709,["Deep Purple", "Black Sabbath", "Uriah Heep", "Led Zeppelin"],0],[4714,["ABBA","Boney M.","Pearl Jam","The Beatles"],0],[4715,["Bon Jovi", "Def Leppard", "Poison", "Mötley Crüe"],0],[4716,["ABBA","The Beach Boys","The Bee Gees","Boney M."],2],[4717,["The Bee Gees","The Beatles","Boney M.","Village People"],3],[4718,["KC and the Sunshine Band","Chic","The Trammps","Bachman-Turner Overdrive"],0],[4724,["Michael Jackson","Howard Shore","Lionel Richie","Elvis Presley"],2],[4725,["Stevie Wonder","Lionel Richie","Howard Shore","Elvis Presley"],1],[4727,["Howard Shore","Lionel Richie","Shawn Mendes","Elvis Presley"],1],[4728,["The Everly Brothers", "The Righteous Brothers", "Simon & Garfunkel", "The Beach Boys"],0],[4732,["Jerry Lee Lewis","Little Richard","Platinum Blonde","Carl Perkins"],0],[4733,["Wanda Jackson","Brenda Lee","Mike Rutherford","Charlie Parker"],0],[4737,["Jerry Lee Lewis","Black Sheep","Carl Perkins","Skeeter Davis"],2],[4749,["Charlie Puth","Ed Sheeran","Tupac Shakur","Johnny Cash"],3],[4751,["Jerry Lee Lewis", "Carl Perkins", "Little Richard", "Chuck Berry"],0],[4753,["Pink Floyd","Led Zeppelin","The Beach Boys","The Beatles"],2],[4758,["Led Zeppelin","Fleetwood Mac","The Beatles","The Rolling Stones"],3],[4760,["The Small Faces","The Hollies","Jordin Sparks","The Kinks"],3],[4761,["The Who","Fleetwood Mac","Pink Floyd","ABBA"],0],[4765,["Pink Floyd","The Rembrandts","Led Zeppelin","The Eagles"],2],[4773,["Laura Nyro","Smokey Robinson","Marvin Gaye","Otis Redding"],2],[4781,["Pink Floyd","Queen","The Beatles","Fleetwood Mac"],1],[4783,["Howard Shore","Lionel Richie","Steven Tyler","Sam Smith"],2],[4784,["Rush","ABBA","The Who","Foghat"],3],[4788,["Pink Floyd","Counting Crows","Rush","Simon & Garfunkel"],0],[4790,["Metallica","Genesis","Yes","King Crimson"],1],[4794,["Bon Jovi","The Eagles","Rush","The Who"],2],[4795,["Rush","The Who","Pearl Jam","ABBA"],0],[4805,["Eagles","Bon Jovi","ABBA","Pearl Jam"],0],[4806,["Seals and Crofts","Bloc Party","America","Bread"],2],[4820,["Taylor Swift","Tina Turner","Loretta Lynn","Patsy Cline"],1],[4821,["Bonnie Tyler","Modest Mouse","Kim Carnes","Belinda Carlisle"],0],[4832,["R.E.M.","Run-DMC","U2","Live"],0],[4833,["R.E.M.","Nirvana","Soundgarden","Loverboy"],0],[4834,["Fleetwood Mac","Pink Floyd","Pearl Jam","Rush"],2],[4835,["Mudhoney","Alice in Chains","Soundgarden","The White Stripes"],1],[4838,["Glass Tiger", "The Outfield", "Wang Chung", "Mr. Mister"],0],[4863,["Wilson Phillips", "The Bangles", "En Vogue", "Heart"],0],[4865,["Johnny Cash","Michael Jackson","Tupac Shakur","Elvis Presley"],2],[4866,["Big L","Nas","The Flaming Lips","Jay-Z"],3],[4869,["50 Cent","50 feet","33 metres","44 weeks"],0],[4893,["Black Sabbath","Radiohead","The Verve","Muse"],1],[4894,["Coldplay","The Eagles","Def Leppard","Rush"],0],[4895,["Keane","Snow Patrol","Travis","OneRepublic"],0],[4896,["Keane","The Fray","Alice Cooper","Snow Patrol"],3],[4902,["Ariana Grande","Adele","Diana Ross","Duffy"],3],[4903,["Alexandra Burke","Bush","Jordin Sparks","Leona Lewis"],3],[4907,["Halsey","Alice in Chains","Alessia Cara","Lorde"],3],[4908,["Modest Mouse", "The Shins", "Franz Ferdinand", "Arctic Monkeys"],0],[4909,["Melanie Martinez","Lorde","Journey","Halsey"],3],[4910,["Billie Eilish","Lady Gaga","Madonna","Rihanna"],0],[4911,["Conan Gray","Olivia Rodrigo","The xx","Gracie Abrams"],1],[4913,["Rihanna","Ariana Grande","Taylor Swift","Dua Lipa"],3],[4914,["Dua Lipa","Lady Gaga","Ariana Grande","Duffy"],2],[4915,["Selena Gomez","Camila Cabello","Demi Lovato","Neil Young"],0],[4926,["Howard Shore","Ed Sheeran","Shawn Mendes","Johann Sebastian Bach"],3],[4928,["Stevie Wonder","Wolfgang Amadeus Mozart","Tupac Shakur","Ludwig van Beethoven"],1],[4929,["Billie Eilish", "Ariana Grande", "Lana Del Rey", "Dua Lipa"],0],[4932,["The Police","Genesis","Dire Straits","Metallica"],2],[4934,["Selena Gomez", "Demi Lovato", "Camila Cabello", "Ariana Grande"],0],[4936,["Beyoncé","Lady Gaga","Madonna","Rihanna"],3],[4937,["Britney Spears","Loretta Lynn","Lady Gaga","Kesha"],2],[4938,["A$AP Rocky","Kendrick Lamar","Genesis","J. Cole"],1],[4939,["Bastille","REO Speedwagon","Miley Cyrus","Katy Perry"],3],[4940,["The Who","Boney M.","Queen","BTS"],3],[4942,["Stone Temple Pilots","Nirvana","Bush","Alice in Chains"],1],[4944,["Duffy","Lady Gaga","Tina Turner","Beyoncé"],3],[4945,["Johann Sebastian Bach", "George Frideric Handel", "Antonio Vivaldi", "Henry Purcell"],0],[5013,["Golden Grahams","Froot Loops","Trix","Lucky Charms"],3],[5016,["Chex","Cheerios","Frosted Flakes","Cap'n Crunch"],3],[5018,["Cap'n Crunch","Fruity Pebbles","Frosted Flakes","Golden Grahams"],2],[5019,["Cheerios","Golden Grahams","Honey Nut Cheerios","Trix"],2],[5021,["Trix","Apple Jacks","Cocoa Puffs","Froot Loops"],3],[5038,["Pepsi","Coca-Cola","Canada Dry","Dr Pepper"],3],[5040,["5-hour Energy","Bang Energy","Red Bull","Rockstar"],2],[5041,["Peet's","Nescafé","Dunkin'","Starbucks"],3],[5044,["Subway","Quiznos","Jimmy John's","Wendy's"],0],[5045,["Quiznos","Qdoba","Subway","Jersey Mike's"],2],[5046,["Jack in the Box","Arby's","Wendy's","Five Guys"],1],[5047,["Culver's","Popeyes","Quiznos","Jack in the Box"],3],[5048,["Chipotle","Taco Bell","Qdoba","Del Taco"],1],[5049,["Dairy Queen","Del Taco","Qdoba","Taco Bell"],3],[5051,["Wendy's","McDonald's","Dairy Queen","Five Guys"],0],[5059,["Pizza Hut","Domino's","Jet's Pizza","Little Caesars"],0],[5074,["Mazda","Jeep","Hyundai","Subaru"],0],[5077,["Audi","Volkswagen","Mercedes-Benz","BMW"],1],[5079,["Pan Am","Lufthansa","British Airways","Delta Air Lines"],2],[5080,["Southwest Airlines","Lufthansa","Alaska Airlines","JetBlue"],0],[5084,["National","Enterprise","Volkswagen","Lexus"],1],[5086,["Corona","Miller Lite","Bud Light","Coors Light"],2],[5088,["Dos Equis","Corona","Sam Adams","Modelo"],1],[5089,["Coors Light","Dos Equis","Corona","Tecate"],1],[5093,["IBM","Google","Apple","Microsoft"],2],[5097,["Milky Way","Snickers","Starburst","Twix"],1],[5102,["Black","Ivory","Brown","Coral"],1],[5103,["Olay","Dove","Nivea","Friskies"],1],[5113,["Progressive","USAA","GEICO","State Farm"],3],[5117,["Mastercard","Capital One","Visa","American Express"],3],[5378,["A haystack","A train","The mail","Tomorrow"],3],[5453,["Green","Charcoal","Olive","Yellow"],1],[5524,["Balloon","Committee","Your phone","Bookkeeper"],3],[5539,["Vermont","tennessee","Georgia","Mississippi"],3],[5555,["Mike Tyson","Rocky Marciano","Muhammad Ali","George Foreman"],2],[5592,["Muhammad Ali","Michael Phelps","Rocky Marciano","Mike Tyson"],0],[5627,["Larry O'Brien Trophy","55 feet 6 inches","Wanamaker Trophy","60 feet 6 inches"],3],[5646,["Mark Spitz","Rocky Marciano","Muhammad Ali","Michael Phelps"],3],[5652,["Michael Phelps","Mark Spitz","Rocky Marciano","Ian Thorpe"],0],[5678,["Rocky Marciano","Ian Thorpe","Mike Tyson","Muhammad Ali"],3],[5679,["Muhammad Ali","Ian Thorpe","Rocky Marciano","Michael Phelps"],2],[5680,["Floyd Mayweather Jr.","Canelo Álvarez","Hank Aaron","Manny Pacquiao"],0],[5699,["Green","Yellow","White","Purple"],1],[5705,["Manchester United","England and South Africa","Three (foil, epee, sabre)","Every two years"],2],[5751,["Canada","Sweden","Switzerland","The Soviet Union"],3],[5755,["Grey Cup","American Pharoah","Commissioner's Trophy","The United States (invented in Massachusetts)"],3],[5766,["A perfect score of 300","The Run for the Gold","Every two years","42.2 kilometres"],0],[5795,["Mohandas Gandhi","Jawaharlal Nehru","Julius Caesar","Rajendra Prasad"],1],[5885,["Thomas Jefferson","John Adams","Joe Biden","George Washington"],1],[5886,["John Adams","Andrew Jackson","Thomas Jefferson","James Buchanan"],2],[5887,["John Quincy Adams","William McKinley","James Monroe","James Madison"],3],[5888,["John Quincy Adams","Harry S. Truman","James Madison","James Monroe"],3],[5889,["Donald Trump","James Monroe","John Quincy Adams","Martin Van Buren"],2],[5890,["Andrew Johnson","Andrew Jackson","Ulysses S. Grant","John F. Kennedy"],1],[5891,["John Tyler","Martin Van Buren","Zachary Taylor","William Henry Harrison"],1],[5896,["Millard Fillmore","Zachary Taylor","Franklin Pierce","Harry S. Truman"],0],[5897,["Millard Fillmore","Calvin Coolidge","Franklin Pierce","Harry S. Truman"],2],[5898,["Abraham Lincoln","Andrew Johnson","James Buchanan","Theodore Roosevelt"],2],[5901,["Rutherford B. Hayes","Ulysses S. Grant","John Adams","Andrew Johnson"],1],[5902,["George W. Bush","Ulysses S. Grant","William Howard Taft","Rutherford B. Hayes"],3],[5903,["Martin Van Buren","James A. Garfield","Grover Cleveland","Chester A. Arthur"],1],[5906,["Grover Cleveland","William McKinley","Benjamin Harrison","John Tyler"],0],[5907,["Grover Cleveland","Harry S. Truman","William McKinley","James Madison"],2],[5908,["William Howard Taft","Bill Clinton","Theodore Roosevelt","Andrew Johnson"],2],[5909,["William Howard Taft","Bill Clinton","Andrew Johnson","Theodore Roosevelt"],0],[5910,["Warren G. Harding","Calvin Coolidge","Woodrow Wilson","Franklin D. Roosevelt"],2],[5913,["Harry S. Truman","Herbert Hoover","Woodrow Wilson","Franklin D. Roosevelt"],3],[5914,["Woodrow Wilson","Harry S. Truman","Ronald Reagan","Franklin D. Roosevelt"],1],[5915,["John F. Kennedy","Andrew Johnson","Dwight D. Eisenhower","Lyndon B. Johnson"],2],[5918,["Gerald Ford","Lyndon B. Johnson","Richard Nixon","Barack Obama"],2],[5919,["Thomas Jefferson","Rutherford B. Hayes","Richard Nixon","Gerald Ford"],3],[5920,["Woodrow Wilson","George H. W. Bush","Ronald Reagan","Jimmy Carter"],3],[5921,["John Quincy Adams","George H. W. Bush","Jimmy Carter","Ronald Reagan"],3],[5922,["Bill Clinton","Theodore Roosevelt","Barack Obama","George W. Bush"],0],[5923,["Barack Obama","Bill Clinton","George W. Bush","Andrew Jackson"],2],[5924,["George W. Bush","Barack Obama","Joe Biden","Ulysses S. Grant"],1],[5925,["William McKinley","Calvin Coolidge","Donald Trump","Ronald Reagan"],2],[5926,["Barack Obama","Gerald Ford","Joe Biden","Ulysses S. Grant"],2],[5927,["Zachary Taylor","Donald Trump","Harry S. Truman","Chester A. Arthur"],1],[6062,["Stephen Harper","Ferdinand Magellan","Heath Ledger","James Cook"],3],[6068,["Haleakalā","Filipino immigrants","Kauaʻi","Fiftieth"],3],[6172,["Jacques Cartier","John Cabot (Giovanni Caboto)","Blueberry grunt","Henry Hudson"],1],[6197,["Alanis Morissette","Celine Dion","William Baffin","Avril Lavigne"],1],[6200,["Michael Bublé","Celine Dion","Joni Mitchell","k.d. lang"],2],[6201,["The Tragically Hip","April Wine","The Guess Who","The Canada goose"],2],[6202,["Toronto Raptors","The Weeknd","Justin Bieber","Michael Bublé"],3],[6203,["Guglielmo Marconi","Drake","Alexander Graham Bell","Shawn Mendes"],1],[6207,["Norman Bethune","Wilder Penfield","Frobisher Bay","Frederick Banting"],3],[6208,["Alexander Graham Bell","Guglielmo Marconi","Drake","Thomas Edison"],0]];