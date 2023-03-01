import Graph from '@/Components/TemplateAdmin/Graph';
import Jumbotron from '@/Components/TemplateAdmin/Jumbotron';
import Navbar from '@/Components/TemplateAdmin/Navbar';
import Sensor from '@/Components/TemplateAdmin/Sensor';
import SocketSensor from '@/Components/TemplateAdmin/SocketSensor';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

// const SOCKET_SERVER_URL = 'http://127.0.0.1/8080';



export default function Home(props) {
    const [message, setMessage] = useState('asdasd');
    // useEffect(() => {
    //     const socket = io.connect(SOCKET_SERVER_URL);

    //     socket.on('message', (message) => {
    //         setMessage(message);
    //     });

    //     // return () => {
    //     //     socket.disconnect();
    //     // };
    // }, []);
    return (
        <div className='bg-body'>
            <Head title={props.title} />
            <Navbar active={props.active} />
            <Jumbotron />
            {/* <SocketSensor /> */}
            <div className="lg:p-6 mr-auto">
                <h2 className='text-center'>{message}</h2>
                <Sensor data={props.sensor} />
                <Graph />
            </div>
        </div>
    )
}