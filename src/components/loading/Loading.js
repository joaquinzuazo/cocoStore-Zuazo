import React from 'react';
import { Spinner } from 'reactstrap';


const Loading = ()=>{
    return(
        <div className='loading'>
            <Spinner color="info" style={{ width: '3rem', height: '3rem' }} />
        </div>
    )
}

export default Loading;
