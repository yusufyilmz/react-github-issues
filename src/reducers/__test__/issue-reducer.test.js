import issueReducer from '../../reducers/issue-reducer';
import * as actionTypes from '../../constants/actionTypes';

describe('REDUCERS', () => {

    let initialState;

    beforeEach(() => {
         initialState = {
            items: [],
            item: null,
            pageCount: 0,
            query: ''
        }
    });

    describe('INITIAL STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(issueReducer(undefined, action)).toEqual(initialState);
        });
    });


    describe('FETCH BOOKS SUCCESS', () => {
        test('returns correct state', () => {
            var payload = { data:   [{ issue: 'test' }], pageCount: 1 }
            const action = { type: actionTypes.FETCH_ISSUES_SUCCESS, payload };
            expect(issueReducer(undefined, action)).toEqual({ ...initialState, items: payload.data, initialItems: payload.data, pageCount: payload.pageCount });

        });
    });


})