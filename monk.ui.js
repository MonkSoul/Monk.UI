/*!
 * monk.ui.js
 * version: 0.3.5
 * author: 百小僧（QQ：8020292）
 * site：http://www.baisoft.org
 * QQ群：123049073
 * https://github.com/MonkSoul/Monk.UI/
 */
; !function (factory) {
    "use strict";
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define(['exports'], factory);
    } else {
        factory(window['monk'] = {});
    }
}(function (HExports) {
    var exports = typeof HExports !== 'undefined' ? HExports : {};
    exports.v = "0.3.5";
    exports.nextAll = function (el) {
        var eles = [];

        function nextCore(el) {
            var next = el.nextElementSibling;
            if (next) {
                eles.push(next);
                arguments.callee(next);
            }
        }
        nextCore(el);
        return eles;
    };
    // 初始化文本框
    // 设置必填图标位置
    exports.setRequireIconOffset = function (parent, init) {
        var that = this;
        var requireIcon = parent.querySelector(".monk-iconfont.icon-monk-required");
        var clearBtn = parent.querySelector(".monk-clear-input");
        if (requireIcon && clearBtn) {
            if (init) {
                var nexts = that.nextAll(requireIcon);
                var totalWidth = 0;
                Array.prototype.forEach.call(nexts, function (next, i) {
                    if (next) {
                        totalWidth += next.offsetWidth;
                    }
                });
                requireIcon.style.right = -totalWidth + "px";
            } else {
                requireIcon.style.right = "0px";
            }
        }
    }
    ;
    exports.inputInit = function () {
        var inputs = document.querySelectorAll(".monk-form-input,.monk-form-textarea");
        // 初始化文本框并绑定事件
        Array.prototype.forEach.call(inputs, function (input, i) {
            // 初始化关闭按钮和必填位置问题
            var parent = input.parentNode;
            exports.setRequireIconOffset(parent, true);
            // 绑定focus事件
            input.addEventListener("focus", function () {
                var parent = this.parentNode;
                parent.classList.add("focus");
            });
            ;// 绑定blur事件
            input.addEventListener("blur", function () {
                var parent = this.parentNode;
                if (!parent.classList.contains("monk-form-time-wrap")) {
                    parent.classList.remove("focus");
                }
            });
            ;// 绑定keyup事件
            input.addEventListener("keyup", function () {
                var parent = this.parentNode;
                var value = this.value.trim();
                var clearBtn = parent.querySelector(".monk-clear-input");
                if (clearBtn) {
                    if (value != "") {
                        clearBtn.style.cssText = "visibility:visible;";
                        exports.setRequireIconOffset(parent);
                    } else {
                        clearBtn.style.cssText = "visibility:hidden;";
                        exports.setRequireIconOffset(parent, true);
                    }
                }
            });
            // 绑定change事件
            input.addEventListener("change", function () {
                var parent = this.parentNode;
                var value = this.value.trim();
                var clearBtn = parent.querySelector(".monk-clear-input");
                if (clearBtn) {
                    if (value == "") {
                        clearBtn.style.cssText = "visibility:hidden;";
                        exports.setRequireIconOffset(parent, true);
                    }
                }
            });
            input.parentElement.addEventListener("click", function () {
                this.querySelector(".monk-form-input,.monk-form-textarea").focus();
            });
            ; var clearBtn = input.parentNode.querySelector(".monk-clear-input");
            if (clearBtn) {
                var value = input.value;
                if (value != "") {
                    clearBtn.style.cssText = "visibility:visible;";
                    exports.setRequireIconOffset(parent);
                } else {
                    clearBtn.style.cssText = "visibility:hidden;";
                }
                // 绑定关闭按钮
                clearBtn.addEventListener("click", function () {
                    var parent = this.parentNode;
                    var input = parent.querySelector(".monk-form-input,.monk-form-textarea");
                    input.value = "";
                    exports.setRequireIconOffset(parent, true);
                    this.style.cssText = "visibility:hidden;";
                });
                ;
            }
            // 自适应
            input.style.width = "";
            var areaWidth = input.parentNode.parentNode.offsetWidth;
            var parentWidth = input.parentNode.offsetWidth;
            if (parentWidth >= areaWidth) {
                var width = 0;
                Array.prototype.filter.call(input.parentNode.children, function (child) {
                    if (child !== input) {
                        width += child.offsetWidth;
                    }
                });
                input.style.width = areaWidth - width - 2 + "px";
            }
        });
    }();
    // 生成checkbox，radio，switch
    exports.createCheckboxRadio = function (arr) {
        if (arr.length > 0) {
            // 获取类型
            var type = arr[0];
            // 移除
            arr.splice(0, 1);
            var all = document.querySelectorAll(".monk-form-" + type + "-list");
            // 初始化HTML并绑定事件
            Array.prototype.forEach.call(all, function (list, i) {
                var html = "";
                // 获取所有的选项
                var items = list.querySelectorAll(".monk-" + type);
                Array.prototype.forEach.call(items, function (item, i) {
                    var name = item.getAttribute("name");
                    var value = item.value;
                    var text = item.getAttribute("text");
                    var checked = item.getAttribute("checked");
                    var readonly = item.getAttribute("readonly");
                    var disabled = item.getAttribute("disabled");
                    var valueHtml = value ? 'data-value="' + value + '"' : 'data-value=""';
                    var nameHtml = name ? 'data-name="' + name + '" ' : '';
                    var textHtml = text ? text : "value";
                    var checkedHtml = checked ? 'checked="checked"' : '';
                    var readonlyHtml = readonly ? 'readonly="readonly"' : '';
                    var disabledHtml = disabled ? 'disabled="disabled"' : '';
                    html += '<div class="monk-form-wrap monk-form-' + type + '-wrap" ' + nameHtml + ' ' + checkedHtml + ' ' + readonlyHtml + ' ' + disabledHtml + ' ' + valueHtml + '>';
                    if (type == "checkbox" || type == "switch") {
                        html += '<span class="monk-' + type + '-text">' + textHtml + '</span>';
                        html += '<span class="monk-iconfont border-left icon-monk-dagou"></span>';
                    } else if (type == "radio") {
                        html += '<span class="monk-iconfont icon-monk-radio"></span>';
                        html += '<span class="monk-radio-text">' + textHtml + '</span>';
                    }
                    html += '</div>\r\n';
                    // 设置只读
                    item.addEventListener("click", function () {
                        var readonly = this.getAttribute("readonly");
                        if (readonly) {
                            return false;
                        }
                    });
                    ;// 绑定改变事件
                    item.addEventListener("change", function () {
                        var name = this.getAttribute("name");
                        var value = this.value;
                        var parent = this.parentNode;
                        var wrap = parent.querySelector(".monk-form-" + type + "-wrap[data-name='" + name + "'][data-value='" + value + "']");
                        if (this.checked == true) {
                            if (type == "radio") {
                                var lastWrap = parent.querySelector(".monk-form-radio-wrap[checked='checked']");
                                if (lastWrap !== wrap) {
                                    lastWrap.removeAttribute("checked");
                                    wrap.setAttribute("checked", "checked");
                                }
                            } else {
                                wrap.setAttribute("checked", "checked");
                            }
                        } else {
                            if (type != "radio") {
                                wrap.removeAttribute("checked");
                            }
                        }
                    });
                    ;
                });
                // 生成HTML代码
                list.insertAdjacentHTML("afterbegin", html);
                // 获取所有的wrap
                var wraps = list.querySelectorAll(".monk-form-" + type + "-wrap");
                Array.prototype.forEach.call(wraps, function (wrap, i) {
                    // 绑定点击事件
                    wrap.addEventListener("click", function () {
                        var checked = this.getAttribute("checked");
                        var readonly = this.getAttribute("readonly");
                        var disabled = this.getAttribute("disabled");
                        var name = this.getAttribute("data-name");
                        var value = this.getAttribute("data-value");
                        if (readonly != "readonly" && disabled != "disabled") {
                            var parent = this.parentNode;
                            var box = parent.querySelector(".monk-" + type + "[name='" + name + "'][value='" + value + "']");
                            if (type == "radio") {
                                var lastWrap = parent.querySelector(".monk-form-" + type + "-wrap[checked='checked']");
                                if (lastWrap !== this) {
                                    lastWrap.removeAttribute("checked");
                                }
                                this.setAttribute("checked", "checked");
                                box.checked = true;
                            } else {
                                if (checked == "checked") {
                                    this.removeAttribute("checked");
                                    box.checked = false;
                                } else {
                                    this.setAttribute("checked", "checked");
                                    box.checked = true;
                                }
                            }
                        }
                    });
                    ;
                });
            });
            arguments.callee(arr);
        }
    }(["checkbox", "switch", "radio"]);
    // 初始化下拉
    exports.selectInit = function () {
        var all = document.querySelectorAll(".monk-form-select");
        // 初始化HTML并绑定事件
        Array.prototype.forEach.call(all, function (list, i) {
            // 设置宽度
            var selectWrap = list.parentNode.querySelector(".monk-form-select-wrap");
            list.style.width = selectWrap.offsetWidth + "px";
            var html = "";
            // 获取所有的选项
            var items = list.querySelectorAll(".monk-select *");
            Array.prototype.forEach.call(items, function (item, i) {
                if (item.tagName.toLowerCase() == "option") {
                    var text = item.textContent;
                    var value = item.getAttribute("value");
                    html += '<div class="monk-form-option" data-value="' + value + '" data-text="' + text + '">' + text + '</div>';
                } else if (item.tagName.toLowerCase() == "optgroup") {
                    var label = item.getAttribute("label");
                    html += '<div class="monk-form-optgroup" data-value="' + value + '">' + label + '</div>';
                }
            });
            // 生成HTML代码
            list.insertAdjacentHTML("afterbegin", html);
            // 设置默认选中
            var select = list.querySelector(".monk-select");
            var option = select.querySelectorAll("option")[select.selectedIndex];
            var selectValue = option.value;
            var selectText = option.textContent;
            list.querySelector(".monk-form-option[data-value='" + selectValue + "']").setAttribute("selected", "selected");
            list.parentNode.querySelector(".monk-form-select-wrap .monk-form-input").setAttribute("value", selectText);
            // 绑定事件
            var options = list.querySelectorAll(".monk-form-option");
            Array.prototype.forEach.call(options, function (option, i) {
                option.addEventListener("mousedown", function () {
                    var value = this.getAttribute("data-value");
                    var text = this.textContent;
                    var parent = this.parentNode;
                    var scrollTop = this.offsetTop;
                    var select = parent.querySelector(".monk-select");
                    var input = parent.parentNode.querySelector(".monk-form-input");
                    var readonly = input.getAttribute("readonly");
                    if (!readonly) {
                        if (value != "") {
                            var lastWrap = this.parentNode.querySelector(".monk-form-option[selected='selected']");
                            if (lastWrap !== this && lastWrap) {
                                lastWrap.removeAttribute("selected");
                            }
                            this.setAttribute("selected", "selected");
                            input.value = text;
                            parent.scrollTop = scrollTop;
                            select.value = value;
                        }
                    }
                });
                ;
            });
        });
        function searchText(that) {
            var value = that.value;
            var parent = that.parentNode;
            var select = parent.parentNode.querySelector(".monk-form-select");
            var option = select.querySelector(".monk-form-option[data-text*='" + value + "']");
            if (option) {
                select.scrollTop = option.offsetTop;
            }
        }
        // 输入框绑定事件
        var inputs = document.querySelectorAll(".monk-form-select-wrap .monk-form-input");
        Array.prototype.forEach.call(inputs, function (input, i) {
            // 绑定焦点事件
            input.addEventListener("focus", function () {
                var parent = this.parentNode;
                var selectbox = parent.parentNode.querySelector(".monk-form-select");
                selectbox.classList.remove("monk-none");
                searchText(this);
            });
            ;// 失去焦点
            input.addEventListener("blur", function () {
                var parent = this.parentNode;
                var selectbox = parent.parentNode.querySelector(".monk-form-select");
                selectbox.classList.add("monk-none");
            });
            ;// 搜索
            input.addEventListener("keyup", function () {
                searchText(this);
            });
            ;
        });
        // 下拉图标绑定事件
        var selectIcons = document.querySelectorAll(".monk-select-arrow");
        Array.prototype.forEach.call(selectIcons, function (icon, i) {
            icon.addEventListener("mousedown", function () {
                var input = this.parentNode.querySelector(".monk-form-select-wrap .monk-form-input");
                var disabled = input.getAttribute("disabled");
                var select = input.parentNode.parentNode.querySelector(".monk-form-select");
                if (disabled != "disabled") {
                    if (select.classList.contains("monk-none")) {
                        setTimeout(function () {
                            input.focus();
                        }, 100);
                    } else {
                        input.blur();
                    }
                }
            });
            ;
        });
        // 下拉绑定事件
        var selects = document.querySelectorAll(".monk-select");
        Array.prototype.forEach.call(selects, function (select, i) {
            select.addEventListener("change", function () {
                var option = this.querySelectorAll("option")[select.selectedIndex];
                var selectValue = option.value;
                var selectText = option.textContent;
                var option = this.parentNode.querySelector(".monk-form-option[data-value='" + selectValue + "']");
                var input = this.parentNode.parentNode.querySelector(".monk-form-select-wrap .monk-form-input")
                var lastWrap = this.parentNode.querySelector(".monk-form-option[selected='selected']");
                if (lastWrap !== this && lastWrap) {
                    lastWrap.removeAttribute("selected");
                }
                option.setAttribute("selected", "selected");
                input.value = selectText;
                this.parentNode.scrollTop = option.offsetTop;
            });
            ;
        });
    }();
    // 初始化时间
    exports.timeInit = function () {
        function createTimeTags() {
            var html = '<div class="monk-form-time monk-none">';
            html += '<div class="monk-form-time-title">';
            html += '<span>小时</span><span>分钟</span><span>秒钟</span>';
            html += '</div>';
            html += '<div class="monk-form-time-list">';
            html += '<div class="monk-form-time-item">';
            // 生成小时
            for (var i = 0; i < 24; i++) {
                if (i < 10) {
                    html += '<span class="monk-form-time-hour" data-value="0' + i + '">0' + i + '</span>';
                } else {
                    html += '<span class="monk-form-time-hour" data-value="' + i + '">' + i + '</span>';
                }
            }
            html += '</div>';
            html += '<div class="monk-form-time-item">';
            // 生成分钟
            for (var i = 0; i < 60; i++) {
                if (i < 10) {
                    html += '<span class="monk-form-time-minute" data-value="0' + i + '">0' + i + '</span>';
                } else {
                    html += '<span class="monk-form-time-minute" data-value="' + i + '">' + i + '</span>';
                }
            }
            html += '</div>';
            html += '<div class="monk-form-time-item">';
            // 生成秒
            for (var i = 0; i < 60; i++) {
                if (i < 10) {
                    html += '<span class="monk-form-time-second" data-value="0' + i + '">0' + i + '</span>';
                } else {
                    html += '<span class="monk-form-time-second" data-value="' + i + '">' + i + '</span>';
                }
            }
            html += '</div>';
            html += '</div>';
            html += '<div class="monk-form-time-btn"><span class="monk-time-current">当前时间</span><span class="monk-time-close">关闭</span></div>';
            html += '</div>';
            return html;
        }
        var wraps = document.querySelectorAll(".monk-form-time-wrap");
        Array.prototype.forEach.call(wraps, function (wrap, i) {
            var input = wrap.querySelector(".monk-form-input");
            var value = input.value;
            if (!(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/.test(value))) {
                input.value = "00:00:00";
            }
            // 生成HTML代码
            wrap.insertAdjacentHTML("afterend", createTimeTags());
            // 设置宽度
            var timeWrap = wrap.parentNode.querySelector(".monk-form-time");
            timeWrap.style.width = wrap.offsetWidth + "px";
        });
        // 输入框绑定事件
        var inputs = document.querySelectorAll(".monk-form-time-wrap .monk-form-input");
        Array.prototype.forEach.call(inputs, function (input, i) {
            // 绑定焦点事件
            input.addEventListener("focus", function () {
                var parent = this.parentNode;
                var timebox = parent.parentNode.querySelector(".monk-form-time");
                timebox.classList.remove("monk-none");
                // 设置滚动
                var value = this.value;
                var timeArr = value.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
                var time = timeArr[0];
                var hour = timeArr[1];
                var minute = timeArr[3];
                var second = timeArr[4];
                var hourItem = this.parentNode.parentNode.querySelector(".monk-form-time-item:nth-child(1)");
                var minuteItem = this.parentNode.parentNode.querySelector(".monk-form-time-item:nth-child(2)");
                var secondItem = this.parentNode.parentNode.querySelector(".monk-form-time-item:nth-child(3)");
                var hourOption = hourItem.querySelector(".monk-form-time-hour[data-value='" + hour + "']");
                var minuteOption = minuteItem.querySelector(".monk-form-time-minute[data-value='" + minute + "']");
                var secondOption = secondItem.querySelector(".monk-form-time-second[data-value='" + second + "']");
                var hourSelect = hourItem.querySelector(".monk-form-time-hour.selected");
                var minuteSelect = minuteItem.querySelector(".monk-form-time-minute.selected");
                var secondSelect = secondItem.querySelector(".monk-form-time-second.selected");
                hourSelect ? hourSelect.classList.remove("selected") : "";
                minuteSelect ? minuteSelect.classList.remove("selected") : "";
                secondSelect ? secondSelect.classList.remove("selected") : "";
                hourItem.scrollTop = hourOption.offsetTop;
                minuteItem.scrollTop = minuteOption.offsetTop;
                secondItem.scrollTop = secondOption.offsetTop;
                hourOption.classList.add("selected");
                minuteOption.classList.add("selected");
                secondOption.classList.add("selected");
            });
            ; input.addEventListener("blur", function () {
                var inputValue = this.value;
                if (!(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/.test(inputValue))) {
                    var hourOpiton = this.parentNode.parentNode.querySelector(".monk-form-time-item:nth-child(1) .monk-form-time-hour.selected");
                    var minuteOpiton = this.parentNode.parentNode.querySelector(".monk-form-time-item:nth-child(2) .monk-form-time-minute.selected");
                    var secondOpiton = this.parentNode.parentNode.querySelector(".monk-form-time-item:nth-child(3) .monk-form-time-second.selected");
                    var timeArr = [];
                    timeArr[0] = hourOpiton ? hourOpiton.getAttribute("data-value") : "00";
                    timeArr[1] = minuteOpiton ? minuteOpiton.getAttribute("data-value") : "00";
                    timeArr[2] = secondOpiton ? secondOpiton.getAttribute("data-value") : "00";
                    this.value = timeArr.join(":");
                }
            });
        });
        function setTime(timeArr, that, typeIndex) {
            var time = that.textContent.trim();
            var lastWrap = that.parentNode.querySelector(".monk-form-time-" + typeIndex[1] + ".selected");
            if (lastWrap !== that && lastWrap) {
                lastWrap.classList.remove("selected");
            }
            timeArr[typeIndex[0]] = time;
        }
        // 小时选择
        var times = document.querySelectorAll(".monk-form-time-hour,.monk-form-time-minute ,.monk-form-time-second");
        Array.prototype.forEach.call(times, function (time, i) {
            time.addEventListener("click", function () {
                var input = this.parentNode.parentNode.parentNode.parentNode.querySelector(".monk-form-time-wrap .monk-form-input");
                var readonly = input.getAttribute("readonly");
                if (!readonly) {
                    var inputValue = input.value;
                    if (!(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/.test(inputValue))) {
                        input.value = "00:00:00";
                    }
                    var timeArr = inputValue.split(":");
                    if (timeArr.length == 0) {
                        timeArr = ["00", "00", "00"];
                    } else if (timeArr.length == 1) {
                        timeArr.push("00");
                        timeArr.push("00");
                    } else if (timeArr.length == 2) {
                        timeArr.push("00");
                    }
                    if (this.classList.contains("monk-form-time-hour")) {
                        setTime(timeArr, this, [0, "hour"]);
                    } else if (this.classList.contains("monk-form-time-minute")) {
                        setTime(timeArr, this, [1, "minute"]);
                    } else if (this.classList.contains("monk-form-time-second")) {
                        setTime(timeArr, this, [2, "second"]);
                    }
                    input.value = timeArr.join(":");
                    this.classList.add("selected");
                }
            });
        });
        // 点击按钮
        var timeBtns = document.querySelectorAll(".monk-form-time-btn span");
        Array.prototype.forEach.call(timeBtns, function (btn, i) {
            btn.addEventListener("click", function () {
                var input = this.parentNode.parentNode.parentNode.querySelector(".monk-form-time-wrap .monk-form-input");
                if (this.classList.contains("monk-time-current")) {
                    var readonly = input.getAttribute("readonly");
                    if (!readonly) {
                        var date = new Date();
                        var hours = date.getHours();
                        if (hours < 10) {
                            hours = "0" + hours;
                        }
                        var minute = date.getMinutes();
                        if (minute < 10) {
                            minute = "0" + minute;
                        }
                        var second = date.getSeconds();
                        if (second < 10) {
                            second = "0" + second;
                        }
                        var value = hours + ":" + minute + ":" + second;
                        input.value = value;
                        this.parentNode.querySelector(".monk-time-close").click();
                    }
                } else if (this.classList.contains("monk-time-close")) {
                    this.parentNode.parentNode.classList.add("monk-none");
                    input.blur();
                    input.parentNode.classList.remove("focus");
                }
            });
        });
        // 时间图标绑定事件
        var timeIcons = document.querySelectorAll(".icon-monk-time");
        Array.prototype.forEach.call(timeIcons, function (icon, i) {
            icon.addEventListener("mousedown", function () {
                var input = this.parentNode.querySelector(".monk-form-time-wrap .monk-form-input");
                var disabled = input.getAttribute("disabled");
                var timebox = input.parentNode.parentNode.querySelector(".monk-form-time");
                if (disabled != "disabled") {
                    if (timebox.classList.contains("monk-none")) {
                        setTimeout(function () {
                            input.focus();
                        }, 100);
                    } else {
                        timebox.classList.add("monk-none");
                        input.blur();
                        input.parentNode.classList.remove("focus");
                    }
                }
            });
            ;
        });
    }();
    // 初始化文件选择
    exports.fileInit = function () {
        var files = document.querySelectorAll(".monk-file");
        Array.prototype.forEach.call(files, function (file, i) {
            file.addEventListener("change", function () {
                var value = this.value;
                this.parentNode.parentNode.querySelector(".monk-form-input").value = value;
            });
        });
    }();
    // 初始化代码显示
    exports.codeInit = function () {
        var codes = document.querySelectorAll(".monk-code");
        Array.prototype.forEach.call(codes, function (code, i) {
            var language = code.getAttribute("data-language");
            var html = code.innerHTML;
            if (language.toLowerCase() == "html" || language.toLowerCase() == "xml") {
                html = html.replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;')
            }
            code.innerHTML = '<ol class="monk-code-area"><li><code>' + html.replace(/[\r\t\n]+/g, '</code></li><li><code>') + '</code></li></ol><span class="monk-code-language">' + language + '</span>';
        });
    }();
    // 模板引擎
    exports.tppl_flag = ["<%", "%>"];
    exports.tppl = function (tpl, data) {
        var that = this;
        var fn = function (d) {
            var i, k = [], v = [];
            for (i in d) {
                k.push(i);
                v.push(d[i]);
            }
            ; return (new Function(k, fn.$)).apply(d, v);
        }
        ;
        if (!fn.$) {
            var tpls = tpl.split(that.tppl_flag[0]);
            fn.$ = "var $=''";
            for (var t = 0; t < tpls.length; t++) {
                var p = tpls[t].split(that.tppl_flag[1]);
                if (t != 0) {
                    fn.$ += '=' == p[0].charAt(0) ? "+(" + p[0].substr(1) + ")" : ";" + p[0].replace(/\r\n/g, '') + "$=$"
                }
                fn.$ += "+'" + p[p.length - 1].replace(/\'/g, "\\'").replace(/\r\n/g, '\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\n') + "'";
            }
            fn.$ += ";return $;";
        }
        return data ? fn(data) : fn;
    }
    ;
    // 重置表单
    exports.resetForm = function () {
        // 解决reset点击后，关闭按钮问题
        var reset = document.querySelector("input[type='reset']");
        function getParentsForm(el) {
            var form;
            function callee(el) {
                if (el) {
                    if (el.parentNode.tagName.toLowerCase() == "form") {
                        form = el.parentNode;
                        return;
                    } else {
                        arguments.callee(el.parentNode);
                    }
                }
            }
            callee(el);
            return form;
        }
        ;// 重置复选框，单选框，切换框
        function resetCheckboxRadio(form, type) {
            var checkboxs = form.querySelectorAll(".monk-" + type);
            Array.prototype.forEach.call(checkboxs, function (checkbox, i) {
                var name = checkbox.getAttribute("name");
                var value = checkbox.value;
                var parent = checkbox.parentNode;
                var wrap = parent.querySelector(".monk-form-" + type + "-wrap[data-name='" + name + "'][data-value='" + value + "']");
                if (checkbox.checked == true) {
                    wrap.setAttribute("checked", "checked");
                } else {
                    wrap.removeAttribute("checked");
                }
            });
        }
        ;
        if (reset) {
            reset.addEventListener("click", function () {
                var form = getParentsForm(this);
                if (form) {
                    form.reset();
                    // 重置输入框
                    var inputs = form.querySelectorAll(".monk-form-input,.monk-form-textarea");
                    Array.prototype.forEach.call(inputs, function (input, i) {
                        var parent = input.parentNode;
                        var value = input.value.trim();
                        var clearBtn = parent.querySelector(".monk-clear-input");
                        if (clearBtn) {
                            if (value != "") {
                                clearBtn.style.cssText = "visibility:visible;";
                                exports.setRequireIconOffset(parent);
                            } else {
                                clearBtn.style.cssText = "visibility:hidden;";
                                exports.setRequireIconOffset(parent, true);
                            }
                        }
                    });
                    // 重置radio，checkbox，switch
                    resetCheckboxRadio(form, "checkbox");
                    resetCheckboxRadio(form, "switch");
                    resetCheckboxRadio(form, "radio");
                    // 重置时间（无需重置）
                    // 重置下拉
                    var selects = form.querySelectorAll(".monk-select");
                    Array.prototype.forEach.call(selects, function (select, i) {
                        var option = select.querySelectorAll("option")[select.selectedIndex];
                        var selectValue = option.value;
                        var selectText = option.textContent;
                        var lastSelectOption = select.parentNode.querySelector(".monk-form-option[selected='selected']");
                        lastSelectOption ? lastSelectOption.removeAttribute("selected") : "";
                        select.parentNode.querySelector(".monk-form-option[data-value='" + selectValue + "']").setAttribute("selected", "selected");
                        select.parentNode.parentNode.querySelector(".monk-form-select-wrap .monk-form-input").setAttribute("value", selectText);
                    });
                }
            });
        }
    }();
    window.onresize = function () {
        var inputs = document.querySelectorAll(".monk-form-input,.monk-form-textarea");
        Array.prototype.forEach.call(inputs, function (input, i) {
            input.style.width = "";
            // 自适应
            var areaWidth = input.parentNode.parentNode.offsetWidth;
            var parentWidth = input.parentNode.offsetWidth;
            if (parentWidth >= areaWidth) {
                var width = 0;
                Array.prototype.filter.call(input.parentNode.children, function (child) {
                    if (child !== input) {
                        width += child.offsetWidth;
                    }
                });
                input.style.width = areaWidth - width - 2 + "px";
            }
        });
    };
});
