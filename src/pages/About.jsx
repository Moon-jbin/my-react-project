import "../css/About.css";

export default function About() {
  return (
    <div id="about_inner">
      <div id="container">
        {/* 사이드바 */}
        <aside>
          <div id="namecard">
            <div id="profile-image"></div>
            <h1>Moon JB</h1>
            <p>신입 프론트엔드 개발자 입니다.</p>
          </div>
          <div id="detail">
            <h2>INFO</h2>
            <p>Gyeonggi-do, Korea</p>
            <p>mjb1209@naver.com</p>
          </div>
        </aside>

        <main>
          {/* 자기소개 */}
          <section>
            <h2 className="subtitle">Profile</h2>
            <p>
              안녕하세요.
              <br /> 신입 프론트엔드 개발자입니다.
              <br />
            </p>
          </section>

          <section>
            {/* 스킬 */}
            <h2 className="subtitle">Skills</h2>
            <ul>
              <li>
                main-skill
                <ul>
                  <li>main</li>
                  <li>main</li>
                  <li>main</li>
                </ul>
              </li>

              <li>
                sub-skill
                <ul>
                  <li>sub</li>
                  <li>sub</li>
                  <li>sub</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 경력 */}
          <section>
            <h2 className="subtitle">Experience</h2>
            <ul>
              <li>
                Project
                <ul>
                  <li>어떤 프로젝트함</li>
                  <li>어떤 프로젝트함</li>
                  <li>어떤 프로젝트함</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 학력 */}
          <section>
            <h2 className="subtitle">Education</h2>
            <table>
              <caption>학력 사항</caption>
              <thead>
                <tr>
                  <th>출신학교</th>
                  <th>전공</th>
                  <th>기간</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>한경대학교</td>
                  <td>응용수학과</td>
                  <td>2014.03~2020.08</td>
                </tr>
                <tr>
                  <td>마석고등학교</td>
                  <td>- </td>
                  <td>2011.03~2014.02</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
