import './Credit.css';

const credit_link = "https://media-s3-us-east-1.ceros.com/huron/images/2024/01/12/727c47e952ec5473e05ba0833fdc19cb/32.png"

const Credit = ({credit_score}) => {
    return (
        <div className="credit">
            <img src={credit_link} alt={"Credit Score Image"}></img>
            <div className="creditScore">{credit_score}</div>
        </div>
    );
}

export default Credit;