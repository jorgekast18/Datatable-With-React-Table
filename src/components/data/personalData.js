import namor from 'namor';


const range = length => {
    const array = [];
    for (let index = 0; index < length; index++){
        array.push(index);
    }

    return array;
}

const newPerson = () => {
    const age = Math.random() * 100;
    return {
        name: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        company: `${namor.generate( {words: 2, numbers: 1 })} Inc.`,
        position: age > 40 ? 'Desarrollador Senior' : age > 30 ? 'Desarrollador Junior' : 'Desarrollador',
        salary: `$ ${(Math.random() * 1000000).toFixed(2)}`,
    }
}

const makeData = lengthData => {
    return range(lengthData).map( data => {
        return { ...newPerson()}
    })
}

export default makeData;


