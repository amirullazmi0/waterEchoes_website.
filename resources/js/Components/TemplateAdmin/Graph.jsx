const Graph = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center all-sensor">
                <div className="card bg-base-100 border shadow-sm p-2 m-2">
                    <figure><img src="https://www.anychart.com/blog/wp-content/uploads/2021/07/line-chart-js-preview.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-center">Grafik Harian</p>
                    </div>
                </div>
                <div className="card">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center all-sensor">
                        <div className="card bg-base-100 border shadow-sm p-2 m-2">
                            <figure><img src="https://www.anychart.com/blog/wp-content/uploads/2021/07/line-chart-js-preview.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="text-center">Grafik Perminggu</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 border shadow-sm p-2 m-2">
                            <figure><img src="https://www.anychart.com/blog/wp-content/uploads/2021/07/line-chart-js-preview.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="text-center">Grafik Bulan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph