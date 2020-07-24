import React from 'react';
import { AutoSizer, Grid } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

import './PagedTable.css'

class PagedTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      headerHeight: 60,
      rowHeight: 25,
      hoverRow: null,
    };

    this._getRowHeight = this._getRowHeight.bind(this);
    this._cellRenderer = this._cellRenderer.bind(this);
  }

  render() {
    const { headerHeight, rowHeight } = this.state;
    const rowCount = 15;
    const columnWidth = 75;
    const columnCount = 50;
    const leftColumnCount = 2;
    const rightColumnCount = 1;
    const centerColumnCount = columnCount - leftColumnCount;
    const height = headerHeight + (rowHeight * rowCount);
    return (
      <AutoSizer disableHeight>
        {({ width }) => {
          const leftWidth = leftColumnCount * columnWidth;
          const rightWidth = rightColumnCount * columnWidth;
          const centerWidth = width - leftWidth - rightWidth;
          return (
            <div className={'f9-paged-grid'} style={{ width, height }}>
              <Grid
                {...this.state}
                cellRenderer={this._cellRenderer}
                columnWidth={columnWidth}
                columnCount={leftColumnCount}
                height={height}
                rowHeight={this._getRowHeight}
                rowCount={rowCount}
                width={leftWidth}
              />
              <Grid
                {...this.state}
                cellRenderer={this._cellRenderer}
                columnWidth={columnWidth}
                columnCount={centerColumnCount}
                height={height}
                rowHeight={this._getRowHeight}
                rowCount={rowCount}
                width={centerWidth}
                overscanColumnCount={4}
              />
              <Grid
                {...this.state}
                cellRenderer={this._cellRenderer}
                columnWidth={columnWidth}
                columnCount={rightColumnCount}
                height={height}
                rowHeight={this._getRowHeight}
                rowCount={rowCount}
                width={rightWidth}
              />
            </div>
          );
        }}
      </AutoSizer>
    );
  }

  _getRowHeight({ index }) {
    if (index === 0) {
      return this.state.headerHeight;
    }
    return this.state.rowHeight;
  }
  _cellRenderer({ columnIndex, key, rowIndex, style }) {
    const className = rowIndex === 0 ? 'f9-paged-grid-header-cell' : 'f9-paged-grid-cell';
    return (
      <div key={key} style={style} className={className}>
        <>
          {rowIndex === 0 && <span>H </span>}
          {columnIndex}, {rowIndex}
        </>
      </div>
    );
  }
}
export default PagedTable;
