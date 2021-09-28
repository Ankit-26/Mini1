document.getElementById("SignUp-button").addEventListener("click",() =>
{   
    let name =  String(document.getElementById("user-name").value);
    let email = String(document.getElementById("email").value);
    let password = String(document.getElementById("pwd2").value);

    
    if(name==="" || email==="" || password==="")
    {
        alert("Please fill the empty fields.")
    }
    else
    {
        const obj = {"Name":name,"Email Id":email,"Password":password};

        localStorage.setItem(email,JSON.stringify(obj));
    }
    
} );

document.getElementById("login-btn").addEventListener("click",() =>
{   

    let logid = String(document.getElementById("login-id").value);
    let pwd = String(document.getElementById("pwd").value);
    let user =  JSON.parse(localStorage.getItem(logid));
    
    if(user!=null)
    {  
        if(pwd==user["Password"])
        {
            
            location.assign('file:///home/ankit/projects/Login%20Authentication/userhome.html')

            
            
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