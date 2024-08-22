const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
    this.userProfile.innerHTML = 
                      `<div class="info">
                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                        <div class="data">
                          <h1>${user.name ?? 'Não possui nome cadastrado :C'}</h1>
                          <p>${user.bio ?? 'Não possui bio cadastrada :C'}</p>
                        </div>
                      </div>`

    let repositoriesItens = ''
    user.repositories.forEach(repo => {
      repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
    });
    console.log(repositoriesItens);
    
    if(user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Últimos repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                     </div>`
    }
  }
}

export { screen }