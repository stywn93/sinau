export const userRegister = async ({email, firstname, lastname, password, phonenumber, dob, country}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email, firstname, lastname, password, phonenumber, dob, country
        })
    })
}