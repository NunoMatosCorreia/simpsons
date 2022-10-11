import Avatar from './Avatar'


function App() {

  const homer = {
    firstName: 'Homer',
    lastName:'Simpson',
    image: 'https://www.stickees.com/files/cartoon/the-simpsons/2378-network-sticker.png',
    }
   
const bart = {
    firstName: 'Bart',
    lastName:'Simpson',
     image: 'https://www.stickees.com/files/cartoon/the-simpsons/2241-bart-simpson-scare.png',
    }

  return (
    <div>
     <Avatar user={homer}/>
    
    </div>
  );
}

export default App;
