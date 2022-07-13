import React, { useState } from 'react'
import styled from 'styled-components'
import DatePickerField from './DatePickerField'
import Road from './Road'

export const InputBase = `
background-color: white;
border: 1px solid #52782c;
border-radius: 4px;
font-size: 1rem;
line-height: 1.5rem;
font-style: normal;
font-weight: 400;
width: 100%;
margin-top: 0.5rem;
padding: 0.75rem 0.75rem;
&:focus,
&:active {
  box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
  border: 1px solid rgb(26, 33, 43);
  outline: none;
}
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  background-color: white;
  border: 1px solid lightgrey;
  box-shadow: 0 0 0px 1000px #fff inset;
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: black;
}
`
const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 500px;
  margin: 0 auto;
  & .react-datepicker-wrapper {
    & .react-datepicker__input-container {
      width: 100%;
      & input {
        background-color: white;
        border: 1px solid #52782c;
        border-radius: 4px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-style: normal;
        font-weight: 400;
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.75rem 0.75rem;
        &:focus,
        &:active {
          box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
          border: 1px solid rgb(26, 33, 43);
          outline: none;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          background-color: white;
          border: 1px solid lightgrey;
          box-shadow: 0 0 0px 1000px #fff inset;
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color: black;
        }
      }
      & .react-datepicker-ignore-onclickoutside {
        border: none;
        border-color: transparent;
        width: 100%;
        &:focus,
        &:active {
          border: none;
        }
      }
    }
  }
`

const Input = styled.input`
  ${InputBase};
`
const Submit = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: #52782c;
  border: 1px solid #52782c;
  border-radius: 24px;
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: #fff;
  padding: 0.5rem 1rem;
  transition: background-color 0.4s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #52782c;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`
const Textarea = styled.textarea`
  ${InputBase};
  width: 100%;
  font-family: inherit;
  &&::placeholder {
    font-family: inherit;
  }
`
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function ContactForm() {
  const [data, setData] = useState({
    date: new Date(),
  })
  const [successMsg, setSuccessMsg] = useState()

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => {
        setSuccessMsg('Wiadomośc została wysłana')
        setTimeout(() => {
          setSuccessMsg('')
        }, 4000)
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const handleChangeDate = value => setData({ ...data, date: value })
  const handleChangeRoad = value => setData({ ...data, road: value })

  return (
    <CustomForm
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
    >
      <Input type='hidden' name='form-name' value='contact' onChange={handleChange} />
      <Input type='hidden' name='bot-field' onChange={handleChange} />
      <label htmlFor='name'>
        Imię: <Input name='name' placeholder='Imię ' type='text' required onChange={handleChange} />
      </label>
      <label htmlFor='surname '>
        Nazwisko:
        <Input name='surname ' placeholder='Nazwisko ' type='text' required onChange={handleChange} />{' '}
      </label>
      <label htmlFor='date'>
        Wybierz datę i godzinę spływu:
        <DatePickerField
          value={data.date}
          name='date'
          type='datetime'
          placeholder='Wybierz datę i godzinę spływu lub eventu'
          handleChange={value => handleChangeDate(value)}
          required
        />{' '}
      </label>
      <label htmlFor='email'>
        Email: <Input name='email' placeholder='Email' type='email' required onChange={handleChange} />
      </label>
      <label htmlFor='phone'>
        Telefon:
        <Input name='phone' placeholder='Telefon' type='tel' required onChange={handleChange} />{' '}
      </label>
      <label htmlFor='number'>
        Ilość osób:{' '}
        <Input
          name='number'
          type='number'
          keyboardType='numeric'
          placeholder='podaj ilość osób'
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor='road'>Wybierz trasę:</label>
      <Road onChangeParent={value => handleChangeRoad(value)} />

      <label htmlFor='message'>
        Message:
        <Textarea
          name='message'
          component='textarea'
          placeholder='Zostaw nam wiadomość'
          rows='4'
          fullWidth
          onChange={handleChange}
        />{' '}
      </label>
      <Submit type='submit'>Wyślij</Submit>
      {successMsg && <p>{successMsg}</p>}
    </CustomForm>
  )
}

export default ContactForm
