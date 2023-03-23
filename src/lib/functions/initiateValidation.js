async function initiateValidation(instance, requestedValidationChannelId) {
  if (!instance) return;
  return await instance.initiateValidation({
    requestedValidationChannelId
  });
}

export default initiateValidation;
