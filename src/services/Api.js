import axios from "axios";
import toast from "react-hot-toast";

const instance = axios.create({
  baseURL: "http://localhost:333",
});

export const getInfo = (url) => {
  return instance.get(url).then(response => {
    return response.data
  })
}

export const setInfo = (url, data) => {
  return instance.post(url, data)
  .then(() => {
    toast.success('Cadastrado com sucesso')
  })
  .catch(() => {
    toast.error('Erro ao cadastrar')
  })
}

export const updateInfo = (url, data) => {
  return instance.put(url, data)
  .then(() => {
    toast.success('Atualizado com sucesso')
  })
  .catch(() => {
    toast.error('Erro ao atualizar')
  })
}

export const deleteInfo = (url) => {
  return instance.delete(url)
  .then(() => {
    toast.success('Removido com sucesso')
  })
  .catch(() => {
    toast.error('Erro ao remover')
  })
}
