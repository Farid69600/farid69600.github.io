//alert('coucou')

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#send')
const content = document.querySelector('.content')

button.addEventListener('click',()=>{
    testAuth(username.value, password.value) }
)

function testAuth(user, pass){
    //console.log(user, pass)
    let url = "https://damp-sea-44841.herokuapp.com/api/login_check"
    let corpsDeRequete = {
        username:user,
        password:pass
    }
    let requete = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(corpsDeRequete)

    }

    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(reponseDeserialisee=> {
            // console.log(reponseDeserialisee)
            getVetement(reponseDeserialisee.token)
        })
}

function getVetement(token){

    let url = "https://damp-sea-44841.herokuapp.com/api/vetements"

    let requete = {
        method: "GET",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`

        },

    }

    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(messageDuServeur=>{
            //console.log(messageDuServeur)
            console.log(messageDuServeur)
            content.innerHTML = messageDuServeur

        })

}