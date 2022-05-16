/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        //
        const email = user?.user?.email;

        const currentUser = { email };

        if (email) {
            fetch(`https://doctors-portal-server-km.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }
    }, [user]);
    return [token];
};

export default useToken;
