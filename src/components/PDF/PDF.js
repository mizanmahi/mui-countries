import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print'

const PDF = () => {
   const componentRef = useRef(null);
   const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'My Sweet Document',
    onAfterPrint: () => alert('Printed!')
   })
   return (
     <>
      <div ref={componentRef}>
         <h2 style={{ textAlign: 'center' }}>My Sweet Content</h2>
      </div>
      <button onClick={handlePrint}>Print</button>
     </>
   );
};

export default PDF;
