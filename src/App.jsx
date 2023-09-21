import Card from './assets/components/Card';

import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <h1>Upcoming Events</h1>
        <h2>Welcome back students! Not sure what to do? Check out all these amazing events happening around campus!</h2>
      </div>

      <div className="cardsContainer">
        <Card 
          title="Barbie Movie Showing"
          content="Come dance the night away with us while watching the new Barbie Movie"
          imgSrc="https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Popcorn packets in a tray"/>
        
        <Card 
          title="Lego Flowers"
          content='Do you love to make decorations for your room. Come join us to build Lego Flowers!'
          imgSrc="https://live.staticflickr.com/5618/30078314150_aa5407657e_b.jpg"
          imgAlt="Lego Flower Bouquet"/>

        <Card 
          title="Tie Dye Fun!"
          content="Embrace your inner artist and die dye some shirts in the Quad."
          imgSrc="https://pd.w.org/2022/01/18561eef4d542f748.81959254.jpg"
          imgAlt="Heart Tie Dye Pattern"/>

        <Card 
          title="Carnival"
          content="It's time for some Carnival fun! Come down to the field next to the gym to join in!"
          imgSrc="https://images.unsplash.com/photo-1572532492346-923796f5bf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Birds Eye View of a Carnival"/>

        <Card 
          title="Ice Cream in the Lawn"
          content="Take a break from the heat, and join us in the lawn for a refreshing treat."
          imgSrc="https://images.unsplash.com/photo-1629385701021-fcd568a743e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="5 Ice Creams on a surface"/>

        <Card 
          title="Tote Bag Decoration"
          content="Create custom matching tote bags with your friends in the MPR!"
          imgSrc="https://images.unsplash.com/photo-1602368147003-dc5a6749bbb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Hanging Tote Bags"/>

        <Card 
          title="Room Decor"
          content='Brighten up your new dorm with some hand-made one of a kind decor!'
          imgSrc="https://images.unsplash.com/photo-1638560928314-878d82b51cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Empty Photoframe, twine, and misc items on a surface"/>

        <Card 
          title="Button Making"
          content='Have you been seeing a really cool design around. Turn it into a button and show it off to everyone!'
          imgSrc="https://images.unsplash.com/photo-1521249692263-e0659c60326e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          imgAlt="Several Pin Buttons"/>

        <Card 
          title="Book Exchange"
          content='Come exchange books you have with other and find new treasures.'
          imgSrc="https://images.unsplash.com/photo-1649179730866-8a240ac8320c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Various Books"/>

        <Card 
          title="Game Night"
          content='Join us for a night of fun games and have the chance to make new friends!'
          imgSrc="https://images.unsplash.com/photo-1532699623439-9ace30991427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          imgAlt="Deck of cards and a pair of dice"/>

        <Card 
          title="Karaoke"
          content='Sing your heart out to you favorite tunes at our Karaoke event!'
          imgSrc="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          imgAlt="Standing mic in a club like background"/>
        
        <Card 
          title="Poster Market"
          content='Find the new addition to your room at our yearly poster market in front of the Bookstore!'
          imgSrc="https://images.unsplash.com/photo-1606836483372-d59cfc76228f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imgAlt="Assorted posters hanging"/>
      </div>

    </>
  )
}

export default App
