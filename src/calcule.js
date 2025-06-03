// Executa quando o DOM estiver completamente carregado
    document.addEventListener('DOMContentLoaded', function() {
        const loggedInUsername = localStorage.getItem("usuarioLogado");
        const navAuthSection = document.getElementById('nav-auth-section');

        if (loggedInUsername) {
            // Usuário está logado
            const userDataString = localStorage.getItem(loggedInUsername);
            if (userDataString) {
                const userData = JSON.parse(userDataString);

                // Limpa o conteúdo atual do LI (o botão de Login/Cadastro)
                navAuthSection.innerHTML = '';

                // Adiciona a saudação
                const greeting = document.createElement('span');
                greeting.textContent = `Olá, ${userData.name}!`;
                navAuthSection.appendChild(greeting);

                // Adiciona o link "Ver Dados"
                const viewDetailsLink = document.createElement('a');
                viewDetailsLink.href = '#'; // Não navega para lugar nenhum
                viewDetailsLink.textContent = 'Veja seus Dados';
                viewDetailsLink.classList.add('user-action-link'); // Classe para estilização
                viewDetailsLink.onclick = function(event) {
                    event.preventDefault(); // Previne a navegação padrão do link
                    // Exibe os dados (COM AVISO DE SEGURANÇA)
                    alert(
                        `Suas Informações:\n\n` +
                        `Nome: ${userData.name}\n` +
                        `Email: ${userData.email}\n` +
                        `Usuário: ${loggedInUsername}\n` +
                        `Senha: ${userData.password} (Atenção: Exibir senhas é inseguro!)`
                    );
                };
                navAuthSection.appendChild(viewDetailsLink);

                // Adiciona o botão "Sair"
                const logoutButton = document.createElement('button');
                logoutButton.textContent = 'Sair';
                logoutButton.classList.add('btn-sair'); // Classe para estilização
                logoutButton.onclick = function() {
                    logout();
                };
                navAuthSection.appendChild(logoutButton);

            } else {
                // Caso raro: usuário logado existe, mas dados não encontrados
                console.error("Dados do usuário logado não encontrados no localStorage.");
                // Mantém o botão de login original ou exibe erro
                navAuthSection.innerHTML = '<a href="login.html" class="btn">Login / Cadastro (Erro)</a>';
                localStorage.removeItem("usuarioLogado"); // Limpa o login inválido
            }
        }
        // Se não houver loggedInUsername, o HTML original do LI permanece (botão Login/Cadastro)
    });

    function logout() {
        // Remove o indicador de usuário logado
        localStorage.removeItem("usuarioLogado");
        alert("Você saiu com sucesso.");
        // Recarrega a página para atualizar a navbar
        window.location.reload();
    }
    
function atualizarFormulario() {
  const tipo = document.getElementById('tipoCalculo').value;
  const inputs = document.getElementById('inputs');
  inputs.innerHTML = '';

  const campos = {
    peso: '<label for="peso">Peso (kg):</label><input type="number" id="peso">',
    altura: '<label for="altura">Altura (cm):</label><input type="number" id="altura">',
    idade: '<label for="idade">Idade:</label><input type="number" id="idade">',
    sexo: `<label for="sexo">Sexo:</label>
            <select id="sexo">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>`,
    nivel: `<label for="nivel">Nível de atividade:</label>
            <select id="nivel">
              <option value="1.2">Sedentário</option>
              <option value="1.375">Levemente ativo</option>
              <option value="1.55">Moderadamente ativo</option>
              <option value="1.725">Muito ativo</option>
              <option value="1.9">Extremamente ativo</option>
            </select>`
  };

  if (tipo === 'imc') {
    inputs.innerHTML = campos.peso + campos.altura;
  } else if (tipo === 'tmb') {
    inputs.innerHTML = campos.peso + campos.altura + campos.idade + campos.sexo;
  } else if (tipo === 'calorias') {
    inputs.innerHTML = campos.peso + campos.altura + campos.idade + campos.sexo + campos.nivel;
  } else if (tipo === 'agua') {
    inputs.innerHTML = campos.peso + campos.idade;
  }
}

function calcular() {
  const tipo = document.getElementById('tipoCalculo').value;
  const peso = parseFloat(document.getElementById('peso')?.value);
  const altura = parseFloat(document.getElementById('altura')?.value);
  const idade = parseInt(document.getElementById('idade')?.value);
  const sexo = document.getElementById('sexo')?.value;
  const nivel = parseFloat(document.getElementById('nivel')?.value);
  let resultado = '';

  if (tipo === 'imc') {
    if (!peso || !altura) return alert("Preencha peso e altura.");
    const imc = peso / ((altura / 100) ** 2);
    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';
    resultado = `<strong>IMC:</strong> ${imc.toFixed(2)} (${classificacao})`;

  } else if (tipo === 'tmb') {
    if (!peso || !altura || !idade || !sexo) return alert("Preencha todos os campos.");
    const tmb = sexo === 'masculino'
      ? 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)
      : 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    resultado = `<strong>TMB:</strong> ${tmb.toFixed(2)} kcal/dia`;

  } else if (tipo === 'calorias') {
    if (!peso || !altura || !idade || !sexo || !nivel) return alert("Preencha todos os campos.");
    const tmb = sexo === 'masculino'
      ? 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)
      : 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    const calorias = tmb * nivel;
    resultado = `<strong>Calorias recomendadas:</strong> ${calorias.toFixed(0)} kcal/dia`;

  } else if (tipo === 'agua') {
    if (!peso || !idade) return alert("Preencha peso e idade.");
    let aguaPorKg = idade <= 30 ? 40 : idade <= 55 ? 35 : 30;
    const agua = peso * aguaPorKg;
    resultado = `<strong>Água recomendada:</strong> ${agua.toFixed(0)} ml/dia`;
  }

  document.getElementById('resultados').innerHTML = resultado;
}

// Mostrar formulário inicial ao carregar
atualizarFormulario();
