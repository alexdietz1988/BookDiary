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
            pages: "352",
            audioBook: 13,
            readingStatus: "wanttoread",
            notes: "Yann Martel's third novel, Life of Pi (2001), follows protagonist Piscine “Pi” Patel on a journey of survival after the cargo ship carrying him and his family sinks in the Pacific Ocean. "
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
            username: "anthony",
            title: "Beautiful World, Where Are You",
            author: "Sally Rooney ",
            year: 2021,
            genre: "Epistolary novel, Urban fiction",
            cover: "https://images.randomhouse.com/cover/9780735281790",
            pages: 356,
            audioBook: "14",
            readingStatus: "I'm reading this book",
            notes: "She touches on modernism, capitalism, consumerism and waste, and living boldly in a world that seems to be falling apart."
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