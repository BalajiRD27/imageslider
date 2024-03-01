import ImageSlider from './ImageSlider';
import cat1 from './images/cat1.jpg'
import cat2 from './images/cat2.jpg'
import cat3 from './images/cat3.jpg'
import cat4 from './images/cat4.jpg'
import cat5 from './images/cat5.jpg'

let cats=[cat1,cat2,cat3,cat4,cat5]
function App() {
  return (
    <div style={{maxWidth:'1500px',width:'100%',height:"550px",margin:"0 auto"}}>
      <ImageSlider imageUrls={cats} />
    </div>
  );
}

export default App;
