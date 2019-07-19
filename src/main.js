class App {
  constructor() {
    this.repositories = [];
    
    this.formEl = document.getElementById('repo-form');
    
    this.registerHandlers();
  }  
  
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }
  
  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'Tire sua ideia do papel e de vida a sua startup',
      avatar_url: 'https://avatars2.githubusercontent.com/u/28929274?v=4',
      html_url: 'http://github.com/Rocketseat/starter-javascript-es6-exercicios',
    });

    console.log(this.repositories);
  }
}

new App();