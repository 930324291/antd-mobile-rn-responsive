## 我修改了什么

### 组件功能增强

- `List` 组件添加 `noBorder` 属性控制上下边框是否显示
- `List.Item` 组件添加 `last` 属性控制下边框是否显示
- `List.Item `组件添加 `thumbStyle` 属性控制 thumb 的尺寸 @2.1.1-sishu.0
- 将图片资源作为一个组件导出：`import {Image} from '@sishu/antd-mobile-rn'`
- `Grid` 组件添加 `iconStyle` 用于自定义图标尺寸，添加 `textStyle` 用于自定义文字尺寸

### 精简体积

- 删除es文件夹
- 删除lib文件下的所有demo文件夹以及所有ts文件
