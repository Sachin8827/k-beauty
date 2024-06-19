import "../assets/styles/Invoice.css";
import jsPDF from "jspdf";
import { useRef } from "react";
import { usePDF } from 'react-to-pdf';
import GenerateInvoice from "../components/GenerateInvoice";
function Invoice({ user }) {
    const reportTemplateRef = useRef(null);

    const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		// doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};
    return (
        <section className="invoice">
            <div className="invoice-box" >
                <GenerateInvoice user={user} />
            </div>
            <div className="dummy-invoice" ref={reportTemplateRef}>
                <GenerateInvoice user={user} />
            </div>
            <div className="downloadpdf" >
                <button onClick={handleGeneratePdf}>Download PDF</button>
            </div>
        </section>
    );
}

export default Invoice;
