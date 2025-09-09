import { Line } from "react-chartjs-2"

function ClusterCentroidDistanceGraph({clusterCentroidDistanceData}){
    const labels = clusterCentroidDistanceData.map(distance => `${distance.cluster_id} - ${distance.cluster_description}`)

    const distances = clusterCentroidDistanceData.map(distance => distance.distance)

    const graphData = {
        labels : labels,
        datasets: [
            {
                label: 'Distância dos centroides de cluster',
                data: distances,
                fill : true,
                borderColor: 'rgb(167, 29, 49)',
                tension: 0.3
            }
        ]
    }

    const graphOptions = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
        scales : {
            x: {
                grid: {
                    color: "rgba(255, 255, 255, 0.3)",
                    lineWidth: 0.5,
                    drawBorder: true
                },
                ticks : {
                    color: "rgba(255, 255, 255, 1)",
                    font: {size : 14}
                }
            },
            y : {
                grid : {
                    color: "rgba(255, 255, 255, 0.3)",
                    lineWidth: 0.5,
                    drawBorder: true,
                },
                ticks: {
                    color: "rgba(255, 255, 255, 1)",
                    font : {size : 14} 
                }
            }
        }
    }

    return(
        <Line data={graphData} options={graphOptions}></Line>
    )
}

export default ClusterCentroidDistanceGraph