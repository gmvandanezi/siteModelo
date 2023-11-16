import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './style.css'

const Forms = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id='forms'>
      <Helmet>
        <script type="text/javascript" async defer src="https://webforms.pipedrive.com/f/loader"></script>
      </Helmet>

      <div className='banner'></div>
      <div className="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FrWNX5ZaBPjgY3CP5ug63MbXRfjbB9He5Gf5P3tPF8Eswyvsbp2VgddXsrdQiZcMH"></div>
    </div>
    
  );
}

export default Forms