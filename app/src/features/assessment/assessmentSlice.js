import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            question: 'We have established Customer Experience Success Metrics in collaboration with cross-functional project stakeholders (e.g. representatives from Business Analytics, Development, and Content).',
            selectedOption: null,
            category: 'measurement',
            type:'type1'

        },
        {
            question: 'We have established a clear hierarchy of customer metrics to guide operational, design, and management decisions.',
            selectedOption: null,
            category: 'measurement',
            type:'type1'
        },
        {
            question: 'We have established pathways to receive and collect self-reported customer experience data from users (e.g. satisfaction surveys and evaluation).',
            selectedOption: null,
            category: 'measurement',
            type:'type1'
        },
        {
            question: 'We have established a research plan to collect qualitative data from users in alignment with iterative product development (e.g. in-depth interviews, usability studies, focus groups).',
            selectedOption: null,
            category: 'measurement',
            type:'type1'
        },
        {
            question: 'How often does your team (in accordance with an established cadence) report CX data collection and metric performance to cross-functional project stakeholders and government clients?',
            selectedOption: null,
            category: 'measurement',
            type:'type2'
        },
        {
            question: 'We have established CX goals, strategy, and processes that are aligned with our overall agency (REI’s) strategy (e.g. the project’s CX strategy follows the REI CX Playbook.)',
            selectedOption: null,
            category: 'governanceStrategy',
            type:'type1'
        },
        {
            question: 'How often do you report on CX initiatives, measurement, and design during seasonal team meetings (e.g. daily or weekly scrum) to ensure alignment with business goals and cross-functional strategy? ',
            selectedOption: null,
            category: 'governanceStrategy',
            type:'type2'
        },
        {
            question: 'Significant project decisions require CX activities and documentation as part of the review and approval process.',
            selectedOption: null,
            category: 'governanceStrategy',
            type:'type1'
        },
        {
            question: 'Product managers and key stakeholders are held accountable for customer experience outcomes.  ',
            selectedOption: null,
            category: 'governanceStrategy',
            type:'type2'
        },
        {
            question: 'We have established processes to review CX processes and objectives to ensure sufficient allocation of CX resources.',
            selectedOption: null,
            category: 'governanceStrategy',
            type:'type1'
        },
        {
            question: 'We have established a process to provide CX training for all project staff in which they are briefed on who the customers of the project are and what our CX strategy is.',
            selectedOption: null,
            category: 'cultureAndOrganization',
            type:'type1'
        },
        {
            question: 'We have hired dedicated staff to support the agency’s overall CX strategy and screened staff for the skills necessary to support the specific project in which they are placed. ',
            selectedOption: null,
            category: 'cultureAndOrganization',
            type:'type1'
        },
        {
            question: 'We have established opportunities and processes for CX staff to share industry developments and continued education to other staff members. ',
            selectedOption: null,
            category: 'cultureAndOrganization',
            type:'type2'
        },
        {
            question: 'We have established a process to provide time and encourage team members to attend agency-wide CX training (e.g. brown bags, community of practice meetings, etc.)',
            selectedOption: null,
            category: 'cultureAndOrganization',
            type:'type1'
        },
        {
            question: 'How often do you report on project specific CX success stories and metrics for use in the corporate growth initiatives of REI?',
            selectedOption: null,
            category: 'cultureAndOrganization',
            type:'type2'
        },
        {
            question: 'We have established a research repository where CX artifacts, materials, and research reports are made available for reference to all project staff. ',
            selectedOption: null,
            category: 'customerUnderstanding',
            type:'type1'
        },
        {
            question: 'We have successfully identified and clearly defined user segments for each of the product offerings in which the team is working.',
            selectedOption: null,
            category: 'customerUnderstanding',
            type:'type1'
        },
        {
            question: 'We have established processes to review and update CX artifacts like Personas, Journey Maps, and Service Blueprints with an acceptable cadence (at least once per year).',
            selectedOption: null,
            category: 'customerUnderstanding',
            type:'type1'
        },
        {
            question: 'We have established a process to review and integrate user feedback received from self-reported data streams (e.g. satisfaction surveys, helpdesk tickets, etc.)',
            selectedOption: null,
            category: 'customerUnderstanding',
            type:'type2'
        },
        {
            question: 'We have established clear criteria with which to prioritize user pain points and process bottlenecks and integrate them into the project backlog. ',
            selectedOption: null,
            category: 'customerUnderstanding',
            type:'type1'
        },
        {
            question: 'We have established processes to test all products under the purview of the project with real users.',
            selectedOption: null,
            category: 'serviceDesignAndImprovement',
            type:'type2'
        },
        {
            question: 'We have established processes to evaluate whether user facing written content adheres to plain language standards and the needs of its specified user segment. ',
            selectedOption: null,
            category: 'serviceDesignAndImprovement',
            type:'type1'
        },
        {
            question: 'We have established a process to communicate updates to existing products and new features to stakeholders and users.',
            selectedOption: null,
            category: 'serviceDesignAndImprovement',
            type:'type2'
        },
        {
            question: 'We have established a process to conduct quality assurance testing for all new product launches and updates.',
            selectedOption: null,
            category: 'serviceDesignAndImprovement',
            type:'type1'
        },
        {
            question: 'We have established a mechanism to refine our project objectives and product backlog in accordance with feedback from CX measurement and metrics reports.  ',
            selectedOption: null,
            category: 'serviceDesignAndImprovement',
            type:'type1'
            
        }
    ],
    isAssessmentTaken: false,
    currentQuestion:0,
    comment:"",
};

export const assessmentSlice = createSlice({
    name: 'assessment',
    initialState,
    reducers: {
        updateQuestions: (state, action) => {
            state.questions = action.payload;
        },
        updateStatus: (state, action) => {
            state.isAssessmentTaken = action.payload;
        },
    },
});



export const { updateQuestions, updateStatus } = assessmentSlice.actions;

export default assessmentSlice.reducer;
