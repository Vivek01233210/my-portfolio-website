import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Step 1: Define the absolute path to the JSON file
const filePath = join(__dirname, './ProjectDetails.json'); // Adjust the path as necessary

// Step 2: Read the JSON file asynchronously
readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Step 3: Parse the JSON content into a JavaScript object
  let jsonObject;
  try {
    jsonObject = JSON.parse(data);
    const { projects } = jsonObject;
    console.log(projects)
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    return;
  }

  // Step 4: Use the JavaScript object
  // console.log(jsonObject.projects[0]);
});