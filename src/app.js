
const doc = {
    wordInput: document.querySelector('#word'),
    names: document.querySelector('#names')
}

const state = {
    nameList: []
}

window.addEventListener('load', () => {
    init();
    render();
});

//init();

function init() {
    state.nameList = [
        'Erős Pista',
        'Páros Béla',
        'Pálma Irén',
        'Penge Géza',
        'Erdős Borbála',
        'Csengő Béla'
    ];
    doc.wordInput.addEventListener('keyup', () => {
        filterList();
    })
}

function filterList() {
    console.log(doc.wordInput.value);
    let filteredList = state.nameList.filter(item => {
        if (item.indexOf(doc.wordInput.value) > -1) {
            return item;
        }
    });
    doc.names.innerHTML = '';
    let lis = '';
    filteredList.forEach(item => {
        console.log(item);
        lis += `
            <li>${item}</li>
        `;
    });
    doc.names.innerHTML = lis;
};

function render() {
    let lis = '';
    state.nameList.forEach(name => {
       
        console.log(name);
        lis += `
            <li>${name}</li>
        `;
});

doc.names.innerHTML = lis;

}