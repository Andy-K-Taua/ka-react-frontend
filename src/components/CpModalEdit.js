import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import {config} from '../Constants'

function EditButton(props) {
  const [show, setShow] = useState(false);
  const [menuItem, setMenuItem] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    axios.patch(`${config.url.API_URL}/menus/${props.menu.id}`, {menu: {
      menu_item: menuItem,
      item_description: description,
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
          <Modal.Title>{props.menu.menu_item}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="editMenu">
            <Form.Group controlId="menuItem">
              <Form.Label>Menu Item Name</Form.Label>
              <Form.Control type="text" placeholder={props.menu.menu_item} onChange={e => setMenuItem(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="itemDescription">
              <Form.Label>Item Description</Form.Label>
              <Form.Control type="text" placeholder={props.menu.item_description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="imageLink">
              <Form.Label>Image Link</Form.Label>
              <Form.Control type="text" placeholder={props.menu.image} onChange={e => setImage(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="editMenu" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditButton
