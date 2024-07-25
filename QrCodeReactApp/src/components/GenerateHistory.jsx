import { QRCodeCanvas } from "qrcode.react";
import { GENERATE_DATA } from "../constants"
const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
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
export default GenerateHistory;