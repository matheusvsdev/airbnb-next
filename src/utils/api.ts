import { Accommodation, AirbnbApi } from "@/types/AirbnbData";

export async function fetchData(): Promise<AirbnbApi> {
  try {
    const response = await fetch("https://web.codans.com.br/airbnb");
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function fetchDataById(
  id: string
): Promise<Accommodation | undefined> {
  try {
    const response = await fetchData();
    const accommodation = response.accommodation.find((item: Accommodation) => {
      return item.slug ===decodeURIComponent(id);
    });
    return accommodation;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
