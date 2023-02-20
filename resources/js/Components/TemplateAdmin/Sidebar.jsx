import { useState } from "react"

const Sidebar = ({ }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-brand mb-2">
                <div className="flex">
                    <div className="mr-auto">
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
            <div className="grid">
                <ul>
                    <li>
                        asdgahs
                    </li>
                    <li>
                        asdhiasj
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar