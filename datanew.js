const books = [
    {
        img: "https://i.ibb.co/t3qP3Bg/Will.jpg",
        title: "Will",
        author: "Will Smith, Mark Manson",
        year: 2021,
        desc: "One of the most dynamic and globally recognized entertainment forces of our time opens up fully about his life, in a brave and inspiring book that traces his learning curve to a place where outer success, inner happiness, and human connection are aligned. Along the way, Will tells the story in full of one of the most amazing rides through the worlds of music and film that anyone has ever had. Will Smith’s transformation from a fearful child in a tense West Philadelphia home to one of the biggest rap stars of his era and then one of the biggest movie stars in Hollywood history, with a string of box office successes that will likely never be broken, is an epic tale of inner transformation and outer triumph, and Will tells it astonishingly well. But it's only half the story. Will Smith thought, with good reason, that he had won at life: not only was his own success unparalleled, but his whole family was also at the pinnacle of the entertainment world. Only they didn't see it that way: they felt more like star performers in his circus, a seven-days-a-week job they hadn't signed up for. It turned out Will Smith's education wasn't nearly over. Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.",
        category: "biography",
        price: 19,
        rating: 4.44

    },

    {
        img: "https://i.ibb.co/M6Db5dn/Project-Hail-Mary.jpg",
        title: "Project Hail Mary",
        author: "Andy Weir",
        year: 2021,
        desc: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.",
        category: "fiction",
        price: 22,
        rating: 4.53

    },
    {
        img: "https://i.ibb.co/N2pbymC/Harry-Potter-and-the-Philosopher-s-Stone.jpg",
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: 1997,
        desc: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid.But even within the Wizarding community, he is special.He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands.But doing so will bring him into contact with forces more terrifying than he ever could have imagined.",
        category: "fiction",
        price: 18,
        rating: 4.48
    },
    {
        img: "https://i.ibb.co/8zKbp2x/Daughter-of-the-Moon-Goddess.jpg",
        title: "Daughter of the Moon Goddess",
        author: " Sue Lynn Tan",
        year: 2022,
        desc: "A captivating debut fantasy inspired by the legend of Chang'e, the Chinese moon goddess, in which a young woman’s quest to free her mother pits her against the most powerful immortal in the realm. Growing up on the moon, Xingyin is accustomed to solitude, unaware that she is being hidden from the feared Celestial Emperor who exiled her mother for stealing his elixir of immortality. But when Xingyin’s magic flares and her existence is discovered, she is forced to flee her home, leaving her mother behind. Alone, powerless, and afraid, she makes her way to the Celestial Kingdom, a land of wonder and secrets. Disguising her identity, she seizes an opportunity to learn alongside the emperor's son, mastering archery and magic, even as passion flames between her and the prince.",
        category: "fiction",
        price: 16,
        rating: 4.25
    },
    {
        img: "https://i.ibb.co/ssHFGy9/Electric-Idol.jpg",
        title: "Electric Idol",
        author: "Katee Robert",
        year: 2022,
        desc: "In the ultra-modern city of Olympus, there's always a price to pay. Psyche knew she'd have to face Aphrodite's ire eventually, but she never expected her literal heart to be at stake...or for Aphrodite's gorgeous son to be the one ordered to strike the killing blow.Eros has no problem shedding blood.But when it comes time to take out his latest target, he can't do it. Confused by his reaction to Psyche, he does the only thing he can think of to keep her safe: he marries her. Psyche vows to make Eros's life a living hell until they find a way out of this mess.But as lines blur and loyalties shift, she realizes he might take her heart after all...and she's not sure she can survive the loss. ",
        category: "romance",
        price: 24,
        rating: 4.11
    },
    {
        img: "https://i.ibb.co/ZKpFX6M/Reminders-of-Him.jpg",
        title: "Reminders of Him",
        year: 2022,
        author: "Colleen Hoover",
        desc: "A troubled young mother yearns for a shot at redemption in this heartbreaking yet hopeful story from #1 New York Times bestselling author Colleen Hoover.After serving five years in prison for a tragic mistake, Kenna Rowan returns to the town where it all went wrong, hoping to reunite with her four-year-old daughter. But the bridges Kenna burned are proving impossible to rebuild. Everyone in her daughter’s life is determined to shut Kenna out, no matter how hard she works to prove herself.The only person who hasn’t closed the door on her completely is Ledger Ward, a local bar owner and one of the few remaining links to Kenna’s daughter. But if anyone were to discover how Ledger is slowly becoming an important part of Kenna’s life, both would risk losing the trust of everyone important to them.",
        category: "romance",
        price: 12,
        rating: 4.67
    },
    {
        img: "https://i.ibb.co/kgn2yQd/You.jpg",
        title: "You",
        author: " Caroline Kepnes",
        year: 2018,
        desc: "When a beautiful aspiring writer strides into the East Village bookstore where Joe Goldberg works, he does what anyone would do: he Googles the name on her credit card. There is only one Guinevere Beck in New York City.She has a public Facebook account and Tweets incessantly, telling Joe everything he needs to know: she is simply Beck to her friends, she went to Brown University, she lives on Bank Street, and she’ll be at a bar in Brooklyn tonight—the perfect place for a “chance” meeting. As Joe invisibly and obsessively takes control of Beck’s life, he orchestrates a series of events to ensure Beck finds herself in his waiting arms.Moving from stalker to boyfriend, Joe transforms himself into Beck’s perfect man, all while quietly removing the obstacles that stand in their way—even if it means murder. A terrifying exploration of how vulnerable we all are to stalking and manipulation, debut author Caroline Kepnes delivers a razor- sharp novel for our hyper - connected digital age.",
        category: "thriller",
        price: 13,
        rating: 3.93
    },
    {
        img: "https://i.ibb.co/zsBq9vg/The-Da-Vinci-Code.jpg",
        title: "The Da Vinci Code",
        author: " Dan Brown",
        year: 2006,
        desc: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret.Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
        category: "thriller",
        price: 16,
        rating: 3.88
    },
    {
        img: "https://i.ibb.co/2MpRB0C/And-Then-There-Were-None.jpg",
        title: "And Then There Were None ",
        author: "Agatha Christie",
        year: 2004,
        desc: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion . Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he'd stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got in Chancery and then there were four.",
        category: "thriller",
        price: 14.4,
        rating: 4.26
    },
    {
        img: "https://i.ibb.co/4K6rgCc/Verity.jpg",
        title: "Verity",
        author: "Colleen Hoover",
        year: 2021,
        desc: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read.Page after page of bone- chilling admissions, including Verity's recollection of what really happened the day her daughter died.",
        category: "thriller",
        price: 22,
        rating: 4.41
    },
    {
        img: "https://i.ibb.co/qnd6LjM/The-Silkworm.jpg",
        title: "The Silkworm",
        author: "Robert Galbraith",
        year: 2014,
        desc: "When novelist Owen Quine goes missing, his wife calls in private detective Cormoran Strike. At first, Mrs. Quine just thinks her husband has gone off by himself for a few days—as he has done before—and she wants Strike to find him and bring him home.But as Strike investigates, it becomes clear that there is more to Quine's disappearance than his wife realizes. The novelist has just completed a manuscript featuring poisonous pen-portraits of almost everyone he knows. If the novel were to be published, it would ruin lives—meaning that there are a lot of people who might want him silenced.",
        category: "mystery",
        price: 15.8,
        rating: 4.04
    },
    {
        img: "https://i.ibb.co/j32PpS3/All-We-Buried.jpg",
        title: "All We Buried",
        author: " Elena Taylor",
        year: 2020,
        desc: "Deep in the woods surrounding the Cascade mountain range, a canvas-wrapped body floats in a lake, right in Elizabeth Bet Rivers's jurisdiction. Bet has been sitting as interim sheriff of Collier after her father's--the previous sheriff's--death six months ago. Everyone knows everyone in a town like Collier. She has made it her duty to protect the people she's come to see as family. And she intends to hold her title in the upcoming election, but she's never worked a murder investigation on her own before and her opponent and deputy, Dale Kovac, isn't going down without a fight.Upon unwrapping the corpse, Bet discovers the woman is from out of town.Without an identification, the case grows that much more puzzling.Determined to prove herself worthy, however, Bet must confront the warped history of Collier.",
        category: "mystery",
        price: 18,
        rating: 4
    },
    {
        img: "https://i.ibb.co/v3tCjth/Treasure-Island.jpg",
        title: "Treasure Island ",
        author: "Robert Louis Stevenson",
        year: 2001,
        desc: "For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From the moment young Jim Hawkins first encounters the sinister Blind Pew at the Admiral Benbow Inn until the climactic battle for treasure on a tropic isle, the novel creates scenes and characters that have fired the imaginations of generations of readers. Written by a superb prose stylist, a master of both action and atmosphere, the story centers upon the conflict between good and evil - but in this case a particularly engaging form of evil. It is the villainy of that most ambiguous rogue Long John Silver that sets the tempo of this tale of treachery, greed, and daring. ",
        category: "adventure",
        price: 11,
        rating: 3.84
    },
    {
        img: "https://i.ibb.co/ssdz0nf/The-Hobbit-Or-There-and-Back-Again.jpg",
        title: "The Hobbit: Or There and Back Again",
        author: "J.R.R. Tolkien",
        year: 2015,
        desc: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible . . .All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.",
        category: "adventure",
        price: 14.5,
        rating: 4.56
    },
    {
        img: "https://i.ibb.co/bLdvTrc/The-Bone-Spindle.jpg",
        title: "The Bone Spindle",
        author: " Leslie Vedder",
        year: 2022,
        desc: "Fi is a bookish treasure hunter with a knack for ruins and riddles, who definitely doesn't believe in true love.Shane is a tough- as - dirt girl warrior from the north who likes cracking skulls, pretty girls, and doing things her own way. Briar Rose is a prince under a sleeping curse, who's been waiting a hundred years for the kiss that will wake him. Cursed princes are nothing but ancient history to Fi--until she pricks her finger on a bone spindle while exploring a long - lost ruin.Now she's stuck with the spirit of Briar Rose until she and Shane can break the century-old curse on his kingdom.",
        category: "action",
        price: 16.5,
        rating: 3.97
    },
    {
        img: "https://i.ibb.co/sHpbpcS/Light-Years-From-Home.jpg",
        title: "Light Years From Home",
        author: "Mike Chen",
        year: 2022,
        desc: "Evie Shao and her sister, Kass, aren’t on speaking terms. Fifteen years ago on a family camping trip, their father and brother vanished. Their dad turned up days later, dehydrated and confused—and convinced he'd been abducted by aliens. Their brother, Jakob, remained missing. The women dealt with it very differently. Kass, suspecting her college-dropout twin simply ran off, became the rock of the family. Evie traded academics to pursue alien conspiracy theories, always looking for Jakob.When Evie's UFO network uncovers a new event, she goes to investigate. And discovers Jakob is back. He's different—older, stranger,and talking of an intergalactic war—but the tensions between the siblings haven't changed at all. ",
        category: "action",
        price: 14.5,
        rating: 3.92
    },
    {
        img: "https://i.ibb.co/j6bcJPK/Edge-of-Collapse.jpg",
        title: "Edge of Collapse ",
        author: " Kyla Stone",
        year: 2020,
        desc: "In the dead of winter, an EMP attack destroys the U.S. power grid. No electricity.No cars or phones.The country is plunged into instant chaos.But for Hannah Sheridan, it's the best day of her life. For the last five years, she's been the captive of a sadistic psychopath--until the EMP releases the lock of her prison. Battered but not broken, she emerges from her underground cell into a hostile winter wilderness with nothing but her determination to survive. Reclusive ex-soldier Liam Coleman is headed nowhere fast. He believed he was prepared for any disaster, until the EMP took everything he'd ever cared about in a matter of seconds.",
        category: "action",
        price: 15.5,
        rating: 4.23
    },

    {
        img: "https://i.ibb.co/JKPprdG/Cold-the-Night-Fast-the-Wolves.jpg",
        title: "Cold the Night, Fast the Wolves ",
        author: " Meg Long ",
        year: 2022,
        desc: "After angering a local gangster, seventeen-year-old Sena Korhosen must flee with her prize fighting wolf, Iska, in tow. A team of scientists offer to pay her way off her frozen planet on one condition: she gets them to the finish line of the planet’s infamous sled race. Though Sena always swore she’d never race after it claimed both her mothers’ lives, it’s now her only option.But the tundra is a treacherous place, and as the race unfolds and their lives are threatened at every turn, Sena starts to question her own abilities.She must discover whether she's strong enough to survive the wild – whether she and Iska together are strong enough to get them all out alive.",
        category: "action",
        price: 16.5,
        rating: 4.02
    },

    {
        img: "https://i.ibb.co/Fbk520L/Anatomy-A-Love-Story.jpg",
        title: "Anatomy: A Love Story ",
        author: "Dana Schwartz",
        year: 2022,
        desc: "Hazel Sinnett is a lady who wants to be a surgeon more than she wants to marry.Jack Currer is a resurrection man who’s just trying to survive in a city where it’s too easy to die.When the two of them have a chance encounter outside the Edinburgh Anatomist’s Society, Hazel thinks nothing of it at first.But after she gets kicked out of renowned surgeon Dr.Beecham’s lectures for being the wrong gender, she realizes that her new acquaintance might be more helpful than she first thought.Because Hazel has made a deal with Dr.Beecham: if she can pass the medical examination on her own, the university will allow her to enroll.Without official lessons, though, Hazel will need more than just her books – she’ll need bodies to study, corpses to dissect. ",
        category: "horror",
        price: 17,
        rating: 3.94
    },
    {
        img: "https://i.ibb.co/kHcynT8/The-Moonlight-Child.jpg",
        title: "The Moonlight Child",
        author: "Karen McQuestion",
        year: 2020,
        desc: "On a cold January night, Sharon Lemke heads outside to see a lunar eclipse when she notices something odd at the house behind her backyard. Through her neighbor's kitchen window, she sees what appears to be a little girl washing dishes late at night. But the Fleming family doesn't have a child that age, and even if they did, why would she be doing housework at this late hour? It would be easy for Sharon to just let this go, but when eighteen- year - old Niki, a former foster child, comes to live with Sharon, she notices suspicious activity at the Flemings' house as well. When calling social services doesn't result in swift action, the two decide to investigate on their own.",
        category: "horror",
        price: 11.5,
        rating: 4.2
    },
    {
        img: "https://i.ibb.co/KKSBynX/The-Night-Parade.jpg",
        title: "The Night Parade",
        author: "Ronald Malfi",
        year: 2016,
        desc: "They call it Wanderer's Folly--a disease of delusions, of daydreams and nightmares. A plague threatening to wipe out the human race.After two years of creeping decay, David Arlen woke up one morning thinking that the worst was over.By midnight, he's bleeding and terrified, his wife is dead, and he's on the run in a stolen car with his eight- year - old daughter, who may be the key to a cure. Ellie is a special girl.Deep.Insightful.And she knows David is lying to her.Lying about her mother.Lying about what they're running from. And lying about what he sees when he takes his eyes off the road . . . ",
        category: "horror",
        price: 13.5,
        rating: 3.89
    },
    {
        img: "https://i.ibb.co/NW78nhh/The-Last-Slave-Ship.jpg",
        title: "The Last Slave Ship",
        author: "Ben Raines",
        year: 2022,
        desc: "The incredible true story of the last ship to carry enslaved people to America, the remarkable town its survivors founded after emancipation, and the complicated legacy their descendants carry with them to this day—by the journalist who discovered the ship’s remains.Fifty years after the Atlantic slave trade was outlawed, the Clotilda became the last ship in history to bring enslaved Africans to the United States.The ship was scuttled and burned on arrival to hide evidence of the crime, allowing the wealthy perpetrators to escape prosecution.Despite numerous efforts to find the sunken wreck, Clotilda remained hidden for the next 160 years.But in 2019, journalist Ben Raines made international news when he successfully concluded his obsessive quest through the swamps of Alabama to uncover one of our nation’s most important historical artifacts.",
        category: "history",
        price: 22,
        rating: 4.55
    },
    {
        img: "https://i.ibb.co/3k105Dx/The-Rise-and-Fall-of-the-Third-Reich.jpg",
        title: "The Rise and Fall of the Third Reich",
        author: "Ronald Malfi",
        year: 1990,
        desc: "Hitler boasted that The Third Reich would last a thousand years. It lasted only 12. But those 12 years contained some of the most catastrophic events Western civilization has ever known. No other powerful empire ever bequeathed such mountains of evidence about its birth and destruction as the Third Reich.When the bitter war was over, and before the Nazis could destroy their files, the Allied demand for unconditional surrender produced an almost hour- by - hour record of the nightmare empire built by Adolph Hitler.This record included the testimony of Nazi leaders and of concentration camp inmates, the diaries of officials, transcripts of secret conferences, army orders, private letters—all the vast paperwork behind Hitler's drive to conquer the world.",
        category: "history",
        price: 16,
        rating: 4.17
    },
    {
        img: "https://i.ibb.co/FWc3k5d/The-History-of-the-Ancient-World.jpg",
        title: "The History of the Ancient World",
        author: "Susan Wise Bauer",
        year: 2007,
        desc: "This is the first volume in a bold new series that tells the stories of all peoples, connecting historical events from Europe to the Middle East to the far coast of China, while still giving weight to the characteristics of each country.Susan Wise Bauer provides both sweeping scope and vivid attention to the individual lives that give flesh to abstract assertions about human history. Dozens of maps provide a clear geography of great events, while timelines give the reader an ongoing sense of the passage of years and cultural interconnection.This narrative history employs the methods of “history from beneath”—literature, epic traditions, private letters and accounts—to connect kings and leaders with the lives of those they ruled.The result is an engrossing tapestry of human behavior from which we may draw conclusions about the direction of world events and the causes behind them.",
        category: "history",
        price: 12,
        rating: 4.11
    },

    {
        img: "https://i.ibb.co/M6Db5dn/Project-Hail-Mary.jpg",
        title: "Project Hail Mary ",
        author: "Andy Weir",
        year: 2021,
        desc: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.",
        category: "fiction",
        price: 22,
        rating: 4.53

    },
    {
        img: "https://i.ibb.co/N2pbymC/Harry-Potter-and-the-Philosopher-s-Stone.jpg",
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: 1997,
        desc: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid.But even within the Wizarding community, he is special.He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands.But doing so will bring him into contact with forces more terrifying than he ever could have imagined.",
        category: "fiction",
        price: 18,
        rating: 4.48
    },
    {
        img: "https://i.ibb.co/8zKbp2x/Daughter-of-the-Moon-Goddess.jpg",
        title: "Daughter of the Moon Goddess",
        author: " Sue Lynn Tan",
        year: 2022,
        desc: "A captivating debut fantasy inspired by the legend of Chang'e, the Chinese moon goddess, in which a young woman’s quest to free her mother pits her against the most powerful immortal in the realm. Growing up on the moon, Xingyin is accustomed to solitude, unaware that she is being hidden from the feared Celestial Emperor who exiled her mother for stealing his elixir of immortality. But when Xingyin’s magic flares and her existence is discovered, she is forced to flee her home, leaving her mother behind. Alone, powerless, and afraid, she makes her way to the Celestial Kingdom, a land of wonder and secrets. Disguising her identity, she seizes an opportunity to learn alongside the emperor's son, mastering archery and magic, even as passion flames between her and the prince.",
        category: "fiction",
        price: 16,
        rating: 4.25
    },
    {
        img: "https://i.ibb.co/ssHFGy9/Electric-Idol.jpg",
        title: "Electric Idol",
        author: "Katee Robert",
        year: 2022,
        desc: "In the ultra-modern city of Olympus, there's always a price to pay. Psyche knew she'd have to face Aphrodite's ire eventually, but she never expected her literal heart to be at stake...or for Aphrodite's gorgeous son to be the one ordered to strike the killing blow.Eros has no problem shedding blood.But when it comes time to take out his latest target, he can't do it. Confused by his reaction to Psyche, he does the only thing he can think of to keep her safe: he marries her. Psyche vows to make Eros's life a living hell until they find a way out of this mess.But as lines blur and loyalties shift, she realizes he might take her heart after all...and she's not sure she can survive the loss. ",
        category: "romance",
        price: 24,
        rating: 4.11
    },
    {
        img: "https://i.ibb.co/ZKpFX6M/Reminders-of-Him.jpg",
        title: "Reminders of Him",
        year: 2022,
        author: "Colleen Hoover",
        desc: "A troubled young mother yearns for a shot at redemption in this heartbreaking yet hopeful story from #1 New York Times bestselling author Colleen Hoover.After serving five years in prison for a tragic mistake, Kenna Rowan returns to the town where it all went wrong, hoping to reunite with her four-year-old daughter. But the bridges Kenna burned are proving impossible to rebuild. Everyone in her daughter’s life is determined to shut Kenna out, no matter how hard she works to prove herself.The only person who hasn’t closed the door on her completely is Ledger Ward, a local bar owner and one of the few remaining links to Kenna’s daughter. But if anyone were to discover how Ledger is slowly becoming an important part of Kenna’s life, both would risk losing the trust of everyone important to them.",
        category: "romance",
        price: 12,
        rating: 4.67
    },
    {
        img: "https://i.ibb.co/kgn2yQd/You.jpg",
        title: "You",
        author: " Caroline Kepnes",
        year: 2018,
        desc: "When a beautiful aspiring writer strides into the East Village bookstore where Joe Goldberg works, he does what anyone would do: he Googles the name on her credit card. There is only one Guinevere Beck in New York City.She has a public Facebook account and Tweets incessantly, telling Joe everything he needs to know: she is simply Beck to her friends, she went to Brown University, she lives on Bank Street, and she’ll be at a bar in Brooklyn tonight—the perfect place for a “chance” meeting. As Joe invisibly and obsessively takes control of Beck’s life, he orchestrates a series of events to ensure Beck finds herself in his waiting arms.Moving from stalker to boyfriend, Joe transforms himself into Beck’s perfect man, all while quietly removing the obstacles that stand in their way—even if it means murder. A terrifying exploration of how vulnerable we all are to stalking and manipulation, debut author Caroline Kepnes delivers a razor- sharp novel for our hyper - connected digital age.",
        category: "thriller",
        price: 13,
        rating: 3.93
    },
    {
        img: "https://i.ibb.co/zsBq9vg/The-Da-Vinci-Code.jpg",
        title: "The Da Vinci Code",
        author: " Dan Brown",
        year: 2006,
        desc: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret.Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
        category: "thriller",
        price: 16,
        rating: 3.88
    },
    {
        img: "https://i.ibb.co/2MpRB0C/And-Then-There-Were-None.jpg",
        title: "And Then There Were None ",
        author: "Agatha Christie",
        year: 2004,
        desc: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion . Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he'd stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got in Chancery and then there were four.",
        category: "thriller",
        price: 14.4,
        rating: 4.26
    },
    {
        img: "https://i.ibb.co/4K6rgCc/Verity.jpg",
        title: "Verity",
        author: "Colleen Hoover",
        year: 2021,
        desc: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read.Page after page of bone- chilling admissions, including Verity's recollection of what really happened the day her daughter died.",
        category: "thriller",
        price: 22,
        rating: 4.41
    },
    {
        img: "https://i.ibb.co/qnd6LjM/The-Silkworm.jpg",
        title: "The Silkworm",
        author: "Robert Galbraith",
        year: 2014,
        desc: "When novelist Owen Quine goes missing, his wife calls in private detective Cormoran Strike. At first, Mrs. Quine just thinks her husband has gone off by himself for a few days—as he has done before—and she wants Strike to find him and bring him home.But as Strike investigates, it becomes clear that there is more to Quine's disappearance than his wife realizes. The novelist has just completed a manuscript featuring poisonous pen-portraits of almost everyone he knows. If the novel were to be published, it would ruin lives—meaning that there are a lot of people who might want him silenced.",
        category: "mystery",
        price: 15.8,
        rating: 4.04
    },
    {
        img: "https://i.ibb.co/j32PpS3/All-We-Buried.jpg",
        title: "All We Buried",
        author: " Elena Taylor",
        year: 2020,
        desc: "Deep in the woods surrounding the Cascade mountain range, a canvas-wrapped body floats in a lake, right in Elizabeth Bet Rivers's jurisdiction. Bet has been sitting as interim sheriff of Collier after her father's--the previous sheriff's--death six months ago. Everyone knows everyone in a town like Collier. She has made it her duty to protect the people she's come to see as family. And she intends to hold her title in the upcoming election, but she's never worked a murder investigation on her own before and her opponent and deputy, Dale Kovac, isn't going down without a fight.Upon unwrapping the corpse, Bet discovers the woman is from out of town.Without an identification, the case grows that much more puzzling.Determined to prove herself worthy, however, Bet must confront the warped history of Collier.",
        category: "mystery",
        price: 18,
        rating: 4
    },
    {
        img: "https://i.ibb.co/v3tCjth/Treasure-Island.jpg",
        title: "Treasure Island ",
        author: "Robert Louis Stevenson",
        year: 2001,
        desc: "For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From the moment young Jim Hawkins first encounters the sinister Blind Pew at the Admiral Benbow Inn until the climactic battle for treasure on a tropic isle, the novel creates scenes and characters that have fired the imaginations of generations of readers. Written by a superb prose stylist, a master of both action and atmosphere, the story centers upon the conflict between good and evil - but in this case a particularly engaging form of evil. It is the villainy of that most ambiguous rogue Long John Silver that sets the tempo of this tale of treachery, greed, and daring. ",
        category: "adventure",
        price: 11,
        rating: 3.84
    },
    {
        img: "https://i.ibb.co/ssdz0nf/The-Hobbit-Or-There-and-Back-Again.jpg",
        title: "The Hobbit: Or There and Back Again",
        author: "J.R.R. Tolkien",
        year: 2015,
        desc: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible . . .All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.",
        category: "adventure",
        price: 14.5,
        rating: 4.56
    },
    {
        img: "https://i.ibb.co/bLdvTrc/The-Bone-Spindle.jpg",
        title: "The Bone Spindle",
        author: " Leslie Vedder",
        year: 2022,
        desc: "Fi is a bookish treasure hunter with a knack for ruins and riddles, who definitely doesn't believe in true love.Shane is a tough- as - dirt girl warrior from the north who likes cracking skulls, pretty girls, and doing things her own way. Briar Rose is a prince under a sleeping curse, who's been waiting a hundred years for the kiss that will wake him. Cursed princes are nothing but ancient history to Fi--until she pricks her finger on a bone spindle while exploring a long - lost ruin.Now she's stuck with the spirit of Briar Rose until she and Shane can break the century-old curse on his kingdom.",
        category: "action",
        price: 16.5,
        rating: 3.97
    },
    {
        img: "https://i.ibb.co/sHpbpcS/Light-Years-From-Home.jpg",
        title: "Light Years From Home",
        author: "Mike Chen",
        year: 2022,
        desc: "Evie Shao and her sister, Kass, aren’t on speaking terms. Fifteen years ago on a family camping trip, their father and brother vanished. Their dad turned up days later, dehydrated and confused—and convinced he'd been abducted by aliens. Their brother, Jakob, remained missing. The women dealt with it very differently. Kass, suspecting her college-dropout twin simply ran off, became the rock of the family. Evie traded academics to pursue alien conspiracy theories, always looking for Jakob.When Evie's UFO network uncovers a new event, she goes to investigate. And discovers Jakob is back. He's different—older, stranger,and talking of an intergalactic war—but the tensions between the siblings haven't changed at all. ",
        category: "action",
        price: 14.5,
        rating: 3.92
    },
    {
        img: "https://i.ibb.co/j6bcJPK/Edge-of-Collapse.jpg",
        title: "Edge of Collapse ",
        author: " Kyla Stone",
        year: 2020,
        desc: "In the dead of winter, an EMP attack destroys the U.S. power grid. No electricity.No cars or phones.The country is plunged into instant chaos.But for Hannah Sheridan, it's the best day of her life. For the last five years, she's been the captive of a sadistic psychopath--until the EMP releases the lock of her prison. Battered but not broken, she emerges from her underground cell into a hostile winter wilderness with nothing but her determination to survive. Reclusive ex-soldier Liam Coleman is headed nowhere fast. He believed he was prepared for any disaster, until the EMP took everything he'd ever cared about in a matter of seconds.",
        category: "action",
        price: 15.5,
        rating: 4.23
    },

    {
        img: "https://i.ibb.co/JKPprdG/Cold-the-Night-Fast-the-Wolves.jpg",
        title: "Cold the Night, Fast the Wolves ",
        author: " Meg Long ",
        year: 2022,
        desc: "After angering a local gangster, seventeen-year-old Sena Korhosen must flee with her prize fighting wolf, Iska, in tow. A team of scientists offer to pay her way off her frozen planet on one condition: she gets them to the finish line of the planet’s infamous sled race. Though Sena always swore she’d never race after it claimed both her mothers’ lives, it’s now her only option.But the tundra is a treacherous place, and as the race unfolds and their lives are threatened at every turn, Sena starts to question her own abilities.She must discover whether she's strong enough to survive the wild – whether she and Iska together are strong enough to get them all out alive.",
        category: "action",
        price: 16.5,
        rating: 4.02
    },

    {
        img: "https://i.ibb.co/Fbk520L/Anatomy-A-Love-Story.jpg",
        title: "Anatomy: A Love Story ",
        author: "Dana Schwartz",
        year: 2022,
        desc: "Hazel Sinnett is a lady who wants to be a surgeon more than she wants to marry.Jack Currer is a resurrection man who’s just trying to survive in a city where it’s too easy to die.When the two of them have a chance encounter outside the Edinburgh Anatomist’s Society, Hazel thinks nothing of it at first.But after she gets kicked out of renowned surgeon Dr.Beecham’s lectures for being the wrong gender, she realizes that her new acquaintance might be more helpful than she first thought.Because Hazel has made a deal with Dr.Beecham: if she can pass the medical examination on her own, the university will allow her to enroll.Without official lessons, though, Hazel will need more than just her books – she’ll need bodies to study, corpses to dissect. ",
        category: "horror",
        price: 17,
        rating: 3.94
    },
    {
        img: "https://i.ibb.co/kHcynT8/The-Moonlight-Child.jpg",
        title: "The Moonlight Child",
        author: "Karen McQuestion",
        year: 2020,
        desc: "On a cold January night, Sharon Lemke heads outside to see a lunar eclipse when she notices something odd at the house behind her backyard. Through her neighbor's kitchen window, she sees what appears to be a little girl washing dishes late at night. But the Fleming family doesn't have a child that age, and even if they did, why would she be doing housework at this late hour? It would be easy for Sharon to just let this go, but when eighteen- year - old Niki, a former foster child, comes to live with Sharon, she notices suspicious activity at the Flemings' house as well. When calling social services doesn't result in swift action, the two decide to investigate on their own.",
        category: "horror",
        price: 11.5,
        rating: 4.2
    },
    {
        img: "https://i.ibb.co/KKSBynX/The-Night-Parade.jpg",
        title: "The Night Parade",
        author: "Ronald Malfi",
        year: 2016,
        desc: "They call it Wanderer's Folly--a disease of delusions, of daydreams and nightmares. A plague threatening to wipe out the human race.After two years of creeping decay, David Arlen woke up one morning thinking that the worst was over.By midnight, he's bleeding and terrified, his wife is dead, and he's on the run in a stolen car with his eight- year - old daughter, who may be the key to a cure. Ellie is a special girl.Deep.Insightful.And she knows David is lying to her.Lying about her mother.Lying about what they're running from. And lying about what he sees when he takes his eyes off the road . . . ",
        category: "horror",
        price: 13.5,
        rating: 3.89
    },


    {
        img: "https://i.ibb.co/NW78nhh/The-Last-Slave-Ship.jpg",
        title: "The Last Slave Ship",
        author: "Ben Raines",
        year: 2022,
        desc: "The incredible true story of the last ship to carry enslaved people to America, the remarkable town its survivors founded after emancipation, and the complicated legacy their descendants carry with them to this day—by the journalist who discovered the ship’s remains.Fifty years after the Atlantic slave trade was outlawed, the Clotilda became the last ship in history to bring enslaved Africans to the United States.The ship was scuttled and burned on arrival to hide evidence of the crime, allowing the wealthy perpetrators to escape prosecution.Despite numerous efforts to find the sunken wreck, Clotilda remained hidden for the next 160 years.But in 2019, journalist Ben Raines made international news when he successfully concluded his obsessive quest through the swamps of Alabama to uncover one of our nation’s most important historical artifacts.",
        category: "history",
        price: 22,
        rating: 4.55
    },
    {
        img: "https://i.ibb.co/3k105Dx/The-Rise-and-Fall-of-the-Third-Reich.jpg",
        title: "The Rise and Fall of the Third Reich",
        author: "Ronald Malfi",
        year: 1990,
        desc: "Hitler boasted that The Third Reich would last a thousand years. It lasted only 12. But those 12 years contained some of the most catastrophic events Western civilization has ever known. No other powerful empire ever bequeathed such mountains of evidence about its birth and destruction as the Third Reich.When the bitter war was over, and before the Nazis could destroy their files, the Allied demand for unconditional surrender produced an almost hour- by - hour record of the nightmare empire built by Adolph Hitler.This record included the testimony of Nazi leaders and of concentration camp inmates, the diaries of officials, transcripts of secret conferences, army orders, private letters—all the vast paperwork behind Hitler's drive to conquer the world.",
        category: "history",
        price: 16,
        rating: 4.17
    },
    {
        img: "https://i.ibb.co/FWc3k5d/The-History-of-the-Ancient-World.jpg",
        title: "The History of the Ancient World",
        author: "Susan Wise Bauer",
        year: 2007,
        desc: "This is the first volume in a bold new series that tells the stories of all peoples, connecting historical events from Europe to the Middle East to the far coast of China, while still giving weight to the characteristics of each country.Susan Wise Bauer provides both sweeping scope and vivid attention to the individual lives that give flesh to abstract assertions about human history. Dozens of maps provide a clear geography of great events, while timelines give the reader an ongoing sense of the passage of years and cultural interconnection.This narrative history employs the methods of “history from beneath”—literature, epic traditions, private letters and accounts—to connect kings and leaders with the lives of those they ruled.The result is an engrossing tapestry of human behavior from which we may draw conclusions about the direction of world events and the causes behind them.",
        category: "history",
        price: 12,
        rating: 4.11
    },



];

module.exports = books


