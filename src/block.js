/**
 * Block dependencies
 *
 * @format
 */

import Thanos from './assets/images/thanos.jpg';
import style from './style.css';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { SelectControl } = wp.components;

const buildPath = `${ plugindata.url }/`;

const quotes = {
	quote01: __(
		'With all six stones, I can simply snap my fingers, they would all cease to exist. I call that mercy.'
	),
	quote02: __(
		'I shall honor our agreement, Kree, if you bring me the Orb. But return to me again empty handed... And I will bathe the starways in your blood.'
	),
	quote03: __(
		`When I'm done, half of humanity will still exist. Perfectly balanced, as all things should be. I hope they remember you.`
	),
	quote04: __(
		`Little one, it's a simple calculus. This universe has finite its resources, finite… if life is left unchecked, life will cease to exist. It needs correcting.`
	),
	quote05: __(
		`Fun isn't something one considers when balancing the universe. But this... does put a smile on my face.`
	),
};

/**
 * Register block
 */
registerBlockType( 'gutentitan/gutentitan-static', {
	title: __( 'Gutentitan' ),
	icon: 'admin-site',
	category: 'layout',
	attributes: {
		quote: {
			type: 'string',
			source: 'text',
			selector: '.quote-text',
			default: quotes.quote01,
		},
	},
	edit: props => {
		const { className, attributes: { quote }, setAttributes } = props;
		return (
			<div className={ className }>
				<h1>Welcome to The Black Order!</h1>
				<img src={ buildPath + Thanos } alt="Thanos" />
				<blockquote>
					<p>{ quote }</p>
					<footer>- Thanos</footer>
				</blockquote>
				<hr />
				<SelectControl
					multiple
					label={ __( 'Select a quote:' ) }
					value={ quote }
					onChange={ newQuote => {
						setAttributes( { quote: newQuote } );
					} }
					options={ [
						{ value: quotes.quote01, label: `Quote 1: "${ quotes.quote01 }"` },
						{ value: quotes.quote02, label: `Quote 2: "${ quotes.quote02 }"` },
						{ value: quotes.quote03, label: `Quote 3: "${ quotes.quote03 }"` },
						{ value: quotes.quote04, label: `Quote 4: "${ quotes.quote04 }"` },
						{ value: quotes.quote05, label: `Quote 5: "${ quotes.quote05 }"` },
					] }
				/>
			</div>
		);
	},
	save: props => {
		const { attributes: { quote } } = props;
		return (
			<div>
				<h1>Welcome to The Black Order!</h1>
				<img src={ buildPath + Thanos } alt="Thanos" />
				<blockquote>
					<p className="quote-text">{ quote }</p>
					<footer>- Thanos</footer>
				</blockquote>
			</div>
		);
	},
} );
