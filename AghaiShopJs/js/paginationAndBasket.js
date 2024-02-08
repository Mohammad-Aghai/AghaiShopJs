let productBox = $.querySelector(".product-box");
let paginationBox = $.querySelector(".pagination-box");
let basketItemsContainer = $.querySelector(".basket-items-container");
let totalPrice = $.querySelector(".total-price");
const basketItemBox = $.querySelector(".basket-itemBox");
const basketBox = $.querySelector(".basket-box");
const basketCloseBtn = $.querySelector(".basket-close-btn");
const currentBasket = $.querySelector(".current-basket");
totalPrice.innerHTML = "";
// show basket handler
basketBox.addEventListener("click", function () {
  basketItemBox.style.display = "flex";
  basketItemBox.style.animation =
    "basketAnimation ease-in forwards normal 0.8s";
});

//close basket handler
basketCloseBtn.addEventListener("click", function () {
  basketItemBox.style.animation =
    "basketAnimationOut ease-out forwards normal 0.8s";
  setTimeout(function () {
    basketItemBox.style.display = "none";
  }, 800);
});

// main array items
let sumOfPrice = 0;
AllProductsArr = [
  {
    id: 1,
    name: "honor 9X 1",
    price: 5,
    ram: "8GB RAM",
    image: "./image/1.jpg",
    count: 1,
  },
  {
    id: 2,
    name: "honor 9X 2",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/2.jpg",
    count: 1,
  },
  {
    id: 3,
    name: "honor 9X 3",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/3.jpg",
    count: 1,
  },
  {
    id: 4,
    name: "honor 9X 4",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/4.jpg",
    count: 1,
  },
  {
    id: 5,
    name: "honor 9X 5",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/5.jpg",
    count: 1,
  },
  {
    id: 6,
    name: "honor 9X 6",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/6.jpg",
    count: 1,
  },

  {
    id: 7,
    name: "honor 9X 7",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/7.jpg",
    count: 1,
  },
  {
    id: 8,
    name: "honor 9X 8",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/8.jpg",
    count: 1,
  },
  {
    id: 9,
    name: "honor 9X 9",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/9.jpg",
    count: 1,
  },
  {
    id: 10,
    name: "honor 9X 10",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/10.jpg",
    count: 1,
  },
  {
    id: 11,
    name: "honor 9X 11",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/11.jpg",
    count: 1,
  },
  {
    id: 12,
    name: "honor 9X 12",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/12.jpg",
    count: 1,
  },

  {
    id: 13,
    name: "honor 9X 13",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/13.jpg",
    count: 1,
  },
  {
    id: 14,
    name: "honor 9X 14",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/14.jpg",
    count: 1,
  },
  {
    id: 15,
    name: "honor 9X 15",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/15.jpg",
    count: 1,
  },
  {
    id: 16,
    name: "honor 9X 16",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/16.jpg",
    count: 1,
  },
  {
    id: 17,
    name: "honor 9X 17",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/17.jpg",
    count: 1,
  },
  {
    id: 18,
    name: "honor 9X 18",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/18.jpg",
    count: 1,
  },

  {
    id: 19,
    name: "honor 9X 19",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/19.jpg",
    count: 1,
  },
  {
    id: 20,
    name: "honor 9X 20",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/20.jpg",
    count: 1,
  },
  {
    id: 21,
    name: "honor 9X 21",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/21.jpg",
    count: 1,
  },
  {
    id: 22,
    name: "honor 9X 22",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/22.jpg",
    count: 1,
  },
  {
    id: 23,
    name: "honor 9X 23",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/23.jpg",
    count: 1,
  },
  {
    id: 24,
    name: "honor 9X 24",
    price: 1500000,
    ram: "8GB RAM",
    image: "./image/24.jpg",
    count: 1,
  },
];

let userBasket = [];
//pagination handler
let rowCount = 6;
let currentPage = 1;

function pageItemsHandler(ProductsArr, rowCount, currentPage) {
  productEndIndexPage = rowCount * currentPage;
  productStartIndexPage = productEndIndexPage - rowCount;
  let pageProducts = ProductsArr.slice(
    productStartIndexPage,
    productEndIndexPage
  );
  createProductsPageHandler(pageProducts);
}
let currentOfBasket = 0;
function createProductsPageHandler(paginationProduct) {
  paginationProduct.forEach(function (productsPage) {
    let productCard = $.createElement("div");
    productCard.classList.add("product-card");
    let productImg = $.createElement("img");
    productImg.classList.add("product-img");
    productImg.setAttribute("src", productsPage.image);
    productImg.setAttribute("alt", productsPage.name);
    let productTitle = $.createElement("p");
    productTitle.classList.add("product-title");
    productTitle.innerHTML = productsPage.name;
    let productPrice = $.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.innerHTML = " قیمت :" + productsPage.price;
    let productRam = $.createElement("p");
    productRam.innerHTML = productsPage.ram;
    let productBtn = $.createElement("button");
    productBtn.classList.add("product-btn");
    productBtn.innerHTML = "افزودن به سبد خرید";
    productCard.append(
      productImg,
      productTitle,
      productPrice,
      productRam,
      productBtn
    );
    productBox.appendChild(productCard);
    //add to user basket handler
    productBtn.addEventListener("click", function () {
      let hasItem = userBasket.some(function (itemIn) {
        return itemIn == productsPage;
      });
      if (hasItem) {
        alert("محصول در سبد خرید قبلا اظافه شده ");
      } else {
        currentOfBasket++;
        currentBasket.innerHTML = currentOfBasket;
        AddToBasketHandler(productsPage.id);
      }
    });
  });
}

function AddToBasketHandler(ProductId) {
  let insertedProduct = AllProductsArr.find(function (product) {
    return product.id === ProductId;
  });
  userBasket.push(insertedProduct);
  basketItemsContainer.innerHTML = "";
  basketItemHandler(userBasket);
}
function basketItemHandler(userBasket) {
  userBasket.forEach(function (userBasketItems) {
    const basketItem = $.createElement("div");
    basketItem.classList.add("basket-item");
    const itemDetails = $.createElement("div");
    itemDetails.classList.add("item-details");
    const itemName = $.createElement("p");
    itemName.classList.add("item-name");
    itemName.innerHTML = userBasketItems.name;
    const itemImage = $.createElement("img");
    itemImage.classList.add("item-image");
    itemImage.setAttribute("src", userBasketItems.image);
    itemImage.setAttribute("alt", userBasketItems.name);
    itemDetails.append(itemName, itemImage);
    const itemsPrice = $.createElement("p");
    itemsPrice.classList.add("items-price");
    itemsPrice.innerHTML = userBasketItems.price + " تومان";
    const itemCount = $.createElement("div");
    itemCount.className = "item-count d-flex-row";
    const inputNumber = $.createElement("input");
    inputNumber.classList.add("input-number");
    inputNumber.setAttribute("type", "number");
    inputNumber.setAttribute("min", "1");
    inputNumber.setAttribute("max", "100");
    inputNumber.setAttribute("value", "1");
    const itemRemoveBtn = $.createElement("button");
    itemRemoveBtn.classList.add("item-remove-btn");
    itemRemoveBtn.innerHTML = "حذف";
    itemCount.append(inputNumber, itemRemoveBtn);
    basketItem.append(itemDetails, itemsPrice, itemCount);
    basketItemsContainer.append(basketItem);

    let firstPrice = userBasketItems.price;
    //Delete of basket event
    itemRemoveBtn.addEventListener("click", function () {
      currentOfBasket--;
      currentBasket.innerHTML = currentOfBasket;
      RemoveOfBasket(userBasketItems.id);
    });
    //count of products changer
    inputNumber.addEventListener("change", function () {
      countOfPriceChangeHandler(
        inputNumber.value,
        itemsPrice,
        userBasketItems,
        firstPrice
      );
    });
    // sum of price
    sumAllItemsPrice();
  });
}
function sumAllItemsPrice() {
  let sumAllPrice = 0;
  userBasket.forEach(function (basketItem) {
    sumAllPrice += basketItem.price;
  });
  totalPrice.innerHTML = "قیمت مجموع : " + sumAllPrice + " تومان ";
}

function countOfPriceChangeHandler(
  inputNumberValue,
  itemsPrice,
  userBasketItems,
  firstPrice
) {
  userBasketItems.price = firstPrice;
  userBasketItems.count = inputNumberValue;
  userBasketItems.price = userBasketItems.count * userBasketItems.price;
  itemsPrice.innerHTML = userBasketItems.price + " تومان";
  console.log(userBasketItems);
  sumAllItemsPrice();
}

//Delete of basket Handler
function RemoveOfBasket(itemId) {
  userBasket = userBasket.filter(function (basketItem) {
    return basketItem.id !== itemId;
  });
  basketItemsContainer.innerHTML = "";
  basketItemHandler(userBasket);
  sumAllItemsPrice();
}

function setupPagination(AllProductsArr, rowCount) {
  let CountOfProduct = 0;
  AllProductsArr.forEach(function () {
    CountOfProduct++;
  });
  let paginationCount = Math.ceil(CountOfProduct / rowCount);
  for (let i = 1; i < paginationCount + 1; i++) {
    const paginationItem = $.createElement("div");
    paginationItem.classList.add("paginationItem");
    paginationItem.innerHTML = i;
    paginationBox.appendChild(paginationItem);

    paginationItem.addEventListener("click", function () {
      productBox.innerHTML = "";
      currentPage = paginationItem.innerHTML;
      pageItemsHandler(AllProductsArr, rowCount, currentPage);
      const AllPageChanger = $.querySelectorAll(".paginationItem");
      AllPageChanger.forEach(function (pageChanger) {
        pageChanger.classList.remove("active");
      });
      paginationItem.classList.add("active");
    });
  }
}
pageItemsHandler(AllProductsArr, rowCount, currentPage);
setupPagination(AllProductsArr, rowCount);
