import { fetchApiNoticias } from '../helpers/fetchApiNoticias';

test('fetchApiNoticias returns articles', async () => {
  const noticias = await fetchApiNoticias('bitcoin', 5, 1);
  expect(noticias).toEqual(expect.any(Array));
});
