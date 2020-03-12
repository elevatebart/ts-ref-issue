import getInfoFromHash from '../getInfoFromHash';

describe('getInfoFromHash', () => {
	it('should return important part of hash if it contains component name', () => {
		const result = getInfoFromHash('#!/Button');
		expect(result).toEqual({
			isolate: true,
			hashArray: ['Button'],
			targetName: 'Button',
			targetIndex: undefined,
		});
	});

	it('should return an empty object if hash contains no component name', () => {
		const result = getInfoFromHash('Button');
		expect(result).toEqual({});
	});

	it('should return the decoded targetName when router name is not English such as Chinese', () => {
		const result = getInfoFromHash('#!/Api%20%E7%BB%84%E4%BB%B6');
		expect(result).toEqual({
			isolate: true,
			hashArray: ['Api 组件'],
			targetName: 'Api 组件',
			targetIndex: undefined,
		});
	});

	it('hashArray should return an array of each deep and isolate should return false when the url starts with #/', () => {
		const result = getInfoFromHash('#/Documentation/Files/Buttons');
		expect(result).toEqual({
			isolate: false,
			hashArray: ['Documentation', 'Files', 'Buttons'],
			targetName: 'Documentation',
			targetIndex: undefined,
		});
	});
});
