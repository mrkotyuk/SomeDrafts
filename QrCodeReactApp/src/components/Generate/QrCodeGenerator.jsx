import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import s from './qrCodeGenerator.module.css';
import { GENERATE_DATA } from "../../constants"

const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {

        setResult(value);
        const prevItem = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevItem, value]));
        setValue('');
    };
    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };
    return (
        <div className={s.container}>
            <input
                type="text"
                value={value}
                placeholder="Введіть текст"
                onChange={onChangeHandler}
                className={s.input}
            />
            <button type="button" onClick={onClickHandler} className={s.button}>
                Згенерувати QR
            </button>
            {result !== '' && (

                <div className={s.qrWrapper}>
                    <QRCodeCanvas value={result} size={256} />
                </div>

            )}
        </div >
    );
};
export default QrCodeGenerator;