import Graph from '@/Components/TemplateAdmin/Graph';
import Jumbotron from '@/Components/TemplateAdmin/Jumbotron';
import Navbar from '@/Components/TemplateAdmin/Navbar';
import Sensor from '@/Components/TemplateAdmin/Sensor';
import { Head } from '@inertiajs/react';
import React from 'react';
export default function Home(props) {
    // console.log(props.sensor)
    return (
        <div className='bg-body'>
            <Head title={props.title} />
            <Navbar />
            <Jumbotron />
            <div className="m-2 lg:mr-8 lg:mt-6 flex justify-end">
                <div className="dropdown dropdown-left dropdown-end">
                    <label tabIndex={0} className="btn btn-md btn-orange">Kolam 1</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Kolam 2</a></li>
                        <li><a>Kolam 3</a></li>
                    </ul>
                </div>
            </div>
            <div className="lg:p-6" >
                <Sensor />
                <Graph />
            </div>
        </div>
    )
}