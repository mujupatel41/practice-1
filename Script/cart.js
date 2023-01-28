let CartData = JSON.parse(localStorage.getItem("cart"));
let parent = document.getElementById("main")


let Total = 0;

CartData.forEach((el,i)=>{
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src",el[0].avatar)

    let title = document.createElement("h2")
    title.textContent = el[0].title
    title.style.color = "black"

    let price = document.createElement("h2")
    price.textContent = el[0].Price
    price.style.color = "black"

    let des = document.createElement("p")
    des.textContent = el[0].Description
    des.style.color = "black"

    let cat = document.createElement("h3")
    cat.textContent = el[0].category
    cat.style.color = "black"

    



    let btn1 = document.createElement("button")
    btn1.textContent = "-"
    btn1.style.color = "black"

    Total += Number(el[0].Price*el[1])

    btn1.addEventListener("click",()=>{
        el[1]--;
        if(el[1]<1){
            CartData.splice(i,1);
            localStorage.setItem("cart",JSON.stringify(CartData))
        }
        localStorage.setItem("cart",JSON.stringify(CartData));
        window.location.reload()
    })

    let span = document.createElement("span")
    span.textContent = el[1]
    span.style.color = "black"

    let btn2 = document.createElement("button")
    btn2.textContent = "+"
    btn2.style.color = "black"
    btn2.addEventListener("click",()=>{
        el[1]++;
        localStorage.setItem("cart",JSON.stringify(CartData));
        window.location.reload()
    })
    console.log(el[1])

    div.append(img,title,price,des,cat,btn1,span,btn2)
    parent.append(div)
})
let tot = document.getElementById("totle")
tot.innerText = Total

document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "main.html"
})