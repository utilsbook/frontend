const code = {
  code: `
  import * as React from 'react';
  import classNames from 'classnames';
  import { ConfigContext } from '../config-provider';
  
  export interface DividerProps {
    prefixCls?: string;
    type?: 'horizontal' | 'vertical';
    orientation?: 'left' | 'right' | 'center';
    orientationMargin?: string | number;
    className?: string;
    children?: React.ReactNode;
    dashed?: boolean;
    style?: React.CSSProperties;
    plain?: boolean;
  }
  
  const Divider: React.FC<DividerProps> = props => {
    const { getPrefixCls, direction } = React.useContext(ConfigContext);
  
    const {
      prefixCls: customizePrefixCls,
      type = 'horizontal',
      orientation = 'center',
      orientationMargin,
      className,
      children,
      dashed,
      plain,
      ...restProps
    } = props;
    const prefixCls = getPrefixCls('divider', customizePrefixCls);
    const orientationPrefix = orientation.length > 0 ? \`-\${orientation}\` : orientation;
    const hasChildren = !!children;
    const hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
    const hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
    const classString = classNames(
      prefixCls,
      \`\${prefixCls}-\${type}\`,
      {
        [\`\${prefixCls}-with-text\`]: hasChildren,
        [\`\${prefixCls}-with-text\${orientationPrefix}\`]: hasChildren,
        [\`\${prefixCls}-dashed\`]: !!dashed,
        [\`\${prefixCls}-plain\`]: !!plain,
        [\`\${prefixCls}-rtl\`]: direction === 'rtl',
        [\`\${prefixCls}-no-default-orientation-margin-left\`]: hasCustomMarginLeft,
        [\`\${prefixCls}-no-default-orientation-margin-right\`]: hasCustomMarginRight,
      },
      className,
    );
  
    const innerStyle = {
      ...(hasCustomMarginLeft && { marginLeft: orientationMargin }),
      ...(hasCustomMarginRight && { marginRight: orientationMargin }),
    };
  
    return (
      <div className={classString} {...restProps} role="separator">
        {children && (
          <span className={\`\${prefixCls}-inner-text\`} style={innerStyle}>
            {children}
          </span>
        )}
      </div>
    );
  };
  
  export default Divider;
  
  `,
  style: `
  @import '../../style/themes/index';
  @import '../../style/mixins/index';
  
  @divider-prefix-cls: ~'@{ant-prefix}-divider';
  
  .@{divider-prefix-cls} {
    .reset-component();
  
    border-top: @border-width-base solid @divider-color;
  
    &-vertical {
      position: relative;
      top: -0.06em;
      display: inline-block;
      height: 0.9em;
      margin: 0 @divider-vertical-gutter;
      vertical-align: middle;
      border-top: 0;
      border-left: @border-width-base solid @divider-color;
    }
  
    &-horizontal {
      display: flex;
      clear: both;
      width: 100%;
      min-width: 100%; // Fix https://github.com/ant-design/ant-design/issues/10914
      margin: 24px 0;
    }
  
    &-horizontal&-with-text {
      display: flex;
      margin: 16px 0;
      color: @heading-color;
      font-weight: 500;
      font-size: @font-size-lg;
      white-space: nowrap;
      text-align: center;
      border-top: 0;
      border-top-color: @divider-color;
  
      &::before,
      &::after {
        position: relative;
        top: 50%;
        width: 50%;
        border-top: @border-width-base solid transparent;
        // Chrome not accept \`inherit\` in \`border-top\`
        border-top-color: inherit;
        border-bottom: 0;
        transform: translateY(50%);
        content: '';
      }
    }
  
    &-horizontal&-with-text-left {
      &::before {
        top: 50%;
        width: @divider-orientation-margin;
      }
  
      &::after {
        top: 50%;
        width: 100% - @divider-orientation-margin;
      }
    }
  
    &-horizontal&-with-text-right {
      &::before {
        top: 50%;
        width: 100% - @divider-orientation-margin;
      }
  
      &::after {
        top: 50%;
        width: @divider-orientation-margin;
      }
    }
  
    &-inner-text {
      display: inline-block;
      padding: 0 @divider-text-padding;
    }
  
    &-dashed {
      background: none;
      border-color: @divider-color;
      border-style: dashed;
      border-width: @border-width-base 0 0;
    }
  
    &-horizontal&-with-text&-dashed {
      &::before,
      &::after {
        border-style: dashed none none;
      }
    }
  
    &-vertical&-dashed {
      border-width: 0 0 0 @border-width-base;
    }
  
    &-plain&-with-text {
      color: @text-color;
      font-weight: normal;
      font-size: @font-size-base;
    }
  
    &-horizontal&-with-text-left&-no-default-orientation-margin-left {
      &::before {
        width: 0;
      }
  
      &::after {
        width: 100%;
      }
  
      .ant-divider-inner-text {
        padding-left: 0;
      }
    }
  
    &-horizontal&-with-text-right&-no-default-orientation-margin-right {
      &::before {
        width: 100%;
      }
  
      &::after {
        width: 0;
      }
  
      .ant-divider-inner-text {
        padding-right: 0;
      }
    }
  }
  
  @import './rtl';
  
  `,
};

export default code;
