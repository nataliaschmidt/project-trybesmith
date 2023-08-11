const validateParams = (name: string, price: string): string | null => {
  if (typeof name !== 'string') return '"name" must be a string';
  if (typeof price !== 'string') return '"price" must be a string';
  if (name.length < 3) return '"name" length must be at least 3 characters long';
  if (price.length < 3) return '"price" length must be at least 3 characters long';

  return null;
};

export default {
  validateParams,
};