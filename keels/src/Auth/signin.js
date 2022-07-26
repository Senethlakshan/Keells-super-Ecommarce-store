import React from 'react'
import {Link,Outlet} from 'react-router-dom'

import {getInvoices} from '../Components/Homepage/data'

const signin = () => {

  let invoices = getInvoices(); 


  return (
    <div>
      <br/><br/>
        <h1>sign in page</h1>
        <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/login/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
    </div>
  )
}

export default signin