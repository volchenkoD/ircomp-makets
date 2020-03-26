const asseccUser = document.querySelector('.add__client');
const asseccModal = document.querySelector('.modal__assecc');
const asseccClose = document.querySelector('.close');
const asseccSave = document.querySelector('.save');
asseccUser.onclick = () => {
    asseccModal.style.display = 'block';
}
asseccClose.onclick = () => {
    asseccModal.style.display = 'none';
}
asseccSave.onclick = () => {
    asseccModal.style.display = 'none';
}