async function checkoutWithNewCard(
  instance,
  encryptedCard,
  cardBrand,
  consumer,
  windowRef,
  dpaTransactionOptions
) {
  if (!instance) return;
  return await instance.checkoutWithNewCard({
    encryptedCard,
    cardBrand,
    consumer,
    windowRef,
    dpaTransactionOptions
  });
}

export default checkoutWithNewCard;
