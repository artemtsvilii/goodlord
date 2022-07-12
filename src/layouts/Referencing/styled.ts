import styled from 'styled-components'

export const FormWrapper = styled.div`
  p {
    max-width: 500px;
    margin: 10px auto;
    text-align: center;
    font-weight: 500;
    font-size: 30px;
  }

  form {
    max-width: 500px;
    margin: 20px auto;
  }

  .section {
    display: flex;
    flex-direction: column;
  }

  .form-field {
    display: flex;
    margin: 5px;
  }

  label {
    margin-right: 10px;
  }

  .action_button {
    margin: 20px;
  }
`
