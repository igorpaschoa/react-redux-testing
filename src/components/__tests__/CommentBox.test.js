import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('Comment Box', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('text area', () => {
    beforeEach(() => {
      wrapper
        .find('textarea')
        .simulate('change', { target: { value: 'new comment' } });
    });

    it('has a text area that users can type in', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    });

    it('textarea get empty when form is submitted', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
  });
});
