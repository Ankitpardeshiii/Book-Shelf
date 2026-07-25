import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books.js';
import './BookDetail.css';

export default function BookDetail({ onAddToCart }) {
  const { id } = useParams();
  
  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <div className="book-detail-not-found">
        <h2>Book not found.</h2>
        <Link to="/" className="book-detail-back-link">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <main className="book-detail-page">
      <div className="book-detail-container">
        <div className="book-detail-image-wrapper" style={{ '--cover-color': book.cover }}>
          <div className="book-detail-cover">
            <span className="book-detail-cover-genre">{book.genre}</span>
            <span className="book-detail-cover-title">{book.title}</span>
          </div>
        </div>

        <div className="book-detail-content">
          <h1 className="book-detail-title">{book.title}</h1>
          <p className="book-detail-author">by {book.author}</p>

          <div className="book-detail-metadata">
            <span className="book-detail-badge">{book.genre}</span>
            <span className="book-detail-rating">★ {book.rating.toFixed(1)}</span>
            <span className="book-detail-price">₹{book.price}</span>
          </div>

          <div className="book-detail-description">
            <p>{book.description || 'No description available for this book.'}</p>
          </div>

          <div className="book-detail-extra-info">
            {book.isbn && <p><strong>ISBN:</strong> {book.isbn}</p>}
            {book.year && <p><strong>Publication Year:</strong> {book.year}</p>}
          </div>

          <button className="book-detail-add-btn" onClick={() => onAddToCart && onAddToCart(book)}>
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
