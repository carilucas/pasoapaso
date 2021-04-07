import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../path'
// import { path } from '../path'

export const HomeComponent = () => {
   return (
      <>
         <div className="row">
            <div className="col-sm-4">
               <img src={`./assets/images/01-5-pasos.png`} alt="5 pasos" className="img-fluid logo-pasos" />
            </div>
            <div className="col-sm-8">
               <h2 className="pink ">Introducción</h2>
               <p className="gray justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo debitis, architecto possimus similique sapiente natus hic sunt veritatis quidem fugit totam quis voluptatum repudiandae magni deserunt porro asperiores nesciunt.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo debitis, architecto possimus similique sapiente natus hic sunt veritatis quidem fugit totam quis voluptatum repudiandae magni deserunt porro asperiores nesciunt.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo debitis, architecto possimus similique sapiente natus hic sunt veritatis quidem fugit totam quis voluptatum repudiandae magni deserunt porro asperiores nesciunt.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo debitis, architecto possimus similique sapiente natus hic sunt veritatis quidem fugit totam quis voluptatum repudiandae magni deserunt porro asperiores nesciunt.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo debitis, architecto possimus similique sapiente natus hic sunt veritatis quidem fugit totam quis voluptatum repudiandae magni deserunt porro asperiores nesciunt.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo debitis, architecto possimus similique sapiente natus hic sunt veritatis quidem fugit totam quis voluptatum repudiandae magni deserunt porro asperiores nesciunt.
               </p>
            </div>
         </div>
         <div className="row">
            <Link to={`${path}/maternidad-segura`} className="btn btn-green btn-big white mt-4 mb-4 btn-center">EMPEZAR</Link>
         </div>
      </>
   )
}
