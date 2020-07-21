import {
    React,
    Layout,
    Row,
    Col,
    Form,
    Input,
    Checkbox,
    Tabs,
    Descriptions,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    useHistory,
    useState,
    Menu,
    UserOutlined,
    Table,
    Select,
    Button
} from '../../libraries/dependencies';

const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

function RekamDokumenPiutang() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [name, setName] = useState('');
    const [pemberitahuan, setPemberitahuan] = useState(0);
    const [penetapan, setPenetapan] = useState(0);
    const [selisih, setSelisih] = useState(0);
    const [data, setData] = useState([]);
    const [columns] = useState([
        {
            title: '',
            dataIndex: 'name',
        },
        {
            title: 'Pemberitahuan',
            dataIndex: 'pemberitahuan',
        },
        {
            title: 'Penetapan',
            dataIndex: 'penetapan',
        },
        {
            title: 'Selisih',
            dataIndex: 'selisih',
        },
    ])

    const handleChange = val => {
        setName(val)
    }

    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys({ selectedRowKeys: selectedRowKeys })
    };

    const toggle = () => {
        setCollapsed({ collapsed: !collapsed })
    };

    let history = useHistory();
    const handleNavigate = () => {
        history.push('/')
    };

    const handleSave = () => {
        let data_2 = {
            key: data.length + 1,
            name: name,
            pemberitahuan: parseInt(pemberitahuan),
            penetapan: parseInt(penetapan),
            selisih: parseInt(selisih)
        }

        const newData = [...data, data_2]
        setData(newData);
    }

    const rowSelection = () => {
        return {
            selectedRowKeys,
            onChange: onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        setSelectedRowKeys({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        setSelectedRowKeys({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        }
    }

    console.log(data)
    const newLocal = 'checkbox-group';
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Perbendaharaan">
                        <Menu.Item key="1" onClick={handleNavigate}>Dashboard</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
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
                        <Row>
                            <Col span={24} style={{ backgroundColor: 'white', padding: 8 }}>
                                <Tabs defaultActiveKey="1" style={{ border: '1px solid #eaeaea', padding: 8 }}>
                                    <TabPane tab={<span><Descriptions />Uraian Pungutan</span>} key="1">
                                        <Row justify="start" style={{ marginBottom: 10 }}>
                                            <Select defaultValue="Choose field.." style={{ width: 325 }} onChange={handleChange}>
                                                <Option value="Bea Masuk">Bea Masuk</Option>
                                                <Option value="BM AD">BM AD</Option>
                                                <Option value="BM PT">BM PT</Option>
                                            </Select>
                                            <Input placeholder="null" type="number" onChange={(e) => setPemberitahuan(e.target.value)} style={{ width: 315 }} />
                                            <Input placeholder="null" type="number" onChange={(e) => setPenetapan(e.target.value)} style={{ width: 240 }} />
                                            <Input placeholder="null" type="number" onChange={(e) => setSelisih(e.target.value)} style={{ width: 165 }} />
                                        </Row>
                                        <Row justify="center">
                                            <Col span={24}>
                                                <Button
                                                    type="info"
                                                    style={{ width: '100%' }}
                                                    onClick={handleSave}
                                                >Save</Button>
                                            </Col>
                                        </Row>
                                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
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