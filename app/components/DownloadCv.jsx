import React from 'react'

const handleDownload = () => {
        // Construct the URL to the PDF file in the public folder
        const pdfUrl = '/cv.pdf'; // Adjust the path if necessary
    
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = 'Fahao Wen_Software Development_FT.pdf'; // Specify the file name when downloading
        anchor.target = '_blank';
    
        // Trigger the download
        anchor.click();
      };
 

export default handleDownload