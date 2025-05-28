// const promesa = new Promise(executor); // <pending>

// function executor(resolve, reject) {
//   setTimeout(() => {
//     const hasConnectionError = Math.random() > 0.5;

//     if (hasConnectionError) {
//       reject(new Error("💩"));
//     } else {
//       resolve({ name: "Ana" });
//     }
//   }, 2000);
// }

// promesa
//   .then((user) => console.log("¡Bienvenid@ " + user.name + "!")) // <fullfilled>
//   .catch((error) => console.log(error.message)); // <rejected>

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

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

function getUser(email, password) {
  // retornamos una promesa...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user || user.password !== password) {
        const error = new Error("Credenciales invalidas");
        // se rechaza si las credenciales son invalidas
        reject(error);
      }

      // se cumple pasando la información del usuario
      resolve(user);
    }, 2000);
  });
}

function getPublicRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasConnectionError = Math.random() > 0.5;
      if (hasConnectionError) {
        const error = new Error("Error de conexión");
        reject(error);
      }

      const repos = githubPublicRepos.filter((repo) => repo.owner === username);
      resolve(repos);
    }, 3000);
  });
}

// User
const userPromise = getUser("ana@mail.com", "letmein");

userPromise
  .then((user) => {
    console.log("¡Bienvenid@ " + user.name + "!");

    return getPublicRepos(user.githubUsername);
  })
  .then((repos) => {
    repos.forEach((repo, i) => console.log(`${i + 1}. ${repo.name}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
