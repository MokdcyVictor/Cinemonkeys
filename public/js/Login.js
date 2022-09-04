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
        const password = document.getElementById("senha").value;
        if (!password){
            return false;
        }
        return true;
    }

    function toggleEmailErrors() {
        const email = document.getElementById("email").value;
        if (!email) {
            
        } else {
            
        }

        if (validateEmail(email)) {
            
        } else {
            
        }
    }

    function togglePasswordErrors() {
        const password = document.getElementById('senha').value;
        if (!password) {
            
        } else {
            
        }
    }
    function toggleBottonsDisable() {
        const emailValid = isEmailValid();
        document.getElementById('login-button').disabled = !emailValid;
    
    }

    function login() {
        if () {
            window.location.href = './index.html';
        }
        
    }