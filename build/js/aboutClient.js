// Получение смыслового раздела
let section = document.querySelector('.main__table');

document.querySelector('table').style.display = 'none';
document.querySelector('.panell__controll').style.display = 'none';
// добавление кнопок для работы с клиентами
function buttonBack() {
    let backButton = document.createElement('button');
    backButton.innerHTML = 'Назад';
    backButton.setAttribute('class', 'button__back');
    return backButton;

}

function changeUser() {
    let changeButton = document.createElement('button');
    changeButton.innerHTML = 'Редактировать профиль';
    changeButton.setAttribute('class', 'button__change');
    return changeButton;
}

section.append(buttonBack());
section.append(changeUser());