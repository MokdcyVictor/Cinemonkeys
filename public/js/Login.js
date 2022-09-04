
    function login() {
        
        
        const email = "admin@gmail.com"
        const password = "123456"
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Erro no usuario ou Senha");
        });
    }

    function registrar() {
        const email = "oi@gmail.com"
        const password = "fdsafdsafdsaf"
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Usuario cadastrado com Sucesso");
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        });
    }
