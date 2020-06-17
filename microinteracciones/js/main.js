var postDataObject = {}

const getPostData = (event) => {
    event.preventDefault()

    let inputsCollection = document.querySelectorAll(".form-control");
    inputsCollection.forEach(item => {
        let objectKey = item.dataset.pointsTo
        let objectValue = item.value
        postDataObject[objectKey] = objectValue
    })
    savePost(postDataObject)
}
var submitButton = document.getElementById('Get-users')

submitButton.addEventListener('click', getPostData)


const savePost = (data) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            getPost()
        }
    };
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/Equipo1/posts/.json", true);
    xhttp.send(
        JSON.stringify(data)
    );
}

const printPost = (postDataObject) => {

    const { name, date, post, postKey } = postDataObject;

    let postSection = document.getElementById("Posts")
    let currentPosts = postSection.innerHTML
    let newPost = `
    <div class =" col-12 col-md-3 mb-3 d-flex " >
    <div class="card align-self-stretch w-100"> 
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-title">${date}</h6>
      <p class="card-text">${post}</p>
      <button  class= "delete-post btn btn-primary mt-3 btn-sm" data-post-key=${postKey}>Borrar Post</button>
      </div>
  </div>     
   </div> `


    postSection.innerHTML = currentPosts + newPost
}


const getPost = () => {
    let postWrapper = document.getElementById('Posts')
    postWrapper.innerHTML = ""
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            for (let post in response) {
                printPost({...response[post], postKey: post })
                addDeleteListeners()
            }

        }
    };
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/Equipo1/posts/.json", true);
    xhttp.send()
}
const deletePost = event => {
    let postWrapper = document.getElementById('Posts')
    postWrapper.innerHTML = ""
    let selectetPost = event.target
    let postKey = selectetPost.dataset.postKey
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            getPost()

        };
    }
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/Equipo1/posts/${postKey}/.json`, true);
    xhttp.send()

}
const addDeleteListeners = () => {
    let btnList = document.querySelectorAll(".delete-post")
    btnList.forEach(button => {
        button.addEventListener('click', deletePost)
    })
}
getPost()