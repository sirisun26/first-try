// import Startup from "../../Components/Startup";
import Landing from "../../components/Layout/Landing/Landing";
import Logo from "../../../src/assets/logo-rei.svg";
import CoverImage from "../../assets/landing/landing-cover.png";
import LandingPageDescription from "./LandingPageDescription";

// import { routePaths } from "../index.const";


function Home() {
    return (
        <Landing
            logo={Logo}
            logoAlt="REI"
            subtitle="Welcome, Project Managers!"
            title="CX Maturity Review"
            copy={<LandingPageDescription />}
            btnText="Take the CX maturity assessment"
            btnLink='./instructions'
            image={CoverImage}
            alt="CX Maturity Assessemnt"
            badge="CX"
            timeComplete="15 minutes"
            dueDate="5/23/25"
        />
    );
}

export default Home;