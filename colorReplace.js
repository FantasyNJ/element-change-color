var fs = require('fs');
var process = require('child_process');

const colorMap = {
    '#3a8ee6': '$--color-shade-1',
    '#409eff': '$--color-primary',
    '#53a8ff': '$--color-primary-light-1',
    '#66b1ff': '$--color-primary-light-2',
    '#79bbff': '$--color-primary-light-3',
    '#8cc5ff': '$--color-primary-light-4',
    '#a0cfff': '$--color-primary-light-5',
    '#b3d8ff': '$--color-primary-light-6',
    '#c6e2ff': '$--color-primary-light-7',
    '#d9ecff': '$--color-primary-light-8',
    '#ecf5ff': '$--color-primary-light-9'
}

let colorCode = fs.readFileSync('./el-theme.scss', 'utf8')

let newcolorCode = colorCode.replace(/#[0-9A-Za-z]{6}/g, ($0) => {
    let color = $0.toLowerCase()
    return colorMap[color]
})

// 生成替换scss
fs.writeFileSync('./element-color.scss', newcolorCode);

process.execSync('sass --no-cache ./theme.scss ./out.css')
