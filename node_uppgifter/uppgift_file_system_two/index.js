const fs = require('fs')
const colorData = require("./lib/farger.json")

const file = process.cwd() + "/minaFarger.md";

function checkForFile(p)
{
    if (fs.existsSync(p))
        return true
    else 
        return fs.writeFileSync(p, '')
}

colorData.colorList.forEach(c => {
    fileCheck = checkForFile(file)
    
    if (!fileCheck)
    {
        console.log("Something went wrong")
        console.log(fileCheck)
        process.exit();
    }
    
    fs.appendFile(file, `${c.färg}: ${c.hex}\n`, err => {
        if (err) throw err;
    })
})


fs.rename(file, `${process.cwd()}/test.md`, err => {
    if (err) throw err
    fs.unlinkSync(file)
});
