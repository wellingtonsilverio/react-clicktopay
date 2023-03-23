async function encryptCard(
  instance,
  primaryAccountNumber,
  panExpirationMonth,
  panExpirationYear,
  cardSecurityCode,
  cardholderFirstName,
  cardholderLastName,
  billingAddress
) {
  if (!instance) return;
  return await instance.encryptCard({
    primaryAccountNumber,
    panExpirationMonth,
    panExpirationYear,
    cardSecurityCode,
    cardholderFirstName,
    cardholderLastName,
    billingAddress
  });
}

export default encryptCard;
