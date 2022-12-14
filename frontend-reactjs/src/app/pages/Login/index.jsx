import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../api/auth';
import { userLogin } from '../../features/Auth/actions';
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import gambar from "./img/buku1.jpg";
import "./style.css";


const schema = yup.object({
  email: yup.string().email('Email harus valid').required('Email harus diisi'),
  password: yup.string().min(8, 'Password minimal 8 karakter').required('Password harus diisi')
}).required();

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

const Gambar = styled.body`
    background-image: url(${gambar});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
    width:100%;
    height:100%;
    margin: 0;
    padding:0;  
`;


export default function Login() {
  const {register, handleSubmit, formState: { errors}, setError} = useForm({
    resolver: yupResolver(schema)
  });
  const [status, setStatus] = React.useState(statusList.idle);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async formData => {
    setStatus(statusList.process);
    const { data } = await loginUser(formData);
    if(data.error) {
      setError('password', { type: 'invalidCredential', message: data.message});
      setStatus(statusList.error)
    } else {
      const { user, token } = data;
      dispatch(userLogin({user, token}));
      history.push('/home');
    }
    setStatus(statusList.success);
  }

  return (

    <Gambar>

    <Card className='card-login' >
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Alamat Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              isInvalid={errors.email}
              {...register('email')} 
            />
            <Form.Control.Feedback type="invalid">
              { errors.email?.message }
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              isInvalid={errors.password}
              {...register('password')}
              />
            <Form.Control.Feedback type="invalid">
              { errors.password?.message }
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={status === statusList.process}>
            { status === statusList.process ? 'Memprosess...' : 'Login'}
          </Button>
        </Form>
        <Link to="/register" className="text-dark" style={{marginLeft:`40%`,fontSize:`18px`}}>Registrasi</Link>
      </Card.Body>
    </Card>
  
  </Gambar>
  )
}
