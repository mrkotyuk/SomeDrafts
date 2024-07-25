import { QRCodeCanvas } from "qrcode.react";
import { SCAN_DATA } from "../constants";

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    return (
        <div>
            {data.map((item) => (
                <p key={item}>{item}
                    <QRCodeCanvas value={item} size={256} />
                </p>
            )
            )}
        </div >
    )
};
export default ScanHistory;