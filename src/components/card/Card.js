import React from 'react';
import './Card.css';
import { Button, QRCode } from 'antd';
import { Typography } from '@mui/material';

const Card = ({ imageSrc, title, description, text, cat, phone }) => {

    // function doDownload(url, fileName) {
    //     const a = document.createElement('a');
    //     a.download = fileName;
    //     a.href = url;
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //   }
      
    // const downloadCanvasQRCode = () => {
    //     // const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
    //     // if (canvas) {
    //     //   const url = canvas.toDataURL();
    //     //   doDownload(url, 'QRCode.png');
    //     // }
    //       doDownload(text, 'QRCode.png');
    //   };
    return (
        <div className="card">
        <div className="card-image">
            <img src={imageSrc} alt={title} />
        </div>
        <div className="card-content">
            <h2>{title}</h2>
            <Typography>{cat}</Typography>
            <Typography>+{phone}</Typography>
            <Typography>{description}</Typography>
        </div>

        {/* <div className="card-right">
            <QRCode value={text || 'No link'}  />
        </div> */}

        </div>
    );
};

export default Card;