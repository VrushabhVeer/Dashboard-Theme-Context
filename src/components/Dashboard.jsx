import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.imageDiv}>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzR8aGhqZ1RPVnVOZjB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.userName}>
              <p>Jacob</p>
            </div>
          </div>
          <div className={styles.sidebarIcons}>
            <div className={styles.iconsDiv}>
              <i className="bi bi-bar-chart-line"></i>
            </div>

            <div className={styles.iconsDiv}>
              <i className="bi bi-signpost"></i>
            </div>

            <div className={styles.iconsDiv}>
              <i className="bi bi-chat-left-text"></i>
            </div>

            <div className={styles.iconsDiv}>
              <i className="bi bi-basket-fill"></i>
            </div>

            <div className={styles.iconsDiv}>
              <i className="bi bi-gear"></i>
            </div>
            <div className={styles.iconsDiv}>
              <i className="bi bi-file-earmark-medical"></i>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.top}>
            <h3>My Dashboard</h3>

            <div className="form-check form-switch">
              <input
                onChange={toggleTheme}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label className="form-check-label" for="flexSwitchCheckChecked">
                {`${isLight ? "Dark Mode" : "Light Mode"}`}
              </label>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardDiv}>
              <h6>Active Users</h6>
            </div>

            <div className={styles.cardDiv}>
              <div className={styles.cardDivTop}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={styles.cardDivTopLeft}>
                  <p>Nrupul Dev</p>
                  <p>Bangalore, India</p>
                </div>
              </div>
              <div className={styles.cardDivTopBottom}>
                <div className="progress">
                  <div
                    className="progress-bar w-75"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>professional Level</p>
              </div>
            </div>

            <div className={styles.cardDiv}>
              <div className={styles.cardDivTop}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={styles.cardDivTopLeft}>
                  <p>Sandhya Thakur</p>
                  <p>Pune, India</p>
                </div>
              </div>
              <div className={styles.cardDivTopBottom}>
                <div className="progress">
                  <div
                    className="progress-bar w-75"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>professional Level</p>
              </div>
            </div>

            <div className={styles.cardDiv}>
              <div className={styles.cardDivTop}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1597004897768-c503466472cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={styles.cardDivTopLeft}>
                  <p>Janice Wick</p>
                  <p>Mumbai, India</p>
                </div>
              </div>
              <div className={styles.cardDivTopBottom}>
                <div className="progress">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>professional Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
