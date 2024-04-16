import Header from './components/Galvene/Galvene'
import Content from './components/content/Content'
import Video from './components/RTUvid/Video'
import Footer from './components/Kajiene/Kajiene'
import Next from './components/next/Next'
import Information from './components/information/Information'
import Columns from './components/columns/Columns'
import Image from './components/image/Image'

function App() {
    return (
        <>
            <Header />
            <Video />
            <Content />
            <Next/>
            <Information />
            <Columns />
            <Image />
            <Footer />
        </>
    );
}

export default App;
