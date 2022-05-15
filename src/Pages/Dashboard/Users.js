import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

function Users() {
    const {
        isLoading,
        data: users,
        refetch,
    } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => res.json())
    );

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then(() => {
                refetch();
                toast.success('Admin selected');
            });
    };

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
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <th>{user.email.split('@')[0]}</th>
                            <th>{user.email}</th>
                            <th>
                                {user.role !== 'admin' && (
                                    <button
                                        onClick={() => makeAdmin(user.email)}
                                        type="button"
                                        className="btn btn-xs"
                                    >
                                        Make Admin
                                    </button>
                                )}
                            </th>
                            <th>
                                {user.role !== 'admin' && (
                                    <button type="button" className="btn btn-xs">
                                        Remove user
                                    </button>
                                )}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
