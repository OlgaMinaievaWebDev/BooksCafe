import { useEffect, useState } from "react";
import BookCard from "./BookCard";


function PopularBooks() {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 // Fetching book data from Open Library API

 useEffect(() => {
  fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
    .then((response) => response.json())
   .then((data) => {
    console.log(data.docs)
    setBooks(data.docs)
    setLoading(false);
    })
   .catch((error) => {
    console.error("Error fetching book data:", error)
    setError(error);
    setLoading(false);
   });
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }
 if (error) {
  return <div>Error fetching books: {error.message}</div>;
 }

 // Filtering books to get popular ones

 

 return (
   <section className="bg-gray-100 py-10 flex flex-col items-center">
     <h2 className="text-3xl font-bold text-center mb-6">Popular Books</h2>
     <div className="grid grid-cols-4 gap-4">
       {books.map((book) => (
         <BookCard key={book.key} book={book} />
       ))}
     </div>
   </section>
 );
}

export default PopularBooks
