<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a></li>
        <li><a href="#idea">Idea</a></li>
    <li><a href="#team">Team</a>   </li>
        <li><a href="#built-with">Built With </a></li>
   <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#erd">ERD</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
  </ol>
</details>


## About the Project
BookDiary is a website where you can keep track of books you are interested in. You can add books to your library and mark whether they are books you've read, books you're currently reading or books you want to read. You can also add your own notes about each book and edit them any time. 

## Idea
Inspired by Goodreads.com. 

Key features: 
- Creating an account/login
- Adding a book to the user's library
- Add notes to a book
- Having individual bookshelf pages based on reading status
- User can only edit their own libraries

Improvements:
- Hovering over covers adds animation
- User's Home page displays multiple bookshelves with the most recently added books
- User can add either number of pages or audiobook hours to the book info, depending on whether they are reading or listening

## Team
- [Alex Dietz](https://github.com/alexdietz1988)
- [Oksana Kalyniak](https://github.com/Oksanka25)
- [Anthony Kelly](https://github.com/SourceCodeKelly)

## Built With
- HTML
- CSS
- Javascript
- [Bootstrap](https://getbootstrap.com/)
- Node.js
- Express
- MongoDB
- Mongoose

## User Stories
- As a user, I should be able to register.
- As a user, I should be able to log in.
- As a user, I should be able to add a book to my library with a title, author, genre, cover image, year.
- As a user, I should be able to set a book status - currently reading, read, want-to-read.
- As a user, I should be able to edit/update a book status - currently reading, read, want-to-read.
- As a user, I should be able to add notes to a book in my library.
- As a user, I should be able to have a home button with my library.
- As a user, I should be able to have a home page with the bookshelves of "currently reading", "read", "want-to-read".
- As a user, I should be able to have a page with a full updated information on a book.

## Roadmap
 - [x] Register page
 - [x] Login page
 - [x] New book
 - [x] Edit a book
 - [x] Show page for a book
 - [x] Home page that links to "currently reading", "read", "want-to-read", "new book"
 - [x] Styling

 - [x] (stretch) Auth
 - [x] (stretch) Home page that includes list of "currently reading", "read", "want-to-read", "new book"
 - [ ] (stretch) Make a book public and allow any user to be able to add a review on it
 - [ ] (stretch) Recommendations by genre
 - [ ] (stretch) Toggle between list view and cover view, rather than displaying both on the same page

 Our website is currently organized so that books belong exclusively to particular users (one-to-many relationship between users and books). A different way of organizing website would be to have books accessible to any user (many-to-many relationship between users and books), this would require an additional database model capturing user-specific information about particular books, e.g. whether a user has read a particular book. This way of organizing the website would allow a user to add and see public reviews of books and add books from the public database to their own library without having to add book details. It would also make possible other features such as book recommendations based on genre or author. 

## ERD 
![image](https://user-images.githubusercontent.com/101350351/165376272-0debcf9e-c306-49d6-8c38-3022cb9a2e28.png)

## Screenshots
!Image('screenshots/user-home.png')
!Image('screenshots/book.png')



