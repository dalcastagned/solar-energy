import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://json-server-solar-energy.herokuapp.com/",
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
