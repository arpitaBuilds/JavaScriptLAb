function reverseString(str)
{
    return str.split("").reverse().join("");
}

function message()
{
    var msg = "Palindrome Checker";

    function display()
    {
        return msg;
    }

    return display;
}

function checkPalindrome()
{
    try
    {
        var word = document.getElementById("word").value;

        if(!/^[A-Za-z]+$/.test(word))
        {
            throw "Only alphabets are allowed";
        }

        if(word.length < 3)
        {
            throw "Please enter at least 3 characters";
        }

        if(word.length > 20)
        {
            throw "Maximum 20 characters are allowed";
        }

        let input = word.toLowerCase();
        var reverse = reverseString(input);

       if(input === reverse)
{
    document.write("<h2>" + message()() + "</h2>");
    document.write("<hr>");
    document.write("<b>Word :</b> " + word + "<br><br>");
    document.write("<b>Result :</b> <span style='color:green;'>Palindrome ✅</span>");
}
else
{
    document.write("<h2>" + message()() + "</h2>");
    document.write("<hr>");
    document.write("<b>Word :</b> " + word + "<br><br>");
    document.write("<b>Result :</b> <span style='color:red;'>Not a Palindrome ❌</span>");
}

        var show = message();
        console.log(show());
    }
    catch(error)
    {
        alert(error);
    }
}