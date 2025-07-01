
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>🚀 Welcome to SmartInvest</h1>
    <p>You now have ₹1,00,000 demo money to simulate Indian stock investments.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
