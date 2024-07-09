import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePaths } from "../../index.const";

function Startup() {

    const navigate = useNavigate();
    //console.log(navigate());
    const handleClick = useCallback(() => 
        navigate(routePaths.questions), 
    [navigate]);

    return (
    <>
        <div>Intro</div>
        <button onClick={handleClick}>start quize</button>
    </>
    );
}

export default Startup;