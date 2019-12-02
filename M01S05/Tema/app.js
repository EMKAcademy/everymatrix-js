function calculate(length, width, height) {
    switch (arguments.length) {
        case 1:
            return length*length;
            break;
        case 2:
            return length*width;
            break;
        case 3:
            return length*width*height;
    }
}

let calculateCircleArea = (r) => {
    return Math.pow(r, 2)*Math.PI;
}

alert(`${calculateCircleArea(2)} si ${calculateCircleArea(20)} si ${calculateCircleArea(16)}`);

var pet = {
    getName: function() {
        return 'Vasilica';
    },
    getSpecies: function() {
        return 'Vacuta';
    },
    getAge: function() {
        return 5;
    }
}

const access = (methodSuffix) => {
    let info = `get${methodSuffix}`;
    return pet[info]();
};

console.log(`${access('Name')} este ${access('Species')} si are ${access('Age')} ani.`)

let petBirthYear = (new Date().getFullYear() - access('Age'));

console.log(`Animalul meu este nascut in ${petBirthYear} `)
