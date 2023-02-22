const Sensor = ({ data }) => {
    console.log('data :', data)
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center all-sensor">
                <div className="flex justify-center card sensor-out bg-base-100 border shadow-sm p-2 m-2">
                    <div className="data-sensor">{data[0].value1}</div>
                    <div className="label-sensor">PH</div>
                </div>
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <div className="data-sensor">{data[0].value2}</div>
                    <div className="label-sensor">TDS</div>
                </div>
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <div className="data-sensor">{data[0].value3}</div>
                    <div className="label-sensor">SUHU</div>
                </div>
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <div className="data-sensor">{data[0].value4}</div>
                    <div className="label-sensor">SALINITAS</div>
                </div>
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <div className="data-sensor">{data[0].value5}</div>
                    <div className="label-sensor">AMONIA</div>
                </div>
            </div>
        </>
    )
}

export default Sensor