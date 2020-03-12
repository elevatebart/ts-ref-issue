import React from 'react';
import PropTypes from 'prop-types';
import { MethodDescriptor } from 'react-docgen';
import { PropDescriptorWithFlow } from 'rsg-components/Props/util';
import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';
import isEmpty from 'lodash/isEmpty';

const Usage: React.FunctionComponent<{
	props: { methods?: MethodDescriptor[]; props?: PropDescriptorWithFlow[] };
}> = ({ props: { props, methods } }) => {
	const propsNode = props && !isEmpty(props) && <Props props={props} />;
	const methodsNode = methods && !isEmpty(methods) && <Methods methods={methods} />;

	if (!propsNode && !methodsNode) {
		return null;
	}

	return (
		<div>
			{propsNode}
			{methodsNode}
		</div>
	);
};

Usage.propTypes = {
	props: PropTypes.shape({
		props: PropTypes.array,
		methods: PropTypes.array,
	}).isRequired,
};

export default Usage;
