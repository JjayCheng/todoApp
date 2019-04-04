import './footer.styl'

export default {
  data() {
    return {
      auther: 'Jjay'
    }
  },
  render() {
    return (
      <div id="footer">
        <h1>Written by {this.auther}</h1>
      </div>
    )
  }
}