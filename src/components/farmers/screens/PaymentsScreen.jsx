import React from 'react';
import { IndianRupee } from 'lucide-react';

const PaymentsScreen = () => {
    const payments = [
        { id: 1, amount: '+ ₹5,000', date: '2025-09-15', note: 'For Paddy Rice batch #2' },
        { id: 2, amount: '+ ₹1,800', date: '2025-09-12', note: 'For Tomato batch #1' },
        { id: 3, amount: '+ ₹4,500', date: '2025-09-11', note: 'For Mangoes batch #3' },
    ];
    return (
        <div className="screen">
            <header className="screen-header"><h1>Payments Received</h1></header>
            <div className="screen-body list-view">
                <div className="total-balance-card">
                    <span>Total Earnings</span>
                    <h3>₹11,300</h3>
                </div>
                {payments.map(p => (
                    <div className="payment-item" key={p.id}>
                        <div className="payment-icon">
                            <IndianRupee size={20} />
                        </div>
                        <div className="payment-details">
                            <p>{p.note}</p>
                            <span>{p.date}</span>
                        </div>
                        <span className="payment-amount">{p.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentsScreen;