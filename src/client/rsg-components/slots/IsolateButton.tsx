import React from 'react';
import PropTypes from 'prop-types';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import ToolbarButton from 'rsg-components/ToolbarButton';
import getUrl from '../../utils/getUrl';

export interface IsolateButtonProps {
	name: string;
	example?: number;
	isolated?: boolean;
}

const IsolateButton = ({ name, example, isolated }: IsolateButtonProps) => {
	const testID = example ? `${name}-${example}-isolate-button` : `${name}-isolate-button`;

	return isolated ? (
		<ToolbarButton
			href={getUrl({ anchor: true, slug: name.toLowerCase() })}
			title="Show all components"
			testId={testID}
		>
			<MdFullscreenExit />
		</ToolbarButton>
	) : (
		<ToolbarButton
			href={getUrl({ name, example, isolated: true })}
			title="Open isolated"
			testId={testID}
		>
			<MdFullscreen />
		</ToolbarButton>
	);
};

IsolateButton.propTypes = {
	name: PropTypes.string.isRequired,
	example: PropTypes.number,
	isolated: PropTypes.bool,
};

export default IsolateButton;
