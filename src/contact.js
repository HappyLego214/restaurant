export {buildContact};

function buildContact() {
    createContactContainer();
    createMainContainers();
    createContactBox();
    contactForm();
    createBanner();
}

function createContactContainer() {
    const contactCont = document.createElement("div");
    contactCont.classList = "contact-container";
    content.append(contactCont);
}

function createMainContainers() {
    const left = document.createElement("div");
    left.classList = "contact-left";
    content.firstElementChild.append(left);

    const right = document.createElement("div");
    right.classList = "contact-right";
    content.firstElementChild.append(right);
}

function createBanner() {
    const banner = document.createElement("div");
    banner.classList = "contact-banner";
    content.firstElementChild.firstElementChild.append(banner);
}

function createContactBox() {
    const contactBox = document.createElement("div");
    contactBox.classList = "contact-box";
    content.firstElementChild.lastElementChild.append(contactBox);

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us!"
    contactBox.append(contactTitle);
}

function setAttributes(element, attributes) {
    for(var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function contactForm() {
    const targetElement = document.querySelector('.contact-box')

    const contactForm = document.createElement("form");
    contactForm.setAttribute("id", "contact-form");
    targetElement.append(contactForm);

    const nameDiv = document.createElement("div");
    nameDiv.classList = "contact-name-container"
    contactForm.append(nameDiv);

    const firstNameCont = document.createElement("div");
    nameDiv.append(firstNameCont);

    const lastNameCont = document.createElement("div");
    nameDiv.append(lastNameCont);
    
    const fnameLabel = document.createElement("label");
    const fnameInput = document.createElement("input");
    fnameLabel.setAttribute("for", "fname");
    fnameLabel.textContent = "First Name"
    setAttributes(fnameInput, {"id": "contact-fname", "type": "text", "name": "fname", })

    firstNameCont.append(fnameLabel);
    firstNameCont.append(fnameInput);

    const lnameLabel = document.createElement("label");
    const lnameInput = document.createElement("input");
    lnameLabel.setAttribute("for", "lname");
    lnameLabel.textContent = "Last Name";
    setAttributes(lnameInput, {"id": "contact-lname", "type": "text", "name": "lname", })

    lastNameCont.append(lnameLabel);
    lastNameCont.append(lnameInput);

    const emailDiv = document.createElement("div");
    emailDiv.classList = "contact-email-container"
    contactForm.append(emailDiv);

    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email"
    setAttributes(emailInput, {"id": "contact-email", "type": "email", "name": "email", })

    emailDiv.append(emailLabel);
    emailDiv.append(emailInput);

    const msgDiv = document.createElement("div");
    msgDiv.classList = "contact-msg-container"
    contactForm.append(msgDiv);

    const msgLabel = document.createElement("label");
    const msgInput = document.createElement("textarea");
    msgLabel.setAttribute("for", "msg");
    msgLabel.textContent = "What can we help you with?"
    setAttributes(msgInput, {"id": "contact-msg", "type": "", "name": "msg", "rows": "6", "col": "40"})

    msgDiv.append(msgLabel);
    msgDiv.append(msgInput);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    setAttributes(submitBtn, {"id": "contact-submit", "form": "contact-form", "value": "submit"})
    contactForm.append(submitBtn);
}