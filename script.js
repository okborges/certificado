document.querySelector('input[id="titulo"]').value = 'CERTIFICADO DE BOM GAROTO';
document.querySelector('input[id="nome"]').value = '';
document.querySelector('textarea[id="mensagem"]').value = '';
document.querySelector('input[id="tutor"]').value = 'rafael';
document.querySelector('input[id="data"]').value = '28/03/2022';

function shot(params) {
  modernScreenshot.domToPng(document.querySelector('main')).then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = dataUrl;
    link.click();
  });
}
