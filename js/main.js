// scripts.js

// Smooth scrolling para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



//Função do botão MENU
const btnMenu = document.querySelector('.btn_menu');
const menu = document.querySelector('header nav');

btnMenu.addEventListener('click', function () {
  let elementValue = btnMenu.textContent;
  if (elementValue == 'MENU') {

    menu.classList.add('menu_active');
    btnMenu.textContent = 'X';

  } else {
    
    menu.classList.remove('menu_active');
    btnMenu.textContent = 'MENU';

  }
})

//Formulário de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
  });

  const whatsappButton = document.querySelector('.enviarWhatsApp');
  whatsappButton.addEventListener('click', function() {
    sendWhatsApp();
  });

  function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Contato de ${name}`;
    const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;

    window.location.href = `mailto:emawalunga11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Nome: ${name}\n\nMensagem:\n${message}`;
    const phoneNumber = '939671208';

    window.open(`https://wa.me/244${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  }
});

//O blendOver (O Curso ainda não está disponível)
const blendOver = document.querySelector('.blendOver');
let cont = 0;
//Botão alertando estado do curso
const btn_inscript = document.querySelector('.btn_inscript');
btn_inscript.addEventListener('click', function(){
  if (cont == 0) {
    blendOver.classList.add('blendOver_active');
    cont = 1;
  } else {
    blendOver.classList.remove('blendOver_active');
    cont = 0;
  }
})
