export default function Filter() {
    let filterDiv = document.getElementsByClassName("profile-skills");
    let filteredItems = {};
    for (let elem of filterDiv) {
        elem.addEventListener("click", (e) => {
            filteredItems[e.target.innerText] = e.target.innerText;
            console.log(filteredItems);
        });
    }
}

