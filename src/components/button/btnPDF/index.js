import React, { useRef } from "react";
import "./btnPDF.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { FaRegFilePdf } from "react-icons/fa6";
import CardContent from "../../cards";
import { useReactToPrint } from "react-to-print";

function BtnPDF() {
    const contentCard = useRef();
    const handlePrint = useReactToPrint({
        content: () => contentCard.current,
    })
    return (
        <>
            <FaRegFilePdf className="icon-pdf" onClick={handlePrint}/>
            <div ref={contentCard} className="content-hidden">
                <CardContent />
            </div>
        </>
    );
}

export default BtnPDF;
