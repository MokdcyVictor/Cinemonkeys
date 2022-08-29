function onChangeEmail() {
    toggleBottonsDisable();
    toggleEmailErrors();
}
function onChangePassword() {
    toggleBottonsDisable();
    togglePasswordErrors();
}
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
            return false;
        }

        return validateEmail(email);
    }

    function isPasswordValid() {
        const password = document.getElementById('password').value;
        if (!password){
            return false;
        }
        return true;
    }

    function toggleEmailErrors() {
        const email = document.getElementById("email").value;
        if (!email) {
            document.getElementById('email-required-error').style.display = "block";
        } else {
            document.getElementById('email-required-error').style.display = "none";
        }

        if (validateEmail(email)) {
            document.getElementById('email-invalid-error').style.display = "none";
        } else {
            document.getElementById('email-invalid-error').style.display = "block";
        }
    }

    function togglePasswordErrors() {
        const password = document.getElementById('password').value;
        if (!password) {
            document.getElementById('password-required-error').style.display = "block";
        } else {
            document.getElementById('password-required-error').style.display = "none";
        }
    }
    function toggleBottonsDisable() {
        const emailValid = isEmailValid();
    document.getElementById('reset-password').disabled = !emailValid;
    const passwordValid = isPasswordValid();
    document.getElementById('login-buttom').disabled = !emailValid || !passwordValid;
    }