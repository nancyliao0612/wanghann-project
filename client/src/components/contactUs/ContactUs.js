import { useForm } from "react-hook-form";
import styled from "styled-components";
import { HighlightText } from "../../utils";
import axios from "axios";

const Wrapper = styled.section`
  border: solid 1px var(--color-grey);
  border-radius: 0.8rem;
  box-shadow: 0px 8px 24px 0px #00000026;
  padding: 1.2rem;
  margin-bottom: 6.4rem;
  h2 {
    color: var(--color-primary);
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 648px) {
    max-width: 600px;
    margin-bottom: 12rem;
  }
`;
const Field = styled.div`
  margin-top: 1.6rem;
  input {
    border: solid 1px var(--color-dark-grey);
    border-radius: 0.2rem;
    width: 100%;
    padding: 1.2rem;
    margin: 5px 0;
  }
  input:focus {
    border: solid 1px var(--color-bright);
  }
  span {
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.8rem 1.2rem;
  color: var(--color-bg);
  background: linear-gradient(90deg, #ff7355 0%, #ffc57f 104.75%);
  font-size: 1.6rem;
  margin-top: 1.6rem;
  cursor: pointer;
`;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const { name, mobile, email } = data;
    try {
      await axios.post("/api/respondents", {
        name,
        mobile,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper className="container">
      <h2>聯繫我們</h2>
      <h4>如想了解更多癌症基因檢測服務，我們將盡快派專業人員與您聯繫</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <h4 htmlFor="name">
            姓名 <HighlightText>*</HighlightText>
          </h4>
          <input
            {...register("name", { required: "必填" })}
            placeholder="輸入姓名"
          />
          <HighlightText>{errors.name?.message}</HighlightText>
        </Field>
        <Field>
          <h4 htmlFor="mobile">
            聯絡電話 <HighlightText>*</HighlightText>
          </h4>
          <input
            {...register("mobile", { required: "必填" })}
            placeholder="輸入聯絡電話"
          />
          <HighlightText>{errors.mobile?.message}</HighlightText>
        </Field>
        <Field>
          <h4 htmlFor="email">
            電子郵件 <HighlightText>*</HighlightText>
          </h4>
          <input
            {...register("email", {
              required: "必填",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "格式錯誤",
              },
            })}
            placeholder="輸入電子郵件"
          />
          <HighlightText>{errors.email?.message}</HighlightText>
        </Field>
        <Button type="submit">獲取更多資訊</Button>
      </form>
    </Wrapper>
  );
};

export default ContactUs;
