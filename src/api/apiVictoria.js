import axios from "axios";

const proxy= "https://www.ror2022.ga";

export const getSaludo = async ()=>{
  try {
    const result = await axios.get(`${proxy}/probando`);
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}

export const postResena = async (data)=>{
  try {
    const result = await axios.post(`${proxy}/postresena`,data);
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}

export const getAllResenasBack = async ()=>{
  try {
    const result = await axios.get(`${proxy}/getAllResenas`);
    console.log(result);
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteResena = async (id)=>{
  try {
    const result = await axios.delete(`${proxy}/deleteResena/${id}`);
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}