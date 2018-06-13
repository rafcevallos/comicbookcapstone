import React, { Component } from "react"
import pow from "../images/pow.png"
import $ from "jquery"
import profilepic from '../images/profile.png'
import "./NavBar.css"


export default class NavBar extends Component {

    // Set initial state
    state = {
        searchTerms: ""
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    search = (e) => {
        if (e.charCode === 20) {
            this.props.searchHandler(this.state.searchTerms)
            this.setState({ searchTerms: "" })
        }
    }

    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
        }
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" onClick={this.props.viewHandler} href="#">
                    <img id="nav__home" src={pow} style={{ height: `100px` }} />
                </a>
                <input id="searchTerms"
                    value={this.state.searchTerms}
                    onChange={this.handleFieldChange}
                    onKeyPress={this.search}
                    className="form-control w-100"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" id="nav__profile"
                            onClick={this.props.viewHandler} href="#">
                            <img id="navimg__profile"
                                 onClick={()=>$(".profileMenu").slideToggle(333)}
                                 src={profilepic} style={{ height: `100px`, animation: `radial-pulse 1s infinite`}} />
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <this.LoginLogout />
                    </li>
                </ul>
                <article className="profileMenu">
                    <section className="profileMenu__item">
                        <div><a title="notifications" id="nav__profile" href="#">My Profile</a></div>
                        <div><a title="notifications" id="nav__collection" href="#">My Collection</a></div>
                        <div><a title="notifications" id="nav__wishlist" href="#">My Wishlist</a></div>
                        <div><a title="notifications" id="nav__friends" href="#">My Friends</a></div>
                    </section>
                </article>
            </nav>
        )
    }
}