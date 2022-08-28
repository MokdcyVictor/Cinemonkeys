function validateFields () {
    const emailValid = isEmailValid();
    document.getElementById('reset-password').disabled = !emailValid;
    const passwordValid = isPasswordValid();
    document.getElementById('login-buttom').disabled = !emailValid || !passwordValid;
    

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
}