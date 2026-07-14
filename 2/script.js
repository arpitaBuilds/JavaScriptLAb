function calculateBills() {
    var customerName = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    const GST = 0.18;
    var subtotal = price * quantity;
    var gstAmount = subtotal * GST;
    var total = subtotal + gstAmount;
    const bill = {
        customerName,
        product,
        price,
        quantity,
        subtotal,
        gstAmount,
        total
    };
    const {
        customerName: cname,
        product: pname,
        price: p,
        quantity: q,
        subtotal: sub,
        gstAmount: gst,
        total: amount
    } = bill;
    document.getElementById("result").innerHTML = `
        <h3>Bill Receipt</h3>
        <p><b>Customer Name:</b> ${cname}</p>
        <p><b>Product Name:</b> ${pname}</p>
        <p><b>Price:</b> ₹${p}</p>
        <p><b>Quantity:</b> ${q}</p>
        <p><b>Subtotal:</b> ₹${sub.toFixed(2)}</p>
        <p><b>GST (18%):</b> ₹${gst.toFixed(2)}</p>
        <h3>Total Amount: ₹${amount.toFixed(2)}</h3>
    `;
    console.log(`Customer: $(cname)`);
    console.log(`Product : $(pname)`);
}