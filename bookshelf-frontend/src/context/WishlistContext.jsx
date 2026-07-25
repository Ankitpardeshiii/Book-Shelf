import { createContext, useState } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function toggleWishlist(bookId) {
    setWishlist((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  }

  function addToWishlist(bookId) {
    setWishlist((prev) => {
      if (prev.includes(bookId)) return prev;
      return [...prev, bookId];
    });
  }

  function removeFromWishlist(bookId) {
    setWishlist((prev) => prev.filter((id) => id !== bookId));
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
