import { readFile, appendFile } from 'node:fs/promises';

try {
  const contents = await readFile('Coverage-20241217T210223.json', { encoding: 'utf8' });
  const { ranges, text } = JSON.parse(contents);
  for(const {start, end} of ranges){
    await appendFile('extracted.css', text.substring(start, end) + ';')
  }
} catch (err) {
  console.error(err.message);
}