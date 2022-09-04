function validadeFields() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid;
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

    function login() {
        window.location.href = "index.html";
    }
