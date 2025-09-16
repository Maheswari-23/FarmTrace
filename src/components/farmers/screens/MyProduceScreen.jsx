import React, { useState } from 'react';
import ProduceDetailScreen from './ProduceDetailScreen';

// Mock Data for demonstration
const produceList = [
    { id: 1, name: 'Tomatoes', qty: '100 kg', status: 'On Farm', date: '2025-09-15', photo: '/src/assets/hero-image.jpg' },
    { id: 2, name: 'Paddy Rice', qty: '500 kg', status: 'Sold', date: '2025-09-12', photo: '/src/assets/hero-image.jpg' },
    { id: 3, name: 'Mangoes', qty: '250 kg', status: 'In Transit', date: '2025-09-10', photo: '/src/assets/hero-image.jpg' },
];

const MyProduceScreen = () => {
    const [selectedProduce, setSelectedProduce] = useState(null);

    // If a produce item is selected, show its detail screen
    if (selectedProduce) {
        return <ProduceDetailScreen produce={selectedProduce} onBack={() => setSelectedProduce(null)} />;
    }

    // Otherwise, show the list of all produce
    return (
        <div className="screen">
            <header className="screen-header">
                <h1>My Registered Produce</h1>
            </header>
            <div className="screen-body list-view">
                {produceList.length > 0 ? produceList.map(item => (
                    <button className="produce-card" key={item.id} onClick={() => setSelectedProduce(item)}>
                        <div className="card-info">
                            <h4>{item.name}</h4>
                            <p>{item.qty}</p>
                        </div>
                        <div className={`status-tag status-${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</div>
                    </button>
                )) : (
                    <p className="empty-state">You have not registered any produce yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyProduceScreen;