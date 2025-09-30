import {__} from '@wordpress/i18n'

import {
	Modal,
} from '@wordpress/components'

/**
 * Modal that displays help info for Animations for Blocks.
 */
const HelpModal = ({onRequestClose}) => (
	<Modal
		className='wsd-anfb__help'
		title={__('Animations for Blocks help', 'animations-for-blocks')}
		onRequestClose={onRequestClose}
	>
		<div className='wsd-anfb__help__content'>
			<h3>{__(`Options`, 'animations-for-blocks')}</h3>
			<h4>{__(`Animation`, 'animations-for-blocks')}</h4>
			<p>{__(`Allows to select the type of animation you wish to use: Fade, Flip, Slide, Zoom, Scale, Inherit or Default. Click the active option again if you no longer wish to animate that block.`, 'animations-for-blocks')}</p>
			<p>{__(`The "Default" animation can be configured in the plugin settings. When you change the default animation the changes will reflect everywhere the default animation was previously applied.`, 'animations-for-blocks')}</p>
			<p>{__(`The "Inherit" animation uses the animation configured on a parent "Animation provider" block. To create an animation provider insert the "Animation container" block and enable the "Is animation provider" option on it. You can then nest multiple blocks inside of it that can all inherit the same animation, optionally with a stagger, making their animations play one after another. The stagger delay amount can be configured on the "Animation provider" block.`, 'animations-for-blocks')}</p>
			<h4>{__(`Animation variation`, 'animations-for-blocks')}</h4>
			<p>{__(`Allows to switch between the different variations of the selected animation, such as Fade in, Fade down, Slide left, Slide right, Zoom in, Zoom out, Zoom out left, etc.`, 'animations-for-blocks')}</p>
			<h4>{__(`Animation delay`, 'animations-for-blocks')}</h4>
			<p>{__(`Time in milliseconds to delay the animation (0 - 3000ms). Determines how long to wait before the animation starts playing.`, 'animations-for-blocks')}</p>
			<h4>{__(`Animation duration`, 'animations-for-blocks')}</h4>
			<p>{__(`Time in milliseconds that the animation takes to complete (0 - 3000ms). Increasing this value will make the animation play longer and slower.`, 'animations-for-blocks')}</p>
			<h4>{__(`Once`, 'animations-for-blocks')}</h4>
			<p>{__(`When enabled, animation will only happen once, when scrolling down the page for the first time. When user scrolls up again and then down, then the block will no longer animate.`, 'animations-for-blocks')}</p>
			<h4>{__(`Mirror`, 'animations-for-blocks')}</h4>
			<p>{__(`When enabled, elements will animate out once the user has scrolled past them and will animate in when the user scrolls up again.`, 'animations-for-blocks')}</p>
			<h4>{__(`Easing`, 'animations-for-blocks')}</h4>
			<p>{__(`Allows to change between various CSS transition timing functions for the animation making it unfold differently.`, 'animations-for-blocks')}</p>
			<h4>{__(`Anchor placement`, 'animations-for-blocks')}</h4>
			<p>{__(`Allows to control what part of the animated element should trigger the animation when it becomes visible in the viewport.`, 'animations-for-blocks')}</p>
			<h4>{__(`Offset`, 'animations-for-blocks')}</h4>
			<p>{__(`Controls the offset (in pixels) from the original trigger point at which the animation should trigger in the viewport.`, 'animations-for-blocks')}</p>
			<h3>{__(`Reduced motion`, 'animations-for-blocks')}</h3>
			<p>{__(`By default the plugin will not play animations for users that have the "prefers-reduced-motion" setting enabled for their device.`, 'animations-for-blocks')}</p>
			<p>{__(`This functionality can be turned off by enabling the "Ignore reduced motion preference" plugin option, how ever it's not recommended.`, 'animations-for-blocks')}</p>
			<p>{__(`If your device has "prefers-reduced-motion" enabled and you want to disable it ask an AI for instructions as the procedure varies depending on which operating system and device you are using.`, 'animations-for-blocks')}</p>
			<h3>{__(`Broken block`, 'animations-for-blocks')}</h3>
			<p>{__(`If you enabled animation and the block broke it means it is not supported. Feel free to report it. To restore the block in working condition try "Undo", if possible "Attempt Block Recovery", or change to "Code editor" (Ctrl + Shift + Alt + M) and remove the animation attributes (e.g.: '"animationsForBlocks":{"animation":"fade"}') from the broken block.`, 'animations-for-blocks')}</p>
		</div>
	</Modal>
)

export default HelpModal
