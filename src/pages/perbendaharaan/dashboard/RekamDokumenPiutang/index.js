import {
    React,
    Layout,
    Row,
    Col,
    Form,
    Input,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    useHistory,
    useState,
    Menu,
    UserOutlined,
    Select,
    Button,
    DatePicker,
    Table,
    AutoComplete,
    message
} from '../../libraries/dependencies';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

function RekamDokumenPiutang() {
    const [collapsed, setCollapsed] = useState(false);
    const [akun, setAkun] = useState("");
    const [selisih, setSelisih] = useState("");
    const [nilai, setNilai] = useState(0);
    const [data_pungutan, setData_pungutan] = useState([
        {
            akun: 'Bea Masuk',
            nilai: '34.000.000',
            key: '1'
        },
    ]);
    const columns_pungutan = [
        {
            title: 'Akun',
            dataIndex: 'akun',
            key: 'akun',
        },
        {
            title: 'Nilai',
            dataIndex: 'nilai',
            key: 'nilai',

        }
    ];
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [data_keterangan, setData_keterangan] = useState([
        {
            name: 'Pasal',
            value: 'PASAL TA AYAT (3)',
            key: '1'
        },
    ]);
    const columns_keterangan = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',

        }
    ];
    const [inputValues, setInputValues] = useState('');
    const [options, setOptions] = useState([]);

    const mockVal = (str) => ({
        value: str
    });

    const onSearch = searchText => {
        setOptions(
            !searchText ? [] : [mockVal(searchText)],
        );
        console.log(options)
    };

    const onSelect = data => {
        console.log('onSelect', data);
    };

    const onChange = data => {
        setInputValues(data);
    };

    let history = useHistory();
    const handleNavigate = () => {
        history.push('/')
    };

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    const handleAkun = val => {
        setAkun(val);
    }

    const handleSelisih = val => {
        setSelisih(val);
    }

    const handleNilai = e => {
        setNilai(e.target.value);
    }

    const handleSubmitPungutan = () => {
        let ObjData = {
            key: data_pungutan.length + 1,
            akun: akun,
            // selisih: selisih,
            nilai: parseInt(nilai),
        }

        const newData = [...data_pungutan, ObjData]
        setData_pungutan(newData);
        setAkun("");
        // setSelisih("");
        setNilai(0);
    }

    const handleName = val => {
        setName(val);
    }

    const handleValue = e => {
        setValue(e.target.value);
    }

    const handleSubmitKeterangan = () => {
        let ObjData = {
            key: data_keterangan.length + 1,
            name: name,
            value: value
        }

        const newData = [...data_keterangan, ObjData]
        setData_keterangan(newData);
        setName("");
        setValue("");
    }

    const handleDate = (date, dateString) => {
        // console.log(date, dateString);
    }

    const handleTarik = () => {
        let condition = true
        if (condition) message.success('This is a success message');
        else message.error('This is a error message');
    }

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
                <Header className="site-layout-background" style={{ margin: 0 }}>
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
                    <Layout style={{ backgroundColor: 'white' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: 24 }}>Perekaman Dokumen Piutang</h1>
                        <Row>
                            <Col span={24}>
                                <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} labelAlign={"left"} name="record-form" size={"small"} style={{ border: '1px solid #eaeaea' }}>
                                    <Form.Item name="kd_penerbit" label="Kantor Penerbit" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="kt_monitor" label="Kantor Monitor" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="dokumen" label="Dokumen" wrapperCol={{ span: 4 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Select value={"-"}>
                                            <Option value="Sptnp">Sptnp</Option>
                                            <Option value="Spktnp">Spktnp</Option>
                                            <Option value="Spp">Spp</Option>
                                            <Option value="Sppbk">Sppbk</Option>
                                            <Option value="Spkpbk">Spkpbk</Option>
                                            <Option value="Spsa">Spsa</Option>
                                            <Option value="Sp3dri">Sp3dri</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="tgl_jatuh_tmp" label="Tanggal Jatuh Tempo" wrapperCol={{ span: 4 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <DatePicker onChange={handleDate} placeholder="" style={{ width: '100%' }} />
                                    </Form.Item>
                                    <Form.Item name="dokumen_asal" label="Dokumen Asal" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input.Group compact>
                                            <Form.Item style={{ marginBottom: 0, width: "20%" }}>
                                                <AutoComplete
                                                    value={inputValues}
                                                    options={options}
                                                    style={{
                                                        borderLeft: '5px solid #eaeaea',
                                                        width: "100%"
                                                    }}
                                                    onSelect={onSelect}
                                                    onSearch={onSearch}
                                                    onChange={onChange}
                                                    placeholder="Surat"
                                                />
                                            </Form.Item>
                                            <span style={{ marginRight: 8, marginLeft: 8 }}>/</span>
                                            <Form.Item style={{ marginBottom: 0, width: "20%" }}>
                                                <AutoComplete
                                                    // value={inputValues}
                                                    // options={options}
                                                    style={{
                                                        borderLeft: '5px solid #eaeaea',
                                                        width: "100%"
                                                    }}
                                                    // onSelect={onSelect}
                                                    // onSearch={onSearch}
                                                    // onChange={onChange}
                                                    placeholder="Nomor"
                                                />
                                            </Form.Item>
                                            <span style={{ marginRight: 8, marginLeft: 8 }}>/</span>
                                            <Form.Item style={{ marginBottom: 0, width: "20%" }}>
                                                <DatePicker onChange={handleDate} placeholder="Tanggal" style={{ width: '100%' }} />
                                            </Form.Item>
                                            <Form.Item style={{ marginLeft: 8, marginBottom: 0, width: "12%" }}>
                                                <Button type="info" style={{ width: '100%' }} onClick={handleTarik}>Tarik</Button>
                                            </Form.Item>
                                            <Form.Item style={{ marginLeft: 8, marginBottom: 0, width: "12%" }}>
                                                <Button type="info" style={{ width: '100%' }}>Lihat</Button>
                                            </Form.Item>
                                        </Input.Group>
                                    </Form.Item>
                                    <Form.Item name="perusahaan" label="Perusahaan" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="alamat_perusahaan" label="Alamat Perusahaan" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="ppjk" label="PPJK" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px', borderBottom: '1px solid #eaeaea' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                    <Form.Item name="petugas" label="Petugas" wrapperCol={{ span: 12 }} style={{ marginBottom: 0, padding: '1px 1px 1px 5px' }}>
                                        <Input style={{ borderLeft: '5px solid #eaeaea' }} />
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                        <h1 style={{ fontWeight: 'bold', fontSize: 24, marginTop: 14 }}>Pungutan</h1>
                        <Row>
                            <Col span={16}>
                                <Row>
                                    <Col span={6} style={{ display: 'flex' }}>
                                        <h4 style={{ marginRight: 10 }}>Akun :</h4>
                                        <Select value={akun.length === 0 ? "-" : akun} style={{ width: '60%' }} onChange={handleAkun} size={"small"}>
                                            <Option value="Bea Masuk">Bea Masuk</Option>
                                            <Option value="BM AD">BM AD</Option>
                                            <Option value="BM PT">BM PT</Option>
                                            <Option value="PPN">PPN</Option>
                                            <Option value="PPH">PPH</Option>
                                            <Option value="Denda">Denda</Option>
                                        </Select>
                                    </Col>
                                    <Col span={6} style={{ display: 'flex' }}>
                                        <h4 style={{ marginRight: 10 }}>Selisih :</h4>
                                        <Select value={selisih.length === 0 ? "-" : selisih} style={{ width: '60%' }} onChange={handleSelisih} size={"small"}>
                                            <Option value="lb_bayar">Lebih Bayar</Option>
                                            <Option value="kr_bayar">Kurang Bayar</Option>
                                        </Select>
                                    </Col>
                                    <Col span={6} style={{ display: 'flex' }}>
                                        <h4 style={{ marginRight: 10 }}>Nilai :</h4>
                                        <Input style={{ width: '60%', height: '24px' }} value={nilai} onChange={handleNilai} />
                                    </Col>
                                    <Col span={6}>
                                        <Button type="info" size="small" style={{ width: '100%' }} onClick={handleSubmitPungutan}>Tambah Akun</Button>
                                    </Col>
                                </Row>
                                <Row justify="space-between">
                                    <Col span={24}>
                                        <Table dataSource={data_pungutan} pagination={false} showHeader={false} columns={columns_pungutan} size={"small"} bordered style={{ marginTop: 8 }} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={6} offset={2}>
                                <h4>Keterangan :</h4>
                                <p>Lebih Bayar</p>
                                <p>Kurang Bayar</p>
                            </Col>
                        </Row>
                        <h1 style={{ fontWeight: 'bold', fontSize: 24 }}>Keterangan</h1>
                        <Row>
                            <Col span={16}>
                                <Row>
                                    <Col span={6} style={{ display: 'flex' }}>
                                        <Select value={name.length === 0 ? "-" : name} style={{ width: '90%' }} onChange={handleName} size={"small"}>
                                            <Option value="Uraian Kesalahan">Uraian Kesalahan</Option>
                                            <Option value="Alasan">Alasan</Option>
                                            <Option value="Pasal">Pasal</Option>
                                        </Select>
                                    </Col>
                                    <Col span={12} style={{ display: 'flex' }}>
                                        <Input style={{ width: '92%', height: '24px' }} value={value} onChange={handleValue} />
                                    </Col>
                                    <Col span={6}>
                                        <Button type="info" size="small" style={{ width: '100%' }} onClick={handleSubmitKeterangan}>Tambah Keterangan</Button>
                                    </Col>
                                </Row>
                                <Row justify="space-between">
                                    <Col span={24}>
                                        <Table dataSource={data_keterangan} pagination={false} showHeader={false} columns={columns_keterangan} size={"small"} bordered style={{ marginTop: 8 }} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    );
}

export default RekamDokumenPiutang;