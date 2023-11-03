const validation = () =>{
    const forms = document.querySelector('.needs-validation');
    
        forms.addEventListener('submit', function (event) {
          if (!forms.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          forms.classList.add('was-validated')
        }, false)
}
validation();