import { React, Input, Select, Row, Col, Button, PrinterFilled, PlusOutlined } from '../libraries/dependencies';

const { Option } = Select;
const { Search } = Input;

function Head() {

    return (
        <Row justify='start' style={{ backgroundColor: 'gray', padding: 8 }}>
            <Col span={8}>
                <div className="site-input-group-wrapper">
                    <Input.Group compact>
                        <Select defaultValue="keys" style={{ width: 175 }}>
                            <Option value="npwp">npwp</Option>
                            <Option value="status">status</Option>
                        </Select>
                        <Search
                            placeholder="Search.."
                            onSearch={value => console.log(value)}
                            style={{ width: 200, marginLeft: 14 }}
                        />
                    </Input.Group>
                </div>
            </Col>
            <Col span={4}>
                <Button type="danger" icon={<PlusOutlined />} size={'middle'} />
                <Button type="info" icon={<PrinterFilled />} size={'middle'} style={{ marginLeft: 8 }} />
            </Col>
        </Row>
    )
}

export default Head;