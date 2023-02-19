import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormatResena = () => {
  return (
    <Form className="w-75 me-auto ms-auto py-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control type="tel" placeholder="teléfono" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicComments">
        <Form.Label>Comentario:</Form.Label>
        <Form.Control
          style={{ resize: "none" }}
          as="textarea"
          placeholder="comentario"
        />
        <Form.Text className="text-muted">
          Gracias por tus comentarios.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormatResena;
