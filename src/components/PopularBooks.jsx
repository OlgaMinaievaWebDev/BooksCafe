import {  useEffect, useState } from "react";
import BookCard from "./BookCard";
import { fetchPopularBooks } from "../utils/api";


function PopularBooks() {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const getBooks = async () => {
  try {
   const data = await fetchPopularBooks();
   
    //fetch images for each book
    //Promise.all is used when you have multiple promises to resolve
   //and you want to wait for all of them to resolve before proceeding
   
    const booksWithImages = await Promise.all(
      data.map(async (book) => {
        const coverId = book.cover_i;
        const imageUrl = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          : "https://via.placeholder.com/150";
        return { ...book, imageUrl };
      })
    );

    setBooks(booksWithImages);
    setLoading(false);
  } catch (error) {
   setError(error);
   setLoading(false);
  }
  }
  getBooks()
},[])
 
 if (loading) {
  return <div>Loading...</div>;
 }
 if (error) {
  return <div>Error fetching books: {error.message}</div>;
 }

 


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
