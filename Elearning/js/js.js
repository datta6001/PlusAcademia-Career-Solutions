const courseCard = (title, description, price, imagePath) => {
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

const feedbackCard = (name, feedback, imagePath) => {
  const card = `<div  style="text-align:center;">
            <img src="${
              imagePath
                ? imagePath.trim() == ""
                  ? "./img/defaultUser.png"
                  : imagePath
                : "./img/defaultUser.png"
            }" alt="Image">
          </div>
          <div >
            <h5>${name}</h5>
            <p>${feedback}</p>
          </div>`;

  const feedbackCard = document.createElement("div");
  feedbackCard.setAttribute("class", "");
  feedbackCard.innerHTML = card;

  return feedbackCard;
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
    courseCard(
      "Test 1",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquid! Porro voluptates",
      10
    )
  );
  courses.appendChild(
    courseCard(
      "Test 1",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquid! Porro voluptates",
      10
    )
  );

  const feedbacks = document.getElementById("feedbacks");

  feedbacks.appendChild(
    feedbackCard(
      "Datta jadhav",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a deleniti reiciendis. Laboriosam mollitia fugit delectus deserunt accusamus, labore quia magnam? Nobis, voluptas. Dolorum molestiae officiis qui eius, odio deserunt."
    )
  );

  feedbacks.appendChild(
    feedbackCard(
      "Datta jadhav",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a deleniti reiciendis. Laboriosam mollitia fugit delectus deserunt accusamus, labore quia magnam? Nobis, voluptas. Dolorum molestiae officiis qui eius, odio deserunt."
    )
  );
};
