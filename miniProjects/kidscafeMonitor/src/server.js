import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
// const engine = require("ejs-locals");

app.set("view engine", "ejs");
app.set("views", "src/views");

const PORT = 4001;
const handleListening = () => console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

//body-parser가 내장되어 있는 express 4.16 이후 버전은 아래 1줄을 추가
app.use(express.urlencoded({ extended: true }));

app.use(express.static("C:/Users/KEJ/Desktop/BT업무/Projects/STUDY/miniProjects/kidscafeMonitor/src/views"));
app.use(logger);
app.get("/", async (req, res) => {
  // const reqResult = await (
  //   await fetch("https://icare.seoul.go.kr/icare/user/kidsCafeResve/ND_selectResveTmeList.do?q_fcltyId=DJ230901&q_resveDe=2024-02-25&q_dayNo=1")
  // ).json();

  // console.log(reqResult.value);
  // return res.render("index", { result: JSON.stringify(reqResult.value) });
  return res.render("index");
});

app.post("/", async (req, res) => {
  let result = [];
  console.log(req.body);
  let { q_fcltyId, q_resveDe, q_dayNo } = req.body;
  if (req.body.q_dayNo.length === 1) {
    // 데이터가 하나면 각 데이터의 값이 배열이 아니라서 배열로 변경
    ({ q_fcltyId, q_resveDe, q_dayNo } = Object.fromEntries(Object.entries(req.body).map(([key, value]) => [key, [value]])));
  }
  console.log(q_fcltyId);
  console.log(q_resveDe);
  console.log(q_dayNo);

  async function fetchData() {
    console.log("q_dayNo.length:" + q_dayNo.length);
    for (let index = 0; index < q_resveDe.length; index++) {
      console.log("fetch ing..." + index + " / " + q_resveDe[index] + " / " + q_fcltyId[index]);

      try {
        const response = await (
          await fetch(
            `https://icare.seoul.go.kr/icare/user/kidsCafeResve/ND_selectResveTmeList.do?q_fcltyId=${q_fcltyId[index]}&q_resveDe=${q_resveDe[index]}&q_dayNo=${q_dayNo[index]}`
          )
        ).json();
        if (!response.result) {
          console.error(`Fetch failed for index ${index}: ${response.status} ${response.statusText}`);
          return res.redirect("/");
        }

        //value만 추출
        const reqResult = response.value;
        //자리가 있는 것만 필터
        const existsLists = await reqResult.filter((item) => item.waitPsncpa > item.waitNmpr);

        //data 간략화
        if (existsLists) {
          //날짜 데이터 넣어주기
          existsLists.forEach((item) => (item.q_resveDe = q_resveDe[index]));
          //data 간략화
          const simpleLists = existsLists.map(({ fcltyId, q_resveDe, useBeginTime }) => ({ fcltyId, q_resveDe, useBeginTime }));
          console.log("fetch end");
          result = await simpleLists.concat(result);

          //마지막 데이터에 오면 렌더링
          if (index + 1 === q_fcltyId.length) {
            console.log("return 직전");
            // console.log(result);
            return res.render("index", { result, resultMsg: new Date().toLocaleString() });
            // return res.send(result);
          }
        }
      } catch (error) {
        console.error(`Error fetching data for index ${index}:`, error);
        return res.render("index", { error: "error" });
      }
    }
  }

  fetchData();
});

app.get("/img", (req, res) => {});

//express listening start
app.listen(PORT, handleListening);
