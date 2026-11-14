/* ============================================================
   TRIVIA OR NADA — game script, part 6 of 6 (speed pass).
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

var BAKED2=[[0,["Lord of the Flies","Judge Judy","Markus Zusak","Gadsby"],0],[3,["Switzerland","France","Mexico","Turkey"],0],[4,["Brad Paisley & Alison Krauss","Kenny Rogers & Dolly Parton","John Travolta & Olivia Newton-John","Elton John & Kiki Dee"],0],[6,["Keith Richards","Garth Brooks","Carl Sandburg","Brad Paisley"],0],[7,["Nucleus, tail, coma","The Quiet Man","Psychedelic Furs","DeAngelis or Moltesanti"],0],[8,["Jesse", "Danny Tanner", "Joey Gladstone", "Steve Hale"],0],[10,["Led Zeppelin","Bon Jovi","Def Leppard","Rolling Stones"],2],[15,["Bye Bye","Lord of the Flies","Gung Ho","Rockford Files"],0],[18,["Quakers","Amish","Shakers","Mennonites"],0],[24,["Toronto Maple Leafs","Los Angeles Kings","Anaheim Ducks","Philadelphia Flyers"],3],[25,["Michael and Geoffrey","Simon & Garfunkel","Flock of Seagulls","Zeus and Apollo"],1],[27,["Tom Hanks","John Hughes","Bobby Moore","Hulk Hogan"],0],[28,["low temperatures","Fyodor Dostoevsky","Paulo Coelho","heart attack"],0],[29,["You Better Run - Pat Benatar","Vin Diesel","The Quiet Man","Rockford Files"],0],[30,["Pittsburgh Pirates","White Sox/Reds","San Diego Padres","Seattle Pilots"],1],[31,["Geoffrey Butler","Otis Campbell","Peter Pettigrew","Beetle Bailey"],0],[32,["Eisenhower","Tom Cruise","Hitler","Jim Backus"],0],[33,["Harry and Marv","Hong Kong Phooey","Wile E. Coyote","The Lone Ranger"],3],[36,["enemy","Jerry","KISS","Quakers"],0,"set cannot field 3 same-kind choices (final sweep)"],[39,["Mississippi","California","Minnesota","Tennessee"],2],[40,["The Lone Ranger","Harry and Marv","Dr. Richard Burke","Hong Kong Phooey"],3],[42,["Herbert Holand","Jason Clarke","Chubby Checker","Andrew Jackson"],0],[44,["Bayer Aspirin","Advil","Alka-Seltzer","Tylenol"],2],[45,["Milwaukee Bucks","Philadelphia 76ers","Pistons","Los Angeles Lakers"],2],[47,["Mariah Carey","Britney","Susan Powter","Judy Blume"],1],[48,["Ear","eyes","tongue","bones"],0],[49,["Minnesota Timberwolves","Eagles","Pistons","Padres/Chargers"],3],[50,["Psychedelic Furs","Nucleus, tail, coma","Earth Angel","DeAngelis or Moltesanti"],2],[51,["Wimpy", "Popeye", "Olive Oyl", "Bluto"],0],[52,["Andy Weir","John Hughes","Roald Dahl","Kurt Vonnegut, Jr."],3],[53,["Geoffrey Butler","Beetle Bailey","Otis Campbell","Peter Pettigrew"],3],[54,["Daughter in law","Rockford Files","Stephen Colbert","low temperatures"],0],[55,["One sweet day","James Monroe","C","Lord of the Flies"],0],[57,["Bangladesh","Singapore","Greenland","Madagascar"],2],[58,["Douglas Adams","Jeff Kinney","Zefram Cochrane","Taylor Hicks"],3],[59,["Mexico","France","Switzerland","Moldova"],1],[60,["Pamela Anderson","Charlotte Brontë","Emily Bronte","Tammy Wynette"],0],[62,["Beetle Bailey","Harry Stamper","Otis Campbell","Kate Bradley"],0],[66,["Cicely Alaska","Gasoline Alley","Wayne Enterprises","Jenny's husband"],0],[68,["F. Scott Fitzgerald","Nucleus, tail, coma","shrek","Iditarod"],3],[69,["Hank Azaria","Rod Laver","Oscar Robertson","Phelps"],0],[70,["Ben Franklin","Freddy Fender","Bobby Moore","Joe McGinniss"],0],[71,["Turkey","Belgium","Monaco","Chile"],0],[74,["James Monroe","Gung Ho","Paulo Coelho","Bunny Hop"],3],[75,["Mendel","Omar Epps","Travolta","Dr. Seuss"],0],[77,["Wyoming","Kansas","Delaware","Missouri"],3],[80,["Kate Bradley","John Archer","Cole Trickle","Clara Oswald"],2],[81,["Drake","Monet","Bobby Moore","Dion"],0],[82,["Fred Willard","Isaac Asimov","walk off","US Grant"],2],[83,["Moldova","Mexico","Madagascar","Netherlands"],3],[84,["Chubby Checker","Carl Sandburg","Barry Sanders","James Buchanan"],0],[85,["Dr. Richard Burke","Harry and Marv","The Lone Ranger","Hong Kong Phooey"],0],[87,["Mt. Rushmore","Central Park","Arthur Ashe stadium","The Peach Pit"],2],[88,["Lord of the Flies","Maurice Sendak","Bring in Usual Suspects","Robert Louis Stevenson"],2],[89,["egon","Gadsby","owls","paper"],3],[91,["John Archer","Mr. Slate","Turbo Man","Denny Crane"],1],[92,["Kathryn Stockett","Patrick Rothfuss","butterfly cocoon","flat spiral"],2],[93,["BTO","Rush","Guardians","Coldplay"],0],[96,["Mexico","Switzerland","Belgium","France"],3],[97,["The Lone Ranger","Hong Kong Phooey","Harry and Marv","Wile E. Coyote"],2],[98,["Chile","Norway","Canada","Monaco"],0],[99,["Ticket to Ride","General Mills","Jerome David","The Cozy Cone"],0],[100,["Guardians","B-52's","Rush","Giants"],1],[101,["Danica Patrick","Cloris Leachman","Tammy Wynette","Agatha Christie"],0],[102,["Lord of the Flies","Stephen Colbert","Ernest Hemingway","Stephenie Meyer"],1],[104,["four-fendered friend","prevents colds","doing dishes","wedding crashers"],2],[105,["Elizabeth Tower","Kings Island","Mt. Rushmore","Central Park"],0],[106,["Smokey Robinson","Patrick Rothfuss","Wayne Enterprises","Mean Girls"],0],[109,["USC","Memphis","Miss. State","Indiana v. Purdue"],3],[110,["Walt Frasier","Alec Baldwin","Barry Sanders","Leonard Nimoy"],0],[111,["Carl", "Russell", "Charles Muntz", "Woody"],0],[112,["Grisham","Kurt Vonnegut, Jr.","Richard Wright","Sara Gruen"],0],[114,["greenland shark","Hamster","mollusk","Giant squid"],3],[115,["Cloris Leachman","Natalie Cole","Taylor Swift","Kelly Clarkson"],0],[119,["Card Czar","Judge Judy","Lord of the Flies","Frank Herbert"],0],[121,["Betty", "Wilma Flintstone", "Pebbles Flintstone", "Barney Rubble"],0],[122,["Texas Rangers","Dodgers","Detroit Tigers","Guardians"],1],[124,["Minnesota Mining and Manufacturing","The Last Picture Show","Megan Thee Stallion","View to a Kill"],3],[125,["Hamster","pig","mollusk","owls"],0],[126,["paper","carotid","Shamballa","seaweed"],1],[127,["Ottawa Senators","Los Angeles Kings","NY Rangers","Carolina Hurricanes"],2],[129,["heating ventilation air conditioning","heart will go on","leader of the band","head, heart, hooves"],0],[130,["Toss Across","Parker Bros.","Mattel","Phase 10"],3],[133,["Pete Davidson","Alec Baldwin","Keith Richards","Larry Holmes"],0],[135,["wedding crashers","doing dishes","prevents colds","four-fendered friend"],2],[136,["Q","Z","X","N"],0],[137,["Roger Miller","Bill Engvall","Garth Brooks","Harrison Ford"],0],[139,["VA","GMA","VW","MI6"],2],[141,["Calm im a tempest harbor","Wayne Enterprises","George H. W. Bush","Gabriel García Márquez"],0],[142,["Michael Flatley","Steve Carlton","Sandy Koufax","Peter Flanagan"],0],[144,["Borneo","peter","Montgomery Ward","Van Buren"],2],[145,["JFK","MI6","GMA","FERRIS"],3],[146,["SOA","GMA","MI6","JFK"],2],[149,["Ursa Minor","Canis Major","Hercules","Orion"],0],[150,["Beavis and Butt-Head","Zeus and Apollo","modern english","Simon & Garfunkel"],0,"set cannot field 3 same-kind choices (final sweep)"],[152,["Belfast","Madrid","Berlin","Dublin"],0],[153,["Lennon","Tom Hanks","Grisham","Dr. Seuss"],0],[154,["Where goblins work","devil wears prada","coming to america","dora the explorer"],1],[155,["devil wears prada","fox in socks","trig tales etc","one fine day"],3],[156,["Nike","Adidas","Under Armour","New Balance"],1],[158,["Denny Crane","Ace Ventura","Dr Honeydew","John Archer"],0],[159,["Montana","Alaska","Idaho","Utah"],3],[160,["William Golding","Peter Flanagan","Gustave Flaubert","Sylvester McCoy"],0],[161,["Susan Powter","Danica Patrick","Babe Didrikson","Tammy Wynette"],3],[163,["Cleary", "Chazz", "Ron Burgundy", "Frank Ricard"],0],[164,["Joe Montana","Tupac Shakur","Jon Favreau","Hank Azaria"],0],[165,["Tammy Wynette","Christina Hendricks","Danica Patrick","Charlotte Brontë"],1],[166,["Pale Rider","Friskies","It's a Wonderful Life","Trig Tales Etc"],3],[167,["Mel Brooks","Hank Azaria","Roald Dahl","Joe Lewis"],0],[168,["Natalie Cole","Susan Powter","Taylor Swift","Mariah Carey"],0],[169,["Wandering albatross","smack","mollusk","Nucleus, tail, coma"],1],[170,["Hitler","Churchill","Peter Tork","Jim Davis"],0],[172,["Philadelphia","Dublin","Boise","Halifax"],3],[173,["Denny Crane","John Archer","Dr Honeydew","Ace Ventura"],3],[174,["Lucky", "Tony the Tiger", "Cap'n Crunch", "Toucan Sam"],0],[177,["Wood", "Jack Tripper", "Chrissy Snow", "Larry Dallas"],0],[179,["Brazil","West Virginia","Memphis","Kings Island"],3],[180,["F. Scott Fitzgerald","Harry S. Truman","Minnesota Mining and Manufacturing","Lord of the Flies"],2],[181,["Brad Paisley","Joe Montana","Leonard Nimoy","Jason Clarke"],0],[182,["eyes","tongue","Ear","bones"],0],[183,["wedding crashers","four-fendered friend","doing dishes","prevents colds"],0],[184,["Phelps","Hank Azaria","Rod Laver","Oscar Robertson"],0],[185,["Brad Paisley","Bud Grant","Jesse","Jason Clarke"],3],[187,["Switzerland and Italy","The Lizzie McGuire Movie","Appalachian Mountains","View to a Kill"],0],[190,["21,000 feet","112 and 444 days","10 minutes","476,952 miles/day"],1],[191,["Egon", "Peter Venkman", "Ray Stantz", "Winston Zeddemore"],0],[193,["Khaled Hosseini","secret service","Port Louis","Lord of the Flies"],1],[194,["Santa Fe","Rome","Denver","Annapolis"],3],[195,["leader of the band","heart will go on","heating ventilation air conditioning","one fine day"],0],[196,["Gadsby","Lord of the Flies","Judge Judy","Rudyard Kipling"],0],[197,["Paulo Coelho","Rudyard Kipling","16th amendment","Ernest Cline"],2],[198,["fashion","Accra","bauxite","Prague"],2],[199,["MI6","JFK","GMA","SOA"],2],[200,["Chicago White Sox","Atlanta Braves","Astros","Chicago Cubs"],2],[201,["Bob Hoskins","Nap Lajoie","George Lucas","Roger Miller"],0],[202,["Corona","Coors","Hamm's","Old Style"],2],[203,["Will Ferrell","George Lucas","Joe McGinniss","Joe Hazelwood"],0],[204,["Gadsby","Nicosia","Porto-Novo","Shamballa"],3],[205,["bones","pancreas","eyes","tongue"],3],[206,["John Archer","Cole Trickle","Kate Bradley","Clara Oswald"],2],[209,["Monet","Nap Lajoie","Travolta","Ron Howard"],0],[211,["Skittles","Hershey's","Snickers","Nerds"],1],[212,["Travolta","JT","Dr. Seuss","Jesse"],0],[213,["Yerevan","Gadsby","hiccup","Tapper"],2],[214,["Kampala","Jefferson","Underwood","Closet"],2],[216,["Iron head","Marvin Gardens","hotrod lincoln","Stieg Larsson"],2],[217,["Pratchett","JT","Joe Montana","Mendel"],0],[218,["Broncos","Rolling Stones","B-52's","Dave Matthews Band"],0],[219,["Montana","Wyoming","S. Carolina","Alaska"],0],[220,["Where goblins work","charles, now william","straight outta lynwood","head, heart, hooves"],2],[221,["Coldplay","Daughtry","Cameo","Guardians"],3],[222,["Pizza Hut","Hungry Howie's","Little Caesars","Papa John's"],3],[223,["straight outta lynwood","charles, now william","head, heart, hooves","Where goblins work"],1],[224,["Motley Crue","Steel Dragon","The Mermaids","The Avengers"],0],[227,["The Avengers","Rolling Stones","Bon Jovi","Modern English"],3],[230,["Bobby Moore","Bob Hoskins","Roald Dahl","Howard Shore"],0],[231,["trig tales etc","fox in socks","one fine day","devil wears prada"],1],[233,["Wishbone","Scooby-Doo","Brian","Spike"],3],[234,["Garth Brooks","Harrison Ford","Peter Tork","Josh Turner"],0],[235,["Disney","DreamWorks","Paramount","YouTube"],3],[236,["Denny Crane","Dr Honeydew","John Archer","Ace Ventura"],1],[238,["Kurt Vonnegut","Larry Holmes","Richard Nixon","Ben Franklin"],0],[239,["Zr","hinny","Bissau","Thimphu"],0],[240,["Van Buren","butterfly cocoon","book'em dano","John Green"],0],[241,["Sue", "Axl Heck", "Brick Heck", "Frankie Heck"],0],[242,["Bangladesh","Florida","Tokyo","Black Sea"],3],[243,["Britain","The Peach Pit","Korea","Florida"],1],[244,["Louisville","Michigan State","Tennessee","Wake Forest"],2],[245,["fisher effect","Lucky Aide","Eric Carle","Gasoline Alley"],0],[246,["Shangri-La","lily","Jerusalem","octave"],0],[247,["Millard Fillmore","Cicely Alaska","Rudyard Kipling","book'em dano"],3],[248,["Micky Ward","Omar Epps","Jeff Gordon","Hulk Hogan"],0],[249,["Asmara","Montana and North Dakota","Dutch - Netherlands","Copenhagen"],1],[250,["Bram Stoker","Lord of the Flies","Right Field","General Mills"],3],[251,["Lord of the Flies","Patrick Rothfuss","Everett scott","Atlantis Cable Network"],3],[252,["20 bottles","93M miles","3 o'clock","10 minutes"],1],[253,["Howard Shore","Carl Sandburg","Freddy Fender","Tupac Shakur"],0],[254,["Albuquerque","Dublin","Cork","NYC"],2],[255,["Ted Williams","Larry Holmes","Owen Wilson","Stephen King"],0],[257,["Chevron","ExxonMobil","BP","Mobil"],0],[258,["Colorado Springs","Kansas City","San Francisco","Colorado, Oklahoma, Texas, Arizona, Utah"],3],[259,["Danica Patrick","Cloris Leachman","Babe Didrikson","Nancy Cartwright"],2],[260,["Sparta, MS","Las Vegas","Kansas City","St. Louis"],0],[262,["Johnson", "Sheriff Bart", "Hedley Lamarr", "The Waco Kid"],0],[263,["three","53","4","30"],2],[264,["Madison","US Grant","Donald Trump","Jimmy Carter"],0],[265,["Garth Brooks","Bailey Zappe","Freddy Fender","Alec Baldwin"],3],[266,["Joe McGinniss","Joe Montana","Daniel Craig","Leonard Nimoy"],0],[267,["Kansas City","Hoboken, NJ","Las Vegas","San Francisco"],1],[268,["Mariah Carey","Taylor Swift","Susan Powter","Mary Shelley"],1],[269,["Target","Brooks Bros.","Macy's","Walmart"],1],[270,["egon","wood","andrew","Carrie"],2],[271,["Jim Davis","Brad Paisley","Carl Zeiss","Josh Turner"],0],[272,["the wise man has the power","Moving in Stereo - The Cars","candy lips and bubble gum tongue","Where students are sorted into houses"],1,"set cannot field 3 same-kind choices (final sweep)"],[273,["Milli Vanilli","Arthur and Coolidge","Michael and Geoffrey","Beavis and Butt-Head"],1,"set cannot field 3 same-kind choices (final sweep)"],[274,["Stephenie Meyer","Megan Thee Stallion","View to a Kill","puppy love"],3],[275,["Steve Carlton","Daniel Craig","Tupac Shakur","Peter Flanagan"],0],[277,["Buy N Large","Orson Scott Card","The Quiet Man","black beauty"],0],[278,["Bruce", "Dory", "Nemo", "Gill"],0],[280,["West Virginia","California","North Carolina","Arizona"],2],[282,["Dunwoody 2008","Ernest Cline","Zefram Cochrane","Louis Sachar"],0],[283,["arsenic","wedding","Khrushchev","Madison"],0],[284,["Cate Blanchett and Jude Law","Tigers and Dodgers","Simon & Garfunkel","Dave Matthews Band"],0],[285,["Otis Campbell","Kate Bradley","Beetle Bailey","Harry Stamper"],3],[286,["Borneo","Clay","F. Scott Fitzgerald","shrek"],3],[287,["Nebraska","Kansas","Wyoming","S. Dakota"],1],[288,["Adams","Ankara","Peter","Arsenic"],0],[289,["Judy Blume","Natalie Cole","Emily Bronte","Mariah Carey"],0],[292,["Mutton","Lincoln","Tunis","Barton"],3],[294,["Turkey","Norway","Moldova","Peru"],0],[295,["Fresno","Philadelphia","Colorado Springs","Seattle"],3],[296,["Kansas","Montana","Florida","Wyoming"],3],[297,["Literature","Rockefeller","Ottawa","Homer"],1],[298,["fear of being watched by ducks","fear of empty beer glass","fear of snakes","fear of dogs"],1],[299,["1946","1923","1935","1977"],2],[300,["Fuji","Manitoba","Louvre","Everglades"],0],[301,["Zefram Cochrane","Toni Morrison","Smokey Robinson","Ralph Ellison"],0],[302,["God Only Knows","W. P. Kinsella","Herman Melville","Louisa May Alcott"],1],[303,["Omar Epps","Stephen King","Josh Turner","Peter Tork"],0],[304,["Ricky Nelson","Stephen King","Ben Franklin","Barry Sanders"],0],[307,["Denny Crane","John Archer","Ace Ventura","Vivian Ward"],3],[308,["Foghat","Rush","BTO","B-52's"],0],[309,["Moldova","Singapore","France","Barbados"],0],[311,["Joe Hazelwood","Tupac Shakur","Sandy Koufax","Howard Shore"],0],[312,["scientifically treated petroleum","head, heart, hooves","straight outta lynwood","charles, now william"],0],[313,["fisher effect","flat spiral","Talladega Nights","get shorty"],3],[316,["Lily", "Flo", "Mayhem", "Jake from State Farm"],0],[317,["Daughtry","Coldplay","Flock of Seagulls","Cameo"],0],[318,["Peter Flanagan","Joe Hazelwood","Chubby Checker","Alexandre Dumas"],0],[320,["Stephen King","Churchill","Pratchett","Ding Liren"],1],[321,["Peter", "Greg Brady", "Bobby Brady", "Mike Brady"],0],[322,["Margaret Atwood","Psychedelic Furs","Taylor Hicks","Talladega Nights"],1],[323,["Romania","Chile","Belgium","Norway"],0],[325,["Einstein","Dion","Peter Tork","Travolta"],0],[326,["flash","smack","pi","Lord of the Flies"],0],[328,["Giants","Tampa Bay Buccaneers","Eagles","Baltimore Ravens"],2],[329,["Jerry","noon","Bishkek","pips"],3],[330,["Barbados","Afghanistan","Singapore","Netherlands"],0],[331,["Odie","Snot","Lassie","Bolt"],1],[332,["Target","Macy's","Brooks Bros.","Costco"],1],[333,["South Africa","Norway","Greece","France"],0],[334,["KISS","fridge","helium","Workday"],0,"set cannot field 3 same-kind choices (final sweep)"],[335,["gale gilbert","Gillian Flynn","cy young","Dante Alighieri"],2],[336,["Suzanne Collins","Wandering albatross","bruce","Mt. Crumpit"],3],[337,["3X","Suzanne Collins","fathom","Dominion"],0],[339,["jack black","Astrid Lindgren","Harper Lee","Madison"],0],[340,["Roosevelt","Owen Wilson","Pratchett","Bobby Moore"],0],[342,["Steve Carlton","Leonard Nimoy","Frank Sinatra","Carl Sandburg"],3],[343,["Canada","Romania","Moldova","Mexico"],0],[344,["herbert hoover","gale gilbert","Rogers Hornsby","Port Louis"],0],[345,["Emily Bronte","Charlotte Brontë","Anne Brontë","Jane Austen"],0],[347,["Wayne Enterprises","Rogers Hornsby","Van Buren","Nathaniel Hawthorne"],0],[349,["Mexico","Moldova","Barbados","Greece"],0],[350,["Belgium","Singapore","Norway","Romania"],0],[352,["Dallas","Seattle","Omaha","Bonn"],3],[353,["Nebraska","Montana","Wyoming","Tennessee"],0],[355,["Harley", "Tony Stark", "Pepper Potts", "James Rhodes"],0],[356,["Where goblins work","coming to america","devil wears prada","dora the explorer"],3],[357,["cy young","Iron","gale gilbert","Nucleus, tail, coma"],2],[358,["Simon & Garfunkel","JT and Janet","Virgil and Morgan","Zeus and Apollo"],1],[360,["The Cozy Cone","Lord of the Flies","Mickey","Montgomery Ward"],0],[361,["Tigers and Dodgers","Flock of Seagulls","Simon & Garfunkel","Michael and Geoffrey"],0],[362,["YouTube","Hulu","DreamWorks","Disney"],3],[363,["heating ventilation air conditioning","devil wears prada","heart will go on","leader of the band"],2],[364,["Earth Angel","Borneo","Augustus Gloop","Douglas Adams"],2],[365,["tongue","eyes","bones","Ear"],2],[366,["Set", "Anubis", "Horus", "Thoth"],0],[367,["Moscow","bauxite","Clay","pi"],3],[368,["Twiki", "K-9", "Robbie the Robot", "Commander Data"],0],[369,["ABBA","Gaga and Ariana","Daughtry","Brad Paisley & Alison Krauss"],0],[370,["Susan Powter","Mariah Carey","Tammy Wynette","Danica Patrick"],0],[371,["Louvre","Everglades","Manitoba","Fuji"],2],[372,["Ding Liren","Nap Lajoie","Bob Hoskins","Victor Hugo"],0],[373,["Stay Awake","Megan Thee Stallion","J. D. Salinger","Rogers Hornsby"],1],[375,["Flock of Seagulls","The Band Perry","Brad Paisley & Alison Krauss","ABBA"],0],[377,["Herman Melville","Veronica Roth","Madeleine L'Engle","Zach G-a-l-i-f-i-a-n-a-k-i-s"],3],[379,["Acute Respiratory Distress Syndrome","Trevor Bayne","herbert hoover","James K. Polk"],1],[383,["Jerry", "Marge Gunderson", "Carl Showalter", "Gaear Grimsrud"],0],[384,["Japan","Moldova","Korea","Chile"],0],[385,["book'em dano","Gasoline Alley","xanthan gum","John Green"],2],[386,["frog and toad","beaver and otter","platypus and echidna","lion and tiger"],2],[389,["Joe Lewis","Peter Tork","Brad Paisley","Daniel Craig"],0],[390,["French Quarter","Millard Fillmore","Montgomery Ward","low temperatures"],0],[391,["tongue","pancreas","bones","eyes"],1],[392,["Outback Steakhouse","Red Lobster","TGI Fridays","Olive Garden"],1],[394,["English","spanish","Turkish","Italian"],1],[395,["Zeus and Apollo","Arthur and Coolidge","Gaga and Ariana","JT and Janet"],0],[399,["Giant squid","Hula Hoop","Lord of the Flies","Judge Judy"],1],[400,["Karate","golf","Hockey","Diving"],2],[402,["Turbo Man","John Archer","Denny Crane","Mr. Slate"],0],[403,["Fur Elise","Con Air","Eegah","Michael Gambon"],0],[407,["Earth Angel","It's raining Men","puppy love","fisher effect"],1],[408,["Cocktail weekend?","Big Bird Jack in the Box","Lord of the Flies","One sweet day"],1],[409,["Denny Crane","Dr Honeydew","John Archer","Ace Ventura"],2],[410,["Steel Dragon","The Mermaids","Daughtry","Coldplay"],0],[412,["Toss Across","Phase 10","Hasbro","Parker Bros."],0],[413,["Larry Holmes","Bailey Zappe","Bobby Moore","Bill Russell"],0],[416,["Broncos","Rolling Stones","Tigers and Dodgers","Dave Matthews Band"],3],[417,["Judge Judy","Rudyard Kipling","Gadsby","Lord of the Flies"],0],[418,["Afghanistan","Liechtenstein","Netherlands","Switzerland"],1],[420,["Shawn Fanning","Zach G-a-l-i-f-i-a-n-a-k-i-s","Clay","F. Scott Fitzgerald"],0],[422,["Rudyard Kipling","Margaret Wise Brown","Cirque du Soleil","Chinese checkers"],2],[423,["Preston","Shawn Fanning","Season of the sticks","Buy N Large"],2],[424,["Psychedelic Furs","Workday","Nucleus, tail, coma","Martinsville speedway"],3],[426,["right","Striker","Clay","fathom"],0,"fewer than 3 same-subkind (side) distractors in the pool"],[427,["Bill Bellamy","Bobby Moore","Daniel Craig","Hiram Revels"],0],[428,["Chinese checkers","Flew in from Miami","Idaho and Washington","French Quarter"],1],[430,["Giant squid","greenland shark","mollusk","Hamster"],1],[431,["Lotso", "Woody", "Buzz Lightyear", "Mr. Potato Head"],0],[432,["Mt. Crumpit","Paulo Coelho","Chinese checkers","Gasoline Alley"],2],[433,["H. G. Wells","James K. Polk","assassinating McKinley","Margaret Wise Brown"],2],[434,["Cole Trickle","Clara Oswald","Kate Bradley","John Archer"],1],[435,["Mystic Pizza","McGee","Gung Ho","Douglas Adams"],2],[437,["puppy love","God Only Knows","It's raining Men","Nucleus, tail, coma"],1],[438,["I Can Only Imagine","Rathtar","Mystic Pizza","Everett scott"],0],[440,["Kate Bradley","Otis Campbell","Harry Stamper","Beetle Bailey"],1],[441,["6.88","7","2","8"],3],[443,["book'em dano","Montgomery Ward","heart attack","Rogers Hornsby"],3],[444,["Wandering albatross","smack","Nucleus, tail, coma","Mt. Crumpit"],0],[445,["Dion","Omar Epps","Jesse","Nap Lajoie"],0],[446,["Augustus Gloop","Orson Scott Card","Domain Name System","Megan Thee Stallion"],2],[447,["Igor", "Herman Munster", "Lily Munster", "Eddie Munster"],0],[448,["The Last Picture Show","Erin Morgenstern","John Steinbeck","Lord of the Flies"],0],[449,["Virgil and Morgan","The Band Perry","Simon & Garfunkel","Michael and Geoffrey"],0],[450,["Rush","BTO","ABBA","Foghat"],0],[451,["Cameo","Led Zeppelin","ABBA","Flock of Seagulls"],0],[452,["Last Thing on My Mind","Pale Rider","The Thief of Bagdad","Dream of the Red Chamber"],1],[453,["Chemistry","Physics","Economics","Literature"],3],[454,["hinny","Mickey","Harare","Bishkek"],1],[456,["Ted Williams","Johnny Cash","Tupac Shakur","Bobby Moore"],1],[458,["Vin Diesel","Gung Ho","Rathtar","Mystic Pizza"],3],[460,["Jenny's husband","Emma Donoghue","secret service","Kuwait City"],0],[463,["Trevor Berbick","Harrison Ford","Oscar Robertson","Keith Richards"],0],[467,["Turks and Caicos","Barbados","Canada","Greece"],0],[468,["Ursa Minor","Rigel","Orion","Canis Major"],3],[469,["The Quiet Man","Zefram Cochrane","Lord of the Flies","Leonard Hofstadter"],3],[470,["GMA","MI6","VA","VW"],2],[471,["Martinsville speedway","Jerry","Iron","Nucleus, tail, coma"],2],[472,["Lord of the Flies","Chain Reaction","Wayne Enterprises","Emma Donoghue"],1],[473,["Carl Zeiss","Jason Clarke","Walt Frasier","Brad Paisley"],0],[474,["Parker Bros.","Phase 10","Toss Across","Mattel"],0],[475,["Talladega Nights","Jerome David","San Salvador","Ray Bradbury"],0],[478,["Hockey","Polo","Judo","golf"],3],[479,["Vaduz","heights","wedding","Kendrick"],2],[480,["North Dakota","S. Dakota","Utah","Tennessee"],1],[481,["Blue Jays","Athletics","Texas Rangers","Cleveland Guardians"],0],[482,["Orson Scott Card","Rudolph","Bring in Usual Suspects","Madeleine L'Engle"],1],[484,["devil wears prada","Where goblins work","charles, now william","head, heart, hooves"],3],[485,["Colorado","FL","UT","Idaho"],2],[486,["Rickey Henderson","William Golding","Stephen Harper","George Washington"],0],[487,["Richard Nixon","Theodore Roosevelt","James Buchanan","Barack Obama"],1],[488,["Against the wind","Vote for Pedro","Louisa May Alcott","Nucleus, tail, coma"],0],[489,["Dublin","Vienna","Boise","Bonn"],0],[490,["Oscar Robertson","Rod Laver","Hank Azaria","Phelps"],0],[492,["The Band Perry","Flock of Seagulls","Daughtry","Steel Dragon"],0],[493,["Psychedelic Furs","Lord of the Flies","Ticket to Ride","The Lizzie McGuire Movie"],3],[494,["MI6","GMA","SOA","JFK"],2],[498,["Striker", "Dr. Rumack", "Captain Oveur", "Steve McCroskey"],0],[499,["Freddy Fender","Steve Carlton","Richard Petty","George Orwell"],0],[500,["Monster.com","Microsoft","Qualcomm","Motorola"],0],[503,["Bud Grant","Leonard Nimoy","Jesse","Carl Sandburg"],1],[504,["Raymond Reddington","Beetle Bailey","Peter Pettigrew","Geoffrey Butler"],0],[506,["The Lone Ranger","Hong Kong Phooey","Harry and Marv","Wile E. Coyote"],3],[508,["egon","Workday","nine to 0","Martinsville speedway"],1],[509,["Tupac Shakur","Josh Turner","Bill Bellamy","Pete Davidson"],0],[510,["Bill Russell","Bill Engvall","Roger Miller","Ted Williams"],0],[511,["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],0],[512,["Mean Girls","Veronica Roth","Israel president","Bunny Hop"],2],[514,["Arthur Golden","Kung Fu","The Phantom","Gung Ho"],1],[515,["Falcons","New Orleans Saints","Washington Commanders","San Francisco 49ers"],0],[516,["Gaga and Ariana","Flock of Seagulls","ABBA","Brad Paisley & Alison Krauss"],0],[517,["Purdue","Texas A&M","Duke","Miss. State"],3],[518,["Jon Favreau","Victor Hugo","Brad Paisley","Alec Baldwin"],0],[519,["Stephen Harper","Larry Holmes","Freddy Fender","Joe McGinniss"],0],[521,["eyes","tongue","bones","Ear"],0],[522,["almonds","Potato","Cabbage","Carrot"],0],[523,["Sega","Atari","Nintendo","Xbox"],1],[526,["Orion","Canis Major","Pisces","Rigel"],0],[527,["Bailey Zappe","Pete Davidson","Josh Turner","Hank Azaria"],0],[528,["Gerald Ford","Roald Dahl","Jules Verne","Bob Hoskins"],0],[529,["Friz Freleng","Barry Sanders","Steve Carlton","Carl Sandburg"],0],[530,["Chester A. Arthur","Gasoline Alley","The Cozy Cone","Austria and Italy"],3],[535,["Mariah Carey","Emily Bronte","Jean Simmons","Mary Shelley"],0],[536,["The Phantom","Flicka","Rockford Files","All in the Family"],2],[537,["doing dishes","four-fendered friend","wedding crashers","prevents colds"],1],[538,["Zora Neale Hurston","Ticket to Ride","Preston","16th amendment"],2],[539,["Peter Tork","Roger Miller","Harrison Ford","Garth Brooks"],0],[541,["Frank Herbert","Astrid Lindgren","John Steinbeck","Mean Girls"],3],[543,["Abuja","Khartoum","Nicosia","Kellerman's"],3],[546,["Nerds","Twix","M&M's","Hershey's"],0],[548,["Maseru","Abuja","harley","Tapper"],3],[549,["Alabama","S. Dakota","Mississippi","Montana"],0],[550,["fear of dogs","fear of empty beer glass","fear of flying","fear of being watched by ducks"],3],[551,["fear of empty beer glass","fear of germs","fear of being watched by ducks","fear of dogs"],0],[552,["Rolling Stones","Broncos","Dave Matthews Band","Milli Vanilli"],0],[553,["Gadsby","Earth Angel","wood","fridge"],3],[554,["Canis Major","Orion","Pisces","Rigel"],2],[558,["Dallas Cowboys","Buffalo Bills","Giants","San Francisco 49ers"],2],[559,["McGee", "Gibbs", "DiNozzo", "Abby"],0],[561,["San Francisco","Santa Monica","Kansas City","Las Vegas"],1],[563,["Black Sea","Mt. Rushmore","Camp David","Central Park"],2],[564,["Astrid Lindgren","Chinese checkers","Iron head","Ray Bradbury"],2],[566,["golf","hockey","Karate","Diving"],1],[567,["Psychedelic Furs","cy young","Nucleus, tail, coma","nine to 0"],3],[568,["Old Style","Hamm's","Bud Light","Dos Equis"],0],[570,["Boron","helium","Rhenium","Cadmium"],1],[571,["Wounded Knee","Central Park","Germany","Fresno"],0],[572,["cy young","Lydia Kuo","Right Field","Patrick Rothfuss"],1],[573,["Where goblins work","coming to america","devil wears prada","dora the explorer"],1],[574,["Kris Allen","Jason Clarke","Joe Lewis","Jim Davis"],0],[575,["fridge","hiccup","Dead","Lord of the Flies"],2],[578,["Shawn Fanning","Iditarod","shrek","Clay"],3],[579,["Kendrick","Evanescence","Yerevan","maiden"],0],[582,["Honda Accord","Toyota","Lexus","Nissan"],0],[583,["owls","Hamster","pig","mollusk"],2],[584,["Neil Gaiman","Roald Dahl","John Hughes","P. L. Travers"],2],[586,["Athletics","Seattle Pilots","Colorado Rockies","Milwaukee Brewers"],1],[587,["Hamster","pig","owls","mollusk"],3],[588,["Bill Engvall","Garth Brooks","Roger Miller","Peter Tork"],0],[589,["Baymax", "Hiro Hamada", "Tadashi Hamada", "Honey Lemon"],0],[590,["Coldplay","ABBA","Cameo","Steel Dragon"],0],[593,["Led Zeppelin","Coldplay","Cameo","ABBA"],0],[594,["Pisces","Rigel","Orion","Hercules"],1],[595,["Vancouver Canucks","NJ Devils","Vegas Golden Knights","Montreal Canadiens"],1],[596,["Montgomery Ward","black beauty","William Faulkner","Everett scott"],1],[597,["Kurt Vonnegut","Kurt Vonnegut, Jr.","Roald Dahl","John Hughes"],0],[598,["Port of Spain","Bandar Seri Begawan","Dutch - Netherlands","Niamey"],2],[599,["Card Czar","Taylor Hicks","Marvin Gardens","Lois Lowry"],2],[600,["The Peach Pit","Mt. Rushmore","Central Park","Samuel Osgood House"],3],[601,["Porto-Novo","One sweet day","Idaho and Washington","Palikir"],2],[603,["Ernest Hemingway","Gasoline Alley","secret service","San Salvador"],1],[606,["Everett scott","Vin Diesel","You Better Run - Pat Benatar","The Phantom"],0],[608,["Nancy Cartwright","Charlotte Brontë","Natalie Cole","Babe Didrikson"],0],[609,["N. Pole","Black Sea","Camp David","Central Park"],0],[610,["pig","Hamster","mollusk","owls"],3],[611,["Arthur and Coolidge","Beavis and Butt-Head","Dave Matthews Band","Michael and Geoffrey"],3,"set cannot field 3 same-kind choices (final sweep)"],[613,["1972","1859","1910","1987"],1],[614,["Rod Laver","Oscar Robertson","Hank Azaria","Phelps"],0],[615,["Rigel","Orion","Hercules","Pisces"],2],[616,["Mickey","Amsterdam","Stretch","Boron"],2],[617,["Jim Davis","Charles Dickens","Nap Lajoie","Tom Hanks"],0],[618,["Richard Petty","Roger Miller","Alexandre Dumas","Joe Hazelwood"],0],[622,["Mt. Rushmore","Kings Island","Wounded Knee","Central Park"],0],[623,["McIntosh","Pyongyang","Evanescence","Copenhagen"],2],[626,["Jim Backus","Walt Frasier","Stephen King","Jim Davis"],0],[630,["Brasilia","michael","Harare","Lincoln"],1],[635,["Hiram Revels","Pete Davidson","Jason Clarke","Joe McGinniss"],0],[636,["Norway","Barbados","Romania","Monaco"],0],[641,["SOA","GMA","JFK","MI6"],2],[642,["shrek","Dominion","Paramaribo","Lord of the Flies"],1],[645,["octave","Niamey","Monrovia","carotid"],0],[646,["Toni Morrison","All in the Family","Brandon Sanderson","University of Miami"],3],[648,["Germany","Everglades","Angola","Manitoba"],1],[649,["Bobby Moore","Jeff Gordon","Johnny Cash","Jon Favreau"],1],[650,["General Mills","Van Buren","Comiskey Park","Card Czar"],2],[651,["Taylor Swift","Susan Powter","Jane Austen","Jean Simmons"],3],[653,["Patrick Rothfuss","Tammy Wynette","Jane Austen","Arthur Conan Doyle"],2],[654,["Jane Austen","Anna Sewell","Mary Shelley","Orson Scott Card"],0],[655,["Louis Sachar","Jane Austen","Jack London","Harper Lee"],1],[656,["Charlotte Brontë","Ernest Cline","Agatha Christie","Laura Ingalls Wilder"],0],[657,["Emily Bronte","Charlotte Brontë","Anne Brontë","Jane Austen"],0],[658,["Veronica Roth","Herman Melville","Alice Walker","Toni Morrison"],1],[659,["Nathaniel Hawthorne","Anna Sewell","Joseph Conrad","Emma Donoghue"],0],[660,["Louisa May Alcott","Agatha Christie","Ernest Cline","Paulo Coelho"],0],[661,["Khaled Hosseini","Charles Dickens","Margaret Mitchell","Herman Melville"],1],[662,["Aldous Huxley","Neil Gaiman","Gustave Flaubert","Charles Dickens"],3],[663,["Patrick Rothfuss","Isaac Asimov","Charles Dickens","Gustave Flaubert"],2],[664,["William Gibson","A. A. Milne","Charles Dickens","J.R.R. Tolkien"],2],[665,["P. L. Travers","Ralph Ellison","Charles Dickens","F. Scott Fitzgerald"],2],[666,["Charles Dickens","J. M. Barrie","Gillian Flynn","Geoffrey Chaucer"],0],[667,["Tammy Wynette","Louis Sachar","Mary Shelley","John Hughes"],2],[668,["Paulo Coelho","Louis Sachar","Kurt Vonnegut, Jr.","Bram Stoker"],3],[669,["Alice Walker","Jeff Kinney","Herman Melville","Oscar Wilde"],3],[670,["Stephenie Meyer","Oscar Wilde","H. G. Wells","F. Scott Fitzgerald"],2],[671,["Patrick Rothfuss","H. G. Wells","P. L. Travers","Sara Gruen"],1],[672,["L. Frank Baum","Orson Scott Card","Alice Walker","H. G. Wells"],3],[673,["L. Frank Baum","Jeff Kinney","Robert Louis Stevenson","J. D. Salinger"],2],[674,["Patrick Rothfuss","Robert Louis Stevenson","Arthur Conan Doyle","Jules Verne"],1],[675,["L. Frank Baum","Anna Sewell","Arthur Golden","Rudyard Kipling"],3],[676,["Grisham","Douglas Adams","Joseph Conrad","Richard Wright"],2],[677,["Ernest Cline","Arthur Golden","F. Scott Fitzgerald","Eric Carle"],2],[678,["Frances Hodgson Burnett","Alice Walker","Andy Weir","Harper Lee"],3],[679,["William Gibson","John Steinbeck","Isaac Asimov","Jane Austen"],1],[680,["Ernest Cline","Jeff Kinney","Gustave Flaubert","John Steinbeck"],3],[681,["Arthur Golden","John Steinbeck","Patrick Rothfuss","Ernest Cline"],1],[682,["Arthur Conan Doyle","Joseph Conrad","Aldous Huxley","Harper Lee"],2],[683,["Charlotte Brontë","J. M. Barrie","Alice Walker","George Orwell"],3],[684,["Alexandre Dumas","Miguel de Cervantes","Ray Bradbury","Arthur Golden"],2],[685,["Yann Martel","Bram Stoker","Agatha Christie","J. D. Salinger"],3],[686,["Alexandre Dumas","Brandon Sanderson","Nathaniel Hawthorne","Ernest Hemingway"],3],[687,["Ernest Hemingway","Khaled Hosseini","Alice Walker","Dante Alighieri"],0],[688,["William Faulkner","Bram Stoker","Homer","Aldous Huxley"],0],[689,["Yann Martel","Frances Hodgson Burnett","William Faulkner","William Gibson"],2],[690,["Maurice Sendak","F. Scott Fitzgerald","Sara Gruen","Zora Neale Hurston"],3],[691,["A. A. Milne","P. L. Travers","Ralph Ellison","Homer"],2],[692,["Dr. Seuss","Emily Bronte","Richard Wright","Anna Sewell"],2],[693,["L. M. Montgomery","Alice Walker","Madeleine L'Engle","Paulo Coelho"],1],[694,["Margaret Atwood","Sara Gruen","Maurice Sendak","Toni Morrison"],3],[695,["Ernest Cline","Brandon Sanderson","R. J. Palacio","Gabriel García Márquez"],3],[696,["Miguel de Cervantes","Ralph Ellison","Ernest Hemingway","Suzanne Collins"],0],[697,["Khaled Hosseini","John Green","Dante Alighieri","Gillian Flynn"],2],[698,["Kathryn Stockett","Lois Lowry","Homer","Emily Bronte"],2],[699,["Miguel de Cervantes","Maurice Sendak","J. D. Salinger","Homer"],3],[700,["P. L. Travers","Geoffrey Chaucer","R. J. Palacio","Sara Gruen"],1],[701,["Ernest Cline","Fyodor Dostoevsky","Veronica Roth","Harper Lee"],1],[702,["Leo Tolstoy","Harper Lee","Richard Wright","Fyodor Dostoevsky"],3],[703,["J. D. Salinger","Alice Walker","Leo Tolstoy","Maurice Sendak"],2],[704,["Khaled Hosseini","Leo Tolstoy","Agatha Christie","Ray Bradbury"],1],[713,["Brandon Sanderson","Arthur Conan Doyle","Louis Sachar","Astrid Lindgren"],1],[714,["Emily Bronte","Toni Morrison","Agatha Christie","Charlotte Brontë"],2],[715,["Paulo Coelho","Charlotte Brontë","Agatha Christie","Margaret Wise Brown"],2],[716,["Margaret Mitchell","Margaret Wise Brown","Arthur Golden","Markus Zusak"],0],[717,["L. Frank Baum","Oscar Wilde","Laura Ingalls Wilder","Emma Donoghue"],0],[718,["P. L. Travers","F. Scott Fitzgerald","Mary Shelley","Astrid Lindgren"],0],[719,["Astrid Lindgren","Joseph Conrad","Dr. Seuss","Charlotte Brontë"],0],[720,["Yann Martel","Roald Dahl","Stieg Larsson","Dr. Seuss"],3],[721,["Joseph Conrad","Dr. Seuss","P. L. Travers","Brandon Sanderson"],1],[722,["P. L. Travers","Maurice Sendak","Anna Sewell","Markus Zusak"],1],[723,["Margaret Wise Brown","Neil Gaiman","Kathryn Stockett","C.S. Lewis"],0],[724,["Eric Carle","John Hughes","Grisham","Maurice Sendak"],0],[725,["Kurt Vonnegut, Jr.","Anna Sewell","Leo Tolstoy","Madeleine L'Engle"],3],[726,["H. G. Wells","Frank Herbert","Stieg Larsson","Lois Lowry"],3],[727,["Dan Brown","Louis Sachar","Oscar Wilde","Suzanne Collins"],1],[728,["Gillian Flynn","Stieg Larsson","R. J. Palacio","Isaac Asimov"],2],[729,["J. M. Barrie","Jeff Kinney","Louisa May Alcott","Victor Hugo"],1],[730,["L. M. Montgomery","Suzanne Collins","Louis Sachar","Geoffrey Chaucer"],1],[731,["Harper Lee","Kenneth Grahame","Dan Brown","Veronica Roth"],3],[732,["Roald Dahl","John Green","Victor Hugo","Suzanne Collins"],1],[733,["Stephenie Meyer","Veronica Roth","George R.R. Martin","Kurt Vonnegut, Jr."],0],[734,["Stephenie Meyer","Louis Sachar","Orson Scott Card","Frank Herbert"],3],[735,["Kenneth Grahame","Isaac Asimov","Joseph Conrad","Eric Carle"],1],[736,["Charles Dickens","Arthur Golden","Isaac Asimov","Arthur Conan Doyle"],2],[737,["Suzanne Collins","Orson Scott Card","Kathryn Stockett","Joseph Conrad"],1],[738,["William Gibson","George R.R. Martin","Jules Verne","Thomas Jefferson"],1],[739,["H. G. Wells","Bram Stoker","Patrick Rothfuss","Kenneth Grahame"],2],[740,["Richard Wright","Kathryn Stockett","Brandon Sanderson","Emma Donoghue"],2],[741,["Neil Gaiman","Kurt Vonnegut, Jr.","Margaret Atwood","Rudyard Kipling"],0],[742,["Neil Gaiman","A. A. Milne","Rudyard Kipling","J.R.R. Tolkien"],0],[743,["Fyodor Dostoevsky","Eric Carle","John Green","Douglas Adams"],3],[744,["William Gibson","Harper Lee","Yann Martel","Kenneth Grahame"],0],[745,["Maurice Sendak","J. M. Barrie","Andy Weir","H. G. Wells"],2],[746,["Madeleine L'Engle","Sara Gruen","Suzanne Collins","Ernest Cline"],3],[747,["Dan Brown","Mary Shelley","Louis Sachar","Andy Weir"],0],[748,["Harper Lee","Stieg Larsson","L. M. Montgomery","Alexandre Dumas"],1],[749,["Gillian Flynn","Dante Alighieri","Arthur Conan Doyle","Khaled Hosseini"],0],[750,["Rudyard Kipling","A. A. Milne","Emily Bronte","Veronica Roth"],1],[751,["Frank Herbert","J. M. Barrie","Victor Hugo","A. A. Milne"],1],[752,["Kurt Vonnegut, Jr.","Fyodor Dostoevsky","Kenneth Grahame","Dr. Seuss"],2],[753,["Grisham","Gillian Flynn","Kurt Vonnegut, Jr.","Roald Dahl"],3],[754,["Nathaniel Hawthorne","Roald Dahl","Ray Bradbury","Lois Lowry"],1],[755,["Veronica Roth","Madeleine L'Engle","Roald Dahl","John Hughes"],2],[756,["Ralph Ellison","Grisham","Roald Dahl","L. Frank Baum"],2],[757,["George R.R. Martin","Robert Louis Stevenson","Dan Brown","L. M. Montgomery"],3],[758,["John Hughes","Zora Neale Hurston","Anna Sewell","Laura Ingalls Wilder"],3],[759,["Arthur Golden","Frances Hodgson Burnett","Kurt Vonnegut, Jr.","Oscar Wilde"],1],[760,["Jack London","Bram Stoker","Khaled Hosseini","Anna Sewell"],3],[761,["L. M. Montgomery","Jack London","Toni Morrison","Douglas Adams"],1],[762,["Charlotte Brontë","Madeleine L'Engle","Margaret Atwood","Jack London"],3],[763,["Maurice Sendak","Grisham","Markus Zusak","Rudyard Kipling"],3],[764,["Arthur Conan Doyle","Agatha Christie","J.R.R. Tolkien","Thomas Jefferson"],2],[765,["J.R.R. Tolkien","Frank Herbert","Jane Austen","Aldous Huxley"],0],[766,["Alexandre Dumas","Gillian Flynn","Brandon Sanderson","C.S. Lewis"],3],[767,["Grisham","Anna Sewell","Margaret Atwood","William Faulkner"],2],[768,["Khaled Hosseini","John Green","Suzanne Collins","Stieg Larsson"],0],[769,["Zora Neale Hurston","Yann Martel","Brandon Sanderson","Frank Herbert"],1],[770,["Homer","Eric Carle","Paulo Coelho","Rudyard Kipling"],2],[771,["C.S. Lewis","Arthur Golden","H. G. Wells","Richard Wright"],1],[772,["Miguel de Cervantes","Markus Zusak","Arthur Conan Doyle","Veronica Roth"],1],[773,["Sara Gruen","Frank Herbert","Lois Lowry","Frances Hodgson Burnett"],0],[774,["Kathryn Stockett","Harper Lee","Brandon Sanderson","Yann Martel"],0],[775,["Dante Alighieri","John Steinbeck","Emma Donoghue","Arthur Golden"],2],[776,["Douglas Adams","Erin Morgenstern","Markus Zusak","Astrid Lindgren"],1],[783,["Vilnius","Reykjavik","Canberra","Prague"],3],[788,["Boston","Austin","Vienna","Belfast"],2],[791,["Jefferson","Pyongyang","Thimphu","Belgrade"],3],[796,["Pretoria","Tallinn","Funafuti","Asunción"],0],[804,["Canberra","Suva","Carl","Tunis"],1],[805,["Amsterdam","Canberra","Reykjavik","Kuwait City"],3],[806,["San Salvador","Santo Domingo","Praia","Abu Dhabi"],3],[810,["Ottawa","Muscat","Thimphu","Bissau"],2],[811,["Port Vila","Minsk","Jerusalem","Bandar Seri Begawan"],3],[818,["Baghdad","Muscat","Dakar","Canberra"],2],[822,["Monrovia","Porto-Novo","Canberra","Panama City"],3],[823,["Asunción","Naypyidaw","Mogadishu","Belmopan"],0],[825,["Havana","Apia","Lima","Canberra"],1],[826,["Copenhagen","Minsk","Port Vila","Santo Domingo"],2],[831,["Madrid","Berlin","Monaco","Tucson"],2],[834,["Windhoek","Santiago","Sarajevo","Ljubljana"],2],[835,["Minsk","Thimphu","Maseru","Moscow"],0],[838,["Stockholm","Ljubljana","Kendrick","Ashgabat"],3],[839,["Jefferson","Maseru","Phnom Penh","Port Louis"],3],[844,["Minsk","Kigali","Lome","maiden"],2],[847,["Yerevan","Maseru","Bissau","Asmara"],1],[849,["Harare","Santo Domingo","Canberra","Praia"],3],[851,["Apia","Santo Domingo","Naypyidaw","Libreville"],1],[852,["Port Louis","Port of Spain","Vote for Pedro","Antananarivo"],1],[853,["Belmopan","Thimphu","Ashgabat","Asunción"],0],[854,["Amsterdam","Canberra","San Salvador","Jerusalem"],2],[858,["Kampala","Funafuti","Jefferson","Asunción"],1],[859,["Rutherford B. Hayes","John F. Kennedy","James Monroe","George Washington"],3],[861,["Jimmy Carter","Millard Fillmore","William McKinley","James Monroe"],3],[862,["George W. Bush","Dwight D. Eisenhower","Andrew Jackson","George Washington"],2],[864,["Harry S. Truman","Jimmy Carter","Calvin Coolidge","James K. Polk"],3],[865,["James Monroe","William Howard Taft","Millard Fillmore","Benjamin Harrison"],2],[866,["Gerald Ford","James Buchanan","Andrew Jackson","Benjamin Harrison"],1],[867,["George Washington","Rutherford B. Hayes","Andrew Johnson","John Tyler"],2],[868,["Andrew Johnson","Thomas Jefferson","Richard Nixon","Rutherford B. Hayes"],3],[869,["Millard Fillmore","Benjamin Harrison","Chester A. Arthur","Martin Van Buren"],2],[870,["Benjamin Harrison","George Washington","Joe Biden","William McKinley"],0],[871,["Donald Trump","William McKinley","Ulysses S. Grant","John Adams"],1],[873,["Abraham Lincoln","William Henry Harrison","Jimmy Carter","Warren G. Harding"],3],[874,["Joe Biden","Herbert Hoover","James K. Polk","Dwight D. Eisenhower"],1],[875,["Harry S. Truman","Jimmy Carter","Chester A. Arthur","Abraham Lincoln"],0],[878,["Jimmy Carter","Herbert Hoover","Lyndon B. Johnson","James K. Polk"],0],[881,["Donald Trump","Jimmy Carter","Martin Van Buren","Herbert Hoover"],0],[882,["Dwight D. Eisenhower","Benjamin Harrison","Donald Trump","Chester A. Arthur"],2],[883,["Evergreen State","Yellowhammer State","Constitution State","Cornhusker State"],1],[885,["Badger State","Hawkeye State","Golden State","Beaver State"],2],[886,["Constitution State","Grand Canyon State","Cornhusker State","Yellowhammer State"],0],[887,["Hawkeye State","Sunshine State","Constitution State","Evergreen State"],1],[888,["Beaver State","Aloha State","Badger State","Golden State"],1],[889,["Prairie State","Show Me State","Granite State","Hawkeye State"],0],[890,["Granite State","Hawkeye State","Tar Heel State","Badger State"],1],[891,["Evergreen State","Beaver State","Sunshine State","Bluegrass State"],3],[892,["Evergreen State","North Star State","Pine Tree State","Lone Star State"],2],[893,["Bay State","Aloha State","Badger State","Golden State"],0],[894,["Pine Tree State","Grand Canyon State","North Star State","Lone Star State"],2],[895,["Show Me State","Green Mountain State","Tar Heel State","Grand Canyon State"],0],[896,["Yellowhammer State","Cornhusker State","Evergreen State","Bluegrass State"],1],[897,["Granite State","Hawkeye State","Buckeye State","Prairie State"],0],[898,["Cornhusker State","Grand Canyon State","North Star State","Land of Enchantment"],3],[899,["Lone Star State","Pine Tree State","Show Me State","Tar Heel State"],3],[900,["Golden State","Sunshine State","Buckeye State","Hawkeye State"],2],[901,["Beaver State","Bluegrass State","Constitution State","Badger State"],0],[902,["Silver State","Ocean State","Peach State","First State"],1],[903,["Constitution State","Land of Enchantment","Mount Rushmore State","Green Mountain State"],2],[904,["Pine Tree State","Lone Star State","Sunshine State","North Star State"],1],[906,["Bluegrass State","Sunshine State","Evergreen State","Cornhusker State"],2],[907,["Hawkeye State","Golden State","Badger State","Beaver State"],2],[983,["South Africa","The Netherlands","Liechtenstein","Vatican City"],3],[985,["Margaret LeAnn Rimes","Diane Warren","Trisha Yearwood","Tammy Wynette"],0],[987,["San Francisco","Garland, Texas","Colorado Springs","Jackson, Mississippi"],3],[988,["Santa Monica","San Francisco","Garland, Texas","Jackson, Mississippi"],2],[989,["Wilbur Rimes","Bill Mack","Trevor Horn","Johnny Cash"],0],[990,["Star Search","The Voice","America's Got Talent","American Idol"],0],[991,["Ronan Keating","The ASCAP Golden Note Award","Everybody's Sweetheart (1991) and All That (1994)","Legally Blonde 2"],2],[992,["Curb Records","Columbia Records","Capitol Records","RCA Records"],0],[993,["13","No. 2","Number 10 (top 10)","No. 3"],0],[994,["Bill Mack","Trevor Horn","Wilbur Rimes","Brad Paisley"],0],[995,["Blue","Lady & Gentlemen","LeAnn Rimes","Today Is Christmas"],0],[997,["Six-times Platinum","Five-times Platinum","Four-times Platinum","Platinum"],0],[998,["Number 10 (top 10)","No. 3","12","No. 17"],0],[999,["Best New Artist and Best Female Country Vocal Performance (for 'Blue')","The ASCAP Golden Note Award","Youngest solo artist to win Best New Artist","Legally Blonde 2"],0],[1000,["14","13","12","No. 2"],0],[1001,["Best New Artist and Best Female Country Vocal Performance (for 'Blue')","The Voice UK (Series 13)","Commitment and Looking Through Your Eyes","Youngest solo artist to win Best New Artist"],3],[1002,["One Way Ticket (Because I Can)","Can't Fight the Moonlight","Probably Wouldn't Be This Way","Unchained Melody"],0],[1003,["Judy Rodman and Keith Hinton","Mushroom (Aloe Blacc) and Crocodile (Nick Carter)","Bon Jovi","The Mermaids"],0],[1004,["Blue","You Light Up My Life: Inspirational Songs","What a Wonderful World","I Need You"],0],[1005,["Unchained Melody","Last Thing on My Mind","I Need You","The Light in Your Eyes"],0],[1006,["Hurt Me and The Light in Your Eyes","Long Live Love and LovE is LovE is LovE","Commitment and Looking Through Your Eyes","Nothin' 'bout Love Makes Sense and Probably Wouldn't Be This Way"],0],[1007,["You Light Up My Life: Inspirational Songs","LeAnn Rimes","Family","Remnants"],0],[1008,["Four-times Platinum","Diamond (ten-times Platinum)","Five-times Platinum","Gold"],0],[1009,["Diane Warren","Margaret LeAnn Rimes","Patsy Cline","Carrie Underwood"],0],[1010,["Con Air","Holiday in Your Heart","Northern Lights","It's Christmas Eve"],0],[1011,["Trisha Yearwood's version","Six-times Platinum","Ronan Keating","Billboard Adult Contemporary chart"],0],[1012,["No. 2","14","Number 10 (top 10)","No. 17"],0],[1014,["Commitment and Looking Through Your Eyes","Everybody's Sweetheart (1991) and All That (1994)","Curb Records","Longest chart run in Hot 100 history at the time"],3],[1015,["Commitment and Looking Through Your Eyes","Six-times Platinum","Legally Blonde 2","Billboard Adult Contemporary chart"],3],[1016,["Sittin' on Top of the World","What a Wonderful World","LeAnn Rimes","Chant: The Human & the Holy"],0],[1017,["Commitment and Looking Through Your Eyes","Nothin' 'bout Love Makes Sense and Probably Wouldn't Be This Way","What Have I Done and Borrowed","Hurt Me and The Light in Your Eyes"],0],[1018,["LeAnn Rimes","Lady & Gentlemen","What a Wonderful World","You Light Up My Life: Inspirational Songs"],0],[1019,["Big Deal","Last Thing on My Mind","Life Goes On","The Light in Your Eyes"],0],[1020,["I Need You","Whatever We Wanna","You Light Up My Life: Inspirational Songs","What a Wonderful World"],0],[1021,["Diane Warren","Margaret LeAnn Rimes","Patsy Cline","Tammy Wynette"],0],[1022,["Trevor Horn","Wilbur Rimes","Bill Mack","Johnny Cash"],0],[1023,["Coyote Ugly","Holiday in Your Heart","It's Christmas Eve","Con Air"],0],[1024,["Dr. Richard Burke","Dixie Bennings","The Cat in the Hat","Piper Perabo's character Violet Sanford"],3],[1025,["Legally Blonde 2","11 countries","Ronan Keating","Elton John"],1],[1026,["Twisted Angel","I Need You","Remnants","Spitfire"],0],[1027,["Life Goes On","Written in the Stars","Big Deal","Long Live Love"],0],[1028,["This Woman","LeAnn Rimes","Family","Today Is Christmas"],0],[1029,["Nothin' 'bout Love Makes Sense and Probably Wouldn't Be This Way","What Have I Done and Borrowed","Commitment and Looking Through Your Eyes","Long Live Love and LovE is LovE is LovE"],0],[1030,["No. 3","No. 17","2","12"],0],[1031,["No. 2","2","No. 17","12"],0],[1032,["Whatever We Wanna","You Light Up My Life: Inspirational Songs","Family","LeAnn Rimes"],0],[1033,["Family","Chant: The Human & the Holy","Blue","Lady & Gentlemen"],0],[1034,["Nothin' Better to Do","The Light in Your Eyes","What Have I Done","One Way Ticket (Because I Can)"],0],[1035,["Lady & Gentlemen","Today Is Christmas","LeAnn Rimes","Chant: The Human & the Holy"],0],[1036,["Swingin'","Looking Through Your Eyes","LovE is LovE is LovE","Blue"],0],[1037,["Spitfire","I Need You","God's Work","Sittin' on Top of the World"],0],[1038,["What Have I Done and Borrowed","Long Live Love and LovE is LovE is LovE","Commitment and Looking Through Your Eyes","Hurt Me and The Light in Your Eyes"],0],[1039,["Remnants","Blue","Lady & Gentlemen","Sittin' on Top of the World"],0],[1040,["Long Live Love and LovE is LovE is LovE","Commitment and Looking Through Your Eyes","Nothin' 'bout Love Makes Sense and Probably Wouldn't Be This Way","What Have I Done and Borrowed"],0],[1041,["God's Work","Whatever We Wanna","You Light Up My Life: Inspirational Songs","Family"],0],[1042,["Throw My Arms Around the World","The Light in Your Eyes","Borrowed","Swingin'"],0],[1043,["Chant: The Human & the Holy","Remnants","Family","LeAnn Rimes"],0],[1044,["Today Is Christmas","This Woman","Blue","Remnants"],0],[1045,["What a Wonderful World","Lady & Gentlemen","Spitfire","God's Work"],0],[1046,["Written in the Stars","Hurt Me","Last Thing on My Mind","Borrowed"],0],[1047,["Till We Ain't Strangers Anymore","Written in the Stars","Blue","Swingin'"],0],[1048,["Last Thing on My Mind","Hurt Me","Long Live Love","The Light in Your Eyes"],0],[1049,["Holiday in Your Heart","Coyote Ugly","Con Air","It's Christmas Eve"],0],[1050,["Northern Lights","Holiday in Your Heart","Con Air","Coyote Ugly"],0],[1051,["It's Christmas Eve","Holiday in Your Heart","Con Air","Coyote Ugly"],0],[1052,["The Sun","Iron Man","Piper Perabo's character Violet Sanford","Dixie Bennings"],0],[1053,["Mushroom (Aloe Blacc) and Crocodile (Nick Carter)","Bon Jovi","Judy Rodman and Keith Hinton","Evanescence"],0],[1054,["The Voice Australia (Season 13) and The Voice UK (Series 13)","The Voice","Star Search","America's Got Talent"],0],[1055,["Dixie Bennings","Geoffrey Butler","Piper Perabo's character Violet Sanford","Buzz Lightyear"],0],[1056,["2","No. 3","12","No. 2"],0],[1057,["12","No. 2","No. 17","2"],0],[1058,["First country artist to win Artist of the Year at the Billboard Music Awards","What Have I Done and Borrowed","The Voice UK (Series 13)","Longest chart run in Hot 100 history at the time"],0],[1059,["More than 48 million","More than 40","69 weeks","More than 50 million"],0],[1060,["No. 17","13","No. 3","14"],0],[1061,["More than 40","More than 48 million","69 weeks","More than 42"],0],[1062,["The ASCAP Golden Note Award","Commitment and Looking Through Your Eyes","What Have I Done and Borrowed","Billboard Adult Contemporary chart"],0],[1063,["Sittin' on Top of the World","God's Work","Twisted Angel","Spitfire"],0],[1064,["2002","2011","2005","1997"],0],[1065,["2005","2011","2022","1999"],0],[1066,["2007","2013","2002","1997"],0],[1067,["2011","2016","2013","2006"],0],[1068,["2013","2005","2011","2006"],0],[1069,["2016","2006","2022","1997"],0],[1070,["2022","1997","2016","2011"],0],[1071,["Joker","1999","The Terror","Friskies"],1],[1072,["2006","2022","2005","2013"],0],[1073,["1997","2007","2002","2013"],0],[1074,["This Woman","You Light Up My Life: Inspirational Songs","Family","Whatever We Wanna"],0],[1075,["Spitfire","Whatever We Wanna","Blue","Chant: The Human & the Holy"],0],[1076,["Twisted Angel","I Need You","Lady & Gentlemen","LeAnn Rimes"],0],[1077,["This Woman","Today Is Christmas","What a Wonderful World","Spitfire"],0],[1078,["This Woman","Spitfire","Family","Twisted Angel"],0],[1079,["Lady & Gentlemen","Twisted Angel","LeAnn Rimes","Spitfire"],0],[1080,["Remnants","Twisted Angel","Today Is Christmas","You Light Up My Life: Inspirational Songs"],0],[1081,["Legally Blonde 2","Ronan Keating","Six-times Platinum","Elton John"],3],[1082,["Ronan Keating","The Sun","Curb Records","Jackson"],0],[1083,["Bon Jovi","Mushroom (Aloe Blacc) and Crocodile (Nick Carter)","Judy Rodman and Keith Hinton","Keith Urban/Nicole Kidman"],0],[1085,["Coyote Ugly","Con Air","Northern Lights","It's Christmas Eve"],0],[1086,["Holiday in Your Heart","Northern Lights","It's Christmas Eve","Con Air"],0],[1088,["It's Christmas Eve","Con Air","Northern Lights","Holiday in Your Heart"],0],[1089,["Legally Blonde 2","The Voice UK (Series 13)","Best Female Country Vocal Performance","Trisha Yearwood's version"],2],[1090,["Bill Mack","Trevor Horn","Wilbur Rimes","Brad Paisley"],0],[1091,["Mississippi","Michigan","Oregon","Minnesota"],0],[1092,["Jackson","Four-times Platinum","Curb Records","Ronan Keating"],0],[1093,["Star Search","The Voice","American Idol","The Voice Australia (Season 13) and The Voice UK (Series 13)"],0],[1094,["What Have I Done and Borrowed","The Voice UK (Series 13)","Ronan Keating","Legally Blonde 2"],1],[1095,["Diane Warren","Star Search","Michael Gambon","Joker"],0],[1096,["Can't Fight the Moonlight","Unchained Melody","Throw My Arms Around the World","Borrowed"],0],[1097,["I Need You","What a Wonderful World","Sittin' on Top of the World","Chant: The Human & the Holy"],0],[1098,["Spartacus","Quest for Camelot","The Voice Australia (Season 13) and The Voice UK (Series 13)","Trig Tales Etc"],1],[1099,["Curb Records","Capitol Records","RCA Records","Warner Music Nashville"],0],[1100,["13","No. 17","2","Number 10 (top 10)"],0],[1101,["1997","2013","2007","2006"],0],[1102,["Today Is Christmas","Blue","Spitfire","I Need You"],0],[1103,["Ronan Keating","Legally Blonde 2","Four-times Platinum","Elton John"],1],[1144,["Woody", "Buzz Lightyear", "Lotso", "Jessie"],0],[1308,["Brian","puppy","Pluto","Copper"],1],[1309,["kitten","gosling","tadpole","piglet"],3],[1310,["cub","duckling","foal","pup"],0],[1312,["fry","calf","lamb","foal"],1],[1316,["chick","larva","kitten","fry"],1],[1327,["Paris","London","Tokyo","Boise"],2],[1328,["Vancouver","Kyoto","Ottawa","Montreal"],2],[1329,["Houston","London","Dallas","Austin"],3],[1330,["Toronto","Houston","London","Phoenix"],0],[1331,["San Diego","Sacramento","Osaka","Kyoto"],1],[1336,["Zagreb","Lisbon","Kyoto","Valletta"],0],[1338,["Pierre","Montgomery","Kyoto","Olympia"],1],[1339,["Phoenix","Toronto","Atlanta","Houston"],0],[1340,["Santa Fe","Tokyo","Paris","Boise"],3],[1341,["Madison","Springfield","Kyoto","Salt Lake City"],3],[1343,["Madrid","Dallas","London","Austin"],2],[1344,["Madrid","London","Dublin","Berlin"],3],[1345,["Boise","Tokyo","Rome","Paris"],2],[1346,["Austin","Madrid","Dallas","London"],1],[1347,["Kyoto","Beijing","Ulaanbaatar","Seoul"],1],[1351,["London","Dublin","Berlin","Madrid"],1],[1353,["Dallas","Madrid","Vienna","London"],2],[1360,["Honolulu","Columbus","Kyoto","Osaka"],1],[1361,["Madrid","Phoenix","London","Boston"],3],[1362,["Toronto","Atlanta","Denver","Boston"],1],[1368,["Lansing","Montpelier","Kyoto","Madison"],3],[1428,["Johnny Depp","Tom Cruise","Robert Downey Jr","Brad Pitt"],3],[1474,["Ontario","Nunavut","New Brunswick","Quebec"],0],[1808,["Euro","Ariary","Vatu","Nepalese rupee"],0],[1817,["Kwanza","Ariary","Vatu","Nepalese rupee"],0],[1826,["Vatu","Ariary","Nepalese rupee","Metical"],3],[1835,["Vatu","Nepalese rupee","Ariary","Leu"],3],[1848,["calf","joey","lamb","foal"],2],[1849,["fry","tadpole","gosling","kitten"],2],[1850,["gosling","pup","cub","piglet"],2],[1852,["kid","pup","fry","joey"],1],[1854,["piglet","pup","fry","gosling"],1],[1856,["larva","chick","kitten","calf"],0],[1875,["Melbourne","Kyoto","Perth","Canberra"],3],[1879,["Albany","Salem","Rochester","Buffalo"],0],[1892,["Pyongyang","Beijing","Ulaanbaatar","Seoul"],3],[1895,["Manat","Zagreb","Stockholm","Guinean franc"],2],[1897,["Atlanta","Denver","Phoenix","London"],1],[1899,["Albany","Salem","Olympia","Montgomery"],2],[1900,["Ottawa","Kyoto","Charlottetown","Winnipeg"],3],[1901,["Halifax","Houston","Toronto","Phoenix"],0],[1904,["Oslo","Kyoto","Sofia","Minsk"],2],[1907,["Seoul","Beijing","Shilling","Ulaanbaatar"],3],[1909,["Kyoto","Salem","Montgomery","Carson City"],1],[1911,["Frankfort","Kyoto","Osaka","Trenton"],3],[1917,["Toronto","Singapore","Houston","Phoenix"],1],[1921,["Won","Ulaanbaatar","Seoul","Pyongyang"],3],[1995,["Brad Pitt","Tom Cruise","Johnny Depp","Robert Downey Jr"],1],[1997,["Brad Pitt","Tom Cruise","Johnny Depp","Robert Downey Jr"],2],[2055,["Louvre","Sumatra","Borneo","Manitoba"],3],[2232,["Na","Sd","Calcium","So"],0],[2236,["Treaty of Trianon","Treaty of Paris","Treaty of Versailles","Mandarin Chinese"],3],[2351,["calf","lamb","foal","tadpole"],2],[2352,["pup","larva","fry","kid"],3],[2353,["kitten","fry","kid","pup"],3],[2354,["joey","gosling","calf","foal"],0],[2356,["foal","calf","piglet","gosling"],0],[2357,["kid","pup","cub","fry"],2],[2359,["pup","fry","kid","lamb"],1],[2377,["Moscow","Zagreb","Podgorica","Kyoto"],2],[2385,["Vaduz","Kyoto","Helsinki","Kyiv"],2],[2386,["Athens","Budapest","Sofia","Kyoto"],1],[2388,["Albany","Helena","Kyoto","Juneau"],1],[2389,["Juneau","Tallahassee","Osaka","Kyoto"],0],[2390,["Edmonton","Regina","Kyoto","Osaka"],1],[2395,["Kyoto","Bucharest","Minsk","Belgrade"],2],[2403,["Frankfort","Kyoto","Tallahassee","Augusta"],3],[2404,["Los Angeles","San Francisco","Santa Fe","Toronto"],2],[2409,["Kyoto","Cheyenne","Osaka","Frankfort"],1],[2526,["Jon Hamm","Jason Clarke","Wil Wheaton","Robert Downey Jr"],1],[2531,["Keith Urban/Nicole Kidman","The Duggars","Pink Floyd","The Beach Boys"],0],[2550,["Saskatchewan","Alberta","Northwest Territories","Ontario"],0],[2779,["Tibia","Heart","Liver","Colon"],3],[2785,["Lek","Ariary","Nepalese rupee","Brunei dollar"],0],[2793,["Brunei dollar","Jamaican dollar","Ariary","Nepalese rupee"],1],[2797,["duckling","calf","cub","foal"],1],[2798,["kitten","gosling","duckling","tadpole"],2],[2799,["larva","Butterflies","caterpillar","lamb"],2],[2801,["lamb","foal","calf","cub"],2],[2803,["calf","kid","lamb","foal"],3],[2804,["pup","kid","fry","chick"],0],[2833,["Tallinn","Warsaw","Vilnius","Kyoto"],2],[2834,["Kyiv","Ljubljana","Brussels","Kyoto"],1],[2840,["Helena","Kyoto","Olympia","Dover"],3],[2842,["Valletta","Moscow","Kyoto","Lisbon"],0],[2843,["Tallinn","Nicosia","Osaka","Kyoto"],1],[2864,["Madrid","Monaco","Dallas","London"],1],[2876,["Jane Austen","Charlotte Brontë","Emily Bronte","Mary Shelley"],0],[2879,["Frankenstein","The Texas Chain Saw Massacre","Nosferatu","The Cabinet of Dr. Caligari"],2],[2912,["Brad Pitt","Johnny Depp","Tom Cruise","Robert Downey Jr"],3],[2925,["Keith Urban/Nicole Kidman","The Duggars","Pink Floyd","The Beach Boys"],1],[2937,["The Beach Boys","The Duggars","Pink Floyd","Keith Urban/Nicole Kidman"],2],[2983,["Ontario","Northwest Territories","Nunavut","Quebec"],2],[3039,["Greenland","Argentina","Australia","Indonesia"],0],[3292,["Gold","Argon","Oxygen","Nitrogen"],3],[3364,["ammonia","ethanol","nitric acid","HCl"],0],[3365,["HCl","sulfur dioxide","sulfuric acid","HNO3"],2],[3366,["HCl","phosphoric acid","ozone","nitric acid"],3],[3368,["sodium carbonate (washing soda)","sucrose (table sugar)","iron(III) oxide (rust)","acetic acid (vinegar)"],3],[3369,["calcium oxide (quicklime)","calcium carbonate (limestone)","iron(III) oxide (rust)","potassium nitrate (saltpetre)"],1],[3370,["nitrous oxide (laughing gas)","calcium hydroxide (slaked lime)","potassium nitrate (saltpetre)","sodium carbonate (washing soda)"],0],[3372,["ethanol","nitric acid","nitrogen dioxide","HCl"],2],[3373,["sodium carbonate (washing soda)","calcium hydroxide (slaked lime)","sodium bicarbonate (baking soda)","nitrous oxide (laughing gas)"],1],[3374,["HNO3","HCl","phosphoric acid","ozone"],2],[3380,["copper(II) sulfate","sodium hydroxide","HCl","hydrogen peroxide"],0],[3381,["calcium carbonate (limestone)","potassium nitrate (saltpetre)","calcium oxide (quicklime)","iron(III) oxide (rust)"],1],[3382,["HNO3","sulfur dioxide","acetone","HCl"],2],[3391,["Oxygen","Hydrogen","Chlorine","Cerium"],1],[3393,["The number of electrons it has lost","A chemical bond formed by sharing electrons","A substance of two or more elements chemically joined","A substance that speeds up a reaction without being used up"],2],[3409,["Oxygen","Uranium","Helium","Nitrogen"],2],[3429,["Nitrogen","Hydrogen","Scandium","Oxygen"],3],[3450,["SO2","O2","O3","O4"],2],[3471,["A substance of two or more elements chemically joined","A liquid used to dissolve metals","A gas released by burning","A substance that speeds up a reaction without being used up"],3],[3472,["Distillation","The number of protons in its nucleus","The number of neutrons in its nucleus","Its total mass"],1],[3475,["The number of electrons it has lost","A substance of two or more elements chemically joined","A liquid used to dissolve metals","A chemical bond formed by sharing electrons"],3],[3772,["Carbon dioxide","Oxygen","Nail","Tooth enamel"],3],[3805,["The Moon","The Sun","Sublimation","Volcanoes"],1],[3815,["Koala","Mouse","Panda","Kangaroo"],1],[3816,["Chimpanzee","Armadillo","Kangaroo","Amphibians"],0],[3817,["Kangaroo","Eagle","Panda","Koala"],1],[3818,["Sparrow","Ostrich","Chicken","Rhea"],1],[3878,["Nail","Oxygen","Cartilage","Tooth enamel"],3],[3939,["Great white shark","Elephant seal","The bowhead whale","Titan and Rhea"],2],[3941,["Golden eagle","The ostrich","Ostrich","Rhea"],1],[3942,["Rhea","Peregrine falcon","Ostrich","The wandering albatross"],3],[3948,["The octopus","Blue whale","Chimpanzees","Elephant seal"],0],[3953,["Reptiles","Kangaroo","Amphibians","Mammals"],0],[4006,["Larynx","The epiglottis","Hypotension","Pharynx"],0],[4092,["Iron","Actinium","Calcium","Iodine"],3],[4093,["Zinc","Iodine","Iron","Neon"],1],[4147,["Frog","Raccoons","Lion","Dogs"],3],[4159,["Botulinum","Vibrio","Listeria","HPV (human papillomavirus)"],3],[4176,["Liver","Heart","Brain","Bones"],3],[4225,["Tibia","Liver","Femur","Humerus"],2],[4248,["Avengers: Endgame","Avatar","Titanic","'Star Wars: The Force Awakens'"],1],[4251,["Captain America","Mary Poppins","Iron Man","Peter Pan"],0],[4254,["Star Wars","Star Trek","Unchained Melody","Battlestar Galactica"],0],[4265,["Atari","Commodore","Sega","Nintendo"],3],[4273,["Charlotte Brontë","Emily Bronte","Jane Austen","J.K. Rowling"],3],[4278,["Iron Man","Mary Poppins","Captain America","Peter Pan"],0],[4280,["Claire Danes","Emily Bronte","Charlotte Brontë","Jane Austen"],3],[4283,["Charlotte Brontë","Agatha Christie","Emily Bronte","J.K. Rowling"],0],[4284,["Charlotte Brontë","Anne Brontë","Jane Austen","Emily Bronte"],3],[4292,["Billy Crystal","George R.R. Martin","Harrison Ford","Charles Dickens"],3],[4296,["Oscar Wilde","C.S. Lewis","Ian Fleming","J.R.R. Tolkien"],0],[4304,["Louis Sachar","Miguel de Cervantes","Sara Gruen","F. Scott Fitzgerald"],3],[4306,["Lois Lowry","John Steinbeck","Frank Herbert","Khaled Hosseini"],1],[4310,["George Orwell","James Cameron","J.R.R. Tolkien","Ridley Scott"],0],[4311,["Ian Fleming","Ray Bradbury","Paulo Coelho","Neil Gaiman"],1],[4315,["Joseph Conrad","Khaled Hosseini","Robin Williams","William Faulkner"],3],[4316,["Emma Donoghue","William Faulkner","Sara Gruen","Bram Stoker"],1],[4317,["Rudyard Kipling","Ralph Ellison","Zora Neale Hurston","Dante Alighieri"],2],[4320,["John Steinbeck","Alice Walker","Gabriel García Márquez","Victor Hugo"],1],[4331,["Leo Tolstoy","Margaret Atwood","Ralph Ellison","A. A. Milne"],0],[4332,["Victor Hugo","George R.R. Martin","Charles Dickens","Johnny Depp"],0],[4333,["Sean Connery","Victor Hugo","C.S. Lewis","Johnny Depp"],1],[4335,["Alexandre Dumas","Robin Williams","C.S. Lewis","Gustave Flaubert"],0],[4336,["Steven Spielberg","Christian Bale","George R.R. Martin","Alexandre Dumas"],3],[4341,["Charlotte Brontë","Agatha Christie","Emily Bronte","Mary Shelley"],1],[4344,["Andy Weir","L. Frank Baum","Douglas Adams","John Green"],1],[4345,["Lois Lowry","A. A. Milne","Herman Melville","P. L. Travers"],3],[4347,["Jules Verne","C.S. Lewis","Dr. Seuss","Roald Dahl"],2],[4354,["Louis Sachar","Joseph Conrad","Sean Connery","Ralph Ellison"],0],[4355,["Miguel de Cervantes","Isaac Asimov","R. J. Palacio","Anna Sewell"],2],[4359,["Toni Morrison","John Green","Madeleine L'Engle","Dr. Seuss"],1],[4365,["James Cameron","George R.R. Martin","Roald Dahl","Arthur Conan Doyle"],1],[4368,["Emma Donoghue","Neil Gaiman","J. M. Barrie","Khaled Hosseini"],1],[4369,["Sara Gruen","Frances Hodgson Burnett","Neil Gaiman","A. A. Milne"],2],[4371,["Markus Zusak","Frances Hodgson Burnett","Aldous Huxley","William Gibson"],3],[4372,["William Faulkner","Robert Louis Stevenson","George R.R. Martin","Andy Weir"],3],[4374,["Dan Brown","Ernest Hemingway","H. G. Wells","Victor Hugo"],0],[4382,["George R.R. Martin","Tom Cruise","Roald Dahl","Oscar Wilde"],2],[4388,["Homer","H. G. Wells","Jack London","Erin Morgenstern"],2],[4391,["J.R.R. Tolkien","Oscar Wilde","Martin Scorsese","George R.R. Martin"],0],[4392,["C.S. Lewis","J.R.R. Tolkien","Gustave Flaubert","Christian Bale"],1],[4393,["Alexandre Dumas","Victor Hugo","C.S. Lewis","Jared Leto"],2],[4394,["Orson Scott Card","Margaret Atwood","Alexandre Dumas","Miguel de Cervantes"],1],[4395,["Fyodor Dostoevsky","Khaled Hosseini","Zora Neale Hurston","Leo Tolstoy"],1],[4396,["Lois Lowry","Johnny Depp","Gabriel García Márquez","Yann Martel"],3],[4401,["Neil Gaiman","Herman Melville","Kathryn Stockett","Jeff Kinney"],2],[4408,["Spider-Man","Dracula","Superman","Batman"],1],[4410,["The Jungle Book","Dune","Jane Eyre","Holes"],0],[4413,["Animal Farm","Neuromancer","Jane Eyre","Little House on the Prairie"],0],[4414,["The Catcher in the Rye","Anne of Green Gables","The Hobbit","Jane Eyre"],0],[4422,["Jane Eyre","Madame Bovary","Native Son","The Odyssey"],1],[4423,["Jane Eyre","War and Peace","Around the World in Eighty Days","The Hound of the Baskervilles"],2],[4428,["Jane Eyre","The Very Hungry Caterpillar","Little House on the Prairie","Neuromancer"],1],[4429,["Jane Eyre","The Giver","Anne of Green Gables","The Hobbit"],1],[4439,["Jane Eyre","Native Son","The Girl with the Dragon Tattoo","The Odyssey"],2],[4440,["Dracula","Winnie-the-Pooh","Superman","Spider-Man"],1],[4441,["Anna Karenina","The Wind in the Willows","Jane Eyre","Twenty Thousand Leagues Under the Seas"],1],[4450,["Emma","The Night Circus","Little Women","Jane Eyre"],1],[4465,["Fur Elise","The Black Pirate","Tom Hanks","Till We Ain't Strangers Anymore"],2],[4469,["Richard Burton","Bonnie Wright","Ian McKellen","Richard Harris"],3],[4470,["Michael Gambon","Halloween","1999","The Fabelmans"],0],[4487,["Arnold Schwarzenegger","Conclave","House on Haunted Hill","God's Work"],0],[4529,["Talia Shire","Sissy Spacek","Bonnie Wright","Diane Keaton"],0],[4540,["Titan and Rhea","Michael J. Fox","Brad Bird","Tony the Tiger"],1],[4592,["Harrison Ford","Leonardo DiCaprio","Robin Williams","Robert Downey Jr"],3],[4635,["Mariah Carey","Emily Bronte","Christina Ricci","Whitney Houston"],3],[4680,["America's Got Talent","One Way Ticket (Because I Can)","Aretha Franklin","Sherlock Jr."],2],[4698,["Van Halen","Journey","Nirvana","Hans Zimmer"],0],[4699,["REO Speedwagon","Nirvana","Journey","Styx"],2],[4700,["Nirvana","Soundgarden","Toto","Journey"],2],[4703,["Journey","Nirvana","Stone Temple Pilots","Styx"],3],[4704,["Styx","Journey","REO Speedwagon","Nirvana"],0],[4748,["Black Sheep","Glass Tiger","Bird","Fish"],2],[4765,["Led Zeppelin","Eegah","Twisted Angel","Something's Gotta Give"],0],[4772,["Howlin' Wolf","Iron Butterfly","Modest Mouse","Black Sheep"],1],[4796,["Foreigner","Foghat","Queen","Coldplay"],0],[4797,["Nirvana","Journey","Styx","REO Speedwagon"],3],[4805,["Indianapolis Colts","Miami Dolphins","Dallas Cowboys","Eagles"],3],[4812,["Survivor","Journey","Toto","Nirvana"],0],[4819,["Howlin' Wolf","Black Sheep","Modest Mouse","Glass Tiger"],3],[4844,["Wilson Phillips","The Temptations","The Bangles","En Vogue"],0],[4845,["En Vogue","The Supremes","Destiny's Child","The Temptations"],0],[4847,["Jeannie C. Riley", "Skeeter Davis", "Lynn Anderson", "Sammi Smith"],0],[4848,["Soundgarden","En Vogue","Salt-N-Pepa","Nirvana"],2],[4864,["En Vogue", "Destiny's Child", "The Supremes", "TLC"],0],[4867,["Eightball & MJG","Nirvana","OutKast","Goodie Mob"],2],[4868,["Eminem","Ja Rule","Snoop Dogg","Jay-Z"],0],[4889,["Black Sheep","Howlin' Wolf","Glass Tiger","Modest Mouse"],3],[4924,["The Temptations","The Runaways","Fanny","The Go-Go's"],1],[4925,["Colon","Heart","Tibia","Liver"],1],[4935,["Backstreet Boys","The Temptations","Boyz II Men","98 Degrees"],0],[4976,["St. Louis","Reno","Monaco","Las Vegas"],3],[5011,["Aflac","The beef industry","Prudential","MetLife"],0],[5017,["Boo Berry","Honey Smacks","Franken Berry","Count Chocula"],3],[5020,["Honey Smacks","Franken Berry","Sugar Crisp","Corn Pops"],0],[5022,["Jif","Planters","Skippy","Atlantic City"],0],[5039,["Barq's","Mug","A&W","Checkers"],2],[5042,["Tim Hortons","Smashburger","Daylight Donuts","Krispy Kreme"],3],[5052,["Jersey Mike's","Whataburger","In-N-Out Burger","Culver's"],2],[5053,["Dairy Queen","Arby's","Sonic","Qdoba"],2],[5054,["Burger King","Taco Bell","Jimmy John's","Dairy Queen"],3],[5055,["Ben & Jerry's","Checkers","Häagen-Dazs","Baskin-Robbins"],3],[5060,["Arby's","KFC","Qdoba","Popeyes"],1],[5061,["KFC","Quiznos","Wendy's","Popeyes"],3],[5062,["Chick-fil-A","KFC","Popeyes","Whataburger"],0],[5063,["Olive Garden","Red Lobster","TGI Fridays","Outback Steakhouse"],1],[5065,["Outback Steakhouse","TGI Fridays","Red Lobster","Olive Garden"],3],[5066,["TGI Fridays","Applebee's","Red Lobster","Chili's"],3],[5067,["Outback Steakhouse","Olive Garden","Red Lobster","LongHorn Steakhouse"],0],[5069,["Denny's","Perkins","Bob Evans","Waffle House"],0],[5070,["Waffle House","Second Cup","Denny's","Hudson's"],0],[5073,["Chevrolet","Toyota","Volkswagen","Ford"],0],[5081,["Motel 6","Best Western","Days Inn","Holiday Inn"],3],[5084,["Enterprise","The beef industry","Amazon","National"],0],[5094,["Mercedes-Benz","Chevrolet","Volkswagen","Ford"],2],[5103,["Ben & Jerry's","Ram","Dove","Häagen-Dazs"],2],[5106,["Schick","Gillette","Ram","Harry's"],1],[5112,["StarKist","Chicken of the Sea","Farmers Insurance","Genova"],2],[5115,["American Express","Capital One","Chase","Mastercard"],1],[5120,["UPS","USPS","DHL","FedEx"],0],[5122,["T-Mobile","Sprint","Verizon","AT&T"],0],[5127,["Tony the Tiger","Chester Cheetah","Wild Turkey","Church's Chicken"],1],[5128,["Atlantic City","Jif","Skippy","MetLife"],3],[5129,["Sugar Bear","Bumble Bee","Red Robin","Camel"],3],[5133,["Tylenol","Advil","Bayer Aspirin","Alka-Seltzer"],1],[5135,["Tang","7 Up","SunnyD","Kool-Aid"],1],[5138,["Bubble Yum","Doublemint gum","The beef industry","The pork industry"],1],[5139,["Sugar Bear","Wild Turkey","Red Robin","Bumble Bee"],2],[5178,["Christmas","Easter","Introduction","Thanksgiving"],3],[5187,["Pepsi","Coca-Cola","Sprite","Surge"],1],[5374,["A river","An elevator","A train","A road"],3],[5470,["Giant squid","An oyster","An elephant","An African lion"],2],[5533,["Wishbone","Huckleberry Hound","A hot dog","Slinky Dog"],2],[5539,["Vermont","Tennessee","Georgia","Mississippi"],3],[5563,["Judo","Wrestling","Karate","Taekwondo"],3],[5572,["Running","Rowing","Skiing","Cycling"],0],[5627,["60 feet 6 inches","9.58 seconds","9.63 seconds","55 feet 6 inches"],0],[5670,["Polo","Lacrosse","Cricket","Running"],2],[5676,["Rugby union","Australian rules football","Rugby league","Rock climbing"],0],[5681,["Croquet","Pole vault","Shooting","High jump (athletics)"],3],[5685,["Rowing","Skiing","Cycling","Running"],3],[5704,["Fencing","Judo","Running","Archery"],0],[5722,["Running","Cycling","Cricket","Baseball"],2],[5727,["Rugby league only","Athletic Bilbao","Sevilla","Soccer (football)"],3],[5758,["Taekwondo","Gymnastics","Volleyball","Basketball"],3],[5760,["London","Berlin","Paris","Rome"],1],[5805,["Bogotá","Mexico City","Lima","Quito"],1],[5811,["Euphrates River","Calligraphy","Hieroglyphs","Cuneiform"],2],[6084,["Running","Cycling","Swimming","Surfing"],3],[6091,["Family","Sittin' on Top of the World","Teenagers from Outer Space","The Giant Gila Monster"],0],[6109,["Monk seal","Wild pig","Kalua pig","Axis deer"],2],[6117,["Leatherback turtle","Hawaiian monk seal","Green sea turtle","Loggerhead turtle"],1],[6174,["John A. Macdonald","Vikings (Norse)","Wilfrid Laurier","Whooping crane"],1],[6179,["Lake Huron","Arthur Meighen","Lake Superior","Lake Erie"],2],[6202,["The Weeknd","Michael Bublé","Montmorency Falls","Justin Bieber"],1],[6209,["Snowy owl","Polar bear","Terry Fox","Black bear"],2],[6220,["Toronto","Calgary","Phoenix","Atlanta"],1],[6222,["Colorado Rockies","Houston Astros","Toronto Blue Jays","Milwaukee Brewers"],2],[6223,["Toronto Raptors","Charlotte Hornets","Sacramento Kings","Washington Wizards"],0],[6230,["The beaver","Polar bear","Snow goose","Black bear"],0],[6231,["Puffin","Bald eagle","The loon","Snowy owl"],2],[6236,["Inuktitut","Cree","Ojibwe","John A. Macdonald"],0],[6237,["Wolverine","Moose","Caribou","Otter"],1],[6242,["Black bear","Polar bear","Grizzly bear","Canada lynx"],3],[6243,["Mink","Otter","Beluga","Beaver"],3],[6244,["Vancouver","Montreal","Calgary 1988","Calgary"],1]];
(function bakeStage1(){
  BAKED_TRAV=bakedTraversal();
  /* Both stages are validated here, before anything is applied: if
     either diff is malformed, nothing is applied and the original
     passes run in their original order (the stage-2 fallback then
     continues the same seeded stream the passes always used). */
  if(BAKED_TRAV.length!==6246 || !bakedDiffValid(BAKED1, 672) || !bakedDiffValid(BAKED2, 1060)){ BAKED_FAILED=true; }
  if(BAKED_FAILED){
    enforceGenderChoices();
    ALL_MC_QUESTIONS.forEach(function(q){ if(!mcChoicesValid(q)) fixMCQuestion(q, ALL_MC_QUESTIONS); });
    KIND_ENFORCE_STATS=enforceKindChoices();
    INDUSTRY_ENFORCE_STATS=enforceIndustryChoices();
    DJ_SUBKIND_STATS=enforceDJSubkinds();
    return;
  }
  bakedApply(BAKED1);
})();

/* ================= SAME-KIND / SAME-SUBJECT GUARANTEE =================
   The final distractor pass, run once at load after every other
   pass, over every multiple-choice question in every pool — and
   backed by a deal-time filter (mcDealable, applied in the dealers
   below), so the promise holds for dealt sets, not just stored
   ones.

   Why this pass exists: the broad kind pass sorts answers into
   kinds (person, country, number, "other"…), but its catch-all
   "other" still mixes finer kinds that give a question away the
   moment they share a set. "Since 1967 Sweden switched to driving
   on what side" dealt hamms (a beer brand), gma (an acronym), and
   owls (birds) next to right — only one choice was even a side, so
   the question was solvable by elimination alone, exactly like the
   Tom and Jerry dog set and the I-40 set before it. Those were
   patched case by case; this pass closes the loophole itself:

   - Every answer is classified by kind AND subkind, using the
     clue/question as well as the answer string: direction/side,
     compass point, colour, animal (with bird, fish, and
     young-animal sub-subkinds), brand (by narrow industry —
     including the Trivia Sheet's own brand spellings, which the
     industry tables spell differently), dog/cat character,
     city/state/country/continent/other place, person (gender,
     plus DJ subject domain where the sheet gives one), group,
     date, number, quantity, element symbol, acronym, and title.
   - STRICT FORM: when the answer has a definite subkind, every
     distractor must share that exact subkind — a side answer
     deals only sides, an animal only animals, a brand only
     brands of its industry, a city only cities.
   - AGREEMENT FORM: when the answer is a generic word with no
     definite subkind, no distractor may carry a definite subkind
     of its own — a brand, an acronym, a dog or cat character, a
     city, or a state never sits as filler next to a plain word.
     (A bare animal word is a plain common noun and is treated as
     one; animal answers are bound by the strict form instead.)
   - EXCLUSION: a question that cannot field three same-subkind
     distractors — from the game's own strings, from the verified
     subkind pools, or from generated in-kind alternatives — is
     excluded from multiple-choice dealing entirely (q.mcExcluded).
     It is NOT deleted: it stays in its bank and remains available
     wherever questions are converted to typed form (Round 4),
     where a single typed answer needs no distractors. The Sweden
     question is the model case: a side has only one true
     alternative ("left"), so it can never honestly field three
     side distractors, and it no longer deals as multiple choice. */

/* Direction / side words: a driving-side answer's own kind. The
   honest pool is two words long, which is precisely why the Sweden
   question is excluded rather than filled. */
var SIDE_NORM={"left":1,"right":1,"left side":1,"right side":1,"left hand side":1,"right hand side":1,"left hand":1,"right hand":1};
var COMPASS_NORM={"north":1,"south":1,"east":1,"west":1,"northeast":1,"northwest":1,"southeast":1,"southwest":1,"north east":1,"north west":1,"south east":1,"south west":1};
var COMPASS_NAMES=["North","South","East","West","Northeast","Northwest","Southeast","Southwest"];
/* Animals, singular forms; plurals match by stripping a final "s"
   (or "ies" -> "y"), and a multiword name matches on its last word
   ("giant squid", "great white shark"). Verified common animals —
   the replacement pool for animal answers, and the classifier that
   keeps an animal from sitting as filler next to a kind that is
   not one. */
var ANIMAL_NAMES=["Dog","Cat","Bird","Fish","Horse","Cow","Pig","Sheep","Goat","Deer","Bear","Wolf","Fox","Lion","Tiger","Elephant","Monkey","Rabbit","Mouse","Rat","Snake","Frog","Toad","Lizard","Turtle","Shark","Whale","Dolphin","Octopus","Squid","Crab","Shrimp","Lobster","Ant","Bee","Wasp","Butterfly","Moth","Spider","Scorpion","Beetle","Worm","Snail","Slug","Bat","Owl","Eagle","Hawk","Falcon","Crow","Raven","Pigeon","Duck","Goose","Swan","Chicken","Rooster","Hen","Turkey","Peacock","Penguin","Ostrich","Moose","Bison","Buffalo","Camel","Donkey","Mule","Ox","Yak","Llama","Alpaca","Kangaroo","Koala","Panda","Zebra","Giraffe","Hippo","Rhino","Cheetah","Leopard","Jaguar","Lynx","Otter","Beaver","Raccoon","Skunk","Squirrel","Chipmunk","Hedgehog","Porcupine","Armadillo","Sloth","Gorilla","Chimpanzee","Orangutan","Baboon","Lemur","Hyena","Jackal","Coyote","Mink","Ferret","Weasel","Badger","Wolverine","Platypus","Echidna","Seahorse","Jellyfish","Starfish","Clam","Oyster","Mussel","Trout","Salmon","Bass","Pike","Perch","Cod","Tuna","Herring","Sardine","Anchovy","Eel","Sturgeon","Piranha","Barracuda","Marlin","Swordfish","Flounder","Halibut","Sole","Hamster","Gerbil","Mollusk","Minnow","Tadpole","Newt","Gecko","Iguana","Boa","Python","Cobra","Viper","Vole","Shrew","Lark","Finch","Sparrow","Robin","Wren","Stork","Crane","Heron","Ibis","Kiwi","Emu","Rhea","Orca","Seal","Walrus","Manatee","Narwhal","Beluga","Caribou","Reindeer","Elk","Wombat","Meerkat","Dragonfly","Anteater","Aardvark","Wildebeest","Gazelle","Okapi","Caterpillar","Insect","Reptile","Amphibian","Mammal"];
var ANIMAL_NORM={};
ANIMAL_NAMES.forEach(function(x){ ANIMAL_NORM[norm(x)]=1; });
/* ================= PAIR-OF-ANIMALS ANSWERS =================
   An answer that names TWO animals ("platypus and echidna") is
   its own subkind, "pair:animal": its only honest company is
   other pairs of animals — never a band, a singer duo, or a
   phrase that merely contains "and". A string reads as a pair of
   animals when it is one of the verified pairs below, or when
   both of its " and " halves are animal names in their own right.
   The pool doubles as the repair pool for the subkind (see
   SUBKIND_POOLS2): every entry is two real, well-known animals. */
var PAIR_ANIMAL_STRINGS=["platypus and echidna","lion and tiger","beaver and otter","wolf and fox","cat and dog","horse and donkey","shark and dolphin","eagle and owl","frog and toad","mouse and rat","goat and sheep","duck and goose","bee and butterfly","snake and lizard","whale and shark","bear and wolf","deer and rabbit","fox and coyote"];
var PAIR_ANIMAL_NORM={};
PAIR_ANIMAL_STRINGS.forEach(function(x){ PAIR_ANIMAL_NORM[norm(x)]=1; });
/* Animal words that are also ordinary terms elsewhere — a golf
   score (eagle), a baseball bat, a construction crane, a millennium
   falcon. These never classify as animals from the string alone;
   an animal reading needs an animal clue (see subKindAnswer). */
var ANIMAL_HOMONYM={"eagle":1,"bat":1,"crane":1,"duck":1,"bass":1,"pike":1,"perch":1,"sole":1,"slug":1,"hawk":1,"mole":1,"falcon":1};
/* Animal names the word tables can't reach: a two-word species
   whose last word is not itself an animal, and a borrowed name. */
var ANIMAL_PHRASE_NORM={"colugo":1,"sugar glider":1};
/* ================= ENUMERABLE-KIND TABLES =================
   Closed, verifiable vocabularies for the answer kinds that used
   to fall into the generic catch-all while their questions were
   anything but generic: languages, body parts/organs, and sport
   names are each a finite list a set can be checked against, the
   same pattern as the animal and colour tables. An answer in one
   of these lists now takes that subkind and deals only its own
   kind — the Trivia Sheet's "spanish" no longer sits next to
   "shamballa" and "baker", its "Ear" (the tragus clue) no longer
   sits next to "Q", "Jefferson", and "tornado", and its trophy
   clues' sport answers ("Hockey", "golf") no longer sit next to
   units and surnames. The authored banks already deal these
   kinds correctly (languages with languages, organs with
   organs, sports with sports); the tables let the pass and the
   deal-time guard prove it, and repair the generated sets that
   never could. Element names and Nobel categories are gated by
   their question's wording in subKindAnswer instead — their
   strings are ordinary words elsewhere ("Iron" the golf club,
   "Clay" the statesman, "Literature" the school subject), so
   they classify only where the question is about elements or a
   Nobel. */
var LANG_NAMES=["Arabic","Spanish","French","Italian","Portuguese","German","Russian","Chinese","Mandarin","Cantonese","Hindi","Bengali","Urdu","Tamil","Telugu","Greek","Latin","Turkish","Hebrew","Farsi","Persian","Sanskrit","Aramaic","Japanese","Korean","Dutch","Swedish","Danish","Norwegian","Finnish","Polish","Czech","Hungarian","Romanian","Bulgarian","Ukrainian","Indonesian","Malay","Vietnamese","Thai","Swahili","English","Irish","Welsh","Basque","Catalan","Esperanto","Hawaiian","Navajo","Sign language"];
var LANG_NORM={};
LANG_NAMES.forEach(function(x){ LANG_NORM[norm(x)]=1; });
var BODY_NAMES=["Heart","Liver","Kidney","Kidneys","Lung","Lungs","Brain","Skin","Eye","Eyes","Ear","Ears","Nose","Tongue","Stomach","Spleen","Pancreas","Gallbladder","Bladder","Appendix","Skull","Femur","Tibia","Fibula","Humerus","Rib cage","Pelvis","Spine","Diaphragm","Trachea","Esophagus","Colon","Intestines","Thyroid","Muscle","Bone","Bones","Head","Neck","Shoulder","Arm","Hand","Finger","Thumb","Leg","Foot","Feet","Toe","Knee","Elbow","Wrist","Ankle","Chest","Back","Chin","Cheek","Forehead","Lip","Lips","Tooth","Teeth","Jaw","Throat","Hip","Blood"];
var BODY_NORM={};
BODY_NAMES.forEach(function(x){ BODY_NORM[norm(x)]=1; });
var SPORT_NAMES=["Running","Golf","Tennis","Soccer","Football","American football","Baseball","Basketball","Ice hockey","Field hockey","Boxing","Wrestling","Swimming","Cycling","Gymnastics","Badminton","Volleyball","Bowling","Cricket","Rugby","Darts","Curling","Sailing","Rowing","Skiing","Snowboarding","Figure skating","Speed skating","Track and field","Marathon","Triathlon","Archery","Fencing","Judo","Karate","Taekwondo","Weightlifting","Diving","Surfing","Skateboarding","Lacrosse","Handball","Water polo","Table tennis","Squash","Racquetball","Billiards","Polo","Luge","Bobsled","Horse racing","Motor racing","Fishing","Kayaking","Canoeing","Snooker","Softball","Futsal"];
var SPORT_NORM={};
SPORT_NAMES.forEach(function(x){ SPORT_NORM[norm(x)]=1; });
SPORT_NORM["hockey"]=1; /* the Trivia Sheet's bare spelling: a sport as an answer, never a repair string (the pool offers the Ice/Field forms) */
/* Weapons, the same enumerable-kind pattern: real weapon types
   plus the famous named weapons of myth and comics. "Lasso of
   Truth" fell into the generic catch-all, so the Wonder Woman
   weapon question dealt a president, a family relation, and a
   retail brand as its "company"; a weapon answer now takes the
   "weapon" subkind and deals only weapons, and a weapon string
   is never generic filler in another kind's set. */
var WEAPON_NAMES=["Lasso of Truth","Sword of Athena","Spear of Athena","Bracelets of Victory","Excalibur","Mjölnir","Trident of Poseidon","Lightsaber","Sword","Spear","Shield","Dagger","Crossbow","Longbow","Battle axe","Mace","Trident","Lance","Halberd","Slingshot","Catapult","Bow and arrow"];
var WEAPON_NORM={};
WEAPON_NAMES.forEach(function(x){ WEAPON_NORM[norm(x)]=1; });
/* The US presidents — a closed, verifiable vocabulary (the 45
   distinct men who have held the office; Cleveland and Trump
   each served two non-consecutive terms and are listed once).
   A president is a person everywhere else in the game, exactly
   as an author is: "president" is an ANSWER subkind, decided by
   the question's wording plus this table (see subKindAnswer),
   never a string subkind — so a president can still sit in an
   ordinary person's set, but a question that asks for a
   president deals only presidents. The Trivia Sheet's thirty-fifth
   president dealt an actor and a director before this existed. */
var PRESIDENT_NAMES=["George Washington","John Adams","Thomas Jefferson","James Madison","James Monroe","John Quincy Adams","Andrew Jackson","Martin Van Buren","William Henry Harrison","John Tyler","James K. Polk","Zachary Taylor","Millard Fillmore","Franklin Pierce","James Buchanan","Abraham Lincoln","Andrew Johnson","Ulysses S. Grant","Rutherford B. Hayes","James A. Garfield","Chester A. Arthur","Grover Cleveland","Benjamin Harrison","William McKinley","Theodore Roosevelt","William Howard Taft","Woodrow Wilson","Warren G. Harding","Calvin Coolidge","Herbert Hoover","Franklin D. Roosevelt","Harry S. Truman","Dwight D. Eisenhower","John F. Kennedy","Lyndon B. Johnson","Richard Nixon","Gerald Ford","Jimmy Carter","Ronald Reagan","George H. W. Bush","Bill Clinton","George W. Bush","Barack Obama","Donald Trump","Joe Biden"];
var PRESIDENT_NORM={};
PRESIDENT_NAMES.forEach(function(x){ PRESIDENT_NORM[norm(x)]=1; });
var ALPHABET_LETTERS=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
/* The six Nobel Prize categories — verified and closed. */
var NOBEL_CATS=["Peace","Literature","Physics","Chemistry","Physiology or Medicine","Economics"];
var NOBEL_NORM={"peace":1,"literature":1,"physics":1,"chemistry":1,"physiology or medicine":1,"economics":1,"medicine":1};
/* The 118 element names of the standard periodic table. */
var ELEMENT_NAMES=["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"];
var ELEMENT_NORM={};
ELEMENT_NAMES.forEach(function(x){ ELEMENT_NORM[norm(x)]=1; });
ELEMENT_NORM["aluminium"]=1; ELEMENT_NORM["sulphur"]=1; ELEMENT_NORM["caesium"]=1;
/* The Trivia Sheet's own spellings of brands the industry tables spell
   differently (or not at all): "hamms" is Hamm's beer — its own
   sheet clue is the brand's slogan, "Sky blue h2o" — "hersheys"
   is Hershey's candy, "Old Style" is a beer, "macy's" a store.
   Industries with no pool in INDUSTRY_POOLS get a verified pool
   here; both are used only by this pass. */
var SHEET_BRAND={"hamms":"beer","old style":"beer","hersheys":"candy","nerds":"candy","alka seltzer":"medicine","chevron":"energy","youtube":"media","disney":"media","atari":"gaming","macys":"retail","brooks bros":"retail","red lobster":"restaurant","parker bros":"games","phase 10":"games","toss across":"games","monster com":"tech","honda accord":"auto"};
var SHEET_BRAND_POOLS={
  medicine:["Alka-Seltzer","Tylenol","Advil","Pepto-Bismol","NyQuil","Benadryl","Claritin","Robitussin","Excedrin","Bayer Aspirin"],
  energy:["Chevron","ExxonMobil","Shell","BP","Texaco","Mobil","ConocoPhillips","Marathon Petroleum"],
  media:["Disney","YouTube","Netflix","Hulu","Pixar","DreamWorks","Paramount","Warner Bros"],
  gaming:["Atari","Nintendo","Sega","PlayStation","Xbox","Commodore","ColecoVision","Intellivision"],
  restaurant:["Red Lobster","Olive Garden","Applebee's","Chili's","Outback Steakhouse","LongHorn Steakhouse","TGI Fridays","Ruby Tuesday"],
  games:["Parker Brothers","Milton Bradley","Hasbro","Mattel","Phase 10","Toss Across","Ravensburger","Spin Master"]
};
/* Sheet spellings of places the place tables miss: a misspelt
   state, a territory dealt as a country, a misspelt country, a
   province, named places, and islands. */
var SHEET_PLACE={"minnesota":"place:state","greenland":"place:country","lichtenstein":"place:country","manitoba":"place:other","santa monica":"place:city","camp david":"place:other","n pole":"place:other","mt rushmore":"place:other","fuji":"place:other","borneo":"place:other","sumatra":"place:other","java":"place:other","sulawesi":"place:other","luzon":"place:other","mindanao":"place:other","honshu":"place:other","sicily":"place:other","sardinia":"place:other","corsica":"place:other","crete":"place:other","tasmania":"place:other","new guinea":"place:other"};
/* Young-animal names — the subject of "What is a baby frog
   called?" sets, where the adult animals would be the wrong
   company even though they share the broad animal kind. The
   list carries every young-animal term the banks use, easy and
   hard alike: without "Puppy" the baby-dog answer read as
   unclassified and its set was rebuilt from dog character
   names, and without "Caterpillar" the baby-butterfly set
   drew adult animal filler. */
var BABY_ANIMAL_NAMES=["Pup","Puppy","Calf","Cub","Kitten","Kit","Foal","Chick","Duckling","Gosling","Piglet","Joey","Larva","Pupa","Fry","Tadpole","Lamb","Kid","Fawn","Caterpillar","Owlet","Eaglet","Cygnet","Poult","Elver","Pinkie","Puggle","Spat","Spiderling","Leveret","Squab","Peachick","Eyas","Porcupette","Alevin","Smolt","Ephyra","Codling","Parr"];
var BABY_ANIMAL_NORM={};
BABY_ANIMAL_NAMES.forEach(function(x){ BABY_ANIMAL_NORM[norm(x)]=1; });
var US_ABBR_NORM={al:1,ak:1,az:1,ar:1,ca:1,co:1,ct:1,de:1,fl:1,ga:1,hi:1,id:1,il:1,in:1,ia:1,ks:1,ky:1,la:1,me:1,md:1,ma:1,mi:1,mn:1,ms:1,mo:1,mt:1,ne:1,nv:1,nh:1,nj:1,nm:1,ny:1,nc:1,nd:1,oh:1,ok:1,or:1,pa:1,ri:1,sc:1,sd:1,tn:1,tx:1,ut:1,vt:1,va:1,wa:1,wv:1,wi:1,wy:1,dc:1};
var STATE_NAME_NORM={};
US_STATES.forEach(function(s){ STATE_NAME_NORM[norm(s)]=1; });
/* Bird and fish names, for the animal sub-subkinds: a stem that
   asks for a bird ("Which bird is known for hooting?") is only
   honestly answered by birds — a cow is the same broad kind
   (animal) but the wrong subject, and it is exactly the sort of
   filler this pass exists to remove. */
var BIRD_NAMES=["Owl","Eagle","Hawk","Falcon","Crow","Raven","Pigeon","Duck","Goose","Swan","Chicken","Rooster","Hen","Turkey","Peacock","Penguin","Ostrich","Lark","Finch","Sparrow","Robin","Wren","Stork","Crane","Heron","Ibis","Kiwi","Emu","Rhea","Seagull","Albatross","Pelican","Flamingo","Toucan","Woodpecker","Hummingbird","Cardinal","Bluebird","Mockingbird","Vulture","Condor","Osprey","Kestrel","Magpie","Jay","Parrot","Canary","Cassowary","Puffin","Dodo"];
var FISH_NAMES=["Shark","Trout","Salmon","Bass","Pike","Perch","Cod","Tuna","Herring","Sardine","Anchovy","Eel","Sturgeon","Piranha","Barracuda","Marlin","Swordfish","Flounder","Halibut","Sole","Minnow","Goldfish","Catfish","Seahorse","Stingray","Mackerel","Haddock","Tilapia"];
var BIRD_NORM={}, FISH_NORM={};
BIRD_NAMES.forEach(function(x){ BIRD_NORM[norm(x)]=1; });
["Golden Eagle","Bald Eagle","Peregrine Falcon","Barn Owl","Snowy Owl","Great Horned Owl","Red-tailed Hawk","Screech Owl"].forEach(function(x){ BIRD_NORM[norm(x)]=1; });
FISH_NAMES.forEach(function(x){ FISH_NORM[norm(x)]=1; });
/* Capital-city names harvested from the Capitals bank itself:
   Kyoto, Osaka, and Nagoya are cities even though the small
   CITY_NAMES table never listed them, and a capital question's
   own bank is the authority on what its choices are. */
var CITY_HARVEST_NORM={};
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q || q.cat!=="Capitals") return;
  (q.choices||[]).forEach(function(c){ CITY_HARVEST_NORM[norm(foldAccents(c))]=1; });
});
/* Lowercase initialisms from the sheet that case alone won't catch. */
var INITIALISM_NORM={"gma":1,"mi6":1};
/* Every sheet-brand spelling, including the strings of the pools
   above — a pool string must classify as its own industry, or the
   strict form could never use it as a replacement. */
var SHEET_BRAND_ALL={};
Object.keys(SHEET_BRAND).forEach(function(k){ SHEET_BRAND_ALL[k]=SHEET_BRAND[k]; });
Object.keys(SHEET_BRAND_POOLS).forEach(function(ind){
  SHEET_BRAND_POOLS[ind].forEach(function(s){ SHEET_BRAND_ALL[norm(s)]=ind; });
});
/* Element symbols, harvested from the Periodic Table / Chemistry
   banks' own choices — in those categories a one-or-two-letter
   capitalised string is a symbol, whatever it might be elsewhere. */
var SYMBOL_STRINGS=[];
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q || (q.cat!=="Periodic Table" && q.cat!=="Chemistry")) return;
  (q.choices||[]).forEach(function(c){
    if(/^[A-Z][a-z]?$/.test(String(c).trim()) && SYMBOL_STRINGS.indexOf(c)===-1) SYMBOL_STRINGS.push(c);
  });
});
/* ================= THE CHARACTER CLASS =================
   The Baymax failure: "Big Hero 6 robot" answered Baymax — a
   fictional character — but dealt tornado (weather), johnson (a
   surname), and wedding (an event). Every string in that set is a
   single generic-looking word, so the definite-kind guard passed
   it: by elimination alone the set was solvable without knowing
   Big Hero 6 at all. The rule for this class is semantic, not
   string-shaped: a question whose answer is a fictional character
   (film, TV, animated, book, comics, games, mascots) deals ONLY
   other characters as multiple choice. A distractor that is not a
   character is rejected however plain its word looks, and a
   character string likewise never sits as filler next to a
   non-character answer (the agreement form of the subkind test).
   Dog and cat characters keep their own stricter subkinds (a dog
   character still deals only dog characters); under a character
   answer they count as characters, because they are.

   CHAR_NAMES are the character answers harvested from the game's
   own pools (the Trivia Sheet's character rows — Baymax, Lotso, Twiki,
   Hong Kong Phooey, Peter Pettigrew, Cole Trickle, Ace Ventura…
   — plus the LeAnn character rows), spelled as the pools spell
   them. CHAR_POOL adds verified, well-known fictional characters
   in display case as the repair pool: real characters only,
   nothing invented. CHAR_QA covers the character answers a string
   table cannot honestly carry — first-name-only or surname-only
   characters (Jesse, Carl, Sue, Bruce, Egon, Striker, johnson,
   cleary, wood) whose bare string is also an ordinary name or
   word: those classify as characters only for the exact
   clue/answer pair the sheet itself states.

   Honest limit, stated once: characterhood has no string
   signature, so this class rests on these curated tables plus the
   clue-pair map. A character answer in no table and no pair would
   still slip through as a generic word — the tables cover every
   character answer the pool audit found, in every pool, and the
   deal-time guard (mcSetValid, which runs the same subkind test)
   rejects any set the tables do classify that still deals a
   non-character. */
var CHAR_NAMES=["Baymax","Lotso","twiki","Hong Kong Phooey","Peter Pettigrew","Beetle Bailey",
  "Cole Trickle","Dr. Richard Burke","Mr. Slate","denny crane","ace ventura","dr honeydew",
  "John Archer","harry stamper","vivian ward","Clara Oswald","Otis Campbell","Raymond Reddington",
  "Wile E. Coyote","Leonard Hofstadter","Harry and Marv","kate bradley","Geoffrey Butler",
  "The Lone Ranger","Wimpy","Pikachu","Turbo Man","Augustus Sloop","Dixie Bennings",
  "Piper Perabo's character Violet Sanford",
  /* Same-show / same-domain company for the character sets the
     owner flagged (2026-11-12): the NCIS principals, and the
     casts the CHAR_QA first-name answers belong with — Full
     House, Three's Company, The Middle, The Brady Bunch, The
     Munsters, Ghostbusters, Fargo, Airplane!, Blazing Saddles,
     Wedding Crashers, Pokémon, Finding Nemo, Big Hero 6, Up,
     The Flintstones, Popeye, Buck Rogers' fellow robots, the
     cereal mascots, the ad characters, and the Egyptian gods
     of the Osiris set. Registered here so each classifies as a
     character (never a person, place, or plain word) wherever
     it is dealt. */
  "Gibbs","DiNozzo","Abby",
  "Danny Tanner","Joey Gladstone","Steve Hale",
  "Jack Tripper","Chrissy Snow","Larry Dallas",
  "Axl Heck","Brick Heck","Frankie Heck",
  "Greg Brady","Bobby Brady","Mike Brady",
  "Herman Munster","Lily Munster","Eddie Munster",
  "Peter Venkman","Ray Stantz","Winston Zeddemore",
  "Marge Gunderson","Carl Showalter","Gaear Grimsrud",
  "Dr. Rumack","Captain Oveur","Steve McCroskey",
  "Sheriff Bart","Hedley Lamarr","The Waco Kid",
  "Chazz","Ron Burgundy","Frank Ricard",
  "Charmander","Squirtle","Bulbasaur",
  "Dory","Nemo","Gill",
  "Hiro Hamada","Tadashi Hamada","Honey Lemon",
  "Russell","Charles Muntz",
  "Wilma Flintstone","Pebbles Flintstone","Barney Rubble",
  "Popeye","Olive Oyl","Bluto",
  "K-9","Robbie the Robot","Commander Data",
  "Tony the Tiger","Cap'n Crunch","Toucan Sam",
  "Flo","Mayhem","Jake from State Farm",
  "Anubis","Horus","Thoth",
  "Tony Stark","Pepper Potts","James Rhodes",
  "Mr. Potato Head","Jessie","Amy Pond","Rose Tyler","Donna Noble",
  /* Cartoon bosses (owner ruling, 2026-11-12): registered so the
     Fred Flintstone boss set below classifies as characters of
     the answer's own animated domain. */
  "Mr. Spacely","Mr. Burns","Mr. Krabs"];
var CHAR_POOL=["Baymax","Lotso","Twiki","Elsa","Olaf","Woody","Buzz Lightyear","Mickey Mouse",
  "Minnie Mouse","Donald Duck","Bugs Bunny","Daffy Duck","Porky Pig","SpongeBob SquarePants",
  "Patrick Star","Homer Simpson","Bart Simpson","Peter Griffin","Stewie Griffin","Batman",
  "Superman","Wonder Woman","Spider-Man","Iron Man","Captain America","Darth Vader",
  "Luke Skywalker","Princess Leia","Yoda","Harry Potter","Hermione Granger","Ron Weasley",
  "Frodo Baggins","Gandalf","Sherlock Holmes","Dracula","Tarzan","Indiana Jones",
  "Captain Jack Sparrow","Snow White","Cinderella","Ariel","Belle","Mulan",
  "King Kong","Godzilla","Kermit the Frog","Miss Piggy","Elmo","Cookie Monster",
  "Charlie Brown","Winnie the Pooh","Tigger","Mary Poppins","Peter Pan","Tinker Bell",
  "Captain Hook","The Grinch","Ebenezer Scrooge","The Cat in the Hat","RoboCop",
  "Rocky Balboa","Freddy Krueger","Chucky","Hong Kong Phooey","Peter Pettigrew",
  "Beetle Bailey","Cole Trickle","Ace Ventura","Denny Crane"];
  /* Deliberately absent from the pool: "Hercules" — the sheet's
     own Hercules answer is the Sandlot DOG, and a character
     reading would break that question's dog-only set. */
var CHAR_NORM={};
CHAR_NAMES.concat(CHAR_POOL).forEach(function(x){ CHAR_NORM[norm(x)]=1; });
/* The narrow domain of a character, for distractor company
   (owner ruling, 2026-11-12): a character answer draws its
   company from its own domain first — the same show where the
   cast is known, the same genre/medium otherwise. This table
   exists because the repair picker ranked character candidates
   by string closeness alone, which kept surfacing the same
   three short names — Twiki (sci-fi TV), Lotso and Baymax
   (animated film) — as filler in every character set, whatever
   the question was about. Twiki now keeps sci-fi company, and
   Lotso and Baymax stay inside animated film. Untagged
   characters are general company, as before. */
var CHAR_DOMAIN={};
(function(){
  var D={
    anim:["Baymax","Lotso","Elsa","Olaf","Woody","Buzz Lightyear","Mickey Mouse","Minnie Mouse","Donald Duck","Bugs Bunny","Daffy Duck","Porky Pig","SpongeBob SquarePants","Patrick Star","Homer Simpson","Bart Simpson","Peter Griffin","Stewie Griffin","Snow White","Cinderella","Ariel","Belle","Mulan","Kermit the Frog","Miss Piggy","Elmo","Cookie Monster","Charlie Brown","Winnie the Pooh","Tigger","Peter Pan","Tinker Bell","Captain Hook","The Grinch","The Cat in the Hat","Hong Kong Phooey","Wile E. Coyote","Pikachu","Charmander","Squirtle","Bulbasaur","Dory","Nemo","Gill","Carl","Russell","Charles Muntz","Bruce","Mr. Potato Head","Jessie","Hiro Hamada","Tadashi Hamada","Honey Lemon","Betty","Wilma Flintstone","Pebbles Flintstone","Barney Rubble","Mr. Slate","Mr. Spacely","Mr. Burns","Mr. Krabs","Wimpy","Popeye","Olive Oyl","Bluto"],
    scifi:["Twiki","K-9","Robbie the Robot","Commander Data","Clara Oswald","Amy Pond","Rose Tyler","Donna Noble","RoboCop","Darth Vader","Luke Skywalker","Princess Leia","Yoda"],
    sitcom:["Jesse","Danny Tanner","Joey Gladstone","Steve Hale","Wood","Jack Tripper","Chrissy Snow","Larry Dallas","Sue","Axl Heck","Brick Heck","Frankie Heck","Peter","Greg Brady","Bobby Brady","Mike Brady","Igor","Herman Munster","Lily Munster","Eddie Munster","Leonard Hofstadter","Dr. Richard Burke","Otis Campbell","kate bradley"],
    tvdrama:["McGee","Gibbs","DiNozzo","Abby","Raymond Reddington","denny crane","Dixie Bennings","The Lone Ranger"],
    film:["Jerry","Marge Gunderson","Carl Showalter","Gaear Grimsrud","Striker","Dr. Rumack","Captain Oveur","Steve McCroskey","Johnson","Sheriff Bart","Hedley Lamarr","The Waco Kid","Cleary","Chazz","Ron Burgundy","Frank Ricard","ace ventura","Cole Trickle","harry stamper","vivian ward","Egon","Peter Pettigrew","Harry and Marv","Piper Perabo's character Violet Sanford","King Kong","Godzilla","Freddy Krueger","Chucky","Rocky Balboa","Indiana Jones","Captain Jack Sparrow","Harry Potter","Hermione Granger","Ron Weasley","Frodo Baggins","Gandalf"],
    hero:["Batman","Superman","Wonder Woman","Spider-Man","Iron Man","Captain America","Tony Stark","Pepper Potts","James Rhodes","Harley"],
    mascot:["Lucky","Lily","Tony the Tiger","Cap'n Crunch","Toucan Sam","Flo","Mayhem","Jake from State Farm"],
    myth:["Set","Anubis","Horus","Thoth"]
  };
  Object.keys(D).forEach(function(k){ D[k].forEach(function(n){ CHAR_DOMAIN[norm(n)]=k; }); });
})();
/* Clue/answer pairs whose answer is a character the string tables
   cannot carry (see the class comment above). Keys are
   norm(raw clue) + "|" + norm(answer). */
var CHAR_QA={};
[["John Stamos' character in Full House","Jesse"],
 ["Old man in UP name","Carl"],
 ["Not OG flintstones vitamin","Betty"],
 ["Finding nemo shark","bruce"],
 ["Fungus","egon"],
 ["Iron man 3 sidekick","harley"],
 ["Middle child in the Middle","sue"],
 ["First name of guy in Fargo","Jerry"],
 ["Killed osiris","set"],
 ["Don't call me Shirley","Striker"],
 ["Actor in most seasons of NCIS","McGee"],
 ["Waldo the wizard tried to replace","lucky"],
 ["Munster's pet bat","Igor"],
 ["The AT&T hostess","lily"],
 ["Marshas nose","peter"],
 ["Blazing saddles last name","johnson"],
 ["Wedding crashers last name","cleary"],
 ["Janet's last name in 3s company","wood"],
 ["On 'The Masked Singer' US Season 4, which character did LeAnn Rimes play?","The Sun"]
].forEach(function(p){ CHAR_QA[norm(p[0])+"|"+norm(p[1])]=1; });
/* ================= DESCRIPTION PHRASES — THE "phrase" SUBKIND =================
   The reported set (a screenshot): the DJ clue "Gringotts Bank"
   dealt three person names — Rudyard Kipling, Aldous Huxley,
   William McKinley — beside its correct answer, the description
   phrase "Where goblins work". The phrase was the only non-name
   in the set, so the question answered itself by elimination.
   The classifier gap is the same one the weapon and president
   fixes closed for their kinds: a description phrase had no
   subkind at all. It fell into the generic catch-all, and so did
   every untagged person name, so the two read as one kind.
   A string is a description phrase when it is clause-shaped
   rather than name-shaped:
   - a wh-word fragment ("Where goblins work"),
   - a three-plus-word string in the sheet's all-lowercase
     register (an expansion like "heating ventilation air
     conditioning", a lowercase title or lyric line),
   - a lowercase verb phrase ("doing dishes", "prevents colds"),
   - an article-led description carrying a verb ("A suit
     brought by…", "The verdict must be unanimous" — the second
     is article + verb "must", caught by PHRASE_AUX).
   Name-shaped strings are excluded up front: if every content
   word is capitalised the string is a name, a title, or a place
   ("Port of Spain", "Leaning Tower of Pisa"), pairs and duos
   ("Lunch and dinner") keep their own readings, and a string
   carrying a digit is data, not a description. The reading is
   the Trivia Sheet's, applied in subKindChoice only there (cat
   "Trivia" / "Comics & Superheroes"), the way the food reading
   belongs to the sheet's generated sets: the authored banks
   write their definition sets as authored wholes in one
   register, and this rule leaves them to it. */
var PHRASE_CONNECTORS={of:1,the:1,a:1,an:1,in:1,on:1,at:1,by:1,for:1,to:1,with:1,de:1,van:1,von:1,der:1,le:1,la:1,du:1,des:1,or:1,as:1,from:1,into:1,over:1,under:1,off:1,up:1,down:1,out:1,per:1,via:1};
var PHRASE_AUX={is:1,are:1,was:1,were:1,has:1,have:1,had:1,be:1,been:1,being:1,do:1,does:1,did:1,can:1,could:1,will:1,would:1,shall:1,should:1,may:1,might:1,must:1};
var TITLE_STEM_RE=/what song|which song|what album|which album|what film|which film|what movie|which movie|what book|which book|what novel|which novel|what play\b|which play\b|name of the song|name of the album|name of the film|name of the movie|name of the book|name of the novel|title of\b|what title|which title|album called|album titled|song called|song titled|film called|film titled|movie called|book called|novel called|self-titled|(song|album|film|movie|book|novel)\?/;
/* Brand strings with a genuine second reading: "Mars" the planet /
   candy bar, "Orbit" and "Eclipse" the astronomy terms / gums,
   "Extra" the word / gum, "Apple" the fruit / company, "Sonic"
   the hedgehog / drive-in chain. Such a
   string only takes the brand reading when its question's wording
   supports it — a planet question's "Mars" is a planet. (The rest
   of INDUSTRY_EXTRA — car models, "L'Oréal", "Papa Johns" — has no
   second reading and is a brand wherever it sits.) */
var AMBIG_BRAND_NORM={"mars":1,"orbit":1,"eclipse":1,"extra":1,"apple":1,"sonic":1};
var BRAND_CLUE_RE=/candy|chocolate|gum\b|chewing|makeup|cosmetic|lipstick|pizza|car\b|automobile|vehicle|drive|hamburger|burger|fries|soda|cola|drink|beer|lager|restaurant|food|snack|cookie|cereal|compan|brand|logo|corp|iphone|computer|smartphone/;
/* ================= SPORTS TEAMS — THE TEAM SUBKIND =================
   The classifier gap this closes: no table knew what a sports team
   was. "Miss. State" — the first #1 in the first College Football
   Playoff rankings (2014) — matched no string table, its clue gave
   djDomainOf no sports signal ("team", "ranked", "BCS" were not in
   its word list), so the answer fell through as a generic word and
   dealt generic company: a phrase ("Stay Awake"), a film title
   ("get shorty"), a TV title ("The Middle") — the only team in the
   set, under a factually wrong clue (the BCS ended after the 2013
   season; the sheet clue is corrected in DJ_RAW, the answer is
   unchanged). A team answer now classifies as "team:<league>" and
   deals only teams of that league, from the verified pools below;
   a team string can no longer sit as filler next to a non-team
   answer in a sports question either.

   TEAM_POOLS are verified real teams per league — also the repair
   pool (SUBKIND_POOLS2). College football is NCAA FBS programs;
   for the 2014 playoff question the era's top tier (Alabama,
   Florida State, Auburn, Ole Miss, Oregon, Ohio State…) is in the
   list. TEAM_LEAGUE adds the sheet's own spellings and bare
   mascots with a single league reading ("Eagles", "Pistons",
   "Dodgers", "NJ Devils"); TEAM_AMBIG holds bare names shared by
   two leagues or by a league and the dictionary (Giants, Rangers,
   Bears, Ducks), resolved by the clue's league where it names one.
   A team string whose name is also a place (Tennessee, Alabama,
   Miami, Pittsburgh…) or an ambiguous mascot only takes the team
   reading in a team context — a sports-domain or team-asking clue —
   so geography questions about those places are untouched. */
var TEAM_POOLS={
  cfb:["Alabama","Auburn","Georgia","LSU","Florida State","Ohio State","Michigan","Oklahoma","Texas","Notre Dame","USC","Oregon","Clemson","Penn State","Florida","Tennessee","Miami","Nebraska","Texas A&M","Arkansas","Ole Miss","Mississippi State","Michigan State","Wisconsin","Iowa","Stanford","Washington","UCLA","Utah","TCU","Baylor","Oklahoma State","Virginia Tech","North Carolina","South Carolina","Missouri","Louisville","West Virginia","Arizona State","Pittsburgh","Syracuse","Boston College","Duke","Kansas State","Texas Tech","Boise State","BYU","Houston","Memphis","Cincinnati","Purdue","Indiana","Kansas","Kentucky","Maryland","Illinois","Minnesota","Colorado","Georgia Tech","NC State","Wake Forest","Virginia","Army","Navy","Air Force"],
  nfl:["Arizona Cardinals","Atlanta Falcons","Baltimore Ravens","Buffalo Bills","Carolina Panthers","Chicago Bears","Cincinnati Bengals","Cleveland Browns","Dallas Cowboys","Denver Broncos","Detroit Lions","Green Bay Packers","Houston Texans","Indianapolis Colts","Jacksonville Jaguars","Kansas City Chiefs","Las Vegas Raiders","Los Angeles Chargers","Los Angeles Rams","Miami Dolphins","Minnesota Vikings","New England Patriots","New Orleans Saints","New York Giants","New York Jets","Philadelphia Eagles","Pittsburgh Steelers","San Francisco 49ers","Seattle Seahawks","Tampa Bay Buccaneers","Tennessee Titans","Washington Commanders"],
  nba:["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers","Los Angeles Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks","Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"],
  mlb:["Arizona Diamondbacks","Atlanta Braves","Baltimore Orioles","Boston Red Sox","Chicago Cubs","Chicago White Sox","Cincinnati Reds","Cleveland Guardians","Colorado Rockies","Detroit Tigers","Houston Astros","Kansas City Royals","Los Angeles Angels","Los Angeles Dodgers","Miami Marlins","Milwaukee Brewers","Minnesota Twins","New York Mets","New York Yankees","Athletics","Philadelphia Phillies","Pittsburgh Pirates","San Diego Padres","San Francisco Giants","Seattle Mariners","St. Louis Cardinals","Tampa Bay Rays","Texas Rangers","Toronto Blue Jays","Washington Nationals"],
  nhl:["Anaheim Ducks","Boston Bruins","Buffalo Sabres","Calgary Flames","Carolina Hurricanes","Chicago Blackhawks","Colorado Avalanche","Columbus Blue Jackets","Dallas Stars","Detroit Red Wings","Edmonton Oilers","Florida Panthers","Los Angeles Kings","Minnesota Wild","Montreal Canadiens","Nashville Predators","New Jersey Devils","New York Islanders","New York Rangers","Ottawa Senators","Philadelphia Flyers","Pittsburgh Penguins","San Jose Sharks","Seattle Kraken","St. Louis Blues","Tampa Bay Lightning","Toronto Maple Leafs","Utah Mammoth","Vancouver Canucks","Vegas Golden Knights","Washington Capitals","Winnipeg Jets"]
};
var TEAM_LEAGUE={};
Object.keys(TEAM_POOLS).forEach(function(lg){ TEAM_POOLS[lg].forEach(function(t){ TEAM_LEAGUE[norm(t)]=lg; }); });
/* The sheet's own spellings and single-league bare mascots. */
var TEAM_EXTRA={"miss state":"cfb","louisiana state":"cfb","southern california":"cfb","ucf":"cfb","smu":"cfb","pitt":"cfb","eagles":"nfl","falcons":"nfl","ny giants":"nfl","ny jets":"nfl","pistons":"nba","dodgers":"mlb","astros":"mlb","blue jays":"mlb","white sox":"mlb","reds":"mlb","padres":"mlb","seattle pilots":"mlb","chargers":"nfl","devils":"nhl","nj devils":"nhl","ny rangers":"nhl"};
Object.keys(TEAM_EXTRA).forEach(function(k){ TEAM_LEAGUE[k]=TEAM_EXTRA[k]; });
/* Bare names two leagues share, or a league shares with an
   ordinary word — the clue's league wins, else the first listed. */
var TEAM_AMBIG={"giants":["nfl","mlb"],"rangers":["nhl","mlb"],"jets":["nfl","nhl"],"cardinals":["mlb","nfl"],"panthers":["nfl","nhl"],"kings":["nba","nhl"],"bears":["nfl"],"lions":["nfl"],"tigers":["mlb"],"dolphins":["nfl"],"ravens":["nfl"],"colts":["nfl"],"rams":["nfl"],"jaguars":["nfl"],"cowboys":["nfl"],"patriots":["nfl"],"packers":["nfl"],"steelers":["nfl"],"seahawks":["nfl"],"vikings":["nfl"],"saints":["nfl"],"browns":["nfl"],"texans":["nfl"],"titans":["nfl"],"bengals":["nfl"],"bills":["nfl"],"commanders":["nfl"],"buccaneers":["nfl"],"broncos":["nfl"],"raiders":["nfl"],"chiefs":["nfl"],"warriors":["nba"],"lakers":["nba"],"celtics":["nba"],"bulls":["nba"],"knicks":["nba"],"heat":["nba"],"spurs":["nba"],"suns":["nba"],"nuggets":["nba"],"bucks":["nba"],"raptors":["nba"],"rockets":["nba"],"mavericks":["nba"],"jazz":["nba"],"hawks":["nba"],"cavaliers":["nba"],"pacers":["nba"],"nets":["nba"],"hornets":["nba"],"grizzlies":["nba"],"timberwolves":["nba"],"thunder":["nba"],"magic":["nba"],"wizards":["nba"],"clippers":["nba"],"pelicans":["nba"],"76ers":["nba"],"yankees":["mlb"],"mets":["mlb"],"cubs":["mlb"],"phillies":["mlb"],"pirates":["mlb"],"mariners":["mlb"],"angels":["mlb"],"brewers":["mlb"],"nationals":["mlb"],"marlins":["mlb"],"diamondbacks":["mlb"],"rockies":["mlb"],"rays":["mlb"],"guardians":["mlb"],"orioles":["mlb"],"royals":["mlb"],"twins":["mlb"],"braves":["mlb"],"red sox":["mlb"],"bruins":["nhl"],"blackhawks":["nhl"],"red wings":["nhl"],"penguins":["nhl"],"oilers":["nhl"],"avalanche":["nhl"],"lightning":["nhl"],"islanders":["nhl"],"flyers":["nhl"],"capitals":["nhl"],"sharks":["nhl"],"canucks":["nhl"],"flames":["nhl"],"senators":["nhl"],"sabres":["nhl"],"hurricanes":["nhl"],"blue jackets":["nhl"],"wild":["nhl"],"predators":["nhl"],"blues":["nhl"],"ducks":["nhl"],"stars":["nhl"],"kraken":["nhl"],"coyotes":["nhl"],"maple leafs":["nhl"],"canadiens":["nhl"],"golden knights":["nhl"]};
/* Team strings whose team reading needs no clue context: every
   pooled or extra name that is not itself a state or city name.
   ("Miami" the school stays clue-gated; "Miami Heat" does not.) */
var TEAM_UNAMBIG={};
Object.keys(TEAM_LEAGUE).forEach(function(k){ if(!STATE_NAME_NORM[k] && !CITY_NORM[k]) TEAM_UNAMBIG[k]=1; });
/* The same team under two spellings — a repair must never offer
   the answer itself in its other spelling ("Miss. State" next to
   "Mississippi State", "Eagles" next to "Philadelphia Eagles"). */
var TEAM_CANON={"miss state":"mississippi state","nj devils":"new jersey devils","devils":"new jersey devils","ny rangers":"new york rangers","ny giants":"new york giants","ny jets":"new york jets","eagles":"philadelphia eagles","falcons":"atlanta falcons","pistons":"detroit pistons","dodgers":"los angeles dodgers","astros":"houston astros","blue jays":"toronto blue jays","white sox":"chicago white sox","reds":"cincinnati reds","padres":"san diego padres","chargers":"los angeles chargers"};
/* Title strings, harvested from the choices of non-DJ questions
   whose stems ask for a title (plus the LeAnn title lists, which
   are titles by construction). A title answer's distractors must
   be titles; titles are never invented, only harvested. */
var TITLE_STRINGS={};
/* A string that is the correct answer to a question whose stem
   does NOT ask for a title is not a title, whatever else it
   appears as: a singer who turns up as a choice in an album
   question is still a singer. Harvesting title-stem choices
   without this guard filed people (Elton John, Ralph Fiennes)
   as titles, and their own questions then dealt song titles as
   their "company". */
var NON_TITLE_ANSWER_NORM={};
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q || !Array.isArray(q.choices)) return;
  var clue0=" "+String(q.q||"").toLowerCase()+" ";
  if(!TITLE_STEM_RE.test(clue0)){ var a0=q.choices[q.a]; if(a0) NON_TITLE_ANSWER_NORM[norm(a0)]=1; }
});
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q) return;
  var clue=" "+String(q.q||"").toLowerCase()+" ";
  if(!TITLE_STEM_RE.test(clue)) return;
  if(q.cat==="Trivia" || q.cat==="Comics & Superheroes"){
    /* A DJ set's choices are generated, not authored, so only its
       correct answer is evidence: a sheet question whose clue
       asks for a film, song, or book proves its answer is one. */
    var da=q.choices && q.choices[q.a];
    if(da && !NON_TITLE_ANSWER_NORM[norm(da)]) TITLE_STRINGS[norm(da)]=da;
    return;
  }
  (q.choices||[]).forEach(function(c){ if(!NON_TITLE_ANSWER_NORM[norm(c)]) TITLE_STRINGS[norm(c)]=c; });
});
if(typeof LEANN_SONG_TITLES!=="undefined"){
  LEANN_SONG_TITLES.concat(LEANN_ALBUM_TITLES, LEANN_FILM_TITLES, LEANN_TV_TITLES).forEach(function(c){ TITLE_STRINGS[norm(c)]=c; });
}
/* Author strings, harvested like the titles above: the correct
   answers of questions whose stems ask who wrote a work, the
   person/group choices of the authored banks' author questions,
   and the sheet's French novelists. A generated set's choices are
   NOT evidence — only its answer is. An author answer's
   distractors must be authors; authors are never invented, only
   harvested. */
var AUTHOR_STRINGS={};
var AUTHOR_BY_CAT={};
var AUTHOR_STEM_RE=/\bwritten by\b|\bwho wrote\b|\bauthor of\b|\bpenned by\b/;
/* First pass: the correct answer of every author question, in
   every bank — an answer is always evidence. */
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q || !Array.isArray(q.choices)) return;
  var clue=" "+String(q.q||"").toLowerCase()+" ";
  if(!AUTHOR_STEM_RE.test(clue)) return;
  var aa=q.choices[q.a];
  if(aa) noteAuthor(aa, q.cat||"");
});
/* Second pass: the other choices of the authored banks' author
   questions — but only a choice that is itself an author answer
   somewhere, or that the name tables read as a person or group.
   An authored set can hold a stray non-author choice (a book
   title dealt as an author distractor), and a LeAnn songwriting
   set's choices are acts and duet pairs, a different family —
   neither is evidence of authorship, so DJ, comics, and LeAnn
   sets contribute their answers only (above). */
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q || !Array.isArray(q.choices)) return;
  if(q.cat==="Trivia" || q.cat==="Comics & Superheroes" || q.cat==="LeAnn Rimes") return;
  var clue=" "+String(q.q||"").toLowerCase()+" ";
  if(!AUTHOR_STEM_RE.test(clue)) return;
  q.choices.forEach(function(c){
    var k=kindInfoAll(c).kind;
    if(AUTHOR_STRINGS[norm(c)] || k==="person" || k==="group") noteAuthor(c, q.cat||"");
  });
});
if(typeof FRENCH_AUTHORS!=="undefined"){
  FRENCH_AUTHORS.forEach(function(c){ AUTHOR_STRINGS[norm(c)]=c; });
}
var AUTHOR_NORM={};
Object.keys(AUTHOR_STRINGS).forEach(function(k){ AUTHOR_NORM[k]=1; });
var AUTHOR_LIST=Object.keys(AUTHOR_STRINGS).map(function(k){ return AUTHOR_STRINGS[k]; });
/* The field vocabulary of acronym answers in the authored banks:
   the choices that sit next to acronym answers there (DNA's set
   holds ATP, RNA — and Glucose, a molecule, which is the field's
   own word, not an acronym). An authored acronym set keeps its
   field's vocabulary; the Trivia Sheet's generated sets get no such
   pass, because there the "field" was never authored at all. */
var FIELD_ACRONYM_NORM={};
ALL_MC_QUESTIONS.forEach(function(q){
  if(!q || q.cat==="Trivia" || q.cat==="Comics & Superheroes" || !mcChoicesValid(q)) return;
  if(subKindStr(q.choices[q.a])!=="acronym") return;
  q.choices.forEach(function(c){ FIELD_ACRONYM_NORM[norm(c)]=1; });
});
/* Verified same-subkind strings offered as replacements when the
   game's own harvested strings run short. Deliberately absent:
   "side" (only Left exists besides the answer — never enough, by
   design) and "acronym" (harvest-only; an invented initialism
   would be a fabricated fact). "phrase" is absent the same way:
   a description phrase is subject-specific, so its only honest
   repair vocabulary is the game's own harvested phrases — a DJ
   phrase set the harvest cannot fill is excluded from
   multiple-choice dealing rather than filled from a list. */
var SUBKIND_POOLS2={
  "compass":COMPASS_NAMES,
  "animal":ANIMAL_NAMES,
  "pair:animal":PAIR_ANIMAL_STRINGS,
  "animal:bird":BIRD_NAMES,
  "animal:fish":FISH_NAMES,
  "animal:young":BABY_ANIMAL_NAMES,
  "dog":DOG_CHAR_NAMES,
  "cat":CAT_CHAR_NAMES,
  "place:city":CITY_NAMES,
  "place:nickname":STATE_NICKNAMES,
  "food":FOOD_NAMES,
  "place:state":US_STATES,
  "place:other":DJ_PLACE_NAMES.concat(US_STATES, CITY_NAMES, Object.keys(COUNTRY_REGION)),
  "place:country":Object.keys(COUNTRY_REGION),
  "place:continent":["Africa","Asia","Europe","Antarctica","North America","South America","Oceania"],
  "color":COLOR_NAMES,
  "date:month":MONTH_NAMES,
  "date:season":SEASON_NAMES.concat(["Fall"]),
  "sky":SKY_NAMES,
  "group":Object.keys(NAME_GROUP),
  "symbol":SYMBOL_STRINGS,
  /* Verified phobia definitions — the repair pool for def:fear
     answers. The Trivia Sheet itself holds only two fear definitions
     (an empty beer glass; being watched by ducks), never the
     three distinct distractors a set needs, so these are supplied
     here: each is the standard dictionary definition of a real,
     commonly attested phobia — spiders (arachnophobia), heights
     (acrophobia), enclosed spaces (claustrophobia), flying
     (aviophobia), water (aquaphobia), dogs (cynophobia), the dark
     (nyctophobia), germs (mysophobia), snakes (ophidiophobia),
     blood (hemophobia), needles (trypanophobia), public speaking
     (glossophobia), thunder and lightning (astraphobia), and open
     spaces (agoraphobia) — spelled in the sheet's own lowercase
     register so they sit naturally next to its answers. */
  "def:fear":["fear of spiders","fear of heights","fear of enclosed spaces","fear of flying","fear of water","fear of dogs","fear of the dark","fear of germs","fear of snakes","fear of blood","fear of needles","fear of public speaking","fear of thunder and lightning","fear of open spaces"],
  /* The enumerable kinds: each pool is its own verified table
     above, so a repaired set speaks the kind's real vocabulary. */
  "language":LANG_NAMES,
  "body":BODY_NAMES,
  "sport":SPORT_NAMES,
  "weapon":WEAPON_NAMES,
  "president":PRESIDENT_NAMES,
  "letter":ALPHABET_LETTERS,
  "nobel":NOBEL_CATS,
  "element":ELEMENT_NAMES,
  /* Sports teams, per league — the repair pool for team answers.
     "team:any" (a two-league pair answer) draws every league. */
  "team:cfb":TEAM_POOLS.cfb,
  "team:nfl":TEAM_POOLS.nfl,
  "team:nba":TEAM_POOLS.nba,
  "team:mlb":TEAM_POOLS.mlb,
  "team:nhl":TEAM_POOLS.nhl,
  "team:any":TEAM_POOLS.cfb.concat(TEAM_POOLS.nfl, TEAM_POOLS.nba, TEAM_POOLS.mlb, TEAM_POOLS.nhl),
  /* Fictional characters — the repair pool for character answers
     (see THE CHARACTER CLASS above): verified, well-known
     characters only, so a repaired character set never deals a
     weather word, a surname, or an event as filler. */
  "character":CHAR_POOL
};
/* ============ PROFESSION FENCE & PLACE SUB-TYPE POOLS ============
   The repair vocabulary for the two fences added to subKindAnswer
   / subKindMatch in part 1 (owner ruling, 2026-11-12):
   - ROLE_POOLS: verified all-time greats of each profession /
     playing position the fence recognises, split by gender (the
     subkind key carries it, "nfl-rb:m"), so a question whose
     clue names the role can always be repaired inside the role —
     a running back's company is running backs, a painter's is
     painters, never the broad fame pool. Registered into
     SUBKIND_POOLS2 under "role:<key>", where the subkind pass
     draws its repairs.
   - The "place:other:<sub>" pools: houses, lighthouses, islands,
     parks, and castles for the place sub-type fence — a house
     answer's company is houses (the first three houses are the
     actual first, second, and third presidential residences). */
var ROLE_POOLS={
 "nfl-rb:m":["Barry Sanders","Walter Payton","Emmitt Smith","Jim Brown","Adrian Peterson","LaDainian Tomlinson","Eric Dickerson","Marshall Faulk","Earl Campbell","Gale Sayers","Marcus Allen","Tony Dorsett","Franco Harris","Jerome Bettis","Curtis Martin","Thurman Thomas","Terrell Davis","Frank Gore","O. J. Simpson","Bo Jackson","Herschel Walker","Eddie George","Shaun Alexander","LeSean McCoy","Ezekiel Elliott","Christian McCaffrey","Saquon Barkley","Derrick Henry","Nick Chubb","Priest Holmes"],
 "nfl-qb:m":["Tom Brady","Joe Montana","Peyton Manning","John Elway","Dan Marino","Brett Favre","Aaron Rodgers","Drew Brees","Johnny Unitas","Terry Bradshaw","Troy Aikman","Steve Young","Roger Staubach","Patrick Mahomes","Eli Manning","Jim Kelly","Warren Moon","Fran Tarkenton","Bob Griese","Len Dawson","Joe Namath","Bart Starr","Ken Stabler","Philip Rivers","Ben Roethlisberger","Matt Ryan","Andrew Luck","Cam Newton","Russell Wilson","Josh Allen"],
 "nfl-wr:m":["Jerry Rice","Randy Moss","Larry Fitzgerald","Terrell Owens","Marvin Harrison","Calvin Johnson","Julio Jones","Antonio Brown","Steve Largent","Cris Carter","Tim Brown","Andre Johnson","Reggie Wayne","Isaac Bruce","Michael Irvin","Lynn Swann","Don Hutson","DeAndre Hopkins","Mike Evans","Tyreek Hill","Davante Adams","Stefon Diggs","Keenan Allen","Odell Beckham Jr."],
 "nfl-te:m":["Travis Kelce","Rob Gronkowski","Tony Gonzalez","Antonio Gates","Jason Witten","Shannon Sharpe","George Kittle","Kellen Winslow","Ozzie Newsome","Jimmy Graham","Greg Olsen","Vernon Davis","Dallas Clark","Mark Andrews","Zach Ertz","Mike Ditka","John Mackey","Dave Casper","Benjamin Watson","Kyle Pitts"],
 "mlb-pitcher:m":["Cy Young","Sandy Koufax","Nolan Ryan","Randy Johnson","Greg Maddux","Roger Clemens","Tom Seaver","Bob Gibson","Pedro Martínez","Clayton Kershaw","Justin Verlander","Max Scherzer","Steve Carlton","Warren Spahn","Christy Mathewson","Walter Johnson","Mariano Rivera","Dennis Eckersley","Whitey Ford","Jim Palmer","Lefty Grove","Grover Cleveland Alexander"],
 "mlb-catcher:m":["Johnny Bench","Yogi Berra","Ivan Rodríguez","Mike Piazza","Carlton Fisk","Gary Carter","Buster Posey","Joe Mauer","Thurman Munson","Roy Campanella","Bill Dickey","Mickey Cochrane","Ted Simmons","Jorge Posada","Yadier Molina"],
 "nhl-goalie:m":["Patrick Roy","Martin Brodeur","Dominik Hašek","Terry Sawchuk","Jacques Plante","Glenn Hall","Ken Dryden","Bernie Parent","Grant Fuhr","Ed Belfour","Carey Price","Henrik Lundqvist","Marc-André Fleury","Roberto Luongo","Jonathan Quick"],
 "nba-pg:m":["Magic Johnson","Stephen Curry","Chris Paul","John Stockton","Jason Kidd","Steve Nash","Isiah Thomas","Oscar Robertson","Bob Cousy","Gary Payton","Russell Westbrook","Kyrie Irving","Damian Lillard","Allen Iverson","Walt Frazier","Tiny Archibald"],
 "nba-sg:m":["Michael Jordan","Kobe Bryant","Dwyane Wade","James Harden","Klay Thompson","Ray Allen","Reggie Miller","Clyde Drexler","Manu Ginóbili","Vince Carter","DeMar DeRozan","Bradley Beal","Devin Booker","Jimmy Butler"],
 "painter:m":["Pablo Picasso","Vincent van Gogh","Claude Monet","Rembrandt","Leonardo da Vinci","Michelangelo","Raphael","Johannes Vermeer","Salvador Dalí","Andy Warhol","Jackson Pollock","Norman Rockwell","Grant Wood","Edward Hopper","Bob Ross","Édouard Manet","Pierre-Auguste Renoir","Paul Cézanne","Wassily Kandinsky","Piet Mondrian"],
 "painter:f":["Georgia O'Keeffe","Frida Kahlo","Mary Cassatt","Berthe Morisot","Artemisia Gentileschi","Élisabeth Vigée Le Brun","Rosa Bonheur","Yayoi Kusama","Agnes Martin","Joan Mitchell","Lee Krasner","Helen Frankenthaler"],
 "senator:m":["Ted Kennedy","John McCain","Robert Byrd","Daniel Inouye","Strom Thurmond","Chuck Schumer","Mitch McConnell","Harry Reid","Bernie Sanders","Orrin Hatch","John Kerry","Bob Dole","Hubert Humphrey","Joe Biden","Barack Obama","Al Gore"],
 "senator:f":["Dianne Feinstein","Barbara Boxer","Hillary Clinton","Elizabeth Warren","Kamala Harris","Susan Collins","Lisa Murkowski","Jeanne Shaheen","Margaret Chase Smith","Barbara Mikulski","Olympia Snowe","Kay Bailey Hutchison"],
 /* Subject-attached professions (owner ruling, 2026-11-13 — the
    Ernest Evans set): when a clue attaches one of these
    professions to its subject ("Singer Ernest Evans…", "Which
    rapper…", "Which comedian…"), the fence repairs inside the
    profession — a singer's company is singers, never the broad
    fame pool that dealt an actor, an athlete, and an author
    beside Chubby Checker. Verified, widely-known names only. */
 "singer:m":["Frank Sinatra","Elvis Presley","Michael Jackson","Freddie Mercury","Elton John","David Bowie","Bob Dylan","Prince","Stevie Wonder","Marvin Gaye","Sam Cooke","Otis Redding","James Brown","Ray Charles","Johnny Cash","Paul McCartney","John Lennon","Mick Jagger","Bruce Springsteen","Billy Joel","Rod Stewart","Tom Jones","Dean Martin","Nat King Cole","Louis Armstrong","Bing Crosby","Neil Diamond","Barry Manilow","Andy Williams","Roy Orbison"],
 "singer:f":["Aretha Franklin","Whitney Houston","Mariah Carey","Celine Dion","Barbra Streisand","Madonna","Beyoncé","Adele","Taylor Swift","Dolly Parton","Patsy Cline","Ella Fitzgerald","Billie Holiday","Diana Ross","Cher","Tina Turner","Judy Garland","Edith Piaf","Nina Simone","Janis Joplin"],
 "rapper:m":["Drake","Eminem","Jay-Z","Tupac Shakur","The Notorious B.I.G.","Snoop Dogg","Ice Cube","LL Cool J","Kanye West","Kendrick Lamar","Nas","Rakim","DMX","50 Cent","Lil Wayne","Ludacris","Nelly","Pitbull","Flo Rida","will.i.am","T-Pain","Akon","Busta Rhymes","Method Man","Scarface"],
 "rapper:f":["Nicki Minaj","Cardi B","Missy Elliott","Queen Latifah","Lil' Kim","Foxy Brown","Eve","Lauryn Hill","Doja Cat","Megan Thee Stallion","MC Lyte","Da Brat","Trina","Remy Ma"],
 "comedian:m":["George Carlin","Richard Pryor","Robin Williams","Eddie Murphy","Jerry Seinfeld","Chris Rock","Dave Chappelle","Steve Martin","Jim Carrey","Adam Sandler","Bill Murray","David Letterman","Jay Leno","Conan O'Brien","Jimmy Fallon","Jon Stewart","Stephen Colbert","John Oliver","Trevor Noah","Bob Hope","Jack Benny","Groucho Marx","Mel Brooks","Rodney Dangerfield","George Burns","Woody Allen","Don Rickles","Milton Berle","Buddy Hackett","Redd Foxx"],
 "comedian:f":["Wanda Sykes","Amy Schumer","Tina Fey","Amy Poehler","Ellen DeGeneres","Sarah Silverman","Ali Wong","Joan Rivers","Phyllis Diller","Lucille Ball","Carol Burnett","Gilda Radner","Kristen Wiig","Maya Rudolph","Kate McKinnon","Tiffany Haddish","Margaret Cho","Iliza Shlesinger","Nikki Glaser","Taylor Tomlinson"]
};
var ROLE_POOL_NORM={};
Object.keys(ROLE_POOLS).forEach(function(k){
  var m={}; ROLE_POOLS[k].forEach(function(n){ m[norm(n)]=1; });
  ROLE_POOL_NORM[k]=m;
  SUBKIND_POOLS2["role:"+k]=ROLE_POOLS[k];
});
/* Stage-name / birth-name pools (defined in part 5, beside the
   name tables, where their members are also registered as
   gendered persons) join the sub-kind repair pools under the
   same keys the part-1 fence produces. */
Object.keys(STAGE_POOLS).forEach(function(k){ SUBKIND_POOLS2["stage:"+k]=STAGE_POOLS[k]; });
Object.keys(BIRTH_POOLS).forEach(function(k){ SUBKIND_POOLS2["birth:"+k]=BIRTH_POOLS[k]; });
SUBKIND_POOLS2["place:other:house"]=["Samuel Osgood House","Alexander Macomb House","Robert Morris House","The Grange","Mount Vernon","Monticello","The Hermitage","Graceland","Biltmore Estate","The White House","Montpelier","Stratford Hall","Fallingwater","The Breakers","Arlington House","Dumbarton House","Lyndhurst","Filoli","Vanderbilt Mansion","Mount Clare"];
SUBKIND_POOLS2["place:other:lighthouse"]=["Lighthouse of Alexandria","Cape Hatteras Lighthouse","Portland Head Light","Pigeon Point Lighthouse","Thomas Point Shoal Lighthouse","Boston Light","Sandy Hook Lighthouse","Fire Island Lighthouse","Split Rock Lighthouse","Heceta Head Lighthouse","Yaquina Head Lighthouse","St. Augustine Light","Tybee Island Light","Montauk Point Lighthouse","West Quoddy Head Light","Navesink Twin Lights"];
SUBKIND_POOLS2["place:other:island"]=["Alcatraz Island","Ellis Island","Liberty Island","Governors Island","Mackinac Island","Catalina Island","Nantucket","Martha's Vineyard","Block Island","Sanibel Island","Hilton Head Island","Jekyll Island","Tangier Island","Angel Island","Santa Cruz Island","Treasure Island"];
SUBKIND_POOLS2["place:other:park"]=["Central Park","Yellowstone National Park","Yosemite National Park","Grand Canyon National Park","Hyde Park","Golden Gate Park","Balboa Park","Prospect Park","Griffith Park","Millennium Park","Fairmount Park","Forest Park","Stanley Park","Bryant Park","Zion National Park","Acadia National Park","Olympic National Park"];
SUBKIND_POOLS2["place:other:castle"]=["Neuschwanstein Castle","Edinburgh Castle","Windsor Castle","Himeji Castle","Prague Castle","Bran Castle","Eilean Donan Castle","Balmoral Castle","Hohenzollern Castle","Bodiam Castle","Conwy Castle","Harlech Castle","Kilkenny Castle","Château de Chambord","Alcázar of Segovia"];
var SUBKIND_ENFORCE_STATS={"checked":6246,"repaired":788,"excluded":1,"exclusions":[{"q":"Trivia Clue: \u201cSince 1967 Sweden switched to driving on what side\u201d \u2014 what answer goes with this clue?","cat":"Trivia","answer":"right","subkind":"side","reason":"fewer than 3 same-subkind (side) distractors in the pool"}]};
/* ================= PROPER-NAME DISPLAY CASING =================
   The Trivia Sheet writes its answers in whatever case the sheet's
   author happened to type — "moldova" in lower case on the same
   screen where Switzerland, Norway, and France are capitalised,
   "will ferrell" / "ted williams" / "peter flanagan" in lower case
   next to a capitalised correct answer. A choice's casing is
   display only (every judge in the game compares through norm(),
   which is case-insensitive), so this pass rewrites choice
   STRINGS in place, pool-wide, without touching which choice is
   correct, any judging, or any question's text:
   1. Canon: a hand-verified canonical-casing table, built from
      the game's own properly-cased name lists (the NAME_GENDER
      person table, US states, cities, the capital pairs' places
      and capitals, flag-pool countries, sky names, character and
      team lists) plus a short hand map for brands, initialisms,
      and sheet abbreviations whose casing no list carries
      ("Hamm's", "GMA", "MI6", "South Africa" for "s africa").
      Any choice whose norm() is in the table takes the table's
      casing, in any pool.
   2. Name-kind sets: when a set's correct answer is a proper-name
      kind — a person, character, title, place, brand, team, or a
      named dog/cat character (the same classifiers the kind rules
      use) — every still-all-lowercase choice in the set is a name
      written in sheet case, so it is Title Cased word by word
      (connectors and, of, the, in, on… stay lower case mid-name;
      Mc names keep their inner capital). Surname-only person
      answers ("lennon", "monet") are identified from the person
      table's surnames, excluding surnames that are also ordinary
      English words.
   Common nouns are never touched: chemistry names, baby-animal
   words, colours, and plain phrases keep the casing their banks
   wrote, and a choice that already carries any capital is left
   exactly as it is. CASE_FIXED counts the strings rewritten. */
var CASE_CANON={};
(function buildCaseCanon(){
  function add(s){
    if(typeof s!=="string" || !s.trim()) return;
    var k=norm(s), cur=CASE_CANON[k];
    /* When two sources spell the same name with different casing,
       keep the capitalised form — a lowercase source string (a
       flag choice written "the Philippines") must never drag a
       properly capitalised canon entry down. */
    if(cur && /^[A-Z]/.test(cur) && !/^[A-Z]/.test(s)) return;
    CASE_CANON[k]=s;
  }
  Object.keys(NAME_GENDER).forEach(add);
  US_STATES.forEach(add);
  CITY_NAMES.forEach(add);
  DJ_PLACE_NAMES.forEach(add);
  SKY_NAMES.forEach(add);
  CHAR_POOL.forEach(add);
  DJ_FACES.forEach(add);
  DOG_CHAR_NAMES.forEach(add);
  CAT_CHAR_NAMES.forEach(add);
  Object.keys(COUNTRY_REGION).forEach(add);
  Object.keys(TEAM_POOLS).forEach(function(lg){ TEAM_POOLS[lg].forEach(add); });
  Object.keys(CAP_PAIRS).forEach(function(t){ CAP_PAIRS[t].forEach(function(p){ add(p[0]); add(p[1]); }); });
  ["easy","medium","hard","vhard"].forEach(function(t){ PICS[t].forEach(function(q){ if(q.cat==="World Flags") q.choices.forEach(add); }); });
  var HAND={
    "gma":"GMA","mi6":"MI6","zr":"Zr","abba":"ABBA","kiss":"KISS",
    "s africa":"South Africa","sparta ms":"Sparta, MS","hoboken nj":"Hoboken, NJ",
    "colorado oklahoma texas arizona utah":"Colorado, Oklahoma, Texas, Arizona, Utah",
    "switzerland and italy":"Switzerland and Italy","tigers and dodgers":"Tigers and Dodgers",
    "cate blanchett and jude law":"Cate Blanchett and Jude Law","michael and geoffrey":"Michael and Geoffrey",
    "hamms":"Hamm's","hersheys":"Hershey's","papa johns":"Papa John's","macys":"Macy's",
    "brooks bros":"Brooks Bros.","youtube":"YouTube","disney":"Disney","chevron":"Chevron",
    "atari":"Atari","nerds":"Nerds","alka seltzer":"Alka-Seltzer","old style":"Old Style",
    "red lobster":"Red Lobster","parker bros":"Parker Bros.","phase 10":"Phase 10",
    "toss across":"Toss Across","monster com":"Monster.com","honda accord":"Honda Accord",
    "montgomery ward":"Montgomery Ward","general mills":"General Mills","wayne enterprises":"Wayne Enterprises",
    "workday":"Workday","gadsby":"Gadsby","shamballa":"Shamballa","shangri la":"Shangri-La",
    "mt rushmore":"Mt. Rushmore","mt crumpit":"Mt. Crumpit","wounded knee":"Wounded Knee",
    "the peach pit":"The Peach Pit","hitler":"Hitler","buy n large":"Buy N Large",
    "book em dano":"Book 'em, Dano","you better run pat benatar":"You Better Run - Pat Benatar",
    "moving in stereo the cars":"Moving in Stereo - The Cars","beavis and butthead":"Beavis and Butt-Head"
  };
  Object.keys(HAND).forEach(function(k){ CASE_CANON[k]=HAND[k]; });
})();
var CASE_SURNAME={};
(function buildCaseSurnames(){
  var STOP={brown:1,white:1,black:1,green:1,gray:1,grey:1,young:1,king:1,bell:1,cook:1,baker:1,fisher:1,mason:1,cooper:1,taylor:1,ford:1,ward:1,wells:1,banks:1,fields:1,day:1,hall:1,wood:1,rice:1,price:1,lane:1,ray:1,lee:1,rose:1,bird:1,fox:1,wolf:1,stone:1,long:1,short:1,small:1,best:1,west:1,north:1,snow:1,frost:1,rivers:1,brooks:1,hayes:1,may:1,day:1};
  Object.keys(NAME_GENDER).forEach(function(k){
    var parts=k.split(/\s+/);
    if(parts.length<2) return;
    var sur=parts[parts.length-1].replace(/[^A-Za-zÀ-ÿ'’-]/g,"");
    if(sur.length<3 || /^[IVX]+$/.test(sur)) return;
    var n=norm(sur);
    if(STOP[n] || COLOR_NORM[n] || MONTH_NORM[n] || SEASON_NORM[n]) return;
    CASE_SURNAME[n]=sur;
  });
})();
/* Verified common-noun answers the kind classifier files under a
   name kind (it reads any "X and Y" pair as a group) — never
   capitalised by the kind gate. */
var CASE_STOP={ "platypus and echidna":1 };
var CASE_FIXED=0;
/* ================= ACCENT-TWIN AUDIT =================
   The reported bug (Q6, Round 2): a Wuthering Heights set dealt
   both "Emily Brontë" and "Emily Bronte" as separate choices, and
   picking the accented one was marked wrong — they are the same
   name; only the diaeresis differs. norm() now folds diacritics
   (see ANSWER MATCHING), so every duplicate check in the game —
   mcChoicesValid, the used-sets in every distractor picker and
   repair pass, the render-time guard, and the deal-time guard in
   mcSetValid below — treats accent variants (and case variants)
   as one string, at load time and at deal time alike, and
   answerMC scores a pick that differs from the stored answer only
   by accents or case. This final pass is the pool-wide proof, run
   after every other repair pass over every multiple-choice pool:
   any set still holding two choices that differ only by accents
   or case is rebuilt by the same kind/gender-checked repair the
   integrity pass uses (fixMCQuestion), and a set that cannot be
   rebuilt is excluded from multiple-choice dealing instead of
   being dealt with a twin in it. No question is removed, no
   answer changes, and a question's typed use is untouched. */
var ACCENT_TWIN_STATS={checked:0, repaired:0, excluded:0};
/* ================= FINAL SET SWEEP =================
   The last load-time word on multiple-choice sets. The repair
   passes above work as the banks are built and audited, but a
   bank-wide dump after the v64 fixes still found a handful of
   stored sets that the set test itself (mcChoicesValid plus the
   full distractorBad kind/subkind test) rejects — DJ duo
   answers such as "Beavis and Butt-Head" dealt against
   presidents, bands, and animal pairs — that no pass had
   stamped mcExcluded, so only the deal-time guard's re-test was
   keeping them out of a deal. This sweep closes that gap at
   load: it re-tests every multiple-choice question in the game
   on the set test alone and stamps any set that cannot field
   three same-kind choices mcExcluded. It deliberately does
   not attempt the standard rebuild for these: the residual
   failures are DJ duo answers whose kind the bank holds no
   three matches for, and a classifier-only rebuild would deal
   a visibly mixed set — the exact defect being fixed — so
   exclusion is the correct outcome. (The never-deal flags are
   a separate class, already barred from every deal by their
   own stamps; a set failing only on those is not this sweep's
   business, and excluding here never touches a question's
   typed use.) An excluded question stays in its bank; it is
   simply never dealt as multiple choice. After this pass, no
   multiple-choice set in the game both fails the set test and
   remains unexcluded. */
var FINAL_SET_STATS={checked:0, excluded:0};
(function bakeStage2(){
  if(BAKED_FAILED){
    /* Fallback (see BAKED BANK STATE): the early passes already ran at
       stage 1, so the late passes now run in their original order on
       the same seeded stream the game always used. */
    leannRebuildSets();
    SUBKIND_ENFORCE_STATS=enforceSubkindChoices();
    leannFamilyGuard();
    normalizeChoiceCasing();
    ACCENT_TWIN_STATS={checked:0,repaired:0,excluded:0}; accentTwinAudit();
    FINAL_SET_STATS={checked:0,excluded:0}; finalSetSweep();
    return;
  }
  bakedApply(BAKED2);
  CASE_FIXED=438;
  ACCENT_TWIN_STATS={checked:6246,repaired:0,excluded:0};
  FINAL_SET_STATS={checked:6246,excluded:6};
})();
/* ================= WEAK-DISTRACTOR PASS (STAGE 3) =================
   The kind/subkind passes guarantee a distractor is the same KIND
   as its answer. This pass audits what they cannot: whether the
   same-kind company is PLAUSIBLE — close enough that a player who
   half-knows is tempted, wrong only on the fact itself. Five tests:
   (1) NUMERIC SPREAD — a year/number/quantity distractor wildly
       distant from the answer (centuries for a modern year, orders
       of magnitude for a count) while closer values exist.
   (2) ERA/DOMAIN DISTANCE — a country/capital distractor from a
       different region when the set already leans cross-region, a
       far-away state for a geography stem, a far-off president for
       an ordinal stem. (Gender, industry, brand, team, phrase and
       DJ-domain distance are the earlier passes' tests and are not
       repeated here.)
   (3) LENGTH/FORMAT GIVEAWAY — the correct answer is the only
       choice of its format: length beyond 2x / below 0.5x the
       median distractor length with the distractors clustered, a
       lone middle initial / digit, or a lone "The"/comma/word-count
       shape combined with a length skew.
   (4) GRAMMAR/INTERROGATIVE FIT — a "who…" stem whose distractor
       is not a who at all (largely the kind pass's ground; counted
       here so the audit reports it, fixed by the same picker).
   (5) DEAD CHOICES — a distractor that duplicates another choice's
       entity (an abbreviation/full-name pair, a team under two
       spellings, a plural twin), a sheet-junk string ("Cocktail
       weekend?"-style debris, "(not …)" asides, "… etc"), or —
       the correctness bug — a distractor that is ALSO a correct
       answer: the stored answer of a twin question with the same
       stem, an accepted alternate, or the answer under its alias.
   Fixes draw ONLY from the game's own verified strings: other
   questions' correct answers first, then harvested choices, then
   the verified subkind/industry pools, then generated in-domain
   numeric neighbours — always re-checked against every earlier
   fence (kind, gender, subkind, industry, domain) and against
   this pass's own tests. A set whose flagged distractors cannot
   be replaced is excluded from multiple-choice dealing (it stays
   in its bank; typed use is untouched, as with every mcExcluded
   stamp). Length-only sets that resist repair stay dealt and are
   counted as residuals: a proper name's length is its own, and
   excluding hundreds of sound sets over a soft signal would do
   more harm than the giveaway does. The pass is deterministic —
   no rand() draws — so the baked diff and a live fallback run
   produce byte-identical banks at any stream position. */
var WEAK_CITY_REGION=null;
var WEAK_ORD_WORDS=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth","twentieth","twenty-first","twenty-second","twenty-third","twenty-fourth","twenty-fifth","twenty-sixth","twenty-seventh","twenty-eighth","twenty-ninth","thirtieth","thirty-first","thirty-second","thirty-third","thirty-fourth","thirty-fifth","thirty-sixth","thirty-seventh","thirty-eighth","thirty-ninth","fortieth","forty-first","forty-second","forty-third","forty-fourth","forty-fifth"];
var WEAK_ENFORCE_STATS={"checked":6213,"flaggedT1":46,"flaggedT2":126,"flaggedT3":416,"flaggedT4":8,"flaggedT5":36,"fixed":563,"fixedRedealt":563,"fixedAuthored":0,"excluded":4,"residualShape":83,"exclusions":[{"q":"Who played Forrest Gump in the 1994 film?","cat":"Pop Culture","answer":"Tom Hanks","tests":"T4 (title-fenced who-question)"},{"q":"Who took over as Dumbledore from the third 'Harry Potter' film?","cat":"Pop Culture","answer":"Michael Gambon","tests":"T4 (title-fenced who-question)"},{"q":"Who played the Terminator in the 1984 film?","cat":"Pop Culture","answer":"Arnold Schwarzenegger","tests":"T4 (title-fenced who-question)"},{"q":"Who played Marty McFly in 'Back to the Future'?","cat":"Pop Culture","answer":"Michael J. Fox","tests":"T4 (animal-fenced who-question)"}],"arguablyCorrect":[{"q":"Which US state has this shape?","cat":"Map Shapes","answer":"Virginia","other":"West Virginia","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Which US state’s flag is this?","cat":"US State Flags","answer":"Virginia","other":"West Virginia","resolution":"also-correct distractor replaced from the verified pool"},{"q":"What is the nickname of the US state of New Jersey?","cat":"","answer":"Garden State","other":"Peace Garden State","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Which US state has this shape?","cat":"Map Shapes","answer":"West Virginia","other":"Virginia","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Trivia Clue: “Cats cradle author” — what answer goes with this clue?","cat":"Trivia","answer":"Kurt Vonnegut","other":"Kurt Vonnegut, Jr.","resolution":"also-correct distractor replaced from the verified pool"},{"q":"How was LeAnn Rimes' album 'Blue' certified in the US?","cat":"LeAnn Rimes","answer":"Six-times Platinum","other":"Platinum","resolution":"also-correct distractor replaced from the verified pool"},{"q":"What did 'Something's Gotta Give' peak at on Billboard Hot Country Songs?","cat":"LeAnn Rimes","answer":"No. 2","other":"2","resolution":"also-correct distractor replaced from the verified pool"},{"q":"On which 'Voice' shows has LeAnn Rimes been a coach?","cat":"LeAnn Rimes","answer":"The Voice Australia (Season 13) and The Voice UK (Series 13)","other":"The Voice","resolution":"also-correct distractor replaced from the verified pool"},{"q":"How many Grammy Awards has LeAnn Rimes won?","cat":"LeAnn Rimes","answer":"2","other":"No. 2","resolution":"also-correct distractor replaced from the verified pool"},{"q":"How many articles does the main body of the US Constitution have?","cat":"Law","answer":"Seven","other":"Twenty-seven","resolution":"also-correct distractor replaced from the verified pool"},{"q":"What is the word equation for aerobic respiration?","cat":"Chemistry","answer":"Glucose + oxygen → carbon dioxide + water","other":"Carbon dioxide + water → glucose","resolution":"also-correct distractor replaced from the verified pool"},{"q":"What is the word equation for aerobic respiration?","cat":"Chemistry","answer":"Glucose + oxygen → carbon dioxide + water","other":"Oxygen + water → glucose","resolution":"also-correct distractor replaced from the verified pool"},{"q":"In chemistry, one mole of a substance contains how many particles?","cat":"Chemistry","answer":"About 6.02 × 10²3","other":"About 6.02 × 10²","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Which bird lays the largest egg?","cat":"Science","answer":"The ostrich","other":"Ostrich","resolution":"also-correct distractor replaced from the verified pool"},{"q":"What does the prefix 'hypo-' mean in medical terms?","cat":"Medical","answer":"Below normal or deficient","other":"Normal","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Which cereal's mascot is Buzz the Bee?","cat":"Advertising","answer":"Honey Nut Cheerios","other":"Cheerios","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Which cereal's mascot is a bee named Buzz?","cat":"Advertising","answer":"Honey Nut Cheerios","other":"Cheerios","resolution":"also-correct distractor replaced from the verified pool"},{"q":"How high is a standard basketball hoop from the floor?","cat":"Sports","answer":"10 feet","other":"10.5 feet","resolution":"also-correct distractor replaced from the verified pool"},{"q":"Which sport uses the terms 'love', 'deuce', and 'break point'?","cat":"Sports","answer":"Tennis","other":"Table tennis","resolution":"also-correct distractor replaced from the verified pool"}]}; /* baked literal: the counts the original load-time pass produced (see BAKED BANK STATE) */
var BAKED3=[[1,["714","93","15.5","91"],3],[3,["Switzerland","The Soviet Union","Denmark","France"],0],[5,["Greece","Monaco","Russia","Sweden"],0],[9,["two","zero","one","2"],2],[29,["The Quiet Man","You Better Run - Pat Benatar","University of Miami","Rockford Files"],1],[38,["JT","Joe Lewis","Bud Grant","Dion"],0],[45,["Utah Jazz","Pistons","Los Angeles Lakers","Milwaukee Bucks"],1],[46,["Arkansas","Missouri","North Carolina","Iowa"],1],[52,["John Hughes","Kurt Vonnegut, Jr.","George R.R. Martin","Roald Dahl"],1],[71,["Afghanistan","Jordan","Singapore","Turkey"],3],[76,["Turkey","Philippines","Singapore","Afghanistan"],3],[79,["Missouri","S. Carolina","S. Dakota","North Carolina"],1],[83,["Vatican City","Belgium","Moldova","Netherlands"],3],[98,["Canada","Peru","Mexico","Chile"],3],[100,["Giants","Cameo","Daughtry","B-52's"],3],[116,["Indonesia","Turkey","Afghanistan","Singapore"],3],[120,["leader of the band","Where students are sorted into houses","Where owls are bought in Diagon Alley","Where goblins work"],3],[130,["Mattel","Phase 10","Toss Across","Hasbro"],1],[144,["Montgomery Ward","Van Buren","peter","Zefram Cochrane"],0],[146,["JFK","VW","VA","MI6"],3],[155,["devil wears prada","one fine day","fox in socks","doing dishes"],1],[162,["477,152 miles/day","476,952 miles/day","477,052 miles/day","476,852 miles/day"],1],[186,["1990","1988","1987","1986"],2],[196,["Orbit","Judge Judy","Rudyard Kipling","Gadsby"],3],[197,["Rudyard Kipling","The 25th Amendment","16th amendment","Ernest Cline"],2],[200,["Dodgers","Chicago Cubs","Astros","Atlanta Braves"],2],[210,["86 mph","18'6\"","19'6\"","10 minutes"],1],[225,["1923","1910","1947","1911"],1],[231,["one fine day","doing dishes","devil wears prada","fox in socks"],3],[237,["1924","1922","1923","1947"],2],[239,["Apple","Mars","Zr","Sonic"],2],[243,["Florida","The Peach Pit","Britain","Central Park"],1],[258,["Colorado Springs","Flagstaff","Colorado, Oklahoma, Texas, Arizona, Utah","Jackson, Mississippi"],2],[263,["4","30","6","three"],0],[279,["1973","1967","1935","1972"],3],[280,["FL","North Carolina","West Virginia","S. Carolina"],1],[281,["1981","1982","1947","1987"],0],[282,["Zefram Cochrane","About 2,000","Louis Sachar","Dunwoody 2008"],3],[290,["734","714","724","704"],1],[293,["1919","1918","1920","1935"],0],[294,["Bhutan","Turkey","Singapore","Afghanistan"],1],[299,["1936","1935","1946","1923"],1],[302,["Sonic","W. P. Kinsella","God Only Knows","Apple"],1],[305,["1977","1968","1947","1967"],3],[306,["1814","1813","1812","1811"],2],[309,["France","Belgium","Romania","Moldova"],3],[319,["God Only Knows","Orbit","enemy","Stay Awake"],2],[324,["53","56","7","55"],0],[330,["Peru","Chile","Barbados","Mexico"],2],[333,["Madagascar","Zimbabwe","Mozambique","South Africa"],3],[337,["3X","Veins","fathom","Angina"],0],[343,["Chile","Mexico","Barbados","Canada"],3],[349,["Mexico","Barbados","Chile","Peru"],0],[367,["Moscow","Mars","Clay","pi"],3],[376,["Acute Respiratory Distress Syndrome","Sonic","The Lizzie McGuire Movie","Madeleine L'Engle"],0],[379,["Acute Respiratory Distress Syndrome","herbert hoover","Trevor Bayne","Miracle on Ice 1980"],2],[384,["Korea","Japan","The Philippines","Turkey"],1],[405,["Georgia","FL","Alabama","UT"],1],[408,["Montana and North Dakota","Lord of the Flies","One sweet day","Big Bird Jack in the Box"],3],[423,["Buy N Large","Season of the sticks","Preston","Beavis and Butt-Head"],1],[429,["1975","1968","1974","1987"],2],[430,["greenland shark","Hamster","Giant squid","Flying squirrel"],0],[433,["The Anatomy Lesson of Dr. Nicolaes Tulp","The Hitchhiker's Guide to the Galaxy","assassinating McKinley","Twenty Thousand Leagues Under the Seas"],2],[439,["Operation Barbarossa","Moscow","Toni Morrison","Van Buren"],0],[452,["The Thief of Bagdad","The Circus","Pale Rider","Last Thing on My Mind"],2],[459,["4 o'clock","18'6\"","20 bottles","3 o'clock"],3],[466,["21,000 feet","21,100 feet","20,900 feet","21,200 feet"],0],[467,["Barbados","Turks and Caicos","Greece","Dominican Republic"],1],[469,["Zefram Cochrane","Apple","Lord of the Flies","Leonard Hofstadter"],3],[480,["S. Carolina","Tennessee","Utah","S. Dakota"],3],[482,["Rudolph","The letter R in 'America'","Lucky Aide","Bring in Usual Suspects"],0],[483,["69 years","65 years","18'6\"","67 years"],3],[501,["Singapore","Jordan","Afghanistan","Turkey"],3],[506,["Wile E. Coyote","Peter Pettigrew","Harry Stamper","Harry and Marv"],0],[507,["Singapore","Turkey","Israel","Afghanistan"],1],[513,["Cuba","Peru","Brazil","Haiti"],1],[515,["San Francisco 49ers","New Orleans Saints","Falcons","Broncos"],2],[556,["92-95","10 minutes","94-95","18'6\""],0],[558,["Giants","Falcons","Buffalo Bills","Dallas Cowboys"],0],[567,["Psychedelic Furs","cy young","World Cup 2016","nine to 0"],3],[578,["baker","Clay","Iditarod","shrek"],1],[583,["owls","Yak","mollusk","pig"],3],[597,["Stephen King","John Hughes","Kurt Vonnegut","Roald Dahl"],2],[600,["The Lighthouse of Alexandria","Samuel Osgood House","Central Park","The Peach Pit"],1],[609,["Moldova","Halifax","N. Pole","Wyoming"],2],[613,["1859","1861","1858","1860"],0],[629,["56","86","84","88"],1],[637,["67 years","10 minutes","11 minutes","20 bottles"],1],[638,["1977","1974","1978","1976"],0],[677,["F. Scott Fitzgerald","Ernest Cline","L. M. Montgomery","Arthur Golden"],0],[685,["J. D. Salinger","Agatha Christie","Bram Stoker","P. L. Travers"],0],[698,["Emily Bronte","Lois Lowry","Andy Weir","Homer"],3],[699,["Andy Weir","Homer","J. D. Salinger","Dan Brown"],1],[717,["Emma Donoghue","Oscar Wilde","L. Frank Baum","P. L. Travers"],2],[728,["R. J. Palacio","Stieg Larsson","Isaac Asimov","L. Frank Baum"],0],[738,["J.R.R. Tolkien","Thomas Jefferson","George R.R. Martin","William Gibson"],2],[750,["Emily Bronte","A. A. Milne","H. G. Wells","Veronica Roth"],1],[764,["E. B. White","J.R.R. Tolkien","Thomas Jefferson","Agatha Christie"],1],[765,["Aldous Huxley","E. B. White","Frank Herbert","J.R.R. Tolkien"],3],[766,["Gillian Flynn","C.S. Lewis","E. B. White","Alexandre Dumas"],1],[777,["Phnom Penh","Kuwait City","Naypyidaw","Mogadishu"],0],[782,["Minsk","Maseru","Bern","Prague"],2],[784,["Canberra","Jefferson","Stockholm","Amsterdam"],2],[785,["Amsterdam","Stockholm","Ljubljana","Copenhagen"],3],[786,["Bucharest","Stockholm","Reykjavik","Copenhagen"],2],[787,["Amsterdam","Porto-Novo","Ljubljana","Reykjavik"],0],[789,["Asmara","Ottawa","Moscow","Skopje"],2],[790,["Jefferson","Bucharest","Ljubljana","Amsterdam"],1],[791,["Jefferson","Thimphu","Stockholm","Belgrade"],3],[792,["Muscat","Beirut","Ankara","Baghdad"],2],[794,["Baghdad","Monrovia","Yerevan","Bishkek"],0],[795,["Dakar","Tunis","Prague","Abuja"],3],[796,["Pretoria","Khartoum","Kampala","Algiers"],0],[801,["Belmopan","Brasilia","Santiago","Asunción"],2],[802,["Havana","Asmara","Lima","Quito"],2],[804,["Carl","Canberra","Suva","Apia"],2],[807,["Beirut","fridge","Ottawa","Muscat"],0],[808,["Brasilia","Muscat","Beirut","Ankara"],1],[811,["Kuala Lumpur","Pyongyang","Bandar Seri Begawan","Phnom Penh"],2],[812,["Jerusalem","Ashgabat","Pyongyang","Naypyidaw"],2],[813,["Harare","Dakar","Tunis","Abuja"],2],[814,["Khartoum","Thimphu","Pretoria","Algiers"],0],[815,["Kampala","Pretoria","Windhoek","Algiers"],0],[818,["Abuja","Canberra","Dakar","Tunis"],2],[821,["Havana","Quito","Asunción","Port of Spain"],0],[824,["Lima","Kigali","Havana","Quito"],3],[825,["Canberra","Apia","Suva","Palikir"],1],[826,["Suva","Port Vila","Palikir","Funafuti"],1],[827,["Tallinn","Nicosia","Vilnius","Skopje"],0],[830,["Canberra","Nicosia","Tallinn","Vilnius"],1],[833,["Moscow","lily","Skopje","Thimphu"],2],[836,["Baghdad","Yerevan","Bishkek","Prague"],1],[838,["Bishkek","Ashgabat","Kendrick","Tashkent"],1],[851,["Libreville","Panama City","Santo Domingo","Paramaribo"],2],[855,["Belmopan","Paramaribo","Panama City","Asunción"],1],[856,["Apia","Palikir","Funafuti","Port Vila"],1],[858,["Port Vila","Jefferson","Palikir","Funafuti"],3],[859,["George Washington","John Adams","James Monroe","Thomas Jefferson"],0],[860,["James Madison","George Washington","Thomas Jefferson","John Adams"],2],[861,["James Monroe","James Madison","Andrew Jackson","Millard Fillmore"],0],[862,["Andrew Jackson","John Quincy Adams","George Washington","Martin Van Buren"],0],[863,["Martin Van Buren","William Henry Harrison","Millard Fillmore","Andrew Jackson"],1],[864,["James K. Polk","Zachary Taylor","Millard Fillmore","John Tyler"],0],[865,["James Monroe","Zachary Taylor","Franklin Pierce","Millard Fillmore"],3],[866,["Chester A. Arthur","Benjamin Harrison","Andrew Jackson","James Buchanan"],3],[867,["Andrew Johnson","Rutherford B. Hayes","Chester A. Arthur","John Tyler"],0],[868,["Chester A. Arthur","Rutherford B. Hayes","Andrew Johnson","James A. Garfield"],1],[869,["Grover Cleveland","James A. Garfield","Chester A. Arthur","Benjamin Harrison"],2],[870,["Benjamin Harrison","Grover Cleveland","Chester A. Arthur","William McKinley"],0],[871,["Benjamin Harrison","William McKinley","Chester A. Arthur","Ulysses S. Grant"],1],[872,["Warren G. Harding","Chester A. Arthur","William Howard Taft","Theodore Roosevelt"],2],[873,["Herbert Hoover","Warren G. Harding","Chester A. Arthur","Woodrow Wilson"],1],[874,["Harry S. Truman","Herbert Hoover","Franklin D. Roosevelt","Dwight D. Eisenhower"],1],[875,["Jimmy Carter","John F. Kennedy","Herbert Hoover","Harry S. Truman"],3],[876,["John F. Kennedy","Herbert Hoover","Lyndon B. Johnson","Dwight D. Eisenhower"],0],[877,["Gerald Ford","George W. Bush","Richard Nixon","Herbert Hoover"],2],[878,["Herbert Hoover","Lyndon B. Johnson","Jimmy Carter","Gerald Ford"],2],[879,["Barack Obama","Bill Clinton","George H. W. Bush","Donald Trump"],2],[880,["George W. Bush","Bill Clinton","Donald Trump","Barack Obama"],0],[881,["Donald Trump","George H. W. Bush","Jimmy Carter","Barack Obama"],0],[921,["Allen Ludden and Betty White","Pink Floyd","Keith Urban/Nicole Kidman","The Duggars"],2],[925,["Adele","Kesha","Kerry Washington","Vanna White"],1],[968,["Dwight D. Eisenhower","Rutherford B. Hayes","Winston Churchill","Carl Sandburg"],1],[969,["Monet","Jack Lew","William Howard Taft","Winston Churchill"],0],[995,["Lady & Gentlemen","Blue","1999","LeAnn Rimes"],1],[997,["Ronan Keating","Six-times Platinum","Curb Records","Legally Blonde 2"],1],[1010,["Northern Lights","Big Deal","It's Christmas Eve","Con Air"],3],[1024,["The Cat in the Hat","Captain Jack Sparrow","SpongeBob SquarePants","Piper Perabo's character Violet Sanford"],3],[1031,["12","No. 2","No. 3","No. 17"],1],[1054,["The Voice Australia (Season 13) and The Voice UK (Series 13)","Till We Ain't Strangers Anymore","You Light Up My Life: Inspirational Songs","Sittin' on Top of the World"],0],[1056,["No. 3","1","2","12"],2],[1057,["11","No. 17","12","13"],2],[1063,["Chant: The Human & the Holy","Sittin' on Top of the World","God's Work","Twisted Angel"],1],[1071,["Spitfire","Friskies","Joker","1999"],3],[1093,["Star Search","Northern Lights","Holiday in Your Heart","American Idol"],0],[1097,["Chant: The Human & the Holy","I Need You","This Woman","What a Wonderful World"],1],[1098,["Quest for Camelot","Spartacus","Whatever We Wanna","The Voice Australia (Season 13) and The Voice UK (Series 13)"],0],[1103,["Ronan Keating","Four-times Platinum","The Voice UK (Series 13)","Legally Blonde 2"],3],[1104,["Giraffe","African elephant","Rhino","Elephant seal"],1],[1113,["50","110","25","100"],3],[1152,["Calf","Tadpole","gosling","Fry"],1],[1169,["1","2","3","0"],0],[1300,["Tugrik","Solomon Islands dollar","West African CFA franc","Ruble"],2],[1301,["Trinidad and Tobago dollar","Central African CFA franc","Rand","Krona"],1],[1374,["Addis Ababa","Kampala","Djibouti City","Accra"],2],[1593,["Franc","Pound sterling","Dinar","Lebanese pound"],1],[1611,["Jamaica","Brazil","Canada","Bolivia"],2],[1612,["Zinc","Potassium","Calcium","Aluminum"],1],[1616,["Edmund Spenser","Roald Dahl","E. B. White","C.S. Lewis"],2],[1623,["Australia","Fiji","Kiribati","New Zealand"],0],[1635,["Denmark","Greece","Russia","Spain"],2],[1744,["2100","2,100","2500","2,000"],3],[1838,["Singapore dollar","Cordoba","Dalasi","Djiboutian franc"],3],[1844,["Namibian dollar","Bahamian dollar","Pa'anga","Quetzal"],1],[1920,["Astana","Kuwait City","Kabul","Ulaanbaatar"],1],[2047,["Illinois","North Carolina","Maryland","Virginia"],3],[2194,["New Jersey","New York","Virginia","Arkansas"],2],[2196,["Tin","Antimony","Selenium","Zinc"],0],[2217,["Madagascar","Tanzania","Mozambique","South Africa"],3],[2227,["Brazil","Uruguay","Mexico","Canada"],3],[2242,["China","India","Japan","Turkey"],0],[2248,["1,521","1,421","1,621","812"],0],[2249,["1,781","3,481","1,681","1,581"],2],[2250,["2,049","1,949","1,749","1,849"],3],[2251,["2,025","2819","1,925","2,125"],0],[2282,["1758","1727","1729","1728"],3],[2297,["Empire State","Garden State","Volunteer State","Equality State"],1],[2314,["Krone","Comorian franc","Belize dollar","Krona"],0],[2332,["Peso","Belize dollar","Comorian franc","Pula"],0],[2418,["Addis Ababa","Lome","Libreville","Malé"],1],[2614,["Niger","Burundi","Comoros","Liberia"],3],[2683,["Denmark","England","Spain","Croatia"],0],[2693,["Spain","Malta","Wales","Denmark"],0],[2716,["Papua New Guinea","New Zealand","Micronesia","Australia"],1],[2722,["A type of fossil","How familiar consumers are with a brand","A hot desert wind","The earthy smell after rain on dry soil"],3],[2723,["Canada","Mexico","Uruguay","United States"],0],[2724,["Fiji","Australia","New Zealand","Micronesia"],1],[2729,["Hippocrates","Aristotle","Plato","Tutankhamun"],0],[2777,["Trinidad and Tobago dollar","Central African CFA franc","Quetzal","Pa'anga"],1],[2845,["Doha","Malé","Thimphu","New Delhi"],1],[2848,["Nukuʻalofa","Majuro","Apia","Tarawa"],2],[2980,["Pennsylvania","New Hampshire","Ohio","West Virginia"],3],[3064,["Delaware","Oklahoma","Maryland","Arkansas"],0],[3067,["Oklahoma","New York","Maryland","Arkansas"],2],[3079,["Compels a person to appear or produce evidence","Dismisses a case","Disobeying or disrespecting a court's authority","Seizes property permanently"],0],[3083,["A parking violation","A serious crime, usually punishable by over a year in prison","Deception intended to cheat someone out of money or property","A minor traffic offense"],1],[3091,["Force or the threat of force against a person","Write legislation","Arrest suspects","Witness and certify signatures on documents"],3],[3101,["A person's medical history","How a person's property should be handled after death","Directs how a person's property is distributed after death","A business partnership"],1],[3102,["A criminal trial by jury","Settling a dispute outside court before a neutral decision-maker","A neutral helper guides the parties to their own settlement","A prison sentence"],1],[3105,["Filing fee","Authority to hear a case","The guilty mind","Money paid to compensate for a loss"],1],[3106,["Pleads guilty, often to a lesser charge, in exchange for terms","Pleads guilty, usually to a lesser charge, in exchange for concessions","Demands a jury trial","Appeals the verdict"],0],[3133,["The House of Representatives","The power to collect taxes","The Cabinet","The Supreme Court"],0],[3163,["The President, with Senate confirmation","A type of warrant","A written statement sworn under oath","An oral objection"],2],[3167,["Pleads guilty, usually to a lesser charge, in exchange for concessions","Demands a jury trial","Appeals the verdict","Pleads guilty, often to a lesser charge, in exchange for terms"],0],[3171,["A doubled sentence","Being tried twice for the same offense after acquittal","Being tried twice for the same crime after an acquittal","Two juries in one trial"],1],[3173,["Warning crowds to disperse","Reading the charges at trial","Informing arrested people of their rights, including silence and counsel","Sound travels slowest through a vacuum — it cannot travel at all"],2],[3180,["A court order requiring a party to do or stop doing something","A type of fine","A jury instruction","The court process of validating a will and settling an estate"],0],[3181,["Something of value exchanged by both sides","One side fails to perform its obligations","A witness objects","The contract is signed"],1],[3182,["Property owners within a set distance of a new road","Personal privacy","Trade routes","Creations of the mind, such as inventions and works of art"],3],[3183,["A written book","Original creative works like books, music, and films","A brand's identifying name, logo, or symbol","Trade secrets"],2],[3188,["For life, during good behaviour","Brown v. Board of Education","Until age 70","Four years"],0],[3192,["The president's power to reject a bill passed by Congress","The judicial branch","The executive branch","A state governor's veto"],0],[3194,["The power to collect taxes","The Supreme Court","The Cabinet","The House of Representatives"],3],[3195,["Tax imports","Grant pardons","Take private property for public use, with compensation","Government taking private property for public use with fair compensation"],2],[3196,["The jury in a capital trial","A jury that decides whether enough evidence exists to indict","The court process of validating a will and settling an estate","A jury of 24 in civil cases"],1],[3197,["Three-quarters","A simple majority","The verdict must be unanimous","Beyond a reasonable doubt"],2],[3200,["A neutral helper guides the parties to their own settlement","A criminal plea process","A binding court ruling","Settling a dispute outside court before a neutral decision-maker"],0],[3202,["A marriage license","A type of parole","A court order requiring a party to do or stop doing something","The court process of validating a will and settling an estate"],3],[3204,["A reduced fine","Obtaining money or property through threats","A court pardon","Early release from prison under supervision"],3],[3207,["Without compensation","Something for something — an exchange","Before the law","Legal responsibility for something"],1],[3208,["A suit over school policy","A suit brought by a group of people with the same claim","A suit in a classroom","Exchange evidence and information before trial"],1],[3209,["Review and possibly reverse a lower court's decision","Family disputes only","Resolving minor civil disputes over limited amounts of money","Minor criminal trials"],2],[3213,["A law passed by Congress","A state governor's veto","Compels a person to appear or produce evidence","A directive issued by the president to manage the federal government"],3],[3214,["The Nineteenth Amendment","Review and possibly reverse a lower court's decision","The Twenty-fourth Amendment covers federal elections","The Twenty-sixth Amendment"],2],[3217,["Ten","Eight","Seven","Twelve"],2],[3227,["The Bill of Rights","The rule that federal law overrides conflicting state law","The president's veto power","Each branch limiting the powers of the others"],1],[3228,["Murder of an officer","Unlawfully entering a building intending to commit a crime","Murder with a weapon","A death that occurs during the commission of a felony"],3],[3229,["Early release from prison under supervision","Killing in self-defense","Unlawful killing without malice aforethought","Attempted murder"],2],[3232,["Force or the threat of force against a person","Theft by taking property through threats against a person","Entering a building","A weapon license"],0],[3233,["Forging a check","Stealing money or property one was trusted to manage","Bribing an official","Theft of property by someone lawfully in possession of it"],1],[3234,["A serious crime, usually punishable by over a year in prison","An honest mistake","A broken promise","Deception intended to cheat someone out of money or property"],3],[3235,["Early release from prison under supervision","Threatening a witness only","Obtaining money or property through threats","Stealing by stealth"],2],[3239,["Presides over the trial","Brings the case to court","Testifies as a witness","Sworn out-of-court testimony recorded before trial"],3],[3240,["Select the jury","Exchange evidence and information before trial","A suit brought by a group of people with the same claim","Hear the verdict"],1],[3244,["Retry the witnesses","Fine the defendant","Review and possibly reverse a lower court's decision","The Twenty-fourth Amendment covers federal elections"],2],[3245,["The opening statement","A sales promotion to encourage adoption","The jury's (or judge's) formal decision on guilt or liability","A trial by judges without a jury"],2],[3246,["Early release from prison under supervision","The jury's verdict","The punishment imposed after conviction","The arraignment"],2],[3247,["Charges are read and the defendant enters a plea","The jury is selected","The sentence is served","Disobeying or disrespecting a court's authority"],0],[3248,["A formal charge issued by a grand jury","A judge's verdict","A sentencing order","The punishment imposed after conviction"],0],[3249,["Volunteers at the courthouse","Property owners within a set distance of a new road","Creations of the mind, such as inventions and works of art","Schools named in a will"],1],[3250,["A court order requiring a person to appear or produce evidence","A verdict of not guilty","A judge's written opinion","Compels a person to appear or produce evidence"],0],[3251,["Breaking a contract on purpose","Failure to exercise reasonable care, causing harm","Trespassing on land","A contract made with spoken words instead of writing"],1],[3254,["Theft of property by someone lawfully in possession of it","Deception intended to cheat someone out of money or property","Robbing a person by force","Breaking into a building at night"],0],[3264,["Government taking private property for public use with fair compensation","Take private property for public use, with compensation","Police confiscating evidence","A landlord reclaiming a flat"],0],[3270,["14","0","15","7"],0],[3312,["Helium","Peat gas","Nitrogen","Carbon dioxide"],3],[3363,["ozone","carbon dioxide","water","sulfuric acid"],2],[3371,["water","sulfuric acid","ozone","carbon dioxide"],2],[3374,["HNO3","phosphoric acid","ozone","aluminium oxide"],1],[3400,["Speeds up a reaction without being used up","A radioactive particle","An atom or molecule with an electric charge","A type of crystal"],2],[3414,["Strongly acidic","Oxidized","Alkaline (basic)","Neutral"],2],[3422,["A type of acid","An atom or molecule with an electric charge","A metal oxide","A mixture of metals (or a metal with another element)"],3],[3432,["An atom or molecule with an electric charge","Speeds up a reaction without being used up","Glucose + oxygen → carbon dioxide + water","Glucose → lactic acid"],2],[3435,["Lithium itself is the key ion","Beta cells (islet cells)","Potassium","Calcium"],0],[3443,["Aluminium","Zinc","Copper","Aluminum"],0],[3458,["About 6.02 × 10²3","About 1,000","Exactly 100","Alkaline (basic)"],0],[3461,["Methyl orange","Caustic soda","Litmus","Lockjaw"],2],[3518,["Platinum","Palladium","Zinc","Lead"],3],[3836,["A yellow dwarf (G-type main-sequence star)","A neutron star","A white dwarf","A group of stars forming a recognisable pattern"],0],[3897,["Wind direction","Hurricane strength","Earthquake magnitude","Ground movement from earthquakes"],3],[3898,["The Saffir-Simpson scale","The Beaufort scale","The Richter scale (and moment magnitude scale)","The share of recipients who open the email"],2],[3941,["Golden eagle","Rhea","The ostrich","Cassowary"],2],[3963,["A group of stars forming a recognisable pattern","The process by which plants make food using sunlight","A cluster of galaxies","A belt of asteroids"],0],[3966,["To store the cell's DNA","To act as a barrier and control what enters and leaves the cell","The release of energy as seismic waves from moving rock","To produce the cell's energy"],1],[3969,["The Richter scale (and moment magnitude scale)","The Moon pulling on the oceans","Volcanoes cooling the crust","The release of energy as seismic waves from moving rock"],3],[4042,["The electrical activity of the brain","Lung capacity","Blood oxygen levels","The electrical activity of the heart"],3],[4043,["The electrical activity of the brain","The heart's rhythm","Muscle strength","The electrical activity of the heart"],0],[4077,["A burst appendix","A blood clot in the leg","Colds are caused by viruses, not bacteria","A blocked blood vessel in the brain (ischemic stroke)"],3],[4090,["Vitamin B3 (niacin)","Vitamin B1","Vitamin D","Helicobacter pylori"],0],[4121,["White blood cells","Adrenaline (epinephrine)","Serotonin","Melatonin"],1],[4141,["An epidemic (outbreak)","An endemic","Borrelia burgdorferi","A syndrome"],0],[4145,["Sleeping sickness","River blindness (onchocerciasis)","Attacks the body's own tissues","Leishmaniasis"],1],[4146,["Contaminated water","Airborne droplets","The bite of an infected animal","River blindness (onchocerciasis)"],2],[4159,["Botulinum","HPV (human papillomavirus)","Listeria","Helicobacter pylori"],1],[4168,["The nerves or nervous system","Double","Excessive","Below normal or deficient"],3],[4170,["The kidneys","The nerves or nervous system","Excessive or above normal","The muscles"],1],[4177,["Cushing's syndrome","The bite of an infected animal","Bones, making them weak and brittle","Joints only"],2],[4185,["A vaccine ingredient","A white blood cell","A blocked blood vessel in the brain (ischemic stroke)","A substance that triggers an allergic reaction"],3],[4190,["Ibuprofen","Acetaminophen (paracetamol)","Naproxen","Fermented soybeans"],1],[4194,["Brazil","Jamaica","Canada","Uruguay"],2],[4196,["Zimbabwe","Mozambique","Madagascar","South Africa"],3],[4212,["Beta cells (islet cells)","Acinar cells","In the bone marrow","Delta cells"],0],[4220,["Anemia","About 45,000","About 37 degrees","About 4,500"],3],[4229,["Stapes","Jugular vein","Vena cava","Aorta"],3],[4231,["The tongue","The jaw muscle (masseter)","The calf muscle","The pituitary gland"],1],[4232,["About 2 square metres","About 60,000 miles","About 6,000 miles","In the bone marrow"],1],[4234,["About 2,000","About 100,000","About 20,000","About 5 litres"],2],[4252,["Splatoon 2","Stardew Valley","Animal Crossing: New Horizons","Hawaiʻi Island (the Big Island)"],2],[4268,["Mexico","Uruguay","Brazil","Argentina"],2],[4273,["Emily Bronte","J.K. Rowling","Susan B. Anthony","Jane Austen"],1],[4297,["John Steinbeck","Paulo Coelho","H. G. Wells","L. Frank Baum"],2],[4299,["H. G. Wells","R. J. Palacio","Harper Lee","Alice Walker"],0],[4304,["F. Scott Fitzgerald","L. M. Montgomery","Miguel de Cervantes","Louis Sachar"],0],[4312,["P. L. Travers","Emma Donoghue","Jack London","J. D. Salinger"],3],[4325,["Dan Brown","Homer","Neil Gaiman","Andy Weir"],1],[4344,["L. Frank Baum","R. J. Palacio","Douglas Adams","John Green"],0],[4355,["Miguel de Cervantes","R. J. Palacio","P. L. Travers","Isaac Asimov"],1],[4365,["J.R.R. Tolkien","George R.R. Martin","James Cameron","Arthur Conan Doyle"],1],[4377,["A. A. Milne","H. G. Wells","Forrest Gump","Richard Wright"],0],[4384,["Margaret Atwood","L. M. Montgomery","Orson Scott Card","J. D. Salinger"],1],[4393,["C.S. Lewis","J.R.R. Tolkien","Jared Leto","Victor Hugo"],0],[4404,["Emma","Jane Eyre","Dune","Oliver Twist"],0],[4418,["One Hundred Years of Solitude","Murder on the Orient Express","The Time Machine","Oliver Twist"],0],[4439,["The Girl with the Dragon Tattoo","The Odyssey","Around the World in Eighty Days","Native Son"],0],[4445,["The Lion, the Witch and the Wardrobe","Ready Player One","The Girl with the Dragon Tattoo","Around the World in Eighty Days"],0],[4465,["Fur Elise","The Black Pirate","Tom Hanks","Till We Ain't Strangers Anymore"],2,"who-question read as a title question; no plausible same-kind MC company (weak pass)"],[4470,["Michael Gambon","Halloween","1999","The Fabelmans"],0,"who-question read as a title question; no plausible same-kind MC company (weak pass)"],[4487,["Arnold Schwarzenegger","Conclave","House on Haunted Hill","God's Work"],0,"who-question read as a title question; no plausible same-kind MC company (weak pass)"],[4528,["John G. Avildsen","George R.R. Martin","Martin Scorsese","Sylvester Stallone"],0],[4540,["Titan and Rhea","Michael J. Fox","Brad Bird","Tony the Tiger"],1,"person answer read as an animal from its surname; no plausible same-kind MC company (weak pass)"],[4541,["Thomas F. Wilson","Crispin Glover","Christopher Lloyd","Robert Zemeckis"],2],[4574,["Andrew Stanton","Pete Docter","John Lasseter","Forrest Gump"],2],[4651,["Boney M.","The Bee Gees","ABBA","BTS"],2],[4655,["Tupac Shakur","Prince","Ed Sheeran","Stevie Wonder"],1],[4658,["Blur","Oasis","Radiohead","Blink-182"],2],[4668,["Ariana Grande","Duffy","Lady Gaga","Amy Winehouse"],3],[4694,["Johnny Cash", "Hank Williams", "George Jones", "Merle Haggard"],0],[4713,["The Jackson 5","The Partridge Family","Jurassic 5","New Edition"],0],[4714,["ABBA","Boney M.","Pearl Jam","BTS"],0],[4719,["Chic","Kool & the Gang","N.W.A","Sister Sledge"],0],[4737,["Skeeter Davis","Jerry Lee Lewis","Carl Perkins","The Ventures"],2],[4738,["Robert Johnson","Chuck Berry","B.B. King","Dick Dale"],2],[4780,["Booker T. & the M.G.'s","Martha and the Vandellas","The Mamas & the Papas","KC and the Sunshine Band"],0],[4781,["The Who","The Beatles","Queen","Pink Floyd"],2],[4786,["Young MC","T. Rex","Sweet","Run-DMC"],1],[4805,["Eagles","Dallas Cowboys","Giants","Miami Dolphins"],0],[4811,[".38 Special","Maple syrup","Loverboy","fox in socks"],0],[4821,["Belinda Carlisle","Kim Carnes","Bonnie Tyler","Janis Joplin"],2],[4828,["Jeannie C. Riley","Skeeter Davis","heart will go on","Lynn Anderson"],0],[4831,["U2","Bush","Nas","Keane"],0],[4832,["Live","J. Cole","Run-DMC","R.E.M."],3],[4833,["Cheese","Cream","Carrot","R.E.M."],3],[4871,["A Tribe Called Quest","The Black Eyed Peas","The Roots","Jurassic 5"],1],[4901,["Maroon 5","Blink-182","Train","Matchbox Twenty"],0],[4940,["Queen","The Who","BTS","ABBA"],2],[4954,["Frosted Flakes","Honey Nut Cheerios","Golden Grahams","Chex"],1],[4955,["Chex","Trix","Wheaties","Cocoa Puffs"],1],[4959,["Oreo","Pepperidge Farm","Chips Ahoy","Keebler"],0],[4963,["Beyoncé", "Mariah Carey", "Rihanna", "Jennifer Lopez"],0],[4967,["Dell","Microsoft","Nokia","Apple"],1],[4974,["Mastercard","Visa","Discover","Citi"],1],[4975,["Chase","Citi","Capital One","Mastercard"],2],[4983,["KFC","Sonic","McDonald's","Popeyes"],0],[5003,["Holiday Inn","Motel 6","Days Inn","Super 8"],1],[5004,["Trident","Juicy Fruit","Wrigley's Doublemint","Extra"],2],[5014,["Cocoa Puffs","Froot Loops","Trix","Chex"],2],[5019,["Trix","Honey Nut Cheerios","Golden Grahams","Frosted Flakes"],1],[5023,["Product placement","StarKist","Bumble Bee","Chicken of the Sea"],3],[5025,["Minute Rice","Rice-A-Roni","Ben's Original (formerly Uncle Ben's)","The Latin word for lead"],2],[5034,["A&W","Capri Sun","Marlboro","Hi-C"],3],[5047,["Burger King","Quiznos","Culver's","Jack in the Box"],3],[5096,["Milk","Orange juice","Price","Spring water"],0],[5123,["The beef industry","Racial segregation in public schools","The pork industry","America's dairy farmers (milk promotion)"],3],[5125,["15 minutes","30 minutes","5 minutes","16 minutes"],0],[5134,["World Cup 2016","RE/MAX","Keller Williams","Century 21"],3],[5135,["7 Up","Fire","A baby","Tang"],0],[5145,["Super 8","Holiday Inn","Days Inn","Motel 6"],3],[5148,["A type of store","The whole population","A specific group of consumers a company aims to reach","Dividing a market into distinct groups of buyers"],2],[5153,["Customers telling other people","Coupons","Billboards","Customers sharing content with each other"],0],[5154,["Asking a sample of people a set of questions","A small, specialized segment of a market","An online-only store","A luxury brand"],1],[5155,["Return a product","Additional related products","Buy a more expensive or upgraded version","Shop elsewhere"],2],[5159,["Always costs more","Managing a brand's public image and media coverage","Earns media coverage rather than buying it","Sells products directly"],2],[5160,["A company's legal name","A product's price tag","A temporary retail space open for a short time","A short, memorable phrase promoting a brand"],3],[5161,["Likes, comments, shares, and other interactions","Age, income, and other traits of a population","Weather patterns","Store layouts"],1],[5164,["Shipping goods overseas","How products are displayed and promoted in stores","Hiring sales staff","A display at the end of a store aisle"],1],[5165,["Launching a product in a small area before a full rollout","Contacting potential customers who have not asked to be contacted","Only testing product safety","Giving a school exam"],0],[5168,["A prompt telling the audience what to do next, like 'Buy now'","A suit brought by a group of people with the same claim","A phone number only","A customer complaint"],0],[5169,["Hiring a new CEO","Opening new stores","Buy a more expensive or upgraded version","Changing a brand's name, logo, or image"],3],[5170,["A holiday sale","Buy the same brand repeatedly","A charitable or social cause","A sports team"],2],[5171,["One well-liked product improves opinions of the whole brand","Prices rise across a brand","Creating a distinct identity and image for a product or company","An ad campaign wins an award"],0],[5172,["Discontinued","A household generic name for its product category","A luxury brand","A person who promotes a brand, often under contract"],1],[5175,["A short, catchy song used in an ad","A bell on a store door","One display of an ad to a viewer","A sales report"],0],[5177,["Decorate showrooms","Work as store greeters","Examining products in a store but buying them online","Examine products in a store, then buy them online"],3],[5179,["A specific group of consumers a company aims to reach","An online ad window","A shop inside a mall","A temporary retail space open for a short time"],3],[5189,["Highway billboards","Prime-time TV spots","Earns media coverage rather than buying it","Customers sharing content with each other"],3],[5219,["The money a brand owes","Represents and promotes a brand over time","A brand's stock price","The added value a brand name gives a product"],3],[5220,["A store manager","A person who promotes a brand, often under contract","A trademark lawyer","Represents and promotes a brand over time"],1],[5223,["Buying television ads","Creating useful content to attract and keep an audience","Stays relevant and useful for a long time","Printing flyers"],1],[5224,["A market researcher","Managing a brand's public image and media coverage","A person with a social following who can sway buyers","A celebrity CEO"],2],[5226,["The specific group of people a message is aimed at","A company's employees","The house center","Everyone in a country"],0],[5227,["Dividing a market into distinct groups of buyers","Dividing store shelves","Splitting a company","The company with the largest share of a market"],0],[5231,["A discount coupon","A one-day sale","The distinct benefit that makes a product stand out","One-to-one selling by a salesperson to a customer"],2],[5232,["Store location choice","Pricing strategy only","How a brand is perceived in customers' minds versus rivals","Paying to associate a brand with an event, team, or person"],2],[5233,["A test market city","Collecting and analyzing information about consumers and markets","A small group of people who discuss a product with a moderator","A sales team meeting"],2],[5234,["Running ads on two channels at once by law","Testing products for safety","All internal and external forces affecting a company's marketing","Comparing two versions of something to see which performs better"],3],[5240,["How products are displayed and promoted in stores","A graphical ad on a web page, usually rectangular","A flag at a store opening","A newspaper headline ad"],1],[5241,["Repricing a product","Aiming at a new country","Earns media coverage rather than buying it","Showing ads to people who previously visited your site"],3],[5243,["A regular email or publication sent to subscribers with news and offers","An internal memo","Communicating directly with individual consumers to get a response","A shareholder report only"],0],[5244,["Hiring sales staff","Earns media coverage rather than buying it","Managing a brand's public image and media coverage","Buying ad space"],2],[5245,["Owned website content","Paid television ads","Channels a company controls, like its website and email list","Publicity gained without paying for ad space, like press coverage"],3],[5246,["Social media followers","Channels a company controls, like its website and email list","Advertising space a company buys, like ads and sponsorships","Press coverage"],2],[5247,["Channels a company controls, like its website and email list","Rival channels","Bought ad space","Advertising space a company buys, like ads and sponsorships"],0],[5248,["A person with a social following who can sway buyers","A leaked document","An official statement sent to media to announce news","A customer complaint"],2],[5249,["Paying to associate a brand with an event, team, or person","Free samples","A loyalty program","Distribution — where and how the product reaches customers"],0],[5250,["Featuring a branded product inside a film, show, or game","Store window displays","Putting products on shelves","At a very low price, even at a loss, to draw in customers"],0],[5252,["One-to-one selling by a salesperson to a customer","Self-checkout sales","Vending machine sales","The distinct benefit that makes a product stand out"],0],[5255,["Customers cancelling or leaving over time","The rate at which customers cancel or leave","The rate of new sign-ups","A pricing increase"],1],[5256,["Buy a more expensive or upgraded version","The total revenue expected from one customer over the whole relationship","Repeat purchases","The cost of winning a customer"],1],[5258,["The staged journey from first awareness to purchase","A warehouse layout","The number of different people exposed to a message","A sales team's ranking"],0],[5259,["Attraction","Search engine marketing","Audience","Attention (or Awareness)"],3],[5263,["Creating a distinct identity and image for a product or company","One well-liked product improves opinions of the whole brand","Registering a trademark only","Naming a product only"],0],[5264,["Extending a brand","Changing a brand's name, logo, or image","Registering a brand abroad","Changing a brand's identity, name, or image"],3],[5265,["A brand merger","Using an existing brand name on a new product category","Products made for and sold under a retailer's own brand","An advertising sequel"],1],[5266,["Imported goods only","Products made for and sold under a retailer's own brand","Made for a retailer and sold under the retailer's own brand","Counterfeit goods"],1],[5267,["Price matching","Setting a high price to signal quality and exclusivity","Discount pricing","A product sold below cost to draw shoppers into a store"],1],[5268,["Setting a low initial price to win market share quickly","Raising prices slowly","Premium pricing","A product sold below cost to draw shoppers into a store"],0],[5269,["Product bundling","Price skimming","Launching at a high price, then lowering it over time","Penetration pricing"],2],[5270,["Setting a low initial price to win market share quickly","Pricing to feel lower, like $9.99 instead of $10","Adding a standard markup to a product's cost","Setting a high price to signal quality and exclusivity"],1],[5271,["Charging what rivals charge","Adding a standard markup to a product's cost","Loss-leader pricing","Pricing to feel lower, like $9.99 instead of $10"],1],[5272,["A manager's bonus","A product sold below cost to draw shoppers into a store","A product sold at or below cost to attract customers","A discontinued item"],2],[5273,["Shelf grouping","A small group of consumers who discuss a product","Wrapping gifts","Selling several products together as one package"],3],[5275,["Selling rival brands","Selling related additional products to a customer","Selling in two stores","The distinct benefit that makes a product stand out"],1],[5277,["A sales promotion to encourage adoption","A loyalty reward","An email sent to a specific customer list","A publicity stunt"],0],[5278,["Trying a product in a limited area before a full launch","Advertising pre-tests","Creating useful content to attract and keep an audience","Focus group interviews"],0],[5279,["A recycling process","The stages a product passes through: introduction, growth, maturity, decline","Made for a retailer and sold under the retailer's own brand","Featuring a branded product inside a film, show, or game"],1],[5285,["Asking a sample of people a set of questions","The cheapest brand","The newest entrant","The company with the largest share of a market"],3],[5287,["Using government statistics","Reading published reports","Gathering new data firsthand, like surveys and interviews","Using data already collected and published by others"],2],[5290,["Interviewing in depth","Experimenting with prices","Watching how consumers behave without asking them","A small group of consumers who discuss a product"],2],[5291,["A statistical model","Asking a sample of people a set of questions","An in-depth study of one company or situation","A legal dispute"],2],[5293,["A logo's fame only","A brand's legal status","How familiar consumers are with a brand","Represents and promotes a brand over time"],2],[5295,["A legal disclaimer","A jingle's melody","A short memorable phrase expressing a brand's promise","Showing ads to people who previously visited your site"],2],[5297,["A display at the end of a store aisle","A checkout counter","Sales made by travelling salespeople","A shelf label"],0],[5298,["A sales forecast","A display at the end of a store aisle","A marketing calendar","A diagram showing where products go on shelves"],3],[5299,["The temperature at which a liquid becomes a gas","The place and moment a purchase is completed","A discount point","A delivery point"],1],[5300,["A person with a social following who can sway buyers","A subscription renewal","A planned big-ticket buy","An unplanned purchase made on the spur of the moment"],3],[5303,["Selling seamlessly across all channels — stores, web, mobile, social","Online-only selling","Television shopping","A new product eating into the sales of a company's existing product"],0],[5304,["Buying and selling goods and services online","Commerce conducted on mobile devices","Electronic banking","Email advertising"],0],[5306,["Likes, comments, shares, and other interactions","Community markets","Group buying clubs","Buying and selling through social media platforms"],3],[5307,["Wholesale buying","Earning commission by promoting another company's products","Owning a franchise","Distribution — where and how the product reaches customers"],1],[5310,["A company shareholder","The brand's founder","The person who buys and runs a franchised business","The specific group of people a message is aimed at"],2],[5312,["How products are displayed and promoted in stores","A manufacturer","A business that sells directly to final consumers","A distributor only"],2],[5314,["One company controlling multiple stages of its supply chain","Merging with a rival","Owning suppliers","Diversifying into new industries"],0],[5320,["Designing logos","Studying rivals' strengths, weaknesses, and strategies","Assessing strengths, weaknesses, opportunities, and threats","Setting prices"],2],[5321,["The external macro environment: political, economic, social, technological, legal, environmental factors","Assessing strengths, weaknesses, opportunities, and threats","A product's ingredients","A sales team's performance"],0],[5323,["The competitive forces shaping an industry","Pricing levels","A very short, time-limited discount event","Ad effectiveness"],0],[5324,["Assessing strengths, weaknesses, opportunities, and threats","A customer survey","Studying rivals' strengths, weaknesses, and strategies","A merger review"],2],[5325,["Setting a budget","An in-depth study of one company or situation","Comparing performance against the best in the field","Measuring store size"],2],[5326,["Advertising laws only","The marketing office","All internal and external forces affecting a company's marketing","Comparing two versions of something to see which performs better"],2],[5336,["Marketing only in rural areas","Unconventional, low-cost, high-impact promotional tactics","Advertising during wartime","Unconventional, low-budget tactics that surprise the public"],3],[5337,["The web page visitors reach after clicking an ad or link","The final checkout page","A printed flyer's first page","Launching a product in a small area before a full rollout"],0],[5342,["Imported without a label","Sold only to members of a club","Products made for and sold under a retailer's own brand","Made for a retailer and sold under the retailer's own brand"],3],[5346,["Launching a product in a small area before a full rollout","Contacting potential customers who have not asked to be contacted","Selling through vending machines","A company's sales as a percentage of the total market's sales"],1],[5386,["A porcupine","An umbrella","A sweep","A cat"],1],[5434,["A wave and a heart","Night falls and day breaks — together, night and day","Dusk and dawn","Smiles — because there is a mile between its first and last letters"],1],[5439,["A shoe's sole","A glove","A slipper","A boot"],0],[5440,["A drink","A tennis ball","A cake","A rubber band"],1],[5446,["Brief","Short (add 'er' to make 'shorter')","Small","The alphabet itself"],1],[5447,["Eerie","An envelope","A post office","Elite"],1],[5455,["A tape","A parking meter","A snail (a snail's foot)","A ruler"],2],[5457,["Speed","Weight","Temperature","A parking meter"],2],[5460,["The letter G","The letter T","The letter U (June has one, August has two, October has none)","Day falls and night breaks — together, day and night"],2],[5469,["The internet","A stamp","A spider web","A tennis court"],0],[5481,["Night and day","A thermos","A jar","A soda bottle"],3],[5496,["The Olympic torch","A lantern","A candle","A head of lettuce"],0],[5532,["A die","Your age","Rain","A balloon"],2],[5534,["A pair of trousers","A ladder","A spider","A sewing needle"],0],[5541,["Lunch and dinner","Cereal","A Christmas tree","Pancakes"],0],[5580,["Fencing","Volleyball","Squash","Badminton"],3],[5589,["Swimming","American football","Cycling","Track and field"],3],[5598,["Uruguay","United States","Canada","Jamaica"],1],[5604,["Jamaica","Brazil","Uruguay","United States"],0],[5611,["Grey Cup","FA Cup","Heisman Trophy","Commissioner's Trophy"],0],[5632,["11 feet","12 feet","9 feet","10 feet"],3],[5638,["Jamaica","Uruguay","Argentina","Brazil"],3],[5643,["30 lengths","The five Olympic values","The five original sports","The five inhabited continents (as grouped by the Olympic movement)"],3],[5653,["Love","Advantage","Match point","Deuce"],3],[5667,["Squash","Volleyball","Baseball","Badminton"],3],[5673,["Denmark","Scotland","Portugal","England"],3],[5677,["Madagascar","South Africa","Mozambique","Tanzania"],1],[5681,["Shooting","American football (NFL)","High jump (athletics)","Pole vault"],2],[5702,["Four riders share five wins: Anquetil, Merckx, Hinault, Indurain","Longest chart run in Hot 100 history at the time","Eddy Merckx alone with six","Lance Armstrong with seven"],0],[5706,["The button","The bullseye (gold)","The nock","The inner ring"],1],[5708,["A Shanghai","A maximum break","A one-hundred-and-eighty","A perfect score of 300"],2],[5723,["Squash","Tennis","Badminton","Bowling"],1],[5730,["The NFL","The Pittsburgh Steelers (tied with the New England Patriots)","The Green Bay Packers","The San Francisco 49ers"],1],[5744,["Scotland","Spain","England","Portugal"],3],[5751,["The Soviet Union","Scotland","Switzerland","North Macedonia"],0],[5755,["The United States (invented in Massachusetts)","Commissioner's Trophy","William G. Morgan","Abner Doubleday"],0],[5757,["William G. Morgan","Abner Doubleday","The United States (invented in Massachusetts)","James Naismith"],0],[5759,["Tanzania","South Africa","Madagascar","Mozambique"],1],[5778,["The Netherlands","Russia","The Soviet Union","France"],2],[5805,["Bogotá","Panama City","Mexico City","Quito"],2],[5808,["John Adams","Thomas Jefferson","George Washington","James Madison"],2],[5814,["1588","1620","1492","1621"],1],[5816,["1766","1666","1667","1566"],1],[5821,["1348","1215","1066","1216"],1],[5822,["Price comparison","Endurance contest","The Romans","The ancient Egyptians"],3],[5827,["1789","1788","1790","1799"],0],[5885,["Thomas Jefferson","John Adams","George Washington","James Madison"],1],[5886,["John Adams","Andrew Jackson","Thomas Jefferson","James Madison"],2],[5887,["James Monroe","James Madison","John Quincy Adams","Thomas Jefferson"],1],[5888,["Andrew Jackson","James Madison","John Quincy Adams","James Monroe"],3],[5889,["Andrew Jackson","James Monroe","John Quincy Adams","Martin Van Buren"],2],[5890,["Martin Van Buren","Andrew Jackson","James Monroe","John Quincy Adams"],1],[5894,["Ulysses S. Grant","James K. Polk","Zachary Taylor","John Tyler"],1],[5896,["Franklin Pierce","Zachary Taylor","James Buchanan","Millard Fillmore"],3],[5897,["James Buchanan","Franklin Pierce","Millard Fillmore","Abraham Lincoln"],1],[5898,["Abraham Lincoln","Andrew Johnson","James Buchanan","Franklin Pierce"],2],[5901,["Andrew Johnson","Ulysses S. Grant","Rutherford B. Hayes","James A. Garfield"],1],[5902,["James A. Garfield","William Howard Taft","Rutherford B. Hayes","Ulysses S. Grant"],2],[5903,["James A. Garfield","Grover Cleveland","Rutherford B. Hayes","Chester A. Arthur"],0],[5906,["William McKinley","Theodore Roosevelt","Grover Cleveland","Benjamin Harrison"],2],[5907,["William McKinley","Harry S. Truman","Benjamin Harrison","Grover Cleveland"],0],[5908,["Andrew Johnson","William McKinley","Theodore Roosevelt","William Howard Taft"],2],[5909,["Warren G. Harding","Theodore Roosevelt","William Howard Taft","Woodrow Wilson"],2],[5911,["Franklin D. Roosevelt","Warren G. Harding","Calvin Coolidge","Herbert Hoover"],1],[5915,["Lyndon B. Johnson","Franklin D. Roosevelt","Dwight D. Eisenhower","John F. Kennedy"],2],[5919,["Richard Nixon","Lyndon B. Johnson","Gerald Ford","Jimmy Carter"],2],[5920,["George H. W. Bush","Jimmy Carter","Ronald Reagan","Gerald Ford"],1],[5921,["Bill Clinton","Ronald Reagan","Jimmy Carter","George H. W. Bush"],1],[5922,["George W. Bush","Bill Clinton","Donald Trump","Barack Obama"],1],[5923,["Lyndon B. Johnson","Donald Trump","George W. Bush","Bill Clinton"],2],[5924,["Donald Trump","Joe Biden","Barack Obama","George W. Bush"],2],[5925,["Donald Trump","Barack Obama","Joe Biden","Ronald Reagan"],0],[6033,["Oʻahu","Kauaʻi","Right, good, or proper","Hawaiʻi Island (the Big Island)"],3],[6052,["The Battle of Nuʻuanu","Kaʻahumanu","Lunalilo","Kamehameha the Great"],3],[6056,["1842","1843","1844","1845"],1],[6060,["1894","1893","1887","1898"],1],[6065,["1900","1893","1899","1898"],3],[6073,["ʻIolani Palace","Liliʻuokalani","Kamehameha IV and Queen Emma","René-Robert de La Salle"],2],[6077,["1821","1820","1840","1819"],1],[6091,["Family","The Giant Gila Monster","Grease","Teenagers from Outer Space"],0],[6095,["Song","Help or assistance","Food","Hawaiian monk seal"],1],[6096,["House","Green sea turtle","Fast","Finished or done"],3],[6101,["Mauna","Mountain","Wikiwiki","Kai"],2],[6123,["Pua aloalo (yellow hibiscus)","Bird of paradise flower","Plumeria","Heliconia"],1],[6131,["Merrie Monarch Festival","Jaws (Peʻahi)","Sunset Beach","Pipeline (Banzai Pipeline)"],3],[6141,["Punaluʻu Beach","Papakōlea (Green Sands Beach)","Spencer Beach","The coldest possible temperature"],1],[6152,["1901","1868","1840","1867"],3],[6153,["John A. Macdonald","Lester B. Pearson","Wilfrid Laurier","William Lyon Mackenzie King"],0],[6157,["Lester B. Pearson","John Diefenbaker","John A. Macdonald","Wilfrid Laurier"],0],[6158,["1981","1982","1983","1949"],1],[6159,["Quebec Charter","Bill of Rights 1960","Charter of Rights and Freedoms","The Fifth and Sixth Amendments"],2],[6164,["1960","1933","1950","1949"],3],[6194,["Macdonald-Cartier Bridge","Confederation Bridge","Emily of New Moon","Green Gables (Anne of Green Gables)"],3],[6203,["Guglielmo Marconi","Shawn Mendes","Drake","Verdi"],2],[6244,["Terry Fox","Vimy Ridge","Montreal","Vancouver"],2]];
(function bakeStage3(){
  if(BAKED_FAILED){ WEAK_ENFORCE_STATS=enforceWeakChoices(); return; }
  if(BAKED_TRAV.length!==6246 || !bakedDiffValid(BAKED3, 567)){ WEAK_ENFORCE_STATS=enforceWeakChoices(); return; }
  bakedApply(BAKED3);
})();


/* ============ HARDER BABY-ANIMAL QUESTIONS (2026-11-12) ============
   Owner-approved additions: eighteen harder young-animal terms
   (leveret, squab, peachick, eyas, porcupette, alevin, smolt,
   ephyra, codling, and harder sets for cygnet, elver, poult,
   eaglet, owlet, spiderling, spat, puggle, pinkie). They are
   appended to the hard / very-hard text tiers HERE — after every
   baked stage — because the baked bank state's traversal count
   (6,246) is fixed: adding questions to a bank before the bakes
   would shift traversal indices and fail the baked state over to
   its fallback. Appended at this point they deal from the tier
   pools exactly like the rest of the baby-animal family (regular
   Gauntlet hard rounds and Practice), keep their authored
   choices untouched by the repair passes, and — being hard and
   very-hard tier only — never enter Round 1 easy dealing or the
   typed Q5 finale pool. Every set's choices are young-animal
   terms from the same hard lexicon (the reversed sets ask for
   the adult animal, so their choices are same-kind adult names:
   birds with birds, sea creatures with sea creatures).
   Parr was held back from that pass and added on the owner's
   approval later the same day (2026-11-12): its forward prompt
   is worded around the parr marks so it can never be confused
   with alevin or smolt, its distractors avoid fellow salmon
   stages (alevin, smolt, fry), and its reversed set avoids
   trout, which also passes through a parr stage. */
TEXT.hard.push(mc("A cygnet is the young of which bird?", ["Goose", "Swan", "Duck", "Chicken"], 1, "A baby swan is called a cygnet."));
TEXT.vhard.push(mc("What is a baby hare called?", ["Leveret", "Porcupette", "Puggle", "Pinkie"], 0, "A leveret is a young hare, in its first year of life."));
TEXT.hard.push(mc("Which of these is the young of an eel?", ["Codling", "Elver", "Smolt", "Alevin"], 1, "An elver is a young eel, at the stage just after the transparent glass eel."));
TEXT.vhard.push(mc("What is a baby pigeon called?", ["Peachick", "Eyas", "Squab", "Poult"], 2, "A baby pigeon is called a squab."));
TEXT.hard.push(mc("A poult is the young of which bird?", ["Chicken", "Goose", "Turkey", "Duck"], 2, "A poult is a young turkey — a baby turkey is called a poult."));
TEXT.vhard.push(mc("What is a baby peacock called?", ["Squab", "Peachick", "Cygnet", "Eyas"], 1, "A peachick is a young peafowl — the chick of a peacock and a peahen."));
TEXT.hard.push(mc("What is a baby hawk called?", ["Eaglet", "Owlet", "Peachick", "Eyas"], 3, "An eyas is a young hawk still in the nest, a term from falconry."));
TEXT.vhard.push(mc("An eaglet is the young of which bird?", ["Hawk", "Owl", "Eagle", "Falcon"], 2, "An eaglet is a young eagle, still in or newly out of the nest."));
TEXT.hard.push(mc("An owlet is the young of which bird?", ["Eagle", "Owl", "Hawk", "Swan"], 1, "An owlet is a young owl."));
TEXT.vhard.push(mc("Which of these is the young of a spider?", ["Ephyra", "Spat", "Spiderling", "Codling"], 2, "A spiderling is a young spider, fresh from the egg sac."));
TEXT.hard.push(mc("What is a baby porcupine called?", ["Puggle", "Leveret", "Porcupette", "Pinkie"], 2, "A baby porcupine is called a porcupette; its quills are soft at birth and harden within days."));
TEXT.vhard.push(mc("What is a newly hatched salmon called?", ["Smolt", "Codling", "Elver", "Alevin"], 3, "An alevin is a newly hatched salmon, still carrying its yolk sac."));
TEXT.hard.push(mc("What is a young salmon that migrates out to sea called?", ["Alevin", "Smolt", "Spat", "Ephyra"], 1, "A smolt is a young salmon whose silvery scales prepare it to migrate to the sea."));
TEXT.vhard.push(mc("Spat is the young of which sea creature?", ["Jellyfish", "Crab", "Oyster", "Shrimp"], 2, "Spat is a young oyster that has settled onto a surface to grow."));
TEXT.hard.push(mc("What is a baby jellyfish called?", ["Spat", "Ephyra", "Alevin", "Codling"], 1, "An ephyra is a young jellyfish, the free-swimming stage budded off a polyp."));
TEXT.vhard.push(mc("Which of these is the young of an echidna?", ["Porcupette", "Leveret", "Puggle", "Pinkie"], 2, "A puggle is a baby echidna — a baby platypus is also called a puggle."));
TEXT.hard.push(mc("Which of these is the young of a mouse?", ["Puggle", "Pinkie", "Leveret", "Porcupette"], 1, "A pinkie is a newborn baby mouse, hairless with its eyes still shut."));
TEXT.vhard.push(mc("What is a young cod called?", ["Elver", "Alevin", "Smolt", "Codling"], 3, "A codling is a young cod."));
TEXT.hard.push(mc("What is a young salmon with dark vertical bars (parr marks) along its sides, living in freshwater streams, called?", ["Parr", "Elver", "Codling", "Spat"], 0, "A parr is a juvenile salmon in freshwater, named for the dark vertical 'parr marks' along its sides; it comes after the fry stage and before the silvery smolt stage that migrates to sea."));
TEXT.vhard.push(mc("A parr is the young of which fish?", ["Salmon", "Eel", "Cod", "Herring"], 0, "A parr is a juvenile salmon in freshwater, named for the dark vertical 'parr marks' along its sides; it comes after the fry stage and before the silvery smolt stage that migrates to sea."));

/* Practice-round categories */
/* Canada practice pool: 13 province/territory capitals (Canada-only choices),
   the 13 Canadian map shapes, plus the Canada text bank = 120. */
var CANADA_PAIRS=[["Ontario","Toronto"],["Quebec","Quebec City"],["British Columbia","Victoria"],["Alberta","Edmonton"],["Manitoba","Winnipeg"],["Saskatchewan","Regina"],["Nova Scotia","Halifax"],["New Brunswick","Fredericton"],["Newfoundland and Labrador","St. John's"],["Prince Edward Island","Charlottetown"],["Yukon","Whitehorse"],["Northwest Territories","Yellowknife"],["Nunavut","Iqaluit"]];
var MODES = [
  {id:"faces", name:"Famous Faces", desc:"Name the person in the photo", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="Famous Faces";}); }},
  {id:"landmarks", name:"Landmarks", desc:"Name the world landmark", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="Landmarks";}); }},
  {id:"flags", name:"World Flags", desc:"Name the country by its flag", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="World Flags";}); }},
  {id:"stateflags", name:"US State Flags", desc:"Name the state by its flag", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="US State Flags";}); }},
  {id:"shapes", name:"Map Shapes", desc:"Name the place by its outline", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="Map Shapes";}); }},
  {id:"art", name:"Mixed Pictures", desc:"Paintings & movie stills", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="Paintings"||p.cat==="Movie Stills";}); }},
  {id:"stills", name:"Movie Stills", desc:"Name the film from the still", pool:function(){ return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard).filter(function(p){return p.cat==="Movie Stills";}); }},
  {id:"capitals", name:"Capitals", desc:"Countries, US states, provinces", pool:function(){ return CAPITALS.easy.concat(CAPITALS.medium, CAPITALS.hard, CAPITALS.vhard); }},
  {id:"canada", name:"Canada", desc:"Provinces, capitals, history & hockey", pool:function(){ return canadaPool(); }},
  {id:"djvault", name:"Trivia Vault", desc:"Pub questions & name rounds", pool:function(){ return DJ_MC.concat(DJ_PLACES, DJ_FACE_MC, DJ_REAL); }},
  {id:"leann", name:"LeAnn Rimes", desc:"119 questions + her portrait — songs, charts, films", pool:function(){ return LEANN_MC.concat([LEANN_PIC]); }},
  {id:"law", name:"Law", desc:"Constitution, courts & legal terms (US)", pool:function(){ return NEWCAT.law; }},
  {id:"chemistry", name:"Chemistry & Periodic Table", desc:"Reactions, formulas, elements & symbols", pool:function(){ return NEWCAT.chemistry.concat(NEWCAT.periodic); }},
  {id:"science", name:"All Sciences", desc:"Biology, physics, earth & space", pool:function(){ return NEWCAT.science; }},
  {id:"medical", name:"Medical", desc:"The body, terms & medical history", pool:function(){ return NEWCAT.medical; }},
  {id:"popculture", name:"Pop Culture", desc:"Film, TV, books, games & stars", pool:function(){ return NEWCAT.popculture; }},
  {id:"music", name:"Music", desc:"Artists, songs, albums & bands across the decades", pool:function(){ return NEWCAT.music; }},
  {id:"admarketing", name:"Advertising & Marketing", desc:"Slogans, brands & classic concepts", pool:function(){ return NEWBANKS.advertising.concat(NEWBANKS.marketing); }},
  {id:"riddles", name:"Riddles", desc:"Classic riddles, one right answer each", pool:function(){ return NEWBANKS.riddles; }},
  {id:"sports", name:"Sports", desc:"Major events, records & rules", pool:function(){ return NEWBANKS.sports; }},
  {id:"history", name:"History", desc:"Events, figures & dates that stuck", pool:function(){ return NEWBANKS.history; }},
  {id:"hawaii", name:"Hawaii", desc:"Islands, royalty, language & food", pool:function(){ return NEWBANKS.hawaii; }},
  {id:"mixed", name:"Mixed Bag", desc:"A well-rounded bit of everything", pool:function(){
      return TEXT.easy.concat(TEXT.medium, TEXT.hard, TEXT.vhard, CAPITALS.easy, CAPITALS.medium, CAPITALS.hard, CAPITALS.vhard, PICS.easy, PICS.medium, PICS.hard, PICS.vhard, NEW_ALL);
  }, deal:function(){ return dealMixed(); }},
  /* Closest Wins practice (owner, 2026-11-13): NOT a multiple-choice
     pool — the tile launches a 10-question Closest Wins round from
     the CW bank (normal CW scoring in clean tens, 600 max), handled
     by the cw branch in the grid builder below and by
     startClosestWinsPractice in the cover script. pool() exists only
     so generic MODES walks never trip over this entry. */
  {id:"closestwins", name:"Closest Wins", desc:"Estimation — closest guess wins", cw:true, pool:function(){ return []; }}
];
/* ---- Round 1 partial person-name tolerance (Round 1 finales only) ----
   In Round 1 a person-name answer also scores when the player types a
   distinctive part of the name: the surname alone ("Lenin" for Vladimir
   Lenin), the name without its title ("Elizabeth II" for Queen Elizabeth
   II), the name without middle names/initials, or the name with or
   without its regnal suffix — and a partial that is itself misspelled in
   a sound-alike way also scores ("Bethowen" for Beethoven). A first name
   alone, a wrong surname, or a different person never scores. This tolerance is switched on only by
   the caller for Round 1 — Rounds 2–4 never pass the flag. */
var NAME_TITLES={queen:1,king:1,prince:1,princess:1,sir:1,dame:1,dr:1,doctor:1,
  president:1,mr:1,mrs:1,miss:1,ms:1,saint:1,st:1,pope:1,emperor:1,empress:1,
  lord:1,lady:1,rev:1,reverend:1,professor:1,duke:1,duchess:1,baron:1,
  czar:1,tsar:1,sultan:1,bishop:1,cardinal:1,pharaoh:1};
var REGNAL_SUFFIX={i:1,ii:1,iii:1,iv:1,v:1,vi:1,vii:1,viii:1,ix:1,x:1,xi:1,
  xii:1,xiii:1,xiv:1,xv:1,jr:1,sr:1};
var ROMAN_BY_NUM={1:"i",2:"ii",3:"iii",4:"iv",5:"v",6:"vi",7:"vii",8:"viii",
  9:"ix",10:"x",11:"xi",12:"xii",13:"xiii",14:"xiv",15:"xv"};
/* ---- Cardinal number-word judging ----
   The number-word counterpart of the numeric rule above: a bare
   cardinal answer is the SAME answer written as digits or as a
   word — "One" and "1" are one answer, exactly as "Second" and
   "2nd" are for ordinals. The stored China answer is the word
   "One"; a player who typed "1" in strict Round 4 was marked
   wrong, because numericVerdict only reads digit-shaped targets
   and ordinalVerdict only accepts ordinal-shaped targets, so a
   cardinal word fell through to the strict cut-off and failed.
   cardinalValue reads a string as a bare cardinal — digits, or
   number words from zero through one hundred, including
   "twenty-one" style composites — and nothing else: any extra
   content word ("One Direction", "The Three Stooges") returns
   null and keeps the ordinary judging, and regnal names never
   parse (their numerals are roman, not cardinal words). The
   verdict returns true/false only when BOTH the target and the
   input are bare cardinals; like numeric equality, an equal
   value is exact in EVERY mode — strict Round 4 included — and
   a different value is simply wrong, with no phonetic or
   near-miss rescue. */
var CARDINAL_TENS={twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};
/* ---- Ordinal judging ----
   An ordinal answer is the SAME answer in any of its standard
   forms: "Second", "2nd", "2", "two", "Second Amendment",
   "Amendment 2", and "the Second Amendment" all name the Second
   Amendment. The old judge compared spellings, so typing "2nd" for
   a revealed answer of "Second" was marked wrong — the ordinal
   abbreviation is not a misspelling, it is the same answer written
   the other standard way, exactly like 26.2 vs "26.2 miles" for
   plain numbers. ordinalCoreInfo reads a string as a bare ordinal
   (First/1st/1, Second/2nd/2, Third/3rd/3, … through the 27
   amendments and beyond, including "twenty-first" style forms),
   allowing only the filler words that travel with one ("the",
   "Amendment", "law", "century", a leading "No."/"number").
   Anything with other content words — a person's name carrying a
   regnal number ("Elizabeth II"), a place, a longer phrase — is
   not a bare ordinal and returns null, so those answers keep the
   ordinary judging and never enter this path. */
var ORDINAL_WORDS={first:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12,thirteenth:13,fourteenth:14,fifteenth:15,sixteenth:16,seventeenth:17,eighteenth:18,nineteenth:19,twentieth:20,thirtieth:30,fortieth:40};
var CARDINAL_WORDS={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40};
var ORDINAL_FILLER={the:1,amendment:1,amendments:1,law:1,laws:1,century:1};
/* ---- Full-name aliases for initials-only person answers ----
   A stored answer that is only a person's initials is a hidden
   trap in a typed round: the player who types the correct full
   name ("Theodore Roosevelt") was marked wrong because the bank
   stored "TR", and the reveal taught nothing but the initials.
   The Trivia Sheet held two such rows (the pony in the White House
   elevator, and the candidate shot in a Wisconsin saloon — both
   Theodore Roosevelt); their canonical answers are now the full
   name in DJ_RAW, so the reveal teaches the name. The initials
   and the common nickname remain correct answers in EVERY mode,
   strict Round 4 included: "TR" is not a loose spelling of
   Theodore Roosevelt, it is the same answer written the other
   standard way, exactly like "2nd" for "Second". Aliases are
   folded into the exact-match targets in typedCorrect, so they
   score wherever the full name scores — and nowhere else: a
   different president still fails everywhere. A pool-wide scan
   for this class (initials-only answers) found no other person:
   the rest are places (NYC, FL, VA, UT), groups whose name IS
   the initials (BTS, BTO, ABBA), brands and bodies (VW, GEICO,
   KFC, BMW, NFL), a show (SOA), an airport (JFK), a molecule
   (DNA), and one fragment clue ("JT picture") that is already
   multiple-choice-only and never reaches a typed deal. */
var ANSWER_ALIASES={
  "theodore roosevelt":["teddy roosevelt","tr","t r"]
};
/* ---- Singular / plural equivalence ----
   The same class as the numeric and ordinal rules: grammatical
   number is not spelling. "What is the name of the smallest type
   of blood vessel?" asks for the name of a TYPE, which naturally
   calls for the singular — the player who typed "Capillary" was
   marked wrong in strict Round 4 because the bank stores
   "Capillaries". Singular and plural of the same word are the
   same answer in EVERY mode, strict included, so this verdict
   runs before the strict cut-off. It is NOT fuzzy matching: both
   sides are reduced by the conservative rules below and must
   come out identical — a different word ("artery", "vein") never
   reduces to the target, and a misspelled stem ("capilary")
   never reduces to it either, so strict mode still rejects it.

   The rule set is deliberately narrow — no generic stemmer:
   - an explicit pair list for the irregular forms (leaf/leaves,
     knife/knives, child/children, person/people, cactus/cacti,
     analysis/analyses, phenomenon/phenomena, datum/data, …);
   - -ies -> -y after a consonant (capillaries -> capillary);
   - -es dropped where it is the plural ending, after -ss / -x /
     -z / -ch / -sh (classes -> class, boxes -> box, churches ->
     church, dishes -> dish, glasses -> glass) — a word like
     "causes" instead just drops its -s (causes -> cause), because
     its singular ends in -se, not in a bare sibilant;
   - a trailing -s dropped (vessels -> vessel), never after
     -ss / -us / -is (glass, bus, axis keep their form), never on
     words under four letters, and never on the NOT_PLURAL words
     whose final -s is part of the word itself (news, series,
     species, physics, and the bank's own proper names whose
     trailing -s is intrinsic — Mars, Texas, Athens, …).
   Person answers are skipped entirely: a person's name is a
   proper name, not a countable noun, so names keep the exact
   strict judging they already have (Round 1's partial-name rule
   is untouched). The stored answer is never rewritten — the
   reveal still shows the stored form ("Capillaries"), exactly
   as it does for an accepted near-miss spelling. */
var PLURAL_PAIRS={leaves:"leaf",wolves:"wolf",knives:"knife",lives:"life",
  wives:"wife",halves:"half",selves:"self",shelves:"shelf",calves:"calf",
  loaves:"loaf",thieves:"thief",children:"child",people:"person",men:"man",
  women:"woman",feet:"foot",teeth:"tooth",geese:"goose",mice:"mouse",
  oxen:"ox",cacti:"cactus",fungi:"fungus",nuclei:"nucleus",syllabi:"syllabus",
  analyses:"analysis",crises:"crisis",axes:"axis",phenomena:"phenomenon",
  criteria:"criterion",data:"datum",media:"medium",bacteria:"bacterium",
  curricula:"curriculum",appendices:"appendix",indices:"index",
  matrices:"matrix",vertebrae:"vertebra",larvae:"larva",
  tomatoes:"tomato",potatoes:"potato",heroes:"hero",volcanoes:"volcano",
  echoes:"echo",gases:"gas"};
var NOT_PLURAL={news:1,series:1,species:1,physics:1,mathematics:1,maths:1,
  economics:1,gymnastics:1,athletics:1,measles:1,billiards:1,headquarters:1,
  chaos:1,canvas:1,christmas:1,octopus:1,platypus:1,tennis:1,rabies:1,
  obstetrics:1,pediatrics:1,
  mars:1,texas:1,athens:1,brussels:1,caracas:1,buenos:1,aires:1,vegas:1,
  netherlands:1,everglades:1,adidas:1,pancreas:1,hercules:1,hippocrates:1,
  adams:1,coors:1,lays:1,bros:1,gets:1,knows:1};

/* ================= GAME STATE ================= */
var TIERS=["easy","medium","hard","vhard"];
var ROUND_PTS=[5,10,20,40];
var ROUND_NAMES=["Round 1 · Easy","Round 2 · Harder","Round 3 · Hard","Round 4 · Very Hard"];
/* ---------- Difficulty tiers above Very Hard ----------
   Very Hard (the "vhard" pool) stays the hardest tier of the
   regular Gauntlet and practice. Above it, the Super Hard tier
   has a real pool of its own (SUPERHARD, 100 typed-only
   questions written for the tier): the bonus round deals its
   five questions from it, and so does Legend Gauntlet Round 1.
   The Extremely Hard tier now has a real pool of its own too
   (EXTREMEHARD, 100 typed-only questions written harder than
   Super Hard): Legend Gauntlet Round 2 deals its five
   questions from it. The Ludicrously Hard tier now has a real
   pool of its own too (LUDICROUSHARD, 100 typed-only questions
   written harder than Extremely Hard): Legend Gauntlet Round 3
   deals its five questions from it. The Impossibly Hard tier
   now has a real pool of its own too (IMPOSSIBLEHARD, 100
   typed-only questions written harder than Ludicrously Hard):
   Legend Gauntlet Round 4 deals its four regular questions
   from it. The Genius Level tier now has a real pool of its
   own too (GENIUSHARD, 100 typed-only questions written harder
   than Impossibly Hard): the Legend Gauntlet's final question
   (Q20) deals from it.
   Points, judging, and clocks are unchanged by any of this. */
var BONUS_TIER_NAME="Super Hard";
var LEGEND_TIERS=["Super Hard","Extremely Hard","Ludicrously Hard","Impossibly Hard"];
var state=null;
var sessionBest={gauntlet:0};

/* ---------- Game pace (cover picker) ----------
   Standard is the game's regular clock: 30 seconds for regular
   (multiple-choice) questions, 45 seconds for typed questions —
   each round's finale (Q5/Q10/Q15/Q20) and all of Round 4
   (Q16–Q20). Relaxed doubles both clocks (60 / 90) for players
   who want an easier game with more time. Pace changes ONLY the
   clock: same questions, same scoring, same judging, same
   Pass/timeout rules (Q20's clock still starts only once its
   wager is locked, because the wager screen runs no timer).
   The pace is picked on the cover before the game starts, is
   stored on the game state, and is saved with an in-progress
   game, so a resumed game keeps the pace it started with.
   Relaxed scores are saved to their own device leaderboard (a
   separate storage key and board) so they never mix with
   Standard scores or ranks. */
var PACE_TIMES={standard:{mc:30, typed:45}, relaxed:{mc:60, typed:90}};
/* Legend Gauntlet clock: faster — 20s a question and 30s for
   Round 4 & the finales at Standard pace, doubled at Relaxed
   (40 / 60). The mc field carries the regular-question clock
   and typed the Round 4 / finale clock, as in PACE_TIMES. */
var LEGEND_TIMES={standard:{mc:20, typed:30}, relaxed:{mc:40, typed:60}};
var coverPace="standard";

/* ---------- Local high scores (this device only) ----------
   Finished games are saved to this browser's localStorage under a
   namespaced key, so the board survives reloads on this device. It
   is NOT shared with other players and never leaves this browser.
   If storage is unavailable (private mode, blocked storage), the
   load/record functions return null and the game quietly falls back
   to the session-best display only — no board, no rank, no crash. */
var HS_KEY="trivia-or-nada.highscores.v1";
var HS_KEEP=50, HS_SHOW=10;
/* One-time migration: Sudden Death scores saved before the split
   sit on the regular boards, labelled "Sudden Death". They are
   MOVED — never deleted — onto the new Sudden Death board for
   their pace, merged with anything already there, de-duplicated,
   re-sorted, and kept to the usual HS_KEEP. It runs at most once
   per page load (guarded), is idempotent across loads (a second
   run finds no Sudden Death entries left on the regular boards),
   and any failure leaves the stored boards exactly as they were. */
var hsSdMigrated=false;
/* ---------- Daily Gauntlet & day streaks (this device only) ----------
   One scored Daily Gauntlet per LOCAL calendar day: the same 20
   questions for every player that day, dealt from a seed in its own
   namespace ("daily-YYYY-MM-DD") through the same seeded-deal path
   a challenge link uses — the seen-question cooldown is bypassed
   for the deal, the strict finale (exactly one of Q10/Q15) comes
   from the seeded stream, and the device alternation counter is
   left untouched. A daily is otherwise a regular Gauntlet in every
   respect: same rounds, points, wager finales, Pass rules, pace
   picker, geography and subject caps, bonus round at 1,000+, and a
   true perfect 1,280 unlocking Legend. Sudden Death never applies
   to it. It is fully isolated from the seen-question memory: the
   deal does not read the cooldown, playing it stamps nothing, and
   the games-started counter does not advance for it, so a daily
   never eats into regular-game freshness either way.
   The streak lives in its OWN storage key and nowhere else: the
   high-score, seen, progress, and backup keys/formats are never
   touched by it. Completing a daily records its date — and so
   does QUITTING one: a quit ends the daily as the day's result
   (score counts, day closed; see endGame). Either way the date
   recorded is the daily's own date — the date it was STARTED, which a
   resumed in-progress daily keeps in its save: if the previous
   completed date is the day before, the streak grows by one; if it
   is the same day, nothing changes (that day already counted); any
   other case restarts the streak at 1. The best streak is the max
   ever reached. A creator daily, like every creator game, saves
   nowhere and never touches the streak. */
var DAILY_KEY="trivia-or-nada.daily.v1";
var dailyCache=null;

/* ---------- Shared leaderboard (all players) ----------
   Alongside the device-local boards above, finished games are also
   submitted — best-effort, in the background — to the shared
   leaderboard served by this site's own backend
   (/.netlify/functions/submit-score), and the cover shows two
   separate shared boards (/.netlify/functions/get-leaderboard)
   next to the local ones: one for Standard pace and one for
   Relaxed pace, each drawn only from that pace's lists
   (topStandard / topRelaxed and their Perfect, Legend, and
   Sudden Death counterparts), never the combined lists, so a
   Relaxed score is never ranked against a Standard one. The
   submit-score response's rank and total are likewise within
   the submitted pace. The local save is untouched and always happens
   first: if the submission or the fetch fails (offline, backend
   unreachable, this page not served from the site), the local
   score still stands, no error is shown, and the shared board
   simply stays hidden. Only the modes the backend accepts are
   submitted — the Gauntlet, the Legend Gauntlet, Sudden Death,
   and Challenge games; practice rounds stay device-local, exactly
   as the backend's validation requires. The "perfect" flag is
   passed through exactly as the game stamps it: true only for a
   true perfect 1,280, never for a bonus-capped one.
   Post-game rename: the submit response carries the shared row's
   id ({ok, id, rank, total}). That id is kept on the finished
   game's state (and on its device entry object), so when a game
   that started with no name — submitted as "Player" — gets its
   name on the results screen, saveLateName also renames the
   shared row through /.netlify/functions/update-score-name,
   which the backend honours only while the row is still named
   "Player" and less than 48 hours old. The rename is best-effort
   like the submit: it is stored as a pending rename first and
   retried on the next page load / cover render until it succeeds
   or the backend definitively answers 404 (its structured
   {ok:false, error} body — a bare platform 404 from an endpoint
   that isn't deployed yet does NOT clear it); it never blocks or
   errors the UI, and the device-board rename stands either way.
   Update 1.2 §6: every submission also carries playerId — the
   stable, anonymous, per-device id from the profile record
   (see ensureAnonPlayerId below) — as a separate field alongside
   the existing ones; the backend stores it on the new row and
   nothing else about the submission changes. The renamed row is
   the very row that submission created, so it already carries
   the id; the rename request itself stays {id, name} exactly as
   the update-score-name endpoint expects. The board response
   may also carry bestPerPlayer: one row per player holding that
   player's highest shared score, grouped by the backend on
   player_id ONLY — never by display name, so two players who
   share a name are never merged, and rows with no player_id
   (every historical row) are excluded by the backend rather
   than guessed at. A response without the field (the backend
   before §6 deploys) is treated as an empty list and the
   Best Score Per Player board simply stays hidden. */
var SHARED_SUBMIT_URL="https://savailleentertainment.com/.netlify/functions/submit-score";
var SHARED_BOARD_URL="https://savailleentertainment.com/.netlify/functions/get-leaderboard";
var SHARED_RENAME_URL="https://savailleentertainment.com/.netlify/functions/update-score-name";
var PENDING_RENAME_KEY="trivia-or-nada.pending-rename.v1";
var SHARED_MODES={"Trivia Gauntlet":1,"Legend Gauntlet":1,"Sudden Death":1,"Trivia Gauntlet · Challenge":1,"Daily Gauntlet":1};
/* A results-screen name saved before the submit response (and its
   row id) has come back: {game, name} for the game it belongs to.
   That game's submit handler fires the rename the moment the id
   lands; any other outcome clears it, so it can never rename a
   later game's row. */
var sharedRenameWanted=null;
/* "id|name" of the rename request currently in flight, so the
   pending-rename retry never duplicates a request already sent. */
var sharedRenameInFlightKey=null;
/* ---------- In-progress game save (this device only) ----------
   A game in progress is mirrored to this browser's localStorage on
   every real game event — a question dealt, an answer locked in, a
   wager locked — so if the page is reloaded mid-game (a
   scroll-triggered webview reload, an accidental refresh, the
   browser reclaiming the tab), the game resumes exactly where it
   left off instead of starting over: the same dealt questions, the
   same question on screen, the score, the streak, the round bank,
   and a locked final-question wager all come back, with the
   current question's clock restarted. Round 4 resumes with its
   typed questions, strict spelling, and wager state intact.
   Finishing or quitting a game clears the save, and starting a new
   game replaces it. If storage is unavailable, the game simply
   plays in memory as before — no crash, no fake promise. */
var PROG_KEY="trivia-or-nada.progress.v1";

var timerId=null, timeLeft=0, timeTotal=0, locked=false;
/* Time-used bookkeeping: qClockAllotted is the current question's
   allotted seconds, set by startTimer when its clock actually
   starts (for a picture question that is only once the picture is
   on screen, so picture loading time never counts); null while no
   clock has started for the question on screen — a picture that
   fails to load is auto-awarded and counts 0. qClockSettled keeps
   each question's time counted exactly once. The running total
   lives on the game state (state.timeUsed) and in the progress
   save, so a resumed game keeps the time it had already used. */
var qClockAllotted=null, qClockSettled=true;
/* Timer generation: every start and every stop bumps it, and an
   interval tick whose generation has moved on does nothing — so
   no stale interval from an earlier clock can ever keep counting
   (or fire a timeout) once an answer is locked in. */
var timerGen=0;
/* Rounds 2/3 strict-spelling alternation: true means Q10 is the strict
   finale in the next Gauntlet (and Q15 is forgiving); it flips after
   every Gauntlet is built, so the strict finale alternates game to game. */
var nextGauntletQ10Strict=true;

/* ---------- Seen-question memory (this device only) ----------
   Dealing was already a true shuffle with no repeats inside one
   game, but nothing remembered what earlier games had dealt, so
   every new game drew fresh from the same rotation-narrowed pools
   (a per-tier picture pool can be as small as 10, a finale pool
   16) and repeats across run-throughs were guaranteed by chance
   alone. This store fixes that the same way the device-local high
   scores do: the questions a game deals are remembered in this
   browser's localStorage under a namespaced key. It is NOT shared
   with other players and never leaves this browser.

   The memory is a COOLDOWN, not just a preference (the 25-game
   rule): every dealt question is stamped with the index of the
   game that dealt it — a counter of games started on this device
   — and no dealer may deal it again until 25 full games have
   been played after the game that dealt it (SEEN_COOLDOWN): a
   question dealt in game N stays ineligible through game N+25
   and can first come around again in game N+26, so a full 25
   games always separate two dealings of the same question.
   Only when a pool holds nothing
   outside its cooldown — a narrow pool would otherwise deal short
   or not at all — may the dealer fall back, and then only to the
   least-recently-dealt questions in that pool, never to a recent
   one while an older one waits. Dealing never deals short. A
   question re-dealt after its cooldown restarts its own cooldown
   from that game. A game in progress is never touched: resume
   still restores its originally dealt questions exactly, and
   those questions were already stamped when the game was dealt.
   If storage is unavailable, the store lives in memory for the
   session and dealing falls back to the old per-game shuffle —
   no crash.

   The store's saved shape is a map from question key to the game
   index that last dealt it. The previous shape was a plain array
   of keys (seen, no date); entries in that shape migrate as
   long-ago — stamped far in the past, so they are eligible again
   at once but still sort oldest in a fallback. */
var SEEN_KEY="trivia-or-nada.seen.v1";
var GAMECOUNT_KEY="trivia-or-nada.gamecount.v1";
var SEEN_COOLDOWN=25;
var SEEN_LONG_AGO=-1000000;
var seenSet=null;
var gameCountCache=null;

  /* ---------- Practice-round cycling (per pool, least-recently-dealt) ----------
     Practice rounds get a stricter anti-repeat discipline than the
     shared cooldown above: within EACH practice pool (a category
     bank, a picture round, Capitals, Mixed Bag, …) questions deal
     in least-recently-dealt order, so the whole pool takes its turn
     before any question repeats in that pool — consecutive rounds
     of the same category share nothing while undealt questions
     remain, and when the pool wraps, the repeats are always its
     least-recently-dealt questions (maximum possible spacing).
     The order is tracked PER POOL with a running counter, persisted
     in the SAME seen-store item as the Gauntlet cooldown map
     (SEEN_KEY), under "practice::<poolId>::<question key>" entries
     the Gauntlet never looks up (its lookups are exact question
     keys) and never disturbs: markGameSeen writes the whole map
     back, practice entries included, and the practice writer below
     does the same — neither wipes the other, and every entry saved
     before this existed keeps working exactly as it did. The
     shared cross-mode stamping is unchanged: practice games still
     stamp the shared store in startGame, and the Gauntlet's
     25-game cooldown behaves exactly as before. If storage is
     unavailable the map lives in memory for the session, like the
     seen memory itself — the cycle still holds for the session. */
  var PRACTICE_PREFIX="practice::";
  var PRACTICE_COUNTER_KEY="practice::__counter";
  var practiceLruPool=null;
var lastTickSec=99;
var timerTimeoutFn=null;

/* ================= GAME SOUND (Web Audio, synthesized) =================
   Short game-show sounds made from raw oscillator tones in the
   browser — no audio files, nothing to download. Sound is ON by
   default and automatic: browsers refuse to start audio before a
   user gesture, so the AudioContext is created/resumed on the
   player's first tap anywhere (typically Start Game), and primed
   with a silent buffer started inside that tap — the extra step
   iPad/iPhone Safari needs before it will actually run the
   context; without it every sound stays silent there. Every
   sound after that plays on its own. There is no "enable sound"
   step — the only control is the mute toggle (cover + in-game),
   whose choice is remembered in this browser's localStorage, the
   same device-local way the high scores are kept. */
var SOUND_KEY="trivia-or-nada.sound.v1";
var soundMuted=false;
(function(){
  var s=hsStore(); if(!s) return;
  try{ soundMuted = s.getItem(SOUND_KEY)==="off"; }catch(e){ /* unreadable — sound stays on */ }
})();
var actx=null;
/* First tap anywhere unlocks audio (browser autoplay rule). This
   is not an opt-in: sound is already on — the gesture just lets
   the browser start the context. Every kind of tap is covered
   (touchend and click included: iOS Safari does not reliably
   count a bare pointerdown as an audio gesture), in the capture
   phase so the prime lands before the game's own tap handlers
   run, and with the silent-buffer prime described above — a
   create/resume alone leaves iOS silent. Coming back to the tab
   also re-resumes, in case iOS interrupted the context while the
   game was in the background. */
["pointerdown","touchend","click","keydown"].forEach(function(ev){
  document.addEventListener(ev, function(){ if(!soundMuted) primeAudio(); }, true);
});
document.addEventListener("visibilitychange", function(){
  if(!document.hidden && !soundMuted) audioCtx();
}, false);
/* Set while a reveal saved before a reload is being re-shown, so
   resuming a game never replays the sound of an answer that was
   settled earlier. */
var sfxSilent=false;
TIERS.forEach(function(t){
  stampCat(TEXT[t], "General Knowledge");
  stampCat(CAPITALS[t], "Capitals");
  stampCat(TYPED[t], "General Knowledge");
});
/* Load-time pool flag: stamp every multiple-choice-only item in every
   pool that can feed a typed deal (plus the DJ practice pools, which
   share the same question objects). The stamp covers all four
   multiple-choice-only classes — choice-dependent stems, answer-
   leaking prompts, vague association prompts, and definition-
   sentence answers; VAGUE_FLAGGED counts the association class on
   its own, and DEFINITION_FLAGGED the definition class. */
var VAGUE_FLAGGED=0;
var FRAGMENT_FLAGGED=0;
var DEFINITION_FLAGGED=0;
var DEFINITION_EXCLUDED=[];
(function stampMcOnly(){
  var pools=[DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC];
  TIERS.forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  var seen=[];
  pools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){
      if(!q || q.type!=="mc" || seen.indexOf(q)>-1) return;
      seen.push(q);
      var vague=vagueAssociationPrompt(q.q);
      if(vague) VAGUE_FLAGGED++;
      var frag=bareFragmentPrompt(q.q);
      if(frag && !vague && !choiceDependentStem(q.q) && !promptLeaksAnswer(q)) FRAGMENT_FLAGGED++;
      var defn=definitionSentenceAnswer(q);
      if(defn){ DEFINITION_FLAGGED++; DEFINITION_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:q.choices[q.a]}); }
      if(vague || frag || defn || choiceDependentStem(q.q) || promptLeaksAnswer(q)) q.mcOnly=true;
    });
  });
})();
var SUBJECTLESS_EXCLUDED=[];
(function stampNoDeal(){
  var pools=[DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC, LEANN_PIC];
  TIERS.forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t], TYPED[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  var seen=[];
  pools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){
      if(!q || seen.indexOf(q)>-1) return;
      seen.push(q);
      if(subjectlessPrompt(q)){
        q.noDeal=true;
        q.noDealReason="subjectless prompt: no clue, subject, or picture to answer from";
        SUBJECTLESS_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer)});
      }
    });
  });
})();
/* Load-time stamp for the tautology class (see TAUTOLOGY PROMPTS
   NEVER DEAL above): same pools, same noDeal disposition, and the
   same deal-time double-checks as the subjectless stamp — every MC
   pick passes through mcDealable (which filters noDeal and now
   re-tests the detector in mcSetValid), and the typed paths refuse
   a flagged item in typedDealReplacement, in buildGauntlet's
   Round 4 swap, and in the finale-pool filter. */
var TAUTOLOGY_EXCLUDED=[];
(function stampTautologyNoDeal(){
  var pools=[DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC, LEANN_PIC];
  TIERS.forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t], TYPED[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  var seen=[];
  pools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){
      if(!q || seen.indexOf(q)>-1) return;
      seen.push(q);
      if(promptContainsAnswer(q)){
        q.noDeal=true;
        q.noDealReason="tautology: the prompt contains the answer itself";
        TAUTOLOGY_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer)});
      }
    });
  });
})();
/* ============ GARBLED SHEET ROWS NEVER DEAL ============
   Three Trivia Sheet rows are garbled past the point where a verified
   repair exists, so — like the subjectless and tautology classes —
   they are excluded from ALL dealing (multiple choice AND typed,
   Gauntlet AND practice, q.noDeal) while staying in the bank,
   undeleted and unrewritten:
   - "What film not nicholas sparks" / "trig tales etc": neither
     the intended film nor the intended answer can be verified
     from what the sheet holds, and no wording may be invented.
   - "Haley's comet has passed how many times in xxx years?": the
     "xxx" is an unfinished placeholder — the timespan the count
     belongs to was never written down, so the question cannot be
     answered as it stands and its intended form cannot be
     verified. (The comet is Halley's, but fixing the name does
     not supply the missing number.)
   - "What card game is this" / "Dominion": the prompt points at
     a picture that was shown in the pub quiz; this game holds no
     such picture, so the prompt gives the player nothing to
     answer from — the same defect as the subjectless class, in
     deictic form. (The Brandenburg Gate row was different: the
     sheet itself named the subject, so that row could be repaired
     into a real text question, and was.)
   Keyed by norm(raw clue) + "|" + norm(answer), the same keying
   as CHAR_QA, and matched against DJ_MC after it is built. */
var GARBLED_EXCLUDED=[];
(function stampGarbledNoDeal(){
  var keys={};
  [["What film not nicholas sparks","trig tales etc"],
   ["Haley's comet has passed how many times in xxx years","4"],
   ["What card game is this","Dominion"],
   /* Audit-gauntlet holds (2026-11-13): rows dealt in the audit
      whose prompt or answer a player cannot fairly be asked to
      produce — garbled fragments dealt as typed Round 4 questions
      ("Rita Glossner what show?"), an ambiguous clue whose stored
      answer is defensible only with its explanation attached
      ("Michael Phelps record" — a longest-putt record, while the
      clue reads as his swimming records), a song that is merely
      one of many Schroeder plays, and two numeric answers that
      are convention-dependent, not single facts (the Pentagon is
      five floors above ground with two basement levels; a
      "barrel" is 42 gallons of oil, 31 of beer, 15.5 only as a
      half-keg). Same disposition as the garbled class: held from
      all dealing, kept in the bank. */
   ["Rita Glossner what show","The Middle"],
   ["What was time machine in OG Back to Future script","fridge"],
   ["How many years in US to be president","14"],
   ["What President's kids brought pony upstairs in WH","Theodore Roosevelt"],
   ["What Dreams are made of is from","The Lizzie McGuire Movie"],
   ["Michael Phelps record","golf"],
   ["What song does Schroeder play","Fur Elise"],
   ["How many floors in Pentagon","7"],
   ["How many gallons in a barrel","15.5"],
   ["Lord Stanley of","Preston"],
   /* Round 2 of the same audit: rows whose dealt sets or clues
      failed the same tests — cross-kind filler sets that no
      classifier table can see (Spartacus / Hornsby / Fuji /
      Bolt), a phrase-filler row ("Airborne does what"), a clue
      that names no specific province at all, so any province
      would satisfy it ("Canadian province"), and a slogan row
      whose stored answer is not the rainbow-slogan brand (that
      slogan is Skittles' "Taste the Rainbow"; the row is held
      rather than rewritten, per the no-guesses rule). */
   ["Spartacus love interest","Jean Simmons"],
   ["Only inductee to HOG between 1940-43","Rogers Hornsby"],
   ["Fine pix camera","Fuji"],
   ["Bolt","travolta"],
   ["Airborne does what","prevents colds"],
   ["Canadian province","manitoba"],
   ["Lewiston and Clarkston border what two states","Idaho and Washington"],
   ["Superman satellite","wayne enterprises"],
   ["Ruth was Naomi's","Daughter in law"],
   ["Howdy Doodie last words of show","Bye Bye"],
   ["Big Ben Tower","Elizabeth Tower"],
   ["#1 James Bond song","View to a Kill"],
   ["Cuban missile crisis","Khrushchev"],
   ["Basset hound in Dukes of Hazzard","flash"],
   ["Literary theme of recurring symbolic significance","motif"],
   ["Alien sedition act","Adams"],
   ["Gerald Ford middle name","Rudolph"],
   ["DNS","Domain Name System"],
   ["Right forward, left out","Bunny Hop"],
   ["Ratio of circumference to diameter","pi"],
   ["Hawaii 5-0 catchphrase","book'em dano"],
   ["Don't pee and tell me its raining book","Judge Judy"],
   ["Horseshoe nebula constellation","Orion"],
   ["Youngest SNL member","Pete Davidson"],
   ["First Survivor location","Borneo"],
   ["Last Great Race","Iditarod"],
   ["Office Space tv show they watched in his apt","Kung Fu"],
   ["MLK's original first name","Michael"],
   ["Stp","scientifically treated petroleum"],
   ["Danube flows into","Black Sea"],
   ["Movie about Mercy Me Bart Millard","I Can Only Imagine"],
   ["First pres born after decl. of indep.","Van Buren"],
   ["Moshe Katsav","Israel president"],
   ["Alvin wants what for xmas","Hula Hoop"],
   ["John Steed and Emma Peel","The Avengers"],
   ["First woman to lead at Indy 500","Danica Patrick"],
   ["Pres candidate shot in wisconsin saloon","Theodore Roosevelt"],
   ["5'4\" president","Madison"],
   ["Dice","pips"],
   ["Malcolm in the middle drug store","Lucky Aide"],
   ["What a fool believes, he sees","the wise man has the power"],
   ["Game with routes between cities","Ticket to Ride"],
   ["West german capital","Bonn"],
   ["Transformers voice of Sentinel Prime","Leonard Nimoy"],
   ["Millionaire host","Cedric"],
   ["President arrested and brought to custody","US Grant"],
   ["Easton Assassin","Larry Holmes"],
   ["First player to steal 100 bases back to back","Rickey Henderson"],
   ["Commander cody","Hot Rod Lincoln"],
   ["Home alone thiefs","Harry and Marv"],
   ["Ahmad rashad","Bobby Moore"],
   ["Charli XCX Speed Drive samples from","Mickey"],
   ["1941 book and 2006 movie","Flicka"],
   ["Like a mini buddah","anchorman"],
   ["Newsroom ACN","Atlantis Cable Network"],
   ["Cards Against Humanity reader","Card Czar"],
   ["WIFI password in Dr Strange","Shamballa"],
   ["Trix","General Mills"],
   ["Dolly parton song in 1958","Puppy Love"],
   ["Garfield","Jim Davis"],
   ["Father of genetics","Mendel"],
   ["First triple double for whole NBA season","Oscar Robertson"],
   ["2023 world chess champ","Ding Liren"],
   ["Tyson's first belt","Trevor Berbick"],
   ["Lord of the flies","William Golding"],
   ["1901 batting champion","Nap Lajoie"],
   ["Dr seusee","Fox in Socks"],
   ["OP for invading Russia","Operation Barbarossa"],
   ["Bokononism - cats cradle","Kurt Vonnegut"],
   ["Soprano maiden name","DeAngelis or Moltesanti"],
   ["Brenner pass between","Austria and Italy"],
   ["First Secretary of State","Jefferson"],
   ["10th best athlete of 20th C.","Babe Didrikson"],
   ["Wall-e","Buy N Large"],
   ["Playboy cover 14 times","Pamela Anderson"],
   ["States that border NM","Colorado, Oklahoma, Texas, Arizona, Utah"],
   ["John Michael Higgins Game Show Network","Chain Reaction"],
   ["Chitty chitty bang bang","four-fendered friend"],
   ["3M stands for","Minnesota Mining and Manufacturing"],
   ["Wahlberg in The Fighter","Micky Ward"],
   ["Walk Away singer","Kelly Clarkson"],
   ["Jones diary signed by","Hitler"],
   ["Knighted and gave back 4 years later","Lennon"],
   ["NY lawyer memorial in 1920","Mt. Rushmore"],
   ["27 heavyweight title fight","Joe Lewis"],
   ["College in pitch perfect","Barton"],
   ["Dof named liberty","Gerald Ford"],
   ["John mayer song","candy lips and bubble gum tongue"],
   ["Racehorses get what buried","head, heart, hooves"],
   ["St-Paul act","Cirque du Soleil"],
   ["ROCKY 3","Hulk Hogan"],
   ["Prohibition amendment","18th"],
   ["Ronan","Guardians"],
   ["Silence DoGood","Ben Franklin"],
   ["First woman to serve in both houses of congress","Margaret Chase Smith"],
   ["ILM founded by","George Lucas"],
   ["Pirates of Caribbean","Keith Richards"],
   ["Book with no e","Gadsby"],
   ["Voice of Ralph Wiggins","Nancy Cartwright"],
   ["Barenaked ladies song Like ____ _____ I'm frantic","Harrison Ford"],
   ["Number of ppl in NightHawks diner","3"],
   ["Face of Af. Am. 1970's \"baller\"","Walt Frasier"],
   ["First US trade treaty was with","Japan"],
   ["Cars drive in","The Cozy Cone"],
   ["In the heat of the night?","Sparta, MS"],
   ["Silver Dollar","Eisenhower"],
   ["Odin dies in","Norway"],
   ["Lincoln","Secret Service"],
   ["West coast of S. America","Chile"],
   ["27 wins in 1973","Steve Carlton"],
   ["Baron of renfrew","charles, now william"],
   ["William Golding wrote","Lord of the Flies"],
   ["Pretty woman","Vivian Ward"],
   ["Nirvana lyric \"as an old\"","enemy"],
   ["Herbie","53"],
   ["Rita Moreno in what detective series","Rockford Files"],
   ["First in R&R and Country HOF","Johnny Cash"],
   ["Colors of the rainbow slogan","Nerds"]
  ].forEach(function(p){ keys[norm(p[0])+"|"+norm(p[1])]=1; });
  DJ_MC.forEach(function(q){
    if(!q || q.type!=="mc") return;
    var ans=q.choices[q.a];
    if(keys[norm(djRawClue(q))+"|"+norm(ans)]){
      q.noDeal=true;
      q.noDealReason="garbled sheet row: intended wording cannot be verified, or the prompt points at a picture that is not shown";
      GARBLED_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:ans});
    }
  });
})();
/* ============ "NOT…" CLUES REMOVED BY OWNER RULING NEVER DEAL ============
   Trivia Sheet "Not…" rows are excluded from ALL dealing (multiple
   choice AND typed, Gauntlet AND practice, q.noDeal) while staying
   in the bank, undeleted — the same disposition as the garbled
   class above (owner ruling, 2026-11-11):
   - "Not a singer in All For Love" / "Bon Jovi": a "Not…" clue is
     true of almost everybody, so it has no single defensible
     answer — the reported game marked "Gaga and Ariana" wrong even
     though they are also not singers on 'All for Love' (the track
     was sung by Bryan Adams, Rod Stewart, and Sting). Rather than
     rewrite the clue into a different question, the row is pulled
     from dealing entirely.
   - Owner's class ruling later the same day ("do away with not
     questions here they seem problematic"): the exclusion now
     covers ALL 16 remaining inventoried sheet Not-clues as well —
     the negative-fragment items listed below. Three of the 16
     already never dealt and are listed so the stamp confirms them:
     "What film not nicholas sparks" (also garbled-stamped above),
     "Not included in Who's on First", and "Not presidential secret
     service nickname". NOT covered, by the same ruling: the three
     authored, complete-form NOT questions in other banks (Chemistry
     "which metal does NOT react…" → Gold; Science "sound does NOT
     travel through…" → A vacuum; Canada "Which province was NOT
     one of Canada's four original provinces in 1867?" → Prince
     Edward Island) — those are not sheet clues and stay dealable.
   Keyed by norm(raw clue) + "|" + norm(answer), the same keying
   as the garbled stamp, and matched against DJ_MC after it is
   built. */
var NOT_CLUE_EXCLUDED=[];
(function stampNotClueNoDeal(){
  var keys={};
  [["Not a singer in All For Love","Bon Jovi"],
   ["Not a #1 SITCOM","All in the Family"],
   ["Not original NATO country","Greece"],
   ["Not from Australia","Def Leppard"],
   ["Not a Christie Brinkley ex","Herbert Holand"],
   ["Does not border Laos","Singapore"],
   ["Not OG flintstones vitamin","Betty"],
   ["Not a lord in brave","McIntosh"],
   ["Letter not in state","Q"],
   ["Not an official language in PNG","spanish"],
   ["Not Post Malone song","Stay Awake"],
   ["Not a CAT 5 hurricane","Nina"],
   ["Not ingredient in Campbell's green beans","almonds"],
   ["Not in southern sky","Rigel"],
   ["Not included in Who's on First","Right Field"],
   ["Not presidential secret service nickname","preacher"],
   ["What film not nicholas sparks","trig tales etc"]
  ].forEach(function(p){ keys[norm(p[0])+"|"+norm(p[1])]=1; });
  DJ_MC.forEach(function(q){
    if(!q || q.type!=="mc") return;
    var ans=q.choices[q.a];
    if(keys[norm(djRawClue(q))+"|"+norm(ans)]){
      q.noDeal=true;
      q.noDealReason="owner ruling 2026-11-11: 'Not…' clue — true of almost everybody, so no single defensible answer";
      NOT_CLUE_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:ans});
    }
  });
})();
/* ============ PARAPHRASE-HELD SHEET ROWS NEVER DEAL ============
   The 2026-11-11 paraphrase pass (see DJ_REWRITE above) could not
   reword these Trivia Sheet rows without inventing or changing
   their meaning — picture-round labels with no picture in the game,
   bare words with no recoverable relation, garbled pairings, and
   negative clues of the same class as the inventoried Not-clues.
   As dealt they were ambiguous (a player could not tell what single
   answer was wanted), so — the same disposition as the garbled and
   subjectless classes — they are excluded from ALL dealing
   (multiple choice AND typed, Gauntlet AND practice, q.noDeal)
   while staying in the bank, undeleted, for the owner's ruling.
   Keyed by DJ_MC index (which is DJ_RAW order); rows the earlier
   classes already excluded are not re-stamped. */
var REWRITE_HELD_EXCLUDED=[];
(function stampRewriteHeldNoDeal(){
  var held={13:1, 23:1, 63:1, 115:1, 127:1, 141:1, 145:1, 165:1, 185:1, 190:1, 191:1, 194:1, 195:1, 214:1, 218:1, 225:1, 227:1, 318:1, 320:1, 340:1, 348:1, 356:1, 380:1, 416:1, 470:1, 506:1, 510:1, 569:1, 590:1, 637:1};
  DJ_MC.forEach(function(q, i){
    if(!q || q.type!=="mc" || !held[i] || q.noDeal) return;
    q.noDeal=true;
    q.noDealReason="paraphrase pass 2026-11-11: clue cannot be reworded without inventing or changing its meaning, and as dealt it is ambiguous — held for the owner's ruling";
    REWRITE_HELD_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:q.choices[q.a]});
  });
})();
/* ============ INSTRUCTION CLUES NEVER DEAL ============
   Trivia Sheet rows whose "clue" is a leftover instruction or a
   subjectless fragment — not a question — are excluded from ALL
   dealing (multiple choice AND typed, Gauntlet AND practice,
   q.noDeal) while staying in the bank, undeleted — the same
   disposition as the garbled and subjectless classes (owner
   flag, 2026-11-12: "A hard question should require more
   knowledge — not require guessing what the writer meant").
   The class audit covered every sheet-derived 'Trivia Clue:'
   item (873 of the 908 sheet rows display in that framing):
   directive-pattern clues and short fragments were checked
   against each item's stored rewrite and explanation. All but
   two already carry a complete rewritten question (the
   2026-11-11 paraphrase pass) or an earlier never-deal stamp, or
   name their subject inside the directive itself ("Spell Zach's
   name correctly", displayed as the full spelling question).
   The two rows below are the whole unrecovered remainder:
   - "Spell correctly" / "Wile E. Coyote": a bare directive with
     no subject at all; its stored explanation (a description of
     the character) recovers no question, and the owner ruled no
     defensible intended answer exists. Never rewritten, never
     dealt.
   - "Fungus" / "egon": a one-word fragment; no stored
     explanation exists, and the word alone cannot pick Egon out
     of the four Ghostbusters its set deals. No question may be
     invented for it.
   Keyed by norm(raw clue) + "|" + norm(answer), the same keying
   as the garbled stamp. The going-forward guard is
   instructionCluePrompt (part 1), re-tested in mcSetValid at
   deal time. NOTE: neither row may be re-pinned — the late pins
   restore noDeal=false for the sets they pin, so both rows were
   removed from djPins there. */
var INSTRUCTION_EXCLUDED=[];
(function stampInstructionNoDeal(){
  var keys={};
  [["Spell correctly","Wile E. Coyote"],
   ["Fungus","egon"]
  ].forEach(function(p){ keys[norm(p[0])+"|"+norm(p[1])]=1; });
  DJ_MC.forEach(function(q){
    if(!q || q.type!=="mc") return;
    var ans=q.choices[q.a];
    if(keys[norm(djRawClue(q))+"|"+norm(ans)]){
      q.noDeal=true;
      q.noDealReason="instruction clue: the sheet row is a directive or subjectless fragment, not a question — no defensible intended answer (owner flag, 2026-11-12)";
      INSTRUCTION_EXCLUDED.push({q:q.q, cat:q.cat||"", answer:ans});
    }
  });
})();
/* ================= PER-GAME SUBJECT CAPS (MIXED DEALS) =================
   In the mixed deals — the Gauntlet and the Mixed Bag / Any practice
   round — two subjects are capped at ONE question per game each:
   LeAnn Rimes and Video Games. The caps are enforced at deal time
   only, exactly like the geography cap above: no question is removed
   from any bank, and a capped-out slot is simply dealt from another
   category instead. Dedicated practice rounds are NOT capped — the
   LeAnn Rimes round stays all-LeAnn, and the Pop Culture round keeps
   its full mix — because these helpers are only consulted by the
   mixed dealers (buildGauntlet, dealMixed, and the Round 4 swap).

   A question counts as a LeAnn Rimes question when it is one of her
   labelled collection (cat "LeAnn Rimes" or membership of LEANN_MC),
   when it is her Famous Faces portrait (LEANN_PIC — its category is
   Famous Faces, so membership / the answer check is what catches
   it), when its stem names her, or when she is its correct answer.
   A question counts as a Video Game question when its category says
   so, when its stem says so outright ("video game", "arcade game",
   a console or franchise name), when its correct answer is a known
   gaming brand (the sheet's own gaming table: Atari, Nintendo,
   Sega, PlayStation, Xbox…), or when its stem or correct answer
   names a well-known game, franchise, or character (Mario, Zelda,
   Pac-Man, Minecraft, Pokémon…). Board games are not video games
   and never count. Only the stem and the correct answer are read —
   a capped subject sitting in the distractors does not count. */
var LEANN_GAME_CAP=1;
var VIDEOGAME_GAME_CAP=1;
var VG_STEM_RE=/\bvideo ?games?\b|\bvideogames?\b|\barcade game\b|\bgame console\b|\bvideo-game\b/i;
var VG_SUBJECT_RE=/\bmario\b|\bluigi\b|\bzelda\b|pac[-\s]?man|\bdonkey kong\b|\btetris\b|\bminecraft\b|\bfortnite\b|pok[eé]mon|\bpikachu\b|sonic the hedgehog|\bnintendo\b|\bplaystation\b|\bxbox\b|\bsega\b|\batari\b|game boy|space invaders|\bfrogger\b|animal crossing|final fantasy|\bmetroid\b|\bcastlevania\b|tomb raider|lara croft|call of duty|grand theft auto|\btapper\b|\bkirby\b/i;
var VG_ANSWER_NORM={};
["Mario","Pac-Man","Donkey Kong","The Legend of Zelda","Tapper","Atari","Nintendo","Animal Crossing: New Horizons","Pikachu","Tetris","Minecraft","Sonic the Hedgehog"].forEach(function(x){ VG_ANSWER_NORM[norm(x)]=1; });

/* ================= TYPED QUESTIONS STATE THE EXPECTED NAME FORM =================
   The reported case (Round 2 Q10 wager finale): "Who is the author
   of the novel 'Wuthering Heights'?" — the player typed "Bronte"
   and lost the points banked that round, because outside Round 1 a
   surname alone does not score: the answer is a person's FULL name
   and the full name is what must be typed. The question never said
   so. A typed question whose answer is a person's full name now
   states the expected form in the question itself — "Who is the
   author of the novel 'Wuthering Heights'? First and last name." —
   so a one-word answer fails fair and square, because the player
   was told.

   This is wording only: judging, scoring, stakes, Pass/timeout
   rules, timers, and every answer are unchanged. Round 1's
   partial-name forgiveness still applies there exactly as before —
   the instruction states the full form that is expected, and Round
   1 still forgives a surname alone on top of it. The statement is
   appended as its own sentence ("First and last name."), never as
   a parenthetical word-count hint.

   Detection, strongest evidence first: the answer-kind tables
   (kindInfoAll — the same NAME_GENDER / face tables the distractor
   rules use) already know most person names; a Famous Faces
   photo's answer is the person pictured; a curated character name
   counts as a person; and a person-seeking prompt — "Who…", "Which
   author…", "Name the composer…") plus a name-shaped answer
   (capitalised words with name particles — van, de, von…) that is
   not a known animal or city covers the authored author/artist
   questions the tables never listed. Groups, countries, states,
   capitals, colours, numbers, and every other answer kind never
   trigger it, and a prompt that already states the form is left
   alone. Applied at load to the native typed pools (the Gauntlet
   finales), inside mcToTyped (Round 4's typed conversions), and in
   renderQuestion's no-choices typed fallback — every surface a
   typed question can reach the player through. */
var NAME_FORM_PARTICLES={van:1,von:1,de:1,der:1,den:1,del:1,della:1,di:1,da:1,dos:1,bin:1,ibn:1,al:1,el:1,le:1,la:1,ter:1,ten:1,st:1};
/* The native typed pools (the Gauntlet finales, and any typed
   practice use of them) get the statement at load, so the dealt
   question, the reveal, and the end-of-game review all show the
   same wording. */
TIERS.forEach(function(t){
  TYPED[t].forEach(function(q){ q.q=withTypedForm(q); });
});
/* The Super Hard pool follows the same rule, so its dealt form
   matches its reveal and review form. */
SUPERHARD.forEach(function(q){ q.q=withTypedForm(q); });
/* The Extremely Hard pool follows the same rule. */
EXTREMEHARD.forEach(function(q){ q.q=withTypedForm(q); });
/* The Ludicrously Hard pool follows the same rule. */
LUDICROUSHARD.forEach(function(q){ q.q=withTypedForm(q); });
/* The Impossibly Hard pool follows the same rule. */
IMPOSSIBLEHARD.forEach(function(q){ q.q=withTypedForm(q); });
/* The Genius Level pool follows the same rule. */
GENIUSHARD.forEach(function(q){ q.q=withTypedForm(q); });

/* ================= WELL-ROUNDED MIX DEALER =================
   This is a well-rounded trivia game, not a geography test, so the
   mixed deals (the Gauntlet and the Mixed Bag) are dealt by rotation
   through the category banks instead of uniform-random over the raw
   pools — uniform draws let the huge geography pools crowd out the
   smaller text banks. Geography is capped hard: capital-city
   questions + map-shape outlines + flag pictures TOGETHER may appear
   at most GEO_CAP times in a whole Gauntlet (and proportionally in a
   Mixed Bag), however they are dealt — a Round 4 typed capital or
   map question still counts, because the caps are applied here, at
   deal time, before Round 4 converts anything to typed. Dedicated
   practice rounds (Capitals, Map Shapes, Flags, …) are untouched. */
var GEO_PIC_CATS={"Map Shapes":1, "World Flags":1, "US State Flags":1};
var GEO_GAUNTLET_CAP=3;   /* of 20 questions — about 15% */
var GEO_MIXED_CAP=1;      /* of 10 questions — 10% */
var MIX_BANKS=[
  {name:"LeAnn Rimes", pool:function(){ return LEANN_MC; }},
  {name:"Law", pool:function(){ return NEWCAT.law; }},
  {name:"Chemistry", pool:function(){ return NEWCAT.chemistry; }},
  {name:"Periodic Table", pool:function(){ return NEWCAT.periodic; }},
  {name:"Sciences", pool:function(){ return NEWCAT.science; }},
  {name:"Medical", pool:function(){ return NEWCAT.medical; }},
  {name:"Pop Culture", pool:function(){ return NEWCAT.popculture; }},
  {name:"Music", pool:function(){ return NEWCAT.music; }},
  {name:"Advertising", pool:function(){ return NEWBANKS.advertising; }},
  {name:"Marketing", pool:function(){ return NEWBANKS.marketing; }},
  {name:"Riddles", pool:function(){ return NEWBANKS.riddles; }},
  {name:"Sports", pool:function(){ return NEWBANKS.sports; }},
  {name:"History", pool:function(){ return NEWBANKS.history; }},
  {name:"Hawaii", pool:function(){ return NEWBANKS.hawaii; }},
  {name:"Canada", pool:function(){ return NEWBANKS.canada; }}
];
/* The bonus cap: a Gauntlet total plus bonus points can never
   exceed a perfect game's 1,280. Enforced where bonus points are
   scored (answerTyped) and again in endGame before the score is
   saved or shown. */
var BONUS_CAP=1280;

/* One-shot flags for the game startGame() is about to build,
   set by whichever control starts it (the cover's Sudden Death
   toggle, a challenge link, Play again) and consumed — then
   cleared — by startGame itself. */
var pendingFlags={};

/* ================= CHALLENGE LINKS V2 — THE LINK CARRIES THE GAME =================
   Why v2 exists (reported live, 2026-11-10): a v1 challenge
   link carried only the game's seed, and the friend's copy
   re-dealt from that seed — but a seed alone cannot reproduce
   the challenger's game. The challenger's own deal applied
   their device's seen-question cooldown (pick() filters via
   isSeenQ) and took its Q10/Q15 strict pattern from the device
   alternation counter, while the challenge re-deal bypassed
   the seen store and took the strict pattern from the seeded
   stream's coin flip. Any regular player — anyone with cooling
   questions lying in the seeded path, or the opposite
   alternation parity — dealt their friend a different 20 and
   never knew. So v2 stops re-dealing: the link carries the
   game itself.
   - Every item buildGauntlet deals is annotated at deal time
     with a canonical reference {pool, idx}: the pool is a
     two-character code for the exact array the item was drawn
     from, the index its position in that array. The banks are
     built deterministically at load (LOAD_BANK_SEED), so the
     same build has the same arrays in the same order on every
     device, and a reference resolves to the same question
     everywhere. Refs ride on state.qs and through the
     in-progress save.
   - renderQuestion records the choice display order actually
     shown for each multiple-choice question (item.shownOrder),
     so the friend sees the choices in the challenger's order,
     not a fresh shuffle.
   - The minted link is ?challenge=v2.<bit>.<slot>.<slot>…
     with one slot per question for the FIRST 20 slots only (a
     bonus round's extra five are not part of the challenge).
     A slot is <pool code><index in base 36><permutation char>:
     the permutation char is the Lehmer (factorial) index 0–23
     of the shown choice order as one base-36 character, or
     "z" — a value no real permutation can take — for typed and
     finale slots, and for a multiple-choice slot that was
     never rendered (a Sudden Death game that ended early has
     unshown questions; those deal their friend a normal
     shuffle, there being no shown order to carry). The bit is
     the strict bit: which of the Q10/Q15 finales was strict in
     the challenger's game (finales run [false, bit, !bit,
     true], the pattern every Gauntlet deal produces).
   - Opening a v2 link RECONSTRUCTS the game from the
     references: no seeded dealing, no seen-store consultation,
     no alternation-counter consumption. If any reference
     cannot resolve — a link from a different build, a corrupted
     payload — nothing is dealt at all: the cover shows a note
     saying the challenge couldn't be loaded, rather than
     silently starting a random game.
   - v1 seed links (?challenge=<seed>, no v2 prefix) keep
     working exactly as they always have (startChallengeGame),
     so links already shared don't break. The Daily Gauntlet's
     seeded path is untouched. */
var CHALLENGE_POOLS=null;

/* ================= ANSWER EXPLANATIONS =================
   After a question is settled — correct, wrong, pass, or timeout —
   the reveal shows one brief sentence under the correct answer
   saying WHY it is correct, and the end-of-game review repeats it.
   This function is the only source, and it is called only from
   finishReveal and the review builder: the explanation is
   reveal-only, never part of the prompt, the choices, or a picture
   caption, exactly like the delayed picture credit.

   An explanation is written only where it follows from the
   question and its verified answer themselves — never an invented
   fact:
   - a capital question states the relation outright ("X is the
     capital of Y"), picture questions name what the image shows
     (the flag / outline / person / landmark / painting / film the
     player was looking at), and a phobia-definition answer defines
     its clue term ("Cenocillicaphobia is the fear of an empty beer
     glass", from the sheet's own clue and answer);
   - otherwise the bank's own authored fact for the question is
     the explanation — it was written and verified with the
     question;
   - where neither exists, the explanation is BLANK. No generic
     "because it is correct" filler is ever substituted: a question
     without a derivable, verified why simply shows none.

   EXPLAIN_EXTRA holds hand-written whys for individual sheet rows
   whose clue and answer state the relation but in the sheet's own
   shorthand (the character rows especially). Each is one sentence,
   written from the clue, the answer, and the well-established fact
   of who the character is — nothing is extrapolated beyond what
   the clue itself points at. Keyed by norm(raw clue) + "|" +
   norm(answer), the same keying as CHAR_QA. */
var EXPLAIN_EXTRA={};
[["Michael Phelps record","golf","At the 2012 Alfred Dunhill Links Championship at Kingsbarns in Scotland, Michael Phelps holed a putt estimated at 159 feet (53 yards) \u2014 believed to be the longest televised putt in history."],["Big Hero 6 robot","Baymax","Baymax is the inflatable healthcare robot from the film Big Hero 6."],
 ["Bear in Toy Story 3","Lotso","Lotso (Lots-o'-Huggin' Bear) is the strawberry-scented bear who rules the toys at Sunnyside Daycare in Toy Story 3."],
 ["Bidi bidi bidi","twiki","Twiki is the small robot in Buck Rogers in the 25th Century, known for his 'bidi-bidi-bidi' chatter."],
 ["John Stamos' character in Full House","Jesse","Jesse Katsopolis is John Stamos's character on Full House."],
 ["Tom Cruise in Days of Thunder","Cole Trickle","Cole Trickle is Tom Cruise's race-car driver character in Days of Thunder."],
 ["Tom Selleck in Friends","Dr. Richard Burke","Dr. Richard Burke is Tom Selleck's character on Friends."],
 ["William shatner's character in boston legal","denny crane","Denny Crane is William Shatner's character on Boston Legal."],
 ["Roy finkle character","ace ventura","Ace Ventura is the pet detective who takes the Ray Finkle case in Ace Ventura: Pet Detective."],
 ["Scott Bakula's character in Star Trek","John Archer","Jonathan Archer is Scott Bakula's captain character on Star Trek: Enterprise."],
 ["Muppet scientist","dr honeydew","Dr. Bunsen Honeydew is the Muppets' resident scientist."],
 ["Finding nemo shark","bruce","Bruce is the great white shark who leads the sharks' fish-eaters support group in Finding Nemo."],
 ["Ponrod pooch alter ego","Hong Kong Phooey","Hong Kong Phooey is the cartoon martial-arts alter ego of mild-mannered janitor Penrod Pooch."],
 ["Flintstone's boss","Mr. Slate","Mr. Slate is Fred Flintstone's boss at the Slate Rock and Gravel quarry."],
 ["Old man in UP name","Carl","Carl Fredricksen is the widowed balloon salesman at the centre of Up."],
 ["Middle child in the Middle","sue","Sue Heck is the ever-optimistic middle child in The Middle."],
 ["First name of guy in Fargo","Jerry","Jerry Lundegaard is the desperate car salesman at the centre of Fargo."],
 ["Pretty woman","vivian ward","Vivian Ward is Julia Roberts's character in Pretty Woman."],
 ["Armageddon","harry stamper","Harry Stamper is Bruce Willis's oil driller turned astronaut in Armageddon."],
 ["James Spader name on The Blacklist","Raymond Reddington","Raymond Reddington is James Spader's character on The Blacklist."],
 ["Impossible Girl in Dr Who","Clara Oswald","Clara Oswald is the Doctor's companion known as the Impossible Girl in Doctor Who."],
 ["Mayberry citizen is corpulent","Otis Campbell","Otis Campbell is Mayberry's good-natured town drinker on The Andy Griffith Show."],
 ["Scabbers was\u2026","Peter Pettigrew","Scabbers the rat was really Peter Pettigrew, a wizard hiding as an Animagus, in Harry Potter."],
 ["Butler from Fresh Prince","Geoffrey Butler","Geoffrey Butler is the Banks family's butler on The Fresh Prince of Bel-Air."],
 ["Lois is sister of","Beetle Bailey","Lois is Beetle Bailey's sister in the Beetle Bailey comic strip."],
 ["Spell correctly","Wile E. Coyote","Wile E. Coyote is the coyote forever chasing the Road Runner in the Looney Tunes cartoons."],
 ["First Pokémon given","Pikachu","Pikachu is the first Pokémon Ash receives in the Pokémon series."],
 ["Doll Aronld tries to get in Jingle All The Way","Turbo Man","Turbo Man is the must-have action figure fought over in Jingle All the Way."],
 ["Home alone thiefs","Harry and Marv","Harry and Marv are the two burglars who target the McCallister house in Home Alone."],
 ["Horse says you're a Spirit walker","The Lone Ranger","The Lone Ranger is the masked Texas Ranger hero of radio, television, and film."],
 ["Pay Tuesday for a hamburger today","Wimpy","Wimpy is the Popeye character famous for promising to pay Tuesday for a hamburger today."],
 ["Big Bang IQ 173","Leonard Hofstadter","Leonard Hofstadter is the Big Bang Theory character whose stated IQ is 173."],
 ["On 'The Masked Singer' US Season 4, which character did LeAnn Rimes play?","The Sun","LeAnn Rimes performed as the Sun on The Masked Singer and won Season 4."],
 ["In '9-1-1: Nashville' (2025), which character does LeAnn Rimes play?","Dixie Bennings","Dixie Bennings is the character LeAnn Rimes plays in 9-1-1: Nashville."],
 ["In 'Coyote Ugly', whose singing voice did LeAnn Rimes dub?","Piper Perabo's character Violet Sanford","Violet Sanford is Piper Perabo's character in Coyote Ugly, and LeAnn Rimes dubbed her singing voice."]
,
/* ---- Verified whys, second pass (2026-10-25) ----
   Hand-written one-sentence explanations for questions that
   previously showed none, keyed exactly like the entries above
   (norm(raw clue or question text) + "|" + norm(answer)). Each
   was written from the question, its verified answer, and the
   well-established fact behind it; questions with no verifiable
   why — mostly terse Trivia Sheet fragments — stay blank rather
   than carry an invented one. */
 ["Which animal is the largest land animal in the world?","African elephant","The African elephant is the largest land animal on Earth, with bulls weighing up to six tonnes."],
 ["How many wings does a butterfly have?","Four","A butterfly has four wings — a forewing and a hindwing on each side."],
 ["Which of these is a farm animal?","Cow","Cows are farm animals, raised for milk and beef; the other options are not livestock."],
 ["What do bees collect from flowers to make honey?","Nectar","Bees collect nectar from flowers and convert it into honey back at the hive."],
 ["Which month comes right after January?","February","February is the second month of the year, immediately following January."],
 ["How many sides does a pentagon have?","Five","A pentagon is a five-sided polygon — 'penta' means five."],
 ["Which of these animals lives in the ocean?","Dolphin","Dolphins are marine mammals that live in the ocean."],
 ["What is the main color of a school bus in the United States?","Yellow","US school buses are painted a distinctive yellow ('school bus chrome') so they are easy to spot."],
 ["Which sense organ do you use to smell?","Nose","The nose is the organ of smell; its receptors detect odours in the air."],
 ["How many cents are in a US dollar?","100","A US dollar is divided into 100 cents."],
 ["Which animal has a long trunk?","Elephant","The elephant's long trunk is an extended nose and upper lip used for breathing, smelling, and grasping."],
 ["What is frozen water called?","Ice","Water freezes into ice at 0°C (32°F)."],
 ["Which bird is known for hooting at night?","Owl","Owls are nocturnal birds of prey famous for their hooting calls."],
 ["How many letters are in the English alphabet?","26","The English alphabet has 26 letters, from A to Z."],
 ["Which vegetable are rabbits famous for eating?","Carrot","Rabbits are famously fond of carrots, a taste popularised by Bugs Bunny."],
 ["Which animal's baby is called a cub?","Bear","A baby bear is called a cub."],
 ["How many days are there in June?","30","June has 30 days — 'thirty days hath September, April, June and November.'"],
 ["Which of these is a musical instrument?","Trumpet","The trumpet is a brass musical instrument; the other options are not instruments."],
 ["What do you call the home a bird builds in a tree?","Nest","Birds build nests in trees to lay and protect their eggs."],
 ["Which planet is famous for its big rings?","Saturn","Saturn is famous for its wide, bright rings of ice and rock."],
 ["How many toes do most people have in total?","Ten","Most people have five toes on each foot — ten in total."],
 ["Which food is made from milk and aged in blocks or wheels?","Cheese","Cheese is made by curdling milk and aging the curds, often in blocks or wheels."],
 ["Which flightless bird is the largest bird in the world?","Ostrich","The ostrich is the world's largest bird, and it cannot fly."],
 ["What do you call a group of wolves?","A pack","A group of wolves is called a pack."],
 ["How many sides does a hexagon have?","Six","A hexagon is a six-sided polygon — 'hexa' means six."],
 ["What is the largest ocean on Earth?","Pacific","The Pacific is the largest ocean on Earth, covering more area than all land combined."],
 ["Which animal is known as man's best friend?","Dog","Dogs are called 'man's best friend' for their long history of loyalty and companionship with humans."],
 ["What color do you get by mixing blue and yellow paint?","Green","Mixing blue and yellow paint gives green."],
 ["How many days are there in a leap year?","366","A leap year has 366 days because February gains a 29th day."],
 ["Which instrument measures temperature?","Thermometer","A thermometer measures temperature."],
 ["What is the main ingredient in guacamole?","Avocado","Guacamole is made primarily from mashed avocado."],
 ["Which continent is the Sahara Desert on?","Africa","The Sahara, the world's largest hot desert, covers much of North Africa."],
 ["How many legs does a spider have?","Eight","Spiders are arachnids, and all arachnids have eight legs."],
 ["How many continents are there on Earth?","Seven","Earth has seven continents: Africa, Antarctica, Asia, Europe, North America, South America, and Oceania/Australia."],
 ["What is the tallest land animal?","Giraffe","The giraffe is the tallest land animal, thanks to its long neck and legs."],
 ["Which gas do people need to breathe to live?","Oxygen","People need oxygen to breathe; the body uses it to release energy from food."],
 ["How many colors are there in a rainbow?","Seven","A rainbow is traditionally counted as seven colours: red, orange, yellow, green, blue, indigo, and violet."],
 ["What do honey bees make?","Honey","Honey bees produce honey from nectar and store it in the hive."],
 ["Which bird cannot fly but is an excellent swimmer?","Penguin","Penguins are flightless birds whose flipper-like wings make them excellent swimmers."],
 ["What is the name of the cowboy toy in Toy Story?","Woody","Woody is the cowboy doll who leads Andy's toys in Toy Story."],
 ["How many minutes are there in one hour?","60","One hour is made up of 60 minutes."],
 ["Which shape has exactly three sides?","Triangle","A triangle is a shape with exactly three sides."],
 ["Which of these is a star?","The Sun","The Sun is a star — the one at the centre of our solar system."],
 ["How many wheels does a bicycle have?","Two","A bicycle has two wheels — 'bi' means two."],
 ["Which season comes right after summer?","Autumn","Autumn (fall) follows summer in the yearly cycle of seasons."],
 ["What do caterpillars turn into?","Butterflies","Caterpillars metamorphose into butterflies."],
 ["What is a baby frog called?","Tadpole","A baby frog is a tadpole, which grows legs and loses its tail as it matures."],
 ["Which planet is closest to the Sun?","Mercury","Mercury is the closest planet to the Sun."],
 ["How many hours are there in a full day?","24","A full day is 24 hours long."],
 ["Which bird is a traditional symbol of peace?","Dove","The dove is a traditional symbol of peace, dating back to the story of Noah's ark."],
 ["How many sides does a square have? Type the number word.","four","A square has four equal sides."],
 ["What do you call a baby dog?","puppy","A baby dog is called a puppy."],
 ["Which color do you get by mixing blue and red paint?","purple","Mixing blue and red paint gives purple."],
 ["Which animal says 'moo'?","cow","Cows make the 'moo' sound."],
 ["How many wheels does a typical car have? Type the number word.","four","A typical car runs on four wheels."],
 ["What is the opposite of the word 'day'?","night","Night is the opposite of day."],
 ["How many days are there in a week? Type the number word.","seven","A week has seven days."],
 ["What is the largest mammal in the world?","blue whale","The blue whale is the largest mammal — and the largest animal known to have lived."],
 ["Which fruit keeps the doctor away, according to the saying?","apple","The saying goes: 'An apple a day keeps the doctor away.'"],
 ["What is the first name of the boy wizard in the books by J.K. Rowling?","Harry","Harry Potter is the boy wizard at the centre of J.K. Rowling's books."],
 ["What color do you get when you mix red and white paint?","pink","Mixing red and white paint gives pink."],
 ["How many months are there in a year? Type the number word.","twelve","A year has twelve months."],
 ["What is the name of Santa's red-nosed lead reindeer?","Rudolph","Rudolph the Red-Nosed Reindeer leads Santa's sleigh in the famous song and story."],
 ["Which farm animal gives us wool?","sheep","Wool is sheared from sheep."],
 ["How many legs does an insect have? Type the number word.","six","All insects have six legs — it is one of their defining features."],
 ["What was the title of LeAnn Rimes' 1996 breakthrough album?","Blue","'Blue' (1996) was LeAnn Rimes' breakthrough album, named for its title track."],
 ["What is the main gas in the air we breathe?","nitrogen","Nitrogen makes up about 78% of the air we breathe."],
 ["Which continent is Egypt part of?","Africa","Egypt lies in North Africa."],
 ["What is the past tense of the verb 'go'?","went","'Went' is the past tense of 'go.'"],
 ["How many minutes are there in two hours? Type the number.","120","Two hours is 2 × 60 = 120 minutes."],
 ["In which month does the year begin?","January","The year begins in January."],
 ["What is the square root of 81? Type the number.","9","9 × 9 = 81, so the square root of 81 is 9."],
 ["Which band released the album 'Abbey Road'?","The Beatles","'Abbey Road' (1969) is a Beatles album, named after the London street outside their studio."],
 ["What is the chemical symbol for water?","H2O","Water's chemical formula is H2O — two hydrogen atoms and one oxygen atom."],
 ["Which artist painted the Mona Lisa? First and last name.","Leonardo da Vinci","Leonardo da Vinci painted the Mona Lisa in the early 1500s."],
 ["What is the fastest land animal?","cheetah","The cheetah is the fastest land animal, capable of bursts around 60 mph."],
 ["Which city is home to the Eiffel Tower?","Paris","The Eiffel Tower stands in Paris, France."],
 ["What is the largest continent on Earth by land area?","Asia","Asia is the largest continent by land area."],
 ["Which sport is played at Wimbledon?","tennis","Wimbledon hosts the world's most famous tennis championships."],
 ["Which ocean is the largest on Earth?","Pacific","The Pacific is the largest ocean on Earth."],
 ["Which instrument measures earthquakes?","seismograph","A seismograph records the shaking of the ground during an earthquake."],
 ["Who wrote LeAnn Rimes' hit 'How Do I Live'? First and last name.","Diane Warren","Diane Warren wrote 'How Do I Live', the ballad LeAnn Rimes took to No. 2 in 1997."],
 ["The Colosseum stands in which modern capital city?","Rome","The Colosseum stands in Rome, Italy's capital."],
 ["What is the chemical symbol for potassium?","K","Potassium's symbol is K, from its Latin name 'kalium.'"],
 ["Which organ pumps blood through the body?","heart","The heart pumps blood through the body."],
 ["What is 15 percent of 200? Type the number.","30","15% of 200 is 0.15 × 200 = 30."],
 ["Which playwright wrote 'Hamlet'? Last name only.","Shakespeare","William Shakespeare wrote 'Hamlet' around 1600."],
 ["What is the most abundant metal in the Earth's crust?","aluminum","Aluminium is the most abundant metal in the Earth's crust."],
 ["Which singer is known as the 'Queen of Pop'?","Madonna","Madonna is known as the 'Queen of Pop.'"],
 ["What is the capital of Iceland?","Reykjavik","Reykjavik is the capital of Iceland."],
 ["Which physicist wrote 'A Brief History of Time'? First and last name.","Stephen Hawking","Stephen Hawking wrote 'A Brief History of Time' (1988)."],
 ["What gas do plants absorb from the air?","carbon dioxide","Plants absorb carbon dioxide from the air for photosynthesis."],
 ["Which author wrote 'Pride and Prejudice'? First and last name.","Jane Austen","Jane Austen wrote 'Pride and Prejudice' (1813)."],
 ["What is the square root of 144? Type the number.","12","12 × 12 = 144, so the square root of 144 is 12."],
 ["Which planet is nicknamed the 'Morning Star'?","Venus","Venus shines so brightly near sunrise that it is nicknamed the Morning Star."],
 ["Which metal is liquid at room temperature?","mercury","Mercury is the only metal that is liquid at room temperature."],
 ["What is the capital of Australia?","Canberra","Canberra is the capital of Australia — not Sydney or Melbourne."],
 ["'Can't Fight the Moonlight' is the theme song of which 2000 film?","Coyote Ugly","'Can't Fight the Moonlight' is the theme song of the 2000 film Coyote Ugly, in which LeAnn Rimes also appears."],
 ["What is the currency of the United Kingdom?","Pound sterling","The United Kingdom's currency is the pound sterling."],
 ["Which is the longest river in South America?","Amazon River","The Amazon is the longest river in South America — and the largest in the world by water volume."],
 ["How many sides does an octagon have?","Eight","An octagon has eight sides — 'octa' means eight, as on a stop sign."],
 ["Which country is the smallest in the world by land area?","Vatican City","Vatican City is the world's smallest country, at about half a square kilometre."],
 ["What is the main language spoken in Egypt?","Arabic","Arabic is Egypt's official and main language."],
 ["Which instrument is used to look at distant stars?","Telescope","A telescope magnifies distant objects, letting us study stars and planets."],
 ["How many minutes are there in a full day?","1,440","A day has 24 × 60 = 1,440 minutes."],
 ["Which light metal is commonly used for drink cans and aircraft?","Aluminum","Aluminium is light and corrosion-resistant, which is why it is used for drink cans and aircraft bodies."],
 ["What is the tallest mountain in Africa?","Mount Kilimanjaro","Mount Kilimanjaro in Tanzania is Africa's tallest mountain, at 5,895 metres."],
 ["How many players does a volleyball team have on the court at once?","Six","A volleyball team fields six players on the court at once."],
 ["Which gas makes up most of the air we breathe?","Nitrogen","Nitrogen makes up about 78% of the air we breathe."],
 ["What is the largest island in the world?","Greenland","Greenland is the world's largest island."],
 ["How many degrees are in a right angle?","90","A right angle measures exactly 90 degrees."],
 ["Which bird is the national symbol of the United States?","Bald eagle","The bald eagle has been the United States' national bird since 1782."],
 ["What is the process by which plants make their food using sunlight called?","Photosynthesis","Photosynthesis is how plants use sunlight, water, and carbon dioxide to make food and oxygen."],
 ["Which is the smallest continent by land area?","Australia","Australia is the smallest continent by land area."],
 ["How many strings does a standard guitar have?","Six","A standard guitar has six strings."],
 ["What is a young horse called?","Foal","A young horse is called a foal."],
 ["Toronto is the largest city of which country?","Canada","Toronto is Canada's largest city."],
 ["Which chemical element do bananas provide a lot of, with symbol K?","Potassium","Bananas are famously rich in potassium, whose symbol K comes from 'kalium.'"],
 ["How many faces does a cube have?","Six","A cube has six square faces."],
 ["Which white marble mausoleum stands in Agra, India?","Taj Mahal","The Taj Mahal is the white marble mausoleum in Agra, built by emperor Shah Jahan for his wife Mumtaz Mahal."],
 ["At sea level, water boils at which temperature in Fahrenheit?","212 degrees","At sea level, water boils at 212°F (100°C)."],
 ["Who wrote the children's book 'Charlotte's Web'?","E. B. White","E. B. White wrote 'Charlotte's Web' (1952)."],
 ["Which element has the chemical symbol Fe?","Iron","Fe is iron, from its Latin name 'ferrum.'"],
 ["What is the currency of Japan?","Yen","Japan's currency is the yen."],
 ["Which organ in the human body produces insulin?","Pancreas","The pancreas produces insulin, the hormone that regulates blood sugar."],
 ["Who wrote the play Romeo and Juliet?","William Shakespeare","William Shakespeare wrote 'Romeo and Juliet.'"],
 ["What is the smallest prime number?","2","2 is the smallest prime number — and the only even one."],
 ["Which country is home to the kangaroo?","Australia","Kangaroos are native to Australia."],
 ["How many players does a soccer team field at once?","11","A soccer team fields eleven players at once."],
 ["What force keeps planets in orbit around the Sun?","Gravity","Gravity — the Sun's gravitational pull — keeps the planets in orbit."],
 ["Which language is primarily spoken in Brazil?","Portuguese","Brazil speaks Portuguese, a legacy of Portuguese colonisation — unlike its Spanish-speaking neighbours."],
 ["Which country gifted the Statue of Liberty to the United States?","France","France gifted the Statue of Liberty to the United States in 1886."],
 ["How many hearts does an octopus have?","Three","An octopus has three hearts — two for its gills and one for its body."],
 ["Which river flows through the Grand Canyon?","Colorado River","The Colorado River carved the Grand Canyon and still flows through it."],
 ["Who wrote Alice's Adventures in Wonderland?","Lewis Carroll","Lewis Carroll (Charles Dodgson) wrote 'Alice's Adventures in Wonderland' (1865)."],
 ["How many keys are on a standard piano?","88","A standard piano has 88 keys — 52 white and 36 black."],
 ["Which metal is liquid at room temperature?","Mercury","Mercury is the only metal liquid at room temperature."],
 ["In which year did World War II end?","1945","World War II ended in 1945."],
 ["What is the hardest naturally occurring substance on Earth?","Diamond","Diamond is the hardest naturally occurring substance on Earth."],
 ["Which country is the largest by land area?","Russia","Russia is the largest country by land area, spanning eleven time zones."],
 ["Which is the largest organ of the human body?","Skin","The skin is the body's largest organ."],
 ["How many time zones does Russia span?","Eleven","Russia spans eleven time zones."],
 ["Which gas do plants release during photosynthesis?","Oxygen","Plants release oxygen as a by-product of photosynthesis."],
 ["What is the main ingredient in traditional hummus?","Chickpeas","Traditional hummus is made mainly from chickpeas blended with tahini."],
 ["Which ocean is the smallest on Earth?","Arctic Ocean","The Arctic Ocean is the smallest and shallowest of the world's oceans."],
 ["What does a barometer measure?","Air pressure","A barometer measures atmospheric air pressure."],
 ["Which chemical element has the symbol Sn?","Tin","Sn is tin, from its Latin name 'stannum.'"],
 ["In which year did the Titanic sink?","1912","The Titanic sank on its maiden voyage in April 1912 after striking an iceberg."],
 ["What is the term for animals that are active at night?","Nocturnal","Animals active at night are called nocturnal."],
 ["Which country has the longest land border with the United States?","Canada","Canada shares the longest land border with the United States — the longest international border in the world."],
 ["How many sides does a heptagon have?","Seven","A heptagon has seven sides."],
 ["Which composer wrote the opera 'The Barber of Seville'?","Rossini","Gioachino Rossini wrote 'The Barber of Seville' (1816)."],
 ["What is the largest desert in the world overall, counting cold deserts?","Antarctic Desert","Counting cold deserts, Antarctica is the largest desert in the world — it receives almost no precipitation."],
 ["Which blood type is known as the universal recipient for red cells?","AB positive","AB positive is the universal recipient type for red blood cells, because it carries both A and B antigens plus the Rh factor."],
 ["In Greek myth, who was the god of the sea?","Poseidon","Poseidon was the Greek god of the sea, earthquakes, and horses."],
 ["Which country was the first to host the modern Olympic Games, in 1896?","Greece","Greece hosted the first modern Olympic Games in Athens in 1896."],
 ["What is the smallest unit of life in biology?","Cell","The cell is the smallest unit of life in biology."],
 ["Which river flows through the city of Paris?","Seine","The Seine flows through the heart of Paris."],
 ["How many symphonies did Beethoven compose?","Nine","Beethoven composed nine symphonies, the last being the choral 'Ode to Joy' Ninth."],
 ["What does the 'S' in 'NASA' stand for?","Space","NASA stands for National Aeronautics and Space Administration — the S is 'Space.'"],
 ["Which ancient people built the city of Babylon's famous hanging gardens, by tradition?","Babylonians","Tradition credits the Babylonians with the Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World."],
 ["What is the square root of 225?","15","15 × 15 = 225, so the square root of 225 is 15."],
 ["Which ocean lies between Africa and Australia?","Indian","The Indian Ocean lies between Africa and Australia."],
 ["Who was the first person to walk on the Moon?","Neil Armstrong","Neil Armstrong was the first person to walk on the Moon, on 20 July 1969."],
 ["Which instrument measures atmospheric pressure?","Barometer","A barometer measures atmospheric pressure."],
 ["What is the main ingredient in the Japanese dish miso soup base, miso paste?","Fermented soybeans","Miso paste is made mainly from fermented soybeans."],
 ["Which country has the most official languages, with 11 recognized in its constitution?","South Africa","South Africa recognises 11 official languages in its constitution (12 since sign language was added in 2023)."],
 ["How many minutes are in one week?","10,080","One week has 7 × 24 × 60 = 10,080 minutes."],
 ["Which scientist is famous for the equation E = mc squared?","Albert Einstein","Albert Einstein's mass–energy equation E = mc² is the most famous in physics."],
 ["What is the powerhouse of the cell?","Mitochondria","The mitochondria are known as the powerhouse of the cell because they generate most of its energy."],
 ["Which treaty officially ended World War I?","Treaty of Versailles","The Treaty of Versailles (1919) officially ended World War I between Germany and the Allied Powers."],
 ["What is the rarest blood type in humans?","AB negative","AB negative is the rarest common blood type, found in under 1% of people."],
 ["Who painted the ceiling of the Sistine Chapel?","Michelangelo","Michelangelo painted the Sistine Chapel ceiling between 1508 and 1512."],
 ["What is the chemical symbol for gold?","Au","Gold's symbol Au comes from 'aurum,' its Latin name."],
 ["In computing, what does 'HTTP' stand for?","HyperText Transfer Protocol","HTTP stands for HyperText Transfer Protocol, the foundation of data exchange on the web."],
 ["Which country has the longest coastline in the world?","Canada","Canada has the world's longest coastline, thanks to its Arctic islands."],
 ["What year did the Berlin Wall fall?","1989","The Berlin Wall fell on 9 November 1989."],
 ["Which gas makes up about 78% of Earth's atmosphere?","Nitrogen","Nitrogen makes up about 78% of Earth's atmosphere."],
 ["Who wrote 'On the Origin of Species'?","Charles Darwin","Charles Darwin wrote 'On the Origin of Species' (1859), presenting the theory of evolution."],
 ["Which country won the first ever FIFA World Cup in 1930?","Uruguay","Uruguay hosted and won the first FIFA World Cup in 1930."],
 ["What is the chemical symbol for sodium?","Na","Sodium's symbol Na comes from 'natrium,' its Latin name."],
 ["Which ancient civilization built Machu Picchu?","Inca","The Inca built Machu Picchu in the 15th century."],
 ["How many bones are there in the adult human body?","206","An adult human skeleton has 206 bones."],
 ["In Einstein's equation E=mc², what does the 'c' stand for?","The speed of light","In E = mc², c stands for the speed of light in a vacuum."],
 ["Which language has the most native speakers in the world?","Mandarin Chinese","Mandarin Chinese has the most native speakers of any language."],
 ["Who first reached the summit of Mount Everest, alongside Tenzing Norgay?","Edmund Hillary","Edmund Hillary and Tenzing Norgay were the first to summit Everest, in 1953."],
 ["What is the currency of South Korea?","Won","South Korea's currency is the won."],
 ["Which blood cells carry oxygen around the body?","Red blood cells","Red blood cells carry oxygen around the body using haemoglobin."],
 ["A group of crows is known as what?","A murder","A group of crows is called a murder."],
 ["Which scientist proposed the three laws of planetary motion?","Johannes Kepler","Johannes Kepler proposed the three laws of planetary motion in the early 1600s."],
 ["Entomology is the scientific study of what?","Insects","Entomology is the scientific study of insects."],
 ["Which language is written from right to left?","Arabic","Arabic is written from right to left."],
 ["What does the Richter scale measure?","Earthquake magnitude","The Richter scale measures the magnitude of earthquakes."],
 ["What is the term for a group of geese on the ground?","A gaggle","A group of geese on the ground is called a gaggle (in flight, a skein)."],
 ["Which element has the atomic number 79?","Gold","Gold has atomic number 79 — 79 protons in every gold atom."],
 ["In literature, who wrote the epic poem 'Paradise Lost'?","John Milton","John Milton wrote the epic poem 'Paradise Lost' (1667)."],
 ["Which country has the oldest continuously used flag design, dating to the 13th century?","Denmark","Denmark's Dannebrog, dating to the 13th century, is the oldest continuously used national flag design."],
 ["What is the only continent without an active volcano on its mainland?","Australia","Australia is the only continent with no active volcano on its mainland."],
 ["Which painter created the ceiling fresco 'The Creation of Adam' as part of a larger work?","Michelangelo","Michelangelo painted 'The Creation of Adam' as part of the Sistine Chapel ceiling."],
 ["What is the deepest known point in the world's oceans called?","Challenger Deep","Challenger Deep, in the Mariana Trench, is the deepest known point in the oceans, nearly 11 km down."],
 ["How many elements were in Mendeleev's original periodic table of 1869?","63","Mendeleev's 1869 periodic table contained the 63 elements then known."],
 ["Which of these mammals lays eggs?","Platypus","The platypus is a monotreme — one of the very few mammals that lay eggs."],
 ["Acrophobia is an extreme fear of what?","Heights","Acrophobia is the extreme fear of heights — 'acro' means high."],
 ["Which is the largest moon of Saturn?","Titan","Titan is Saturn's largest moon, bigger than the planet Mercury."],
 ["Which ancient Egyptian king's tomb was found nearly intact in 1922?","Tutankhamun","Tutankhamun's tomb was found nearly intact by Howard Carter in 1922."],
 ["Tungsten is also known by which older name?","Wolfram","Tungsten's older name is wolfram — the source of its symbol, W."],
 ["Which country's national anthem has no official lyrics?","Spain","Spain's national anthem, the Marcha Real, has no official lyrics."],
 ["Which is the only US state whose name has just one syllable?","Maine","Maine is the only US state name with just one syllable."],
 ["Which warm ocean current helps keep Western Europe's climate mild?","Gulf Stream","The Gulf Stream carries warm water from the tropics and helps keep Western Europe's climate mild."],
 ["Which is the largest species of penguin?","Emperor penguin","The emperor penguin is the largest penguin species, standing over a metre tall."],
 ["Vexillology is the study of what?","Flags","Vexillology is the study of flags."],
 ["Which of these elements is a liquid at room temperature?","Bromine","Bromine is one of only two elements liquid at room temperature (the other is mercury)."],
 ["How many time zones does mainland China officially use?","One","China officially uses a single time zone across the whole country."],
 ["Tornado intensity is measured on which scale?","Enhanced Fujita scale","Tornado intensity is rated on the Enhanced Fujita (EF) scale, from EF0 to EF5."],
 ["Which Greek philosopher was the teacher of Alexander the Great?","Aristotle","Aristotle tutored the young Alexander the Great."],
 ["Mycology is the scientific study of what?","Fungi","Mycology is the study of fungi."],
 ["What is the term for a word that reads the same forwards and backwards?","Palindrome","A word that reads the same both ways — like 'level' — is a palindrome."],
 ["Which element is named after the Norse god Thor?","Thorium","Thorium is named after Thor, the Norse god of thunder."],
 ["Which composer wrote the 'Moonlight Sonata'?","Beethoven","Beethoven composed the 'Moonlight Sonata' (Piano Sonata No. 14) in 1801."],
 ["What is the only letter that doesn't appear in any US state name?","Q","Q is the only letter that appears in no US state name."],
 ["Which ocean trench is the deepest place on Earth?","Mariana Trench","The Mariana Trench is the deepest place in Earth's oceans."],
 ["In chess, how many squares are there on the board?","64","A chessboard has 8 × 8 = 64 squares."],
 ["What was the first element created in a laboratory?","Technetium","Technetium (1937) was the first element produced artificially in a laboratory."],
 ["Which desert is the largest hot desert in the world?","Sahara","The Sahara is the largest hot desert in the world."],
 ["What does DNA stand for?","Deoxyribonucleic acid","DNA stands for deoxyribonucleic acid, the molecule that carries genetic instructions."],
 ["Which chemical element has the highest melting point?","Tungsten","Tungsten has the highest melting point of any element, about 3,422°C."],
 ["What is the only mammal capable of true powered flight?","Bat","The bat is the only mammal capable of true powered flight."],
 ["Which country was the first to grant women the right to vote, in 1893?","New Zealand","New Zealand was the first country to grant women the vote, in 1893."],
 ["How many sides does a dodecagon have?","12","A dodecagon has twelve sides."],
 ["Which philosopher wrote 'Thus Spoke Zarathustra'?","Friedrich Nietzsche","Friedrich Nietzsche wrote 'Thus Spoke Zarathustra' (1883–85)."],
 ["Animals active mainly at dawn and dusk are called what?","Crepuscular","Animals active mainly at dawn and dusk are called crepuscular."],
 ["What is the approximate speed of light in a vacuum?","300,000 km/s","Light travels at roughly 300,000 km/s in a vacuum."],
 ["'Petrichor' is the name for what?","The earthy smell after rain on dry soil","Petrichor is the earthy scent released when rain falls on dry soil."],
 ["Which country has the most natural lakes in the world?","Canada","Canada has more natural lakes than any other country — by some counts, most of the world's lakes."],
 ["Which is the only country on Earth that is also a continent?","Australia","Australia is the only country that is also a continent."],
 ["Which ancient Greek physician is known as the Father of Medicine?","Hippocrates","Hippocrates, of the Hippocratic Oath, is known as the Father of Medicine."],
 ["What is the SI unit of electrical resistance?","The ohm","The ohm is the SI unit of electrical resistance, symbol Ω."],
 ["Aubrey Graham is better known as which performer?","Drake","Aubrey Graham performs under his middle name, Drake."],
 ["Ernest Evans is better known as which performer?","Chubby Checker","Ernest Evans took the stage name Chubby Checker — a play on Fats Domino — and hit with 'The Twist.'"],
 ["Melvin Kaminsky is better known as which performer?","Mel Brooks","Melvin Kaminsky shortened his name to Mel Brooks to avoid confusion with a musician named Mel Kaminsky."],
 ["Bobby Moore is better known as which sportscaster?","Ahmad Rashad","Sportscaster Ahmad Rashad was born Bobby Moore and changed his name in 1973."],
 ["Armando Perez is better known as which performer?","Pitbull","Armando Pérez performs as Pitbull, a name he took from the dog breed's fighting spirit."],
 ["Lesane Crooks is better known as which performer?","Tupac Shakur","Tupac Shakur was born Lesane Parish Crooks and renamed after the Peruvian revolutionary Túpac Amaru II."],
 ["Tara Leigh Patrick is better known as which performer?","Carmen Electra","Tara Leigh Patrick was renamed Carmen Electra by Prince, who produced her first album."],
 ["In US law, a 'tort' is best described as what?","A civil wrong that causes harm","A tort is a civil wrong that causes someone harm — the basis of most personal-injury lawsuits."],
 ["What does the Latin legal phrase 'pro bono publico' mean in practice for a lawyer's client?","The work is done for free for the public good","'Pro bono publico' means 'for the public good' — the lawyer works without charge."],
 ["In a US trial, the 'burden of proof' rests mainly on whom in a criminal case?","The prosecution","In a criminal case the prosecution carries the burden of proving guilt beyond a reasonable doubt."],
 ["Which US amendment guarantees the right to a lawyer in criminal cases, as read by the Supreme Court?","The Sixth Amendment","The Sixth Amendment guarantees the right to counsel; Gideon v. Wainwright (1963) required states to provide one to defendants who cannot afford it."],
 ["A 'subpoena' is a court order that does what?","Compels a person to appear or produce evidence","A subpoena is a court order compelling a person to appear or hand over evidence — ignoring one risks contempt."],
 ["In contract law, 'consideration' means what?","Something of value exchanged by both sides","A contract needs consideration: something of value exchanged by both sides, which is what makes the promise enforceable."],
 ["Which court is the highest in the US federal system?","The Supreme Court","The Supreme Court is the highest court in the US federal system — its rulings bind all lower courts."],
 ["What is 'perjury'?","Lying under oath","Perjury is lying under oath, and it is itself a crime."],
 ["In the US, a 'felony' is best described as what?","A serious crime, usually punishable by over a year in prison","A felony is a serious crime, traditionally punishable by more than a year in prison — lesser offences are misdemeanours."],
 ["Which US amendment protects freedom of religion, speech, press, assembly, and petition?","The First Amendment","The First Amendment protects religion, speech, press, assembly, and petition."],
 ["What is the term for a law that punishes an act that was legal when it was done?","Ex post facto law","An ex post facto law retroactively punishes an act that was legal when done — the Constitution bans them."],
 ["In a lawsuit, 'damages' usually refers to what?","Money paid to compensate for a loss","Damages are money awarded to compensate a plaintiff for a loss."],
 ["Which branch of the US government has the power to veto bills?","The executive branch","The President, heading the executive branch, can veto bills passed by Congress."],
 ["How many US senators does each state elect?","Two","Each state elects two senators, whatever its population — hence 100 in total."],
 ["What is the minimum age set by the US Constitution for the President?","35 years","The Constitution requires the President to be at least 35 years old."],
 ["In US law, 'eminent domain' lets the government do what?","Take private property for public use, with compensation","Eminent domain lets government take private property for public use, provided it pays just compensation (Fifth Amendment)."],
 ["A 'notary public' is mainly authorized to do what?","Witness and certify signatures on documents","A notary public witnesses and certifies signatures on documents to deter fraud."],
 ["Which famous 1973 US Supreme Court case recognized a constitutional right to abortion, later overturned in 2022?","Roe v. Wade","Roe v. Wade (1973) recognised a constitutional right to abortion; Dobbs overturned it in 2022."],
 ["What does 'innocent until proven...' complete in the famous legal presumption?","Guilty","The presumption is 'innocent until proven guilty' — the defendant need not prove innocence."],
 ["In the US Senate, how many votes are needed to override a presidential veto in Congress overall?","Two-thirds of both houses","Overriding a veto takes a two-thirds vote of both the House and the Senate."],
 ["The legal term 'liability' means what?","Legal responsibility for something","Liability means legal responsibility — being answerable in law for an act or debt."],
 ["Which document begins with the words 'We the People'?","The US Constitution","The US Constitution begins 'We the People of the United States…'"],
 ["What is a 'class action' lawsuit?","A suit brought by a group of people with the same claim","A class action is one lawsuit brought on behalf of a whole group ('class') sharing the same claim."],
 ["What is the term for the person a will leaves property to... in plain legal English, the person who inherits is called what?","The beneficiary","A beneficiary is the person who receives property under a will (or a trust or policy)."],
 ["In the US, which amendment in the Bill of Rights protects the right to bear arms?","The Second Amendment","The Second Amendment protects the right to keep and bear arms."],
 ["A 'will' in law is a document that states what?","How a person's property should be handled after death","A will is the legal document stating how a person's property should be distributed after death."],
 ["What is 'arbitration' in dispute resolution?","Settling a dispute outside court before a neutral decision-maker","Arbitration settles a dispute outside court, before a neutral arbitrator whose decision can be binding."],
 ["In US law, 'defamation' covers libel and what other wrong?","Slander","Defamation covers libel (written) and slander (spoken) — false statements that harm a reputation."],
 ["Which part of the US government confirms Supreme Court justices?","The Senate","The Senate confirms Supreme Court justices — the President nominates, the Senate gives 'advice and consent.'"],
 ["Which US amendment abolished poll taxes in federal elections?","The 24th Amendment","The 24th Amendment (1964) abolished poll taxes in federal elections."],
 ["What is the minimum legal drinking age in every US state, in years?","21","The drinking age is 21 in every state — states set it, under federal pressure tied to highway funding."],
 ["A law passed by a legislature is called what?","A statute","A law enacted by a legislature is called a statute."],
 ["Which US constitutional amendment guarantees freedom of speech and of the press?","The First Amendment","The First Amendment guarantees freedom of speech and of the press."],
 ["Which US constitutional amendment guarantees a speedy and public trial?","The Sixth Amendment","The Sixth Amendment guarantees a speedy and public trial."],
 ["Which US constitutional amendment bans cruel and unusual punishment?","The Eighth Amendment","The Eighth Amendment bans cruel and unusual punishment (and excessive bail)."],
 ["The right to remain silent rests on which amendment's protection against self-incrimination?","The Fifth Amendment","The Fifth Amendment protects against self-incrimination — the basis of the right to remain silent in the Miranda warning."],
 ["What is the chemical symbol for iron?","Fe","Iron's symbol is Fe, from its Latin name 'ferrum.'"],
 ["What is the atomic number of hydrogen?","1","Hydrogen has atomic number 1 — a single proton."],
 ["Which element has the symbol Na?","Sodium","Na is sodium, from its Latin name 'natrium.'"],
 ["Which element has the symbol O?","Oxygen","O is the symbol for oxygen."],
 ["What is the chemical symbol for zinc?","Zn","Zn is the chemical symbol for zinc."],
 ["Which group of elements includes helium, neon, and argon?","Noble gases","Helium, neon, and argon are noble gases — the inert elements of Group 18."],
 ["What is the atomic number of helium?","2","Helium has atomic number 2 — two protons."],
 ["Which element has the symbol Au?","Gold","Au is gold, from its Latin name 'aurum.'"],
 ["What is the chemical symbol for cobalt?","Co","Co is the chemical symbol for cobalt."],
 ["What is the atomic number of nitrogen?","7","Nitrogen has atomic number 7."],
 ["What is the chemical symbol for phosphorus?","P","P is the chemical symbol for phosphorus."],
 ["Which element has the chemical symbol Cl?","Chlorine","Cl is the chemical symbol for chlorine."],
 ["What is the atomic number of aluminum?","13","Aluminium has atomic number 13."],
 ["Which of these elements is a metalloid?","Silicon","Silicon is a metalloid — it has properties of both metals and non-metals, which is why it works as a semiconductor."],
 ["Which element is named after the planet Neptune?","Neptunium","Neptunium is named after Neptune, following uranium (Uranus) in the table."],
 ["What is the chemical symbol for manganese?","Mn","Mn is the chemical symbol for manganese."],
 ["What is the atomic number of neon?","10","Neon has atomic number 10."],
 ["Which element has the chemical symbol Si?","Silicon","Si is the chemical symbol for silicon."],
 ["What is the atomic number of iron?","26","Iron has atomic number 26."],
 ["Elements in Group 1 of the periodic table (except hydrogen) are known as what?","Alkali metals","Group 1 elements (except hydrogen) are the alkali metals — soft, highly reactive metals like sodium and potassium."],
 ["What is the chemical symbol for chromium?","Cr","Cr is the chemical symbol for chromium."],
 ["What is the atomic number of sulfur?","16","Sulfur has atomic number 16."],
 ["Which element is named after Marie Curie's homeland, Poland?","Polonium","Marie Curie named polonium after her homeland, Poland."],
 ["What is the chemical symbol for barium?","Ba","Ba is the chemical symbol for barium."],
 ["Which is the heaviest noble gas that occurs naturally?","Radon","Radon is the heaviest naturally occurring noble gas — a radioactive gas that can accumulate in buildings."],
 ["What is the atomic number of calcium?","20","Calcium has atomic number 20."],
 ["What is the chemical symbol for nickel?","Ni","Ni is the chemical symbol for nickel."],
 ["Which element has the chemical symbol Pt?","Platinum","Pt is the chemical symbol for platinum."],
 ["Which of these is an alkaline earth metal?","Magnesium","Magnesium is an alkaline earth metal — Group 2, like calcium and barium."],
 ["What is the atomic number of copper?","29","Copper has atomic number 29."],
 ["What is the chemical symbol for iodine?","I","I is the chemical symbol for iodine."],
 ["Which element is named after Vanadis, a Norse goddess?","Vanadium","Vanadium is named after Vanadis, a name of the Norse goddess Freyja."],
 ["What is the atomic number of zinc?","30","Zinc has atomic number 30."],
 ["Which element has the chemical symbol Se?","Selenium","Se is the chemical symbol for selenium."],
 ["What is the chemical formula for ammonia?","NH3","Ammonia's formula is NH3 — one nitrogen atom bonded to three hydrogen atoms."],
 ["Which of these is an alkali metal?","Sodium","Sodium is an alkali metal (Group 1) — a soft metal that reacts vigorously with water."],
 ["What happens to most substances when they are heated?","They expand","Most substances expand when heated, as their particles move faster and spread apart."],
 ["Which gas is needed for a fuel to burn (combustion)?","Oxygen","Combustion needs oxygen — a fuel burns by reacting with it."],
 ["What is the pH of a strong alkali (base) closest to?","14","The pH scale tops out at 14 for a strong alkali; 7 is neutral and lower numbers are acidic."],
 ["Which of these is a mixture rather than a pure substance?","Sea water","Sea water is a mixture — water with dissolved salts and minerals, not a single pure substance."],
 ["What is the common name for sodium chloride?","Table salt","Sodium chloride is ordinary table salt."],
 ["Which process turns a liquid into a gas throughout the liquid, not just at the surface?","Boiling","Boiling turns a liquid to gas throughout the liquid (bubbles form inside it); evaporation happens only at the surface."],
 ["Atoms of the same element with different numbers of neutrons are called what?","Isotopes","Isotopes are atoms of the same element with different numbers of neutrons — same chemistry, different mass."],
 ["What is the chemical symbol for calcium?","Ca","Ca is the chemical symbol for calcium."],
 ["Which acid is found in citrus fruits like lemons?","Citric acid","Citric acid gives lemons and other citrus fruits their sharp taste."],
 ["In the formula H2SO4, how many hydrogen atoms are there?","Two","The subscript 2 after H in H2SO4 means two hydrogen atoms."],
 ["Which of these metals does NOT react much with water and is used for jewelry?","Gold","Gold is famously unreactive — it does not tarnish — which is why it is prized for jewellery."],
 ["What is the name for a substance made of only one kind of atom?","Element","A substance made of only one kind of atom is an element."],
 ["Which gas makes fizzy drinks fizzy when dissolved under pressure?","Carbon dioxide","Fizzy drinks are carbonated with carbon dioxide dissolved under pressure."],
 ["What is the main component of natural gas?","Methane","Natural gas is mostly methane (CH4)."],
 ["When iron rusts, it reacts with oxygen and what else?","Water","Rusting needs both oxygen and water — iron rusts in damp air, not dry air."],
 ["Which indicator turns pink in alkaline solutions and is colorless in acids?","Phenolphthalein","Phenolphthalein is colourless in acid and turns pink in alkali."],
 ["How many electrons can the first shell around an atom hold at most?","Two","The first electron shell holds at most two electrons."],
 ["What is the chemical formula for hydrogen peroxide?","H2O2","Hydrogen peroxide is H2O2 — like water, with an extra oxygen atom."],
 ["Which type of reaction gives out heat to its surroundings?","Exothermic","An exothermic reaction releases heat to its surroundings; the opposite is endothermic."],
 ["What is the common name for the chemical NaHCO3?","Baking soda","NaHCO3, sodium bicarbonate, is baking soda."],
 ["Which element is a yellow non-metal that smells of rotten eggs in some compounds?","Sulfur","Sulfur is a yellow non-metal; its hydrogen compound H2S smells of rotten eggs."],
 ["Which of these is the correct formula for calcium carbonate (limestone)?","CaCO3","Limestone is calcium carbonate, CaCO3."],
 ["What name is given to the energy needed to start a chemical reaction?","Activation energy","Activation energy is the minimum energy needed to get a reaction started."],
 ["Which gas in the air is used by plants to make proteins indirectly via soil bacteria fixing it?","Nitrogen","Plants get nitrogen for proteins via soil bacteria that 'fix' nitrogen from the air."],
 ["What is the state change from gas directly to solid called?","Deposition","A gas turning directly into a solid (like frost forming) is called deposition."],
 ["Which acid is produced in the human stomach to help digestion?","Hydrochloric acid","The stomach produces hydrochloric acid to help digest food and kill germs."],
 ["What is the chemical formula for methane?","CH4","Methane is CH4 — one carbon atom and four hydrogen atoms."],
 ["Which of these substances is an element?","Copper","Copper is an element — a single kind of atom; the others are compounds or mixtures."],
 ["Bonds formed by transferring electrons from a metal to a non-metal are called what?","Ionic bonds","Ionic bonds form when electrons are transferred from a metal to a non-metal, creating charged ions that attract."],
 ["Which process uses electricity to split a compound into its elements?","Electrolysis","Electrolysis uses an electric current to split a compound into its elements."],
 ["What is the approximate percentage of oxygen in clean dry air by volume?","About 21%","Oxygen makes up about 21% of clean, dry air by volume."],
 ["Which chemical is commonly used to test for the presence of starch, turning blue-black?","Iodine solution","Iodine solution turns blue-black in the presence of starch."],
 ["Limewater turns cloudy (milky) when which gas is bubbled through it?","Carbon dioxide","Carbon dioxide turns limewater milky — the classic test for the gas."],
 ["Which state of matter has a definite volume but takes the shape of its container?","Liquid","A liquid keeps a definite volume but takes the shape of its container."],
 ["'Dry ice' is the solid form of which gas?","Carbon dioxide","Dry ice is solid carbon dioxide — it sublimates straight to gas at −78.5°C."],
 ["How many oxygen atoms are in one molecule of carbon dioxide, CO2?","Two","The subscript 2 in CO2 means two oxygen atoms per molecule."],
 ["Which acid fills a typical car battery?","Sulfuric acid","Car batteries are filled with sulfuric acid."],
 ["Sulfuric acid has which chemical formula?","H2SO4","Sulfuric acid is H2SO4."],
 ["Which organ in the human body makes insulin?","Pancreas","The pancreas makes insulin, the hormone that controls blood sugar."],
 ["What is the study of living things called?","Biology","Biology is the study of living things — 'bio' means life."],
 ["Which force keeps us on the ground and pulls objects toward Earth?","Gravity","Gravity pulls objects toward Earth and keeps us on the ground."],
 ["How many legs does a crab have, counting its claws as modified legs in the usual 'decapod' count of 10?","Ten","Crabs are decapods — 'ten feet' — counting their two claws as modified legs."],
 ["Which planet is known as the 'Morning Star' and 'Evening Star'?","Venus","Venus shines so brightly near dawn and dusk that it is called both the Morning Star and the Evening Star."],
 ["What is the boiling point of water at sea level in Celsius?","100 degrees","Water boils at 100°C at sea level."],
 ["Which part of a plant absorbs water from the soil?","Roots","Roots absorb water and minerals from the soil."],
 ["What do we call a scientist who studies rocks and the Earth?","Geologist","A geologist studies rocks and the Earth."],
 ["Which of these is a renewable resource?","Solar energy","Solar energy is renewable — sunlight is replenished daily, unlike fossil fuels."],
 ["How long does the Moon take to orbit the Earth, roughly?","About a month","The Moon takes about a month (27.3 days) to orbit the Earth."],
 ["Which animal is the largest mammal in the sea?","Blue whale","The blue whale is the largest mammal in the sea — and the largest animal known to have lived."],
 ["What is the name of the process where a liquid turns into a gas at its surface?","Evaporation","Evaporation is a liquid turning to gas at its surface."],
 ["Which sense organ detects sound vibrations?","Ear","The ear detects sound vibrations."],
 ["What is the center of our solar system?","The Sun","The Sun sits at the centre of our solar system; all the planets orbit it."],
 ["Which gas does the human body produce and breathe out in exhaled air?","Carbon dioxide","We breathe out carbon dioxide, a waste product of respiration."],
 ["A caterpillar changing into a butterfly is an example of what?","Metamorphosis","A caterpillar becoming a butterfly is metamorphosis — a complete change of body form."],
 ["Which instrument is used to measure wind speed?","Anemometer","An anemometer measures wind speed."],
 ["What is the hardest part of the human body?","Tooth enamel","Tooth enamel is the hardest substance in the human body."],
 ["Which layer of the atmosphere contains the ozone layer?","Stratosphere","The ozone layer sits in the stratosphere, absorbing most of the Sun's ultraviolet radiation."],
 ["How many wings does a housefly have?","Two","A housefly has just two wings — flies are the 'Diptera,' the two-winged insects."],
 ["Which of these animals is a marsupial?","Koala","The koala is a marsupial — it raises its young in a pouch."],
 ["What is the scientific term for the path a planet follows around the Sun?","Orbit","A planet's path around the Sun is its orbit."],
 ["Which blood vessels carry blood back to the heart?","Veins","Veins carry blood back to the heart; arteries carry it away."],
 ["What is the main reason we have seasons on Earth?","The tilt of Earth's axis","Seasons are caused by the tilt of Earth's axis as it orbits the Sun — not by distance from the Sun."],
 ["Which part of the cell controls its activities and holds DNA?","Nucleus","The nucleus controls the cell's activities and holds its DNA."],
 ["Sound travels fastest through which of these?","Steel","Sound travels fastest through solids like steel, where particles are packed tightly together."],
 ["Which planet has the Great Dark Spot storms and the strongest winds in the solar system?","Neptune","Neptune has the strongest winds in the solar system and storm systems like the Great Dark Spot."],
 ["What is the term for water falling from clouds as rain, snow, sleet, or hail?","Precipitation","Water falling from clouds in any form is precipitation."],
 ["Which organ system is responsible for breaking down food?","Digestive system","The digestive system breaks down food so the body can absorb it."],
 ["How many bones are in the human hand and wrist combined, per hand?","27","Each hand and wrist together contain 27 bones."],
 ["Which scientist proposed the theory of evolution by natural selection along with Alfred Russel Wallace?","Charles Darwin","Charles Darwin (independently echoed by Alfred Russel Wallace) proposed evolution by natural selection."],
 ["What is the freezing point of water in Fahrenheit?","32 degrees","Water freezes at 32°F."],
 ["Which type of rock is formed from cooled lava or magma?","Igneous","Igneous rock forms when lava or magma cools and solidifies."],
 ["The chemical symbol for water, H2O, tells us each molecule has how many hydrogen atoms?","Two","The subscript 2 in H2O means each water molecule has two hydrogen atoms."],
 ["Which blood cells help the body fight infection?","White blood cells","White blood cells fight infection as part of the immune system."],
 ["'For every action there is an equal and opposite reaction' is which of Newton's laws?","The third law","'For every action, an equal and opposite reaction' is Newton's third law of motion."],
 ["Which layer of the Earth is the thin surface layer all living things inhabit?","The crust","The crust is Earth's thin outer layer, where all known life lives."],
 ["Which body system includes the brain and the spinal cord?","The nervous system","The brain and spinal cord make up the central part of the nervous system."],
 ["Which force slows a rolling ball down on flat ground?","Friction","Friction between the ball and the ground slows it down."],
 ["Which organ pumps blood around the body?","Heart","The heart pumps blood around the body."],
 ["How many lungs does a typical human have?","Two","A typical human has two lungs — right and left."],
 ["Which part of the body produces red blood cells in adults?","Bone marrow","In adults, red blood cells are produced in the bone marrow."],
 ["The medical term for low blood pressure is what?","Hypotension","Hypotension is the medical term for low blood pressure (the opposite, hypertension, is high blood pressure)."],
 ["Vitamin C is also known by which chemical name?","Ascorbic acid","Vitamin C's chemical name is ascorbic acid — 'a-scorbic' means 'against scurvy.'"],
 ["Which small organ stores bile produced by the liver?","Gallbladder","The gallbladder stores bile made by the liver and releases it to help digest fats."],
 ["How many pairs of ribs does a typical human have?","12","A typical human has 12 pairs of ribs."],
 ["What is the name of the smallest type of blood vessel?","Capillaries","Capillaries are the smallest blood vessels — where oxygen and nutrients pass into the tissues."],
 ["A Snellen chart is used to test which sense?","Vision","A Snellen chart — the letter chart at the optician — tests vision."],
 ["The branch of medicine that cares for children is called what?","Pediatrics","Pediatrics is the branch of medicine caring for children."],
 ["Which disease is commonly known as 'whooping cough'?","Pertussis","Pertussis is whooping cough, named for the 'whoop' sound of the coughing fits."],
 ["Which is the largest internal organ of the human body?","Liver","The liver is the body's largest internal organ."],
 ["A lack of which mineral is the most common cause of anemia?","Iron","Iron deficiency is the most common cause of anaemia — iron is needed to make haemoglobin."],
 ["The tingling 'funny bone' sensation actually comes from which nerve?","Ulnar nerve","The 'funny bone' tingle comes from the ulnar nerve, which runs close to the surface at the elbow."],
 ["What is the medical term for a heart attack?","Myocardial infarction","A heart attack is a myocardial infarction — heart muscle dying from a blocked artery."],
 ["Which part of the brain controls balance and coordination?","Cerebellum","The cerebellum, at the back of the brain, controls balance and coordination."],
 ["What is the usual resting heart rate range for most adults, in beats per minute?","60 to 100","A typical adult resting heart rate is 60 to 100 beats per minute."],
 ["Which imaging method uses X-rays to build cross-section pictures of the body?","CT scan","A CT scan uses rotating X-rays to build cross-section images of the body."],
 ["A doctor who specializes in the heart is called a what?","Cardiologist","A cardiologist specialises in the heart — 'cardio' means heart."],
 ["What is the medical term for nearsightedness?","Myopia","Myopia is nearsightedness — distant objects look blurred."],
 ["The alveoli, where oxygen passes into the blood, are found in which organ?","Lungs","The alveoli are the tiny air sacs in the lungs where oxygen passes into the blood."],
 ["The medical term 'hepatic' refers to which organ?","Liver","'Hepatic' refers to the liver — as in hepatitis, liver inflammation."],
 ["A deficiency of which vitamin causes scurvy?","Vitamin C","Scurvy is caused by a lack of vitamin C — the reason sailors carried citrus fruit."],
 ["How many milk (baby) teeth do children typically have?","20","Children typically have 20 milk (baby) teeth."],
 ["Which bone (or set of bones) protects the brain?","Skull","The skull's bones encase and protect the brain."],
 ["What is the medical term for inflammation of the appendix?","Appendicitis","Appendicitis is inflammation of the appendix."],
 ["What is the liquid part of blood, in which the cells float, called?","Plasma","Plasma is the liquid part of blood in which the cells float."],
 ["Which large joint connects the thigh bone to the shin bone?","Knee","The knee joins the thigh bone (femur) to the shin bone (tibia)."],
 ["The medical specialty dealing with pregnancy and childbirth is called what?","Obstetrics","Obstetrics is the specialty of pregnancy and childbirth."],
 ["Which common childhood illness causes an itchy, blistery rash?","Chickenpox","Chickenpox causes the itchy, blistery rash — most children catch it once."],
 ["What is the medical name for the voice box?","Larynx","The larynx is the voice box, housing the vocal cords."],
 ["A 'renal transplant' is a transplant of which organ?","Kidney","'Renal' refers to the kidney — a renal transplant is a kidney transplant."],
 ["A full-term human pregnancy lasts about how many weeks?","40 weeks","A full-term pregnancy lasts about 40 weeks."],
 ["Which instrument is used to measure blood pressure?","Sphygmomanometer","A sphygmomanometer — the cuff instrument — measures blood pressure."],
 ["Who played the archaeologist Indiana Jones in the film series?","Harrison Ford","Harrison Ford played archaeologist Indiana Jones throughout the film series."],
 ["Which animated film features a snowman named Olaf?","Frozen","Olaf is the snowman in Disney's Frozen."],
 ["The TV show 'Friends' is set mainly in which city?","New York City","Friends is set in New York City, around Monica's Manhattan apartment and Central Perk."],
 ["Which singer is known as the 'Material Girl'?","Madonna","Madonna is the 'Material Girl,' after her 1985 hit of that name."],
 ["In 'Star Wars', what is the name of Han Solo's ship?","Millennium Falcon","Han Solo's ship is the Millennium Falcon — 'the fastest hunk of junk in the galaxy.'"],
 ["Which board game has properties like Boardwalk and Park Place in its classic US edition?","Monopoly","Boardwalk and Park Place are the priciest properties in Monopoly's classic US edition."],
 ["Which superhero's real name is Bruce Wayne?","Batman","Batman is billionaire Bruce Wayne."],
 ["Which band released the song 'Hey Jude' in 1968?","The Beatles","The Beatles released 'Hey Jude' in 1968 — Paul McCartney wrote it for Julian Lennon."],
 ["Who played Dorothy in the 1939 film 'The Wizard of Oz'?","Judy Garland","Judy Garland played Dorothy in the 1939 'Wizard of Oz.'"],
 ["Luigi is the taller brother of which video game hero?","Mario","Luigi is the taller younger brother of Mario."],
 ["Which singer released the album 'Thriller' in 1982?","Michael Jackson","Michael Jackson's 'Thriller' (1982) is the best-selling album of all time."],
 ["The detective Sherlock Holmes was created by which author?","Arthur Conan Doyle","Arthur Conan Doyle created Sherlock Holmes in 1887."],
 ["Who won the Best Actor Oscar for the 2019 film 'Joker'?","Joaquin Phoenix","Joaquin Phoenix won the Best Actor Oscar for playing the Joker."],
 ["Which series follows chess prodigy Beth Harmon?","The Queen's Gambit","'The Queen's Gambit' follows chess prodigy Beth Harmon."],
 ["Which singer released the hit 'Shape of You' in 2017?","Ed Sheeran","Ed Sheeran released 'Shape of You' in 2017 — one of the most-streamed songs ever."],
 ["In the 'Toy Story' films, who voices the cowboy Woody?","Tom Hanks","Tom Hanks voices Woody in the Toy Story films."],
 ["Which 2009 James Cameron film became the highest-grossing movie of all time worldwide?","Avatar","James Cameron's 'Avatar' (2009) became the highest-grossing film of all time."],
 ["Which pop star's fans are known as 'Swifties'?","Taylor Swift","Taylor Swift's fans call themselves Swifties."],
 ["Which classic arcade game has a yellow hero eating pellets while ghosts chase him?","Pac-Man","Pac-Man is the yellow hero chased by ghosts Blinky, Pinky, Inky, and Clyde."],
 ["Who played Rose in the 1997 film 'Titanic'?","Kate Winslet","Kate Winslet played Rose opposite Leonardo DiCaprio's Jack in 'Titanic.'"],
 ["Which band performed the 'Friends' theme song, 'I'll Be There for You'?","The Rembrandts","The Rembrandts performed the Friends theme, 'I'll Be There for You.'"],
 ["Which Marvel hero carries a shield made of vibranium?","Captain America","Captain America's shield is made of vibranium."],
 ["Which 2020 Nintendo Switch game lets players build a life on a deserted island with animal villagers?","Animal Crossing: New Horizons","'Animal Crossing: New Horizons' (2020) builds a life on a deserted island with animal villagers."],
 ["Who wrote 'The Lord of the Rings'?","J.R.R. Tolkien","J.R.R. Tolkien wrote 'The Lord of the Rings' (1954–55)."],
 ["Elvis Presley's famous Memphis home is known by what name?","Graceland","Elvis Presley's Memphis home is Graceland."],
 ["The line 'May the Force be with you' comes from which film series?","Star Wars","'May the Force be with you' is the signature blessing of the Star Wars films."],
 ["Who played the Terminator in the 1984 film of that name?","Arnold Schwarzenegger","Arnold Schwarzenegger played the Terminator in the 1984 film."],
 ["Which country star sang 'Jolene' and '9 to 5'?","Dolly Parton","Dolly Parton wrote and sang both 'Jolene' and '9 to 5.'"],
 ["Which TV drama follows chemistry teacher Walter White's turn to crime?","Breaking Bad","'Breaking Bad' follows chemistry teacher Walter White's descent into making methamphetamine."],
 ["Which movie musical features the songs 'Summer Nights' and 'You're the One That I Want'?","Grease","'Grease' (1978) features 'Summer Nights' and 'You're the One That I Want.'"],
 ["Which singer released the album '21' in 2011?","Adele","Adele's '21' (2011), named for her age while writing it, includes 'Rolling in the Deep.'"],
 ["In 'The Lion King', what is the name of Simba's father?","Mufasa","Mufasa is Simba's father, the king killed by Scar in 'The Lion King.'"],
 ["Who directed the 1982 film 'E.T. the Extra-Terrestrial'?","Steven Spielberg","Steven Spielberg directed 'E.T. the Extra-Terrestrial' (1982)."],
 ["Which board game asks players to solve a murder involving Colonel Mustard and Professor Plum?","Clue","Clue (Cluedo) asks players to deduce the murderer, weapon, and room — Colonel Mustard and Professor Plum are suspects."],
 ["Who wrote the 'Harry Potter' books?","J.K. Rowling","J.K. Rowling wrote the Harry Potter books."],
 ["Which insurer promises that 'fifteen minutes could save you fifteen percent or more on car insurance'?","GEICO","GEICO's long-running promise is that '15 minutes could save you 15% or more on car insurance.'"],
 ["Which battery brand's pink bunny mascot 'keeps going and going'?","Energizer","The Energizer Bunny is the pink bunny that 'keeps going and going.'"],
 ["Which drink's slogan is 'Gives You Wings'?","Red Bull","'Red Bull Gives You Wings' is the energy drink's signature slogan."],
 ["Which fast-food chain's slogan is 'Live Mas'?","Taco Bell","'Live Más' is Taco Bell's slogan."],
 ["Which pizza chain created the villain mascot 'The Noid' in the 1980s?","Domino's","Domino's created the Noid in the 1980s — a villain who tried to ruin pizzas, whom Domino's promised to 'avoid.'"],
 ["Which pizza chain's slogan is 'Pizza! Pizza!'?","Little Caesars","'Pizza! Pizza!' is Little Caesars' slogan, from its two-for-one deal days."],
 ["Which soup brand's slogan is 'M'm! M'm! Good!'?","Campbell's","'M'm! M'm! Good!' has been Campbell's soup slogan since the 1930s."],
 ["Which cereal's mascot is Buzz the Bee?","Honey Nut Cheerios","Buzz the Bee is the mascot of Honey Nut Cheerios."],
 ["'Silly rabbit, they're for kids!' - which cereal do the kids refuse to share in the ads?","Trix","In Trix ads the kids refuse to share with the rabbit: 'Silly rabbit, Trix are for kids!'"],
 ["Which cereal's mascot is Toucan Sam?","Froot Loops","Toucan Sam, who follows his nose, is the Froot Loops mascot."],
 ["Which snack's slogan is 'Once You Pop, You Can't Stop'?","Pringles","'Once You Pop, You Can't Stop' is Pringles' slogan."],
 ["Which chip brand dares you: 'Betcha Can't Eat Just One'?","Lay's","Lay's has dared snackers 'Betcha Can't Eat Just One' since the 1960s."],
 ["Which cookie calls itself 'Milk's Favorite Cookie'?","Oreo","Oreo calls itself 'Milk's Favorite Cookie.'"],
 ["Which candy bar's classic slogan is 'Have a Break, Have a...'?","Kit Kat","'Have a Break, Have a Kit Kat' is the chocolate bar's classic slogan."],
 ["Which candy bar's modern slogan is 'You're Not You When You're Hungry'?","Snickers","'You're Not You When You're Hungry' is the Snickers campaign."],
 ["Which cola's 1980s slogan was 'The Choice of a New Generation'?","Pepsi","Pepsi's 1980s slogan was 'The Choice of a New Generation,' aimed at younger drinkers."],
 ["Which lemon-lime soda was marketed for years as 'The Uncola'?","7UP","7UP marketed itself as 'The Uncola' from the late 1960s."],
 ["Which drink's slogan is 'Do the Dew'?","Mountain Dew","'Do the Dew' is Mountain Dew's slogan."],
 ["Which sports drink asked athletes, 'Is It in You?'","Gatorade","Gatorade asked athletes 'Is It in You?' in its sweat-coloured ads."],
 ["Which sportswear brand's slogan is 'Impossible Is Nothing'?","Adidas","'Impossible Is Nothing' is Adidas' slogan."],
 ["Which software company's 1990s slogan asked, 'Where Do You Want to Go Today?'","Microsoft","Microsoft's 1990s campaign asked 'Where Do You Want to Go Today?'"],
 ["Which chipmaker's famous campaign put its name 'Inside' computers?","Intel","Intel's 'Intel Inside' campaign put its logo on computers containing its chips."],
 ["Which phone company's classic slogan was 'Reach Out and Touch Someone'?","AT&T","'Reach Out and Touch Someone' was AT&T's classic long-distance slogan."],
 ["Flo, the cheerful saleswoman in the white apron, advertises which insurer?","Progressive","Flo, in her white apron, is the face of Progressive insurance."],
 ["Which beer is nicknamed 'The Silver Bullet'?","Coors Light","Coors Light is nicknamed 'The Silver Bullet' for its silver can."],
 ["The 'Most Interesting Man in the World' ads promoted which beer?","Dos Equis","The 'Most Interesting Man in the World' fronted Dos Equis beer ads."],
 ["Which card network's long-running campaign calls priceless experiences 'Priceless'?","Mastercard","Mastercard's campaign prices what money can buy, 'for everything else, there's Mastercard — Priceless.'"],
 ["Which card company's classic slogan was 'It's Everywhere You Want to Be'?","Visa","'It's Everywhere You Want to Be' was Visa's classic slogan."],
 ["Which bank and card brand asks, 'What's in Your Wallet?'","Capital One","Capital One asks 'What's in Your Wallet?'"],
 ["Which city's tourism slogan promises, 'What Happens Here, Stays Here'?","Las Vegas","'What Happens Here, Stays Here' is Las Vegas' famous tourism slogan."],
 ["Which fast-food chain's ads have cows urging people to 'Eat Mor Chikin'?","Chick-fil-A","Chick-fil-A's cows urge people to 'Eat Mor Chikin' — to save themselves."],
 ["Which branch of the US military used the slogan 'Be All You Can Be'?","US Army","'Be All You Can Be' was the US Army's recruiting slogan for over twenty years."],
 ["Which branch of the US military uses the slogan 'The Few. The Proud.'?","US Marine Corps","'The Few. The Proud.' is the US Marine Corps' slogan."],
 ["The giggling doughboy mascot Poppin' Fresh advertises which baking brand?","Pillsbury","Poppin' Fresh, the giggling doughboy, is Pillsbury's mascot."],
 ["Which sandwich chain's slogan is 'Eat Fresh'?","Subway","'Eat Fresh' is Subway's slogan."],
 ["In a SWOT analysis, what does the 'S' stand for?","Strengths","In SWOT, S stands for Strengths (followed by Weaknesses, Opportunities, Threats)."],
 ["A 'target market' is best described as what?","A specific group of consumers a company aims to reach","A target market is the specific group of consumers a company aims its product and marketing at."],
 ["'Market share' means what?","A company's sales as a percentage of the total market's sales","Market share is a company's slice of the total market's sales, expressed as a percentage."],
 ["In the product life cycle, which stage comes right after growth?","Maturity","After growth, a product reaches maturity — sales peak and level off before decline."],
 ["'Brand loyalty' describes customers who do what?","Buy the same brand repeatedly","Brand loyalty means customers keep buying the same brand rather than switching."],
 ["Handing out free samples in a store is an example of which promotion type?","Sales promotion","Free samples are a sales promotion — a short-term incentive to try or buy."],
 ["'Word-of-mouth' marketing spreads mainly through what?","Customers telling other people","Word-of-mouth spreads through customers telling other people — the oldest form of marketing."],
 ["What is a 'niche market'?","A small, specialized segment of a market","A niche market is a small, specialised segment with specific needs."],
 ["'Upselling' means persuading a customer to do what?","Buy a more expensive or upgraded version","Upselling persuades a customer to buy a pricier or upgraded version of what they were getting."],
 ["'Cross-selling' means offering a customer what?","Additional related products","Cross-selling offers additional related products — fries with the burger."],
 ["The modern 'marketing concept' says a company should focus first on what?","Customer needs and satisfaction","The marketing concept puts customer needs and satisfaction first, rather than just pushing products."],
 ["Which of these is an example of direct marketing?","An email sent to a specific customer list","Direct marketing speaks to identified customers directly — like an email to a specific list — rather than to the general public."],
 ["Public relations (PR) differs from advertising mainly because PR does what?","Earns media coverage rather than buying it","PR earns media coverage instead of buying ad space — that's the core difference from advertising."],
 ["A 'slogan' is best described as what?","A short, memorable phrase promoting a brand","A slogan is a short, memorable phrase promoting a brand."],
 ["In marketing, 'demographics' are data about what?","Age, income, and other traits of a population","Demographics are population data — age, income, and similar traits marketers use to segment audiences."],
 ["A customer 'loyalty program' rewards customers for what?","Repeat purchases","A loyalty program rewards repeat purchases — points or perks for coming back."],
 ["What is 'merchandising'?","How products are displayed and promoted in stores","Merchandising is how products are displayed and promoted in stores to drive sales."],
 ["'Test marketing' means doing what?","Launching a product in a small area before a full rollout","Test marketing tries a product in a small area before committing to a full rollout."],
 ["The 2014 'Ice Bucket Challenge' is a famous example of which kind of marketing?","Viral marketing","The Ice Bucket Challenge spread person-to-person online — a textbook case of viral marketing."],
 ["Paying social-media personalities to promote a product is called what?","Influencer marketing","Paying social-media personalities to promote a product is influencer marketing."],
 ["A 'call to action' in an ad is what?","A prompt telling the audience what to do next, like 'Buy now'","A call to action tells the audience what to do next — 'Buy now,' 'Sign up,' 'Call today.'"],
 ["'Rebranding' means doing what?","Changing a brand's name, logo, or image","Rebranding changes a brand's name, logo, or image to reshape how it's perceived."],
 ["'Cause marketing' links a brand with what?","A charitable or social cause","Cause marketing links a brand with a charitable or social cause, so buying supports the cause."],
 ["The branding 'halo effect' happens when what occurs?","One well-liked product improves opinions of the whole brand","The halo effect: one well-liked product casts a glow over the whole brand."],
 ["When 'Band-Aid' is used in the US as the everyday word for any adhesive bandage, it shows the brand has become what?","A household generic name for its product category","Band-Aid became a generic name for its whole category — like Kleenex for tissues."],
 ["'Telemarketing' is selling mainly by what means?","Telephone","Telemarketing is selling by telephone."],
 ["A 'jingle' in advertising is what?","A short, catchy song used in an ad","A jingle is a short, catchy song written for an ad."],
 ["Which retail giant built its fame on an 'everyday low prices' strategy?","Walmart","Walmart built its fame on 'everyday low prices.'"],
 ["'Showrooming' is when shoppers do what?","Examine products in a store, then buy them online","Showrooming is examining a product in a store, then buying it online — often cheaper."],
 ["In the US, 'Black Friday' sales traditionally fall on the day after which holiday?","Thanksgiving","Black Friday falls the day after Thanksgiving in the US."],
 ["A 'pop-up shop' is best described as what?","A temporary retail space open for a short time","A pop-up shop is a temporary retail space, open for a short time to create buzz or test a market."],
 ["Riddle: What has a face and two hands but no arms or legs?","A clock","A clock has a face and two hands, but no arms or legs."],
 ["Riddle: What has a thumb and four fingers but is not alive?","A glove","A glove has a thumb and four fingers but is not alive."],
 ["Riddle: The more of me you have, the less you see. What am I?","Darkness","The more darkness there is, the less you can see."],
 ["Riddle: What comes once in a minute, twice in a moment, but never in a thousand years?","The letter M","The letter M appears once in 'minute,' twice in 'moment,' and not at all in 'a thousand years.'"],
 ["Riddle: What has a bottom at the very top?","Your legs","Your legs have their 'bottom' (the bottom of you) at their top."],
 ["Riddle: What gets sharper the more you use it?","Your brain","Your brain gets sharper the more you use it."],
 ["Riddle: What kind of tree can you carry in your hand?","A palm","A palm is both a tree and the inside of your hand."],
 ["Riddle: What goes up and down but never moves?","A staircase","A staircase goes up and down but never moves."],
 ["Riddle: What has a tongue but cannot speak?","A shoe","A shoe has a tongue but cannot speak."],
 ["Riddle: I have branches, but no fruit, trunk, or leaves. What am I?","A bank","A bank has branches — local offices — but no fruit, trunk, or leaves."],
 ["Riddle: What can you hold in your left hand but not in your right hand?","Your right elbow","You can hold your right elbow in your left hand, but your right hand can't hold its own elbow."],
 ["Riddle: What is easy to get into but hard to get out of?","Trouble","Trouble is easy to get into and hard to get out of."],
 ["Riddle: What has many needles but never sews?","A Christmas tree","A Christmas tree is covered in needles but never sews."],
 ["Riddle: People buy me to eat, but they never eat me. What am I?","A plate","People buy a plate to eat from, but never eat the plate itself."],
 ["Riddle: In the Sphinx's famous riddle, what walks on four legs in the morning, two at noon, and three in the evening?","A human","The Sphinx's answer is a human: crawling on all fours as a baby, walking on two legs as an adult, and using a cane in old age."],
 ["Riddle: What has bark but no bite?","A tree","A tree has bark but cannot bite."],
 ["Riddle: What can be cracked, made, told, and played?","A joke","A joke can be cracked, made, told, and played (a practical joke)."],
 ["Riddle: What has a heart that never beats?","An artichoke","An artichoke has a heart — its tender centre — that never beats."],
 ["Riddle: What goes through cities and fields but never moves?","A road","A road passes through cities and fields but never moves."],
 ["Riddle: What has a spine but no bones?","A book","A book has a spine but no bones."],
 ["Riddle: What can you break without ever picking it up or touching it?","A promise","You can break a promise without touching anything."],
 ["Riddle: What runs all around a backyard yet never moves?","A fence","A fence runs all around a backyard yet never moves."],
 ["Riddle: What is always coming but never arrives?","Tomorrow","Tomorrow is always coming but never arrives — when it gets here, it's today."],
 ["Riddle: What kind of ship has two mates but no captain?","A relationship","A relationship is a 'ship' with two mates and no captain."],
 ["Riddle: What begins with T, ends with T, and has T in it?","A teapot","A teapot begins and ends with T and has tea in it."],
 ["Riddle: What can travel all around the world without leaving its corner?","A stamp","A stamp travels the world stuck in the corner of an envelope."],
 ["Riddle: What has the head of a cat, the feet of a cat, but is not a cat?","A kitten","A kitten has a cat's head and feet but is not (yet) a cat."],
 ["Riddle: Which word becomes shorter when you add two letters to it?","Short","Add 'er' to 'short' and you get 'shorter' — the word becomes shorter in meaning."],
 ["Riddle: What do you throw out when you want to use it, and take in when you are done with it?","An anchor","You throw an anchor out to use it and haul it back in when done."],
 ["Riddle: What kind of coat is always wet when you put it on?","A coat of paint","A coat of paint is wet when you put it on."],
 ["Riddle: What goes up a chimney down, but cannot go down a chimney up?","An umbrella","An umbrella goes up a chimney closed ('down'), but can't come down open ('up')."],
 ["Riddle: What is black when it is clean and white when it is dirty?","A chalkboard","A chalkboard is black when clean and white with chalk when dirty."],
 ["Riddle: What is at the end of a rainbow?","The letter W","The letter W sits at the end of the word 'rainbow.'"],
 ["Riddle: What has a head, cannot think, and is hit with a hammer?","A nail","A nail has a head, cannot think, and is hit with a hammer."],
 ["Riddle: What kind of band never plays music?","A rubber band","A rubber band never plays music."],
 ["In golf, a score of two under par on a single hole is called what?","Eagle","Two under par on one hole is an eagle (one under is a birdie, three under an albatross)."],
 ["How many players does a rugby union team field at once?","15","A rugby union team fields fifteen players at once."],
 ["In tennis, a serve the receiver cannot touch at all is called what?","Ace","A serve the receiver cannot touch at all is an ace."],
 ["In soccer, scoring three goals in one match by one player is called what?","Hat-trick","Three goals by one player in a match is a hat-trick."],
 ["How many innings are in a standard professional baseball game, before extra innings?","9","A standard baseball game lasts nine innings before extra innings."],
 ["Which swimmer won a record eight gold medals at the 2008 Beijing Olympics?","Michael Phelps","Michael Phelps won a record eight gold medals at Beijing 2008."],
 ["In American football, how many yards must the offense gain for a first down?","10","An offence must gain ten yards in four downs for a first down."],
 ["The Super Bowl decides the champion of which league?","NFL","The Super Bowl decides the NFL champion."],
 ["How many players from each team are on a basketball court at one time?","5","Each basketball team has five players on the court at a time."],
 ["Which boxer famously promised to 'float like a butterfly, sting like a bee'?","Muhammad Ali","Muhammad Ali described his style as 'float like a butterfly, sting like a bee.'"],
 ["The Giro d'Italia is a major cycling stage race held mainly in which country?","Italy","The Giro d'Italia is Italy's great cycling stage race, the counterpart of the Tour de France."],
 ["Which golf tournament is played each April at Augusta National?","The Masters","The Masters is played each April at Augusta National, with the winner receiving a green jacket."],
 ["How many periods are in a standard ice hockey game?","3","An ice hockey game has three periods of twenty minutes."],
 ["In ice hockey, playing with more skaters than the other team because of a penalty is called what?","Power play","A power play is the manpower advantage while the other team serves a penalty."],
 ["In Formula 1, a checkered flag signals what?","The end of the race","The chequered flag signals the end of the race."],
 ["In modern table tennis, a game is won by the first player to reach how many points?","11","Modern table tennis games are won at 11 points (it was 21 until 2001)."],
 ["In volleyball, how many hits can one team use before the ball must cross the net?","3","A volleyball team may use up to three hits before the ball must cross the net."],
 ["Which Korean martial art is famous for its high, fast kicks?","Taekwondo","Taekwondo, Korea's martial art, is famous for its high, fast kicks."],
 ["How many rounds are in a modern professional boxing championship fight?","12","A modern championship boxing fight lasts up to twelve rounds."],
 ["Which city hosted the first modern Olympic Games in 1896?","Athens","Athens hosted the first modern Olympic Games in 1896."],
 ["In cricket, how many balls are bowled in one over?","6","One over in cricket is six balls."],
 ["In rugby union, how many points is a try worth?","5","A try in rugby union is worth five points."],
 ["The Wimbledon tennis championships are famously played on which playing surface?","Grass","Wimbledon is played on grass — the last Grand Slam still on the surface."],
 ["In American football, a safety is worth how many points?","2","A safety is worth two points."],
 ["How long is an Olympic-size swimming pool, in meters?","50","An Olympic-size pool is 50 metres long."],
 ["The pommel horse and the still rings are apparatus in which sport?","Gymnastics","The pommel horse and still rings are men's gymnastics apparatus."],
 ["A triathlon combines swimming, cycling, and which third sport?","Running","A triathlon is swim, bike, run — in that order."],
 ["The 'World Series' decides the champion of which sport?","Baseball","The World Series decides the baseball (MLB) champion."],
 ["How many players does each NFL team have on the field at once?","11","Each NFL team has eleven players on the field at once."],
 ["The 1992 US 'Dream Team' competed at the Olympics in which sport?","Basketball","The 1992 'Dream Team' was the US Olympic basketball team, the first with NBA stars."],
 ["In darts, what is the highest score possible with one dart?","60","Treble 20 is the highest one-dart score in darts: 60."],
 ["How many frames are in a standard game of tenpin bowling?","10","A tenpin bowling game has ten frames."],
 ["In snooker, how many points is the black ball worth?","7","In snooker the black ball is worth seven points — the most valuable colour."],
 ["In which year did World War II begin?","1939","World War II began in 1939 with Germany's invasion of Poland."],
 ["The Great Pyramid of Giza was built as a tomb for which pharaoh?","Khufu","The Great Pyramid was built as a tomb for the pharaoh Khufu (Cheops)."],
 ["In which year did the American Civil War end?","1865","The American Civil War ended in 1865 with Lee's surrender at Appomattox."],
 ["The Victorian era is named after which British queen?","Queen Victoria","The Victorian era is named after Queen Victoria, who reigned from 1837 to 1901."],
 ["The Cold War was a long standoff mainly between the United States and which other superpower?","The Soviet Union","The Cold War pitted the United States against the Soviet Union for nearly half a century."],
 ["Who was the first European to reach India by sea, in 1498?","Vasco da Gama","Vasco da Gama reached India by sea in 1498, sailing around Africa."],
 ["Gutenberg developed his printing press in Europe in which century?","15th century","Gutenberg developed his movable-type printing press in the 15th century (around 1440)."],
 ["Which US president was assassinated in Dallas in 1963?","John F. Kennedy","John F. Kennedy was assassinated in Dallas in November 1963."],
 ["Which Greek city-state was Athens' great military rival?","Sparta","Sparta was Athens' great military rival — they fought the Peloponnesian War."],
 ["Who became the first emperor of Rome, in 27 BC?","Augustus","Augustus became Rome's first emperor in 27 BC, ending the Republic."],
 ["The Hundred Years' War was fought mainly between England and which country?","France","The Hundred Years' War (1337–1453) was fought between England and France."],
 ["In which year did India gain independence from Britain?","1947","India gained independence from Britain in 1947."],
 ["The US Declaration of Independence was adopted in which year?","1776","The Declaration of Independence was adopted on 4 July 1776."],
 ["Who led the Soviet Union through most of World War II?","Joseph Stalin","Joseph Stalin led the Soviet Union through most of World War II."],
 ["Which river was the lifeline of ancient Egyptian civilization?","Nile River","The Nile was ancient Egypt's lifeline — its annual floods farmed the valley."],
 ["Which famous battle of 1066 changed the course of English history?","Battle of Hastings","At the Battle of Hastings (1066) William of Normandy defeated King Harold, changing English history."],
 ["The Renaissance began in which European country?","Italy","The Renaissance began in Italy, in cities like Florence."],
 ["Who was the first woman to fly solo across the Atlantic Ocean, in 1932?","Amelia Earhart","Amelia Earhart flew solo across the Atlantic in 1932, five years after Lindbergh."],
 ["Which spacecraft carried the first humans to land on the Moon?","Apollo 11","Apollo 11 carried the first humans to land on the Moon in July 1969."],
 ["The Great Depression began with a stock market crash in which year?","1929","The Great Depression began with the Wall Street crash of 1929."],
 ["Which ancient wonder guided ships into the harbor of Alexandria, Egypt?","The Lighthouse of Alexandria","The Lighthouse of Alexandria (the Pharos) guided ships into the harbour and was one of the Seven Wonders."],
 ["Who became India's first prime minister at independence in 1947?","Jawaharlal Nehru","Jawaharlal Nehru became India's first prime minister in 1947."],
 ["Viking explorer Leif Erikson reached North America at around which year?","1000 AD","Leif Erikson reached North America around 1000 AD — five centuries before Columbus."],
 ["Julius Caesar was assassinated on the Ides of which month?","March","Caesar was assassinated on the Ides of March (15 March), 44 BC."],
 ["The ancient Olympic Games began in 776 BC, in which century BC?","8th century BC","776 BC falls in the 8th century BC."],
 ["In which year did US women gain the nationwide right to vote, when the 19th Amendment was ratified?","1920","The 19th Amendment was ratified in 1920, giving US women the nationwide vote."],
 ["Who is credited with inventing the telephone, patented in 1876?","Alexander Graham Bell","Alexander Graham Bell patented the telephone in 1876."],
 ["World War I ended in which year?","1918","World War I ended in 1918 — the armistice came on 11 November."],
 ["Alaska was purchased by the United States from which country, in 1867?","Russia","The US bought Alaska from Russia in 1867 for $7.2 million — 'Seward's Folly.'"],
 ["Who became the first president of the French Fifth Republic, in 1959?","Charles de Gaulle","Charles de Gaulle became the first president of the French Fifth Republic in 1959."],
 ["The samurai were the hereditary warrior class of which country?","Japan","The samurai were Japan's hereditary warrior class."],
 ["The Aztec capital Tenochtitlan stood on the site of which modern city?","Mexico City","Mexico City was built on the ruins of the Aztec capital Tenochtitlan."],
 ["In which year did the Soviet Union dissolve?","1991","The Soviet Union dissolved in December 1991."],
 ["What is LeAnn Rimes' full first name at birth?","Margaret LeAnn Rimes","She was born Margaret LeAnn Rimes — she performs under her middle name, LeAnn."],
 ["When was LeAnn Rimes born?","August 28, 1982","LeAnn Rimes was born on 28 August 1982."],
 ["In which city was LeAnn Rimes born?","Jackson, Mississippi","LeAnn Rimes was born in Jackson, Mississippi, and raised in Texas."],
 ["In which Texas city was LeAnn Rimes raised?","Garland, Texas","She was raised in Garland, Texas, a Dallas suburb."],
 ["Who was LeAnn Rimes' father, producer and early manager?","Wilbur Rimes","Her father Wilbur Rimes produced and managed her early career."],
 ["On which TV talent show did LeAnn Rimes compete as a junior vocalist at age 8?","Star Search","At age 8 she competed as a junior vocalist on Star Search."],
 ["What were LeAnn Rimes' two independent albums as a preteen?","Everybody's Sweetheart (1991) and All That (1994)","Before signing to a major label she released two independent albums as a preteen: Everybody's Sweetheart (1991) and All That (1994)."],
 ["Which record label did LeAnn Rimes sign with in 1996?","Curb Records","She signed with Curb Records in 1996, the label that released 'Blue.'"],
 ["How old was LeAnn Rimes when she broke through with 'Blue' in 1996?","13","She was just 13 when 'Blue' broke through in 1996."],
 ["Who wrote LeAnn Rimes' breakout song 'Blue'?","Bill Mack","Dallas DJ and songwriter Bill Mack wrote 'Blue' and championed the young singer's recording of it."],
 ["What was the title of LeAnn Rimes' 1996 breakthrough album?","Blue","Her 1996 breakthrough album was titled Blue, after its title track."],
 ["When was LeAnn Rimes' album 'Blue' released?","July 9, 1996","The album Blue was released on 9 July 1996."],
 ["How was LeAnn Rimes' album 'Blue' certified in the US?","Six-times Platinum","Blue was certified six-times Platinum in the US."],
 ["What peak did 'Blue' reach on Billboard Hot Country Songs?","Number 10 (top 10)","The single 'Blue' peaked at No. 10 on Billboard's Hot Country Songs chart."],
 ["Which two Grammy Awards did LeAnn Rimes win in 1997?","Best New Artist and Best Female Country Vocal Performance (for 'Blue')","In 1997 she won Best New Artist and Best Female Country Vocal Performance, for 'Blue.'"],
 ["How old was LeAnn Rimes when she won Best New Artist at the Grammys?","14","She was 14 when she won Best New Artist at the 1997 Grammys."],
 ["What distinction did LeAnn Rimes hold as a Grammy Best New Artist winner at 14?","Youngest solo artist to win Best New Artist","At 14 she was the youngest solo artist ever to win the Grammy for Best New Artist."],
 ["Which LeAnn Rimes song was her only Billboard Hot Country Songs No. 1?","One Way Ticket (Because I Can)","'One Way Ticket (Because I Can)' was her only No. 1 on Billboard's Hot Country Songs chart."],
 ["Who wrote 'One Way Ticket (Because I Can)'?","Judy Rodman and Keith Hinton","'One Way Ticket (Because I Can)' was written by Judy Rodman and Keith Hinton."],
 ["From which album was 'One Way Ticket (Because I Can)' released as the third single?","Blue","It was the third single from her breakthrough album Blue."],
 ["Which LeAnn Rimes single from 'Blue' peaked at No. 3 on Billboard Hot Country Songs?","Unchained Melody","Her version of 'Unchained Melody', from Blue, peaked at No. 3 on Hot Country Songs."],
 ["Which other singles were on LeAnn Rimes' album 'Blue'?","Hurt Me and The Light in Your Eyes","Besides the title track, Blue spun off the singles 'Hurt Me' and 'The Light in Your Eyes.'"],
 ["What is the title of LeAnn Rimes' 1997 inspirational album?","You Light Up My Life: Inspirational Songs","Her 1997 inspirational album was You Light Up My Life: Inspirational Songs — a rare No. 1 on the pop, country, and Christian charts at once."],
 ["How was 'You Light Up My Life: Inspirational Songs' certified?","Four-times Platinum","You Light Up My Life: Inspirational Songs was certified four-times Platinum."],
 ["Who wrote 'How Do I Live'?","Diane Warren","Diane Warren wrote 'How Do I Live' — the same songwriter behind many of LeAnn's biggest ballads."],
 ["For which 1997 film was 'How Do I Live' originally recorded?","Con Air","'How Do I Live' was written and recorded for the 1997 film Con Air."],
 ["Whose version of 'How Do I Live' was used in the film 'Con Air'?","Trisha Yearwood's version","The film used Trisha Yearwood's version, while LeAnn's recording became the bigger chart hit."],
 ["What did LeAnn Rimes' version of 'How Do I Live' peak at on the Billboard Hot 100?","No. 2","Her 'How Do I Live' peaked at No. 2 on the Billboard Hot 100 — held off the top spot for weeks."],
 ["How many weeks did LeAnn Rimes' 'How Do I Live' spend on the Billboard Hot 100?","69 weeks","'How Do I Live' spent 69 weeks on the Billboard Hot 100."],
 ["What record did 'How Do I Live' set on the Billboard Hot 100 at the time?","Longest chart run in Hot 100 history at the time","At the time, its 69 weeks set the record for the longest chart run in Hot 100 history."],
 ["What did LeAnn Rimes' 'How Do I Live' reach No. 1 on?","Billboard Adult Contemporary chart","While it stalled at No. 2 on the Hot 100, 'How Do I Live' reached No. 1 on Billboard's Adult Contemporary chart."],
 ["Which LeAnn Rimes album followed 'You Light Up My Life' in 1998?","Sittin' on Top of the World","Her 1998 follow-up album was Sittin' on Top of the World."],
 ["Which singles were on 'Sittin' on Top of the World'?","Commitment and Looking Through Your Eyes","Sittin' on Top of the World produced the singles 'Commitment' and 'Looking Through Your Eyes.'"],
 ["What was LeAnn Rimes' self-titled 1999 album called?","LeAnn Rimes","Her 1999 album of country classics was self-titled: LeAnn Rimes."],
 ["Which single from the 1999 'LeAnn Rimes' album peaked at No. 6 on Billboard Hot Country Songs?","Big Deal","'Big Deal', from the self-titled 1999 album, peaked at No. 6 on Hot Country Songs."],
 ["Which 2001 LeAnn Rimes compilation included 'I Need You' and 'Can't Fight the Moonlight'?","I Need You","The 2001 compilation I Need You gathered both 'I Need You' and 'Can't Fight the Moonlight.'"],
 ["Who wrote 'Can't Fight the Moonlight'?","Diane Warren","Diane Warren wrote 'Can't Fight the Moonlight', as she had 'How Do I Live.'"],
 ["Who produced 'Can't Fight the Moonlight'?","Trevor Horn","Producer Trevor Horn produced 'Can't Fight the Moonlight.'"],
 ["For which 2000 film is 'Can't Fight the Moonlight' the theme song?","Coyote Ugly","'Can't Fight the Moonlight' is the theme of the 2000 film Coyote Ugly."],
 ["In how many countries did 'Can't Fight the Moonlight' reach No. 1?","11 countries","'Can't Fight the Moonlight' reached No. 1 in 11 countries."],
 ["What was LeAnn Rimes' 2002 pop album?","Twisted Angel","Her 2002 pop album was Twisted Angel."],
 ["Which single was on 'Twisted Angel'?","Life Goes On","'Life Goes On' was the single from Twisted Angel."],
 ["What was LeAnn Rimes' 2005 return-to-country album?","This Woman","This Woman (2005) was billed as her return to country."],
 ["Which singles were on 'This Woman'?","Nothin' 'bout Love Makes Sense and Probably Wouldn't Be This Way","This Woman produced the singles 'Nothin' 'bout Love Makes Sense' and 'Probably Wouldn't Be This Way.'"],
 ["What did 'Probably Wouldn't Be This Way' peak at on Billboard Hot Country Songs?","No. 3","'Probably Wouldn't Be This Way' peaked at No. 3 on Hot Country Songs."],
 ["What did 'Something's Gotta Give' peak at on Billboard Hot Country Songs?","No. 2","'Something's Gotta Give' peaked at No. 2 on Hot Country Songs."],
 ["What was LeAnn Rimes' 2006 album?","Whatever We Wanna","Her 2006 album was Whatever We Wanna."],
 ["What was LeAnn Rimes' 2007 album?","Family","Her 2007 album was Family — her first with writing credits on every track."],
 ["Which single was on 'Family'?","Nothin' Better to Do","'Nothin' Better to Do' was the single from Family."],
 ["What was LeAnn Rimes' 2011 album of country classics by men?","Lady & Gentlemen","Lady & Gentlemen (2011) reimagined country classics originally sung by men."],
 ["Which single was on 'Lady & Gentlemen'?","Swingin'","Her remake of John Anderson's 'Swingin'' was the single from Lady & Gentlemen."],
 ["What was LeAnn Rimes' 2013 album?","Spitfire","Her 2013 album was Spitfire."],
 ["Which singles were on 'Spitfire'?","What Have I Done and Borrowed","Spitfire's singles were 'What Have I Done' and 'Borrowed.'"],
 ["What was LeAnn Rimes' 2016 album?","Remnants","Her 2016 album was Remnants."],
 ["Which two songs from 'Remnants' reached No. 1 on Billboard Dance Club Songs?","Long Live Love and LovE is LovE is LovE","'Long Live Love' and 'LovE is LovE is LovE' from Remnants both topped Billboard's Dance Club Songs chart."],
 ["What was LeAnn Rimes' 2022 album?","God's Work","Her 2022 album was God's Work."],
 ["Which single was from 'God's Work'?","Throw My Arms Around the World","'Throw My Arms Around the World' was the single from God's Work."],
 ["What was LeAnn Rimes' 2020 chant album?","Chant: The Human & the Holy","Her 2020 chant album was Chant: The Human & the Holy."],
 ["What was LeAnn Rimes' 2015 Christmas album?","Today Is Christmas","Her 2015 Christmas album was Today Is Christmas."],
 ["What was LeAnn Rimes' 2004 Christmas album?","What a Wonderful World","Her 2004 Christmas album was What a Wonderful World."],
 ["Which duet with Elton John did LeAnn Rimes record?","Written in the Stars","She duetted with Elton John on 'Written in the Stars', from his musical Aida."],
 ["Which duet with Bon Jovi did LeAnn Rimes record?","Till We Ain't Strangers Anymore","She recorded 'Till We Ain't Strangers Anymore' with Bon Jovi."],
 ["Which duet with Ronan Keating did LeAnn Rimes record?","Last Thing on My Mind","She duetted with Ronan Keating on 'Last Thing on My Mind.'"],
 ["In which 1997 TV film did LeAnn Rimes play herself?","Holiday in Your Heart","She played herself in the 1997 TV film Holiday in Your Heart, based on her own story."],
 ["In which 2009 Lifetime TV film did LeAnn Rimes play Meg Galligan?","Northern Lights","She played Meg Galligan in the 2009 Lifetime film Northern Lights, from Nora Roberts' novel."],
 ["In which 2018 Hallmark TV film did LeAnn Rimes play Eve Morgan?","It's Christmas Eve","She played Eve Morgan in the 2018 Hallmark film It's Christmas Eve."],
 ["Who did LeAnn Rimes beat in 'The Masked Singer' Season 4 final?","Mushroom (Aloe Blacc) and Crocodile (Nick Carter)","As the Sun, she beat Aloe Blacc's Mushroom and Nick Carter's Crocodile in the Season 4 final."],
 ["On which 'Voice' shows has LeAnn Rimes been a coach?","The Voice Australia (Season 13) and The Voice UK (Series 13)","She has coached on The Voice Australia (Season 13) and The Voice UK (Series 13)."],
 ["How many Grammy Awards has LeAnn Rimes won?","2","LeAnn Rimes has won 2 Grammy Awards — both in 1997, for 'Blue.'"],
 ["How many Billboard Music Awards has LeAnn Rimes won?","12","LeAnn Rimes has won 12 Billboard Music Awards."],
 ["At 15, what Billboard first did LeAnn Rimes achieve?","First country artist to win Artist of the Year at the Billboard Music Awards","At 15 she became the first country artist to win Artist of the Year at the Billboard Music Awards."],
 ["How many records has LeAnn Rimes sold worldwide?","More than 48 million","LeAnn Rimes has sold more than 48 million records worldwide."],
 ["Where did Billboard rank LeAnn Rimes for sales success in the 1990-1999 decade?","No. 17","Billboard ranked her No. 17 for sales success across the 1990s."],
 ["How many singles has LeAnn Rimes placed on international charts since 1996?","More than 40","She has placed more than 40 singles on international charts since 1996."],
 ["What award was LeAnn Rimes given by ASCAP in 2022?","The ASCAP Golden Note Award","In 2022 ASCAP gave her its Golden Note Award, honouring extraordinary songwriting achievement."],
 ["Trivia names round — name the celebrity: T•• C•••••","Tom Cruise","The pattern fits Tom Cruise, the Top Gun and Mission: Impossible star."],
 ["Trivia names round — name the celebrity: J••••• T•••••••••","Justin Timberlake","The pattern fits Justin Timberlake, the *NSYNC singer turned solo star and actor."],
 ["Trivia names round — name the celebrity: C•••••••••• N••••","Christopher Nolan","The pattern fits Christopher Nolan, director of Inception, Interstellar, and Oppenheimer."],
 ["Trivia names round — name the celebrity: C••••• L•••••••","Cloris Leachman","The pattern fits Cloris Leachman, the Oscar- and Emmy-winning comic actress of The Mary Tyler Moore Show and Young Frankenstein."],
 ["Trivia names round — name the celebrity: V•••• W••••","Vanna White","The pattern fits Vanna White, who has revealed letters on Wheel of Fortune since 1982."],
 ["Trivia names round — name the celebrity: C•••••••• H••••••••","Christina Hendricks","The pattern fits Christina Hendricks, Mad Men's Joan Holloway."],
 ["Trivia names round — name the celebrity: B••• A•••••","Buzz Aldrin","The pattern fits Buzz Aldrin, the second person to walk on the Moon, on Apollo 11."],
 ["Trivia names round — name the celebrity: J••• L••","Jack Lew","The pattern fits Jack Lew, US Treasury Secretary under President Obama."],
 ["Trivia names round — name the celebrity: M••••• T••••••","Meghan Trainor","The pattern fits Meghan Trainor, the 'All About That Bass' singer."],
 ["Trivia names round — name the celebrity: D•• M•••••","Don McLean","The pattern fits Don McLean, who wrote and sang 'American Pie.'"],
 ["Trivia names round — name the celebrity: G••• S•••••","Gary Sinise","The pattern fits Gary Sinise, Forrest Gump's Lieutenant Dan and CSI: NY star."],
 ["Trivia names round — name the celebrity: K•••• U••••••••••• K•••••","Keith Urban/Nicole Kidman","The combined pattern fits the married couple Keith Urban and Nicole Kidman."],
 ["Trivia names round — name the celebrity: W•• W••••••","Wil Wheaton","The pattern fits Wil Wheaton, Star Trek: The Next Generation's Wesley Crusher."],
 ["Trivia names round — name the celebrity: T•• R••••","Tom Ridge","The pattern fits Tom Ridge, the first US Secretary of Homeland Security."],
 ["Trivia names round — name the celebrity: E•••• F••••","Errol Flynn","The pattern fits Errol Flynn, the swashbuckling star of The Adventures of Robin Hood."],
 ["Trivia names round — name the celebrity: K••••","Kesha","The single-name pattern fits Kesha, the 'Tik Tok' pop star."],
 ["Trivia names round — name the celebrity: T••• H•••","Tony Hawk","The pattern fits Tony Hawk, the skateboarding legend."],
 ["Trivia names round — name the celebrity: L•• F•••••••","Lou Ferrigno","The pattern fits Lou Ferrigno, TV's Incredible Hulk."],
 ["Trivia names round — name the celebrity: W•••••• C••••••••","Winston Churchill","The pattern fits Winston Churchill, Britain's wartime prime minister."],
 ["Trivia names round — name the celebrity: W•••••• H••••• T•••","William Howard Taft","The pattern fits William Howard Taft, the 27th US president — and later Chief Justice."],
 ["Trivia names round — name the celebrity: W•••••• B••••••","Wilford Brimley","The pattern fits Wilford Brimley, the actor known for Cocoon and his folksy ad campaigns."],
 ["Trivia names round — name the celebrity: C•••••••• B•••","Christian Bale","The pattern fits Christian Bale, Batman in Christopher Nolan's Dark Knight trilogy."],
 ["Trivia names round — name the celebrity: D••• P•••••","Dana Perino","The pattern fits Dana Perino, White House press secretary under George W. Bush and later a Fox News host."],
 ["Trivia names round — name the celebrity: P•••• F•••••••","Peter Frampton","The pattern fits Peter Frampton, the rock guitarist of 'Frampton Comes Alive!'"],
 ["Trivia names round — name the celebrity: A• C•••••","Al Capone","The pattern fits Al Capone, the Prohibition-era Chicago gangster."],
 ["Trivia names round — name the celebrity: C•••• H••••","Chuck Hagel","The pattern fits Chuck Hagel, US Secretary of Defense under President Obama."],
 ["Trivia names round — name the celebrity: J•• H•••","Jon Hamm","The pattern fits Jon Hamm, Mad Men's Don Draper."],
 ["Trivia names round — name the celebrity: G••••• O•••••","George Orwell","The pattern fits George Orwell, author of 1984 and Animal Farm."],
 ["Trivia names round — name the celebrity: J••• G••••","John Glenn","The pattern fits John Glenn, the first American to orbit the Earth."],
 ["Trivia names round — name the celebrity: M••••• F••••••••","Morgan Fairchild","The pattern fits Morgan Fairchild, the glamorous TV actress of Flamingo Road and Falcon Crest."],
 ["Trivia names round — name the celebrity: C••• S•••••••","Carl Sandburg","The pattern fits Carl Sandburg, the Pulitzer-winning poet and Lincoln biographer."],
 ["Trivia names round — name the celebrity: B•••• C•••••••","Bruce Campbell","The pattern fits Bruce Campbell, Ash in the Evil Dead films."],
 ["Trivia names round — name the celebrity: A•••• L••••• A•• B•••• W••••","Allen Ludden and Betty White","The combined pattern fits Password host Allen Ludden and his wife Betty White."],
 ["Trivia names round — name the celebrity: M•••••• H•••••••","Mariska Hargitay","The pattern fits Mariska Hargitay, Law & Order: SVU's Olivia Benson."],
 ["Trivia names round — name the celebrity: H•••• K•••••","Helen Keller","The pattern fits Helen Keller, the deaf-blind author and activist."],
 ["Trivia names round — name the celebrity: J•••••• C•••••••","Jessica Chastain","The pattern fits Jessica Chastain, Oscar-winning star of The Help and Zero Dark Thirty."],
 ["Trivia names round — name the celebrity: R••••• D••••• J•","Robert Downey Jr","The pattern fits Robert Downey Jr., Marvel's Iron Man."],
 ["Trivia names round — name the celebrity: B•••• F•••","Bobby Flay","The pattern fits Bobby Flay, the celebrity chef of Beat Bobby Flay."],
 ["Trivia names round — name the celebrity: D•••• H•••","Dusty Hill","The pattern fits Dusty Hill, ZZ Top's bassist and co-vocalist."],
 ["Trivia names round — name the celebrity: B•••• G••••••","Billy Gibbons","The pattern fits Billy Gibbons, ZZ Top's bearded guitarist and frontman."],
 ["Trivia names round — name the celebrity: K•••• W•••••••••","Kerry Washington","The pattern fits Kerry Washington, Scandal's Olivia Pope."],
 ["Trivia names round — name the celebrity: S•••• M••••••••","Sarah McLachlan","The pattern fits Sarah McLachlan, the singer of 'Angel'."],
 ["Trivia names round — name the celebrity: C•••••••••• P••••••","Christopher Plummer","The pattern fits Christopher Plummer, The Sound of Music's Captain von Trapp."],
 ["Trivia names round — name the celebrity: N••••••• C•••••••••","Nicolaus Copernicus","The pattern fits Nicolaus Copernicus, the astronomer who placed the Sun at the centre of the solar system."],
 ["Trivia names round — name the celebrity: F•••••• F••• C••••••","Francis Ford Coppola","The pattern fits Francis Ford Coppola, director of The Godfather and Apocalypse Now."],
 ["Trivia names round — name the celebrity: R••• J••••••","Rian Johnson","The pattern fits Rian Johnson, director of Knives Out and Star Wars: The Last Jedi."],
 ["Trivia names round — name the celebrity: J• S••••••","JK Simmons","The pattern fits J.K. Simmons, the Oscar-winning Whiplash actor and J. Jonah Jameson in Spider-Man."],
 ["Trivia names round — name the celebrity: J•••• G•••","James Gunn","The pattern fits James Gunn, director of the Guardians of the Galaxy films."],
 ["Trivia names round — name the celebrity: B•••• B•••","Beach Boys","The pattern fits the Beach Boys — 'the' is dropped; Brian Wilson's band defined the California sound."],
 ["Trivia names round — name the celebrity: B••• P•••","Brad Pitt","The pattern fits Brad Pitt, star of Fight Club and Once Upon a Time in Hollywood."],
 ["Trivia names round — name the celebrity: S••••• T••••","Steven Tyler","The pattern fits Steven Tyler, Aerosmith's frontman."],
 ["Trivia names round — name the celebrity: T••••• P••••","Thomas Paine","The pattern fits Thomas Paine, author of the revolutionary pamphlet Common Sense."],
 ["Trivia names round — name the celebrity: R••• S•••••••","Ryan Seacrest","The pattern fits Ryan Seacrest, host of American Idol and Live."],
 ["Trivia names round — name the celebrity: P•••• T•••","Peter Tork","The pattern fits Peter Tork, bassist and keyboardist of the Monkees."],
 ["Trivia names round — name the celebrity: R•••• L••• T•••••","Robin Lord Taylor","The pattern fits Robin Lord Taylor, Gotham's Penguin."],
 ["Trivia names round — name the celebrity: J••••••• H••••","Julianne Hough","The pattern fits Julianne Hough, the Dancing with the Stars champion turned judge."],
 ["Trivia names round — name the celebrity: R••••••••• B• H••••","Rutherford B. Hayes","The pattern fits Rutherford B. Hayes, the 19th US president."],
 ["Trivia names round — name the celebrity: M••••","Monet","The single-name pattern fits Claude Monet, the founder of Impressionist painting."],
 ["Trivia names round — name the celebrity: B•• K•••••••","Ben Kingsley","The pattern fits Ben Kingsley, Oscar winner for Gandhi."],
 ["Trivia names round — name the celebrity: R•••••• B••••","Richard Blais","The pattern fits Richard Blais, the Top Chef-winning chef and restaurateur."],
 ["Trivia names round — name the celebrity: P••• F••••","Pink Floyd","The pattern fits Pink Floyd, the band behind The Dark Side of the Moon and The Wall."],
 ["Trivia names round — name the celebrity: C•••••••• R••••","Christina Ricci","The pattern fits Christina Ricci, Wednesday Addams in the 1990s Addams Family films."],
 ["Trivia names round — name the celebrity: J•••• F•••••","Jimmy Fallon","The pattern fits Jimmy Fallon, host of The Tonight Show."],
 ["William Golding wrote","Lord of the Flies","William Golding wrote Lord of the Flies (1954), about schoolboys stranded on an island."],
 ["How many hits did DiMaggio have during 56 game hit streak?","91","DiMaggio collected 91 hits during his record 56-game hitting streak in 1941."],
 ["Not a #1 SITCOM","All in the Family","All in the Family sat atop the ratings for five straight seasons in the 1970s as a landmark #1 sitcom."],
 ["Red Cross founded in what country","Switzerland","The Red Cross was founded in Geneva, Switzerland, in 1863 — its emblem reverses the Swiss flag."],
 ["Whiskey Lullaby sung by","Brad Paisley & Alison Krauss","'Whiskey Lullaby' is Brad Paisley and Alison Krauss's award-winning duet."],
 ["Not original NATO country","Greece","Greece joined NATO in 1952, three years after the alliance's 1949 founding — so it was not an original member."],
 ["Pirates of Caribbean","Keith Richards","Keith Richards of the Rolling Stones played Captain Teague, Jack Sparrow's father, in the Pirates of the Caribbean films."],
 ["Comet's parts","Nucleus, tail, coma","A comet has three parts: the solid nucleus, the glowing coma around it, and its tail."],
 ["Hickory dickory dock, the clock struck","one","In the rhyme, 'the clock struck one, the mouse ran down.'"],
 ["Not from Australia","Def Leppard","Def Leppard are from Sheffield, England — not Australia."],
 ["14 100-yard games","Barry Sanders","Barry Sanders rushed for 100 yards in 14 straight games in 1997, an NFL record streak."],
 ["Because you're worth it","L'Oréal","'Because you're worth it' is L'Oréal's famous slogan, written in 1971."],
 ["I understand","fathom","To 'fathom' something is to understand it — the word also names a unit of water depth."],
 ["Guggenheim in what city","NYC","The Guggenheim Museum, Frank Lloyd Wright's spiral landmark, is in New York City."],
 ["Religious society of friends","Quakers","The Religious Society of Friends is the formal name of the Quakers."],
 ["How many presidents born british subjects?","8","The first eight US presidents were born British subjects, before independence."],
 ["Cowboys v. Aliens","Daniel Craig","Daniel Craig starred as Jake Lonergan in Cowboys & Aliens (2011)."],
 ["First Survivor location","Borneo","The first season of Survivor was filmed on Borneo."],
 ["Legion of Doom","Philadelphia Flyers","The 'Legion of Doom' was the Philadelphia Flyers' feared top line of Lindros, LeClair, and Renberg."],
 ["Feeling Groovy","Simon & Garfunkel","'Feeling Groovy' is the nickname of Simon & Garfunkel's 'The 59th Street Bridge Song.'"],
 ["What is Wonder Woman's signature weapon?","Lasso of Truth","Wonder Woman's signature weapon is the Lasso of Truth, which compels honesty from anyone it binds."],
 ["Cryometer","low temperatures","A cryometer measures very low temperatures — 'cryo' means cold."],
 ["2nd video played by MTV","you better run - Pat Benatar","After 'Video Killed the Radio Star,' the second video MTV ever played was Pat Benatar's 'You Better Run.'"],
 ["1919 World Series","White Sox/Reds","The 1919 World Series matched the Cincinnati Reds and the Chicago White Sox — the infamous 'Black Sox' series."],
 ["Silver Dollar","Eisenhower","The last US silver dollar series carried President Eisenhower's portrait."],
 ["Cars voice","Owen Wilson","Owen Wilson voices Lightning McQueen in Pixar's Cars."],
 ["How many ships in battleship?","5","The classic Battleship game gives each player five ships."],
 ["Mille lacs","Minnesota","Mille Lacs is the great lake of Minnesota."],
 ["Mona Lisa in","Louvre","The Mona Lisa hangs in the Louvre in Paris — the most visited painting in the world."],
 ["Napoleon Dynamite","Vote for Pedro","'Vote for Pedro' is the campaign slogan from Napoleon Dynamite, printed on Napoleon's T-shirt for his friend Pedro."],
 ["I can't believe I ate the whole thing","Alka Seltzer","'I can't believe I ate the whole thing' was Alka-Seltzer's famous 1970s ad line."],
 ["Dick Vitale coached","Pistons","Before broadcasting, Dick Vitale coached the Detroit Pistons (1978–79)."],
 ["State borders Tennessee also most states","Missouri","Missouri and Tennessee each border eight states — the most of any US states."],
 ["Best selling female artist of 2000's","Britney","Britney Spears was the best-selling female artist of the 2000s."],
 ["Tragus is located on","Ear","The tragus is the small flap of cartilage on the outer ear."],
 ["Team played at Jack Murphy","Padres/Chargers","San Diego's Jack Murphy Stadium was home to both the Padres and the Chargers."],
 ["Author of Cat's Cradle","Kurt Vonnegut, Jr.","Kurt Vonnegut Jr. wrote Cat's Cradle (1963)."],
 ["Ruth was Naomi's","Daughter in law","In the Bible's Book of Ruth, Ruth was Naomi's daughter-in-law."],
 ["#1 for 16 weeks","One sweet day","'One Sweet Day' by Mariah Carey and Boyz II Men held No. 1 for a record 16 weeks."],
 ["Milky Way shaped like","flat spiral","The Milky Way is a spiral galaxy — a flat disc of stars with winding arms."],
 ["Furthest north","Greenland","Greenland is the northernmost landmass in the set — the world's largest island reaches within 800 km of the North Pole."],
 ["Dip relations with US during rev war","France","France was the first country to recognise and ally with the United States during the Revolutionary War."],
 ["Playboy cover 14 times","Pamela Anderson","Pamela Anderson appeared on Playboy's cover more than anyone — 14 times."],
 ["ILM founded by","George Lucas","George Lucas founded Industrial Light & Magic (ILM) in 1975 to create Star Wars' effects."],
 ["Jackie K reservoir in","Central Park","The Central Park reservoir is named for Jacqueline Kennedy Onassis."],
 ["Gold records in 50's and 90's","Frank Sinatra","Frank Sinatra earned gold records in both the 1950s and the 1990s, a span few artists match."],
 ["Mass times speed","momentum","Momentum equals mass times velocity (speed) — p = mv."],
 ["Last Great Race","Iditarod","Alaska's Iditarod sled-dog race bills itself as 'The Last Great Race on Earth'."],
 ["Silence DoGood","Ben Franklin","'Silence Dogood' was the pen name of the teenage Benjamin Franklin in his brother's newspaper."],
 ["Tie Breaker: Year of 2001: A space odeyssey","1968","2001: A Space Odyssey was released in 1968."],
 ["Pogo the clown","John Wayne Gacy","John Wayne Gacy, the serial killer, performed at parties dressed as 'Pogo the Clown.'"],
 ["Father of genetics","Mendel","Gregor Mendel, the pea-plant monk, is called the father of genetics."],
 ["Longest river in N. America","Missouri","The Missouri is the longest river in North America, slightly longer than the Mississippi."],
 ["First state to secede","S. Carolina","South Carolina was the first state to secede from the Union, in December 1860."],
 ["Aubrey Graham real name","Drake","Aubrey Graham is the birth name of the performer Drake."],
 ["Home run term","walk off","A game-ending home run by the home team is a 'walk-off' homer."],
 ["Amstel river in","Netherlands","The Amstel river flows through the Netherlands — Amsterdam is named after the dam built on it."],
 ["Ernest Evans real name","Chubby Checker","Ernest Evans is the birth name of Chubby Checker."],
 ["US Open stadium name","Arthur Ashe stadium","The US Open's main court is Arthur Ashe Stadium."],
 ["Major Strasser line","Bring in Usual Suspects","'Round up the usual suspects' is Major Strasser's line in Casablanca."],
 ["First year anniversary gift","paper","The traditional first-anniversary gift is paper."],
 ["In which city does the Brandenburg Gate stand?","Berlin","The Brandenburg Gate stands in Berlin."],
 ["Chrysalis","butterfly cocoon","A chrysalis is the cocoon stage in which a caterpillar becomes a butterfly."],
 ["Aint seen nothing yet","BTO","'You Ain't Seen Nothing Yet' is Bachman-Turner Overdrive's 1974 hit — BTO for short."],
 ["Bad air","Malaria","'Malaria' literally means 'bad air' in Italian — people once blamed the disease on swamp air."],
 ["Shawshank Redemption author","Stephen King","The Shawshank Redemption is based on a Stephen King novella."],
 ["Statue of Liberty gift from","France","The Statue of Liberty was a gift from France, dedicated in 1886."],
 ["West coast of S. America","Chile","Chile runs down South America's west (Pacific) coast."],
 ["Game with routes between cities","Ticket to Ride","Ticket to Ride is the board game of claiming train routes between cities."],
 ["Fred/Kate/Cindy/Keith","B-52's","Fred Schneider, Kate Pierson, Cindy Wilson, and Keith Strickland are the B-52's."],
 ["First woman to lead at Indy 500","Danica Patrick","Danica Patrick was the first woman to lead a lap at the Indianapolis 500, in 2005."],
 ["Daily Show","Stephen Colbert","Stephen Colbert was a correspondent on The Daily Show before The Colbert Report."],
 ["President arrested and brought to custody","US Grant","President Ulysses S. Grant was once arrested (and released) for speeding in a horse-drawn carriage in Washington."],
 ["Big Ben Tower","Elizabeth Tower","Big Ben is the bell; the tower holding it was renamed the Elizabeth Tower in 2012."],
 ["You really got ahold on me","Smokey Robinson","'You've Really Got a Hold on Me' was written and sung by Smokey Robinson with the Miracles."],
 ["Dr. John Pemberton created","Coca Cola","Atlanta pharmacist John Pemberton created Coca-Cola in 1886."],
 ["Badges, we don't need stinking badges","The treasure of sierra madre","'Badges? We don't need no stinking badges!' comes from The Treasure of the Sierra Madre (1948)."],
 ["Old Oaken Bucket trophy","Indiana v. Purdue","Indiana and Purdue play for the Old Oaken Bucket trophy."],
 ["Author of The Brethren","Grisham","John Grisham wrote the legal thriller The Brethren (2000)."],
 ["Blame it on the rain","Milli Vanilli","'Blame It on the Rain' was a Milli Vanilli hit — from the duo later exposed for not singing on their records."],
 ["Largest living invertebrate","Giant squid","The giant squid is the largest living invertebrate."],
 ["Does not border Laos","Singapore","Singapore is an island city-state far south of Laos and borders only Malaysia and Indonesia."],
 ["Cards Against Humanity reader","Card Czar","In Cards Against Humanity, the player who reads and judges each round is the Card Czar."],
 ["Gringotts Bank","Where goblins work","Gringotts is the wizards' bank in Harry Potter, run by goblins."],
 ["Sandy Koufax","Dodgers","Sandy Koufax pitched his whole career for the Dodgers, in Brooklyn and Los Angeles."],
 ["#1 James Bond song","View to a Kill","Duran Duran's 'A View to a Kill' is the only James Bond theme to reach No. 1 in the US."],
 ["HVAC","heating ventilation air conditioning","HVAC stands for heating, ventilation, and air conditioning."],
 ["First president of academy of arts","Douglas Fairbanks","Douglas Fairbanks was the first president of the Academy of Motion Picture Arts and Sciences."],
 ["ROCKY 3","Hulk Hogan","Hulk Hogan played the wrestler Thunderlips in Rocky III."],
 ["Letter not in state","Q","Q is the one letter that appears in no US state name."],
 ["Who sings King of the Road?","Roger Miller","Roger Miller wrote and sang 'King of the Road' (1965)."],
 ["Won best actor and actress Oscar","As Good as it gets","As Good As It Gets won both Best Actor (Jack Nicholson) and Best Actress (Helen Hunt) Oscars."],
 ["The people's car","VW","Volkswagen means 'the people's car' in German."],
 ["Lord of the Dance","Michael Flatley","Michael Flatley created and starred in Lord of the Dance, the Irish dance spectacular."],
 ["Rookie of the Year / MVP the next year","Cal Ripken Jr","Cal Ripken Jr. won Rookie of the Year in 1982 and the MVP award the next year, 1983."],
 ["First US to issue mail order catalog","montgomery ward","Montgomery Ward issued the first US mail-order catalogue in 1872."],
 ["Bond agency","mi6","James Bond works for MI6, Britain's Secret Intelligence Service."],
 ["Nori is what","seaweed","Nori is the edible seaweed used to wrap sushi."],
 ["Polaris is what constellation","ursa minor","Polaris, the North Star, sits at the end of Ursa Minor, the Little Dipper."],
 ["Year nelson mandela released","1990","Nelson Mandela was released from prison in February 1990, after 27 years."],
 ["Knighted and gave back 4 years later","lennon","John Lennon returned his MBE to the Queen in 1969, four years after receiving it — an MBE, not a knighthood."],
 ["One stomach flu away from goal weight","devil wears prada","'I'm one stomach flu away from my goal weight' is Emily's line in The Devil Wears Prada."],
 ["Impossible is nothing","adidas","'Impossible Is Nothing' is Adidas' slogan."],
 ["Year chuck yeager broke sound barrier","1947","Chuck Yeager broke the sound barrier in the Bell X-1 in October 1947."],
 ["Life elevated","utah","'Life Elevated' is Utah's state slogan."],
 ["Lord of the flies","william golding","Lord of the Flies was written by William Golding."],
 ["First lady of country music","tammy wynette","Tammy Wynette is called the First Lady of Country Music."],
 ["49ers #16","joe montana","Joe Montana wore No. 16 for the San Francisco 49ers."],
 ["Melvin kaminsky","mel brooks","Melvin Kaminsky is Mel Brooks' birth name."],
 ["Duet with dead father","natalie cole","Natalie Cole sang 'Unforgettable' as a virtual duet with her late father, Nat King Cole."],
 ["Group of jellyfish","smack","A group of jellyfish is called a smack."],
 ["How many years in US to be president?","14","The Constitution requires a president to have lived in the US for 14 years (and be 35 and a natural-born citizen)."],
 ["Smooth like butter","BTS","'Smooth like butter' opens BTS's 2021 hit 'Butter.'"],
 ["Horse that hasn’t run a race","maiden","A horse that has never raced (or never won) is called a maiden."],
 ["Longest wooden rollercoaster","kings island","The Beast at Kings Island in Ohio is the world's longest wooden roller coaster."],
 ["3M stands for","Minnesota Mining and Manufacturing","3M began as the Minnesota Mining and Manufacturing Company."],
 ["Time well wasted","brad paisley","'Time Well Wasted' is a Brad Paisley album and song."],
 ["Owls cant move","eyes","Owls cannot move their eyes in their sockets — which is why they swivel their heads instead."],
 ["Most olympic medals","phelps","Michael Phelps holds the record for most Olympic medals: 28, including 23 golds."],
 ["Tie breaker year tom hanks in dragnet","1987","The film Dragnet, with Tom Hanks, was released in 1987."],
 ["Simplon pass","switzerland and italy","The Simplon Pass crosses the Alps between Switzerland and Italy."],
 ["Resistance","ohms","Electrical resistance is measured in ohms."],
 ["Book with no e","gadsby","Gadsby (1939) is a novel written entirely without the letter E."],
 ["Taxes","16th amendment","The 16th Amendment (1913) gave Congress the power to levy an income tax."],
 ["Aluminum","bauxite","Aluminium is refined from bauxite ore."],
 ["Diane sawyer","gma","Diane Sawyer anchored Good Morning America — GMA — for a decade."],
 ["Roger rabbit","bob hoskins","Bob Hoskins played Eddie Valiant opposite the animated Roger Rabbit."],
 ["Glossitis","tongue","Glossitis is inflammation of the tongue."],
 ["Elvis grammy","gospel","Elvis Presley's only competitive Grammys were for gospel recordings."],
 ["In which decade was the Pledge of Allegiance officially adopted by the US Congress?","1940s","Congress officially adopted the Pledge of Allegiance in 1942, in the 1940s — the words 'under God' were not added until 1954."],
 ["Giverny","monet","Giverny was Claude Monet's home and garden in France, site of his water-lily paintings."],
 ["Singultus","hiccup","'Singultus' is the medical term for hiccups."],
 ["Fingernails","keratin","Fingernails are made of keratin, the same protein as hair."],
 ["Disc world","pratchett","Terry Pratchett created the Discworld comic-fantasy series."],
 ["Triple divide","montana","Montana's Triple Divide Peak sheds water toward three oceans: the Pacific, Atlantic, and Arctic."],
 ["Ronan","guardians","Ronan the Accuser is the villain of Guardians of the Galaxy (2014)."],
 ["Pooh","heffalump","The Heffalump is the creature Winnie-the-Pooh fears and tries to catch."],
 ["Reach for stars","Casey Kasem","Casey Kasem closed American Top 40 with 'Keep your feet on the ground and keep reaching for the stars.'"],
 ["Ahmad rashad","bobby moore","Ahmad Rashad was born Bobby Moore — the reverse pairing of the real-names round."],
 ["Dr seusee","fox in socks","Fox in Socks is Dr. Seuss's tongue-twister book."],
 ["Male horse female donkey","hinny","A hinny is the offspring of a male horse and a female donkey — the reverse cross gives a mule."],
 ["Tom and jerry dog","spike","Spike is the bulldog in Tom and Jerry."],
 ["Google bought","youtube","Google bought YouTube in 2006 for $1.65 billion."],
 ["Hitlers failed attempt","1923","Hitler's failed coup, the Beer Hall Putsch, was in 1923."],
 ["Zirconium","zr","Zr is the chemical symbol for zirconium."],
 ["First pres born after decl. of indep.","Van Buren","Martin Van Buren was the first president born after the Declaration of Independence — the first born a US citizen."],
 ["Danube flows into","black sea","The Danube flows east across Europe into the Black Sea."],
 ["First team to win BCS in 1999","tennessee","Tennessee won the first BCS championship game, played in January 1999 for the 1998 season."],
 ["Camp david known as","shangri-la","Franklin Roosevelt named the presidential retreat 'Shangri-La'; Eisenhower renamed it Camp David."],
 ["Hawaii 5-0 catchphrase","book'em dano","'Book 'em, Danno' is Steve McGarrett's catchphrase in Hawaii Five-O."],
 ["Trix","general mills","Trix is a General Mills cereal."],
 ["Sun from earth","93M miles","The Earth is about 93 million miles from the Sun."],
 ["LOTR composer","Howard Shore","Howard Shore composed the scores for The Lord of the Rings films."],
 ["Blarney stone located in","cork","The Blarney Stone is in Blarney Castle, near Cork, Ireland."],
 ["84 games reaching base","ted williams","Ted Williams reached base in 84 straight games in 1949, a record that still stands."],
 ["CVX stock symbol","chevron","CVX is Chevron's stock ticker symbol."],
 ["States that border NM","colorado, oklahoma, texas, arizona, utah","New Mexico borders Colorado, Oklahoma, Texas, Arizona, and (at the Four Corners) Utah."],
 ["In the heat of the night?","sparta, MS","In the Heat of the Night is set in the fictional Sparta, Mississippi."],
 ["Blazing saddles last name","johnson","Blazing Saddles is full of characters surnamed Johnson — a running gag in the film."],
 ["Number of states border texas","4","Four states border Texas: New Mexico, Oklahoma, Arkansas, and Louisiana."],
 ["5'4\" president","madison","James Madison, at 5 feet 4 inches, was the shortest US president."],
 ["Beetlejuice","alec baldwin","Alec Baldwin played Adam Maitland in Beetlejuice."],
 ["Birthplace of baseball","hoboken, NJ","The first baseball game under modern rules was played in Hoboken, New Jersey, in 1846."],
 ["2009 CMA entertainer of the year","Taylor Swift","Taylor Swift won CMA Entertainer of the Year in 2009, the youngest winner at the time."],
 ["1818 american clothing co","brooks bros","Brooks Brothers, founded in 1818, is America's oldest clothing retailer."],
 ["Costliest hurricane of the 90's","andrew","Hurricane Andrew (1992) was the costliest US hurricane of the 1990s."],
 ["Garfield","jim davis","Jim Davis created the Garfield comic strip in 1978."],
 ["Dolly parton song in 1958","puppy love","'Puppy Love' was a Dolly Parton single released in 1959, when she was thirteen."],
 ["Zorro horse","tornado","Zorro's horse is named Tornado."],
 ["Wall-e","buy N large","Buy N Large is the megacorporation that runs Earth (and the Axiom) in WALL-E."],
 ["In which state does Interstate 40 end at its eastern end?","North Carolina","Interstate 40 ends at its eastern end in Wilmington, North Carolina."],
 ["For your eyes only","1981","For Your Eyes Only, the Roger Moore Bond film, was released in 1981."],
 ["First female 4 star general","Dunwoody 2008","Ann Dunwoody became the first woman four-star general in the US Army in 2008."],
 ["AS","arsenic","As is the chemical symbol for arsenic."],
 ["The aviator","cate blanchett and jude law","Cate Blanchett (as Katharine Hepburn) and Jude Law (as Errol Flynn) co-starred in The Aviator."],
 ["First best animated feature","shrek","Shrek won the first-ever Academy Award for Best Animated Feature, for 2001."],
 ["Mt sunflower","kansas","Mount Sunflower is the highest point in Kansas."],
 ["Alien sedition act","Adams","The Alien and Sedition Acts were passed under President John Adams in 1798."],
 ["Tales of a 4th grade nothing","judy blume","Tales of a Fourth Grade Nothing was written by Judy Blume."],
 ["Dragnet badge","714","Sergeant Friday's badge number on Dragnet was 714."],
 ["Mt. wannahockaloogie","Finding Nemo","'Mount Wannahockaloogie' is the volcano in the fish tank in Finding Nemo."],
 ["Grand canyon np status","1919","Grand Canyon became a national park in 1919."],
 ["Yogurt origin","turkey","Yogurt originated with the nomadic peoples of what is now Turkey — the word itself is Turkish."],
 ["UPS founding city in 1907","seattle","UPS was founded in Seattle in 1907 as a messenger service."],
 ["Vp in 1975","rockerfeller","Nelson Rockefeller was Vice President in 1975, under Gerald Ford."],
 ["First night baseball game","1935","The first major-league night game was played in 1935, in Cincinnati."],
 ["First contact star trek","Zefram Cochrane","In Star Trek, Zefram Cochrane made humanity's first warp flight and first contact with the Vulcans."],
 ["Shoeless joe","W. P. Kinsella","Shoeless Joe is W. P. Kinsella's novel — the book Field of Dreams was based on."],
 ["Travellin man","ricky nelson","'Travelin' Man' was a No. 1 hit for Ricky Nelson in 1961."],
 ["Brown eyed girl","1967","Van Morrison's 'Brown Eyed Girl' was released in 1967."],
 ["La state year","1812","Louisiana became a state in 1812."],
 ["Fool for the city","foghat","'Fool for the City' is Foghat's signature song (1975)."],
 ["Nebuchadnezzar","20 bottles","A Nebuchadnezzar is a wine bottle holding 20 standard bottles' worth — 15 litres."],
 ["Exxon valdez captain","joe hazelwood","Joseph Hazelwood captained the Exxon Valdez when it ran aground in 1989."],
 ["Stp","scientifically treated petroleum","STP stands for Scientifically Treated Petroleum, the oil-treatment brand."],
 ["Be cool","get shorty","Be Cool is the sequel to Get Shorty, Elmore Leonard's Chili Palmer novels turned films."],
 ["Cuban missile crisis","Khrushchev","Nikita Khrushchev led the Soviet Union through the Cuban Missile Crisis of 1962."],
 ["Hanna-Barbera hound who sang 'Oh My Darling, Clementine'","Huckleberry Hound","Huckleberry Hound, the Hanna-Barbera hound voiced by Daws Butler, was famous for singing 'Oh My Darling, Clementine' in a slow Southern drawl."],
 ["Who voiced the character of Groot in the Guardians of the Galaxy movies?","Vin Diesel","Vin Diesel voices Groot in the Guardians of the Galaxy movies; Bradley Cooper voices Rocket Raccoon."],
 ["The AT&T hostess","lily","Lily is the AT&T store hostess in the long-running ads."],
 ["Herbie","53","Herbie, the Love Bug, races under the number 53."],
 ["Basset hound in Dukes of Hazzard","flash","Flash is Rosco's basset hound in The Dukes of Hazzard."],
 ["Old rough and ready","Taylor","'Old Rough and Ready' was Zachary Taylor's nickname."],
 ["Dice","pips","The dots on dice are called pips."],
 ["34th st","macy's","Macy's famous flagship store stands on 34th Street in New York — home of Miracle on 34th Street."],
 ["Dressed to kill","kiss","Dressed to Kill is a 1975 KISS album."],
 ["Most mlb wins","cy young","Cy Young holds the record for most pitching wins in MLB history: 511."],
 ["Grinch mountain","mt. crumpit","The Grinch lives atop Mount Crumpit, overlooking Whoville."],
 ["Grinch heart","3X","The Grinch's heart grew three sizes that day."],
 ["75 knots","86 mph","75 knots converts to about 86 miles per hour."],
 ["Dow jones","30","The Dow Jones Industrial Average tracks 30 major US companies."],
 ["Poet from chicago","carl sandburg","Carl Sandburg was Chicago's poet — his 1916 poem 'Chicago' calls it the 'City of the Big Shoulders.'"],
 ["2010 olympics womens hockey winner","canada","Canada won the women's hockey gold at the 2010 Vancouver Olympics."],
 ["Vp charles curtis (native american VP)","herbert hoover","Charles Curtis, of Native American heritage, was Vice President under Herbert Hoover."],
 ["Wuthering heights","emily bronte","Wuthering Heights was written by Emily Brontë."],
 ["Sonny crockett partner","rico tubbs","Sonny Crockett's partner in Miami Vice is Ricardo 'Rico' Tubbs."],
 ["Most world cup losses","mexico","Mexico has lost more World Cup matches than any other national team."],
 ["Waterloo in","belgium","Waterloo, where Napoleon met his final defeat in 1815, is in Belgium."],
 ["West german capital","bonn","Bonn was the capital of West Germany from 1949 until reunification."],
 ["Iron man 3 sidekick","harley","Harley Keener is the boy who helps Tony Stark in Iron Man 3."],
 ["Superbowl 38 halftime","JT and Janet","Super Bowl XXXVIII's halftime show starred Justin Timberlake and Janet Jackson — and its famous wardrobe malfunction."],
 ["Pres candidate shot in wisconsin saloon","Theodore Roosevelt","Theodore Roosevelt was shot in Milwaukee, Wisconsin, in 1912 while campaigning — and finished his speech anyway."],
 ["Kirk gibson","tigers and dodgers","Kirk Gibson starred for the Detroit Tigers and hit his legendary 1988 World Series homer for the Los Angeles Dodgers."],
 ["Willy Wonka first to fail","Augustus Gloop","Augustus Gloop is the first child to fail in Willy Wonka's factory."],
 ["Killed osiris","set","In Egyptian myth, Set killed his brother Osiris."],
 ["Ratio of circumference to diameter","pi","Pi is the ratio of a circle's circumference to its diameter."],
 ["Canadian province","manitoba","Manitoba is the Canadian province named in the clue."],
 ["2023 world chess champ","Ding Liren","Ding Liren became World Chess Champion in 2023."],
 ["John Steed and Emma Peel","The Avengers","John Steed and Emma Peel are the heroes of the 1960s British TV series The Avengers."],
 ["Space Age Love Song","Flock of Seagulls","'Space Age Love Song' is by A Flock of Seagulls."],
 ["ARDS","Acute Respiratory Distress Syndrome","ARDS stands for Acute Respiratory Distress Syndrome."],
 ["Blue Angels introduced","1946","The Blue Angels, the Navy's flight demonstration team, were formed in 1946."],
 ["Youngest Daytona 500 winner","Trevor Bayne","Trevor Bayne won the 2011 Daytona 500 at age 20 — the youngest winner ever, the day after his birthday."],
 ["2 mammals that lay eggs","platypus and echidna","The platypus and the echidna are the egg-laying mammals (monotremes) — along with the echidna's several species."],
 ["Islets of Langerhans produce hormones in","pancreas","The islets of Langerhans in the pancreas produce insulin and other hormones."],
 ["Seafood chain started in FL in 1968","Red Lobster","Red Lobster was founded in Lakeland, Florida, in 1968."],
 ["Dog in Crackerjack box","Bingo","Bingo is the dog on the Cracker Jack box, alongside Sailor Jack."],
 ["Doberman in Magnum PI","Zeus and Apollo","Higgins' Dobermans in Magnum, P.I. are Zeus and Apollo."],
 ["Full House Dog","Comet","Comet is the Tanner family's golden retriever on Full House."],
 ["What song does Schroeder play?","Fur Elise","Schroeder plays Beethoven's 'Für Elise' on his toy piano in A Charlie Brown Christmas."],
 ["State with most registered boats","FL","Florida has the most registered boats of any US state."],
 ["1313 S. Harbor Blvd","Disneyland","1313 South Harbor Boulevard, Anaheim, is Disneyland's address."],
 ["Easton Assassin","Larry Holmes","Larry Holmes, from Easton, Pennsylvania, was 'The Easton Assassin.'"],
 ["Don't pee and tell me its raining book","Judge Judy","'Don't Pee on My Leg and Tell Me It's Raining' is Judge Judy's book."],
 ["Landlocked by landlocked countries","Liechtenstein","Liechtenstein is doubly landlocked — surrounded only by landlocked countries (Switzerland and Austria)."],
 ["Who created Napster?","Shawn Fanning","Shawn Fanning created Napster in 1999 (Sean Parker was a co-founder)."],
 ["To Kill a Mockingbird set in what fictional AL city","Maycomb","To Kill a Mockingbird is set in the fictional Maycomb, Alabama."],
 ["Since 1967 Sweden switched to driving on what side","right","In 1967 Sweden switched from driving on the left to driving on the right."],
 ["First line of Back in the USSR","Flew in from Miami","Back in the U.S.S.R. opens: 'Flew in from Miami Beach BOAC.'"],
 ["250 year lifespan","greenland shark","The Greenland shark can live around 250 years or more — the longest-lived vertebrate known."],
 ["Leon Czolgosz famous for","assassinating McKinley","Leon Czolgosz assassinated President William McKinley in Buffalo in 1901."],
 ["Michael Keaton movie re cars in Japan","Gung Ho","Gung Ho (1986) stars Michael Keaton at a Japanese-run car plant in America."],
 ["OP for invading Russia","Operation Barbarossa","Operation Barbarossa was Nazi Germany's 1941 invasion of the Soviet Union."],
 ["How many states border great lakes?","8","Eight US states border the Great Lakes."],
 ["Consecutive games with a hit for DiMaggio","56","Joe DiMaggio's hitting streak ran 56 consecutive games in 1941."],
 ["Bird with longest wingspan","Wandering albatross","The wandering albatross has the longest wingspan of any living bird, up to 3.5 metres."],
 ["The Wanderer","Dion","'The Wanderer' was Dion's 1961 hit."],
 ["DNS","Domain Name System","DNS stands for Domain Name System — the internet's phone book."],
 ["Munster's pet bat","Igor","Igor is Grandpa Munster's pet bat in The Munsters."],
 ["Wyatt's 2 brothers","Virgil and Morgan","Wyatt Earp's brothers at the OK Corral were Virgil and Morgan Earp."],
 ["John Rutsey original drummer of","Rush","John Rutsey was the original drummer of Rush, before Neil Peart."],
 ["Nothing like a good piece of hickory line from what movie","Pale Rider","'Nothing like a good piece of hickory' is Clint Eastwood's line in Pale Rider."],
 ["Churchill won Nobel for","Literature","Winston Churchill won the Nobel Prize in Literature in 1953."],
 ["What gives diamonds blue color?","Boron","Traces of boron give blue diamonds their colour."],
 ["First in R&R and Country HOF","Johnny Cash","Johnny Cash was the first artist inducted into both the Rock and Roll and Country Music Halls of Fame."],
 ["Vulcanization is adding what to rubber","sulfur","Vulcanization strengthens rubber by adding sulfur — Goodyear's 1839 discovery."],
 ["Julia Roberts movie","Mystic Pizza","Mystic Pizza (1988) was Julia Roberts' breakout film."],
 ["Tyson's first belt","Trevor Berbick","Mike Tyson won his first world title by beating Trevor Berbick in 1986, becoming the youngest heavyweight champion ever."],
 ["Fantastic Mr. Fox author","Roald Dahl","Fantastic Mr Fox was written by Roald Dahl."],
 ["1938 legislation that set 40 hr workweek and minimum wage","Fair Labor Standards Act","The Fair Labor Standards Act of 1938 set the federal minimum wage and the 40-hour week."],
 ["Sirius is in","Canis Major","Sirius, the brightest star in the sky, is in Canis Major, the Great Dog."],
 ["Microscope manufacturer","Carl Zeiss","Carl Zeiss is the famed German microscope and optics maker."],
 ["Risk/Life/Monopoly","Parker Bros","Parker Brothers published Risk, The Game of Life, and Monopoly (in the US) for decades."],
 ["Prohibition amendment","18th","The 18th Amendment launched Prohibition in 1920 (and the 21st repealed it in 1933)."],
 ["Oktoberfest started because of","wedding","Oktoberfest began in 1810 as the celebration of a Bavarian royal wedding."],
 ["Black Elk Peak","S. Dakota","Black Elk Peak, the highest point east of the Rockies, is in South Dakota."],
 ["Gerald Ford middle name","Rudolph","Gerald Ford was born Leslie Lynch King Jr. and later took his stepfather's name; his middle name as president was Rudolph."],
 ["Racehorses get what buried","head, heart, hooves","Tradition buries a great racehorse's head, heart, and hooves — its looks, its courage, and its speed."],
 ["Butch Cassidy home state","UT","Butch Cassidy was born and raised in Utah."],
 ["What President's kids brought pony upstairs in WH?","Theodore Roosevelt","Theodore Roosevelt's children famously brought their pony Algonquin upstairs in the White House elevator to cheer up a sick brother."],
 ["Bob Seger album","Against the wind","Against the Wind is Bob Seger's 1980 album and title song."],
 ["Capital means Black Pool","Dublin","Dublin's name comes from the Irish 'Dubh Linn' — 'black pool.'"],
 ["First triple double for whole NBA season","Oscar Robertson","Oscar Robertson was the first player to average a triple-double for an entire NBA season (1961–62)."],
 ["Word spelled same forwards, backwards and upside down","noon","'NOON' reads the same forwards, backwards, and upside down in capital letters."],
 ["If I die Young singer","The Band Perry","'If I Die Young' was The Band Perry's breakthrough hit (2010)."],
 ["TV show in Charming, CA","SOA","Sons of Anarchy is set in the fictional town of Charming, California."],
 ["Dewey's first name","Melvil","Melvil Dewey created the Dewey Decimal system for libraries."],
 ["First Secretary of State","Jefferson","Thomas Jefferson was the first US Secretary of State, under Washington."],
 ["Soprano maiden name","DeAngelis or Moltesanti","Carmela Soprano's maiden name is DeAngelis (Moltesanti is Dickie and Christopher's family name)."],
 ["Don't call me Shirley","Striker","'Surely you can't be serious' — 'I am serious, and don't call me Shirley' — is Ted Striker's exchange in Airplane!"],
 ["Country largest producer of hazelnuts","Turkey","Turkey produces most of the world's hazelnuts."],
 ["Transformers voice of Sentinel Prime","Leonard Nimoy","Leonard Nimoy voiced Sentinel Prime in Transformers: Dark of the Moon."],
 ["Alcatraz opened in","1930's","Alcatraz opened as a federal prison in 1934."],
 ["Country that drinks the most tea per capita","Turkey","Turkey drinks more tea per person than any other country."],
 ["Lesane Crooks is","Tupac Shakur","Lesane Parish Crooks was Tupac Shakur's birth name."],
 ["Moshe Katsav","Israel president","Moshe Katsav was president of Israel from 2000 to 2007."],
 ["Nolan Bushnell (Chuck & Cheese) launched","Atari","Nolan Bushnell founded Atari — and later Chuck E. Cheese."],
 ["US state with most eruptions","Alaska","Alaska has had more volcanic eruptions than any other US state."],
 ["Walk Away singer","Kelly Clarkson","'Walk Away' is a Kelly Clarkson single from Breakaway."],
 ["Data cat's name in Star Trek","Spot","Data's cat in Star Trek: The Next Generation is named Spot."],
 ["#1 spot on Billboard in 4 decades","Mariah Carey","Mariah Carey has topped the Billboard Hot 100 in four different decades."],
 ["Resort in Dirty Dancing","Kellerman's","Dirty Dancing is set at Kellerman's resort in the Catskills."],
 ["Roman calendar began in","March","The early Roman calendar began the year in March — which is why September is named for 'seven.'"],
 ["Bartender video game","Tapper","Tapper is the classic arcade game of serving drinks as a bartender."],
 ["George Wallace governor of","Alabama","George Wallace was the governor of Alabama, famous for his stand in the schoolhouse door."],
 ["What was time machine in OG Back to Future script?","fridge","In an early Back to the Future script, the time machine was a refrigerator, not a DeLorean."],
 ["12th sign of zodiac","pisces","Pisces is the twelfth sign of the zodiac."],
 ["President who was bartender","Lincoln","Abraham Lincoln once co-owned a tavern and worked as a bartender in New Salem, Illinois."],
 ["WIFI password in Dr Strange","Shamballa","In Doctor Strange, the Kamar-Taj Wi-Fi password is 'Shamballa' — 'try not to laugh,' as Wong says."],
 ["JD Salinger full name","Jerome David","J. D. Salinger's full name was Jerome David Salinger."],
 ["Everclear song \"dreaming of the west coast\"","Santa Monica","Everclear's 'Santa Monica' sings of 'swimming past the breakers, watching the world die' on the West Coast."],
 ["Halcyon days meaning","calm","'Halcyon days' are calm, peaceful days — from the kingfisher of Greek myth."],
 ["Thurmont facility known as","Camp David","Camp David, the presidential retreat near Thurmont, Maryland."],
 ["Lady Byng trophy","hockey","The Lady Byng Trophy is the NHL's award for sportsmanship and gentlemanly play."],
 ["Forfeit score in MLB","nine to 0","A forfeited baseball game is officially scored 9–0."],
 ["Second-most abundant element in universe after hydrogen","helium","Helium is the second-most abundant element in the universe, after hydrogen."],
 ["Last battle of whites and indians","wounded knee","Wounded Knee (1890) was the last major armed clash between US forces and Native Americans."],
 ["Atlas mountains in what continet","Africa","The Atlas Mountains run across northwestern Africa."],
 ["The Great Compromiser speaker of house","Clay","Henry Clay, the Speaker of the House, was known as 'The Great Compromiser.'"],
 ["Lake Vostok","Antarctica","Lake Vostok lies buried under kilometres of ice in Antarctica."],
 ["First Japanese car produced in US","Honda Accord","The Honda Accord (1982, Ohio) was the first Japanese car built in the United States."],
 ["Shoat is baby","pig","A shoat is a young pig."],
 ["Who wrote Ferris Bueller?","John Hughes","John Hughes wrote and directed Ferris Bueller's Day Off."],
 ["Seattle Band in Singles","Pearl Jam","Pearl Jam is the Seattle band featured in the film Singles."],
 ["NHL team was once Colorado Rockies","NJ Devils","The New Jersey Devils began life as the Colorado Rockies before moving east."],
 ["Green Hornet's car","black beauty","The Green Hornet's car is the Black Beauty."],
 ["Cats cradle author","kurt vonnegut","Cat's Cradle was written by Kurt Vonnegut."],
 ["Henry Hudson sailed for what country","Dutch - Netherlands","Henry Hudson sailed for the Netherlands (the Dutch East India Company) on his famous 1609 voyage."],
 ["3rd most expensive monopoly property","Marvin Gardens","Marvin Gardens is the third-most expensive Monopoly property (after Park Place and Boardwalk)."],
 ["Princess Bride MLT","Mutton","Miracle Max's MLT is a 'mutton, lettuce and tomato' sandwich in The Princess Bride."],
 ["Mama Cass died of","heart attack","Mama Cass Elliot died of a heart attack in 1974 (the ham-sandwich story is a myth)."],
 ["Peary the first to reach","N. Pole","Robert Peary claimed to be first to reach the North Pole in 1909."],
 ["Strigiform order of what animals","owls","Strigiformes is the scientific order of the owls."],
 ["What year was Gray's Anatomy published?","1859","Gray's Anatomy, the classic medical textbook, was first published in 1858–59."],
 ["Tennis Grand Slam twice","Rod Laver","Rod Laver is the only player to win the calendar-year Grand Slam twice (1962 and 1969)."],
 ["Sandlot dog","Hercules","Hercules is the huge dog — 'the Beast' — in The Sandlot."],
 ["Hanami is yearly celebration of","cherry blossom","Hanami is Japan's yearly celebration of cherry blossoms."],
 ["How much water can camel drink in 13 mins?","30 gallons","A thirsty camel can drink about 30 gallons of water in roughly ten minutes."],
 ["Who voiced Mr. Magoo?","Jim Backus","Jim Backus voiced the near-sighted Mr. Magoo."],
 ["Dog in National Lampoon's Vacation","Dinky","Dinky is the Griswolds' ill-fated dog in National Lampoon's Vacation."],
 ["Maxwell Smart's number","86","Maxwell Smart is Agent 86 in Get Smart."],
 ["MLK's original first name","michael","Martin Luther King Jr. was born Michael King Jr.; his father changed both their names in honour of Martin Luther."],
 ["What president established NASA?","Eisenhower","President Eisenhower established NASA in 1958."],
 ["Who originally sang \"Always there to remind me\"?","Dionne Warwick","Dionne Warwick first recorded '(There's) Always Something There to Remind Me' in 1963."],
 ["Head of MI6 letter","C","The head of MI6 is known by the single letter 'C' — for Chief."],
 ["First black senator","Hiram Revels","Hiram Revels of Mississippi was the first Black US senator, seated in 1870."],
 ["Last year france executed via guillotine","1977","France's last guillotine execution was in 1977."],
 ["Idlewild airport now named","JFK","New York's Idlewild Airport was renamed JFK after President Kennedy's assassination."],
 ["Literary theme of recurring symbolic significance","motif","A recurring symbolic theme in a work is a motif."],
 ["Musical interval b/w notes 12 semi-tones apart","octave","Twelve semitones make an octave."],
 ["Dwayne Johnson played at","University of Miami","Dwayne 'The Rock' Johnson played college football at the University of Miami."],
 ["Marjory Douglas river of grass national park","Everglades","Marjory Stoneman Douglas called the Everglades a 'river of grass' and fought to protect them."],
 ["First all star game in 1933","Comiskey Park","The first MLB All-Star Game was played in 1933 at Chicago's Comiskey Park."],
 ["Spartacus love interest","Jean Simmons","Jean Simmons played Varinia, Spartacus' love interest, in the 1960 film Spartacus."],
 ["Trivia names round — name the celebrity: J•••• C•••••","Jason Clarke","The pattern fits Jason Clarke, the Australian actor of Zero Dark Thirty and Oppenheimer."],
 ["Trivia names round — name the celebrity: A•••• W•••••••","Anson Williams","The pattern fits Anson Williams, Potsie Weber on Happy Days."],
 ["Trivia names round — name the celebrity: T•• D••••••","The Duggars","The pattern fits the Duggar family of 19 Kids and Counting."],
].forEach(function(p){ EXPLAIN_EXTRA[norm(p[0])+"|"+norm(p[1])]=p[2]; });
/* Verified explanations for the LeAnn Rimes questions added in the
   2026-10-25 expansion — the LeAnn round's pairs carry no fact field,
   so their whys register here, keyed exactly as explainFor looks
   them up. One verified sentence each; nothing invented. */
[
 ["Which LeAnn Rimes album was released in 1998?","Sittin' on Top of the World","Her 1998 album 'Sittin' on Top of the World' included the singles 'Commitment' and 'Looking Through Your Eyes'."],
 ["In which year did LeAnn Rimes release the album 'Twisted Angel'?","2002","'Twisted Angel', released in 2002, was her move toward pop and included 'Life Goes On'."],
 ["In which year did LeAnn Rimes release the album 'This Woman'?","2005","'This Woman' (2005) marked her return to country and produced four chart singles."],
 ["In which year did LeAnn Rimes release the album 'Family'?","2007","She co-wrote most of 'Family' (2007), her most personal album to that point."],
 ["In which year did LeAnn Rimes release the album 'Lady & Gentlemen'?","2011","On 'Lady & Gentlemen' (2011) she re-recorded classic country songs first made famous by men."],
 ["In which year did LeAnn Rimes release the album 'Spitfire'?","2013","'Spitfire' (2013) was her final album for Curb Records."],
 ["In which year did LeAnn Rimes release the album 'Remnants'?","2016","'Remnants' (2016) was her first album released through RCA UK."],
 ["In which year did LeAnn Rimes release the album 'God's Work'?","2022","'God's Work' (2022) is a spiritually themed album she wrote and produced."],
 ["In which year did LeAnn Rimes release her self-titled covers album 'LeAnn Rimes'?","1999","Her self-titled 1999 album was a set of classic country covers."],
 ["In which year did LeAnn Rimes release the album 'Whatever We Wanna'?","2006","'Whatever We Wanna' (2006) leaned pop-rock and was released internationally first."],
 ["In which year did LeAnn Rimes release the inspirational album 'You Light Up My Life: Inspirational Songs'?","1997","Her 1997 inspirational album followed the breakthrough success of 'Blue' and 'How Do I Live'."],
 ["The LeAnn Rimes song 'Probably Wouldn't Be This Way' appears on which album?","This Woman","The song is a track on 'This Woman' (2005), her return-to-country album."],
 ["The LeAnn Rimes singles 'What Have I Done' and 'Borrowed' appear on which album?","Spitfire","Both songs appear on 'Spitfire' (2013), her last Curb Records album."],
 ["The LeAnn Rimes song 'Life Goes On' is a single from which album?","Twisted Angel","'Life Goes On' was the lead single from 'Twisted Angel' (2002)."],
 ["The LeAnn Rimes song 'Nothin' 'bout Love Makes Sense' is on which album?","This Woman","The song was a single from 'This Woman' (2005)."],
 ["The LeAnn Rimes song 'Something's Gotta Give' is on which album?","This Woman","'Something's Gotta Give' was a single from 'This Woman' (2005)."],
 ["The LeAnn Rimes song 'Swingin'' is on which album?","Lady & Gentlemen","Her cover of John Anderson's 'Swingin'' is on 'Lady & Gentlemen' (2011)."],
 ["The LeAnn Rimes song 'Long Live Love' is on which album?","Remnants","'Long Live Love' is a track on 'Remnants' (2016)."],
 ["LeAnn Rimes recorded the duet 'Written in the Stars' with which singer?","Elton John","The duet comes from Elton John's 'Aida' album (1999)."],
 ["LeAnn Rimes recorded the duet 'Last Thing on My Mind' with which Irish singer?","Ronan Keating","The 2004 duet paired her with the former Boyzone singer Ronan Keating."],
 ["LeAnn Rimes recorded the duet 'Till We Ain't Strangers Anymore' with which rock band?","Bon Jovi","The duet appears on Bon Jovi's 'Lost Highway' (2007)."],
 ["LeAnn Rimes sang 'How Do I Live' over the closing credits of which 1997 film?","Con Air","Diane Warren wrote 'How Do I Live' for the 1997 film 'Con Air'."],
 ["LeAnn Rimes appears at the end of which 2000 film, singing on the bar?","Coyote Ugly","She cameos as herself at the end of 'Coyote Ugly' (2000), performing on the bar."],
 ["LeAnn Rimes starred in which 1997 television film, playing a young country singer?","Holiday in Your Heart","The 1997 TV film was adapted from her holiday book of the same name."],
 ["LeAnn Rimes starred in which 2009 television film, based on a Nora Roberts novel?","Northern Lights","The 2009 TV film was based on Nora Roberts' novel of the same name."],
 ["LeAnn Rimes starred in which 2018 Hallmark Christmas film?","It's Christmas Eve","The 2018 Hallmark movie paired her with Tyler Hynes."],
 ["At the 1997 Grammy Awards, LeAnn Rimes won Best New Artist and which other award for 'Blue'?","Best Female Country Vocal Performance","At the 1997 Grammys she won both awards at just 14 years old."],
 ["Who wrote the song 'Blue', LeAnn Rimes' breakthrough hit?","Bill Mack","DJ and songwriter Bill Mack wrote 'Blue' decades before her recording made it a hit."],
 ["In which US state was LeAnn Rimes born?","Mississippi","She was born in Jackson, Mississippi, and raised in Texas."],
 ["LeAnn Rimes was born in which Mississippi city?","Jackson","Jackson, Mississippi is her birthplace; she grew up in Garland, Texas."],
 ["LeAnn Rimes first appeared on which television talent show as a young child?","Star Search","She sang on 'Star Search' as a child, before her recording career."],
 ["LeAnn Rimes was a coach on the thirteenth series of which UK singing competition in 2024?","The Voice UK (Series 13)","She joined 'The Voice UK' as a coach for its thirteenth series in 2024."],
 ["'Can't Fight the Moonlight', sung by LeAnn Rimes, was written by which songwriter?","Diane Warren","Prolific songwriter Diane Warren wrote it for 'Coyote Ugly' (2000)."],
 ["Which LeAnn Rimes song was the theme to the film 'Coyote Ugly'?","Can't Fight the Moonlight","'Can't Fight the Moonlight' was written for 'Coyote Ugly' (2000) and became a worldwide hit."],
 ["Which LeAnn Rimes song shares its name with her 2001 album?","I Need You","Her 2001 compilation album 'I Need You' took its name from the title track."],
 ["The LeAnn Rimes song 'Looking Through Your Eyes' was recorded for which 1998 animated film?","Quest for Camelot","The song plays over the credits of the 1998 animated film 'Quest for Camelot'."],
 ["LeAnn Rimes' first record label, which signed her as a teenager, was what?","Curb Records","Curb Records signed her after 'Blue'; she stayed with the label until 'Spitfire' in 2013."],
 ["How old was LeAnn Rimes when 'Blue' was released in 1996?","13","'Blue' was released in 1996, when she was 13."],
 ["LeAnn Rimes won the Grammy Award for Best New Artist in which year?","1997","She won Best New Artist at the 1997 Grammy Awards, aged 14."],
 ["Which LeAnn Rimes Christmas album was released in 2015?","Today Is Christmas","'Today Is Christmas' is her 2015 holiday album."],
 ["LeAnn Rimes contributed the song 'We Can' to which 2003 film's soundtrack?","Legally Blonde 2","'We Can' was written for 'Legally Blonde 2: Red, White & Blonde' (2003)."]
].forEach(function(p){ EXPLAIN_EXTRA[norm(p[0])+"|"+norm(p[1])]=p[2]; });
/* ---- Verified whys, third pass (2026-11-10) ----
   Hand-written one-sentence explanations for sheet rows that
   still showed none, keyed exactly like the passes above
   (norm(raw clue) + "|" + norm(answer)). Each was written
   from the clue, its verified answer, and the well-established
   fact behind it. Rows whose sheet answer could not be
   verified — or conflicts with the record (a mis-dated season,
   a wrong team) — stay blank rather than carry an invented
   why: 342 of the 436 blank DJ rows are filled here; the rest
   remain blank by that rule. */
[
 ["Han Solo smuggling what in movie", "Rathtar", "Han Solo was smuggling rathtars \u2014 dangerous tentacled creatures \u2014 aboard his freighter in The Force Awakens."],
 ["AFI Youngest lifetime achievement", "Tom Hanks", "Tom Hanks was just 45 when he received the AFI Life Achievement Award in 2002 \u2014 still its youngest-ever recipient."],
 ["Come as you are, as an old", "enemy", "In Nirvana's 'Come As You Are', the singer offers himself 'as a friend, as an old enemy'."],
 ["Gladiolas are", "Iris", "Gladioli belong to the iris family, Iridaceae."],
 ["Song from Back to the Future dance", "Earth Angel", "'Earth Angel' is the song performed at the Enchantment Under the Sea dance in Back to the Future."],
 ["Top 12 finalist from Alabama", "Taylor Hicks", "Taylor Hicks, from Birmingham, Alabama, won Season 5 of American Idol."],
 ["Didn\u2019t play for the Yankees", "Sandy Koufax", "Sandy Koufax spent his whole career with the Dodgers \u2014 he never played for the Yankees."],
 ["Northern Exposure town", "Cicely Alaska", "Northern Exposure is set in the fictional town of Cicely, Alaska."],
 ["Dodgeball coach young", "Hank Azaria", "Hank Azaria plays the young Patches O'Houlihan in Dodgeball."],
 ["Flag of Turkey", "Turkey", "The flag is Turkey's \u2014 a white crescent and star on a red field."],
 ["Bob Marley and Donkey Kong", "1981", "1981 was the year Bob Marley died \u2014 and the year the Donkey Kong arcade game debuted."],
 ["Not OG flintstones vitamin", "Betty", "Betty was famously left out of Flintstones Chewable Vitamins until a 1995 fan campaign put her in."],
 ["Cumberland Pass", "Appalachian Mountains", "The Cumberland Gap crosses the Appalachian Mountains where Kentucky, Virginia, and Tennessee meet."],
 ["Danger Mouse sidekick", "Hamster", "Danger Mouse's sidekick Penfold is a hamster."],
 ["Steel Magnolias -Ouiser Boudreaux", "Shirley MacLaine", "Shirley MacLaine plays the cantankerous Ouiser Boudreaux in Steel Magnolias."],
 ["Airborne does what", "prevents colds", "Airborne is a dietary supplement marketed to support the immune system and help ward off colds."],
 ["Rita Glossner what show", "The Middle", "Rita Glossner is the Hecks' nightmare neighbour on The Middle, played by Brooke Shields."],
 ["19873 mph =", "476,952 miles/day", "19,873 miles per hour times 24 hours comes to 476,952 miles per day."],
 ["Wedding crashers last name", "Cleary", "The family whose wedding is crashed in Wedding Crashers is the Cleary family."],
 ["Jones diary signed by", "Hitler", "In Indiana Jones and the Last Crusade, Hitler signs the Grail diary, mistaking it for an autograph book."],
 ["Waldo the wizard tried to replace", "Lucky", "Waldo the Wizard was briefly tried in the 1970s as the Lucky Charms mascot in place of Lucky the Leprechaun."],
 ["Janet's last name in 3s company", "Wood", "Janet Wood is the character played by Joyce DeWitt on Three's Company."],
 ["Harding met his mistress in", "closet", "President Warren G. Harding's affair with Nan Britton famously included trysts in a White House closet."],
 ["Lincoln", "secret service", "Lincoln signed the Secret Service into being on the day he was assassinated \u2014 to fight counterfeiting, not to guard presidents."],
 ["Sky blue h2o", "Hamm's", "Hamm's beer was famous for its slogan 'From the Land of Sky Blue Waters'."],
 ["Petticoat junction", "Kate Bradley", "Kate Bradley, played by Bea Benaderet, is the widowed mother who runs the Shady Rest Hotel in Petticoat Junction."],
 ["Goal posts", "18'6\"", "NFL goalposts stand 18 feet 6 inches apart."],
 ["York patties", "Hershey's", "York Peppermint Patties have been made by Hershey's since 1988."],
 ["Bolt", "Travolta", "John Travolta voices Bolt, the dog star of the animated film Bolt (2008)."],
 ["Commander cody", "hotrod lincoln", "'Hot Rod Lincoln' is the signature song of Commander Cody and His Lost Planet Airmen."],
 ["White and nerdy", "straight outta lynwood", "'White & Nerdy' appears on Weird Al Yankovic's 2006 album 'Straight Outta Lynwood'."],
 ["Manning", "Papa John's", "Peyton Manning starred in Papa John's adverts and owned Papa John's franchises in the Denver area."],
 ["Baron of renfrew", "charles, now william", "Baron Renfrew is one of the Prince of Wales's titles \u2014 held by Charles, and now by William."],
 ["Home sweet home", "Motley Crue", "'Home Sweet Home' is a M\u00f6tley Cr\u00fce power ballad from 1985."],
 ["Best selling live album", "Garth Brooks", "Garth Brooks' 'Double Live' is the best-selling live album in US history."],
 ["Bokononism - cats cradle", "Kurt Vonnegut", "Bokononism is the fictional religion at the heart of Kurt Vonnegut's novel Cat's Cradle."],
 ["Brendan walsh works in", "The Peach Pit", "Brandon Walsh worked at the Peach Pit diner in Beverly Hills, 90210."],
 ["Interest rate theory", "fisher effect", "The Fisher effect, named for economist Irving Fisher, says nominal interest rates rise point-for-point with expected inflation."],
 ["Wahlberg in The Fighter", "Micky Ward", "Mark Wahlberg plays boxer Micky Ward in The Fighter."],
 ["What states border Saskatchewan", "Montana and North Dakota", "Montana and North Dakota are the two US states that border Saskatchewan."],
 ["Newsroom ACN", "Atlantis Cable Network", "In The Newsroom, ACN is the Atlantis Cable News network, where Will McAvoy anchors."],
 ["What a fool believes, he sees", "the wise man has the power", "The Doobie Brothers' 'What a Fool Believes' runs: 'What a fool believes he sees, no wise man has the power to reason away.'"],
 ["10th best athlete of 20th C.", "Babe Didrikson", "ESPN's SportsCentury list ranked Babe Didrikson Zaharias the 10th-greatest North American athlete of the 20th century."],
 ["Millionaire host", "cedric", "Cedric the Entertainer hosted the syndicated Who Wants to Be a Millionaire in 2013\u201314."],
 ["Palin stalker", "Joe McGinniss", "Author Joe McGinniss rented the house next door to Sarah Palin in Wasilla while writing a book about her."],
 ["Fast times song", "Moving in Stereo - The Cars", "The Cars' 'Moving in Stereo' plays over the famous pool scene in Fast Times at Ridgemont High."],
 ["2 presidents born in vermont", "Arthur and Coolidge", "Chester A. Arthur and Calvin Coolidge are the two US presidents born in Vermont."],
 ["Bass pro shop opened", "1972", "Bass Pro Shops began in 1972, when Johnny Morris started selling tackle out of his father's Springfield store."],
 ["Snake river starts in", "Wyoming", "The Snake River rises in Wyoming, in the Yellowstone country, before flowing west to join the Columbia."],
 ["Vp in 1975", "Rockefeller", "Nelson Rockefeller was vice president under Gerald Ford from 1974 to 1977 \u2014 so he held the post in 1975."],
 ["Fine pix camera", "Fuji", "FinePix is Fujifilm's long-running line of digital cameras."],
 ["Dr foreman", "Omar Epps", "Omar Epps plays Dr. Eric Foreman on House."],
 ["Landlocked", "Moldova", "Moldova is a landlocked country in Eastern Europe, between Romania and Ukraine."],
 ["Home album", "Daughtry", "'Home' is a hit song by Daughtry, the band fronted by Chris Daughtry."],
 ["Nirvana lyric \"as an old\"", "enemy", "In Nirvana's 'Come As You Are', the singer offers himself 'as a friend, as an old enemy'."],
 ["Marshas nose", "Peter", "In The Brady Bunch, Peter Brady breaks Marcia's nose with a football."],
 ["Pretty in pink", "Psychedelic Furs", "'Pretty in Pink' is a Psychedelic Furs song that gave the 1986 film its title."],
 ["Bucharest", "Romania", "Bucharest is the capital of Romania."],
 ["Income tax quote", "Einstein", "The line 'The hardest thing in the world to understand is the income tax' is attributed to Albert Einstein."],
 ["Reggie white's first team", "Eagles", "Reggie White's NFL career began with the Philadelphia Eagles in 1985, after two seasons in the USFL."],
 ["Cousin eddies dog", "Snot", "Cousin Eddie's Rottweiler in National Lampoon's Christmas Vacation is named Snots."],
 ["Castle lager", "South Africa", "Castle Lager is South Africa's best-known lager, brewed there since the 1890s."],
 ["Carl denham in king kong", "jack black", "Jack Black plays filmmaker Carl Denham in the 2005 film King Kong."],
 ["Crazy horse died in", "Nebraska", "Crazy Horse died in 1877 at Fort Robinson, Nebraska, after surrendering there."],
 ["20 in monopoly", "green", "In classic Monopoly money, the $20 bills are green."],
 ["5 superbowls all losses", "gale gilbert", "Gale Gilbert is the only player to sit on the roster of five straight Super Bowl\u2013losing teams \u2014 four Bills and one Chargers."],
 ["Cars drive in", "The Cozy Cone", "The Cozy Cone is the motel in Radiator Springs in the film Cars, its rooms shaped like traffic cones."],
 ["Phineas ferb", "Disney", "Phineas and Ferb is a Disney animated series about two stepbrothers' summer inventions."],
 ["Once more you open the door", "heart will go on", "'Once more, you open the door' is a line from 'My Heart Will Go On', the Titanic theme."],
 ["Hypophosphatasia", "bones", "Hypophosphatasia is a rare inherited disorder that weakens bones by preventing proper mineralisation."],
 ["Muriels wedding favorite band", "ABBA", "Muriel's Wedding is built around ABBA's music \u2014 Muriel is an obsessed ABBA fan."],
 ["Stop the insanity", "Susan Powter", "Susan Powter was the 1990s fitness personality famous for the catchphrase 'Stop the insanity!'"],
 ["Good News first album", "Megan Thee Stallion", "'Good News' (2020) is Megan Thee Stallion's debut studio album."],
 ["Spell Zach's name correctly", "Zach G-a-l-i-f-i-a-n-a-k-i-s", "Zach Galifianakis is the comedian and actor of The Hangover films."],
 ["How many hits does it take to sink a Cruiser in Battleship", "3", "In Battleship, the cruiser occupies three spaces, so three hits sink it."],
 ["Gil Grissom in CSI", "William Petersen", "William Petersen plays Gil Grissom, the lead investigator on CSI: Crime Scene Investigation."],
 ["Malcolm in the middle drug store", "Lucky Aide", "Lois works at the Lucky Aide drugstore in Malcolm in the Middle."],
 ["National Monument between Canal, Decatur, Rampart and Esplanade", "French Quarter", "Canal, Decatur, Rampart, and Esplanade are the four streets that bound New Orleans' French Quarter."],
 ["Not an official language in PNG", "spanish", "Papua New Guinea's official languages include English and Tok Pisin \u2014 Spanish is not among them."],
 ["Grand Theft Auto director 1977", "Ron Howard", "The 1977 film Grand Theft Auto was Ron Howard's directorial debut."],
 ["Movie \"ghost who walks with man cannot die\"", "The Phantom", "The Phantom is billed as 'the Ghost Who Walks' \u2014 the hero who, legend says, cannot die."],
 ["Alvin wants what for xmas", "Hula Hoop", "In 'The Chipmunk Song (Christmas Don't Be Late)', the one thing Alvin asks for is a hula hoop."],
 ["Art Ross trophy", "Hockey", "The Art Ross Trophy is hockey's award for the NHL's top point scorer each season."],
 ["Sean Thornton in Ireland movie", "The Quiet Man", "John Wayne plays ex-boxer Sean Thornton in The Quiet Man (1952), filmed in Ireland."],
 ["Lil Dickey's real name", "Davis Burd", "Lil Dicky's real name is David Burd."],
 ["Rock Star movie band name", "Steel Dragon", "Steel Dragon is the fictional heavy-metal band at the centre of the film Rock Star."],
 ["Tic tac toe with bean bags", "Toss Across", "Toss Across is the tic-tac-toe game played by tossing bean bags onto a flipping board."],
 ["1941 book and 2006 movie", "Flicka", "Flicka began as Mary O'Hara's 1941 novel 'My Friend Flicka' before the 2006 film."],
 ["Not included in Who's on First", "Right Field", "In Abbott and Costello's 'Who's on First?', every position but right field gets a joke name."],
 ["Heart chakra represented by what color", "green", "In the chakra system, the heart chakra (Anahata) is associated with the colour green."],
 ["I love Vermont but it\u2019s the _______", "Season of the sticks", "Noah Kahan's 'Stick Season' opens: 'I love Vermont, but it's the season of the sticks.'"],
 ["NASCAR race that award Grandfather clock", "Martinsville speedway", "Winners at Martinsville Speedway in Virginia receive a grandfather clock as the trophy."],
 ["Wide receiver Sanderson in Any Given Sunday", "Bill Bellamy", "Bill Bellamy plays wide receiver Jimmy Sanderson in Any Given Sunday."],
 ["Before what season were goalposts moved", "1974", "The NFL moved its goalposts from the goal line to the back of the end zone for the 1974 season."],
 ["Game Halma from 1800's", "Chinese checkers", "Chinese checkers was developed in Germany from the 19th-century board game Halma."],
 ["Long Black Train first album", "Josh Turner", "'Long Black Train' is the title track of Josh Turner's 2003 debut album."],
 ["Love Actually final song", "God Only Knows", "Love Actually closes with the Beach Boys' 'God Only Knows' over the airport montage."],
 ["Movie about Mercy Me Bart Millard", "I Can Only Imagine", "I Can Only Imagine tells the story of Bart Millard, lead singer of MercyMe, and the hit song he wrote for his father."],
 ["Only inductee to HOG between 1940-43", "Rogers Hornsby", "Rogers Hornsby was the Baseball Hall of Fame's only inductee in 1942 \u2014 no one was elected in 1940, 1941, or 1943 either."],
 ["Jeff Bridges picture show", "The Last Picture Show", "Jeff Bridges appears in The Last Picture Show (1971), Peter Bogdanovich's film of Larry McMurtry's novel."],
 ["Do your dance, word up singer", "Cameo", "'Word Up!' \u2014 with its 'do your dance' chant \u2014 is by the funk band Cameo."],
 ["Charli XCX Speed Drive samples from", "Mickey", "Charli XCX's 'Speed Drive', from the Barbie film, reworks Toni Basil's 'Mickey'."],
 ["Cody Hoyt in Big Sky is", "Jenny's husband", "Cody Hoyt is Jenny Hoyt's husband in Big Sky."],
 ["1901 batting champion", "Nap Lajoie", "Nap Lajoie won the 1901 American League batting title with a .426 average, still among the highest ever."],
 ["Length of Sunshine Skyway Bridge", "21,000 feet", "The Bob Graham Sunshine Skyway Bridge spans Tampa Bay at roughly four miles \u2014 about 21,000 feet of roadway in total."],
 ["Grace Bay Beach and Cockburn Harbor in", "Turks and Caicos", "Grace Bay Beach (on Providenciales) and Cockburn Harbour (on South Caicos) are both in the Turks and Caicos Islands."],
 ["Niblick golf", "Iron", "A niblick is an old name for a lofted iron in golf, roughly a modern 9-iron."],
 ["Bobby Cox managed what team on 1982", "Blue Jays", "Bobby Cox managed the Toronto Blue Jays from 1982 to 1985, before his long run in Atlanta."],
 ["What Dreams are made of is from", "The Lizzie McGuire Movie", "'What Dreams Are Made Of' is the climactic song from The Lizzie McGuire Movie (2003)."],
 ["Superbowl ad \"When I grow up\"", "Monster.com", "Monster.com's 1999 Super Bowl advert 'When I Grow Up' had children describing dreary grown-up jobs."],
 ["Only country with letters in same keyboard row", "Peru", "Peru can be typed using letters from a single row of a QWERTY keyboard \u2014 the only country name that fits that trick."],
 ["Office Space tv show they watched in his apt", "Kung Fu", "In Office Space, Peter Gibbons spends his evenings watching Kung Fu re-runs in his apartment."],
 ["Tim Dwight return kickoff in SB for what team", "Falcons", "Tim Dwight returned a kickoff 94 yards for a touchdown for the Atlanta Falcons in Super Bowl XXXIII."],
 ["Rain on Me singers", "Gaga and Ariana", "'Rain on Me' (2020) is a duet by Lady Gaga and Ariana Grande."],
 ["First team to be ranked #1 in the College Football Playoff rankings in 2014", "Miss. State", "Mississippi State topped the first-ever College Football Playoff rankings, released in 2014."],
 ["Ironman II director", "Jon Favreau", "Jon Favreau directed Iron Man 2 (2010) and also appears in it as Happy Hogan."],
 ["Canada's prime minister in 2006", "Stephen Harper", "Stephen Harper became Canada's prime minister in February 2006."],
 ["Not ingredient in Campbell's green beans", "almonds", "Campbell's classic green bean casserole is made with green beans, cream of mushroom soup, and crispy fried onions \u2014 no almonds."],
 ["2021 set CBF record for most yards thrown", "Bailey Zappe", "Bailey Zappe threw for 5,967 yards at Western Kentucky in 2021, an FBS single-season record."],
 ["Dof named liberty", "Gerald Ford", "Liberty was the golden retriever who lived in the White House with President Gerald Ford's family."],
 ["Yosemite Sam based on", "Friz Freleng", "Yosemite Sam was modelled on his own director, Friz Freleng \u2014 short, red-headed, and quick-tempered."],
 ["Brenner pass between", "Austria and Italy", "The Brenner Pass crosses the Alps between Austria and Italy."],
 ["Simplon pass between", "Switzerland and Italy", "The Simplon Pass crosses the Alps between Switzerland and Italy."],
 ["Rita Moreno in what detective series", "Rockford Files", "Rita Moreno won an Emmy for her guest appearance on The Rockford Files."],
 ["Chitty chitty bang bang", "four-fendered friend", "The title song of Chitty Chitty Bang Bang calls the car 'our four-fendered friend'."],
 ["Lord Stanley of", "Preston", "The Stanley Cup was donated by Lord Stanley of Preston, Canada's governor general in the 1890s."],
 ["First Monkees to leave band", "Peter Tork", "Peter Tork was the first member to leave the Monkees, departing at the end of 1968."],
 ["Hair so big, full of secrets quote from", "Mean Girls", "The line 'That's why her hair is so big \u2014 it's full of secrets' is from Mean Girls."],
 ["First two songs were #1 and #2 hits in top 100", "Iggy Azalea", "In 2014 Iggy Azalea held the top two spots on the Hot 100 at once, with 'Fancy' at No. 1 and 'Problem' at No. 2."],
 ["Host of Card Shark", "Joel McHale", "Joel McHale hosted the 2019 revival of Card Sharks."],
 ["Rice Krispy treats 1964 jingle by", "Rolling Stones", "In 1964 the Rolling Stones recorded a short advertising jingle for Kellogg's Rice Krispies, written by Brian Jones."],
 ["Maddux won cy young in what years", "92-95", "Greg Maddux won the Cy Young Award four straight years, 1992 to 1995."],
 ["Superbowl in four decades", "Giants", "The New York Giants reached Super Bowls in four different decades \u2014 the 1980s, 1990s, 2000s, and 2010s."],
 ["Actor in most seasons of NCIS", "McGee", "Timothy McGee, played by Sean Murray, has appeared in more NCIS seasons than any other character."],
 ["Craig Heyward nickname", "Iron head", "Craig 'Ironhead' Heyward was the hard-running NFL fullback famous for his Zest soap adverts."],
 ["Walk of fame in manhattan", "fashion", "Manhattan's Garment District has a Fashion Walk of Fame honouring American designers."],
 ["Pure brewed in God's Country", "Old Style", "Old Style lager was advertised as 'pure brewed in God's Country' \u2014 La Crosse, Wisconsin."],
 ["Youngest winner of LPGA tourney", "Lydia Kuo", "Lydia Ko won an LPGA Tour event at 15, the youngest winner in the tour's history."],
 ["Look so good, sop you up with a biscuit", "coming to america", "The 'sop you up with a biscuit' compliment comes from Coming to America."],
 ["Live like we're dying", "Kris Allen", "'Live Like We're Dying' was Kris Allen's first single after winning American Idol."],
 ["Jack LaLanne dead or alive", "Dead", "Jack LaLanne, the godfather of modern fitness, died in 2011 at the age of 96."],
 ["Doc Brown's dog in BTTF III", "Copernicus", "In 1955, Doc Brown's dog is named Copernicus, after the astronomer; in 1985 his dog is Einstein."],
 ["2025 record of the year", "Kendrick", "Kendrick Lamar's 'Not Like Us' won Record of the Year at the 2025 Grammy Awards."],
 ["Dr Who that was sorcerer in LOTR", "Sylvester McCoy", "Sylvester McCoy, the Seventh Doctor in Doctor Who, played the wizard Radagast in The Hobbit films."],
 ["AL team on 1969 went bankrupt", "Seattle Pilots", "The Seattle Pilots lasted a single season, 1969, before bankruptcy sent the club to Milwaukee as the Brewers."],
 ["Octopus is what type of animal", "mollusk", "The octopus is a mollusk \u2014 a cephalopod, related to squid and cuttlefish."],
 ["Here's your sign comedy album", "Bill Engvall", "'Here's Your Sign' is Bill Engvall's signature comedy album, built on his catchphrase routine."],
 ["Victory verticals", "pianos", "Victory Verticals were the rugged upright pianos Steinway built for American troops during World War II."],
 ["Ice and Snow lyrics band", "Led Zeppelin", "'Land of the ice and snow' opens Led Zeppelin's 'Immigrant Song'."],
 ["First presidential home", "Samuel Osgood House", "The Samuel Osgood House in New York City was George Washington's first presidential residence."],
 ["Lewiston and Clarkston border what two states", "Idaho and Washington", "Lewiston, Idaho and Clarkston, Washington face each other across the Snake River."],
 ["The Amish Rifle", "Ryan Fitzpatrick", "Quarterback Ryan Fitzpatrick's beard earned him the nickname 'the Amish Rifle'."],
 ["Longest daily comic strip", "Gasoline Alley", "Gasoline Alley, running since 1918, is the longest-running daily comic strip in America."],
 ["Flaming Gorge and Glen Canyon in", "Utah", "Flaming Gorge and Glen Canyon are best known as Utah recreation areas, on the Green and Colorado rivers."],
 ["Third on most consecutive games played in MLB", "Everett scott", "Everett Scott's streak of 1,307 consecutive games ranks third in baseball history, behind Lou Gehrig and Cal Ripken Jr."],
 ["Voice of Ralph Wiggins", "Nancy Cartwright", "Nancy Cartwright voices Ralph Wiggum on The Simpsons \u2014 and Bart Simpson too."],
 ["Twins on Everybody loves raymond", "Michael and Geoffrey", "Ray and Debra's twin sons on Everybody Loves Raymond are Michael and Geoffrey."],
 ["Thousand Islands archipelago", "Lake Ontario", "The Thousand Islands sit in the St. Lawrence River where it flows out of Lake Ontario."],
 ["Garfield creator", "Jim Davis", "Garfield was created by cartoonist Jim Davis and first appeared in 1978."],
 ["Most wins at Daytona", "Richard Petty", "Richard Petty won a record ten NASCAR Cup races at Daytona International Speedway."],
 ["Not a singer in All For Love", "Bon Jovi", "The Three Musketeers theme 'All for Love' was sung by Bryan Adams, Rod Stewart, and Sting \u2014 not Bon Jovi."],
 ["Smallest lizard", "nano chameleon", "The nano-chameleon of Madagascar, described in 2021, is one of the smallest reptiles known \u2014 males measure about 22 mm."],
 ["First woman to serve in both houses of congress", "Margaret Chase Smith", "Margaret Chase Smith of Maine was the first woman to serve in both the US House and the US Senate."],
 ["NY lawyer memorial in 1920", "Mt. Rushmore", "Mount Rushmore is named for Charles E. Rushmore, a New York lawyer who visited the Black Hills on business."],
 ["Fading and eventually vanishing", "Evanescence", "Evanescence is the act of fading and vanishing \u2014 the band took its name from the word."],
 ["4 time coach in Super Bowl who played in NBA", "Bud Grant", "Bud Grant coached the Minnesota Vikings in four Super Bowls \u2014 and earlier played in the NBA for the Minneapolis Lakers."],
 ["How many floors in Pentagon", "7", "The Pentagon has five floors above ground and two basement levels \u2014 seven levels in all."],
 ["Odin dies in", "Norway", "In Thor: Ragnarok, Odin dies in Norway, where Thor and Loki find him at the end of his exile."],
 ["Bavarian village with passion play", "Oberammergau", "Oberammergau, in Bavaria, has staged its Passion Play roughly every ten years since 1634."],
 ["'Emma' was written by", "Jane Austen", "'Emma' (1815) was written by Jane Austen."],
 ["'Persuasion' was written by", "Jane Austen", "'Persuasion' was written by Jane Austen."],
 ["'Sense and Sensibility' was written by", "Jane Austen", "'Sense and Sensibility' (1811) was written by Jane Austen."],
 ["'Jane Eyre' was written by", "Charlotte Bront\u00eb", "'Jane Eyre' (1847) was written by Charlotte Bront\u00eb."],
 ["'Wuthering Heights' was written by", "Emily Bronte", "'Wuthering Heights' (1847) was written by Emily Bronte."],
 ["'Moby-Dick' was written by", "Herman Melville", "'Moby-Dick' (1851) was written by Herman Melville."],
 ["'The Scarlet Letter' was written by", "Nathaniel Hawthorne", "'The Scarlet Letter' (1850) was written by Nathaniel Hawthorne."],
 ["'Little Women' was written by", "Louisa May Alcott", "'Little Women' (1868) was written by Louisa May Alcott."],
 ["'Great Expectations' was written by", "Charles Dickens", "'Great Expectations' (1861) was written by Charles Dickens."],
 ["'A Tale of Two Cities' was written by", "Charles Dickens", "'A Tale of Two Cities' (1859) was written by Charles Dickens."],
 ["'Oliver Twist' was written by", "Charles Dickens", "'Oliver Twist' (1838) was written by Charles Dickens."],
 ["'A Christmas Carol' was written by", "Charles Dickens", "'A Christmas Carol' (1843) was written by Charles Dickens."],
 ["'Bleak House' was written by", "Charles Dickens", "'Bleak House' (1853) was written by Charles Dickens."],
 ["'Hard Times' was written by", "Charles Dickens", "'Hard Times' (1854) was written by Charles Dickens."],
 ["'Frankenstein' was written by", "Mary Shelley", "'Frankenstein' (1818) was written by Mary Shelley."],
 ["'Dracula' was written by", "Bram Stoker", "'Dracula' (1897) was written by Bram Stoker."],
 ["'The Picture of Dorian Gray' was written by", "Oscar Wilde", "'The Picture of Dorian Gray' was written by Oscar Wilde."],
 ["'The Time Machine' was written by", "H. G. Wells", "'The Time Machine' (1895) was written by H. G. Wells."],
 ["'The War of the Worlds' was written by", "H. G. Wells", "'The War of the Worlds' (1898) was written by H. G. Wells."],
 ["'The Invisible Man' was written by", "H. G. Wells", "'The Invisible Man' (1897) was written by H. G. Wells."],
 ["'Treasure Island' was written by", "Robert Louis Stevenson", "'Treasure Island' (1883) was written by Robert Louis Stevenson."],
 ["'The Strange Case of Dr Jekyll and Mr Hyde' was written by", "Robert Louis Stevenson", "'The Strange Case of Dr Jekyll and Mr Hyde' (1886) was written by Robert Louis Stevenson."],
 ["'The Jungle Book' was written by", "Rudyard Kipling", "'The Jungle Book' (1894) was written by Rudyard Kipling."],
 ["'Heart of Darkness' was written by", "Joseph Conrad", "'Heart of Darkness' was written by Joseph Conrad."],
 ["'The Great Gatsby' was written by", "F. Scott Fitzgerald", "'The Great Gatsby' (1925) was written by F. Scott Fitzgerald."],
 ["'To Kill a Mockingbird' was written by", "Harper Lee", "'To Kill a Mockingbird' (1960) was written by Harper Lee."],
 ["'Of Mice and Men' was written by", "John Steinbeck", "'Of Mice and Men' (1937) was written by John Steinbeck."],
 ["'The Grapes of Wrath' was written by", "John Steinbeck", "'The Grapes of Wrath' (1939) was written by John Steinbeck."],
 ["'East of Eden' was written by", "John Steinbeck", "'East of Eden' (1952) was written by John Steinbeck."],
 ["'Brave New World' was written by", "Aldous Huxley", "'Brave New World' (1932) was written by Aldous Huxley."],
 ["'Animal Farm' was written by", "George Orwell", "'Animal Farm' (1945) was written by George Orwell."],
 ["'Fahrenheit 451' was written by", "Ray Bradbury", "'Fahrenheit 451' (1953) was written by Ray Bradbury."],
 ["'The Catcher in the Rye' was written by", "J. D. Salinger", "'The Catcher in the Rye' (1951) was written by J. D. Salinger."],
 ["'The Old Man and the Sea' was written by", "Ernest Hemingway", "'The Old Man and the Sea' (1952) was written by Ernest Hemingway."],
 ["'A Farewell to Arms' was written by", "Ernest Hemingway", "'A Farewell to Arms' (1929) was written by Ernest Hemingway."],
 ["'As I Lay Dying' was written by", "William Faulkner", "'As I Lay Dying' (1930) was written by William Faulkner."],
 ["'The Sound and the Fury' was written by", "William Faulkner", "'The Sound and the Fury' (1929) was written by William Faulkner."],
 ["'Their Eyes Were Watching God' was written by", "Zora Neale Hurston", "'Their Eyes Were Watching God' (1937) was written by Zora Neale Hurston."],
 ["'Invisible Man' was written by", "Ralph Ellison", "'Invisible Man' (1952) was written by Ralph Ellison."],
 ["'Native Son' was written by", "Richard Wright", "'Native Son' (1940) was written by Richard Wright."],
 ["'The Color Purple' was written by", "Alice Walker", "'The Color Purple' (1982) was written by Alice Walker."],
 ["'Beloved' was written by", "Toni Morrison", "'Beloved' (1987) was written by Toni Morrison."],
 ["'One Hundred Years of Solitude' was written by", "Gabriel Garc\u00eda M\u00e1rquez", "'One Hundred Years of Solitude' (1967) was written by Gabriel Garc\u00eda M\u00e1rquez."],
 ["'Don Quixote' was written by", "Miguel de Cervantes", "Miguel de Cervantes wrote 'Don Quixote' (1605), often called the first modern novel."],
 ["'The Divine Comedy' was written by", "Dante Alighieri", "Dante Alighieri wrote the epic poem 'The Divine Comedy' in the early 1300s."],
 ["'The Iliad' was written by", "Homer", "Homer, the ancient Greek poet, is credited with the epic poem 'The Iliad'."],
 ["'The Odyssey' was written by", "Homer", "Homer, the ancient Greek poet, is credited with the epic poem 'The Odyssey'."],
 ["'The Canterbury Tales' was written by", "Geoffrey Chaucer", "Geoffrey Chaucer wrote 'The Canterbury Tales', stories told by pilgrims on the road to Canterbury."],
 ["'Crime and Punishment' was written by", "Fyodor Dostoevsky", "'Crime and Punishment' (1866) was written by Fyodor Dostoevsky."],
 ["'The Brothers Karamazov' was written by", "Fyodor Dostoevsky", "'The Brothers Karamazov' (1880) was written by Fyodor Dostoevsky."],
 ["'War and Peace' was written by", "Leo Tolstoy", "'War and Peace' (1869) was written by Leo Tolstoy."],
 ["'Anna Karenina' was written by", "Leo Tolstoy", "'Anna Karenina' (1878) was written by Leo Tolstoy."],
 ["'Les Mis\u00e9rables' was written by", "Victor Hugo", "'Les Mis\u00e9rables' (1862) was written by Victor Hugo."],
 ["'The Hunchback of Notre-Dame' was written by", "Victor Hugo", "'The Hunchback of Notre-Dame' (1831) was written by Victor Hugo."],
 ["'Madame Bovary' was written by", "Gustave Flaubert", "'Madame Bovary' (1857) was written by Gustave Flaubert."],
 ["'The Count of Monte Cristo' was written by", "Alexandre Dumas", "'The Count of Monte Cristo' (1844) was written by Alexandre Dumas."],
 ["'The Three Musketeers' was written by", "Alexandre Dumas", "'The Three Musketeers' (1844) was written by Alexandre Dumas."],
 ["'Around the World in Eighty Days' was written by", "Jules Verne", "'Around the World in Eighty Days' was written by Jules Verne."],
 ["'Twenty Thousand Leagues Under the Seas' was written by", "Jules Verne", "'Twenty Thousand Leagues Under the Seas' (1870) was written by Jules Verne."],
 ["'Journey to the Centre of the Earth' was written by", "Jules Verne", "'Journey to the Centre of the Earth' (1864) was written by Jules Verne."],
 ["'The Hound of the Baskervilles' was written by", "Arthur Conan Doyle", "'The Hound of the Baskervilles' was written by Arthur Conan Doyle."],
 ["'Murder on the Orient Express' was written by", "Agatha Christie", "'Murder on the Orient Express' (1934) was written by Agatha Christie."],
 ["'And Then There Were None' was written by", "Agatha Christie", "'And Then There Were None' (1939) was written by Agatha Christie."],
 ["'Gone with the Wind' was written by", "Margaret Mitchell", "'Gone with the Wind' (1936) was written by Margaret Mitchell."],
 ["'The Wonderful Wizard of Oz' was written by", "L. Frank Baum", "'The Wonderful Wizard of Oz' (1900) was written by L. Frank Baum."],
 ["'Mary Poppins' was written by", "P. L. Travers", "'Mary Poppins' (1934) was written by P. L. Travers."],
 ["'Pippi Longstocking' was written by", "Astrid Lindgren", "'Pippi Longstocking' (1945) was written by Astrid Lindgren."],
 ["'The Cat in the Hat' was written by", "Dr. Seuss", "'The Cat in the Hat' (1957) was written by Dr. Seuss."],
 ["'Green Eggs and Ham' was written by", "Dr. Seuss", "'Green Eggs and Ham' (1960) was written by Dr. Seuss."],
 ["'Where the Wild Things Are' was written by", "Maurice Sendak", "'Where the Wild Things Are' (1963) was written by Maurice Sendak."],
 ["'Goodnight Moon' was written by", "Margaret Wise Brown", "'Goodnight Moon' (1947) was written by Margaret Wise Brown."],
 ["'The Very Hungry Caterpillar' was written by", "Eric Carle", "'The Very Hungry Caterpillar' (1969) was written by Eric Carle."],
 ["'A Wrinkle in Time' was written by", "Madeleine L'Engle", "'A Wrinkle in Time' (1962) was written by Madeleine L'Engle."],
 ["'The Giver' was written by", "Lois Lowry", "'The Giver' (1993) was written by Lois Lowry."],
 ["'Holes' was written by", "Louis Sachar", "'Holes' (1998) was written by Louis Sachar."],
 ["'Wonder' was written by", "R. J. Palacio", "'Wonder' (2012) was written by R. J. Palacio."],
 ["'Diary of a Wimpy Kid' was written by", "Jeff Kinney", "'Diary of a Wimpy Kid' (2007) was written by Jeff Kinney."],
 ["'The Hunger Games' was written by", "Suzanne Collins", "'The Hunger Games' (2008) was written by Suzanne Collins."],
 ["'Divergent' was written by", "Veronica Roth", "'Divergent' (2011) was written by Veronica Roth."],
 ["'The Fault in Our Stars' was written by", "John Green", "'The Fault in Our Stars' (2012) was written by John Green."],
 ["'Twilight' was written by", "Stephenie Meyer", "'Twilight' (2005) was written by Stephenie Meyer."],
 ["'Dune' was written by", "Frank Herbert", "'Dune' (1965) was written by Frank Herbert."],
 ["'Foundation' was written by", "Isaac Asimov", "'Foundation' (1951) was written by Isaac Asimov."],
 ["'I, Robot' was written by", "Isaac Asimov", "'I, Robot' (1950) was written by Isaac Asimov."],
 ["'Ender's Game' was written by", "Orson Scott Card", "'Ender's Game' (1985) was written by Orson Scott Card."],
 ["'A Game of Thrones' was written by", "George R.R. Martin", "'A Game of Thrones' (1996) was written by George R.R. Martin."],
 ["'The Name of the Wind' was written by", "Patrick Rothfuss", "'The Name of the Wind' (2007) was written by Patrick Rothfuss."],
 ["'Mistborn' was written by", "Brandon Sanderson", "'Mistborn' (2006) was written by Brandon Sanderson."],
 ["'American Gods' was written by", "Neil Gaiman", "'American Gods' (2001) was written by Neil Gaiman."],
 ["'Coraline' was written by", "Neil Gaiman", "'Coraline' (2002) was written by Neil Gaiman."],
 ["'The Hitchhiker's Guide to the Galaxy' was written by", "Douglas Adams", "'The Hitchhiker's Guide to the Galaxy' (1979) was written by Douglas Adams."],
 ["'Neuromancer' was written by", "William Gibson", "'Neuromancer' (1984) was written by William Gibson."],
 ["'The Martian' was written by", "Andy Weir", "'The Martian' was written by Andy Weir."],
 ["'Ready Player One' was written by", "Ernest Cline", "'Ready Player One' (2011) was written by Ernest Cline."],
 ["'The Da Vinci Code' was written by", "Dan Brown", "'The Da Vinci Code' (2003) was written by Dan Brown."],
 ["'The Girl with the Dragon Tattoo' was written by", "Stieg Larsson", "'The Girl with the Dragon Tattoo' (2005) was written by Stieg Larsson."],
 ["'Gone Girl' was written by", "Gillian Flynn", "'Gone Girl' (2012) was written by Gillian Flynn."],
 ["'Winnie-the-Pooh' was written by", "A. A. Milne", "'Winnie-the-Pooh' (1926) was written by A. A. Milne."],
 ["'Peter Pan' was written by", "J. M. Barrie", "J. M. Barrie created Peter Pan \u2014 first in a 1904 play, then in the 1911 novel 'Peter and Wendy'."],
 ["'The Wind in the Willows' was written by", "Kenneth Grahame", "'The Wind in the Willows' (1908) was written by Kenneth Grahame."],
 ["'Matilda' was written by", "Roald Dahl", "'Matilda' (1988) was written by Roald Dahl."],
 ["'Charlie and the Chocolate Factory' was written by", "Roald Dahl", "'Charlie and the Chocolate Factory' (1964) was written by Roald Dahl."],
 ["'The BFG' was written by", "Roald Dahl", "'The BFG' (1982) was written by Roald Dahl."],
 ["'James and the Giant Peach' was written by", "Roald Dahl", "'James and the Giant Peach' (1961) was written by Roald Dahl."],
 ["'Anne of Green Gables' was written by", "L. M. Montgomery", "'Anne of Green Gables' (1908) was written by L. M. Montgomery."],
 ["'Little House on the Prairie' was written by", "Laura Ingalls Wilder", "'Little House on the Prairie' (1935) was written by Laura Ingalls Wilder."],
 ["'The Secret Garden' was written by", "Frances Hodgson Burnett", "'The Secret Garden' (1911) was written by Frances Hodgson Burnett."],
 ["'Black Beauty' was written by", "Anna Sewell", "'Black Beauty' (1877) was written by Anna Sewell."],
 ["'The Call of the Wild' was written by", "Jack London", "'The Call of the Wild' (1903) was written by Jack London."],
 ["'White Fang' was written by", "Jack London", "'White Fang' (1906) was written by Jack London."],
 ["'Kim' was written by", "Rudyard Kipling", "'Kim' (1901) was written by Rudyard Kipling."],
 ["'The Hobbit' was written by", "J.R.R. Tolkien", "'The Hobbit' (1937) was written by J.R.R. Tolkien."],
 ["'The Fellowship of the Ring' was written by", "J.R.R. Tolkien", "'The Fellowship of the Ring' (1954) was written by J.R.R. Tolkien."],
 ["'The Lion, the Witch and the Wardrobe' was written by", "C.S. Lewis", "'The Lion, the Witch and the Wardrobe' (1950) was written by C.S. Lewis."],
 ["'The Handmaid's Tale' was written by", "Margaret Atwood", "'The Handmaid's Tale' (1985) was written by Margaret Atwood."],
 ["'The Kite Runner' was written by", "Khaled Hosseini", "'The Kite Runner' (2003) was written by Khaled Hosseini."],
 ["'Life of Pi' was written by", "Yann Martel", "'Life of Pi' (2001) was written by Yann Martel."],
 ["'The Alchemist' was written by", "Paulo Coelho", "'The Alchemist' (1988) was written by Paulo Coelho."],
 ["'Memoirs of a Geisha' was written by", "Arthur Golden", "'Memoirs of a Geisha' (1997) was written by Arthur Golden."],
 ["'The Book Thief' was written by", "Markus Zusak", "'The Book Thief' (2005) was written by Markus Zusak."],
 ["'Water for Elephants' was written by", "Sara Gruen", "'Water for Elephants' (2006) was written by Sara Gruen."],
 ["'The Help' was written by", "Kathryn Stockett", "'The Help' (2009) was written by Kathryn Stockett."],
 ["'Room' was written by", "Emma Donoghue", "'Room' (2010) was written by Emma Donoghue."],
 ["'The Night Circus' was written by", "Erin Morgenstern", "'The Night Circus' (2011) was written by Erin Morgenstern."],
 ["The first US president", "George Washington", "George Washington served as the first president of the United States (1789\u20131797)."],
 ["The third US president", "Thomas Jefferson", "Thomas Jefferson served as the third president of the United States (1801\u20131809)."],
 ["The fifth US president", "James Monroe", "James Monroe served as the fifth president of the United States (1817\u20131825)."],
 ["The seventh US president", "Andrew Jackson", "Andrew Jackson served as the seventh president of the United States (1829\u20131837)."],
 ["The ninth US president", "William Henry Harrison", "William Henry Harrison was the ninth US president (1841) \u2014 he died just a month into his term."],
 ["The eleventh US president", "James K. Polk", "James K. Polk served as the eleventh president of the United States (1845\u20131849)."],
 ["The thirteenth US president", "Millard Fillmore", "Millard Fillmore served as the thirteenth president of the United States (1850\u20131853)."],
 ["The fifteenth US president", "James Buchanan", "James Buchanan served as the fifteenth president of the United States (1857\u20131861)."],
 ["The seventeenth US president", "Andrew Johnson", "Andrew Johnson served as the seventeenth president of the United States (1865\u20131869)."],
 ["The nineteenth US president", "Rutherford B. Hayes", "Rutherford B. Hayes served as the nineteenth president of the United States (1877\u20131881)."],
 ["The twenty-first US president", "Chester A. Arthur", "Chester A. Arthur served as the twenty-first president of the United States (1881\u20131885)."],
 ["The twenty-third US president", "Benjamin Harrison", "Benjamin Harrison served as the twenty-third president of the United States (1889\u20131893)."],
 ["The twenty-fifth US president", "William McKinley", "William McKinley served as the twenty-fifth president of the United States (1897\u20131901)."],
 ["The twenty-seventh US president", "William Howard Taft", "William Howard Taft served as the twenty-seventh president of the United States (1909\u20131913)."],
 ["The twenty-ninth US president", "Warren G. Harding", "Warren G. Harding served as the twenty-ninth president of the United States (1921\u20131923)."],
 ["The thirty-first US president", "Herbert Hoover", "Herbert Hoover served as the thirty-first president of the United States (1929\u20131933)."],
 ["The thirty-third US president", "Harry S. Truman", "Harry S. Truman served as the thirty-third president of the United States (1945\u20131953)."],
 ["The thirty-fifth US president", "John F. Kennedy", "John F. Kennedy served as the thirty-fifth president of the United States (1961\u20131963)."],
 ["The thirty-seventh US president", "Richard Nixon", "Richard Nixon served as the thirty-seventh president of the United States (1969\u20131974)."],
 ["The thirty-ninth US president", "Jimmy Carter", "Jimmy Carter served as the thirty-ninth president of the United States (1977\u20131981)."],
 ["The forty-first US president", "George H. W. Bush", "George H. W. Bush served as the forty-first president of the United States (1989\u20131993)."],
 ["The forty-third US president", "George W. Bush", "George W. Bush served as the forty-third president of the United States (2001\u20132009)."],
 ["The forty-fifth US president", "Donald Trump", "Donald Trump served as the forty-fifth president from 2017 to 2021 \u2014 and later returned as the forty-seventh."],
 ["The forty-seventh US president", "Donald Trump", "Donald Trump became the forty-seventh president in 2025, the second president after Grover Cleveland to serve non-consecutive terms."],
 ["Alabama state nickname", "Yellowhammer State", "Alabama's nickname is the Yellowhammer State \u2014 the yellowhammer (northern flicker) is the state bird."],
 ["Arizona state nickname", "Grand Canyon State", "Arizona's nickname is the Grand Canyon State \u2014 for the Grand Canyon, which cuts across the state's north."],
 ["California state nickname", "Golden State", "California's nickname is the Golden State \u2014 a nod to the Gold Rush of 1849."],
 ["Connecticut state nickname", "Constitution State", "Connecticut's nickname is the Constitution State."],
 ["Florida state nickname", "Sunshine State", "Florida's nickname is the Sunshine State \u2014 for its sunny climate."],
 ["Hawaii state nickname", "Aloha State", "Hawaii's nickname is the Aloha State \u2014 from 'aloha', the Hawaiian word of greeting."],
 ["Illinois state nickname", "Prairie State", "Illinois's nickname is the Prairie State \u2014 for the tallgrass prairies that once covered it."],
 ["Iowa state nickname", "Hawkeye State", "Iowa's nickname is the Hawkeye State."],
 ["Kentucky state nickname", "Bluegrass State", "Kentucky's nickname is the Bluegrass State \u2014 for the bluegrass that grows in its pastureland."],
 ["Maine state nickname", "Pine Tree State", "Maine's nickname is the Pine Tree State \u2014 for its vast pine forests."],
 ["Massachusetts state nickname", "Bay State", "Massachusetts's nickname is the Bay State \u2014 for Massachusetts Bay, on its coast."],
 ["Minnesota state nickname", "North Star State", "Minnesota's nickname is the North Star State \u2014 from the state motto, French for 'the star of the north'."],
 ["Missouri state nickname", "Show Me State", "Missouri's nickname is the Show Me State."],
 ["Nebraska state nickname", "Cornhusker State", "Nebraska's nickname is the Cornhusker State \u2014 for corn husking, and the university's Cornhuskers teams."],
 ["New Hampshire state nickname", "Granite State", "New Hampshire's nickname is the Granite State \u2014 for its granite quarries."],
 ["New Mexico state nickname", "Land of Enchantment", "New Mexico's nickname is the Land of Enchantment."],
 ["North Carolina state nickname", "Tar Heel State", "North Carolina's nickname is the Tar Heel State."],
 ["Ohio state nickname", "Buckeye State", "Ohio's nickname is the Buckeye State \u2014 for the buckeye trees native to the state."],
 ["Oregon state nickname", "Beaver State", "Oregon's nickname is the Beaver State \u2014 the beaver is the state animal."],
 ["Rhode Island state nickname", "Ocean State", "Rhode Island's nickname is the Ocean State \u2014 for its bays and long coastline."],
 ["South Dakota state nickname", "Mount Rushmore State", "South Dakota's nickname is the Mount Rushmore State \u2014 Mount Rushmore is carved into its Black Hills."],
 ["Texas state nickname", "Lone Star State", "Texas's nickname is the Lone Star State \u2014 for the single star on its flag."],
 ["Vermont state nickname", "Green Mountain State", "Vermont's nickname is the Green Mountain State \u2014 for the Green Mountains running down its spine."],
 ["Washington state nickname", "Evergreen State", "Washington's nickname is the Evergreen State \u2014 for its evergreen forests."],
 ["Wisconsin state nickname", "Badger State", "Wisconsin's nickname is the Badger State."],
].forEach(function(p){ EXPLAIN_EXTRA[norm(p[0])+"|"+norm(p[1])]=p[2]; });

/* ================= FLOW ================= */
$("nextBtn").addEventListener("click", function(){
  if(!state) return;
  /* Sudden Death ended on the last reveal: straight to the
     results — no next question, and no bonus round. */
  if(state.suddenDeathOut){ endGame(); return; }
  state.idx++;
  state.lastReveal=null;
  if(state.idx>=state.qs.length){
    /* A regular Gauntlet finished at 1,000+ (not perfect) does
       not end here: the bonus questions are appended and play
       continues. A perfect 1,280 ends the game - the Legend
       offer waits on the results screen instead. */
    if(bonusEligible()) startBonusRound();
    else endGame();
  }
  else renderQuestion();
});
/* ================= QUIT & LEAVE =================
   Quit — the button in the game header, next to the sound
   toggle — is available all game: it ends the game on the spot,
   saves the score the player has, and lands on the results
   screen, where the late-name field waits when the game was
   played without a name. Quitting clears the in-progress save
   (endGame does that), so a quit game can never be rejoined.
   Closing the tab or app WITHOUT quitting is the other path: the
   save stays, and the game resumes where it left off. The quit
   rule covers every question and every wager finale — Q5, Q10
   and Q15 included: quitting there keeps the points on the
   board; the player is simply done. (Pass is the way to move
   past those finales and keep playing.)

   THE ONE EXCEPTION IS Q20. Once its wager is locked and the
   question is showing, the wager is on the line: pressing Quit —
   or the Leave button that appears on Q20 only, in the action
   area where Pass sits on other questions (Q20 has no Pass) —
   first shows a warning naming the wager at stake. Confirming
   loses the wager, then ends the game on the reduced score. At
   Q20's wager picker nothing is locked yet, so Quit (and the
   picker's own Leave) is an ordinary quit there. Leave renders
   nowhere else: not on other questions, not in the bonus round.

   A Daily Gauntlet follows this same rule with no exception:
   quitting one ends it as that day's result — the score saves,
   the date is marked completed, the streak records it, and the
   day is closed (the bookkeeping lives in endGame).

   There is NO pause anywhere in this: the warning does not stop
   Q20's clock. If the clock runs out while the warning is up,
   Q20 times out as wrong — wager lost, game over — exactly like
   a normal Q20 timeout, and the stale warning's confirm then has
   nothing left to settle. (A pause would hand the player free
   time to look the answer up.) */
var quitWarnOpen=false, quitWarnItem=null;
$("quitBtn").addEventListener("click", quitPressed);
$("qAnswerArea").addEventListener("click", function(e){
  var t=e.target;
  if(t && t.classList && t.classList.contains("leavebtn")) quitPressed();
});
$("quitLeaveBtn").addEventListener("click", function(){
  if(!quitWarnOpen || !quitWarnItem) return;
  var item=quitWarnItem;
  closeQuitWarning();
  /* Backstop: if Q20 settled while the warning was up — its clock
     ran out, and the timeout already ended the question — there
     is nothing left to settle. */
  if(q20AtStakeItem()!==item) return;
  settleQ20Quit(item);
});
$("quitStayBtn").addEventListener("click", function(){
  if(!quitWarnOpen) return;
  closeQuitWarning();
  /* The game continues untouched — and the clock never stopped. */
});

/* ---------- Player profile record (Update 1.2 §4/§5) ----------
   Practice personal bests live in ONE new device-local key,
   purely additive: no existing key (highscores, relaxed, seen,
   progress, daily, sound, pic-packs, gamecount, pending-rename)
   is renamed, rewritten, or migrated by anything in this block.
   The record is profile-shaped — {version, playerId,
   practiceBests:{<category id>:<best score>}} — so Update 1.3's
   optional profiles can claim it as-is. playerId is a stable,
   anonymous, device-generated id: never a name, and no sign-in
   is ever required. Since §6 it rides along on shared-leaderboard
   submissions (see submitSharedScore) so the backend can group
   a player's scores by id — never by display name; it is not
   used for anything else and identifies no one.
   Historical leaderboard rows are never merged by display name;
   this record only ever holds THIS device's practice bests.
   A best is written only when a practice round is COMPLETED
   (all 10 questions settled) — a round quit midway never
   updates it — and only when the new score beats the stored
   one for that same category. Categories are tracked fully
   separately, keyed by their MODES id. */
var PROFILE_KEY="trivia-or-nada.profile.v1";

/* ================= WIRING ================= */
$("paceStandard").addEventListener("click", function(){ setCoverPace("standard"); });
$("paceRelaxed").addEventListener("click", function(){ setCoverPace("relaxed"); });
/* The boards-area pace switch drives the very same setting:
   setCoverPace moves both controls' highlights and re-filters
   the boards, whichever of the two was tapped. */
$("boardPaceStandard").addEventListener("click", function(){ setCoverPace("standard"); });
$("boardPaceRelaxed").addEventListener("click", function(){ setCoverPace("relaxed"); });
$("startGauntlet").addEventListener("click", function(){
  /* Every Gauntlet starts seeded: the seed is generated now and
     the game is dealt from it (see startSeededGauntlet), so the
     challenge link on the results screen can re-deal this exact
     game for a friend. Start Game always starts a normal
     Gauntlet — Sudden Death has its own button below. */
  startSeededGauntlet(false);
});
/* Daily Gauntlet: today's seeded daily at the cover's chosen pace.
   Sudden Death does not apply to it. An unfinished
   daily sitting in the progress save resumes instead of
   re-dealing — it keeps its start date and its questions. A day
   that already scored never starts again (the button is disabled
   then too; startDailyGauntlet guards as well). */
$("dailyGauntletBtn").addEventListener("click", function(){
  var prog=null;
  try{ prog=loadProgress(); }catch(e){ prog=null; }
  if(prog && prog.daily){ if(restoreProgress()) return; }
  startDailyGauntlet(dailyDateString());
});
/* Sudden Death menu entry (in the ☰ Menu's "More ways to play"
   list, below Closest Wins since 2026-11-13): a game-mode entry,
   not a setting — tapping it starts a Sudden Death Gauntlet
   directly, the way the Daily button starts a Daily. It uses
   the name typed on the
   cover and the cover's currently selected pace (startGame locks
   coverPace into the game), and the game itself is the normal
   Gauntlet with one-miss-and-out rules (same questions, points,
   wager finales, clocks — no Pass), saved to its own Sudden
   Death boards. */
$("suddenDeathBtn").addEventListener("click", function(){ startSeededGauntlet(true); });
/* ---------- Creator access (hidden) ----------
   Revealed two ways only: tapping the TRIVIA OR NADA logo three
   times in quick succession, or opening the page with
   ?creator=1 in the address. Until then the panel — and its two
   buttons — stay hidden, so regular players never see them.
   Creator games bypass the earned unlocks (1,000+ for the bonus
   round, a perfect 1,280 for the Legend Gauntlet) but are
   practice/test only: the creator flag rides on the game state
   (and in its in-progress save, so a resumed creator game stays
   one) and endGame saves a creator game nowhere — no device
   board, no shared board, no Hall of Fame, no backup. */
var creatorRevealed=false;
var logoTapCount=0, logoTapTimer=null;
var coverLogoEl=$("coverLogo");
if(coverLogoEl) coverLogoEl.addEventListener("click", function(){
  logoTapCount++;
  if(logoTapTimer) clearTimeout(logoTapTimer);
  logoTapTimer=setTimeout(function(){ logoTapCount=0; }, 1800);
  if(logoTapCount>=3){ logoTapCount=0; if(logoTapTimer) clearTimeout(logoTapTimer); revealCreatorMode(); }
});
try{ if(new URLSearchParams(window.location.search).get("creator")==="1") revealCreatorMode(); }catch(e){}
$("creatorBonusBtn").addEventListener("click", startCreatorBonusGame);
$("creatorLegendBtn").addEventListener("click", startCreatorLegendGame);
$("challengeBtn").addEventListener("click", function(){
  if(!state) return;
  /* A v2 link whenever the game can be carried (see CHALLENGE
     LINKS V2): it encodes the game's own 20 questions, their
     order, the strict finale pattern, and the choice order
     shown for each — the friend plays this game, not a
     re-deal. The v1 seed link remains the fallback for a game
     a v2 payload cannot be minted from (a Legend game, or a
     save from an older build restored and finished). */
  var payload=mintChallengeV2();
  var link=payload
    ? CHALLENGE_LINK_BASE+"?challenge="+payload+"&pace="+paceKey(state.pace)
    : CHALLENGE_LINK_BASE+"?challenge="+(state.seed||newSeedString())+"&pace="+paceKey(state.pace);
  copyTextToClipboard(link, function(ok){
    var msg=$("challengeMsg"); if(!msg) return;
    msg.textContent = ok
      ? "Challenge link copied — send it to a friend. Anyone who opens it plays the same 20 questions: same order, same choices, same wager finales, at "+(paceKey(state.pace)==="relaxed"?"Relaxed":"Standard")+" pace. Their score is saved only on their own device, so tell each other your scores to compare."
      : "Couldn't copy automatically — copy this link yourself: "+link;
  });
});
/* Share your score: the brag line for the game just finished,
   worded for its mode, plus the game's public website address
   (triviaornada.com — the same base challenge links are minted
   against, and never this page's own address). The native share sheet
   (navigator.share) is used when the device offers one; where
   it doesn't — or it fails for any reason other than the player
   backing out — the same text + link is copied to the clipboard
   instead, with the copied text shown so the player can see
   exactly what they are pasting.
   Score-card image (2026-11-10): Share now also carries a
   branded score-card picture, drawn in the browser on a canvas
   at share time — dark navy stage, the TRIVIA OR NADA logo
   treatment, the score big, the earned achievement title
   beneath it, the player's name, the mode, the
   date, "A Savaille Entertainment Game" as the heading, and
   triviaornada.com at the bottom. The card
   is generated ahead of time when the results screen renders
   (prepareScoreCard, called from endGame) so that on devices
   whose share sheet accepts files (navigator.canShare with
   files) the share can begin synchronously inside the tap,
   image + the same text + the same link together. Where file
   sharing isn't offered, behaviour is exactly what it was —
   text share, or the copy fallback — except that the copy
   fallback also shows a "Download score card" link under the
   Copied! confirmation, so the player can still save the card
   and post it by hand. Generation is fully client-side and
   offline: no image assets are fetched, and the canvas font
   stack falls back to system fonts if Archivo isn't available
   to the canvas. The Challenge a friend button is untouched. */
var SHARE_SITE_URL="https://triviaornada.com";
var SC_FONT='"Archivo", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
var SC_MONO='"Space Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
/* The card for the game on the results screen, generated ahead
   of the tap (see endGame) and keyed to that game's name, score,
   mode, and date — a post-game rename changes the key, so a
   stale card is never shared under the wrong name. */
var scoreCardCache=null;
/* Card design version, part of the cache key: bump it whenever
   the card's drawn content changes (v2, 2026-11-10: the heading
   reads "A Savaille Entertainment Game" and the footer is
   triviaornada.com; v3, Update 1.2: the earned achievement
   title is drawn beneath the score) so a card cached from an
   older design is never shared. */
var SCORE_CARD_DESIGN="card4";
/* Copy-fallback download offer: the link lives in the share box
   under the share message and is hidden everywhere else. The
   card is drawn fresh here, so it always carries the name the
   player ended with (including a post-game rename). */
var scoreCardUrl=null;
$("shareBtn").addEventListener("click", function(){
  if(!state) return;
  var msg=$("shareMsg");
  hideScoreCardDownload();
  /* File share first, where the sheet accepts files: the card
     image travels with the same title, text, and link as the
     text share. The pre-generated card keeps this call inside
     the tap, where share sheets require it. */
  if(navigator.share && typeof navigator.canShare==="function"){
    var file=(scoreCardCache && scoreCardCache.key===scoreCardKey()) ? scoreCardCache.file : null;
    var canFiles=false;
    if(file){ try{ canFiles=!!navigator.canShare({files:[file]}); }catch(e){ canFiles=false; } }
    if(file && canFiles){
      var handedOff=false;
      try{
        var p=navigator.share({title:"Trivia or Nada", text:shareScoreText(), url:SHARE_SITE_URL, files:[file]});
        if(p && typeof p.then==="function"){
          handedOff=true;
          p.then(function(){ if(msg) msg.textContent="Shared — thanks for spreading the word!"; },
                 function(err){ if(!(err && err.name==="AbortError")) copyShareScore(); });
        }
      }catch(e){ handedOff=false; }
      if(handedOff) return;
      /* The sheet refused the file share outright — fall through
         to the plain text share rather than failing silently. */
    } else if(!file && scoreCardCache && scoreCardCache.blob){
      /* A card exists but File construction failed on this
         browser — nothing to attach; text share below. */
    } else if(!scoreCardCache){
      /* Card still generating (or canvas unavailable): try once
         asynchronously, then fall back to the text share. Some
         sheets reject a share that didn't start inside the tap;
         that rejection lands in the copy fallback, as before. */
      scoreCardBlob(function(blob){
        var f=scoreCardFileFrom(blob), ok=false;
        if(f){ try{ ok=!!navigator.canShare({files:[f]}); }catch(e){ ok=false; } }
        if(!f || !ok){ textShareScore(); return; }
        var handed2=false;
        try{
          var p2=navigator.share({title:"Trivia or Nada", text:shareScoreText(), url:SHARE_SITE_URL, files:[f]});
          if(p2 && typeof p2.then==="function"){
            handed2=true;
            p2.then(function(){ if(msg) msg.textContent="Shared — thanks for spreading the word!"; },
                    function(err){ if(!(err && err.name==="AbortError")) copyShareScore(); });
          }
        }catch(e){ handed2=false; }
        if(!handed2) textShareScore();
      });
      return;
    }
  }
  textShareScore();
});
/* ---------- COVER OVERLAYS (How to play / Practice / Back up) ----------
   Each opens as an overlay on top of the cover and closes back to
   the clean cover: the ✕ at the top, the Close button at the
   bottom, a tap on the dimmed backdrop, or the Escape key all
   close it, and focus returns to the button that opened it. */
var overlayReturnFocus=null;
/* High scores: the boards stay exactly where they are on the
   cover — this button simply takes the player straight to them
   (players weren't scrolling down far enough to find them). It
   scrolls to the first board that is showing; boards still hide
   while empty, exactly as before. */
$("scoresBtn").addEventListener("click", function(){
  /* sharedLinkNote first: it only ever shows when the shared
     board couldn't load from this page (the Muse public link's
     frame blocks the call), and in exactly that case the button
     should land the player on it. Whenever the note is hidden —
     every successful load — the boards are picked exactly as
     before, so this changes nothing on the real site. */
  var ids=["sharedLinkNote","boardPaceSwitch","hofBoard","sharedHofBoardStandard","sharedHofBoardRelaxed","sharedBoardStandard","sharedBoardRelaxed","sharedWeeklyBoardStandard","sharedWeeklyBoardRelaxed","scoreBoard","scoreBoardRelaxed","moreBoardsSection"];
  var target=null;
  /* A board trimmed by the pace filter (.pace-off) is as absent
     as an empty one (.hidden) — never scroll to either. */
  for(var i=0;i<ids.length;i++){ var el=$(ids[i]); if(el && !el.classList.contains("hidden") && !el.classList.contains("pace-off")){ target=el; break; } }
  if(!target) target=$("scoreBoard");
  if(!target) return;
  var reduce=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({behavior: reduce ? "auto" : "smooth", block:"start"});
});
/* Top-10 ticker: tapping it lands on the boards area (the
   Boards pace switch), the same landing the High scores button
   uses. The strip only exists on the cover, and its scroll
   animation pauses while the tab is hidden. */
function scrollToBoardsArea(){
  var target=$("boardPaceSwitch"); if(!target) return;
  var reduce=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({behavior: reduce ? "auto" : "smooth", block:"start"});
}
var topTickerEl=$("topTicker");
if(topTickerEl){
  topTickerEl.addEventListener("click", scrollToBoardsArea);
  topTickerEl.addEventListener("keydown", function(e){
    if(e.key==="Enter" || e.key===" "){ e.preventDefault(); scrollToBoardsArea(); }
  });
}
document.addEventListener("visibilitychange", function(){
  var el=$("topTicker"); if(el) el.classList.toggle("ticker-paused", document.hidden);
});
/* More Boards dropdown: collapsed by default; the toggle opens
   and closes the boards body in place (Best Per Player, Sudden
   Death device + shared, Closest Wins), each keeping its own
   top-3 collapse inside. */
var moreBoardsToggle=$("moreBoardsToggle");
if(moreBoardsToggle){
  moreBoardsToggle.addEventListener("click", function(){
    var body=$("moreBoardsBody"); if(!body) return;
    var open=body.classList.toggle("hidden")===false;
    moreBoardsToggle.setAttribute("aria-expanded", open ? "true" : "false");
    var chev=$("moreBoardsChevron"); if(chev) chev.textContent= open ? "\u25B4" : "\u25BE";
  });
}
$("howToPlayBtn").addEventListener("click", function(){ openOverlay("howToPlay","howToPlayBtn"); });
$("howToCloseX").addEventListener("click", function(){ closeOverlay("howToPlay","howToPlayBtn"); });
$("howToCloseBtn").addEventListener("click", function(){ closeOverlay("howToPlay","howToPlayBtn"); });
$("howToPlay").addEventListener("click", function(e){ if(e.target===this) closeOverlay("howToPlay","howToPlayBtn"); });
$("practiceBtn").addEventListener("click", function(){ openOverlay("practicePanel","practiceBtn"); });
$("practiceCloseX").addEventListener("click", function(){ closeOverlay("practicePanel","practiceBtn"); });
$("practiceCloseBtn").addEventListener("click", function(){ closeOverlay("practicePanel","practiceBtn"); });
$("practicePanel").addEventListener("click", function(e){ if(e.target===this) closeOverlay("practicePanel","practiceBtn"); });
$("backupBtn").addEventListener("click", function(){ openOverlay("backupPanel","backupBtn"); });
$("backupCloseX").addEventListener("click", function(){ closeOverlay("backupPanel","backupBtn"); });
$("backupCloseBtn").addEventListener("click", function(){ closeOverlay("backupPanel","backupBtn"); });
$("backupPanel").addEventListener("click", function(e){ if(e.target===this) closeOverlay("backupPanel","backupBtn"); });
document.addEventListener("keydown", function(e){
  if(e.key!=="Escape") return;
  if(!$("howToPlay").classList.contains("hidden")) closeOverlay("howToPlay","howToPlayBtn");
  else if(!$("practicePanel").classList.contains("hidden")) closeOverlay("practicePanel","practiceBtn");
  else if(!$("backupPanel").classList.contains("hidden")) closeOverlay("backupPanel","backupBtn");
});
$("againBtn").addEventListener("click", function(){
  /* Play again replays the same kind of game: a creator game
     replays as a creator game (still practice only, still saved
     nowhere), a challenge game re-deals its identical seeded 20,
     a Sudden Death game starts a fresh Sudden Death, and the rest
     behave as they always did. */
  if(state && state.creator && state.creatorKind==="bonus"){ setCoverPace(state.pace); startCreatorBonusGame(); return; }
  if(state && state.creator && state.creatorKind==="legend"){ setCoverPace(state.pace); startCreatorLegendGame(); return; }
  if(state && state.creator){ show("screen-cover"); return; }
  if(state && state.challenge && state.challengePayload){ startChallengeGameV2(state.challengePayload, state.pace); return; }
  if(state && state.challenge && state.seed){ startChallengeGame(state.seed, state.pace); return; }
  /* Play again after a Daily Gauntlet: a day that already scored
     — finished OR quit, both count and close the day — goes back
     to the cover (its button reads Done): a daily never scores
     twice, and a quit daily is never replayed. */
  if(state && state.mode==="daily"){
    setCoverPace(state.pace);
    if(state.dailyDate && dailyCompletedOn(state.dailyDate)){ show("screen-cover"); refreshDailyCover(); return; }
    startDailyGauntlet(state.dailyDate || dailyDateString());
    return;
  }
  if(state && state.mode==="gauntlet"){ startSeededGauntlet(!!state.suddenDeath); }
  else if(state && state.mode==="legend"){ installSeed(null); startGame("legend", buildLegendGauntlet()); }
  else show("screen-cover");
});
/* Review your Answers: scrolls the results screen down to the
   end-of-game review endGame just rendered below the card —
   every question, the player's answer, the correct answer, and
   the "Why this is right:" line where the question has one.
   Same review, same data; the button is only the way down to
   it, offered on every results screen because endGame renders
   the review for every finished game. */
$("reviewBtn").addEventListener("click", function(){
  var el=$("reviewHead") || $("reviewList");
  if(!el) return;
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({behavior: calm ? "auto" : "smooth", block:"start"});
});
/* The Legend Gauntlet starts from the perfect game's results
   screen, at the same pace the perfect game was played at. */
$("legendBtn").addEventListener("click", function(){
  if(!state) return;
  sfxFanfare();
  installSeed(null);
  setCoverPace(state.pace);
  startGame("legend", buildLegendGauntlet());
});
$("coverBtn").addEventListener("click", function(){ show("screen-cover"); });
$("lateNameBtn").addEventListener("click", saveLateName);
$("lateName").addEventListener("keydown", function(e){ if(e.key==="Enter") saveLateName(); });

/* Score backup wiring: download, copy, file import, paste import.
   The file input is hidden; its button just opens the picker, and
   picking the same file twice still re-fires change because the
   input's value is cleared after every read. */
/* Sound mute toggles: one on the cover, one in the game header
   next to Quit. Both flip the same switch, stay in sync, and the
   choice persists in localStorage (see GAME SOUND above). */
$("soundBtn").addEventListener("click", function(){ setSoundMuted(!soundMuted); });
$("soundBtnGame").addEventListener("click", function(){ setSoundMuted(!soundMuted); });
updateSoundBtns();

$("exportBtn").addEventListener("click", exportScoresFile);
$("copyBackupBtn").addEventListener("click", copyBackupCode);
$("importFileBtn").addEventListener("click", function(){ $("importFile").click(); });
$("importFile").addEventListener("change", function(){
  var f=this.files && this.files[0];
  this.value="";
  if(!f) return;
  var reader=new FileReader();
  reader.onload=function(){ importBackupText(String(reader.result||"")); };
  reader.onerror=function(){ backupMsg("Couldn't read that file — try the backup code instead: copy it in the other browser and paste it here."); };
  reader.readAsText(f);
});
$("importCodeBtn").addEventListener("click", function(){
  var v=$("backupCode").value;
  if(!v.trim()){ backupMsg("Paste a backup code into the box first — copy it from the game in the browser that has your scores."); return; }
  importBackupText(v);
});
refreshBackupUI();

/* ============ TYPED-ANSWER KEYBOARD CLEARANCE ============
   On a phone, the on-screen keyboard (and the bar above it) can
   cover the typed-answer row — the input plus Lock it in and Pass —
   because the row sits low in the card and the page cannot scroll
   far enough. Two defences: while a typed input is focused the page
   carries body.kbopen (extra bottom padding, see CSS), and the row
   is scrolled into view once the keyboard has slid up — on focus,
   and again whenever the visual viewport shrinks (the keyboard
   opening), so the controls end up fully visible and tappable
   above the keyboard.

   That auto-scroll must never fight the player, though: scrolling
   on a phone fires visual-viewport resize events too, so without a
   guard every attempt to scroll up and look at the question's
   picture got yanked straight back down to the answer row. The
   first touch or wheel gesture while the keyboard is open sets
   typedUserHold, and the auto-scroll stands down for the rest of
   that question — the player can scroll up and down freely, as
   often as they like. It re-arms on the next question (and on a
   fresh tap into the input), so keyboard clearance still works. */
var typedUserHold=false;
document.addEventListener("touchstart", holdTypedScroll, {passive:true});
document.addEventListener("touchmove", holdTypedScroll, {passive:true});
document.addEventListener("wheel", holdTypedScroll, {passive:true});
if(window.visualViewport){
  window.visualViewport.addEventListener("resize", function(){
    var kbOpen = window.innerHeight - window.visualViewport.height > 60;
    if(kbOpen && $("typedInput") && document.activeElement===$("typedInput")){
      document.body.classList.add("kbopen");
      scheduleTypedScroll();
    }
  });
}

var grid=$("modeGrid");
MODES.forEach(function(m){
  var b=document.createElement("button");
  b.type="button"; b.className="modecard";
  b.innerHTML='<span class="mt">'+m.name+'</span><span class="md">'+m.desc+" · "+(m.cw?10:Math.min(10,m.pool().length))+" questions</span>";
  b.addEventListener("click", function(){
    /* Closest Wins tile: not multiple choice — hand off to the
       10-question Closest Wins practice round (cover script). */
    if(m.cw){
      if(typeof window.startClosestWinsPractice==="function") window.startClosestWinsPractice();
      return;
    }
    /* Every practice round deals in its own pool's
       least-recently-dealt order (see Practice-round cycling
       above): the plain pools deal straight from that order, and
       Mixed Bag's rotation dealer picks under the same discipline
       while its deal runs. The dealt questions are then stamped
       into that pool's cycle, so the next round of the same
       category continues where this one left off. */
    var dealt;
    if(m.deal){
      practiceLruPool=m.id;
      try{ dealt=m.deal(); }
      finally{ practiceLruPool=null; }
    } else {
      dealt=practiceDeal(m.id, mcDealable(m.pool()), 10);
    }
    markPracticeDealt(m.id, dealt);
    var qs=dealt.map(function(q){ return {kind:"mc", data:q, round:0, pts:10}; });
    /* practice pools with fewer than 10 unique items cycle with the full set */
    installSeed(null);
    startGame(m.id, qs);
  });
  grid.appendChild(b);
});

/* ================= OWNER FIX 2026-11-11: CASING + PERSON/CAPITAL DISTRACTORS =================
   Final load-time pass, run after every bank, baked stage, and repair
   pass above, before the cover renders or any game can start. It
   changes only answer/choice DATA and MC exclusion stamps — never
   gameplay, scoring, timers, judging, storage keys, or prompt text.
   Fully deterministic (no rand() calls): the same repaired banks on
   every device, so seeded/challenge deals stay identical.
   Three classes, per the owner's website play:
   (1) CASING — proper nouns stored all-lowercase ("rico tubbs",
       "get shorty", "fisher effect") are capitalised via a verified
       canon plus the bank's own name/place tables. Common-noun
       answers keep their casing; judging is case-insensitive, so no
       judging behaviour changes.
   (2) PERSON SETS — a multiple-choice question whose answer is a
       person or fictional character may only offer persons /
       characters of the same kind (real vs character), gender-matched
       where gender is known, harvested same-category first. A set
       that cannot field three is stamped mcExcluded (never dealt as
       multiple choice; its typed use is untouched). Hand-authored
       sets below cover the verified headliners, including the Miami
       Vice item: Rico Tubbs now sits with Hawk, Virgil Tibbs, and
       Neal Washington — Black male 1980s TV detective characters,
       matching era, domain, gender, and race.
   (3) CAPITALS — authored capital sets restored verbatim where a
       repair pass had overwritten them; generated capital sets
       rebuilt regionally: US state capitals draw in-state cities and
       neighbouring states' capitals first (never foreign cities,
       never far-flung US cities), world capitals draw same-region
       capitals first, Canadian capitals draw Canadian cities. */
var OWNER_FIX_STATS={caseFixed:0,caseTyped:0,authoredSets:0,swaps:0,personFixed:0,personExcluded:0,mirrorFixed:0,mirrorExcluded:0,capitalsRestored:0,capitalsRebuilt:0,checked:0};
(function ownerFixPass(){
  function T(f){ try{ return f(); }catch(e){ return null; } }
  function hasUpper(s){ return /[A-Z\u00C0-\u00DE]/.test(s); }
  function allLower(s){ return typeof s==="string" && /[a-z\u00E0-\u00FF]/.test(s) && !hasUpper(s); }
  /* ---------- (1) CASING ---------- */
  var HAND_CANON={
    "rico tubbs":"Rico Tubbs","get shorty":"Get Shorty","fisher effect":"Fisher Effect",
    "gale gilbert":"Gale Gilbert","cy young":"Cy Young","herbert hoover":"Herbert Hoover",
    "joe mcginnis":"Joe McGinnis","jack black":"Jack Black","black beauty":"Black Beauty",
    "bookem dano":"Book 'em, Dano","coming to america":"Coming to America",
    "devil wears prada":"Devil Wears Prada","dora the explorer":"Dora the Explorer",
    "fox in socks":"Fox in Socks","heart will go on":"Heart Will Go On",
    "hotrod lincoln":"Hot Rod Lincoln","leader of the band":"Leader of the Band",
    "one fine day":"One Fine Day","puppy love":"Puppy Love",
    "straight outta lynwood":"Straight Outta Lynwood","wedding crashers":"Wedding Crashers",
    "shrek":"Shrek","modern english":"Modern English","spanish":"Spanish",
    "secret service":"Secret Service","greenland shark":"Greenland Shark",
    "k d lang":"K.D. Lang","andrew":"Andrew","bruce":"Bruce","cedric":"Cedric",
    "egon":"Egon","peter":"Peter","barton":"Barton","johnson":"Johnson",
    "michael":"Michael","sue":"Sue","cleary":"Cleary","underwood":"Underwood",
    "baker":"Baker","lucky":"Lucky","preacher":"Preacher","everett scott":"Everett Scott"
  };
  var TABLE_CANON={};
  function tcAdd(s){ if(typeof s==="string" && s.trim() && hasUpper(s)){ var k=norm(s); if(!TABLE_CANON[k]) TABLE_CANON[k]=s; } }
  T(function(){ Object.keys(NAME_GENDER).forEach(tcAdd); });
  T(function(){ DJ_FACES.forEach(tcAdd); CHAR_POOL.forEach(tcAdd); });
  T(function(){ Object.keys(FACE_GENDER).forEach(tcAdd); });
  T(function(){ DJ_PLACE_NAMES.forEach(tcAdd); CITY_NAMES.forEach(tcAdd); US_STATES.forEach(tcAdd); SKY_NAMES.forEach(tcAdd); });
  T(function(){ Object.keys(COUNTRY_REGION).forEach(tcAdd); });
  T(function(){ Object.keys(CAP_PAIRS).forEach(function(t){ CAP_PAIRS[t].forEach(function(p){ tcAdd(p[0]); tcAdd(p[1]); }); }); });
  T(function(){ CANADA_PAIRS.forEach(function(p){ tcAdd(p[0]); tcAdd(p[1]); }); });
  T(function(){ Object.keys(TEAM_POOLS).forEach(function(lg){ TEAM_POOLS[lg].forEach(tcAdd); }); });
  function canonForm(s){
    var k=norm(s);
    if(HAND_CANON[k]) return HAND_CANON[k];
    if(CASE_CANON[k] && hasUpper(CASE_CANON[k])) return CASE_CANON[k];
    if(TABLE_CANON[k]) return TABLE_CANON[k];
    return null;
  }
  function caseFixString(s){
    if(!allLower(s)) return s;
    var f=canonForm(s);
    if(f && f!==s) return f;
    return s;
  }
  /* ---------- classification helpers (bank's own tagging) ---------- */
  var NONPERSON_KINDS={country:1,state:1,continent:1,color:1,number:1,year:1,fulldate:1,month:1,season:1,decade:1,quantity:1,group:1};
  var PERSON_SUBS={character:1,author:1,president:1,"person:m":1,"person:f":1};
  var DEF_SUBS={title:1,group:1,animal:1,"animal:bird":1,"animal:fish":1,"animal:young":1,"pair:animal":1,dog:1,cat:1};
  var CAPSET={}, COUNTRYSET={}, STATESET={}, CITYSET={}, TITLESET={};
  ALL_CAPITALS.forEach(function(c){ CAPSET[norm(c)]=1; });
  Object.keys(COUNTRY_REGION).forEach(function(c){ COUNTRYSET[norm(c)]=1; });
  US_STATES.forEach(function(c){ STATESET[norm(c)]=1; });
  Object.keys(CITY_NORM).forEach(function(c){ CITYSET[c]=1; });
  Object.keys(TITLE_STRINGS).forEach(function(c){ TITLESET[c]=1; });
  function subOf(s){ return T(function(){ return subKindStr(s); }); }
  function kindOf(s){ var ki=T(function(){ return kindInfoAll(s); }); return ki?ki.kind:null; }
  function isCharStr(s){
    if(CHAR_NORM[norm(s)]) return true;
    var sk=subOf(s);
    if(sk==="character" || sk==="dog" || sk==="cat") return true;
    return false;
  }
  function definiteNonPerson(s){
    /* Positive person evidence beats every other reading — the same
       principle the TITLE_STRINGS harvest states: a singer who turns
       up as a choice in an album question is still a singer, even
       when her name is also an album title ("LeAnn Rimes"). */
    var k=kindOf(s); if(k==="person") return false;
    var sk=subOf(s);
    if(sk && (PERSON_SUBS[sk] || sk.indexOf("person:")===0)) return false;
    if(FACE_GENDER[s] || NAME_GENDER[norm(s)]) return false;
    if(k && NONPERSON_KINDS[k]) return true;
    if(sk && !(sk==="character" || sk==="dog" || sk==="cat")){
      /* An animal reading of a name-shaped string ("Michael J. Fox")
         is a surname accident, not a kind: a middle initial or a
         known first/surname token keeps it a person name. */
      if(sk.indexOf("animal")===0 && nameShapedAnswer(s)){
        var tk=norm(s).split(" ").filter(Boolean);
        if(/^[A-Z]\.$/.test(s.split(" ")[1]||"") || FIRSTNAMES[tk[0]] || SURNAMES[tk[tk.length-1]]) return false;
      }
      return true;
    }
    if(sk && (DEF_SUBS[sk] || sk.indexOf("team:")===0 || sk.indexOf("brand:")===0 || sk.indexOf("place:")===0)) return true;
    var n=norm(s);
    if(CAPSET[n] || COUNTRYSET[n] || STATESET[n] || CITYSET[n] || TITLESET[n]) return true;
    if(genderOfName(s)==="g") return true;
    return false;
  }
  var FIRSTNAMES={}, SURNAMES={};
  T(function(){
    Object.keys(NAME_GENDER).forEach(function(k){
      var parts=k.split(/\s+/).filter(Boolean);
      if(parts.length){ FIRSTNAMES[norm(parts[0])]=1; SURNAMES[norm(parts[parts.length-1])]=1; }
    });
    Object.keys(CASE_SURNAME).forEach(function(k){ SURNAMES[k]=1; });
    CHAR_POOL.forEach(function(k){
      var parts=String(k).split(/\s+/).filter(Boolean);
      if(parts.length){ FIRSTNAMES[norm(parts[0])]=1; SURNAMES[norm(parts[parts.length-1])]=1; }
    });
  });
  function personPositive(s){
    if(typeof s!=="string" || !s.trim()) return false;
    if(kindOf(s)==="person") return true;
    var sk=subOf(s);
    if(sk && (PERSON_SUBS[sk] || sk.indexOf("person:")===0)) return true;
    var n=norm(s);
    if(NAME_GENDER[n] || FACE_GENDER[s] || CHAR_NORM[n] || PRESIDENT_NORM[n] || AUTHOR_NORM[n]) return true;
    /* Name-shaped alone is not proof ("The Moon", "Marvin Gardens"):
       a fallback candidate needs a known first name or surname token,
       no settled non-person subkind/kind, and no "The " prefix. */
    if(!/^The\s/i.test(s) && nameShapedAnswer(s) && !definiteNonPerson(s)){
      var toks=n.split(" ").filter(Boolean);
      if(toks.length>=2 && (FIRSTNAMES[toks[0]] || SURNAMES[toks[toks.length-1]])) return true;
    }
    return false;
  }
  /* Lenient keep test for choices already inside a person set: an
     existing choice is only replaced when it is DEFINITELY not a
     person (settled other kind/subkind/registry) or breaks the
     kind/gender match — unclassified names (Kalakaua, Lili'uokalani)
     stay, exactly as authored. */
  function personKeepable(q, ans, c, ansChar){
    if(ansChar){ if(isCharStr(c)) return true; if(definiteNonPerson(c)) return false; return personPositive(c); }
    if(isCharStr(c)) return false;
    if(definiteNonPerson(c)) return false;
    if(kindOf(c)==="person") return true;
    var sk=subOf(c);
    if(sk && (PERSON_SUBS[sk] || sk.indexOf("person:")===0)) return true;
    var n=norm(c);
    if(NAME_GENDER[n] || FACE_GENDER[c] || PRESIDENT_NORM[n] || AUTHOR_NORM[n]) return true;
    return true; /* unclassified and not definitely anything else: keep as authored */
  }
  function ansIsPerson(q, ans){
    if(kindOf(ans)==="person") return true;
    var sk=T(function(){ return subKindAnswer(q, ans); });
    if(sk && (PERSON_SUBS[sk] || sk.indexOf("person:")===0)) return true;
    var n=norm(ans);
    if(NAME_GENDER[n] || FACE_GENDER[ans] || CHAR_NORM[n] || PRESIDENT_NORM[n] || AUTHOR_NORM[n]) return true;
    if(personSeekingPrompt(q.q) && nameShapedAnswer(ans)) return true;
    return false;
  }
  function genderOfStr(s){
    var g=T(function(){ return genderOfName(s); });
    if(g==="m" || g==="f") return g;
    var sk=subOf(s);
    if(sk==="person:m") return "m";
    if(sk==="person:f") return "f";
    return null;
  }
  /* ---------- (2a) authored set overrides ---------- */
  var AUTH_SETS=[
    ["rico tubbs","sonny crockett",["Rico Tubbs","Hawk","Virgil Tibbs","Neal Washington"]],
    /* Superseded 2026-11-13 (owner: "Didn't John Oliver do Daily
       Show too?" — he did, as a correspondent 2006–2013, after
       Colbert's 1997–2005 run, so the old set held TWO defensible
       answers). The set now deals Stewart (the host, never a
       correspondent), O'Brien, and Fallon — none of whom was
       ever a Daily Show correspondent. */
    ["stephen colbert","daily show",["Stephen Colbert","Jon Stewart","Conan O'Brien","Jimmy Fallon"]],
    ["zefram cochrane","first contact star trek",["Zefram Cochrane","James T. Kirk","Jean-Luc Picard","Jonathan Archer"]],
    ["taylor hicks","top 12 finalist",["Taylor Hicks","Clay Aiken","Adam Lambert","Chris Daughtry"]],
    ["cy young","most mlb wins",["Cy Young","Walter Johnson","Christy Mathewson","Grover Alexander"]],
    ["gale gilbert","5 superbowls",["Gale Gilbert","Jim Kelly","Dan Marino","John Elway"]],
    ["fred willard","dc follies",["Fred Willard","Christopher Guest","Martin Mull","Eugene Levy"]],
    ["casey kasem","reach for stars",["Casey Kasem","Dick Clark","Wolfman Jack","Rick Dees"]],
    ["joe mcginnis","palin stalker",["Joe McGinnis","Douglas Adams","Truman Capote","Norman Mailer"]],
    ["everett scott","most consecutive games played",["Everett Scott","Rabbit Maranville","Joe Sewell","Frankie Frisch"]],
    /* Superseded 2026-11-13 (the stage-name / birth-name fence):
       the question asks for a REAL name, so its company is other
       rappers' birth names — Eminem, Machine Gun Kelly, and Mac
       Miller are stage names and do not belong in this set. */
    ["davis burd","lil dickey",["Davis Burd","Marshall Mathers","Calvin Broadus","Curtis Jackson"]],
    ["lydia kuo","youngest winner of lpga",["Lydia Kuo","Minjee Lee","Jin Young Ko","Atthaya Thitikul"]],
    ["augustus gloop","willy wonka first to fail",["Augustus Gloop","Charlie Bucket","Mike Teavee","Willy Wonka"]],
    ["megan thee stallion","good news first album",["Megan Thee Stallion","Nicki Minaj","Missy Elliott","Lizzo"]],
    ["w p kinsella","shoeless joe",["W. P. Kinsella","Bernard Malamud","Philip Roth","J. D. Salinger"]],
    ["jerome david","jd salinger full name",["Jerome David","Ernest Hemingway","F. Scott Fitzgerald","William Faulkner"]],
    ["diane warren","cant fight the moonlight",["Diane Warren","Carole King","Linda Perry","Cyndi Lauper"]],
    ["aretha franklin","respect",["Aretha Franklin","Gladys Knight","Diana Ross","Tina Turner"]],
    ["carl perkins","blue suede shoes",["Carl Perkins","Jerry Lee Lewis","Elvis Presley","Johnny Cash"]],
    ["the lone ranger","spirit walker",["The Lone Ranger","Hong Kong Phooey","Wile E. Coyote","Dr. Richard Burke"]],
    ["hong kong phooey","ponrod pooch",["Hong Kong Phooey","Dr. Richard Burke","The Lone Ranger","Wile E. Coyote"]],
    ["dr richard burke","tom selleck in friends",["Dr. Richard Burke","Hong Kong Phooey","The Lone Ranger","Wile E. Coyote"]],
    ["judy rodman and keith hinton","one way ticket",["Judy Rodman and Keith Hinton","Barry Mann and Cynthia Weil","Jerry Leiber and Mike Stoller","Mushroom (Aloe Blacc) and Crocodile (Nick Carter)"]]
  ];
  var AUTH_SWAPS=[
    ["sittin on top of the world","followed","leann rimes","Twisted Angel"],
    ["lady gentlemen","2011 album","leann rimes","This Woman"],
    ["remnants","2016 album","leann rimes","Spitfire"],
    ["1999","self titled","leann rimes","1997"],
    ["pale rider","good piece of hickory","leann rimes","Unforgiven"]
  ];
  var authoredDone={};
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || !Array.isArray(q.choices)) return;
    var ans=q.choices[q.a];
    if(typeof ans!=="string") return;
    var an=norm(ans), qn=norm(q.q);
    for(var i=0;i<AUTH_SETS.length;i++){
      var A=AUTH_SETS[i];
      if(an===A[0] && qn.indexOf(A[1])>-1){
        q.choices=A[2].slice();
        q.a=q.choices.indexOf(A[2][0]);
        q.mcExcluded=false; delete q.mcExcludeReason;
        authoredDone[q.q]=1; OWNER_FIX_STATS.authoredSets++;
        return;
      }
    }
    for(var j=0;j<AUTH_SWAPS.length;j++){
      var S=AUTH_SWAPS[j];
      if(an===S[0] && qn.indexOf(S[1])>-1){
        for(var k=0;k<q.choices.length;k++){
          if(k!==q.a && norm(q.choices[k])===S[2]){
            var alts=[S[3],"This Woman","Family","Spitfire","Twisted Angel","Blue"], pickS=null;
            for(var ai=0;ai<alts.length;ai++){
              var dup=false;
              for(var di=0;di<q.choices.length;di++){ if(di!==k && norm(q.choices[di])===norm(alts[ai])) dup=true; }
              if(!dup){ pickS=alts[ai]; break; }
            }
            if(pickS){ q.choices[k]=pickS; OWNER_FIX_STATS.swaps++; }
          }
        }
        authoredDone[q.q]=1;
        return;
      }
    }
  });
  /* ---------- (1b) casing sweep over stored + baked choices ---------- */
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || !Array.isArray(q.choices)) return;
    OWNER_FIX_STATS.checked++;
    q.choices=q.choices.map(function(c){
      if(typeof c!=="string") return c;
      var f=caseFixString(c);
      if(f!==c){ OWNER_FIX_STATS.caseFixed++; return f; }
      return c;
    });
  });
  /* typed answers: same canon, plus title-case for classified persons */
  var typedPools=[];
  ["easy","medium","hard","vhard"].forEach(function(t){ typedPools.push(TYPED[t]); });
  typedPools.push(SUPERHARD, EXTREMEHARD, LUDICROUSHARD, IMPOSSIBLEHARD, GENIUSHARD);
  Object.keys(NEWCAT).forEach(function(k){ typedPools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ typedPools.push(NEWBANKS[k]); });
  var tSeen=[];
  typedPools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){
      if(!q || tSeen.indexOf(q)>-1) return; tSeen.push(q);
      if(typeof q.answer==="string" && allLower(q.answer)){
        var aSubT=T(function(){ return subKindStr(q.answer); });
        if(aSubT && !(PERSON_SUBS[aSubT] || aSubT.indexOf("person:")===0 || aSubT==="character")) return;
        var f=caseFixString(q.answer);
        if(f===q.answer && personPositive(q.answer)) f=titleCaseName(q.answer);
        if(f!==q.answer){ q.answer=f; OWNER_FIX_STATS.caseTyped++; }
      }
      if(Array.isArray(q.accept)){
        q.accept=q.accept.map(function(c){
          if(typeof c!=="string" || !allLower(c)) return c;
          var f2=caseFixString(c);
          if(f2===c && personPositive(c)) f2=titleCaseName(c);
          if(f2!==c) OWNER_FIX_STATS.caseTyped++;
          return f2;
        });
      }
    });
  });
  /* ---------- (2b) person-set whitelist repair ---------- */
  var realPool=[], charPool=[], realPoolByCat={}, charPoolByCat={};
  (function buildPersonPools(){
    var seenR={}, seenC={}, seenRC={}, seenCC={};
    function consider(s, cat){
      if(typeof s!=="string") return;
      if(isCharStr(s)){
        if(!seenC[norm(s)]){ seenC[norm(s)]=1; charPool.push(s); }
        if(cat){ var kc=cat+"|"+norm(s); if(!seenCC[kc]){ seenCC[kc]=1; (charPoolByCat[cat]=charPoolByCat[cat]||[]).push(s); } }
      }
      else if(personPositive(s)){
        if(!seenR[norm(s)]){ seenR[norm(s)]=1; realPool.push(s); }
        if(cat){ var kr=cat+"|"+norm(s); if(!seenRC[kr]){ seenRC[kr]=1; (realPoolByCat[cat]=realPoolByCat[cat]||[]).push(s); } }
      }
    }
    ALL_MC_QUESTIONS.forEach(function(q){
      if(!q || !Array.isArray(q.choices)) return;
      q.choices.forEach(function(c){ consider(c, q.cat||""); });
    });
    Object.keys(NAME_GENDER).forEach(function(k){ consider(k, ""); });
    DJ_FACES.forEach(function(k){ consider(k, ""); });
    CHAR_POOL.forEach(function(k){ consider(k, ""); });
  })();
  function rankedPool(q, ansChar){
    var byCat = ansChar ? (charPoolByCat[q.cat||""]||[]) : (realPoolByCat[q.cat||""]||[]);
    var all = ansChar ? charPool : realPool;
    var seen={}, out=[];
    byCat.concat(all).forEach(function(s){ if(!seen[norm(s)]){ seen[norm(s)]=1; out.push(s); } });
    return out;
  }
  function repairPersonSet(q){
    var ans=q.choices[q.a];
    var ansChar=isCharStr(ans) || (T(function(){ return subKindAnswer(q, ans); })==="character");
    var ansGender=genderOfStr(ans);
    var pool=rankedPool(q, ansChar);
    var used={}; used[norm(ans)]=1;
    q.choices.forEach(function(c){ if(typeof c==="string") used[norm(c)]=used[norm(c)]||0; });
    var kept={};
    q.choices.forEach(function(c,i){ if(i!==q.a) kept[norm(c)]=1; });
    function candOk(s, relaxGender){
      if(typeof s!=="string" || !s.trim()) return false;
      var n=norm(s);
      if(used[n] && !kept[n]) return false;
      if(n===norm(ans)) return false;
      if(ansChar){ if(!isCharStr(s)) return false; }
      else { if(isCharStr(s)) return false; if(!personPositive(s)) return false; }
      if(ansGender){
        var g=genderOfStr(s);
        if(g && g!==ansGender) return false;
        if(!g && !relaxGender) return false;
      }
      return true;
    }
    var out=q.choices.slice();
    var badIdx=[];
    for(var i=0;i<out.length;i++){
      if(i===q.a) continue;
      var c=out[i];
      var ok = personKeepable(q, ans, c, ansChar);
      if(ok && ansGender){ var g0=genderOfStr(c); if(g0 && g0!==ansGender) ok=false; }
      if(!ok) badIdx.push(i);
    }
    if(!badIdx.length) return true;
    var cands=[];
    pool.forEach(function(s){ if(candOk(s,false)) cands.push(s); });
    var bi=0;
    var taken={};
    q.choices.forEach(function(c){ taken[norm(c)]=1; });
    for(var b=0;b<badIdx.length;b++){
      var slot=badIdx[b], filled=false;
      for(var ci=0;ci<cands.length;ci++){
        var s=cands[ci];
        if(taken[norm(s)]) continue;
        out[slot]=s; taken[norm(s)]=1; filled=true; break;
      }
      if(!filled){
        for(var cj=0;cj<pool.length;cj++){
          var s2=pool[cj];
          if(taken[norm(s2)]) continue;
          if(!candOk(s2,true)) continue;
          out[slot]=s2; taken[norm(s2)]=1; filled=true; break;
        }
      }
      if(!filled) return false;
    }
    q.choices=out;
    return true;
  }
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || q.type!=="mc" || !Array.isArray(q.choices) || q.mcExcluded || q.noDeal) return;
    if(authoredDone[q.q]) return;
    var ans=q.choices[q.a];
    if(typeof ans!=="string") return;
    if(!ansIsPerson(q, ans)) return;
    var before=q.choices.join("|");
    if(repairPersonSet(q)){
      if(q.choices.join("|")!==before) OWNER_FIX_STATS.personFixed++;
    } else {
      q.mcExcluded=true;
      q.mcExcludeReason="person-answer set cannot field 3 person choices (owner fix)";
      OWNER_FIX_STATS.personExcluded++;
    }
  });
  /* ---------- (2c) mirror: definite non-person answer, person distractor ---------- */
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || q.type!=="mc" || !Array.isArray(q.choices) || q.mcExcluded || q.noDeal) return;
    if(authoredDone[q.q]) return;
    var ans=q.choices[q.a];
    if(typeof ans!=="string") return;
    var aSub=T(function(){ return subKindAnswer(q, ans); });
    var aKind=kindOf(ans);
    var definite = (aSub && (DEF_SUBS[aSub] || aSub.indexOf("place:")===0 || aSub.indexOf("brand:")===0 || aSub.indexOf("team:")===0 || aSub==="element" || aSub==="sport" || aSub==="body" || aSub==="symbol" || aSub==="acronym" || aSub==="phrase" || aSub==="quantity" || aSub==="number" || aSub==="date:year"))
      || (aKind && NONPERSON_KINDS[aKind]);
    if(!definite || ansIsPerson(q, ans)) return;
    if(aSub && (aSub.indexOf("team:")===0 || aSub==="group")) return;
    if(T(function(){ return genderOfName(ans); })==="g") return;
    var bad=[];
    q.choices.forEach(function(c,i){
      if(i===q.a) return;
      var cs=T(function(){ return subKindChoice(q, c); });
      if(aSub && cs===aSub) return; /* same-kind company is fine by definition */
      if(personPositive(c) && !definiteNonPerson(c)) bad.push(i);
      else if(kindOf(c)==="person") bad.push(i);
    });
    if(!bad.length) return;
    /* harvest replacements sharing the answer's subkind from other sets */
    var repl=[], taken={};
    q.choices.forEach(function(c){ taken[norm(c)]=1; });
    if(aSub){
      ALL_MC_QUESTIONS.forEach(function(o){
        if(repl.length>=bad.length) return;
        if(!o || !Array.isArray(o.choices) || o===q) return;
        o.choices.forEach(function(c){
          if(repl.length>=bad.length) return;
          if(typeof c!=="string" || taken[norm(c)]) return;
          var cs=T(function(){ return subKindChoice(o, c); });
          if(cs===aSub && !personPositive(c)){ repl.push(c); taken[norm(c)]=1; }
        });
      });
    }
    if(repl.length>=bad.length){
      bad.forEach(function(idx,bi){ q.choices[idx]=repl[bi]; });
      OWNER_FIX_STATS.mirrorFixed++;
    } else {
      q.mcExcluded=true;
      q.mcExcludeReason="non-person answer set holds a person choice (owner fix)";
      OWNER_FIX_STATS.mirrorExcluded++;
    }
  });
  /* ---------- (3) CAPITALS ---------- */
  var US_CAPITALS={"Alabama":"Montgomery","Alaska":"Juneau","Arizona":"Phoenix","Arkansas":"Little Rock","California":"Sacramento","Colorado":"Denver","Connecticut":"Hartford","Delaware":"Dover","Florida":"Tallahassee","Georgia":"Atlanta","Hawaii":"Honolulu","Idaho":"Boise","Illinois":"Springfield","Indiana":"Indianapolis","Iowa":"Des Moines","Kansas":"Topeka","Kentucky":"Frankfort","Louisiana":"Baton Rouge","Maine":"Augusta","Maryland":"Annapolis","Massachusetts":"Boston","Michigan":"Lansing","Minnesota":"Saint Paul","Mississippi":"Jackson","Missouri":"Jefferson City","Montana":"Helena","Nebraska":"Lincoln","Nevada":"Carson City","New Hampshire":"Concord","New Jersey":"Trenton","New Mexico":"Santa Fe","New York":"Albany","North Carolina":"Raleigh","North Dakota":"Bismarck","Ohio":"Columbus","Oklahoma":"Oklahoma City","Oregon":"Salem","Pennsylvania":"Harrisburg","Rhode Island":"Providence","South Carolina":"Columbia","South Dakota":"Pierre","Tennessee":"Nashville","Texas":"Austin","Utah":"Salt Lake City","Vermont":"Montpelier","Virginia":"Richmond","Washington":"Olympia","West Virginia":"Charleston","Wisconsin":"Madison","Wyoming":"Cheyenne"};
  var US_CAP_BY_NORM={}, US_STATE_BY_CAP={};
  Object.keys(US_CAPITALS).forEach(function(st){ US_CAP_BY_NORM[norm(US_CAPITALS[st])]=st; US_STATE_BY_CAP[norm(US_CAPITALS[st])]=norm(st); });
  var STATE_NORM_MAP={};
  Object.keys(US_CAPITALS).forEach(function(st){ STATE_NORM_MAP[norm(st)]=st; });
  var NEIGH_NORM={};
  Object.keys(STATE_NEIGHBORS).forEach(function(st){
    NEIGH_NORM[norm(st)]=(STATE_NEIGHBORS[st]||[]).map(function(x){ return norm(x); });
  });
  function stateDist(a, b){
    if(a===b) return 0;
    var seen={}; seen[a]=0; var fr=[a];
    while(fr.length){
      var nx=[];
      for(var i=0;i<fr.length;i++){
        var nbs=NEIGH_NORM[fr[i]]||[];
        for(var j=0;j<nbs.length;j++){
          if(seen[nbs[j]]===undefined){ seen[nbs[j]]=seen[fr[i]]+1; if(nbs[j]===b) return seen[nbs[j]]; nx.push(nbs[j]); }
        }
      }
      fr=nx;
    }
    return 99;
  }
  var INSTATE_CITIES={
    "Ohio":["Cleveland","Cincinnati","Toledo","Akron","Dayton"],
    "Indiana":["Fort Wayne","Evansville","South Bend","Gary"],
    "Illinois":["Chicago","Aurora","Naperville","Joliet"],
    "Michigan":["Detroit","Grand Rapids","Ann Arbor","Flint"],
    "Wisconsin":["Milwaukee","Green Bay","Racine","Appleton"],
    "Kentucky":["Louisville","Lexington","Bowling Green","Covington"],
    "Georgia":["Savannah","Augusta","Athens","Macon"],
    "Massachusetts":["Worcester","Springfield","Cambridge","Lowell"],
    "Alabama":["Birmingham","Huntsville","Mobile","Tuscaloosa"],
    "Arizona":["Tucson","Mesa","Scottsdale","Flagstaff"],
    "Idaho":["Idaho Falls","Pocatello","Nampa","Meridian"],
    "Utah":["Provo","Ogden","St. George","Logan"],
    "Florida":["Jacksonville","Miami","Tampa","Orlando"],
    "Colorado":["Colorado Springs","Boulder","Fort Collins","Aspen"],
    "Washington":["Seattle","Spokane","Tacoma","Vancouver"],
    "Nevada":["Las Vegas","Reno","Henderson","Boulder City"],
    "Oregon":["Portland","Eugene","Bend","Medford"],
    "New Jersey":["Newark","Jersey City","Princeton","Atlantic City"],
    "Kansas":["Wichita","Kansas City","Overland Park","Lawrence"],
    "Montana":["Billings","Missoula","Bozeman","Great Falls"],
    "Maine":["Portland","Bangor","Lewiston","Biddeford"],
    "New Mexico":["Albuquerque","Las Cruces","Taos","Roswell"],
    "Wyoming":["Casper","Laramie","Jackson","Gillette"],
    "Delaware":["Wilmington","Newark","Rehoboth Beach","Middletown"],
    "Hawaii":["Hilo","Kailua-Kona","Kahului","Lihue"],
    "Alaska":["Anchorage","Fairbanks","Sitka","Ketchikan"]
  };
  var US_CITY_SET={};
  Object.keys(US_CAPITALS).forEach(function(st){ US_CITY_SET[norm(US_CAPITALS[st])]=st; });
  CITY_NAMES.forEach(function(c){ if(!CAPSET[norm(c)] && !US_CITY_SET[norm(c)]){ /* world cities share this list; only mark known-US below */ } });
  ["Chicago","Los Angeles","Houston","Phoenix","Denver","Seattle","Boston","Miami","Dallas","Atlanta","Portland","Austin","Memphis","Nashville","Las Vegas","San Francisco","Philadelphia","Detroit","Minneapolis","New Orleans","St. Louis","Kansas City","Tucson","Santa Fe","Reno","Boise","Tulsa","Omaha"].forEach(function(c){ if(!US_CITY_SET[norm(c)]) US_CITY_SET[norm(c)]="US"; });
  Object.keys(INSTATE_CITIES).forEach(function(st){ INSTATE_CITIES[st].forEach(function(c){ US_CITY_SET[norm(c)]=st; }); });
  var CA_CAP_SET={}, CA_CITIES=["Vancouver","Toronto","Montreal","Calgary","Hamilton","Kelowna","Whistler","Laval","Gatineau","Red Deer","Banff","Summerside","Stratford","Montague","Rankin Inlet","Ottawa"];
  CANADA_PAIRS.forEach(function(p){ CA_CAP_SET[norm(p[1])]=p[0]; });
  CA_CITIES.forEach(function(c){ if(!CA_CAP_SET[norm(c)]) CA_CAP_SET[norm(c)]="CA city"; });
  function hashStr(s){ var h=0; for(var i=0;i<s.length;i++){ h=(Math.imul(h,31)+s.charCodeAt(i))|0; } return Math.abs(h); }
  function rotated(arr, seedStr){
    if(arr.length<2) return arr.slice();
    var k=hashStr(seedStr)%arr.length;
    return arr.slice(k).concat(arr.slice(0,k));
  }
  var AUTHORED_CAPITALS={
    "What is the capital of France?":[["London","Paris","Rome","Madrid"],1],
    "What is the capital of Japan?":[["Kyoto","Osaka","Tokyo","Nagoya"],2],
    "What is the capital of Canada?":[["Toronto","Ottawa","Vancouver","Montreal"],1],
    "What is the capital of Texas?":[["Houston","Dallas","Austin","San Antonio"],2],
    "What is the capital of Ontario?":[["Ottawa","Hamilton","Toronto","London"],2],
    "What is the capital of California?":[["Los Angeles","San Francisco","Sacramento","San Diego"],2],
    "What is the capital of Australia?":[["Sydney","Melbourne","Canberra","Perth"],2],
    "What is the capital of Brazil?":[["Rio de Janeiro","São Paulo","Brasília","Salvador"],2],
    "What is the capital of Egypt?":[["Cairo","Alexandria","Giza","Luxor"],0],
    "What is the capital of British Columbia?":[["Vancouver","Victoria","Kelowna","Whistler"],1],
    "What is the capital of New York state?":[["New York City","Buffalo","Albany","Rochester"],2],
    "What is the capital of Norway?":[["Bergen","Oslo","Trondheim","Tromsø"],1],
    "What is the capital of Kazakhstan?":[["Almaty","Astana","Shymkent","Karaganda"],1],
    "What is the capital of New Zealand?":[["Auckland","Christchurch","Wellington","Hamilton"],2],
    "What is the capital of Alberta?":[["Calgary","Edmonton","Red Deer","Banff"],1],
    "What is the capital of Vermont?":[["Burlington","Montpelier","Rutland","Barre"],1],
    "What is the capital of Morocco?":[["Casablanca","Marrakech","Rabat","Fez"],2],
    "What is the capital of Quebec?":[["Montreal","Quebec City","Laval","Gatineau"],1],
    "What is the capital of Bhutan?":[["Paro","Thimphu","Punakha","Haa"],1],
    "What is the capital of Burkina Faso?":[["Bobo-Dioulasso","Ouagadougou","Koudougou","Banfora"],1],
    "What is the capital of Nunavut?":[["Yellowknife","Iqaluit","Rankin Inlet","Whitehorse"],1],
    "What is the capital of South Dakota?":[["Sioux Falls","Rapid City","Pierre","Aberdeen"],2],
    "What is the capital of Palau?":[["Koror","Ngerulmud","Airai","Melekeok"],1],
    "What is the capital of Prince Edward Island?":[["Summerside","Charlottetown","Stratford","Montague"],1]
  };
  function rebuildUSSet(q, stateName){
    var ans=q.choices[q.a], sn=norm(stateName), cands=[], used={};
    used[norm(ans)]=1;
    function pushAll(list){ (list||[]).forEach(function(c){ if(!used[norm(c)]){ used[norm(c)]=1; cands.push(c); } }); }
    pushAll(rotated(INSTATE_CITIES[stateName]||[], stateName));
    var neigh=(NEIGH_NORM[sn]||[]).map(function(ns){ return STATE_NORM_MAP[ns]; }).filter(Boolean);
    pushAll(rotated(neigh.map(function(st){ return US_CAPITALS[st]; }), stateName+"n"));
    var d2=[];
    Object.keys(US_CAPITALS).forEach(function(st){ if(stateDist(sn, norm(st))===2) d2.push(US_CAPITALS[st]); });
    pushAll(rotated(d2, stateName+"d2"));
    if(sn==="alaska" || sn==="hawaii"){
      pushAll(["Juneau","Honolulu","Olympia","Salem","Sacramento","Carson City","Boise"]);
    }
    var allCaps=Object.keys(US_CAPITALS).map(function(st){ return US_CAPITALS[st]; });
    pushAll(rotated(allCaps, stateName+"all"));
    if(cands.length<3) return false;
    var picks=cands.slice(0,3), out=q.choices.slice(), pi=0;
    for(var i=0;i<out.length;i++){ if(i!==q.a){ out[i]=picks[pi++]; } }
    q.choices=out;
    return true;
  }
  function usSetOk(q, stateName){
    var sn=norm(stateName), pacific=(sn==="alaska"||sn==="hawaii");
    for(var i=0;i<q.choices.length;i++){
      if(i===q.a) continue;
      var c=q.choices[i], cn=norm(c);
      if(!US_CITY_SET[cn]) return false;
      var cst=US_STATE_BY_CAP[cn] || (US_CITY_SET[cn]!=="US" ? norm(US_CITY_SET[cn]) : null);
      if(cst){
        var d=stateDist(sn, cst);
        if(pacific){ if(!(d<=3 || cst==="alaska" || cst==="hawaii" || cst==="washington" || cst==="oregon" || cst==="california" || cst==="nevada" || cst==="idaho")) return false; }
        else if(d>2) return false;
      }
    }
    return true;
  }
  var REG_NORM={};
  ALL_CAPITALS.forEach(function(c){ if(CAP_REGION[c]) REG_NORM[norm(c)]=CAP_REGION[c]; });
  REG_NORM["jerusalem"]="asW"; REG_NORM["belfast"]="eu"; REG_NORM["funafuti"]="oc"; REG_NORM["washington dc"]="amN";
  function regOf(c){ return CAP_REGION[c] || REG_NORM[norm(c)] || ""; }
  function rebuildWorldSet(q){
    var ans=q.choices[q.a], reg=regOf(ans), cont=CAP_CONTINENT[reg]||"";
    var sameReg=[], sameCont=[], rest=[], used={};
    used[norm(ans)]=1;
    ALL_CAPITALS.forEach(function(c){
      if(used[norm(c)]) return; used[norm(c)]=1;
      var r=regOf(c);
      if(r===reg) sameReg.push(c);
      else if(cont && CAP_CONTINENT[r]===cont) sameCont.push(c);
      else rest.push(c);
    });
    var cands=rotated(sameReg, ans).concat(rotated(sameCont, ans+"c"), rotated(rest, ans+"r"));
    if(cands.length<3) return false;
    var picks=cands.slice(0,3), out=q.choices.slice(), pi=0;
    for(var i=0;i<out.length;i++){ if(i!==q.a){ out[i]=picks[pi++]; } }
    q.choices=out;
    return true;
  }
  function worldSetOk(q){
    var ans=q.choices[q.a], reg=regOf(ans), cont=CAP_CONTINENT[reg]||"";
    var regPool=0;
    ALL_CAPITALS.forEach(function(c){ if(c!==ans && regOf(c)===reg) regPool++; });
    for(var i=0;i<q.choices.length;i++){
      if(i===q.a) continue;
      var c=q.choices[i];
      if(!CAPSET[norm(c)]) return false;
      var r=regOf(c);
      if(regPool>=3 && r!==reg) return false;
      if(regPool<3 && cont && CAP_CONTINENT[r]!==cont) return false;
    }
    return true;
  }
  function rebuildCASet(q){
    var ans=q.choices[q.a], caps=CANADA_PAIRS.map(function(p){ return p[1]; });
    var pool=rotated(caps.filter(function(c){ return c!==ans; }), ans)
      .concat(CA_CITIES.filter(function(c){ return c!==ans; }));
    var used={}; used[norm(ans)]=1;
    var picks=[];
    pool.forEach(function(c){ if(picks.length<3 && !used[norm(c)]){ used[norm(c)]=1; picks.push(c); } });
    if(picks.length<3) return false;
    var out=q.choices.slice(), pi=0;
    for(var i=0;i<out.length;i++){ if(i!==q.a){ out[i]=picks[pi++]; } }
    q.choices=out;
    return true;
  }
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || q.type!=="mc" || !Array.isArray(q.choices) || q.mcExcluded || q.noDeal) return;
    var qt=String(q.q||"");
    var auth=AUTHORED_CAPITALS[qt];
    if(auth){
      var same = q.choices.length===auth[0].length && q.choices.every(function(c,i){ return c===auth[0][i]; }) && q.a===auth[1];
      if(!same){ q.choices=auth[0].slice(); q.a=auth[1]; OWNER_FIX_STATS.capitalsRestored++; }
      return;
    }
    var m=qt.match(/^What is the capital of (.+?)\?\s*$/);
    var djClue=T(function(){ return djRawClue(q); });
    var isDJCap = !m && djClue && /^capital of /i.test(djClue);
    if(!m && !isDJCap) return;
    var ans=q.choices[q.a];
    if(isDJCap){
      if(!worldSetOk(q)){ if(rebuildWorldSet(q)) OWNER_FIX_STATS.capitalsRebuilt++; }
      return;
    }
    var subj=m[1].replace(/^the US state of /i,"").replace(/ state$/i,"");
    var stateName=STATE_NORM_MAP[norm(subj)] || (US_CAPITALS[subj] ? subj : null);
    var isCA = CANADA_PAIRS.some(function(p){ return norm(p[0])===norm(subj); });
    if(stateName){
      if(!usSetOk(q, stateName)){ if(rebuildUSSet(q, stateName)) OWNER_FIX_STATS.capitalsRebuilt++; }
    } else if(isCA){
      var okCA=true;
      q.choices.forEach(function(c,i){ if(i!==q.a && !CA_CAP_SET[norm(c)]) okCA=false; });
      if(!okCA){ if(rebuildCASet(q)) OWNER_FIX_STATS.capitalsRebuilt++; }
    } else {
      if(!worldSetOk(q)){ if(rebuildWorldSet(q)) OWNER_FIX_STATS.capitalsRebuilt++; }
    }
  });
})();

updateBestLine();
renderScoreBoard();
fetchSharedLeaderboard();
/* The banks are built: the fixed load seed (see LOAD_BANK_SEED)
   has done its job, so clear it — from here on, dealing is
   Math.random again unless a game installs its own seed (a
   Gauntlet start generates one; startChallengeGame installs the
   challenge link's seed itself, below). */
installSeed(null);
/* If a game was in progress when this page last closed or was
   reloaded — including a scroll-triggered webview reload mid-game —
   pick it back up on the playing screen exactly where it left off
   instead of starting over. A challenge link outranks the resume.
   A v2 link reconstructs the challenger's game exactly; if it
   cannot be reconstructed (an incomplete link, or one made by a
   different build), the cover shows a couldn't-load note and no
   game is started — the in-progress game is not resumed either,
   so a bad link never silently swaps in a different game. A v1
   seed link starts its seeded Gauntlet fresh, as it always has. */
if(CHALLENGE && CHALLENGE.v2!=null){
  if(!startChallengeGameV2(CHALLENGE.v2, CHALLENGE.pace)) showChallengeLoadFailure();
}
else if(CHALLENGE) startChallengeGame(CHALLENGE.seed, CHALLENGE.pace);
else restoreProgress();

/* ============ OWNER-RULED SETS — LATE PINS (2026-11-12) ============
   Hand-authored choice sets for the questions the owner flagged,
   applied here — after every load-time repair pass and every
   baked stage — because the repair passes re-drew these sets
   from their generic pools whenever a choice was missing from
   their tables: the NCIS set dealt Buck Rogers / Toy Story /
   Big Hero 6 characters, the Patsy Cline set dealt modern pop
   singers, the Homer sets dealt modern novelists, and the
   Lord of the Rings director set dealt an actress and a
   director who died in 1973. The bar applied to every set:
   same show where the show is named, otherwise same kind
   (profession included — directors only for director
   questions) + gender + race + genre/domain + era. Twiki,
   Lotso and Baymax survive only where they are the answer or
   inside their own domain. The classical names and the
   modern thriller writers are registered as authors first,
   so the deal-time guard reads them as the answer's own kind. */
(function lateOwnerPins(){
  ["Plato","Socrates","Plutarch","Paula Hawkins","Tana French","Ruth Ware"].forEach(function(n){ AUTHOR_STRINGS[norm(n)]=n; AUTHOR_NORM[norm(n)]=1; });
  /* The pinned names are registered with the classifiers, so the
     deal-time guard reads each pinned filler as the answer's own
     kind (person of the same gender, or group) instead of an
     unknown string. The Famous Faces subjects and fillers are
     registered the same way: a pictured person's set must read
     as one kind, one gender, one race, one era. */
  ["Chuck Berry", "Little Richard", "Jerry Lee Lewis", "Hank Williams", "George Jones", "Merle Haggard", "Waylon Jennings", "Willie Nelson", "John Williams", "Hans Zimmer", "James Horner", "Marvin Gaye", "Ray Charles", "Curtis Mayfield", "Robert Plant", "Roger Daltrey", "Mick Jagger", "Smokey Robinson", "Peabo Bryson", "James Ingram", "George Michael", "The Notorious B.I.G.", "Nas", "Jay-Z", "George Frideric Handel", "Antonio Vivaldi", "Henry Purcell", "Mark Hamill", "Alec Guinness", "Peter Cushing", "Michael Keaton", "Val Kilmer", "George Clooney", "Jose Feliciano", "Ronnie Milsap", "Sam Cooke", "Fats Domino", "Nat King Cole", "Dean Martin", "Roy Orbison", "Perry Como", "Frank Sinatra", "Denzel Washington", "Morgan Freeman", "Sidney Poitier", "Samuel L. Jackson", "Jackie Chan", "Jet Li", "Chow Yun-fat", "Donnie Yen", "Bruce Lee", "J. K. Simmons", "JK Simmons", "Bryan Cranston", "Jeff Bridges", "Robert De Niro", "Al Pacino", "Jack Nicholson", "Dustin Hoffman", "James Dean", "Marlon Brando", "Paul Newman", "Steve McQueen", "Clint Eastwood", "John Wayne", "Gary Cooper", "David Bowie", "Justin Timberlake", "Nick Carter", "Lance Bass", "JC Chasez", "Billy Gibbons", "Dusty Hill", "Eric Clapton", "Michael Jackson", "Prince", "Cristiano Ronaldo", "Lionel Messi", "Luka Modrić", "Robert Lewandowski", "Usain Bolt", "Michael Jordan", "Walt Frazier", "Carl Lewis", "Muhammad Ali", "George Foreman", "Mike Tyson", "Joe Frazier", "Lou Ferrigno", "Tony Hawk", "Arnold Schwarzenegger", "Sylvester Stallone", "Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Kofi Annan", "Quentin Tarantino", "David Fincher", "Joel Coen", "Homer", "Plutarch", "Bruno Mars", "Pharrell Williams"].forEach(function(n){ NAME_GENDER[n]="m"; GENDER_NORM[norm(n)]="m"; });
  ["Celine Dion", "Barbra Streisand", "Bonnie Tyler", "Kim Carnes", "Belinda Carlisle", "Christina Aguilera", "Jessica Simpson", "Mandy Moore", "Alanis Morissette", "Jann Arden", "Selena Gomez", "Demi Lovato", "Camila Cabello", "Leona Lewis", "Alexandra Burke", "Jordin Sparks", "Aretha Franklin", "Diana Ross", "Dionne Warwick", "Alicia Keys", "Mary J. Blige", "Toni Braxton", "Taylor Swift", "Kesha", "LeAnn Rimes", "Carrie Underwood", "Miley Cyrus", "Tori Amos", "Halle Berry", "Kerry Washington", "Viola Davis", "Angela Bassett", "Julia Roberts", "Nicole Kidman", "Angelina Jolie", "Sandra Bullock", "Jessica Chastain", "Christina Hendricks", "Kate Winslet", "Julianne Hough", "Christina Ricci", "Dana Perino", "Hillary Clinton", "Sarah Palin", "Kellyanne Conway", "Condoleezza Rice", "Kamala Harris", "Michelle Obama", "Shirley Chisholm", "Serena Williams", "Venus Williams", "Naomi Osaka", "Coco Gauff", "Billie Jean King", "Martina Navratilova", "Chris Evert", "Steffi Graf", "Judy Garland", "Liza Minnelli", "Bette Midler", "Debbie Harry", "Cher", "Cyndi Lauper", "Madonna"].forEach(function(n){ NAME_GENDER[n]="f"; GENDER_NORM[norm(n)]="f"; });
  ["The Everly Brothers", "The Righteous Brothers", "Deep Purple", "Led Zeppelin", "Black Sabbath", "Uriah Heep", "Iron Butterfly", "Steppenwolf", "Glass Tiger", "The Outfield", "Wang Chung", "Mr. Mister", "Modest Mouse", "The Shins", "Franz Ferdinand", "Arctic Monkeys", "Poison", "En Vogue", "TLC", "Destiny's Child", "The Supremes", "Wilson Phillips", "The Bangles", "EXO", "SEVENTEEN", "Stray Kids"].forEach(function(n){ NAME_GROUP[n]=1; GROUP_NORM[norm(n)]=1; MUSIC_BAND_NORM[norm(n)]=1; });

  ["Al Pacino", "Jack Nicholson", "Dustin Hoffman", "Paul Newman", "Steve McQueen", "John Wayne", "Gary Cooper", "Joe Frazier", "Carl Lewis", "Luka Modrić", "Robert Lewandowski", "Kofi Annan", "Ralph Waldo Emerson", "W. E. B. Du Bois", "Booker T. Washington", "John Lewis"].forEach(function(n){ NAME_GENDER[n]="m"; GENDER_NORM[norm(n)]="m"; });
  ["Harriet Quimby", "Valentina Tereshkova", "Jacqueline Cochran", "Sarah Vaughan", "Glenn Close", "Meryl Streep", "Sophia Loren", "Julie Andrews", "Angela Merkel", "Theresa May", "Sirimavo Bandaranaike", "Sheikh Hasina", "Aung San Suu Kyi", "Willa Brown", "Janet Bragg", "Mae Jemison", "Jane Addams", "Dorothea Dix", "Florence Nightingale", "Susan B. Anthony", "Lucretia Mott", "Alice Paul", "Clara Barton", "Harriet Tubman", "Sojourner Truth", "Claudette Colvin", "Bessie Coleman", "Amelia Earhart"].forEach(function(n){ NAME_GENDER[n]="f"; GENDER_NORM[norm(n)]="f"; });

  ["Danny Elfman", "Carl Perkins", "Otis Redding", "John Lennon", "Paul McCartney", "Bob Dylan", "Cary Grant", "Gregory Peck", "Keanu Reeves", "Dwayne Johnson", "Pelé"].forEach(function(n){ NAME_GENDER[n]="m"; GENDER_NORM[norm(n)]="m"; });
  ["Lauren Bacall", "Marilyn Monroe", "Grace Kelly", "Scarlett Johansson", "Emma Watson", "Jennifer Lawrence"].forEach(function(n){ NAME_GENDER[n]="f"; GENDER_NORM[norm(n)]="f"; });  /* The kind caches were filled during the load passes, before

  ["Humphrey Bogart", "Clark Gable", "Medgar Evers", "Ralph Abernathy", "Martin Luther King Jr."].forEach(function(n){ NAME_GENDER[n]="m"; GENDER_NORM[norm(n)]="m"; });
  ["Ella Fitzgerald", "Billie Holiday", "Nina Simone", "Katharine Hepburn", "Vivien Leigh", "Ingrid Bergman"].forEach(function(n){ NAME_GENDER[n]="f"; GENDER_NORM[norm(n)]="f"; });     these registrations existed; clear them so deal-time
     classification is recomputed from the completed tables. */
  /* Bank-wide narrow-domain pass (owner ruling, 2026-11-12 —
     "make the choices just as I just did", extending the
     Flintstone / Chichen Itza / Kahanamoku fixes to every pool):
     the cereal mascots and the authors named in the pins below
     are registered with the classifiers first, so each pinned
     filler reads as the answer's own kind and domain. */
  ["Count Chocula", "King Vitaman", "Sugar Bear", "Dig 'Em Frog"].forEach(function(n){ CHAR_NAMES.push(n); CHAR_NORM[norm(n)]=1; CHAR_DOMAIN[norm(n)]="mascot"; });
  ["Charlotte Brontë", "Louis Sachar", "Eric Carle", "Jules Verne", "Joseph Conrad", "Nathaniel Hawthorne", "Gabriel García Márquez"].forEach(function(n){ AUTHOR_STRINGS[norm(n)]=n; AUTHOR_NORM[norm(n)]=1; });
  KIND_INFO_CACHE={}; KIND_INFO_ALL_CACHE={}; if(typeof subKindStr!=="undefined" && subKindStr._cache) subKindStr._cache=new Map();  var djPins={};
  djPins["John Stamos' character in Full House|Jesse"]=["Jesse", "Danny Tanner", "Joey Gladstone", "Steve Hale"];
  djPins["Pay Tuesday for a hamburger today|Wimpy"]=["Wimpy", "Popeye", "Olive Oyl", "Bluto"];
  djPins["Old man in UP name|Carl"]=["Carl", "Russell", "Charles Muntz", "Woody"];
  djPins["Not OG flintstones vitamin|Betty"]=["Betty", "Wilma Flintstone", "Pebbles Flintstone", "Barney Rubble"];
  /* Owner ruling, 2026-11-12 (screenshot): a question asking for
     a character's boss draws other bosses of the same medium —
     Mr. Slate's company is the cartoon bosses Mr. Spacely (The
     Jetsons), Mr. Burns (The Simpsons) and Mr. Krabs (SpongeBob
     SquarePants), never generic cartoon characters. */
  djPins["Flintstone's boss|Mr. Slate"]=["Mr. Slate", "Mr. Spacely", "Mr. Burns", "Mr. Krabs"];
  /* Owner ruling, 2026-11-12 (screenshots from live play): two
     more giveaway sets that slipped the bank-wide pass, pinned
     to the owner's prescribed sets — and fenced as classes in
     part 1 (the profession fence in subKindAnswer/subKindMatch,
     and the place sub-type fence), so the pass cannot deal their
     like again. The running-back set is four running backs; the
     presidential-house set is four houses, and its stored answer
     is the shortened "Samuel Osgood House" (the sheet's "in New
     York" echo of the clue is gone). The three running backs are
     registered with the gender tables at the top of this pass so
     the deal-time guard reads them as the answer's own kind. */
  ["Walter Payton", "Emmitt Smith", "Jim Brown"].forEach(function(n){ NAME_GENDER[n]="m"; GENDER_NORM[norm(n)]="m"; });
  djPins["14 100-yard games|Barry Sanders"]=["Barry Sanders", "Walter Payton", "Emmitt Smith", "Jim Brown"];
  djPins["First presidential home|Samuel Osgood House"]=["Samuel Osgood House", "Alexander Macomb House", "Robert Morris House", "The Grange"];
  /* Bank-wide narrow-domain pass (same ruling, 2026-11-12):
     every set below was found by auditing the final dealt state
     of every pool. The character sets dealt company from other
     domains (an animated dog with sitcom and TV-drama heroes);
     they are pinned to the answer's own domain. The phrase and
     title sets drew from one rotating junk pool that mixed
     description phrases with song, film, and book titles, so a
     chore answer dealt film titles and a film answer dealt
     chores; each is pinned inside its own kind — phrases with
     phrases, titles with titles, authors with authors, a
     hurricane with hurricanes, a country pair with country
     pairs, a soul singer with soul singers. */
  djPins["Horse says you're a Spirit walker|The Lone Ranger"]=["The Lone Ranger", "Raymond Reddington", "Denny Crane", "Dixie Bennings"];
  djPins["Ponrod pooch alter ego|Hong Kong Phooey"]=["Hong Kong Phooey", "Wile E. Coyote", "Kermit the Frog", "The Cat in the Hat"];
  djPins["Tom Selleck in Friends|Dr. Richard Burke"]=["Dr. Richard Burke", "Jack Tripper", "Larry Dallas", "Danny Tanner"];
  djPins["Petticoat junction|Kate Bradley"]=["Kate Bradley", "Dr. Richard Burke", "Otis Campbell", "Frankie Heck"];
    djPins["Mayberry citizen is corpulent|Otis Campbell"]=["Otis Campbell", "Dr. Richard Burke", "Kate Bradley", "Danny Tanner"];
  /* "Spell correctly|Wile E. Coyote" is deliberately NOT pinned:
     the row is never-deal (see INSTRUCTION CLUES NEVER DEAL in
     the stamps above) and a pin here would restore it. */
  djPins["Least favorite household chore|doing dishes"]=["doing dishes", "prevents colds", "Where goblins work", "scientifically treated petroleum"];
    djPins["Gringotts Bank|Where goblins work"]=["Where goblins work", "Where students are sorted into houses", "Where owls are bought in Diagon Alley", "Where wizards buy their wands"];
  djPins["HVAC|heating ventilation air conditioning"]=["heating ventilation air conditioning", "scientifically treated petroleum", "doing dishes", "prevents colds"];
  djPins["Stp|scientifically treated petroleum"]=["scientifically treated petroleum", "heating ventilation air conditioning", "Domain Name System", "Minnesota Mining and Manufacturing"];
      djPins["Shirts and pants quote|Wedding Crashers"]=["Wedding Crashers", "Devil Wears Prada", "Coming to America", "One Fine Day"];
  djPins["One stomach flu away from goal weight|Devil Wears Prada"]=["Devil Wears Prada", "Coming to America", "Wedding Crashers", "One Fine Day"];
  djPins["Look so good, sop you up with a biscuit|Coming to America"]=["Coming to America", "Devil Wears Prada", "Wedding Crashers", "One Fine Day"];
  djPins["Mariah carey and boys to men|One Fine Day"]=["One Fine Day", "Heart Will Go On", "Leader of the Band", "One sweet day"];
  djPins["Once more you open the door|Heart Will Go On"]=["Heart Will Go On", "One Fine Day", "Leader of the Band", "One sweet day"];
  djPins["White and nerdy|Straight Outta Lynwood"]=["Straight Outta Lynwood", "One Fine Day", "Leader of the Band", "Devil Wears Prada"];
      djPins["Dr seusee|Fox in Socks"]=["Fox in Socks", "The Cat in the Hat", "Green Eggs and Ham", "Hop on Pop"];
  djPins["Spell Zach's name correctly|Zach G-a-l-i-f-i-a-n-a-k-i-s"]=["Zach G-a-l-i-f-i-a-n-a-k-i-s", "Smokey Robinson", "J. D. Salinger", "Joseph Conrad"];
  djPins["Simplon pass|Switzerland and Italy"]=["Switzerland and Italy", "France and Spain", "Austria and Hungary", "Belgium and Netherlands"];
  djPins["Costliest hurricane of the 90's|Andrew"]=["Andrew", "Katrina", "Hugo", "Gilbert"];
  djPins["You really got ahold on me|Smokey Robinson"]=["Smokey Robinson", "Marvin Gaye", "Sam Cooke", "Curtis Mayfield"];
  djPins["'Emma' was written by|Jane Austen"]=["Jane Austen", "Gabriel García Márquez", "Nathaniel Hawthorne", "Charlotte Brontë"];
  djPins["'Sense and Sensibility' was written by|Jane Austen"]=["Jane Austen", "Nathaniel Hawthorne", "Louis Sachar", "Charlotte Brontë"];
  djPins["'The Hound of the Baskervilles' was written by|Arthur Conan Doyle"]=["Arthur Conan Doyle", "Eric Carle", "Robert Louis Stevenson", "Jules Verne"];
  djPins["'The Cat in the Hat' was written by|Dr. Seuss"]=["Dr. Seuss", "Joseph Conrad", "Jules Verne", "Eric Carle"];
  djPins["Wedding crashers last name|cleary"]=["Cleary", "Chazz", "Ron Burgundy", "Frank Ricard"];
  djPins["Waldo the wizard tried to replace|lucky"]=["Lucky", "Tony the Tiger", "Cap'n Crunch", "Toucan Sam"];
  djPins["Janet's last name in 3s company|wood"]=["Wood", "Jack Tripper", "Chrissy Snow", "Larry Dallas"];
  /* "Fungus|egon" is deliberately NOT pinned: the row is
     never-deal (see INSTRUCTION CLUES NEVER DEAL above). */
  djPins["Middle child in the Middle|sue"]=["Sue", "Axl Heck", "Brick Heck", "Frankie Heck"];
  djPins["Blazing saddles last name|johnson"]=["Johnson", "Sheriff Bart", "Hedley Lamarr", "The Waco Kid"];
  djPins["Finding nemo shark|bruce"]=["Bruce", "Dory", "Nemo", "Gill"];
  djPins["The AT&T hostess|lily"]=["Lily", "Flo", "Mayhem", "Jake from State Farm"];
  djPins["Marshas nose|peter"]=["Peter", "Greg Brady", "Bobby Brady", "Mike Brady"];
  djPins["Iron man 3 sidekick|harley"]=["Harley", "Tony Stark", "Pepper Potts", "James Rhodes"];
  djPins["Killed osiris|set"]=["Set", "Anubis", "Horus", "Thoth"];
  djPins["Bidi bidi bidi|twiki"]=["Twiki", "K-9", "Robbie the Robot", "Commander Data"];
  djPins["First name of guy in Fargo|Jerry"]=["Jerry", "Marge Gunderson", "Carl Showalter", "Gaear Grimsrud"];
  djPins["Bear in Toy Story 3|Lotso"]=["Lotso", "Woody", "Buzz Lightyear", "Mr. Potato Head"];
  djPins["Munster's pet bat|Igor"]=["Igor", "Herman Munster", "Lily Munster", "Eddie Munster"];
  djPins["Don't call me Shirley|Striker"]=["Striker", "Dr. Rumack", "Captain Oveur", "Steve McCroskey"];
  djPins["First Pokémon given|Pikachu"]=["Pikachu", "Charmander", "Squirtle", "Bulbasaur"];
  djPins["Actor in most seasons of NCIS|McGee"]=["McGee", "Gibbs", "DiNozzo", "Abby"];
  djPins["Big Hero 6 robot|Baymax"]=["Baymax", "Hiro Hamada", "Tadashi Hamada", "Honey Lemon"];
  djPins["'The Odyssey' was written by|Homer"]=["Homer", "Plato", "Socrates", "Plutarch"];
  djPins["'Gone Girl' was written by|Gillian Flynn"]=["Gillian Flynn", "Paula Hawkins", "Tana French", "Ruth Ware"];
  djPins["Smooth like butter|BTS"]=["BTS", "EXO", "SEVENTEEN", "Stray Kids"];
  djPins["'The Iliad' was written by|Homer"]=["Homer", "Plato", "Socrates", "Plutarch"];
  djPins["State with most registered boats|FL"]=["FL", "CA", "TX", "MI"];
  djPins["NASCAR race that award Grandfather clock|Martinsville speedway"]=["Martinsville Speedway", "Talladega Superspeedway", "Bristol Motor Speedway", "Darlington Raceway"];
  djPins["Host of Card Shark|Joel McHale"]=["Joel McHale", "Alex Trebek", "Pat Sajak", "Steve Harvey"];
  djPins["Wyatt's 2 brothers|Virgil and Morgan"]=["Virgil and Morgan", "Zeus and Apollo", "Cain and Abel", "Romulus and Remus"];
  djPins["US Open stadium name|Arthur Ashe stadium"]=["Arthur Ashe Stadium", "Rod Laver Arena", "Centre Court", "Indian Wells Tennis Garden"];
  djPins["First year anniversary gift|paper"]=["paper", "cotton", "leather", "flowers"];
  djPins["Group of jellyfish|smack"]=["smack", "murder", "flamboyance", "parliament"];
  djPins["ARDS|Acute Respiratory Distress Syndrome"]=["Acute Respiratory Distress Syndrome", "Chronic Obstructive Pulmonary Disease", "Diabetes Mellitus", "Hypertension"];
  djPins["Dwayne Johnson played at|University of Miami"]=["University of Miami", "University of Florida", "Florida State University", "University of Georgia"];
  djPins["Vp charles curtis (native american VP)|Herbert Hoover"]=["Herbert Hoover", "Calvin Coolidge", "Franklin D. Roosevelt", "William Howard Taft"];
  djPins["84 games reaching base|Ted Williams"]=["Ted Williams", "Joe DiMaggio", "Pete Rose", "Ty Cobb"];
  djPins["Nothing like a good piece of hickory line from what movie|Pale Rider"]=["Pale Rider", "The Outlaw Josey Wales", "High Plains Drifter", "Unforgiven"];
  djPins["What states border Saskatchewan|Montana and North Dakota"]=["Montana and North Dakota", "Wyoming and South Dakota", "Minnesota and Iowa", "Idaho and Wyoming"];
  djPins["Carl denham in king kong|Jack Black"]=["Jack Black", "Adrien Brody", "Naomi Watts", "Andy Serkis"];
  djPins["Gil Grissom in CSI|William Petersen"]=["William Petersen", "Gary Dourdan", "George Eads", "Jorja Fox"];
  djPins["Milky Way shaped like|flat spiral"]=["flat spiral", "elliptical", "irregular", "lenticular"];
  djPins["Hickory dickory dock, the clock struck|one"]=["one", "two", "three", "four"];
  djPins["Goal posts|18'6\""]=["18'6\"", "23'4\"", "20'", "25'"];
  djPins["Ebay's millionth item sold|Big Bird Jack in the Box"]=["Big Bird Jack in the Box", "Beanie Baby", "Cabbage Patch Doll", "Tickle Me Elmo"];
  djPins["1938 legislation that set 40 hr workweek and minimum wage|Fair Labor Standards Act"]=["Fair Labor Standards Act", "Civil Rights Act", "Social Security Act", "National Labor Relations Act"];
  djPins["Longest daily comic strip|Gasoline Alley"]=["Gasoline Alley", "Peanuts", "Blondie", "Beetle Bailey"];
  djPins["First US to issue mail order catalog|Montgomery Ward"]=["Montgomery Ward", "Sears", "J.C. Penney", "Spiegel"];
  djPins["Roger rabbit|Bob Hoskins"]=["Bob Hoskins", "Christopher Lloyd", "Charles Fleischer", "Kathleen Turner"];
  djPins["Crew chiefs for|Jeff Gordon"]=["Jeff Gordon", "Jimmie Johnson", "Dale Earnhardt", "Richard Petty"];
  djPins["Rice Krispy treats 1964 jingle by|Rolling Stones"]=["Rolling Stones", "The Beach Boys", "The Monkees", "The Byrds"];
  djPins["#1 for 16 weeks|One sweet day"]=["One Sweet Day", "I Will Always Love You", "Macarena", "We Belong Together"];
  djPins["Blame it on the rain|Milli Vanilli"]=["Milli Vanilli", "Modern English", "Led Zeppelin", "Vanilla Ice"];
  djPins["Napoleon Dynamite|Vote for Pedro"]=["Vote for Pedro", "Uncle Rico", "Tina the Llama", "Liger"];
  djPins["Octopus is what type of animal|mollusk"]=["mollusk", "mammal", "reptile", "amphibian"];
  djPins["Tennis Grand Slam twice|Rod Laver"]=["Rod Laver", "Roger Federer", "Rafael Nadal", "Novak Djokovic"];
  djPins["I love Vermont but it's the _______|Season of the sticks"]=["Season of the Sticks", "Dial Drunk", "Northern Attitude", "Homesick"];
  djPins["Garfield creator|Jim Davis"]=["Jim Davis", "Charles Schulz", "Bill Watterson", "Gary Larson"];
  djPins["Microscope manufacturer|Carl Zeiss"]=["Carl Zeiss", "Antonie van Leeuwenhoek", "Ernst Abbe", "Robert Hooke"];
  djPins["Ironman II director|Jon Favreau"]=["Jon Favreau", "Kenneth Branagh", "Joss Whedon", "Alan Taylor"];
  djPins["Sandlot dog|Hercules"]=["Hercules", "Beethoven", "Marley", "Old Yeller"];
  djPins["Last battle of whites and indians|Wounded Knee"]=["Wounded Knee", "Little Bighorn", "Sand Creek", "Washita"];
  djPins["Most olympic medals|Phelps"]=["Phelps", "Bolt", "Lewis", "Spitz"];
  djPins["Waffle House commode|Talladega Nights"]=["Talladega Nights", "Anchorman", "Step Brothers", "Elf"];
  djPins["Canada's prime minister in 2006|Stephen Harper"]=["Stephen Harper", "Justin Trudeau", "Jean Chrétien", "Brian Mulroney"];
  djPins["Dodgeball coach young|Hank Azaria"]=["Hank Azaria", "Ben Stiller", "Vince Vaughn", "Justin Long"];
  djPins["Commander cody|Hot Rod Lincoln"]=["Hot Rod Lincoln", "East Bound and Down", "Convoy", "Little Deuce Coupe"];
  djPins["Tic tac toe with bean bags|Toss Across"]=["Toss Across", "Cornhole", "Ladder Toss", "Spikeball"];
  djPins["Movie \"ghost who walks with man cannot die\"|The Phantom"]=["The Phantom", "The Shadow", "Dick Tracy", "The Rocketeer"];
  djPins["Rain on Me singers|Gaga and Ariana"]=["Gaga and Ariana", "Elton John and Dua Lipa", "Brad Paisley & Alison Krauss", "Simon & Garfunkel"];
  djPins["Thurmont facility known as|Camp David"]=["Camp David", "Campobello", "Hyde Park", "Mount Vernon"];
  djPins["Risk/Life/Monopoly|Parker Bros."]=["Parker Bros.", "Mattel", "Hasbro", "Milton Bradley"];
  djPins["Tales of a 4th grade nothing|Judy Blume"]=["Judy Blume", "Beverly Cleary", "Kate DiCamillo", "Jeff Kinney"];
  djPins["Badges, we don't need stinking badges|The treasure of sierra madre"]=["The Treasure of the Sierra Madre", "Casablanca", "The Maltese Falcon", "High Noon"];
  djPins["Hair so big, full of secrets quote from|Mean Girls"]=["Mean Girls", "Clueless", "Legally Blonde", "Heathers"];
  djPins["Niblick golf|Iron"]=["Iron", "Wood", "Putter", "Wedge"];
  djPins["Time well wasted|Brad Paisley"]=["Brad Paisley", "Josh Turner", "Keith Urban", "Luke Bryan"];
  djPins["Song from Back to the Future dance|Earth Angel"]=["Earth Angel", "Sh-Boom", "Why Do Fools Fall in Love", "The Great Pretender"];
  djPins["Oktoberfest started because of|wedding"]=["wedding", "harvest", "coronation", "beer festival"];
  djPins["Bavarian village with passion play|Oberammergau"]=["Oberammergau", "Bayreuth", "Salzburg", "Garmisch-Partenkirchen"];
  djPins["Simplon pass between|Switzerland and Italy"]=["Switzerland and Italy", "Austria and Italy", "France and Spain", "Germany and Austria"];
  var djByKey={};
  Object.keys(djPins).forEach(function(k){ var p=k.split("|"); djByKey[norm(p[0])+"|"+norm(p[1])]=djPins[k]; });
  DJ_MC.forEach(function(q){ if(!q || !Array.isArray(q.choices)) return; var pin=djByKey[norm(djRawClue(q))+"|"+norm(q.choices[q.a])]; if(pin){ q.choices=pin.slice(); q.a=0; q.noDeal=false; } });
  var qPins={};
  /* Bank-wide narrow-domain pass (2026-11-12): these authored
     sets were clean as written but the load-time repair passes
     re-drew single fillers from broad pools — a cereal mascot
     dealt Yoda and Dracula, two Canadian singers dealt an actor
     and a prime minister, the volleyball inventor dealt a
     swimmer, and a songwriting-duo set dealt a TV costume pair.
     Each pin restores same-kind, same-domain company (the
     princess set swaps the goddess Pele for Queen
     Liliʻuokalani, Hawaiian royalty like the answer). */
  qPins["Which cereal's mascot is a captain in a naval-style uniform?"]=["Cap'n Crunch", ["Cap'n Crunch", "Count Chocula", "King Vitaman", "Sugar Bear"]];
  qPins["Which mascot follows his nose to a fruit-flavoured cereal?"]=["Toucan Sam", ["Toucan Sam", "Tony the Tiger", "Dig 'Em Frog", "Sugar Bear"]];
  qPins["Which Quebec-born singer sang 'My Heart Will Go On'?"]=["Celine Dion", ["Celine Dion", "Shania Twain", "Alanis Morissette", "Avril Lavigne"]];
  qPins["Which Canadian singer wrote 'Big Yellow Taxi'?"]=["Joni Mitchell", ["Joni Mitchell", "Celine Dion", "Sarah McLachlan", "k.d. lang"]];
  qPins["Who invented volleyball in 1895?"]=["William G. Morgan", ["William G. Morgan", "James Naismith", "John Wooden", "Phog Allen"]];
  qPins["Which princess founded the Kamehameha Schools through her will?"]=["Bernice Pauahi Bishop", ["Bernice Pauahi Bishop", "Queen Emma", "Kaʻahumanu", "Liliʻuokalani"]];
  qPins["Who wrote 'One Way Ticket (Because I Can)'?"]=["Judy Rodman and Keith Hinton", ["Judy Rodman and Keith Hinton", "Barry Mann and Cynthia Weil", "Jerry Leiber and Mike Stoller", "Burt Bacharach and Hal David"]];
  qPins["Which singer is known for 'Crazy', written by Willie Nelson?"]=["Patsy Cline", ["Patsy Cline", "Loretta Lynn", "Kitty Wells", "Tammy Wynette"]];
  qPins["Which singer is known for 'Coal Miner's Daughter'?"]=["Loretta Lynn", ["Loretta Lynn", "Tammy Wynette", "Patsy Cline", "Kitty Wells"]];
  qPins["Which singer is known as the 'King of Rock and Roll'?"]=["Elvis Presley", ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"]];
  qPins["Which singer is known as the 'Man in Black'?"]=["Johnny Cash", ["Johnny Cash", "Hank Williams", "George Jones", "Merle Haggard"]];
  qPins["Which singer recorded 'Ring of Fire' in 1963?"]=["Johnny Cash", ["Johnny Cash", "Hank Williams", "Waylon Jennings", "Willie Nelson"]];
  qPins["Which singer was known as the 'Queen of Country' after 'It Wasn't God Who Made Honky Tonk Angels'?"]=["Kitty Wells", ["Kitty Wells", "Patsy Cline", "Loretta Lynn", "Tammy Wynette"]];
  qPins["Which artist released the album 'Purple Rain' in 1984?"]=["Prince", ["Prince", "Michael Jackson", "Lionel Richie", "Stevie Wonder"]];
  qPins["Which singer released the album 'The Bodyguard' soundtrack with 'I Will Always Love You'?"]=["Whitney Houston", ["Whitney Houston", "Mariah Carey", "Celine Dion", "Adele"]];
  qPins["Which singer's 'My Heart Will Go On' was the theme to 'Titanic'?"]=["Celine Dion", ["Celine Dion", "Barbra Streisand", "Whitney Houston", "Mariah Carey"]];
  qPins["Which composer wrote the music for 'The Lion King' (score) and 'Gladiator'?"]=["Hans Zimmer", ["Hans Zimmer", "John Williams", "Danny Elfman", "James Horner"]];
  qPins["Which composer wrote the music for 'The Lord of the Rings' films?"]=["Howard Shore", ["Howard Shore", "John Williams", "Hans Zimmer", "James Horner"]];
  qPins["Which country singer released the album 'Come On Over', the best-selling album by a female artist?"]=["Shania Twain", ["Shania Twain", "Faith Hill", "Trisha Yearwood", "LeAnn Rimes"]];
  qPins["Which singer is known for 'Stand by Your Man'?"]=["Tammy Wynette", ["Tammy Wynette", "Loretta Lynn", "Dolly Parton", "Patsy Cline"]];
  qPins["Which blind musician released 'Superstition' and 'Isn't She Lovely'?"]=["Stevie Wonder", ["Stevie Wonder", "Marvin Gaye", "Ray Charles", "Curtis Mayfield"]];
  qPins["Which blind musician released 'Georgia on My Mind' and 'Hit the Road Jack'?"]=["Ray Charles", ["Ray Charles", "Jose Feliciano", "Stevie Wonder", "Ronnie Milsap"]];
  qPins["Who was Queen's lead singer?"]=["Freddie Mercury", ["Freddie Mercury", "Robert Plant", "Roger Daltrey", "Mick Jagger"]];
  qPins["Which sibling duo sang 'Wake Up Little Susie' and 'Bye Bye Love'?"]=["The Everly Brothers", ["The Everly Brothers", "The Righteous Brothers", "Simon & Garfunkel", "The Beach Boys"]];
  qPins["Who sang 'Easy' and 'Three Times a Lady' with the Commodores before going solo?"]=["Lionel Richie", ["Lionel Richie", "Stevie Wonder", "Marvin Gaye", "Smokey Robinson"]];
  qPins["Who sang 'Endless Love' with Diana Ross in 1981?"]=["Lionel Richie", ["Lionel Richie", "Stevie Wonder", "Peabo Bryson", "James Ingram"]];
  qPins["Who sang 'Hello' (the 1984 ballad with the famous clay-head video)?"]=["Lionel Richie", ["Lionel Richie", "Michael Jackson", "Prince", "George Michael"]];
  qPins["Who sang the 1957 hit 'Great Balls of Fire'?"]=["Jerry Lee Lewis", ["Jerry Lee Lewis", "Carl Perkins", "Little Richard", "Chuck Berry"]];
  qPins["Which singer was known as the 'Queen of Rockabilly'?"]=["Wanda Jackson", ["Wanda Jackson", "Brenda Lee", "Patsy Cline", "Loretta Lynn"]];
  qPins["Which band recorded the 17-minute 'In-A-Gadda-Da-Vida' in 1968?"]=["Iron Butterfly", ["Iron Butterfly", "Black Sabbath", "Deep Purple", "Steppenwolf"]];
  qPins["Which Canadian band sang 'Don't Forget Me (When I'm Gone)' in 1986?"]=["Glass Tiger", ["Glass Tiger", "The Outfield", "Wang Chung", "Mr. Mister"]];
  qPins["Which band sang 'Float On' in 2004?"]=["Modest Mouse", ["Modest Mouse", "The Shins", "Franz Ferdinand", "Arctic Monkeys"]];
  qPins["Who sang 'We Don't Need Another Hero' from 'Mad Max Beyond Thunderdome' (1985)?"]=["Tina Turner", ["Tina Turner", "Bonnie Tyler", "Kim Carnes", "Belinda Carlisle"]];
  qPins["Who is Aerosmith's lead singer?"]=["Steven Tyler", ["Steven Tyler", "Mick Jagger", "Robert Plant", "Roger Daltrey"]];
  qPins["Which rapper released the album 'Me Against the World' in 1995?"]=["Tupac Shakur", ["Tupac Shakur", "The Notorious B.I.G.", "Nas", "Jay-Z"]];
  qPins["Which composer wrote the 'Brandenburg Concertos'?"]=["Johann Sebastian Bach", ["Johann Sebastian Bach", "George Frideric Handel", "Antonio Vivaldi", "Henry Purcell"]];
  qPins["Who sang 'Harper Valley PTA' in 1968?"]=["Jeannie C. Riley", ["Jeannie C. Riley", "Skeeter Davis", "Lynn Anderson", "Sammi Smith"]];
  qPins["Which Canadian singer released 'Jagged Little Pill' in 1995?"]=["Alanis Morissette", ["Alanis Morissette", "Celine Dion", "Jann Arden", "Sarah McLachlan"]];
  qPins["Which singer released 'When We All Fall Asleep, Where Do We Go?' in 2019?"]=["Billie Eilish", ["Billie Eilish", "Ariana Grande", "Lana Del Rey", "Dua Lipa"]];
  qPins["Which singer released the album 'Thank U, Next' in 2019?"]=["Ariana Grande", ["Ariana Grande", "Dua Lipa", "Lana Del Rey", "Taylor Swift"]];
  qPins["Which singer released the album 'Rare' in 2020?"]=["Selena Gomez", ["Selena Gomez", "Demi Lovato", "Camila Cabello", "Ariana Grande"]];
  qPins["Which singer provided the vocals on Mark Ronson's 2014 hit 'Uptown Funk'?"]=["Bruno Mars", ["Bruno Mars", "Pharrell Williams", "Ed Sheeran", "Justin Timberlake"]];
  qPins["Who had the 1968 hit version of 'I Heard It Through the Grapevine'?"]=["Marvin Gaye", ["Marvin Gaye", "Otis Redding", "Smokey Robinson", "Sam Cooke"]];
  qPins["Which group sang 'Free Your Mind' in 1992?"]=["En Vogue", ["En Vogue", "Destiny's Child", "The Supremes", "TLC"]];
  qPins["Which group sang 'Hold On' in 1990?"]=["Wilson Phillips", ["Wilson Phillips", "The Bangles", "En Vogue", "TLC"]];
  qPins["Who sang 'Against All Odds (Take a Look at Me Now)' in 1984?"]=["Phil Collins", ["Phil Collins", "Steve Winwood", "Peter Gabriel", "Sting"]];
  qPins["Which band released 'Slippery When Wet' in 1986?"]=["Bon Jovi", ["Bon Jovi", "Def Leppard", "Poison", "Mötley Crüe"]];
  qPins["Which band released 'Smoke on the Water' in 1972?"]=["Deep Purple", ["Deep Purple", "Black Sabbath", "Uriah Heep", "Led Zeppelin"]];
  qPins["Which singer released 'Spirit', with 'Bleeding Love', in 2007?"]=["Leona Lewis", ["Leona Lewis", "Alexandra Burke", "Jordin Sparks", "Adele"]];
  qPins["Which singer recorded the song '...Baby One More Time' in 1998?"]=["Britney Spears", ["Britney Spears", "Christina Aguilera", "Jessica Simpson", "Mandy Moore"]];
  qPins["Which singer sang 'Crazy in Love' in 2003?"]=["Beyoncé", ["Beyoncé", "Mariah Carey", "Rihanna", "Jennifer Lopez"]];
  qPins["Who wrote 'The Odyssey'?"]=["Homer", ["Homer", "Plato", "Socrates", "Plutarch"]];
  qPins["Who wrote 'The Iliad'?"]=["Homer", ["Homer", "Plato", "Socrates", "Plutarch"]];
  qPins["Who wrote the novel 'Gone Girl'?"]=["Gillian Flynn", ["Gillian Flynn", "Paula Hawkins", "Tana French", "Ruth Ware"]];
  qPins["Trivia Clue: “Impossible Girl in Dr Who” — what answer goes with this clue?"]=["Clara Oswald", ["Clara Oswald", "Amy Pond", "Rose Tyler", "Donna Noble"]];
  qPins["Who directed the 1994 film 'Pulp Fiction'?"]=["Quentin Tarantino", ["Quentin Tarantino", "David Fincher", "Joel Coen", "Martin Scorsese"]];
  qPins["Who directed the 1972 film 'The Godfather'?"]=["Francis Ford Coppola", ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "William Friedkin"]];
  qPins["Who directed the 1993 film 'Jurassic Park'?"]=["Steven Spielberg", ["Steven Spielberg", "James Cameron", "George Lucas", "Ridley Scott"]];
  qPins["Who directed the 2009 film 'Avatar'?"]=["James Cameron", ["James Cameron", "Ridley Scott", "Steven Spielberg", "Peter Jackson"]];
  qPins["Who directed 'Forrest Gump' (1994)?"]=["Robert Zemeckis", ["Robert Zemeckis", "Frank Darabont", "Rob Reiner", "Barry Levinson"]];
  qPins["Who directed 'The Dark Knight' (2008)?"]=["Christopher Nolan", ["Christopher Nolan", "David Fincher", "Ridley Scott", "Tim Burton"]];
  qPins["Who directed 'Inception' (2010)?"]=["Christopher Nolan", ["Christopher Nolan", "James Cameron", "Ridley Scott", "David Fincher"]];
  qPins["Who directed '2001: A Space Odyssey' (1968)?"]=["Stanley Kubrick", ["Stanley Kubrick", "David Lean", "John Huston", "Billy Wilder"]];
  qPins["Who directed 'Bonnie and Clyde' (1967)?"]=["Arthur Penn", ["Arthur Penn", "Mike Nichols", "Sam Peckinpah", "Robert Altman"]];
  qPins["Who directed 'One Flew Over the Cuckoo's Nest' (1975)?"]=["Miloš Forman", ["Miloš Forman", "Hal Ashby", "Francis Ford Coppola", "Robert Altman"]];
  qPins["Who directed the 1976 film 'Rocky'?"]=["John G. Avildsen", ["John G. Avildsen", "Martin Scorsese", "John Schlesinger", "Sylvester Stallone"]];
  qPins["Who directed 'Taxi Driver' (1976)?"]=["Martin Scorsese", ["Martin Scorsese", "Brian De Palma", "Francis Ford Coppola", "William Friedkin"]];
  qPins["Who directed 'Alien' (1979)?"]=["Ridley Scott", ["Ridley Scott", "James Cameron", "John Carpenter", "David Cronenberg"]];
  qPins["Who directed 'Raiders of the Lost Ark' (1981)?"]=["Steven Spielberg", ["Steven Spielberg", "George Lucas", "Robert Zemeckis", "John Landis"]];
  qPins["Who directed 'Back to the Future' (1985)?"]=["Robert Zemeckis", ["Robert Zemeckis", "Richard Donner", "Joe Dante", "Steven Spielberg"]];
  qPins["Who directed 'The Breakfast Club' (1985)?"]=["John Hughes", ["John Hughes", "Steven Spielberg", "Rob Reiner", "John Landis"]];
  qPins["Who directed 'Stand by Me' (1986)?"]=["Rob Reiner", ["Rob Reiner", "Richard Donner", "Barry Levinson", "Ron Howard"]];
  qPins["Who directed 'Schindler's List' (1993)?"]=["Steven Spielberg", ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Oliver Stone"]];
  qPins["Who directed 'Braveheart' (1995)?"]=["Mel Gibson", ["Mel Gibson", "Ridley Scott", "Kevin Costner", "Michael Mann"]];
  qPins["Who directed 'Apollo 13' (1995)?"]=["Ron Howard", ["Ron Howard", "Steven Spielberg", "Mel Gibson", "Robert Zemeckis"]];
  qPins["Who directed 'Toy Story' (1995)?"]=["John Lasseter", ["John Lasseter", "Andrew Stanton", "Pete Docter", "Brad Bird"]];
  qPins["Who directed 'Fight Club' (1999)?"]=["David Fincher", ["David Fincher", "Paul Thomas Anderson", "Darren Aronofsky", "Quentin Tarantino"]];
  qPins["Who directed 'The Lord of the Rings' film trilogy?"]=["Peter Jackson", ["Peter Jackson", "Guillermo del Toro", "Tim Burton", "Sam Raimi"]];
  qPins["Who played Han Solo in the original 'Star Wars' films?"]=["Harrison Ford", ["Harrison Ford", "Mark Hamill", "Alec Guinness", "Peter Cushing"]];
  qPins["Who played Indiana Jones?"]=["Harrison Ford", ["Harrison Ford", "Sean Connery", "Joaquin Phoenix", "Tom Hanks"]];
  qPins["Who played James Bond in the 1960s films, the first Bond actor in the official series?"]=["Sean Connery", ["Sean Connery", "Roger Moore", "George Lazenby", "Timothy Dalton"]];
  qPins["Who played James Bond in 'Casino Royale' (2006)?"]=["Daniel Craig", ["Daniel Craig", "Pierce Brosnan", "Henry Cavill", "Tom Hiddleston"]];
  qPins["Who played Rocky Balboa?"]=["Sylvester Stallone", ["Sylvester Stallone", "Arnold Schwarzenegger", "Carl Weathers", "Dolph Lundgren"]];
  qPins["Who played John Rambo?"]=["Sylvester Stallone", ["Sylvester Stallone", "Arnold Schwarzenegger", "Tom Cruise", "Chuck Norris"]];
  qPins["Who played Doc Brown in 'Back to the Future'?"]=["Christopher Lloyd", ["Christopher Lloyd", "Michael J. Fox", "Thomas F. Wilson", "Crispin Glover"]];
  qPins["Who played Dutch in 'Predator' (1987)?"]=["Arnold Schwarzenegger", ["Arnold Schwarzenegger", "Carl Weathers", "Jesse Ventura", "Danny Glover"]];
  qPins["Who played Batman in 'Batman Begins' (2005)?"]=["Christian Bale", ["Christian Bale", "Michael Keaton", "Val Kilmer", "George Clooney"]];
  qPins["Which band sang 'A Horse with No Name' in 1972?"]=["America", ["America", "Bread", "Seals and Crofts", "Firefall"]];
  qPins["Which band sang 'Everlong' in 1997?"]=["Foo Fighters", ["Foo Fighters", "Nirvana", "Bush", "Soundgarden"]];
  qPins["Which band sang 'Smells Like Teen Spirit' in 1991?"]=["Nirvana", ["Nirvana", "Alice in Chains", "Stone Temple Pilots", "Soundgarden"]];
  /* Audit gauntlet round 8 (2026-11-13): authored sets verified
     clean at source, dealt junk only after the load-time repair
     passes re-drew fillers (composers swapped for pop singers,
     insurers for a city and two food brands, a court case for a
     duration). Pins restore the authored company. */
  qPins["Which composer wrote the opera 'The Marriage of Figaro'?"]=["Wolfgang Amadeus Mozart", ["Wolfgang Amadeus Mozart", "Giuseppe Verdi", "Gioachino Rossini", "Christoph Willibald Gluck"]];
  qPins["Which insurer used the slogan 'Get Met. It Pays.'?"]=["MetLife", ["MetLife", "Allstate", "State Farm", "Progressive"]];
  qPins["How long do US Supreme Court justices serve?"]=["For life, during good behaviour", ["For life, during good behaviour", "Four years", "Ten years", "Until age 70"]];
  qPins["Who wrote the novel 'The Hound of the Baskervilles'?"]=["Arthur Conan Doyle", ["Arthur Conan Doyle", "Ralph Ellison", "Victor Hugo", "Margaret Wise Brown"]];
  qPins["Who directed the 1997 film 'Titanic'?"]=["James Cameron", ["James Cameron", "Steven Spielberg", "Robert Zemeckis", "Ridley Scott"]];
  qPins["In the US, 'Black Friday' sales traditionally fall on the day after which holiday?"]=["Thanksgiving", ["Thanksgiving", "Christmas", "Halloween", "Easter"]];
  qPins["Which tuna brand's jingle asks to 'Ask Any Mermaid You Happen to See'?"]=["Chicken of the Sea", ["Chicken of the Sea", "StarKist", "Bumble Bee", "Genova"]];
  qPins["Which root beer brand is famous for its frosty mugs and drive-in restaurants?"]=["A&W", ["A&W", "Barq's", "IBC", "Mug"]];
  qPins["Which rental car company's slogan is 'We'll Pick You Up'?"]=["Enterprise", ["Enterprise", "Avis", "Hertz", "National"]];
  qPins["On 'The Masked Singer' US Season 4, which character did LeAnn Rimes play?"]=["The Sun", ["The Sun", "Mushroom", "Snow Owls", "Popcorn"]];
  qPins["At the 1997 Grammy Awards, LeAnn Rimes won Best New Artist and which other award for 'Blue'?"]=["Best Female Country Vocal Performance", ["Best Female Country Vocal Performance", "Best Country Album", "Best Country Song", "Record of the Year"]];
  qPins["What does the Hawaiian word 'ʻohana' mean?"]=["Family", ["Family", "Love", "Thank you", "Goodbye"]];
  qPins["Which pop star from Stratford, Ontario, was discovered on YouTube?"]=["Justin Bieber", ["Justin Bieber", "Michael Bublé", "Shawn Mendes", "The Weeknd"]];
  qPins["What galaxy is Earth part of?"]=["The Milky Way", ["The Milky Way", "Andromeda", "Triangulum", "The Large Magellanic Cloud"]];
  qPins["Which European explorer reached Hawaii in 1778 and was killed there in 1779?"]=["James Cook", ["James Cook", "Ferdinand Magellan", "Abel Tasman", "Vasco da Gama"]];
  qPins["Which beach near South Point has green sand coloured by olivine?"]=["Papakōlea (Green Sands Beach)", ["Papakōlea (Green Sands Beach)", "Punaluʻu Beach", "Spencer Beach", "Hapuna Beach"]];
  qPins["Which donut chain is famous for its 'Hot Now' sign?"]=["Krispy Kreme", ["Krispy Kreme", "Tim Hortons", "Dunkin'", "Daylight Donuts"]];
  qPins["Who discovered penicillin in 1928?"]=["Alexander Fleming", ["Alexander Fleming", "Edward Jenner", "Joseph Lister", "Louis Pasteur"]];
  qPins["Which Great Lake is the largest freshwater lake in the world by surface area?"]=["Lake Superior", ["Lake Superior", "Lake Huron", "Lake Erie", "Lake Ontario"]];
  qPins["Which inventor, long resident in Canada, is credited with inventing the telephone?"]=["Alexander Graham Bell", ["Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi", "Nikola Tesla"]];
  qPins["Which indicator is commonly used in school labs and made from lichens?"]=["Litmus", ["Litmus", "Methyl orange", "Phenolphthalein", "Bromothymol blue"]];
  qPins["Which insurer's ads feature Professor Burke and 'We Are Farmers' jingle?"]=["Farmers Insurance", ["Farmers Insurance", "Allstate", "State Farm", "Progressive"]];
  qPins["Which rapper released the album 'The Chronic' in 1992?"]=["Dr. Dre", ["Dr. Dre", "Eazy-E", "Ice Cube", "Snoop Dogg"]];
  qPins["The ancient Egyptian writing system of picture symbols is called…"]=["Hieroglyphs", ["Hieroglyphs", "Cuneiform", "Calligraphy", "Kanji"]];
  qPins["What are the fried-dough pastries shaped like a beaver's tail called?"]=["BeaverTails", ["BeaverTails", "Poutine", "Tourtière", "Nanaimo bar"]];
  qPins["Who built the settlement at L'Anse aux Meadows in Newfoundland around 1000 AD?"]=["Vikings (Norse)", ["Vikings (Norse)", "Beothuk", "Inuit", "Mi'kmaq"]];
  qPins["Which explorer reached Canada's Atlantic coast in 1497, sailing for England?"]=["John Cabot (Giovanni Caboto)", ["John Cabot (Giovanni Caboto)", "Christopher Columbus", "Jacques Cartier", "Henry Hudson"]];
  qPins["'Word-of-mouth' marketing spreads mainly through what?"]=["Customers telling other people", ["Customers telling other people", "Coupons", "Billboards", "TV commercials"]];
  ALL_MC_QUESTIONS.forEach(function(q){ if(!q || !Array.isArray(q.choices)) return; var pin=qPins[q.q] || (q.dq ? qPins[q.dq] : null); if(pin){ q.choices=pin[1].slice(); q.a=pin[1].indexOf(pin[0]); } });

  /* Famous Faces / Trivia Faces pins (owner race rule, 2026-11-12):
     the pictured subject and all three choices share race, gender
     and domain/era. The old shared quartets mixed races freely —
     Nat King Cole dealt Dean Martin and Roy Orbison; only Chuck
     Berry belonged. Every subject the race audit flagged is
     pinned here with a matched set. */
  var facePins={};
  facePins["Nat King Cole"]=["Nat King Cole", "Chuck Berry", "Little Richard", "Fats Domino"];
  facePins["Chuck Berry"]=["Chuck Berry", "Little Richard", "Fats Domino", "Nat King Cole"];
  facePins["Dean Martin"]=["Dean Martin", "Frank Sinatra", "Perry Como", "Roy Orbison"];
  facePins["Roy Orbison"]=["Roy Orbison", "Dean Martin", "Frank Sinatra", "Perry Como"];
  facePins["Barbra Streisand"]=["Barbra Streisand", "Judy Garland", "Liza Minnelli", "Bette Midler"];
  facePins["Billie Holiday"]=["Billie Holiday", "Ella Fitzgerald", "Nina Simone", "Sarah Vaughan"];
  facePins["Ella Fitzgerald"]=["Ella Fitzgerald", "Billie Holiday", "Nina Simone", "Sarah Vaughan"];
  facePins["Nina Simone"]=["Nina Simone", "Billie Holiday", "Ella Fitzgerald", "Sarah Vaughan"];
  facePins["Aretha Franklin"]=["Aretha Franklin", "Diana Ross", "Tina Turner", "Dionne Warwick"];
  facePins["Diana Ross"]=["Diana Ross", "Aretha Franklin", "Tina Turner", "Dionne Warwick"];
  facePins["Tina Turner"]=["Tina Turner", "Aretha Franklin", "Diana Ross", "Dionne Warwick"];
  facePins["Madonna"]=["Madonna", "Cher", "Cyndi Lauper", "Debbie Harry"];
  facePins["Whitney Houston"]=["Whitney Houston", "Mariah Carey", "Dionne Warwick", "Aretha Franklin"];
  facePins["Beyoncé"]=["Beyoncé", "Alicia Keys", "Mary J. Blige", "Toni Braxton"];
  facePins["Sarah McLachlan"]=["Sarah McLachlan", "Alanis Morissette", "Jann Arden", "Tori Amos"];
  facePins["Kesha"]=["Kesha", "Taylor Swift", "LeAnn Rimes", "Miley Cyrus"];
  facePins["Taylor Swift"]=["Taylor Swift", "LeAnn Rimes", "Kesha", "Carrie Underwood"];
  facePins["LeAnn Rimes"]=["LeAnn Rimes", "Taylor Swift", "Kesha", "Carrie Underwood"];
  facePins["Denzel Washington"]=["Denzel Washington", "Morgan Freeman", "Sidney Poitier", "Samuel L. Jackson"];
  facePins["Jackie Chan"]=["Jackie Chan", "Jet Li", "Chow Yun-fat", "Donnie Yen"];
  facePins["J. K. Simmons"]=["J. K. Simmons", "George Clooney", "Bryan Cranston", "Jeff Bridges"];
  facePins["JK Simmons"]=["JK Simmons", "George Clooney", "Bryan Cranston", "Jeff Bridges"];
  facePins["George Clooney"]=["George Clooney", "J. K. Simmons", "Bryan Cranston", "Jeff Bridges"];
  facePins["Bruce Lee"]=["Bruce Lee", "Jackie Chan", "Jet Li", "Donnie Yen"];
  facePins["Morgan Freeman"]=["Morgan Freeman", "Denzel Washington", "Sidney Poitier", "Samuel L. Jackson"];
  facePins["Robert De Niro"]=["Robert De Niro", "Al Pacino", "Jack Nicholson", "Dustin Hoffman"];
  facePins["James Dean"]=["James Dean", "Marlon Brando", "Paul Newman", "Steve McQueen"];
  facePins["Clint Eastwood"]=["Clint Eastwood", "Marlon Brando", "John Wayne", "Gary Cooper"];
  facePins["Marlon Brando"]=["Marlon Brando", "James Dean", "Paul Newman", "Steve McQueen"];
  facePins["Halle Berry"]=["Halle Berry", "Kerry Washington", "Viola Davis", "Angela Bassett"];
  facePins["Kerry Washington"]=["Kerry Washington", "Halle Berry", "Viola Davis", "Angela Bassett"];
  facePins["Julia Roberts"]=["Julia Roberts", "Nicole Kidman", "Angelina Jolie", "Sandra Bullock"];
  facePins["Nicole Kidman"]=["Nicole Kidman", "Julia Roberts", "Angelina Jolie", "Sandra Bullock"];
  facePins["Angelina Jolie"]=["Angelina Jolie", "Julia Roberts", "Nicole Kidman", "Sandra Bullock"];
  facePins["Jessica Chastain"]=["Jessica Chastain", "Christina Hendricks", "Kate Winslet", "Julianne Hough"];
  facePins["Christina Hendricks"]=["Christina Hendricks", "Jessica Chastain", "Kate Winslet", "Julianne Hough"];
  facePins["Kate Winslet"]=["Kate Winslet", "Jessica Chastain", "Christina Hendricks", "Julianne Hough"];
  facePins["Christina Ricci"]=["Christina Ricci", "Jessica Chastain", "Christina Hendricks", "Julianne Hough"];
  facePins["Julianne Hough"]=["Julianne Hough", "Jessica Chastain", "Christina Hendricks", "Kate Winslet"];
  facePins["Meryl Streep"]=["Meryl Streep", "Julie Andrews", "Sophia Loren", "Glenn Close"];
  facePins["Sophia Loren"]=["Sophia Loren", "Meryl Streep", "Julie Andrews", "Glenn Close"];
  facePins["Julie Andrews"]=["Julie Andrews", "Meryl Streep", "Sophia Loren", "Glenn Close"];
  facePins["Dana Perino"]=["Dana Perino", "Hillary Clinton", "Sarah Palin", "Kellyanne Conway"];
  facePins["Condoleezza Rice"]=["Condoleezza Rice", "Kamala Harris", "Michelle Obama", "Shirley Chisholm"];
  facePins["Hillary Clinton"]=["Hillary Clinton", "Dana Perino", "Sarah Palin", "Kellyanne Conway"];
  facePins["Harriet Tubman"]=["Harriet Tubman", "Sojourner Truth", "Claudette Colvin", "Bessie Coleman"];
  facePins["Sojourner Truth"]=["Sojourner Truth", "Harriet Tubman", "Claudette Colvin", "Bessie Coleman"];
  facePins["Susan B. Anthony"]=["Susan B. Anthony", "Lucretia Mott", "Alice Paul", "Clara Barton"];
  facePins["Lucretia Mott"]=["Lucretia Mott", "Susan B. Anthony", "Alice Paul", "Clara Barton"];
  facePins["Indira Gandhi"]=["Indira Gandhi", "Benazir Bhutto", "Sirimavo Bandaranaike", "Sheikh Hasina"];
  facePins["Benazir Bhutto"]=["Benazir Bhutto", "Indira Gandhi", "Sirimavo Bandaranaike", "Sheikh Hasina"];
  facePins["Margaret Thatcher"]=["Margaret Thatcher", "Golda Meir", "Angela Merkel", "Theresa May"];
  facePins["Golda Meir"]=["Golda Meir", "Margaret Thatcher", "Angela Merkel", "Theresa May"];
  facePins["Frederick Douglass"]=["Frederick Douglass", "W. E. B. Du Bois", "Booker T. Washington", "John Lewis"];
  facePins["William Lloyd Garrison"]=["William Lloyd Garrison", "John Brown", "Wendell Phillips", "Ralph Waldo Emerson"];
  facePins["John Brown"]=["John Brown", "William Lloyd Garrison", "Wendell Phillips", "Ralph Waldo Emerson"];
  facePins["Wendell Phillips"]=["Wendell Phillips", "William Lloyd Garrison", "John Brown", "Ralph Waldo Emerson"];
  facePins["Amelia Earhart"]=["Amelia Earhart", "Harriet Quimby", "Valentina Tereshkova", "Jacqueline Cochran"];
  facePins["Bessie Coleman"]=["Bessie Coleman", "Willa Brown", "Janet Bragg", "Mae Jemison"];
  facePins["Harriet Quimby"]=["Harriet Quimby", "Amelia Earhart", "Valentina Tereshkova", "Jacqueline Cochran"];
  facePins["Valentina Tereshkova"]=["Valentina Tereshkova", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"];
  facePins["Michael Jackson"]=["Michael Jackson", "Prince", "Stevie Wonder", "Marvin Gaye"];
  facePins["Prince"]=["Prince", "Michael Jackson", "Stevie Wonder", "Marvin Gaye"];
  facePins["Stevie Wonder"]=["Stevie Wonder", "Ray Charles", "Marvin Gaye", "Sam Cooke"];
  facePins["Justin Timberlake"]=["Justin Timberlake", "Nick Carter", "Lance Bass", "JC Chasez"];
  facePins["Peter Frampton"]=["Peter Frampton", "Billy Gibbons", "Dusty Hill", "Eric Clapton"];
  facePins["Billy Gibbons"]=["Billy Gibbons", "Dusty Hill", "Peter Frampton", "Eric Clapton"];
  facePins["Dusty Hill"]=["Dusty Hill", "Billy Gibbons", "Peter Frampton", "Eric Clapton"];
  facePins["Cristiano Ronaldo"]=["Cristiano Ronaldo", "Lionel Messi", "Luka Modrić", "Robert Lewandowski"];
  facePins["Lionel Messi"]=["Lionel Messi", "Cristiano Ronaldo", "Luka Modrić", "Robert Lewandowski"];
  facePins["Usain Bolt"]=["Usain Bolt", "Michael Jordan", "Walt Frazier", "Carl Lewis"];
  facePins["Michael Jordan"]=["Michael Jordan", "Walt Frazier", "Usain Bolt", "Carl Lewis"];
  facePins["Pelé"]=["Pelé", "Michael Jordan", "Walt Frazier", "Usain Bolt"];
  facePins["Walt Frazier"]=["Walt Frazier", "Michael Jordan", "Usain Bolt", "Carl Lewis"];
  facePins["Muhammad Ali"]=["Muhammad Ali", "George Foreman", "Mike Tyson", "Joe Frazier"];
  facePins["George Foreman"]=["George Foreman", "Muhammad Ali", "Mike Tyson", "Joe Frazier"];
  facePins["Mike Tyson"]=["Mike Tyson", "Muhammad Ali", "George Foreman", "Joe Frazier"];
  facePins["Lou Ferrigno"]=["Lou Ferrigno", "Tony Hawk", "Arnold Schwarzenegger", "Sylvester Stallone"];
  facePins["Tony Hawk"]=["Tony Hawk", "Lou Ferrigno", "Arnold Schwarzenegger", "Sylvester Stallone"];
  facePins["Serena Williams"]=["Serena Williams", "Venus Williams", "Naomi Osaka", "Coco Gauff"];
  facePins["Venus Williams"]=["Venus Williams", "Serena Williams", "Naomi Osaka", "Coco Gauff"];
  facePins["Billie Jean King"]=["Billie Jean King", "Martina Navratilova", "Chris Evert", "Steffi Graf"];
  facePins["Martina Navratilova"]=["Martina Navratilova", "Billie Jean King", "Chris Evert", "Steffi Graf"];
  facePins["Nelson Mandela"]=["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Kofi Annan"];
  facePins["Desmond Tutu"]=["Desmond Tutu", "Nelson Mandela", "Thabo Mbeki", "Kofi Annan"];
  facePins["Thabo Mbeki"]=["Thabo Mbeki", "Nelson Mandela", "Desmond Tutu", "Kofi Annan"];
  facePins["F. W. de Klerk"]=["F. W. de Klerk", "Leonid Brezhnev", "Konstantin Chernenko", "Yuri Andropov"];
  facePins["Jack Lew"]=["Jack Lew", "Bill Clinton", "Chuck Hagel", "George W. Bush"];
  facePins["Malala Yousafzai"]=["Malala Yousafzai", "Aung San Suu Kyi", "Benazir Bhutto", "Indira Gandhi"];
  facePins["Mother Teresa"]=["Mother Teresa", "Jane Addams", "Dorothea Dix", "Florence Nightingale"];
  facePins["Mick Jagger"]=["Mick Jagger", "David Bowie", "Steven Tyler", "Peter Frampton"];
  facePins["David Bowie"]=["David Bowie", "Mick Jagger", "Steven Tyler", "Peter Frampton"];
  ALL_MC_QUESTIONS.forEach(function(q){ if(!q || !Array.isArray(q.choices)) return; if(q.cat!=="Famous Faces" && q.cat!=="Trivia Faces") return; var subj=q.choices[q.a]; var pin=facePins[subj]; if(pin){ q.choices=pin.slice(); q.a=pin.indexOf(subj); } });
})();

/* ============ AUDIT-GAUNTLET CLASSIFIER PIN (2026-11-13) ============
   The audit found the Canada question "Which young Canadian ran
   across the country in 1980…?" dealing Black bear / Snowy owl /
   Polar bear beside Terry Fox: the classifier read his surname as
   the animal, so animal fillers passed every kind test as his own
   kind. He is a person — registered here like the other late pins,
   with the kind caches cleared so the deal-time guard recomputes:
   the corrupted set now fails the guard and never deals, and any
   future pick beside him must be a person. */
(function auditPins(){
  NAME_GENDER["Terry Fox"]="m"; GENDER_NORM[norm("Terry Fox")]="m";
  KIND_INFO_CACHE={}; KIND_INFO_ALL_CACHE={};
  if(typeof subKindStr!=="undefined" && subKindStr._cache) subKindStr._cache=new Map();
})();

/* ============ "WHICH FAMOUS BOOK" ITEMS STAY MULTIPLE-CHOICE (2026-11-13) ============
   Audit gauntlet: the template "Which famous book did <author>
   write?" dealt as a typed Round 4 question (Christie, Dickens).
   Typed, it has no single defensible answer — the author wrote
   many famous books, and any of them is a correct response the
   judge cannot accept. As multiple choice the choices pin the
   intended book, so the items stay playable there and are only
   held out of typed conversion (mcOnly, the same disposition as
   the vague-association class). */
(function famousBookMcOnly(){
  if(typeof ALL_MC_QUESTIONS==="undefined" || !ALL_MC_QUESTIONS) return;
  ALL_MC_QUESTIONS.forEach(function(q){
    if(q && typeof q.q==="string" && /^Which famous book did .+ write\?$/i.test(q.q)) q.mcOnly=true;
  });
})();

/* ============ LEANN PHRASE-DISTINCTION ITEMS HELD (2026-11-13) ============
   Audit gauntlet rounds 8–9: two LeAnn items whose answers are
   long distinction phrases ("Youngest solo artist to win Best New
   Artist", "First country artist to win Artist of the Year…") kept
   dealing with album pairs, song pairs, TV-show titles, and award
   names as company — no same-kind family exists in her bank to
   field three honest phrase distractors, and typed, the phrases
   are unproducible. Held from dealing entirely (noDeal); the facts
   remain in her bank and in the explanation tables. */
(function leannPhraseHolds(){
  if(typeof LEANN_MC==="undefined" || !LEANN_MC) return;
  LEANN_MC.forEach(function(q){
    if(q && typeof q.q==="string" && /distinction did LeAnn Rimes hold|Billboard first did LeAnn Rimes achieve/i.test(q.q)) q.noDeal=true;
  });
})();
