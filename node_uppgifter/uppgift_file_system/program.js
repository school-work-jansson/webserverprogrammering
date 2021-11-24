import fs from 'fs'
import clipboardy from 'clipboardy' // extern modul

let dir = "testDir/"
let filesOptions = []

// Kollar ifall dir redan finn
if (fs.existsSync(dir)) {
    console.log(`${dir} Finns redan`)
}
else {
    fs.mkdir(dir, err => {if (err) throw err});
}

fs.readdir(dir, (err, files) => {
    if (err) throw err

    console.log("Du Har följande mappar och filer i denna map");
    console.log(files)
    filesOptions = files
});

process.stdin.on('data', data => {
    data = data.toString().replace(/(\r\n|\n|\r)/gm, "");
    let text = fs.readFileSync(dir+data, "utf-8")
    clipboardy.writeSync(text);

    console.log(`${data} innehåller:`)
    console.log(text)
    console.log("Innehållet har blivit kopierad till din clipboard")
    process.exit()
});

