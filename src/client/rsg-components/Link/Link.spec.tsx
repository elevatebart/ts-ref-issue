import React from 'react';
import { shallow } from 'enzyme';
import { LinkRenderer } from './LinkRenderer';

const href = '/foo';
const children = 'Foo';

it('renderer should render link', () => {
	const actual = shallow(
		<LinkRenderer href={href} classes={{}}>
			{children}
		</LinkRenderer>
	);

	expect(actual).toMatchSnapshot();
});

it('should compose passed class names', () => {
	const actual = shallow(
		<LinkRenderer classes={{ link: 'baseLinkClass' }} href={href} className="customClass">
			{children}
		</LinkRenderer>
	);

	expect(actual.find('a').prop('className')).toBe('baseLinkClass customClass');
});

it('should properly pass the target attribute', () => {
	const actual = shallow(
		<LinkRenderer href={href} target="_blank" classes={{}}>
			{children}
		</LinkRenderer>
	);

	expect(actual.find('a').prop('target')).toBe('_blank');
});
