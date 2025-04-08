function BookCard({ book }) {
 const { title, author_name, imageUrl } = book;

 return (
  <div className="bg-white shadow-md rounded-lg p-4 m-4">
   <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg"/>
   <h3 className="text-xl font-semibold mt-2">{title}</h3>
   <p className="text-gray-600">{author_name}</p>
   <button>View Details</button>
  </div>
 )

}

export default BookCard
