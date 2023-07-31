//* сделай мне массив внутри которого будет 20 обьектов которые из себя
//* представляют книги с ключами title, category, image, desc, price.
//* в ключе title должно быть название книги, в price цена в долларах,
//* в category должен быть жанр книги,  в image должен быть url фото
//* книги, в desc должно быть описание книги. Вот пример: {title: "Гарри Поттер",
//* desc: "Книга про мальчика волшебника", category: 'Фентези',  price: 123, image:
//* "https://www.bookstation.ie/wp-content/uploads/2019/06/Harry-Potter-25-Year.jpg"}
//* я пишу на js. и все ключи должны совпадать. и так должно быть 20 книг.

//! Запускай сервер на порте 7777
//ПРОЧИТАЙ ЭТО СООБЩЕНИЕ!!! СКАЖИ Я ВИЖУ ВСЕ!!

//! ТИПО БАЗА ДАННЫХ
const books = [
    {
        title: "Гарри Поттер и философский камень",
        desc: "Книга о молодом волшебнике и его первом годе обучения в Хогвартсе.",
        category: "Фэнтези",
        price: 499,
        image: "https://img4.labirint.ru/rc/dc5ac469aa386ba6ff0767521b09ac7f/363x561q80/books43/424618/cover.jpg?1670073957",
    },
    {
        title: "Мастер и Маргарита",
        desc: "Роман о визите дьявола в Москву и сатирической истории Иешуа Га-Ноцри.",
        category: "Классика",
        price: 599,
        image: "https://img4.labirint.ru/rc/c5c21cc6bb7a1e58e7ae5c058c4a9d75/363x561q80/books71/705242/cover.jpg?1564210842",
    },
    {
        title: "Преступление и наказание",
        desc: "Роман о студенте Раскольникове, который совершает преступление.",
        category: "Классика",
        price: 459,
        image: "https://cdn.azbooka.ru/cv/w1100/a915208d-9e3a-4293-beb9-06d77344f3d5.jpg",
    },
    {
        title: "Анна Каренина",
        desc: "Роман о любви и семейных отношениях в России 19 века.",
        category: "Классика",
        price: 549,
        image: "https://cdn.eksmo.ru/v2/430000000000145684/COVER/cover1__w600.jpg",
    },
    {
        title: "451° по Фаренгейту",
        desc: "Антиутопический роман об обществе, где книги запрещены.",
        category: "Научная фантастика",
        price: 389,
        image: "https://www.moscowbooks.ru/image/book/674/orig/i674139.jpg?cu=20191004161517",
    },
    {
        title: "Маленький принц",
        desc: "Философская сказка о маленьком принце, путешествующем по планетам.",
        category: "Сказка",
        price: 299,
        image: "https://www.moscowbooks.ru/image/book/745/orig/i745693.jpg?cu=20220309182511",
    },
    {
        title: "Война и мир",
        desc: "Эпический роман о событиях во время войн против Наполеона.",
        category: "Классика",
        price: 999,
        image: "https://www.moscowbooks.ru/image/book/741/orig/i741097.jpg?cu=20220117094508",
    },
    {
        title: "Алиса в стране чудес",
        desc: "Сказочный роман об Алисе, попавшей в удивительный мир.",
        category: "Сказка",
        price: 329,
        image: "https://www.moscowbooks.ru/image/book/720/orig/i720889.jpg?cu=20210525164602",
    },
    {
        title: "Дневник Анны Франк",
        desc: "Автобиографический рассказ девочки-еврейки, скрывающейся от нацистов.",
        category: "Биография",
        price: 449,
        image: "https://www.mann-ivanov-ferber.ru/assets/images/covers/72/20572/1.00x-thumb.png",
    },
    {
        title: "Головокружение",
        desc: "Роман о страсти, любви и человеческих отношениях.",
        category: "Любовный роман",
        price: 299,
        image: "https://ir.ozone.ru/s3/multimedia-8/c1000/6375927380.jpg",
    },
    {
        title: "О дивный новый мир",
        desc: "Антиутопический роман о будущем обществе, где научные достижения и контроль над личностью приводят к утрате свободы.",
        category: "Научная фантастика",
        price: 439,
        image: "https://fantlab.ru/images/editions/big/12155",
    },
    {
        title: "Гамлет",
        desc: "Трагедия о принце Датском, жаждущем мести за убийство отца.",
        category: "Классика",
        price: 499,
        image: "https://img4.labirint.ru/rc/75568dcf624c0e8c79ab9b5326f11076/363x561q80/books65/640776/cover.jpg?1613035902",
    },
    {
        title: "Дубровский",
        desc: "Роман о благородном разбойнике, стремящемся отомстить за обиды.",
        category: "Классика",
        price: 379,
        image: "https://img3.labirint.ru/rc/9fb47318b89a2cf962d0f12201362ae8/363x561q80/books23/223035/cover.jpg?1563565252",
    },
    {
        title: "Атлант расправил плечи",
        desc: "Философский роман о мире, который начинает разваливаться.",
        category: "Философия",
        price: 749,
        image: "https://bibliomo.ru/upload/opacembed/5ab/_-_.1.jpeg",
    },
    {
        title: "Мартин Иден",
        desc: "Роман о стремлении простого человека стать писателем и добиться признания.",
        category: "Художественная литература",
        price: 489,
        image: "https://img3.labirint.ru/rc/d8a0ad82f2881a800f4683cec269b1eb/363x561q80/books27/267589/cover.jpg?1297085296",
    },
    {
        title: "Сила подсознания",
        desc: "Книга о том, как использовать свою подсознательную силу для достижения успеха.",
        category: "Саморазвитие",
        price: 299,
        image: "https://bookhouse.kg/media/galleryphoto/2019/7/1d1f37ec-8dbe-47d0-af87-23862a56cf12.jpg.600x780_q94.jpg",
    },
    {
        title: "7 навыков высокоэффективных людей",
        desc: "Классическое руководство по развитию личности и достижению успеха.",
        category: "Саморазвитие",
        price: 459,
        image: "https://upload.wikimedia.org/wikipedia/ru/0/0c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%22%D0%A1%D0%B5%D0%BC%D1%8C_%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA%D0%BE%D0%B2_%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85_%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%22.jpg",
    },
    {
        title: "Властелин колец",
        desc: "Эпическая фэнтези-трилогия о приключениях в Средиземье.",
        category: "Фэнтези",
        price: 799,
        image: "https://img4.labirint.ru/rc/1b253329aceb87812dc132b397d2c754/363x561q80/books19/185950/cover.jpg?1280394613",
    },
    {
        title: "Процесс",
        desc: "Роман о трагической судьбе человека, ставшего жертвой системы.",
        category: "Классика",
        price: 379,
        image: "https://eksmoast.by/upload/iblock/8a1/nf16pvxoafm1t0ahzub3vpzqm7gjrv2u.jpg",
    },
    {
        title: "Три товарища",
        desc: "Роман о дружбе, любви и потерях во время Первой мировой войны и Великой депрессии.",
        category: "Художественная литература",
        price: 429,
        image: "https://img4.labirint.ru/rc/06fb67b942160fde281e4506cf38b866/363x561q80/books77/762328/cover.jpg?1598257573",
    },
    {
        title: "Мир войны Z",
        desc: "Постапокалиптический роман о выживании в мире, охваченном эпидемией зомби.",
        category: "Хоррор",
        price: 359,
        image: "https://img4.labirint.ru/rc/0d01c8e5ce356bf1ccf87b1d895a0c18/363x561q80/books40/396844/cover.jpg?1563720030",
    },
    {
        title: "Космическая одиссея 2001 года",
        desc: "Научно-фантастический роман о загадочном монолите и космическом путешествии.",
        category: "Научная фантастика",
        price: 589,
        image: "https://img4.labirint.ru/rc/3ddf4210c4547d1db7bc3636aec403e0/363x561q80/books66/651124/cover.jpg?1618226748",
    },
    {
        title: "Звёздный десант",
        desc: "Научно-фантастический роман о противостоянии человечества и инопланетных нашественников.",
        category: "Научная фантастика",
        price: 399,
        image: "https://img4.labirint.ru/rc/4854aa56e44d903440dbc12fe679fe10/363x561q80/books37/360410/cover.jpg?1350131240",
    },
    {
        title: "Игра Эндера",
        desc: "Научно-фантастический роман о детском гениальном командире в космических сражениях.",
        category: "Научная фантастика",
        price: 459,
        image: "https://img3.labirint.ru/rc/0e1414b85ccfc9686c7ba698e8b04275/363x561q80/books92/918387/cover.jpg?1671006369",
    },
    {
        title: "Илон Маск: Тесла, SpaceX и дорога в будущее",
        desc: "Биография Илона Маска и его вклад в исследование космоса и электрических автомобилей.",
        category: "Биография",
        price: 499,
        image: "https://img3.labirint.ru/rc/bd1ef3ac1fd2275929a5a3737734533d/363x561q80/books51/506527/cover.jpg?1447061152",
    },
    {
        title: "Великий Гэтсби",
        desc: "Роман о загадочном миллионере Джей Гэтсби и его несбыточной любви к женщине из прошлого.",
        category: "Художественная литература",
        price: 429,
        image: "https://img3.labirint.ru/rc/631dc794386b0b76e54b9339a06c8ee7/363x561q80/books48/476419/cover.jpg?1612675790",
    },
];
//! dom connect
let pushBtn = document.querySelector("#push-btn");
let getBtn = document.querySelector("#get-btn");
let contentDiv = document.querySelector("#content__div");
let registerModal = document.querySelector("#registerUser-modal");
let registerAdminModal = document.querySelector("#registerAdmin-modal");

let regBtn = document.querySelector("#register-modal-btn");
let loginBtn = document.querySelector("#login-modal-btn");

let loginUserModalBtn = document.querySelector("#loginUser-modal");
let logoutUserBtn = document.querySelector("#logoutUser-btn");

let searchInp = document.querySelector("#search-inp");
let searchForm = document.querySelector("form");
let searchBtn = document.querySelector("#search-btn");

//* admin reg connect
let regAdminNameInp = document.querySelector("#reg-admin-name");
let regAdminAgeInp = document.querySelector("#reg-admin-age");
let regAdminEmailInp = document.querySelector("#reg-admin-email");
let regAdminPasswordInp = document.querySelector("#reg-admin-password");
let regAdminPasswordConfirmInp = document.querySelector(
    "#reg-admin-password-confirm"
);
let regAdminBtn = document.querySelector("#register-admin-modal-btn");
let adminPanel = document.querySelector("#admin-panel");
//* inputs connect
let regNameInp = document.querySelector("#reg-name");
let regAgeInp = document.querySelector("#reg-age");
let regEmailInp = document.querySelector("#reg-email");
let regPasswordInp = document.querySelector("#reg-password");
let regPasswordConfirmInp = document.querySelector("#reg-password-confirm");

let loginNameInp = document.querySelector("#login-name");
let loginPasswordInp = document.querySelector("#login-password");

// book inputs
let bookImage = document.querySelector("#book-image");
let bookTitle = document.querySelector("#book-title");
let bookDesc = document.querySelector("#book-desc");
let bookCategory = document.querySelector("#book-category");
let bookPrice = document.querySelector("#book-price");
let addBookBtn = document.querySelector(".add-book-btn");
let saveChangesBtn = document.querySelector(".save-changes-btn");
//! АДРЕСЫ
const BOOKS_API = "http://localhost:7777/books";
const USERS_API = "http://localhost:7777/users";

//! pushing to db
//! ФУНКЦИЯ ДЛЯ ПУША НА СЕРВЕР
// registerAdminModal.setAttribute("style", "display: none");

// async function addAllBooksToDB() {
//     for (let book of books) {
//         await fetch(BOOKS_API, {
//             method: "POST",
//             body: JSON.stringify(book),
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//             },
//         });
//     }
// }
// pushBtn.addEventListener("click", addAllBooksToDB);

//! registration ADMIN
//* РЕГИСТРАЦИЯ АДМИНА

//* ФУНЦИЯ ОЧИСТКИ ИНПУТОВ
function cleanRegAdminInps() {
    regAdminNameInp.value = "";
    regAdminAgeInp.value = "";
    regAdminEmailInp.value = "";
    regAdminPasswordInp.value = "";
    regAdminPasswordConfirmInp.value = "";
}

//* РЕГИСТРАЦИЯ АДМИНА

async function registerAdminFunc() {
    if (
        !regAdminNameInp.value.trim() ||
        !regAdminAgeInp.value.trim() ||
        !regAdminEmailInp.value.trim() ||
        !regAdminPasswordInp.value.trim() ||
        !regAdminPasswordConfirmInp.value.trim()
    ) {
        alert("Some inputs are empty!");
        return;
    }
    let uniqueName = await checkUniqueUsername(regAdminNameInp.value);
    if (uniqueName) {
        alert("User with this name is exists");
        cleanRegAdminInps();
        return;
    }
    if (regAdminPasswordInp.value !== regAdminPasswordConfirmInp.value) {
        alert("eror pass");
        cleanRegAdminInps();
        return;
    }
    checkUniqueUsername();

    //* СОЗДАЕМ НОВЫЙ ОБЬЕКТ КОТОРЫЙ ЗАПУШИМ В БД
    let adminObj = {
        name: regAdminNameInp.value,
        age: regAdminAgeInp.value,
        email: regAdminEmailInp.value,
        password: regAdminPasswordInp.value,
        isAdmin: true,
    };

    //* ПУШИМ
    fetch(USERS_API, {
        method: "POST",
        body: JSON.stringify(adminObj),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    cleanRegAdminInps();
}

regAdminBtn.addEventListener("click", registerAdminFunc);

//! registration

//* ЗДЕСЬ ПРОВЕРКА НА ТО ЧТО ЕСТЬ ЛИ У ПОЛЬЗОВАТЕЛСЯ АДМИНКА
function checkAddAdmin() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) return user.isAdmin;
    return false;
}

//* ЗДЕСЬ КНОПКА ДОБАВЛЕНИЯ АДМИНОВ. ЕСЛИ У ПОЛЬЗОАВАТЕЛСЯ ЕСТЬ АДМИНКА ТО ОН ВИДИТ ЭТУ КНОПКУ
function addAdmin() {
    if (!checkAddAdmin()) {
        registerAdminModal.setAttribute("style", "display: none !important");
    } else {
        registerAdminModal.setAttribute("style", "display: block !important");
    }
}
//* ОЧИШЕНИЕ ИНПУТОВ
function cleanRegInps() {
    regNameInp.value = "";
    regAgeInp.value = "";
    regEmailInp.value = "";
    regPasswordInp.value = "";
    regPasswordConfirmInp.value = "";
}

//* ПРОВЕРКА НА УНИКАЛЬНОЕ ИМЯ
async function checkUniqueUsername(name) {
    let res = await fetch(USERS_API);
    let users = await res.json();
    return users.some((item) => item.name == name);
}

//* РЕГИСТРАЦИЯ ОБЫЧНОГО ПОЛЬЗОВАТЕЛЯ
async function registerUserFunc() {
    if (
        !regNameInp.value.trim() ||
        !regAgeInp.value.trim() ||
        !regEmailInp.value.trim() ||
        !regPasswordInp.value.trim() ||
        !regPasswordConfirmInp.value.trim()
    ) {
        alert("Some inputs are empty!");
        return;
    }
    let uniqueName = await checkUniqueUsername(regNameInp.value);
    if (uniqueName) {
        alert("User with this name is exists");
        cleanRegInps();
        return;
    }
    if (regPasswordInp.value !== regPasswordConfirmInp.value) {
        alert("eror pass");
        cleanRegInps();
        return;
    }
    checkUniqueUsername();

    //* СОБИРАЕМ ПОЛЬЗОВАТЕЛЯ
    let userObj = {
        name: regNameInp.value,
        age: regAgeInp.value,
        email: regEmailInp.value,
        password: regPasswordInp.value,
        isAdmin: false, //! АДМИНКИ НЕТ, ТАК КАК ЭТО ОБЫЧНЫЙ ПОЛЬЗОВАТЕЛЬ
    };
    //* ПУШИМ ПОЛЬЗОВАТЕЛЯ
    fetch(USERS_API, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    cleanRegInps();
}

regBtn.addEventListener("click", registerUserFunc);

//! login
//! ДЕЛАЕМ АВТОРИЗАЦИЮ

//* ЗДЕСЬ ПРОВЕРЯЕМ АВТОРИЗОВАН ЛИ ПОЛЬЗОВАТЕЛЬ,
//* ЕСЛИ ДА ТО УБИРАЕМ КНОПКУ LOGIN И СТАВИМ LOGOUT.
//* ЕСЛИ НЕТ ТО НАОБОРОТ
function checkLoginLoogoutStatus() {
    let user = localStorage.getItem("user");
    if (!user) {
        loginUserModalBtn.parentNode.style.display = "block";
        logoutUserBtn.parentNode.style.display = "none";
        showUsername.innerText = "";
    } else {
        loginUserModalBtn.parentNode.style.display = "none";
        logoutUserBtn.parentNode.style.display = "block";
        showUsername.innerText = JSON.parse(user).name;
    }
    //* ЗДЕСЬ ЖЕ ВЫЗЫВАЕМ ФУНКЦИЮ КНОПКИ АДМИНА.
    showAdminPanel();
}
checkLoginLoogoutStatus();

//* ПРОВЕРЯЕМ ЕСТЬ ЛИ ТАКОЙ ПОЛЬЗОВАТЕЛЬ В БД
function checkUserInUsers(name, users) {
    return users.some((item) => item.name === name);
}

//* ПРОВЕРЯЕМ СОВПАДЕНИЕ ПАРОЛЕЙ
function checkUserPassword(user, password) {
    return user.password === password;
}

//* ПУШИМ ГОТОВОГО ПОЛЬЗОВАТЕЛЯ В LOCAL STORAGE
function setUserToStorage(name, isAdmin) {
    localStorage.setItem(
        "user",
        JSON.stringify({
            name,
            isAdmin,
        })
    );
}

//* ОЧИСТКА ИНПУТОВ
function cleanLogInps() {
    loginNameInp.value = "";
    loginPasswordInp.value = "";
}

//* АВТОРИЗАЦИЯ
async function loginUserFunc() {
    //* ПРОВЕРКА НА ЗАПОЛНЕНИЕ ИНПУТОВ
    if (!loginNameInp.value.trim() || !loginPasswordInp.value.trim()) {
        alert("SOME INP ARE EMPTY");
        cleanLogInps();
        return;
    }

    let res = await fetch(USERS_API);
    let users = await res.json();
    if (!checkUserInUsers(loginNameInp.value, users)) {
        alert("User not found!");
        cleanLogInps();
        return;
    }

    let userObj = users.find((user) => user.name === loginNameInp.value);

    //* ПРОВЕРКА НА ПАРОЛЬ
    if (!checkUserPassword(userObj, loginPasswordInp.value)) {
        alert("Wrong password");
        cleanLogInps();
        return;
    }
    //* ЗДЕСЬ ПУШИМ В LOCAL STORAGE
    setUserToStorage(userObj.name, userObj.isAdmin);
    //* СРАЗУ ПРОВЕРЯЕМ, ЕСЛИ АВТОРИЗОВАЛСЯ ТО КНОПКУ LOGIN УБРАТЬ
    checkLoginLoogoutStatus();
    //* ОЧИСТКА ИНПУТОВ
    cleanLogInps();

    render();
}

loginBtn.addEventListener("click", loginUserFunc);

//! logout
//* ПРИ НАЖАТИИ НА КНОПКУ LOGOUT ИЗ LOCAL STORAGE УДАЛЯЕТСЯ ЮЗЕР.
logoutUserBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    checkLoginLoogoutStatus();
    render();
});

//! product login

//! добавление всех книг на страницу
//* НАДО ДОБАВИТЬ РЕНДЕР ВЕЗДЕ ГДЕ ОБНОВЛЕНИЕ ИДЕТ

let category = "";
let search = "";
let currentPage = 1;

async function render() {
    let requestAPI = `${BOOKS_API}?q=${search}&category=${category}&_page=${currentPage}&_limit=6`;
    if (!category) {
        requestAPI = `${BOOKS_API}?q=${search}&_page=${currentPage}&_limit=6`;
    }
    contentDiv.innerHTML = "";
    let res = await fetch(requestAPI);
    let data = await res.json();
    //* ЗДЕСЬ ПЕРЕБИРАЕМ И ОТПРАВЛЯЕМ НА СТРАНИЦУ ВСЕ ЭЛЕМЕНТЫ ИЗ БД
    data.forEach((book) => {
        contentDiv.innerHTML += `
        <div class="card mb-3" style="width: 20%;" id="content-card">
            <img src="${
                book.image
            }" class="card-img-top" alt="..." height = "450"/>
            <button type="button" class="btn btn-success w-100 moreInfoCardBtn" id="book-${
                book.id
            }" >Подробнее</button>
            <div class="card-body" id="card-body">
                ${
                    checkUserForBookCreate()
                        ? `<a
                    href="#"
                    class="btn btn-primary btn-edit admin-btns-dd"
                    id="edit-${book.id}"
                    >EDIT</a
                >
                <a
                    href="#"
                    class="btn btn-danger btn-delete admin-btns-dd"
                    id="del-${book.id}"
                    >DELETE</a
                >`
                        : ""
                }
            </div>
        </div>
        `;
    });
    if (data.length === 0) return;

    addDeleteEvent();
    addEditEvent();
    addCategoryToDropdownMenu();
    addMoreEvent();
}
render();

//! moreInfo about book

function callAll() {}
async function moreInfoAboutBook(e) {
    let bookId = e.currentTarget.id.split("-")[1];
    let res = await fetch(`${BOOKS_API}/${bookId}`);
    let bookObj = await res.json();
    alert(
        `Название: ${bookObj.title}\n\nОписание: ${bookObj.desc}\n\nЖанр: ${bookObj.category}\n\nЦена: ${bookObj.price} рублей`
    );
}
function addMoreEvent() {
    let moreInfoCardBtns = document.querySelectorAll(".moreInfoCardBtn");
    moreInfoCardBtns.forEach((btn) =>
        btn.addEventListener("click", moreInfoAboutBook)
    );
}
// product logic
function checkUserForBookCreate() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) return user.isAdmin;
    return false;
}

function showAdminPanel() {
    if (!checkUserForBookCreate()) {
        adminPanel.setAttribute("style", "display: none !important;");
    } else {
        adminPanel.setAttribute("style", "display: flex !important;");
    }
    addAdmin();
}

// create

function cleanAdminForm() {
    bookImage.value = "";
    bookTitle.value = "";
    bookDesc.value = "";
    bookCategory.value = "";
    bookPrice.value = "";
}

async function createProduct() {
    if (
        !bookImage.value.trim() ||
        !bookTitle.value.trim() ||
        !bookDesc.value.trim() ||
        !bookCategory.value.trim() ||
        !bookPrice.value.trim()
    ) {
        alert("Some inputs are empty!");
        return;
    }

    let bookObj = {
        image: bookImage.value,
        title: bookTitle.value,
        desc: bookDesc.value,
        category: bookCategory.value,
        price: bookPrice.value,
    };

    await fetch(BOOKS_API, {
        method: "POST",
        body: JSON.stringify(bookObj),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    cleanAdminForm();

    render();
}

addBookBtn.addEventListener("click", createProduct);

// delete
async function deleteProduct(e) {
    let bookId = e.currentTarget.id.split("-")[1];

    await fetch(`${BOOKS_API}/${bookId}`, {
        method: "DELETE",
    });

    render();
}

function addDeleteEvent() {
    let deleteBookBtns = document.querySelectorAll(".btn-delete");
    deleteBookBtns.forEach((btn) =>
        btn.addEventListener("click", deleteProduct)
    );
}

// update
function checkCreateAndSaveBtn() {
    if (saveChangesBtn.id) {
        addBookBtn.setAttribute("style", "display: none;");
        saveChangesBtn.setAttribute("style", "display: block;");
    } else {
        addBookBtn.setAttribute("style", "display: block;");
        saveChangesBtn.setAttribute("style", "display: none;");
    }
}
checkCreateAndSaveBtn();

async function addProductDataToForm(e) {
    let bookId = e.currentTarget.id.split("-")[1];
    let res = await fetch(`${BOOKS_API}/${bookId}`);
    let bookObj = await res.json();

    bookTitle.value = bookObj.title;
    bookPrice.value = bookObj.price;
    bookDesc.value = bookObj.desc;
    bookImage.value = bookObj.image;
    bookCategory.value = bookObj.category;

    saveChangesBtn.setAttribute("id", bookObj.id);

    checkCreateAndSaveBtn();
}

function addEditEvent() {
    let editProductBtns = document.querySelectorAll(".btn-edit");
    editProductBtns.forEach((btn) =>
        btn.addEventListener("click", addProductDataToForm)
    );
}

async function saveChanges(e) {
    let updatedProductObj = {
        id: e.target.id,
        title: bookTitle.value,
        price: bookPrice.value,
        desc: bookDesc.value,
        image: bookImage.value,
        category: bookCategory.value,
    };

    await fetch(`${BOOKS_API}/${e.target.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedProductObj),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    cleanAdminForm();

    saveChangesBtn.removeAttribute("id");

    render();
}

saveChangesBtn.addEventListener("click", saveChanges);

// ! filtering
let categoriesList = document.querySelector(".dropdown-menu");
async function addCategoryToDropdownMenu() {
    let res = await fetch(BOOKS_API);
    let data = await res.json();
    let categories = new Set(data.map((product) => product.category));
    categoriesList.innerHTML =
        '<li><a class="dropdown-item" href="#">all</a></li>';
    categories.forEach((category) => {
        categoriesList.innerHTML += `
            <li><a class="dropdown-item" href="#">${category}</a></li>
        `;
    });
    addClickEventOnDropdownItem();
}

function filterOnCategory(e) {
    let categoryText = e.target.innerText;
    if (categoryText === "all") {
        category = "";
    } else {
        category = categoryText;
    }
    render();
}

function addClickEventOnDropdownItem() {
    let categoryItems = document.querySelectorAll(".dropdown-item");
    categoryItems.forEach((item) =>
        item.addEventListener("click", filterOnCategory)
    );
}

//! search
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    search = searchInp.value;
    render();
});
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    search = searchInp.value;
    render();
});

//! pagination
let prevPageBtn = document.querySelector("#prev-page-btn");
let nextPageBtn = document.querySelector("#next-page-btn");

async function getPagesCount() {
    let res = await fetch(BOOKS_API);
    let books = await res.json();
    let pagesCount = Math.ceil(books.length / 2);
    return pagesCount;
}

async function checkPages() {
    let maxPagesNum = await getPagesCount();
    if (currentPage === 1) {
        prevPageBtn.setAttribute("style", "display: none;");
        nextPageBtn.setAttribute("style", "display: block;");
    } else if (currentPage === maxPagesNum) {
        prevPageBtn.setAttribute("style", "display: block;");
        nextPageBtn.setAttribute("style", "display: none;");
    } else {
        prevPageBtn.setAttribute("style", "display: block;");
        nextPageBtn.setAttribute("style", "display: block;");
    }
}
checkPages();

prevPageBtn.addEventListener("click", () => {
    currentPage--;
    checkPages();
    render();
});

nextPageBtn.addEventListener("click", () => {
    currentPage++;
    checkPages();
    render();
});
