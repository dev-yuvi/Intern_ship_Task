const express=require("express");
const app=express();
const PORT=3000;


app.use(express.json());


let books=[
{ id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 7, title: "Moby-Dick", author: "Herman Melville" },
  { id: 8, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 9, title: "War and Peace", author: "Leo Tolstoy" },
  { id: 10, title: "The Book Thief", author: "Markus Zusak" }
];


// GET Data about Books

// http://localhost:3000/books --->URL
app.get("/books",(req,res)=>
{
    res.json(books);
});


app.listen(PORT,()=>{
    console.log(`The Server Run on ${PORT} Number`);
})

// POST Data on a Books

// http://localhost:3000/books
app.post("/books",(req,res)=>{
    const newbook={
        id:books.length+1,
        title:req.body.title,
        author:req.body.author
    }
    books.push(newbook);
    res.status(201).json(newbook);
}); 


// PUT The Data in a server(Update it)

// http://localhost:3000/books/id-->URL


app.put("/books/:id", (req, res) => {
    const bookId=parseInt(req.params.id);
    const book=books.find(b=>b.id ===bookId);
    if(!book) return res.status(400).json({ message: "Book not found" })
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.json(book);

});



// Delet The data from the database


app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookExists = books.some(b => b.id === bookId);
  if (!bookExists) return res.status(404).json({ message: "Book not found" });


  books = books.filter(b => b.id !== bookId);
  res.json({ message: "Book deleted successfully" });
});