import './App.css';
import Avatar from "./Images/avatar-pic.svg"
import Hotel1 from "./Images/hotel1.jpg"
import Hotel3 from "./Images/hotel3.jpg"
import LocationImg from "./Images/location.png"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className='flex head'>
        <img src = {Avatar} alt = "avatar" className='avatar'/>
        <small>Need help? call 1234567890 </small>
      </header>
      <main className='main feature-list ' style = {{backgroundImage: `url(${Hotel1})`}}>
        <ul className='list'>
          <small className='list-items'>Check in ⬇ </small>
          <small className='list-items'>Check out ⬇ </small>
          <small>3 adults - 0 children - 2 rooms ⬇</small>
        </ul>
        <button className='cta-btn'>Check Availibility</button>
        <img src = {Avatar} alt = "badge" className = "avatar icon-badge" />
      </main>

      <section className="price-details">
                <small className="margin-top-bottom">Lorem Ipsum kndkk</small>
        
                <div className="flex mt1">
                  <p className='font-small'>Rooms</p>
                  <div className='flex'>
                    <button className='modify-btn'>-</button>
                    <p className='quantity'>2</p>
                    <button className='modify-btn'>+</button>
                  </div>
                </div>
                <small>some text here</small>
        
                <div className="flex mt1">
                  <p className='font-small'>children</p>
                  <div className='flex'>
                    <button className='modify-btn'>-</button>
                    <p className='quantity'>0</p>
                    <button className='modify-btn'>+</button>
                  </div>
                </div>
                <small>some text here</small>

   
                <div className="flex mt1 ">
                  <p className='font-small'>Adults</p>
                  <div className='flex'>
                    <button className='modify-btn'>-</button>
                    <p className='quantity'>3</p>
                    <button className='modify-btn'>+</button>
                  </div>
                </div>
                <small className='mb1'>some text here</small>

                <div className="btn-container">
                <button class="button outline-btn">Done</button>
                </div>
   
            </section>
            <section className='flex image-section mt1'>
              <img alt = "img" src = {Hotel1} className = "image" />
              <div className='flex wrap '>
                <img alt = "img" src = {Hotel3} className = "images mr1 " />
                <img alt = "img" src = {Hotel3} className = "images  " />
                <img alt = "img" src = {Hotel3} className = "images mr1 mt" />
                <img alt = "img" src = {Hotel3} className = "images mt " />
              </div>
            </section>
            <div className='icon-badge2'>
                <p className='badge2 '>V</p>
                <p className='badge3'>R</p>
            </div>

            <section className='address flex'>
              <div>
                <h3>Hotel Vishal @ Airport</h3>
                <small className='font-smaller'>104/2/2 National Highway B Mahalapur New</small> <a href = "https://www.airporthotelvishal.com/" className='font-small' > View More</a>
                <p><small className='font-smaller'>Delhi 110037 New Delhi India</small></p>
                <p><small className='font-smaller'>+91 0123456789 9837393073</small></p>
              </div>
              <div>
                <img className='location-img' src = {LocationImg} alt = ""/>
              </div>

            </section>
            <ul className=' space mt1'>
              <small className='facilities font-small'>@ Free Parking</small>
              <small className='facilities font-small'>@ Conference Room</small>
              <small className='facilities font-small'>@ ATM</small>
              <small className='facilities font-small'>@ Conference Room</small>
              <small className='facilities font-small'>@ Conference Room</small>
            </ul>
            <p className='info font-small'>Hotel Vishal Residency, Mahipalpur New Delhi is the finest Airport Hotel Located on main NH8 Near IGI Airport in New Delhi. Being located Closer to International & Domestic Airport New Delhi, Hotel Vishal Residency is one of the Best Choice for All Indian and Overseas Travellers, Tourists and Business delegates who comes from different part of the world for their stay in the Delhi. A Unit of Hotel Vishal Residency, The Hotel Vishal Residency, Mahipalpur New Delhi believes in best of service and hospitality to its visitors. The Hotel provides its visitors a luxurious accommodation at Delhi at affordable prices.</p>

            <hr className='hr'/>
      </div>

            <h3 className='start'>Property Rules</h3>
            <small className='start'>check in @12 PM checkout @12PM</small>
            <div className='rules'>
              <ul className='start1 mt1 mb1'>
                <li className='font-small'>Rule number 1</li>
                <li className='font-small'>Rule number 2</li>
                <li className='font-small'>Rule number 3</li>
                <li className='font-small'>Rule number 4</li>
                <li className='font-small'>Rule number 5</li>
                <li className='font-small'>Rule number 6</li>
                <li className='font-small'>Rule number 7</li>
                <li className='font-small'>Rule number 8</li>
                <li className='font-small'>Rule number 9</li>
                <li className='font-small'>Rule number 10</li>
                <li className='font-small'>Rule number 11</li>
                <li className='font-small'>Rule number 12</li>
              </ul>
              <ul className='start1 mt1'>
                <li className='font-small'>Rule number 13</li>
                <li className='font-small'>Rule number 14</li>
                <li className='font-small'>Rule number 15</li>
                <li className='font-small'>Rule number 16</li>
                <li className='font-small'>Rule number 17</li>
                <li className='font-small'>Rule number 18</li>
                <li className='font-small'>Rule number 19</li>
                <li className='font-small'>Rule number 20</li>
              </ul>
            </div>
     

    </div>
  );
}

export default App;
