import { Button, Form, Divider, Input } from "antd";
import "./index.css";

function ExhibitionPage() {
  //
  //방명록 form 함수
  const onSubmit = (values) => {
    console.log(values);
  };
  //

  return (
    <div>
      {/* 방명록 제외 구현 시작 */}
      <img
        className="Exhibition-exp-img"
        src="https://post-phinf.pstatic.net/MjAxOTEwMjhfNDAg/MDAxNTcyMjQyMzU4ODA2.KUMHlcBR4RinjJov0AavjphuoKwpCdtTV4IxuirH3KMg.qYI-wyqe3fOOYczsVn30XI3OyAK5aJkR4wei1u6JVoEg.JPEG/banksy_exhibition.jpg?type=w1200"
      />
      <div className="Exhibition-exp-card">
        <div className="Exhibition-exp-card-contents">
          <span className="Exhibition-Title"> The Art of Banksy Online </span>
          <span className="Exhibition-exp-card-text">
            exhibition contents needed
          </span>
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
    </div>
  );
}

export default ExhibitionPage;
