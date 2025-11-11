const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clrLst');
const movieCount = document.getElementById('movieCount');
const moviesList = document.getElementById('moviesList');

let movies = [];

function updateList() {
    moviesList.innerHTML = "";
    for(let i = 0; i < movies.length; i++)
    {
        const li = document.createElement("li");
        li.textContent = movies[i];
        moviesList.appendChild(li);
    }
    movieCount.textContent = movies.length;
}

addBtn.addEventListener("click", () => {
    const movieName = movieInput.value.trim();
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }
    movies.push(movieName);
    movieInput.value = "";
    updateList();
});

clearBtn.addEventListener("click", () => {
    if (movies.length === 0)
        return;
    if (confirm("Are you sure you want to clear the list ?")) {
        movies = [];
        updateList();
    }
});
