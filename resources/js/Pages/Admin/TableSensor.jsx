import DetailSensor from '@/Components/TemplateAdmin/DetailSensor';
import Graph from '@/Components/TemplateAdmin/Graph';
import Jumbotron from '@/Components/TemplateAdmin/Jumbotron';
import Navbar from '@/Components/TemplateAdmin/Navbar';
import Sensor from '@/Components/TemplateAdmin/Sensor';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
export default function TableSensor(props) {
    return (
        <div className='bg-body'>
            <Head title={props.title} />
            <Navbar active={props.active} />
            <Jumbotron />
            {/* <DetailSensor /> */}
            <div className="lg:p-6 p-3">
                {/* <Sensor data={props.sensor} />
                <Graph /> */}
                <DetailSensor />
            </div>
        </div>
    )
}