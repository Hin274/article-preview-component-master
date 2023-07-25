const share = document.querySelector(".share-button")
const screenWidth = window.innerWidth
const shareButtonActive = document.getElementById("share-button-active")
showSocial = () => {
    const social = document.querySelector(".social-box")
    social.classList.toggle("hide")
    if (screenWidth > 1339) {
        shareButtonActive.classList.toggle("hide")
    }

}




