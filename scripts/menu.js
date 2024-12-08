export default function menu() {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "welcome to jeopardy";
    
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "images/images.jfif";
    image.alt = "an image";
    
    const playButton = document.createElement("div");
    playButton.classList.add("playButton");
    playButton.textContent = "PLAY";
    
    document.body.append(title, image, playButton);
    return playButton;
}