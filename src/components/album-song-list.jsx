import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

@observer class AlbumSongList extends Component {
  constructor(props) {
    super(props)
    this.state = { redirect: false} 
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside() {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ redirect: true})
      console.log('clicked outside')
    }
  }

  render() {
    // const { artistInfoStore } = this.props
    if (this.state.redirect) {
      return <Redirect push to='/' />
    }

    return (
      <div ref={this.setWrapperRef} className='asl__container'>
        asd
      </div>
    )
  }
}

export default AlbumSongList