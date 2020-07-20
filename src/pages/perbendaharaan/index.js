import {
    React,
    Layout,
    Menu,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from './libraries/dependencies';
import { BrowseDokumenPiutang } from './dashboard';

const { Header, Sider, Content } = Layout;

class Perbendaharaan extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log(this.props)
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Perbendaharaan">
                            <Menu.Item key="1"><Link to="/Browse" />Dashboard</Menu.Item>
                        </SubMenu>
                    </Menu> */}
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
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
                        <BrowseDokumenPiutang />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Perbendaharaan;