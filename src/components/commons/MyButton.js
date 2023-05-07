import React from 'react';
import { Button, Space } from 'antd';

const MyButton = (props) => (
    <Space wrap>
        <Button className={props.className} href={props.href} type="primary">{props.text}</Button>

    </Space>
);

export default MyButton;