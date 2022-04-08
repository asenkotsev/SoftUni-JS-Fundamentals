function extractFile(string) {
    let file = string.substring(string.lastIndexOf('\\') + 1);
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let ext = file.substring(file.lastIndexOf('.') + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${ext}`);
}


extractFile('a\\aa\\Template.pptx')