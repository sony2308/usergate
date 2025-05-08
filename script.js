document.getElementById('reg').addEventListener('submit',function(e)
   {
    e.preventDefault();

    let valid = true;
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phnum = document.getElementById('phnum').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmpassword').value.trim();
    const address = document.getElementById('address').value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    
    if( firstName === '' &&
        lastName === '' &&
        email === '' &&
        phnum === '' &&
        password === '' &&
        confirmPassword === '' &&
        address === '' &&
        !genderSelected )
      {
        alert('Please fill in all required details.');
        return;
       }

   
    if(firstName === '') 
        {
        alert('First name is required.');
        return;
        }
    if(firstName.length < 5)
       {
        alert('First name must be at least 5 characters.');
        return;
       }

   
    if(lastName === '')
     {
        alert('Last name is required.');
        return;
     }
    if(lastName.length < 5)
      {
        alert('Last name must be at least 5 characters.');
        return;
      }
    
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
   if(email === '' || !email.includes('@')) 
      {
        alert('Email must contain "@" character.');
        return;
      }
    if(!emailPattern.test(email))
      {
        alert('Valid email is required.');
        return;
      }

    if(!/^\d{10}$/.test(phnum))
      {
        alert('Enter a valid 10-digit mobile number.');
        return;
      }
    if(phnum === '1234567890')
      {
        alert('Phone number cannot be 1234567890.');
        return;
      }

    if(password.length < 8)
      {
        alert('Password must be at least 8 characters.');
        return;
      }
    if(password.toLowerCase() === 'password') 
       {
        alert('Password cannot be "password".');
        return;
       }
    if(password.toLowerCase() === firstName.toLowerCase() ||password.toLowerCase() === lastName.toLowerCase())
       {
        alert('Password cannot be the same as your name.');
        return;
       }

    if(confirmPassword !== password)
      {
        alert('Passwords do not match.');
        return;
      }

     if(!genderSelected) 
        {
        alert('Please select gender.');
        return;
       }

      if(address === '') 
       {
        alert('Address is required.');
        return;
        }

   
    alert('Form submitted successfully!');
    document.getElementById('reg').reset();
   }
);
