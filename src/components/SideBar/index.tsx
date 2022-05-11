import { Menu } from 'antd';
import './index.scss';
import {
  AliyunOutlined,
  AppstoreAddOutlined,
  BgColorsOutlined,
  BuildOutlined,
  CalculatorOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
  CentosIcon,
  FigmaIcon,
  JenkinsIcon,
  ListIcon,
  ModaoIcon,
  MozillaIcon,
  NginxIcon,
  NodejsIcon,
  SASSIcon,
  SSLIcon,
  TencentCloudIcon,
  TypeScriptIcon,
  VsCodeIcon,
  VueIcon,
} from '../../assets/icons';

function getItem(
  label?: any,
  key?: any,
  icon?: any,
  children?: any,
  type?: any
) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('组件列表', 'components', <BuildOutlined />, [
    getItem('分割线 Divider', 'divider'),
    getItem('按钮 Button', 'button'),
  ]),
  getItem('算法实现', 'algorithms', <CalculatorOutlined />, [
    getItem('Lodash', 'lodash', null, [getItem('_.isNil', 'isNil')]),
  ]),
  getItem('其它内容', 'others', <AppstoreAddOutlined />, [
    getItem('腾讯云（待完成）', 'tengxunyun', <TencentCloudIcon />),
    getItem(
      '阿里云（待完成）',
      'aliyun',
      <AliyunOutlined style={{ color: '#ED732E' }} />
    ),
    getItem('CodeSandbox（待完成）', 'codesandbox', <CodeSandboxOutlined />),
    getItem('PS Online（待完成）', 'ps_onine', <BgColorsOutlined />),
    getItem('MDN（待完成）', 'mdn', <MozillaIcon />),
    getItem('墨刀（待完成）', 'modao', <ModaoIcon />),
    getItem('Figma（待完成）', 'figma', <FigmaIcon />),
    getItem('Jenkins（待完成）', 'jenkins', <JenkinsIcon />),
    getItem('CentOS（待完成）', 'centos', <CentosIcon />),
    getItem('Nginx（待完成）', 'nginx', <NginxIcon />),
    getItem('Vue（待完成）', 'vue', <VueIcon />),
    getItem('Nodejs（待完成）', 'nodejs', <NodejsIcon />),
    getItem('SSL（待完成）', 'ssl', <SSLIcon />),
    getItem('TypeScript（待完成）', 'typescript', <TypeScriptIcon />),
    getItem('SASS（待完成）', 'sass', <SASSIcon />),
    getItem('滴答清单（待完成）', 'didalist', <ListIcon />),
    getItem('VSCode（待完成）', 'vscode', <VsCodeIcon />),
  ]),
];

const SideBar = () => {
  const navigate = useNavigate();

  const onClick = (e: any) => {
    const path = e.keyPath
      .reverse()
      .map((i: string) => `/${i}`)
      .join('');

    navigate(path);
  };
  return (
    <div className="sidebar">
      <Menu
        className="menu"
        onClick={onClick}
        defaultSelectedKeys={['components']}
        defaultOpenKeys={['components']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default SideBar;
