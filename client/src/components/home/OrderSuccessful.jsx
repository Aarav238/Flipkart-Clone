import React from "react";
import { useNavigate } from "react-router-dom";


const OrderSuccessful = () => {
  const navigate = useNavigate();
  const done = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30em",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h1>Your order has been placed successfully!</h1>
      </div>
      <div>
        <img
          src="https://www.svgrepo.com/show/384403/accept-check-good-mark-ok-tick.svg"
          alt="Success Icon"
          style={{
            width: "80px",
            height: "80px",
            marginBottom: "16px",
            color: "green",
          }}
        />
      </div>
      <div>
        <h5>Thank you for shopping with us.</h5>
      </div>
      <div>
        <button
          style={{
            padding: "8px",
            fontSize: "14px",
            width: "100%",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
            justifyContent: "center",
          }}
          onClick={done}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessful;
