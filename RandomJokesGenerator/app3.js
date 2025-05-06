let btn = document.querySelector("button");

async function generate() {
    let p = document.querySelector('p');

    p.innerText = await getJokes();
}

const url = 'https://icanhazdadjoke.com/';  //random joke wali link

async function getJokes() {
    const config = { headers: { Accept: "application/json" } };

    let res = await axios.get(url, config);    // headers as additional info add krne se result json format me dega otherwise html formal me  deta
    return res.data.joke;
}

console.log(getJokes());