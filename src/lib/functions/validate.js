async function validate(instance, OTPvalue) {
  if (!instance) return;
  return await instance.validate(OTPvalue);
}

export default validate;
