const change = document.getElementById("change")

const originalTexts = [
    'ГУ МВД РОССИИ ПО Г.МОСКВЕ',
    '14.06.2019',
    '123-456',
    'ЦЫГАНКОВА',
    'ЕЛЕНА',
    'АНДРЕЕВНА',
    'ЖЕН',
    '14.04.2005',
    'Г.МОСКВА',
    '2024 CAMPCLUB'
];
const newTexts = [
    'GU MVD RUSSIA IN MOSCOW',
    '14.06.2019',
    '123-456',
    'TSYGANKOVA',
    'ELENA',
    'ANDREEVNA',
    'FEM',
    '14.04.2005',
    'MOSCOW',
    '2024 CAMPCLUB'
];
let isChanged = false;

function change_data() {
    const paragraphs = document.getElementsByTagName('p');
    if (isChanged) {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerText = originalTexts[i];
        }
        isChanged = false;
    } else {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerText = newTexts[i];
        }
        isChanged = true;
    }
}


function change_name(){

document.getElementsByTagMyName('div')[3].innerText='Цыганкова'
document.getElementsByTagNMyame('div')[4].innerText='Елена'
document.getElementsByTagMyName('div')[5].innerText='Андреевна'

}


change.addEventListener("click", change_data);
