function toggleBankSelect() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const bankName = document.getElementById('bankName');
    bankName.style.display = paymentMethod === "Transfer Bank" ? "block" : "none";
}

function sendWhatsApp() {
    const fullName = document.getElementById('fullName').value;
    const instagram = document.getElementById('instagram').value;
    const photographyDate = document.getElementById('photographyDate').value;
    const location = document.getElementById('location').value;
    const package = document.getElementById('package').value;
    const deposit = document.getElementById('deposit').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const bankName = document.getElementById('bankName').value;

    const message = `*Pemesanan Fotografer Wisuda*\n\n` +
                    `Nama Lengkap: ${fullName}\n` +
                    `Nama Instagram: ${instagram}\n` +
                    `Tanggal Pemotretan: ${photographyDate}\n` +
                    `Lokasi Pemotretan: ${location}\n` +
                    `Paket Pemotretan: ${package}\n` +
                    `DP Awal: Rp ${deposit}\n` +
                    `Metode Pembayaran: ${paymentMethod}` + 
                    (paymentMethod === "Transfer Bank" ? `\nNama Bank: ${bankName}` : '');

    const whatsappUrl = `https://api.whatsapp.com/send?phone=62895324122542&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    document.getElementById('orderForm').reset();
    document.getElementById('bankName').style.display = "none";
}