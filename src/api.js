const randomColor = () => `${Math.floor(Math.random() * 16777215).toString(16)}` 

const getImage = (color = randomColor()) => `http://via.placeholder.com/250x250/${color}/${color}`

const images = [
  {
    title: 'First Block',
    images: [getImage(), getImage(), getImage()]
  },
  {
    title: 'Second Block',
    images: [getImage(), getImage()]
  },
  {
    title: 'Third Block',
    images: [getImage(), getImage(), getImage(), getImage()]
  },
  {
    title: 'Fourth Block',
    images: [getImage(), getImage(), getImage(), getImage()]
  }
]

export default () => Promise.resolve(images)
