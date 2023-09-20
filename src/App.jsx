import Card from './assets/components/Card';

import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <h1>Upcoming Events</h1>
        <h2>Welcome back students! Not sure what to do? Check out all these amazing events happening around campus!</h2>
      </div>

      <div className="body">
        <Card 
          title="Barbie Movie Showing"
          imgSrc="https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Popcorn packets in a tray"/>
        
        <Card 
          title="Lego Flowers"
          imgSrc="https://live.staticflickr.com/5618/30078314150_aa5407657e_b.jpg"
          imgAlt="Lego Flower Bouquet"/>

        <Card 
          title="Room Decor"
          imgSrc="https://images.unsplash.com/photo-1638560928314-878d82b51cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Empty Photofram, twine, and misc items on a surface"/>
        
        <Card 
          title="Tie Dye Fun!"
          imgSrc="https://pd.w.org/2022/01/18561eef4d542f748.81959254.jpg"
          imgAlt="Heart Tie Dye Pattern"/>

        <Card 
          title="Carnival"
          imgSrc="https://images.unsplash.com/photo-1572532492346-923796f5bf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Birds Eye View of a Carnival"/>

        <Card 
          title="Ice Cream in the Lawn"
          imgSrc="https://images.unsplash.com/photo-1629385701021-fcd568a743e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="5 Ice Creams on a surface"/>

        <Card 
          title="Tote Bag Decoration"
          imgSrc="https://images.unsplash.com/photo-1602368147003-dc5a6749bbb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Hanging Tote Bags"/>

        <Card 
          title="Button Making"
          imgSrc="https://images.unsplash.com/photo-1521249692263-e0659c60326e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          imgAlt="Several Pin Buttons"/>

        <Card 
          title="Book Exchange"
          imgSrc="https://images.unsplash.com/photo-1649179730866-8a240ac8320c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Various Books"/>

        <Card 
          title="Game Night"
          imgSrc="https://images.unsplash.com/photo-1532699623439-9ace30991427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          imgAlt="Deck of cards and a pair of dice"/>

        <Card 
          title="Karaoke"
          imgSrc="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          imgAlt="Standing mic in a club like background"/>
        
        <Card 
          title="Poster Market"
          imgSrc="https://images.unsplash.com/photo-1606836483372-d59cfc76228f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Assorted posters hanging"/>
      </div>

    </>
  )
}

export default App
