import './HomepageFeaturedTechStack.css';

interface ProjectTechStackInterface {
    projectTechStack: ProjectTechStackType[],
}

type ProjectTechStackType = {
    key: string,
    imageSource: string,
}

const HomepageFeaturedTechStack = ({projectTechStack}: ProjectTechStackInterface) => {
    return (
        <div className='homepage-featured-tech-stack'>
            {projectTechStack.map((tech) => {
                return (
                    <div className={`featured-tech-icon-container`} key={tech.key}>
                        <svg className="circlesvg-featured-tech" xmlns="https://www.w3.org/2000/svg">
                            <circle cx="50%" cy="50%" r="49%" />
                        </svg>
                        <img className="featured-tech-image" src={tech.imageSource} />
                    </div>
                )
            })}
        </div>
    );
};

export default HomepageFeaturedTechStack;