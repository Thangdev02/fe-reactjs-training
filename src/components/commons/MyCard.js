import { Card, Col, Row } from 'antd';
const MyCard = (props) => (
    <Col span={8}>
      <Card className={props.className} title={props.title} bordered={false}>
        {props.text}
      </Card>
    </Col>
    
);
export default MyCard;