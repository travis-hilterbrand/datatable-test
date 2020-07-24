import React from 'react';

import './App.css';
import DataTable from './DataTable';
import PagedTable from './PagedTable';

function App() {
  const showData = false;
  return (
    <div className="App">
      {showData && <DataTable />}
      {!showData && <PagedTable />}
    </div>
  );
}

export default App;
