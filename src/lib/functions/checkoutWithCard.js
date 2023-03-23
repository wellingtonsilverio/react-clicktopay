async function checkoutWithCard(
  instance,
  srcDigitalCardId,
  windowRef,
  DpaTransactionOptions
) {
  if (!instance) return;
  return await instance.checkoutWithCard({
    srcDigitalCardId,
    windowRef,
    DpaTransactionOptions
  });
}

export default checkoutWithCard;
