const mainContent = document.querySelector('.client__info');
const panellControl = document.querySelector('.panell__controll');
const updateInfo = document.querySelector('.update__client');
const mainTable = document.querySelector('.client__table');

function updateClientInfo() {
    mainContent.style.display = 'none';
    updateInfo.onclick = () => {
        let isUpdate = false;
        if (!isUpdate) {
            mainContent.style.display = 'block';
            panellControl.style.display = 'none';
            mainTable.style.display = 'none';
        }
    }
}

function backForTable() {
    const backButton = document.querySelector('.button__back');
    backButton.onclick = () => {
        mainContent.style.display = 'none';
        panellControl.style.display = '';
        mainTable.style.display = '';
    }
}

function saveChangeInfo() {
    const saveChanges = document.querySelector('.save__changes');
    saveChanges.onclick = () => {
        mainContent.style.display = 'none';
        panellControl.style.display = '';
        mainTable.style.display = '';
    }
}

updateClientInfo();
backForTable();
saveChangeInfo();