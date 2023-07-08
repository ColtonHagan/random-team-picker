import "./index.scss";

const HistoryItem = ({index, team}) => {
    const itemStyle = {
        backgroundColor: team.team_color,
    };
    return ( 
        <div className={`_${index} item-container`}style={itemStyle}>
            <img src={team.team_logo_wikipedia} alt={team.team_nick}/>
            <h2> {team.team_name} </h2>
        </div>
    );
};

export default HistoryItem;