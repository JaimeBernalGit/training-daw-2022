document.onload =() =>{
    console.log("start")
    const divs = document.getElementsByTagName("div")
    console.log(`divs ${divs.length}`)
    const Buttons = document.getElementsByClassName("buttons")
    console.log(`buttons ${Buttons.length}`)
    const dButtons = Buttons.getElementsByTagName("div")
    const button1 = dButtons[0]
    console.log(`div button 1 ${button1}`)
    console.log(`divs buttons ${dButtons.length}`)
}

