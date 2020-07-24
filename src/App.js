import React from 'react';

import './App.css';
import DataTable from './DataTable';
import PagedTable from './PagedTable';
import ScrollSyncTable from './ScrollSyncTable'

function App() {
  const showType = 'sync';
  return (
    <div className="App">
      {showType === 'table' && <DataTable />}
      {showType === 'paged' && <PagedTable />}
      {showType === 'sync' && <ScrollSyncTable />}
    </div>
  );
}

export default App;
