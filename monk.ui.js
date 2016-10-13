/*!
 * monk.ui.js
 * version: 0.1.0
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
    exports.v = "0.1.0";

    // 文本框初始化
    exports.inputInit = function () {
        // 文本框
        var _input = $(".monk-form-input,.monk-form-textarea");
        _input.each(function () {
            if ($(this).siblings(".monk-iconfont.icon-monk-required").length > 0) {
                $(this).siblings(".monk-iconfont.icon-monk-required").eq(0).css("right", "-40px");
            }
        });

        _input.on({
            focus: function () {
                $(this).parent(".monk-form-wrap").addClass("focus");
                // 选中文本
                $(this).select();
            },
            blur: function () {
                if (!$(this).parent(".monk-form-wrap").hasClass("monk-form-time-wrap")) {
                    $(this).parent(".monk-form-wrap").removeClass("focus");
                }
            },
            keyup: function () {
                var clearInput = $(this).siblings(".monk-clear-input");
                if (clearInput) {
                    if ($.trim($(this).val()) !== "") {
                        clearInput.css({ "visibility": "visible" });
                        if ($(this).siblings(".monk-iconfont.icon-monk-required").length > 0) {
                            $(this).siblings(".monk-iconfont.icon-monk-required").eq(0).css("right", "0");
                        }
                    }
                    else {
                        clearInput.css({ "visibility": "hidden" });
                        if ($(this).siblings(".monk-iconfont.icon-monk-required").length > 0) {
                            $(this).siblings(".monk-iconfont.icon-monk-required").eq(0).css("right", "-40px");
                        }
                    }
                }
            }
        });

        $(".monk-clear-input").on({
            click: function () {
                $(this).css({ "visibility": "hidden" });
                $(this).siblings(".monk-form-input,.monk-form-textarea").each(function () {
                    var readonly = $(this).attr("readonly");
                    var disabled = $(this).attr("disabled");
                    if (readonly != "readonly" && disabled != "disabled") {
                        $(this).val("");
                    }
                });
                if ($(this).siblings(".monk-iconfont.icon-monk-required").length > 0) {
                    $(this).siblings(".monk-iconfont.icon-monk-required").eq(0).css("right", "-40px");
                }
            }
        });
    };

    // 复选框初始化
    exports.checkboxInit = function () {
        $(".monk-form-checkbox-list").each(function () {
            var that = $(this);
            var html = "";
            $(this).children(".monk-checkbox").each(function () {
                var value = $(this).val();
                var text = $(this).attr("text");
                var checked = $(this).attr("checked");
                var readonly = $(this).attr("readonly");
                var disabled = $(this).attr("disabled");
                var name = $(this).attr("name");


                var valueHtml = value ? 'data-value="' + value + '"' : 'data-value=""';
                var nameHtml = name ? 'data-name="' + name + '" ' : '';
                var textHtml = text ? text : "value";
                var checkedHtml = checked ? 'checked="checked"' : '';
                var readonlyHtml = readonly ? 'readonly="readonly"' : '';
                var disabledHtml = disabled ? 'disabled="disabled"' : '';

                html += '<div class="monk-form-wrap monk-form-checkbox-wrap" ' + nameHtml + ' ' + checkedHtml + ' ' + readonlyHtml + ' ' + disabledHtml + ' ' + valueHtml + '>';
                html += '<span class="monk-form-checkbox">' + textHtml + '</span>';
                html += '<span class="monk-iconfont border-left icon-monk-dagou"></span>';
                html += '</div>\r\n';
            });

            that.prepend(html);
        });

        // 复选框
        var _checkbox = $(".monk-form-checkbox-wrap");
        _checkbox.on({
            click: function () {
                var readonly = $(this).attr("readonly");
                var disabled = $(this).attr("disabled");
                var name = $(this).attr("data-name");
                var value = $(this).attr("data-value");

                if (readonly != "readonly" && disabled != "disabled") {
                    var checkbox = $(this).siblings(".monk-checkbox[name='" + name + "'][value='" + value + "']").eq(0);
                    if ($(this).attr("checked") == "checked") {
                        $(this).removeAttr("checked");
                        checkbox.prop("checked", false);
                    }
                    else {
                        $(this).attr("checked", "checked");
                        checkbox.prop("checked", true);
                    }
                }
            }
        });

        // 绑定状态改变事件
        $(".monk-checkbox").on({
            change: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-checkbox-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                if ($(this).is(":checked")) {
                    niceObj.attr("checked", "checked");
                }
                else {
                    niceObj.removeAttr("checked");
                }
            },
            click: function () {
                var readonly = $(this).attr("readonly");
                if (readonly) {
                    return false;
                }
            },
            focus: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-checkbox-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                niceObj.addClass("focus");
            },
            blur: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-checkbox-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                niceObj.removeClass("focus");
            }
        });
    };


    // 切换初始化
    exports.switchInit = function () {
        $(".monk-form-switch-list").each(function () {
            var that = $(this);
            var html = "";
            $(this).children(".monk-switch").each(function () {
                var text = $(this).attr("text");
                var value = $(this).val();
                var checked = $(this).attr("checked");
                var readonly = $(this).attr("readonly");
                var disabled = $(this).attr("disabled");
                var name = $(this).attr("name");


                var valueHtml = value ? 'data-value="' + value + '"' : 'data-value=""';
                var nameHtml = name ? 'data-name="' + name + '" ' : '';
                var checkedHtml = checked ? 'checked="checked"' : '';
                var readonlyHtml = readonly ? 'readonly="readonly"' : '';
                var disabledHtml = disabled ? 'disabled="disabled"' : '';

                html += '<div class="monk-form-wrap monk-form-switch-wrap" ' + nameHtml + ' ' + checkedHtml + ' ' + readonlyHtml + ' ' + disabledHtml + ' ' + valueHtml + '>';
                html += '<span class="monk-switch-text">' + text + '</span>';
                html += '<span class="monk-iconfont border-right icon-monk-dacha"></span>';
                html += '</div>\r\n';
            });

            that.prepend(html);
        });

        // 切换框
        var _switch = $(".monk-form-switch-wrap");
        _switch.on({
            click: function () {
                var readonly = $(this).attr("readonly");
                var disabled = $(this).attr("disabled");
                var name = $(this).attr("data-name");
                var value = $(this).attr("data-value");
                if (readonly != "readonly" && disabled != "disabled") {
                    var switchbox = $(this).siblings(".monk-switch[name='" + name + "'][value='" + value + "']").eq(0);
                    if ($(this).attr("checked") == "checked") {
                        $(this).removeAttr("checked");
                        switchbox.prop("checked", false);
                    }
                    else {
                        $(this).attr("checked", "checked");
                        switchbox.prop("checked", true);
                    }
                }
            }
        });

        // 绑定状态改变事件
        $(".monk-switch").on({
            change: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-switch-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                if ($(this).is(":checked")) {
                    niceObj.attr("checked", "checked");
                }
                else {
                    niceObj.removeAttr("checked");
                }
            },
            click: function () {
                var readonly = $(this).attr("readonly");
                if (readonly) {
                    return false;
                }
            },
            focus: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-switch-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                niceObj.addClass("focus");
            },
            blur: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-switch-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                niceObj.removeClass("focus");
            }
        });
    };

    // 单选框初始化
    exports.radioInit = function () {
        $(".monk-form-radio-list").each(function () {
            var that = $(this);
            var html = "";
            $(this).children(".monk-radio").each(function () {
                var value = $(this).val();
                var text = $(this).attr("text");
                var checked = $(this).attr("checked");
                var readonly = $(this).attr("readonly");
                var disabled = $(this).attr("disabled");
                var name = $(this).attr("name");


                var valueHtml = value ? 'data-value="' + value + '"' : 'data-value=""';
                var nameHtml = name ? 'data-name="' + name + '" ' : '';
                var textHtml = text ? text : "value";
                var checkedHtml = checked ? 'checked="checked"' : '';
                var readonlyHtml = readonly ? 'readonly="readonly"' : '';
                var disabledHtml = disabled ? 'disabled="disabled"' : '';

                html += '<div class="monk-form-wrap monk-form-radio-wrap" ' + nameHtml + ' ' + checkedHtml + ' ' + readonlyHtml + ' ' + disabledHtml + ' ' + valueHtml + '>';
                html += '<span class="monk-iconfont icon-monk-radio"></span>';
                html += '<span class="monk-form-radio">' + textHtml + '</span>';
                html += '</div>\r\n';
            });

            that.prepend(html);
        });

        // 单选框
        var _radio = $(".monk-form-radio-wrap");
        _radio.on({
            click: function () {
                var readonly = $(this).attr("readonly");
                var disabled = $(this).attr("disabled");
                var name = $(this).attr("data-name");
                var value = $(this).attr("data-value");
                if (readonly != "readonly" && disabled != "disabled") {
                    var radio = $(this).siblings(".monk-radio[name='" + name + "'][value='" + value + "']").eq(0);
                    $(this).attr("checked", "checked").siblings(".monk-form-radio-wrap[data-name='" + name + "']").removeAttr("checked");
                    radio.prop("checked", true);
                }
            }
        });

        // 绑定状态改变事件
        $(".monk-radio").on({
            click: function () {
                var readonly = $(this).attr("readonly");
                if (readonly) {
                    return false;
                }
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-radio-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                if ($(this).is(":checked")) {
                    niceObj.attr("checked", "checked").siblings(".monk-form-radio-wrap[data-name='" + name + "']").removeAttr("checked");;
                }
            },
            focus: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-radio-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                niceObj.addClass("focus");
            },
            blur: function () {
                var name = $(this).attr("name");
                var value = $(this).attr("value");
                var niceObj = $(this).siblings(".monk-form-radio-wrap[data-name='" + name + "'][data-value='" + value + "']").eq(0);
                niceObj.removeClass("focus");
            }
        });
    };

    // 初始化下拉
    exports.selectInit = function () {
        $(".monk-form-select").each(function () {
            var that = $(this);
            var html = "";
            that.find(".monk-select").children().each(function () {
                if ($(this).is("option")) {
                    var text = $(this).text();
                    var value = $(this).attr("value");
                    html += '<div class="monk-form-option" data-value="' + value + '">' + text + '</div>';
                }
                else if ($(this).is("optgroup")) {
                    var label = $(this).attr("label");
                    html += '<div class="monk-form-optgroup" data-value="' + value + '">' + label + '</div>';
                }
            });
            that.prepend(html);

            // 设置选中的option
            var select = that.children(".monk-select");
            var selectedOption = select.children("option:selected");
            var value = select.val();
            var text = selectedOption.text();
            var niceOption = $(this).children(".monk-form-option[data-value='" + value + "']:contains(" + text + ")").eq(0);
            niceOption.attr("selected", "selected").siblings(".monk-form-option").removeAttr("selected");

            var input = select.parent().prev(".monk-form-select-wrap").children(".monk-form-input");
            input.val(text);
        });

        // 搜索下拉
        function _selectInputSearch(that) {
            var value = $.trim(that.val());
            var select = that.parent(".monk-form-select-wrap").next(".monk-form-select");
            var option = select.children(".monk-form-option:contains(" + value + ")");
            if (option && option.eq(0)) {
                var scrollTop = option.eq(0).position().top;
                select.animate({
                    scrollTop: select.scrollTop() + scrollTop
                }, 0);
            }
        }

        // 下拉框
        var _selectInput = $(".monk-form-select-wrap .monk-form-input");
        var _selectOption = $(".monk-form-option");
        _selectInput.on({
            focus: function () {
                var inputWrap = $(this).parent(".monk-form-select-wrap");
                var readonly = $(this).attr("readonly");
                if (readonly != "readonly") {
                    inputWrap.next(".monk-form-select").removeClass("monk-none");
                }

                _selectInputSearch($(this));
            },
            blur: function () {
                var select = $(this).parent(".monk-form-select-wrap").next(".monk-form-select");
                var option = select.children(".monk-form-option[selected='selected']");
                $(this).val(option.text());

                $(this).parent(".monk-form-select-wrap").next(".monk-form-select").addClass("monk-none");
            },
            keyup: function () {
                _selectInputSearch($(this));
            }
        });
        _selectOption.on({
            mousedown: function () {
                var value = $(this).attr("data-value");
                var text = $(this).text();
                var select = $(this).parent(".monk-form-select");
                var input = select.prev(".monk-form-select-wrap").children(".monk-form-input");
                var scrollTop = $(this).position().top;

                $(this).attr("selected", "selected").siblings(".monk-form-option").removeAttr("selected");
                input.val(text);
                select.animate({
                    scrollTop: select.scrollTop() + scrollTop
                }, 0);

                var realySelect = select.children(".monk-select");
                realySelect.val(value);
            }
        });

        $(".monk-select").on({
            change: function () {
                var value = $(this).val();
                var text = $(this).children("option:selected").text();

                var parentSelect = $(this).parent(".monk-form-select");
                var input = parentSelect.prev(".monk-form-select-wrap").children(".monk-form-input");
                var option = $(this).siblings(".monk-form-option[data-value='" + value + "']:contains(" + text + ")").eq(0);
                option.attr("selected", "selected").siblings(".monk-form-option").removeAttr("selected");
                var scrollTop = option.position().top;
                parentSelect.animate({
                    scrollTop: parentSelect.scrollTop() + scrollTop
                }, 0);
                input.val(text);
            },
            focus: function () {
                var parentSelect = $(this).parent(".monk-form-select");
                var input = parentSelect.prev(".monk-form-select-wrap").children(".monk-form-input");
                input.focus();
            }
        });
    };


    // 初始化时间
    exports.timeInit = function () {
        function createTimeTags() {
            var html = '<div class="monk-form-time monk-none">';
            html += '<div class="monk-form-time-title">';
            html += '<span>小时</span>';
            html += '<span>分钟</span>';
            html += '<span>秒钟</span>';
            html += '</div>';
            html += '<div class="monk-form-time-list">';
            html += '<div class="monk-form-time-item">';
            // 生成小时
            for (var i = 0; i < 24; i++) {
                if (i < 10) {
                    html += '<span class="monk-form-time-hour">0' + i + '</span>';
                }
                else {
                    html += '<span class="monk-form-time-hour">' + i + '</span>';
                }
            }
            html += '</div>';
            html += '<div class="monk-form-time-item">';
            // 生成分钟
            for (var i = 0; i < 60; i++) {
                if (i < 10) {
                    html += '<span class="monk-form-time-minute">0' + i + '</span>';
                }
                else {
                    html += '<span class="monk-form-time-minute">' + i + '</span>';
                }
            }
            html += '</div>';
            html += '<div class="monk-form-time-item">';
            // 生成秒
            for (var i = 0; i < 60; i++) {
                if (i < 10) {
                    html += '<span class="monk-form-time-second">0' + i + '</span>';
                }
                else {
                    html += '<span class="monk-form-time-second">' + i + '</span>';
                }
            }
            html += '</div>';
            html += '</div>';
            html += '<div class="monk-form-time-btn"><span>当前时间</span><span>关闭</span></div>';
            html += '</div>';
            return html;
        }

        // 开始生成
        $(".monk-form-time-wrap").each(function () {
            var input = $(this).children(".monk-form-input");
            var value = input.val();
            if (!(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/.test(value))) {
                input.val("00:00:00");
            }
            $(this).after(createTimeTags());
        });

        // 时间选择
        var _timeInput = $(".monk-form-time-wrap .monk-form-input");
        var _timeCurrentBtn = $(".monk-form-time-btn span:eq(0)");
        var _timeBtn = $(".monk-form-time-btn span:eq(1)");
        var _timeHour = $(".monk-form-time-hour");
        var _timeMinute = $(".monk-form-time-minute");
        var _timeSecond = $(".monk-form-time-second");
        _timeInput.on({
            focus: function () {
                var timeObj = $(this).parent(".monk-form-time-wrap").next(".monk-form-time");
                timeObj.removeClass("monk-none");
                var value = $(this).val();
                var timeArr = value.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
                var time = timeArr[0];
                var hour = timeArr[1];
                var minute = timeArr[3];
                var second = timeArr[4];
                // 设置小时选中
                var hourObj = timeObj.find(".monk-form-time-item .monk-form-time-hour:contains(" + hour + ")");
                hourObj.addClass("selected").siblings(".monk-form-time-hour").removeClass("selected");
                hourObj.parent().animate({
                    scrollTop: hourObj.parent().scrollTop() + hourObj.position().top
                }, 0);
                // 设置分钟选中
                var minuteObj = timeObj.find(".monk-form-time-item .monk-form-time-minute:contains(" + minute + ")");
                minuteObj.addClass("selected").siblings(".monk-form-time-minute").removeClass("selected");
                minuteObj.parent().animate({
                    scrollTop: minuteObj.parent().scrollTop() + minuteObj.position().top
                }, 0);
                // 设置秒钟选中
                var secondObj = timeObj.find(".monk-form-time-item .monk-form-time-second:contains(" + second + ")");
                secondObj.addClass("selected").siblings(".monk-form-time-second").removeClass("selected");
                secondObj.parent().animate({
                    scrollTop: secondObj.parent().scrollTop() + secondObj.position().top
                }, 0);
            }
        });
        // 当前时间
        _timeCurrentBtn.on({
            click: function () {
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

                var time = $(this).parent(".monk-form-time-btn").parent(".monk-form-time");
                var inputWrap = time.prev(".monk-form-time-wrap");
                var input = inputWrap.children(".monk-form-input");
                input.val(value);

                _timeBtn.click();
            }
        });
        // 关闭
        _timeBtn.on({
            click: function () {
                var time = $(this).parent(".monk-form-time-btn").parent(".monk-form-time");
                var inputWrap = time.prev(".monk-form-time-wrap");
                var input = inputWrap.children(".monk-form-input");

                time.addClass("monk-none");
                inputWrap.removeClass("focus");
                input.blur();
            }
        });

        function selectTime(that, type) {
            var index = 0;
            switch (type) {
                case "hour":
                    index = 0;
                    break;
                case "minute":
                    index = 1;
                    break;
                case "second":
                    index = 2;
                    break;
            }
            var timeItem = that.parent();
            var value = $.trim(that.text());
            var timeParent = that.parents(".monk-form-time");
            var timeWrap = timeParent.prev(".monk-form-time-wrap");
            var timeInput = timeWrap.children(".monk-form-input");
            var inputValue = timeInput.val();

            if (!(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/.test(inputValue))) {
                timeInput.val("00:00:00");
            }

            var timeArr = inputValue.split(":");
            if (timeArr.length == 0) {
                timeArr = ["00", "00", "00"];
            }
            else if (timeArr.length == 1) {
                timeArr.push("00");
                timeArr.push("00");
            }
            else if (timeArr.length == 2) {
                timeArr.push("00");
            }
            else {
            }

            that.addClass("selected").siblings(".monk-form-time-" + type).removeClass("selected");
            timeArr[index] = value;
            timeInput.val(timeArr.join(":"));
        }

        _timeHour.on({
            click: function () {
                selectTime($(this), "hour");
            }
        });
        _timeMinute.on({
            click: function () {
                selectTime($(this), "minute");
            }
        });
        _timeSecond.on({
            click: function () {
                selectTime($(this), "second");
            }
        });
    };

    // 文件选择
    exports.fileInit = function () {
        $(".monk-file").on({
            change: function () {
                var value = $(this).val();
                var input = $(this).parent(".monk-form-image-wrap").prev(".monk-form-wrap").children(".monk-form-input");
                input.val(value);
            }
        });
    };


    // 初始化
    exports.init = function () {
        exports.inputInit();
        exports.checkboxInit();
        exports.switchInit();
        exports.radioInit();
        exports.selectInit();
        exports.timeInit();
        exports.fileInit();
    };

    exports.init();
});