class DocumentPage {
    documentHeading(headingText) {
        return `//div[contains(@class, 'text-block')]//h3[contains(., '${headingText}')]`;
    }

    viewDocumentBtn(viewDoc) {
        return `//button[contains(@class, 'btn-link') and contains(text(), '${viewDoc}')]`;
    }

    identificationDocumentExample(Viewheading) {
        return `//h1[@id='heading1_docEx' and text()='${Viewheading}']`;
    }

    howToUploadDocumentText(Steps) {
        return `(//p[text()='${Steps}'])[1]`;
      }
}

module.exports = DocumentPage;