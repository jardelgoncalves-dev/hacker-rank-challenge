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
    let dirs = getDirectories(paths);
    let files = dirs
        .map(dir => getFilesRecursively(dir)) 
        .reduce((a,b) => a.concat(b), []);
    return files.concat(getFiles(paths)).filter(f => /test.js$/.test(f));
};

const directories = ['data-structures']

directories.forEach(dir => {
  const files = getFilesRecursively(dir)
  files.forEach(f => {
    console.log(childProccess.execSync(`node ./${f}`).toString())
  })
})