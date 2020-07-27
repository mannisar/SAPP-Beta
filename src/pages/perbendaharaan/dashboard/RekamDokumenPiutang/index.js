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
  message,
  Badge,
  List,
  DeleteFilled,
  EditFilled,
} from "../../libraries/dependencies";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

function RekamDokumenPiutang() {
  const [collapsed, setCollapsed] = useState(false);
  const [akun, setAkun] = useState("");
  const [selisih, setSelisih] = useState("");
  const [nilai, setNilai] = useState(0);
  const [keyEditPungutan, setKeyEditPungutan] = useState(0);
  const [data_pungutan, setData_pungutan] = useState([
    {
      akun: "Bea Masuk",
      nilai: "34.000.000",
      selisih: "lebih bayar",
      key: 1,
    },
  ]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [data_keterangan, setData_keterangan] = useState([
    {
      name: "Pasal",
      value: "PASAL TA AYAT (3)",
      key: "1",
    },
  ]);
  const columns_keterangan = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];
  const [db_dokumen_asal, setDb_dokumen_asal] = useState([
    {
      dokumen_asal: "SPTNP/000001/05/06/2001",
      // surat: "S000001",
      // nomor: "000001",
      // tanggal: "2019-02-07", // MM/DD/YYYY
      perusahaan: "12345678912345 - PT TESTING INDONESIA",
      alamat_perusahaan: "Jalan Alamat PT Testing Indonesia",
      ppjk: "-",
      petugas: "198989504523538987 - Andhika Kusuma",
      key: "1",
    },
    {
      dokumen_asal: "SPP/000002/05/06/2020",
      // surat: "S000002",
      // nomor: "000002",
      // tanggal: "2020-02-08", // MM/DD/YYYY
      perusahaan: "12345678912345 - PT SINAR MULYA SENTOSA",
      alamat_perusahaan: "Jalan Alamat Cileungsi Bogor",
      ppjk: "-",
      petugas: "198989504523538987 - Salman Isar",
      key: "2",
    },
  ]);
  const [surat, setSurat] = useState("");
  const [nomor, setNomor] = useState("");
  const [date, setDate] = useState("");
  const [perusahaan] = useState("");
  const [alamat_perusahaan] = useState("");
  const [ppjk] = useState("");
  const [petugas] = useState("");
  let [editValuePungutan, setEditValuePungutan] = useState(1000);
  const [form] = Form.useForm();

  const handleTarik = () => {
    let dokumen_asal = `${surat}/${nomor}/${date}`;
    for (let i = 0; i < db_dokumen_asal.length; i++) {
      if (db_dokumen_asal[i].dokumen_asal === dokumen_asal) {
        form.setFieldsValue({
          perusahaan: db_dokumen_asal[i].perusahaan,
          alamat_perusahaan: db_dokumen_asal[i].alamat_perusahaan,
          ppjk: db_dokumen_asal[i].ppjk,
          petugas: db_dokumen_asal[i].petugas,
        });
        message.success("Data di Temukan!");
        return false;
      }
      // STOP
    }
  };

  const handleSurat = (e) => {
    setSurat(e.target.value);
  };

  let history = useHistory();
  const handleNavigate = () => {
    history.push("/");
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleAkun = (val) => {
    setAkun(val);
  };

  const handleSelisih = (val) => {
    setSelisih(val);
  };

  const handleNilai = (e) => {
    setNilai(e.target.value);
  };

  const handleSubmitPungutan = () => {
    let ObjData = {
      key: data_pungutan.length + 1,
      akun: akun,
      selisih: selisih,
      nilai: parseInt(nilai),
    };

    const newData = [...data_pungutan, ObjData];
    console.log(newData);
    setData_pungutan(newData);
    setAkun("");
    setSelisih("");
    setNilai(0);
  };

  const handleName = (val) => {
    setName(val);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitKeterangan = () => {
    let ObjData = {
      key: data_keterangan.length + 1,
      name: name,
      value: value,
    };

    const newData = [...data_keterangan, ObjData];
    setData_keterangan(newData);
    setName("");
    setValue("");
  };

  const handleDate = (date, dateString) => {
    setDate(dateString);
  };

  const EditPungutan = (item) => {
    function saveEdit() {
      for (let i = 0; i < data_pungutan.length; i++) {
        if (data_pungutan[i].key == item.key) {
          console.log("masuk");
          data_pungutan[i].nilai = editValuePungutan;
        }
      }
      setKeyEditPungutan(0);
    }
    function klikEdit() {
      setKeyEditPungutan(item.key);
      setEditValuePungutan(item.nilai);
    }
    if (keyEditPungutan !== item.key) {
      return (
        <>
          <Button
            icon={<EditFilled />}
            onClick={() => klikEdit()}
            style={{ marginRight: "5px" }}
          ></Button>
          <Button type="Warning" icon={<DeleteFilled />}></Button>
        </>
      );
    } else {
      return (
        <>
          <Button onClick={() => saveEdit()} style={{ marginRight: "5px" }}>
            Save
          </Button>
          <Button onClick={() => setKeyEditPungutan(0)}>Cancel</Button>
        </>
      );
    }
  };

  const FormEditPungutan = (item) => {
    console.log(keyEditPungutan, "=====key======");
    if (keyEditPungutan !== item.key) {
      return item.nilai;
    } else {
      //   setEditValuePungutan(item.nilai);
      return (
        <Input
          onChange={(e) => setEditValuePungutan(e.target.value)}
          onPointerLeave={(e) => setEditValuePungutan(e.target.value)}
          defaultValue={editValuePungutan}
          value={editValuePungutan}
        />
      );
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Perbendaharaan">
            <Menu.Item key="1" onClick={handleNavigate}>
              Dashboard
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ margin: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Layout style={{ backgroundColor: "white" }}>
            <h1 style={{ fontWeight: "bold", fontSize: 24 }}>
              Perekaman Dokumen Piutang
            </h1>
            <Row>
              <Col span={24}>
                <Form
                  labelCol={{ span: 4 }}
                  form={form}
                  wrapperCol={{ span: 12 }}
                  labelAlign={"left"}
                  name="record-form"
                  size={"small"}
                  style={{ border: "1px solid #eaeaea" }}
                >
                  <Form.Item
                    name="kd_penerbit"
                    label="Kantor Penerbit"
                    wrapperCol={{ span: 12 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <Input style={{ borderLeft: "5px solid #eaeaea" }} />
                  </Form.Item>
                  <Form.Item
                    name="kt_monitor"
                    label="Kantor Monitor"
                    wrapperCol={{ span: 12 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <Input style={{ borderLeft: "5px solid #eaeaea" }} />
                  </Form.Item>
                  <Form.Item
                    name="dokumen"
                    label="Dokumen"
                    wrapperCol={{ span: 4 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
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
                  <Form.Item
                    name="tgl_jatuh_tmp"
                    label="Tanggal Jatuh Tempo"
                    wrapperCol={{ span: 4 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <DatePicker
                      onChange={handleDate}
                      placeholder=""
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="dokumen_asal"
                    label="Dokumen Asal"
                    wrapperCol={{ span: 12 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <Input.Group compact>
                      {/** SURAT */}
                      <Form.Item style={{ marginBottom: 0, width: "20%" }}>
                        <Input
                          style={{ borderLeft: "5px solid #eaeaea" }}
                          value={surat}
                          onChange={(e) => setSurat(e.target.value)}
                          placeholder="Surat"
                        />
                      </Form.Item>
                      <span style={{ marginRight: 8, marginLeft: 8 }}>/</span>
                      {/** NOMOR */}
                      <Form.Item style={{ marginBottom: 0, width: "20%" }}>
                        <Input
                          style={{ borderLeft: "5px solid #eaeaea" }}
                          value={nomor}
                          onChange={(e) => setNomor(e.target.value)}
                          placeholder="Nomor"
                        />
                      </Form.Item>
                      <span style={{ marginRight: 8, marginLeft: 8 }}>/</span>
                      {/** TANGGAL */}
                      <Form.Item style={{ marginBottom: 0, width: "20%" }}>
                        <DatePicker
                          style={{ width: "100%" }}
                          onChange={handleDate}
                          placeholder="Tanggal"
                          format={"DD/MM/YYYY"}
                        />
                      </Form.Item>
                      <Form.Item
                        style={{ marginLeft: 8, marginBottom: 0, width: "12%" }}
                      >
                        <Button
                          type="info"
                          style={{ width: "100%" }}
                          onClick={handleTarik}
                        >
                          Tarik
                        </Button>
                      </Form.Item>
                      <Form.Item
                        style={{ marginLeft: 8, marginBottom: 0, width: "12%" }}
                      >
                        <Button type="info" style={{ width: "100%" }}>
                          Lihat
                        </Button>
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>
                  <Form.Item
                    name="perusahaan"
                    label="Perusahaan"
                    wrapperCol={{ span: 8 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <Input style={{ borderLeft: "5px solid #eaeaea" }} />
                  </Form.Item>
                  <Form.Item
                    name="alamat_perusahaan"
                    label="Alamat Perusahaan"
                    wrapperCol={{ span: 12 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <Input style={{ borderLeft: "5px solid #eaeaea" }} />
                  </Form.Item>
                  <Form.Item
                    name="ppjk"
                    label="PPJK"
                    wrapperCol={{ span: 12 }}
                    style={{
                      marginBottom: 0,
                      padding: "1px 1px 1px 5px",
                      borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <Input style={{ borderLeft: "5px solid #eaeaea" }} />
                  </Form.Item>
                  <Form.Item
                    name="petugas"
                    label="Petugas"
                    wrapperCol={{ span: 12 }}
                    style={{ marginBottom: 0, padding: "1px 1px 1px 5px" }}
                  >
                    <Input style={{ borderLeft: "5px solid #eaeaea" }} />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <h1 style={{ fontWeight: "bold", fontSize: 24, marginTop: 14 }}>
              Pungutan
            </h1>
            <Row>
              <Col span={16}>
                <Row>
                  <Col span={6} style={{ display: "flex" }}>
                    <h4 style={{ marginRight: 10 }}>Akun :</h4>
                    <Select
                      value={akun.length === 0 ? "-" : akun}
                      style={{ width: "60%" }}
                      onChange={handleAkun}
                      size={"small"}
                    >
                      <Option value="Bea Masuk">Bea Masuk</Option>
                      <Option value="BM AD">BM AD</Option>
                      <Option value="BM PT">BM PT</Option>
                      <Option value="PPN">PPN</Option>
                      <Option value="PPH">PPH</Option>
                      <Option value="Denda">Denda</Option>
                    </Select>
                  </Col>
                  <Col span={6} style={{ display: "flex" }}>
                    <h4 style={{ marginRight: 10 }}>Selisih :</h4>
                    <Select
                      value={selisih.length === 0 ? "-" : selisih}
                      style={{ width: "60%" }}
                      onChange={handleSelisih}
                      size={"small"}
                    >
                      <Option value="lebih bayar">Lebih Bayar</Option>
                      <Option value="kurang bayar">Kurang Bayar</Option>
                    </Select>
                  </Col>
                  <Col span={6} style={{ display: "flex" }}>
                    <h4 style={{ marginRight: 10 }}>Nilai :</h4>
                    <Input
                      style={{ width: "60%", height: "24px" }}
                      value={nilai}
                      onChange={handleNilai}
                    />
                  </Col>
                  <Col span={6}>
                    <Button
                      type="info"
                      size="small"
                      style={{ width: "100%" }}
                      onClick={handleSubmitPungutan}
                    >
                      Tambah Akun
                    </Button>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={24}>
                    {/* <Table
                      dataSource={data_pungutan}
                      pagination={false}
                      showHeader={false}
                      columns={columns_pungutan}
                      size={"small"}
                      bordered
                      style={{ marginTop: 8 }}
                    /> */}
                    <List
                      size="small"
                      bordered
                      itemLayout="horizontal"
                      dataSource={data_pungutan}
                      renderItem={(item) => (
                        <List.Item
                          //   actions={[
                          //     <EditPungutan item={item} />,
                          //     <Button>Delete</Button>,
                          //   ]}
                          style={{
                            // border: "1px solid",
                            display: "flex",
                            justifyContent: "flex-start",
                            backgroundColor:
                              item.selisih === "lebih bayar" ? "green" : "#fff",
                          }}
                        >
                          <td
                            style={{
                              minWidth: "200px",
                              maxWidth: "550px",
                            }}
                          >
                            {item.akun}
                          </td>
                          <td
                            style={{
                              minWidth: "200px",
                              maxWidth: "550px",
                            }}
                          >
                            {FormEditPungutan(item)}
                          </td>
                          <td>{EditPungutan(item)}</td>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={6} offset={2}>
                <h4>Keterangan :</h4>
                <Badge status="success" text="Lebih Bayar" />
                <br />
                <Badge status="warning" text="Kurang Bayar" />
              </Col>
            </Row>
            <h1 style={{ fontWeight: "bold", fontSize: 24 }}>Keterangan</h1>
            <Row>
              <Col span={16}>
                <Row>
                  <Col span={6} style={{ display: "flex" }}>
                    <Select
                      value={name.length === 0 ? "-" : name}
                      style={{ width: "90%" }}
                      onChange={handleName}
                      size={"small"}
                    >
                      <Option value="Uraian Kesalahan">Uraian Kesalahan</Option>
                      <Option value="Alasan">Alasan</Option>
                      <Option value="Pasal">Pasal</Option>
                    </Select>
                  </Col>
                  <Col span={12} style={{ display: "flex" }}>
                    <Input
                      style={{ width: "92%", height: "24px" }}
                      value={value}
                      onChange={handleValue}
                    />
                  </Col>
                  <Col span={6}>
                    <Button
                      type="info"
                      size="small"
                      style={{ width: "100%" }}
                      onClick={handleSubmitKeterangan}
                    >
                      Tambah Keterangan
                    </Button>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={24}>
                    <Table
                      dataSource={data_keterangan}
                      pagination={false}
                      showHeader={false}
                      columns={columns_keterangan}
                      size={"small"}
                      bordered
                      style={{ marginTop: 8 }}
                    />
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
