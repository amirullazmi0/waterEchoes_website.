import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <div className="flex h-screen w-screen">
                <div className="flex flex-auto lg:flex-1 items-center justify-center sisi-form">
                    <div className="card-form bg-white p-4 lg:p-10 w-96 border">
                        <Head title="Log in" />

                        {/* <div className="head-login flex justify-center">WATER ECHOES</div> */}
                        <img className='flex justify-center' src="/img/logo.png" alt="" />

                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                        <form onSubmit={submit}>
                            <div>
                                <InputLabel forInput="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel forInput="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                {/* <button className="btn btn-md btn-orange" processing={processing}>
                                    Log in
                                </button> */}

                                <PrimaryButton className="btn btn-md btn-orange" processing={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden lg:block lg:flex-1 sisi-img">
                    <img className='img-login' src="https://disk.mediaindonesia.com/thumbs/1800x1200/news/2021/01/12cd0b732ef65aa8f49eb989e82b5c97.jpg" alt="" />
                </div>
            </div>
        </>
    );
}
