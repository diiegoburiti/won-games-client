import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render Form', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          Awesome <a href="#">Next js</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-bdfBwQ {
        margin: 0.8rem 0;
      }

      .c0 .sc-gKsewC {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c1 a {
        margin-left: 0.8rem;
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              Awesome 
              <a
                href="#"
              >
                Next js
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
