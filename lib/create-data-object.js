const fs = require('fs');

const createDataObject = (imageFilePath, labelFilePath) => {
    const dataPojo = {
        image: [],
        label: [],
    }
    const labelBuffer = fs.readFileSync(labelFilePath);
    const imageBuffer = fs.readFileSync(imageFilePath);

    // console.log(imageFile.length)

    for (let i = 8; i < labelBuffer.length; i++) {
        dataPojo.label.push(labelBuffer[i])
    }

    for (let i = 16; i < imageBuffer.length; i++) {
        dataPojo.image.push(imageBuffer[i])
    }

    console.log(dataPojo.label);
    console.log(dataPojo.image)
    return dataPojo;
}

// console.log(createDataObject('data/training-data/train-images-idx3-ubyte','data/training-data/train-labels-idx1-ubyte'));
createDataObject('data/training-data/train-images-idx3-ubyte','data/training-data/train-labels-idx1-ubyte');