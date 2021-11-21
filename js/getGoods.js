const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector(".long-goods-list");
        
        goodsContainer.innerHTML = ""
        goods.forEach(good => {
            const goodBlock = document.createElement("div");

            goodBlock.classList.add("col-lg-3");
            goodBlock.classList.add("col-sm-6");

            goodBlock.innerHTML = `
            <div class="goods-card">
            <span class="label">${good.label ? "-" : "d-none"}</span>
            <!-- /.label --><img src="db/${good.img}" alt="${good.name}" class="goods-image">
            <h3 class="goods-title">${good.name}</h3>
            <!-- /.goods-title -->
            <p class="goods-description">${good.description}</p>
            <!-- /.goods-description -->
            <!-- /.goods-price -->
            <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                <span class="button-price">${good.price}$</span>
            </button>
        </div>
            `
            goodsContainer.append(goodBlock);

            console.log(good);
        })
    }
    const getData = (value, category) => {

    fetch("/db/db.json")
    .then ((res) =>  res.json() )

     .then((data) => { 
        const array = category ? data.filter((item) => {
            return item[category] === value 
        }) : data

            if (window.location.pathname !== "/goods.html") {
                window.location.href = "/goods.html";
            } else {
                renderGoods(array);
            }

        localStorage.setItem("goods", JSON.stringify(array));
        console.log(window.location)
    })
 }

   links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const linkValue = link.textContent;
        const category = link.dataset.field

        getData(linkValue, category);
        })
    })
    if (localStorage.getItem("goods") && window.location.pathname === "/goods.html") {
        renderGoods(JSON.parse(localStorage.getItem("goods")))
    }
    localStorage.setItem("goods", JSON.stringify( [1,2,3,4,5]));
    const goods = JSON.parse(localStorage.getItem("goods"));
    console.log(goods);

    localStorage.removeItem("goods")
    console.log(localStorage);
}

getGoods();