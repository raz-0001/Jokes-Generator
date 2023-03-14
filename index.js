var para = document.querySelector("p");

function generate(){
JokeAPI.getJokes({
    jokeType: "single"
  })
    .then((r) => r.json())
    .then((data) => {
        para.innerHTML=data.joke;
    });
}