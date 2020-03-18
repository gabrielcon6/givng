import styled from 'styled-components';


export const Login = styled.div`
  width: 20vw;
  margin: auto;
  font-size: 1rem;
`;

export const LoginHeader = styled.h2`
  background: rgb(0, 2, 3);
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;
export const P = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 1rem;
`;

export const LoginTriangle = styled.div`
  width: 0;
  margin-right: auto;
  margin-left: auto;
  border: 0.8rem solid transparent;
  border-bottom-color: rgb(0, 2, 3);
`;

export const LoginContainer = styled.form`
  background: #ebebeb;
  padding: 0 0.9rem;
  margin: 0;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 0.05rem;
  border-style: solid;
  padding: 0.9rem;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
  background: #fff;
  border-color: #bbb;
  color: #555;
  &:focus {
  border-color: #888;
}
`;
export const InputLogin = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 0.05rem;
  border-style: solid;
  /* padding: 0.9rem; */
  margin-top: -1vh;
  margin-bottom: 1vh;
  margin-right: 0.8rem;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
  background: #fff;
  border-color: #bbb;
  color: #555;
  &:focus {
  border-color: #888;
}
`;

export const BottomButtons = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 0.05rem;
  border-style: solid;
  padding: 0.9rem;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
  background: rgb(0, 4, 7);
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  &:hover {
  background: white;
  color: black;
  border: 0.05rem black solid;};
  &:focus {
    border-color: #2B2D42;
  };
`;



