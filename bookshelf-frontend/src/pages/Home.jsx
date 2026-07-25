import { useMemo, useState } from 'react';
import Hero from '../components/Hero.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import BookCard from '../components/BookCard.jsx';
import { books, genres } from '../data/books.js';

export default function Home({ onAddToCart }) {
  const [activeGenre, setActiveGenre] = useState('All');

  const visibleBooks = useMemo(() => {
    if (activeGenre === 'All') return books;
    return books.filter((book) => book.genre === activeGenre);
  }, [activeGenre]);

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

          <div className="catalog__grid">
            {visibleBooks.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
