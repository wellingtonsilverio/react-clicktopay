async function getCards(instance) {
  if (!instance) return;
  return await instance.getCards();
}

export default getCards;
