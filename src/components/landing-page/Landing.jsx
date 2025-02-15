import React from 'react'
import './Landing.css'
import pic from '../../images/pic1.jpg'

const Landing = () => {
  return (
    <>
    <div className='landing__container'>
            <div className="large">
              <img src={pic}/>
              <h1>Main Article</h1>
              <p>In a world full of distractions, daily habits are powerful tools for building success. Small, consistent actions—like setting goals, exercising, or reading—can transform our lives over time. Habits shape our identity, creating a foundation for personal growth. By focusing on positive habits, we build discipline and foster resilience, even when challenges arise. Successful people prioritize these routines because they lead to big results with minimal effort each day. Ultimately, success isn’t built overnight; it’s crafted through daily habits that help us achieve our goals, step by step.</p>
             
            </div>
            
            <div className="articles">
             <img src="https://chacc.co.uk/wp-content/uploads/2021/06/Tips-And-Tactics-For-Successful-Business-Contract-Negotiations.jpg" alt="img" />
             <h3>linkedin account</h3>
             <p>aiming to find bigger opportunities with other companies and sponsors</p>
            </div>
            
            
         
            
            <div className="articles">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmmeoOPE2Jm2EQLmoNfMF6nNkTudrw30JEA&s" alt="img" />
             <h3>New collaboration</h3>
             <p>our new partners, sharing both knowledge and ressources for bigger events</p>
            </div>
            
          
            <div className="articles">
             <img src="https://independent-thinkers.co.uk/wp-content/uploads/2022/02/Free-Online-Courses-with-Certificates.jpg" alt="img" />
             <h3>unities: new programs</h3>
             <p>on the creation of the new courses to teach the students</p>
            </div>
           
           
            <div className="articles">
             <img src="https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/73/52/7352020b-b331-47f5-8405-3d114bf0f28a/types-of-meetings.png" alt="img" />
             <h3>Latest Meeting</h3>
             <p>Each team member shared updates, and we outlined the next steps to ensure we stay on track.</p>
            </div>
           
            
            <div className="articles">
             <img src="https://gsip.co.uk/wp-content/uploads/2024/06/Writer-678x381.jpg"/>
             <h3>Problem with studying ?</h3>
             <p>The logo’s interconnected lines suggest neural pathways, symbolizing the collaborative nature of idea-sharing within the community.</p>
        
            </div>
           
            <div className="articles">
              <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050347.jpg&fm=jpg" />
                <h3>Side Article</h3>
                <p>short briefing for this article</p>
            </div>
            
           
            <div className="aside__article">
              <img src="https://www.emeraldgrouppublishing.com/sites/default/files/2020-02/ejournal_subject_-_fw_-_education.jpg" alt="img" />
              <h1>Latest Creation</h1>
              <p>We are excited to launch our new e-journal, a digital platform dedicated to advancing knowledge, fostering discussions, and exploring the latest developments in our field. Our mission is to provide high-quality, peer-reviewed content that brings together voices from all corners of the community—researchers, educators, professionals, and students alike.This journal is designed to be a space for the exchange of ideas, research findings, and thought-provoking perspectives. We encourage you to engage with our content, share your work, and contribute to the ongoing conversation that will shape the future of our field.</p>
              
           </div>
     
           <div className="others">
            <img src="https://traceup.com/wp-content/uploads/2022/11/Soccer-showcase.jpg" alt="img" />
            <h3>football tournament</h3>
            <p>football madness! our best players teamed up and won the tournament</p>
           </div>
    </div>
   
   
      
  
    
    </>
  )
}

export default Landing