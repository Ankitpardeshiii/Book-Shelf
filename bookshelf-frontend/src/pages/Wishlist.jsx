import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';
import { books } from '../data/books.js';
import './Wishlist.css';

export default function Wishlist({ wishlist = [], onAddToCart, onToggleWishlist }) {
  const wishlistedBooks = books.filter((book) => wishlist.includes(book.id));

  return (
    <main className="wishlist-page">
      <div className="wishlist__inner">
        <div className="wishlist__header">
          <h2 className="wishlist__title">Your Wishlist</h2>
          <p className="wishlist__count">{wishlistedBooks.length} items</p>
        </div>

        {wishlistedBooks.length === 0 ? (
          <div className="wishlist__empty">
            <p>Your wishlist is empty.</p>
            <Link to="/" className="wishlist__back-link">Return to Catalog</Link>
          </div>
        ) : (
          <div className="catalog__grid">
            {wishlistedBooks.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                onAddToCart={onAddToCart} 
                wishlist={wishlist} 
                onToggleWishlist={onToggleWishlist} 
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
