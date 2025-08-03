import * as React from 'react'
import cx from 'classnames'

import './style.scss'

export interface ButtonGroupComponentProps extends React.PropsWithChildren {
	className?: string
}

/**
 * Replaces deprecated `wp.components.ButtonGroup`.
 */
const ButtonGroupComponent: React.FC<ButtonGroupComponentProps> = ({children, className, ...props}) => {
	return (
		<div
			role='group'
			{...props}
			className={cx('wsd-anfb__button-group__group', className)}
		>
			{children}
		</div>
	)
}

export default ButtonGroupComponent
