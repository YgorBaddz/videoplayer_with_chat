document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const videoInput = document.getElementById("upload");

  videoInput.addEventListener("change", function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      video.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  const uploadButton = document.getElementById("uploadBtn");

  uploadButton.addEventListener("click", function () {
    videoInput.click();
  });
});
