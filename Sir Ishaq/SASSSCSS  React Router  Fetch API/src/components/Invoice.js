import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Invoice = () => {
    let params = useParams();
    console.log(params);
    return (
        <>    Invoice: Invoice {params.invoiceId}
            {/* <div>Home</div> */}
            <div><Link to="/about">Home</Link></div>
        </>
      )
}

export default Invoice