import React from 'react';
import { AutoSizer, Grid } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

import './ScrollSyncTable.css'

class ScrollSyncTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this._cellRenderer = this._cellRenderer.bind(this);
  }

  render() {
    const rowCount = 100;
    const rowHeight = 25;
    const columnWidth = 75;
    const columnCount = 8;
    const leftColumnCount = 2;
    const centerColumnCount = columnCount - leftColumnCount;
    const height = 300;
    return (
      <AutoSizer disableHeight>
        {({ width }) => {
          const leftWidth = leftColumnCount * columnWidth;
          const centerWidth = width - leftWidth;
          return (
            <div className={'f9-scroll-grid'} style={{ width, height }}>
              <Grid
                {...this.state}
                cellRenderer={this._cellRenderer}
                columnWidth={columnWidth}
                columnCount={leftColumnCount}
                height={height}
                rowHeight={rowHeight}
                rowCount={rowCount}
                width={leftWidth}
              />
              <Grid
                {...this.state}
                cellRenderer={this._cellRenderer}
                columnWidth={columnWidth}
                columnCount={centerColumnCount}
                height={height}
                rowHeight={rowHeight}
                rowCount={rowCount}
                width={centerWidth}
                overscanColumnCount={4}
              />
            </div>
          );
        }}
      </AutoSizer>
    );
  }

  _cellRenderer({ columnIndex, key, rowIndex, style }) {
    return (
      <div key={key} style={style} className={'f9-scroll-grid-cell'}>
        {columnIndex}, {rowIndex}
      </div>
    );
  }
}
export default ScrollSyncTable;
