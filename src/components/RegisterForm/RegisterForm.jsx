import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" style={{ width: '100%' }} />
      </label>
      <label>
        Email
        <input type="email" name="email" style={{ width: '100%' }} />
      </label>
      <label>
        Password
        <input type="password" name="password" style={{ width: '100%' }} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
