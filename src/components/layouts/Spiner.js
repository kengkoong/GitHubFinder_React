import React,{Fragment} from 'react'
import spiner from './spinner.gif'

const Spiner = () => {
    return (
    
        <div>
            <Fragment>
               
                <img src={spiner} style={{width:'200px',margin:'auto',display:'block'}}/>
            </Fragment>
        </div>
    )
}


export default Spiner
