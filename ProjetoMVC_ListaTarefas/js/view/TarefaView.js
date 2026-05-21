export class TarefaView{
    constructor(){
        this.tarefaInput = document.getElementById("tarefaInput");
        this.addTarefaBtn = document.getElementById("addTarefaBtn");
        this.listaTarefas = document.getElementById("listaTarefas");
        this.mensagem = document.getElementById("mensagem");
    }

    //pegar a tarefa do input
    getTarefaInputValue(){
        return this.tarefaInput.value.trim();
    }

    //limpar o valor do input
    clearInput(){
        this.tarefaInput.value = "";
    }

    // Mensagem para o usúario
    showMensagem(texto){
        this.mensagem.textContent = texto;
    }

    clearMensagem(){
        this.mensagem.textContent = "";
    }

    // Renderiza a lista de tarefas
    renderTarefa(tarefas, atualizar, remover){
        // Limpa a lista
        this.listaTarefas.innerHTML = "";

        // Reconstroea lista
        tarefas.forEach(tarefa => {
            const li = document.createElement("li");
            if(tarefa.completed){
                li.classList.add("completed"); // Adicionando a classe completed
            }

            const span = document.createElement("span");
            span.textContent = tarefa.titulo;

            const action = document.createElement("div");
            action.classList.add("action");

            const atualizarBtn = document.createElement("button");
            atualizarBtn.textContent = tarefa.completed ? "Desfazer" : "Concluir"; // Operador ternario
            atualizarBtn.addEventListener("click", () => atualizar(tarefa.id)); // Função estara no controller

            // Botão para remover tarefa
            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener("click", () => remover (tarefa.id));

            // Adicionar elementos ao HTML
            action.appendChild(atualizarBtn);
            action.appendChild(removerBtn);

            li.appendChild(span);
            li.appendChild(action);

            this.listaTarefas.appendChild(li);
        });
    }
}