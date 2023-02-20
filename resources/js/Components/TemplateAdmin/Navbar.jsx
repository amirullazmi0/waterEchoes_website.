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
                            <div className="">
                                Water Echoes
                            </div>
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
                                <Link className="flex sidebar-item active">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    <div className="ml-3">
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className="flex sidebar-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    <div className="ml-3">
                                        Tables
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item" style={{ color: 'white' }}>8</span>
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
                                <img src="https://cdn.antaranews.com/cache/730x487/2022/12/31/000_336B34G.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar