const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', function(event) {
    console.log("addEventListener is running")
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const salary = document.getElementById('salary').value;
    const isMarried = document.querySelector('input[name=maritalStatus]:checked').value;
    const department = document.getElementById('department').value;
    var genderOptions = document.getElementById("gender");
    const gender = genderOptions.value;
    var birthDate = document.getElementById('birtDate').value;
    
    

    console.log(isMarried);
    console.log(department);
    console.log(gender);
    birthDate = birthDate.split("-").reverse().join("/");
    console.log(birthDate)
    fetch('http://127.0.0.1:8081/personel/save', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            surname,
            salary,
            isMarried,
            department,
            gender,
            birthDate
            
            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
            if(!response.ok) {
                throw new Error('Gönderi oluşturma başarısız. Durum kodu:' + response.status);
            }
            return response.json();
    })
    .then((data) => {
        console.log('Oluşturulan gönderi : ', data);
        alert('Gönder başarıyla oluşturuldu.')

        postForm.reset();
    })
}) 