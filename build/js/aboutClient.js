// Получение смыслового раздела
let section = document.querySelector('.main__table');

document.querySelector('table').style.display = 'none';
document.querySelector('.panell__controll').style.display = 'none';
// кнопка вернуться в таблицу
// let buttonBack = createElementClient('button', 'class', 'button__back');
// buttonBack.innerHTML = 'Назад';
// let changeButton = createElementClient('button', 'class', 'button__change');
// changeButton.innerHTML = 'Редактировать профиль';

// function createElementClient(name, atrr, value = '') {
//     let elem = document.createElement(`${name}`);
//     elem.setAttribute(`${atrr}`, `${value}`);
//     return elem;

// }

// function photoContainer() {
//     let photoContainer = createElementClient('div', 'class', 'user__photo');
//     let img = createElementClient('img', 'src', '/build/img/photo-client.png');
//     let button = createElementClient('button', 'class', 'change__photo');
//     button.innerHTML = 'Сменить фото';
//     photoContainer.append(img);
//     photoContainer.append(button);
//     return photoContainer;
// }

// function textInformation() {
//     let textContainer = createElementClient('div', 'class');
//     let aboutUser = textAboutUser();
//     textContainer.append(aboutUser);
//     return textContainer;
// }

// function textAboutUser() {
//     let textAboutUser = createElementClient('div', 'class',
//         'about__user-text');
//     let name = createElementClient('p', 'class');
//     name.textContent = 'Пугко Ксения Викторовна';
//     let date = createElementClient('p', 'class');
//     let span = createElementClient('span', 'class',
//         'date');
//     span.innerHTML = '24.05.2003';
//     console.log(span);
//     date.innerHTML = `Дата рождения ${span.textContent}`;
//     textAboutUser.append(name);
//     textAboutUser.append(date);
//     return textAboutUser;
// }

// function textAboutFilialls() {
//     let textAboutFilialls = createElementClient('div', 'class');
//     return textAboutFilialls;
// }

// function textAboutCustomer() {
//     let textAboutCustomer = createElementClient('div', 'class');
//     return textAboutCustomer;
// }

// function mainContainer() {
//     let mainContainer = createElementClient('div', 'class', 'about__user');
//     let photoPart = photoContainer();
//     let textPart = textInformation();
//     mainContainer.append(photoPart);
//     mainContainer.append(textPart);
//     return mainContainer;
// }
// section.append(buttonBack);
// section.append(changeButton);
// section.append(mainContainer());