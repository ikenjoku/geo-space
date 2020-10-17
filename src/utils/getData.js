import Papa from 'papaparse';

export async function getData(artist) {
  const data = Papa.parse(await fetchCsv());
  return data;
}

async function fetchCsv() {
  const response = await fetch('data/sample_data.csv');
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = await decoder.decode(result.value);
  return csv;
}