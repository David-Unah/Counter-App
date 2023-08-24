let startCount = document.getElementById("unlockedBtn")
    let count = 0
   
function updateCount() {
    const numberCount = document.getElementById("numberCount")
    count++
    numberCount.textContent = count + demoMaleCount + demoFemmaleCount + demoChildCount
}


startCount.addEventListener("click", function() {
    updateCount()
})

startCount.addEventListener("mousedown", function() {
    setTimeout(() => {
        updateCount()
    }, 5000)
})




const mytotalCount = JSON.parse(localStorage.getItem("totalCount"))

if (mytotalCount) {
    count = mytotalCount
}

function triggerCounter() {
    const unlockedBtn = document.getElementById("unlockedBtn")
    const lockedBtn = document.getElementById("lockedBtn")
    const unlockCounter = document.getElementById("unlockCount")
    const lockCount = document.getElementById("lockCount")
    const mainCount = document.getElementById("mainCount")
    unlockedBtn.classList.toggle("unshow")
    lockedBtn.classList.toggle("show")
    unlockCounter.classList.toggle("show")
    lockCount.classList.toggle("unshow")
    mainCount.classList.toggle("offshadow")
    mainCount.classList.toggle("offshadow:active")
    const lockP = document.getElementById("lockCounterP")
    lockP.classList.toggle("colorBlack")
}




function speedCount() {
    let lighten = document.getElementById("lighten")
    lighten.classList.toggle("unshow")
    let turtle = document.getElementById("turtle")
    turtle.classList.toggle("show")
    const offSpeed = document.getElementById("on-speed")
    offSpeed.classList.toggle("show")
    const onSpeed = document.getElementById("off-speed")
    onSpeed.classList.toggle("unshow")
    const speedCountP = document.getElementById("speedCount-p")
    speedCountP.classList.toggle("color")
}


function demoSwitch() {
    const offDemo = document.getElementById("off-demo")
    offDemo.classList.toggle("unshow")
    const onDemo = document.getElementById("on-demo")
    onDemo.classList.toggle("show")
    const demoBox = document.getElementById("demoBox")
    demoBox.classList.toggle("activerightinner--box")
    const demoP = document.getElementById("demographic-p")
    demoP.classList.toggle("activedemo-p")
    const demoBoxContent = document.getElementById("demobox--content")
    demoBoxContent.classList.toggle("show")
    const mainBtnTab = document.getElementById("mainbtn--tab")
    mainBtnTab.classList.toggle("unshow")
}

let demoMaleCount = 0
function incrementMale() {
    const maleCount = document.getElementById("maleCount")
    demoMaleCount++
    maleCount.textContent = demoMaleCount
    numberCount.textContent = count + demoMaleCount + demoFemmaleCount + demoChildCount
}

let demoFemmaleCount = 0
function incrementFemale() {
    const femaleCount = document.getElementById("femaleCount")
    demoFemmaleCount++
    femaleCount.textContent = demoFemmaleCount
    numberCount.textContent = count + demoMaleCount + demoFemmaleCount + demoChildCount
}

let demoChildCount = 0
function incrementChild() {
    const childCount = document.getElementById("childCount")
    demoChildCount++
    childCount.textContent = demoChildCount
    numberCount.textContent = count + demoMaleCount + demoFemmaleCount + demoChildCount
}

const saveCount = document.getElementById("saveCount")
saveCount.addEventListener("click", function() {
    const storedCount = count + demoMaleCount + demoFemmaleCount + demoChildCount
    localStorage.setItem("totalCount", JSON.stringify(storedCount))
    alert("Data Saved")
})

//localStorage.clear()

