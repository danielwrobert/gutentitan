/**
 * Block dependencies
 */
import Thanos from './assets/images/thanos.jpg';
import style from './style.css';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const buildPath = plugindata.url + '/';

/**
 * Register block
 */
registerBlockType(
	'gutentitan/gutentitan-static',
	{
		title: __( 'Gutentitan' ),
		icon: 'admin-site',
		category: 'layout',
		edit: props => {
			const { className, isSelected } = props;
			return (
				<div className={ className }>
					<h1>Welcome to The Black Order!</h1>
					<img src={ buildPath + Thanos } alt="Thanos"/>
					<p>You're in the Editor.</p>
				</div>
			);
		},
		save: props => {
			const { className, isSelected } = props;
			return (
				<div className={ className }>
					<h1>Welcome to The Black Order!</h1>
					<img src={ buildPath + Thanos } alt="Thanos"/>
					<p>You're on the Front End.</p>
				</div>
			);
		}
	},
);