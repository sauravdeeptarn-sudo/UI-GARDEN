import React from 'react';
import { TableProps } from './Table.types';
import { StyledTable } from './Table.styles';

export const Table = ({ headers, rows, disabled }: TableProps) => {
  return (
    <StyledTable disabled={disabled} data-testid="table">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
