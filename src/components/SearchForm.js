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
        <div className="backgroundImg"></div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalSearch">
              <Form.Label></Form.Label>
                <Col className="searchBar" sm={4}>
                  <Form.Control
                    type="text"
                    placeholder="What are you kraving today?" onChange={this.handleChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col>
                <Button type="submit" variant="secondary">Search</Button>
              </Col>
            </Form.Group>
          </Form>
      </div>
    )
  } // render()
} // class SearchForm

export default SearchForm
