import './DataAtom.css'

function DataAtom({atomKey, atomValue}){
    return (
        <div className='atom'>
            <p className='atom-key'>{atomKey}</p>
            <p className='atom-value'>{atomValue}</p>
        </div>
    )
}

export default DataAtom