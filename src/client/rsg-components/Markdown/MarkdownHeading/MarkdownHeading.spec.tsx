import React from 'react';
import { html } from 'cheerio';
import { render } from 'enzyme';
import MarkdownHeading from './index';

describe('Markdown Heading', () => {
	it('should render a heading with a wrapper that provides margin and an id', () => {
		const actual = render(
			<MarkdownHeading id="the-markdown-heading" level={2}>
				The markdown heading
			</MarkdownHeading>
		);

		expect(html(actual)).toMatchSnapshot();
	});
});
