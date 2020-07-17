import { React, Layout, Row, Col, Form, Input, Checkbox } from '../../libraries/dependencies';

function RekamDokumenPiutang() {
    const newLocal = 'checkbox-group';
    return (
        <Layout>
            <Row>
                <Col span={24} style={{ backgroundColor: 'white', padding: 8 }}>
                    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} labelAlign={"left"} name="record-form" size={"small"} initialValues={{
                        [newLocal]: ['A']
                    }} style={{ border: '1px solid #eaeaea' }}>
                        <Form.Item name="kd_kantor" label="Kode Kantor" wrapperCol={{ span: 2 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                            <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                        </Form.Item>
                        <Form.Item name="bidang_seksi" label="Bidang / Seksi" style={{ marginBottom: 0, padding: '1px 1px 1px 5px' }}>
                            <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                        </Form.Item>
                        <Form.Item name="checkbox-group" label="Penomoran Otomatis" style={{ marginBottom: 0, padding: '1px 1px 1px 5px' }}>
                            <Checkbox.Group>
                                <Checkbox value="A" disabled>(Penomoran otomatis mengikutin SPTNP yang terbit dari CEISA Impor)</Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={24} style={{ backgroundColor: 'black' }}>
                </Col>
            </Row>
        </Layout>
    )
}

export default RekamDokumenPiutang;