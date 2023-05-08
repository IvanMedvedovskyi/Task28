function showCategories() {
    const container = document.querySelector('.categories');

    for(let i = 0; i < data.length; i++) {
      const element = document.createElement('div');
      element.innerHTML = data[i].name;
      element.setAttribute('data-category', i);
      element.addEventListener('click', showProductHandler);
      container.appendChild(element);
    }
}

function showProductHandler(event) {
    const container = document.querySelector('.products');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const categoryProducts = data[categoryIndex].products;

    for(let i = 0; i < categoryProducts.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = "Model: " + categoryProducts[i].name;
        element.setAttribute('data-category', categoryIndex);
        element.setAttribute('data-product', i);
        element.addEventListener('click', showProductDetailsHandler);
        container.appendChild(element);
    }
}


function showProductDetailsHandler(event){
    const container = document.querySelector('.details');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const productIndex = element.getAttribute('data-product');
    const categoryProducts = data[categoryIndex].products;
    const modelName = categoryProducts[productIndex].name;
    window.modelName = modelName;

    const description = document.createElement('div');
    const priceInfo = document.createElement('div');
    const modelInfo = document.createElement('div')
    description.innerHTML = "Description: " + categoryProducts[productIndex].description;
    priceInfo.innerHTML = "Price: " + categoryProducts[productIndex].price + "$";
    modelInfo.innerHTML =  "Model: " + modelName;
    container.appendChild(modelInfo);
    container.appendChild(description);
    container.appendChild(priceInfo);
    

    const btn = document.createElement('button');
    btn.textContent = 'Купити';
    btn.classList.add("btn_style");
    container.appendChild(btn);

    btn.onclick = showOrderForm;

}


showCategories()

function showOrderForm() {
    const form = document.querySelector('form');
    const send_btn = document.getElementById('send_btn');
    form.classList.remove('form');
    form.classList.add('form_display');
    send_btn.classList.add("btn_style");

    send_btn.onclick = showOrderInformation;
}


function showOrderInformation(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const selectCity = document.querySelector('.city');
    const selectMail = document.querySelector('.mail');
    const selectPay = document.querySelector('.pay');
    const info = form.elements.info.value;
    const city = form.elements.city.value;
    const mail = form.elements.mail.value;
    const pay = form.elements.pay.value;
    const count_of_item = form.elements.count.value;
    const comments = form.elements.commemnts.value;

    if (info === '' || selectCity.value === "Не обрано" || selectMail.value === "Не обрано" || selectPay.value === "Не обрано" || count_of_item === '' || comments === '') {
        alert('Будь-ласка! Заповніть усі поля вводу!')
    } else{
        const paragraph = document.createElement('h1');
        paragraph.textContent = 'Результат замовлення клієнта';

        const div_table = document.createElement('div');
        div_table.classList.add('div_table');
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        div_table.appendChild(paragraph);
        div_table.appendChild(table);
        document.body.appendChild(div_table);

        const firt_row = document.createElement('tr');
        const first_th = document.createElement('th');
        first_th.textContent = "Модель товару: ";
        const firstname_col = document.createElement('td');
        firstname_col.textContent = window.modelName;
        firt_row.appendChild(first_th);
        firt_row.appendChild(firstname_col);
        tbody.appendChild(firt_row);

        const second_row = document.createElement('tr');
        const second_th = document.createElement('th');
        second_th.textContent = "ПІБ: ";
        const secondname_col = document.createElement('td');
        secondname_col.textContent = info;
        second_row.appendChild(second_th);
        second_row.appendChild(secondname_col);
        tbody.appendChild(second_row);

        const third_row = document.createElement('tr');
        const third_th = document.createElement('th');
        third_th.textContent = "Місто прибуття: ";
        const thirdname_col = document.createElement('td');
        thirdname_col.textContent = city;
        third_row.appendChild(third_th);
        third_row.appendChild(thirdname_col);
        tbody.appendChild(third_row);

        const fourth_row = document.createElement('tr');
        const fourth_th = document.createElement('th');
        fourth_th.textContent = "Нова Пошта №: ";
        const fourthname_col = document.createElement('td');
        fourthname_col.textContent = mail;
        fourth_row.appendChild(fourth_th);
        fourth_row.appendChild(fourthname_col);
        tbody.appendChild(fourth_row);

        const fifth_row = document.createElement('tr');
        const fifth_th = document.createElement('th');
        fifth_th.textContent = "Спосіб оплати: ";
        const fifthname_col = document.createElement('td');
        fifthname_col.textContent = pay;
        fifth_row.appendChild(fifth_th);
        fifth_row.appendChild(fifthname_col);
        tbody.appendChild(fifth_row);

        const sixth_row = document.createElement('tr');
        const sixth_th = document.createElement('th');
        sixth_th.textContent = "Кількість товару: ";
        const sixthname_col = document.createElement('td');
        sixthname_col.textContent = count_of_item;
        sixth_row.appendChild(sixth_th);
        sixth_row.appendChild(sixthname_col);
        tbody.appendChild(sixth_row);

        const seventh_row = document.createElement('tr');
        const seventh_th = document.createElement('th');
        seventh_th.textContent = "Коментар до замовлення: ";
        const seventhname_col = document.createElement('td');
        seventhname_col.textContent = comments;
        seventh_row.appendChild(seventh_th);
        seventh_row.appendChild(seventhname_col);
        tbody.appendChild(seventh_row);


        const container_remove = document.querySelector('.container');
        const form_remove = document.querySelector('.form_div');

        container_remove.remove();
        form_remove.remove();

        const reload_btn = document.createElement('button');
        reload_btn.textContent = 'Продовжити покупки';
        reload_btn.classList.add("btn_style");
        div_table.appendChild(reload_btn);

        reload_btn.onclick = function() {
            location.reload();
        }
    }
        
}
