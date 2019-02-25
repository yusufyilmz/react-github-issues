

import React from 'react';
import {IssueCard}  from '../index';
import { IssueState } from '../../IssueState';
import { IssueBody } from '../../IssueBody';
import { IssueComments } from '../../IssueComments';
import { shallow, mount } from 'enzyme'
import { Row, Col } from 'react-bootstrap';

describe('BOOKCARD COMPONENT', () => {


    var wrapper, props;

    beforeEach(() => {
        props = {
            item: {
                number: 'book 1',
                user: {
                    login: "thtg88",
                    avatar_url: "https://avatars2.githubusercontent.com/u/16927402?v=4",
                },
                state: 'open',
                title: "Fixed typo",
                labels: [
                ],
                html_url: "",
                comments: 2
            },
            onClick: jest.fn()
            
        };
        wrapper = mount(
            <IssueCard {...props} />
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find(IssueComments).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(IssueBody).length).toBe(1)
    });


    test('renders element correctly', () => {
        expect(wrapper.find(Col).length).toBe(3)
    });

    test('renders props correctly', () => {
        expect(wrapper.find(IssueBody).prop('number')).toBe(props.item.number)
    });

    test('renders props correctly', () => {
        expect(wrapper.find(Col).at(0).prop('md')).toBe(1)
    });


    test('renders onclick correctly', () => {
        wrapper.find('IssueCardWrapper').simulate('click');
        expect(props.onClick.mock.calls.length).toEqual(1);

    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
