window.onload = function(e) {
    console.log('documento cargado')
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!'

    document.querySelector("#username")

    const article_first = document.querySelectorAll("article .first")
    article_first.forEach( first=> {
        first.style.color= "green"
    });

    document.querySelectorAll("li.item")

    const buttons = document.querySelectorAll(".buttons > button")

    document.querySelector("p").style.backgroundColor="pink"

    buttons.forEach( button=> {
        button.style.color= "red"
    });

}