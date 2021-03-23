import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>
type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
  errorMessage?: boolean
}

const WrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        cursor: currentColor;
      }
    }
  `,

  errorMessage: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
      &:focus-within {
        box-shadow: none;
      }
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, disabled, errorMessage }) => css`
    ${!!disabled && WrapperModifiers.disabled(theme)}
    ${!!errorMessage && WrapperModifiers.errorMessage(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 0 ${theme.spacings.xsmall} 0 0;
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
export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
