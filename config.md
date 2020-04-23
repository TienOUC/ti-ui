## 把原src文件夹改为examples
## 修改入口文件，根目录下新建vue.config.js
```js
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack 配置，使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改其他选项
        return options
      })
  }
}
```
## 根目录下新建 package文件夹，把已完成组件（.vue文件）和 fonts字体文件拷贝进来
## packages下新建Index.js文件
```js
// 整个包的入口
// 定义 install 方法，接受 Vue 作为参数，若果使用 use 注册插件，则所有的组件都将被注册
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]
const install = function (Vue) {
  // 注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
// 判断是否是直接引入文件，若是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}

```

## packages.josn文件加入命令 
``` "lib": "vue-cli-service build --target lib packages/index.js" ```
## 执行 yarn lib, 根目录下生成dist文件夹，里面有打包好的js文件

