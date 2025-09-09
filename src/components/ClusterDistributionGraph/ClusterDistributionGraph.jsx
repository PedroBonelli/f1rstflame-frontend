import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

function ClusterDistributionGraph({clusterDistributionList}){
    const datapoints = clusterDistributionList.map(distribution => distribution.percentage * 100)
    const labels = clusterDistributionList.map(distribution => distribution.cluster_description)
    const graphData = {
        labels: labels,
        datasets: [{
            label: 'Porcentagem das empresas',
            data: datapoints,
            backgroundColor: [
                'rgb(63, 13, 18)',
                'rgb(167, 29, 49)',
                'rgb(213, 191, 134)',
                'rgb(141, 119, 95)',
            ],
        hoverOffset: 20
        }]
    }

    const graphOptions = {
        responsive : true,
        plugins:{
            legend : {
                labels : {
                    color: '#ffffff',
                    font : {
                        size: 18,
                        weight: 'bold'
                    }
                }
            },
            },
            
        layout:{
            padding: {
                bottom : 10
            }
        }
    }

    return (
        <Doughnut data={graphData} options={graphOptions} />
    )
}


export default ClusterDistributionGraph