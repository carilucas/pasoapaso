import React from 'react'
import { path } from '../path'

export const FooterComponent = () => {
   return (
      <footer className="footer-container">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <img src={`${path}/assets/images/03-logos-gov.png`} alt="Logos" className="footer-logos img-fluid mx-auto d-block" />
               </div>
            </div>
         </div>
         <div className="container-fluid pink-bg">
            <img src={`${path}/assets/images/04-footer-logo.png`} alt="Optimus Social" className="mx-auto d-block footer-logo" />
         </div>
      </footer>
   )
}
