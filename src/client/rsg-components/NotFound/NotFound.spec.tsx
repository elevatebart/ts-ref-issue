import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundRenderer } from './NotFoundRenderer';

it('renderer should render not found message', () => {
	const actual = shallow(<NotFoundRenderer classes={{}} />);

	expect(actual).toMatchSnapshot();
});
