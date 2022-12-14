import { useState } from "react";
import "./UploadPage.css";
import { Form, Divider, Input, InputNumber, Button, Upload } from "antd";
const { TextArea } = Input;

const UploadPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (values) => {
    console.log("이것은 벨류", values);
  };
  const onChageImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };

  return (
    <div id="body">
      <div id="load-container">
        <Form name="uploadForm" onFinish={onSubmit}>
          <Form.Item
            name="upload"
            label={<div className="upload-label">상품 사진</div>}
          >
            <Upload
              name="image"
              action="http://localhost:8080/image"
              listType="picture"
              showUploadList={false}
              onChange={onChageImage}
            >
              {imageUrl ? (
                <img id="upload-img" src={`http://localhost:8080/${imageUrl}`}
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="/images/icons/camera.png" />
                  <span>이미지업로드</span>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">판매자명</div>}
            name="seller"
            rules={[{ required: true, message: "판매자명을 입력해주세요" }]}
          >
            <Input
              className="upload-name"
              size="large"
              placeholder="판매자명을 입력해주세요"
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">상품명</div>}
            rules={[{ required: true, message: "상품명을 입력해주세요" }]}
            name="name"
          >
            <Input
              className="upload-name"
              size="large"
              placeholder="상품명을 입력해주세요"
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">판매가</div>}
            rules={[{ required: true, message: "판매가를 입력해주세요" }]}
            name="price"
          >
            <InputNumber
              className="upload-price"
              size="large"
              min={0}
              defaultValue={0}
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">상품설명</div>}
            rules={[{ required: true, message: "상품설명을 입력해주세요" }]}
            name="description"
          >
            <TextArea
              size="large"
              id="product-description"
              showCount
              maxLength={300}
              placeholder="상품설명을 입력해주세요"
            />
          </Form.Item>
          <Divider />
          <Form.Item>
            <Button id="submit-button" size="large" htmlType="submit">
              상품등록하기
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default UploadPage;
