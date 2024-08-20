document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  getUserProfile(userName)
});

async function user(nameProfile) {
  const response = await fetch(`https://api.github.com/users/${nameProfile}`);
  return await response.json()
}

function getUserProfile(nameProfile) {
  user(nameProfile).then(userData => {
    let userInfo = `<img src="${userData.avatar_url}" alt="Foto de perfil do usuário" />
                    <div class="data">
                      <h1>${userData.name ?? 'Não possui nome cadastrado :C'}</h1>
                      <p>${userData.bio ?? 'Não possui bio cadastrada :C'}</p>
                    </div>`
    document.querySelector('.profile-data').innerHTML = userInfo
  });
}