import moxios from "moxios";

import * as PhotosService from "./photos-service";

const mockPhotos = {
  data: [
    {
      media_url: "https://jaygordo.com/photos/photo-1",
      media_type: "IMAGE",
      id: "1",
    },
    {
      media_url: "https://jaygordo.com/photos/photo-2",
      media_type: "IMAGE",
      id: "2",
    },
    {
      caption: "Wildlings",
      media_url: "https://jaygordo.com/photos/photo-3",
      media_type: "IMAGE",
      id: "3",
    },
  ],
  paging: {
    cursors: {
      before: "before",
      after: "after",
    },
    next: "next",
  },
};

describe("Service: PhotosService", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("Function: getPhotos()", () => {
    it("should fetch list of photos from image store", async () => {
      moxios.stubRequest(
        "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,timestamp&access_token=IGQVJWVVc0VDhIX3BzMEdqWnNYOW5YY1ZAoNFQ0eWpWMFIxSFVGWWluOVpUT3JuS0lYSm9IZAzZAuWTRETWJfaVlUcUNhWEtVelRkNHBOM1U3dGtQMVV3SS1XSGJlN01URDNVUzNJM1BkekQxZA25zWUJSYwZDZD",
        {
          status: 200,
          responseText: mockPhotos,
        }
      );
      const photos = await PhotosService.getPhotos();
      expect(photos).toEqual({
        images: [
          {
            caption: undefined,
            id: "1",
            url: "https://jaygordo.com/photos/photo-1",
          },
          {
            caption: undefined,
            id: "2",
            url: "https://jaygordo.com/photos/photo-2",
          },
          {
            caption: "Wildlings",
            id: "3",
            url: "https://jaygordo.com/photos/photo-3",
          },
        ],
        next: "next",
      });
    });
  });
});
