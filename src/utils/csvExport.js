import Papa from 'papaparse';

export const exportCsv = (rows, filename) => {
  if (!rows || rows.length === 0) {
    alert('No data to export');
    return;
  }
  const csv = Papa.unparse(rows, { skipEmptyLines: true });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'export.csv';
  a.click();
  URL.revokeObjectURL(url);
};
