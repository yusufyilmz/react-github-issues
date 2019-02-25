import * as actionTypes from '../../constants/actionTypes';
import * as actions from '..';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS', () => {

    let store;
    beforeEach(function () {
        store = mockStore({
            issue: {
                query: ''
            }
        })
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });


    test('BOOK FETCH ACTION SUCCESS', () => {

        var response = [
            {
                title: 'test'
            }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.LOADING_ISSUES_SUCCESS,
            },
            {
                type: actionTypes.FETCH_ISSUES_SUCCESS, payload: {
                    data: response,
                    pageCount: 0,
                    pageLinks: undefined,
                }
            },
        ];

        return store.dispatch(actions.fetchIssues(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('BOOK FETCH ACTION 400 ERROR', () => {

        var response = { "message": "Request failed with status code 400", "status": "ERROR" };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400
            });
        });

        const expectedActions = [
            {
                type: actionTypes.LOADING_ISSUES_SUCCESS,
            },
            {
                type: actionTypes.FETCH_ISSUES_ERROR, payload: response.message
            },
        ];

        return store.dispatch(actions.fetchIssues(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })


    test('BOOK FETCH ACTION 400 ERROR', () => {

        const expectedActions = [
            {
                type: actionTypes.BACK_TO_ISSUE_PAGE,
            }
        ];

        return store.dispatch(actions.backToIssuePage()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})