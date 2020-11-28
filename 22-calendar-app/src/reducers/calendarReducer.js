import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        title: 'Cumpleaños de Keko',
        start: moment().toDate(),    // new Date()
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pastel',
        user: {
            _id: '123',
            name: 'Víctor'
        }
    }],
    activeEvent: null
};

export const calendarReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };
        default:
            return state;
    }
};