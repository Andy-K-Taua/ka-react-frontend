import React from 'react'

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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search for a restaurant or cuisine!</label>
          <input type="text" id="search" placeholder="What are you kraving today?" onChange={this.handleChange}></input>
          <button>Search!</button>
        </form>
      </div>
    )
  } // render()
} // class SearchForm

export default SearchForm
