import './DataCard.css'
import DataAtom from '../DataAtom/DataAtom.jsx'

function DataCard({title, data}){

    return (
        <div className='data-card'>
            <h2 className='data-card-title'>{title}</h2>
            {Object.entries(data).map(([key, value], index) => (
                <DataAtom className='data-card-data-atom' key={index} atomKey={key} atomValue={value}/>
            ))}
        </div>
    )
}

export default DataCard