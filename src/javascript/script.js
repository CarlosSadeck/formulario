const passwordIcons = document.querySelectorAll('.password-icon');

let controledeolho = false

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function (){
        if(controledeolho == false ){
            const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
        controledeolho = true
        }
        else {
            const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
        controledeolho=false
        }
    })
})




