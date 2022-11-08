const primaryButton = document.querySelector(".btn btn-primary my-2");
//WIP: trying to do it with t
const secondaryButton = document.querySelector(".btn btn-secondary my-2");
//with #  instead of . is working
// const photoContainer = document.getElementById("photoContainer");
//WIP: trying to do it with querySelectorAll
const photoContainer = document.getElementsByTagName("svg");
console.log(photoContainer[0]);
const newPhoto = document.createElement("img");

// photoContainer.replaceWith(newPhoto);
// console.log(photoContainer);
// let changeXmlns = function () {
//   photoContainer.replaceWith(img);
// };

//https://api.pexels.com/v1/search?query=[your-query]
// primaryButton.addEventListener("clicked", loadImages());
// let loadImages =
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
    console.log(allPhotos);
    for (let i = 0; i < allPhotos.length; i++) {
      let photo = allPhotos[i];
      console.log(photo.src.medium);
      photoContainer.replaceWith(newPhoto);
      newPhoto.className = "bd-placeholder-img card-img-top";
      newPhoto.src = `${photo.src.medium}`;
    }
  });

//https://api.pexels.com/v1/search?query=[your-secondary-query]
fetch("https://api.pexels.com/v1/search?query=krakow", {
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
    console.log(allPhotos);
    for (let i = 0; i < allPhotos.length; i++) {
      let photo = allPhotos[i];
      console.log(photo.src.medium);
      photoContainer[1].replaceWith(newPhoto);
      newPhoto.className = "bd-placeholder-img card-img-top";
      newPhoto.src = `${photo.src.medium}`;
    }
  });
