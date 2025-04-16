export const Validation = (name,email,password) =>{

    
    const isNameValid = /^[a-zA-Z]{3,}$/.test(name)
    const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!isNameValid) return "Invalid name. min 3 charectors"
    if(!isEmailValid) return "Invalid email. Try again"
    if(!isPasswordValid) return "Invalid password. Try again"

    return null
}