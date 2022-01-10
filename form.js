function submitData(){

    let nama  = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value


    console.log(nama);
    console.log(email);``
    console.log(phone);
    console.log(subject);
    console.log(message);



    if (document.getElementById('html').checked & document.getElementById('css').checked ){        
        console.log(document.getElementById('html').value + document.getElementById('css').value);
    
    } else if (document.getElementById('html').checked){
        console.log(document.getElementById('html').value)

    } else if (document.getElementById('css').checked){
        console.log(document.getElementById('css').value)
    }


    if ( nama ==''){
        alert("nama harus diisi")
    } else if ( email ==''){
        alert("email harus diisi")
    } else if( phone ==''){
        alert("phone harus diisi")
    } else if( subject ==''){
        alert("subject harus di pilih")
    }else if( message ==''){
        alert("pesan harus di isi")
    }

    // if ( nama =='' || email=='' || phone=='' || subject=='' || message==''){
    //     alert ("semua isi")
    // }

    
    let emailreceiver = 'rmsholeh76@gmail.com'

    let a = document.createElement('a')

    a.href = `mailto:${emailreceiver}?subject=${subject}&body=${nama} ${message}`




// menampung data berbentuk object
    let dataObject = {
        namaBelakang: nama,
        email: email,
        phone: phone,
        subject: subject,
        message: message 
    }

    console.log(dataObject);





    }