import { React, Layout, Row, Col } from "../../libraries/dependencies";
import Pungutan from "./Pungutan";
import Detail from "./Detail";
import Timeline from "./Timeline";
import History from "./History";
import MutasiDokumen from "./MutasiDokumen";
import Header from "./Header";
import Menu from "../../menu/index";

export default function BrowseDokumenPiutang() {
  return (
    <Layout>
      <Menu />
      <Row justify="center">
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ marginTop: "10px" }}>
          <Timeline />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Col span={11} style={{ marginRight: "5px" }}>
          <Detail />
        </Col>
        <Col span={11}>
          <Pungutan />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Col span={11}>
          <MutasiDokumen />
        </Col>
        <Col span={11}>
          <History />
        </Col>
      </Row>
    </Layout>
  );
}
