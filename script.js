String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let p = document.querySelector(".plus")
let m = document.querySelector(".minus")
let n = document.querySelector(".number")
let main1 = document.querySelector(".mainprod")
let product = document.querySelectorAll(".pr")
let closeButton = document.getElementById("close")
let ResponsiveBar = document.querySelector(".left-resp")
let Next = document.querySelector(".directn")
let Previous = document.querySelector(".directp")
let iconBar = document.getElementById("icon")
let s = main1.src
for (let i = 0; i < product.length; i++) {
    product[i].onclick = function() {
        s = s.replaceAt(s.indexOf('jpg') - 2, `${i+1}`)
        console.log(s)
        main1.src = s
    }
}
let count;
Next.onclick = function() {
    count = Number.parseInt(s[s.indexOf('jpg') - 2])
    s = s.replaceAt(s.indexOf('jpg') - 2, `${count+1>product.length?1:count+1}`)
    main1.src = s
}
Previous.onclick = function() {
    count = Number.parseInt(s[s.indexOf('jpg') - 2])
    s = s.replaceAt(s.indexOf('jpg') - 2, `${count-1<=0?product.length:count-1}`)
    main1.src = s
}
closeButton.onclick = function() {
    closeButton.classList.add("display")
    ResponsiveBar.style.width = "0%"
    Previous.style.visibility = "visible"

}

iconBar.onclick = function() {
    Previous.style.visibility = "hidden"
    ResponsiveBar.style.width = "70%"
    closeButton.classList.remove("display")



}


let i = 0;
p.onclick = function() {
    i += 1
    i = i > 30 ? 30 : i;
    n.textContent = i
}
m.onclick = function() {
    i -= 1
    i = i < 0 ? 0 : i;
    n.textContent = i
}