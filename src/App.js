import React, { Component } from 'react'
import api from './api' // mocked

const Button = (props) => {
  const { type, index, length, onClick, children } = props

  if (type === 'prev') {
    return index ? <button onClick={onClick}>{children}</button> : <button disabled>{children}</button>
  }
  
  return index >= length - 1 ? <button disabled>{children}</button> : <button onClick={onClick}>{children}</button>
}

const Image = ({ image }) => {
  return image ? (
    <div>
      <p>{ image['title'] }</p>
      { image['images'].map((url, i) => <img key={i} src={url} alt='' />) }
    </div>
  ) : null
}

const sum = (bool = false) => (prevState) => {
  const { index, images } = prevState
  const newIndex = bool ? index + 1 : index - 1

  return ({ index: newIndex, currentImage: images[newIndex] })
}

export default class App extends Component {
  async componentDidMount () {
    const images = await api()

    const { index } = this['state']

    const length = images['length']
    const currentImage = images[index]
    this.setState({ images, currentImage, length })
  }

  handlePrevButton = () => this.setState(sum(false))

  handleNextButton = () => this.setState(sum(true))
  
  render () {
    const { index, currentImage, length } = this['state']

    return (
      <div>
        <Button type='prev' index={index} onClick={this.handlePrevButton}>previous</Button>
        <Button type='next' index={index} length={length} onClick={this.handleNextButton}>next</Button>

        <Image image={currentImage} />
      </div>
    )
  }

  state = {
    index: 0
  }
}
