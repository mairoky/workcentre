import { toast } from "react-hot-toast";

// Save user to the Database
export const saveUserToDB = (name, email, role = 'job_seeker') => {
    const user = {
        name,
        email,
        role
    };
    fetch('http://localhost:5000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success(`${name} your account created successfully.`);
        })
}