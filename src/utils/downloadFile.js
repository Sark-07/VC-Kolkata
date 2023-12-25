export const downloadPdf = (base64String) => {
    // Convert base64 to Blob
    console.log(base64String);
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    // Trigger download
    saveAs(blob, 'file.pdf');
  };