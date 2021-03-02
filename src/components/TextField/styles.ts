import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

export const Wrapper = styled.section``

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-radius: 0.2rem;
    border-color: ${theme.colors.lightGray};
    background: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background-color: transparent;
    border: 0;
    outline: none;
  `}
`
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
      transition: 0.5s;

      &:hover {
        transform: rotate(360deg);
      }
    }
  `}
`
