const primaryButton = document.querySelector(".btn btn-primary my-2");
const secondaryButton = document.querySelector(".btn btn-secondary my-2");
const photoContainer = document.querySelector(
  ".bd-placeholder-img card-img-top"
);
fetch("https://api.pexels.com/v1/search?query=tenerife", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 563492ad6f91700001000001ac2ad13efd654682bee86b5dc3f6ba8e",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.photos);
    let allPhotos = data.photos;
    for (let i = 0; i < allPhotos.length; i++) console.log(allPhotos[i]);
    let photos = allPhotos[i];
    // photos.innerhtml = ${photos}
    photoContainer.appendchild(photos);
  });
// WIP: catch
// https://api.pexels.com/v1/search?query=[your-query]
