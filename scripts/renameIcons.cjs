const fs = require('fs');
const fsp = fs.promises
const join = require('path').join;

const dirWithIcons = 'src/assets/icons/iconsBrowser/svg'

async function renameIcons() {
    const files = await fsp.readdir(dirWithIcons)

    files.forEach(file => {
        const fileNewName = file
            .replaceAll(' ', '-')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .toLowerCase()
        fsp.rename(join(dirWithIcons, file), join(dirWithIcons, fileNewName))
    })

}

void renameIcons()

// for running the script: node scripts/renameIcons.cjs

// for running svgr (to transform svg to components): pnpx @svgr/cli --out-dir src/components/icons/iconsBrowser --jsx-runtime automatic --typescript --ref --memo -- src/assets/icons/iconsBrowser/svg