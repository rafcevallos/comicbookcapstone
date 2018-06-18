import React, { Component } from "react"
import "./SearchResults.css"
import Avatar from "../images/avatar.png"
import "../bookfeed/Book.css"
import "bootstrap/dist/css/bootstrap.min.css"



export default class SearchResults extends Component {
    // Set initial state
    state = {
        books: [], /* This will hold all of the books from bagboard.json once they are fetched */
        // users: [],
        // collection: [],
        // wishlist: [],
    }

    /* componentDidMount() does not allow multiple searches to work due to it only making the fetch once which makes the user have to reload the page.  Turning the fetch into a function allows it to be re-used in definitely when the page is rendered. */

    Search = function () {
        fetch(`http://localhost:8088/books?description_like=${encodeURI(this.props.terms)}`)
            .then(r => r.json())
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }.bind(this)


    // componentDidMount() {
    // const newState = {}
    // fetch("http://localhost:8088/books")
    // return fetch(`http://localhost:8088/users?q=${encodeURI(this.props.terms)}`)
    // })
    // .then(r => r.json())
    // .then(users => {
    //     // newState.users = users
    //     this.setState({
    //         users: users
    //     })
    // return fetch(`http://localhost:8088/collection?q=${encodeURI(this.props.terms)}`)
    // })
    // .then(r => r.json())
    // .then(collection => {
    //     // newState.collection = collection
    //     this.setState({
    //         collection: collection
    //     })
    //     return fetch(`http://localhost:8088/wishlist?q=${encodeURI(this.props.terms)}`)
    // })
    // .then(r => r.json())
    // .then(wishlist => {
    //     // newState.collection = wishlist
    //     this.setState({
    //         wishlist: wishlist
    //     })
    //     console.log(this.state)
    // })
    // }

    render() {
        return (
            <div className="searchResults card-deck">
                {/* Invoke Search Function */}
                {this.Search()}
                <h1 className="search-header">Search Results</h1>
                <div className="search-container card">
                    <div className="row">
                        {
                            this.state.books.map(book => /* map over BOOKS ARRAY */
                                <div className="card-book col-sm-3" key={book.id}>
                                    {/* <div className="comic-thumbnail-container  card-img-top"> */}
                                    {/* </div> */}
                                    <div className="card-body">
                                        <img className="card-img-top" src={`${book.thumbnail.path}.${book.thumbnail.extension}`} />
                                        <h6 className="card-title">{book.title}</h6>
                                        <p>Date: {book.date}</p>
                                        <p>Pages: {book.pageCount}</p>
                                        <p>Price: $ {book.prices[0].price}</p>
                                        <p className="summary-text">Summary: {book.description}</p>
                                        {/* <p>Summary: {book.description.substring(0,250)}</p> */}
                                        <div className="button-group">
                                            {/* <p> */}
                                            <button className="btn btn-primary btn-sm btn-block" type="button" data-toggle="collapse" data-target="#content" aria-expanded="false" aria-controls="content">
                                                Description
                                            </button>
                                            {/* <div className="collapse" id="content">
                                                    <div class="card">
                                                    <div className="card-text">
                                                        <p>Date: {book.date}</p>
                                                        <p>Pages: {book.pageCount}</p>
                                                        <p>Price: $ {book.prices[0].price}</p>
                                                        <p>{book.description}</p>
                                                    </div>
                                                </div>
                                            </p>
                                        </div> */}
                                            <button className="btn btn-success btn-sm btn-block">Add to Collection</button>
                                            <button className="btn btn-info btn-sm btn-block">Add to Wishlist</button>
                                            <button className="btn btn-warning btn-sm btn-block">Add to Trade</button>
                                            {/* work on clicking and adding to collection */}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

/* I can use this to display users if I get Friends component working */
/* {
                                this.state.users.map(user =>
                                    <div className="card post" key={user.id}>
                                        <img className="card-img-top avatar" src={Avatar} alt="Generic person image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{user.email}</h5>
                                            <a href="#" className="btn btn-outline-success">View profile</a>
                                        </div>
                                    </div>
                                )
                            } */