let addButton = document.getElementById("add_nav_bar");
addButton.addEventListener("click", add);


let div = document.getElementById("nav");
function add(event)
{
    let a1 = document.createElement("a");
    a1.setAttribute("class", "items");
    a1.setAttribute("href" , "#welcome_page");
    a1.innerText = "Home";
    let a2 = document.createElement("a");
    a2.setAttribute("class", "items");
    a2.setAttribute("href" , "#about_me_page_intro");
    a2.innerText = "About Me";
    let a3 = document.createElement("a");
    a3.setAttribute("class", "items");
    a3.setAttribute("href" , "#hobbies_page_intro");
    a3.innerText = "Hobbies";
    let a4 = document.createElement("a");
    a4.setAttribute("class", "items");
    a4.setAttribute("href" , "#academics_page_intro");
    a4.innerText = "School Life";
    let a5 = document.createElement("a");
    a5.setAttribute("class", "items");
    a5.setAttribute("href" , "#working_page_intro");
    a5.innerText = "Work Experience";
    let a6 = document.createElement("a");
    a6.setAttribute("class", "items");
    a6.setAttribute("href" , "#project_page_intro");
    a6.innerText = "Projects";
    let a7 = document.createElement("a");
    a7.setAttribute("class", "items");
    a7.setAttribute("href" , "#contact_page_intro");
    a7.innerText = "Contact";
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(a3);
    div.appendChild(a4);
    div.appendChild(a5);
    div.appendChild(a6);
    div.appendChild(a7);
    let addbut = document.getElementById("add_nav_bar");
    addbut.remove();
    div.setAttribute("id", "nav_bar_2");
    let buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("id", "remove_nav_bar");
    buttonRemove.innerHTML = "Remove Nav Bar";
    div.appendChild(buttonRemove);

    let removeButton = document.getElementById("remove_nav_bar");
    removeButton.addEventListener("click", remove);

    let div2 = document.getElementById("nav_bar_2");
    function remove(event)
    {
        div2.removeChild(a1);
        div2.removeChild(a2);
        div2.removeChild(a3);
        div2.removeChild(a4);
        div2.removeChild(a5);
        div2.removeChild(a6);
        div2.removeChild(a7);
        div2.removeChild(buttonRemove);
        let buttonAdd = document.createElement("button");
        buttonAdd.innerHTML = "Click for the nav bar";
        buttonAdd.setAttribute("id", "add_nav_bar");
        div2.appendChild(buttonAdd);
        div2.setAttribute("id", "nav");
    }
}