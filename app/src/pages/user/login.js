import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

const MainContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url("/mainimg2.jpg");
  background-size: cover;
`;

const LoginDiv = styled.div`
  width: 50%;
  max-width: 360px;
  margin: 0 auto;

  height: 100vh;
  padding-top: 10rem;
  form {
    width: 100%;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    border-radius: 8px;

    input {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      margin-bottom: 10px;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background-color: black;
      color: white;

      margin-top: 10px;
      &:hover {
        background-color: green;
        color: black;
      }
    }
    label {
      margin-top: 20px;
      font-size: 80%;
      text-align: center;
    }
    @media (max-width: 756px) {
      width: 100%;
    }
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");

  return (
    <>
      <MainContainer>
        <LoginDiv>
          <form>
            <div className="text-center" style={{ paddingBottom: "1rem" }}>
              <h1 className="font-bold text-4xl">
                Keti
                <br />
                SmartFarm
              </h1>
            </div>
            <input
              type="email"
              value={Email}
              placeholder="이메일"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <input
              type="password"
              value={PW}
              placeholder="비밀번호"
              onChange={(e) => setPW(e.currentTarget.value)}
            />
            <button>로그인</button>
            <label>
              계정이 없으신가요?{" "}
              <Link href="/user/register" style={{ color: "#0070f3" }}>
                가입하기
              </Link>
            </label>
          </form>
        </LoginDiv>
      </MainContainer>
    </>
  );
}

export default Login;
