async function idLookup(instance, email, PhoneNumber) {
  if (!instance) return;
  return await instance.idLookup({
    email,
    PhoneNumber
  });
}

export default idLookup;
