import "./OrderDisplay.css";
import { Link } from "react-router-dom";

export default function OrderDisplay(props) {
  if (props.order && props.products.length > 0) {
    return (
      <Link
        to={`/orders/${props.id}`}
        className="test"
        onClick={() => props.setIsFetching(true)}
      >
        <div className="order-display">
          <h1>Order #{props.id}</h1>
          {props.order.map((order, idx) => {
            let currProduct = props.products.find((p) => p.id == order.itemId);

            return (
              <li key={idx}>
                {order.quantity} x {currProduct.name}
              </li>
            );
          })}
          <p>Email: {props.email}</p>

          {props.showDescription ? (
            <div className="extended-description">
              <h1>Additional Details:</h1>
              <p>Name: {props.name}</p>
              <p>Total: ${props.total}</p>
              <p>Time: {props.time}</p>
            </div>
          ) : null}
        </div>
      </Link>
    );
  }
  return null;
}
