import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css'
import { SCAN_DATA } from "../../constants"

const QrCodeScanner = () => {
    const [link, setLink] = useState(null)

    const scanHandler = (result) => {
        setLink(result[0].rawValue);
        const prevItem = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevItem, result[0].rawValue]));
    };
    return (
        <div className={s.container}>
            <Scanner
                onScan={scanHandler}
                components={{ audio: false, finder: false, }}
                styles={{ container: { width: 300 } }}
            />
            <p className={s.result}>{link}</p>
        </div>
    );
};
export default QrCodeScanner;