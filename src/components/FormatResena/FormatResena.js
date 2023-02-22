import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { primaryColor } from "../../assets/colors";
import useUser from '../../hooks/useUser';
import { useEffect, useState } from "react";
import { getSaludo, postResena } from "../../api/apiVictoria";
import {useNavigate} from "react-router-dom"

const FormatResena = () => {
  const [dataUser,setDataUser] = useUser();
  const navigate = useNavigate();
  const { emailUser, nameUser, telUser, urlImageUser}= dataUser;
  const [myResena, setMyResena] = useState({
  emailUser,
  nameUser,
  telUser: telUser||'',
  urlImageUser,
  comment: ''
  })
  
  useEffect(() => {
    console.log('imagen del Usuario:..',urlImageUser);
  
    return 
  }, [])
  

  const handleChange = (e)=>{
    //console.log(e.target.name,e.target.value);
    setMyResena({
      ...myResena,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const result = await postResena(myResena);
    console.log('Enviando datos:..',myResena);
    console.log('result:..',result);
    navigate('/');
  }

  return (
    <Form className="w-75 me-auto ms-auto py-3">
      <h2 className="ms-auto me-auto text-secondary text-center">Hola!!!</h2>
      <h6>
        <img style={{width:'50px'}} className='rounded' src={urlImageUser} alt="imageUser" />
      <span style={{color: primaryColor}} className="">{nameUser}</span>
      </h6>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control value={emailUser} disabled type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control value={myResena.telUser} name='telUser' onChange={handleChange} type="tel" placeholder="teléfono" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicComments">
        <Form.Label>Comentario:</Form.Label>
        <Form.Control
          style={{ resize: "none" }}
          name='comment'
          value={myResena.comment}
          onChange={handleChange}
          as="textarea"
          placeholder="comentario"
        />
        <Form.Text className="text-muted">
          Gracias por tus comentarios.
        </Form.Text>
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Enviar Reseña
      </Button>
    </Form>
  );
};

export default FormatResena;
