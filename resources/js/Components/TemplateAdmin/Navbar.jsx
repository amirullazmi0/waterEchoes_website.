import { Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const myRef = useRef(null);

    useEffect(() => {
        // Fungsi untuk menyembunyikan elemen ketika pengguna mengklik di luar elemen tersebut
        function handleClickOutside(event) {
            if (myRef.current && !myRef.current.contains(event.target)) {
                myRef.current.classList.remove("show");
                setSidebar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, [myRef]);

    const closeSidebar = () => {
        setSidebar(false)
    }

    const openSidebar = () => {
        setSidebar(true)
    }

    const iniSidebar = () => {
        return (
            <>
                <div className="">
                    <div className="sidebar-brand mb-2">
                        <div className="flex">
                            {/* <div className="">
                                Water Echoes
                            </div> */}
                            <Link method="get" href={route('dashboard')}>
                                <img className="h-14" src="/img/logo.png" alt="" />
                            </Link>
                            <button className="sidebar-button ml-auto" onClick={() => closeSidebar()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="grid mt-3">
                        <ul className="">
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item active" method="get" href={route('dashboard')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    <div className="ml-3">
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item" method="get" href={route('dashboard')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    <div className="ml-3">
                                        All Tables
                                    </div>
                                </Link>
                            </li>
                            <hr className="mb-3" />
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item" method="get" href={route('ph')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                    </svg>
                                    <div className="ml-3">
                                        PH Table
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                                    </svg>

                                    <div className="ml-3">
                                        TDS Table
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>

                                    <div className="ml-3">
                                        Therm Table
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>

                                    <div className="ml-3">
                                        Salinity Table
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>

                                    <div className="ml-3">
                                        Ammonia Table
                                    </div>
                                </Link>
                            </li>
                            <hr className="mb-3" />
                            <li className="sidebar-list ">
                                <Link className="flex sidebar-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    <div className="ml-3">
                                        Prediction
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {/* style={{ display: sidebar ? 'block' : 'none'}} */}
            <div id={sidebar ? 'sidebar-on' : 'sidebar-off'} ref={myRef} >{iniSidebar()}</div>
            <div className="navbar bg-ku lg:pr-6 lg:pl-6 ">
                <div className="flex-1 nav-header">
                    <div className="mr-2">
                        <button onClick={() => openSidebar()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    Water Echoes
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>

                                <span className="badge badge-sm indicator-item" style={{ color: 'white', backgroundColor: 'red' }}>8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-biru btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="img-profile" src="https://www.ihp.ie/wp-content/uploads/profile-img.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <Link method="post" href={route('logout')} as="button" >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Navbar