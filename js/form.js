document.getElementById('onClickEvent').addEventListener('click', function () {
  
    //event.preventDefault();
    grecaptcha.ready(function () {
      grecaptcha.execute('6LfLMHAUAAAAAF_PfRS8SUZiS5iAcHQjVCUP3wvt', { action: 'submit' }).then(function (token) {
        let formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value,
          captcha: token
        };

        // send request
        fetch('https://corelliabefunction.azurewebsites.net/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(function (response) {
            if (!response.ok) {
              throw new Error('Une erreur est survenue. Veuillez réessayer.');
            }
            window.location.href = '../index.html';
            console.log('test');
            // Handle success
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            alert('Form submitted successfully!');
          })
          .catch(function (error) {
            alert(error.message);
          });

      });
    });
  });














