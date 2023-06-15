export function daysShow() {
  let buttons = document.querySelector(".plandays").getElementsByTagName("li");
  let plan = document.querySelector(".plan").getElementsByTagName("ul")[0];
  let schedule = document.getElementsByClassName("schedule")[0];
  function active(e) {
    for (let index = 0; index < buttons.length; index++) {
      if (buttons[index].classList.contains("active")) {
        buttons[index].classList.remove("active");
      }
    }
    e.currentTarget.classList.add("active");
  }
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", active);
  }
  buttons[0].addEventListener("click", () => {
    schedule.style.height = "1000px";
    plan.innerHTML = `<li>
    <div>
      <img
        src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
        alt=""
      />
    </div>
    <div class="headingOne">
      <h1>Crop Insurance Conference</h1>
      <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
    </div>
    <div class="headingTwo">
      <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
      <p>
        <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
      </p>
    </div>
    <div class="view">
      <a href="#"
        ><button>
          VIEW MORE <i class="fa-solid fa-arrow-right"></i>
        </button>
      </a>
    </div>
  </li>
  <li>
    <div>
      <img
        src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
        alt=""
      />
    </div>
    <div class="headingOne">
      <h1>Crop Insurance Conference</h1>
      <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
    </div>
    <div class="headingTwo">
      <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
      <p>
        <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
      </p>
    </div>
    <div class="view">
      <a href="#"
        ><button>
          VIEW MORE <i class="fa-solid fa-arrow-right"></i>
        </button>
      </a>
    </div>
  </li>
  <li>
    <div>
      <img
        src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
        alt=""
      />
    </div>
    <div class="headingOne">
      <h1>Crop Insurance Conference</h1>
      <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
    </div>
    <div class="headingTwo">
      <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
      <p>
        <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
      </p>
    </div>
    <div class="view">
      <a href="#"
        ><button>
          VIEW MORE <i class="fa-solid fa-arrow-right"></i>
        </button>
      </a>
    </div>
  </li>`;
  });
  buttons[1].addEventListener("click", () => {
    schedule.style.height = "1200px";

    plan.innerHTML = `<li>
      <div>
        <img
          src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
          alt=""
        />
      </div>
      <div class="headingOne">
        <h1>Crop Insurance Conference</h1>
        <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
      </div>
      <div class="headingTwo">
        <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
        <p>
          <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
        </p>
      </div>
      <div class="view">
        <a href="#"
          ><button>
            VIEW MORE <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </li>
    <li>
      <div>
        <img
          src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
          alt=""
        />
      </div>
      <div class="headingOne">
        <h1>Crop Insurance Conference</h1>
        <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
      </div>
      <div class="headingTwo">
        <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
        <p>
          <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
        </p>
      </div>
      <div class="view">
        <a href="#"
          ><button>
            VIEW MORE <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </li>
    <li>
      <div>
        <img
          src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
          alt=""
        />
      </div>
      <div class="headingOne">
        <h1>Crop Insurance Conference</h1>
        <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
      </div>
      <div class="headingTwo">
        <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
        <p>
          <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
        </p>
      </div>
      <div class="view">
        <a href="#"
          ><button>
            VIEW MORE <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </li>
    <li>
      <div>
        <img
          src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
          alt=""
        />
      </div>
      <div class="headingOne">
        <h1>Crop Insurance Conference</h1>
        <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
      </div>
      <div class="headingTwo">
        <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
        <p>
          <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
        </p>
      </div>
      <div class="view">
        <a href="#"
          ><button>
            VIEW MORE <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </li>`;
  });
  buttons[2].addEventListener("click", () => {
    schedule.style.height = "850px";

    plan.innerHTML = `
      
      <li>
        <div>
          <img
            src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
            alt=""
          />
        </div>
        <div class="headingOne">
          <h1>Crop Insurance Conference</h1>
          <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
        </div>
        <div class="headingTwo">
          <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
          <p>
            <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
          </p>
        </div>
        <div class="view">
          <a href="#"
            ><button>
              VIEW MORE <i class="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </li>
      <li>
        <div>
          <img
            src="https://preview.colorlib.com/theme/confer/img/bg-img/11.jpg.webp"
            alt=""
          />
        </div>
        <div class="headingOne">
          <h1>Crop Insurance Conference</h1>
          <h2><b>by </b> Amanda Hudson <b>/ Ceo of Confer</b></h2>
        </div>
        <div class="headingTwo">
          <p><i class="fa-regular fa-clock"></i>12-14 Jan 2019</p>
          <p>
            <i class="fa-solid fa-map"></i>Mountain Resort, Phoenix, USA
          </p>
        </div>
        <div class="view">
          <a href="#"
            ><button>
              VIEW MORE <i class="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </li>`;
  });
}
