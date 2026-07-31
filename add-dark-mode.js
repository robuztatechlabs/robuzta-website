import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'src/components');

const map = {
  'text-slate-900': 'dark:text-slate-100',
  'text-slate-800': 'dark:text-slate-200',
  'text-slate-700': 'dark:text-slate-300',
  'text-slate-600': 'dark:text-slate-400',
  'text-slate-500': 'dark:text-slate-400',
  'bg-white': 'dark:bg-slate-950',
  'bg-white/90': 'dark:bg-slate-950/90',
  'bg-white/95': 'dark:bg-slate-950/95',
  'bg-slate-50': 'dark:bg-slate-900',
  'bg-slate-50/50': 'dark:bg-slate-900/50',
  'bg-slate-50/60': 'dark:bg-slate-900/60',
  'bg-slate-100': 'dark:bg-slate-800',
  'bg-slate-200': 'dark:bg-slate-800',
  'border-slate-100': 'dark:border-slate-800',
  'border-slate-200': 'dark:border-slate-700',
  'border-slate-300': 'dark:border-slate-700'
};

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const filePath = path.join(currentPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      processFile(filePath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const [light, dark] of Object.entries(map)) {
    const escapedLight = light.replace('/', '\\/');
    const regex = new RegExp(`(?<!dark:)(?<=['"\`\\s])${escapedLight}(?=['"\`\\s]|$)`, 'g');
    
    newContent = newContent.replace(regex, (match, offset, str) => {
      const context = str.substring(offset, offset + 60);
      if (context.includes(dark)) return match;
      return `${match} ${dark}`;
    });
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(dir);
console.log('Dark mode classes applied successfully.');
