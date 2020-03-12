import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontSize, fontFamily }: Rsg.Theme) => ({
	summary: {
		marginBottom: space[1],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.base,
		cursor: 'pointer',
		'&:focus': {
			isolate: false,
			outline: [[1, 'dotted', color.linkHover]],
			outlineOffset: 2,
		},
	},
});

interface DetailsSummaryProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const DetailsSummaryRenderer: React.FunctionComponent<DetailsSummaryProps> = ({
	classes,
	children,
}) => {
	return <summary className={classes.summary}>{children}</summary>;
};

DetailsSummaryRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.node.isRequired,
};

export default Styled<DetailsSummaryProps>(styles)(DetailsSummaryRenderer);
