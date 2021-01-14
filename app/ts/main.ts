import BotaoConcluir from './componentes/concluiTarefa.js'; 
import BotaoDeleta from './componentes/deletaTarefa.js';


    const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]') as (HTMLInputElement);
    let valor = input as (HTMLInputElement);
    
    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${valor.value}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.classList.add('task');
    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa);
    

    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');


novaTarefa.addEventListener('click', criarTarefa); 

export default criarTarefa;