$(document).ready(function() {
    $('#generateBtn').click(function() {
        var url = $('#urlInput').val();
        if (url !== "") {
            $('#qrCodeOutput').html('<p>Gerando QR Code...</p>');
            QRCode.toDataURL(url, function(err, urlData) {
                if (err) {
                    alert('Erro ao gerar QR Code');
                } else {
                    $('#qrCodeOutput').html('<img src="' + urlData + '" alt="QR Code">');
                    $('#downloadBtn').show().click(function() {
                        var link = document.createElement('a');
                        link.href = urlData;
                        link.download = 'qr-code.png';
                        link.click();
                    });
                }
            });
        } else {
            alert("Por favor, insira um link.");
        }
    });
});
