import { Genre, Movie } from "./types"

/**
 * Movies data that mock a database
 */
export const movies: Movie[] = [
    {
        "id": 1,
        "genre_ids": [
            28,
            12,
            35,
            14,
            878
        ],
        "title": "Thor: Ragnarok",
        "release_date": "2017-10-25",
        "popularity": 157.472,
        "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
        "vote_average": 7.6,
        "vote_count": 16527,
        "adult": false
    },
    {
        "id": 2,
        "genre_ids": [
            28,
            12,
            878,
            18
        ],
        "title": "Spider-Man: Homecoming",
        "release_date": "2017-07-05",
        "popularity": 196.753,
        "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
        "vote_average": 7.4,
        "vote_count": 16896,
        "adult": false
    },
    {
        "id": 3,
        "genre_ids": [
            12,
            28,
            878,
            35
        ],
        "title": "Guardians of the Galaxy Vol. 2",
        "release_date": "2017-04-19",
        "popularity": 83.882,
        "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        "vote_average": 7.6,
        "vote_count": 17205,
        "adult": false
    },
    {
        "id": 4,
        "genre_ids": [
            28,
            18,
            878
        ],
        "title": "Logan",
        "release_date": "2017-02-28",
        "popularity": 66.119,
        "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
        "vote_average": 7.8,
        "vote_count": 16074,
        "adult": false
    },
    {
        "id": 5,
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "title": "Doctor Strange",
        "release_date": "2016-10-25",
        "popularity": 119.583,
        "overview": "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
        "vote_average": 7.4,
        "vote_count": 17565,
        "adult": false
    },
    {
        "id": 6,
        "genre_ids": [
            28,
            12,
            878,
            14
        ],
        "title": "X-Men: Apocalypse",
        "release_date": "2016-05-18",
        "popularity": 71.61,
        "overview": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
        "vote_average": 6.5,
        "vote_count": 10760,
        "adult": false
    },
    {
        "id": 7,
        "genre_ids": [
            12,
            28,
            878
        ],
        "title": "Captain America: Civil War",
        "release_date": "2016-04-27",
        "popularity": 119.845,
        "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
        "vote_average": 7.4,
        "vote_count": 18654,
        "adult": false
    },
    {
        "id": 8,
        "genre_ids": [
            28,
            12,
            35
        ],
        "title": "Deadpool",
        "release_date": "2016-02-09",
        "popularity": 144.572,
        "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        "vote_average": 7.6,
        "vote_count": 25561,
        "adult": false
    },
    {
        "id": 9,
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Fantastic Four",
        "release_date": "2015-08-05",
        "popularity": 47.626,
        "overview": "Four young outsiders teleport to a dangerous universe, which alters their physical form in shocking ways. Their lives irrevocably upended, the team must learn to harness their daunting new abilities and work together to save Earth from a former friend turned enemy.",
        "vote_average": 4.4,
        "vote_count": 4906,
        "adult": false
    },
    {
        "id": 10,
        "genre_ids": [
            878,
            28,
            12
        ],
        "title": "Ant-Man",
        "release_date": "2015-07-14",
        "popularity": 68.722,
        "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
        "vote_average": 7.1,
        "vote_count": 16099,
        "adult": false
    },
    {
        "id": 11,
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Avengers: Age of Ultron",
        "release_date": "2015-04-22",
        "popularity": 162.281,
        "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        "vote_average": 7.3,
        "vote_count": 18605,
        "adult": false
    },
    {
        "id": 12,
        "genre_ids": [
            28,
            878,
            12
        ],
        "title": "Guardians of the Galaxy",
        "release_date": "2014-07-30",
        "popularity": 50.533,
        "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        "vote_average": 7.9,
        "vote_count": 23175,
        "adult": false
    },
    {
        "id": 13,
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "title": "X-Men: Days of Future Past",
        "release_date": "2014-05-15",
        "popularity": 61.991,
        "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
        "vote_average": 7.5,
        "vote_count": 12777,
        "adult": false
    },
    {
        "id": 14,
        "genre_ids": [
            28,
            12,
            14
        ],
        "title": "The Amazing Spider-Man 2",
        "release_date": "2014-04-16",
        "popularity": 173.138,
        "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
        "vote_average": 6.4,
        "vote_count": 9755,
        "adult": false
    },
    {
        "id": 15,
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Captain America: The Winter Soldier",
        "release_date": "2014-03-20",
        "popularity": 54.379,
        "overview": "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.",
        "vote_average": 7.7,
        "vote_count": 15092,
        "adult": false
    },
    {
        "id": 16,
        "genre_ids": [
            28,
            12,
            14
        ],
        "title": "Thor: The Dark World",
        "release_date": "2013-10-30",
        "popularity": 117.51,
        "overview": "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
        "vote_average": 6.6,
        "vote_count": 13918,
        "adult": false
    },
    {
        "id": 17,
        "genre_ids": [
            28,
            878,
            12,
            14
        ],
        "title": "The Wolverine",
        "release_date": "2013-07-23",
        "popularity": 13.337,
        "overview": "Wolverine faces his ultimate nemesis - and tests of his physical, emotional, and mortal limits - in a life-changing voyage to modern-day Japan.",
        "vote_average": 6.4,
        "vote_count": 7832,
        "adult": false
    },
    {
        "id": 18,
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Iron Man 3",
        "release_date": "2013-04-18",
        "popularity": 128.509,
        "overview": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        "vote_average": 6.9,
        "vote_count": 18369,
        "adult": false
    },
    {
        "id": 19,
        "genre_ids": [
            28,
            12,
            14
        ],
        "title": "The Amazing Spider-Man",
        "release_date": "2012-06-23",
        "popularity": 314.81,
        "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
        "vote_average": 6.6,
        "vote_count": 13368,
        "adult": false
    },
    {
        "id": 20,
        "genre_ids": [
            878,
            28,
            12
        ],
        "title": "The Avengers",
        "release_date": "2012-04-25",
        "popularity": 207.848,
        "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        "vote_average": 7.7,
        "vote_count": 25453,
        "adult": false
    },
    {
        "id": 21,
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Captain America: The First Avenger",
        "release_date": "2011-07-22",
        "popularity": 103.486,
        "overview": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
        "vote_average": 7,
        "vote_count": 17455,
        "adult": false
    },
    {
        "id": 22,
        "genre_ids": [
            28,
            878,
            12
        ],
        "title": "X-Men: First Class",
        "release_date": "2011-06-01",
        "popularity": 4.225,
        "overview": "Before Charles Xavier and Erik Lensherr took the names Professor X and Magneto, they were two young men discovering their powers for the first time. Before they were arch-enemies, they were closest of friends, working together with other mutants (some familiar, some new), to stop the greatest threat the world has ever known.",
        "vote_average": 7.3,
        "vote_count": 10514,
        "adult": false
    },
    {
        "id": 23,
        "genre_ids": [
            12,
            14,
            28
        ],
        "title": "Thor",
        "release_date": "2011-04-21",
        "popularity": 170.785,
        "overview": "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
        "vote_average": 6.8,
        "vote_count": 17104,
        "adult": false
    },
    {
        "id": 24,
        "genre_ids": [
            12,
            28,
            878
        ],
        "title": "Iron Man 2",
        "release_date": "2010-04-28",
        "popularity": 214.148,
        "overview": "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
        "vote_average": 6.8,
        "vote_count": 16761,
        "adult": false
    },
    {
        "id": 25,
        "genre_ids": [
            12,
            28,
            53,
            878
        ],
        "title": "X-Men Origins: Wolverine",
        "release_date": "2009-04-28",
        "popularity": 26.257,
        "overview": "After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine.",
        "vote_average": 6.3,
        "vote_count": 8494,
        "adult": false
    },
    {
        "id": 26,
        "genre_ids": [
            878,
            28,
            12
        ],
        "title": "The Incredible Hulk",
        "release_date": "2008-06-12",
        "popularity": 48.804,
        "overview": "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
        "vote_average": 6.2,
        "vote_count": 9059,
        "adult": false
    },
    {
        "id": 27,
        "genre_ids": [
            28,
            878,
            12
        ],
        "title": "Iron Man",
        "release_date": "2008-04-30",
        "popularity": 115.378,
        "overview": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        "vote_average": 7.6,
        "vote_count": 21380,
        "adult": false
    },
    {
        "id": 28,
        "genre_ids": [
            12,
            14,
            28,
            53
        ],
        "title": "Fantastic Four: Rise of the Silver Surfer",
        "release_date": "2007-06-13",
        "popularity": 27.139,
        "overview": "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
        "vote_average": 5.6,
        "vote_count": 6436,
        "adult": false
    },
    {
        "id": 29,
        "genre_ids": [
            14,
            28,
            12
        ],
        "title": "Spider-Man 3",
        "release_date": "2007-05-01",
        "popularity": 154.285,
        "overview": "The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
        "vote_average": 6.3,
        "vote_count": 10343,
        "adult": false
    },
    {
        "id": 30,
        "genre_ids": [
            53,
            28,
            14
        ],
        "title": "Ghost Rider",
        "release_date": "2007-01-15",
        "popularity": 40.593,
        "overview": "In order to save his dying father, young stunt cyclist Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted Roxanne Simpson, the love of his life. Years later, Johnny's path crosses again with Roxanne, now a go-getting reporter, and also with Mephistopheles, who offers to release Johnny's soul if Johnny becomes the fabled, fiery 'Ghost Rider'.",
        "vote_average": 5.5,
        "vote_count": 4560,
        "adult": false
    },
    {
        "id": 31,
        "genre_ids": [
            12,
            28,
            878,
            53
        ],
        "title": "X-Men: The Last Stand",
        "release_date": "2006-05-24",
        "popularity": 1.457,
        "overview": "When a cure is found to treat mutations, lines are drawn amongst the X-Men—led by Professor Charles Xavier—and the Brotherhood, a band of powerful mutants organised under Xavier's former ally, Magneto.",
        "vote_average": 6.4,
        "vote_count": 7757,
        "adult": false
    },
    {
        "id": 32,
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "title": "Fantastic Four",
        "release_date": "2005-06-29",
        "popularity": 25.215,
        "overview": "During a space voyage, four scientists are altered by cosmic rays: Reed Richards gains the ability to stretch his body; Sue Storm can become invisible; Johnny Storm controls fire; and Ben Grimm is turned into a super-strong … thing. Together, these \"Fantastic Four\" must now thwart the evil plans of Dr. Doom and save the world from certain destruction.",
        "vote_average": 5.8,
        "vote_count": 7636,
        "adult": false
    },
    {
        "id": 33,
        "genre_ids": [
            28,
            12,
            14
        ],
        "title": "Spider-Man 2",
        "release_date": "2004-06-25",
        "popularity": 47.708,
        "overview": "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood. A certain anger begins to brew in his best friend Harry Osborn as well...",
        "vote_average": 7.1,
        "vote_count": 11403,
        "adult": false
    },
    {
        "id": 34,
        "genre_ids": [
            28,
            878
        ],
        "title": "Hulk",
        "release_date": "2003-06-19",
        "popularity": 35.406,
        "overview": "Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry.",
        "vote_average": 5.5,
        "vote_count": 4480,
        "adult": false
    },
    {
        "id": 35,
        "genre_ids": [
            14,
            28
        ],
        "title": "Spider-Man",
        "release_date": "2002-05-01",
        "popularity": 152.721,
        "overview": "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
        "vote_average": 7.2,
        "vote_count": 14128,
        "adult": false
    },
    {
        "id": 36,
        "genre_ids": [
            28,
            878,
            10752
        ],
        "title": "Captain America",
        "release_date": "1990-12-14",
        "popularity": 13.873,
        "overview": "During World War II, a brave, patriotic American Soldier undergoes experiments to become a new supersoldier, \"Captain America\". Racing to Germany to sabotage the rockets of Nazi baddie \"Red Skull\", Captain America winds up frozen until the 1990s. He reawakens to find that the Red Skull has changed identities and is now planning to kidnap the President of the United States.",
        "vote_average": 4.7,
        "vote_count": 298,
        "adult": false
    }
]

/**
 * Sample data that mock a database
 */
export const genres: Genre[] = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
]