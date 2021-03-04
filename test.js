const fs = require('fs');
const path = require('path');
const childProccess = require('child_process');

const isDirectory = dir => fs.statSync(dir).isDirectory();
const getDirectories = dirs =>
  fs.readdirSync(dirs).map(name => path.join(dirs, name)).filter(isDirectory);

const isFile = file => fs.statSync(file).isFile();  
const getFiles = files =>
  fs.readdirSync(files).map(name => path.join(files, name)).filter(isFile);

const getFilesRecursively = (paths) => {
  const [match] = process.argv.slice(2)
  let dirs = getDirectories(paths);
  let files = dirs
      .map(dir => getFilesRecursively(dir)) 
      .reduce((a,b) => a.concat(b), []);
  return files.concat(getFiles(paths))
    .filter(f => /test.js$/.test(f))
    .filter(f => !match || new RegExp(match, 'i').test(f));
};

const directories = ['data-structures', 'algorithms']

directories.forEach(dir => {
  const files = getFilesRecursively(dir)
  files.forEach(file => {
    console.log(`\n\x1b[34mTesting ${file}\x1b[0m`)
    console.log(childProccess.execSync(`node ./${file}`).toString())
  })
})