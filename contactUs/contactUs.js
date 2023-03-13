function validateFields() {
    resetErrors();
    let fNameValidation = fullNameValidation(document.getElementById('fName').value);
    let cPhonevalidation = phoneValidation(document.getElementById('cPhone').value);
    let eAddressvalidation = emailValidation(document.getElementById('eAddress').value);

    if (!fNameValidation || !cPhonevalidation || !eAddressvalidation) {
        console.log('Not send');
    } else {
        console.log('Send');
    }
}

function fullNameValidation(name) {
    if (!name || name.trim() === '') {
        createError('errorName', 'p', 'Name is required');
        return false;
    }
    if (name.toLowerCase() === 'ironhack'.toLowerCase()) {
        createError('errorName', 'p', 'You cannot be Ironhack, because I am Ironhack.');
        return false;
    }
    else {
        return true;
    }
}

function phoneValidation(phone) {
    var phonePattern = new RegExp("^[0-9]{9}$");

    if (!phone || phone.trim() === '') {
        return true;
    }
    if (!phone.match(phonePattern)) {
        createError('errorPhone', 'p', 'Invalid phone pattern');
        return false;
    }
    return true;
}

function emailValidation(email) {
    var emailPattern = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$");
    if (!email || email.trim() === '') {
        return true;
    }
    if (!email.match(emailPattern)) {
        createError('errorEmail', 'p', 'Invalid email pattern');
        return false;
    }
    return true;
}

function resetErrors() {
    document.getElementById('errorName').innerHTML = '';
    document.getElementById('errorName').value = '';
    document.getElementById('errorPhone').innerHTML = '';
    document.getElementById('errorPhone').value = '';
    document.getElementById('errorEmail').innerHTML = '';
    document.getElementById('errorEmail').value = '';
}

function createError(name, divElement, errorMessage) {
    const elementChild = document.createElement(divElement);
    const node = document.createTextNode(errorMessage);
    elementChild.appendChild(node);
    const element = document.getElementById(name);
    element.appendChild(elementChild);
}