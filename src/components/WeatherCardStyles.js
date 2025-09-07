import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  place-self: center;
  padding: 40px;
  border-radius: 10px;
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryGradientStart},
    ${({ theme }) => theme.colors.primaryGradientEnd}
  );
  display: flex;
  flex-direction: column;
  align-items: center; /* centers horizontally */
  text-align: center;  /* ensures text like location is centered */
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input`
  height: 50px;
  border: none;
  outline: none;
  border-radius: 40px;
  padding-left: 25px;
  color: ${({ theme }) => theme.colors.inputText};
  background: ${({ theme }) => theme.colors.inputBgLight};
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  flex: 1;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.inputBgLight};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 13px;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.text};
    outline-offset: 2px;
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.errorBg};
  color: ${({ theme }) => theme.colors.errorText};
  padding: 8px 12px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
`;

export const Temperature = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 80px;
  line-height: 1;
  font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;
  text-align: center; /* centers text */
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;
  text-align: center; /* centers city name */
`;

export const DetailsContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
`;

export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  span {
    display: block;
    font-size: 16px;
  }
`;

export const DetailIcon = styled.img`
  width: 26px;
  margin-top: 10px;
`;

export const WeatherIcon = styled.img`
  width: 150px;
  margin: 30px 0;
  display: block;
  margin-left: auto;
  margin-right: auto; /* ensures perfect centering */
`;

export const LoadingSpinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.text};
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 30px auto; /* centers spinner */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
