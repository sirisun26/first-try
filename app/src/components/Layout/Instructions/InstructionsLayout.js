import { useNavigate } from "react-router-dom";
import {
    MEASUREMENT_ICON_PATH,
    GOVERNANCE_ICON_PATH,
    CULTURE_ICON_PATH,
    CUSTOMER_ICON_PATH,
    SERVICE_DESIGN_ICON_PATH,
    MEASUREMENT_CONNECTER_ICON_PATH,
    GOVERNANCE_CONNECTER_ICON_PATH,
    CULTURE_CONNECTER_ICON_PATH,
    CUSTOMER_CONNECTER_ICON_PATH,
} from '../../../constants/Icons/Icons';

import './style.scss'
function InstructionsLayout() {
    const navigate = useNavigate();
    const handleGoBackClick = ()=>{
        navigate('/');
    }

    const handleBeginClick = ()=>{
        navigate('/questions');
    }
    return (
        <div className='d-flex justify-center items-center'>
            <div className="d-flex flex-column  bg-white mt-5 p-5 col-lg-8 mx-auto instruction-content">
                <h3 className="mb-3 text-center fs-4">Instructions</h3>
                <div className="text-black" >
                    <p className="fs-6" >In this review you will see 25 questions focusing on REI's CX Core Functions. REI’s 5 CX Core Functions are shown below. Each question will ask you to assess how these functions relate to your project. Please indicate the extent to which it applies to your project on a scale from 1 to 5.</p>
                    <p className="fs-6" > Your responses will help us assess how well your project supports these core functions and guide our efforts to enhance our customer experience practices at REI.</p>
                </div>

                <div className="d-flex justify-content-between align-items-start levels my-3 " >
                    <div className="me-2  " >
                        <div className="position-relative " >
                            <img
                                src={MEASUREMENT_ICON_PATH}
                                class="img-fluid rounded-top "
                                alt=""
                            />
                            <img
                                src={MEASUREMENT_CONNECTER_ICON_PATH}
                                class="img-fluid rounded-top  position-absolute  connecter "
                                alt=""
                            />
                        </div>
                        <div className="p-1 mt-2" >
                            <h6 className="fw-bold level-name " >Measurement</h6>
                            <p className="text-secondary level-description fw-bold" >Collecting and analyzing data for customer-experience-related outcomes</p>
                        </div>

                    </div>

                    <div className="me-2  " >
                        <div className="position-relative " >
                            <img
                                src={GOVERNANCE_ICON_PATH}
                                class="img-fluid rounded-top "
                                alt=""
                            />
                            <img
                                src={GOVERNANCE_CONNECTER_ICON_PATH}
                                class="img-fluid rounded-top  position-absolute  connecter "
                                alt=""
                            />
                        </div>

                        <div className="p-1 mt-2" >
                            <h6 className="fw-bold level-name " >Governance and Strategy</h6>
                            <p className="text-secondary level-description fw-bold " >Institutionalizing CX by holding agency leaders accountable, defining processes and aligning business initiatives </p>
                        </div>

                    </div>


                    <div className="me-2  " >
                        <div className="position-relative " >
                            <img
                                src={CULTURE_ICON_PATH}
                                class="img-fluid rounded-top "
                                alt=""


                            />
                            <img
                                src={CULTURE_CONNECTER_ICON_PATH}
                                class="img-fluid rounded-top  position-absolute  connecter "
                                alt=""
                            />
                        </div>
                        <div className="p-1 mt-2" >
                            <h6 className="fw-bold level-name " >Culture and Organization</h6>
                            <p className="text-secondary level-description fw-bold " >Hiring CX experts and supporting human-centered design (HCD) tools and processes</p>
                        </div>

                    </div>

                    <div className="me-2  " >
                        <div className="position-relative " >
                            <img
                                src={CUSTOMER_ICON_PATH}
                                class="img-fluid rounded-top "
                                alt=""
                            />
                            <img
                                src={CUSTOMER_CONNECTER_ICON_PATH}
                                class="img-fluid rounded-top  position-absolute  connecter  "
                                alt=""
                            />
                        </div>
                        <div className="p-1 mt-2" >
                            <h6 className="fw-bold level-name " >Customer Understanding</h6>
                            <p className="text-secondary level-description fw-bold " >Collecting qualitative and quantitative data about customer needs and customer journeys </p>
                        </div>
                    </div>

                    <div className="me-2  " >
                        <div className="position-relative " >
                            <img
                                src={SERVICE_DESIGN_ICON_PATH}
                                class="img-fluid rounded-top "
                                alt=""
                            />
                        </div>
                        <div className="p-1 mt-2" >
                            <h6 className="fw-bold level-name " >Service Design and Improvement</h6>
                            <p className="text-secondary level-description fw-bold " >Fixing broken services and introducing new ones, always with customers and their needs at the center of development </p>
                        </div>
                    </div>
                </div>
                    <div className='d-flex justify-content-between'>
                        <button type='button' className="next-question-btn p-2 mt-4 w-25 s rounded-1 border-0 text-white" onClick={handleGoBackClick}>
                            Previous
                        </button>
                        <button type='button' className="next-question-btn p-2 mt-4 w-25 s rounded-1 border-0 text-white"  onClick={handleBeginClick} >
                            Begin
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default InstructionsLayout;