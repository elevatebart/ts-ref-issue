import { render } from '@testing-library/react';
import renderStyleguide from '../renderStyleguide';

const dummyLocation = { hash: '', search: '', pathname: '' };

const styleguide = {
	config: {
		title: 'My Style Guide',
		pagePerSection: false,
	},
	welcomeScreen: false,
	patterns: ['components/**.js'],
	sections: [
		{
			exampleMode: 'collapse',
			usageMode: 'collapse',
			slug: 'section',
			components: [
				{
					slug: 'foo',
					pathLine: 'components/foo.js',
					filepath: 'components/foo.js',
					props: {
						displayName: 'Button',
						description: 'Foo foo',
					},
				},
				{
					slug: 'bar',
					pathLine: 'components/bar.js',
					filepath: 'components/bar.js',
					props: {
						displayName: 'Image',
						description: 'Bar bar',
					},
				},
			],
		},
	],
} as any;
const codeRevision = 1;
const doc = {
	title: 'test',
};
const history = {
	replaceState: () => {},
};

test('should render the style guide', () => {
	const { getByText } = render(
		renderStyleguide(styleguide, codeRevision, dummyLocation, doc, history)
	);
	expect(getByText('components/foo.js')).toBeInTheDocument();
	expect(getByText('components/bar.js')).toBeInTheDocument();
});

test('should change document title', () => {
	renderStyleguide(styleguide, codeRevision, dummyLocation, doc, history);
	expect(doc.title).toBe('My Style Guide');
});

test('should change document title in isolated mode', () => {
	const location = { hash: '#!/Button', pathname: '', search: '' };

	renderStyleguide(styleguide, codeRevision, location, doc, history);
	expect(doc.title).toBe('Button — My Style Guide');
});

test('should remove #/ from the address bar', () => {
	const location = { hash: '#/', pathname: '/pizza', search: '?foo=bar' };
	const historyWithSpy = { replaceState: jest.fn() };

	renderStyleguide(styleguide, codeRevision, location, doc, historyWithSpy);
	expect(historyWithSpy.replaceState).toBeCalledWith('', 'My Style Guide', '/pizza?foo=bar');
});
