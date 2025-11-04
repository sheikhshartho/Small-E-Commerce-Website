const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu__show");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu__show");
});

const loginSection = document.querySelector(".login__container");
const fromSectin = document.querySelector(".from");
const forgetPass = document.getElementById("forget__pass");
const login = document.getElementById("log");

forgetPass.addEventListener("click", () => {
  loginSection.style.display = "none";
  fromSectin.style.display = "flex";
  displayCard.style.display = "none";
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  fromSectin.style.display = "none";
  loginSection.style.display = "flex";
  aboutSectin.style.display = "none";
  displayCard.style.display = "none";
});

const contact = document.getElementById("content__container");
const home = document.getElementById("home__container");
const aboutSectin = document.getElementById("about__container");
const signUp = document.getElementById("login__and__signup");
const contactMenuBtn = document.querySelectorAll(
  ".contact__menu, .mobile__contact__menu"
);
const aboutBtn = document.querySelectorAll(
  ".about__menu, .mobile__about__menu"
);
const signUpMenuBtn = document.querySelectorAll(
  ".sign__up__menu, .mobile__sign__up__menu"
);
const homeMenuBtn = document.querySelectorAll(
  ".mobile__home__menu, .home__menu"
);

contactMenuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    contact.style.display = "grid";
    signUp.style.display = "none";
    aboutSectin.style.display = "none";
    home.style.display = "none";
    displayCard.style.display = "none";
  });
});

signUpMenuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    signUp.style.display = "grid";
    contact.style.display = "none";
    aboutSectin.style.display = "none";
    home.style.display = "none";
    displayCard.style.display = "none";
  });
});

aboutBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    contact.style.display = "none";
    signUp.style.display = "none";
    aboutSectin.style.display = "block";
    home.style.display = "none";
    displayCard.style.display = "none";
  });
});
homeMenuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    contact.style.display = "none";
    signUp.style.display = "none";
    aboutSectin.style.display = "none";
    home.style.display = "block";
    displayCard.style.display = "none";
  });
});

const slides = document.querySelectorAll(".images img");
let index = 0;

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("active__slice__img"));
  slides[index].classList.add("active__slice__img");
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 1500);

const counterOne = document.querySelector(".counter__one");
const counterTwo = document.querySelector(".counter__two");
const counterThree = document.querySelector(".counter__three");
const counterFour = document.querySelector(".counter__four");

let counter1 = 0.5;
let intervalOne = setInterval(() => {
  counter1++;
  counterOne.innerText = counter1 + "K";

  if (counter1 === 10.5) {
    clearInterval(intervalOne);
  }
}, 50);

let counter2 = 0;
let intervalTwo = setInterval(() => {
  counter2++;
  counterTwo.innerText = counter2 + "K";
  if (counter2 === 33) {
    clearInterval(intervalTwo);
  }
}, 50);

let counter3 = 0.5;
let intervalThree = setInterval(() => {
  counter3++;
  counterThree.innerText = counter3 + "K";
  if (counter3 === 45.5) {
    clearInterval(intervalThree);
  }
}, 50);

let counter4 = 1;
let intervalFour = setInterval(() => {
  counter4++;
  counterFour.innerText = counter4 + "K";
  if (counter4 === 22) {
    clearInterval(intervalFour);
  }
}, 50);

const userLoad = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=15");
    const data = await res.json();
    displayUser(data.results);
  } catch (error) {
    console.log(error);
  }
};

const displayUser = async (users) => {
  const userContainer = document.querySelector(".user__card__container");
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user__card");
    userCard.innerHTML = `
        <div class="user__cards">
        <div class="card__img">
          <img src="${user.picture.large}" alt="">
        </div>
        <div class="user__info">
          <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
          <p>${user.email} </p>
          <div class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
          </div>
        </div>
      </div>
    `;
    userContainer.append(userCard);
  });
};
userLoad();

const userContainer = document.querySelector(".user__card__container");

let isDragging = false;
let startX, startScrollLeft;
let autoSlide;
let scrollSpeed = 0.8;

userContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = userContainer.scrollLeft;
  cancelAnimationFrame(autoSlide);
});

userContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX;
  const walk = x - startX;
  userContainer.scrollLeft = startScrollLeft - walk;
});

userContainer.addEventListener("mouseup", () => {
  isDragging = false;
  smoothAutoSlide();
});

userContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});

function smoothAutoSlide() {
  function animate() {
    userContainer.scrollLeft += scrollSpeed;
    if (
      userContainer.scrollLeft + userContainer.clientWidth >=
      userContainer.scrollWidth
    ) {
      userContainer.scrollLeft = 0;
    }
    autoSlide = requestAnimationFrame(animate);
  }
  autoSlide = requestAnimationFrame(animate);
}

userContainer.addEventListener("mouseenter", () => {
  cancelAnimationFrame(autoSlide);
});

userContainer.addEventListener("mouseleave", () => {
  smoothAutoSlide();
});

smoothAutoSlide();

const slideItem = document.querySelectorAll(".item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;

setInterval(() => {
  counter++;
  if (counter >= slideItem.length) {
    counter = 0;
  }

  slideImages();
}, 5000);

slideItem.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slideItem.length - 1;
  }
  slideImages();
});

next.addEventListener("click", () => {
  counter++;
  if (counter >= slideItem.length) {
    counter = 0;
  }
  slideImages();
});

const slideImages = () => {
  slideItem.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    clearInterval(interval);
    return;
  }

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / (1000 * 60)) % 60);
  const s = Math.floor((difference / 1000) % 60);

  daysEl.textContent = d.toString().padStart(2, "0");
  hoursEl.textContent = h.toString().padStart(2, "0");
  minutesEl.textContent = m.toString().padStart(2, "0");
  secondsEl.textContent = s.toString().padStart(2, "0");
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

const viewMoreOne = document.querySelector(".f__view__more__btn");
const errorSection = document.getElementById("error__container");
const backButton = document.querySelector(".back__btn");
const homeContainer = document.getElementById("home__container");

viewMoreOne.addEventListener("click", () => {
  homeContainer.style.display = "none";
  errorSection.style.display = "flex";
});
backButton.addEventListener("click", () => {
  errorSection.style.display = "none";
  homeContainer.style.display = "block";
});

const addToCardBtn = document.querySelectorAll(".add__to__card");
const addCardContainer = document.querySelector(".load__card__container");
const cardCounter = document.querySelector(".card__counter");
let count = 1;

addToCardBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    cardCounter.innerText = count++;
    if (cardCounter.innerText >= 0) {
      cardCounter.style.display = "flex";
    }

    const card = btn.closest(".cards");
    const imgSrc = card.querySelector(".cards__img img").src;
    const name = card.querySelector(".cards__info h4").innerText;
    const priceText = card
      .querySelector(".cards__info p")
      .childNodes[0].textContent.trim();
    const basePrice = parseFloat(priceText.replace(/[^0-9.]/g, ""));

    const cardItems = document.createElement("div");
    cardItems.classList.add("selected__cards");
    cardItems.innerHTML = `
      <div class="product__info">
        <div class="img__card">
          <img src="${imgSrc}" alt="">
          <span class="remove__btn">✕</span>
        </div>
        <p>${name}</p>
      </div>

      <p class="price">$${basePrice}</p>

      <div class="quantity">
        <input type="number" min="1" value="1">
      </div>

      <p class="subtotal">$${basePrice}</p>
    `;

    addCardContainer.append(cardItems);

    const qtyInput = cardItems.querySelector("input");
    const subtotal = cardItems.querySelector(".subtotal");
    const amount = document.querySelector(".amount");
    const amount2 = document.querySelector(".amount2");

    function updateGrandTotal() {
      let grandTotal = 0;
      document.querySelectorAll(".subtotal").forEach((item) => {
        grandTotal += parseFloat(item.innerText.replace("$", "")) || 0;
      });
      amount.innerText = `$${grandTotal.toFixed(2)}`;
      amount2.innerText = `$${grandTotal.toFixed(2)}`;
    }

    qtyInput.addEventListener("input", () => {
      const qty = parseInt(qtyInput.value) || 1;
      const total = qty * basePrice;
      subtotal.innerText = `$${total.toFixed(2)}`;
      updateGrandTotal();
    });

    const removeBtn = cardItems.querySelector(".remove__btn");
    removeBtn.addEventListener("click", () => {
      cardItems.remove();
      count--;
      if (count <= 1) {
        cardCounter.style.display = "none";
        count = 1;
      }
      cardCounter.innerText = count - 1;
      updateGrandTotal();
    });

    updateGrandTotal();
  });
});

const cardBtn = document.querySelector(".nav__card__icon");
const displayCard = document.getElementById("display__card");
const returnToShop = document.querySelector(".return__to__shop");

cardBtn.addEventListener("click", () => {
  home.style.display = "none";
  displayCard.style.display = "block";
});
returnToShop.addEventListener("click", () => {
  displayCard.style.display = "none";
  home.style.display = "block";
});
