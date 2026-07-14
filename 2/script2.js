function calculateBills() {
    var customerName = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let category = document.getElementById("category").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    let discount = Number(document.getElementById("discount").value);
    let coupon = document.getElementById("coupon").value.toUpperCase();
    let payment = document.getElementById("payment").value;
    if(customerName=="" || product=="" || price<=0 || quantity<=0){
        alert("Please Fill All Fields!");
        return;
    }
    const GST = 0.18;
    let couponDiscount = 0;
    if(coupon=="BEAUTY10"){
        couponDiscount=10;
    }
    else if(coupon=="GLOW20"){
        couponDiscount=20;
    }
    var subtotal = price * quantity;
    var discountAmount = subtotal * (discount/100);
    var afterDiscount = subtotal - discountAmount;
    var couponAmount = afterDiscount * (couponDiscount/100);
    var afterCoupon = afterDiscount - couponAmount;
    var gstAmount = afterCoupon * GST;
    var total = afterCoupon + gstAmount;
    let invoice = "INV" + Math.floor(Math.random()*9000+1000);
    let today = new Date().toLocaleDateString();
    const bill = {
        customerName,
        product,
        category,
        price,
        quantity,
        subtotal,
        discount,
        discountAmount,
        coupon,
        couponAmount,
        gstAmount,
        total,
        payment,
        invoice,
        today
    };
    const{
        customerName:cname,
        product:pname,
        category:cat,
        price:p,
        quantity:q,
        subtotal:sub,
        discount:dis,
        discountAmount:damount,
        coupon:cp,
        couponAmount:cpamount,
        gstAmount:gst,
        total:amount,
        payment:pay,
        invoice:inv,
        today:date
    }=bill;
    document.getElementById("result").style.display="block";
    document.getElementById("printBtn").style.display="block";
    document.getElementById("result").innerHTML=`
    <center>
    <h2 style="color:#ff3f86;"> BILLIFY BEAUTY STORE </h2>
    <hr>
    </center>
    <p><b>Invoice No :</b> ${inv}</p>
    <p><b>Date :</b> ${date}</p>
    <p><b>Customer :</b> ${cname}</p>
    <p><b>Product :</b> ${pname}</p>
    <p><b>Category :</b> ${cat}</p>
    <p><b>Price :</b> ₹${p}</p>
    <p><b>Quantity :</b> ${q}</p>
    <hr>
    <p><b>Subtotal :</b> ₹${sub.toFixed(2)}</p>
    <p><b>Discount (${dis}%) :</b> -₹${damount.toFixed(2)}</p>
    <p><b>Coupon (${cp==""?"None":cp}) :</b> -₹${cpamount.toFixed(2)}</p>
    <p><b>GST (18%) :</b> ₹${gst.toFixed(2)}</p>
    <hr>
    <h2 style="color:green;">Total : ₹${amount.toFixed(2)}</h2>
    <p><b>Payment :</b> ${pay}</p>
    <center>
    <h3 style="color:#ff3f86;"> Thank You For Shopping </h3>
    <p>Visit Again </p>
    </center>
    `;
}
function printBill(){
    window.print();
}