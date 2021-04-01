import  styled, { keyframes } from "styled-components";


const FormTheme = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	border:#DEB4EB inset 1.5vh;
    border-radius: 8%;
	max-width: 38%;
	justify-content: center;
	align-content: center;
	background-color: #f4f4f4;
	padding: 2vh;
    font-size: 2.8vh;
`

// const formTheme = ({ children }) => (
//   <ThemeProvider theme={theme}>{children}</ThemeProvider>
// );

export default FormTheme;