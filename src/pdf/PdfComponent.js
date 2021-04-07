import React from 'react'

export const PdfComponent = ({source}) => {
   return (
      <div className="pdf-container">
         <iframe src={source} frameBorder="0" title="h"></iframe>
      </div>
   )
}
