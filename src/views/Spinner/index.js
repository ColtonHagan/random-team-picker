import { useState, useEffect, useRef } from "react";
import WheelComponent from "react-wheel-of-prizes"; //this is bad and terrible and horribly inflexible
import HistoryList from "./Components/HistoryList";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Spinner = ({ teams, setTeams, history, setHistory}) => {
    const [segments, setSegments] = useState(teams.map((team) => team.team_nick));
    const [colors, setColor] = useState(teams.map((team) => team.team_color));
    const [spinKey, setSpinKey] = useState(0); // Force rerender since spinner library
    const mounted = useRef(false); //bug prevention since spinner library

    const addHistory = (team) => {
        const fullTeam = getTeam(team);
        const updatedHistory = [fullTeam, ...history];
        if (updatedHistory.length > 5) {
          updatedHistory.pop();
        }
        setHistory(updatedHistory);
    };
      

    const getTeam = (teamName) => {
        return teams.find((team) => team.team_nick === teamName)
    }

    const onFinished = (winner) => {
        if (!mounted) { return; }
        if (teams.length > 1) {
            setTeams(prevTeams => prevTeams.filter(team => team.team_nick !== winner));
        }
        addHistory(winner);
        const timer = setTimeout(() => {
            setSpinKey((prevKey) => prevKey + 1);
        }, 5000);
        return () => clearTimeout(timer);
    };

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        setSegments(teams.map((team) => team.team_nick));
        setColor(teams.map((team) => team.team_color));
    }, [teams]);

    return (
        <div id="spinner-container">
            <WheelComponent
                key={spinKey}
                segments={segments}
                segColors={colors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="#FED702"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={true}
                size={225}
                upDuration={Math.floor(Math.random() * 51) + 75} /*spinner has bad randomness*/
                downDuration={Math.floor(Math.random() * 51) + 175}
                fontFamily="Arial"
            />
            <NavLink to="/" className="flat-button">Reset</NavLink>
            {history.length > 0 && <HistoryList teams={history} />}
        </div>
    );
};

export default Spinner;