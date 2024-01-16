async function fetchPDFData() {
    const response = await fetch('layout_domanda.pdf');
    if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    return await response.arrayBuffer();
}

async function fillPDF() {
    try {
        // Carica i dati del PDF usando la funzione fetchPDFData
        const pdfData = await fetchPDFData();
        console.log(pdfData)

        // Carica il documento PDF con i dati ottenuti
        const pdfDoc = await PDFLib.PDFDocument.load(pdfData);
        const pages = pdfDoc.getPages();

        

        // Raccogli i dati dal form
        const codiceFiscale = document.getElementById("codiceFiscale").value;
        const cognome = document.getElementById("cognome").value;
        const nome = document.getElementById("nome").value;
        const nascita = document.getElementById("data").value;
        const provinciaNa = document.getElementById("provincia_nascita").value;
        const residenza = document.getElementById("residenza").value;
        const provinciaRe = document.getElementById("provincia_residenza").value;
        const indirizzo = document.getElementById("indirizzo").value;
        const numero = document.getElementById("numero").value;
        const cap = document.getElementById("cap").value;
        const telefono = document.getElementById("telefono").value;
        const cellulare = document.getElementById("cellulare").value;
        const email = document.getElementById("email").value;
        const comune = document.getElementById("comune").value;
        const quota = document.getElementById("quota").value;


        // Posizione del testo
        const page = pages[0]; 
        const { width, height } = page.getSize();

        const dpi = 72;
        const widthInPixels = width * (dpi / 72);
        const heightInPixels = height * (dpi / 72);
        // console.log(`Dimensioni della pagina in punti: larghezza ${width}, altezza ${height}`);
        // console.log(`Dimensioni della pagina in pixel (a ${dpi} DPI): larghezza ${widthInPixels}, altezza ${heightInPixels}`);
        page.drawText(codiceFiscale, {
            x: 70,
            y: 763,
            size: 8,
        });
        page.drawText(codiceFiscale, {
            x: 70,
            y: 491,
            size: 8,
        });
        page.drawText(cognome, {
            x: 92, 
            y: 752, 
            size: 8, 
        });
        page.drawText(cognome, {
            x: 92, 
            y: 480, 
            size: 8, 
        });
        page.drawText(nome, {
            x: 300, 
            y: 752, 
            size: 8, 
        });
        page.drawText(nome, {
            x: 300, 
            y: 480, 
            size: 8, 
        });

        //-------------------------
        page.drawText(nascita, {
            x: 64, 
            y: 741, 
            size: 8, 
        });
        page.drawText(nascita, {
            x: 64, 
            y: 469, 
            size: 8, 
        });
        page.drawText(comune, {
            x: 114, 
            y: 731, 
            size: 8, 
        });
        page.drawText(comune, {
            x: 114, 
            y: 459, 
            size: 8, 
        });
        page.drawText(provinciaNa, {
            x: 390, 
            y: 731, 
            size: 8, 
        });
        page.drawText(provinciaNa, {
            x: 390, 
            y: 459, 
            size: 8, 
        });
        page.drawText(residenza, {
            x: 60, 
            y: 719, 
            size: 8, 
        });
        page.drawText(residenza, {
            x: 60, 
            y: 447, 
            size: 8, 
        });
        page.drawText(provinciaRe, {
            x: 390, 
            y: 719, 
            size: 8, 
        });
        page.drawText(provinciaRe, {
            x: 390, 
            y: 447, 
            size: 8, 
        });
        page.drawText(indirizzo, {
            x: 50, 
            y: 708, 
            size: 8, 
        });
        page.drawText(indirizzo, {
            x: 50, 
            y: 436, 
            size: 8, 
        });
        page.drawText(numero, {
            x: 315, 
            y: 708, 
            size: 8, 
        });
        page.drawText(numero, {
            x: 315, 
            y: 436, 
            size: 8, 
        });
        page.drawText(cap, {
            x: 385, 
            y: 708, 
            size: 8, 
        });
        page.drawText(cap, {
            x: 385, 
            y: 436, 
            size: 8, 
        });
        page.drawText(telefono, {
            x: 50, 
            y: 698, 
            size: 8, 
        });
        page.drawText(telefono, {
            x: 50, 
            y: 426, 
            size: 8, 
        });
        page.drawText(cellulare, {
            x: 284, 
            y: 698, 
            size: 8, 
        });
        page.drawText(cellulare, {
            x: 284, 
            y: 426, 
            size: 8, 
        });
        page.drawText(email, {
            x: 40, 
            y: 687, 
            size: 8, 
        });
        page.drawText(email, {
            x: 40, 
            y: 415, 
            size: 8, 
        });
        page.drawText(quota, {
            x: 387, 
            y: 643, 
            size: 8, 
        });
        page.drawText(quota, {
            x: 387, 
            y: 371, 
            size: 8, 
        });

        // Serializza il PDF modificato in un ArrayBuffer
        const modifiedPdfData = await pdfDoc.save();

        // Crea un nuovo Blob con il PDF modificato
        const modifiedPdfBlob = new Blob([modifiedPdfData], { type: "application/pdf" });

        // Crea un URL oggetto per il Blob
        const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);

        // Utilizza modifiedPdfUrl per mostrare il PDF nell'iframe o per il download
        window.open(modifiedPdfUrl);
    } catch (error) {
        console.error('Errore durante la manipolazione del PDF:', error);
    }
}
