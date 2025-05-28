// Callbacks
const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

// GitHub Repositorios
const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

function getUser(email, password, callback) {
  setTimeout(() => {
    const user = users.find((u) => u.email === email); // {} o undefined

    if (!user || user.password !== password) {
      const error = new Error("Credenciales invalidas");
      callback(error);
      return;
    }

    callback(null, user);
  }, 2000);
}

function getPublicRepos(username, callback) {
  setTimeout(() => {
    const hasConnectionError = Math.random() > 0.5; // true o false
    if (hasConnectionError) {
      const error = new Error("Error de conexión");
      callback(error);
      return;
    }

    const repos = githubPublicRepos.filter((repo) => repo.owner === username);

    callback(null, repos);
  }, 3000);
}

// solicitamos los datos del usuario
getUser("ana@mail.com", "letmein", function (error, user) {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log("¡Bienvenid@ " + user.name + "!");

  // solicitamos los repositorios de GitHub
  getPublicRepos(user.githubUsername, function (error, repos) {
    if (error) {
      console.log(error.message);
      return;
    }

    repos.forEach((repo, i) => console.log(`${i + 1}. ${repo.name}`));
  });
});
