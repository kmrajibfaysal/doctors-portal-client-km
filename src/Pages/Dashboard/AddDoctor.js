import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

function AddDoctor() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    /* const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            });
    }, [services]); */

    const { data: services, isLoading } = useQuery('services', () =>
        fetch('http://localhost:5000/service').then((res) => res.json())
    );

    const imageStorageKey = '74a3e1034fd4c0774454fa9d23740c5d';

    const onSubmit = async (data) => {
        console.log(data);
        const image = data.image[0];
        console.log(image);

        const formData = await new FormData();
        await formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img,
                    };
                    // sends data to server
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully.');
                                reset();
                            } else {
                                toast.error('failed to add the doctor!');
                            }
                        });
                }
            });
    };
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="mx-auto w-full max-w-[520px] rounded-xl  bg-white p-10 shadow">
            <h3 className="py-4 text-center text-xl font-bold text-accent">Add a new Doctor!</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">Name</label>
                    <input
                        {...register('name', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter email address"
                        role="input"
                        type="text"
                        className={`text-md mt-2 w-full rounded border
                                   border-gray-200
                                bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                    />
                    <p className="text-red-500">{errors.name?.message}</p>
                </div>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                    <input
                        {...register('email', {
                            required: { value: true, message: 'Email is required!' },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Please enter a valid email!',
                            },
                        })}
                        aria-label="enter email address"
                        role="input"
                        type="email"
                        className={`text-md mt-2 w-full rounded border border-gray-200
                                 bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">
                        Specialty
                    </label>
                    <select
                        {...register('specialty')}
                        name="time"
                        className="select select-bordered my-3 w-full text-lg"
                        defaultValue={services ? services.name : ''}
                    >
                        {services.map((service) => (
                            <option key={service._id} defaultValue={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <p className="text-red-500">{errors.specialty?.message}</p>
                </div>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">Image</label>
                    <input
                        {...register('image', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter image"
                        role="input"
                        type="file"
                        className={`text-md mt-2 w-full rounded border
                                   border-gray-200
                                bg-gray-100 py-3 pl-3 font-medium leading-none text-gray-800 focus:outline-none `}
                    />
                    <p className="text-red-500">{errors.image?.message}</p>
                </div>

                <button
                    type="submit"
                    aria-label="Login"
                    className="text-md btn mt-3 w-full py-4 font-bold leading-none text-white hover:bg-accent"
                >
                    add
                </button>
            </form>
        </div>
    );
}

export default AddDoctor;
