function toogleMode() {
    const html = document.documentElement 
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector(".perfil img")
    
    // substituir a imagem
    if (html.classList.contains ("light")) {
    // se tiver light mode, adicionar a imagem light 
    img.setAttribute("src", "./assets/avatar-2.png")
    } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    }
    
    // ou
    // if (html.classList.contains ('light')) {
    //     html.classList.remove ('light')
    // }   else {
    //     html.classList.add ('light')
    // }
}