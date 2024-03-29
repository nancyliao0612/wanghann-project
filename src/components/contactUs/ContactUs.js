import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { HighlightText } from "../../utils";
import Dialog from "./Dialog";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_uabp35e";
const TEMPLATE_ID = "template_7b8u6ul";
const PUBLIC_KEY = "Wz7iqsRwGDhOrIFKa";

const Wrapper = styled.section`
  border: solid 1px var(--color-grey);
  border-radius: 0.8rem;
  box-shadow: 0px 8px 24px 0px #00000026;
  padding: 1.2rem;
  margin-bottom: 6.4rem;
  position: relative;
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
  const [openDialog, setOpenDialog] = useState(false);

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
      setOpenDialog((prevState) => !prevState);

      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "Scott",
          auto_reply_email: email,
          client_name: name,
          client_mobile: mobile,
          client_email: email,
          cc_myself: "nancyliao.engineer@gmail.com",
          pdf_file:
            "/client/build/static/file/OncoDEEP RNA - Brochure - 2023.pdf",
        },
        PUBLIC_KEY
      );

      setTimeout(() => {
        setOpenDialog((prevState) => false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper className="container" id="contactUs">
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
            {...register("mobile", {
              required: "必填",
              pattern: {
                value: /^[0-9]*$/,
                message: "格式錯誤",
              },
            })}
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
      {openDialog && <Dialog />}
    </Wrapper>
  );
};

export default ContactUs;
