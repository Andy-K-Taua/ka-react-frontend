import React from 'react'
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
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
          <Container>
            <Row className="justify-content-md-center">
                <form onSubmit={this.handleSubmit}>
                  <InputGroup className="mb-3">
                    <div className="searchBar">
                      <Col sm={7}>
                        <FormControl className="fixedSearch" type="text" aria-describedby="basic-addon2" id="search" placeholder="What are you kraving today?" onChange={this.handleChange} />
                      </Col>
                    <InputGroup.Append>
                        <Row>
                          <div className="searchButton">
                          <Col sm={4}>
                            <Button  type="submit" variant="secondary">Search</Button>
                        </Col>
                      </div>
                      </Row>
                    </InputGroup.Append>
                </div>
                  </InputGroup>
                </form>
              </Row>
            </Container>
        </div>
      </div>
    )
  } // render()
} // class SearchForm

export default SearchForm
