import { Menu } from 'antd';
import './index.scss';
import { BuildOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
    getItem('按钮 Button', 'button'),
    getItem('锚点 Anchor', 'anchor'),
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
    <Menu
      className="sidebar"
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default SideBar;
