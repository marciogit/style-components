
import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming'

import circuitBg 	from './img/circuit-board.svg';
import logoNode 	from './img/logo-nodejs.png';
import logoReact 	from './img/logo-reactjs.png';
import logoReactN 	from './img/logo-reactnative.png';
import logoJs 		from './img/logo-js.png';

//*==> THEMING - GRADIENTS
const BgWrapper = theme('mode', {
	purple: 'linear-gradient(0deg, #EEF1F6 40%, #FCFDFD 100%)',
	blue: 	'linear-gradient(220deg, #1DAEFE 40%, #58E8FE 100%)'
});

const MenuShapeBefore = theme('mode', {
	purple: 'linear-gradient(0deg, #8468f5 40%, #eb74e7 100%)',
	blue: 	'linear-gradient(0deg, #EEF1F6 40%, #FCFDFD 100%)'
});

const LogoColor = theme('mode', {
	purple: 'linear-gradient(0deg, #8468f5 40%, #eb74e7 100%)',
	blue: 	'linear-gradient(0deg, #EEF1F6 40%, #FCFDFD 100%)'
});

const SliderGradient = theme('mode', {
	purple: 'linear-gradient(to right, rgba(255,0,0,0), #EEF1F6)',
	blue: 	'linear-gradient(to right, rgba(255,0,0,0), #1DAEFE)'
});

const InputSubmitColor = theme('mode', {
	purple: 'linear-gradient(90deg, #8468f5 40%, #eb74e7 100%)',
	blue: 	'linear-gradient(90deg, #1DAEFE 40%, #1D98DC 100%)'
});

//*==> THEMING - DUE COLOR
const MenuShapeAfter 	= theme('mode', { purple: '#E4E9E9', blue: '#37C7FF' });
const LogoColorBefore 	= theme('mode', { purple: '#000', blue: '#fff' });
const LogoColorAfter 	= theme('mode', { purple: '#fff', blue: '#000' });
const NavItemColor 		= theme('mode', { purple: '#fff', blue: '#000' });
const NavItemColorBA	= theme('mode', { purple: '#fff', blue: '#000' });
const TitleColor		= theme('mode', { purple: '#8591B0', blue: '#fff' });
const TextColor			= theme('mode', { purple: '#323C5A', blue: '#fff' });
const SlickButtons		= theme('mode', { purple: '#8468f5', blue: '#fff' });
const SlickButtonsHover = theme('mode', { purple: '#eb74e7', blue: '#58E8FE' });
const ChangeThemeColor 	= theme('mode', { purple: '#000', blue: '#fff' });
const ChangeThemeBorder	= theme('mode', { purple: '#999', blue: '#fff' });
const CreditsColor		= theme('mode', { purple: '#999', blue: '#222' });
const CreditsLinktColor	= theme('mode', { purple: '#8468f5', blue: '#555' });

//*==> MIXINS
export function size(wVal, hVal = null, dVal = null) {
	if(hVal === '') { hVal = wVal }

	return `
		width: 	${wVal};
		height: ${hVal};
		display: ${dVal};
	`
}

export function position(ptop = null, pright = null, pbottom = null, pleft = null) {
	return `
		position: absolute;
		top: 	${ptop};
		right: 	${pright};
		bottom: ${pbottom};
		left: 	${pleft};
	`
}

export function bgimage(bgUrl, bgRepeat, bgPosition, bgSize) {
	return `
		background-image: 		url('${bgUrl}');
		background-repeat: 		${bgRepeat};
		background-position: 	${bgPosition};
		background-size: 		${bgSize};
	`
}

//*==> GLOBAL
export const GlobalStyle = createGlobalStyle `

	* {
		box-sizing: border-box;
		font-family: "Fira Code";
		cursor: default;
		user-select: none;
	}

	body {
		${size('100%', '100vh', '')};
		${bgimage(circuitBg, 'repeat', '0 0', '150px 150px' )};
		position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #fcfdfd;
	}
`

//*==> WRAPPER
export const Wrapper = styled.div `
	${size('1024px', '615px')};
	${position('50%', '', '', '50%')};
	transform: translate(-50%, -50%);
	background-image: ${BgWrapper};
	border: 1px solid #999;
	box-shadow: 0px 0px 20px -2px rgba(0,0,0,0.35);
	border-radius: 5px;
	overflow: hidden;

	&:before {
		content: "";
		${size('850px', '850px', '')};
		${position('-590px', '-190px', '', '')};
		background-color: #8468f5;
		background-image: ${MenuShapeBefore};
		border-radius: 100px;
		transform: rotate(164deg);
		z-index: -1;
	}

	&:after {
		content: "";
		${size('870px', '850px', '')};
		${position('-563px', '-162px', '', '')};
		background-color: ${MenuShapeAfter};
		border-radius: 100px;
		transform: rotate(158deg);
		z-index: -2;
	}
`

//*==> LOGO
export const Logo = styled.div `
	${size('80px', '55px')};
	${position('34px', '', '', '30px')};
	background-image: ${LogoColor};
	border-radius: 10px;

	&:before {
		content: "<Styled Components/>";
		${size('auto', 'auto')};
		${position('20px', '-200px', '', '')};
		color: ${LogoColorBefore};
	}

	&:after {
		content: "SC";
		${size('auto', 'auto')};
		${position('50%', '', '', '50%')};
		color: ${LogoColorAfter};
		font-size: 40px;
		font-weight: 800;
		transform: translate(-50%, -50%);
	}
`

//*==> NAVIGATION
export const Navigation = styled.div `
	${size('auto', 'auto', '')};
	${position('50px', '100px', '', '')};
`

export const NavItem = styled.a `
	${size('auto', '100%', 'block')};
	font-size: 14px;
	position: relative;
	float: left;
	padding: 5px 15px;
	color: ${NavItemColor};

	&:hover {
		&:before, &:after {
			${size('99%', '1px')};
		}
	}

	&:before, &:after {
		content:"";
		background-color: ${NavItemColorBA};
		transition: .3s;
	}

	&:before {
		${size('0', '1px')};
		${position('', '', '0', '0')};
	}

	&:after {
		${size('0', '1px')};
		${position('0', '0', '', '')};
	}
`

//*==> MAIN TEXT
export const Title = styled.h1 `
	${position('200px', '', '', '30px')};
	font-size: 15px;
	text-transform: uppercase;
	font-weight: lighter;
	color: ${TitleColor};
`

export const Text = styled.p `
	${size('auto', 'auto')};
	${position('240px', '', '', '30px')};
	line-height: 2em;
	font-size: 22px;
	text-transform: uppercase;
	font-weight: lighter;
	color: ${TextColor};
`

//*==> SLIDER ADJUSTMENTS
export const SliderContainer = styled.div `
	${size('650px', '250px', 'block')};
	${position('', '-180px', '120px', '')};
	padding: 0 40px;

	&:before {
		content: "";
		${size('70px', '245px', 'block')};
		${position('5px', '', '', '400px')};
		background-image: ${SliderGradient};
		z-index: 1;
	}

	.slick-next, .slick-prev {
		${size('37px', '37px', 'unset')};

		&:before {
			font-size: 37px;
			transition: .2s;
			color: ${SlickButtons};
		}

		&:hover, &:active {
			&:before {
				color: ${SlickButtonsHover} ;
			}
		}
	}

	.slick-next {
		${position('110%', '225px', '', '')};
	}

	.slick-prev {
		${position('110%', '265px', '', 'unset')};
	}

	.slick-slide {
		${size('', '250px', 'block')};
		padding: 10px;
		box-sizing: border-box;

		div {
			${size('100%', '230px', 'block')};
			position: relative;
			margin: 0 auto;
			border-radius: 11px;
			background-color: #fff;
			box-shadow: 2px 0px 7px 0px rgba(0,0,0,0.1);

			&.nodejs {
				${bgimage(logoNode, 'no-repeat', '5px 180px', '40px 40px' )};
			}

			&.reactjs {
				${bgimage(logoReact, 'no-repeat', '5px 180px', '40px 40px' )};
			}

			&.reactn {
				${bgimage(logoReactN, 'no-repeat', '5px 180px', '40px 40px' )};
			}

			&.js {
				${bgimage(logoJs, 'no-repeat', '5px 180px', '40px 40px' )};
			}
		}
	}
`

//*==> SLIDER TEXTS
export const CallsTitle = styled.h3 `
	${position('10px', '', '', '10px')};
	color: #323C5A;
	margin: 0;
`

export const CallsText = styled.p `
	${position('30px', '10px', '', '10px')};
	font-family: "Open Sans";
	font-size: 12px;
	line-height: 1.5em;
	color: #8591B0;
`

//*==> EMAIL
export const InputField = styled.input `
	${size('420px', '47px', 'block')};
	${position('', '', '130px', '30px')};
	padding: 15px 150px 15px 15px;
	border: none;
	border-radius: 20px;
	background-color: #fff;
	box-shadow: 0px 0px 21px -2px rgba(0,0,0,0.1);
	color: #999;
	font-size: 15px;
	outline: none;
`

export const InputSubmit = styled.button `
	${size('100px', '33px', 'block')};
	${position('', '', '137px', '340px')};
	font-size: 14px;
	color: #fff;
	background-image: ${InputSubmitColor};
	border: none;
	border-radius: 20px;
	outline: none;
`

//*==> CHANGE THEME BUTTON
export const ChangeTheme = styled.div `
	${size('auto', 'auto')};
	${position('', '7px', '7px', '')};
	border: 1px solid ${ChangeThemeBorder};
	color: ${ChangeThemeColor};
	border-radius: 5px;
	padding: 5px;
	font-size: 12px;
`

//*==> CREDITS
export const CreditsYear = styled.h4 `
	${position('', '', '7px', '30px')};
	font-size: 11px;
	font-weight: lighter;
	color: ${CreditsColor};

	a {
		text-decoration: none;
		color: ${CreditsLinktColor};
	}
`
