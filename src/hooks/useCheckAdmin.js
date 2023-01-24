import { useEffect, useState } from 'react';

const useCheckAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.role === 'admin') {
                    setIsAdmin(true);
                }
                setUserLoading(false);
            })
    }, [email])
    return [isAdmin, userLoading];
};

export default useCheckAdmin;