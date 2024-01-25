
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  const notificationValue = 3; 

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <Badge pill variant="danger" className="notification-badge">
        {notificationValue}
      </Badge>
    </div>
  );
}

export default CartWidget;