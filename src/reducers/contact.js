import api from '../scripts/api';

// Reducer
const initialState = {
    emailSubmitted: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_EMAIL_SUBMITTED:
        return {
            ...state,
            emailSubmitted: action.submitted
        };
    default:
        return state;
    }
}

// Actions
export function submitEmail(params) {
    return (dispatch) => {
        api.graph({
            query: `mutation {
                addToMailingList(emailAddress: "${params.email}")
            }`
        })
        .then(payload => {
            console.log(payload)
            if (payload) {

                dispatch(changeEmailSubmitted(true))
            }
        })
        .catch(err => {
            // Handle error
        });
    }
}

export function changeEmailSubmitted(submitted) {
    return {
        type: CHANGE_EMAIL_SUBMITTED,
        submitted
    };
}

// Index of Action Types
const CHANGE_EMAIL_SUBMITTED = 'CHANGE_EMAIL_SUBMITTED';