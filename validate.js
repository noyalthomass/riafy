function validatePassword (password) { 
    let password="Dwerhyyujxs@1"
    let strongPassword = new RegExp('(?=.[A-Z])(?=.[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    if(strongPassword.test(password)) {
    
    var value = /abc|123|qwerty/.test(password);
    
    if(value) {
    alert("ggg password")
    }
    else {
    alert("Valid password")
    }
    }
    else {
    alert("dd password")
    }
    }