import Graph from '@/Components/TemplateAdmin/Graph';
import Jumbotron from '@/Components/TemplateAdmin/Jumbotron';
import Navbar from '@/Components/TemplateAdmin/Navbar';
import Sensor from '@/Components/TemplateAdmin/Sensor';
import SocketSensor from '@/Components/TemplateAdmin/SocketSensor';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export default function Home(props) {
    return (
        <div className='bg-body'>
            <Head title={props.title} />
            <Navbar />
            <Jumbotron />
            <SocketSensor />
            <div className="m-2 mt-5 lg:mt-6 lg:mr-8 lg:ml-8 flex items-center">
                {/* <h1 className='tron-title'>{props.title}</h1> */}
                <div className="dropdown dropdown-left dropdown-end ml-auto">
                    <label tabIndex={0} className="btn btn-md btn-orange">Kolam 1</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Kolam 2</a></li>
                        <li><a>Kolam 3</a></li>
                    </ul>
                </div>
            </div>
            <div className="lg:p-6 mr-auto">
                <Sensor data={props.sensor} />
                <Graph />
            </div>
        </div>
    )
}