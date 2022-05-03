import React from 'react'
import './footer.css'

const Footer = () => {
  return (
       <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Sample footer.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href=""> abc.com</a>
    </div>

</footer>
  )
}

export default Footer