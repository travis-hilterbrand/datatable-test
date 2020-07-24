import React from 'react';
import { AutoSizer, MultiGrid } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

import './DataTable.css'
import clsx from 'clsx';

class DataTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      fixedColumnCount: 2,
      fixedRowCount: 1,
      scrollToColumn: 0,
      scrollToRow: 0,
      hoverRow: null,
    };

    this._getRowHeight = this._getRowHeight.bind(this);
    this._cellRenderer = this._cellRenderer.bind(this);
  }

  render() {
    return (<AutoSizer disableHeight>
      {({ width }) => (
        <MultiGrid
          {...this.state}
          cellRenderer={this._cellRenderer}
          columnWidth={75}
          columnCount={50}
          enableFixedColumnScroll
          enableFixedRowScroll
          height={300}
          rowHeight={this._getRowHeight}
          rowCount={100}
          width={width}
          hideTopRightGridScrollbar
          hideBottomLeftGridScrollbar
          styleTopLeftGrid={{ background: '#ddd' }}
          styleTopRightGrid={{ background: '#ddd' }}
          styleBottomLeftGrid={{ background: '#eee' }}
          styleBottomRightGrid={{ background: '#eee' }}
        />
      )}
    </AutoSizer>);
  }

  _getRowHeight({ index }) {
    if (index === 0) {
      return 60;
    }
    return 40;
  }
  _cellRenderer({ columnIndex, key, rowIndex, style }) {
    const className = rowIndex === 0 ? 'f9-grid-header-cell' : 'f9-grid-cell';
    const rootClass = clsx(className, { docked: columnIndex === 1 });
    return (
      <div key={key} style={style} className={rootClass}>
        <>
          {rowIndex === 0 && <span>H </span>}
          {columnIndex}, {rowIndex}
        </>
      </div>
    );
  }
}
export default DataTable;
