import axios, { AxiosError } from "axios";

const token = "GITLAB_ACCESS_TOKEN";
const API_URL = "https://gitlab.com/api/v4";
const FROM_DATE = "2022-04-01";

async function main() {
  try {
    const mrs = await axios(
      `${API_URL}/merge_requests?access_token=${token}&state=merged&created_after=${new Date(
        FROM_DATE
      )}`
    ).then((res) => res.data);
    console.info(mrs.map((mr: any) => mr.title));
  } catch (e) {
    console.error((e as AxiosError).message);
  }
}

main();
