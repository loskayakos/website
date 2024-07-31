import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'
import variables from '../../styles/variables'
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
const SuccessMsg = styled.p`
  font-weight: 900;
  font-size: 20px;
  color: ${variables.color.primary};
`

const ContactFormFormspree = () => {
  const [data, setData] = useState({
    date: new Date(),
    firstName: '',
    surname: '',
    phone: '',
    email: '',
    number: '',
    road: '',
    message: '',
  })
  const [successMsg, setSuccessMsg] = useState()
  const [errors, setErrors] = useState({
    firstName: '',
    surname: '',
    date: '',
    phone: '',
    email: '',
    number: '',
    road: '',
  })

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const handleChangeDate = value => setData({ ...data, date: value })
  const handleChangeRoad = value => setData({ ...data, road: value })

  const validateForm = () => {
    const newErrors = { date: '', phone: '', email: '', number: '', road: '' }
    let isValid = true

    if (!data.number) {
      newErrors.number = 'Podaj ilość gości'
      isValid = false
    }

    if (!data.phone) {
      newErrors.phone = 'Podaj swój numer telefonu'
      isValid = false
    } else {
      const phoneRegex = /^\d{9}$/
      if (!phoneRegex.test(data.phone)) {
        newErrors.phone = 'Podaj poprawny numer telefonu'
        isValid = false
      }
    }
    if (!data.date) {
      newErrors.date = 'Podaj date'
      isValid = false
    }
    if (!data.email) {
      newErrors.email = 'Podaj swój adres email'
      isValid = false
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!emailRegex.test(data.email)) {
        newErrors.email = 'Podaj poprawny adres email'
        isValid = false
      }
    }
    if (!data.road) {
      newErrors.road = 'Wybierz trasę'
      isValid = false
    }
    setErrors(newErrors)
    return isValid
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    const response = await fetch('https://formspree.io/f/mwpeolrz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Imię: data.firstName,
        Nazwisko: data.surname,
        Telefon: data.phone,
        Email: data.email,
        Ilość: data.number,
        Trasa: data.road,
        Data: data.date,
        Wiadomość: data.message,
      }),
    }).then(response => {
      if (response.ok) {
        setSuccessMsg('Wiadomośc została wysłana')
        setTimeout(() => {
          setSuccessMsg('')
          setData({
            firstName: '',
            surname: '',
            date: '',
            phone: '',
            email: '',
            number: '',
            road: '',
            message: '',
          })
        }, 4000)
      } else {
        alert('Failed to submit form')
      }
    })
  }

  return (
    <CustomForm name='reservation' method='POST' onSubmit={handleOnSubmit} id='reservation'>
      <label htmlFor='firstName'>
        Imię:{' '}
        <Input
          name='firstName'
          placeholder='Imię '
          type='text'
          required
          onChange={handleChange}
          value={data.firstName}
        />
      </label>
      <label htmlFor='surname'>
        Nazwisko:
        <Input
          name='surname'
          placeholder='Nazwisko'
          type='text'
          required
          onChange={handleChange}
          value={data.surname}
        />{' '}
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
      {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
      <label htmlFor='email'>
        Email:{' '}
        <Input name='email' placeholder='Email' type='email' required onChange={handleChange} value={data.email} />
      </label>
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      {errors.emailRegex && <p style={{ color: 'red' }}>{errors.emailRegex}</p>}
      <label htmlFor='phone'>
        Telefon:
        <Input name='phone' placeholder='Telefon' type='tel' required onChange={handleChange} value={data.phone} />{' '}
      </label>
      {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      {errors.phoneRegex && <p style={{ color: 'red' }}>{errors.phoneRegex}</p>}
      <label htmlFor='number'>
        Ilość osób:{' '}
        <Input
          name='number'
          type='number'
          keyboardType='numeric'
          placeholder='podaj ilość osób'
          required
          onChange={handleChange}
          value={data.number}
        />
      </label>
      {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}
      <label htmlFor='road'>
        Wybierz trasę:
        <Road onChangeParent={value => handleChangeRoad(value)} value={data.road} />
      </label>
      {errors.road && <p style={{ color: 'red' }}>{errors.road}</p>}

      <label htmlFor='message'>
        Wiadomość:
        <Textarea
          name='message'
          component='textarea'
          placeholder='Zostaw nam wiadomość'
          rows='4'
          fullWidth
          onChange={handleChange}
          value={data.message}
        />{' '}
      </label>
      <Submit type='submit'>Wyślij</Submit>
      {successMsg && <SuccessMsg>{successMsg}</SuccessMsg>}
    </CustomForm>
  )
}

export default ContactFormFormspree
