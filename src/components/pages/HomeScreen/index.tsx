import H2 from '../../atoms/H2';
import HomepageH1 from '../../atoms/HomePageAtoms/HomepageH1';
import HomepageH2 from '../../atoms/HomePageAtoms/HomepageH2';
import P1 from '../../atoms/P1';
import PracticedInImagesContainer from '../../molecules/PracticedInImagesContainer';
import Featured from '../../organisms/Featured';
import './HomeScreen.css'


const HomeScreen = () => {
    return (
        <div className="home-screen">
            <HomepageH1 text={`Welcome to my online portfolio!`} />
            <HomepageH2 text={`I'm a full stack engineer passionate about finding the simplest most comprehensive solutions to every day problems, helping to empower people in all walks of life.`} />
            <HomepageH1 text={'Featured Project'} />
            <Featured></Featured>
            <HomepageH1 text={'Experienced with:'} />
            <PracticedInImagesContainer images={[
                {"imageSrc":`/images/HTMLIcon.png`, "id":`first`, "className":'firstanimation'},
                {"imageSrc":`/images/CSSIcon.png`, "id":`second`, "className":'secondanimation'},
                {"imageSrc":`/images/JSIcon.png`, "id":`third`, "className":'thirdanimation'},
                {"imageSrc":`/images/TypeScriptIcon.png`, "id":`fourth`, "className":'fourthanimation'},
                {"imageSrc":`/images/PostgresIcon.png`, "id":`fifth`, "className":'fifthanimation'},
                {"imageSrc":`/images/ReactIcon.png`, "id":`sixth`, "className":'sixthanimation'},
            ]} />
            <HomepageH1 text={'Like what you see?'} />
            <HomepageH1 text={'Get in touch!'} />
        </div>
    )
}

export default HomeScreen;