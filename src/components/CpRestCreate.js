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
    axios.post(`${config.url.API_URL}/restaurants`, {restaurant: {
      name: name,
      address: address,
      cuisine: cuisine,
      description: description,
      image: image,
    },
    user_id: props.userId
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.warn(error);
    })
  }

  return (
    <>
      <Button variant="primary" className="addButton" onClick={handleShow}>
        Add Restaurant
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="createRest">
            <Form.Group controlId="name">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control type="text" placeholder="Enter restaurant name" onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter restaurant address" onChange={e => setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="cuisine">
              <Form.Label>Cuisine</Form.Label>
              <Form.Control type="text" placeholder="Enter restaurant cuisine" onChange={e => setCuisine(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter restaurant description" onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Enter image location" onChange={e => setImage(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="createRest" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRest
