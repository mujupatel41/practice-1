let api = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"



let arr = [];

async function fetchData(){
    try{
        let res = await fetch(api);
        let data = await res.json();
        console.log(data.data)
        arr.push(...data.data);
        DisplayData(data.data);
        
    }
    catch(err){
        alert(err);
    }
}

fetchData()
let parent = document.getElementById("main");

function DisplayData(data){
    parent.innerHTML = null;
    data.forEach(el=>{
        
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",el.img)

        let title = document.createElement("h2")
        title.textContent = el.brand
        title.style.color = "black"

        let Price = document.createElement("h2")
        Price.textContent = el.price
        Price.style.color = "black"

        let des = document.createElement("p")
        des.textContent = el.details
        des.style.color = "black"

        let cat = document.createElement("h3")
        cat.textContent = el.category;
        cat.style.color = "black"

        let btn = document.createElement("button")
        btn.textContent = "Add To Cart"
        btn.addEventListener("click",()=>{
            console.log("OK")
            let CartData = JSON.parse(localStorage.getItem("cart")) || [];
            let cart = [];
            cart.push(el,1)
            CartData.push(cart)
            localStorage.setItem("cart",JSON.stringify(CartData))
            alert("Product Added to Cart")
        })

        div.append(img,title,Price,des,cat,btn)
        parent.append(div)

        
    })
}

document.getElementById("Cart").addEventListener("click",()=>{
    window.location.href = "cart.html"
})


document.getElementById("filter").addEventListener("change",()=>{
    let filterValue = document.getElementById("filter").value
    let fitlerData = arr.filter(el=>{
        if(filterValue == ""){
            return el
        }
        else{
            return el.category == filterValue
        }
    })
    DisplayData(fitlerData)
})

document.getElementById("logo").addEventListener("click",()=>{
    window.location.reload()
})

document.getElementById("sort").addEventListener("change",()=>{
    let value = document.getElementById("sort").value;

    if(value == ""){
        return arr
    }

    else if(value == "max"){
        arr.sort(function(a,b){return b.price-a.price})
    }

    else if(value == "min"){
        arr.sort(function(a,b){return a.price-b.price})
    }

    else if(value == "ascending"){
        arr.sort(function(a,b){
            if(a.brand<b.brand){
                return -1;
            }
            else{
                return 1;
            }
        })
    }
    else if(value == "descending"){
        arr.sort(function(a,b){
            if(a.brand>b.brand){
                return -1;
            }
            else{
                return 1;
            }
        })
    }
    DisplayData(arr)
})

document.getElementById("search").addEventListener("keyup",(el)=>{
    let SearchData = el.target.value.toLowerCase();
    let filterData = arr.filter((items)=>{
        return items.brand.toLocaleLowerCase().includes(SearchData);
    })
    DisplayData(filterData)
})