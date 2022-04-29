const { Book } = require("./models");

require("./config/db.connection")

Book.insertMany(
    [
        {
            username: "oks",
            title: "Life of Pi",
            author: "Yann Martel",
            year: 2001,
            genre: "Fantasy adventure novel",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631251689l/4214._SY475_.jpg",
            pages: 352,
            audioBook: 13,
            readingStatus: "wanttoread",
            notes: "Yann Martel's third novel, Life of Pi (2001), follows protagonist Piscine “Pi” Patel on a journey of survival after the cargo ship carrying him and his family sinks in the Pacific Ocean. "
        },
        {
            username: "oks",
            title: "Dial A for Aunties",
            author: "Jesse Q. Sutanto",
            year: 2021,
            genre: "Crime, Romance, Comedy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601307658l/53310061.jpg",
            pages: 299,
            audioBook: "12",
            readingStatus: "read",
            notes: "This is the perfect summer read! This book was a lovely surprise! It's a little more romance than I was expecting, but I had so much fun with this story from beginning to end. "
        },

        {
            username: "oks",
            title: "How Y'all Doing?: Misadventures and Mischief from a Life Well Lived",
            author: "Leslie Jordan",
            year: 2021,
            genre: "Humor",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611776582l/55339007.jpg",
            pages: 208,
            audioBook: 5,
            readingStatus: "wanttoread",
            notes: "Viral sensation and Emmy Award-winner Leslie Jordan regales fans with entertaining stories about the odd, funny, and unforgettable events in his life in this unmissable essay collection that echoes his droll, irreverent voice.",
        },
        {
            username: "oks",
            title: "Two Heads: A Graphic Exploration of How Our Brains Work with Other Brains",
            author: "Uta Frith, Chris Frith",
            year: 2022,
            genre: "Psychology, Novel",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649384674l/58437575._SX318_.jpg",
            pages: 352,
            audioBook: 13,
            readingStatus: "wanttoread",
            notes: "A lively, accessible, graphic novel that takes us on a highly entertaining and fascinating tour through the wonders and mysteries of the human brain—from a renowned husband-and-wife team of cognitive neuroscientists.",
        },
        {
            username: "oks",
            title: "The A.B.C. Murders",
            author: "Agatha Christie",
            year: 1936,
            genre: "Mystery, Novel, Crime Fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389733983l/16322.jpg",
            pages: 232,
            audioBook: 8,
            readingStatus: "wanttoread",
            notes: "Agatha Christie is such a crafty devil that midway through a novel she might have you believing that YOU are the murderer!",
        },
        {
            username: "oks",
            title: "A Molecule Away from Madness: Tales of the Hijacked Brain",
            author: "Sara Manning Peskin",
            year: 2022,
            genre: "Psychology",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1641271142l/58085250.jpg",
            pages: 224,
            audioBook: 8,
            readingStatus: "wanttoread",
            notes: "Our brains are the most complex machines known to humankind, but they have an Achilles heel: the very molecules that allow us to exist can also sabotage our minds. Here are gripping accounts of unruly molecules and the diseases that form in their wake.",
        },
        {
            username: "oks",
            title: "One Italian Summer",
            author: "Rebecca Serle",
            year: 2022,
            genre: "Romance novel",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626799802l/58438583.jpg",
            pages: 272,
            audioBook: 9,
            readingStatus: "reading",
            notes: "The author created another emotional, moving, powerful story located in dreamy Italian island with three dimensional, well-developed, easily connectable characters. There are impressively depicted landscapes and mouth watering food which are also tempting to enjoy our reading journey! This is purely effective story questions meaning of life, friendship, self growth, our purposes, dreams, regrets!",
        },
        {
            username: "oks",
            title: "Ten Steps to Nanette",
            author: "Hannah Gadsby",
            year: 2022,
            genre: "Biography, Autobiography, Humor",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637305486l/40588534._SY475_.jpg",
            pages: 400,
            audioBook: 16,
            readingStatus: "reading",
            notes: "Multi-awardwinning Hannah Gadsby transformed comedy with her show Nanette, even as she declared that she was quitting stand-up. Now, she takes us through the defining moments in her life that led to the creation of Nanette and her powerful decision to tell the truth-no matter the cost.",
        },
        {
            username: "oks",
            title: "Woman on Fire",
            author: "Lisa Barr",
            year: 2022,
            genre: "Historical fiction, Thriller",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639377419l/58275730.jpg",
            pages: 416,
            audioBook: 16,
            readingStatus: "reading",
            notes: "History. Stolen art. Family secrets. Psychopaths. European settings. This book has it all and then some. Compelling and rich, twisted and devious, I devoured it in a matter of days.",
        },
        {
            username: "oks",
            title: "The Power of Regret: How Looking Backward Moves Us Forward",
            author: "Daniel H. Pink",
            year: 2022,
            genre: "Self-help book, Business",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631506945l/58446721.jpg",
            pages: 239,
            audioBook: 8,
            readingStatus: "reading",
            notes: "Everybody has regrets, Daniel H. Pink explains in The Power of Regret. They're a universal and healthy part of being human. And understanding how regret works can help us make smarter decisions, perform better at work and school, and bring greater meaning to our lives.",
        },
        {
            username: "oks",
            title: "Numbers Don't Lie: 71 Things You Need to Know About the World",
            author: "Vaclav Smil",
            year: 2020,
            genre: "Non-fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598804527l/50705179._SY475_.jpg",
            pages: 384,
            audioBook: 13,
            readingStatus: "reading",
            notes: "Is flying dangerous? How much do the world's cows weigh? And what makes people happy? From earth's nations and inhabitants, through the fuels and foods that energize them, to the transportation and inventions of our modern world - and how all of this affects the planet itself - in Numbers Don't Lie, Professor Vaclav Smil takes us on a fact-finding adventure, using surprising statistics and illuminating graphs to challenge lazy thinking.",
        },
        {
            username: "oks",
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            year: 1953,
            genre: "Novel, Science Fiction, Dystopian Fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg",
            pages: 194,
            audioBook: 7,
            readingStatus: "read",
            notes: "The burning of books is such an effective tool for controlling the population, so the message of Ray Bradbury's Fahrenheit 451 is scarily real. If society's wisdom could be taken away, then so could their freedom. If knowledge was burnt, then the people would be left in a complete state of utter innocent ignorance. ",
        },
        {
            username: "oks",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Novel, Tragedy, Psychological Fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
            pages: 200,
            audioBook: 8,
            readingStatus: "read",
            notes: "Fitzgerald can set a scene so perfectly, flawlessly. He paints a world of magic and introduces one of the greatest characters of all time, Jay Gatsby. Gatsby is the embodiment of hope, and no one can dissuade him from his dreams. Have you ever had a dream that carried you to heights you could never have dreamed otherwise? ",
        },
        {
            username: "oks",
            title: "The Catcher in the Rye",
            author: " J.D. Salinger",
            year: 1951,
            genre: "Novel, Literary Realism",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
            pages: 277,
            audioBook: 9,
            readingStatus: "read",
            notes: "This book can change peopele's lives and helpe them find their unique way in the world",
        },
        {
            username: "oks",
            title: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            year: 1952,
            genre: "Novel, Nautical Fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329189714l/2165._SY475_.jpg",
            pages: 8,
            audioBook: 13,
            readingStatus: "read",
            notes: "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses—specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954",
        },

        {
            username: "alex",
            title: "What Happened to the Bennetts",
            author: "Lisa Scottoline",
            year: 2022,
            genre: "Mystery, Thriller ",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632489470l/58502351.jpg",
            pages: "391",
            audioBook: "15",
            readingStatus: "read",
            notes: "Your family has been attacked, never again to be the same.Now you have to choose between law…and justice."
        },
        {
            username: "alex",
            title: "Star Wars: The High Republic: Light of the Jedi",
            author: "Charles Soule",
            year: 2021,
            genre: "Science Fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582619576l/51637946.jpg",
            pages: 380,
            audioBook: "14",
            readingStatus: "wanttoread",
            notes: "A good start to the new era of the Star Wars. A lot of new characters, old worlds but in a new setting. I did find the book a bit slow, but that is understandable as they are creating a new world."
        },
        {
            username: "alex",
            title: "The 5 AM Club: Own Your Morning. Elevate Your Life",
            author: "Robin S. Sharma",
            year: 2018,
            genre: "Creative non-fiction, Self-help book",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545910967l/37502596._SY475_.jpg",
            pages: 336,
            audioBook: 12,
            readingStatus: "wanttoread",
            notes: "Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.",
        },
        {
            username: "alex",
            title: "Never Simple",
            author: "Liz Scheier ",
            year: 2022,
            genre: "Biography, Autobiography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629825092l/57771194.jpg",
            pages: 288,
            audioBook: 11,
            readingStatus: "wanttoread",
            notes: "Liz Scheier's darkly funny and touching memoir—with shades of Jeannette Walls's The Glass Castle and Mira Bartók's The Memory Palace—of growing up in '90s Manhattan with a brilliant, mendacious single mother",
        },
        {
            username: "alex",
            title: "The Perfect Other: A Memoir of My Sister",
            author: "Kyleigh Leddy ",
            year: 2022,
            genre: "Biography, Autobiography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627615268l/55959476.jpg",
            pages: 304,
            audioBook: 12,
            readingStatus: "wanttoread",
            notes: "All Kait Leddy had ever wanted was a little sister. When Kyleigh was born, they were inseparable; Kait would protect her, include her, cuddle and comfort her, and, to Kyleigh, her big sister was her whole world. Then, in January 2014, Kait disappeared...",
        },
        {
            username: "alex",
            title: "The War of Two Queens",
            author: "Jennifer L. Armentrout",
            year: 2022,
            genre: "Fantasy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635174962l/57815107._SY475_.jpg",
            pages: 628,
            audioBook: 17,
            readingStatus: "wanttoread",
            notes: "From the desperation of golden crowns... Casteel Da'Neer knows all too well that very few are as cunning or vicious as the Blood Queen, but no one, not even him, could've prepared for the staggering revelations. The magnitude of what the Blood Queen has done is almost unthinkable. And born of mortal flesh… A great primal power rises… As the Harbinger of Death and Destruction.",
        },
        {
            username: "alex",
            title: "Tell Me an Ending",
            author: "Jo Harkin",
            year: 2022,
            genre: "Fantasy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644190276l/58438576.jpg",
            pages: 448,
            audioBook: 15,
            readingStatus: "reading",
            notes: "What if you didn't have to live with your worst memories? Across the world, thousands of people are shocked by a notification that they once chose to have a memory removed. Now they are being given an opportunity to get that memory back. Four individuals are filled with new doubts, grappling with the unexpected question of whether to remember unknown events, or to leave them buried forever.",
        },
        {
            username: "alex",
            title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
            author: " James Clear",
            year: 2018,
            genre: "Creative non-fiction, Self-help book",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
            pages: 319,
            audioBook: 12,
            readingStatus: "reading",
            notes: "If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.",
        },
        {
            username: "alex",
            title: "Run Rose Run",
            author: " Dolly Parton, James Patterson",
            year: 2022,
            genre: "Thriller",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628699768l/58505877.jpg",
            pages: 439,
            audioBook: 13,
            readingStatus: "reading",
            notes: "Every song tells a story. She's a star on the rise, singing about the hard life behind her.She's also on the run. Find a future, lose a past. Nashville is where she's come to claim her destiny. It's also where the darkness she's fled might find her. And destroy her"

        },
        {
            username: "alex",
            title: "The War That Made the Roman Empire: Antony, Cleopatra, and Octavian at Actium",
            author: "Barry S. Strauss",
            year: 2022,
            genre: "Biography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789396l/55711554._SY475_.jpg",
            pages: 368,
            audioBook: 13,
            readingStatus: "reading",
            notes: "The gripping story of one of history's most important and yet little-known wars, the campaign culminating in the Battle of Actium in 31 BC, whose outcome determined the future of the Roman Empire.",
        },
        {
            username: "alex",
            title: "Origin: A Genetic History of the Americas",
            author: "Jennifer Raff",
            year: 2022,
            genre: "History, Science",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639384597l/53916158.jpg",
            pages: 368,
            audioBook: 13,
            readingStatus: "reading",
            notes: "Origin is the story of who the first peoples in the Americas were, how and why they made the crossing, how they dispersed south, and how they lived based on a new and powerful kind of evidence: their complete genomes. Origin provides an overview of these new histories throughout North and South America, and a glimpse into how the tools of genetics reveal details about human history and evolution.",
        },
        {
            username: "alex",
            title: "Edgewood",
            author: "Kristen Ciccarelli",
            year: 2022,
            genre: "Fantasy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1620995384l/57693515.jpg",
            pages: 400,
            audioBook: 13,
            readingStatus: "read",
            notes: "Wow! This cover summons me to be part Edgewood universe, dancing with fairies, getting lost in the enchanting wood! This magical world building is well executed and the characters are militia dimensional. Eventually you're getting drawn into this unique, complex, fairy tal-ish world more at each chapter you devour.",
        },
        {
            username: "alex",
            title: "The Picture of Dorian Gray",
            author: "Oscar Wilde",
            year: 1890,
            genre: "Mystery, Drama, fiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546103428l/5297.jpg",
            pages: 272,
            audioBook: 3,
            readingStatus: "read",
            notes: "Arguably literature's greatest study of shallowness, vanity, casual cruelty and hedonistic selfishness, Wilde lays it down here with ABSOLUTE PERFECTION!! This was my first experience in reading Oscar Wilde and the man's gift for prose and dialogue is magical. This story read somewhat like a dark, corrupted Jane Austen in that the writing was snappy and pleasant on the ear, but the feeling it left you with was one of hopelessness and despair.",
        },
        {
            username: "alex",
            title: "Four Thousand Weeks: Time Management for Mortals",
            author: "Oliver Burkeman",
            year: 2021,
            genre: "Creative non-fiction, Self-help book",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627425434l/54785515._SY475_.jpg",
            pages: 288,
            audioBook: 11,
            readingStatus: "read",
            notes: "First of all, this is probably not the book you think it is, and that's a good thing. Rather than offering cheap “time hacks” to get more of the same things done, this more philosophical work is based on two important but uncomfortable truths: (1) In the short 4,000 or so weeks you have to live, you will never be able to accomplish all the things you would like, and (2) even if you could, it wouldn't matter in the end because, in the words of John Maynard Keynes, “In the long run we are all dead.”",
        },
        {
            username: "alex",
            title: "To the Front!: Clara Barton Braves the Battle of Antietam",
            author: "Claudia Friddell",
            year: 2022,
            genre: "Biography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627327976l/57927126._SX318_.jpg",
            pages: 40,
            audioBook: 1,
            readingStatus: "read",
            notes: "This powerful tribute to Clara Barton and her heroic efforts during the Civil War's Battle of Antietam reveals how she earned the name The Angel of the Battlefield, and shows the beginnings of her journey as one of our country's greatest humanitarians and the founder of the American Red Cross.",
        },

        {
            username: "anthony",
            title: "Beautiful World, Where Are You",
            author: "Sally Rooney ",
            year: 2021,
            genre: "Epistolary novel, Urban fiction",
            cover: "https://images.randomhouse.com/cover/9780735281790",
            pages: 356,
            audioBook: "14",
            readingStatus: "read",
            notes: "She touches on modernism, capitalism, consumerism and waste, and living boldly in a world that seems to be falling apart."
        },

        {
            username: "anthony",
            title: "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race",
            author: "Walter Isaacson",
            year: 2021,
            genre: "History and Biography",
            cover: "https://images.randomhouse.com/cover/9780735281790",
            pages: 536,
            audioBook: 18,
            readingStatus: "wanttoread",
            notes: "Quite good biography book"
        },
        {
            username: "anthony",
            title: "Talking to Strangers: What We Should Know About the People We Don't Know",
            author: "Malcolm Gladwell",
            year: 2019,
            genre: "Nonfiction",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549393502l/43848929._SX318_.jpg",
            pages: 388,
            audioBook: 15,
            readingStatus: "wanttoread",
            notes: "Malcolm Gladwell, host of the podcast Revisionist History and author of the #1 New York Times bestseller Outliers, offers a powerful examination of our interactions with strangers -- and why they often go wrong.",
        },
        {
            username: "anthony",
            title: "Comedy Comedy Comedy Drama",
            author: "Bob Odenkirk",
            year: 2022,
            genre: "Biography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646255336l/60538221._SX318_.jpg",
            pages: 304,
            audioBook: 13,
            readingStatus: "wanttoread",
            notes: "In this hilarious, heartfelt memoir, the star of Mr. Show, Breaking Bad, Better Call Saul, and Nobody opens up about the highs and lows of showbiz, his legendary cult status as a comedy writer, and what it's like to reinvent himself as a no-holds-barred action film ass-kicker at fifty.",
        },
        {
            username: "anthony",
            title: "Lakelore",
            author: "Anna-Marie McLemore ",
            year: 2022,
            genre: "Fantasy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1625155887l/56978096.jpg",
            pages: 304,
            audioBook: 13,
            readingStatus: "wanttoread",
            notes: "Consolidating their wild imagination, lyrical writing and flowery prose all together, the author casts a enchanting spell that will lure you into the pages of this book and transport you to a otherworldly place under the waters of Lakelore. Lakelore is where magic happens, this is where your emotions adopts mythical forms....",
        },
        {
            username: "anthony",
            title: "They Do It with Mirrors",
            author: "Agatha Christie",
            year: 1952,
            genre: "Mystery, Thriller",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389760572l/68930.jpg",
            pages: 224,
            audioBook: 4,
            readingStatus: "wanttoread",
            notes: "A man is shot at in a juvenile reform home - but someone else dies... Miss Marple senses danger when she visits a friend living in a Victorian mansion which doubles as a rehabilitation centre for delinquents. ",
        },
        {
            username: "anthony",
            title: "Creativity: A Short and Cheerful Guide",
            author: "John Cleese",
            year: 2020,
            genre: "Humor, Self-Help Book",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599059150l/50719532._SY475_.jpg",
            pages: 112,
            audioBook: 4,
            readingStatus: "reading",
            notes: "Creativity is usually regarded as a mysterious, rare gift that only a few possess. John Cleese begs to differ, and in this short, immensely practical and often very amusing guide he shows it's a skill that anyone can acquire. Drawing on his lifelong experience as a writer, he shares his insights into the nature of the creative process, and offers advice on how to get your own inventive juices flowing.",
        },
        {
            username: "anthony",
            title: "Bose: The Untold Story of an Inconvenient Nationalist",
            author: "Chandrachur Ghose",
            year: 2022,
            genre: "Biography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639216059l/59799838.jpg",
            pages: 448,
            audioBook: 16,
            readingStatus: "reading",
            notes: "There are not many Indian heroes whose lives have been as dramatic and adventurous as that of Netaji Subhas Chandra Bose.",
        },
        {
            username: "anthony",
            title: "Scorpica",
            author: "G.R. Macallister",
            year: 2022,
            genre: "Fantasy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644190341l/53218165.jpg",
            pages: 448,
            audioBook: 16,
            readingStatus: "reading",
            notes: "A centuries-long peace is shattered in a matriarchal society when a decade passes without a single girl being born in this sweeping epic fantasy that's perfect for fans of Robin Hobb and Circe.Five hundred years of peace between queendoms shatters when girls inexplicably stop being born. As the Drought of Girls stretches across a generation, it sets off a cascade of political and personal consequences across all five queendoms of the known world, throwing long-standing alliances into disarray as each queendom begins to turn on each other—and new threats to each nation rise from within.",
        },
        {
            username: "anthony",
            title: "The Bald Eagle: The Improbable Journey of America's Bird",
            author: "Jack Emerson Davis",
            year: 2022,
            genre: "Historical Novel",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1623123424l/58085207.jpg",
            pages: 432,
            audioBook: 16,
            readingStatus: "reading",
            notes: "The bald eagle is regal but fearless, a bird you're not inclined to argue with. For centuries, Americans have celebrated it as “majestic” and “noble,” yet savaged the living bird behind their national symbol as a malicious predator of livestock and, falsely, a snatcher of babies. Taking us from before the nation's founding through inconceivable resurgences of this enduring all-American species, Jack E. Davis contrasts the age when native peoples lived beside it peacefully with that when others, whether through hunting bounties or DDT pesticides, twice pushed Haliaeetus leucocephalus to the brink of extinction.",
        },
        {
            username: "anthony",
            title: "The Hunger Games",
            author: "Suzanne Collins",
            year: 2008,
            genre: "Novel, Alternate History, Science fiction, Thriller",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg",
            pages: 374,
            audioBook: 13,
            readingStatus: "reading",
            notes: "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning? In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
        },
        {
            username: "anthony",
            title: "Hero on a Mission: The Power of Finding Your Role in Life",
            author: "Donald Miller",
            year: 2022,
            genre: "Self-Help Book",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631508850l/57468174.jpg",
            pages: 224,
            audioBook: 8,
            readingStatus: "read",
            notes: "There are four roles we play in life—Victim, Villain, Hero, and Guide. New York Times bestselling author Donald Miller teaches us how to recognize when we are playing the Victim or the Villain and how to shift to become the Hero or the Guide.",
        },
        {
            username: "anthony",
            title: "The Founders: The Story of Paypal and the Entrepreneurs Who Shaped Silicon Valley",
            author: "Jimmy Soni",
            year: 2022,
            genre: "Biography",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643707855l/54304287.jpg",
            pages: 496,
            audioBook: 13,
            readingStatus: "read",
            notes: "A note of clarification: This is not a series of profiles on “The Founders” as the title might lead you to believe. It's the origin story of PayPal. Yes, the business is of course the people who made it. But given the portrait gallery on the book's cover, I expected their personal stories to be in the foreground with PayPal simply used as a plot device to stitch their biographies together. Levchin, Musk, and Thiel are the ones who feature most prominently, but little is given to everyone else, and less still is said of any of their post-PayPal years. It would have been more accurately titled PayPal: The Story of its Founding and the Entrepreneurs Who Shaped Silicon Valley. In any case, it's good for what it is. The storytelling is linear and a bit flat at times (ironic given that Musk and Thiel are two of the most dynamic and complex personalities on the planet), and the writing style is central casting for this genre. But in the end it achieves its purpose: chronicling the birth and rise of PayPal. If that's the story you're interested in and style of book you like, then I suspect you'll find it quite enjoyable.",
        },
        {
            username: "anthony",
            title: "The Boy with a Bird in His Chest",
            author: "Emme Lund",
            year: 2022,
            genre: "Fantasy",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645067020l/58438595._SY475_.jpg",
            pages: 308,
            audioBook: 10,
            readingStatus: "read",
            notes: "A beautifully shared coming-of-age story of the anguish of young love shared through a mystical, magical journey of a young boy named Owen who lives with a bird inside his chest. A bird who chatters away when she has an opinion she finds it necessary to share. After all, he is her home. There's an old saying that home is where the heart is, and for this java sparrow named Gail, his body is her home. Gail wants to sing her story to the world, which, of course, isn't safe for Owen"
        },
        {
            username: "anthony",
            title: "Dune",
            author: "Frank Herbert",
            year: 1965,
            genre: "Science fiction, Adventure",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg",
            pages: 658,
            audioBook: 18,
            readingStatus: "read",
            notes: "Machiavellian intrigue, mythology, religion, politics, imperialism, environmentalism, the nature of power. All this set in a mind-boggling, frighteningly original world which Herbert ominously terms as an 'effort at prediction'. Dune had me hooked!",
        },

    ],
    function (error, createdBooks) {
        if (error) {
            return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdBooks);
    }
);