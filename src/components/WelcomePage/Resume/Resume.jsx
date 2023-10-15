import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import "./resume.css";
export const Resume = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      {/* <Paper elevation={3} className="resume-paper"> */}
      <Typography variant="h4" align="center" gutterBottom>
        Resume
      </Typography>

      <div className="resume-section">
        <div className="resume-column">
          <Typography variant="h5" fontWeight={"bolder"}>
            Education
          </Typography>{" "}
          <hr />
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  Bachelor of Computer Science and Engineering
                </span>
                <br />
                National Institue of Science and Technology, Brahmapur
                [2019-2023]
                <br />
                CGPA: 9.10
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>Intermediate</span>
                <br />
                Saraswati Vidya Mandir Nilakanthanagar, Brahmapur [2016-2018]
                <br />
                Percentage: 70%
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>Matriculation</span>
                <br />
                Saraswati Sishu Vidya Mandir Neelakanthanagar, Brahmapur [2016]
                <br />
                Percentage: 92.66%
              </Typography>
            </li>
          </ul>
        </div>

        <div className="resume-column">
          <Typography variant="h5" fontWeight={"bolder"}>
            Work Experience
          </Typography>
          <hr />
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  Software Engineer Intern
                </span>
                <br />
                BrainerHub Solutions, LLP [February(2019)-July(2019)]
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  Junior Software Developer Engineer (REACT)
                </span>
                <br />
                BrainerHub Solutions, LLP [July(2019)-Present]
              </Typography>
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <div className="resume-column">
          <Typography variant="h5" fontWeight={"bolder"}>
            Achievements
          </Typography>
          <hr />
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  1 (O) CTC NCC Camp 2014
                </span>
                <br />
                First Position in Essay Writting
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  4th National Engineering Olympiad 2021
                </span>
                <br />
                AIR: 1361
              </Typography>
            </li>
          </ul>
        </div>

        <div className="resume-column">
          <Typography variant="h5" fontWeight={"bolder"}>
            Technical Skills
          </Typography>
          <hr />

          <ul className="list-item">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li className="list-item-section">
                <Typography variant="body1" className="Typography" margin={0}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Languages:
                  </span>
                </Typography>
                <Typography variant="body1" className="Typography" margin={0}>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JavaScript</div>
                  <div>TypeScript</div>
                  <div>MySql</div>
                </Typography>
              </li>
              <li className="list-item-section">
                <Typography variant="body1" className="Typography" margin={0}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Framework:
                  </span>
                </Typography>
                <Typography variant="body1" className="Typography" margin={0}>
                  <div>React</div>
                </Typography>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <div className="resume-column">
          <Typography variant="h5" fontWeight={"bolder"}>
            Certifications
          </Typography>
          <hr />
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  Learn C++ Programming-Beginner to Advance-Deep Dive in C++.
                  [July 2020-August 2020]
                </span>
                <br />
                Udemy
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  JAVA In Depth: Become a complete Java Engineer!. [August
                  2021-October 2021]
                </span>
                <br />
                Udemy
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  Database Management System.[August 2022-October 2022]
                </span>
                <br />
                NPTEL
              </Typography>
            </li>
          </ul>
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bolder" }}>
                  Developer Program Certification from Accenture
                </span>
              </Typography>
            </li>
          </ul>
        </div>

        <div className="resume-column">
          <Typography variant="h5" fontWeight={"bolder"}>
            Hobbies
          </Typography>
          <hr />
          <ul class="list-item">
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Playing Cricket
                </span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" class="Typography">
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Playing Badminton
                </span>
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      {/* </Paper> */}
    </Container>
  );
};
