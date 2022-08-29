import H1 from '../../atoms/H1';
import H2 from '../../atoms/H2';
import Featured from '../../organisms/Featured';
import './HomeScreen.css'


const HomeScreen = () => {
    return (
        <div className="home-screen">
            <H1 text={'Hello!'}></H1>
            <H2 text={'I\'m Robert Walerczak, a Melbourne based software engineer'}></H2>
            <H1 text={'Featured Projects'}></H1>
            <Featured></Featured>
        </div>
    )
}

export default HomeScreen;