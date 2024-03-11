console.log("conditional statement in javascript");

const isLogged = true;
const loginWithEmail = false;
const loginWithGoogle = false;

if (loginWithEmail || loginWithGoogle)
{
    console.log("user successfully logged");
}
else{
    console.log("not logged");
}

