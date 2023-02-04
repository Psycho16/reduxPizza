import React from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useCreateUserMutation } from 'slices/registerSlice/registerApi'

import Layout from 'components/layout'
import Button from 'components/ui/Button'
import PageTitle from 'components/ui/PageTitle'
import Input from 'components/ui/Input'

import Icons from 'constants/Icons'
import { Regexs } from 'constants/regexs'

import styles from './styles.module.scss'


interface RegisterFormValues {
  name: string
  surname: string
  email: string
}
export interface RegisterFormValuesDTO {
  name: string
  surname: string
  email: string
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormValues>()
  const [createUser, { isLoading }] = useCreateUserMutation()

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await createUser(data)
        .unwrap()
        .then((resp) => {
          reset()
          toast.success(`Пользователь ${resp.name} успешно зарегистрирован`)
        })
    } catch {
      toast.error(`При регистрации произошла ошибка`)
    }
  }

  const onError = () => {
    Object.entries(errors).forEach(([name, error]) => {
      toast.error(`${name} - ${error.message}` || `Ошибка в поле ${name}`)
    })
  }

  return (
    <Layout>
      <div className={styles['page-wrapper-root']}>
        <header className={styles['heading-wrapper']}>
          <PageTitle text="Регистрация" icon={Icons.cartIcon} />
        </header>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles['form']}>
          <Input
            fieldName={'Имя'}
            placeholder={'Александр'}
            register={register('name', { required: 'обязательное поле' })}
          />
          <Input
            fieldName={'Фамилия'}
            placeholder={'Иванов'}
            register={register('surname', { required: 'обязательное поле' })}
          />
          <Input
            placeholder={'pizza@mail.com'}
            fieldName={'email'}
            register={register('email', {
              required: 'обязательное поле',
              pattern: {
                value: Regexs.EMAIL,
                message: 'Пожалуйста введите корректный адрес электронной почты'
              }
            })}
          />

          <Button
            onClick={handleSubmit(onSubmit, onError)}
            text={'Зарегистрироваться'}
            isDisabled={isLoading}
            className={styles['submit-button']}
          />
        </form>
      </div>
    </Layout>
  )
}

export default RegisterPage
