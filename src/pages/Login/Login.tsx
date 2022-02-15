import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

type State = {
  email: string;
  password: string;
};


const Login = () => {
  const initialValues: State = {
    email: "",
    password: "",
  };
  const onSubmit = (values:State, submittingObject:any) => {
    console.log(values);
    submittingObject.resetForm();
  };
  const validationSchema = Yup.object({
    email: Yup.string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 적어주세요."),
    password: Yup.string()
    .min(5, '비밀번호는 최소 5자 이상입니다.')
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 
      '최소 1개 이상 특수문자를 넣어주세요.'
    )
    .required("패스워드를 적어주세요."),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik)=>{
        return (
          <Form>
              <div>
                <label htmlFor="email">Email : </label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component='div' />
              </div>
              <div>
                <label htmlFor="password">Password : </label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component='div' />
              </div>
              <button className='btn' type="submit" disabled={!formik.isValid || formik.isSubmitting}>보내기</button>
          </Form>
          )
      }}
    </Formik>
  )
}

export default Login;