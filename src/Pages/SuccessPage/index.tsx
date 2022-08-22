import React from "react";
import PageLayout from "../../layout/PageLayout";
import "./SuccessPage.scss";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <main className="page__container">
        <div className="content">
          <div className="check__container">
            <div className="circle">
              <img src="/public/vectors/check.svg" alt="" />
            </div>
          </div>
          <h1 className="title">Purchase Completed</h1>
          <p className="message">
            Please check your email for details concerning this transaction
          </p>
          <div
            className=" relative mt-[2.375rem] pb-[6.1875rem]"
            onClick={() => navigate("/")}
          >
            <p className="return">Return Home</p>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default SuccessPage;
