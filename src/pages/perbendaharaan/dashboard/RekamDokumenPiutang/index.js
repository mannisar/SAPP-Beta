import {
    React,
    Layout,
    Row,
    Col,
    Form,
    Input,
    Button,
    Space,
    Checkbox,
    Tabs,
    Descriptions,
    MinusCircleOutlined,
    PlusOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    useHistory,
    useState,
    Menu,
    UserOutlined
} from '../../libraries/dependencies';

const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

function RekamDokumenPiutang() {
    const [state, setState] = useState({
        collapsed: false
    })

    const toggle = () => {
        setState({ collapsed: !state.collapsed })
    };

    let history = useHistory();
    const handleNavigate = () => {
        history.push('/')
    };

    const newLocal = 'checkbox-group';
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Perbendaharaan">
                        <Menu.Item key="1" onClick={handleNavigate}>Dashboard</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Layout>
                        <Row>
                            <Col span={24} style={{ backgroundColor: 'white', padding: 8 }}>
                                <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} labelAlign={"left"} name="record-form" size={"small"} initialValues={{
                                    [newLocal]: ['checked']
                                }} style={{ border: '1px solid #eaeaea' }}>
                                    <Form.Item name="kd_kantor" label="Kode Kantor" wrapperCol={{ span: 2 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="bidang_seksi" label="Bidang / Seksi" style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="checkbox-group" label="Penomoran Otomatis" style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Checkbox.Group>
                                            <Checkbox value="checked" disabled>(Penomoran otomatis mengikutin SPTNP yang terbit dari CEISA Impor)</Checkbox>
                                        </Checkbox.Group>
                                    </Form.Item>
                                    <Form.Item name="doc_asal" label="Dokumen Asal" style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={24} style={{ backgroundColor: 'white', padding: 8 }}>
                                <Tabs defaultActiveKey="1" style={{ border: '1px solid #eaeaea', padding: 8 }}>
                                    <TabPane tab={<span><Descriptions />Uraian Pungutan</span>} key="1">
                                        <Form name="dynamic_form_nest_item" autoComplete="off">
                                            <Form.List name="users">
                                                {(fields, { add, remove }) => {
                                                    return (
                                                        <div>
                                                            {fields.map(field => (
                                                                <Space key={field.key} style={{ display: 'flex' }} align="start">
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name, 'first']}
                                                                        fieldKey={[field.fieldKey, 'first']}
                                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                                    >
                                                                        <Input placeholder="First Name" />
                                                                    </Form.Item>
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name, 'last']}
                                                                        fieldKey={[field.fieldKey, 'last']}
                                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                                    >
                                                                        <Input placeholder="Last Name" />
                                                                    </Form.Item>

                                                                    <MinusCircleOutlined
                                                                        onClick={() => {
                                                                            remove(field.name);
                                                                        }}
                                                                    />
                                                                </Space>
                                                            ))}

                                                            <Form.Item style={{ margin: 0 }} justify="center">
                                                                <Button
                                                                    type="dashed"
                                                                    onClick={() => {
                                                                        add();
                                                                    }}
                                                                    block
                                                                ><PlusOutlined /> Tambah Data</Button>
                                                            </Form.Item>
                                                        </div>
                                                    );
                                                }}
                                            </Form.List>
                                        </Form>
                                    </TabPane>
                                    <TabPane tab={<span><Descriptions />Uraian Kesalahan</span>} key="2">FORM</TabPane>
                                </Tabs>
                            </Col>
                        </Row>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    );
}

export default RekamDokumenPiutang;