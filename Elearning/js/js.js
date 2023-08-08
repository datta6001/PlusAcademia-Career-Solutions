const card = (title, description, price, imagePath) => {
  const cardElement = document.createElement("div");
  cardElement.setAttribute("class", "card m-4");
  cardElement.style.width = "350px";
  cardElement.innerHTML = `
      <img src=${
        imagePath
          ? imagePath.trim().lenght == 0
            ? "./img/defaultCourse.png"
            : imagePath
          : "./img/defaultCourse.png"
      } class="card-img-top" alt="Course" />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
      </div>
      <div class="card-footer d-flex">
        <p class="card-text d-inline w-75">Price: &#8377; ${price}</p>
        <a class="btn btn-primary text-black font-weight-bolder " href="#">
          Enquiry
        </a>
      </div>`;

  return cardElement;
};

const submitFeedback = () => {
  const name = document.getElementsByName("fullname")[0];
  const email = document.getElementsByName("email")[0];
  const feedback = document.getElementsByName("feedback")[0];

  document.getElementById("closeModal").click();
};

onload = () => {
  const courses = document.getElementById("courses");
  courses.appendChild(
    card(
      "Test 1",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquid! Porro voluptates",
      10
    )
  );
  courses.appendChild(
    card(
      "Test 1",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquid! Porro voluptates",
      10
    )
  );
};
