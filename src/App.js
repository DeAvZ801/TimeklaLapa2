import Header from './komponentes/galvene/Galvene'
import Saturs from './komponentes/saturs/Saturs'
import Video from './komponentes/RTUvid/Video'
import Kajiene from './komponentes/kajiene/Kajiene'
import Nakamais from './komponentes/nakamais/Nakamais'
import Informacija from './komponentes/informacija/Informacija'
import Kolonnas from './komponentes/kolonnas/Kolonnas'
import Attels from './komponentes/attels/Attels'

function App() {
    return (
        <>  <Header />
            <Nakamais/>
            <Saturs />
            <Informacija />            
            <Video />
            <Attels />            
            <Kolonnas />
            <Kajiene />
        </>
    );
}

export default App;
