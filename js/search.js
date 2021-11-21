const search = () => {
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');
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
        })
    }
    
    const getData = (value) => {

    fetch("/db/db.json")
    .then ((res) =>  res.json() )

     .then((data) => { 
        const array = data.filter(good => {
            return good.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log(value);

            if (window.location.pathname !== "/goods.html") {
                window.location.href = "/goods.html";
            } else {
                renderGoods(array);
            }

        localStorage.setItem("goods", JSON.stringify(array));
        console.log(window.location);
    })
 }

        searchBtn.addEventListener("click", () => {
            getData(input.value);
        })
      
    
}

search();