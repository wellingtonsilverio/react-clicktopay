async function signOut(instance) {
  if (!instance) return;
  return await instance.signOut();
}

export default signOut;
