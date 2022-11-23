import H1 from '../../atoms/H1';
import H2 from '../../atoms/H2';
import P1 from '../../atoms/P1';
import Featured from '../../organisms/Featured';
import './HomeScreen.css'


const HomeScreen = () => {
    return (
        <div className="home-screen">
            {/* <H1 text={'Hello and welcome to my online portfolio!'}></H1> */}
            {/* <H1 text={'Welcome to my online portfolio!'}></H1> */}
            <H1 text={`Welcome to my online portfolio!`}></H1>
            {/* <H2 text={'Feel free to look around, to contact me, please find me on LinkedIn '}></H2> */}
            <H2 text={`I'm a full stack engineer passionate about clean, powerful websites designed to empower users.`}></H2>
            <H1 text={'Featured Projects'}></H1>
            <Featured></Featured>
        </div>
    )
}

export default HomeScreen;