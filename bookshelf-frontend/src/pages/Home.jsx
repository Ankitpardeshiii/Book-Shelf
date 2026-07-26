import { useMemo, useState, useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import BookCard from '../components/BookCard.jsx';

export default function Home({ searchQuery = '' }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeGenre, setActiveGenre] = useState('All');

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/books");

        if (!response.ok) {
          throw new Error("Failed to load books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const genres = useMemo(() => {
    return ['All', ...new Set(books.map((b) => b.genre))];
  }, [books]);

  const visibleBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesGenre = activeGenre === 'All' || book.genre === activeGenre;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);

      return matchesGenre && matchesSearch;
    });
  }, [activeGenre, searchQuery, books]);

  return (
    <>
      <Hero />
      <main className="catalog" id="catalog">
        <div className="catalog__inner">
          <div className="catalog__header">
            <h2 className="catalog__title">Browse the catalog</h2>
            <p className="catalog__count">{visibleBooks.length} titles</p>
          </div>

          <GenreFilter genres={genres} active={activeGenre} onSelect={setActiveGenre} />

          {loading ? (
            <p style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)' }}>Loading books...</p>
          ) : error ? (
            <p style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--error)' }}>Unable to load books right now. Please try again later.</p>
          ) : (
            <div className="catalog__grid">
              {visibleBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
