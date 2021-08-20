function mouseOver(color) {
    document.body.style.background = color
    document.body.classList.add("out")
}

function mouseOut() {
    document.body.style.background = "linear-gradient(180deg, rgb(83, 13, 4) 0%, rgb(0, 0, 0) 35%)"
    document.body.classList.remove("out")
}

function getlist() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      method: "GET",
      headers: {
        "x-rapidapi-key":
          "728c3a7e86mshdeb785d6f2a5187p147673jsnbe6c1c4d2b0f",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((music) => {
        console.log(music);
        for (let pl of music.data) {
          const row = document.querySelector(".row");
          row.innerHTML += `
            <div class="col-12 col-sm-6 col-md-3">
                <div class="card">
                    <img src="" class="card-img-top" alt="${pl.title}">
                    <div class="card-body">..
                        <h5 class="card-title">${pl.title}</h5>
                    </div>
                </div>
            </div>
            `;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

//   function countsongs() {
//     var number = document.getElementsByClassName("card").length;
//     document.getElementById("count").innerHTML = number;
//   }
