const searchCloseBtn = document.querySelector(".s-close");
// logic for searchBar
const searchBox = document.getElementById("search-items");
const spro = document.querySelector(".s-pro");


// console.log(items)
searchBox.addEventListener('keyup', e => {
    const currentValue = e.target.value.toLowerCase();
    const books = document.querySelectorAll('h2.title');

    books.forEach(book => {
        if (book.textContent.toLowerCase().includes(currentValue)) {
            book.parentNode.style.display = "block";
        } else {
            book.parentNode.style.display = "none";
        }
    })
});

// logic for hamburger menu

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-list");
let flag = false;
burger.addEventListener('click', () => {

    if (!flag) {
        navMenu.classList.add('open');
        flag = true;
    } else {
        navMenu.classList.remove('open');
        flag = false;
    }

});


// logic for Contact modal window

const modalWindow = document.getElementById('modal-window');
const aboutModal = document.getElementById('About-Modal');
const privacyWindow = document.getElementById('Privacy');

const contact = document.getElementById('ContactOpen');
const about = document.getElementById('AboutOpen');
const privacy = document.getElementById('PrivacyModal')
const close = document.getElementsByClassName('s-close');
const closeAbout = document.querySelector('img.a-close');
const closePrivacy = document.querySelector('button.pClose');
const q = document.getElementById('q');

q.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    searchCloseBtn.style.display = "block";

})
contact.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    searchCloseBtn.style.display = "block";
    navMenu.classList.remove('open');
})

about.addEventListener('click', () => {
    aboutModal.style.display = 'flex';
    closeAbout.style.display = "block";
    navMenu.classList.remove('open');
})

closeAbout.addEventListener('click', () => {
    aboutModal.style.display = 'none';
    closeAbout.style.display = "none";
})

privacy.addEventListener('click', () => {
    privacyWindow.style.display = 'flex';
})


closePrivacy.addEventListener('click', () => {
    privacyWindow.style.display = 'none';
})


searchCloseBtn.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    searchCloseBtn.style.display = "none";
})

// logic for filter
const list = document.querySelectorAll('.filter');
const itemBox = document.querySelectorAll('.items');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-items') === dataFilter || dataFilter === 'All')
                itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    });
}

const input = document.querySelector('input.cpy')
const copyBtn = document.querySelector('button.btn-copy')

copyBtn.addEventListener('click', () => {
    const text = input.value;
    input.select();
    navigator.clipboard.writeText(text);

    input.value = "Copied!"
    setTimeout(() => input.value = text, 2000);

})

const send = document.querySelector('input.send');
function SendMail() {
    const params = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email_id: document.getElementById('email_id').value,
        mob: document.getElementById('mob').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_j9ko9zz', 'template_uu6abnw', params)
        .then(function () {
            const sendSuccess = send.value;
            send.value = "successful"
            setTimeout(() => {
                send.value = sendSuccess
            }, 2000);

        }, function () {

            const errorMessage = send.value;
            send.value = "Error!"
            setTimeout(() => {
                send.value = errorMessage
            }, 2000);
        });
}