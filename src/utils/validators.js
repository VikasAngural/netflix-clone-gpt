export const validateEmailAndPasswordInputs = (email,password)=>{
    console.log(email);
    console.log(password)
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailValidate) return {errorFld:"email", errMsg:"Email is not valid"};
    if(!passwordValidate) return {errorFld:"password", errMsg:"Password is not valid"};
    return null;
}