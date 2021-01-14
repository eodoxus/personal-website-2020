import axios from "axios";
import get from "lodash/get";

const ACCESS_TOKEN =
  "IGQVJWVVc0VDhIX3BzMEdqWnNYOW5YY1ZAoNFQ0eWpWMFIxSFVGWWluOVpUT3JuS0lYSm9IZAzZAuWTRETWJfaVlUcUNhWEtVelRkNHBOM1U3dGtQMVV3SS1XSGJlN01URDNVUzNJM1BkekQxZA25zWUJSYwZDZD";
const PROFILE_ID = "me";
const URL_API = "https://graph.instagram.com";

export async function getPhotos(next) {
  const query = `media?fields=caption,id,media_type,media_url,timestamp`;
  const url = `${URL_API}/${PROFILE_ID}/${query}&access_token=${ACCESS_TOKEN}`;
  try {
    const response = await axios.get(next || url);
    const images = get(response, "data.data", []).map((photo) => ({
      id: photo.id,
      date: photo.timestamp,
      caption: photo.caption,
      url: photo.media_url,
    }));
    return {
      images,
      next: get(response, "data.paging.next"),
    };
  } catch (e) {
    console.error("instagram request failed", e);
  }
  return [];
}
