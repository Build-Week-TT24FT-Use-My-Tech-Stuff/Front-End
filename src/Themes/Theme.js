import  styled, { keyframes } from "styled-components";


const FormTheme = styled.div`
    background-color: #000000;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	border:#DEB4EB inset 1.5vh;
    border-radius: 8%;
	max-width: 45%;
	justify-content: center;
	align-content: center;
	padding: 2vh;
    font-size: 3vh;
    color: #14E607;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px #000,
				  1px 1px 2px #000,
				  1px 1px 0 #000,
				 1px 1px 0 #000;
}
`

// const formTheme = ({ children }) => (
//   <ThemeProvider theme={theme}>{children}</ThemeProvider>
// );

export default FormTheme;