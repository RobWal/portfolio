import './P.css'

type P = {
    text: string,
}

const P = ({text}: P) => {
    return (
        <p className="p">{text}</p>
    )
}

export default P;