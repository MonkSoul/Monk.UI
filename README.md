# Monk.UI
基于Jquery开发，让你的表单亮起来！

## 作者信息

- 原创作者：`百小僧`
- 开源协议：`MIT License`
- 开发时间：`2016年10月13日`
- 项目版本：`0.0.5`
- 项目名称：`Monk.UI`
- 版权所有：[百签软件（中山）有限公司](http://www.baisoft.org)
- 联系方式：QQ群：123049073，作者QQ：8020292
- 开发理念：`一切从简，只为了更懒`

## 效果图

> 如果显示不了效果图，可以点击 [http://www.baisoft.org/public/monkui/](http://www.baisoft.org/public/monkui/) 体验

![Monk.UI效果图](http://www.baisoft.org/public/yulan.gif)

## 兼容信息

兼容IE9+（包涵IE9），Edge，Chrome，Firefox，Opera,Safari，和其他主流Webkit内核浏览器。

## 开始使用

```html
<!--核心css-->
<link href="monk.ui.min.css" rel="stylesheet" />
<!--本UI依赖jquery，需jquery 1.8+ 版本-->
<script src="libs/jquery-3.1.1/jquery-3.1.1.min.js"></script>
<!--核心js-->
<script src="monk.ui.min.js"></script>
```

## 基础组件

### 普通文本框
- `min` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input min" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `middle` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input middle" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `normal` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input normal" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `large` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input large" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `xlarge` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input xlarge" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `必填` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-lock"></span>
        <input type="text" class="monk-form-input normal" placeholder="请输入..." />
        <span class="monk-iconfont icon-monk-required"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-lock"></span>
        <input type="text" class="monk-form-input normal" readonly="readonly" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-lock"></span>
        <input type="text" class="monk-form-input normal" disabled="disabled" placeholder="请输入..." />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 多行文本框
- `min` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea min" placeholder="请输入..."></textarea>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `middle` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea middle" placeholder="请输入..."></textarea>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `normal` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea normal" placeholder="请输入..."></textarea>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `large` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea large" placeholder="请输入..."></textarea>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `xlarge` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea xlarge" placeholder="请输入..."></textarea>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `必填` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea normal" placeholder="请输入..."></textarea>
        <span class="monk-iconfont icon-monk-required textarea-icon"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea normal" placeholder="请输入..." readonly="readonly"></textarea>
        <span class="monk-iconfont icon-monk-required textarea-icon"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 多行文本框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input textarea-icon"></span>
        <textarea class="monk-form-textarea normal" placeholder="请输入..." disabled="disabled"></textarea>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 复选框
- `正常` 复选框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-checkbox-list">
        <input type="checkbox" name="like" class="monk-checkbox" value="0" text="篮球" />
        <input type="checkbox" name="like" class="monk-checkbox" value="1" text="足球" />
        <input type="checkbox" name="like" class="monk-checkbox" value="2" text="百小僧" checked="checked" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 复选框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-checkbox-list">
        <input type="checkbox" name="like" class="monk-checkbox" value="0" text="篮球" readonly="readonly" />
        <input type="checkbox" name="like" class="monk-checkbox" value="2" text="百小僧" checked="checked" readonly="readonly" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 复选框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-checkbox-list">
        <input type="checkbox" name="like" class="monk-checkbox" value="0" text="篮球" disabled="disabled" />
        <input type="checkbox" name="like" class="monk-checkbox" value="2" text="百小僧" checked="checked" disabled="disabled" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 滑块
- `正常` 滑块
```html
<!--未选中-->
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-switch-list">
        <input type="checkbox" name="like" class="monk-switch" value="0" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
<!--选中-->
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-switch-list">
        <input type="checkbox" name="like" class="monk-switch" value="0" checked="checked" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 滑块
```html
<!--未选中-->
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-switch-list">
        <input type="checkbox" name="like" class="monk-switch" value="0" readonly="readonly" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
<!--选中-->
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-switch-list">
        <input type="checkbox" name="like" class="monk-switch" value="0" readonly="readonly" checked="checked" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 滑块
```html
<!--未选中-->
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-switch-list">
        <input type="checkbox" name="like" class="monk-switch" value="0" disabled="disabled" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
<!--选中-->
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-switch-list">
        <input type="checkbox" name="like" class="monk-switch" value="0" disabled="disabled" checked="checked" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 单选框
- `正常` 单选框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-radio-list">
        <input type="radio" class="monk-radio" name="sex" value="0" text="男性" />
        <input type="radio" class="monk-radio" name="sex" value="1" text="女性" checked="checked" />
        <input type="radio" class="monk-radio" name="sex" value="2" text="人妖" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 单选框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-radio-list">
        <input type="radio" class="monk-radio" name="sex1" value="0" text="男性" readonly="readonly" />
        <input type="radio" class="monk-radio" name="sex1" value="1" text="女性" checked="checked" />
        <input type="radio" class="monk-radio" name="sex1" value="2" text="人妖" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 单选框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-radio-list">
        <input type="radio" class="monk-radio" name="sex2" value="0" text="男性" disabled="disabled" />
        <input type="radio" class="monk-radio" name="sex2" value="1" text="女性" checked="checked" disabled="disabled" />
        <input type="radio" class="monk-radio" name="sex2" value="2" text="人妖" />
        <input type="radio" class="monk-radio" name="sex2" value="3" text="保密" />
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 下拉选择
- `正常` 下拉选择
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-select-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input middle" placeholder="请输入或选择..." />
        <span class="monk-iconfont monk-select-arrow icon-monk-arrowdown border-left"></span>
    </div>
    <div class="monk-form-select monk-none">
        <select class="monk-select">
            <option value="">请选择...</option>
            <option value="0">列表项目一</option>
            <option value="1" selected="selected">列表项目二</option>
            <option value="2">列表项目三</option>
            <option value="3">列表项目四</option>
            <option value="4">列表项目五</option>
            <option value="5">列表项目六</option>
            <optgroup label="这里是分类栏目"></optgroup>
            <option value="6">列表项目七</option>
            <option value="7">列表项目八</option>
            <option value="8">列表项目九</option>
            <option value="9">列表项目十</option>
        </select>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 下拉选择
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-select-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input middle" placeholder="请输入或选择..." readonly="readonly" />
        <span class="monk-iconfont monk-select-arrow icon-monk-arrowdown border-left"></span>
    </div>
    <div class="monk-form-select monk-none">
        <select class="monk-select">
            <option value="">请选择...</option>
            <option value="0">列表项目一</option>
            <option value="1">列表项目二</option>
            <option value="2">列表项目三</option>
            <option value="3" selected="selected">列表项目四</option>
            <option value="4">列表项目五</option>
            <option value="5">列表项目六</option>
            <optgroup label="这里是分类栏目"></optgroup>
            <option value="6">列表项目七</option>
            <option value="7">列表项目八</option>
            <option value="8">列表项目九</option>
            <option value="9">列表项目十</option>
        </select>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 下拉选择
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-select-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input middle" placeholder="请输入或选择..." disabled="disabled" />
        <span class="monk-iconfont monk-select-arrow icon-monk-arrowdown border-left"></span>
    </div>
    <div class="monk-form-select monk-none">
        <select class="monk-select">
            <option value="">请选择...</option>
            <option value="0">列表项目一</option>
            <option value="1">列表项目二</option>
            <option value="2">列表项目三</option>
            <option value="3">列表项目四</option>
            <option value="4">列表项目五</option>
            <option value="5">列表项目六</option>
            <optgroup label="这里是分类栏目"></optgroup>
            <option value="6" selected="selected">列表项目七</option>
            <option value="7">列表项目八</option>
            <option value="8">列表项目九</option>
            <option value="9">列表项目十</option>
        </select>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 数字输入框
- `正常` 数字输入框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-number"></span>
        <input type="number" class="monk-form-input middle" onkeyup="this.value=this.value.replace(/!^[0-9]*$/g,'')" onafterpaste="this.value=this.value.replace(/!^[0-9]*$/g,'')" placeholder="请输入..." />
        <span class="monk-iconfont icon-monk-required"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `只读` 数字输入框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-number"></span>
        <input type="number" class="monk-form-input middle" onkeyup="this.value=this.value.replace(/!^[0-9]*$/g,'')" onafterpaste="this.value=this.value.replace(/!^[0-9]*$/g,'')" readonly="readonly" placeholder="请输入..." />
        <span class="monk-iconfont icon-monk-required"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 数字输入框
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-number"></span>
        <input type="number" class="monk-form-input middle" onkeyup="this.value=this.value.replace(/!^[0-9]*$/g,'')" onafterpaste="this.value=this.value.replace(/!^[0-9]*$/g,'')" disabled="disabled" placeholder="请输入..." />
        <span class="monk-iconfont icon-monk-required"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 时间选择
- `正常` 时间选择
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-time-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input middle" placeholder="请选择..." value="01:02:03" readonly="readonly" />
        <span class="monk-iconfont border-left icon-monk-time"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
- `禁用` 时间选择
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-time-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input middle" placeholder="请选择..." value="01:02:03" disabled="disabled" />
        <span class="monk-iconfont border-left icon-monk-time"></span>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 文件选择
- `正常` 文件选择
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap">
        <span class="monk-iconfont border-right icon-monk-input"></span>
        <input type="text" class="monk-form-input normal" placeholder="请选择..." />
        <span class="monk-iconfont border-left icon-monk-file"></span>
    </div>
    <div class="monk-form-wrap monk-form-image-wrap">
        <input type="file" class="monk-file" />
        <button class="monk-input-button turquoise">选择文件</button>
    </div>
    <div class="monk-form-tip">写点什么描述一下</div>
</div>
```
### 显示文本
- `单行` 显示文本
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-detail-wrap monk-full">
        百签软件，源于百签。
    </div>
</div>
```
- `多行` 显示文本
```html
<div class="monk-form-item">
    <label for="" class="monk-form-label monk-color-peterriver">表单标题</label>
    <div class="monk-form-wrap monk-form-detail-wrap monk-full">
        百签软件（中山）有限公司 是中国一家高科技软件公司，总部位于广东省中山市西区。百签软件（中山）有限公司 主要提供全平台应用程序开发，其中包括移动应用程序（Android，IOS，Windows Phone），桌面应用程序（Windows，Linux，Mac），以及浏览器端应用程序（桌面端，移动端）等开发。
    </div>
</div>
```
### 按钮
- 提交按钮
```html
<input type="submit" class="monk-input-button turquoise monk-form-submit" value="保存提交" />
```
- 普通按钮
```html
<button class="monk-input-button emerland">普通按钮</button>
```
- 普通按钮2
```html
<input type="button" class="monk-input-button peterRiver" value="普通按钮" />
```
- 重置按钮
```html
<input type="reset" class="monk-input-button amethyst" value="重置按钮" />
```
- 灰色按钮
```html
<input type="button" class="monk-input-button clouds" value="灰色按钮" />
```
- 链接按钮
```html
<a class="monk-input-button turquoise">链接按钮</a>
```
- 图标按钮
```html
<a class="monk-input-button turquoise"><span class="monk-iconfont icon-monk-time"></span>图标按钮</a>
```
### 第三方插件
#### rainbow.js 代码高亮
- 依赖库
```html
<!--样式-->
<link href="libs/rainbow-v2.1.2/themes/css/github.css" rel="stylesheet" />
<!--脚本-->
<script src="libs/rainbow-v2.1.2/rainbow-custom.min.js"></script>
```
- html高亮
```html
<pre><code data-language="html"><p>百签软件，源于百签。</p></code></pre>
```
- css高亮
```html
<pre><code data-language="css">* { box-sizing: border-box; -moz-box-sizing: border-box; }</code></pre>
```
- javascript高亮
```html
<pre><code data-language="javascript">exports.fileInit = function () {
    $(".monk-file").on({
        change: function () {
            var value = $(this).val();
            var input = $(this).parent(".monk-form-image-wrap").prev(".monk-form-wrap").children(".monk-form-input");
            input.val(value);
        }
    });
};</code></pre>
```
- php高亮
```html
<pre><code data-language="php">namespace app\index\controller;
class Index
{
    public function index()
    {
        return 'index';
    }
}</code></pre>
```
- c#高亮
```html
<pre><code data-language="csharp">using Microsoft.Owin;
using Owin;
[assembly: OwinStartup(typeof(Monk.App_Start.Startup))]
namespace Monk.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}</code></pre>
```
- java高亮
```html
<pre><code data-language="java">public static void insertionSort(int[] data) {
    for (int index = 1; index < data.length; index++) {
        int key = data[index];
        int position = index;
        // shift larger values to the right
        while (position > 0 && data[position - 1] > key) {
            data[position] = data[position - 1];
            position--;
        }
        data[position] = key;
    }
}</code></pre>
```
- sql高亮
```html
<pre><code data-language="sql">select * from web where site='http://www.baisoft.org/'</code></pre>
```

### 更多功能，整理开发中。。。。