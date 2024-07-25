import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import ScanHistory from "./components/ScanHistory";
import GenerateHistory from "./components/GenerateHistory";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div >
    );
};

export default Layout;