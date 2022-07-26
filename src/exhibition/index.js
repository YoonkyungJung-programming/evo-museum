import { useParams } from "react-router-dom";
import axios from "axios";
//import { useEffect, useState } from "react";
import React from "react";
import "./index.css";
import { Button, Form, Divider, Input } from "antd";

function ExhibitionPage() {
  //방명록 form 함수
  const onSubmit = (values) => {
    console.log(values);
  };

  //server 부분 추가
  const { id } = useParams();
  const [exhibition, setExhibition] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`http://localhost:8080/exhibitions/${id}`)
      .then(function (result) {
        setExhibition(result.data.exhibition);
      })
      .catch(function (error) {
        console.error("Error! : ", error);
      });
  }, []);

  return (
    <div>
      <div>
        <img className="Exhibition-exp-img" src={exhibition.imageUrl2} />
        <div className="Exhibition-exp-card">
          <div className="Exhibition-exp-card-contents">
            <span className="Exhibition-Title"> {exhibition.name} </span>
            <span className="Exhibition-exp-card-text">{exhibition.exp2}</span>
          </div>
        </div>
      </div>
      <div className="Unreal-Engine">
        <h1> Unreal Engine Pixel Streaming</h1>
      </div>
      {/* 방명록 제외 구현 완료 */}
      {/* 방명록 구현 시작  */}
      <Divider />
      <Form name="visitor" onFinish={onSubmit}>
        <Form.Item name="upload">
          <div id="upload-visitor">
            <span> Visitor </span>
          </div>
        </Form.Item>
        {/*방명록 -input */}
        <Form.Item
          name="visitor"
          label={<div className="upload-label"> Name </div>}
          rules={[{ required: true, message: "성함을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="성함을 입력해 주세요"
          />
        </Form.Item>
        <Form.Item
          label={<div className="upload-label"> Message </div>}
          name="text"
          rules={[{ required: true, message: "메시지를 입력해주세요" }]}
        >
          <Input.TextArea
            size="large"
            id="upload-text"
            showCount
            maxLength={100}
            placeholder="메시지를 입력해 주세요"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {/* 방명록 구현 끝  */}
      </Form>
      {/* Visitor-History 방명록 저장칸 */}
      <div className="visitor-history">
        <span> Visitor History </span>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </div>
      {/* Visitor-History 방명록 저장칸 끝*/}
    </div>
  );
}

export default ExhibitionPage;
