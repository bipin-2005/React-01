import React from 'react'

const App = () => {
  return (
    //this is a fragment  
    <>
      <div className="title">
        <b>SERVICES</b>
        This is our services
      </div>
      <div className="content">
        <div className="info"><img src="ecommerce.png" alt="e-commerce"></img>
          <b>E-commerce</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corporis? Dignissimos consectetur laborum tempora molestias!</p>
        </div>
        <div className="info">
          <img src="design.png" alt="Design" />
          <b>Responsive Design</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corporis? Dignissimos consectetur laborum tempora molestias!</p>
        </div>
        <div className="info">
          <img src="web.png" alt="Design" />
          <b>Web Security</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corporis? Dignissimos consectetur laborum tempora molestias!</p>
        </div>
      </div>
      <div className="main">
      <div className='head'>
      <b>PORTFOLIO</b>
      Lorem ipsum dolor sit amet consectetur.
      </div>
        <div className="items">
          <img src="threads.jpg" alt="Cover pic" />
          <b>Threads</b>
          Lorem, ipsum
        </div>
        <div className="items">
          <img src="s1.jpg" alt="Cover pic" />
          <b>Explore</b>
          Lorem, ipsum
        </div>
        <div className="items">
          <img src="finish.jpeg" alt="Cover pic" />
          <b>Finish</b>
          Lorem, ipsum
        </div>
        <div className="items">
          <img src="lines.webp" alt="Cover pic" />
          <b>Lines</b>
          Lorem, ipsum
        </div>
        <div className="items">
          <img src="southwest.webp" alt="Cover pic" />
          <b>Southwest</b>
          Lorem, ipsum
        </div>
        <div className="items">
          <img src="window.webp" alt="Cover pic" />
          <b>Window</b>
          Lorem, ipsum
        </div>
        <div className="team">
          <div className="teamtitle">
            <b>OUR AMAZING TEAM</b>
            Lorem ipsum dolor sit.
          </div>
          <div className="t_cont">
          <div className="t_members">
            <img id="profile_img" src="p1.png" alt="Porfile image" />
            <b>Parveen Anand</b>
            Lead Designer
            <img id="s_media" src="ssmedia.png" alt="Social media " />
          </div>
          <div className="t_members">
            <img id="profile_img" src="p1.png" alt="Porfile image" />
            <b>Diana Peterson</b>
            Lead Marketer
            <img id="s_media" src="ssmedia.png" alt="Social media " />
          </div>
          <div className="t_members">
            <img id="profile_img" src="p1.png" alt="Porfile image" />
            <b>Bipin Rajak</b>
            Lead Developer
            <img id="s_media" src="ssmedia.png" alt="Social media " />
          </div>
          <p id="p_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga quisquam, vel libero error alias.</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="company">
          <img src="microsoft.png" alt="Microsoft_logo" />
          <img src="google.png" alt="google_logo" />
          <img src="facebook.png" alt="facebook_logo" />
          <img src="IBM.png" alt="IBM_logo" />
        </div>
        <div className="end">
          <p>Copyright@Mystudio 2022</p>
          <p><img id="end_logo" src="ssmedia.png" alt="socialmedia" /></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Form of Use</a></p>
        </div>
      </div>
    </>
  )
}

export default App

