import React from 'react'
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
            <form onSubmit={this.handleSubmit}>
              <Form.Group>
                      <Form.Control size="lg" type="text" id="search" placeholder="What are you kraving today?" onChange={this.handleChange} />
                      <Button type="submit" variant="secondary">Search</Button>
              </Form.Group>
            </form>
        </div>
      </div>
    )
  } // render()
} // class SearchForm

export default SearchForm
