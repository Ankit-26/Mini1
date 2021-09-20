document.getElementById("login-btn").addEventListener("click",() =>
{   
    const dict = {"Ankit Sharma":"Gon@2698","Newton School":"Newton@2698"};

    let logid = document.getElementById("login-id").value;
    let pwd = document.getElementById("pwd").value;

    if(String(logid) in dict)
    {
        if(pwd==dict[logid])
        {
            alert("Welcome to your Account");
        }
        else
        {
            alert("Incorrect User Id or Password");
        }
    }
    else
    {
        alert("Incorrect User Id or Password");
    }
    
} );