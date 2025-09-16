import React, { useState } from 'react';
import { Search, Hash, Clock, Code, Fingerprint } from 'lucide-react';

const TransactionExplorer = () => {
  const [searchResult, setSearchResult] = useState(null);

  // Mock search function
  const handleSearch = () => {
    setSearchResult({
      id: '0xabc123def456...',
      timestamp: '2025-09-16 14:30:10 IST',
      functionCalled: 'CreateAsset',
      arguments: {
        id: 'PROD-RICE-CUT-001',
        owner: 'FARM-001',
        crop: 'Paddy Rice',
        quantity: '500kg',
      },
      signature: '0xsig789ghi012...',
    });
  };

  return (
    <div>
      <h2 className="page-title">Transaction Explorer</h2>
      <div className="card">
        <div className="card-header">
          <h3>Audit Blockchain Ledger</h3>
        </div>
        <div className="explorer-search">
          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input type="text" placeholder="Search by Transaction ID or Asset ID..." />
          </div>
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>

        {searchResult && (
          <div className="results-display">
            <h4 className="results-title">Transaction Details</h4>
            <dl className="results-list">
              <div className="result-item">
                <dt><Hash size={16} /> Transaction ID</dt>
                <dd><code>{searchResult.id}</code></dd>
              </div>
              <div className="result-item">
                <dt><Clock size={16} /> Timestamp</dt>
                <dd>{searchResult.timestamp}</dd>
              </div>
              <div className="result-item">
                <dt><Code size={16} /> Function Called</dt>
                <dd><code>{searchResult.functionCalled}</code></dd>
              </div>
              <div className="result-item">
                <dt><Fingerprint size={16} /> Digital Signature</dt>
                <dd><code>{searchResult.signature}</code></dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionExplorer;