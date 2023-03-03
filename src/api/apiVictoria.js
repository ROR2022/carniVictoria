import axios from "axios";


export const getSaludo = async ()=>{
  try {
    const result = await axios.get('/probando');
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}

export const postResena = async (data)=>{
  try {
    const result = await axios.post('/postresena',data);
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}

export const getAllResenasBack = async ()=>{
  try {
    const result = await axios.get('/getAllResenas');
    console.log(result);
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteResena = async (id)=>{
  try {
    const result = await axios.delete(`/deleteResena/${id}`);
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}