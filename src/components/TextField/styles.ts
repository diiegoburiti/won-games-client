import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall};
    background-color: transparent;
    border: 0;
    outline: none;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  `}
`
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    margin-left: ${theme.spacings.xxsmall};

    & > svg {
      width: 100%;
      transition: 0.5s;

      &:hover {
        transform: rotate(360deg);
      }
    }
  `}
`
