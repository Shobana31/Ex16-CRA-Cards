const IDCards = (props) => {
    console.log(props);
    let imgn=`images/${props.imgname}`;

    return ( 
        <div>
            <div className="card text-white mx-2">
                <img className="card-img-top" src={imgn} alt="user1"/>
                <div className="card-body">
                    <h4 className="card-title">{props.iname}</h4>
                    <p className="card-text">{props.idesc}</p>
                    <p className="card-city">{props.icity}</p>
                    <div className="buttons">
                    <button>Message</button>
                    <button>Following</button>
                    </div>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
 
export default IDCards;