// Classe responsável pela modelagem de dados (base da estrutura)

// Adicionar uma anotação na classe -> Export
// Essa classe sera usada em outras partes
export class TarefaModel{

    constructor(){
        this.tarefas = [];
        this.currentId = 1;
    }

    addTarefa(titulo){
        const newTarefa = {
            id: this.currentId++,
            titulo: titulo,
            completed: false
        };
        this.tarefas.push(newTarefa);
    }

    getTarefas(){
        return this.tarefas;
    }

    atualizarTarefa(id){
        const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
        if(tarefa){
            tarefa.completed = !this.tarefas.completed;
        }
    }

    removeTarefa(id){
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }
}

// O que foi feito?
// Um CRUD
// Vetor de tarefas
// Id automatico para tarefas