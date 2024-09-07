const fs = require('fs');
const fsp = fs.promises
const join = require('path').join;

const dirWithIconsComps = 'src/components/icons/iconComponents'

async function addWidthHeight() {

    const files = await fsp.readdir(dirWithIconsComps)

    files.forEach(async (file) => {

        const filePath = join(dirWithIconsComps, file)

        const fileContent = await fsp.readFile(filePath, "utf-8")

        const newFileContent = fileContent
            .replaceAll(`viewBox="0 0 24 24"`, `width={24} height={24} viewBox="0 0 24 24"`)
            .replaceAll(`viewBox="0 0 24 16"`, `width={24} height={16} viewBox="0 0 24 16"`)
            .replaceAll(`viewBox="0 0 36 36"`, `width={36} height={36} viewBox="0 0 36 36"`)
            // .replaceAll(`width={24}`, ``)
            // .replaceAll(`width={36}`, ``)
            // .replaceAll(`height={24}`, ``)
            // .replaceAll(`height={36}`, ``)

        fsp.writeFile(filePath, newFileContent)
    })

}

void addWidthHeight()

// for running the script: node scripts/addWidthHeight.cjs