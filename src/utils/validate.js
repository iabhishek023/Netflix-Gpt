
// export const checkValidData=(email,password,name=null)=>{
    export const checkValidData=(email,password)=>{

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isValidName = name ? /^[A-Z][a-zA-Z\s]*$/.test(name) : true;

    if(!isEmailValid) return "Email iD is not valid"

    if(!isPasswordValid) return "Password is not valid"

    //  if(name && !isValidName) return "Name is not valid"

    return null;

}