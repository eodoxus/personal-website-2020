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
        "https://graph.instagram.com/me/media?fields=caption,media_url,media_type&access_token=IGQVJYbW1hdncwUWwzbjd3X0NCeWxlT2hfLS1xb2JYdXFyYnowc1djNm5VMWRSemlTR19tNXNfYldfRlV5ZAUxUd2x6ZAktWZAFlWRHYyM2JoRjFONEdEUWxUSHBWd1ZAQNkhVLWtHNWdBSm8yZAVc5RXQtbAZDZD",
        {
          status: 200,
          responseText: mockPhotos,
        }
      );
      const photos = await PhotosService.getPhotos();
      expect(photos).toEqual([
        {
          id: "1",
          title: undefined,
          url: "https://jaygordo.com/photos/photo-1",
        },
        {
          id: "2",
          title: undefined,
          url: "https://jaygordo.com/photos/photo-2",
        },
        {
          id: "3",
          title: "Wildlings",
          url: "https://jaygordo.com/photos/photo-3",
        },
      ]);
    });
  });
});
