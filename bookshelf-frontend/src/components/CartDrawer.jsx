import './CartDrawer.css';

export default function CartDrawer({ cart, isOpen, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Your Cart</h2>
          <button className="cart-drawer-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="cart-drawer-content">
          {!cart.length ? (
            <p className="cart-drawer-empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-drawer-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-drawer-item">
                  <div className="cart-drawer-item-details">
                    <h3 className="cart-drawer-item-title">{item.title}</h3>
                    <p className="cart-drawer-item-quantity">Quantity: {item.quantity}</p>
                    <p className="cart-drawer-item-price">Price: ₹{item.price}</p>
                  </div>
                  <div className="cart-drawer-item-subtotal">
                    ₹{item.price * item.quantity}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-drawer-total">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
