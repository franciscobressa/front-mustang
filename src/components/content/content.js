import { useRef } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import "./content.css";
function Content() {
  const carousel = useRef(null);
  var painel = 1;

  const handleLeftCLick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    if (painel > 1) {
      painel--;

      if (painel === 1) {
        document.getElementById("indicator-1").style.backgroundColor =
          "#1D2527";
        document.getElementById("indicator-2").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-3").style.backgroundColor =
          "#D2D4D9";
      }

      if (painel === 2) {
        document.getElementById("indicator-1").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-2").style.backgroundColor =
          "#1D2527";
        document.getElementById("indicator-3").style.backgroundColor =
          "#D2D4D9";
      }

      if (painel === 3) {
        document.getElementById("indicator-1").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-2").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-3").style.backgroundColor =
          "#1D2527";
      }
    }
  };

  const handleRightCLick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    if (painel < 3) {
      painel++;

      if (painel === 1) {
        document.getElementById("indicator-1").style.backgroundColor =
          "#1D2527";
        document.getElementById("indicator-2").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-3").style.backgroundColor =
          "#D2D4D9";
      }

      if (painel === 2) {
        document.getElementById("indicator-1").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-2").style.backgroundColor =
          "#1D2527";
        document.getElementById("indicator-3").style.backgroundColor =
          "#D2D4D9";
      }

      if (painel === 3) {
        document.getElementById("indicator-1").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-2").style.backgroundColor =
          "#D2D4D9";
        document.getElementById("indicator-3").style.backgroundColor =
          "#1D2527";
      }
    }
  };

  return (
    <div className="content px-2 py-5">
      <div className="carousel-wrapper d-flex align-items-center my-5 justify-content-center">
        <div
          className="controllers pointer d-none d-md-block"
          onClick={handleLeftCLick}
        >
          <span
            data-icon="bi:chevron-left"
            className="me-2 iconify"
            style={{ fontSize: "35px", color: "#1D2527" }}
          ></span>
        </div>

        <div
          className="carousel mx-auto d-flex justify-content-between"
          ref={carousel}
        >
          <div className="painel d-flex justify-content-around">
            <Card className="contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image11.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
            <Card className="d-none d-md-flex contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image12.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
            <Card className="d-none d-md-flex contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image13.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
          </div>

          <div className="painel d-flex justify-content-around">
            <Card className="contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image14.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
            <Card className="d-none d-md-flex contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image15.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
            <Card className="d-none d-md-flex contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image16.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
          </div>

          <div className="painel d-flex justify-content-around">
            <Card className="contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image17.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
            <Card className="d-none d-md-flex contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image18.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
            <Card className="d-none d-md-flex contentCard">
              <CardImg
                className="contentCardImg"
                src="static/image19.png"
                top
              />
              <CardBody className="contentCardBody">
                <CardTitle tag="h5" className="mt-5">
                  Mustang
                </CardTitle>
                <div className="w-100 px-2">
                  <ul>
                    <li>
                      <span className="iconify me-4" data-icon="bi:calendar2-date"></span>
                      2015
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:top-speed-20-regular"></span>
                      180 Km/h
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="simple-line-icons:energy"></span>
                      9/10
                    </li>
                    <li className="mt-3">
                      <span className="iconify me-4" data-icon="fluent:people-20-regular"></span>
                      8/10
                    </li>
                  </ul>
                </div>
                <Button>Ver Carro</Button>
              </CardBody>
            </Card>
          </div>
        </div>

        <div
          className="controllers pointer d-none d-md-flex"
          onClick={handleRightCLick}
        >
          <span className="iconify me-4" data-icon="bi:chevron-right" style={{ fontSize: "35px", color: "#1D2527" }}></span>
        </div>
      </div>

      <div className="d-flex mx-auto justify-content-center mt-4 d-none d-md-flex">
        <div
          className="carousel-indicator"
          style={{ backgroundColor: "#1D2527" }}
          id="indicator-1"
        ></div>
        <div className="carousel-indicator" id="indicator-2"></div>
        <div className="carousel-indicator" id="indicator-3"></div>
      </div>
    </div>
  );
}

export default Content;
