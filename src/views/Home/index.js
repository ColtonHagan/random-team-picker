//https://github.com/nflverse/nflverse-pbp/raw/master/AFC.png
//https://github.com/nflverse/nflverse-pbp/raw/master/NFC.png
//https://github.com/nflverse/nflverse-pbp/raw/master/NFL.png
import teamData from '../../Assets/TeamInfo/teamData.json';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "./index.scss";

const Home = ({setTeams, setHistory}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setTeams(teamData);
        setHistory([]);
    }, []);

    const selectConf = (conf) => {
        if(conf != null) {
            setTeams(prevTeams => prevTeams.filter(team => team.team_conf === conf));
        }
        navigate("/spinner");
    };

    return (
        <div id="home-container">
            <h1>Select conference</h1>
            <div id="buttons">
                <button><img src="https://github.com/nflverse/nflverse-pbp/raw/master/AFC.png" alt="AFC" onClick={() => selectConf("AFC")} /></button>
                <button><img src="https://github.com/nflverse/nflverse-pbp/raw/master/NFL.png" alt="NFL" onClick={() => selectConf(null)} /></button>
                <button><img src="https://github.com/nflverse/nflverse-pbp/raw/master/NFC.png" alt="NFC" onClick={() => selectConf("NFC")} /></button>
            </div>
        </div>
    );
};

export default Home;