import Chart from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

function ProfilesSpiderGraph({profileData}){

    //profileData returns a list of profile objects! I need to get all the numerical data from each object and its labels...

    const colors = [
        { border: 'rgb(63, 13, 18)', background: 'rgba(63, 13, 18, 0.2)' },
        { border: 'rgb(167, 29, 49)', background: 'rgba(167, 29, 49, 0.2)' },
        { border: 'rgb(213, 191, 134)', background: 'rgba(213, 191, 134, 0.2)' },
        { border: 'rgb(141, 119, 95)', background: 'rgba(141, 119, 95, 0.2)' }
    ]

    const numericalFeatureNames = profileData[0].features.filter(f => typeof f.feature_profile_value === "number").map(f => f.feature_name)

    if (numericalFeatureNames.length < 5) {
        numericalFeatureNames.push('Saldo Transações')
        numericalFeatureNames.push('Feature teste A')
        numericalFeatureNames.push('Feature teste B')
    }

    const datasets = profileData.map((profile, index) => {
        const data = numericalFeatureNames.map(name => {
            if (name === 'Saldo Transações') return 50000000
            if (name === 'Feature teste A') return 90000000
            if (name === 'Feature teste B') return 60000000
            const feature = profile.features.find(f => f.feature_name === name)
            return feature ? feature.feature_profile_value : 0
        })

        const color = colors[index % colors.length]

        return {
            label : profile.profile_cluster_description,
            data: data,
            fill : true,
            backgroundColor: color.background,
            borderColor: color.border,
            pointBackgroundColor: color.border,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: color.border
        }
    })

    const graphData = {
        labels : numericalFeatureNames,
        datasets : datasets
    }

    const graphOptions = {
        responsive: true,
        maintainAspectRatio: false,
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
        scales: {
            r:{
                ticks:{
                    color: '#fff',
                    font:{
                        size: 16,
                        weight: 'bold'
                    },
                    backdropColor: "rgba(0,0,0,0.1)"
                },
                pointLabels:{
                    color: '#fff',
                    font:{
                        size: 18,
                        weight: 'bold'
                    },
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.58)',
                    lineWidth: 1,
                    circular: false
                }
            }
        }
    }

    return(
        <Radar data={graphData} options={graphOptions}></Radar>
    )
}

export default ProfilesSpiderGraph