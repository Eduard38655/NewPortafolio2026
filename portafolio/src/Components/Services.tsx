import "i18next";
import { useTranslation } from "react-i18next";
import { BsWindowSidebar } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { RiSpeedUpFill } from "react-icons/ri";

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <button>
          {" "}
          <p id="services">{t("what_can_i_build")}</p>{" "}
        </button>

        <h2>{t("services")}</h2>
      </div>
      <div>
        <div>
          <div>
            <div>
              <BsWindowSidebar />
            </div>
            <span>01</span>
          </div>

          <div>
            <h3>Frontend Development</h3>
            <p>
              Responsive interfaces using modern frameworks and component-based
              architecture.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <MdWeb />
            </div>
            <span>02</span>
          </div>

          <div>
            <h3>Web Applications</h3>
            <p>
              Interactive applications with APIs, databases and real user flows.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <FaPenNib />
            </div>
            <span>03</span>
          </div>

          <div>
            <h3>UI Implementation</h3>
            <p>
              Turning designs into responsive, pixel-accurate and accessible
              interfaces.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <RiSpeedUpFill />
            </div>
            <span>04</span>
          </div>

          <div>
            <h3>Website Optimization</h3>
            <p>
              Performance, accessibility and responsive improvements for
              existing sites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
