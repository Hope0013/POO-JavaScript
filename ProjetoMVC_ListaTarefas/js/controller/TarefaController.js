export class TarefaController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    // Função que roda ao iniciar o sistema
    init(){
        // Evento para adicionar tarefa
        this.view.addTarefaBtn.addEventListener("click", () => this.addTarefas());
        
        // Renderizar a lista
        this.view.renderTarefas(
            this.model.getTarefas(),
            (id) => this.atualizarTarefa(id),
            (id) => this.removeTarefa(id),
        );
    }

    addTarefa(){
        const titulo = this.view.getTarefaInputValue();

        if(titulo === ""){
            this.view.showMensagem("O Título da Tarefa Não Pode Ser Vazio");
            return; // Interrompe a função
        }

        // Continuo escrevendo a função, caso a mensagem não estiver vazia, ela só segue
        this.view.clearMensagem(); // Limpa a mensagem de erro
        this.model.addTarefa(titulo);
        this.view.clearInput();
        this.updateView();
    }

    atualizarTarefa(id){
        this.model.atualizarTarefa(id);
        this.updateView();
    }

    removeTarefa(id){
        this.model.removeTarefa(id);
        this.updateView();
    }

    updateView(){
        this.view.renderTarefa(
            this.model.getTarefas(),
            (id) => this.atualizarTarefa(id),
            (id) => this.removeTarefa(id)
        )
    }
}