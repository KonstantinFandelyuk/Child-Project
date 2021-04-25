import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;800&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#272727')};
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1;
  overflow-x: hidden;
  }

img {
  max-width: 100%;
  height: auto;
}
a {
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#272727')};
  text-decoration: none;
}

a:hover {
  transition-duration: 0.3s;
}

button {
  border: none;
  outline: none;
  font: inherit;
}

button,
input[type='submit'] {
  cursor: pointer;
}

.wrapper {
  position: relative;
}

.container {
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
	box-sizing: border-box;
	@media (max-width: 1110px) {
    padding: 0 15px;}
}

.loader-wrapper {
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(255 255 255 / 100%);
  z-index: 5;

  .loader {
    position: relative;
    width: 78px;
    height: 78px;
    margin: auto;
  }

  .loader .wBall {
    position: absolute;
    width: 74px;
    height: 74px;
    opacity: 0;
    transform: rotate(225deg);
    -o-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    -moz-transform: rotate(225deg);
    animation: orbit 6.96s infinite;
    -o-animation: orbit 6.96s infinite;
    -ms-animation: orbit 6.96s infinite;
    -webkit-animation: orbit 6.96s infinite;
    -moz-animation: orbit 6.96s infinite;
  }

  .loader .wBall .wInnerBall {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 69, 69, 0.98);
    left: 0px;
    top: 0px;
    border-radius: 10px;
  }

  .loader #wBall_1 {
    animation-delay: 1.52s;
    -o-animation-delay: 1.52s;
    -ms-animation-delay: 1.52s;
    -webkit-animation-delay: 1.52s;
    -moz-animation-delay: 1.52s;
  }

  .loader #wBall_2 {
    animation-delay: 0.3s;
    -o-animation-delay: 0.3s;
    -ms-animation-delay: 0.3s;
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
  }

  .loader #wBall_3 {
    animation-delay: 0.61s;
    -o-animation-delay: 0.61s;
    -ms-animation-delay: 0.61s;
    -webkit-animation-delay: 0.61s;
    -moz-animation-delay: 0.61s;
  }

  .loader #wBall_4 {
    animation-delay: 0.91s;
    -o-animation-delay: 0.91s;
    -ms-animation-delay: 0.91s;
    -webkit-animation-delay: 0.91s;
    -moz-animation-delay: 0.91s;
  }

  .loader #wBall_5 {
    animation-delay: 1.22s;
    -o-animation-delay: 1.22s;
    -ms-animation-delay: 1.22s;
    -webkit-animation-delay: 1.22s;
    -moz-animation-delay: 1.22s;
  }

  @keyframes orbit {
    0% {
      opacity: 1;
      z-index: 99;
      transform: rotate(180deg);
      animation-timing-function: ease-out;
    }

    7% {
      opacity: 1;
      transform: rotate(300deg);
      animation-timing-function: linear;
      origin: 0%;
    }

    30% {
      opacity: 1;
      transform: rotate(410deg);
      animation-timing-function: ease-in-out;
      origin: 7%;
    }

    39% {
      opacity: 1;
      transform: rotate(645deg);
      animation-timing-function: linear;
      origin: 30%;
    }

    70% {
      opacity: 1;
      transform: rotate(770deg);
      animation-timing-function: ease-out;
      origin: 39%;
    }

    75% {
      opacity: 1;
      transform: rotate(900deg);
      animation-timing-function: ease-out;
      origin: 70%;
    }

    76% {
      opacity: 0;
      transform: rotate(900deg);
    }

    100% {
      opacity: 0;
      transform: rotate(900deg);
    }
  }
}
`;
