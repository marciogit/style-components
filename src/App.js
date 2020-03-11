import React, { useState } from 'react';
import { NavItems, CarouselItems, settings } from './data/data';
import { ThemeProvider } from 'styled-components';
import Slider from "react-slick";
import {
	GlobalStyle,
	Wrapper,
	Logo,
	Navigation,
	NavItem,
	Title,
	Text,
	ChangeTheme,
	SliderContainer,
	CallsTitle,
	CallsText,
	InputField,
	InputSubmit,
	CreditsYear } from './styles';

function App() {
	const [ theme, setTheme] = useState('purple');

	function handleTheme() {
		setTheme(!theme);

		if(theme === 'purple') {
			setTheme('blue');
		} else {
			setTheme('purple');
		}
	}
	return (
		<>
			<ThemeProvider theme={{ mode: theme }}>
			<GlobalStyle/>
			<Wrapper>
				<Logo/>
				<Navigation>
					{NavItems.map((nav, i)=>(
						<NavItem key={i}>{nav}</NavItem>
					))}
				</Navigation>

				<Title>Do you ever worry about</Title>
				<Text>We are going to launch <br/> things that helps to improve...</Text>

				<InputField defaultValue="your@email.com" ></InputField>
				<InputSubmit>Notify</InputSubmit>

				<SliderContainer>
					<Slider {...settings}>
						{CarouselItems.map((techs, i) => (
							<div className={techs.logo} key={i}>
								<CallsTitle>{techs.title}</CallsTitle>
								<CallsText>{techs.content}</CallsText>
							</div>
						))}
					</Slider>
				</SliderContainer>

				<ChangeTheme onClick={handleTheme}>Change Theme</ChangeTheme>
				<CreditsYear>2020 © - Developed by <a href="https://github.com/marciogit">Marcio Lima</a></CreditsYear>
			</Wrapper>
			</ThemeProvider>
		</>
	);
}

export default App;
