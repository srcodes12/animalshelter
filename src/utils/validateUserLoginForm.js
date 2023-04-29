export const validateUserLoginForm = (values) => {
  const errors = {}

  if (!values.username || values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters'
  } else if (values.username.length > 15) {
    errors.username = 'Username must be at most 15 characters'
  }

  if (!values.password || values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return errors
}


