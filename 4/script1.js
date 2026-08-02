function message()
{
    var msg="Vehicle Registration Checker";

    function display()
    {
        return msg;
    }

    return display;
}

function checkVehicle()
{
    try
    {
        var reg=document.getElementById("regno").value;

        if(reg=="")
        {
            throw "Registration Number cannot be empty";
        }

        if(reg.length!=10)
        {
            throw "Registration Number must be exactly 10 characters";
        }

        if(!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(reg))
        {
            throw "Invalid Registration Number";
        }

        document.write(`
        <html>
        <head>
        <title>Result</title>

        <style>

        body{
            margin:0;
            font-family:Arial;
            background:linear-gradient(135deg,#1b1b2f,#162447);
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .box{
            width:450px;
            background:white;
            padding:30px;
            border-radius:15px;
            text-align:center;
            box-shadow:0 0 20px orange;
        }

        h2{
            color:#ff6f00;
        }

        p{
            font-size:18px;
        }

        .valid{
            color:green;
            font-weight:bold;
            font-size:20px;
        }

        button{
            margin-top:20px;
            padding:10px 20px;
            background:#ff9800;
            color:white;
            border:none;
            border-radius:8px;
            cursor:pointer;
        }

        button:hover{
            background:#e65100;
        }

        </style>

        </head>

        <body>

        <div class="box">

        <h2>${message()()}</h2>

        <hr>

        <p><b>Registration Number :</b> ${reg}</p>

        <p class="valid">✔ Registration Number is Valid</p>

        <button onclick="history.back()">Go Back</button>

        </div>

        </body>
        </html>
        `);
    }
    catch(err)
    {
        alert(err);
    }
}