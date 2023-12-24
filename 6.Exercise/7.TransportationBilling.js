
const addAmt = () => {

    var Value1 = Number(document.getElementById("Fright_inp").value);

    var Value2 = Number(document.getElementById("DDC_inp").value);

    var Value3 = Number(document.getElementById("LrChar_inp").value);

    var Value4 = Number(document.getElementById("HmChar_inp").value);

    var Value5 = Number(document.getElementById("OtherChar_inp").value);

    var sum = Value1 + Value2 + Value3 + Value4 + Value5;

    document.getElementById("SubTotal_inp").value = sum;

    var Ig = Number(document.getElementById("IGST_inp").value);

    var Cg = Number(document.getElementById("CGST_inp").value);

    var Sg = Number(document.getElementById("SGST_inp").value);

    var Tax = Ig + Cg + Sg;

    var Gst = (sum / 100) * Tax;

    document.getElementById("GST_inp").value = Gst;

    var Total = sum + Gst;

    document.getElementById("Total_inp").value = Total;

}



