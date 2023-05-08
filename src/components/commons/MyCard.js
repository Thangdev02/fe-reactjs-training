import { Card, Col } from 'antd';
import { Button } from 'antd';

const buttonStyle = {
  color: '#333',
  paddingTop: '30px',
  borderRadius: '5px'
};

const MyCard = (props) => (
  <Col span={8}>
    <Card style={{ border: '0.5px solid gray' }} className={props.className} title={props.title} bordered={false}>
      {props.text}
      <div style={buttonStyle}>
        <Button onClick={props.onClick} type="primary">{props.bttext}</Button>
      </div>
    </Card>
  </Col>
);
export default MyCard;