import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

function Users() {
    const { isLoading, data: users } = useQuery('users', () =>
        fetch('http://localhost:5000/user').then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th />
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <th>{user.email.split('@')[0]}</th>
                            <th>{user.email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
