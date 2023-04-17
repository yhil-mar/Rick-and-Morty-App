const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

const validation = (userData, state) => {

    const errors = {};
    let visButton = true;

    if (!userData.email) {
        errors.email = '*Campo obligatorio';
        visButton = false;
    } else if (userData.email.length > 35) {
        errors.email = '*No se puede superar los 35 caracteres';
        visButton = false;
    } else if (!regexEmail.test(userData.email)) {
        errors.email = '*Email no válido';
        visButton = false;
    }

    if (!userData.password) {
        errors.password = '*Campo obligatorio';
        visButton = false;
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = '*La password debe tener entre 6 y 10 caracteres';
        visButton = false;
    } else if (!/\d/.test(userData.password)) {
        errors.password = '*Debe contener al menos un número';
    }

    if(state === 'errors') return errors;
    else return visButton;
}

export default validation;