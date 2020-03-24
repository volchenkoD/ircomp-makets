//Создание класа для нового пользователя
class Client {
    constructor(source, fullName, birthday, gender, school, classClient, change, contacts, filial, contract, customer, customerContact) {
        this.source = source;
        this.fullName = fullName;
        this.birthday = birthday;
        this.gender = gender;
        this.school = school;
        this.classClient = classClient;
        this.change = change;
        this.contacts = contacts;
        this.filial = filial;
        this.contract = contacts;
        this.customer = customer;
        this.customerContact = customerContact;
    }
}
// Кнопка добавления клиента
let addClient = document.querySelector('.add__client');
// Кнопка закрытия модального окна
let closeModal = document.querySelector('.modal .close');
// Кнопка сохранения введенных данных
let addButton = document.querySelector('.modal .save');
console.log(addButton);
// Получение формы
let form = document.querySelector('.modal .client__form');
//Добавление еще одного поля контактов
let addContacts = document.querySelector('.add__contact');
let tableClient = document.querySelector('.client__table');
// Получение всех текстовых полей
let inputsText = document.querySelectorAll('input[type="text"]');
// Получение поля даты рождения
let inputsDate = document.querySelectorAll('input[type="date"]');
// Получение полей ввода номеров телефона
let inputsPhone = document.querySelectorAll('input[type="tel"]');
// Вывод модального окна
addClient.onclick = () => {
    document.querySelector('.modal').style.display = 'block';
}
//Скрытие модального окна
closeModal.onclick = () => {
    document.querySelector('.modal').style.display = 'none';
}
//Добавление нового пользователя на страницу
addButton.onclick = () => {
    addNewClient();
    clearValue(inputsText);
    clearValue(inputsDate);
    clearValue(inputsPhone);
    document.querySelector('.modal').style.display = 'none';
}

// Добавление клиента
function addClientList() {
    let source = document.querySelector('#source').value;
    let fullName = document.querySelector('#fullName').value;
    let birthday = document.querySelector('#birthday').value;
    let gender;
    let radio = document.querySelectorAll('.gender__div input');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].setAttribute('class', 'active__link');
            gender = radio[i].value;

        }
    }
    let school = document.querySelector('.school__value').value;
    let clientClass = document.querySelector('.class__value').value;
    let change = document.querySelector('.change__value').value;
    let contact = document.querySelector('#tel').value;
    let filial = document.querySelector('.filial').value;
    let contract;
    let checkbox = document.querySelectorAll('.type__contracts .gender__input');
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            contract = checkbox[i].value;
        }
    }
    let customer = document.querySelector('#customer').value;
    let customerContact = document.querySelector('#tel_customer').value;
    let clientNew = new Client(source, fullName, birthday, gender, school, clientClass, change, contact, filial, contact, customer, customerContact);
    console.log(clientNew);
    return clientNew;
}
// Создание новой строки в таблице коиентов
function addNewClient() {
    let client = addClientList();
    let tableRow = document.createElement('tr');
    let tdCheckbox = document.createElement('td');
    tableRow.classList.add('padding__table');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'active__checkbox');
    tdCheckbox.append(checkbox);
    tableRow.append(tdCheckbox);
    if (client.fullName) {
        tableRow.append(createEl(client.fullName));
        tableRow.append(createEl(client.birthday));
        tableRow.append(createEl(client.customer));
        tableRow.append(createEl(client.customerContact));
        tableClient.append(tableRow);
    }
}
// Создание элементов страницы
function createEl(value) {
    let td = document.createElement('td');
    if (value !== undefined) {
        td.innerHTML = value;
    } else {
        td.innerHTML = '';
    }
    td.classList.add('client__content');
    return td;
}
// добавление еще одного поля для ввода номера телефона
addContacts.onclick = () => {
    let input = document.createElement('input');
    let br = document.createElement('br');
    input.setAttribute('type', 'tel');
    input.setAttribute('placeholder', 'Введите номер телефона');
    input.classList.add('add__number');
    addContacts.before(input);
    addContacts.before(br);
}
// Очистка значений страницы
function clearValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value !== '') {
            arr[i].value = '';
        }
    }
}
// Создание чекбокса
function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    return checkbox;
}