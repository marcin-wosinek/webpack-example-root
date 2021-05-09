const element = document.getElementById("core");

element.innerHTML = "✓ Core module is loaded correclty";

const pdfButton = document.getElementById("pdf-button");

import(/* webpackChunkName: "pdf-lib" */ "pdf-lib").then(({ PDFDocument }) => {
  document.getElementById("pdf-lib").innerHTML =
    "✓ pdf-lib is loaded correclty";

  pdfButton.addEventListener("click", async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([350, 400]);
    page.moveTo(110, 200);
    page.drawText("Hello World!");
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    document.getElementById("pdf").src = pdfDataUri;
  });
});
