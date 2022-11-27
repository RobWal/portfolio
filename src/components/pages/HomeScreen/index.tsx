import H2 from '../../atoms/H2';
import HomepageH1 from '../../atoms/HomePageAtoms/HomepageH1';
import HomepageH2 from '../../atoms/HomePageAtoms/HomepageH2';
import P1 from '../../atoms/P1';
import Featured from '../../organisms/Featured';
import './HomeScreen.css'


const HomeScreen = () => {
    return (
        <div className="home-screen">
            <HomepageH1 text={`Welcome to my online portfolio`} />
            <HomepageH2 text={`I'm a full stack engineer passionate about clean, powerful websites designed to empower users`} />
            <HomepageH1 text={'Featured Projects'} />
            <Featured></Featured>
        </div>
    )
}

export default HomeScreen;