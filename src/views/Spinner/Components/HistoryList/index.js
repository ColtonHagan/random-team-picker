import "./index.scss";
import HistoryItem from "../HistoryItem";

const HistoryList = ({teams}) => {

    return ( 
        <div id="history-list-container">
            <div id="item">
                {teams.map((team, index) => (
                    <HistoryItem key={index} index={index} team={team} />
                ))}
            </div>
        </div>
    );
};

export default HistoryList;