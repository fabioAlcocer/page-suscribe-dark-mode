const form = document.querySelector('.main__form')
const email = document.getElementById('email');
const labelError = document.querySelector('.label__error')
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

email.value = ''

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailRegex.test(email.value)) {
    email.value = ""
    email.style.border = '1px solid var(--pale-blue)'
    email.style.outline = 'none'
    labelError.classList.add('d-none')
  } else {
    email.style.outline = '2px solid var(--light-red)'
    email.style.border = 'none'
    labelError.classList.remove('d-none')
    
  }
})
