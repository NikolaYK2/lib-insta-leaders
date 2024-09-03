const fs = require('fs');
const fsp = fs.promises
const join = require('path').join;

const dirWithIconsComps = 'src/components/icons/iconsBrowser'

async function renameIcons() {

    const files = await fsp.readdir(dirWithIconsComps)

    files.forEach(async (file) => {

        const filePath = join(dirWithIconsComps, file)

        const fileContent = await fsp.readFile(filePath, "utf-8")

        const newFileContent = fileContent
            .replaceAll(`fill="#000"`, `fill="currentColor"`)
            .replaceAll(`fill="#fff"`, `fill="currentColor"`)

        fsp.writeFile(filePath, newFileContent)
    })

}

void renameIcons()

// for running the script: node scripts/changeColor.cjs