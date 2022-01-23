import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://localhost:3333",
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
