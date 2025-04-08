const API_URL = "https://openlibrary.org/search.json";

// Fetching book data from Open Library API
export const fetchPopularBooks = async () => {
 
  try {
    const response = await fetch(`${API_URL}?q=popular+books&limit=8`);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    return data.docs; // Return the list of books
  } catch (error) {
    console.error("Error fetching books:", error);
    throw new Error("Failed to fetch books");
  }
};

