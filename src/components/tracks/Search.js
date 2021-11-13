import React, { Component } from 'react'
import { Consumer } from '../../context'
import axios from 'axios'


class Search extends Component {

    state = {
        trackTitle: ""
    }
    onChange = e => {
        this.setState({ trackTitle: e.target.value })
        console.log(this.state.trackTitle)
    }
    findTrack = (dispatch, e) => {
        e.preventDefault()
        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res => dispatch({
            type: 'SEARCH_TRACKS',
            payload: res.data.message.body.track_list
        }))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value
                        return (
                            <div className="card card-body mb-4 p-4">
                                <h1 className="display-4 text-center">
                                    <i className="fas fa-music"></i> Search for a song
                                </h1>
                                <p className="text-secondary text-center">Get the lyrics for any song</p>
                                <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <input
                                        type="text"
                                        className="form-control form-control-lg mb-2"
                                        placeholders="Song title ..."
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                        />
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block mb-3" type="submit" style={{width:"100%"}} >Get Track Lyrics</button>
                                </form>
                            </div>
                        )
                    }
                }
            </Consumer>
            )
    }
}

export default Search