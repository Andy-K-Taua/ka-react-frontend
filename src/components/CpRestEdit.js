import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import {config} from '../Constants'

function EditRest(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    axios.patch(`${config.url.API_URL}/restaurants/${props.restaurant.id}`, {restaurant: {
      name: name,
      address: address,
      cuisine: cuisine,
      description: description,
      image: image
    }})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.warn(error);
    })
  }

  return (
    <>
      <Button variant="outline-primary" size="sm" className="buttonSpacing" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.restaurant.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="editRest">
            <Form.Group controlId="name">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control type="text" placeholder={props.restaurant.name} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder={props.restaurant.address} onChange={e => setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="cuisine">
              <Form.Label>Cuisine</Form.Label>
              <Form.Control type="text" placeholder={props.restaurant.cuisine} onChange={e => setCuisine(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder={props.restaurant.description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder={props.restaurant.image} onChange={e => setImage(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="editRest" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRest
