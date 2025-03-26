import React from "react";

const BlockchainTicketing = () => {
  return (
    <div className="p-4">
      <h2>💳 Blockchain Ticketing</h2>
      <p>Secure and transparent ticket transactions.</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>$2.50</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlockchainTicketing;
