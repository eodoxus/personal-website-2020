import axios from "axios";
import get from "lodash/get";

const ACCESS_TOKEN =
  "IGQVJYbW1hdncwUWwzbjd3X0NCeWxlT2hfLS1xb2JYdXFyYnowc1djNm5VMWRSemlTR19tNXNfYldfRlV5ZAUxUd2x6ZAktWZAFlWRHYyM2JoRjFONEdEUWxUSHBWd1ZAQNkhVLWtHNWdBSm8yZAVc5RXQtbAZDZD";
const PROFILE_ID = "me";
const URL_API = "https://graph.instagram.com";

export async function getPhotos(next) {
  const query = `media?fields=caption,media_url,media_type`;
  const url = `${URL_API}/${PROFILE_ID}/${query}&access_token=${ACCESS_TOKEN}`;
  try {
    const response = await axios.get(next || url);
    const images = get(response, "data.data", []).map((photo) => ({
      id: photo.id,
      title: photo.caption,
      url: photo.media_url,
    }));
    return {
      images,
      next: get(response, "data.paging.next"),
    };
  } catch (e) {
    console.error(e);
  }
  return [];
}
