import axios from 'axios';

export async function getPlaceIdList() {
  const { data } = await axios.get(`${process.env.serverURL}main`);

  let placeIdList: string[] = [];
  Object.keys(data).map((elem) => {
    placeIdList.push(data[+elem].placeId);
  });
  return placeIdList;
}
