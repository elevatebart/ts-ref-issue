import React from 'react';
import { html } from 'cheerio';
import { render, mount } from 'enzyme';
import Markdown from './Markdown';

describe('Markdown', () => {
	const expectSnapshotToMatch = (markdown: string) => {
		const actual = render(<Markdown text={markdown} />);

		expect(html(actual)).toMatchSnapshot();
	};

	it('should forward DOM attributes onto resulting HTML', () => {
		const markdown =
			'<a href="test.com" id="preserve-my-id" class="preserve-my-class">Something</a>';

		const actual = mount(<Markdown text={markdown} />);

		expect(actual.find('a').props().id).toEqual('preserve-my-id');
		expect(actual.find('a').props().className).toContain('preserve-my-class');
	});

	it('should render links', () => {
		expectSnapshotToMatch('a [link](http://test.com)');
	});

	it('should render headings with generated ids', () => {
		expectSnapshotToMatch(`
# one
## two
### three
#### four
##### five
###### six
`);
	});

	it('should render paragraphs', () => {
		expectSnapshotToMatch(`
a paragraph

another paragraph
		`);
	});

	it('should render emphasis and strong text', () => {
		expectSnapshotToMatch(`
this text is **strong**

and this is _emphasized_
		`);
	});

	it('should render unordered lists', () => {
		expectSnapshotToMatch(`
* list
* item
* three
`);
	});

	it('should render ordered lists', () => {
		expectSnapshotToMatch(`
1. list
1. item
1. three
`);
	});

	it('should render mixed nested lists', () => {
		expectSnapshotToMatch(`
* list 1
* list 2
  1. Sub-list
  1. Sub-list
  1. Sub-list
* list 3
`);
	});

	it('should render check-lists', () => {
		expectSnapshotToMatch(`
* [ ] to do 1
* [ ] to do 2
* [x] to do 3
`);
	});

	it('should render a blockquote', () => {
		expectSnapshotToMatch(`
> This is a blockquote.
> And this is a second line.
`);
	});

	it('should render pre-formatted text', () => {
		expectSnapshotToMatch(`
    this is preformatted
    so is this
`);
	});

	it('should render code blocks without escaping', () => {
		expectSnapshotToMatch(`
\`\`\`html
<foo></foo>
\`\`\`
`);
	});

	it('should render inline code with escaping', () => {
		expectSnapshotToMatch('Foo `<bar>` baz');
	});

	it('should render a horizontal rule', () => {
		expectSnapshotToMatch(`---`);
	});

	it('should render a table', () => {
		expectSnapshotToMatch(`
| heading 1 | heading 2 |
| --------- | --------- |
| foo		| bar		|
| more foo	| more bar	|
`);
	});

	it('should ignore single line comments', () => {
		const markdown = `Hello World
<!-- This is a single line comment -->
`;
		const actual = mount(<Markdown text={markdown} />);
		const pChildren = actual.find('p').props().children as string[];

		expect(pChildren[0]).not.toContain('This is a single line comment');
	});

	it('should ignore multiline comments', () => {
		const markdown = `Hello World
<!--
This is a 
multiline
comment
-->
`;
		const actual = mount(<Markdown text={markdown} />);
		const pChildren = actual.find('p').props().children as string[];

		expect(pChildren[0]).not.toContain(
			`This is a 
multiline
comment`
		);
	});
});

describe('Markdown inline', () => {
	const expectSnapshotToMatch = (markdown: string) => {
		const actual = render(<Markdown text={markdown} inline />);

		expect(html(actual)).toMatchSnapshot();
	};

	it('should render text in a span', () => {
		expectSnapshotToMatch('Hello world!');
	});
});
