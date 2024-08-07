import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestions, updateStatus, updateUser } from '../../../features/assessment/assessmentSlice';
import { useNavigate } from 'react-router-dom';

function RegistrationFormLayout() {
    const assessment = useSelector(state => state.assessment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        position: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://cxmaturity.vercel.app/submitUserData', {
                method: 'PUT', // Corrected method type
                headers: {
                    'Content-Type': 'application/json' // Correct capitalization
                },
                body: JSON.stringify(formData) // Serialize formData correctly
            });

            const responseData = await response.json();

            if (!responseData?.success) {
                throw new Error('Network response was not ok');
            }
            else {
                dispatch(updateUser({
                    name: responseData?.data?.name,
                    email: responseData?.data?.email,
                    role: responseData?.data?.role
                }));
                if (responseData?.data?.isAssessmentTaken) {
                    const updatedQuestions = assessment.questions.map((question, index) => ({
                        ...question,
                        selectedOption: responseData?.data?.answers[index]
                    }));
                    dispatch(updateQuestions(updatedQuestions));
                    dispatch(updateStatus(responseData?.data?.isAssessmentTaken));
                    navigate('/report')
                }
                else {

                    navigate('/instructions');
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            company: '',
            position: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container mt-4 d-flex flex-column">
            <h2 className="mb-4 col-6 mx-auto">Fill the form to take assessment</h2>
            <form onSubmit={handleSubmit} className='col-6 mx-auto d-flex flex-column'>
                <div className="form-group">
                    <label htmlFor="name" className='mx-1 mb-1 mt-2'>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Enter the Full name"
                        onChange={handleInputChange}
                        required
                        minLength={2}   // Minimum length of 2 characters
                        maxLength={30}  // Maximum length of 30 characters
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='mx-1 mb-1 mt-2'>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter the email"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position" className='mx-1 mb-1 mt-2'>Position</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        name="position"
                        value={formData.position}
                        placeholder="Enter the position"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company" className='mx-1 mb-1 mt-2'>Company</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={formData.company}
                        placeholder="Enter the company"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="next-question-btn p-2 mt-4 w-25 s rounded-1 border-0 text-white my-3 align-self-end">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationFormLayout;
