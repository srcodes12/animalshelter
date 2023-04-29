
export const validateCommentForm = (values) => {
  const errors = {};
  if (!values.rating) {
    errors.rating = 'required';
  }
  if (values.author.length < 2) {
    errors.author = 'at least 2 characters';
  } else if (values.author.length > 20) {
    errors.author = 'max 20 characters';
  }
  return errors;
}