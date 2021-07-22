import {path} from '@vuepress/utils'

import {readdirSync, statSync} from "fs"

export const getFileList = () => {
    let fileList = []
    console.log(readFileList(path.resolve(), fileList));

    console.log(fileList)


}


function readFileList(dir, filesList: string[] = []) {

    const files = readdirSync(dir);

    console.log(files);

    files.forEach((item, index) => {
        let fullPath = path.join(dir, item);
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
            readFileList(path.join(dir, item), filesList);  //递归读取文件
        } else {
            filesList.push(fullPath);
        }
    });
    return filesList;
}

