import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SearchForm extends React.Component {

  state = {
    query: ''
  }

  handleChange = (ev) => {
    this.setState({query: ev.target.value});
  } // handleChange()

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.history.push(`/results/${this.state.query}`)
  } // handleSubmit()

  render() {

    return(
      <div>
        <div className="backgroundImg">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalSearch">
              <Form.Label column sm={2} className="searchBar"></Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    placeholder="What are you kraving today?" onChange={this.handleChange} />
                </Col>
            </Form.Group>
          <div className="searchbutton">
            <Form.Group as={Row}>
              <Col sm={4}>
                <Button type="submit" variant="secondary">Search</Button>
              </Col>
            </Form.Group>
          </div>
          </Form>
        </div>
      </div>
    )
  } // render()
} // class SearchForm

export default SearchForm
