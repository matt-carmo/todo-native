import api from "./api"

const ConsomeApi = {
    async criarTarefa(tarefa) {

        try {

            const response = await api.post('/tasks', tarefa);

            return response.data;

        } catch (error) {

            throw error;

        }

    },

    async listarTarefas() {
       
        try {

            const response = await api.get('/tarefas');
            
   
            return response.data

        } catch (error) {
            console.log(error)
            throw error;

        }

    },

    async alterarTarefa(tarefa, id) {

        try {

            const response = await api.put(`/tarefas/${id}`, tarefa);

            return response.data;

        } catch (error) {

            throw error;

        }

    },

    async exibirTarefa(tarefa) {

        try {

            const response = await api.get(`/tarefas/${id}`, tarefa);

            return response.data;

        } catch (error) {

            throw error;

        }

    },

    async deletarTarefa(tarefa) {

        try {

            const response = await api.post('/tarefas');

            return response.data;

        } catch (error) {

            throw error;

        }

    },
    async criarUsuario(usuario) {

        try {

            const response = await api.post('/usuarios', usuario);
            
            return response.data;

        } catch (error) {

            throw error;

        }

    },

}

export default ConsomeApi;