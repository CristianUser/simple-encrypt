let encrypt = (text: string, key: number = 5) => {
    let newString = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz 0123456789!@#$%^&*()';
    
    for(let item of text){
        let position = characters.search(item) + key
        if (position >= characters.length ){
            position = position - characters.length;
        }
        newString += characters[position];
    }
    return newString; 
};

let desencrypt = (text: string, key: number = 0) => {
    let newString = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz 0123456789!@#$%^&*()';
    
    for(let item of text){
        let position = characters.search(item) - key
        if (position < 0 ){
            position = position + characters.length;
        }
        newString += characters[position];
    }
    return newString;  
};

let encryptChar = (text: string, key: number = 5, step: number = 1) => {
    text = text.split("").reverse().join("");
    let newString = '';
    for(let item of text){
        let code = item.charCodeAt(0) + key
        let char = String.fromCharCode(code)
        key += step;
        newString = newString + char;
    }
    return newString.split("").reverse().join("")
};

let decryptChar = (text: string, key: number = 5, step: number = 1) => {
    text = text.split("").reverse().join("");
    let newString = '';
    for(let item of text){
        let code = item.charCodeAt(0) - key
        let char = String.fromCharCode(code)
        key += step;
        newString = newString + char;
    }
    return newString.split("").reverse().join("");
};

// console.log(desencrypt(encrypt('zapato', 14), 14))
console.log(encryptChar('hola manin como estas', 3 ,3));
