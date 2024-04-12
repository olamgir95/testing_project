import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";

interface Member {
  name: string;
  password: string;
}

interface requestOptionsType {
  method: string;
  headers: Headers;
  body: string;
  // redirect: string;
}
export default class MemberApiService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  async loginRequest(login_data: any): Promise<Member> {
    try {
      const result = await axios.post(this.path + "/login", login_data, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", Definer.general_err1);
      console.log("state", result.data.state);

      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest ${err.message}`);

      throw err;
    }
  }

  async signupRequest(signup_data: any) {
    console.log("signup", signup_data);

    const myHeaders = new Headers();
    myHeaders.append("Key", "{Key}");
    myHeaders.append("Sign", "{Sign}");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      signup_data,
    });

    const requestOptions: requestOptionsType = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: "follow",
    };

    fetch(`${serverApi}/signup`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("result", result))
      .catch((error) => console.log("error", error));
  }

  async logOutRequest(): Promise<Boolean> {
    try {
      const result = await axios.get(this.path + "/logout", {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", Definer.general_err1);

      const logout_result = result.data.state;
      localStorage.removeItem("member_data");

      return logout_result === "success";
    } catch (err: any) {
      console.log(`ERROR ::: logOutRequest ${err.message}`);
      throw err;
    }
  }
}
