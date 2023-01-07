import React from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useCreateUserMutation } from 'slices/registerSlice/registerApi'

import Layout from 'components/layout'
import Button from 'components/ui/Button'
import PageTitle from 'components/ui/PageTitle'
import Input from 'components/ui/Input'

import Icons from 'constants/Icons'

import styles from './styles.module.scss'


interface RegisterFormValues {
  name: string
  surname: string
  email: string
  // birthday: string
  // gender: 'male' | 'female'
  // phoneNumber?: string
}
interface RegisterFormValuesDTO {
  name: string
  surname: string
  email: string
  // birthday: string //Date format - 19.20.21
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormValues>()
  const [createUser, { isError, isLoading, isSuccess }] = useCreateUserMutation()

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await createUser(data).unwrap()
      reset()
      toast.success('Вы успешно зарегистрировались')
    } catch {
      toast.error(`При регистрации произошла ошибка`)
    }
  }

  React.useEffect(() => {
    console.log('error', isError, 'loading', isLoading, 'success', isSuccess)
  }, [isError, isLoading, isSuccess])
  const onError = () => {
    console.log(errors)
  }

  return (
    <Layout>
      <div className={styles['page-wrapper-root']}>
        <header className={styles['heading-wrapper']}>
          <PageTitle text="Регистрация" icon={Icons.cartIcon} />
        </header>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input register={register('name', { required: 'обязательное поле' })} />
          <Input register={register('surname', { required: 'обязательное поле' })} />
          <Input register={register('email', { required: 'обязательное поле' })} />
          {/* <Input register={register('birthday')} /> */}
          <Button onClick={handleSubmit(onSubmit, onError)} text={'Зарегистрироваться'} />
        </form>
      </div>
    </Layout>
  )
}

export default RegisterPage
