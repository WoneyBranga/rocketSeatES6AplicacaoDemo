import axios from 'axios';

const buscaUsuario = async usuario => {
  const response = await axios.get(`https://api.github.com/users/${usuario}`);
  
  try {
    console.log(response.data);
  } catch (error) {
    console.log('Usuário não existe');
  }
};

buscaUsuario('diego3g');
