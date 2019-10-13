/*I can imagine some kind of db structure where you don't have to store the book itself, but you could store the ID you get from the API

so a "saved_books" table might look like:
------------------------
| id | book_id | user_id |
------------------------
| 1  | 10           | 2           |
------------------------

then when user 2 logs in, and goes to their saved page, your web app would query the database for all book_ids in that table for the user with id 2

then with the book ids you get, say 10 in this case, you could fetch the books API for the book with ID 10, and use react to draw the result

your web app would be the thing making SQL queries to your database

a query would look like 
SELECT book_id FROM db.saved_books WHERE user_id = 2;

but ideally, you won't write raw SQL queries yourself - you should be using an ORM (Object Relatiional Mapper). Sounds fancy, but it's just a layer over MySQL so you don't have to write these raw queries yourself, and can just deal with normal JavaScript objects in your code
*/

