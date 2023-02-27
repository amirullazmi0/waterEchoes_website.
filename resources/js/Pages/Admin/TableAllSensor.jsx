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
                <div className="justify-center m-4">
                    <div className="card-detail-sensor p-3">
                        <div className="lg:flex grid p-2">
                            <div className="overflow-x-auto lg:flex-1 mb-3 shadow-md">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead className="text-center">
                                        <tr>
                                            <td className="text-start">No</td>
                                            <th>Value1</th>
                                            <th>Value2</th>
                                            <th>Value3</th>
                                            <th>Value4</th>
                                            <th>Value5</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {/* row 1 */}
                                        <tr>
                                            <td className="text-start">1</td>
                                            <td>123</td>
                                            <td>123</td>
                                            <td>123</td>
                                            <td>123</td>
                                            <td>123</td>
                                            <td>ashagsd</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="lg:flex-1">
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex-1 justify-center card sensor-out bg-base-100 border shadow-sm p-2 m-2">
                                        <div className="data-sensor">23</div>
                                        <div className="label-sensor">PH</div>
                                    </div>
                                    <div className="flex-1 justify-center card bg-base-100 border shadow-sm p-2 m-2">
                                        <div className="data-sensor">67</div>
                                        <div className="label-sensor">TDS</div>
                                    </div>
                                    <div className="flex-1 justify-center card bg-base-100 border shadow-sm p-2 m-2">
                                        <div className="data-sensor">68</div>
                                        <div className="label-sensor">SUHU</div>
                                    </div>
                                    <div className="flex-1 justify-center card bg-base-100 border shadow-sm p-2 m-2">
                                        <div className="data-sensor">26</div>
                                        <div className="label-sensor">SALINITAS</div>
                                    </div>
                                    <div className="flex-1 justify-center card bg-base-100 border shadow-sm p-2 m-2">
                                        <div className="data-sensor">26</div>
                                        <div className="label-sensor">AMONIA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}