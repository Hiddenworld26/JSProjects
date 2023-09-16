const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search")
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card = `
    <div class="card">
    
    <div class="avtar" >
    <img  id="image"src="i2.jpg" alt="">
</div>
    <div class="cred">
        <div class="user-info">
        <h2>Shruti Verma</h2>
        <p>Frontend Developer</p>
               </div>
   
    <ul class="info">
        <li>##<strong>Followers</strong></li>
        <li>##<strong>Following</strong></li>
        <li>###<strong>Repos</strong></li>
    </ul>
    <div id="repo">
        <a class="repos" href="#" target="_blank">Repo 1</a>
        <a  class="repos" href="#" target="_blank">Repo 2</a>
        <a class="repos" href="#" target="_blank">Repo 3</a>
        
    </div>
</div>
        
      
</div> 
    `
    main.innerHTML = card;
    getRepos(username)
}


// init call
getUser("bhagirath-wscubetech")


const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();
    data.forEach(
        (item) => {

            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            repos.appendChild(elem)
        }
    )
}

const formSubmit = () => {
    if (searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value = ""
    }
    return false;
}


searchBox.addEventListener(
        "focusout",
        function() {
            formSubmit()
        }
    )
    /**
     *   <a class="repo" href="#" target="_blank">Repo 1</a>
                        <a class="repo" href="#" target="_blank">Repo 2</a>
                        <a class="repo" href="#" target="_blank">Repo 3</a>
     */


